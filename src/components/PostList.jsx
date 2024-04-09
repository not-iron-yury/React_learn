import { PostItem } from "./PostItem"

export function PostList ({posts, remove}) {

  const arr = posts.map((itm, index) => 
    <PostItem key={itm.id} data={itm} number={index} remove={remove} />
  )

  return (
    <div className="postList">
      <ul className="posts__list">
        {arr}
      </ul>
    </div>
  )
}