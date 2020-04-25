import React from 'react';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/Icon';
import styled from 'styled-components';

const InputWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-bottom: 36px;  
`;

const StyledInput = styled.input`
width: 300px;
height: 40px;
margin-top: 4px;
padding: 0 8px;
border-radius: 3px;
background: ${({disabled}) => disabled ? "#f8f8f8"
: "fff"
};
border: ${({name}) => (name === "hover") ? "1px solid #000"
: (name === "error") ? "1px solid #df1721"
: "1px solid #dadada"
};
letter-spacing: ${({name}) => (name === "success") ? "1.5px"
: "normal"
};
font-size: ${({name}) => (name === "success") ? "18px"
: "normal"
};
outline: none;
`

const InputLabel = styled.label`
position: relative;
font-size: 10px;
line-height: 16px;
`

const IconWrapper = styled.span`
position: absolute;
top: 30px;
right: 12px;
`

const ErrorWrapper = styled.div`
margin-top: 4px;
font-size: 12px;
color: #df1712;
`

interface IComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: boolean | React.ReactNode;
  success?: boolean;
  icon?: IconName;
  name?: string;
}

const Input: React.FC<IComponentProps> = ({
  label,
  error,
  success,
  icon,
  className,
  onKeyPress,
  ...props
}) => {
  if (success && !icon) icon = 'check-circle';

  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
        <StyledInput {...props} />
        {icon && <IconWrapper {...props}><Icon name={icon} /></IconWrapper>}
      <ErrorWrapper>{error}</ErrorWrapper>
    </InputWrapper>
  );
};

export default Input;

