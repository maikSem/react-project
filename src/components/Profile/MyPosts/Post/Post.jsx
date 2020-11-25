import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={`${classes.item}`}>
      <img src='https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg'></img>
      <p>{props.message}</p>
      <span>like</span>
      <span>dislike</span>
    </div>
  )
}

export default Post;
