/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Coordinador } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoordinadorUpdateFormInputValues = {
    nombre?: string;
    correo?: string;
};
export declare type CoordinadorUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoordinadorUpdateFormOverridesProps = {
    CoordinadorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoordinadorUpdateFormProps = React.PropsWithChildren<{
    overrides?: CoordinadorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    coordinador?: Coordinador;
    onSubmit?: (fields: CoordinadorUpdateFormInputValues) => CoordinadorUpdateFormInputValues;
    onSuccess?: (fields: CoordinadorUpdateFormInputValues) => void;
    onError?: (fields: CoordinadorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoordinadorUpdateFormInputValues) => CoordinadorUpdateFormInputValues;
    onValidate?: CoordinadorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CoordinadorUpdateForm(props: CoordinadorUpdateFormProps): React.ReactElement;
