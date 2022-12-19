import { useState, useEffect } from 'react'
import { Box, Flex, FormControl, FormLabel, Image, Input, Text, Stack } from '@chakra-ui/react'
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
                    <Text fontWeight={600}>Movie(s)</Text>
                    <Stack direction={['column', 'row']} p='2em' px='8em'>
                        <Box w='100%'>
                            <Image src={movie?.Poster} alt='Poster' borderRadius={6}/>
                        </Box>
                        <Flex direction='column' w='100%' justify='space-around'>
                            <Text fontWeight={600} as='u'>
                                Details
                            </Text>
                            <Text fontWeight={600}>
                                Title: {movie?.Title}
                            </Text>
                            <Text fontWeight={600}>
                                Actors: {movie?.Actors}
                            </Text>
                            <Text fontWeight={600}>
                                Genre: {movie?.Genre}
                            </Text>
                            <Text fontWeight={600}>
                                Language: {movie?.Language}
                            </Text>
                            <Text fontWeight={600}>
                                Run-time: {movie?.Runtime}
                            </Text>
                            <Text fontWeight={600}>
                                Release date: {movie?.Released}
                            </Text>
                            <Text fontWeight={600}>
                                Box Office: {movie?.BoxOffice}
                            </Text>
                            <Text fontWeight={600}>
                                Director: {movie?.Director}
                            </Text>
                        </Flex>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
