import httpInstance from "../httpInstance";

export const getRomanceBooks = async () => {
    const endpoint = `volumes?q=subject:romance&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=5`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};