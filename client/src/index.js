import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { PrivateRoute } from './_components';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './dashboard.css'
import './styles/style.scss';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './Pages/Home/Home';
import Register from './Pages/register/Register';
import Login from './Pages/Login/Login';
import Feeds from './Pages/Feeds/Feeds';
import Play from './Pages/Play/Play.js';
import NewBlog from './Pages/CreateBlog/CreateBlog.js';
import About from './Pages/About/About.js';
import AddCredits from './Pages/AddCredits/AddCredits.js';
import ViewBlog from './Pages/ViewBlog/ViewBlog.js';
import ProfilePage from './Pages/ProfilePage/ProfilePage.js';
import MentorProfilePage from './Pages/MentorProfilePage/MentorProfilePage.js';
import MentorSignup from './Pages/MentorSignup/MentorSignup.js';
import MentorDetails from './Pages/MentorDetails/MentorDetails.js';
import registerServiceWorker from './registerServiceWorker';
// import LearnNow from './Pages/LearnNow/LearnNow.js';
// import Dashboard from './Pages/Dashboard/Dashboard.js';
import Pricing from './Pages/Pricing/Pricing.js';
import CodeTerminal from './Pages/CodeTerminal/CodeTerminal';
import EditDetails from './Pages/EditDetails/EditDetails';

import NewHome from './Pages/NewHome/newHome';
import Mentors from './Pages/Mentors/Mentors';
import TakeCourse from './Pages/Mentors/TakeCourse';
import attachresume from './Pages/attachResume/attachResume';
import axios from 'axios';

const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `${token}`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Feeds" component={Feeds} />
          <Route exact path="/editDetails" component={EditDetails} />
           {/* <Route exact path="/features" component={Features} />  */}
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/Play" component={Play} />
          <Route exact path="/About" component={About} />
          {/* <PrivateRoute exact path="/AddCredits" component={AddCredits} />
            <PrivateRoute exact path="/ViewBlog" component={ViewBlog} />
            <PrivateRoute exact path="/NewBlog" component={NewBlog} />
            <PrivateRoute exact path="/ProfilePage" component={ProfilePage} /> */}
          <PrivateRoute exact path="/ProfilePage" component={ProfilePage} />
          <PrivateRoute exact path="/MentorProfile" component={MentorProfilePage} />
          <Route exact path="/MentorSignup" component={MentorSignup} />
          <Route exact path="/MentorDetails" component={MentorDetails} />
          <PrivateRoute exact path="/code-terminal" component={CodeTerminal} />
          <Route path="/login" component={Login} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/AddCredits" component={AddCredits} />
          <Route exact path="/ViewBlog" component={ViewBlog} />
          <Route exact path="/NewBlog" component={NewBlog} />
          <Route exact path="/ProfilePage" component={ProfilePage} />
          <PrivateRoute exact path='/studentdashboard' component={NewHome} />
          <PrivateRoute exact path='/mentors' component={Mentors} />
          <PrivateRoute exact path='/takecourse' component={TakeCourse} />
          <PrivateRoute exact path='/attachresume' component={attachresume} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();