import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import curriculumsService from '../../services/curriculumsService';
function AddPrice(props) {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
  const priceData = {
              curriculumId: localStorage.getItem('CurrentCurriculumId'),
              actualPrice: data.totalprice,
              discountedPrice: data.discountprice,
              planTitle: data.title,
              planDescription: data.description,
              currency: data.currency,
              amount: data.monthlyindivisualprice,
              cycles: data.paymentcycles,             
              pricingType: "Monthly",
              courseType: "1",
              planId: "",
        }; 
        console.log("bdhbh",priceData)
        new curriculumsService().addPrice(priceData, props.tenantId).then(data => {
            console.log("after price form submit",data)
              history.push('add-lesson')
            }); 
}  

        return (
        <Form onSubmit={handleSubmit(onSubmit)}>  
            <div className="dash-content flex-grow-1 batchss">
                    <div className="banner-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Create Price</h2>
                        </div>
                      </div>
                      <div className="batch-card">                       
                        <div className="row">
                          <div className="col-md-12">
                            <h3>Pricing Details</h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                                  <label htmlFor="Currency Type">Currency Type</label>
                                  <select className="form-control" ref={register({ required: true })} name="currency">
                                    <option>US Dollar</option>
                                    <option>INR Rupees</option>
                                  </select>
                                {errors.name && <p className="errorMsg">This field is Required</p>}  
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="Teacher Name">Total package price for Indivisual</label>
                                  <input type="text" className="form-control" ref={register({ required: true })} name="totalprice" placeholder="$ 500"/>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="Teacher Name">Discount price for Indivisual</label>
                                  <input type="text" className="form-control" ref={register({ required: true })} name="discountprice" placeholder="$ 250"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group swtcbtn">
                              <span>Is Subscription Available?</span>
                              <label className="switch">
                                <input type="checkbox" ref={register({ required: false })} name="isSubscavailable"/>
                                <span className="slider round"></span>
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="Teacher Name">Select an existing plan</label>
                                  <input type="radio" className="form-control" ref={register({ required: false })} name="plan"/>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="Teacher Name">create a new plan</label>
                                  <input type="radio" className="form-control" ref={register({ required: false })} name="plan"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div> 
                    <div className="batch-card">
                          <div className="row">
                            <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="Plan Name">Plan Title</label>
                                      <input type="text" className="form-control" ref={register({ required: false })} name="title" placeholder="Plan Title"/>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="Monthly Price">Monthly Price for Indivisual</label>
                                          <input type="text" className="form-control" ref={register({ required: false })} name="monthlyindivisualprice" placeholder="$50"/>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-group">
                                            <label htmlFor="Months payments">Number of Months/Payments</label>
                                              <select className="form-control" id="Monthspayments" ref={register({ required: false })} name="paymentcycles">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                              </select>
                                          </div>
                                      </div>
                                    </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label htmlFor="exampleFormControlTextarea1">Plan Description</label>
                                  <textarea className="form-control" ref={register({ required: false })} name="description" rows="10"></textarea>
                              </div>
                              </div>      
                          </div>      
                    </div>      
        				</div>
                <div className="space" style={{ height:"680px" }}></div>
                 <div className="button-group">
                  <Link to="curricum"><button type="button" className="btn btn-primary cancel">Cancel</button></Link>
                  <button type="submit" className="btn btn-primary save">Save and Go to Lesson Tab</button>
                  </div>
             </div>
          </Form>   
        );
}
export default AddPrice;