import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_GRAPHCMS,
    headers: {
        "Content-Type": "applcation/json",
        "Authorization": `Bearer ${import.meta.env.VITE_HYGRAPH_TOKEN}`,
    },
});
export { api };