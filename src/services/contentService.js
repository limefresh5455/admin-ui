import Configuration from '../config/config';
import errors from '../helpers/errors';
class contentService {
  constructor() {
    this.config = new Configuration();
  }

  async getContentData(tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/home/content', {
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

  async getSuccessStories(tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/successstories', {
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

  async getContentByZone(contentZone, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/home/content', {
        method: "GET",
        headers: myheaders
      }).then(response => {
       if (!response.ok) {
            new errors().handleResponseError(response);
        }
        return response.json();
      }).then((data) => {
          const footerData = [];
          for (let i = 0; i < data.length; i++) {
            if(data[i].contentZone === contentZone) { 
              footerData.push(data[i]);
            }else if(data[i].page === contentZone){
              footerData.push(data[i]);
            }
          }
          return footerData;
      }).catch(error => {
        new errors().handleError(error);
      });
    }
  }

}
export default contentService;
