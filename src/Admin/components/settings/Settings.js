import React from 'react';
import { Link } from 'react-router-dom';
function Settings(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                  <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Settings</h2>
                        </div>
                      </div>
                      <div className="batch-card">
                          <div className="row">
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 1</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 2</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 3</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 4</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 5</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 6</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 7</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 8</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 9</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 10</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 11</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group swtcbtn">
                                  <span>Setting 12</span>
                                  <label className="switch">
                                    
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
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
export default Settings;