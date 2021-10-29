import { Migration } from '@mikro-orm/migrations';

export class Migration20211029074049 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `post` (`id` int unsigned not null auto_increment primary key, `title` text not null, `created_at` datetime not null, `updated_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
  }

}
