<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LawnmowerRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LawnmowerRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:Lawnmower']],
    denormalizationContext: ['groups' => ['write:Lawnmower']],
    collectionOperations: ['get' => ['normalization_context' => ['groups']],
    'post' => ['denormalization_context' => ['groups']]]
    )]
class Lawnmower
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lawnmower'])]
    private $id;

    #[ORM\Column(type: 'string', length: 45)]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lawnmower',
              'write:Lawnmower'])]
    private $name;

    #[ORM\Column(type: 'string', length: 12)]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lawnmower',
              'write:Lawnmower'])]
    private $batterySensor;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lawnmower',
              'write:Lawnmower'])]
    private $status;

    #[ORM\ManyToOne(targetEntity: Garden::class, inversedBy: 'lawnmower')]
    #[Groups(['read:Lawnmower'])]
    private $garden;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getBatterySensor(): ?string
    {
        return $this->batterySensor;
    }

    public function setBatterySensor(string $batterySensor): self
    {
        $this->batterySensor = $batterySensor;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getGarden(): ?Garden
    {
        return $this->garden;
    }

    public function setGarden(?Garden $garden): self
    {
        $this->garden = $garden;

        return $this;
    }
}
