# DEMARRAGE
- /EasyGardenV1.0
`symfony new api`

- Supprimer le .git dans /EasyGardenV1.0/api

- /EasyGardenV1.0
`git init`

- /EasyGardenV1.0/api
`composer update`

- /EasyGardenV1.0/api
`composer req api`

- /EasyGardenV1.0/api
`composer require symfony/orm-pack`

- /EasyGardenV1.0/api
`composer require symfony/maker-bundle --dev`

- /EasyGardenV1.0/.env.local
Commenter DATABASE_URL="postgresql://symfony:ChangeMe@127.0.0.1:5432/app?serverVersion=13&charset=utf8"
DATABASE_URL="mysql://root:@127.0.0.1:3306/EasyGardenV1.0?serverVersion=mariadb-10.5.8"
APP_ENV=dev

- /EasyGardenV1.0/api/.env
Commenter DATABASE_URL="postgresql://symfony:ChangeMe@127.0.0.1:5432/app?serverVersion=13&charset=utf8"
DATABASE_URL="mysql://root:@127.0.0.1:3306/EasyGardenV1.0?serverVersion=mariadb-10.5.8"
APP_ENV=prod

# LANCER SERVEUR
- Lancer serveur en local
`symfony local:server:start --allow-http`

# ENTITY
- Créer entity User
`php bin/console make:user`

- Créer autres entity
`php bin/console make:entity`

- Créer les relations entre entity

# MIGRATION
`php bin/console doctrine:database:create`
\
`php bin/console make:migration`
\
`php bin/console doctrine:migrations:migrate`

# 
