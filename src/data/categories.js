import { nbProductsInCategory } from '../utils/nbProductsInCategory'

export const categories = [
  {
    id: 1,
    category: 'Phones',
    imgUrl: 'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/10/iphone-12-pro-max-frandroid-2020.png?resize=180,180',
    nbProducts: nbProductsInCategory('phones')
  }, {
    id: 2,
    category: 'Computers',
    imgUrl: 'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/10/iphone-12-pro-max-frandroid-2020.png?resize=180,180',
    nbProducts: nbProductsInCategory('computers')
  },
  {
    id: 3,
    category: 'Accessories',
    imgUrl: 'imac-24.png',
    nbProducts: nbProductsInCategory('accessories')
  }
]