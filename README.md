# DÉMARRAGE
1. &nbsp;&nbsp;*/EasyGardenV1.0*
```
symfony new api
```

2. Supprimer le .git dans /EasyGardenV1.0/api

3. &nbsp;&nbsp;*/EasyGardenV1.0*
```
git init
```

4. &nbsp;&nbsp;*/EasyGardenV1.0/api*
```
composer update
```

5. &nbsp;&nbsp;*/EasyGardenV1.0/api*
```
composer req api
```

6. &nbsp;&nbsp;*/EasyGardenV1.0/api*
```
composer require symfony/orm-pack
```

7. &nbsp;&nbsp;*/EasyGardenV1.0/api*
```
composer require symfony/maker-bundle --dev
```

8. &nbsp;&nbsp;*/EasyGardenV1.0/.env.local*
\
**Commenter** &nbsp;&nbsp; DATABASE_URL="postgresql://symfony:ChangeMe@127.0.0.1:5432/app?serverVersion=13&charset=utf8"
\
**Décommenter** &nbsp;&nbsp; DATABASE_URL="mysql://root:@127.0.0.1:3306/EasyGardenV1.0?serverVersion=mariadb-10.5.8"
\
**Noter** &nbsp;&nbsp; APP_ENV=dev

9. */EasyGardenV1.0/api/.env*
\
**Commenter** &nbsp;&nbsp; DATABASE_URL="postgresql://symfony:ChangeMe@127.0.0.1:5432/app?serverVersion=13&charset=utf8"
\
**Décommenter** &nbsp;&nbsp; DATABASE_URL="mysql://root:@127.0.0.1:3306/EasyGardenV1.0?serverVersion=mariadb-10.5.8"
\
**Noter**APP_ENV=prod

# LANCER SERVEUR
1. Lancer serveur en local
```
symfony local:server:start --allow-http
```

# ENTITY
1. Créer entity User
```
php bin/console make:user
```

2. Créer autres entity
```
php bin/console make:entity
```

3. Créer les relations entre entity

# NORMALIZATION/DENORMALIZATION CONTEXT
1. Créer les #Groups et exposer les propriétés

2. &nbsp;&nbsp; */EasyGardenV1.0/api/config/packages/api_platform.yaml*
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
```
php bin/console doctrine:database:create
```
\
```
php bin/console make:migration
```
\
```
php bin/console doctrine:migrations:migrate
```

# CONFIGURATION DOSSIER /config
1. &nbsp;&nbsp; */EasyGardenV1.0/api/config/packages/prod/doctrine.yaml*
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
2. &nbsp;&nbsp; */EasyGardenV1.0/api/config/packages/test/doctrine.yaml*
```yaml
when@test:
    doctrine:
        dbal:
            # "TEST_TOKEN" is typically set by ParaTest
            dbname_suffix: '_test%env(default::TEST_TOKEN)%'
```
3. Supprimer les blocs .yaml du dessus dans =>
\
*/EasyGardenV1.0/api/config/packages/doctrine.yaml*
4. &nbsp;&nbsp; */EasyGardenV1.0/api/config/packages/security.yaml*
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
1. &nbsp;&nbsp;*/EasyGardenV1.0/api*
```
composer require orm-fixtures --dev
```
2. &nbsp;&nbsp;*/EasyGardenV1.0/api*
```
composer require symfony/rate-limiter
```
3. Load fixture =>
\
```
php bin/console doctrine:fixtures:load
```
# AUTHENTIFICATION (JWT)
1. Créer dossier jwt
\
*/EasyGardenV1.0/api/config*
2. &nbsp;&nbsp;*/EasyGardenV1.0/api*
```
composer require lexik/jwt-authentication-bundle
```
3. Générer la clé privé et publique
```
openssl genrsa -out config/jwt/private.pem 4096
```
```
openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout
```
4. &nbsp;&nbsp;*/EasyGardenV1.0/api/config/packages/lexik_jwt_authentication.yaml*
```yaml
lexik_jwt_authentication:
    secret_key: '%env(resolve:JWT_SECRET_KEY)%'
    public_key: '%env(resolve:JWT_PUBLIC_KEY)%'
    pass_phrase: '%env(JWT_PASSPHRASE)%'
    token_ttl: "%env(JWT_TTL)%"
```
5. &nbsp;&nbsp;*/EasyGardenV1.0/api/config/routes.yaml*
```yaml
authentication_token:
    path: /authentication_token
    methods: ['POST']
```
6. &nbsp;&nbsp;*/EasyGardenV1.0/api/config/packages/security.yaml*
```yaml

```
7. &nbsp;&nbsp;*/EasyGardenV1.0/api/config/packages/api_platform.yaml*
```yaml

```