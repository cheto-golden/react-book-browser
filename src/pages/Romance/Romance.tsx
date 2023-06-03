import React, {useEffect, useState} from 'react'
import { getRomanceBooks } from "services";
import { BookCard } from "components/BookCard";
import { Stack } from "@mui/material";

const Romance = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [filteredBooks, setFilteredMovies] = useState<any[]>([]);
    const [value, setValue] = React.useState<number>(0);

    useEffect(  () => {
        if (value === 0) {
            getRomanceBooks()
                .then(response => {
                    response.data && setBooks(response.data.results)
                })
                .catch(err => console.log(err));
        }

    }, [books, value]);

    const booksToShow = value === 0 ? books : filteredBooks;


    return (
        <Stack alignItems="center">
            <Stack width="80%">
                <h1>Romance</h1>
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

export default Romance;