import React from 'react';
import { Link } from 'react-router-dom';
function CouponsDetails(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main detialbbner">
                       <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                                <Link to="coupons"><p><span><img src="/admin_asset/images/back.png" alt=""/></span>All Coupons</p></Link><br/>
                                
                              </div>
                              <div className="col-md-9">
                                <Link to="add-coupon"><button type="button" className="btn btn-primary edit-detial"><i className="fa fa-pencil-alt"></i>Edit Details</button></Link>
                                
                              </div>
                          </div> 
                          <div className="row">
                              <div className="col-md-12">
                                <h3>Coupon Code</h3>
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
                                       <td><p className="mb-0">Discount Type</p></td>
                                       <td><b>Lorem Ipsum</b></td>
                                       <td><p className="mb-0">Discount Rate</p></td>
                                       <td><b>Monthly Payment</b></td>                                
                                      </tr>
                                     <tr>
                                       <td><p className="mb-0">Expiry Date</p></td>
                                       <td><b>12/03/2021</b></td>
                                       <td><p className="mb-0">Stackable</p></td>
                                       <td><b>YES</b></td>                                
                                      </tr>
                                      <tr>
                                       <td><p className="mb-0">Single Use</p></td>
                                       <td><b>YES</b></td>
                                       <td><p className="mb-0">Description</p></td>
                                       <td><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b></td>                                
                                      </tr>
                                     </tbody>
                                  </table>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    </div>
        );
}
export default CouponsDetails;