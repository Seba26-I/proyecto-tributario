import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    anio: "",
    monto: "",
    factor: ""
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación campos vacíos
    if (!form.anio || !form.monto || !form.factor) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    // Validaciones numéricas
    if (form.monto <= 0) {
      setMensaje("El monto debe ser mayor a 0");
      return;
    }

    if (form.factor <= 0) {
      setMensaje("El factor debe ser mayor a 0");
      return;
    }

    // 🔥 Simulación de backend (para avance)
    const data = {
      mensaje: "Registro guardado correctamente"
    };

    setMensaje(data.mensaje);

    // Limpiar formulario
    setForm({
      anio: "",
      monto: "",
      factor: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ingreso de Datos Tributarios</h1>

      {mensaje && <p>{mensaje}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Año:</label>
          <input
            type="number"
            name="anio"
            value={form.anio}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Monto:</label>
          <input
            type="number"
            name="monto"
            value={form.monto}
            onChange={handleChange}
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
          />
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default App;