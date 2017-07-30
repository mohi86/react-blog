import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="">
                React Blog
              </a>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/posts/new">
                    New Post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;