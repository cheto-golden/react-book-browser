import httpInstance from "../httpInstance";

export const getHorrorBooks = async () => {
    const endpoint = `volumes?q=subject:terror&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=5`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};