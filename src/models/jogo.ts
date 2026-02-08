class Game{
  name: string
  description: string
  image: string
  avaliationGame: number
  realeaseDate: string
  developmente: string
  tag: string
  price: number
  newPrice: number
  descontPrice: number
  id: number

  constructor( 
    name: string,
    description: string,
    image: string, 
    avaliationGame: number, 
    realeaseDate: string, 
    developmente: string, 
    tag: string, 
    price: number, 
    newPrice: number,
    descontPrice: number,
    id: number
) {
    this.name = name;
    this.description = description;
    this.image = image; 
    this.avaliationGame = avaliationGame; 
    this.realeaseDate = realeaseDate;
    this.developmente = developmente;
    this.tag = tag; 
    this.price = price ;
    this.newPrice = newPrice;
    this.descontPrice = descontPrice;
    this.id = id;
  }
}

export default Game