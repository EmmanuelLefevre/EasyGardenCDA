<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PortalRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PortalRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:Portal']],
    denormalizationContext: ['groups' => ['write:Portal']],
    collectionOperations: ['get' => ['normalization_context' => ['groups']],
    'post' => ['denormalization_context' => ['groups']]]
    )]
class Portal
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Portal'])]
    private $id;

    #[ORM\Column(type: 'string', length: 45)]
    #[Groups(['read:User',
              'read:Garden',
              'read:Portal',
              'write:Portal'])]
    private $name;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Portal',
              'write:Portal'])]
    private $presenceSensor;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Portal',
              'write:Portal'])]
    private $status;

    #[ORM\ManyToOne(targetEntity: Garden::class, inversedBy: 'portal')]
    #[Groups(['read:Portal'])]
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

    public function getPresenceSensor(): ?bool
    {
        return $this->presenceSensor;
    }

    public function setPresenceSensor(bool $presenceSensor): self
    {
        $this->presenceSensor = $presenceSensor;

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
