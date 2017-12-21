import React , { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup , Glyphicon } from 'react-bootstrap';
import Profile from './profile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      rating: '',
      poster: '',
      plot: ''
    }
  }
  search(){
    console.log('this.state', this.state);
    const BASE_URL = 'http://www.omdbapi.com/?';
    const FETCH_URL = `${BASE_URL}t=${this.state.query}&apikey=19fdf17c`;
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL,{
      method : 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const rating = json.imdbRating;
      const poster = json.Poster;
      const plot = json.Plot;
      this.setState({rating});
      this.setState({poster});
      this.setState({plot});

    });

  }
  render(){
    return (
      <div className="App">
        <div className="App-title">Movie Ratings 'n' Reviews</div>
        <FormGroup>
        <InputGroup>
        <FormControl
          type = "text"
          placeholder = "Search for a Movie"
          value = {this.state.query}
          onChange={event => {this.setState({query: event.target.value})}}
          onKeyPress={event => {
            if(event.key === 'Enter'){
              this.search();
            }
          }}
        />
        <InputGroup.Addon onClick={()=> this.search()}>
          <Glyphicon glyph="search"></Glyphicon>
        </InputGroup.Addon>
        </InputGroup>
        </FormGroup>


        <Profile
         rating={this.state.rating}
         poster={this.state.poster}
         plot={this.state.plot}/>


          
        </div>

    )
  }
}

export default App;
