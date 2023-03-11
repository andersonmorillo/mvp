/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Estudiante } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EstudianteUpdateFormInputValues = {
    nombre?: string;
    campo?: string;
    correo?: string;
};
export declare type EstudianteUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    campo?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EstudianteUpdateFormOverridesProps = {
    EstudianteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    campo?: PrimitiveOverrideProps<SelectFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EstudianteUpdateFormProps = React.PropsWithChildren<{
    overrides?: EstudianteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    estudiante?: Estudiante;
    onSubmit?: (fields: EstudianteUpdateFormInputValues) => EstudianteUpdateFormInputValues;
    onSuccess?: (fields: EstudianteUpdateFormInputValues) => void;
    onError?: (fields: EstudianteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EstudianteUpdateFormInputValues) => EstudianteUpdateFormInputValues;
    onValidate?: EstudianteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EstudianteUpdateForm(props: EstudianteUpdateFormProps): React.ReactElement;
