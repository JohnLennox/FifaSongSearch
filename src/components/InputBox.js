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
      <div>
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
  margin: '0 0 0.5em 0',
  paddingLeft: '0.9em',
  textAlign: 'left',
};

const InputStyle = {
  width: '80%',
  height: '80%',
  border: 'none',
  outline: 'none',
  marginBottom : '0.5em',
  fontSize: '1.5em',
  padding: '0.5em',
  backgroundColor: '#fafafa',
};

export default InputBox;