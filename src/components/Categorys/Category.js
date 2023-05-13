import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import './Category.css'

const Category = () => {
    return (
        <div className="category d-flex mt-2 ">
            <LeftSide/>
            <RightSide/>
        </div>
    );
};

export default Category;