import React from 'react';
import { Link } from 'react-router-dom';
function CreateBatch(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Create a Batch</h2>
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
                                  <label for="Teacher Name">Teacher Name</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="LoremIpsum"/>
                                </div>
                                <div className="form-group">
                                  <label for="Batch Start Date">Batch Start Date</label>
                                  <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="LoremIpsum"/>
                                </div>
                                <div className="form-group">
                                  <label for="Curriculum">Days</label>
                                  <select className="form-control" id="Curriculum">
                                    <option>6- Friday , 7- Saturday</option>
                                    <option>6- Friday , 7- Saturday</option>
                                    <option>A6- Friday , 7- Saturday</option>
                                    <option>6- Friday , 7- Saturday</option>
                                    <option>6- Friday , 7- Saturday</option>
                                  </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label for="Teacher Name">Batch Name</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="LoremIpsum"/>
                              </div>
                              <div className="form-group">
                                  <label for="Curriculum">Batch Type</label>
                                  <select className="form-control" id="Curriculum">
                                    <option>Group</option>
                                    <option>Group</option>
                                    <option>Group</option>
                                    <option>Group</option>
                                    <option>Group</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label for="Curriculum">Recurrence</label>
                                  <select className="form-control" id="Curriculum">
                                    <option>Weekly</option>
                                    <option>Weekly</option>
                                    <option>Weekly</option>
                                    <option>Weekly</option>
                                    <option>Weekly</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label for="Curriculum">Start Time</label>
                                  <select className="form-control" id="Curriculum">
                                    <option>01:00 PM</option>
                                    <option>01:00 PM</option>
                                    <option>01:00 PM</option>
                                    <option>01:00 PM</option>
                                    <option>01:00 PM</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                        <hr/>
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
        				</div>
                <div className="space"></div>
                 <div className="button-group">
                  <Link to="batches"><button type="button" className="btn btn-primary cancel">Cancel</button></Link>
                  <button type="button" className="btn btn-primary save">Submit</button>
                  </div>
             </div>
        );
}
export default CreateBatch;