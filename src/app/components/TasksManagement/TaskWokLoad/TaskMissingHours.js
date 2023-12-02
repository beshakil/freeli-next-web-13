"use client"
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import toast, { Toaster } from 'react-hot-toast';
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { BsCheckCircle, BsCheck, BsCheckCircleFill, BsFillCircleFill } from "react-icons/bs";
import { VscCalendar, VscWarning } from "react-icons/vsc";

function TaskMissingHours(props) {
  const [editClick, seteditClick] = useState(false);
  const [editClick1, seteditClick1] = useState(false);
  const [editClick2, seteditClick2] = useState(false);
  const [editClick3, seteditClick3] = useState(false);
  const [editClick4, seteditClick4] = useState(false);
  const [checked, setchecked] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState("");
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
  const [formValues, setFormValues] = useState([
    {
      id: 1,
      from: '',
      to: '',
      hours: '',
      notes: ''
    }
  ])
  let addFormFields = () => {
    setFormValues([...formValues, {
      id: formValues.length + 1,
      from: '',
      to: '',
      hours: '',
      notes: ''
    }])
  }
  // const [values, set_values] = useState({
  //   sales: '',
  //   bank_deposit: '',
  //   supply: '',
  //   expenses: ''
  // })

  let handleChange = (id, e, name) => {
    // let newFormValues = [...formValues];
    // newFormValues[i][e.target.name] = e.target.value;
    // setFormValues(newFormValues);
    console.log(e.target.value)

    // const updatedItems = formValues.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, [name]: e.target.value };
    //   }
    //   return item;
    // });
    // setFormValues(updatedItems);
    setFormValues([...formValues.map((item) => item.id === id ? { ...item, [name]: e.target.value } : item)]);
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  useEffect(() => {
    console.log(72, formValues);
  }, [formValues])
  const TaskMissingHoursList = () => {
    return (
      <div className='updateTaskMissing'>
        <div className='trackHours'>
          <div className='heading_hours'>
            <div className='title'>Track Hours</div>
            <div className='buttonList'>
              <div onClick={() => seteditClick(!editClick)} className='cencelBtn'>Cancel</div>
              <div className='saveBtn'>Save</div>
            </div>
          </div>
          <div className='collumns_area'>
            <ul className='collumns_lists header'>
              <li className='collumns_list_check'>
                <BsCheck
                  color={'#318fff'} className='BsCheck'
                  size={20}
                />
              </li>
              <li className='collumns_list_from'>From</li>
              <li className='collumns_list_to'>To</li>
              <li className='collumns_list_hours'>Hours</li>
              <li className='collumns_list_note'>Note</li>
            </ul>
            <div className="collumns_lists_body">
              {formValues.map((row, i) => (
                <ul className='collumns_lists extra_row' key={'extra_item_' + i}>
                  <li className='collumns_list_check'>
                    {checked ?
                      <BsCheckCircleFill onClick={() => { setchecked(!checked) }}
                        color={'#a6d068'} className='BsCheck'
                        size={20}
                      />
                      :
                      <BsFillCircleFill onClick={() => { setchecked(!checked) }} color={'#e1ebf8'} className='BsCheck'
                        size={20} />
                    }
                  </li>
                  <li className='collumns_list_from'>
                    <div className='taskMissig_startDate'>
                      <DatePicker
                        className={error1 === true ? "start_Date_task errorDate Focus" : "start_Date_task Focus"}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="From"
                        renderCustomHeader={({
                          date,
                          changeYear,
                          changeMonth,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <div className="CalendarDiv">
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{"<"}</button>
                            <div>
                              <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)} >
                                {years.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                              <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
                                {months.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>{">"}</button>
                          </div>
                        )}
                        selected={row.from}
                        onChange={(date) => {
                          if (new Date(date) > new Date(row.to)) {
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
                      {row.from !== '' && <span style={{ right: '18px' }} className='clearInputTaskMain' onClick={() => { setStartDate('') }}></span>}
                      <span className='calenderIcon_task'><VscCalendar color='#318fff' size={18} /></span>
                    </div>
                  </li>
                  <li className='collumns_list_to'>
                    <div className='taskMissig_endDate'>
                      <DatePicker
                        className={error2 === true ? "start_Date_task errorDate" : "start_Date_task"}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="To"
                        renderCustomHeader={({
                          date,
                          changeYear,
                          changeMonth,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <div className="CalendarDiv">
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{"<"}</button>
                            <div >
                              <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
                                {years.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                              <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
                                {months.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>{">"}</button>
                          </div>
                        )}
                        selected={row.to}
                        onChange={(date) => {
                          if (new Date(date) < new Date(row.from)) {
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

                      {row.to !== '' ?
                        <span className='clearInputTaskMain' style={{ top: '6px !important' }} onClick={() => { setEndDate('') }}></span>
                        : ''
                      }
                      <span className='calenderIcon_task'><VscCalendar color='#318fff' size={18} /></span>
                    </div>
                  </li>
                  <li className='collumns_list_hours'>
                    <input type='number' onChange={(e) => handleChange(row.id, e, 'hours')} name="hours" value={row.hours} className='hours_count' placeholder='Hours. Example: 2.5' />
                  </li>
                  <li className='collumns_list_note'>
                    <textarea id='notes' value={row.notes} onChange={(e) => handleChange(row.id, e, 'notes')} name="notes" className='notes' rows="4" cols="50" placeholder='Note'>{row.notes}</textarea>
                  </li>
                  <span className='clearInputTaskMain' style={{ top: '6px !important' }} onClick={() => removeFormFields(i)}></span>
                </ul>
              ))}
            </div>
            <div className="collumns_lists_bottom">
              <ul className='collumns_lists'>
                <li className='collumns_list_check'>
                  {checked ?
                    <BsCheckCircleFill onClick={() => { setchecked(!checked) }}
                      color={'#a6d068'} className='BsCheck'
                      size={20}
                    />
                    :
                    <BsFillCircleFill onClick={() => { setchecked(!checked) }} color={'#e1ebf8'} className='BsCheck'
                      size={20} />
                  }
                </li>
                <li className='collumns_list_from'>
                  <div className='taskMissig_startDate'>
                    <DatePicker
                      className={error1 === true ? "start_Date_task errorDate Focus" : "start_Date_task Focus"}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="From"

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
                        <span style={{ right: '18px' }} className='clearInputTaskMain' onClick={() => { setStartDate('') }}></span>
                        : ''
                    }
                    <span className='calenderIcon_task'><VscCalendar color='#318fff' size={18} /></span>
                  </div>


                </li>
                <li className='collumns_list_to'>
                  <div className='taskMissig_endDate'>
                    <DatePicker
                      className={error2 === true ? "start_Date_task errorDate" : "start_Date_task"}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="To"

                      renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                      }) => (
                        <div className="CalendarDiv">
                          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{"<"}</button>
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
                    <span className='calenderIcon_task'><VscCalendar color='#318fff' size={18} /></span>
                  </div>
                </li>
                <li className='collumns_list_hours'>
                  <input className='hours_count' type='number' placeholder='Hours. Example: 2.5' />
                </li>
                <li className='collumns_list_note'>
                  <textarea placeholder='Note' id='notes' className='notes' name="notes" rows="4" cols="50"></textarea>
                </li>

                <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              </ul>
              <div className='total_area_task'>
                <div className='total_area_total'>Total</div>
                <div className='total_area_total_hours'>6hrs 45mins</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='TaskMissingHours'>
      <div className='TaskMissing_top_para'>
        The following tasks have missing hours, we recommend that you update these tasks to get an accurate report:
      </div>

      <div className='taskMissing_body'>

        <div className='taskMissing_list_area'>
          <ul className='taskMissing_list'>
            <li className='listName' style={editClick === false ? { color: '#0b1f47' } : { color: '#318fff' }}>
              Fairmont Lake Louise Poppy - ID & Branding
            </li>
            <li className='liststatus'>
              <BsCheckCircle
                color={'#4a7c00'} className='BsCheckCircle'
                size={20}
              />
            </li>
            <li className='listEdit'><span onClick={() => seteditClick(!editClick)}>edit</span></li>
          </ul>
        </div>
        {editClick &&

          <TaskMissingHoursList />
        }
        <div className='taskMissing_list_area'>
          <ul className='taskMissing_list'>
            <li className='listName' style={editClick1 === false ? { color: '#0b1f47' } : { color: '#318fff' }}>
              Fairmont Lake Louise Poppy - ID & Branding
            </li>
            <li className='liststatus'>
              <VscWarning
                color={'#a00016'} className='GrStatusWarning'
                size={20}
              />
            </li>
            <li className='listEdit'><span onClick={() => seteditClick1(!editClick1)}>edit</span></li>
          </ul>
        </div>
        <div className='taskMissing_list_area'>
          <ul className='taskMissing_list'>
            <li className='listName' style={editClick2 === false ? { color: '#0b1f47' } : { color: '#318fff' }}>
              Fairmont Lake Louise Poppy - ID & Branding
            </li>
            <li className='liststatus'>
              <BsCheckCircle
                color={'#4a7c00'} className='BsCheckCircle'
                size={20}
              />
            </li>
            <li className='listEdit'><span onClick={() => seteditClick2(!editClick2)}>edit</span></li>
          </ul>
        </div>
        <div className='taskMissing_list_area'>
          <ul className='taskMissing_list'>
            <li className='listName' style={editClick3 === false ? { color: '#0b1f47' } : { color: '#318fff' }}>
              Fairmont Lake Louise Poppy - ID & Branding
            </li>
            <li className='liststatus'>
              <VscWarning
                color={'#a00016'} className='GrStatusWarning'
                size={20}
              />
            </li>
            <li className='listEdit'><span onClick={() => seteditClick3(!editClick3)}>edit</span></li>
          </ul>
        </div>
        <div className='taskMissing_list_area'>
          <ul className='taskMissing_list'>
            <li className='listName' style={editClick4 === false ? { color: '#0b1f47' } : { color: '#318fff' }}>
              Fairmont Lake Louise Poppy - ID & Branding
            </li>
            <li className='liststatus'>
              <BsCheckCircle
                color={'#a6d068'} className='BsCheckCircle'
                size={20}
              />
            </li>
            <li className='listEdit'><span onClick={() => seteditClick4(!editClick4)}>edit</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TaskMissingHours