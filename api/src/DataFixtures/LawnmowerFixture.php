<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class LawnmowerFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        // Create Lawnmowers for Manu
        //LAWNMOWER Saint-Savin
        $gardenUser1 = $this->getReference(gardenFixture::GARDEN1_REFERENCE);
        $lawnmower1 = new \App\Entity\Lawnmower();
        $lawnmower1->setName('Robert');
        $lawnmower1->setBatterySensor(random_int(0, 100)."%");
        $lawnmower1->setStatus(mt_rand(0, 1));
        $lawnmower1->setGarden($gardenUser1);
        $manager->persist($lawnmower1);

        // LAWNMOWER Cazaux
        $gardenUser2 = $this->getReference(gardenFixture::GARDEN2_REFERENCE);
        $lawnmower2 = new \App\Entity\Lawnmower();
        $lawnmower2->setName('Toro');
        $lawnmower2->setBatterySensor(random_int(0, 100)."%");
        $lawnmower2->setStatus(mt_rand(0, 1));
        $lawnmower2->setGarden($gardenUser2);
        $manager->persist($lawnmower2);

        // Create Lawnmower for Sofiane
        // LAWNMOWER Fargues St Hilaire
        $gardenUser3 = $this->getReference(gardenFixture::GARDEN3_REFERENCE);
        $lawnmower3 = new \App\Entity\Lawnmower();
        $lawnmower3->setName('Massey Fergusson');
        $lawnmower3->setBatterySensor(random_int(0, 100)."%");
        $lawnmower3->setStatus(mt_rand(0, 1));
        $lawnmower3->setGarden($gardenUser3);
        $manager->persist($lawnmower3);

        // Create Other Lawnmowers
        $faker = Factory::create('fr_FR');
        for ($nbrLawnmowers=0; $nbrLawnmowers < 10; $nbrLawnmowers++) {
            $garden = $this->getReference('garden_'.$faker->numberBetween(2, 20));
            $lawnmower = new \App\Entity\Lawnmower();
            $lawnmower->setName('Tondeuse');
            $lawnmower->setBatterySensor(random_int(0, 100)."%");
            $lawnmower->setStatus(mt_rand(0, 1));
            $lawnmower->setGarden($garden);
            $manager->persist($lawnmower);
        }
        $manager->flush();
    }

    public function getDependencies() 
    {
        return [
            GardenFixture::class
        ];
    }
}