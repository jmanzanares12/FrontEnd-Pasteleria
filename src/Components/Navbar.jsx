import { HamburgerIcon } from "@chakra-ui/icons"
import { Flex, Box, useDisclosure, Stack, Link } from "@chakra-ui/react"
import './Navbar.css'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className="App">
            <Flex
                py={2}
                px={4}
                direction={["column", "row"]}
                justify="space-between"
                bg="orange.400"
            >
                <Flex alignItems="center" wrap="wrap">
                    <Flex flexGrow={1} justify="center" /*border='1px'*/>
                        {/* <Heading ml={[4, 0]}>Zensurance</Heading> */}
                        <Box ml={[4, 0]}>Box 1</Box>
                    </Flex>
                    <HamburgerIcon
                        onClick={isOpen ? onClose : onOpen}
                        // border='1px'
                        display={["inline", "none"]}
                    />
                </Flex>
                <Flex
                    display={[isOpen ? "flex" : "none", "flex"]}
                    bg={["teal.500", "orange.400"]}
                >
                    <Stack align="center" direction={["column", "row"]}>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                    </Stack>
                </Flex>
            </Flex>
        </div>
    )
}
