export class PostsList {
  
  static async getAll(limit=10, page=1 ) {
      const queryParams = `?_limit=${limit}&_page=${page}`;
      const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts" + queryParams
        )
      return response;
    } 
}

