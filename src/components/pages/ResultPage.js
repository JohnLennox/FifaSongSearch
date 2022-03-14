import React from "react";

class ResultPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: this.props.result
        }
    }

    render(){
        return(
            <div className="result-page">
                <h1>Result</h1>
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default ResultPage;