import React from "react";
import Header from "../Header";
import ResultBlock from "../ResultBlock";

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.songInfo)
        this.state = {
            result: this.props.songInfo,
            exact: this.props.songInfo.exact,
            artistSearch: this.props.songInfo.artistSearch,
            artist: this.props.songInfo.songInfo[0].Artist,
            song: this.props.songInfo.songInfo[0].Song,
            game: this.props.songInfo.songInfo[0].Game
        }

    }

    render() {
        let typeMessage = <h2>We have an exact match!</h2>
        if (!this.state.exact) {
            typeMessage = <h2>We have a close match!</h2>
        }
        const data = this.state.result.songInfo;
        const listItems = data.map((item, index) =>
            <ResultBlock key={index} artist={item.Artist} title={item.Song} year={item.Game} />
        );

        return (
            <div className="result-page">
                <Header/>
                {typeMessage}
                {listItems}
                <button onClick={this.props.togglePage}>Search Again?</button>
            </div>
        )
    }
}

export default ResultPage;