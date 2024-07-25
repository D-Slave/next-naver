import axios, {Axios, AxiosRequestConfig, InternalAxiosRequestConfig} from 'axios';

const client: Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
})