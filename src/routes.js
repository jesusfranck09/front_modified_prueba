import React from 'react';


const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const correosok = React.lazy(() => import('./emails/emailsOk'));
const correosBad = React.lazy(() => import('./emails/emailsBad'));
const correosNone = React.lazy(() => import('./emails/EmailNone'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/correos', exact: true, name: 'correos', component: correosok },
  { path: '/correosBad', exact: true, name: 'correosBad', component: correosBad},
  { path: '/correosNone', exact: true, name: 'correosNone', component: correosNone},
 
];

export default routes;  







