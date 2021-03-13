import React from 'react';
import { Link } from 'react-router-dom';
function Lessons(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Create a Curriculum</h2>
                        </div>
                      </div>
                      <div className="batch-card lsnadd">
                          <div className="row">
                            <div className="col-md-4">
                                  <p>Curriculum Title</p>
                                  <p><b>Adobe Photoshop: Level 2</b></p>
                            </div>
                            <div className="col-md-4">
                                  <p>Number of Lessons</p>
                                  <p><b>2</b></p>
                            </div>
                            <div className="col-md-4">
                                 <button type="button" className="btn btn-primary cancel"><i className="fa fa-plus"></i> Add Lesson</button>
                            </div>
                          </div>
                      </div>
                      <div className="batch-card lsnbrd">
                            <div className="row">
                              <div className="col-md-6">
                                <p><span><img src="/admin_asset/images/expand.png" alt=""/></span>Lesson 1</p>
                              </div>
                              <div className="col-md-6">
                                <p><i className="fa fa-trash" aria-hidden="true"></i></p>
                              </div>
                            </div>
                          <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="Teacher Name">Lesson Title</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput12" placeholder="Introduction Lesson"/>
                                </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="Teacher Name">Duration (in hours)</label>
                                      <select className="form-control" id="Curriculum">
                                        <option>10 Hours</option>
                                        <option>10 Hours</option>
                                        <option>10 Hours</option>
                                        <option>10 Hours</option>
                                        <option>10 Hours</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="Teacher Name">Lesson Index</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput13" placeholder="Lorem Ipsum"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                    <label htmlFor="Teacher Name">Description</label>
                                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh…"></textarea>
                               </div>
                            </div>
                        </div>
                    </div>   
                    <div className="batch-card lsnbrd">
                            <div className="row">
                              <div className="col-md-6">
                                <p><span><img src="/admin_asset/images/expand.png" alt=""/></span>Lesson 2</p>
                              </div>
                              <div className="col-md-6">
                                <p><i className="fa fa-trash" aria-hidden="true"></i></p>
                              </div>
                            </div>
                          <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="Teacher Name">Lesson Title</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput14" placeholder="Introduction Lesson"/>
                                </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="Teacher Name">Duration (in hours)</label>
                                      <select className="form-control" id="Curriculum">
                                        <option>10 Hours</option>
                                        <option>10 Hours</option>
                                        <option>10 Hours</option>
                                        <option>10 Hours</option>
                                        <option>10 Hours</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="Teacher Name">Lesson Index</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                    <label htmlFor="Teacher Name">Description</label>
                                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh…"></textarea>
                               </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="space" style={{ height:"780px"}}></div>
                <Link to="create-curriculum"><button type="button" className="btn btn-primary save" style={{ marginLeft: "5%"}}>Curriculum</button></Link>
                 <div className="button-group curriculumpage">
                  <button type="button" className="btn btn-primary cancel">Cancel</button>
                  <button type="button" className="btn btn-primary save">Submit</button>
                  </div>                
            </div>
        );
}
export default Lessons;