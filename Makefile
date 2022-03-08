SHELL := /bin/bash
.PHONY: help server ff cc install test
.DEFAULT_GOAL = help

help: ##List of commands
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

PORT?=8000
HOST?=127.0.0.1

COM_COLOR   = \033[0;34m
OBJ_COLOR   = \033[0;36m
OK_COLOR    = \033[0;32m
ERROR_COLOR = \033[0;31m
WARN_COLOR  = \033[0;33m
NO_COLOR    = \033[m

server: ## Launch local server
	symfony local:server:start --allow-http


ff: ## Load new fixtures
	cd api
	php bin/console doctrine:database:drop --force
	php bin/console doctrine:database:create
	php bin/console make:migration
	php bin/console doctrine:migrations:migrate --no-interaction
	php bin/console doctrine:fixtures:load --no-interaction


cc: ## Clear cache
	php bin/console cache:clear


install: ## Install all composants and dependencies after a clone repository
	composer update
	composer req api
	composer require symfony/orm-pack
	composer require symfony/maker-bundle --dev
	composer require sensio/framework-extra-bundle


test:install ff ## Launch unitary test phpunit
	php ./vendor/bin/phpunit