import React from 'react';
import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const HompePage = () => {
    return (
        <Container maxW="xl" centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg="#333"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="#444"
            >
                <Text fontSize="4xl" fontWeight="800" textAlign="center">
                    Batolebaaz
                </Text>
            </Box>
            <Box bg="#333" w="100%" p={4} borderRadius="lg" borderWidth="1px" borderColor="#444">
                <Tabs isFitted variant="soft-rounded">
                    <TabList mb="1em">
                        <Tab>Login</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Register />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default HompePage