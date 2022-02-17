<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WateringRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WateringRepository::class)]
#[ApiResource]
class Watering
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 45)]
    private $name;

    #[ORM\Column(type: 'string', length: 12)]
    private $flowSensor;

    #[ORM\Column(type: 'string', length: 12)]
    private $pressureSensor;

    #[ORM\Column(type: 'boolean')]
    private $status;

    #[ORM\ManyToOne(targetEntity: Garden::class, inversedBy: 'watering')]
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
