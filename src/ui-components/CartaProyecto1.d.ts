/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Profesor, Proyecto } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartaProyecto1OverridesProps = {
    CartaProyecto1?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Nombre proyecto"?: PrimitiveOverrideProps<TextProps>;
    "Descripci\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CartaProyecto1Props = React.PropsWithChildren<Partial<FlexProps> & {
    profesor?: Profesor;
    proyecto?: Proyecto;
} & {
    overrides?: CartaProyecto1OverridesProps | undefined | null;
}>;
export default function CartaProyecto1(props: CartaProyecto1Props): React.ReactElement;
