import React from 'react';
import CountUp from 'react-countup';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'
import formatCurrency from '../../utils/formatCurrency';
import * as C from './styles';

interface IBarGraphicProps {
    title: string;
    data: {
        id: string;
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}

const BarGraphic: React.FC<IBarGraphicProps> = ({ title, data }) => {
    return (
        <C.Container>
            <C.LeftSide>
                <h2>{title}</h2>
                <C.LegendContainer>
                    {data.map(indicator => (
                        <C.Legend color={indicator.color} key={indicator.id} >
                            <div>
                                <CountUp end={indicator.percent} suffix="%" decimal="," decimals={1} />
                            </div>
                            <span>{indicator.name}</span>
                        </C.Legend>))}
                </C.LegendContainer>
            </C.LeftSide>
            <C.RightSide>
                <ResponsiveContainer>
                    <BarChart data={data} >
                        <Bar dataKey="amount" name="valor" >
                            {data.map((indicator) => (
                                <Cell key={indicator.id} cursor="pointer" fill={indicator.color} />
                            ))}
                        </Bar>
                        <Tooltip cursor={{fill: 'none'}} formatter={(value: number) => formatCurrency(value)} />
                    </BarChart>
                </ResponsiveContainer>
            </C.RightSide>
        </C.Container>
    )
}

export default BarGraphic;