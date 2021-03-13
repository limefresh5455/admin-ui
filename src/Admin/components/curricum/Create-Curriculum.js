import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import curriculumsService from '../../services/curriculumsService';
function CreateCurricum(props) {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
  const curriculumData = {
              title: data.title,
              numberOfLessons: data.lessons,
              grade: data.grade,
              tags: data.tags,
              status: data.status,
              isIndividual: data.isindivisual,
              description: data.description,
              isTrialAvailable: data.istrail,
              isGroup: data.isgroup,
              bannerimg: data.bannerimg,
              thumbnailimg: data.thumbnailimg,
              isTrial:0,
              pageRank: 1
        }; 
        new curriculumsService().addCurriculum(curriculumData, props.tenantId).then(data => {
          console.log("after submit form",data)
              localStorage.setItem('CurrentCurriculumId', data.curriculumId);
              history.push('add-price')
            }); 
}

        return (
        	
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Create a Curriculum</h2>
                        </div>
                      </div>
                      <div className="batch-card">
                          <div className="row">
                            <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="Teacher Name">Curriculum Title</label>
                                      <input type="text" ref={register({ required: true })} name="title" className="form-control"  placeholder="Curriculum Title"/>
                                       {errors.name && <p className="errorMsg">This field is Required</p>}
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                          <div className="form-group">
                                            <label htmlFor="Teacher Name">Number of Lessons</label>
                                              <select className="form-control" ref={register({ required: false })} name="lessons">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="Teacher Name">Targeted Grade</label>
                                          <input type="text" ref={register({ required: false })} name="grade" className="form-control"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="Teacher Name">Related Curriculum Tags</label>
                                      <textarea className="form-control" ref={register({ required: false })} name="tags" rows="3"></textarea>
                                    </div>
                                    <div className="form-group swtcbtn">
                                      <span>Status (Inactive / Active)</span>
                                      <label className="switch">
                                        
                                        <input type="checkbox" ref={register({ required: false })} name="status" />
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                                    <div className="form-group swtcbtn">
                                      <span>Is this an individual curriculum?</span>
                                      <label className="switch">
                                        
                                        <input type="checkbox" ref={register({ required: false })} name="isindivisual" />
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                                    
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label htmlFor="exampleFormControlTextarea1">Curriculum Description</label>
                                  <textarea className="form-control" ref={register({ required: false })} name="description" rows="10"></textarea>
                              </div>
                              <div className="form-group swtcbtn">
                                      <span>Is trial available for this curriculum?</span>
                                      <label className="switch">
                                        
                                        <input type="checkbox" ref={register({ required: false })} name="istrail" />
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                              <div className="form-group swtcbtn">
                                      <span>Is this a group curriculum?</span>
                                      <label className="switch">
                                        
                                        <input type="checkbox" ref={register({ required: false })} name="isgroup" />
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                            </div>
                        </div>
                    </div>  
                    <div className="batch-card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">Add Banner Images</label>
                               <input type="file" className="form-control" ref={register({ required: false })} name="bannerimg"/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">Add a thumbnail / icon</label>
                               <input type="file" className="form-control" ref={register({ required: false })} name="thumbnailimg"/>
                          </div>
                        </div>
                      </div>
                    </div>     
        		</div>
        	
                <div className="space" style={{ height:"550px" }}></div>
                  <div className="button-group curriculumpage">
                  	<Link to="curricum"><button type="button" className="btn btn-primary cancel">Cancel</button></Link>
                  	<button type="submit" className="btn btn-primary save">Save and Go to Price Tab</button>
                  </div>

        			  
            </div> 
          </Form>      
                  
        );
}
export default CreateCurricum;