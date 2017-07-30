import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPostsAction as fetchPosts, deletePostAction as deletePost} from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  onDeletePost(id) {
    this.props.deletePost(id);
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
          <span 
            onClick={this.onDeletePost.bind(this, post.id)}
            style={{color: 'red', cursor: 'pointer', float: 'right'}}
          >
            X
          </span>
        </li>
      );
    })
  }
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts, deletePost})(PostsIndex);