/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartaProyectoCoor1OverridesProps = {
    CartaProyectoCoor1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    "Nombre proyecto"?: PrimitiveOverrideProps<TextProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    "Descripci\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    Button36712629?: PrimitiveOverrideProps<ButtonProps>;
    Button36712791?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CartaProyectoCoor1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CartaProyectoCoor1OverridesProps | undefined | null;
}>;
export default function CartaProyectoCoor1(props: CartaProyectoCoor1Props): React.ReactElement;
