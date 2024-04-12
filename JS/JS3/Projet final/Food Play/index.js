// Collection de produits
let productsCollection = [
  {
    _id: '3850104053221',
    product_name: 'Tomatenmark',
  },
  {
    _id: '0041000120039',
    product_name: 'Pulpe de tomate',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/004/100/012/0039/front_en.3.200.jpg',
  },
  {
    _id: '0042010348901',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/004/201/034/8901/front_en.3.200.jpg',
  },
  {
    _id: '0044152146346',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/004/415/214/6346/front_en.3.200.jpg',
  },
  {
    _id: '8904293703414',
    product_name: 'Tomato Desi Local',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/890/429/370/3414/front_en.3.200.jpg',
  },
  {
    _id: '5059697682940',
    product_name: 'Tomato, Mascarpone and Basil Risotto',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/505/969/768/2940/front_en.3.200.jpg',
  },
  {
    _id: '03337172',
    product_name: 'Tomatoes',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/03337172/front_en.3.200.jpg',
  },
  {
    _id: '8426756050137',
    product_name: 'Bio Pflaumen Tomaten',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/842/675/605/0137/front_en.3.200.jpg',
  },
  {
    _id: '5010525179933',
    product_name: 'Tomato, Feta & Caramelized Onion Quice',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/501/052/517/9933/front_en.3.200.jpg',
  },
  {
    _id: '7035620048814',
    product_name: 'Hakkede tomater - Spicy chili',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/703/562/004/8814/front_en.3.200.jpg',
  },
  {
    _id: '0022314450739',
    product_name: 'Palets de tomate de provence surgelés',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/002/231/445/0739/front_fr.3.200.jpg',
  },
  {
    _id: '8008857010038',
    product_name: 'Polpa Pomodoro',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/800/885/701/0038/front_fr.3.200.jpg',
  },
  {
    _id: '7340083469619',
    product_name: 'ekologiska Passerade tomater',
  },
  {
    _id: '4311527008698',
    product_name: 'Bio Rispentomaten',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/431/152/700/8698/front_en.5.200.jpg',
  },
  {
    _id: '8850511321055',
    product_name: '',
  },
  {
    _id: '8858790900183',
    product_name: 'ปลากระป๋อง ไฮเชฟ',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/885/879/090/0183/front_th.3.200.jpg',
  },
  {
    _id: '8857122646959',
    product_name: 'มะเขือเทศเชอร์รี่ พร้อมพริกเกลือ - 110 g',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/885/712/264/6959/front_th.5.200.jpg',
  },
  {
    _id: '43084499',
    product_name: 'pasta sauce',
  },
  {
    _id: '0072940100942',
    product_name: 'Enchilada Sauce',
    image_front_small_url:
      'https://images.openfoodfacts.org/images/products/007/294/010/0942/front_en.6.200.jpg',
  },
  {
    _id: '0057000039844',
    product_name: 'heinz',
  },
]

function getName(product) {
  let productName = document.createElement('p')
  productName.innerText = product.product_name
  return productName
}
function getImg(product) {
  let productImg = document.createElement('img')
  productImg.src = product.image_front_small_url
  productImg.alt = ''
  return productImg
}

function displayProducts() {
  let tbody = document.querySelector('.js-tbody')
  productsCollection.forEach((product) => {
    let trow = document.createElement('trow')
    let productName = getName(product)
    let productImg = getImg(product)
    trow.appendChild(productName)
    trow.appendChild(productImg)
    tbody.appendChild(trow)
  })
}

function openModale() {
  let modale = document.querySelector('.js-modale-container')
  modale.style.display = 'block'
}

function closeModale() {
  let modale = document.querySelector('.js-modale-container')
  modale.style.display = 'none'
}
// On loaded DOM
document.addEventListener('DOMContentLoaded', function () {
  let addButton = document.querySelector('.js-add-product')
  addButton.addEventListener('click', openModale)
  let closeModaleButton = document.querySelector('.js-close-button')
  closeModaleButton.addEventListener('click', closeModale)

  displayProducts()
})
