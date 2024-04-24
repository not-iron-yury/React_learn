import { Link } from "react-router-dom";
import { Header } from "./../components/Layout/header/Header";
import { Footer } from "../components/Layout/footer/Footer";


export const NotFound = () => {

  return(
    <> 
    <Header />
    <section className="content">
      <div className="container">
        <h1>Такой страницы не существует</h1>
        <p>Вернуться на <Link to='/'>глувную</Link>.</p>
      </div>
    </section>
    <Footer />
    </>
  )
};