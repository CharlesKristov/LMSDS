//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components
import Button from '../../components/c_button';

//  Region Import Assets
import IcnWebDeleteAttachment from '../../assets/icon/IcnWebDeleteAttachment';
import IcnEditDueDateGray from '../../assets/icon/IcnEditDueDateGray';

//  Region Import Style
import './ManageComponent.scss';
import JoditEditor from 'jodit-react';

const ManageComponent = () => {
    const data = useSelector((state: any) => state.combinedReducers.data);
    const [showAddComponent, setShowAddComponent] = useState(Boolean);
    const [componentCode, setComponentCode] = useState('Insert code here ...');
    const [componentDesc, setComponentDesc] = useState('Insert description here ...');
    const [componentAccessibility, setComponentAccessibility] = useState('Insert Accessibility Description here ...');

    const [showAddCode, setShowAddCode] = useState(Boolean);
    const [modalCode, setModalCode] = useState('');

    const editorConfig = {
        extraButtons: [
            'source',
            {
                name: 'paste code',
                iconURL: 'https://cdn-icons-png.flaticon.com/512/1078/1078454.png',
                tooltip: 'Paste Code',
                exec: (editor: any) => {
                    toggleModalPasteCode();
                },
            }
        ]
    };

    const toggleModal = () => {
        setShowAddComponent(!showAddComponent)
    }

    const toggleModalPasteCode = () => {
        setShowAddCode(!showAddCode);
    };

    const handleModalCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModalCode(e.target.value);
    };

    const handleComponentCode = (newContent: any) => {
        setComponentCode(newContent);
    };

    const handleComponentDesc = (newContent: any) => {
        setComponentDesc(newContent);
    };

    const handleComponentAcc = (newContent: any) => {
        setComponentDesc(newContent);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted code:', modalCode);
        const newCode = modalCode;
        console.log('prevState.componentCode: ' + componentCode);
        setComponentCode(componentCode + '<table style="border-collapse:collapse;width: 100%;background-color:grey"><tbody><tr><td style="width: 100%;">' +
            newCode + '</td></tr></tbody></table>');
        setShowAddCode(false);
    };

    return (
        <>
            <main className="mt-3">
                <div className='add-width'>
                    <div className='page-header'>
                        <h3 className='page-title-global'>Manage Component</h3>
                    </div>
                    <hr className="my-0"></hr>
                    <div className="border-form p-3">
                        <ul className='list-group d-flex'>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    Button Component
                                </div>
                                <div className="d-flex justify-content-end align-items-center">
                                    <a href="" className='IcnWebDeleteAttachment me-3'><IcnWebDeleteAttachment /></a> <a href="" className='me-1'><IcnEditDueDateGray /></a>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    Card Component
                                </div>
                                <div className="d-flex justify-content-end align-items-center">
                                    <a href="" className='IcnWebDeleteAttachment me-3'><IcnWebDeleteAttachment /></a> <a href="" className='me-1'><IcnEditDueDateGray /></a>
                                </div>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-end mt-4'>
                            <Button theme="primary" onClick={toggleModal}>
                                Add Component
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Modal
                isOpen={showAddComponent}
                toggle={toggleModal}
                centered
                size='lg'
                data-bs-theme={`${data.darkMode ? "dark" : "light"}`}
            >
                <ModalHeader toggle={toggleModal}>
                    Add Component
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="componentName">
                                Component Name
                            </Label>
                            <Input
                                id="componentName"
                                name="address"
                                placeholder="Component Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="componentHeroesDesc">
                                Component Heroes Description
                            </Label>
                            <Input
                                id="componentHeroesDesc"
                                name="address"
                                placeholder="This is a big description of the item"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="componentHeroesImageURL">
                                Component Heroes Image URL
                            </Label>
                            <Input
                                id="componentHeroesImageURL"
                                name="address"
                                placeholder="example.com/image.jpg"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="componentCode">
                                Component Code
                            </Label>
                            <JoditEditor
                                value={componentCode?.replaceAll(/<div style="overflow: auto;">((.|\s)*?)<\/div>/g, "$1")
                                    .replaceAll(
                                        /(<dfn)[^>]*(class="katex-syntax">)/g,
                                        `$1 contenteditable="false" $2`
                                    )}
                                // place
                                onChange={(e) => { handleComponentCode(e) }}
                                config={editorConfig}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="componentDesc">
                                Component Description
                            </Label>
                            <JoditEditor
                                value={componentDesc}
                                // theme="dark"
                                onChange={handleComponentDesc}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="componentAccessibility">
                                Component Accessibility
                            </Label>
                            <JoditEditor
                                value={componentAccessibility}
                                // theme="dark"
                                onChange={handleComponentAcc}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <div className='d-flex justify-content-end'>
                        <Button theme="primary">
                            Add
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={showAddCode}
                toggle={toggleModalPasteCode}
                centered
                size='lg'
                data-bs-theme={`${data.darkMode ? "dark" : "light"}`}
            >
                <ModalHeader toggle={toggleModalPasteCode}>
                    Add Source Code
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="SourceCode">
                                Code Input:
                            </Label>
                            <Input
                                id="SourceCode"
                                name="SourceCode"
                                placeholder="SourceCode"
                                type='textarea'
                                style={{ height: '500px' }}
                                value={modalCode}
                                onChange={handleModalCode}
                            />
                        </FormGroup>
                        <ModalFooter>
                            <Button theme="primary" type='submit'>
                                Add Code
                            </Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default ManageComponent;
