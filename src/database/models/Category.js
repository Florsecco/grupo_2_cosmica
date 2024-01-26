module.exports = (sequelize,dataTypes) =>{
    let alias='Category';
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
        image:{
            type: dataTypes.STRING(100),
            allowNull: false
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

    const Category = sequelize.define(alias, cols, config); 

    Category.associate = function (models) {
        Category.hasMany(models.ColorCategory,{
            foreignKey: 'category_id',
            onDelete: 'CASCADE'
        })
        Category.hasMany(models.Product,{
            as:'products',
            foreignKey:'category_id'
        })
    }

    return Category
}