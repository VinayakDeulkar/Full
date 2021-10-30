
import { Col, Container, Row,Card } from 'react-bootstrap';
import './App.css';
import FormCode from './Component/FormCode';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App ">
        <Container>
          <Row>
            <Col lg={2}/>
            <Col lg={8} >
              <Card className="margin">
                <FormCode/>
              </Card>
            </Col>
            <Col lg={2}/>
          </Row>
         </Container>
      
    </div>
  );
}

export default App;
