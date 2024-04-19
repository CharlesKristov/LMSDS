import React from 'react';
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../views/header';

import './DefaultLayout.scss';
import { useSelector } from 'react-redux';

const DefaultLayout = () => {
    const data = useSelector((state: any) => state.combinedReducers.data);

    return (
        <div className={`${data.darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`} data-bs-theme={`${data.darkMode ? "dark" : "light"}`}>
            {
                data.loginSuccess && (
                    <AppSidebar />
                )
            }
            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className={`body flex-grow-1 px-3 ${data.sidebarShow ? 'sideBarActive' : 'sideBarInActive'}`}>
                    <AppContent />
                </div>
                <AppFooter />
            </div>
        </div>
    )
}

export default DefaultLayout;
