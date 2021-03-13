import React from 'react';
import { Link } from 'react-router-dom';
function Sidebar(props) {
        return (
            <div className="left-sidebar show-sidebar togleftin">
               <div className="left-sidebar-inner">
                  <div className="logo">
                     <Link  className="logo-big d-none d-md-block" to="/"><img src="/admin_asset/images/sitelogomain.png" alt="Jrcodebees" className="img-fluid" /></Link>
                     <Link  className="logo-mini d-md-none" to="/"><img src="/admin_asset/images/sitelogomain.png" alt="Jrcodebees" className="img-fluid" /></Link>
                  </div>
                  <div className="siderbar-menu">
                     <ul className="navbar-nav">
                        <li className="menu-item">
                           <Link to="/" className="menu-link"><img src="/admin_asset/images/home.png" alt="home" className="img-fluid" /> <span>My Dashboard</span></Link>
                        </li>
                        <li className="menu-item">
                           <Link to="/curricum" className="menu-link"><img src="/admin_asset/images/curricum.png" alt="calander" className="img-fluid" /> <span>Lessons Schedule</span></Link>
                        </li>
						<li className="menu-item">
                           <Link to="batches" className="menu-link"><img src="/admin_asset/images/batches.png" alt="my-task" className="img-fluid" /> <span>Review Tasks</span> <span className="badge badge-pill badge-warning">18</span></Link>
                        </li>
                        <li className="menu-item">
                           <Link to="alltasks" className="menu-link"><img src="/admin_asset/images/my-task.png" alt="my-task" className="img-fluid" /> <span>Review Tasks</span> <span className="badge badge-pill badge-warning">18</span></Link>
                        </li>
                        
                        <li className="menu-item">
                           <Link to="allteachers" className="menu-link"><img src="/admin_asset/images/courses.png" alt="My Courses" className="img-fluid" /> <span>My Batches</span></Link>
                        </li>
                        <li className="menu-item">
                           <Link to="report" className="menu-link active"><img src="/admin_asset/images/report.png" alt="My order" className="img-fluid" /> <span>My Orders</span></Link>
                        </li>
                     </ul>
                     <ul className="navbar-nav nav-bottom mt-3">
                        <li className="menu-item">
                           <Link to="profile" className="menu-link"><img src="/admin_asset/images/profile.png" alt="Profile" className="img-fluid" /> <span>My Profile</span></Link>
                        </li>
                        <li className="menu-item">
                           <Link to="settings" className="menu-link"><img src="/admin_asset/images/cog.png" alt="Settings" className="img-fluid" /> <span>Settings</span></Link>
                        </li>
                        <li className="menu-item">
                           <Link to="help_support" className="menu-link"><img src="/admin_asset/images/help.png" alt="Help & Support" className="img-fluid" /> <span>Help & Support</span></Link>
                        </li>
                        <li className="menu-item">
                           <Link to="logout" className="menu-link"><img src="/admin_asset/images/logout.png" alt="Logout" className="img-fluid" /> <span>Logout</span></Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
        );
}
export default Sidebar;