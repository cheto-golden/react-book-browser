import httpInstance from "../httpInstance";

export const getHorrorBooks = async () => {
    const endpoint = `q=subject:terror&key=${process.env.REACT_APP_BOOK_API_KEY}=40`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};