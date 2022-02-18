<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class PoolFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $data = ['Jet Enrochement','Jet Tonneau','Cracheur','Roue','Cascade','Trop-Plein','Pompe Remplissage',
                 'Aspirateur','Filtre','Boule Lumineuse'
                ];

        $faker = Factory::create('fr_FR');
        for ($nbrPools=0; $nbrPools < 7; $nbrPools++) {

            $garden = $this->getReference('garden_' . $faker->numberBetween(0, 17));

            $pool = new \App\Entity\Pool();
            $pool->setName(array_rand($data, 1));
            $pool->setStatus(mt_rand(0, 1));
            $pool->setGarden($garden);

            $manager->persist($pool);

        }

        $manager->flush();
    }
}