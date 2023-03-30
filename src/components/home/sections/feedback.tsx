import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";

const Feedback = () => {
  return (
    <Box as="section" bg="white">
      <Box maxW="3xl" mx="auto" padding={25}>
        <Flex direction="column" align="center" textAlign="center">
          <QuoteIcon
            color={useColorModeValue("gray.300", "gray.600")}
            fontSize={{ base: "3xl", md: "6xl" }}
          />
          <Text fontWeight="medium" mt="6" fontSize={"sm"}>
            &ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dignissimos magnam, nobis quasi assumenda quos nisi, modi&rdquo;
          </Text>
          <Quotee
            name="Iqra Salahuddin"
            jobTitle="Student"
            mt="8"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Feedback;
