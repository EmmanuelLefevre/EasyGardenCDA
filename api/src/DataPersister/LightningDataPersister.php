<?php

namespace App\DataPersister;

use App\Entity\Lightning;
use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use Doctrine\ORM\EntityManagerInterface;

class LightningDataPersister implements DataPersisterInterface 
{
    private $entityManager;

    public function __construct (EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function supports($data, array $context = []): bool
    {
        return $data instanceof Lightning;
    }

    /**
     * @param Lightning $data
     */
    public function persist($data, array $context = [])
    {   
        $this->entityManager->persist($data);      
        $this->entityManager->flush();
    }

    public function remove($data, array $context = [])
    {
        $this->entityManager->remove($data);      
        $this->entityManager->flush();
    }
}