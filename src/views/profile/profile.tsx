//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import './Profile.scss';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import IcnLogout from '../../assets/icon/IcnLogout';

const Profile = (props: any) => {

    return (
        <>
            <UncontrolledDropdown nav direction="down">
                <DropdownToggle nav>
                    <img src={props.dataUser.picture} alt="" width="32" height="32" className="rounded-circle me-2" />
                </DropdownToggle>
                <DropdownMenu right className="menu-profile">
                    <DropdownItem
                        tag="div"
                        className="display-flex dropdown-avatar"
                    >
                        <img
                            src={props.dataUser.picture}
                            className={"user-picture rounded-circle"}
                        />
                        <div className="user-info">
                            <div className="user-info-name">{props.dataUser.name}</div>
                            <div className="user-info-code">{props.dataUser.email}</div>
                        </div>
                    </DropdownItem>
                    <DropdownItem onClick={props.logout} className="logout d-flex">
                        <div className='me-4'>
                            <IcnLogout />
                        </div>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </>
    )
}

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default Profile;
