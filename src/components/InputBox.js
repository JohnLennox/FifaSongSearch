import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.updateFunction(event.target.value);
  }

  render() {
    return (
      <div style = {blockStyle}>
        <p style={LabelStyle}>{this.props.label}</p>
        <input style={InputStyle}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const LabelStyle = {
  fontSize: '1.5em',
  textAlign: 'left',
};

const blockStyle = {
  display: 'block',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  justifyContent: 'center',
  margin: '0.5em 0',
};

const InputStyle = {
  width: '100%',
  height: '80%',
  border: 'none',
  outline: 'none',
  marginBottom : '0.5em',
  fontSize: '1.5em',
  padding: '0.5em',
  backgroundColor: '#fafafa',
};

export default InputBox;