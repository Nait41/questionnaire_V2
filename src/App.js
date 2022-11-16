import React, {useState, useReact, useEffect} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import { Modal, Button } from 'react-bootstrap';
import { ModalBody } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);

  const [labNumber, setLabNumber] = useState("");
  const [checkLabNumberDirty, setCheckLabDirty] = useState(false);
  const [errorLabNumber, setErrorLabNumber] = useState("Лабораторный номер должен быть заполнен");

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [errorEmail, setErrorEmail] = useState("E-mail должен быть заполнен");

  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [telephoneNumberDirty, setTelephoneNumberDirty] = useState(false);
  const [errorTelephoneNumber, setErrorTelephoneNumber] = useState("Телефонный номер должен быть заполнен");

  const [date, setDate] = useState("");
  const [dateDirty, setDateDirty] = useState(false);
  const [errorDate, setErrorDate] = useState("Дата взятия образца должна быть указана");

  const [changeCompany, setChangeCompany] = useState("");
  const [changeCompanyDirty, setChangeCompanyDirty] = useState(false);
  const [errorChangeCompany, setErrorChangeCompany] = useState("Направляющее учреждение должно быть указано");
  
  const [changeSample, setChangeSample] = useState(false);
  const sample = ["First Sample", "Second Sample"];

  const [formValid, setFormValid] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeValidHandler = (e) => {
    switch (e.target.name) {
      case 'labNumber':
        setCheckLabDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
      case 'telephoneNumber':
        setTelephoneNumberDirty(true)
        break
      case 'date':
        setDateDirty(true)
        break
      case 'changeCompany':
        setChangeCompanyDirty(true)
        break
    }
  }

  const changeCompanyHandler = (e) => {
    setChangeCompany(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8)
    {
      setErrorChangeCompany("Направляющие учреждение должно содержать от 3 до 15 символов")
      if(!e.target.value) {
        setErrorChangeCompany("Направляющее учреждение должно быть указано")
      }
    } else {
      setErrorChangeCompany("")
    }
  }

  const labNumberHandler = (e) => {
    setLabNumber(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8)
    {
      setErrorLabNumber("Лабораторный должен быть длинее 3 и меньше 8 символов")
      if(!e.target.value) {
        setErrorLabNumber("Лабораторный номер должен быть заполнен")
      }
    } else {
      setErrorLabNumber("")
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const test = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!test.test(String(e.target.value).toLowerCase())){
      setErrorEmail("Некорректный email")
      if(!e.target.value){
        setErrorEmail("E-mail должен быть заполнен")
      }
    } else {
      setErrorEmail("")
    }
  }

  const telephoneNumberHandler = (e) => {
    setTelephoneNumber(e.target.value)
    const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if(!regex.test(String(e.target.value))){
      setErrorTelephoneNumber("Некорректный номер телефона")
      if(!e.target.value){
        setErrorTelephoneNumber("Телефонный номер должен быть заполнен")
      } 
    } else {
      setErrorTelephoneNumber("")
    }
  }

  const dateHandler = (e) => {
    setDate(e.target.value)
    if(e.target.value){
      setErrorDate("")
    }
  }

useEffect(() => {
  document.body.style.backgroundColor = "#f2ffff"
  if (errorLabNumber || errorDate || errorEmail || errorTelephoneNumber || errorChangeCompany || !changeSample){
    setFormValid(false)
  } else {
    setFormValid(true)
  }
}, [errorLabNumber, errorDate, errorEmail, errorTelephoneNumber, changeCompany, changeSample, errorChangeCompany])

  return (
      <div className="App">
        <div className="card mb-3" style={{height: 250, width: 900, alignItems: 'center', marginTop: 15}}>
                <img src="https://dezecomos.ru/wp-content/uploads/2016/03/analyz-vodi.jpg" className="card-img-top"/>
            </div>
        <Home/>
        <Modal show={show}>
          <Modal.Header style={{
              display: "flex",
              justifyContent: "center",
            }}>
            <h3>Основная информация</h3>
          </Modal.Header>
          <ModalBody>
            <Form>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Лабораторный номер</Form.Label>
                {(checkLabNumberDirty && errorLabNumber) && <div style={{color:'red'}}>{errorLabNumber}</div>}
                <Form.Control 
                  type="text" 
                  placeholder="Введите лабораторный номер" 
                  onBlur={e => changeValidHandler(e)} 
                  name="labNumber"
                  onChange={e => labNumberHandler(e)}
                  value={labNumber}>
                </Form.Control>
                <Form.Text className="labNumber"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>E-mail</Form.Label>
                {(emailDirty && errorEmail) && <div style={{color: 'red'}}>{errorEmail}</div>}
                <Form.Control 
                  type="text" 
                  placeholder="Введите email"
                  name="email"
                  value={email}
                  onChange={e => emailHandler(e)}
                  onBlur={e => changeValidHandler(e)}>
                  </Form.Control>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Контактный номер телефона</Form.Label>
                {(telephoneNumberDirty && errorTelephoneNumber) && <div style={{color: 'red'}}>{errorTelephoneNumber}</div>}
                <Form.Control 
                  type="text"
                  name="telephoneNumber"
                  onChange={e => telephoneNumberHandler(e)}
                  onBlur={e => changeValidHandler(e)}
                  value={telephoneNumber} 
                  placeholder="Введите контактный номер телефона"></Form.Control>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Тип образца</Form.Label>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action">
                    <input 
                      className="form-check-input me-1"
                      checked = {changeSample == sample.at(0)}
                      onChange = {() => setChangeSample((current) => sample.at(0))}
                      type="radio"
                      value="" 
                      id="Checkbox"/>
                      <label className="form-check-label" for="Checkbox">Каловые массы</label>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    <input 
                      className="form-check-input me-1"
                      checked = {changeSample == sample.at(1)}
                      onChange = {() => setChangeSample((current) => sample.at(1))}
                      type="radio" 
                      value="" 
                      id="Checkbox"/>
                      <label className="form-check-label" for="Checkbox">Урогенетальный мазок</label>
                  </li>
                </ul>
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Дата взятия образца</Form.Label>
                {(dateDirty && errorDate) && <div style={{color:'red'}}>{errorDate}</div>}
                <input
                  onChange={e => dateHandler(e)} 
                  name="date"
                  value={date}
                  onBlur={e => changeValidHandler(e)}
                  type="date" 
                  class="form-control"/>
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Направляющее учреждение</Form.Label>
                  {(changeCompanyDirty && errorChangeCompany) && <div style={{color:'red'}}>{errorChangeCompany}</div>}
                  <Form.Control 
                    type="text" 
                    placeholder="Укажите направляющее учреждение" 
                    onBlur={e => changeValidHandler(e)} 
                    name="changeCompany"
                    onChange={e => changeCompanyHandler(e)}
                    value={changeCompany}>
                  </Form.Control>
                  <Form.Text className="changeCompany"></Form.Text>
              </Form.Group>
            </Form>
          </ModalBody>
          <Modal.Footer style={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Button onClick={handleClose} disabled={!formValid} class="btn btn-secondary" style={{background: "#009da8", border: "#009da8"}}>Начать анкетирование</Button>
          </Modal.Footer>
        </Modal>
      </div>
  );
}

export default App;

