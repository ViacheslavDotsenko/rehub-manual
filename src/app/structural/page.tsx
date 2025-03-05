// components/RandomText.tsx
import React from "react";
import Link from "next/link";


const generateRandomText = (wordCount: number): string => {
  const words = [
    "apple", "banana", "cherry", "dog", "elephant", "fish", "grape", "house", "ice", "jungle",
    "kite", "lemon", "mountain", "night", "orange", "parrot", "quilt", "rose", "sun", "tree",
    "umbrella", "vulture", "water", "xenon", "yellow", "zebra", "quick", "lazy", "jump", "run",
    "swim", "sky", "cloud", "star", "moon", "space", "earth", "wind", "fire", "volcano", "river",
    "mountain", "desert", "forest", "ocean", "lake", "pond", "city", "village", "suburb", "road",
    "car", "bus", "bicycle", "train", "plane", "boat", "rocket", "spacecraft", "computer", "phone",
    "television", "radio", "microwave", "refrigerator", "fan", "light", "lamp", "book", "paper",
    "pen", "pencil", "marker", "notebook", "chalk", "eraser", "board", "window", "door", "wall",
    "floor", "ceiling", "roof", "mirror", "picture", "frame", "clock", "watch", "calendar", "map",
    "computer", "internet", "website", "application", "software", "programming", "coding", "algorithm",
    "data", "information", "network", "server", "database", "cloud", "AI", "machine", "learning", "robot"
  ];

  let result = "";
  for (let i = 0; i < wordCount; i++) {
    result += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return result;
};

const Structural: React.FC = () => {
  const randomText = generateRandomText(300); // Генеруємо 400 слів

  return (
    <div className="flex-1 max-w-7xl mr-auto ml-auto">
      <Link href="/">Random Text page Structural</Link>
      <p>{randomText}</p>
    </div>
  );
};

export default Structural;
