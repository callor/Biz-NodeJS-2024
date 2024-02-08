import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_product from  "./tbl_product.js";

export default function initModels(sequelize) {
  const tbl_product = _tbl_product.init(sequelize, DataTypes);


  return {
    tbl_product,
  };
}
