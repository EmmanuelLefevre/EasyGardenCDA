<?php

namespace App\DataFixtures;

use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Config\FileLocator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class LightningFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $configDirectories = [__DIR__.''];

        $fileLocator = new FileLocator($configDirectories);
        $fileLocator->locate('FunctionsFixture.php', null, false);
        
        $data = ['Terrasse','Abris Jardin','Abris Bois','Terrain Pétanque','Pignon','Massif Brasero','Allée','Portail',
        'Porte Entrée','Carport','Piscine','Bassin','Douche Piscine','Sapin','Chêne','Enrochement','Spa',
        'Cuisine Extérieure','Jacuzi','Pas Japonais','Massif','Haie Bambous','Ruche','Saule Pleureur','Guinguette',
        'Lagune','Balustrade','Globes','Bande LED','Serpentin','Palmiers','Jeux d\'Eau','Nénuphars','Escalier',
        'Lanternes','Pont','Ponton','Balancelle','Tonnelle','Guirlande','Photophores','Pergola','Massif Minéral',
        'Candélabre','Parasol Chauffant','Buddha','Potager','Spot Île','Salade','Courges'
        ];

        // Create Lightnings for Manu
        // LIGHTNINGS Saint-Savin
        for ($nbrLightnings=0; $nbrLightnings < 8; $nbrLightnings++) {
            $gardenUser1 = $this->getReference(gardenFixture::GARDEN1_REFERENCE);
            $lightning = new \App\Entity\Lightning();
            $lightning->setName(array_rand(array_flip($data), 1).' (Cazaux/Manu)');
            $lightning->setStatus(mt_rand(0, 1));
            $lightning->setGarden($gardenUser1);
            $manager->persist($lightning);
        }

        // LIGHTNINGS Cazaux
        $gardenUser2 = $this->getReference(gardenFixture::GARDEN2_REFERENCE);
        for ($nbrLightnings=0; $nbrLightnings < 6; $nbrLightnings++) {
            $lightning = new \App\Entity\Lightning();
            $lightning->setName(array_rand(array_flip($data), 1).' (Saint-Savin/Manu)');
            $lightning->setStatus(mt_rand(0, 1));
            $lightning->setGarden($gardenUser2);
            $manager->persist($lightning);
        }

        // Create Lightnings for Sofiane
        // LIGHTNINGS Fargues St Hilaire
        $gardenUser3 = $this->getReference(gardenFixture::GARDEN3_REFERENCE);
        for ($nbrLightnings=0; $nbrLightnings < 6; $nbrLightnings++){
            $lightning = new \App\Entity\Lightning();
            $lightning->setName(array_rand(array_flip($data), 1).' (Sofiane)');
            $lightning->setStatus(mt_rand(0, 1));
            $lightning->setGarden($gardenUser3);
            $manager->persist($lightning);
        }

        // Create Other Lightnings
        $faker = Factory::create('fr_FR');
        for ($nbrLightnings=0; $nbrLightnings < 100; $nbrLightnings++) {
            $garden = $this->getReference('garden_'.$faker->numberBetween(3, 39));
            $lightning = new \App\Entity\Lightning();
            $lightning->setName(array_rand(array_flip($data), 1).stringWithParenthesis($garden->getName()));
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