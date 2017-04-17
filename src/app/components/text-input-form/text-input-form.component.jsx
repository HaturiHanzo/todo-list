import React from 'react';
import './text-input-form.css'

const TextInputForm = ({onSubmit}) => {
    let input;

    const processFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(input.value);
        input.value = '';
    };

    return (
        <form className="text-input-form" onSubmit={processFormSubmit}>
            <input type="text" ref={node => input = node}/>
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default TextInputForm;