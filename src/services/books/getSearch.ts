import httpInstance from "../httpInstance";

export const getSearch = async (prompt: string) => {
    const endpoint = `q=${prompt}&key=${process.env.REACT_APP_BOOK_API_KEY}`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};