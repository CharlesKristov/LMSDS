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
import './ComponentPage.scss';
import Button from '../../components/c_button';
import { useLocation, useParams } from 'react-router-dom';

interface ItemType {
    itemID: string;
    itemName: string;
    itemImageHeroesURL: string;
    itemHeroesDescription: string;
    itemCode: string;
    itemDescription: string;
    itemAccessibilty: string;
    createdBy: string;
    createdDate: Date;
    lastUpdatedDate: Date;
    lastUpdatedBy: string;
    isDeleted: boolean;
}

const ComponentPage = () => {

    const url = useParams().componentName;

    const [items, setItems] = useState<ItemType[]>([]); // Explicitly define the type of items

    const fetchItems = () => {
        fetch(`http://localhost:5184/api/Item/ItemGetByName/${url}`)
        .then((response) =>response.json())
        .then((data: ItemType[]) => {
            setItems(data);
        })
        .catch((error)=>console.error('Error get data: ', error));
    }

    useEffect(() => {
        fetchItems()
    }, [
        useLocation().pathname
    ]);





    hljs.registerLanguage('javascript', javascript);


    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightAll();
    }, []);

    const codeString = `
    import Button from '../../components/c_button';
    <Button theme='primary'>primary</Button>
    <Button theme='secondary'>secondary</Button>
    <Button theme='dangerous'>dangerous</Button>
    `;

    const handleCopyCode = () => {
        const codeElement = document.querySelector('.language-js');
        if (codeElement) {
            navigator.clipboard.writeText(codeElement?.textContent || '');
            // Optionally, provide user feedback (e.g., tooltip, toast) that the code is copied.
        }
    };


    return (
        <main className="main" id="MainSection">
            <div className="HeroesContainer">
                <div className="HeroesTitleDesc d-flex flex-column">
                    <div className="HeroesTitle h1 fw-bolder">{items[0]?.itemName}</div>
                    <div className="HeroesDesc">{items[0]?.itemHeroesDescription}</div>
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
                    {
                        items[0]?.itemDescription
                    }
                    {/* <ul className="list-group ms-3">
                        <li >Can contain an optional leading icon</li>
                        <li >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, necessitatibus amet excepturi aperiam distinctio ex vitae eum harum mollitia atque temporibus accusantium architecto, corporis nulla officiis a itaque aliquam qui.</li>
                        <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas qui rem dicta tenetur, laborum alias consectetur. Temporibus asperiores dolorem in perspiciatis quas. Maiores incidunt blanditiis accusamus laboriosam eveniet quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia ipsum officia qui harum dolorem nemo unde perferendis non hic possimus, aperiam dolor consequuntur, rem praesentium sapiente dicta aliquid eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit numquam, consequuntur sequi ratione doloremque non amet ipsa? Accusantium inventore explicabo modi, ad iure suscipit aliquam labore ab illum iusto voluptates!</li>
                    </ul> */}
                </div>
                <div className="ComponentCode mt-4" id='ComponentCode'>
                    <div className="ComponentCodeTitle h1 fw-bold">Code</div>
                    <div className="ComponentCodeValue d-flex flex-column">
                        {
                            items[0]?.itemCode
                        }
                        {/* <p>Lorem ipsum,  estsit amet consectetur, adipisicing elit. Dolor, facilis beatae consequuntur obcaecati ducimus eveniet sit, dolore rerum nemo temporibus quam cupiditate fugit porro officia. Magnam consequuntur assumenda consequatur. Dolorum?</p>

                        <div className="codeSection d-flex flex-column bg-dark rounded pt-2  pb-0">
                            <div className="codeExample d-flex flex-row justify-content-evenly mb-3">
                                <Button theme='primary'>primary</Button>
                                <Button theme='secondary'>secondary</Button>
                                <Button theme='dangerous'>dangerous</Button>
                            </div>

                            <div className="codeFunction bg-black text-end pe-2">
                                <button onClick={handleCopyCode}><img src="https://www.svgrepo.com/show/3110/copy.svg" alt="copyImage" /></button>
                            </div>

                            <pre>
                                <code className="language-js">
                                    {codeString}
                                </code>
                            </pre>
                        </div> */}

                    </div>
                </div>
                <div className="ComponentAccessibility mt-4 " id='ComponentAccessibility'>
                    <div className="ComponentAccessibilityTitle h1 fw-bold">Accessibility</div>
                    <div className="ComponentAccessibilityValue">
                        {items[0]?.itemAccessibilty}
                    </div>
                </div>
            </div>
        </main>
    );
}
// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default ComponentPage;


