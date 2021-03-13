import React from 'react';
import { Link } from 'react-router-dom';
function AllTasks(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main detialbbner">
                       <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                               <Link to="alltasks"> <p><span><img src="/admin_asset/images/back.png" alt=""/></span>All Tasks</p></Link><br/>
                                
                              </div>
                              <div className="col-md-9">
                                <Link to="create-task"><button type="button" className="btn btn-primary edit-detial"><i className="fa fa-pencil-alt"></i>Edit Details</button></Link>
                                
                              </div>
                          </div> 
                          <div className="row">
                              <div className="col-md-2">
                                <img src="/admin_asset/images/group.svg" alt=""/>
                              </div>
                              <div className="col-md-10">
                                <p>Curriculum: &nbsp;&nbsp;<b>Adobe Photoshop : Level 1</b></p>
                                <p>Lesson: &nbsp;&nbsp;<b>Introduction Lesson</b></p>
                                <h3>Lorem Ipsum dolor sit ameco</h3>
                              </div>
                        </div>
                        </div>  
        				    </div>
                    <div className="contentboxtable">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh... non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id.</p>
                            <h3> Task Contents</h3>
                            <div id="accordion" className="accordion">
                              <div className="card mb-0">
                                  <div className="card-header" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                                      <Link className="card-title"> Content 01 </Link>
                                  </div>
                                  <div id="collapseOne" className="card-body collapse show" data-parent="#accordion">
                                      <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                                  </div>
                                  <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false">
                                      <Link className="card-title"> Content 02 </Link>
                                  </div>
                                  <div id="collapseTwo" className="card-body collapse" data-parent="#accordion">
                                      <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                                  </div>
                                  <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false">
                                      <Link className="card-title"> Content 03 </Link>
                                  </div>
                                  <div id="collapseThree" className="collapse" data-parent="#accordion">
                                      <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS. </div>
                                  </div>
                              </div>
                             </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
        );
}
export default AllTasks;