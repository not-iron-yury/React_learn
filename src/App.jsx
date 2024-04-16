import { useEffect, useState } from "react";
import { usePosts } from "./hooks/usePost"
import { useFetching } from "./hooks/useFetching"
import { usePagination } from "./hooks/usePagination"
import { PostList } from "./components/PostList";
import { PostFilter } from "./components/PostFilter";
import { MyForm } from "./components/UI/form/MyForm";
import { Button } from "./components/UI/buttons/Button";
import { MyLoader } from "./components/UI/loader/MyLoader";
import { MyPaginationList } from "./components/UI/pagination/MyPaginationList";
import { MyModal } from "./components/MyModal/MyModal";
import { PostsList } from "./API/postsList";
import { getPageCount} from "./utils/pagination";

export function App() {

  const [posts, setPosts] = useState([]);             // массив постов
  const [filter, setFilter] = useState({select: '', search: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);    // общее количество страниц
  const [limit, setLimit] = useState(10);     // передаем в PostsList.getAll
  const [page, setPage] = useState(1);        // передаем в PostsList.getAll
  const sortedAndSearchedPosts = usePosts(posts, filter.select, filter.search);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostsList.getAll(limit, page);
    const countPosts = response.headers.get('X-Total-Count');
    setTotalPages(getPageCount(countPosts, limit));
    const posts = await response.json();
    setPosts(posts);
  });
  
  const pagesArray = usePagination(totalPages, limit);
  // ----------------------------------------------------- //
  useEffect(() => {
    fetchPosts();
  }, [page])
  // ----------------------------------------------------- // 
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  
  const removePost = (post) => {
    setPosts(posts.filter(itm => itm.id !== post.id))
  }
  // ----------------------------------------------------- //
  
  // ----------------------------------------------------- //
  return (
      <div className="posts">
        <MyModal visible={modal} setVisible={setModal}>
          <MyForm create={createPost} />
        </MyModal>
        <div className="container">
          <h1 className="posts__title">Список анонсов статей</h1>
          <PostFilter filter={filter} setFilter={setFilter} />
          {postsError     // check ошибки
            &&  <h2 style={{textAlign: 'center', padding: '40px'}}>
                  Возникла какая-то ошибка
                </h2>
          }
          {isPostsLoading  // прелоадер + список постов
            ? <MyLoader />  
            : <PostList posts={sortedAndSearchedPosts} remove={removePost} />
          }
          <Button onClick={() => setModal(true)}>
            Добавить пост
          </Button>
          <MyPaginationList pagesArray={pagesArray} page={page} setPage={setPage} />
        </div>
      </div>
  )
}

export default App