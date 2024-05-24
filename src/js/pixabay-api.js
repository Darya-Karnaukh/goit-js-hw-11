
export function searchFoto (word) {
        const BASE_URL = 'https://pixabay.com/api/';
        const params = new URLSearchParams ({
            key : '44049437-ef12fae0346c4a67068c57c01',
            q : word,
            image_type : 'photo',
            orientation : 'horizontal',
            safesearch : true,
        });

        const url = `${BASE_URL}?${params}`;

        return fetch (url).then(res=> res.json());
    }
