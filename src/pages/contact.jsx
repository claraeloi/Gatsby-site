import React from "react"
import Layout from "../components/Layout"
import * as Styled from "../styles/pages/contactStyles"

const Contact = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    return(
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1>Contact</h1>
                        <p>{ text }</p>
                    </div>
                    <div className="col-6">
                        <ul className="list-group">
                            <li className="list-group-item"><Styled.EmailWrapper secondary/>Email</li>
                            <li className="list-group-item"><Styled.TelephoneWrapper/>Telefone</li>
                            <li className="list-group-item"><Styled.LocationWrapper/>Localização</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact