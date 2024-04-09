import {useState} from "react"
import { PostList } from "./components/PostList"
import MyForm from "./components/UI/form/MyForm";
import {MyInput} from "./components/UI/form/MyInput";
import MySelect from "./components/UI/select/MySelect";


export function App() {

  const [posts, setPosts] = useState(
    [
      {id: 1, title: 'Заголовок A', body: 'CCC Какой-то дескрипшн о чем-то непонятном, но очень важном'},
      {id: 2, title: 'Заголовок B', body: 'BBB Какой-то дескрипшн о чем-то непонятном, но очень важном'},
      {id: 3, title: 'Заголовок C', body: 'AAA Какой-то дескрипшн о чем-то непонятном, но очень важном'},
    ]
  )

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(itm => itm.id !== post.id))
  }


  // const [selectedSort, setSelectedSort] = useState('');

  const sortPostList = (sort) => {
    // setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare( b[sort]) ))
  }


  return (
      <div className="posts">
        <div className="container">
          <h1 className="posts__title">Список анонсов статей</h1>
          <div >
            <MySelect
              // value={selectedSort}
              sortPostList={sortPostList}
              defaultValue="Сортировочка"
              optionsList={[
                  {value: "title", name: "По заголовкам"},
                  {value: "body", name: "По описанию"},
                ]}
            />

            <MyInput 
              placeholder="Поиск статьи"
              
            />
          </div>
          {posts.length !== 0 
            ? <PostList posts={posts} remove={removePost}/>
            : <h3 style={{textAlign: 'center', marginBottom: 50}}>
                  Статей в этом спике нет. Но вы можете создать первую.
              </h3>
          }
          <MyForm posts={posts} create={createPost} />
        </div>
      </div>
  )
}


export default App