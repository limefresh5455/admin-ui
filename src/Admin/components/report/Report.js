import React from 'react';
import { Link } from 'react-router-dom';
function Report(props) {
        return (
            <div className="dash-content flex-grow-1">
                   <div className="row">
                       <div className="col-md-8 col-7">
                           <h2 className="cus-heading mb-3">Reports</h2>
                       </div>
                       <div className="col-md-4 col-5 filtrcol">
                           
                       </div>
                   </div>
				   <section className="sliders mb-sm-4">
                     <div className="row">
                        <div className="col-lg-12">
                           
                           <ul className="nav nav-tabs">
                              <li className="nav-item">
                                 <Link to="#active" className="nav-link active" data-toggle="tab">Transaction</Link>
                              </li>
                              <li className="nav-item">
                                 <Link to="#className" className="nav-link" data-toggle="tab">className</Link>
                              </li>
                              <li className="nav-item">
                                 <Link to="#attendance" className="nav-link" data-toggle="tab">Attendance</Link>
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
													<label for="exampleFormControlInput1">Transactions</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label for="exampleFormControlInput1">User</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label for="exampleFormControlInput1">Month</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label for="exampleFormControlInput1">Revenue</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											
										  </tr>
									   </thead>
									   <tbody>
										  
										  <tr>
											 <td>
												<p className="mb-0">Lorem Ipsum</p>
											 </td>
											 <td>
												<p className="mb-0">Lorem Ipsum</p>
											 </td>
											 <td>
												<p className="mb-0">Lorem Ipsum</p>
											 </td>
											 <td>
												<p className="mb-0">Lorem Ipsum</p>
											 </td>
										  </tr>
                      <tr>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
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
export default Report;