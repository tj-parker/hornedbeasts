import React, { Component } from 'react';
import Filter from './components/Filter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import list from './data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImg: null,
      modalTitle: null,
      modalShow: false,
      horns: '',
      list: list
    };
    
  }



  handleClick = (aBeast) => {
    this.setState({
      modalImg: aBeast.image_url,
      modalTitle: aBeast.title,
      modalShow: true
    })
    console.log(aBeast);
  }

  closeModal = () => {
    this.setState({ modalShow: false });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        
        <Main beasts={list} handleClick={this.handleClick} />
        <SelectedBeast 
        image_url={this.state.modalImg} title={this.state.modalTitle} closeModal={this.closeModal} show={this.state.modalShow} />
        <Footer />
      </div>
    );
  }

}

export default App;
