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

    togglePage = () => {
        this.setState({
            searchPage: !this.state.searchPage
        })
    }

    render() {
        let page;
        if (this.state.searchPage) {
            page = <SearchPage updatePage={this.setSearchPage} updateSearchResult={this.setSearchResult}/>
        } else {
            page = <ResultPage togglePage={this.togglePage} songInfo={this.state.searchResult}/>
        }

        return (
            <div className="App">
                <header className="App-body">
                    {page}
                </header>
            </div>
        );
    }
}

export default App;
