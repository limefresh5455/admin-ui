import React from 'react';
import { Link } from 'react-router-dom';
function HelpSupport(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Help And Support</h2>
                        </div>
                      </div>
                  <div className="batch-card">
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
        				</div>
                <div className="space" style={{ height:"660px" }}></div>
                 <div className="button-group">
                  <Link to="alltasks"><button type="button" className="btn btn-primary cancel">Cancel</button></Link>
                  <button type="button" className="btn btn-primary save">Submit</button>
                  </div>
            </div>
        );
}
export default HelpSupport;