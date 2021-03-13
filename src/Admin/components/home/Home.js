import React from 'react';
import { Link } from 'react-router-dom';
function Home(props) {
        return (
            <div className="dash-content flex-grow-1">
                      <h2 className="dashtitle">Welcome to Admin Portal of Jrcodebees</h2>
                      <div className="inlinebxs">
                        <div className="bx">
                          <Link to="curricum"><img src="/admin_asset/images/Curriculums@2x.png" alt=""/>
                          <p>Curriculums</p></Link>
                        </div>
                        <div className="bx">
                          <Link to="batches"><img src="/admin_asset/images/Batches@2x.png" alt=""/>
                          <p>Batches</p></Link>
                        </div>
                        <div className="bx">
                          <Link to="alltasks"><img src="/admin_asset/images/Tasks@2x.png" alt=""/>
                          <p>Tasks</p></Link>
                        </div>
                        <div className="bx">
                          <Link to="allteachers"><img src="/admin_asset/images/Teachers@2x.png" alt=""/>
                          <p>Teachers</p></Link>
                        </div>
                        <div className="bx">
                          <Link to="report"><img src="/admin_asset/images/Reports@2x.png" alt=""/>
                          <p>Reports</p></Link>
                        </div>
                      </div><br/>
                      <hr/><br/>
                      <div className="inlinebxs">
                        <div className="bx">
                          <Link to="lessons"><img src="/admin_asset/images/Teachers@2x.png" alt=""/>
                          <p>Lessons</p></Link>
                        </div>
                        <div className="bx">
                          <Link to="advertisement"><img src="/admin_asset/images/Advertisement@2x.png" alt=""/>
                          <p>Advertisement</p></Link>
                        </div>
                        <div className="bx">
                          <Link to="coupons"><img src="/admin_asset/images/Coupons@2x.png" alt=""/>
                          <p>Coupons</p></Link>
                        </div>
                      </div><br/>
                      <hr/><br/>
                      <h3 className="tenttitle">Tenant Settings</h3>
                      <div className="inlinebxs">
                        <div className="bx">
                          <Link to="content"><img src="/admin_asset/images/Content@2x.png" alt=""/>
                          <p>Content</p></Link>
                        </div>
                        <div className="bx">
                          <Link to="tenantconfig"><img src="/admin_asset/images/Tenant Config@2x.png" alt=""/>
                          <p>Tenant Config.</p></Link>
                        </div>
                      </div><br/>
                       <hr/><br/>
      				</div>
        );
}
export default Home;