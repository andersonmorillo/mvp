/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CartaProyecto1Props } from "./CartaProyecto1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartaProyecto1CollectionOverridesProps = {
    CartaProyecto1Collection?: PrimitiveOverrideProps<CollectionProps>;
    CartaProyecto1?: CartaProyecto1Props;
} & EscapeHatchProps;
export declare type CartaProyecto1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CartaProyecto1Props;
} & {
    overrides?: CartaProyecto1CollectionOverridesProps | undefined | null;
}>;
export default function CartaProyecto1Collection(props: CartaProyecto1CollectionProps): React.ReactElement;
