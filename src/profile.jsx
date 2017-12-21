import React, { Component } from 'react';
import './App.css';

class Profile extends Component{
  render(){
    console.log(this.props)

    let rating = '';
    let poster = '';
    let plot = '';
    if(this.props.rating !== null){
      rating = this.props.rating;
      poster = this.props.poster;
      plot = this.props.plot;
    }
    console.log('poster',this.props.poster)

    return(
      <div className="profile">
        <img
        alt="profile"
        className = "profile-img"
        src={poster}
        />

        <div>Imdb Rating <b>{rating}</b></div>
        <br />
        <div> {plot} </div>
      </div>
    )
  }
}

export default Profile;
