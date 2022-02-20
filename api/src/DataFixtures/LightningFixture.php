<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class LightningFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $data = ['Terrasse','Abris Jardin','Abris Bois','Terrain Pétanque','Pignon','Massif Brasero','Allée','Portail',
                 'Porte Entrée','Carport','Piscine','Bassin','Douche Piscine','Sapin','Chêne','Enrochement','Spa',
                 'Cuisine Extérieure','Jacuzi','Pas Japonais','Massif','Haie Bambous','Ruche','Saule Pleureur','Guinguette',
                 'Lagune','Balustrade','Globes','Bande LED','Serpentin','Palmiers','Jeux d\'Eau','Nénuphars','Escalier',
                 'Lanternes','Pont','Ponton','Balancelle','Tonnelle','Guirlande','Photophores','Pergola','Massif Minéral',
                 'Candélabre','Parasol Chauffant','Buddha','Potager','Tomates','Salade','Courges'
                ];

        $faker = Factory::create('fr_FR');
        for ($nbrLightnings=0; $nbrLightnings < 100; $nbrLightnings++) {

            // Get reference for garden
            $garden = $this->getReference('garden_'.$faker->numberBetween(0, 17));

            $lightning = new \App\Entity\Lightning();
            $lightning->setName(array_rand(array_flip($data), 1));
            $lightning->setStatus(mt_rand(0, 1));
            $lightning->setGarden($garden);

            $manager->persist($lightning);

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