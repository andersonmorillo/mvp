/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Proyecto } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProyectoUpdateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    estado?: boolean;
    campo?: string;
    estudiante?: string;
    profesor?: string;
};
export declare type ProyectoUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    estado?: ValidationFunction<boolean>;
    campo?: ValidationFunction<string>;
    estudiante?: ValidationFunction<string>;
    profesor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProyectoUpdateFormOverridesProps = {
    ProyectoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SwitchFieldProps>;
    campo?: PrimitiveOverrideProps<SelectFieldProps>;
    estudiante?: PrimitiveOverrideProps<TextFieldProps>;
    profesor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProyectoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProyectoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    proyecto?: Proyecto;
    onSubmit?: (fields: ProyectoUpdateFormInputValues) => ProyectoUpdateFormInputValues;
    onSuccess?: (fields: ProyectoUpdateFormInputValues) => void;
    onError?: (fields: ProyectoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProyectoUpdateFormInputValues) => ProyectoUpdateFormInputValues;
    onValidate?: ProyectoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProyectoUpdateForm(props: ProyectoUpdateFormProps): React.ReactElement;
