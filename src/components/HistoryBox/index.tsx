import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import * as C from './styles';

interface IHistoryBoxProps {
    data: {
        month: string,
        amountEntry: number,
        amountOutput: number,
    }[];
    lineColorEntry: string;
    lineColorOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({ data, lineColorEntry, lineColorOutput }) => (
    <C.Container>
        <C.Header>
            <h2>Histórico de Saldo</h2>
            <C.LegendContainer>
                <C.Legend color={lineColorEntry}>
                    <div></div>
                    <span>Entradas</span>
                </C.Legend>

                <C.Legend color={lineColorOutput}>
                    <div></div>
                    <span>Saídas</span>
                </C.Legend>
            </C.LegendContainer>
        </C.Header>
        <C.ChartContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                    <Tooltip />
                    <Line type="monotone" dataKey="amountEntry" name="Entradas" stroke={lineColorEntry} strokeWidth={5} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="amountOutput" name="Saídas" stroke={lineColorOutput} strokeWidth={5} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </C.ChartContainer>
    </C.Container>
);


export default HistoryBox;