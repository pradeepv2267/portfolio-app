import React from 'react'
import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import mongodb from '../../Image/mongoImg.png'
import VsCode from '../../Image/vs Code.png'
import './Skills.css';
// import { Col, Container, Row } from 'react-bootstrap';

function Skills() {
    return (
    <div className='Skills'>

                 <h1 className='Heading'>Skills</h1>
        <div className='Box-container'>
            
        <div className='Box'>
        <FaHtml5 className='Html'/>
        <span className='Logo-heading'>Html</span>
        </div>
        <div className='Box'>
        <FaCss3Alt className='Css'/>
        </div>
        <div className='Box'>
        <FaJsSquare className='js'/>
        </div>
        <div className='Box'>
        <FaReact className='react'/>
        </div>
        <div className='Box'>
        <FaNodeJs/>
        </div>
        <div className='Box'>
        <FaGithub/>
        </div>
        <div className='Box Box-Img'>
        <img src={mongodb} alt='Mongodb'/>
        </div>
        <div className='Box Box-Img'>
        <img src={VsCode} alt='VsCode'/>
        </div>
        </div>
        </div>
 
    );
};

export default Skills;
