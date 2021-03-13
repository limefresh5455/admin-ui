import React from 'react';
// import { Link } from 'react-router-dom';
function AddContent(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Add Content</h2>
                        </div>
                      </div>
                      <div className="batch-card textareasizecustom">
                          <div className="row">
                            <div className="col-md-6">
                                    <div className="form-group">
                                      <label for="Teacher Name">Content Header</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="LoremIpsum@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Background URL</label>
                                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Page</label>
                                      <select className="form-control" id="Curriculum">
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                      </select>
                                    </div>
                                     <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Content</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6">Lorem Ipsum dolor sit amen</textarea>
                                    </div>
                                    
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Description</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh…</textarea>
                              </div>
                              <div className="form-group">
                                      <label for="Teacher Name">Zone</label>
                                      <select className="form-control" id="Curriculum">
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                      </select>
                                    </div>
                            </div>
                        </div>
                    </div>       
                </div>
                <div className="space"></div>
                 <div className="button-group contentpage">
                  <button type="button" className="btn btn-primary cancel">Cancel</button>
                  <button type="button" className="btn btn-primary save">Submit</button>
                  </div>
                  </div>
        );
}
export default AddContent;