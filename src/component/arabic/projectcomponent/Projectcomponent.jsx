import "./Project.css"
import { Button, Card, Row, Col } from 'react-bootstrap';
import portofolioImg from "../../../assets/img/me.png";
import friseurImg from "../../../assets/img/frisour1.png";
import resumeImg from "../../../assets/img/resume.jpg";
import cashier from "../../../assets/img/cashier.jpeg"


function Projectcomponent() {
  return (
   
        <div className="project">
          <Row className="justify-content-md-center m-3">
            <Col md={4} sm={12} className="mb-3">
              <Card className="h-100">
              <Card.Img style={{height:"65%"}} variant="top" src={friseurImg} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">مشروع حلاق</Card.Title>
                  <div className="d-flex justify-content-evenly mt-auto">
                    <Button variant="outline-primary" 
                    href="https://barbershop-diouani.onrender.com"
                    target="_blank"
                    >مشروع-مباشر</Button>
                    <Button variant="outline-secondary"
                     href="https://github.com/Diouani1/Friseur-Project"
                    target="_blank"
                    >Go To Github</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card className="h-100">
              <Card.Img style={{height:"65%"}} variant="top" src={portofolioImg} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">مشروع موقعي الشخصي</Card.Title>
                  <div className="d-flex justify-content-evenly mt-auto">
                    <Button variant="outline-primary" 
                     href="https://www.diouani-mokhtar.de/"
                    target="_blank"
                    >مشروع-مباشر</Button>
                    <Button variant="outline-secondary" 
                     href="https://github.com/Diouani1/my-portofolio"
                    target="_blank"
                    >Go To Github</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card className="h-100">
              <Card.Img style={{height:"65%"}} variant="top" src={resumeImg} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">مشروع السيرة الذاتية</Card.Title>
                  <div className="d-flex justify-content-evenly mt-auto">
                    <Button variant="outline-primary"
                    href="https://diouani1.github.io/react-group-project/"
                    target="_blank"
                    >مشروع-مباشر</Button>
                    <Button variant="outline-secondary"
                     href="https://github.com/Diouani1/react-group-project"
                    target="_blank"
                    >Go To Github</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card className="h-100">
                <Card.Img style={{height:"65%"}} variant="top" src={cashier} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">مشروعي الشخصي للواجهة الأمامية مبني باستخدام React</Card.Title>
                  <div className="d-flex justify-content-evenly mt-auto">
                    <Button variant="outline-primary" 
                     href="https://diouani1.github.io/react-project/"
                    target="_blank"
                    >Live Project</Button>
                    <Button variant="outline-secondary" 
                     href="https://github.com/Diouani1/react-project"
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