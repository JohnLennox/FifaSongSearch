import React from 'react';
import raw from '../resources/songList.txt';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

let stringSimilarity = require("string-similarity");

class Search extends React.Component {

    state = {
        songList: [],
    }

    componentDidMount() {
        fetch(raw)
            .then(r => r.text())
            .then(text => {
                this.setState({songList: JSON.parse(text)})
            })
    }

    getResult() {
        let criteria = {title: this.props.songTitle, artist: this.props.artist};
        if (!this.isBlank(criteria.title)) {
            let getTitle = function (song) {return song.song.toLowerCase()};
            let titleList = this.state.songList.map(getTitle);
            let searchResults = this.getOutParams(titleList, criteria.title, false);
            console.log(searchResults);
            this.props.updateFunction(searchResults);
        } else if (!this.isBlank(criteria.artist)) {
            let getArtist = function (song) {return song.artist.toLowerCase()};
            let artistList = this.state.songList.map(getArtist);
            let searchResults = this.getOutParams(artistList, criteria.artist, true);
            console.log(searchResults);
            this.props.updateFunction(searchResults);
        }
    }

    getOutParams(list, search, artist) {
        let closest = this.searchListForValue(list, search);
        let exact = false;
        if (search.toLowerCase().trim() === closest.toLowerCase().trim()) {
            exact = true;
        }
        let songInfo = [];
        this.state.songList.map(song => {
            let searchCriteria = artist ? song.artist : song.song;

            if ((searchCriteria).toLowerCase().trim() === closest.toLowerCase().trim()) {
                songInfo.push(song);
            }
        });

        return ({exact: exact, artistSearch: artist, songInfo: songInfo});
    }

    searchListForValue(list, key) {
        let results = stringSimilarity.findBestMatch(key, list);
        return results.bestMatch.target;
    }

    isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }

    render() {
        return (
            <div style={blockStyle}>
                <Button variant="primary" style={ButtonStyle} onClick={() => this.getResult()}>Search</Button>
            </div>
        );
    }

}

const blockStyle ={
    paddingLeft: '1rem',
    paddingRight: '1rem',
}

const ButtonStyle = {
    width: '100%',
    marginTop: "1em",
    marginBottom: "1em",
    paddingLeft:'1rem',
    paddingRight:'1rem',

}


export default Search;