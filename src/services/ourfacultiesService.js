import Configuration from '../config/config';
import errors from '../helpers/errors';
class ourfacultiesService {
  constructor() {
    this.config = new Configuration();
  }

  async getOurFaculties(tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/ourfaculties',{
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

  async getFacultiesDetail(facultiesId, tenantId) {
    if(tenantId !== undefined){
      let myheaders = {
        "jbtenantid": (this.config.localTenantId !== null) ? this.config.localTenantId : tenantId
      }
      return fetch(this.config.BASE_URL+'/ourfaculties',{
        method: 'GET',
        headers: myheaders
      }).then(response => {
          if (!response.ok) {
            new errors().handleResponseError(response);
          }
          return response.json();
        }).then((data) => {
          const details = [];
          for (let i = 0; i < data.length; i++) {
            if(Number(data[i].teacherId) === Number(facultiesId)) { 
              details['teacherId'] = data[i].teacherId
              details['teacherName'] = data[i].teacherName
              details['summary'] = data[i].summary
              details['specialization'] = data[i].specialization
              details['skills'] = data[i].skills.split(',')
              details['profilePhoto'] = data[i].profilePhoto
              details['rating'] = data[i].rating
            }
          }
          return details;
      }).catch(error => {
          new errors().handleError(error);
      });
    }
  }

}
export default ourfacultiesService;
