<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class WateringFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $data = ['Chemin Accès','Allée','Bassin','Enrochement','Massif Brasero','Bassin','Arrière Maison','Haie Bambous',
                 'Piscine','Massif','Terrasse','Massif Minéral','Pergola','Potager',''
                ];

        $faker = Factory::create('fr_FR');
        for ($nbrWaterings=1; $nbrWaterings < 24; $nbrWaterings++) {

            $garden = $this->getReference('garden_' . $faker->numberBetween(0, 17));

            $watering = new \App\Entity\Watering();
            $watering->setName(array_rand($data, 1));
            $watering->setFlowSensor(random_int(0, 100) +"L/H");
            $watering->setPressureSensor(random_int(0, 100) +"bars");
            $watering->setStatus(mt_rand(0, 1));
            $watering->setGarden($garden);

            $manager->persist($watering);

        }

        $manager->flush();
    }
}