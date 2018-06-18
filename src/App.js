import React, { Component } from 'react';
import {DayLayout} from './Components/DayLayout.js';
import {Story} from './Components/Story.js'
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import 'test.js'
const contentful = require('contentful');



class App extends Component {
  
  state = {
    posts: [],
    story:null,
  }
  

  client = contentful.createClient({
    space: '6glmg7qq7oyg',
    accessToken: '373d3fae019b3a1e90066a9d08748c59b08322d1759044f26e258594138194e2'
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
    
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    let resp = response.items.map(day=>day.fields);
    this.setState({
      posts: resp
    })
  }
  
  onClickDay= (event)=>{
    this.setState({
      story:event.currentTarget.id
    })
    scrollToComponent(this.Blue,{
      offset:200,
      align:'top',
      duration:1500
    });
  }

  render() {
    return (
      <div className="App ">
        <header className="App-header falling-leaves center bg tc">
          
          <h1 className="App-title">CHASING THE TEA LEAVES:</h1>
          <h1 className="App-title">MY JOURNEY EAST</h1>
        </header>
        
        <DayLayout className='days' onClickDay={this.onClickDay} posts = {this.state.posts}/>
        <section ref={(section) => { this.Blue = section; }}>
          <Story  story={this.state.story} posts = {this.state.posts}/>  
        </section>
      </div>
    );
  }
}

export default App;
