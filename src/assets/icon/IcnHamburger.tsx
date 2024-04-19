import React from 'react';

const IcnHamburger = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={props.height || "24"} widths={props.width || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...props}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

export default IcnHamburger;
