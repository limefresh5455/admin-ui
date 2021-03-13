import React from 'react';
import { Link } from 'react-router-dom';
function ContentDetail(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main detialbbner">
                       <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                                <Link to="content"><p><span><img src="/admin_asset/images/back.png" alt=""/></span>All Contents</p></Link><br/>
                                
                              </div>
                              <div className="col-md-9">
                                <Link to="add-content"><button type="button" className="btn btn-primary edit-detial"><i className="fa fa-pencil-alt"></i>Edit Details</button></Link>
                                
                              </div>
                          </div> 
                          <div className="row">
                              <div className="col-md-12">
                                <h3>Content Header</h3>
                              </div>
                        </div>
                        </div>  
                    </div>
                    <div className="contentboxtable">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                              <p>Description</p>
                              <p><b>Lorem ipsum dolor sit</b></p>
                          </div>
                          <div className="col-md-6">
                              <p>Page</p>
                              <p><b>Lorem ipsum dolor sit</b></p>
                          </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-md-6">
                              <p>Description</p>
                              <p><b>Lorem ipsum dolor sit</b></p>
                          </div>
                          <div className="col-md-6">
                              <p>Zone</p>
                              <p><b>Lorem ipsum dolor sit</b></p>
                          </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-md-12">
                              <p>Content</p>
                              <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>

        );
}
export default ContentDetail;




