/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Profesor, Proyecto, Estudiante } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivarProyecto1OverridesProps = {
    ActivarProyecto1?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Nombre de la Proyecto"?: PrimitiveOverrideProps<TextProps>;
    descricion?: PrimitiveOverrideProps<TextProps>;
    "Frame 427"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    TextField36842547?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36842558?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ActivarProyecto1Props = React.PropsWithChildren<Partial<FlexProps> & {
    profesor?: Profesor;
    proyecto?: Proyecto;
    estudiante?: Estudiante;
} & {
    overrides?: ActivarProyecto1OverridesProps | undefined | null;
}>;
export default function ActivarProyecto1(props: ActivarProyecto1Props): React.ReactElement;
