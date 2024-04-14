import { PostItem } from "./PostItem";
import { MyLoader } from "./UI/loader/MyLoader";

export function PostList ({posts, remove, postsLoading}) {
  
  if (!posts.length && postsLoading) {
    return(
      <MyLoader />
    )
  }
  else if (!posts.length) {
    return(
      <h3 style={{textAlign: 'center', marginBottom: 50, marginTop: 40}}>
          Статей в этом спике нет. Но вы можете создать первую.
      </h3>
    )
  }


  return (
    <div className="postList">
      <ul className="posts__list">
        {posts.map((itm, index) => 
          <PostItem key={itm.id} data={itm} number={index} remove={remove} />
        )}
      </ul>
    </div>
  )
}