import httpInstance from "../httpInstance";

export const getJuvenileBooks = async () => {
    const endpoint = `volumes?q=subject:juvenil&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=5`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};