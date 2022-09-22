import { useState } from "react";
import axios from "axios";

const EmailsMasivos = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Crear el usuario en la API
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/clientes/correos`
      );

      const { email } = data[0];
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl">Envia Emails</h1>

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="mensaje"
          >
            Mensaje
          </label>

          <p
            id="mensaje"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            {email}
          </p>
        </div>

        <input
          type="submit"
          value="Enviar correos"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
    </>
  );
};

export default EmailsMasivos;
