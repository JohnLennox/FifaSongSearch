import React from "react";
import Header from "../Header";
import ResultBlock from "../ResultBlock";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer";

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.songInfo)
        this.state = {
            result: this.props.songInfo,
            exact: this.props.songInfo.exact,
            artistSearch: this.props.songInfo.artistSearch,
            artist: this.props.songInfo.songInfo[0].artist,
            song: this.props.songInfo.songInfo[0].song,
            game: this.props.songInfo.songInfo[0].game
        }

    }

    render() {
        let typeMessage = <h2>We have an exact match!</h2>
        if (!this.state.exact) {
            typeMessage = <h2>We have a close match!</h2>
        }
        const data = this.state.result.songInfo;
        const listItems = data.map((item, index) =>
            <ResultBlock key={index} artist={item.artist} title={item.song} year={item.game} />
        );

        return (
            <div className="result-page">
                <Header/>
                {typeMessage}
                {listItems}
                <Button variant="primary" style = {ButtonStyle} onClick={this.props.togglePage}>Search Again?</Button>
                <Footer/>
            </div>
        )
    }
}

const ButtonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    width: "95%"
}

export default ResultPage;