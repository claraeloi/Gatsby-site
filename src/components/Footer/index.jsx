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
                    <div className="col-6">
                        {data.site.siteMetadata.description}
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <a href={data.site.siteMetadata.socialMedia.github}><Styled.GitHubIcon /></a>
                        <a href={data.site.siteMetadata.socialMedia.linkedin}><Styled.Linkedin /></a>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        {data.site.siteMetadata.copyright}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer