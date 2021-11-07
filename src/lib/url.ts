class UrlControl {
  private limit: number = 21;
  private start: number = 0;
  private currentPage: number = 1;
  private photosCount: number = 5000;
  private albumIdsCount: number = 100;
  private pagesCountAtAll: number = Math.ceil(this.photosCount / this.limit);
  private baseURL = "http://jsonplaceholder.typicode.com/photos";

  private getUrlWithQueries() {
    return `${this.baseURL}?_start=${this.start}&_limit=${this.limit}`;
  }

  private setCurrentQueries(start: number, limit: number = this.limit) {
    this.start = start;
    this.limit = limit;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getAlbumIdsCount() {
    return this.albumIdsCount;
  }

  getPagesCountAtAll() {
    return this.pagesCountAtAll;
  }

  getInfoByPage(page: number, filter: string | number = "All") {
    const filterAddition = filter === "All" ? "" : `&albumId=${filter}`;
    if (page === 1) {
      return `${this.baseURL}?_start=0&_limit=${this.limit + filterAddition}`;
    }
    this.setCurrentQueries((page - 1) * this.limit + 1);
    return this.getUrlWithQueries() + filterAddition;
  }
}
// "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5";

const urlControl = new UrlControl();

export default urlControl;
