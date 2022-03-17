import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"

const About = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    return(
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1>About</h1>
                        <p>{ text }</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Card 
                            nameImage="foto01"
                            titleCard="Card title 01"
                            textCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure corrupti voluptatum aperiam, id voluptas odio magnam explicabo ratione, eligendi ipsam doloribus modi illum corporis error nihil culpa eum sapiente."
                            colorButton="purple"
                            backgroundCard=""
                            styleDefault={true}
                        />
                    </div>
                    <div className="col-4">
                        <Card 
                            nameImage="foto02"
                            titleCard="Card title 02"
                            textCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure corrupti voluptatum aperiam, id voluptas odio magnam explicabo ratione, eligendi ipsam doloribus modi illum corporis error nihil culpa eum sapiente."
                            colorButton="pink"
                            backgroundCard=""
                            styleDefault={false}
                        />
                    </div>
                    <div className="col-4">
                        <Card 
                            nameImage="foto03"
                            titleCard="Card title 03"
                            textCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure corrupti voluptatum aperiam, id voluptas odio magnam explicabo ratione, eligendi ipsam doloribus modi illum corporis error nihil culpa eum sapiente."
                            colorButton="purple"
                            backgroundCard=""
                            styleDefault={true}
                        />
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default About