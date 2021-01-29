import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostReduxForm from "./Post/PostForm";

const MyPosts = props => {
  console.log('render');
  let postsElements = props.posts.map(p => <Post message={p.post} like={p.likesCount} key={p.id}/>);

  const onAddPost = (values) => {
    props.addPost(values.newBodyPost)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostReduxForm onSubmit={onAddPost}/>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;
