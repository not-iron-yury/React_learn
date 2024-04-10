import { MyInput } from "./UI/form/MyInput";
import MySelect from "./UI/select/MySelect";

export function PostFilter({filter, setFilter}) {

  return (
    <div className="posts__nav">
      <MySelect
        value={filter.select}
        sortPostList={selectedValue => setFilter({...filter, select: selectedValue})}
        defaultValue="Сортировочка"
        optionsList={[
            {value: "title", name: "По заголовкам"},
            {value: "body", name: "По описанию"},
          ]}
      />
      <MyInput 
        value={filter.search}
        onChange={e => setFilter({...filter, search: e.target.value})}
        
        className="nav__search"
        placeholder="Поиск статьи"
      />
    </div>
  )
}