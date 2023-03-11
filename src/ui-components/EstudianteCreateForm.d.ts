/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EstudianteCreateFormInputValues = {
    nombre?: string;
    campo?: string;
    correo?: string;
};
export declare type EstudianteCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    campo?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EstudianteCreateFormOverridesProps = {
    EstudianteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    campo?: PrimitiveOverrideProps<SelectFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EstudianteCreateFormProps = React.PropsWithChildren<{
    overrides?: EstudianteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EstudianteCreateFormInputValues) => EstudianteCreateFormInputValues;
    onSuccess?: (fields: EstudianteCreateFormInputValues) => void;
    onError?: (fields: EstudianteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EstudianteCreateFormInputValues) => EstudianteCreateFormInputValues;
    onValidate?: EstudianteCreateFormValidationValues;
} & React.CSSProperties>;
export default function EstudianteCreateForm(props: EstudianteCreateFormProps): React.ReactElement;
