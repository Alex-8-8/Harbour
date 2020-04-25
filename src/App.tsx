import React from 'react';
import styled from 'styled-components';

import Input from 'components/Input';
import CalendarPopup from 'components/CalendarPopup';
import Notifications from 'components/Notifications';

const AppWrapper = styled.div`
font-family: 'Inter', sans-serif;
`
const InputsWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppWrapper>
      <section>
        <Notifications />
      </section>
      <section>
        <CalendarPopup />
      </section>
      <section>
        <InputsWrapper>
          <Input label="Caption for field" placeholder="Field not available" disabled />
          <Input label="Caption for field" placeholder="Static" />
          <Input label="Caption for field" placeholder="Hover" name="hover" />
          <Input label="Caption for field" placeholder="Enter your text" value="Text example field"/>
          <Input type="password" label="Success" value="Text exemple for field" success readOnly name="success"/>
          <Input label="Error" placeholder="Text exemple for field" error="Error text" icon="error" name="error" />
          <Input label="Search" value="Search" icon="search" readOnly name="search" />
        </InputsWrapper>
      </section>
      
    </AppWrapper>
  );
}

export default App;
