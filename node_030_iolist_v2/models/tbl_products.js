import { Model } from "sequelize";

export default class tbl_products extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        p_code: {
          type: DataTypes.STRING(6),
          allowNull: false,
          primaryKey: true,
        },
        p_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        p_item: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        p_std: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        p_comp: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        p_iprice: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        p_oprice: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        // 저장할 이미지 이름
        p_image_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        // 원본 이미지 이름
        p_image_origin_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_products",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "p_code" }],
          },
        ],
      }
    );
  }
}
