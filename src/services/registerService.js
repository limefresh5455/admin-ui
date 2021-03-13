import Configuration from '../config/config';
import errors from '../helpers/errors';
class registerService {
  constructor() {
    this.config = new Configuration();
  }

  async getAreaOfInterest(tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/areaofinterest',{
        method: 'GET',
        headers: myheaders
      }).then(response => {
          if (!response.ok) {
            new errors().handleResponseError(response);
          }
          return response.json();
        }).then((data) => {
          return data;
      }).catch(error => {
          new errors().handleError(error);
      });
    }
  }

  async registerForm(registerData, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/trialregistration', {
        method: "POST",
        headers: myheaders,
        body: JSON.stringify(registerData)
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
export default registerService;
