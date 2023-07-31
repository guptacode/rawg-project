import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3938bdb346d24824837a870ec8cd6510',
    }
})