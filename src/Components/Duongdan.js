import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
// import privateRouter from '../ProtectingRouter/PrivateRouter';
// import Profile from './Profile';
import Register from './Register';
import Danhmuc from './Danhmuc';
import Sanpham from './Sanpham';
import admin from './admin';
import Listsp from '../sp/Listsp';
import Listdanhmuc from '../Danhmuc/Listdanhmuc';
import test from './test';
import trangchu from './trangchu';
import share from './share';
import Detail  from './Detail';
// import Register from './Register';
// import UpdateProfile from './UpdateProfile';

function DuongDanURL() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/danhmuc" component={Danhmuc} />
      <Route path="/addsanpham"  component={Sanpham} />
      <Route path="/admin"  component={admin} />
      <Route path="/share"  component={share} />
      <Route path="/trangchu"  component={trangchu} />
      <Route path="/Detail"  component={Detail} />
      <Route path="/Listsp"  component={Listsp} />
      <Route path="/Listdanhmuc"  component={Listdanhmuc} />
      {/* <PrivateRouter path="/profile" roles={['user']} component={Profile} />
      <PrivateRouter path="/admin" roles={['admin']} component={Admin} />
      <PrivateRouter path="/:id/createProfile" roles={['user']} component={CreateProfile} />
      <PrivateRouter path="/:name/updateProfile" roles={['user']} component={UpdateProfile} /> */}
    </Switch>
  );
}


export default DuongDanURL;
