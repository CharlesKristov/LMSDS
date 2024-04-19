import React from 'react';
import IconPage from '../views/icon_page/IconPage';
import Overview from '../views/overview/Overview';

const ManageIcon = React.lazy(() => import('../views/manage_icon/ManageIcon'));
const ManageComponent = React.lazy(() => import('../views/manage_component/ManageComponent'));
const ComponentPage = React.lazy(() => import('../views/component/ComponentPage'));


export const routes = [
    { path: '/getting-started', name: 'Getting Started', element: Overview },
    
    //BE
    // { path: `/components/:componentName`, name: 'ComponentPage', element: ComponentPage },
    
    // non BE
    { path: '/components/button', name: 'ComponentButton', element: ComponentPage },
    { path: '/components/card', name: 'Component Card', element: ComponentPage },
    { path: '/icons', name: 'Icon Schedule', element: IconPage },
]

export const privateRoutes = [
    { path: '/manage/icon', name: 'ManageIcon', element: ManageIcon },
    { path: '/manage/component', name: 'ManageComponent', element: ManageComponent },
]