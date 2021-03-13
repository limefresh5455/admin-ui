import Configuration from '../config/config';
import errors from '../helpers/errors';
class advertiseService {
  constructor() {
    this.config = new Configuration();
  }

  async getAdvertiseData(tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/advertisement', {
        method: "GET",
        headers: myheaders
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
export default advertiseService;
