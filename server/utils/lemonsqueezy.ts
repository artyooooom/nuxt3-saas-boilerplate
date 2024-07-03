import {
    getAuthenticatedUser,
    lemonSqueezySetup,
    createCheckout, 
    type Product, 
    getProduct,
    type NewCheckout
} from "@lemonsqueezy/lemonsqueezy.js";
  
export class LemonSqueezy {
    apiKey: string | undefined;
    storeId: number;
    constructor() {
        this.apiKey = process.env.LEMONSQUEEZY_API_KEY;
        // get store id - https://app.lemonsqueezy.com/settings/stores
        this.storeId = 96075;

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

        } catch(e) {
          console.log('LemonSqueezy -> init(), Error occured: ', e)
        }

    }

    async getBuyLink(productId: string) {
      try {

        const { statusCode, error, data } = await getProduct(productId);
        console.log("🚀 ~ LemonSqueezy ~ getBuyLink ~ data:", data);
        // checking if errors
        if(error) throw error;
        // checking if status code is not 2xx
        if(!(statusCode >= 200 && statusCode <= 299)) throw 'Response to LemonSqueezy failed with status code' + statusCode;

        return data.data.attributes.buy_now_url
        
      } catch(e) {
        throw e
      }
    }

    // deprecated
    async createCheckout() {
      try {
        // get variant id - https://app.lemonsqueezy.com/products
        const variantId = 427980;
        const newCheckout: NewCheckout = {
            productOptions: {
                name: 'New Checkout Test',
                description: 'a new checkout test',
            },
            checkoutOptions: {
                embed: true,
                media: true,
                logo: true,
            },
            expiresAt: null,
            testMode: true,
        };

        const { statusCode, error, data } = await createCheckout(this.storeId, variantId, newCheckout);
        // checking if errors
        if(error) throw error
        // checking if status code is not 2xx
        if(!(statusCode >= 200 && statusCode <= 299)) throw 'Response to LemonSqueezy failed with status code' + statusCode 

        return { checkoutUrl: data.data?.attributes?.url }
        
      } catch(e) {
        throw e
      }
      

    }
}


