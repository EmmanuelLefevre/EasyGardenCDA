<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LightningRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LightningRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:Lightning']],
    denormalizationContext: ['groups' => ['write:Lightning']],
    collectionOperations: ['get' => ['normalization_context' => ['groups']],
    'post' => ['denormalization_context' => ['groups']]]
    )]
class Lightning
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lightning'])]
    private $id;

    #[ORM\Column(type: 'string', length: 45)]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lightning',
              'write:Lightning'])]
    private $name;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lightning',
              'write:Lightning'])]
    private $status;

    #[ORM\ManyToOne(targetEntity: Garden::class, inversedBy: 'lightning')]
    #[Groups(['read:Lightning'])]
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
