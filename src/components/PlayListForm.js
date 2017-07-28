import React, {Component} from 'react';

class PlayListForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    };    
  };

  addToList = (e) => {
    e.preventDefault();
    console.log(this.userInput.value);
    console.log(this.songInput.value);
    this.setState({userName: this.userInput.value, songTitle: this.songInput.value, songArtist: this.artistInput.value, songNotes: this.notesInput.value},
                  ()=>{
                    let listItem = JSON.stringify(this.state);
                    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
                      method: "POST",
                      body: listItem,
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      }
                    })
                      .then(response => {
                        console.log(response, "yay");
                        this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
                        this.userInput.value = "";
                        this.songInput.value = "";
                        this.artistInput.value="";
                        this.notesInput.value = "";
                      })
                      .catch(err => {
                        console.log(err, "boo!");
                      });
                  });
  };

  render(){
    return (
      <form onSubmit={this.addToList}>
        <div className="form-group">
          <label htmlFor="username_input">User Name:</label>
          <input className="form-control"type="text" ref = {(input) => this.userInput = input} name="userName" id="username_input" />
            <label htmlFor="artist_input">Artist/Band Name:</label>
            <input className="form-control" type="text"  ref = {(input) => this.artistInput = input} name="songArtist" id="artist_input"/>
              <label htmlFor="title_input">Song Title:</label>
              <input className="form-control" type="text"  ref = {(input) => this.songInput = input}name="songTitle" id="title_input"/>
                <label htmlFor="notes_input">Notes About Song:</label>
                <textarea className="form-control"  ref = {(input) => this.notesInput = input} name="songNotes" id="notes_input"/>
                  <button type="submit" className="btn btn-primary m-3">Submit</button>
        </div>
      </form>
    );
  }
};

export default PlayListForm;
