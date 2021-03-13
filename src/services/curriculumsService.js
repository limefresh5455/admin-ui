import Configuration from '../config/config';
import errors from '../helpers/errors';
class curriculumsService {
  constructor() {
    this.config = new Configuration();
  }

  async getIndividualPricing(id, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/curriculum/'+id+'/pricing',{
        method: 'GET',
        headers: myheaders
      }).then(response => {
          if (!response.ok) {
            new errors().handleResponseError(response);
          }
          return response.json();
        }).then((data) => {
          const individualData = [];
          for (let i = 0; i < data.length; i++) {
            if(data[i].courseType === "Individual") { 
              individualData.push(data[i]);
            }
          }
          localStorage.setItem('curriculumId', id);
          localStorage.setItem('classtype', "Individual Session");
          localStorage.setItem('price', individualData[0].price);
          return individualData;
      }).catch(error => {
          new errors().handleError(error);
      });
    }
  }

  async getGroupPricing(id, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/curriculum/'+id+'/pricing',{
        method: 'GET',
        headers: myheaders
      }).then(response => {
          if (!response.ok) {
            new errors().handleResponseError(response);
          }
          return response.json();
        }).then((data) => {
          const groupData = [];
          for (let i = 0; i < data.length; i++) {
            if(data[i].courseType === "Group") { 
              groupData.push(data[i]);
            }
          }
          return groupData;
      }).catch(error => {
          new errors().handleError(error);
      });
    }
  }

  async getCurriculums(id, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/curriculum/'+id,{
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

  async getLessons(id, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/curriculum/'+id+'/lessons',{
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

  async getRelatedCourses(id, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/curriculum/'+id+'/related',{
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

}
export default curriculumsService;
