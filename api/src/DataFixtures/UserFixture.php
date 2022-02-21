<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Faker\Factory;

class UserFixture extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public const USER1_REFERENCE = 'user1_';
    public const USER2_REFERENCE = 'user2_';
    
    public function load(ObjectManager $manager): void
    {
        $data = ['gmail.com','outlook.fr','yahoo.fr','protonmail.com','orange.fr','live.fr','laposte.net','icloud.com','sfr.fr','free.fr','mailo.com'];
        // User ADMIN
        $admin = new User();
        $admin->setUserName('ADMIN');
        $admin->setPassword($this->hasher->hashPassword($admin,'ADMIN'));
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setEmail('ADMIN@gmail.com');
        $admin->setPhoneNumber('06 12 25 48 71');
        $admin->setCreatedAt(new \DateTimeImmutable());
        $admin->setIsVerified(true);
        $manager->persist($admin);
       
        // User Manu
        $user1 = new User();
        $user1->setUserName('manu');
        $user1->setPassword($this->hasher->hashPassword($user1,'xx'));
        $user1->setRoles(['ROLE_USER']);
        $user1->setEmail('manu@protonmail.com');
        $user1->setPhoneNumber('07 85 98 25 07');
        $user1->setCreatedAt(new \DateTimeImmutable());
        $user1->setIsVerified(true); 
        $manager->persist($user1);
        $this->addReference(self::USER1_REFERENCE , $user1);

        // User Sofiane
        $user2 = new User();
        $user2->setUserName('sofiane');
        $user2->setPassword($this->hasher->hashPassword($user2,'gg'));
        $user2->setRoles(['ROLE_USER']);
        $user2->setEmail('sofiane@gmail.com');
        $user2->setPhoneNumber('06 54 85 78 14');
        $user2->setCreatedAt(new \DateTimeImmutable());
        $user2->setIsVerified(true); 
        $manager->persist($user2);
        $this->addReference(self::USER2_REFERENCE , $user2);

        // Create Other Users
        $faker = Factory::create('fr_FR');
        for ($nbrUsers=0; $nbrUsers < 15; $nbrUsers++) {
            $user = new User();
            $user->setUserName($username=$faker->userName);
            $user->setPassword($this->hasher->hashPassword($user, $faker->password));
            $user->setRoles(['ROLE_USER']);
            $user->setEmail($username.'@'.array_rand(array_flip($data), 1));
            $user->setPhoneNumber($faker->mobileNumber);
            $user->setCreatedAt(new \DateTimeImmutable());
            $user->setIsVerified(mt_rand(0, 1));
            $manager->persist($user);
            $this->addReference('user_'.$nbrUsers , $user);
        }
        $manager->flush();
    }
}
