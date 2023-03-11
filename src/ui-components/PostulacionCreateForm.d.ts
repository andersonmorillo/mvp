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
export declare type PostulacionCreateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    estado?: boolean;
    campo?: string;
};
export declare type PostulacionCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    estado?: ValidationFunction<boolean>;
    campo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostulacionCreateFormOverridesProps = {
    PostulacionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SwitchFieldProps>;
    campo?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PostulacionCreateFormProps = React.PropsWithChildren<{
    overrides?: PostulacionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostulacionCreateFormInputValues) => PostulacionCreateFormInputValues;
    onSuccess?: (fields: PostulacionCreateFormInputValues) => void;
    onError?: (fields: PostulacionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostulacionCreateFormInputValues) => PostulacionCreateFormInputValues;
    onValidate?: PostulacionCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostulacionCreateForm(props: PostulacionCreateFormProps): React.ReactElement;
