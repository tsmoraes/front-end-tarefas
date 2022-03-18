import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditTarefa from "./components/tarefa/edit.component";
import TarefaList from "./components/tarefa/list.component";
import CreateTarefa from "./components/tarefa/create.component";
//import './App.css';

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Embalo
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/tarefa/create" element={<CreateTarefa />} />
            <Route path="/tarefa/edit/:id" element={<EditTarefa />} />
            <Route exact path='/' element={<TarefaList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;
