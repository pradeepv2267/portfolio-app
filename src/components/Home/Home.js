import React from 'react';
import './Home.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Text from '../Text/Text';
import  { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className='Home'>
   <Container>
   <div className='home-container'>
    <Row>
        <Col md={7} >
          

          
            <h1 className='HeadTxt'>
                Hii...
                <span className='Hi'>
                    👋
                </span>
            </h1>
            <h2 className='NameTxt'>I'm Pradeep</h2>
            <span></span>
            <Text/>
            <span></span>
            <button onClick={()=>{
                window.open(`${"https://github.com/pradeepv2267?tab=repositories"}`);}}
                className='social-icons'>
                    <AiFillGithub className='github-icon'/>

                </button>
                <button onClick={()=>{
                window.open(`${"https://www.linkedin.com/in/pradeep-venkateshwaran-a0a559147"}`);}}
                className='social-icons'>
                    <FaLinkedin className='linkedin-icon'/>

                </button>
                <Button
            onClick={() => {
              window.open(`${"https://drive.google.com/file/d/1-GyQpff-YL0pxqDiYMOeruWbxmnQ557F/view?usp=share_link"}`);
            }}
            className="resume-btn"
          >
            <span className="resume-title"> Resume</span>

          </Button>


        </Col>
        <Col md={5}>
            <div className="profile-Img"></div>
            
        </Col>
    </Row>
    </div>
   </Container>
    </div>
  );
}

export default Home;