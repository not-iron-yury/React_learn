export class PostsList {
  
  static async getAll() {
    try {
      const myPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json());
      return myPosts;
    } 
    catch (error) {
      console.log(error);
    }

  }

}

