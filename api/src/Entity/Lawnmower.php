<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LawnmowerRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LawnmowerRepository::class)]
#[ApiResource]
class Lawnmower
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 45)]
    private $name;

    #[ORM\Column(type: 'string', length: 12)]
    private $batterySensor;

    #[ORM\Column(type: 'boolean')]
    private $status;

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
}
