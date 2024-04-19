//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component } from 'react';
import Moment from 'moment';
import { CFooter } from '@coreui/react';
import { useSelector } from 'react-redux';
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style

const AppFooter = () => {
    const data = useSelector((state: any) => state.combinedReducers.data);

    return (
        <CFooter className={`${data.sidebarShow ? 'sideBarActive' : 'sideBarInActive'} ${data.darkMode ? 'bt-dark' : 'bt-light'}`}>
            <div>
                <span>&copy; {Moment().year()} LMS DESIGN SYSTEM</span>
            </div>
            <div>
                <span>Powered by Charles Christopher - Matthew Sebastian</span>
            </div>
        </CFooter>
    )
}

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default AppFooter;
