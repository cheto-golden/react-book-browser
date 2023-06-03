import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getBook, getHorrorBooks} from "services";
import {Skeleton, Stack, Button} from "@mui/material";
import {BookCard} from "components/BookCard";

const BookDetails: React.FC<{}> = (props: any) => {
    const { bookId } = useParams();
    const [ data, setData ] = useState<any>([]);
    const [filteredBooks, setFilteredBooks] = useState<any[]>([]);
    const [value, setValue] = React.useState<number>(0);

    useEffect(() => {
        if (bookId) {
            getBook(bookId)
                .then(response => {
                    //console.log(response.items.map((item: any) => item.volumeInfo))
                    response.items && setData(response)
                })
                .catch(err => console.log(err));
        }
    }, [bookId])

    const booksToShow = value === 0 ? bookId : data;

    return (
        <Stack alignItems="center">
            <Stack width="80%">
                <h1>Detalles</h1>
            </Stack>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                <h2>Id: {booksToShow.id}</h2>


            </Stack>
        </Stack>
    )
}
export default BookDetails;