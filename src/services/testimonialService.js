import Configuration from '../config/config';
import errors from '../helpers/errors';
class testimonialService {
  constructor() {
    this.config = new Configuration();
  }

  async getTestimonials(id) {
  	return fetch(this.config.BASE_URL+'/'+id+'/testimonials')
      .then(response => {
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

  async getCurriculumsData(tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/curriculum',{
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

  async getLatestCurriculums(tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/curriculum',{
        method: 'GET',
        headers: myheaders
      }).then(response => {
          if (!response.ok) {
            new errors().handleResponseError(response);
          }
          return response.json();
        }).then((data) => {
          const curriculums = [];
          for (let i = 0; i < data.length; i++) {
            if(i >= 0 && i <= 1) { 
              curriculums.push(data[i]);
            }
          }
          return curriculums;
      }).catch(error => {
          new errors().handleError(error);
      });
    }
  }

}
export default testimonialService;
