import React from 'react';
import { Link } from 'react-router-dom';
function Coupons(props) {
        return (
            <div className="dash-content flex-grow-1">
                   <div className="row">
                       <div className="col-md-8 col-7">
                           <h2 className="cus-heading mb-3">All Coupons</h2>
                       </div>
                       <div className="col-md-4 col-5">
                           <Link to="add-coupon"><button className="btn btn-theme-light btn-rounded filters all-coup-add"><i className="fa fa-plus"></i> Add Coupons</button></Link>
                       </div>
                   </div>
           <section className="sliders mb-sm-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="tab-content">
                    <div className="tab-pane  active" id="active">
                <div className="cus-table table-responsive">
                  <table className="table">
                     <thead>
                      <tr>
                      <th>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">Coupon Code</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </th>
                      <th>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">Description</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </th>
                      <th>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">Discount Type</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </th>
                      <th>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">Discount Rate</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </th>
                      <th>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">Expiry Date</label>
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
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                        
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>

                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                        
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <td>
                        <Link to=""><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
                       </td>
                       <td>
                        <Link to=""><img src="/admin_asset/images/delete.png" alt=""/></Link>
                       </td>
                      </tr>
                      <tr>
                       <td>
                        <Link to="coupon-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <p className="mb-0">COU00191</p>
                           </div>
                         </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
export default Coupons;