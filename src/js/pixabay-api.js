export function getPhotos(q) {
    const ENDPOINT = "/api";
    const BASE_URL = "https://pixabay.com";
    const API_KEY = "44004812-c52c8438ab8e6871c63eadf8f";
    const params = new URLSearchParams({
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });

    return fetch(`${BASE_URL}${ENDPOINT}?${params}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });
}