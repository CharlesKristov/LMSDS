import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { CBadge } from '@coreui/react'
import { Console } from 'console'



export const AppSidebarNav = ({ items }: { items: any }) => {
    const location = useLocation()
    

    const navLink = (name: any, icon: any) => {
        return (
            <>
                {icon && icon}
                {name && name}
            </>
        )
    }


    const navItem = (item: any, index: any) => {
        const { component, name, badge, icon, ...rest } = item
        const Component = component
        return (
            <Component
                {...(rest.to &&
                    !rest.items && {
                    component: NavLink,
                })}
                key={index}
                {...rest}
            >
                {navLink(name, icon)}
            </Component>
        )
    }

    const navGroup = (item: any, index: any) => {
        const { component, name, icon, to } = item
        const Component = component
        return (
            <Component
                idx={String(index)}
                key={index}
                toggler={navLink(name, icon)}
                visible={location.pathname.startsWith(to)}
            >
                {item.items?.map((item: any, index: number) =>
                    item.items ? navGroup(item, index) : navItem(item, index),
                )}
            </Component>
        )
    }
    return (
        <React.Fragment>
            {items &&
                items.map((item: any, index: number) => (item.items ? navGroup(item, index) : navItem(item, index)))}
        </React.Fragment>
    )
}

AppSidebarNav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
