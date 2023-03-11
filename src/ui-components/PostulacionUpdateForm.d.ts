/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Postulacion } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostulacionUpdateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    estado?: boolean;
    campo?: string;
};
export declare type PostulacionUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    estado?: ValidationFunction<boolean>;
    campo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostulacionUpdateFormOverridesProps = {
    PostulacionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SwitchFieldProps>;
    campo?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PostulacionUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostulacionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    postulacion?: Postulacion;
    onSubmit?: (fields: PostulacionUpdateFormInputValues) => PostulacionUpdateFormInputValues;
    onSuccess?: (fields: PostulacionUpdateFormInputValues) => void;
    onError?: (fields: PostulacionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostulacionUpdateFormInputValues) => PostulacionUpdateFormInputValues;
    onValidate?: PostulacionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostulacionUpdateForm(props: PostulacionUpdateFormProps): React.ReactElement;
