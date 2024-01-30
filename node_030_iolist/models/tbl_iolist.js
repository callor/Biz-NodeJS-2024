import { Model } from "sequelize";

export default class tbl_iolist extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        io_seq: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        io_date: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        io_time: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        io_pcode: {
          type: DataTypes.STRING(6),
          allowNull: false,
          references: {
            model: "tbl_products",
            key: "p_code",
          },
        },
        io_dcode: {
          type: DataTypes.STRING(5),
          allowNull: false,
          references: {
            model: "tbl_depts",
            key: "d_code",
          },
        },
        io_div: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
        io_quan: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        io_iprice: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        io_oprice: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_iolist",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "io_seq" }],
          },
          {
            name: "FK_PCODE",
            using: "BTREE",
            fields: [{ name: "io_pcode" }],
          },
          {
            name: "FK_DCODE",
            using: "BTREE",
            fields: [{ name: "io_dcode" }],
          },
        ],
      }
    );
  }
}
