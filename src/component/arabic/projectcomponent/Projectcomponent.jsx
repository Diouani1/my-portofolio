import "./Project.css"
import { Button, Card, Row, Col } from 'react-bootstrap';
import frisour from "../../../assets/img/frisour.png";
import me from "../../../assets/img/me.png";
import resume from "../../../assets/img/resume.png";

function Projectcomponent() {
  return (
   
        <div className="project">
          <Row className="justify-content-md-center m-3">
            <Col md={4} sm={12} className="mb-3">
              <Card className="h-100">
                <Card.Img variant="top" src={frisour} />
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
                <Card.Img variant="top" src={me} />
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
                <Card.Img variant="top" src={resume} />
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
          </Row>
        </div>
  )
}

export default Projectcomponent