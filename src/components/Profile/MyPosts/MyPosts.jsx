import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {


  let postData = [
    {id: 1, post: 'This is my first post!', likesCount: 12},
    {id: 2, post: 'This is my second post', likesCount: 16},
    {id: 3, post: 'This is my last post', likesCount: 10}
  ]


  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message={postData[0].post} like={postData[0].likesCount}/>
        <Post message={postData[1].post} like={postData[1].likesCount}/>
        <Post message={postData[2].post} like={postData[2].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts;
