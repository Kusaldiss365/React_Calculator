import React from 'react';
import OutputRow from './outputRow';

const Output = props => {
    return(
        <>
        <OutputRow value={props.answer} textSize={{ fontSize: '15px' }} />
        <OutputRow value={props.user}/>
        </>
    );
}

export default Output;