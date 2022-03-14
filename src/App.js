import React from "react";
import './App.css';
import SearchPage from "./components/pages/SearchPage";
import ResultPage from "./components/pages/ResultPage";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchPage: true
        }
    }

    setSearchPage = (searchPage) => {
        this.setState({
            searchPage: searchPage
        })
    }
    setSearchResult = (searchResult) => {
        this.setState({
            searchResult: searchResult
        })
    }

    render() {
        let page = null;
        if(this.state.searchPage){
            console.log("searchPage");
            page = <SearchPage updatePage={this.setSearchPage} updateSearchResult={this.setSearchResult}/>
        }else{
            console.log("Result: " + this.state.searchResult.songInfo.Artist + " - " + this.state.searchResult.songInfo.Song+ " - " + this.state.searchResult.songInfo.Game);
            page = <ResultPage />
        }

        return (
            <div className="App">
                <header className="App-header">
                    {page}
                </header>
            </div>
        );
    }
}

export default App;
