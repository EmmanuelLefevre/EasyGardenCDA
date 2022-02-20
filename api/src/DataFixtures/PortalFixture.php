<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class PortalFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        for ($nbrPortals=0; $nbrPortals < 13 ; $nbrPortals++) {

            // Get reference for garden
            $garden = $this->getReference('garden_'.$faker->numberBetween(2, 14));

            $pool = new \App\Entity\Portal();
            $pool->setName('Portail');
            $pool->setPresenceSensor(mt_rand(0, 1));
            $pool->setStatus(mt_rand(0, 1));
            $pool->setGarden($garden);

            $manager->persist($pool);

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