/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarProps } from "./NavBar";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBar1OverridesProps = {
    NavBar1?: PrimitiveOverrideProps<FlexProps>;
    NavBar?: NavBarProps;
} & EscapeHatchProps;
export declare type NavBar1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBar1OverridesProps | undefined | null;
}>;
export default function NavBar1(props: NavBar1Props): React.ReactElement;
