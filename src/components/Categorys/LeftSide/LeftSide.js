import React from 'react';
import Button from 'react-bootstrap/Button';
import video from '../../../videos/natural video.mp4'
import { FaRegSquare, FaRegBookmark } from "react-icons/fa";
import './LeftSide.css'


const LeftSide = () => {
    return (
        <div className="left-side col-md-8 col-sm-12 ms-3">
            <div className=''>
                <h1 className='development'>Complete Web Development course </h1>
                <video width="100%" height="500" src={video} controls></video>
                <div className="pb-0 bg-primary">

                    <h5 className="bookmark ">
                        <FaRegBookmark />  bookmark
                        <FaRegSquare />
                    </h5>

                </div>
                <div className='d-flex justify-content-between'>
                    <h4 className='welcome'>Welcome to your journey</h4>
                    <div className='mb-3 ms-3 d-flex'>
                        <Button className='btn' variant="outline-light">Previous</Button>

                        <Button className="ms-2 " variant="secondary">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;