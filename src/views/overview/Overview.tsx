//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import './Overview.scss';
import Button from '../../components/c_button';

const Overview = () => {
    return (
        <main className="mt-4">
            <div className="heroesContent text-center mb-0 pb-1">
                <div className="WelcomePageTitle h1 bolder mb-4">Overview</div>
                <div className="WelcomePageDesc h4 bold mb-4">Read more about this website, learn about Design System, Web Content Accessibility Guidelines (WCAG) and Whats inside this website.</div>
                <div className="WelcomePageButton mb-5">
                    <Button theme="binus-blue">
                        Get Started
                    </Button>
                </div>
            </div>

            <div className="pt-4">
                <div>
                    <h3>Design System</h3>
                    <p>Source: <a href="https://www.nngroup.com/articles/design-systems-101" className='a-text' target='_blank' rel='noreferrer'>https://www.nngroup.com/articles/design-systems-101</a></p>
                </div>

                <div>
                    <h4>
                        <ul>
                            <li>
                                What?
                            </li>
                        </ul>
                    </h4>
                    <p>
                        <ul>
                            A design system is a set of standards to manage design at scale by reducing redundancy while creating a shared language and visual consistency across different pages and channels.
                        </ul>
                    </p>
                </div>

                <div>
                    <h4>
                        <ul>
                            <li>
                                Why?
                            </li>
                        </ul>
                    </h4>
                    <p>
                        <ul>
                            Design systems, when implemented well, can provide a lot of benefits to a design team:
                        </ul>
                        <ul>
                            <ul>
                                <li className='mb-2'><b>Design (and development) work can be created and replicated quickly and at scale.</b></li>
                                <p>The primary benefit of design systems is their ability to replicate designs quickly by utilizing premade UI components and elements. Teams can continue to use the same elements over and over, reducing the need to reinvent the wheel and thus risking unintended inconsistency.</p>
                            </ul>
                            <ul>
                                <li className='mb-2'><b>It alleviates strain on design resources to focus on larger, more complex problems.</b></li>
                                <p>Since simpler UI elements are created already and reusable, design resources can focus less on tweaking visual appearance and more on more-complex problems (like information prioritization, workflow optimization, and journey management). While this payoff might seem small when you create only a small number of screens, it becomes substantial when you must coordinate efforts across dozens of teams and thousands of screens.</p>
                            </ul>
                            <ul>
                                <li className='mb-2'><b>It creates a unified language within and between crossfunctional teams.</b></li>
                                <p>Especially when design responsibilities shift or when teams become geographically dispersed, a unified language reduces wasted design or development time around miscommunications. For example, the functionality or appearance of a dropdown menu would not be debated, since that term is reserved for a specifically defined element within the design system.</p>
                            </ul>
                        </ul>
                    </p>
                </div>

                <div className="py-4">
                    <div>
                        <h3>WCAG (Web Content Accessibility Guidelines) ?</h3>
                        <p>Source: <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className='a-text' target='_blank' rel='noreferrer'>https://www.w3.org/WAI/standards-guidelines/wcag/</a></p>
                    </div>

                    <div>
                        <h4>
                            <ul>
                                <li>
                                    What?
                                </li>
                            </ul>
                        </h4>
                        <p>
                            <ul>
                                Web Content Accessibility Guidelines (WCAG) 2 is developed through the W3C process in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.
                            </ul>
                            <ul>
                                The WCAG documents explain how to make web content more accessible to people with disabilities. Web “content” generally refers to the information in a web page or web application, including:
                            </ul>
                            <ul>
                                <ul>
                                    <li className='mb-2'><b>Natural information such as text, images, and sounds.</b></li>
                                    <li className='mb-2'><b>Code or markup that defines structure, presentation, etc.</b></li>
                                </ul>
                            </ul>
                        </p>
                    </div>
                </div>

                <div>
                    <h4>
                        <ul>
                            <li>
                                Who WCAG is for
                            </li>
                        </ul>
                    </h4>
                    <p>
                        <ul>
                            WCAG is for those who want a technical standard. It is not an introduction to accessibility.
                        </ul>
                        <ul>
                            WCAG is primarily intended for:
                        </ul>
                        <ul>
                            <ul>
                                <li className='mb-2'><b>Web content developers (page authors, site designers, etc.)</b></li>
                                <li className='mb-2'><b>Web authoring tool developers</b></li>
                                <li className='mb-2'><b>Web accessibility evaluation tool developers</b></li>
                                <li className='mb-2'><b>Others who want or need a standard for web accessibility, including for mobile accessibility</b></li>
                            </ul>
                        </ul>
                    </p>
                </div>

                <div className="pt-4">
                    <h3>Design System & WCAG</h3>
                    <p>With this website, we will implement the combination of Design System and WCAG.</p>
                    <p>A Design System provides a framework for consistent design and development, while WCAG sets guidelines for accessibility standards. By integrating WCAG principles into a Design System, developers ensure that all components and interactions are accessible to users with disabilities, fostering inclusivity and usability across the web.</p>
                </div>
            </div>

            {/* 
                <div className="sectionContent pt-4">
                    <div className="sectionTitle h1 bolder">
                        Component And Icon
                    </div>
                    <div className="sectionDesc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio inventore amet nam nemo quo minima quas assumenda ducimus nihil iste soluta, autem doloremque optio recusandae enim blanditiis incidunt delectus adipisci.
                    </div>
                </div> 
            */}
        </main >
    )
}

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default Overview;
