import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import PostList from '../../components/PostList';

function Main() {
  return (
    <Container>
      <Header />
      <PostList />
    </Container>
  );
}

export default Main;
