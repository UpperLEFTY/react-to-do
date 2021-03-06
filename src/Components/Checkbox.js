import React from 'react';
import styled from 'styled-components';




class Checkbox extends React.Component {
state = { checked: false }

handleCheckboxChange = event => {
  this.setState({ checked: event.target.checked });
}



  render () {
    return (
      <div>
      <label>
      <Checkbox
      checked={this.state.checked}
      onChange={this.handleCheckboxChange}
      />
      </label>
      </div>
    )
  }
};


 const HiddenCheckbox = styled.input.attrs({  type: 'checkbox' })` 
  border: 0;
  clip: rect(0, 0, 0, 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  postion: absolute;
  white-space: nowrap;
  width: 1px;
` ;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'white' : '#d8d8d8'}
  border-radius: 3px;
  transition: all 150ms;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;

`;


const CheckBox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;