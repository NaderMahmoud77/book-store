import { Ratings } from "../components/Rating/rating";

export let featureOnBook = [
  {
    id: 44,
    title: "Great Travel At Desert",
    author: "Sanchit Howdy",
    image: process.env.PUBLIC_URL + "/images/FeatuerOnBook/product-item1.jpg",
    rating: <Ratings value={4} />,
    price: "55",
    offerPrice: "45",
  },
  {
    id: 45,
    title: "Inspirational Book Life",
    author: "Sanchit Howdy",
    image: process.env.PUBLIC_URL + "/images/FeatuerOnBook/product-item2.jpg",
    rating: <Ratings value={5} />,
    price: "85",
    offerPrice: "75",
  },
  {
    id: 46,
    title: "Once Upon A Time",
    author: "Kline Marry",
    image: process.env.PUBLIC_URL + "/images/FeatuerOnBook/product-item3.jpg",
    rating: <Ratings value={5} />,
    price: "40",
    offerPrice: "30",
  },
  {
    id: 47,
    title: "The Lady Beauty Scarlett",
    author: "Arthur Doyle",
    image: process.env.PUBLIC_URL + "/images/FeatuerOnBook/tab-item7.jpg",
    rating: <Ratings value={5} />,
    price: "60",
    offerPrice: "50",
  },
];
