export type DietaryTag = 'V' | 'VG' | 'GF' | 'DF' | 'NF';

export type MenuCategoryId =
  | 'appetizers'
  | 'tacos'
  | 'burgers'
  | 'sandwiches'
  | 'soups'
  | 'drinks';

export type DrinkType =
  | 'cocktail'
  | 'beer'
  | 'wine'
  | 'na'
  | 'coffee'
  | 'other';

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  sortOrder: number;
};

export type Money = {
  amount: number; // store as cents
  currency: 'USD';
};

export type MenuItemImage = {
  src: string; // URL or imported asset string
  alt: string;
  aspect?: '1:1' | '4:3' | '16:9';
};

export type MenuItem = {
  id: string;
  categoryId: MenuCategoryId;
  name: string;
  description: string;
  price: Money;
  tags?: DietaryTag[];
  allergens?: string[];
  spicy?: 0 | 1 | 2 | 3;
  featured?: boolean;
  image?: MenuItemImage;
  drinkType?: DrinkType; // only used when categoryId === "drinks"
};

export type Special = {
  id: string;
  name: string;
  description?: string;
  price?: Money;
  // 0=Sun ... 6=Sat
  days?: number[];
  startTime?: string; // "16:00"
  endTime?: string; // "18:00"
};
