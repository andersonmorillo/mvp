/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Profesor } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfesorUpdateFormInputValues = {
    nombre?: string;
    campo?: string;
    correo?: string;
};
export declare type ProfesorUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    campo?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfesorUpdateFormOverridesProps = {
    ProfesorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    campo?: PrimitiveOverrideProps<SelectFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfesorUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfesorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profesor?: Profesor;
    onSubmit?: (fields: ProfesorUpdateFormInputValues) => ProfesorUpdateFormInputValues;
    onSuccess?: (fields: ProfesorUpdateFormInputValues) => void;
    onError?: (fields: ProfesorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfesorUpdateFormInputValues) => ProfesorUpdateFormInputValues;
    onValidate?: ProfesorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfesorUpdateForm(props: ProfesorUpdateFormProps): React.ReactElement;
