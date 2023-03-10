import { Box, Heading } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Box bg='#292929' py='1.5em' px='4.8em'>
            <Heading
                as='h1'
                py='0.8em'
                px='1.1875em'
                border='1px solid #FFFFFF'
                borderRadius={0}
                w='fit-content'
                color='#fff'
            >
                MyTestApp
            </Heading>
        </Box>
    )
}
