module.exports = (sequelize, dataTypes) => {
  let alias = "Review";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },
    user_id: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    comment: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    rating: { //no se si es la traduccion mas idonea
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };

  let Review = sequelize.define(alias, cols, config);

  Review.associate = (models) => {
    Review.belongsTo(models.Product, {
      as: "product",
      foreingKey: product_id,
    });
  };

  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      as: "user",
      foreingKey: "user_id",
    });
  };
  return Review;
};
