import { useState } from "react";
import { usePosts } from "./hooks/usePost"
import { myPosts } from "./data/posts"
import { PostList } from "./components/PostList";
import { PostFilter } from "./components/PostFilter";
import { MyForm } from "./components/UI/form/MyForm";
import { MyModal } from "./components/MyModal/MyModal";
import { Button } from "./components/UI/buttons/Button";

export function App() {

  const [posts, setPosts] = useState(myPosts);
  const [filter, setFilter] = useState({select: '', search: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.select, filter.search);
  // ----------------------------------------------------- //
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  
  const removePost = (post) => {
    setPosts(posts.filter(itm => itm.id !== post.id))
  }
  // ----------------------------------------------------- //
  return (
      <div className="posts">
        <MyModal visible={modal} setVisible={setModal}>
          <MyForm create={createPost} />
        </MyModal>
        <div className="container">
          <h1 className="posts__title">Список анонсов статей</h1>
          <PostFilter filter={filter} setFilter={setFilter} />
          <PostList posts={sortedAndSearchedPosts} remove={removePost}/>
          <Button onClick={() => setModal(true)}>
            Добавить пост
          </Button>
        </div>
      </div>
  )
}

export default App