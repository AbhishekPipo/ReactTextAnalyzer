import React from "react";
import PropTypes from "prop-types";

class Navbar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: "set title here",
    mode: "light",
    aboutText: "About",
    toggleMode: () => {},
  };

  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <a className="navbar-brand" href="/">
            {this.props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {this.props.aboutText}
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>

  <input onClick={this.props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Disable Dark Mode</label>
</div>
          </div>
  
        </nav>
      </div>
    );
  }
}

export default Navbar;
