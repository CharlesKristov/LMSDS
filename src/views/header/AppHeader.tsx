//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Button, Input, Modal, ModalBody, Nav } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CHeader } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import { setDarkMode, setLoginSuccess, setShowSideBar } from '../../config/store/slices/stateReducer';
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets
// import logoBinus from '../../assets/img/logo-binus.png';
import IcnHamburger from '../../assets/icon/IcnHamburger';
import IcnSearch from '../../assets/icon/IcnSearch';
import IcnDark from '../../assets/icon/IcnDark';
import IcnLight from '../../assets/icon/IcnLight';
import Profile from '../profile/profile';
// import { getUser } from '../../config/store/slices/loginReducer';

const AppHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((state: any) => state.combinedReducers.data);
    const [dataUser, setDataUser] = useState<any>();
    const [showLoginGoogle, setShowLoginGoogle] = useState(Boolean);

    const handleLogoutUser = () => {
        googleLogout();
        dispatch(setLoginSuccess(true));
    }

    const toggleModal = () => {
        setShowLoginGoogle(!showLoginGoogle);
    };

    return (
        <>
            <CHeader className={`${data.darkMode ? 'bg-dark' : 'bg-light'}`}>
                {/* <CContainer fluid className={`navbar-padding ${darkMode ? 'bg-dark' : 'bg-light'}`}> */}
                <div className='align-items-center d-flex me-auto'>
                    {
                        data.loginSuccess && (
                            <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={() => dispatch(setShowSideBar(!data.sidebarShow))}>
                                <IcnHamburger />
                            </button>
                        )
                    }
                    <a onClick={() => navigate('/')} className="link-body-emphasis text-decoration-none p-3">
                        <span className="lms-header-title">LMS Design System</span>
                    </a>
                </div>
                {
                    data.loginSuccess && (
                        <div className='search-button'>
                            <form action={""} className='d-flex' role="search">
                                <Input
                                    id="Search"
                                    name="search"
                                    placeholder="Search"
                                    type="search"
                                    className='input'
                                />
                                <button className='search-icon ms-2 px-2'>
                                    <IcnSearch />
                                </button>
                            </form>
                        </div>
                    )
                }
                <div className='d-flex align-items-center ms-auto'>
                    <div className="container">
                        <label className="switch">
                            <input type="checkbox" id="dark-mode-toggle" onClick={() => dispatch(setDarkMode(!data.darkMode))} />
                            <span className="p-1 slider round d-flex justify-content-around align-items-center">
                                <div className='moon'>
                                    <IcnDark />
                                </div>
                                <div className="light">
                                    <IcnLight />
                                </div>
                            </span>
                        </label>
                    </div>
                    {
                        data.loginSuccess ?
                            <Nav className="ml-auto" navbar>
                                <Profile
                                    logout={handleLogoutUser}
                                    dataUser={dataUser}
                                />
                            </Nav>
                            :
                            <Button outline className={`w-100 ${data.darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={() => setShowLoginGoogle(true)}>LOGIN</Button>
                    }
                </div>
                {/* </CContainer> */}
            </CHeader >
            <Modal
                isOpen={showLoginGoogle}
                toggle={toggleModal}
                centered
            >
                <ModalBody>
                    {/* <div className='logo-wrapper d-flex flex-row align-items-center'>
                        <div className='pr-3'>  
                            <img src={logoBinus} alt="Binus University" height={"100px"} width={'250px'} />
                        </div>
                        <div className='lms ps-2 d-flex align-items-center text-center fw-bold'>
                            LMS DESIGN SYSTEM
                        </div>
                    </div> */}
                    <div className='d-flex justify-content-center fw-bold'>
                        LMS DESIGN SYSTEM
                    </div>
                    <div className='d-flex p-4 justify-content-center'>
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                if (credentialResponse.credential !== undefined) {
                                    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                                    setDataUser(credentialResponseDecoded);
                                }
                                dispatch(setLoginSuccess(true));
                                dispatch(setShowSideBar(true));
                                setShowLoginGoogle(false);
                                // dispatch(getUser());
                                navigate("/getting-started");
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </div>
                </ModalBody>
            </Modal>

        </>
    )
}

export default AppHeader;
