import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    anio: "",
    monto: "",
    factor: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Datos enviados");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ingreso de Datos Tributarios</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Año:</label>
          <input
            type="number"
            name="anio"
            value={form.anio}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Monto:</label>
          <input
            type="number"
            name="monto"
            value={form.monto}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Factor:</label>
          <input
            type="number"
            step="0.01"
            name="factor"
            value={form.factor}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default App;