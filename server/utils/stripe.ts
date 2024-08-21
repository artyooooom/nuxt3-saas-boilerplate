import Stripe from 'stripe';
import crypto from 'crypto'

class StripeProvider {
  stripe: any
  secretApiKey: string;
  secretWebhook: string;
  host: string;
  storeId: number;

  constructor() {
    this.secretApiKey = process.env.STRIPE_API_SECRET_KEY!
    this.host = process.env.STRIPE_HOST!
    this.secretWebhook = process.env.STRIPE_WEBHOOK_SECRET!
    // get store id - https://app.Stripe.com/settings/stores
    this.storeId = Number(process.env.Stripe_STORE_ID)

    this.init()
  }

  async init() {
    try {
      this.stripe = new Stripe(this.secretApiKey);
      await this.setCustomerCreationRequiredForPaymentLinks()

    } catch (e) {
      console.log('Stripe -> init(), Error occured: ', e)
    }

  }

  async getProduct(productId: string) {
    try {


      const product = await this.stripe.products.retrieve(productId);

      return product

    } catch (e) {
      throw e
    }
  }

  // accepts two params - raw body & header 'X-Signature'
  async signRequest(raw: string, sign: string) {
    try {
      const event = this.stripe.webhooks.constructEvent(raw, sign, this.secretWebhook);

      return event
    } catch (e) {
      throw e
    }
  }

  async getCustomer(customerId: number) {
    try {

      const customer = await this.stripe.customers.retrieve(customerId);

      return customer

    } catch (e) {
      throw e
    }
  }

  async createWebhook() {
    try {

      const webhookEndpoint = await this.stripe.webhookEndpoints.create({
        enabled_events: ['checkout.session.completed', 'checkout.session.expired', 'invoice.paid', 'invoice.payment_failed', 'customer.subscription.deleted'],
        url: this.host + '/api/webhook',
      })

      return webhookEndpoint

    } catch (e) {
      throw e
    }
  }

  async listWebhooks() {
    try {

      const webhookEndpoints = await this.stripe.webhookEndpoints.list();

      return webhookEndpoints

    } catch (e) {
      throw e
    }
  }

  // updates all paymentLinks, sets customer_creation as 'required'
  async setCustomerCreationRequiredForPaymentLinks() {
    try {

      const paymentLinks = await this.stripe.paymentLinks.list();

      for(let { id, subscription_data } of paymentLinks.data) {
        
        if(subscription_data) continue;
        
        await this.stripe.paymentLinks.update(
          id,
          {
            customer_creation: 'always'
          }
        );

      }
      
      return true

    } catch (e) {
      throw e
    }
  }

  async getProductIdOfPaymentLink(paymentLink: string) {
    try {

      const lineItems = await this.stripe.paymentLinks.listLineItems(paymentLink);
      
      return lineItems.data[0].price.product

    } catch (e) {
      throw e
    }
  }
}

export const stripe = new StripeProvider()