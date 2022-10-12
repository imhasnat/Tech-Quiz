import React, { useContext } from "react";
import { Tooltip, PieChart, Pie, Cell } from "recharts";
import { TopicsContext } from "./Root";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCss3, faReact, faJs } from '@fortawesome/free-brands-svg-icons';

const COLORS = ["#3b82f6", "#22c55e", "#eab308", "#f97316"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Statistics = () => {
    const data = useContext(TopicsContext)
    return (
        <div className="w-10/12 md:w-9/12 lg:w-6/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center bg-gray-100 rounded-md shadow-md my-14 border border-gray-300">
            <div>
                <PieChart width={380} height={400}>
                    <Pie
                        data={data}
                        cx={180}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="total"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}

                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>

        </div>
    );
};



export default Statistics;