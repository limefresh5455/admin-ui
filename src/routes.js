import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Admin/components/header/Header';
import Footer from './Admin/components/footer/Footer';
import Sidebar from './Admin/components/sidebar/Sidebar';
import Login from './Admin/components/login/Login';
import Home from './Admin/components/home/Home';
import Curricum from './Admin/components/curricum/Curricum';
import CreateCurricum from './Admin/components/curricum/Create-Curriculum';
import CurricumDetails from './Admin/components/curricum/Curriculum-Details';
import Batches from './Admin/components/batches/Batches';
import CreateBatch from './Admin/components/batches/Create-Batch';
import BatchDetails from './Admin/components/batches/Batch-Details';
import AllTasks from './Admin/components/tasks/AllTasks';
import CreateTask from './Admin/components/tasks/Create-Task';
import TaskDetails from './Admin/components/tasks/Task-Details';
import AllTeachers from './Admin/components/teachers/AllTeachers';
import AddTeacher from './Admin/components/teachers/Add-Teacher';
import TeacherDetails from './Admin/components/teachers/Teacher-Details';
import Advertisement from './Admin/components/advertisement/Advertisement';
import AddAdvertisement from './Admin/components/advertisement/Add-Advertisement';
import AdvertisementDetails from './Admin/components/advertisement/Advertisement-Details';
import Coupons from './Admin/components/coupons/Coupons';
import AddCoupons from './Admin/components/coupons/Add-Coupons';
import CouponsDetails from './Admin/components/coupons/Coupons-Details';
import Content from './Admin/components/content/Content';
import AddContent from './Admin/components/content/AddContent';
import ContentDetail from './Admin/components/content/Content-Detail';
import Lessons from './Admin/components/lessons/Lessons';
import AddLessons from './Admin/components/lessons/AddLessons';
import AddPrice from './Admin/components/price/Add-Price';
import TenantConfig from './Admin/components/tenantconfig/TenantConfig';
import Report from './Admin/components/report/Report';
import Profile from './Admin/components/profile/Profile';
import UpdateProfile from './Admin/components/profile/UpdateProfile';
import Settings from './Admin/components/settings/Settings';
import HelpSupport from './Admin/components/helpsupport/HelpSupport';
import Logout from './Admin/components/logout/Logout';
import authCognitoService from './services/authCognitoService';
function AdminRoutes() {
  const [tenantId, setTenantId] = useState();
  useEffect(() => {
    new authCognitoService().getAuthCognitoData().then(data => {
      if(data){
        setTenantId(data.tenantId)
      }
    });
  }, [tenantId]);
  return (
        <main className="d-flex min-vh-100 flex-column">
         <div className="dashboard d-flex min-vh-100">
      	  <Sidebar/>
         <div className="right-sidebar d-flex flex-column togrightin">  
          <Header/>
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />

            <Route path="/curricum" render={ (props) => <Curricum tenantId={tenantId}/> } />
            <Route path="/create-curriculum" render={ (props) => <CreateCurricum tenantId={tenantId}/> }  />
            <Route path="/curricum-details" render={ (props) => <CurricumDetails tenantId={tenantId}/> }  />

            <Route path="/lessons" render={ (props) => <Lessons tenantId={tenantId}/> }  />
            <Route path="/add-lesson" render={ (props) => <AddLessons tenantId={tenantId}/> }  />
            <Route path="/add-price" render={ (props) => <AddPrice tenantId={tenantId}/> }  />

            <Route path="/batches" component={Batches} />
            <Route path="/create-batch" component={CreateBatch} />
            <Route path="/batch-detial" component={BatchDetails} />

            <Route path="/alltasks" component={AllTasks} />
            <Route path="/create-task" component={CreateTask} />
            <Route path="/task-details" component={TaskDetails} />

            <Route path="/allteachers" component={AllTeachers} />
            <Route path="/add-teacher" component={AddTeacher} />
            <Route path="/teacher-detail" component={TeacherDetails} />

            <Route path="/advertisement" component={Advertisement} />
            <Route path="/add-advertisement" component={AddAdvertisement} />
            <Route path="/adversement-detail" component={AdvertisementDetails} />

            <Route path="/coupons" component={Coupons} />
            <Route path="/add-coupon" component={AddCoupons} />
            <Route path="/coupon-detail" component={CouponsDetails} />
            
            <Route path="/content" component={Content} />
            <Route path="/add-content" component={AddContent} />
            <Route path="/content-detail" component={ContentDetail} />
           
            <Route path="/tenantconfig" component={TenantConfig} />
            <Route path="/report" component={Report} />
            <Route path="/profile" component={Profile} />
            <Route path="/edit-profile" component={UpdateProfile} />
            <Route path="/settings" component={Settings} />
            <Route path="/help_support" component={HelpSupport} />
            <Route path="/logout" component={Logout} />
          </Switch>  
          <Footer/>
          </div>
          </div>
          </main>
  );
}

export default AdminRoutes;
