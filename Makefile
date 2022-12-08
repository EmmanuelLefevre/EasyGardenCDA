SHELL := /bin/bash
.DEFAULT_GOAL = help


## ============ HELP ============
help: ## List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'


## ============ SERVER ============
sf-serv: ## Launch Symfony local server
	cd api && $(MAKE) sf
.PHONY: sf-serv

ang-serv: ## Launch Angular local server
	cd pwa && $(MAKE) ang
.PHONY: ang-serv

serv: ## Launch project local server
	make -j 2 ang-serv sf-serv
.PHONY: serv


## ============ INSTALL ============
install-sf:
	cd api && $(MAKE) install
install-ang:
	cd pwa && $(MAKE) install

install: ## Install all composants and dependencies after a clone repository
	$(MAKE) install-sf
	$(MAKE) install-ang
.PHONY: install
