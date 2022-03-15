import React from "react";
import Header from "../Header";
import ResultBlock from "../ResultBlock";

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.songInfo,
            exact: this.props.songInfo.exact,
            artistSearch: this.props.songInfo.artistSearch,
            artist: this.props.songInfo.songInfo.Artist,
            song: this.props.songInfo.songInfo.Song,
            game: this.props.songInfo.songInfo.Game
        }

    }

    render() {
        let typeMessage = <h2>We have an exact match!</h2>
        if (!this.state.exact) {
            typeMessage = <h2>We have a close match!</h2>
        }

        return (
            <div className="result-page">
                <Header/>
                {typeMessage}
                <ResultBlock artist={this.state.artist} title={this.state.song} year={this.state.game}/>
                <button onClick={this.props.togglePage}>Search Again?</button>
            </div>
        )
    }
}

export default ResultPage;