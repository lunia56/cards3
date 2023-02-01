import React from 'react';
import SuperButton from './common/Button/SuperButton';
import SuperCheckbox from './common/CheckBox/Checkbox';
import SuperInputText from './common/Input/SuperInputText';

const Test = () => {
    return (
        <div>
            Test
            <SuperButton >Button</SuperButton>
            <SuperCheckbox>CheckBox</SuperCheckbox>
            <SuperInputText placeholder={'Input'} error={true}/>
        </div>
    );
};

export default Test;