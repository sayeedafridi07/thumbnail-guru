export interface Category {
  id: string;
  title: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    id: "youtube",
    title: "YouTube",
    imageUrl: "https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "instagram",
    title: "Instagram",
    imageUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "podcast",
    title: "Podcast",
    imageUrl: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "twitch",
    title: "Twitch",
    imageUrl: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "blog",
    title: "Blog",
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "social",
    title: "Social Media",
    imageUrl: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "presentation",
    title: "Presentation",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default categories;