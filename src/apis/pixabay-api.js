const fetchImages = async ({ query, page }) => {
  const baseURL = 'https://pixabay.com/api/';
  const IMAGE_API_KEY = '24385209-6a81cc27bd8e526ba32a03073';

  const params = new URLSearchParams({
    q: query,
    page,
    key: IMAGE_API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    safesearch: 'true',
  });

  const url = `${baseURL}?${params}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw Promise.reject(new Error(`No images for query ${query}`));
  }

  return res.json();
};

export const ImageApi = {
  fetchImages,
};
