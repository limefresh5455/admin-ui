import React from 'react';
import { Link } from 'react-router-dom';
function CreateTask(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Create a Task</h2>
                        </div>
                      </div>
                      <div className="batch-card">
                          <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                  <label for="Curriculum">Curriculum</label>
                                  <select className="form-control" id="Curriculum">
                                    <option>Adobe Photoshop: Level 2</option>
                                    <option>Adobe Photoshop: Level 2</option>
                                    <option>Adobe Photoshop: Level 2</option>
                                    <option>Adobe Photoshop: Level 2</option>
                                    <option>Adobe Photoshop: Level 2</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label for="Teacher Name">Task Title</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum dolor sit ameco"/>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label for="Curriculum">Lesson</label>
                                  <select className="form-control" id="Curriculum">
                                    <option>Introduction Lesson</option>
                                    <option>Introduction Lesson</option>
                                    <option>Introduction Lesson</option>
                                    <option>Introduction Lesson</option>
                                    <option>Introduction Lesson</option>
                                  </select>
                                </div>
                                <div className="form-group swtcbtn">
                                  <span>Status (Inactive / Active)</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h3>Curriculum Price Details</h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                                  <label for="Teacher Name">Total package price for group</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="$ 500"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="Teacher Name">Monthly price for group</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="$ 300"/>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label for="Curriculum">Number of months/payments</label>
                                  <select className="form-control" id="Curriculum">
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div> 
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="tsak">Task Contents</h3>
                      </div>
                    </div>    
                    <div className="batch-card">
                          <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                  <label for="Curriculum">Content Title</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum dolor sit ameco"/>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh…</textarea>
                              </div>
                            </div>
                        </div>
                        
                    </div>  
        				</div>
                <div className="space" style={{ height:"660px" }}></div>
                 <div className="button-group curriculumpage">
                  <Link to="alltasks"><button type="button" className="btn btn-primary cancel">Cancel</button></Link>
                  <button type="button" className="btn btn-primary save">Submit</button>
                  </div>
            </div>
        );
}
export default CreateTask;