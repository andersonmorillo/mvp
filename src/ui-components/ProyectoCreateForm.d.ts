/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProyectoCreateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    estado?: boolean;
    campo?: string;
    estudiante?: string;
    profesor?: string;
};
export declare type ProyectoCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    estado?: ValidationFunction<boolean>;
    campo?: ValidationFunction<string>;
    estudiante?: ValidationFunction<string>;
    profesor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProyectoCreateFormOverridesProps = {
    ProyectoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SwitchFieldProps>;
    campo?: PrimitiveOverrideProps<SelectFieldProps>;
    estudiante?: PrimitiveOverrideProps<TextFieldProps>;
    profesor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProyectoCreateFormProps = React.PropsWithChildren<{
    overrides?: ProyectoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProyectoCreateFormInputValues) => ProyectoCreateFormInputValues;
    onSuccess?: (fields: ProyectoCreateFormInputValues) => void;
    onError?: (fields: ProyectoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProyectoCreateFormInputValues) => ProyectoCreateFormInputValues;
    onValidate?: ProyectoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProyectoCreateForm(props: ProyectoCreateFormProps): React.ReactElement;
