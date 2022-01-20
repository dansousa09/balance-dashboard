import React, { InputHTMLAttributes } from 'react';

import * as C from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FC<IInputProps> = ({ ...rest }) => {
    return (
        <C.Container {...rest} />
    );
}

export default Input;