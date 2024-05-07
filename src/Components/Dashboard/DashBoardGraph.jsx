
import React, { useState } from 'react'
import { LineChart, Line, AreaChart, linearGradient, XAxis, YAxis, CartesianGrid, Area, Tooltip } from 'recharts';
import Price from '../ReusableComponents/Price';
import { day, week, month, year } from './graphData';


const DashBoardGraph = ({ rotateStatus }) => {

    const [dateIndexActive, setDateIndexActive] = useState(0)

    let dates = [
        "Day", "Week", "Month", "Year"
    ] 
    
    const DateFun = (e, id) => {
        setDateIndexActive(id)


    }

    return (
        <div className={` ${!rotateStatus ? "main-graph-rotateStatusFalse" : "main-graph-rotateStatusTrue"} row m-0   `}>
            {dates?.map((items, id) => {
                return <div key={id} className={` ${id == dateIndexActive ? 'date-col-active' : "date-col"} col   `} onClick={(e) => DateFun(e, id)}    >
                    <p> {items} </p>

                </div>
            })}
            <div className='row main-graph-dashboard pt-3 m-0 p-0'>
                <div className='col-6'>
                    <Price classNames="lower-red" textVAlue={"Lower: $4.895"} />

                </div>
                <div className='col-6'>
                    <Price classNames="higher-green" textVAlue={" Higher: $6.857"} />

                </div>

                <div className='col-12 m-0 p-0 main-graph-col  '>

                    <AreaChart width={330} height={120} data={dateIndexActive == 0 ? day : dateIndexActive == 1 ? week : dateIndexActive == 2 ? month : dateIndexActive == 3 ? year : day}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>

                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f99d21" stopOpacity={0.10} />
                                <stop offset="95%" stopColor="#f99d21" stopOpacity={0.10} />
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type="monotone" dataKey="pv" stroke="#f99d21" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>



        </div>
    )
}

export default DashBoardGraph