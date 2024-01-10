import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a5ddab5e549441e596959659190992a2"
    }
})