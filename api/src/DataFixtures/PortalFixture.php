<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class PortalFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        for ($nbrPortals=0; $nbrPortals < 13 ; $nbrPortals++) {

            $garden = $this->getReference('garden_' . $faker->numberBetween(0, 17));

            $pool = new \App\Entity\Portal();
            $pool->setName('Portail');
            $pool->setPresenceSensor(mt_rand(0, 1));
            $pool->setStatus(mt_rand(0, 1));
            $pool->setGarden($garden);

            $manager->persist($pool);

        }

        $manager->flush();
    }
}