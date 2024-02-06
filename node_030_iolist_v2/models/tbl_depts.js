import { Model } from "sequelize";

export default class tbl_depts extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        d_code: {
          type: DataTypes.STRING(5),
          allowNull: false,
          primaryKey: true,
        },
        d_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        d_ceo: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        d_tel: {
          type: DataTypes.STRING(15),
          allowNull: true,
        },
        d_addr: {
          type: DataTypes.STRING(125),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_depts",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "d_code" }],
          },
        ],
      }
    );
  }
}
