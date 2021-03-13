import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
        return (
        	<>
             <header className="px-4 py-3 d-flex bg-white align-items-center dsktphead">
                  
                  <div className="d-flex align-items-center justify-content-end flex-grow-1 top-rightbar">
                     <div className="saerchbar px-4">
                        <div className="dropdown mobile-search d-lg-none">
                           <Link to="#"><button className="btn btn-outline-secondary" type="button" id="search"><i className="fa fa-search"></i></button></Link>
                        </div>
                        <div className="input-group">
                           <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="search"/>
                           <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button" id="search"><i className="fa fa-search"></i></button>
                           </div>
                        </div>
                     </div>
                     <div className="notification pr-2">
                        <div className="btn-group">
                           <button type="button" className="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell"></i> <span className="badge badge-pill badge-warning">12</span></button>
                           <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-item">
                                    <div className="course d-flex align-items-center">
                                        <img src="/admin_asset/images/photoshop.png" alt="photoshop" className="img-fluid mr-2 rounded-circle"/>
                                        <p className="mb-0">Adobe Photoshop : Level 1</p>
                                    </div>
                                </div>
                                <div className="dropdown-item">
                                    <div className="course d-flex align-items-center">
                                        <img src="/admin_asset/images/photoshop.png" alt="photoshop" className="fluid mr-2 rounded-circle"/>
                                        <p className="mb-0">Adobe Photoshop : Level 1</p>
                                    </div>
                                </div>
                                <div className="dropdown-item">
                                    <div className="course d-flex align-items-center">
                                        <img src="/admin_asset/images/photoshop.png" alt="photoshop" className="fluid mr-2 rounded-circle"/>
                                        <p className="mb-0">Adobe Photoshop : Level 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className="userprofile pl-3">
                        <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="d-flex">
                           <div className="userimg">
                              <img src="/admin_asset/images/kevin.png" alt="userih" className="img-fluid" />
                           </div>
                           <div className="user-name">
                              <h5 className="mb-0">Kevin Smith</h5>
                              <p className="mb-0">Student</p>
                           </div>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                           <div className="dropdown-item">Profile</div>
                           <div className="dropdown-item">Logout</div>
                        </div>
                     </div>
                  </div>
               </header>
               <div className="mobile-header">
                   <header className="px-4 py-3 d-flex bg-white align-items-center">
                      <div className="toggle-icon">
                         <Link to="" className="btn btn-light togglebtn"><i className="fa fa-bars"></i></Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-end flex-grow-1 top-rightbar">
                            <Link to="#" className="d-md-block"><img src="/admin_asset/images/logo.png" alt="Jrcodebees" className="img-fluid lgimg" /></Link>
                         <div className="notification pr-2">
                            <div className="btn-group">
                               <button type="button" className="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell"></i> <span className="badge badge-pill badge-warning">12</span></button>
                               <div className="dropdown-menu dropdown-menu-right">
                                  <div className="dropdown-item">Action</div>
                                  <div className="dropdown-item">Another action</div>
                                  <div className="dropdown-item">Something else here</div>
                               </div>
                            </div>
                         </div>
                         <div className="userprofile pl-3">
                            <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="d-flex">
                               <div className="userimg">
                                  <img src="/admin_asset/images/kevin.png" alt="uservhgc" className="img-fluid"/>
                               </div>
                               <div className="user-name">
                                  <h5 className="mb-0">Kevin Smith</h5>
                                  <p className="mb-0">Student</p>
                               </div>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                               <div className="dropdown-item">Profile</div>
                               <div className="dropdown-item">Logout</div>
                            </div>
                         </div>
                      </div>
                    </header>
                    <div className="input-group">
                       <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="search"/>
                       <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="button" id="search"><i className="fa fa-search"></i></button>
                       </div>
                    </div>
                    <div className="moblst">
                        <ul>
                            <li className="menu-item">
                               <Link to ="lessonsschedule.html" className="menu-link active"><div className="menuimg"><img src="/admin_asset/images/calander.png" alt="calander" className="img-fluid"/></div> <span>Schedule</span></Link>
                            </li>
                            <li className="menu-item">
                               <Link to="mytasks.html" className="menu-link"><div className="menuimg"><img src="/admin_asset/images/my-task.png" alt="my-task" className="img-fluid"/></div> <span>Tasks</span></Link>
                            </li>
                            <li className="menu-item">
                               <Link to="message.html" className="menu-link"><div className="menuimg"><img src="/admin_asset/images/message.png" alt="message" className="img-fluid"/></div> <span>Messages</span></Link>
                            </li>
                            <li className="menu-item">
                               <Link to="mycourses.html" className="menu-link"><div className="menuimg"><img src="/admin_asset/images/courses.png" alt="My Courses" className="img-fluid"/></div> <span>Courses</span></Link>
                            </li>
                            <li className="menu-item">
                               <Link to="my-orders.html" className="menu-link"><div className="menuimg"><img src="/admin_asset/images/cart.png" alt="My order" className="img-fluid"/></div> <span>Orders</span></Link>
                            </li>
                        </ul>
                    </div>
               </div></>
        );
}
export default Header;