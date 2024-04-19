//  Region Import External Lib (e.g React, Reactstrap, etc)
import 'bootstrap/dist/css/bootstrap.css';
import 'highlight.js/styles/monokai.css';
import Button from '../components/c_button';
import { IcnHamburger } from '../assets/icon';
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import { useEffect, useState } from 'react';


const LandingPage = () => {




    return (
        <>
            <main className="py-4">
                <div className="heroesContent text-center mb-4">
                    <div className="WelcomePageTitle h1 bolder mb-4">LMS DESIGN SYSTEM</div>
                    <div className="WelcomePageDesc h4 bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam iusto dolore ad, tenetur, consectetur modi molestiae error architecto porro suscipit! Ab quibusdam nam laborum id exercitationem, debitis voluptatibus perspiciatis!</div>
                    <div className="WelcomePageButton mb-2">
                        <Button theme="binus-blue">
                            Get Started
                        </Button>
                    </div>
                </div>

                <div className="sectionContent mb-4">
                    <h3>What Is A Design System ?</h3>
                    <p>A design system is a set of standards to manage design at scale by reducing redundancy while creating a shared language and visual consistency across different pages and channels.</p>
                </div>

                <div className="sectionContent mb-4">
                    <h3>What Is WCAG (Web Content Accessibility Guidelines) ?</h3>
                    <p>Web Content Accessibility Guidelines (WCAG) 2 is developed through the W3C process in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.</p>
                </div>

                <div className="sectionContent">
                    <h3>Component And Icon</h3>
                    <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio inventore amet nam nemo quo minima quas assumenda ducimus nihil iste soluta, autem doloremque optio recusandae enim blanditiis incidunt delectus adipisci.</p>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <Button className='primary m-3'>Button</Button>
                                <div className="card-body">
                                    <h5 className="card-title">Button</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div style={{ padding: '10px 16px' }} className='d-flex justify-content-center'>
                                    <IcnHamburger className="m-3" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Icon</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                {/* <img src="https://cdn.dribbble.com/userupload/3345600/file/original-529d9d726fef0fa12490f251d7e61d08.png?resize=400x0" className="card-img-top" alt="Design System" /> */}
                                <div style={{ padding: '10px 16px' }} className='d-flex justify-content-center'>
                                    <IcnHamburger className="m-3" />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">Other</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default LandingPage;