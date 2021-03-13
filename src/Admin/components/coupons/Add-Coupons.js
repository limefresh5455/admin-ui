import React from 'react';
// import { Link } from 'react-router-dom';
function AddCoupons(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Add Coupon</h2>
                        </div>
                      </div>
                      <div className="batch-card">
                          <div className="row">
                            <div className="col-md-6">
                                    <div className="form-group">
                                      <label for="Teacher Name">Coupon Code</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="LoremIpsum@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Discount Type</label>
                                      <select className="form-control" id="Curriculum">
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                      </select>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Discount Rate</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                                    </div>
                                    
                                    <div className="form-group swtcbtn">
                                      <span>Status (Inactive / Active)</span>
                                      <label className="switch">
                                        
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                                    <div className="form-group swtcbtn">
                                      <span>Stackable</span>
                                      <label className="switch">
                                        
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                                    <div className="form-group swtcbtn">
                                      <span>Single Use</span>
                                      <label className="switch">
                                        
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                                    
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Description</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh…</textarea>
                              </div>
                              <div className="form-group">
                                <label for="Teacher Name">Expiry Date</label>
                                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                              </div>
                            </div>
                        </div>
                    </div>       
                </div>
                <div className="space"></div>
                 <div className="button-group">
                  <button type="button" className="btn btn-primary cancel">Cancel</button>
                  <button type="button" className="btn btn-primary save">Submit</button>
                  </div>
                  </div>
        );
}
export default AddCoupons;