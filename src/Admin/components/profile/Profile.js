import React from 'react';
import { Link } from 'react-router-dom';
function Profile(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main detialbbner">
                       <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                                <Link to="home"><p><span><img src="/admin_asset/images/back.png" alt=""/></span>Home</p></Link><br/>
                                
                              </div>
                              <div className="col-md-9">
                                <Link to="edit-profile"><button type="button" className="btn btn-primary edit-detial"><i className="fa fa-pencil-alt"></i>Edit Details</button></Link>
                                
                              </div>
                          </div> 
                          <div className="row">
                              <div className="col-md-2">
                                <img src="/admin_asset/images/group.svg" alt=""/>
                              </div>
                              <div className="col-md-10">
                                <h3>Kevin Smith</h3>
                                <p>Loremipsum@gmail.com | +1 9992342345 <span style={{ paddingleft:"3%" }}>Teacher ID: <b>Lorem Ipsum</b></span></p>
                                
                              </div>
                        </div>
                        </div>  
        				    </div>
                    <div className="contentboxtable">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            
                            <p>Specialization:&nbsp;&nbsp;&nbsp;&nbsp;<b>Web Developer</b></p> 
                            <p>Educational Qualification:&nbsp;&nbsp;&nbsp;&nbsp;<b>Master of Science, University of Oxford</b></p>  
                            <p>Skills: &nbsp;&nbsp;&nbsp;&nbsp;<i class="inline"><span>HTML</span><span>JAVA</span><span>.NET</span><span>PHP</span></i> </p> <hr/>
                              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed ut facilisis nulla non aliquam libero. Nunc pretium massa nec massa consectetur vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh... non aliquam libero. Nunc pretium massa nec massa consectetur vel ullamcorper nunc laoreet. Pellentesque at turpis id non aliquam libero. Nunc pretium massa nec massa consectetur vel ullamcorper nunc laoreet. Pellentesque at turpis id.</p>

                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
        );
}
export default Profile;