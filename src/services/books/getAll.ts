import httpInstance from "../httpInstance";

export const getAll = async () => {
    const endpoint = `volumes?q=*&key=${process.env.REACT_APP_BOOK_API_KEY}&maxResults=3`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};