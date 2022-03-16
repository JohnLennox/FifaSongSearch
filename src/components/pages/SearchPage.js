import React from 'react';
import Header from "../Header";
import InputBox from "../InputBox";
import Search from "../Search";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            songTitle: '',
            guess: []
        }
    }

    setGuess = (guess) => {
        this.setState({guess: guess});
        this.props.updateSearchResult(guess);
        this.props.updatePage(false);
    }

    setSongTitle = (songTitle) => {
        this.setState({
            songTitle: songTitle
        })
    }

    setArtistName = (artistName) => {
        this.setState({
            artist: artistName
        })
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <header>
                    <InputBox label="Song Title" updateFunction={this.setSongTitle}/>
                    <InputBox label="Artist Name" updateFunction={this.setArtistName}/>
                    <Search style = {searchStyle} artist={this.state.artist} updateFunction={this.setGuess} songTitle={this.state.songTitle}/>
                </header>
            </div>
        );
    }
}
const searchStyle = {
    paddingLeft:'1rem',
    paddingRight:'1rem',

}


export default SearchPage;