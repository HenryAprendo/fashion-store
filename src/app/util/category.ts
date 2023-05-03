// informacion de categoria

export interface CategoryList {
  path: string;
  category: number;
  name: string;
}

export const listCategory: CategoryList[] = [
  {
    path: 'category',
    category: 0,
    name: 'electronics'
  },
  {
    path: 'category',
    category: 1,
    name: 'jewelery'
  },
  {
    path: 'category',
    category: 2,
    name: "men's clothing"
  },
  {
    path: 'category',
    category: 3,
    name: "women's clothing"
  },
];
