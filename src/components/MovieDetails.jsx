import React from 'react'
import { Flex, Text } from '@chakra-ui/react'


export default function MovieDetails({ movie }) {
    return (
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
    )
}
