const getAllProductsStatic = async (req, res) => {
    throw new Error(' testing error async')
    res.status(200).json({msg: 'products testing route'})
}

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'filtered product'})
}

module.exports = {
    getAllProducts, getAllProductsStatic
}