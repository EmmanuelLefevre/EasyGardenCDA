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

        // Create Pools for Manu
        // POOLS Saint-Savin
        for ($nbrPools=0; $nbrPools < 8; $nbrPools++) {
            $gardenUser1 = $this->getReference(gardenFixture::GARDEN1_REFERENCE);
            $pool = new \App\Entity\Pool();
            $pool->setName(array_rand(array_flip($data), 1));
            $pool->setStatus(mt_rand(0, 1));
            $pool->setGarden($gardenUser1);
            $manager->persist($pool);
        }

        // POOLS Cazaux
        for ($nbrPools=0; $nbrPools < 5; $nbrPools++) {
            $gardenUser2 = $this->getReference(gardenFixture::GARDEN2_REFERENCE);
            $pool = new \App\Entity\Pool();
            $pool->setName(array_rand(array_flip($data), 1));
            $pool->setStatus(mt_rand(0, 1));
            $pool->setGarden($gardenUser2);
            $manager->persist($pool);
        }

        // Create Pools for Sofiane
        // POOLS Fargues St Hilaire
        for ($nbrPools=0; $nbrPools < 6; $nbrPools++) {
            $gardenUser3 = $this->getReference(gardenFixture::GARDEN3_REFERENCE);
            $pool = new \App\Entity\Pool();
            $pool->setName(array_rand(array_flip($data), 1));
            $pool->setStatus(mt_rand(0, 1));
            $pool->setGarden($gardenUser3);
            $manager->persist($pool);
        }

        // Create Other Pools
        $faker = Factory::create('fr_FR');
        for ($nbrPools=0; $nbrPools < 70; $nbrPools++) {
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