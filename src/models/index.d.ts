import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Campo {
  MECATRONICA = "MECATRONICA",
  SISTEMAS = "SISTEMAS",
  BIOMEDICA = "BIOMEDICA"
}



type EagerCoordinador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coordinador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly correo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoordinador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coordinador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly correo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coordinador = LazyLoading extends LazyLoadingDisabled ? EagerCoordinador : LazyCoordinador

export declare const Coordinador: (new (init: ModelInit<Coordinador>) => Coordinador) & {
  copyOf(source: Coordinador, mutator: (draft: MutableModel<Coordinador>) => MutableModel<Coordinador> | void): Coordinador;
}

type EagerEstudiante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Estudiante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly campo?: Campo | keyof typeof Campo | null;
  readonly correo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEstudiante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Estudiante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly campo?: Campo | keyof typeof Campo | null;
  readonly correo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Estudiante = LazyLoading extends LazyLoadingDisabled ? EagerEstudiante : LazyEstudiante

export declare const Estudiante: (new (init: ModelInit<Estudiante>) => Estudiante) & {
  copyOf(source: Estudiante, mutator: (draft: MutableModel<Estudiante>) => MutableModel<Estudiante> | void): Estudiante;
}

type EagerProfesor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profesor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly campo?: Campo | keyof typeof Campo | null;
  readonly correo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfesor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profesor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly campo?: Campo | keyof typeof Campo | null;
  readonly correo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profesor = LazyLoading extends LazyLoadingDisabled ? EagerProfesor : LazyProfesor

export declare const Profesor: (new (init: ModelInit<Profesor>) => Profesor) & {
  copyOf(source: Profesor, mutator: (draft: MutableModel<Profesor>) => MutableModel<Profesor> | void): Profesor;
}

type EagerPostulacion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Postulacion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly descripcion?: string | null;
  readonly estado: boolean;
  readonly campo: Campo | keyof typeof Campo;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostulacion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Postulacion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly descripcion?: string | null;
  readonly estado: boolean;
  readonly campo: Campo | keyof typeof Campo;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Postulacion = LazyLoading extends LazyLoadingDisabled ? EagerPostulacion : LazyPostulacion

export declare const Postulacion: (new (init: ModelInit<Postulacion>) => Postulacion) & {
  copyOf(source: Postulacion, mutator: (draft: MutableModel<Postulacion>) => MutableModel<Postulacion> | void): Postulacion;
}

type EagerProyecto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Proyecto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly descripcion?: string | null;
  readonly estado: boolean;
  readonly campo: Campo | keyof typeof Campo;
  readonly estudiante?: string | null;
  readonly profesor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProyecto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Proyecto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly descripcion?: string | null;
  readonly estado: boolean;
  readonly campo: Campo | keyof typeof Campo;
  readonly estudiante?: string | null;
  readonly profesor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Proyecto = LazyLoading extends LazyLoadingDisabled ? EagerProyecto : LazyProyecto

export declare const Proyecto: (new (init: ModelInit<Proyecto>) => Proyecto) & {
  copyOf(source: Proyecto, mutator: (draft: MutableModel<Proyecto>) => MutableModel<Proyecto> | void): Proyecto;
}

type EagerReporte = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reporte, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly descripcion: string;
  readonly calificacion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReporte = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reporte, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly descripcion: string;
  readonly calificacion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reporte = LazyLoading extends LazyLoadingDisabled ? EagerReporte : LazyReporte

export declare const Reporte: (new (init: ModelInit<Reporte>) => Reporte) & {
  copyOf(source: Reporte, mutator: (draft: MutableModel<Reporte>) => MutableModel<Reporte> | void): Reporte;
}