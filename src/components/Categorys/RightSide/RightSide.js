import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Form from 'react-bootstrap/Form';
import { FaPlay } from "react-icons/fa";
import './RightSide.css'


const RightSide = () => {
    return (
        <div className="right-side col-sm-12 col-md-4  m-2 me-5 p-2 ">
            <div className="course d-flex justify-content-between ">
                <h6>Course Content </h6>
                
                <h6 className='me-3'>90%</h6>
            </div>
            
            <Form.Control
            
                type="text"
                placeholder='Search Lesson'
                className='mb-2'
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            ></Form.Control>
            
            <div className="according">
                <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Milestone #1: Welcome to new Technology</Accordion.Header>
                        <Accordion.Body>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Module #1</Accordion.Header>
                                    <Accordion.Body>

                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header> <FaPlay/>  Learn and Explore</Accordion.Header>
                                                
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header> <FaPlay/>  Getting Started</Accordion.Header>
                                                
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header> <FaPlay/>  Optimaijetion</Accordion.Header>
                                                
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header> <FaPlay/>  Responsive Website</Accordion.Header>
                                                
                                            </Accordion.Item>
                                        </Accordion>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Module #2</Accordion.Header>
                                    <Accordion.Body>

                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header> <FaPlay/>  Learn and Explore</Accordion.Header>
                                            
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header> <FaPlay/>  Getting Started</Accordion.Header>
                                               
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header> <FaPlay/>  Optimaijetion</Accordion.Header>
                                                
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header> <FaPlay/>  Responsive Website</Accordion.Header>
                                                
                                            </Accordion.Item>
                                        </Accordion>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Module #3</Accordion.Header>
                                    <Accordion.Body>

                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header> <FaPlay/>  Learn and Explore</Accordion.Header>
                                                
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header> <FaPlay/>  Getting Started</Accordion.Header>
                                                
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header> <FaPlay/>  Optimaijetion</Accordion.Header>
                                                
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Module #4</Accordion.Header>
                                                <Accordion.Body>

                                                    <Accordion defaultActiveKey="0">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header> <FaPlay/>  Learn and Explore</Accordion.Header>
                                                            
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header> <FaPlay/>  Getting Started</Accordion.Header>
                                                            
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header> <FaPlay/>  Optimaijetion</Accordion.Header>
                                                            
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header> <FaPlay/>  Responsive Website</Accordion.Header>
                                                            
                                                        </Accordion.Item>
                                                    </Accordion>

                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Module #4</Accordion.Header>
                                    <Accordion.Body>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header> <FaPlay/>  Learn and Explore</Accordion.Header>
                                                
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header> <FaPlay/>  Getting Started</Accordion.Header>
                                                
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header> <FaPlay/> Optimaijetion</Accordion.Header>
                                                
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header> <FaPlay/> Responsive Website</Accordion.Header>
                                                
                                            </Accordion.Item>
                                        </Accordion>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default RightSide;