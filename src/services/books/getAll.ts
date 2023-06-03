import httpInstance from "../httpInstance";

export const getAll = async () => {
    const endpoint = `volumes?q=*&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=3`;
    const response = await httpInstance.get(endpoint);
    return response.data;
};