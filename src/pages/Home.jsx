import { useState, useEffect } from 'react'
import { Box, Flex, FormControl, FormLabel, Image, Input, Text, Stack, Spinner} from '@chakra-ui/react'
import axios from 'axios'

// components
import Header from '../components/Header'
import MovieDetails from '../components/MovieDetails'

export default function Home() {
    const [movie, setMovie] = useState(null)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        const getMovie = async () => {
            const data = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=325824a3')
            
            if(data.statusText === 'OK') {
                setMovie(data.data)
            }
        }

        getMovie()
    }, [movie, searchResult])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await axios.get(`https://www.omdbapi.com/?apikey=325824a3&s=${search.trim()}&type=movie&page=1`)

        if(data.data.Response === 'True') {
            setSearchResult(data.data.Search)
        }
    }

    return (
        <Box>
            <Header />
            <Box p='2em'>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Search</FormLabel>
                        <Input
                            mt={2}
                            p={4}
                            w='50%'
                            h={40}
                            placeholder='Search movies here...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} 
                        />
                    </FormControl>
                </form>

                {/* movies */}
                <Box mt={16}>
                    <Text fontWeight={600}>Movie(s)</Text>
                    {search === '' && <Stack direction={['column', 'row']} p='2em' px='8em'>
                        <Box w='100%'>
                            {movie ? <Image src={movie?.Poster} alt='Poster' borderRadius={6}/>: <Spinner />}
                        </Box>
                        {movie ? <MovieDetails movie={movie}/>: <Spinner />}
                    </Stack>}
                        <Flex direction='row' overflowX='scroll'>
                            {searchResult ? searchResult?.map(search => (
                                <Flex direction='column'>
                                    <Image src={search?.Poster} h={250} w='full' mr={8}/>
                                    <Text align='center' mr={8} fontWeight={600}>{search?.Title}</Text>
                                </Flex>
                            )) : <Spinner />}
                        </Flex>
                </Box>
            </Box>
        </Box>
    )
}
