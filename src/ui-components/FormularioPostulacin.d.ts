/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormularioPostulacinOverridesProps = {
    FormularioPostulacin?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Informaci\u00F3n de la postulaci\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    TextField29767009?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29767014?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36772541?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29767010?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FormularioPostulacinProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormularioPostulacinOverridesProps | undefined | null;
}>;
export default function FormularioPostulacin(props: FormularioPostulacinProps): React.ReactElement;
