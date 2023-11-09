import instance from "./config";
const getProducts = (valueSearch) => {
    return instance.get('/products' + (valueSearch ? '?name_like=' + valueSearch : ''))
}
const getOneProduct = (id) => {
    return instance.get('/products/' + id)
}
const delteOneProduct = (id) => {
    return instance.delete('/products/' + id)
}
const addProduct = (product) => {
    return instance.post('/products', product)
}
const updateProduct = (product) => {
    return instance.put('/products/' + product.id, product)
}

export { getProducts, addProduct, updateProduct, getOneProduct, delteOneProduct }