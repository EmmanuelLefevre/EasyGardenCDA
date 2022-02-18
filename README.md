# DÉMARRAGE
1. */EasyGardenV1.0*
\
```cmd
symfony new api
```

1. Supprimer le .git dans /EasyGardenV1.0/api

1. */EasyGardenV1.0*
\
`git init`

1. */EasyGardenV1.0/api*
\
`composer update`

1. */EasyGardenV1.0/api*
\
`composer req api`

1. */EasyGardenV1.0/api*
\
`composer require symfony/orm-pack`

1. */EasyGardenV1.0/api*
\
`composer require symfony/maker-bundle --dev`

1. */EasyGardenV1.0/.env.local*
\
**Commenter** DATABASE_URL="postgresql://symfony:ChangeMe@127.0.0.1:5432/app?serverVersion=13&charset=utf8"
\
**Décommenter**DATABASE_URL="mysql://root:@127.0.0.1:3306/EasyGardenV1.0?serverVersion=mariadb-10.5.8"
\
**Noter**APP_ENV=dev

1. */EasyGardenV1.0/api/.env*
\
**Commenter** DATABASE_URL="postgresql://symfony:ChangeMe@127.0.0.1:5432/app?serverVersion=13&charset=utf8"
\
DATABASE_URL="mysql://root:@127.0.0.1:3306/EasyGardenV1.0?serverVersion=mariadb-10.5.8"
\
**Noter**APP_ENV=prod

# LANCER SERVEUR
1. Lancer serveur en local
\
`symfony local:server:start --allow-http`

# ENTITY
1. Créer entity User
\
`php bin/console make:user`

1. Créer autres entity
\
`php bin/console make:entity`

1. Créer les relations entre entity

# API_PLATFORM NORMALIZATION/DENORMALIZATION CONTEXT
1. Créer les #Groups et exposer les propriétés

1. */EasyGardenV1.0/api/config/packages/api_platform.yaml*
\
Configuration =>
```yaml
api_platform:
    title: 'EasyGarden API'
    description: 'API to deal with Vue.js'
    version: '1.0'
    show_webby: false
    mapping:
        paths: ['%kernel.project_dir%/src/Entity']
    patch_formats:
        json: ['application/merge-patch+json']
    swagger:
        versions: [3]
    eager_loading:
        force_eager: false
        fetch_partial: true
```

# MIGRATION
`php bin/console doctrine:database:create`
\
`php bin/console make:migration`
\
`php bin/console doctrine:migrations:migrate`

# CONFIGURATION DOSSIER /config
1. */EasyGardenV1.0/api/config/packages/prod/doctrine.yaml*
```yaml
when@prod:
    doctrine:
        orm:
            auto_generate_proxy_classes: false
            query_cache_driver:
                type: pool
                pool: doctrine.system_cache_pool
            result_cache_driver:
                type: pool
                pool: doctrine.result_cache_pool

    framework:
        cache:
            pools:
                doctrine.result_cache_pool:
                    adapter: cache.app
                doctrine.system_cache_pool:
                    adapter: cache.system
```
1. */EasyGardenV1.0/api/config/packages/test/doctrine.yaml*
```yaml
when@test:
    doctrine:
        dbal:
            # "TEST_TOKEN" is typically set by ParaTest
            dbname_suffix: '_test%env(default::TEST_TOKEN)%'
```
1. Supprimer les blocs .yaml du dessus dans =>
\
*/EasyGardenV1.0/api/config/packages/doctrine.yaml*
1. */EasyGardenV1.0/api/config/packages/security.yaml*
\
Configurer les routes =>
```yaml
access_control:
        - { path: ^/users, roles: PUBLIC_ACCESS }
        - { path: ^/gardens, roles: PUBLIC_ACCESS }
        - { path: ^/lawnmowers, roles: PUBLIC_ACCESS }
        - { path: ^/lightnings, roles: PUBLIC_ACCESS }
        - { path: ^/pools, roles: PUBLIC_ACCESS }
        - { path: ^/portals, roles: PUBLIC_ACCESS }
        - { path: ^/waterings, roles: PUBLIC_ACCESS }
```

# FIXTURES


# AUTHENTIFICATION
