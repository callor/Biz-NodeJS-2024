import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_memos from  "./tbl_memos.js";

export default function initModels(sequelize) {
  const tbl_memos = _tbl_memos.init(sequelize, DataTypes);


  return {
    tbl_memos,
  };
}
