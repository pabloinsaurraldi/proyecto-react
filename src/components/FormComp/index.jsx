import React from "react";
import "../FormComp/styles.scss";
import { useForm } from "react-hook-form";

const Formulario = ({ confirmarCompra }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    confirmarCompra(data);
  };

  return (
    <div className="formularioCompra">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="labels">Nombre</label>
        <div className="input">
          <input
            {...register("nombre", {
              required: true,
              minLength: 2,
            })}
          />
          {errors?.nombre?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
          {errors?.nombre?.type === "minLength" && (
            <p>El nombre debe superar los 2 caracteres</p>
          )}
        </div>
        <label className="labels">Email</label>
        <div className="input">
          <input
            type="email"
            {...register("email", { minLength: 3, required: true })}
          />
          {errors?.email?.type === "minLength" && (
            <p>El email tiene que tener minimo 3 caracteres</p>
          )}
          {errors?.email?.type === "required" && (
            <p>El campo email es requerido</p>
          )}
        </div>

        <label className="labels">Email</label>

        {
          <div className="input">
            <input
              type="email"
              {...register("validacion", {
                minLength: 3,
                required: true,
                validate: {
                  comparacion: (validacion) => validacion === getValues().email,
                },
              })}
            />

            {errors?.validacion?.type === "required" && (
              <p>El campo email es requerido</p>
            )}
            {errors?.validacion?.type === "comparacion" && (
              <p>Los emails no coinciden</p>
            )}
          </div>
        }

        <label className="labels">Telefono</label>
        <div className="input">
          <input
            type="number"
            {...register("phone", {
              minLength: 10,
              maxLength: 10,
              required: true,
            })}
          />
          {errors?.phone?.type === "minLength" && (
            <p>El teléfono debe tener 10 digitos</p>
          )}
          {errors?.phone?.type === "required" && (
            <p>El campo telefono es requerido</p>
          )}
        </div>
        <div className="containerBoton">
          <button className="finOperacion" variant="primary" type="submit">
            Confirmar compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
