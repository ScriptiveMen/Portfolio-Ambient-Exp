import axios from "axios";

const instance = axios.create({
    baseURL:
        "http://portfolio-ambient-alb-887438418.ap-south-1.elb.amazonaws.com/",
});

export default instance;
