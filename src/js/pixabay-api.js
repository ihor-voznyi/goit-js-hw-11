const API_KEY = '45522161-5a4b1fd5e13efcf8857e5e3e0';

export const fetchImages = (query) => {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            throw error;
        });
};