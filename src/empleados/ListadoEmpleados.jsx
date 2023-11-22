import React, { useEffect, useState } from "react";
import axios from "axios";
import { NumericFormat } from 'react-number-format';
import { Link } from "react-router-dom";

const ListadoEmpleados = () => {
  const urlBase = "http://localhost:8080/rh-app/empleados";

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    console.log(resultado.data);
    setEmpleados(resultado.data);
  };

  const elimninarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`)
    cargarEmpleados()
  }

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Sistema de Recursos Humanos</h3>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Correo Electronico</th>
            <th scope="col">Departamento</th>
            <th scope="col">Area</th>
            <th scope="col">Sueldo</th>
            <th scope="col"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado, index) => (
            <tr key={index}>
              <th scope="row">{empleado.idEmpleado}</th>
              <td>{empleado.nombre}</td>
              <td>{empleado.apellido}</td>
              <td>{empleado.fecha_nac}</td>
              <td>{empleado.correo_electronico}</td>
              <td>{empleado.departamento}</td>
              <td>{empleado.area}</td>
              <td>
                <NumericFormat
                  value={empleado.sueldo}
                  displayType={"text"}
                  thousandSeparator=","
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </td>
              <td className="text-center">
                <div>
                    <Link to={`/editar/${empleado.idEmpleado}`}
                    className="btn btn-warning btn-sm me-2">Editar</Link>
                    <button onClick={()=>elimninarEmpleado(empleado.idEmpleado)} className="btn btn-danger btn-sm">Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoEmpleados;
