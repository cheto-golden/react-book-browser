import httpInstance from "../httpInstance";

export const getHorrorBooks = async () => {
    const endpoint = `volumes?q=subject:terror&key=${process.env.REACT_APP_BOOK_API_KEY}&maxResults=5`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};