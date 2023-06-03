import React, {useEffect, useState} from 'react'
import { getSearch } from "services";
import { BookCard } from "components/BookCard";
import { Stack } from "@mui/material";
import { useParams } from 'react-router-dom';


const Home = () => {
    const { search } = useParams();
    const [books, setBooks] = useState<any[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
    const [value, setValue] = React.useState<number>(0);

    useEffect(  () => {
        if (value === 0) {

            // getSearch(search)
            //     .then(response => {
            //         response.data && setBooks(response.data.results)
            //     })
            //     .catch(err => console.log(err));
        }

    }, [books, value]);

    const booksToShow = value === 0 ? books : filteredMovies;

    return (
        <Stack alignItems="center">
            <Stack width="80%">
                <h1>Home</h1>
            </Stack>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {booksToShow && booksToShow.map((book) => (
                    <BookCard
                        id={book.id}
                        title={book.title}
                        authors={book.authors}
                        thumbnail={book.thumbnail}
                    />
                ))}
            </Stack>
        </Stack>
    )
}

export default Home;