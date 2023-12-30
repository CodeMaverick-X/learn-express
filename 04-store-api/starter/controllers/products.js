const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const { name, featured, rating, comapny, sort, fields, page, limit, numericFilter } = req.query
    const queryObject = {}

    if (name) queryObject.name = { $regex: name, $options: 'i' }
    if (featured) queryObject.featured = featured
    if (rating) queryObject.rating = rating
    if (comapny) queryObject.comapny = comapny

    console.log(queryObject)

    let result = Product.find(queryObject)
    if (sort) {
        result.sort(sort.split(',').join(' '))
    } else {
        result.sort('createdAt')
    }
    if (fields) {
        result.select(fields.split(',').join(' '))
    }
    const limitNum = Number(limit) || 10
    const pageNum = Number(page) || 1
    const skip = (pageNum - 1 ) * limitNum
    result = result.skip(skip).limit(limitNum)
    'price>3,rating<4.5'

    if (numericFilter) {

        const NumericalFilterMApper = {
            '<': '$lt',
            '<=': '$lte',
            '>': '$gt',
            '>=': '$gte',
            '=': '$e'
        }
        const regEx = /\b(<|>|<=|>=|=)\b/g
        let filters = numericFilter.replace(regEx, (match) => `-${NumericalFilterMApper[match]}-`)

        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if (options.includes(field)) {
                 queryObject[field] = {[operator]: Number(value)}
            }  
        })
    }





    const products = await result

    res.status(200).json({ products })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'filtered product' })
}

module.exports = {
    getAllProducts, getAllProductsStatic
}