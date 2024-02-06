import { Model } from "sequelize";

export default class tbl_members extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        m_username: {
          type: DataTypes.STRING(15),
          allowNull: false,
          primaryKey: true,
        },
        m_password: {
          type: DataTypes.STRING(125),
          allowNull: false,
        },
        m_realname: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        m_tel: {
          type: DataTypes.STRING(15),
          allowNull: true,
        },
        m_role: {
          type: DataTypes.STRING(5),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_members",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "m_username" }],
          },
        ],
      }
    );
  }
}
