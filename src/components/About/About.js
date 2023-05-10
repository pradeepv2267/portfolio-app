import React from 'react'
import './About.css';
import { Col, Container, Row } from 'react-bootstrap'
import htmlImg from '../../Image/htmlImage.png';
import CssImg from '../../Image/cssIMg.jpg';
import javascript from '../../Image/javaScriptIcon.png';
import reactImg from '../../Image/ReactImage.png';
import mongodbImg from '../../Image/mongoImg.png';
import NodeImg from '../../Image/NodeImage.png';



const About = () => {
  return (
    <div className='About'>
        <Container>
            <Row>
                <Col md={6} className='left-side'>
                <h1 className="animate__animated Heading  animate__bounce  home-content">
          About Me
        </h1>
        <h2>
          Hi, I'm a Well-qualified Full Stack Developer familiar with a wide
          range of programming utilities and languages. Knowledgeable of backend
          and frontend development requirements with database management. Handles
          any part of the process with ease. Collaborative team player with a
          willingness to learn in and grow with the organization.
        </h2>

                </Col>
                
                <Col md={6} className='right-side'>
                    <div className="About-img">
                        <img src={htmlImg} alt='html' />
                        <img src={CssImg} alt='css' />
                        <img src={javascript} alt='javascript' />
                        <img src={reactImg} alt='react' />
                        <img src={mongodbImg} alt='mongodb' />
                        <img src={NodeImg} alt='nodejs' />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About