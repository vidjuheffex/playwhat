import React, {Component} from 'react';

class PlayListItem extends Component {
  render(){
    let song=this.props.song;
    return (
      <div key="song._id" className="card mb-3">
        <div className ="card-block">
          <ul className="list-group">
            <li className="list-group-item"><strong>User:</strong>{song.userName}</li>
            <li className="list-group-item"><strong>Artist/Band:</strong>{song.songArtist}</li>
            <li className="list-group-item"><strong>Title:</strong>{song.songTitle}</li>
            <li className="list-group-item"><strong>Notes:</strong>{song.songNotes}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PlayListItem;
