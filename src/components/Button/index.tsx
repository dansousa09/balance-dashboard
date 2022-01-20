import React, { ButtonHTMLAttributes } from 'react';

import * as C from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
    return (
        <C.Container {...rest}>{children}</C.Container >
    );
}

export default Button;