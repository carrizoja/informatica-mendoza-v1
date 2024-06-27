"use client"

import React, {useState} from "react";
import Button from "../Button/Button";
import styles from "./contacto.module.css";

const Contacto = () => {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const pattern = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})?$"
    );
    if (!pattern.test(newEmail)) {
   setEmailError("Email inválido");
     
    } else {
      setEmailError("");
    }
  };

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    const pattern = new RegExp(
      "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
    );
    if (!pattern.test(newName)) {
      setNameError("Nombre inválido");
    } else {
      setNameError("");
    }
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
    const pattern = new RegExp(
      "^[0-9]{8,14}$"
    );
    if (!pattern.test(newPhone)) {
      setPhoneError("Teléfono inválido");
    } else {
      setPhoneError("");
    }
  }


  return (
    <>
      <main className="flex flex-col container w-9/10 mx-auto min-h-screen gap-5">
        <div className="text-start my-16">
          <h1 className="text-2xl font-bold">Contactanos</h1>
        </div>
        <section className="flex flex-col gap-10 mb-10 justify-start items-start">
          <div className="flex flex-col gap-y-5">
            <p className="text-justify text-xl">
              Nuestra misión es ayudarte a resolver tus problemas informáticos.
            </p>
            <p className="text-justify text-xl">
              Escribinos y contanos tus necesidades, nos contactaremos con vos
              para ofrecerte las mejores soluciones.
            </p>
          </div>
          <div className="flex flex-col w-full">
            <form action="" className="flex flex-col gap-16">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col w-full ">
                 <label htmlFor="name" className="mb-2">
                    Nombre
                  </label> 
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    className={`mb-4 p-2 border rounded-md ${styles.input}`}
                    onChange={handleNameChange}
                    value={name}
                    required
                  />
                  {nameError && <p className="text-red-500">{nameError}</p>}

                 <label htmlFor="phone" className="mb-2">
                    Teléfono
                  </label> 
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Teléfono"
                    className={`mb-4 p-2 border rounded-md ${styles.input}`}
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />

                 <label htmlFor="email" className="mb-2">
                    Email
                  </label> 
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className={`mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${styles.input}`}
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                <div className="flex flex-col w-full">
                 <label htmlFor="message" className="mb-2">
                    Tu mensaje
                  </label> 
                  <textarea
                    id="message"
                    name="message"
                    className={`mb-4 p-2 border rounded-md h-full ${styles.input}`}
                    placeholder="Dejanos tu mensaje"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 w-1/12 ml-auto hover:transition-opacity duration-1000"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacto;
