

export interface ResidenceListProps {
  id: number,
  title: string,
  city: string,
  description: string,
  typeOfResidence: string,
  price: number,
  room: number,
  area: number
}


export const ResidenceList: ResidenceListProps[] = [
  {
    id: 1,
    title: "Hagaesplanaden 80, vån 9",
    city: "Stockholm",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente.",
    typeOfResidence: "apartment",
    price: 1000000,
    room: 2,
    area: 32,
  },
  {
    id: 2,
    title: "Norra Stationsgatan 54",
    city: "Stockholm",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente.",
    typeOfResidence: "house",
    price: 3500000,
    room: 2,
    area: 34,
  },
  {
    id: 3,
    title: "Falugatan 19",
    city: "Göteborg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ipsum magni magnam rerum facere architecto autem hic, dolor at optio veniam amet voluptas laboriosam explicabo blanditiis sapiente excepturi error inventore, libero sequi. Illum inventore, quod eius repudiandae doloremque perferendis facilis sit qui consectetur quos vitae cupiditate ipsam earum, accusamus eum?",
    typeOfResidence: "apartment",
    price: 1000000,
    room: 1,
    area: 40,
  },
  {
    id: 4,
    title: "Sankt Eriksplan 5, 2tr",
    city: "Stockholm",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente.",
    typeOfResidence: "apartment",
    price: 6000000,
    room: 3,
    area: 68,
  },
  {
    id: 5,
    title: "Tulegatan 42, 5tr",
    city: "Göteborg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente.",
    typeOfResidence: "apartment",
    price: 3000000,
    room: 2,
    area: 52,
  },
]