/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CartaProyecto1Props } from "./CartaProyecto1";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartaProyecto2OverridesProps = {
    CartaProyecto2?: PrimitiveOverrideProps<FlexProps>;
    CartaProyecto1?: CartaProyecto1Props;
} & EscapeHatchProps;
export declare type CartaProyecto2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CartaProyecto2OverridesProps | undefined | null;
}>;
export default function CartaProyecto2(props: CartaProyecto2Props): React.ReactElement;
