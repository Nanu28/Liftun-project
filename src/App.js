import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import ActionTypeSelector from './components/ActionTypeSelector';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {
  const [actionName, setActionName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hasResponsible, setHasResponsible] = useState(false);
  const [hasObjective, setHasObjective] = useState(false);
  const [actionType, setActionType] = useState('');
  const [requiresCalculation, setRequiresCalculation] = useState(false);
  const [isLegalObligation, setIsLegalObligation] = useState(false);

  const handleSave = () => {
    console.log('Guardar acción:', {
      actionName,
      startDate,
      endDate,
      hasResponsible,
      hasObjective,
      actionType,
      requiresCalculation,
      isLegalObligation,
    });
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: '#E8FAF9', borderRadius: '15px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#06BDD0', textAlign: 'center' }}>Nueva acción</h1>
      <Form>
        <FormGroup className="mb-3">
          <FormLabel style={{ color: '#1CCEBF', fontWeight: 'bold' }}>Nombre de la acción</FormLabel>
          <FormControl
            type="text"
            value={actionName}
            onChange={(e) => setActionName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel style={{ color: '#1CCEBF', fontWeight: 'bold' }}>Fecha de Inicio</FormLabel>
          <FormControl
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel style={{ color: '#1CCEBF', fontWeight: 'bold' }}>Fecha de Término</FormLabel>
          <FormControl
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel className="d-block" style={{ color: '#1CCEBF', fontWeight: 'bold' }}>Tiene Responsable</FormLabel>
          <label className="switch">
            <input
              type="checkbox"
              checked={hasResponsible}
              onChange={() => setHasResponsible(!hasResponsible)}
            />
            <span className="slider"></span>
          </label>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel className="d-block" style={{ color: '#1CCEBF', fontWeight: 'bold' }}>Tiene Objetivo</FormLabel>
          <label className="switch">
            <input
              type="checkbox"
              checked={hasObjective}
              onChange={() => setHasObjective(!hasObjective)}
            />
            <span className="slider"></span>
          </label>
        </FormGroup>

        <ActionTypeSelector actionType={actionType} setActionType={setActionType} />

        <FormGroup className="mb-3">
          <FormLabel className="d-block" style={{ color: '#1CCEBF', fontWeight: 'bold' }}>Requiere Cálculo de Huella</FormLabel>
          <label className="switch">
            <input
              type="checkbox"
              checked={requiresCalculation}
              onChange={() => setRequiresCalculation(!requiresCalculation)}
            />
            <span className="slider"></span>
          </label>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel className="d-block" style={{ color: '#1CCEBF', fontWeight: 'bold' }}>Es una Obligación Legal</FormLabel>
          <label className="switch">
            <input
              type="checkbox"
              checked={isLegalObligation}
              onChange={() => setIsLegalObligation(!isLegalObligation)}
            />
            <span className="slider"></span>
          </label>
        </FormGroup>

        <div className="mb-3" style={{ textAlign: 'center' }}>
          <Button variant="primary" onClick={handleSave} className="me-2" style={{ backgroundColor: '#06BDD0' }}>
            Guardar
          </Button>
          <Button variant="secondary">Cerrar</Button>
        </div>
      </Form>
    </div>
  );
};

export default App;
