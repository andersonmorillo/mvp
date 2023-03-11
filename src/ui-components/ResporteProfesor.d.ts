/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ResporteEstudianteProps } from "./ResporteEstudiante";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResporteProfesorOverridesProps = {
    ResporteProfesor?: PrimitiveOverrideProps<FlexProps>;
    ResporteEstudiante?: ResporteEstudianteProps;
} & EscapeHatchProps;
export declare type ResporteProfesorProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ResporteProfesorOverridesProps | undefined | null;
}>;
export default function ResporteProfesor(props: ResporteProfesorProps): React.ReactElement;
