import React, {Component} from 'react';
import PlayListItem from './PlayListItem';

class PlayList extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentWillMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      });
  }

  handleClick = e => {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      });
  }
  
  render(){
    let playlist = this.state.songs.map( e => {
      return (
        <div key={e._id}>
          <PlayListItem song={e}/>
        </div>
      );
    });
    
    return(
      <div>
        <button type="button" className="btn btn-primary m-3" onClick={this.handleClick}>Fetch More Random Songs</button>
        <div className="mb-3">
          {playlist}
        </div>
      </div>
    );
  }
}

export default PlayList;
