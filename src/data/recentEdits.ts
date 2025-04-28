export interface Thumbnail {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
}

const recentEdits: Thumbnail[] = [
  {
    id: "1",
    title: "Summer Sale Promotion",
    imageUrl: "https://images.pexels.com/photos/5872347/pexels-photo-5872347.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Instagram",
    date: "2 hours ago"
  },
  {
    id: "2",
    title: "Tech Review Episode 45",
    imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "YouTube",
    date: "Yesterday"
  },
  {
    id: "3",
    title: "Weekly Podcast Cover",
    imageUrl: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Podcast",
    date: "2 days ago"
  },
  {
    id: "4",
    title: "Product Launch Event",
    imageUrl: "https://images.pexels.com/photos/8544979/pexels-photo-8544979.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Presentation",
    date: "3 days ago"
  },
  {
    id: "5",
    title: "Game Stream Highlight",
    imageUrl: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Twitch",
    date: "5 days ago"
  },
  {
    id: "6",
    title: "Fashion Collection",
    imageUrl: "https://images.pexels.com/photos/7147462/pexels-photo-7147462.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Social Media",
    date: "1 week ago"
  }
];

export default recentEdits;