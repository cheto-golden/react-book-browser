import httpInstance from "../httpInstance";

export const getBook = async (bookId: string) => {
    const endpoint = `volumes?q=${bookId}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=1`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};