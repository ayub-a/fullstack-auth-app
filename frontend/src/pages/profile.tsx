import { Alert, AlertIcon, Center, Heading, Text } from "@chakra-ui/react"
import { useAuth } from "../hoooks/useAuth"


export const ProfilePage = () => {

    const { user } = useAuth()
    const { email, verified, createdAt } = user
    

    return (
        <Center my={16} flexDir='column'>
            <Heading mb={4}>My account</Heading>

            {
                !verified
                &&
                <Alert status='warning' w='fit-content' borderRadius={12} mb={3}>
                    <AlertIcon/>
                    Please verify your email
                </Alert>
            }

            <Text color='white' mb={2}>
                Email:
                <Text as='span' color='gray.300' ml={2}>{ email }</Text>
            </Text>

            <Text color='white' mb={2}>
                Created on:
                <Text as='span' color='gray.300' ml={2}>
                    { new Date(createdAt).toLocaleDateString('uz-UZ') }
                </Text>
            </Text>

        </Center>
    )
}