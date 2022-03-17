import React from "react";
import { graphql, Link } from "gatsby";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Menu = () => {
    const {logo} = useStaticQuery(graphql`
    {
      logo: file(relativePath: {eq: "Logo.png"}) {
        childImageSharp {
          fixed(width: 36, height: 36){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <Img fixed={logo.childImageSharp.fixed} alt="Logo" to="/"/>
            </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" activeStyle={{ color: "#ff1a8c" }} className="nav-link" activeClassName="active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" activeStyle={{ color: "#ff1a8c" }} className="nav-link" activeClassName="active">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/gallery" activeStyle={{ color: "#ff1a8c" }} className="nav-link" activeClassName="active">Gallery</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" activeStyle={{ color: "#ff1a8c" }} className="nav-link" activeClassName="active">Contact</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Menu