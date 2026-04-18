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

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validación
  if (!form.anio || !form.monto || !form.factor) {
    alert("Todos los campos son obligatorios");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/registros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        anio: Number(form.anio),
        monto: Number(form.monto),
        factor: Number(form.factor)
      })
    });

    const data = await res.json();

    alert("Respuesta del servidor: " + data.mensaje);

  } catch (error) {
    console.error(error);
    alert("Error conectando con el backend");
  }
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