import React from 'react';
import { Link } from 'react-router-dom';
function AddTeacher(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Add Teacher</h2>
                        </div>
                      </div>
                      <div className="batch-card textareasizecustom">
                          <div className="row">
                            <div className="col-md-6">
                               <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label for="Teacher Name">First Name</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Email ID</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="LoremIpsum@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Teacher ID</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label for="Teacher Name">Last Name</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Phone Number</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="+1 9998765682"/>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Educational Qualification</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                                    </div>
                                  </div>
                                </div> 
                                <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Specialization</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">Lorem Ipsum</textarea>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Profile Summary</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh…</textarea>
                              </div>
                              <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Skills</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">UX, Frond end developer, Javascript</textarea>
                              </div>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                             <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Add a profile photo</label>
                                   <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                              </div>
                          </div>
                        </div>
                    </div>       
        				</div>
                <div className="space"></div>
                 <div className="button-group curriculumpage">
                  <Link to="allteachers"><button type="button" className="btn btn-primary cancel">Cancel</button></Link>
                  <button type="button" className="btn btn-primary save">Submit</button>
                  </div>
            </div>
        );
}
export default AddTeacher;