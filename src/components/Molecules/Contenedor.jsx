import React  from 'react';
import Estudiante from './Estudiante';

const estudiantes = [
    {
        "id" : 1,
        "edad" : 18,
        "genero": "M",
        "grado": "10"
    },
    {
        "id" : 2,
        "nombre": "Samuel Montiel",
        "edad" : 10,
        "genero": "M",
        "grado": "4"
    },
    {
        "id" : 3,
        "nombre": "Gabriela Lobo",
        "edad" : 11,
        "genero": "F",
        "grado": "10"
    },
    {
        "id" : 4,
        "nombre": "Vallery Lobo",
        "edad" : 8,
        "genero": "F",
        "grado": "10"
    },
    {
        "id" : 5,
        "nombre": "Camilo Roa",
        "edad" : 9,
        "genero": "M",
        "grado": "3"
    },
    {
        "id" : 6,
        "nombre": "Anyull Martinez",
        "edad" : 18,
        "genero": "F",
        "grado": "11"
    }
]

const Contenedor = () => (
    <>
         {
            estudiantes.map ( c => <Estudiante nombre = { c.nombre } edad = { c.edad } genero = { c.genero } id = {c.id}/>)
         }
    </>
);

export default Contenedor;