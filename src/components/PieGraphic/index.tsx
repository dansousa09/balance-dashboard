import React from 'react';
import CountUp from 'react-countup';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

import * as C from './styles';


interface IPieGraphicProps {
    data: {
        id: string
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

const PieGraphic: React.FC<IPieGraphicProps> = ({ data }) => (
    <C.Container>

        <C.LeftSide>
            <h2>Relação</h2>
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
                <PieChart>
                    <Pie data={data} labelLine={false} dataKey="percent">
                        {
                            data.map(indicator => (
                                <Cell key={indicator.id} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                    <Tooltip formatter={(value: number | string) => `${+value}%`} />
                </PieChart>
            </ResponsiveContainer>
        </C.RightSide>

    </C.Container>
);


export default PieGraphic;