import React from "react";
import "../FormComp/styles.scss";
import { useForm } from "react-hook-form";

const Formulario = ({ confirmarCompra }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    confirmarCompra(data);
  }
  

  return (
    <div className="formularioCompra">
        <form onSubmit={handleSubmit(onSubmit)}>
                <label className="labels">Nombre</label>
                <input
                  {...register("nombre", {
                    required: true,
                    minLength: 2,
                  })}
                />
                {errors?.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
                {errors?.nombre?.type === "minLength" && (
                  <p>El nombre debe superar los 2 caracteres</p>
                )}
                <label className="labels">Email</label>
                <input type='email' {...register("email", {minLength: 3, required: true})} />
                {errors?.email?.type === "minLength" && (
                  <p>El mail tiene que tener minimo 3 caracteres</p>
                )}
                {errors?.email?.type === "required" && <p>El campo email es requerido</p>}
                <label className="labels">Telefono</label>
                <input type="number" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
                {errors?.phone?.type === "minLength" && (
                  <p>El teléfono debe tener 10 digitos</p>
                )}
                {errors?.phone?.type === "required" && <p>El campo telefono es requerido</p>}
  
                <button className="finOperacion" variant="primary" type ="submit">
                  Confirm purchase
                </button>
            </form>
  </div>
  );
};

export default Formulario;
