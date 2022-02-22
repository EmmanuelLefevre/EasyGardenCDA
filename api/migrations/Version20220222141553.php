<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220222141553 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE garden (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, name VARCHAR(45) DEFAULT NULL, INDEX IDX_3C0918EAA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lawnmower (id INT AUTO_INCREMENT NOT NULL, garden_id INT DEFAULT NULL, name VARCHAR(45) NOT NULL, battery_sensor VARCHAR(12) NOT NULL, status TINYINT(1) NOT NULL, INDEX IDX_AEF6E33A39F3B087 (garden_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lightning (id INT AUTO_INCREMENT NOT NULL, garden_id INT DEFAULT NULL, name VARCHAR(45) NOT NULL, status TINYINT(1) NOT NULL, INDEX IDX_8149A69039F3B087 (garden_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pool (id INT AUTO_INCREMENT NOT NULL, garden_id INT DEFAULT NULL, name VARCHAR(45) NOT NULL, status TINYINT(1) NOT NULL, INDEX IDX_AF91A98639F3B087 (garden_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE portal (id INT AUTO_INCREMENT NOT NULL, garden_id INT DEFAULT NULL, name VARCHAR(45) NOT NULL, presence_sensor TINYINT(1) NOT NULL, status TINYINT(1) NOT NULL, INDEX IDX_BAE93F039F3B087 (garden_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', first_name VARCHAR(45) NOT NULL, last_name VARCHAR(45) NOT NULL, password VARCHAR(255) NOT NULL, pseudo VARCHAR(45) NOT NULL, phone_number VARCHAR(20) NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE watering (id INT AUTO_INCREMENT NOT NULL, garden_id INT DEFAULT NULL, name VARCHAR(45) NOT NULL, flow_sensor VARCHAR(12) NOT NULL, pressure_sensor VARCHAR(12) NOT NULL, status TINYINT(1) NOT NULL, INDEX IDX_818F9D3139F3B087 (garden_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE garden ADD CONSTRAINT FK_3C0918EAA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE lawnmower ADD CONSTRAINT FK_AEF6E33A39F3B087 FOREIGN KEY (garden_id) REFERENCES garden (id)');
        $this->addSql('ALTER TABLE lightning ADD CONSTRAINT FK_8149A69039F3B087 FOREIGN KEY (garden_id) REFERENCES garden (id)');
        $this->addSql('ALTER TABLE pool ADD CONSTRAINT FK_AF91A98639F3B087 FOREIGN KEY (garden_id) REFERENCES garden (id)');
        $this->addSql('ALTER TABLE portal ADD CONSTRAINT FK_BAE93F039F3B087 FOREIGN KEY (garden_id) REFERENCES garden (id)');
        $this->addSql('ALTER TABLE watering ADD CONSTRAINT FK_818F9D3139F3B087 FOREIGN KEY (garden_id) REFERENCES garden (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lawnmower DROP FOREIGN KEY FK_AEF6E33A39F3B087');
        $this->addSql('ALTER TABLE lightning DROP FOREIGN KEY FK_8149A69039F3B087');
        $this->addSql('ALTER TABLE pool DROP FOREIGN KEY FK_AF91A98639F3B087');
        $this->addSql('ALTER TABLE portal DROP FOREIGN KEY FK_BAE93F039F3B087');
        $this->addSql('ALTER TABLE watering DROP FOREIGN KEY FK_818F9D3139F3B087');
        $this->addSql('ALTER TABLE garden DROP FOREIGN KEY FK_3C0918EAA76ED395');
        $this->addSql('DROP TABLE garden');
        $this->addSql('DROP TABLE lawnmower');
        $this->addSql('DROP TABLE lightning');
        $this->addSql('DROP TABLE pool');
        $this->addSql('DROP TABLE portal');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE watering');
    }
}
