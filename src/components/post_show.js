import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPostAction as fetchPost, deletePostAction as deletePost} from '../actions';

class PostDetail extends Component {
  componentDidMount() {
    if(!this.props.post) {
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
  }
  onDeletePost() {
    const {id} = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }
  render() {
    if (!this.props.post) {
      return (
        <h4>Loading your post...</h4>
      )
    }
    return (
      <div className="row">
        <div>
          <h2 className="col-sm-10">{this.props.post.title}</h2>
          <button 
            className="btn btn-danger col-sm-2" 
            onClick={this.onDeletePost.bind(this)}
          >
            Delete Post
          </button>
        </div>
        <div className="col-sm-8">
          {this.props.post.content}
        </div>
        <div className="col-sm-4">
          {this.props.post.categories}
        </div>
      </div>
    );
  }
}

function mapStateToProps({posts},ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostDetail);