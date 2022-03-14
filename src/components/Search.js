import React from 'react';
import raw from '../resources/songList.txt';

let stringSimilarity = require("string-similarity");

class Search extends React.Component {

    state = {
        songList: [{Artist: '', Song: '', Game: ''}],
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
            let getTitle = function (song) {return song.Song.toLowerCase()};
            let titleList = this.state.songList.map(getTitle);
            let searchResults = this.getOutParams(titleList, criteria.title, false);
            this.props.updateFunction(searchResults);
        } else if (!this.isBlank(criteria.artist)) {
            let getArtist = function (song) {return song.Artist.toLowerCase()};
            let artistList = this.state.songList.map(getArtist);
            let searchResults = this.getOutParams(artistList, criteria.artist, true);
            this.props.updateFunction(searchResults);
        }
    }

    getOutParams(list, search, artist) {
        let closest = this.searchListForValue(list, search);
        let exact = false;
        if (search.toLowerCase().trim() === closest.toLowerCase().trim()) {
            exact = true;
        }
        let songInfo;
        this.state.songList.map(song => {
            let searchCriteria = artist ? song.Artist : song.Song;

            if ((searchCriteria).toLowerCase().trim() === closest.toLowerCase().trim()) {
                songInfo = song;
            }
        });

        return ({exact: exact, artistSearch: true, songInfo: songInfo});
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
            <div>
                <button onClick={() => this.getResult()}>Search</button>
            </div>
        );
    }

}


export default Search;