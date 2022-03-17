import React from "react"
import Layout from "../components/Layout"
import * as Styled from "../styles/pages/contactStyles"

const Contact = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    return(
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4 mb-3">
                        <h1>Contact</h1>
                        <p>{ text }</p>
                    </div>
                    <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
                        </div>
                        <div className="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea" rows="3" placeholder="Textarea"></textarea>
                        </div>
                        <button type="submit" className="btn btn-purple mb-5">Send</button>
                    </form>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item"><Styled.EmailWrapper secondary/>my-email@email.com</li>
                            <li className="list-group-item"><Styled.TelephoneWrapper/>(00) 91234-5678</li>
                            <li className="list-group-item"><Styled.LocationWrapper/>Street 11, 234</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact