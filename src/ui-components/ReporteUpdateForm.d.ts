/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Reporte } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReporteUpdateFormInputValues = {
    descripcion?: string;
    calificacion?: string;
};
export declare type ReporteUpdateFormValidationValues = {
    descripcion?: ValidationFunction<string>;
    calificacion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReporteUpdateFormOverridesProps = {
    ReporteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    calificacion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReporteUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReporteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reporte?: Reporte;
    onSubmit?: (fields: ReporteUpdateFormInputValues) => ReporteUpdateFormInputValues;
    onSuccess?: (fields: ReporteUpdateFormInputValues) => void;
    onError?: (fields: ReporteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReporteUpdateFormInputValues) => ReporteUpdateFormInputValues;
    onValidate?: ReporteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReporteUpdateForm(props: ReporteUpdateFormProps): React.ReactElement;
