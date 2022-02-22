<?php

namespace App\DataFixtures;

use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Config\FileLocator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class WateringFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $configDirectories = [__DIR__.''];

        $fileLocator = new FileLocator($configDirectories);
        $fileLocator->locate('FunctionsFixture.php', null, false);

        $data = ['Chemin Accès','Allée','Bassin','Enrochement','Massif Brasero','Bassin','Arrière Maison','Haie Bambous',
        'Piscine','Massif','Terrasse','Massif Minéral','Pergola','Potager','Tomates','Salade','Courges','Secteur Devant',
        'Secteur Arrière','Haie','Potiches','Goutte à Goutte','Jardinière'
        ];

        // Create Waterings for Manu
        // WATERINGS Saint-Savin     
        for ($nbrWaterings=0; $nbrWaterings < 10; $nbrWaterings++) {
            $gardenUser1 = $this->getReference(gardenFixture::GARDEN1_REFERENCE);
            $watering = new \App\Entity\Watering();
            $watering->setName(array_rand(array_flip($data), 1).' (Cazaux/Manu)');
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
            $watering->setName(array_rand(array_flip($data), 1).' (Saint-Savin/Manu)');
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
            $watering->setName(array_rand(array_flip($data), 1).' (Sofiane)');
            $watering->setFlowSensor(random_int(1500, 5000)."L/H");
            $watering->setPressureSensor(random_float(1.2, 6.5));
            $watering->setStatus(mt_rand(0, 1));
            $watering->setGarden($gardenUser3);
            $manager->persist($watering);
        }

        // Create Other Waterings
        $faker = Factory::create('fr_FR');
        for ($nbrWaterings=0; $nbrWaterings < 70; $nbrWaterings++) {
            $garden = $this->getReference('garden_'.$faker->numberBetween(3, 39));
            $watering = new \App\Entity\Watering();
            $watering->setName(array_rand(array_flip($data), 1).stringWithParenthesis($garden->getName()));
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