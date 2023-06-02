import {
    Box,
    Flex,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    VStack,
    Divider,
    Icon
} from "@chakra-ui/react";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <Box bg="white" _dark={{ bg: "gray.600" }}>
            <Stack
                direction={{ base: "column", lg: "row" }}
                w="full"
                justify="space-between"
                p={10}
            >
                <Flex justify="center">
                    <Image
                        src="http://placehold.jp/2a2a2c/ffffff/200x100.png?text=Company%20Logo&css=%7B%22font-size%20%22%3A%22%2016px%22%7D"
                        alt="Company Logo"
                        rounded="lg"
                        width={{ base: "150px", lg: "200px" }}
                        height={{ base: "75px", lg: "100px" }}
                        my={{ base: 2, lg: 0 }}
                    />
                </Flex>
                <HStack
                    alignItems="start"
                    flex={1}
                    justify="space-around"
                    fontSize={{ base: "12px", md: "16px" }}
                    color="gray.800"
                    _dark={{ color: "white" }}
                    textAlign={{ base: "center", md: "left" }}
                    spacing={4}
                >
                    <VStack align="start">
                        <Link textTransform="uppercase">Preguntas Frecuentes</Link>
                        <Link textTransform="uppercase">Servicios</Link>
                        <Link textTransform="uppercase">Suporte</Link>
                    </VStack>
                </HStack>
                <HStack
                    alignItems="start"
                    flex={1}
                    justify="space-around"
                    fontSize={{ base: "12px", md: "16px" }}
                    color="gray.800"
                    _dark={{ color: "white" }}
                    textAlign={{ base: "center", md: "left" }}
                    spacing={4}
                >
                    <VStack align="start">
                        <Link textTransform="uppercase">Sobre Nosotros</Link>
                        <Link textTransform="uppercase">Contactanos</Link>
                        <Link textTransform="uppercase">Recursos</Link>
                    </VStack>
                </HStack>
            </Stack>
            <Divider
                w="90%"
                mx="auto"
                color="gray.800"
                _dark={{ color: "#F9FAFB" }}
                h="3.6px"
            />
            <VStack py={3}>
                <HStack justify="center" spacing={2}>
                    <Link>
                        <Icon
                            color="gray.800"
                            _dark={{ color: "white" }}
                            h="20px"
                            w="20px"
                            as={FaFacebookF}
                        />
                    </Link>
                    <Link>
                        <Icon
                            _dark={{ color: "white" }}
                            h="20px"
                            w="20px"
                            as={GrInstagram}
                        />
                    </Link>
                </HStack>

                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="gray.800"
                    _dark={{ color: "white" }}
                >
                    &copy; {new Date().getFullYear()} Pastelería Lilliam. Todos los derechos reservados.
                </Text>
            </VStack>
        </Box>
    );
}
