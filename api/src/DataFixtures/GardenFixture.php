<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\DataFixtures\UserFixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class GardenFixture extends Fixture implements DependentFixtureInterface
{
    public const GARDEN1_REFERENCE = 'garden1_';
    public const GARDEN2_REFERENCE = 'garden2_';
    public const GARDEN3_REFERENCE = 'garden3_';

    public function load(ObjectManager $manager): void
    {
        $path = "C:/xampp/htdocs/EasyGardenV1/api/src/DataFixtures/VillesFrance.json";
        $Json = file_get_contents($path);
        $villes = json_decode($Json, true);

        // Create Gardens for Manu
        // GARDEN Saint-Savin
        $user1 = $this->getReference(userFixture::USER1_REFERENCE);
        $gardenUser1 = new \App\Entity\Garden();
        $gardenUser1->setName('Saint-Savin');
        $gardenUser1->setUser($user1);
        $manager->persist($gardenUser1);
        $this->addReference(self::GARDEN1_REFERENCE , $gardenUser1);

        // GARDEN Cazaux
        $user1 = $this->getReference(userFixture::USER1_REFERENCE);
        $gardenUser2 = new \App\Entity\Garden();
        $gardenUser2->setName('Cazaux');
        $gardenUser2->setUser($user1);
        $manager->persist($gardenUser2);
        $this->addReference(self::GARDEN2_REFERENCE , $gardenUser2);

        // Create Garden for Sofiane
        // GARDEN fargues St Hilaire
        $user2 = $this->getReference(userFixture::USER2_REFERENCE);
        $gardenUser3 = new \App\Entity\Garden();
        $gardenUser3->setName('Fargues St Hilaire');
        $gardenUser3->setUser($user2);
        $manager->persist($gardenUser3);
        $this->addReference(self::GARDEN3_REFERENCE , $gardenUser3);

        // Create Other Gardens
        $faker = Factory::create('fr_FR');
        for ($nbrGardens=0; $nbrGardens < 35; $nbrGardens++) {
            $user = $this->getReference('user_'.$faker->numberBetween(2, 20));
            $garden = new \App\Entity\Garden();
            $garden->setName($villes[array_rand($villes, 1)]['Nom_commune']);
            $garden->setUser($user);
            $manager->persist($garden);
            $this->addReference('garden_'.$nbrGardens , $garden);
            $manager->persist($garden);
        }
        $manager->flush();
    }

    public function getDependencies() 
    {
        return [
            UserFixture::class
        ];
    }
}