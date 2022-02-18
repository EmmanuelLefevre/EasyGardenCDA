<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }

    public function getDependencies() 
    {
        return [
            UserFixture::class,
            GardenFixture::class,
            LawnmowerFixture::class,
            LightningFixture::class,
            PoolFixture::class,
            PortalFixture::class,
            WateringFixture::class
        ];
    }
}
