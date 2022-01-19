import React from 'react';
import * as C from './styles';


import { IMessageBoxProps } from './interfaces';

const MessageBox: React.FC<IMessageBoxProps> = ({ title, description, footerText, icon }) => {
    return (
        <C.Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt={title} />
                </h1>
                <p>{description}</p>
            </header>

            <footer>
                <span>{footerText}</span>
            </footer>
        </C.Container>
    );
}

export default MessageBox;