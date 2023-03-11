/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function CartaProyectoCoor1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="3px"
      direction="column"
      width="416px"
      height="403px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="5px 10px 5px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CartaProyectoCoor1")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="44px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Nombre proyecto"
          {...getOverrideProps(overrides, "Nombre proyecto")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="342px"
        height="279px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Descripción"
          {...getOverrideProps(overrides, "Descripci\u00F3n")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Button
          width="147px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Aceptar"
          {...getOverrideProps(overrides, "Button36712629")}
        ></Button>
        <Button
          width="147px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Rechazar"
          {...getOverrideProps(overrides, "Button36712791")}
        ></Button>
      </Flex>
    </Flex>
  );
}
