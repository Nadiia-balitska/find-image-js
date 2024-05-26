
axios.defaults.baseURL = "https://pixabay.com/api";

export function getPhotos(q, page) {
    const params = {
        params: {
            q,
            page,
            per_page: 15,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            key: '44004812-c52c8438ab8e6871c63eadf8f',
        },
    };

    return axios.get("", params);
 }
