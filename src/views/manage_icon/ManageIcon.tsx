//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import JoditEditor from 'jodit-react';
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components
import Button from '../../components/c_button';

//  Region Import Assets
import IcnSearch from '../../assets/icon/IcnSearch';
import IcnHamburger from '../../assets/icon/IcnHamburger';
import IcnWebDeleteAttachment from '../../assets/icon/IcnWebDeleteAttachment';
import IcnEditDueDateGray from '../../assets/icon/IcnEditDueDateGray';
import IcnLight from '../../assets/icon/IcnLight';
import IcnDark from '../../assets/icon/IcnDark';

//  Region Import Style
import './ManageIcon.scss';
import 'jodit';
// import 'jodit/build/jodit.min.css';


const ManageIcon = () => {
    const data = useSelector((state: any) => state.combinedReducers.data);
    const [showAddIcon, setShowAddIcon] = useState(Boolean);
    const [iconCode, setIconCode] = useState('Insert text here ...');
    const [iconDesc, setIconDesc] = useState('Insert description here ...');
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
        setShowAddIcon(!showAddIcon);
    };

    const toggleModalPasteCode = () => {
        setShowAddCode(!showAddCode);
    };

    const handleModalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModalCode(e.target.value);
    };

    const handleIconCodeChange = (newContent: any) => {
        setIconCode(newContent);
    };

    const handleIconDescChange = (newContent: any) => {
        setIconDesc(newContent);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted code:', modalCode);
        const newCode = modalCode;
        console.log('prevState.iconCode: ' + iconCode)
        setIconCode(iconCode + '<table style="border-collapse:collapse;width: 100%;background-color:grey"><tbody><tr><td style="width: 100%;">' +
            newCode + '</td></tr></tbody></table>');
        setShowAddCode(false);
        // this.setState(prevState => ({
        //     componentCode: prevState.componentCode +
        //         '<table style="border-collapse:collapse;width: 100%;background-color:grey"><tbody><tr><td style="width: 100%;">' +
        //         newCode + '</td></tr></tbody></table>',
        //     showAddCode: false
        // }));
    };

    return (
        <>
            <main className="mt-3">
                <div className='add-width'>
                    <div className='page-header'>
                        <h3 className='page-title-global'>Manage Icon</h3>
                    </div>
                    <hr className="my-0"></hr>
                    <div className="border-form p-3">
                        <ul className='list-group d-flex'>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    <IcnSearch /> <div className="ms-3">Search Icon</div>
                                </div>
                                <div className="d-flex justify-content-end align-items-center">
                                    <a href="" className='IcnWebDeleteAttachment me-3'><IcnWebDeleteAttachment /></a> <a href="" className='me-1'><IcnEditDueDateGray /></a>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    <IcnHamburger /> <div className="ms-3">Hamburger Icon</div>
                                </div>
                                <div className="d-flex justify-content-end align-items-center">
                                    <a href="" className='IcnWebDeleteAttachment me-3'><IcnWebDeleteAttachment /></a> <a href="" className='me-1'><IcnEditDueDateGray /></a>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    <IcnLight /> <div className="ms-3">Light Icon</div>
                                </div>
                                <div className="d-flex justify-content-end align-items-center">
                                    <a href="" className='IcnWebDeleteAttachment me-3'><IcnWebDeleteAttachment /></a> <a href="" className='me-1'><IcnEditDueDateGray /></a>
                                </div>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    <IcnDark /> <div className="ms-3">Dark Icon</div>
                                </div>
                                <div className="d-flex justify-content-end align-items-center">
                                    <a href="" className='IcnWebDeleteAttachment me-3'><IcnWebDeleteAttachment /></a> <a href="" className='me-1'><IcnEditDueDateGray /></a>
                                </div>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-end mt-4'>
                            <Button theme="primary" onClick={toggleModal}>
                                Add Icon
                            </Button>
                        </div>
                    </div>
                </div>
            </main >

            {/* Modal showAddIcon */}
            <Modal
                isOpen={showAddIcon}
                toggle={toggleModal}
                centered
                size='lg'
                data-bs-theme={`${data.darkMode ? "dark" : "light"}`}
            >
                <ModalHeader toggle={toggleModal}>
                    Add Icon
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="iconName">
                                Icon Name
                            </Label>
                            <Input
                                id="iconName"
                                name="address"
                                placeholder="Icon Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="iconCode">
                                Icon Code
                            </Label>
                            <JoditEditor
                                value={iconCode}
                                onChange={(e) => { handleIconCodeChange(e) }}
                                config={editorConfig}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="iconDesc">
                                Icon Description
                            </Label>
                            <JoditEditor
                                value={iconDesc}
                                onChange={handleIconDescChange}
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

            {/* Modal showAddCode */}
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
                                onChange={handleModalCodeChange}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <div className='d-flex justify-content-end'>
                        <Button theme="primary">
                            Add Code
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default ManageIcon;
