import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AgregarEmpleado = () => {

  let navigation = useNavigate() 


  const [empleado, setEmpleado]= useState({
    nombre:"",
    apellido:"",
    fecha_nac:"",
    correo_electronico:"",
    departamento:"",
    area:"",
    sueldo:""
  })

  const {nombre, apellido, fecha_nac, correo_electronico, departamento, area, sueldo} = empleado

  const onInputChange = (e) => {
   setEmpleado({...empleado, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) => {
   e.preventDefault()
   const urlBase = "http://localhost:8080/rh-app/empleados";
   await axios.post(urlBase, empleado);
   navigation("/");
  }

  return (
    <div className='container'>
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Agregar Empleado</h3>
        <form onSubmit={(e)=> onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" name='nombre' required={true}
            value={nombre} onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" id="apellido" name='apellido' required={true}
            value={apellido} onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fecha_nac" className="form-label">Fecha de Nacimiento</label>
            <input type="date" className="form-control" id="fecha_nac" name='fecha_nac'required={true}
            value={fecha_nac} onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo_electronico" className="form-label">Email</label>
            <input 
            type="email" 
            className="form-control" id="correo_electronico" 
            name='correo_electronico' 
            required={true}
            value={correo_electronico} 
            onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input type="text" className="form-control" id="departamento" name='departamento' required={true}
            value={departamento} onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="area" className="form-label">Area</label>
            <input type="text" className="form-control" id="area" name='area' required={true}
            value={area} onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sueldo" className="form-label">Sueldo</label>
            <input type="number" step="any" className="form-control" id="sueldo" name='sueldo' required={true}
            value={sueldo} onChange={(e)=> onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
          <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
        </form>
      </div>
    </div>
  );
}

export default AgregarEmpleado;