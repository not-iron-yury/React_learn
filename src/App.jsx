import { useMemo, useState } from "react";
import { PostList } from "./components/PostList";
import { PostFilter } from "./components/PostFilter";
import { MyForm } from "./components/UI/form/MyForm";
import { MyModal } from "./components/MyModal/MyModal";
import { Button } from "./components/UI/buttons/Button";


export function App() {

  const [posts, setPosts] = useState(
    [
      {id: 1, title: 'Яндекс Директ', body: 'Контекстная реклама в поисковой системе Яндекс и её рекламной сети.'},
      {id: 2, title: 'Google Ads', body: 'Реклама в поисковой системе Google и на сайтах партнерах сети Ads.'},
      {id: 3, title: 'Рамблер', body: 'Это вам не нужно. Вот прям совсем не нужно. Лучше используйте таргетированную рекламу в ВК.'} ,
      {id: 4, title: 'ВКонтакт', body: 'Таргатированная реклама. Когда нет спроса на ваш продукт в поисковых системах.'} ,
    ]
  )
  
  const [filter, setFilter] = useState({select: '', search: ''});
  const [modal, setModal] = useState(false);
  

  // ----------------------------------------------------- //
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  
  const removePost = (post) => {
    setPosts(posts.filter(itm => itm.id !== post.id))
  }

  // ----------------------------------------------------- //
  
  const sortedPostList = useMemo(() => {
    if (filter.select) {
      return [...posts].sort((a, b) => a[filter.select].localeCompare( b[filter.select]))
    }
    return posts;
  }, [posts, filter.select]);
  
  // ----------------------------------------------------- //
  
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPostList.filter(post => post.title.toLowerCase().includes(filter.search.toLowerCase()))
  }, [filter.search, sortedPostList])
  
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
          <PostList posts={sortedAndSearchedPosts} remove={removePost}/>
          <Button onClick={() => setModal(true)} >
            Добавить пост
          </Button>
        </div>
      </div>
  )
}

export default App