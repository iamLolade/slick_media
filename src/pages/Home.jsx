import { useState, useEffect } from 'react'
import { Box, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import axios from 'axios'

// components
import Header from '../components/Header'

export default function Home() {
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const getMovie = async () => {
            const data = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=325824a3')
            console.log('Movie: ', data, 'S:', movie)
            if(data.statusText === 'OK') {
                setMovie(data.data)
            }
        }

        getMovie()
    }, [])
    return (
        <Box>
            <Header />
            <Box p='2em'>
                <form>
                    <FormControl>
                        <FormLabel>Search</FormLabel>
                        <Input mt={2} p={4} w='50%' h={40} placeholder='Search movies here...' />
                    </FormControl>
                </form>

                {/* movies */}
                <Box mt={16}>
                    <Text>Movie(s)</Text>

                </Box>
            </Box>
        </Box>
    )
}
