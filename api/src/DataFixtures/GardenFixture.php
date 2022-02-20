<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class GardenFixture extends Fixture implements DependentFixtureInterface
{
    public const GARDEN1_REFERENCE = 'garden1_';
    public const GARDEN2_REFERENCE = 'garden2_';
    public const GARDEN3_REFERENCE = 'garden3_';

    public function load(ObjectManager $manager): void
    {
        $data = ['Paris','Nantes','Bordeaux','Marseille','Nice','Toulouse','Le Havre','Monaco','Pau','Bayonne','Dax',
        'Biarritz','Metz','Nancy','Chartres','Lyon','Agen','Angoulême','Angers','La Rochelle','Périgueux',
        'Arcachon','La Teste de Buch','Le Pyla','Le Cap Ferret','Audenges','Mios','Facture-Biganos','Mérignac',
        'Bègles','Pessac','Lille','Niors','Eysines','Floirac','Boulognes-Billancourt','Brétigny sur Orge','Massy',
        'Palaiseau','Sanguinet','Cavignac','Beaune','Limoges','Montpellier','Vannes','Rennes','Tarbes','Tours',
        'Poitiers','Blois','Orléans','Auxerre','Dijon','Rouen','Rémalard','Bretoncelles','Strasbourg','Versailles',
        'Le Teich','Blaye','Lormont','Cenon','Cestas','Blanquefort','Talence','Tresses','Bruges','Vichy',
        'Clermont-Ferrand','Mont de Marsan','Saintes','Besançon','Brest','Saint-Malo','Laval','Vannes','Lorient',
        'Caen','Quimper','Amiens','Calais','Dunkerque','Troyes','Annecy','Grenoble','Nîmes','Toulon','Perpignan',
        'Suresnes','Narbonne','Frejus','Cannes','Carcassonne','Montélimar','Valence','Montauban','Albi','Lourdes'
        ];

        // Create Gardens for Manu
        // GARDEN Saint-Savin
        $user1 = $this->getReference(userFixture::USER1_REFERENCE);
        $gardenUser1 = new \App\Entity\Garden();
        $gardenUser1->setName('Saint-Savin');
        $gardenUser1->setUser($user1);
        $manager->persist($gardenUser1);
        $this->addReference(self::GARDEN1_REFERENCE , $gardenUser1);

        // GARDEN Cazaux
        $user1 = $this->getReference(userFixture::USER1_REFERENCE);
        $gardenUser2 = new \App\Entity\Garden();
        $gardenUser2->setName('Cazaux');
        $gardenUser2->setUser($user1);
        $manager->persist($gardenUser2);
        $this->addReference(self::GARDEN2_REFERENCE , $gardenUser2);

        // Create Garden for Sofiane
        // GARDEN fargues St Hilaire
        $user2 = $this->getReference(userFixture::USER2_REFERENCE);
        $gardenUser3 = new \App\Entity\Garden();
        $gardenUser3->setName('Fargues St Hilaire');
        $gardenUser3->setUser($user2);
        $manager->persist($gardenUser3);
        $this->addReference(self::GARDEN3_REFERENCE , $gardenUser3);

        // Create Other Gardens
        $faker = Factory::create('fr_FR');
        for ($nbrGardens=0; $nbrGardens < 35; $nbrGardens++) {
            $user = $this->getReference('user_'.$faker->numberBetween(2, 14));
            $garden = new \App\Entity\Garden();
            $garden->setName(array_rand(array_flip($data), 1));
            $garden->setUser($user);
            $manager->persist($garden);
            $this->addReference('garden_'.$nbrGardens , $garden);
            $manager->persist($garden);
        }
        $manager->flush();
    }

    public function getDependencies() 
    {
        return [
            UserFixture::class
        ];
    }
}