const calculateDiscountedPrice = (products, discount) => {
    // function takes an array of products and a discount as arguments 
    // products are an array of objects that contain the name and price of the product
    // discount is a number between 0 and 1
    let discountedProducts = [] // declaring new array
    products.forEach(product => {   
        // for each product in products array, a new discounted product is created with discounted price and then added to the discountedProducts array
        let discountedProduct = {
        ...product,
        price: product.price * (1 - discount)
        }
        discountedProducts.push(discountedProduct)
    });
    console.log(JSON.stringify(products))
    return discountedProducts   
       
}

const calculateTotalPrice = (products) => {
    // function takes an array of products 
    // products are an array of objects that contain the name and price of the product
    let totalPrice = 0 // declaring total price
    products.forEach(product =>{
        totalPrice += product.price // sum of price of every product in the array
    })
    return totalPrice
}

const products = [{
    name: "banana",
    price: 2.40
},{
    name: "apple",
    price: 1.90
},{
    name: "orange",
    price: 2.50
},{
    name: "kiwi",
    price: 3.30
}]

console.log(JSON.stringify(calculateDiscountedPrice(products,0.1)))
console.log(calculateTotalPrice(products))