<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class GardenFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $data = ['Paris','Nantes','Bordeaux','Marseille','Nice','Toulouse','Le Havre','Monaco','Pau','Bayonne','Dax',
                 'Biarritz','Metz','Nancy','Chartres','Lyon','Agen','Angoulême','Angers','La Rochelle','Périgueux',
                 'Arcachon','La Teste de Buch','Le Pyla','Le Cap Ferret','Audenges','Mios','Facture-Biganos','Mérignac',
                 'Bègles','Pessac','Lille','Niors','Eysines','Floirac','Boulognes-Billancourt','Brétigny sur Orge','Massy',
                 'Palaiseau','Saint-Savin','Cavignac','Beaune','Limoges','Montpellier','Vannes','Rennes','Tarbes','Tours',
                 'Poitiers','Blois','Orléans','Auxerre','Dijon','Rouen','Rémalard','Bretoncelles','Strasbourg','Versailles',
                 'Fargues St Hilaire','Blaye','Lormont','Cenon','Cestas','Blanquefort','Talence','Tresses','Bruges','Vichy',
                 'Clermont-Ferrand','Mont de Marsan','Saintes','Besançon','Brest','Saint-Malo','Laval','Vannes','Lorient',
                 'Caen','Quimper','Amiens','Calais','Dunkerque','Troyes','Annecy','Grenoble','Nîmes','Toulon','Perpignan',
                 'Suresnes','Narbonne','Frejus','Cannes','Carcassonne','Montélimar','Valence','Montauban','Albi','Lourdes'
                ];

        $faker = Factory::create('fr_FR');
        for ($nbrGardens=0; $nbrGardens < 22; $nbrGardens++) {

            $user = $this->getReference('user_' . $faker->numberBetween(2, 17));

            $garden = new \App\Entity\Garden();
            $garden->setName(array_rand($data, 1));
            $garden->setUser($user);

            $manager->persist($garden);

            // Save gardens in a reference
            $this->addReference('garden_'. $nbrGardens , $garden);
        }

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