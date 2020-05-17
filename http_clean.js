class Get extends HttpWorker {
  async crawl(url) {
    let result = await this.Got(encodeURI(url));
    return this.clean_html({tags: ['script', 'style']}, result.body);
  }
}
