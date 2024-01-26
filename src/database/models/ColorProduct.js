module.exports = (sequelize,dataTypes) =>{
    let alias='ColorProduct';
    let cols={
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        color_id: {
            type: dataTypes.INTEGER(10),
            // references: {
            //     model: 'Color',
            //     key: 'id',
            // }
        },
        product_id: {
            type: dataTypes.INTEGER(10),
            // references: {
            //     model: 'Product',
            //     key: 'id',
            // }
        },  
        stock: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        }
    };
    let config= {
        timestamps: false,
        deletedAt: false
    };

    const ColorProduct = sequelize.define(alias, cols, config); 

    ColorProduct.associate = (models)=>{
        ColorProduct.belongsTo(models.Color, { foreignKey: 'color_id' })
        ColorProduct.belongsTo(models.Product, { foreignKey: 'product_id' })
    }

    return ColorProduct
}