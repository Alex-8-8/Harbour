import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'
import * as Styled from './CalendarStyles'

const CalendarPopup = () => {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const previousMonthDays = [25, 26, 27, 28, 29, 31];
  const nextMonthDays = [1, 2, 3, 4, 5, 6];
  const currentMonth = [...Array(30).keys()].map(day => day + 1)
  const allDays = [...previousMonthDays, ...currentMonth, ...nextMonthDays]

  const [toggleCalendar, setToggleCalendar] = useState(false)
  const [inputValue, setInputValue] = useState('Choose')

  const onClick = () => {
    setToggleCalendar(!toggleCalendar)
  }

  const handleValue = (e) => {
    e.preventDefault();
   const value = e.target.value
   setInputValue(`06/${value}/19`)
  }


  return (
    <Styled.SectionWrapper>
      <Styled.DataPickerLabel toggleCalendar>
        <Styled.DataPickerInput value={inputValue} type="text" onClick={onClick}/>
        {toggleCalendar && <Styled.Calendar id="calendar" toggleCalendar>
        <Styled.CalendarHeader>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0093 3.00163L3.41148 3.00163L4.70635 1.70758C4.7993 1.61526 4.87312 1.50522 4.92351 1.38382C4.97389 1.26242 4.99984 1.13213 4.99984 1.0005C4.99984 0.868873 4.97389 0.738523 4.92351 0.617121C4.87312 0.495718 4.7993 0.385677 4.70635 0.293362C4.51776 0.10539 4.26341 0 3.99838 0C3.73335 0 3.47899 0.10539 3.2904 0.293362L0.288367 3.29462C0.204151 3.38037 0.136309 3.48099 0.0882349 3.59156C0.0744102 3.62443 0.0627075 3.65821 0.0532076 3.69261C0.0261962 3.77219 0.010033 3.85513 0.00517094 3.93911C0.00108204 3.97262 -0.000579774 4.00636 0.000177938 4.04011C0.00323492 4.14751 0.0238495 4.25364 0.0612086 4.35425C0.063064 4.36346 0.0654059 4.3726 0.0682171 4.38156C0.11694 4.49086 0.184727 4.59045 0.268349 4.67554C0.276355 4.68463 0.279361 4.69672 0.288367 4.70581L3.2904 7.70707C3.47912 7.8948 3.73343 8 3.99838 8C4.26333 8 4.51763 7.8948 4.70635 7.70707C4.7993 7.61475 4.87312 7.50465 4.92351 7.38325C4.97389 7.26185 4.99984 7.13156 4.99984 6.99993C4.99984 6.8683 4.97389 6.73801 4.92351 6.61661C4.87312 6.49521 4.7993 6.38511 4.70635 6.29279L3.41148 4.99874L15.0093 4.99874C15.2721 4.99874 15.5241 4.89343 15.7098 4.70588C15.8956 4.51832 16 4.26391 16 3.99867C16 3.73344 15.8956 3.47909 15.7098 3.29154C15.5241 3.10398 15.2721 2.99861 15.0093 2.99861V3.00163Z" fill="black"/>
          </svg>
          <Styled.CalendarMonthYear>June, 2019</Styled.CalendarMonthYear>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.990675 3.00163L12.5885 3.00163L11.2937 1.70758C11.2007 1.61526 11.1269 1.50522 11.0765 1.38382C11.0261 1.26242 11.0002 1.13213 11.0002 1.0005C11.0002 0.868873 11.0261 0.738523 11.0765 0.617121C11.1269 0.495718 11.2007 0.385677 11.2937 0.293362C11.4822 0.10539 11.7366 0 12.0016 0C12.2666 0 12.521 0.10539 12.7096 0.293362L15.7116 3.29462C15.7958 3.38037 15.8637 3.48099 15.9118 3.59156C15.9256 3.62443 15.9373 3.65821 15.9468 3.69261C15.9738 3.77219 15.99 3.85513 15.9948 3.93911C15.9989 3.97262 16.0006 4.00636 15.9998 4.04011C15.9968 4.14751 15.9762 4.25364 15.9388 4.35425C15.9369 4.36346 15.9346 4.3726 15.9318 4.38156C15.8831 4.49086 15.8153 4.59045 15.7317 4.67554C15.7236 4.68463 15.7206 4.69672 15.7116 4.70581L12.7096 7.70707C12.5209 7.8948 12.2666 8 12.0016 8C11.7367 8 11.4824 7.8948 11.2937 7.70707C11.2007 7.61475 11.1269 7.50465 11.0765 7.38325C11.0261 7.26185 11.0002 7.13156 11.0002 6.99993C11.0002 6.8683 11.0261 6.73801 11.0765 6.61661C11.1269 6.49521 11.2007 6.38511 11.2937 6.29279L12.5885 4.99874L0.990675 4.99874C0.727933 4.99874 0.475945 4.89343 0.290159 4.70588C0.104372 4.51832 0 4.26391 0 3.99867C0 3.73344 0.104372 3.47909 0.290159 3.29154C0.475945 3.10398 0.727933 2.99861 0.990675 2.99861V3.00163Z" fill="black"/>
          </svg>
        </Styled.CalendarHeader>
        <Styled.CalendarBox>
          {daysOfWeek.map((month, i) => 
            <Styled.CalendarCell key={uuidv4()} month monthesNumber={i + 1}>{month}</Styled.CalendarCell>
            )}
        </Styled.CalendarBox>
        <Styled.CalendarBox>
          {allDays.map((day, i) => 
            <Styled.CalendarCell key={uuidv4()} daysNumber={i + 1} value={day} onClick={handleValue}>{day}</Styled.CalendarCell>
            )}
        </Styled.CalendarBox>
        </Styled.Calendar>}
      </Styled.DataPickerLabel>
    </Styled.SectionWrapper>
  )
}

export default CalendarPopup
