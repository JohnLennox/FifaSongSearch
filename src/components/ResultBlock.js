import React from 'react';

class ResultBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: this.props.artist,
            title: this.props.title,
            year: this.props.year,
            isLoading: false,
        };
    }

    render() {
        return (
            <div>
                <h2>Title: {this.state.title}</h2>
                <h2>Artist: {this.state.artist}</h2>
                <h2>Year: {this.state.year}</h2>
            </div>
        );
    }
}

export default ResultBlock;