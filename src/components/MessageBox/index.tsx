import React from 'react';
import * as C from './styles';
interface IMessageBoxProps {
    title: string;
    description: string;
    footerText: string;
    icon: string | undefined;
}

const MessageBox: React.FC<IMessageBoxProps> = ({ title, description, footerText, icon }) => {
    return (
        <C.Container>
            <header>
                <h1>
                    {title}
                    {icon &&
                        <img src={icon} alt={title} />
                    }
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