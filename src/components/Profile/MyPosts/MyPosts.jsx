import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        New post
        </div>
      <div className={classes.posts}>
        <Post message='This is my first post' like='15' />
        <Post message='This is my second post' like='12' />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;
