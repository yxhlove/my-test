import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import NProgress from "../components/progress";

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  // 跨域时允许携带凭证
  withCredentials: true,
};


class RequestHttp { 
    service: AxiosInstance;

    public constructor(config:AxiosRequestConfig) { 
        this.service = axios.create(config);
        this.service.interceptors.request.use(
            (config: AxiosRequestConfig) => { 
                NProgress.start();
                
            }
        );
    }
}

export default new RequestHttp(config);


