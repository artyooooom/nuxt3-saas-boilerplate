import {
  getAuthenticatedUser,
  lemonSqueezySetup,
  getProduct,
  getCustomer
} from "@lemonsqueezy/lemonsqueezy.js";

import crypto from 'crypto'

class LemonSqueezy {
  apiKey: string | undefined;
  signingSecret: string;
  storeId: number;
  constructor() {
    this.apiKey = process.env.LEMONSQUEEZY_API_KEY
    this.signingSecret = process.env.LEMONSQUEEZY_SECRET!
    // get store id - https://app.lemonsqueezy.com/settings/stores
    this.storeId = Number(process.env.LEMONSQUEEZY_STORE_ID)

    this.init()
  }

  async init() {
    try {

      lemonSqueezySetup({
        apiKey: this.apiKey,
        onError: (error: any) => console.error("Error!", error),
      });

      const { data, error } = await getAuthenticatedUser();

      if (error) {
        throw error.message;
      }

    } catch (e) {
      console.log('LemonSqueezy -> init(), Error occured: ', e)
    }

  }

  async getBuyLink(productId: string) {
    try {

      const { statusCode, error, data } = await getProduct(productId);

      // checking if errors
      if (error) throw error;
      // checking if status code is not 2xx
      if (!(statusCode >= 200 && statusCode <= 299)) throw 'Response to LemonSqueezy failed with status code' + statusCode;

      return data.data.attributes.buy_now_url

    } catch (e) {
      throw e
    }
  }

  async getProduct(productId: string) { 
    try {

      const { statusCode, error, data } = await getProduct(productId);

      // checking if errors
      if (error) throw error;
      // checking if status code is not 2xx
      if (!(statusCode >= 200 && statusCode <= 299)) throw 'Response to LemonSqueezy failed with status code' + statusCode;

      return data.data.attributes

    } catch (e) {
      throw e
    }
  }

  // accepts two params - raw body & header 'X-Signature'
  async signRequest(raw: string, sign: string) {
    try {
      const secret = this.signingSecret;
      const hmac = crypto.createHmac('sha256', secret);
      const digest = Buffer.from(hmac.update(raw).digest('hex'), 'utf8');
      const signature = Buffer.from(sign || '', 'utf8');

      if (!crypto.timingSafeEqual(digest, signature)) {
        throw new Error('Invalid signature.');
      }
      return true
    } catch (e) {
      throw e
    }
  }

  async getCustomer(customerId: number) {
    try {

      const { statusCode, error, data } = await getCustomer(customerId);
      
      // checking if errors
      if (error) throw error;
      // checking if status code is not 2xx
      if (!(statusCode >= 200 && statusCode <= 299)) throw 'Response to LemonSqueezy failed with status code' + statusCode;

      return data

    } catch (e) {
      throw e
    }
  }
}

export const lemonsqueezy = new LemonSqueezy()