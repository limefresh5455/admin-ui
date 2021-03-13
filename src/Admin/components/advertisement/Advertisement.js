import React from 'react';
import { Link } from 'react-router-dom';
function Advertisement(props) {
        return (
            <div className="dash-content flex-grow-1">
                   <div className="row">
                       <div className="col-md-8 col-7">
                           <h2 className="cus-heading mb-3">All Advertisements</h2>
                       </div>
                       <div className="col-md-4 col-5 filtrcol">
                           <Link to="add-advertisement"><button className="btn btn-theme-light btn-rounded filters"><i className="fa fa-plus"></i> Add Advertisement</button></Link>
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
                          <label for="exampleFormControlInput1">Curriculum</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </th>
                      <th>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">Advertisement Title</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </th>
                      <th>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">Description</label>
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
                        <Link to="adversement-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/photoshop.png" alt="user" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Adobe Photoshop : Level 1</p>
                         
                        </div>
                        </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                        <Link to="adversement-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/photoshop.png" alt="user" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Adobe Photoshop : Level 1</p>
                         
                        </div>
                        </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                        <Link to="adversement-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/photoshop.png" alt="user" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Adobe Photoshop : Level 1</p>
                         
                        </div>
                        </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                       <Link to="adversement-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/photoshop.png" alt="user" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Adobe Photoshop : Level 1</p>
                         
                        </div>
                        </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                        <Link to="adversement-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/photoshop.png" alt="user" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Adobe Photoshop : Level 1</p>
                         
                        </div>
                        </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                        <Link to="adversement-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/photoshop.png" alt="user" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Adobe Photoshop : Level 1</p>
                         
                        </div>
                        </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
                        <Link to="adversement-detail" className="clrbt">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/photoshop.png" alt="user" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">Adobe Photoshop : Level 1</p>
                         
                        </div>
                        </Link>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum</p>
                       </td>
                       <td>
                        <p className="mb-0">Lorem Ipsum dolor sit amen..</p>
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
export default Advertisement;