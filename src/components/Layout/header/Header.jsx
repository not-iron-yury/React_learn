import { Link } from 'react-router-dom';
import './index.scss'

export const Header = () => {

  return(
    <header className='header'>
      <div className="container header__container">
        <Link to='/' className='header__link logo'>
          <p className='logo__title'>Логотип</p>
          <p className='logo__desc'>Какое-то описание</p>
        </Link>
        <nav>
          <Link to='/' className='nav__link'>Статьи</Link>
          <Link to='/about' className='nav__link'>Статьи</Link>
        </nav>
      </div>
    </header>
  )
};