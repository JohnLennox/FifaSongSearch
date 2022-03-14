// new react component
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Is it in FIFA?</h1>
                <img style={imageStyle} src={imageLink}/>
            </header>
        );
    }
}

const imageLink = "https://logos-world.net/wp-content/uploads/2021/02/FIFA-Logo.png";

const imageStyle = {
    width: '50%',
    height: '500%'
}

export default Header;