import React from 'react';
import CountUp from 'react-countup';
import * as C from './styles';

import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({ title, amount, footerLabel, icon, color }) => {

    const iconSelected = () => {
        switch (icon) {
            case 'dolar':
                return dolarImg
            case 'arrowUp':
                return arrowUpImg
            case 'arrowDown':
                return arrowDownImg
            default:
                return undefined;
        }
    }

    return (
        <C.Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp end={amount} prefix="R$ " separator="." decimal="," decimals={2} preserveValue />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected()} alt={title} />
        </C.Container>
    )
}

export default WalletBox;