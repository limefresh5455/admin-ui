import React from 'react';
import { Link } from 'react-router-dom';
function BatchDetails(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main detialbbner">
                       <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                                <Link to="batches"><p><span><img src="/admin_asset/images/back.png" alt=""/></span>All Batches</p><br/></Link>
                                
                              </div>
                              <div className="col-md-9">
                                <Link to="create-batch"><button type="button" className="btn btn-primary edit-detial"><i className="fa fa-pencil-alt"></i>Edit Details</button></Link>
                                
                              </div>
                          </div> 
                          <div className="row">
                              <div className="col-md-2">
                                <img src="/admin_asset/images/group.svg" alt=""/>
                              </div>
                              <div className="col-md-10">
                                <p>Curriculum: &nbsp;&nbsp;<b>Adobe Photoshop : Level 1</b></p>
                                <h3>Lorem Ipsum dolor sit ameco</h3>
                              </div>
                        </div>
                        </div>  
        				    </div>
                    <div className="contentboxtable">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Teacher Name:</td>
                                  <td><b>Lorem Ipsum</b></td>
                                  <td>Teacher ID:</td>
                                  <td><b>Lorem Ipsum</b></td>
                                </tr>
                                <tr>
                                  <td>Batch Type:</td>
                                  <td><b>Group</b></td>
                                  <td>Batch Start Date:</td>
                                  <td><b>12/02/2021</b></td>
                                </tr>
                                <tr>
                                  <td>Recurrence:</td>
                                  <td><b>Weekly</b></td>
                                  <td>Days:</td>
                                  <td><b>6- Friday , 7-Saturday</b></td>
                                </tr>
                                <tr>
                                  <td>Start Time:</td>
                                  <td><b>01:00 PM</b></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                            <h3> All classNamees</h3>
                            <div className="cus-table table-responsive">
                                  <table className="table">
                                     <thead>
                                      <tr>
                                      <th>
                                        <div className="form-group">
                                          <label for="exampleFormControlInput1">className Name</label>
                                          <input type="text" className="form-control"/>
                                        </div>
                                      </th>
                                      <th>
                                        <div className="form-group">
                                          <label for="exampleFormControlInput1">Schedule Date/Time</label>
                                          <input type="text" className="form-control"/>
                                        </div>
                                      </th>
                                      <th>
                                        <div className="form-group">
                                          <label for="exampleFormControlInput1">Teacher</label>
                                          <input type="text" className="form-control"/>
                                        </div>
                                      </th>
                                      <th>
                                        <div className="form-group">
                                          <label for="exampleFormControlInput1">Student Count</label>
                                          <input type="text" className="form-control"/>
                                        </div>
                                      </th>
                                      <th colspan="2">
                                      </th>
                                      <th colspan="2">
                                      </th>
                                      </tr>
                                     </thead>
                                     <tbody>
                                      <tr>
                                       <td>
                                          <div className="course d-flex align-items-center">
                                           <Link to="#"><p className="mb-0">Lorem Ipsum dolor sit ameco</p>
                                         </Link>
                                        </div>
                                       </td>
                                       <td>
                                        <p className="mb-0">12/2/2021 8:00 PM</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">Susan Mary</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">22</p>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/students.png" alt=""/></Link>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                                       </td>
                                      </tr>
                                     <tr>
                                       <td>
                                          <div className="course d-flex align-items-center">
                                           <Link to="#"><p className="mb-0">Lorem Ipsum dolor sit ameco</p>
                                         </Link>
                                        </div>
                                       </td>
                                       <td>
                                        <p className="mb-0">12/2/2021 8:00 PM</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">Susan Mary</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">22</p>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/students.png" alt=""/></Link>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td>
                                          <div className="course d-flex align-items-center">
                                           <Link to="#"><p className="mb-0">Lorem Ipsum dolor sit ameco</p>
                                         </Link>
                                        </div>
                                       </td>
                                       <td>
                                        <p className="mb-0">12/2/2021 8:00 PM</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">Susan Mary</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">22</p>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/students.png" alt=""/></Link>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td>
                                          <div className="course d-flex align-items-center">
                                           <Link to="#"><p className="mb-0">Lorem Ipsum dolor sit ameco</p>
                                         </Link>
                                        </div>
                                       </td>
                                       <td>
                                        <p className="mb-0">12/2/2021 8:00 PM</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">Susan Mary</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">22</p>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/students.png" alt=""/></Link>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                                       </td>
                                      </tr>

                                      <tr>
                                       <td>
                                          <div className="course d-flex align-items-center">
                                           <Link to="#"><p className="mb-0">Lorem Ipsum dolor sit ameco</p>
                                         </Link>
                                        </div>
                                       </td>
                                       <td>
                                        <p className="mb-0">12/2/2021 8:00 PM</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">Susan Mary</p>
                                       </td>
                                       <td>
                                        <p className="mb-0">22</p>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/students.png" alt=""/></Link>
                                       </td>
                                       <td>
                                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                                       </td>
                                      </tr>
                                     </tbody>
                                  </table>
                                 </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
        );
}
export default BatchDetails;