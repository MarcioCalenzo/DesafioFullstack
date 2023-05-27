import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableContact1685209657555 implements MigrationInterface {
    name = 'AlterTableContact1685209657555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isActive"`);
    }

}
