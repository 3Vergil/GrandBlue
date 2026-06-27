import Header from "@/layouts/Header/Header.jsx"
import { Helmet } from 'react-helmet-async'
import { MangaProvider } from "@/entities/grandsite"
import Routes from "./routing/routes.jsx"
import './styles'

const App = (props) => {
  const { children, title, url } = props

      return (
        <>
        <MangaProvider >
        <Helmet htmlAttributes={{lang: "en"}}>
            <title>{title}</title>
        </Helmet>
        <Header />
          <Routes />
         
        </MangaProvider>
        </>
    )
}

export default App
