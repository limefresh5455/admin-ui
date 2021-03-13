import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import curriculumsService from '../../services/curriculumsService';
function Curricum (props) {
	const [curriculumData, setCurriculumData] = useState([]);
	useEffect(() => {
        async function fetchData() {
          new curriculumsService().getCurriculums(props.tenantId).then(data => {
              setCurriculumData({...data})  
          });
        }
        fetchData();
    },[props.tenantId]);

    async function deleteCurriculum(currid)
    {
    	alert(currid)
    }
        return (
        	<>
            <div className="dash-content flex-grow-1">
                   <div className="row">
                       <div className="col-md-8 col-7">
                           <h2 className="cus-heading mb-3">All Curriculums</h2>
                       </div>
                       <div className="col-md-4 col-5 filtrcol">
                           <Link to="create-curriculum"><button className="btn btn-theme-light btn-rounded filters"><i className="fa fa-plus"></i> Create Curriculum</button></Link>
                       </div>
                   </div>
				        <section className="sliders mb-sm-4">
                     <div className="row">
                        <div className="col-lg-12">
                           
                           <ul className="nav nav-tabs">
                              <li className="nav-item">
                                 <Link to="#active" className="nav-link active" data-toggle="tab" >Active</Link>
                              </li>
                              <li className="nav-item">
                                 <Link to="#inactive" className="nav-link" data-toggle="tab" >Inactive</Link>
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
													<label htmlFor="exampleFormControlInput1">Curriculum Name</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label htmlFor="exampleFormControlInput1">Rating</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label htmlFor="exampleFormControlInput1">Description</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label htmlFor="exampleFormControlInput1">Lessons</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label htmlFor="exampleFormControlInput1">Grade</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label htmlFor="exampleFormControlInput1">Type</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th>
												<div className="form-group">
													<label htmlFor="exampleFormControlInput1">Trial</label>
													<input type="text" className="form-control"/>
												</div>
											</th>
											<th colSpan="2">
											</th>
											<th colSpan="2">
											</th>
										  </tr>
									   </thead>
									   <tbody>
			{( Object.keys(curriculumData).map( (curriculum, index) => {						  
										return (  
										  <tr key={index}>
											 <td>
												<Link to="curricum-details">
                          <div className="course d-flex align-items-center">
                           <img src="/admin_asset/images/python.png" alt="python" className="img-fluid mr-2 rounded-circle"/>
                           <p className="mb-0">{curriculumData[curriculum].title}</p>
                         
                        </div>
                        </Link>
												
								 </td>
								 <td>
									<img src="/admin_asset/images/ratings.png" alt="ratings" className="img-fluid ratings"/>
								 </td>
								 <td>
									<p className="mb-0">{curriculumData[curriculum].description}</p>
								 </td>
								 <td>
									<p className="mb-0">{curriculumData[curriculum].numberOfLessons}</p>
								 </td>
								 <td>
									<p className="mb-0">{curriculumData[curriculum].grade}</p>
								 </td>
								 <td>
									<p className="mb-0">{curriculumData[curriculum].IndividualCurriculumType}</p>
								 </td>
								 <td>
									
									<p className="mb-0"> {curriculumData[curriculum].isTrialAvailable===1 ? (
										"Yes"
								      ) : (
								        "No"
								      )}</p>
								 </td>
								 <td>
									<Link to=""></Link>
								 </td>
								 <td>
									<Link to={'editCurriculum/'+curriculumData[curriculum].curriculumId}><img src="/admin_asset/images/editdetail.png" alt=""/></Link>
								 </td>
								 <td>
									<span onClick={() => deleteCurriculum(curriculumData[curriculum].curriculumId)}><img src="/admin_asset/images/delete.png" alt=""/></span>
								 </td>
							  </tr>);
						})
            )}						  
									   </tbody>
									</table>
								 </div>
							  </div>
							</div>
						</div>
					</div>
				</section>
				</div>
				</>
        );
}
export default Curricum;