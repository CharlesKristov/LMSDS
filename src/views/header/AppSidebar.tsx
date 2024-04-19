import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'
import SimpleBar from 'simplebar-react'
import { setShowSideBar } from '../../config/store/slices/stateReducer'
import { navigation, privateNavigation } from '../../config/Navigation'

// sidebar nav config

const AppSidebar = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.combinedReducers.data);
    const role = useSelector((state: any) => state.combinedReducers.login.data.role);

    return (
        <CSidebar
            visible={data.sidebarShow}
            onVisibleChange={(visible: any) => {
                dispatch(setShowSideBar(visible));
            }}
            className={`${data.darkMode ? 'br-dark' : 'br-light'}`}
        >
            <CSidebarNav>
                {/* <SimpleBar> */}
                {
                    role === 'admin' ?
                        <AppSidebarNav items={privateNavigation} />
                        :
                        <AppSidebarNav items={navigation} />
                }
                {/* </SimpleBar> */}
            </CSidebarNav>
        </CSidebar>
    )
}

export default React.memo(AppSidebar)
