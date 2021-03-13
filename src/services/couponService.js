import Configuration from '../config/config';
import errors from '../helpers/errors';
class couponService {
  constructor() {
    this.config = new Configuration();
  }

  async couponForm(couponData, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/validate-coupon', {
        method: "POST",
        headers: myheaders,
        body: JSON.stringify(couponData)
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
export default couponService;
