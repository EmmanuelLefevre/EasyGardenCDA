<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class LawnmowerFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        for ($nbrLawnmowers=0; $nbrLawnmowers < 8; $nbrLawnmowers++) {

            $garden = $this->getReference('garden_' . $faker->numberBetween(0, 17));

            $lawnmower = new \App\Entity\Lawnmower();
            $lawnmower->setName('Tondeuse');
            $lawnmower->setBatterySensor(random_int(0, 100)+"%");
            $lawnmower->setStatus(mt_rand(0, 1));
            $lawnmower->setGarden($garden);

            $manager->persist($lawnmower);

        }

        $manager->flush();
    }
}