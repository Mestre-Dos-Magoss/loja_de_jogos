import Carrousel from "../../components/Loja/Carrousel"
import Categorias from "../../components/Loja/Categorias"
import HeaderLoja from "../../components/Loja/Header"
import ListaDeJogos from "../../components/Loja/Lista_de_jogos"
import { Game } from '../../App'
import Footer from "../../components/Loja/Footer"

// const jogos :Game[] = [
//   {
//     name: 'Marvel avangers',
//     description: "O mundo hávia sofrendo constantes ameaças dos alíenigenas até que os vingadores...",
//     image: "https://images.unsplash.com/photo-1545579003-84eeef98a485?w=800&q=80",
//     avaliationGame: 4.8,
//     realeaseDate: "14/03/2024",
//     developmente: "Neon Studios",
//     tag:'RPG',
//     price: 59.99,
//     newPrice: 49.99,
//     descontPrice: 30,
//     id: 1
//   },
//   {
//     name: 'Cyber Legends: Neon City',
//     description: "Mergulhe em uma metrópole cyberpunk futurista repleta de aventuras e perigos. Escolha seu caminho em um mundo de tecnologia e conspiração.",
//     image: "https://images.unsplash.com/photo-1545579003-84eeef98a485?w=800&q=80",
//     avaliationGame: 3.7,
//     realeaseDate: "19/07/2023",
//     developmente: "Sony estudios",
//     tag:'Animação',
//     price: 270,
//     newPrice: 199.99,
//     descontPrice: 26,
//     id: 2
//   },
//     {
//     name: 'Cyber Legends: Neon City',
//     description: "Mergulhe em uma metrópole cyberpunk futurista repleta de aventuras e perigos. Escolha seu caminho em um mundo de tecnologia e conspiração.",
//     image: "https://images.unsplash.com/photo-1417716226287-2f8cd2e80274?w=800&q=80",
//     avaliationGame: 4.5,
//     realeaseDate: "19/07/2023",
//     developmente: "Sony estudios",
//     tag:"Ação",
//     price: 270,
//     newPrice: 199.99,
//     descontPrice: 26,
//     id: 3
//   },
//       {
//     name: 'Cyber Legends: Neon City',
//     description: "Mergulhe em uma metrópole cyberpunk futurista repleta de aventuras e perigos. Escolha seu caminho em um mundo de tecnologia e conspiração.",
//     image: "https://images.unsplash.com/photo-1417716226287-2f8cd2e80274?w=800&q=80",
//     avaliationGame: 4.5,
//     realeaseDate: "19/07/2023",
//     developmente: "Sony estudios",
//     tag:"Ação",
//     price: 270,
//     newPrice: 199.99,
//     descontPrice: 26,
//     id: 4
//   },
//   {
//     name: "The Witcher 3: Wild Hunt" ,
//     description: "Você é Geralt de Rívia, mercenário matador de monstros. Você está em um continente devastado pela guerra e infestado de monstros para você explorar à vontade. Sua tarefa é encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo.",
//     image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000033071/3f7ee6aa3482b514bd443e116022b038a9728f017916ed37da3f09f731a7d5f2",
//     avaliationGame: 5.0,
//     realeaseDate: "18/05/2015",
//     developmente: "CD PROJEKT RED",
//     tag:"RPG",
//     price: 49.99,
//     newPrice: 39.99,
//     descontPrice: 21,
//     id: 5
//   }
// ]

export type Props = {
  jogos: Game[]
}

const Loja = ({ jogos }: Props) =>  (
  <>
    <HeaderLoja />
    <Carrousel />
    <Categorias />
    <ListaDeJogos jogos={jogos} />
    <Footer />
  </>
)


export default Loja