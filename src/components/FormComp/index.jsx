import "../FormComp/styles.scss";
import React from "react";
import { useForm } from "react-hook-form";

const Formulario = ({ confirmarCompra }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };


  return (
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre completo</label>
      <input
        {...register("nombre", {
          required: true,
          minLength: 20,

        })}
      />
      {errors?.firstName?.type === "required" && <p>Este campo es obligatorio</p>}
      {errors?.firstName?.type === "minLength" && (
        <p>El campo nombre no puede ser menor a 3 caracteres</p>
      )}

      <label>E-mail</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Age</label>a
      <input {...register("age", { min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}
      <input onClick={confirmarCompra} type="submit" />
    </form>
    
  );
};

export default Formulario;
