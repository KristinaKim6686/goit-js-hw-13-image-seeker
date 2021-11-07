const KEY = '24010319-58897770fe5a9dc6269d44f2f';

export default class ImageApi {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.perPage = 12;
  }

  fetchImages(e) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${KEY}`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.page += 1;
        return data.hits;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}






