import React from 'react';
import SearchContainer from './Containers/SearchContainer';
import NominationList from './Containers/NominationList';
import banner from './banners/banner-03.png'
import './App.css';
import Finished from './Components/Finished';
import NominationSymbol from './banners/symbol-01.png'



class App extends React.Component {

  state = { 
    results: null,
    isLoading: true,
    nominations: [],
    searchTerms: 'Love',
    toggle: false,
    finishedVisible: false
   }

  render() { 
    return ( 
    <div>
      {this.state.isLoading ? ( 
        <div>
      <p id='loading-text'>Loading</p>
      </div>
      ) : (
        <div >
          <button id='selection-list-btn' onClick={()=>{this.toggle()}}><img id='selection-symbol' src={NominationSymbol}/></button>
          <img src={banner} id='banner'/>
            {this.state.finishedVisible ? <Finished nominations={this.state.nominations} removeNomination={this.removeNomination}/> : null}
              <SearchContainer nominate={this.nominate} nominations={this.state.nominations} fetchSearchResults={this.fetchSearchResults}/>
              {this.state.toggle ? (
              <NominationList removeNomination={this.removeNomination} nominations={this.state.nominations}/>
              ) : null}
        </div>
      )}
    </div>)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: !this.state.isLoading
      })
    }, 2000)
  }
  
  toggle = () =>{
    this.setState({
      toggle: !this.state.toggle
    })
  }

  nominate = (result) =>{
    if(this.state.nominations.length === 4){
      this.setState(prevState =>({
        finishedVisible: true,
        nominations: [...prevState.nominations, result]
      }))
    }else if(this.state.nominations.length === 5){
      console.log('No additional nominations allowed')
    }else {
    this.setState(prevState => ({
      nominations: [...prevState.nominations, result]
    }))}
  }

  removeNomination = (obj) =>{
    var array = [...this.state.nominations]; // make a separate copy of the array
    var index = array.indexOf(obj)
    if (index !== -1) {
        array.splice(index, 1);
        this.setState({nominations: array, finishedVisible: false});
    }
  }
}
export default App;