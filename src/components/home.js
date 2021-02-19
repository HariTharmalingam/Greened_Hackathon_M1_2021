import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import icon_arrow from '../assets/img/icon_arrow.png';
import icon_bulp from '../assets/img/icon_bulp.png';
import icon_leaf from '../assets/img/icon_leaf.png';
import separator from '../assets/img/separator.png';
import { Telephone, GeoAlt } from 'react-bootstrap-icons';

class Home extends Component {
    render() {
        return (
            <div className="home">
                
                <Image className="logo" src={logo} alt="logo"/>

                <Container className="main">
                    <Row className="intro">
                        <Col className="story" lg={6}>
                            <h1>L'histoire de <span className="shadow_title">Greened</span></h1>
                            <p>Née de l’inquiétude de l’impact environnemental que peuvent fournir les plateformes web, Grenned, une équipe de consulting vous permet de rendre vos données digitales plus vertes.</p>
                            <p>Nous vous proposons un pack constitué d’un audit, d’un plan d’action et d’un suivi pour réduire l’impact écologique que génèrent vos services web.</p>
                        </Col>
                
                        <Col className="eco_conception" lg={6}>
                            <h1>L'éco-conception <span className="shadow_title">web</span></h1>
                            <p>L’idée est simple : réduire les impacts environnementaux des plateformes web en améliorant leur conception et leur réalisation.</p>
                            <p>L’éco-conception web permet la conception de sites internet moins énergivores et plus respectueux de l’environnement mais avec des performances similaires à des pratiques de conceptions plus traditionnelles. </p>
                        </Col>    
                    </Row>
                </Container>

                <Image className="separator" src={separator} alt="separator"/>
                
                <Container className="valeurs_container">

                    <h1 className="valeurs_title">Nos <span className="shadow_title">valeurs</span></h1>
                    <Row>
                        <Col lg={4}>
                            <p className="valeurs">Soucieux de notre planète</p>
                            <div className="image_container">
                                <Image src={icon_leaf} alt="icon_leaf" />
                            </div>
                            <p>l’éco conception va permettre de réduire notre impact environnemental de façon fondamentale</p>
                        </Col>
                        <Col lg={4}>
                            <p className="valeurs">Innovation et différenciation</p>
                            <div className="image_container">
                                <Image src={icon_bulp} alt="icon_bulp" />
                            </div>
                            <p>un site web éco-conçu va se différencier des autres, il s’agit d’une démarche d’amélioration continue</p>
                        </Col>
                        <Col lg={4}>
                            <p className="valeurs">Levier de création de valeur</p>
                            <div className="image_container">
                                <Image src={icon_arrow} alt="icon_arrow"/>
                            </div>
                            <p>en intégrant des notions de responsabilité sociétales et environnementales dans nos produits web</p>
                        </Col>
                    </Row>
                </Container>


                <Image className="separator" src={separator} alt="separator"/>
                
                <Container className="steps_container">

                    <h1 className="steps_title">Notre <span className="shadow_title">démarche</span></h1>
                    <Row>
                        <Col lg={4}>
                            <Row className="steps_row">
                                <span className="steps_number">1</span>
                                <p className="steps">Analyse détaillée de votre plateforme web qui conduit à un audit</p>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <Row className="steps_row">
                                <span className="steps_number">2</span>
                                <p className="steps">Mise en place de plans d’actions pour améliorer votre plateforme</p>
                            </Row>
                        </Col>                        
                        <Col lg={4}>
                        <Row className="steps_row">
                                <span className="steps_number">3</span>
                                <p className="steps">Suivi et conseils concernant votre projet durant la conception</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <Image className="separator" src={separator} alt="separator"/>

                <Container className="contact_container">
                    <h1 className="contact_title">Nous <span className="shadow_title">contacter</span></h1>    
                    <h2>Toujours dans notre démarche d'éco-responsabilité, nous vous recommandons de privilégier le contact par téléphone ou le chatbot</h2>
                    <p className="contact_name">Greened</p>
                    <p><Telephone/> 09.00.00.00.00</p>
                    <p><GeoAlt /> 41 rue de la paix 75009 Paris</p>
                </Container>
            </div>
        );
    }
}

export default Home;