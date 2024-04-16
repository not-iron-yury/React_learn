import "./MyPaginationList.scss";


export const MyPaginationList = ({pagesArray, page, setPage}) => {

  return(
    <ul className='MyPaginationList'>
      {pagesArray.map(listItem => 
        <li
          className={listItem === page ? 'MyPaginationList__item--active' : 'MyPaginationList__item'}
          key={listItem}
          onClick={() => setPage(listItem)}
        >
          {listItem}
        </li>
      )}
    </ul>
    )
};