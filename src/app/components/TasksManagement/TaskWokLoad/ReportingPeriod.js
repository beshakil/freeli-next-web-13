"use client"
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import toast, { Toaster } from 'react-hot-toast';
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { VscCalendar } from "react-icons/vsc";
function ReportingPeriod() {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="ReportingPeriod">
            <div className='workload_report_caption'>
                Pick a date period for your workload report
            </div>
            <div className='workload_report_secound'>
                <div className='workload_report_week report_item' >
                    <div className='reportcheck_area'>
                        <input type="radio" id="reportcheck" name="reportcheck"
                            defaultChecked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                        <label className="" htmlFor="reportcheck">This Week</label>
                    </div>
                    <div className='monthDateText'>
                        November 1 - 7, 2023
                    </div>

                </div>
                <div className='workload_report_month report_item'>
                    <div className='reportcheck_area'>
                        <input type="radio" id="reportcheck1" name="reportcheck1"
                            defaultChecked={checked1}
                            onChange={() => setChecked1(!checked1)}
                        />
                        <label className="" htmlFor="reportcheck1">This Month</label>
                    </div>
                    <div className='monthDateText'>
                        November
                    </div>

                </div>

            </div>
            <div className='Pick_a_date_period'>
                <div className='reportcheck_area lastPriod '>
                    <input type="radio" id="reportcheck2" name="reportcheck2"
                        defaultChecked={checked2}
                        onChange={() => setChecked2(!checked2)}
                    />
                    <label className="" htmlFor="reportcheck2">Pick a date period:</label>
                </div>
                <div className="lastColumn">
                    <div className='reportcheck_startDate '>
                        <DatePicker
                            className={error1 === true ? "start_Date_task errorDate Focus" : "start_Date_task Focus"}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Start date"

                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                                decreaseMonth,
                                increaseMonth,
                                prevMonthButtonDisabled,
                                nextMonthButtonDisabled,
                            }) => (
                                <div className="CalendarDiv"

                                >
                                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                        {"<"}
                                    </button>
                                    <div > <select
                                        value={getYear(date)}
                                        onChange={({ target: { value } }) => changeYear(value)}
                                    >
                                        {years.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                        <select
                                            value={months[getMonth(date)]}
                                            onChange={({ target: { value } }) =>
                                                changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                        {">"}
                                    </button>
                                </div>
                            )}
                            selected={startDate}
                            onChange={(date) => {

                                if (new Date(date) > new Date(endDate)) {
                                    toast.error('Start date should be smaller than  or equal to end date', { duration: 4000 });
                                    setStartDate('')
                                    setError1(true)
                                    setTimeout(() => {
                                        setError1(false)
                                    }, 4000)
                                } else {
                                    setStartDate(date);
                                    setError1(false)
                                }
                            }}
                        />
                        {
                            startDate !== '' ?
                                <span className='clearInputTaskMain' onClick={() => { setStartDate('') }}></span>
                                : ''
                        }
                        <span className='calenderIcon_task'><VscCalendar size={22} /></span>

                    </div>
                    <div className='toPriod'>
                        to
                    </div>
                    <div className='reportcheck_endDate '>
                        <DatePicker
                            className={error2 === true ? "start_Date_task errorDate" : "start_Date_task"}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Due date"

                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                                decreaseMonth,
                                increaseMonth,
                                prevMonthButtonDisabled,
                                nextMonthButtonDisabled,
                            }) => (
                                <div className="CalendarDiv"

                                >
                                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                        {"<"}
                                    </button>
                                    <div >
                                        <select
                                            value={getYear(date)}
                                            onChange={({ target: { value } }) => changeYear(value)}
                                        >
                                            {years.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={months[getMonth(date)]}
                                            onChange={({ target: { value } }) =>
                                                changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                        {">"}
                                    </button>
                                </div>
                            )}
                            selected={endDate}
                            onChange={(date) => {
                                if (new Date(date) < new Date(startDate)) {
                                    toast.error('End date should be greater than  or equal to start date', { duration: 4000 });
                                    setError2(true)
                                    setEndDate('')
                                    setTimeout(() => {
                                        setError2(false)
                                    }, 4000)
                                } else {
                                    setEndDate(date);
                                    setError2(false)
                                }
                            }}
                        />

                        {endDate !== '' ?
                            <span className='clearInputTaskMain' style={{ top: '6px !important' }} onClick={() => { setEndDate('') }}></span>
                            : ''
                        }
                        <span className='calenderIcon_task'><VscCalendar size={22} /></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportingPeriod;