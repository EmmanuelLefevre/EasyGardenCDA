## ============ SERVER ============
sf: ## Launch Symfony local server
	php -S 127.0.0.1:8000 -t ./public
.PHONY: sf


## ============ DATABASE/FIXTURES ============
mg: ## Make new migration file
	$(eval CONFIRM := $(shell read -p "Do you want to create a new migration file? [y/N] " CONFIRM && echo $${CONFIRM:-N}))
	@if [ "$(CONFIRM)" = "y" ]; then \
		php api/bin/console make:migration --no-interaction;\
	fi
.PHONY: mg


lf: ## Load Symfony new fixtures
	php api/bin/console doctrine:database:drop --force
	php api/bin/console doctrine:database:create
	php api/bin/console doctrine:migrations:migrate --no-interaction
	php api/bin/console doctrine:fixtures:load --no-interaction
.PHONY: lfm


## ============ CONSOLE ============
cc: ## Symfony clear cache
	php api/bin/console cache:clear
.PHONY: cc


## ============ INSTALL ============
install: ## Install all composants and dependencies after a clone repository
	composer install
	composer update
	composer req api
	composer require symfony/orm-pack
	composer require symfony/maker-bundle --dev
	composer require sensio/framework-extra-bundle
.PHONY: install