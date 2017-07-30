import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import {createPostAction as createPost} from '../actions';

class CreatePost extends Component {
  renderField(field) {
    const {label, input, type, meta: {touched, error}} = field;
    const classNames = `form-group ${touched && error ? 'has-error' : ''}`
    return(
      <div className={classNames}>
        <label>{label}</label>
        <input className="form-control" type={type} {...input}/>
        <span style={{color: "red"}} >{touched ? error : ''}</span>
      </div>
    )
  }
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');      
    })
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            type="text"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            type="text"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Content"
            type="text"
            name="content"
            component={this.renderField}
          />
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Add Post
          </button>
          <Link to="/" className="btn btn-default" style={{marginLeft: "1rem"}}>
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  
  // Validate the form
  if (!values.title) {
    errors.title = "Enter the title"
  }
  if (!values.categories) {
    errors.categories = "Cannot be empty"
  }
  if (!values.content) {
    errors.content = "Cannot be empty"
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(CreatePost)
);