import React from 'react';

import Section from './Section';

import "./Sections.css";

const Sections = (props) => {

    const sections = ['Auto', 'Sports', 'Entertainment'];
    let sectionObjects;

    sectionObjects = sections.map(
        (section, index) => {return (
            <Section id={index} section={section} />
        )}
    )
    return (
        <div className="sections fillet-border-sm-App light-border-outline-App px-3 py-4">
            <h4 className="text-center">Sections</h4>
            <hr className='mb-4 hr-light-App'/>
            <div>
                {sectionObjects}
            </div>
        </div>
    )
}
export default Sections;