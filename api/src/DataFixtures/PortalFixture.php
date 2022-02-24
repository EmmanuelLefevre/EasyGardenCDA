<?php

namespace App\DataFixtures;

use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Config\FileLocator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class PortalFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {   
        $configDirectories = [__DIR__.''];

        $fileLocator = new FileLocator($configDirectories);
        $fileLocator->locate('FunctionsFixture.php', null, false);

        // Create Portals for Manu
        //PORTAL Saint-Savin
        $gardenUser1 = $this->getReference(gardenFixture::GARDEN1_REFERENCE);
        $portal1 = new \App\Entity\Portal();
        $portal1->setName('Portail de Manu (Saint-Savin)');
        $portal1->setPresenceSensor(mt_rand(0, 1));
        $portal1->setStatus(mt_rand(0, 1));
        $portal1->setGarden($gardenUser1);
        $manager->persist($portal1);
    
        // PORTAL Cazaux
        $gardenUser2 = $this->getReference(gardenFixture::GARDEN2_REFERENCE);
        $portal2 = new \App\Entity\Portal();
        $portal2->setName('Portail de Manu (Cazaux)');
        $portal2->setPresenceSensor(mt_rand(0, 1));
        $portal2->setStatus(mt_rand(0, 1));
        $portal2->setGarden($gardenUser2);
        $manager->persist($portal2);
    
        // Create Portal for Sofiane
        // PORTAL Fargues St Hilaire
        $gardenUser3 = $this->getReference(gardenFixture::GARDEN3_REFERENCE);
        $portal3 = new \App\Entity\Portal();
        $portal3->setName('Portail de Sofiane');
        $portal3->setPresenceSensor(mt_rand(0, 1));
        $portal3->setStatus(mt_rand(0, 1));
        $portal3->setGarden($gardenUser3); 
        $manager->persist($portal3);

        // Create Other Portals
        $faker = Factory::create('fr_FR');
        for ($nbrPortals=0; $nbrPortals < 15 ; $nbrPortals++) {
            $garden = $this->getReference('garden_'.$faker->unique()->numberBetween(3, 39));
            $portal = new \App\Entity\Portal();
            $portal->setName('Portail de '.stringWithoutParenthesis($garden->getName()));
            $portal->setPresenceSensor(mt_rand(0, 1));
            $portal->setStatus(mt_rand(0, 1));
            $portal->setGarden($garden);
            $manager->persist($portal);
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