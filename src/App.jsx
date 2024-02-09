import Header from './components/Header/Header';
import InfoData from './components/InfoData/InfoData';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disply: 'posts',
      data: []
    }
  }

  handleChangeState = (display) => {
    console.log(this.state.data);
    fetch(`https://jsonplaceholder.typicode.com/${display}`)
      .then(responce => responce.json())
      .then(data => this.setState({
        // display: display,
        display,
        data
      }))
      .catch(e => {
        this.setState({
          disply: 'posts',
          data: []
        })
      })
  }
  componentDidMount() {
    this.handleChangeState('posts')
  }
  render() {

    return (
      <div className='wrapper'>
        <Header changeState={this.handleChangeState} />
        <InfoData appState={this.state} />
      </div>
    );
  }
};

export default App;
