import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from "./styled";

const Footer = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            github
            linkedin
          }
          copyright
          description
        }
      }
    }
  `)
    return(
        <div className="bg-dark">
            <div className="container">
                <div className="row text-pink py-4 mt-5">
                    <div className="col-md-6 mb-3">
                        {data.site.siteMetadata.description}
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                        <a href={data.site.siteMetadata.socialMedia.github}><Styled.GitHubIcon /></a>
                        <a href={data.site.siteMetadata.socialMedia.linkedin}><Styled.Linkedin /></a>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
              <div className="row bg-black text-pink py-3">
                <div className="col-12 d-flex justify-content-center">
                    {data.site.siteMetadata.copyright}
                </div>
              </div>
            </div>
        </div>
    )
}

export default Footer