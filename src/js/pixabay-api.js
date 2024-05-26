
axios.defaults.baseURL = "https://pixabay.com";

export function getPhotos(q, page) {
    const params = {
        params: {
            q,
            page,
            per_page: 15,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        },
    };

    return axios.get("/api", params);
 }
