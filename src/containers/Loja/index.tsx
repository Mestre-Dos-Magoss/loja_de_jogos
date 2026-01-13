import Carrousel from "../../components/Loja/Carrousel"
import Categorias from "../../components/Loja/Categorias"
import HeaderLoja from "../../components/Loja/Header"
import ListaDeJogos from "../../components/Loja/Lista_de_jogos"
import { Game } from '../../App'
import Footer from "../../components/Loja/Footer"

const jogos :Game[] = [
  {
    name: 'Marvel avangers',
    description: "O mundo hávia sofrendo constantes ameaças dos alíenigenas até que os vingadores...",
    image: "https://images.unsplash.com/photo-1545579003-84eeef98a485?w=800&q=80",
    avaliationGame: 4.8,
    realeaseDate: "14/03/2024",
    developmente: "Neon Studios",
    tag: ['RPG'],
    price: 59.99,
    newPrice: 49.99,
    descontPrice: 30,
    id: 1
  },
  {
    name: 'Cyber Legends: Neon City',
    description: "Mergulhe em uma metrópole cyberpunk futurista repleta de aventuras e perigos. Escolha seu caminho em um mundo de tecnologia e conspiração.",
    image: "https://images.unsplash.com/photo-1545579003-84eeef98a485?w=800&q=80",
    avaliationGame: 3.7,
    realeaseDate: "19/07/2023",
    developmente: "Sony estudios",
    tag: ['Animação'],
    price: 270,
    newPrice: 199.99,
    descontPrice: 26,
    id: 2
  },
    {
    name: 'Cyber Legends: Neon City',
    description: "Mergulhe em uma metrópole cyberpunk futurista repleta de aventuras e perigos. Escolha seu caminho em um mundo de tecnologia e conspiração.",
    image: "https://images.unsplash.com/photo-1417716226287-2f8cd2e80274?w=800&q=80",
    avaliationGame: 4.5,
    realeaseDate: "19/07/2023",
    developmente: "Sony estudios",
    tag: ["Ação"],
    price: 270,
    newPrice: 199.99,
    descontPrice: 26,
    id: 3
  },
      {
    name: 'Cyber Legends: Neon City',
    description: "Mergulhe em uma metrópole cyberpunk futurista repleta de aventuras e perigos. Escolha seu caminho em um mundo de tecnologia e conspiração.",
    image: "https://images.unsplash.com/photo-1417716226287-2f8cd2e80274?w=800&q=80",
    avaliationGame: 4.5,
    realeaseDate: "19/07/2023",
    developmente: "Sony estudios",
    tag: ["Ação"],
    price: 270,
    newPrice: 199.99,
    descontPrice: 26,
    id: 4
  }
]
const Loja = () =>  (
  <>
    <HeaderLoja />
    <Carrousel />
    <Categorias />
    <ListaDeJogos jogos={jogos} />
    <Footer />
  </>
)


export default Loja