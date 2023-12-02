"use client";
import React, { useState, useCallback } from "react";
import { ResponsiveContainer, PieChart, Pie, Sector, Tooltip, Cell } from "recharts";
import { BsHeartFill } from "react-icons/bs";
import { IoChatbox } from "react-icons/io5";

const renderActiveShape = props => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        midAngle
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius - 40) * cos;
    const sy = cy + (outerRadius - 40) * sin;
    return (
        <Sector
            cx={sx}
            cy={sy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill="#732be2"
        />
    );
};

export default function TaskinsightpieChart(props) {

    const data = [
        {
            name: "Missing Hours",
            value: 10
        },
        {
            name: "OverDue",
            value: 5
        },
        {
            name: "Unassigned",
            value: 8
        }
    ];

    // const data = [
    //     {
    //         name: "Missing Hours",
    //         value: props.missingHours > 0 ? props.missingHours : 0
    //     },
    //     {
    //         name: "OverDue",
    //         value: props.total_overdue > 0 ? props.total_overdue : 0
    //     },
    //     {
    //         name: "Unassigned",
    //         value: props.unassigned > 0 ? props.unassigned : 0
    //     },

    // ];


    const COLORS = ['#c8a4ff', '#8b57db', '#732be2'];
    const [activeIndex, setActiveIndex] = useState(null);
    const onMouseOver = useCallback((data, index) => {
        setActiveIndex(index);
    }, []);
    const onMouseLeave = useCallback((data, index) => {
        setActiveIndex(null);
    }, []);
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="pieChart_area">
            <span className='heartIcon'>
                <BsHeartFill size={20} color={'#0b1f47'} />
            </span>

            <ResponsiveContainer width="100%" height={155}>

                <PieChart height={250}>
                    <Pie
                        activeIndex={activeIndex}
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={40}
                        // fill="#732be2"
                        activeShape={renderActiveShape}
                        onMouseOver={onMouseOver}
                        onMouseLeave={onMouseLeave}
                    >

                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
            <span className='chatIconIcon'>
                <IoChatbox size={20} color={'#0b1f47'} />
            </span>
        </div>
    );
}
