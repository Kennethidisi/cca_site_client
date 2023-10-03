import React from 'react';
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { tableData } from '../dummyData/dummyData';


export default function Chart() {

  return (
    <div className='chart'>
        <h3 className="chartTitle">Student Registration Analytics</h3>
        <ResponsiveContainer width='100%' aspect={3 / 1}>
            <LineChart data={tableData}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line type="monotone" dataKey="Registered Student" stroke='#5550bd'/>
                <Tooltip />
                <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
