"use client";
import React, { useEffect, useState } from "react";
import { BarChart, Bar } from 'recharts';


export default function TaskinsightBarChart(props) {

    const data = [
        { name: 'Missing Hours', x: 10, y: 23, z: 50 },
        { name: 'OverDue', x: 5, y: 3, z: 122 },
        { name: 'Unassigned', x: 8, y: 15, z: 50 },
    ];

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // const data = [
    //     { name: 'Missing Hours', x: props.missingHours > 0 ? props.missingHours : 0, y: 23, z: 50 },
    //     { name: 'OverDue', x: props.total_overdue > 0 ? props.total_overdue : 0, y: 3, z: 122 },
    //     { name: 'Unassigned', x: props.unassigned > 0 ? props.unassigned : 0, y: 15, z: 50 },

    // ];
    return (
        <div>
            {
                isClient ? <BarChart width={60} height={100} data={data} id="bar">
                    <Bar dataKey="x" stackId="a" fill="#0b1f47" />
                    <Bar dataKey="y" stackId="a" fill="#d7e8f4" />
                </BarChart> : null
        }
        </div>
    );
}
