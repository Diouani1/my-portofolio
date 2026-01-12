import "./Project.css"
import { Button, Card, Row, Col } from 'react-bootstrap';
import portofolioImg from "../../../assets/img/me.png";
import javprof from "../../../assets/img/javaprof.png"

function Projectcomponent() {
  return (
   
        <div className="project">
          <Row className="justify-content-md-center m-3">
           
            <Col md={6} sm={12} className="mb-3">
              <Card className="h-100">
                <Card.Img style={{height:"65%"}} variant="top" src={portofolioImg} />
                <Card.Body className="d-flex flex-column justify-content-between p-5">
                  <Card.Title className="text-center">My Portfolio With REACT</Card.Title>
                  <div className="d-flex justify-content-evenly mt-auto">
                    <Button variant="outline-primary" 
                     href="https://www.diouani-mokhtar.de/"
                    target="_blank"
                    >Live Project</Button>
                    <Button variant="outline-secondary" 
                     href="https://github.com/Diouani1/my-portofolio"
                    target="_blank"
                    >Go To Github</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} sm={12} className="mb-3">
              <Card className="h-100">
                <Card.Img style={{height:"65%", border:"solid 1px"}} variant="top" src={javprof} />
                <Card.Body className="d-flex flex-column justify-content-between p-5">
                  <Card.Title className="text-center">My Portofolio With JAVA</Card.Title>
                  <div className="d-flex justify-content-evenly mt-auto">
                    <Button variant="outline-primary" 
                     href="https://java-portfolio-1.onrender.com"
                    target="_blank"
                    >Live Project</Button>
                    <Button variant="outline-secondary" 
                     href="https://github.com/Diouani1/Java-Portfolio"
                    target="_blank"
                    >Go To Github</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
  )
}

export default Projectcomponent