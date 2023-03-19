"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable1678823797273 = void 0;
const typeorm_1 = require("typeorm");
class CreateTable1678823797273 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "user_id",
                    type: "varchar",
                    isPrimary: true,
                    isNullable: false,
                    length: "50",
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "username",
                    type: "varchar",
                    length: "50",
                    isNullable: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isNullable: false,
                    default: "current_timestamp",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: false,
                    default: "current_timestamp",
                },
            ],
        }));
        await queryRunner.createIndex("users", new typeorm_1.TableIndex({
            name: "idx_user_id",
            columnNames: ["user_id"],
            isUnique: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users", true, true, true);
    }
}
exports.CreateTable1678823797273 = CreateTable1678823797273;
