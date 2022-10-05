import { nbProductsInCategory } from '../utils/nbProductsInCategory'

export const categories = [
  {
    id: 1,
    category: 'phone',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/07/03/19/26/iphone-2468714_1280.png',
    nbProducts: nbProductsInCategory('phone')
  }, {
    id: 2,
    category: 'computer',
    imgUrl: 'https://mahasoft.ma/wp-content/uploads/2014/10/computers.png',
    nbProducts: nbProductsInCategory('computer')
  },
  {
    id: 3,
    category: 'accessory',
    imgUrl: 'https://i.ebayimg.com/images/g/Jp8AAOSw9PxeU689/s-l300.png',
    nbProducts: nbProductsInCategory('accessory')
  },
  {
    id: 4,
    category: 'all',
    imgUrl: 'https://5.imimg.com/data5/TN/KK/GLADMIN-24522680/computers-sales-services-500x500.jpg',
    nbProducts: nbProductsInCategory('all')
  }
]