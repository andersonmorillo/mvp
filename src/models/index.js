// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Campo = {
  "MECATRONICA": "MECATRONICA",
  "SISTEMAS": "SISTEMAS",
  "BIOMEDICA": "BIOMEDICA"
};

const { Coordinador, Estudiante, Profesor, Postulacion, Proyecto, Reporte } = initSchema(schema);

export {
  Coordinador,
  Estudiante,
  Profesor,
  Postulacion,
  Proyecto,
  Reporte,
  Campo
};