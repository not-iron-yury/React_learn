export class PostsList {
  
  static async getAll() {
    const myPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json());
    return myPosts;
  }

}

