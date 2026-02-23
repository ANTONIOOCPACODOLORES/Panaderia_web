import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/login.css";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    verificacion: "",
    password: "",
    recaptcha: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* =============================
     HANDLE CHANGE INPUTS
  ============================== */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  /* =============================
     HANDLE RECAPTCHA
  ============================== */
  const handleRecaptcha = (value) => {
    // Si value existe, el captcha fue validado
    setForm({
      ...form,
      recaptcha: !!value,
    });
  };

  /* =============================
     VALIDACIONES
  ============================== */
  const validarFormulario = () => {
    // NOMBRE
    if (form.nombre.length < 5) {
      return "El nombre debe tener al menos 5 caracteres.";
    }

    if (/\d/.test(form.nombre)) {
      return "El nombre no debe contener números.";
    }

    // CORREO
    if (!form.correo.includes("@")) {
      return "El correo electrónico debe incluir el símbolo @.";
    }

    // TELÉFONO
    if (!/^\d{10}$/.test(form.telefono)) {
      return "El número telefónico debe tener exactamente 10 dígitos.";
    }

    // VERIFICACIÓN
    if (parseInt(form.verificacion) !== 12) {
      return "Resultado incorrecto, prueba con otro.";
    }

    // CONTRASEÑA
    if (form.password !== "admin123") {
      return "Contraseña incorrecta. Usa la contraseña segura proporcionada.";
    }

    // RECAPTCHA
    if (!form.recaptcha) {
      return "Por favor confirma que no eres un robot.";
    }

    return null;
  };

  /* =============================
     SUBMIT
  ============================== */
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const errorValidacion = validarFormulario();

    if (errorValidacion) {
      setError(errorValidacion);
      return;
    }

    // GUARDAR USUARIO
    const usuario = {
      correo: form.correo,
      password: form.password,
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    setSuccess("✅ Registro exitoso. Ahora puedes iniciar sesión.");

    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      verificacion: "",
      password: "",
      recaptcha: false,
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Registro</h2>
        <p className="login-subtitle">
          Crea tu cuenta para disfrutar de nuestros productos
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          {/* NOMBRE */}
          <div className="input-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ej. Juan Pérez"
            />
          </div>

          {/* CORREO */}
          <div className="input-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
            />
          </div>

          {/* TELÉFONO */}
          <div className="input-group">
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="10 dígitos"
            />
          </div>

          {/* VERIFICACIÓN */}
          <div className="input-group">
            <label>Verificación: ¿Cuánto es 7 + 5?</label>
            <input
              type="number"
              name="verificacion"
              value={form.verificacion}
              onChange={handleChange}
              placeholder="Respuesta"
            />
          </div>

          {/* CONTRASEÑA */}
          <div className="input-group">
            <label>Contraseña segura</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="admin123"
            />
          </div>

          {/* RECAPTCHA */}
          <div className="input-group" style={{ marginTop: "15px" }}>
            <ReCAPTCHA
              sitekey="6Lcaj3UsAAAAALx-uymFMsPAcRsDZ-j2HdultQzT"
              onChange={handleRecaptcha}
            />
          </div>

          {error && (
            <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>
          )}
          {success && (
            <p style={{ color: "green", fontSize: "0.85rem" }}>{success}</p>
          )}

          <button className="login-btn" type="submit">
            Registrarse
          </button>
        </form>

        <div className="login-footer">© 2026 Panadería Artesanal</div>
      </div>
    </div>
  );
}