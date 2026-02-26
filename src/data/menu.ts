import type { MenuCategory, MenuItem, Special } from '../types/menu';
import { usd } from '../utils/money';

export const CATEGORIES: MenuCategory[] = [
  { id: 'appetizers', label: 'Appetizers', sortOrder: 1 },
  { id: 'tacos', label: 'Tacos', sortOrder: 2 },
  { id: 'burgers', label: 'Burgers', sortOrder: 3 },
  { id: 'drinks', label: 'Drinks', sortOrder: 4 },
];

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: 'app-chips-salsa',
    categoryId: 'appetizers',
    name: 'Chips & Salsa',
    description: 'House tortilla chips, roasted tomato salsa, lime.',
    price: usd(700),
    tags: ['V', 'GF', 'DF'],
    image: { src: '/images/chips-salsa.jpg', alt: 'Chips and salsa' },
  },
  {
    id: 'app-queso',
    categoryId: 'appetizers',
    name: 'Smoked Queso',
    description: 'White cheddar queso, pico, pickled jalapeño, tortilla chips.',
    price: usd(900),
    tags: ['V', 'GF'],
    allergens: ['dairy'],
    spicy: 1,
    featured: true,
    image: { src: '/images/nachos.jpg', alt: 'Nachos' },
  },
  {
    id: 'app-fries',
    categoryId: 'appetizers',
    name: 'French Fries',
    description: 'French fried potatoes.',
    price: usd(550),
    tags: ['V'],
    allergens: ['dairy'],
    spicy: 1,
    image: { src: '/images/fries.jpg', alt: 'French Fries' },
  },
  {
    id: 'app-street-corn',
    categoryId: 'appetizers',
    name: 'Street Corn Cup',
    description: 'Charred corn, cotija, lime crema, chili dust.',
    price: usd(850),
    tags: ['V', 'GF'],
    allergens: ['dairy'],
    spicy: 1,
    image: { src: '/images/street-corn.jpg', alt: 'Nachos' },
  },

  // Tacos
  {
    id: 'taco-al-pastor',
    categoryId: 'tacos',
    name: 'Al Pastor Tacos (3)',
    description: 'Pork al pastor, pineapple, onion, cilantro, salsa roja.',
    price: usd(1300),
    spicy: 1,
  },
  {
    id: 'taco-birria',
    categoryId: 'tacos',
    name: 'Birria Tacos (3)',
    description: 'Slow-braised beef, Oaxaca cheese, consomé for dipping.',
    price: usd(1500),
    allergens: ['dairy'],
    spicy: 2,
    featured: true,
    image: { src: '/images/birria-tacos.jpg', alt: 'Birria Tacos' },
  },
  {
    id: 'taco-cauliflower',
    categoryId: 'tacos',
    name: 'Crispy Cauliflower Tacos (3)',
    description: 'Crispy cauliflower, slaw, avocado crema, salsa verde.',
    price: usd(1200),
    tags: ['V'],
    allergens: ['dairy'],
    spicy: 1,
  },

  // Burgers
  {
    id: 'burger-classic',
    categoryId: 'burgers',
    name: 'Classic Smash Burger',
    description:
      'Double smash patty, american cheese, lettuce, tomato, house sauce.',
    price: usd(1400),
    allergens: ['dairy', 'gluten'],
    featured: true,
    image: { src: '/images/smash-burger.jpg', alt: 'Classic Smash Burger' },
  },
  {
    id: 'burger-chicken',
    categoryId: 'burgers',
    name: 'Spicy Chicken Sandwich',
    description: 'Pepper jack, jalapeño, crispy onions, spicy ranch, pickles.',
    price: usd(1550),
    allergens: ['dairy', 'gluten', 'egg'],
    spicy: 2,
    image: { src: '/images/spicy-chicken.jpg', alt: 'Spicy Chicken Sandwich' },
  },
  {
    id: 'burger-veggie',
    categoryId: 'burgers',
    name: 'Black Bean Veggie Burger',
    description:
      'Black bean patty, pepper relish, lettuce, tomato, chipotle mayo.',
    price: usd(1350),
    tags: ['V'],
    allergens: ['gluten', 'egg'],
    spicy: 1,
    image: {
      src: '/images/veggie-burger.jpg',
      alt: 'Black Bean Veggie Burger',
    },
  },

  // Drinks
  {
    id: 'drink-mex-coke',
    categoryId: 'drinks',
    name: 'Mexican Coke',
    description: 'Classic glass-bottle cola.',
    price: usd(400),
    tags: ['V', 'GF', 'DF'],
  },
  {
    id: 'drink-agua-fresca',
    categoryId: 'drinks',
    name: 'Agua Fresca',
    description: 'Seasonal fruit, citrus, light sweetness.',
    price: usd(500),
    tags: ['V', 'VG', 'GF', 'DF'],
  },
  {
    id: 'drink-marg',
    categoryId: 'drinks',
    name: 'House Margarita',
    description: 'Tequila, lime, orange, salt (or tajín).',
    price: usd(1200),
    tags: ['V', 'GF', 'DF'],
    image: { src: '/images/margarita.jpg', alt: 'Margarita' },
  },
];

export const SPECIALS: Special[] = [
  {
    id: 'happy-hour',
    name: 'Happy Hour',
    description: '$2 off margaritas + $1 off tacos',
    days: [1, 2, 3, 4, 5], // Mon-Fri
    startTime: '16:00',
    endTime: '18:00',
  },
  {
    id: 'taco-tuesday',
    name: 'Taco Tuesday',
    description: 'Buy 2 tacos, get 1 free (select tacos).',
    days: [2], // Tue
  },
];
