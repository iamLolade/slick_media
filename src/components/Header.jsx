import { Box, Text } from '@chakra-ui/react'
import header_bg from '../public/Images/header-bg.svg'

export default function Header() {
    return (
        <Box bgImage={header_bg} h='40vh'>
            <Text fontSize={42} fontWeight={700} color='#fff' p='2em'>
                Watch <br />something <br />incredible.
            </Text>
        </Box>
    )
}
