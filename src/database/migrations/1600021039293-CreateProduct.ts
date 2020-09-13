import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateProduct1600021039293 implements MigrationInterface {
  name = 'CreateProduct1600021039293';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `products` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `amount` int NOT NULL, `price` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `products`');
  }
}
