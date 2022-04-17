import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <p style={disclaimerText}>This app is a personal project and is not affiliated with FIFA or EA Games in
                    any way.</p>
            </div>
        )
    }
}

const disclaimerText = {
    fontSize: '0.8em',
    color: '#696969',
    textAlign: 'center'
}
export default Footer;
