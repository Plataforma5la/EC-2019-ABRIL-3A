import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

export default () => (

  <div>
    <h1 className="text-center">Libros</h1>
    <Link to="/admin/books/create">
      <button type="button" className="btn btn-sm btn-success">Agregar nuevo Libro</button>
    </Link>
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Libro</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>2</td>
          <td>$150</td>
          <td>
            <button type="button" className="btn  btn-sm btn-info">Editar</button>
            <button type="button" className="btn  btn-sm btn-danger">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>2</td>
          <td>$150</td>
          <td>
            <button type="button" className="btn  btn-sm btn-info">Editar</button>
            <button type="button" className="btn  btn-sm btn-danger">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>2</td>
          <td>$150</td>
          <td>
            <button type="button" className="btn  btn-sm btn-info">Editar</button>
            <button type="button" className="btn  btn-sm btn-danger">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>3</td>
          <td>$150</td>
          <td>
            <button type="button" className="btn  btn-sm btn-info">Editar</button>
            <button type="button" className="btn  btn-sm btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>


  </div>
);
