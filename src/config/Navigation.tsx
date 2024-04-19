import { CNavGroup } from "@coreui/react";
import { CNavItem } from "@coreui/react";
import { IcnDocumentation } from "../assets/icon";
import { useEffect, useState } from "react";
import { Component } from "jodit/esm/modules";


export const navigation = [
    {
        component: CNavGroup,
        name: 'getting-started',
        to: '/getting-started',
        // icon: <IcnDocumentation />,
        items: [
            {
                component: CNavItem,
                name: 'Overview',
                to: '/getting-started',
            },
            {
                component: CNavItem,
                name: 'Installation',
                to: '/getting-started/installation/',
            },
            {
                component: CNavItem,
                name: 'FAQs',
                to: '/getting-started/faq/',
            },
            {
                component: CNavItem,
                name: 'Support',
                to: '/getting-started/support/',
            },
        ]
    },
    {
        component: CNavGroup,
        name: 'Components',
        to: '/components',
        items: [
            {
                component: CNavItem,
                name: 'Button',
                to: '/components/button',
            },
            {
                component: CNavItem,
                name: 'Card',
                to: '/components/card',
            },
        ]
    },
    {
        component: CNavItem,
        name: 'Icons',
        to: '/icons',
    },
]

export const privateNavigation = [
    {
        component: CNavGroup,
        name: 'Getting Started',
        to: '/getting-started',
        // icon: <IcnDocumentation />,
        items: [
            {
                component: CNavItem,
                name: 'Overview',
                to: '/getting-started',
            },
            {
                component: CNavItem,
                name: 'Installation',
                to: '/getting-started/installation/',
            },
            {
                component: CNavItem,
                name: 'FAQs',
                to: '/getting-started/faq/',
            },
            {
                component: CNavItem,
                name: 'Support',
                to: '/getting-started/support/',
            },
        ]
    },
    {
        component: CNavGroup,
        name: 'Components',
        to: '/components',
        items: [
            {
                component: CNavItem
            }
        ]
    },
    {
        component: CNavItem,
        name: 'Icons',
        to: '/icons',
    },
    {
        component: CNavGroup,
        name: 'Manage Item',
        to: '/manage',
        items: [
            {
                component: CNavItem,
                name: 'Component',
                to: '/manage/component',
            },
            {
                component: CNavItem,
                name: 'Icon',
                to: '/manage/icon',
            },
        ]
    },
]

const fetchItemsFromAPI = async () => {
    try {
        const response = await fetch('http://localhost:5184/api/Item/ItemGetAll');
        if (!response.ok) {
            throw new Error('Failed to fetch items from API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching items from API:', error);
        return []; // Return empty array in case of error
    }
};

const pushNavigationItems = async (navigationArray : any) => {
    for (let item of navigationArray) {
        if (item.items && item.items.length > 0) {
            const fetchedItems = await fetchItemsFromAPI();

            if(item.name === 'Components')
            {
                item.items = fetchedItems.map((fetchedItem: any)=>({
                    component: CNavItem,
                    name: fetchedItem.itemName,
                    to: '/components/'+fetchedItem.itemName
                })); // Replace items with fetched data
            }

        }
    }
};

pushNavigationItems(privateNavigation);