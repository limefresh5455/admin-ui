import React from 'react';
import { Link } from 'react-router-dom';
function Batches(props) {
        return (
            <div className="dash-content flex-grow-1">
                   <div className="row">
                       <div className="col-md-8 col-7">
                           <h2 className="cus-heading mb-3">All Batches</h2>
                       </div>
                       <div className="col-md-4 col-5 filtrcol">
                           <Link to="create-batch"><button className="btn btn-theme-light btn-rounded filters"><i className="fa fa-plus"></i> Create Batch</button></Link>
                       </div>
                   </div>
				   <section className="sliders mb-sm-4">
                     <div className="row">
                        <div className="col-lg-12">
                           
                           <ul className="nav nav-tabs">
                              <li className="nav-item">
                                 <Link to="#active" className="nav-link active" data-toggle="tab">Active</Link>
                              </li>
                              <li className="nav-item">
                                 <Link to="#inactive" className="nav-link" data-toggle="tab">Inactive</Link>
                              </li>
                           </ul>
                           
                           <div className="tab-content">
                              <div className="tab-pane  active" id="active">
								<div className="cus-table table-responsive">
									<table className="table">
									   <thead>
										  <tr>
											<th>
												<div className="form-group">
													<label for="exampleFormControlInput1">Batch Name</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label for="exampleFormControlInput1">Curriculum</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label for="exampleFormControlInput1">Batch Type</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label for="exampleFormControlInput1">Teacher Name</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											
											<th colspan="2">
											</th>
										  </tr>
									   </thead>
									   <tbody>
										  
										  <tr>
											 <td>
												<Link to="batch-detial">
													<div className="course d-flex align-items-center">
												   <img src="/admin_asset/images/python.png" alt="python" className="img-fluid mr-2 rounded-circle"/>
												   <p className="mb-0">Python : Level 1</p>
												 
												</div>
                        </Link>
											 </td>
											 <td>
												<p className="mb-0">Adobe Photoshop : Level 1</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 
											 <td>
												<Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
											 </td>
											 <td>
												<Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
											 </td>
										  </tr>
										  <tr>
											 <td>
												<Link to="batch-detial">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/python.png" alt="python" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Python : Level 1</p>
                         
                        </div>
                        </Link>
											
											 </td>
											 <td>
												<p className="mb-0">Adobe Photoshop : Level 1</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 
											 <td>
												<Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
											 </td>
											 <td>
												<Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
											 </td>
										  </tr>
										  <tr>
											 <td>
												<Link to="batch-detial">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/python.png" alt="python" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Python : Level 1</p>
                         
                        </div>
                        </Link>
											 </td>
											 <td>
												<p className="mb-0">Adobe Photoshop : Level 1</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 
											 <td>
												<Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
											 </td>
											 <td>
												<Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
											 </td>
										  </tr>
										  <tr>
											 <td>
												<Link to="batch-detial">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/python.png" alt="python" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Python : Level 1</p>
                         
                        </div>
                        </Link>
												
											 </td>
											 <td>
												<p className="mb-0">Adobe Photoshop : Level 1</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 
											 <td>
												<Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
											 </td>
											 <td>
												<Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
											 </td>
										  </tr>
										  <tr>
											 <td>
												<Link to="batch-detial">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/python.png" alt="python" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Python : Level 1</p>
                         
                        </div>
                        </Link>
												
											 </td>
											 <td>
												<p className="mb-0">Adobe Photoshop : Level 1</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 
											 <td>
												<Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
											 </td>
											 <td>
												<Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
											 </td>
										  </tr>
										  <tr>
											 <td>
												<Link to="batch-detial">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/python.png" alt="python" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Python : Level 1</p>
                         
                        </div>
                        </Link>
												
											 </td>
											 <td>
												<p className="mb-0">Adobe Photoshop : Level 1</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 
											 <td>
												<Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
											 </td>
											 <td>
												<Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
											 </td>
										  </tr>
										  <tr>
											 <td>
												<Link to="batch-detial">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/python.png" alt="python" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Python : Level 1</p>
                         
                        </div>
                        </Link>
												
											 </td>
											 <td>
												<p className="mb-0">Adobe Photoshop : Level 1</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 <td>
												<p className="mb-0">Individual</p>
											 </td>
											 
											 <td>
												<Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
											 </td>
											 <td>
												<Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
											 </td>
										  </tr>
										  
									   </tbody>
									</table>
								 </div>
							  </div>
							</div>
						</div>
					</div>
				</section>
				</div>
        );
}
export default Batches;