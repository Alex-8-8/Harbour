import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  height: 100vh;
`

export const HeaderNav = styled.div`
  position: relative;
  height: 48px;
  margin: 0 32px;
  border-bottom: 1px solid #f1f1f1;
`

export const HeaderNavInsideWrapper = styled.div`
  display: flex;
  height: 24px;
  padding-top: 7px;
`

export const BurgerMenu = styled.div`
  margin-right: auto;
  margin-left: 6px;
`

export const HeaderButton = styled.button`
  position: relative;
  height: 24px;
  width: 24px;
  border: none;
  background: none;
  cursor: pointer;
  &:nth-child(3) {
    background-color: #f8f8f8;
    border-radius: 3px;
  }
  &:nth-child(2),
  &:nth-child(3){
    &:before {
      content: '';
      position: absolute;
      top: 4px;
      left: 5px;
      width: 5px;
      height: 5px;
      background: url("orangeCircle.svg") center no-repeat;
    }
  }
`

export const HeaderArrowButton = styled.span`
  border: none; 
  cursor: pointer;
  position: relative;
  background: transparent;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 4px;
    background: url("headerArrow.svg") center no-repeat;
  }
`

export const ActionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 82px;
  margin-right: 24px;
`

export const AccountBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 82px;
`

export const HeaderSquare = styled.div`
  cursor: pointer;
  height: 24px;
  width: 24px;
  border-radius: 3px;
  background: #c4c4c4;
`

export const AccountUserName = styled.div`
  cursor: pointer;
  font-size: 12px;
`

export const NotificationsList = styled.ul`
  position: absolute; 
  display: flex;
  flex-direction: column;
  padding: 10px;
  top: 35px;
  right: -50px;
  width: 200px;
  box-shadow: 0px 18px 50px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  text-align: left;
  @media (min-width: 550px) {
    width: 300px;
    right: 0;
  }
`
export const NotificationsItem = styled.li`
  padding: 9px;
  margin-bottom: 4px;
  background: #f8f8f8;
  font-size: 12px;
  border-radius: 3px;
`
export const NotificationsNew = styled.span`
  color: #df1721;
`

export const NotificationsInfo = styled.p`
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: #8b8b8b;
`

export const NotificationsImage = styled.img`
  height: 18px;
  border-radius: 50%;
  margin-right: 6px;
`

export const NotificationButton = styled.div`
  cursor: pointer;
  margin: 24px auto;
  border: none;
  background: transparent;
  font-weight: 600;
`

export const NotificationButtonNumber = styled.span`
  font-weight: normal;
`