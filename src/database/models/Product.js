module.exports = (sequelize,dataTypes) =>{
    let alias='Product';
    let cols={
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description_short:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        description_long:{
            type: dataTypes.TEXT('medium'),
            allowNull: false
        },
        status:{
            type: dataTypes.INTEGER(2),
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        category_id:{
            type: dataTypes.INTEGER(10),
            allowNull:false,
        },
        ingredients:{
            type: dataTypes.STRING(255),
            allowNull: true
        },
        price:{
            type: dataTypes.BIGINT,
            allowNull: false
        },
        final_price:{
            type: dataTypes.BIGINT,
            allowNull: false
        },
        discount:{
            type: dataTypes.INTEGER(10),
            allowNull: true
        },
        brand_id:{
            type: dataTypes.INTEGER(10),
            allowNull:true,
        },
        created_at: dataTypes.TIMESTAMP,
        updated_at: dataTypes.TIMESTAMP,
    };
    let config= {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };

    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsTo(models.Category,{
            as:'category',
            foreignKey:'category_id'
        })
        Product.belongsTo(models.Brand,{
            as:'brand',
            foreignKey:'brand_id'
        })
        Product.belongsToMany(models.Color,{
            as:'colors',
            through: 'Color_Product',
            foreignKey: 'product_id',
            otherKey: 'color_id',
            timestamps: false   
        })
        Product.hasMany(models.ColorProduct,{
            foreignKey: 'product_id',
            onDelete: 'CASCADE'
        })
    }

    return Product
}