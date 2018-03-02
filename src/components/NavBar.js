import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    const { history, location: { pathname } } = this.props;
    if (pathname === "/products" || pathname === "/products/tech" ||
        pathname === "/products/services" || pathname === "/products/office"){
      var backG = '#9E9E9E';
    }
    return(
      <div>
         <header className="taps">
          <div>
            <center>
              <span
                className="taps__tap"
                style={
                  {
                    backgroundColor: pathname === "/" && '#9E9E9E'
                  }
                }
                onClick={() => {
                  history.push("/")
                }}
              >
                HOME
              </span>
              <span
                className="taps__tap"
                style={
                  {
                    backgroundColor: backG
                  }
                }
                onClick={() => {
                  history.push("/products")
                }}
              >
                PRODUCTS
              </span>
              <span
                className="taps__tap"
                style={
                  {
                    backgroundColor: pathname === "/clients" && '#9E9E9E'
                  }
                }
                onClick={() => {
                  history.push("/clients")
                }}
              >
                CLIENTS
              </span>
              <span
                className="taps__tap"
                style={
                  {
                    backgroundColor: pathname === "/contact" && '#9E9E9E'
                  }
                }
                onClick={() => {
                  history.push("/contact")
                }}
              >
                CONTACT
              </span>
            </center>
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default NavBar;