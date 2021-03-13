import React from 'react';
// import { Link } from 'react-router-dom';
function AddAdvertisement(props) {
        return (
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Add Advertisement</h2>
                        </div>
                      </div>
                      <div className="batch-card">
                          <div className="row">
                            <div className="col-md-6">
                                    <div className="form-group">
                                      <label for="Teacher Name">Add Advertisement</label>
                                      <select className="form-control" id="Curriculum">
                                        <option>Adobe Photoshop: Level 2</option>
                                        <option>Adobe Photoshop: Level 2</option>
                                        <option>Adobe Photoshop: Level 2</option>
                                        <option>Adobe Photoshop: Level 2</option>
                                        <option>Adobe Photoshop: Level 2</option>
                                      </select>
                                    </div>
                                    <div className="form-group">
                                      <label for="Teacher Name">Advertisement Title</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="LoremIpsum@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Add image</label>
                                   <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Lorem Ipsum"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Advertisement Description</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh…</textarea>
                              </div>
                            </div>
                        </div>
                    </div>       
                </div>
                <div className="space"></div>
                 <div className="button-group">
                  <button type="button" className="btn btn-primary cancel">Cancel</button>
                  <button type="button" className="btn btn-primary save">Submit</button>
                  </div>
                  </div>
        );
}
export default AddAdvertisement;