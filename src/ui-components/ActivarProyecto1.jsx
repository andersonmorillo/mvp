/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function ActivarProyecto1(props) {
  const { profesor, proyecto, estudiante, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="696.92px"
      height="759.9px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ActivarProyecto1")}
      {...rest}
    >
      <Flex
        gap="-16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="681px"
          height="31px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={profesor?.nombre}
            {...getOverrideProps(overrides, "Nombre de la Proyecto")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="681px"
            height="193.47px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={proyecto?.descripcion}
            {...getOverrideProps(overrides, "descricion")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="681px"
          height="419px"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 427")}
        ></Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="697px"
        height="174px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 429")}
      >
        <TextField
          width="300px"
          height="unset"
          label="Estudiante"
          alignItems="center"
          shrink="0"
          placeholder={estudiante?.nombre}
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField36842547")}
        ></TextField>
        <TextField
          width="300px"
          height="unset"
          label="Profesor"
          alignItems="center"
          shrink="0"
          placeholder={profesor?.nombre}
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField36842558")}
        ></TextField>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="115px"
        height="64px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 428")}
      >
        <Button
          width="unset"
          height="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          variation="default"
          children="Activar"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
