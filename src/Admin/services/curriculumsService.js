import Configuration from '../config/config';
import errors from './../../helpers/errors';
class curriculumsService {
  constructor() {
    this.config = new Configuration();
  }
  async getCurriculums(tenantId) { 
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": tenantId,
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

  async getCurriculumsInactive(tenantId) { 
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": tenantId,
      }
      return fetch(this.config.BASE_URL+'/curriculum/inactive',{
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

  async addCurriculum(curriculumData, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": tenantId,
      }
      return fetch(this.config.BASE_URL+'/curriculum', {
        method: "POST",
        headers: myheaders,
        body: JSON.stringify(curriculumData)
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

  async addPrice(priceData, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": tenantId,
      }
      return fetch(this.config.BASE_URL+'/curriculum/pricing', {
        method: "POST",
        headers: myheaders,
        body: JSON.stringify(priceData)
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
export default curriculumsService;
