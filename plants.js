export const plantCategories = [
  {
    name: 'Tropical Treasures',
    description: 'Bold, leafy friends that turn any room into a getaway.',
    plants: [
      { id: 'monstera-deliciosa', name: 'Monstera Deliciosa', price: 28, image: 'https://images.unsplash.com/photo-1614594575920-a0f6c1f3a5b6?auto=format&fit=crop&w=700&q=80' },
      { id: 'bird-of-paradise', name: 'Bird of Paradise', price: 42, image: 'https://images.unsplash.com/photo-1614594575920-a0f6c1f3a5b6?auto=format&fit=crop&w=700&q=80' },
      { id: 'calathea-orbifolia', name: 'Calathea Orbifolia', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80' },
      { id: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', price: 36, image: 'https://images.unsplash.com/photo-1616761914813-99e7dbb2b50e?auto=format&fit=crop&w=700&q=80' },
      { id: 'banana-plant', name: 'Banana Plant', price: 31, image: 'https://images.unsplash.com/photo-1597055181300-b5c5b5f9a9dc?auto=format&fit=crop&w=700&q=80' },
      { id: 'prayer-plant', name: 'Prayer Plant', price: 19, image: 'https://images.unsplash.com/photo-1603436326446-7d7a4f7f6d2e?auto=format&fit=crop&w=700&q=80' },
    ],
  },
  {
    name: 'Easy Care Club',
    description: 'Low-fuss greenery for busy lives and beginner plant parents.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 22, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2bb3?auto=format&fit=crop&w=700&q=80' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 25, image: 'https://images.unsplash.com/photo-1614594575920-a0f6c1f3a5b6?auto=format&fit=crop&w=700&q=80' },
      { id: 'pothos-golden', name: 'Golden Pothos', price: 16, image: 'https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=700&q=80' },
      { id: 'cast-iron-plant', name: 'Cast Iron Plant', price: 27, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
      { id: 'jade-plant', name: 'Jade Plant', price: 18, image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80' },
      { id: 'spider-plant', name: 'Spider Plant', price: 14, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80' },
    ],
  },
  {
    name: 'Small Space Garden',
    description: 'Tiny pots and trailing beauties made for shelves and desks.',
    plants: [
      { id: 'string-of-pearls', name: 'String of Pearls', price: 21, image: 'https://images.unsplash.com/photo-1601986322790-8a7f33a0f1b1?auto=format&fit=crop&w=700&q=80' },
      { id: 'peperomia', name: 'Peperomia', price: 17, image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=700&q=80' },
      { id: 'pilea', name: 'Pilea', price: 20, image: 'https://images.unsplash.com/photo-1614594575920-a0f6c1f3a5b6?auto=format&fit=crop&w=700&q=80' },
      { id: 'air-plant', name: 'Air Plant', price: 12, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
      { id: 'mini-cactus', name: 'Mini Cactus', price: 11, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80' },
      { id: 'fittonia', name: 'Fittonia', price: 15, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=700&q=80' },
    ],
  },
];

export const allPlants = plantCategories.flatMap((category) => category.plants);
