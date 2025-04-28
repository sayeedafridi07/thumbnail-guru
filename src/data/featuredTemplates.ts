export interface Template {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  popular: boolean;
}

const featuredTemplates: Template[] = [
  {
    id: "1",
    title: "Modern Podcast Cover",
    description: "Clean, minimal design with bold typography for podcast covers",
    imageUrl: "https://images.pexels.com/photos/4065134/pexels-photo-4065134.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Podcast",
    popular: true
  },
  {
    id: "2",
    title: "YouTube Gaming Thumbnail",
    description: "Eye-catching template for gaming videos with high contrast",
    imageUrl: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "YouTube",
    popular: true
  },
  {
    id: "3",
    title: "Instagram Story Template",
    description: "Contemporary design with gradient backgrounds for stories",
    imageUrl: "https://images.pexels.com/photos/5076528/pexels-photo-5076528.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Instagram",
    popular: false
  },
  {
    id: "4",
    title: "Business Presentation",
    description: "Professional slides with clean layout for business presentations",
    imageUrl: "https://images.pexels.com/photos/5676679/pexels-photo-5676679.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Presentation",
    popular: true
  },
  {
    id: "5",
    title: "Social Media Quote",
    description: "Beautiful templates for sharing quotes on social platforms",
    imageUrl: "https://images.pexels.com/photos/4065134/pexels-photo-4065134.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Social Media",
    popular: false
  },
  {
    id: "6",
    title: "Product Showcase",
    description: "E-commerce product highlight templates with customizable elements",
    imageUrl: "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "E-commerce",
    popular: true
  }
];

export default featuredTemplates;