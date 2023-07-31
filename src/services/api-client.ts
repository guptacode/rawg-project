import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bd1e9d5a1d6143bc88765d9782ba7955',
    }
})