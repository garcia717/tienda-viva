import { useState } from "react";

const Form = () => {
  const { userData, setUserData } = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ingrese su nombre"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="Ingrese su E-mail"
          type="text"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Ingrese su Contraseña"
          type="text"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" >Enviar</button>
      </form>
    </div>
  );
};

export default Form;
