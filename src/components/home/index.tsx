import React from 'react';
import Poster from '../poster';
import Category from '../category';
import NewPost from '../new-post';

export default function HomePage() {
  return (
    <div style={{ margin: '16px 0' }}>
      <Poster />
      <Category />
      <NewPost />
    </div>
  );
}
