<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WateringRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WateringRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:Watering']],
    denormalizationContext: ['groups' => ['write:Watering']],
    )]
class Watering
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Watering'])]
    private $id;

    #[ORM\Column(type: 'string', length: 45)]
    #[Groups(['read:User',
              'read:Garden',
              'read:Watering',
              'write:Watering'])]
    private $name;

    #[ORM\Column(type: 'string', length: 12)]
    #[Groups(['read:User',
              'read:Garden',
              'read:Watering',
              'write:Watering'])]
    private $flowSensor;

    #[ORM\Column(type: 'string', length: 12)]
    #[Groups(['read:User',
              'read:Garden',
              'read:Watering',
              'write:Watering'])]
    private $pressureSensor;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Watering',
              'write:Watering'])]
    private $status;

    #[ORM\ManyToOne(targetEntity: Garden::class, inversedBy: 'watering')]
    #[Groups(['read:Watering'])]
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

    public function getFlowSensor(): ?string
    {
        return $this->flowSensor;
    }

    public function setFlowSensor(string $flowSensor): self
    {
        $this->flowSensor = $flowSensor;

        return $this;
    }

    public function getPressureSensor(): ?string
    {
        return $this->pressureSensor;
    }

    public function setPressureSensor(string $pressureSensor): self
    {
        $this->pressureSensor = $pressureSensor;

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
