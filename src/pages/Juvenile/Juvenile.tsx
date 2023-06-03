import React, {useEffect, useState} from 'react'
import {getHorrorBooks, getJuvenileBooks} from "services";
import { BookCard } from "components/BookCard";
import { Stack } from "@mui/material";

const Juvenile = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<any[]>([]);
    const [value, setValue] = React.useState<number>(0);

    useEffect(  () => {
        if (value === 0) {
            getHorrorBooks()
                .then(response => {
                    //console.log(response.items.map((item: any) => item.volumeInfo))
                    response.items && setBooks(response.items)
                })
                .catch(err => console.log(err));
        }

    }, [books, value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;
        setValue(parseInt(value));
    };

    const booksToShow = value === 0 ? books : filteredBooks;
    //booksToShow && booksToShow.map((book) => console.log(book.volumeInfo.imageLinks.thumbnail))

    return (
        <Stack alignItems="center">
            <Stack width="80%">
                <h1>Terror</h1>
            </Stack>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {booksToShow && booksToShow.map((book) => (
                    <BookCard
                        id={book.id}
                        title={book.volumeInfo.title}
                        authors={book.authors}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    />
                ))}
            </Stack>
        </Stack>
    )
}
export default Juvenile;