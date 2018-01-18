import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  renderContent() {

  }
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={'surveys'}
            className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;