import React, { Component, useState } from "react";
import './css/bootstrap.min.css'
import { Carousel, Dropdown, Modal, Row, Col, Image, Breadcrumb, Alert, ListGroup, Jumbotron, Button, Container, FormControl, Form } from 'react-bootstrap'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda Berhasil Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Username & Password
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

class App extends Component {


  render() {
    return (
      <div >
        <Row className="bg-dark text-light">
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="primary">
                Pilih Bahasa
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#'>Bahasa Indonesia</Dropdown.Item>
                <Dropdown.Item href="#">English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></Col>
          <Col md={{ span: 3, offset: 1 }}>
            <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width="50" />
            <p>Alan Saputra</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <Alert variant="info" className="p-0">
              <Breadcrumb className="pt-1 pb-0">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
                <Breadcrumb.Item href="#" active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Alert>
          </Col>
        </Row>

        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                alt="First slide"
              />
              <Carousel.Caption>

                <h5>Neymar Bahas Kontrak Baru Di Paris Saint-German</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="Second slide"
              />

              <Carousel.Caption>

                <h5>Diego Godin Ukir Reor Spesial Lawan Thailand</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                alt="Third slide"
              />

              <Carousel.Caption>

                <h5>Inggris Mau Jadi Tim Terbaik Dunia</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <br />
        <Row>
          <Col md="4">
            <ListGroup as='ul'>
              <ListGroup.Item as='li' active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item as='li'>Liga Premier Inggris</ListGroup.Item>
              <ListGroup.Item as='li' disabled>Divisi Primera</ListGroup.Item>
              <ListGroup.Item as='li'>Serie A</ListGroup.Item>
              <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
              <ListGroup.Item as='li'>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="4">
            <Jumbotron className="bg-light py-5">
              <h1>DIVISI PRIMERA</h1>
              <p>Main untuk Catalunya, Gerard Pique Minta Dihormati</p>
              <Button variant='primary' >Read More</Button>
            </Jumbotron>
          </Col>
          <Col md="4">
            <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width='50' alt="Foto Profil" className="d-block mx-auto mb-2" />
            <h6 className="text-center">Silahkan Login</h6>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Masukkan Email" />
              </Form.Group>
              <Form.Group className="mb-2">
                <FormControl type='password' placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type='checkbox' label="Term & Conditional" />
              </Form.Group>
              <Form.Group>
                <Example />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>

    )
  }
}
export default App
