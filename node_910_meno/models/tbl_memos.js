import { Model } from "sequelize";

export default class tbl_memos extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        m_seq: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        m_author: {
          type: DataTypes.STRING(25),
          allowNull: false,
        },
        m_date: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        m_time: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        m_subject: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        m_memo: {
          type: DataTypes.STRING(400),
          allowNull: false,
        },
        m_image: {
          type: DataTypes.STRING(125),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_memos",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "m_seq" }],
          },
        ],
      }
    );
  }
}
