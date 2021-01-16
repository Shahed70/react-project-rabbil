import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class AboutPageDesc extends Component {
    render() {
        return (
            <>
              <Container>
                  <Row>
                     <Col lg={12} md={12} sm={12}>
                     <h1 className="display-4 text-uppercase text-primary my-3">Who i AM</h1>
                     <hr/>
                     <p className="desc">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>

                     <h1 className="display-4 text-uppercase text-primary my-3">My Mission</h1>
                     <hr/>
                     <p className="desc">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>

                     <h1 className="display-4 text-uppercase text-primary my-3">My Vision</h1>
                     <hr/>
                     <p className="desc">My vision is to brand our firm as the best firm in the world. Secure the top place among software providers for both local and international market. Brand our country as the best software provider country. Create employment for youth on the field of both software and corporate level. Provide our country and world with superior software. Nurture youths to be highly skilled software engineers</p>
                     </Col>
                  </Row>
              </Container>  
            </>
        )
    }
}

export default AboutPageDesc
