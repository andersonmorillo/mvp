/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReporteCreateFormInputValues = {
    descripcion?: string;
    calificacion?: string;
};
export declare type ReporteCreateFormValidationValues = {
    descripcion?: ValidationFunction<string>;
    calificacion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReporteCreateFormOverridesProps = {
    ReporteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    calificacion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReporteCreateFormProps = React.PropsWithChildren<{
    overrides?: ReporteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReporteCreateFormInputValues) => ReporteCreateFormInputValues;
    onSuccess?: (fields: ReporteCreateFormInputValues) => void;
    onError?: (fields: ReporteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReporteCreateFormInputValues) => ReporteCreateFormInputValues;
    onValidate?: ReporteCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReporteCreateForm(props: ReporteCreateFormProps): React.ReactElement;
