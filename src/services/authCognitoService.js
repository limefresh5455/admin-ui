import Configuration from '../config/config';
import errors from '../helpers/errors';
class authCognitoService {
  constructor() {
    this.config = new Configuration();
  }

  async getAuthCognitoData() {
    return fetch(this.config.BASE_URL+'/tenant/config',{
      method: 'GET'
    }).then(response => {
        if (!response.ok) {
          new errors().handleResponseError(response);
        }
        return response.json();
      }).then((data) => {
        const details = [];
        for (let i = 0; i < data.length; i++) {
            details[data[i].key] = data[i].value;
            details['tenantId'] = data[i].tenantId;
            localStorage.setItem('tenantId', details['tenantId']);
        }
        return details;
    }).catch(error => {
        new errors().handleError(error);
      });
  }

  // async getTenantId() {
  //   return fetch(this.config.BASE_URL+'/tenant/config',{
  //     method: 'GET'
  //   }).then(response => {
  //       if (!response.ok) {
  //         new errors().handleResponseError(response);
  //       }
  //       return response.json();
  //     }).then((data) => {
  //       var tenantId = "";
  //       if(data.length > 0){
  //         tenantId = data[0].tenantId;
  //       }
  //       return tenantId;
  //   }).catch(error => {
  //       new errors().handleError(error);
  //     });
  // }

}
export default authCognitoService;
