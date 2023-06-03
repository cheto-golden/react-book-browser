import httpInstance from "../httpInstance";

export const getBook = async (bookId: string) => {
    const endpoint = `volumes?q=${bookId}&key=${process.env.REACT_APP_BOOK_API_KEY}&maxResults=1`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};