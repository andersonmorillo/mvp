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
export declare type ProfesorCreateFormInputValues = {
    nombre?: string;
    campo?: string;
    correo?: string;
};
export declare type ProfesorCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    campo?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfesorCreateFormOverridesProps = {
    ProfesorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    campo?: PrimitiveOverrideProps<SelectFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfesorCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfesorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfesorCreateFormInputValues) => ProfesorCreateFormInputValues;
    onSuccess?: (fields: ProfesorCreateFormInputValues) => void;
    onError?: (fields: ProfesorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfesorCreateFormInputValues) => ProfesorCreateFormInputValues;
    onValidate?: ProfesorCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfesorCreateForm(props: ProfesorCreateFormProps): React.ReactElement;
