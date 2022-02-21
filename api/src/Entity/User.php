<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:User']],
    denormalizationContext: ['groups' => ['write:User']],
    collectionOperations: ['get' => ['normalization_context' => ['groups']],
    'post' => ['denormalization_context' => ['groups']]]
    )]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lawnmower',
              'read:Lightning',
              'read:Pool',
              'read:Portal',
              'read:Watering'])]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    #[Groups(['read:User',
              'write:User'])]
    private $email;

    #[ORM\Column(type: 'json')]
    #[Groups(['read:User',
              'write:User'])]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    #[Groups(['read:User',
              'write:User'])]
    private $password;

    #[ORM\Column(type: 'string', length: 45)]
    #[Groups(['read:User',
              'read:Garden',
              'read:Lawnmower',
              'read:Lightning',
              'read:Pool',
              'read:Portal',
              'read:Watering',
              'write:User'])]
    private $userName;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['read:User',
              'write:User'])]
    private $phoneNumber;

    #[ORM\Column(type: 'datetime_immutable', options:['default' => 'CURRENT_TIMESTAMP'])]
    #[Groups(['read:User'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['read:User',
              'write:User'])]
    private $updatedAt;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['read:User',
              'write:User'])]
    private $isVerified;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Garden::class, orphanRemoval: true)]
    #[Groups(['read:User'])]
    private $garden;

    public function __construct()
    {
        $this->garden = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getUserName(): ?string
    {
        return $this->userName;
    }

    public function setUserName(string $userName): self
    {
        $this->userName = $userName;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getIsVerified(): ?bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    /**
     * @return Collection<int, Garden>
     */
    public function getGarden(): Collection
    {
        return $this->garden;
    }

    public function addGarden(Garden $garden): self
    {
        if (!$this->garden->contains($garden)) {
            $this->garden[] = $garden;
            $garden->setUser($this);
        }

        return $this;
    }

    public function removeGarden(Garden $garden): self
    {
        if ($this->garden->removeElement($garden)) {
            // set the owning side to null (unless already changed)
            if ($garden->getUser() === $this) {
                $garden->setUser(null);
            }
        }

        return $this;
    }
}
