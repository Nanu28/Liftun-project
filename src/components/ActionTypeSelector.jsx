// ActionTypeSelector.js
import React from 'react';

const ActionTypeSelector = ({ actionType, setActionType }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Tipo de Acción</label>
      <select
        className="form-select"
        value={actionType}
        onChange={(e) => setActionType(e.target.value)}
        required
      >
        <option value="ambiental">Accion Ambiental (Better World 🌍)</option>
        <option value="social">Accion Social (Better Place 🤝)</option>
        <option value="gobernabilidad">Accion Gobernabilidad (Better Company🏛 )</option>
        <option value="economica">Accion Economica (Better Profit 💰)</option>
      </select>
    </div>
  );
};

export default ActionTypeSelector;
