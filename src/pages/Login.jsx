import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    /* =============================
       OBTENER USUARIO REGISTRADO
    ============================== */
    const usuarioGuardado = JSON.parse(
      localStorage.getItem("usuarioRegistrado")
    );

    if (!usuarioGuardado) {
      setError("No existe una cuenta registrada. Por favor regístrate.");
      return;
    }

    /* =============================
       VALIDACIONES
    ============================== */
    if (email !== usuarioGuardado.correo) {
      setError("El correo no coincide con ningún usuario registrado.");
      return;
    }

    if (password !== usuarioGuardado.password) {
      setError("Contraseña incorrecta. Inténtalo nuevamente.");
      return;
    }

    /* =============================
       LOGIN CORRECTO
    ============================== */
    const sesion = {
      correo: usuarioGuardado.correo,
      login: true,
    };

    localStorage.setItem("usuario", JSON.stringify(sesion));

    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Bienvenido 🍞</h1>
        <p className="login-subtitle">
          Accede al panel de la panadería
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          {/* CORREO */}
          <div className="input-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@panaderia.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* CONTRASEÑA */}
          <div className="input-group password-group">
            <label>Contraseña</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {error && (
            <p
              style={{
                color: "#b91c1c",
                fontSize: "0.85rem",
                marginTop: "0.5rem",
              }}
            >
              {error}
            </p>
          )}

          <button className="login-btn">Ingresar</button>
        </form>
        {/* OPCIONES ADICIONALES */}
<div className="login-options">
  <button
    type="button"
    className="link-btn"
    onClick={() => alert("Función de recuperación en desarrollo")}
  >
    ¿Olvidaste tu contraseña?
  </button>

  <button
    type="button"
    className="link-btn"
    onClick={() => alert("Ingreso por teléfono próximamente")}
  >
    Ingresar con teléfono 📱
  </button>

  {/* REGISTRO */}
<p className="register-text">
  ¿Aún no tienes cuenta?{" "}
  <span
    className="register-link"
    onClick={() => navigate("/registro")}
  >
    ¡Regístrate!
  </span>
</p>
</div>
        <p className="login-footer">
          © 2026 Panadería Artesanal
        </p>
      </div>
    </div>
  );
}