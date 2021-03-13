import Configuration from '../config/config';
import errors from '../helpers/errors';
class orderService {
  constructor() {
    this.config = new Configuration();
  }

  async createOrder(orderData, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/payment/order/create', {
        method: "POST",
        headers: myheaders,
        body: JSON.stringify(orderData)
      }).then(response => {
         if (!response.ok) {
              new errors().handleResponseError(response);
          }
          return response.json();
        })
        .catch(error => {
          new errors().handleError(error);
        });
    }
  }

  async completeOrder(orderData,tenantId)
  {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/payment/order/complete', {
        method: "POST",
        headers: myheaders,
        body: JSON.stringify(orderData)
      }).then(response => {
         if (!response.ok) {
              new errors().handleResponseError(response);
          }
          return response.json();
        })
        .catch(error => {
          new errors().handleError(error);
        });
    }
  }

}
export default orderService;
