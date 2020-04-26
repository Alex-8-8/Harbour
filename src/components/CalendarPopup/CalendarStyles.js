import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 600px;
`

export const DataPickerLabel = styled.label`
position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: url(${({toggleCalendar}) => toggleCalendar ? "calendar.svg" : "calendarBlack.svg"});
  }
`

export const DataPickerInput = styled.input`
  width: 300px;
  height: 40px;
  outline: none;
  padding: 0 10px 0 8px;
  border: 1px solid #dadada;
  border-radius: 3px;
  color: #dadada;
  :hover {
    border: 1px solid #000;
  }
  :focus {
    border: 1px solid #000;
    color: #000;
  }
`

export const Calendar = styled.div`
  position: absolute;
  top: 48px;
  height: 368px;
  width: 300px;
  padding: 16px 10px;
  box-shadow: 0px 18px 50px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
`

export const CalendarHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -60px;
    background: #cdcdcd;
  }
`

export const CalendarMonthYear = styled.h3`
  font-size: 16px;
  font-weight: 700;
`

export const CalendarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 60px;
`

export const CalendarCell = styled.button`
height: 30px;
width: 30px;
margin-top: ${({daysNumber}) => (daysNumber <= 7) ? "12px"
: "2px"
};
margin-bottom: 10px;
margin-right: ${({
  month, 
  monthesNumber, 
  daysNumber 
}) => ((month && monthesNumber === 7) 
|| daysNumber % 7 === 0
) ? "0"
: "10px"
};
border: none;
background: #fff;
padding: 0;
color: ${({month, daysNumber}) => month ? "#8d8d8d" 
: (daysNumber <= 6) ? "#cdcdcd"
: (daysNumber >= 7 && daysNumber <= 15) ? "#8b8b8b"
: (daysNumber >= 37) ? "#dadada"
: "#000"};
border-radius: 3px;
:focus {
  background: ${({daysNumber}) => (daysNumber >= 16 && daysNumber <= 36) ? "#DF1721"
  : "none"
  };
}
:hover {
  border: ${({daysNumber}) => daysNumber ? "1px solid #DF1721"
  : "none"
  };
}
`