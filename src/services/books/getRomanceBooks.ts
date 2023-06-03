import httpInstance from "../httpInstance";

export const getRomanceBooks = async () => {
    const endpoint = `q=subject:romance&key=${process.env.REACT_APP_BOOK_API_KEY}=40`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};