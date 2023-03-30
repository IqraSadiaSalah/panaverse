import { Box, BoxProps, Text, Flex } from "@chakra-ui/react";
import * as React from "react";

interface Props extends BoxProps {
  name: string;
  jobTitle: string;
}

export const Quotee = (props: Props) => {
  const { name, jobTitle, ...boxProps } = props;
  return (
    <Box {...boxProps}>
      <Flex mt="3" direction={"column"} alignItems="center">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Flex>
    </Box>
  );
};