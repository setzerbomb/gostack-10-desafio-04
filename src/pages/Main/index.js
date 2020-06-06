import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import PostList from '../../components/PostList';
import './styles.css';

function Main() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default Main;
