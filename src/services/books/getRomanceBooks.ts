import httpInstance from "../httpInstance";

export const getRomanceBooks = async () => {
    const endpoint = `volumes?q=subject:romance&key=${process.env.REACT_APP_BOOK_API_KEY}&maxResults=5`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};