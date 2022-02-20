<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class WateringFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $data = ['Chemin Accès','Allée','Bassin','Enrochement','Massif Brasero','Bassin','Arrière Maison','Haie Bambous',
        'Piscine','Massif','Terrasse','Massif Minéral','Pergola','Potager','Tomates','Salade','Courges','Secteur Devant',
        'Secteur Arrière','Haie','Potiches','Goutte à Goutte','Jardinière'
        ];

        function random_float ($min,$max) {
            $value = ($min+lcg_value()*(abs($max-$min)));
            return (sprintf("%01.2f",$value)."bars");
        }

        // Create Waterings for Manu
        // WATERINGS Saint-Savin     
        for ($nbrWaterings=0; $nbrWaterings < 10; $nbrWaterings++) {
            $gardenUser1 = $this->getReference(gardenFixture::GARDEN1_REFERENCE);
            $watering = new \App\Entity\Watering();
            $watering->setName(array_rand(array_flip($data), 1));
            $watering->setFlowSensor(random_int(1500, 5000)."L/H");
            $watering->setPressureSensor(random_float(1.2, 6.5));
            $watering->setStatus(mt_rand(0, 1));
            $watering->setGarden($gardenUser1);
            $manager->persist($watering);
        }

        // WATERINGS Cazaux
        for ($nbrWaterings=0; $nbrWaterings < 6; $nbrWaterings++) {
            $gardenUser2 = $this->getReference(gardenFixture::GARDEN2_REFERENCE);
            $watering = new \App\Entity\Watering();
            $watering->setName(array_rand(array_flip($data), 1));
            $watering->setFlowSensor(random_int(1500, 5000)."L/H");
            $watering->setPressureSensor(random_float(1.2, 6.5));
            $watering->setStatus(mt_rand(0, 1));
            $watering->setGarden($gardenUser2);
            $manager->persist($watering);
        }

        // Create Waterings for Sofiane
        // WATERINGS Fargues St Hilaire
        for ($nbrWaterings=0; $nbrWaterings < 7; $nbrWaterings++) {
            $gardenUser3 = $this->getReference(gardenFixture::GARDEN3_REFERENCE);
            $watering = new \App\Entity\Watering();
            $watering->setName(array_rand(array_flip($data), 1));
            $watering->setFlowSensor(random_int(1500, 5000)."L/H");
            $watering->setPressureSensor(random_float(1.2, 6.5));
            $watering->setStatus(mt_rand(0, 1));
            $watering->setGarden($gardenUser3);
            $manager->persist($watering);
        }

        // Create Other Waterings
        $faker = Factory::create('fr_FR');
        for ($nbrWaterings=0; $nbrWaterings < 70; $nbrWaterings++) {
            $garden = $this->getReference('garden_'.$faker->numberBetween(0, 17));
            $watering = new \App\Entity\Watering();
            $watering->setName(array_rand(array_flip($data), 1));
            $watering->setFlowSensor(random_int(1500, 5000)."L/H");
            $watering->setPressureSensor(random_float(1.2, 6.5));
            $watering->setStatus(mt_rand(0, 1));
            $watering->setGarden($garden);
            $manager->persist($watering);
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