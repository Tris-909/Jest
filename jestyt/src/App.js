import React, {useState, useEffect} from 'react';
import './app.scss';
import Header from './components/header/index';
import Headline from './components/headline/index';
import Button from './components/button/index';
import SingleListItem from './components/SingleListItem/index';
import {fetchPosts} from './store/actions/index';
import {connect} from 'react-redux';

const tempArr = [{
  fName: 'Tri',
  lName: 'Tran',
  email: 'tranminhtri9090@gmail.com',
  age: 21,
  onlineStatus: 'true'
}];

function App(props) {
  const fetch = () => {
    props.fetchPosts();
  }

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline 
          header="Posts"
          desc="Click The Button To Render Posts"
          tempArr={tempArr}
        />
        <Button buttonText="Fetch" emitEvent={() => fetch()} />
        {props.posts.map((post) => (
          <SingleListItem key={post.id} title={post.title} paragraph={post.body}/>
        ))}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
