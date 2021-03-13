import React from 'react';
import { Link } from 'react-router-dom';
function AdvertisementDetails(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main detialbbner">
                       <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                                <Link to="advertisement"><p><span><img src="/admin_asset/images/back.png" alt=""/></span>All Advertisements</p></Link><br/>
                                
                              </div>
                              <div className="col-md-9">
                                <Link to="add-advertisement"><button type="button" className="btn btn-primary edit-detial"><i className="fa fa-pencil-alt"></i>Edit Details</button></Link>
                                
                              </div>
                          </div> 
                          <div className="row">
                              <div className="col-md-2">
                                <img src="/admin_asset/images/group.svg" alt=""/>
                              </div>
                              <div className="col-md-10">
                                <p>Curriculum: <b>Adobe Photoshop : Level 1</b></p> 
                                <h3>Advertisement Title</h3>
                                
                              </div>
                        </div>
                        </div>  
                    </div>
                    <div className="contentboxtable">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-7">
                              <p>Description</p>
                              <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</b></p>
                          </div>
                          <div className="col-md-5">
                            <img src="/admin_asset/images/image.png" width="100%" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        );
}
export default AdvertisementDetails;