//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai.css';

//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import { TextBox } from '../../components/form';
import './IconPage.scss';
import { IcnSearch } from '../../assets/icon';


const IconPage = () => {
    const icons = [
        {
            code: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 413.348 413.348"
        >
            <title>icon-close</title>
            <path
                d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"
            />
        </svg>`, name: "Close"
        },
        {
            code: ` <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 18 18"
        >
            <title>icon-schedule</title>
            <g stroke="none" stroke-width="1" fill-rule="evenodd">
                <g transform="translate(-24.000000, -334.000000)">
                    <g transform="translate(0.000000, 65.000000)">
                        <g transform="translate(24.000000, 269.000000)">
                            <path d="M6.0003,0 L6.0003,0.7497 L11.9997,0.7497 L11.9997,0 L13.5,0 L13.5,0.7497 L15.831,0.7497 C17.0676,0.7497 18,1.6038 18,2.7369 L18,2.7369 L18,15.984 C18,17.1144 17.0469,18 15.831,18 L15.831,18 L2.0529,18 C0.8631,18 0,17.1522 0,15.984 L0,15.984 L0,2.7369 C0,1.5858 0.8631,0.7497 2.0529,0.7497 L2.0529,0.7497 L4.5,0.7497 L4.5,0 L6.0003,0 Z M15.0003,12.7503 L11.9997,12.7503 L11.9997,15.75 L15.0003,15.75 L15.0003,12.7503 Z M10.5003,12.7503 L7.4997,12.7503 L7.4997,15.75 L10.5003,15.75 L10.5003,12.7503 Z M6.0003,12.7503 L3.0006,12.7503 L3.0006,15.75 L6.0003,15.75 L6.0003,12.7503 Z M15.0003,8.4006 L11.9997,8.4006 L11.9997,11.4003 L15.0003,11.4003 L15.0003,8.4006 Z M10.5003,8.4006 L7.4997,8.4006 L7.4997,11.4003 L10.5003,11.4003 L10.5003,8.4006 Z M6.0003,8.4006 L3.0006,8.4006 L3.0006,11.4003 L6.0003,11.4003 L6.0003,8.4006 Z M10.8693,3.3822 L7.1307,3.3822 C6.9237,3.3822 6.7563,3.5496 6.7563,3.7566 C6.7563,3.9636 6.9237,4.1319 7.1307,4.1319 L7.1307,4.1319 L10.8693,4.1319 C11.0763,4.1319 11.2437,3.9636 11.2437,3.7566 C11.2437,3.5496 11.0763,3.3822 10.8693,3.3822 L10.8693,3.3822 Z" id="icn-web-menu-schedule"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>`, name: "Schedule"
        },
        {
            code: ` <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 16 16"
        >
            <title>icon-search</title>
            <path d="M11.4351058,10.0628931 L10.7124071,10.0628931 L10.4562607,9.8158948 C11.352773,8.77301315 11.89251,7.41909663 11.89251,5.946255 C11.89251,2.66209262 9.23041738,0 5.946255,0 C2.66209262,0 0,2.66209262 0,5.946255 C0,9.23041738 2.66209262,11.89251 5.946255,11.89251 C7.41909663,11.89251 8.77301315,11.352773 9.8158948,10.4562607 L10.0628931,10.7124071 L10.0628931,11.4351058 L14.6369354,16 L16,14.6369354 L11.4351058,10.0628931 Z M5.946255,10.0628931 C3.66838193,10.0628931 1.82961692,8.22412807 1.82961692,5.946255 C1.82961692,3.66838193 3.66838193,1.82961692 5.946255,1.82961692 C8.22412807,1.82961692 10.0628931,3.66838193 10.0628931,5.946255 C10.0628931,8.22412807 8.22412807,10.0628931 5.946255,10.0628931 Z" />
        </svg>`, name: "Search"
        },
        {
            code: `<svg xmlns="http://www.w3.org/2000/svg" height="32px" widths="32px" viewBox="0 0 24 24">
            <title>icon-hamburger</title>
            <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
        </svg>`, name: "Hamburger"
        },
    ];
    const [listIcons, setListIcons] = useState(icons);
    const [searchQuery, setsearchQuery] = useState("");

    hljs.registerLanguage('javascript', javascript);

    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightAll();
    }, []);

    useEffect(() => {
        handleChangeSearch();
    }, [searchQuery])

    // const handleCopyCode = () => {
    //     const codeElement = document.querySelector('.language-js');
    //     if (codeElement) {
    //         navigator.clipboard.writeText(codeElement?.textContent || '');
    //         // Optionally, provide user feedback (e.g., tooltip, toast) that the code is copied.
    //     }
    // };

    const handleChangeSearch = () => {
        const filteredArray = icons.filter((element: any) => element.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
        console.log(searchQuery);
        setListIcons(filteredArray);
    }

    return (
        <main className="main" id="MainSection">
            <div className='py-4'>
                <h3><b>LMS Icons</b></h3>

                <div>
                    <hr />
                    <p>
                        Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                    </p>
                </div>

                <div className='card p-4'>
                    <div className='icon-card'>
                        <div className="flex-row search-recipient-wrapper mb-3">
                            <div className="flex-row icn-search-wrapper">
                                <IcnSearch width={18} height={18} />
                            </div>
                            <TextBox
                                placeholder="Search Icons..."
                                onChange={(e: any) => {
                                    setsearchQuery(e.target.value);
                                }}
                                value={searchQuery}
                                className="text-search font-size-14px"
                            />
                        </div>
                        <p style={{ marginBottom: '8px' }}>4 matching results</p>
                        <div>
                            {listIcons.map((data, index: number) => (
                                <div className='icon-result'>
                                    <div className='p-3 svg-icon-result' dangerouslySetInnerHTML={{ __html: data.code }}></div>
                                    <span className='text-icon-result'>{data.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="HeroesContainer">
                <div className="HeroesTitleDesc d-flex flex-column">
                    <div className="HeroesTitle h1 fw-bolder">Schedule</div>
                    <div className="HeroesDesc">The schedule icon in the LMS displays course timetables and deadlines efficiently.</div>
                </div>
                <div className="HeroesImage"></div>
            </div>
            <div className="ComponentSectionNavBar">
                <a className="buttonSection btn fw-semibold" href="#ComponentDescription">
                    <div id="" className="ButtonName" > Description</div>
                </a>
                <a className="buttonSection btn fw-semibold" href="#ComponentCode">
                    <div id="" className="ButtonName" > Code</div>
                </a>
                <a className="buttonSection btn fw-semibold" href="#ComponentAccessibility">
                    <div id="" className="ButtonName" > Accessibility</div>
                </a>
            </div>
            <div className="ComponentSectionMain mt-3">
                <div className="ComponentDescription mt-4">
                    <div className="ComponentDescriptionTitle h1 fw-bold" id='ComponentDescription'>Description</div>
                    <ul className="list-group ms-3">
                        <li >Students can personalize their schedules by interacting with the icon, allowing them to prioritize tasks and allocate time effectively.</li>
                        <li >The schedule icon within our Course Timetable section serves as a visual cue for students to manage their learning activities efficiently.</li>
                        <li >With its intuitive design, this icon enhances the user experience by providing a clear overview of upcoming events and deadlines.</li>
                    </ul>
                </div>
                <div className="ComponentCode mt-4" id='ComponentCode'>
                    <div className="ComponentCodeTitle h1 fw-bold">Code</div>
                    <div className="ComponentCodeValue d-flex flex-column">
                        <p>Lorem ipsum,  estsit amet consectetur, adipisicing elit. Dolor.</p>

                        <div className="codeSection d-flex flex-column bg-dark rounded pb-0">
                            <div className="codeExample d-flex flex-row justify-content-evenly p-4">
                                <IcnSchedule />
                            </div>

                            <div className="codeFunction text-end p-2">
                                <button onClick={handleExpandCode} className='p-1 ex-code'>{showExpandCode ? 'Expand Code': 'Collapse Code'}</button>
                                <button onClick={handleCopyCode} className='p-1'><IcnCopy /></button>
                            </div>

                            <pre style={{ marginBottom: "0" }}>
                                <code className="language-js">
                                    {code}
                                </code>
                            </pre>
                        </div>

                    </div>
                </div>
                <div className="ComponentAccessibility mt-4 " id='ComponentAccessibility'>
                    <div className="ComponentAccessibilityTitle h1 fw-bold">Accessibility</div>
                    <div className="ComponentAccessibilityValue">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic reiciendis officiis architecto, illum nam vitae deleniti eaque recusandae explicabo accusantium nostrum eveniet est inventore delectus pariatur excepturi optio qui magni!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores quo nesciunt vero quos quam nostrum tempore est optio suscipit veritatis ipsum corporis, odit repellendus cumque id earum asperiores eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse corrupti cum quas tenetur accusantium delectus pariatur perferendis, ex aspernatur soluta aut tempora aliquam iste reiciendis in modi quam nam omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore ut porro. Placeat quia magni animi aliquam earum. Necessitatibus pariatur commodi aut dolores cupiditate voluptatem recusandae obcaecati facilis, quibusdam quas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, facilis beatae consequuntur obcaecati ducimus eveniet sit, dolore rerum nemo temporibus quam cupiditate fugit porro officia. Magnam consequuntur assumenda consequatur. Dolorum?
                    </div>
                </div>
            </div> */}
        </main >
    );
}
// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default IconPage;


