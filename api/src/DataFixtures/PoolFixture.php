<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class PoolFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $data = ['Jet Enrochement','Jet Tonneau','Cracheur','Roue','Cascade','Trop-Plein','Pompe Remplissage',
                 'Aspirateur','Filtre','Boule Lumineuse','Cygne','Grenouille','Héron Cendré','Canard'
                ];

        $faker = Factory::create('fr_FR');
        for ($nbrPools=0; $nbrPools < 70; $nbrPools++) {

            // Get reference for garden
            $garden = $this->getReference('garden_'.$faker->numberBetween(0, 17));

            $pool = new \App\Entity\Pool();
            $pool->setName(array_rand(array_flip($data), 1));
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