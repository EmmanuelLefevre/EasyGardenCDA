SHELL := /bin/bash
.DEFAULT_GOAL = help


## ============ HELP ============
help: ## List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'


## ============ SERVER ============
ang: ## Launch Angular local server
	ng serve -o
.PHONY: ang

stop: ## Stop Angular local server
	npx kill-port 4200
.PHONY: stop

## ============ INSTALL ============
install: ## Install all composants and dependencies after a clone repository
	npm install @fortawesome/fontawesome-svg-core
	npm install @fortawesome/free-solid-svg-icons
	npm install @fortawesome/free-brands-svg-icons
	npm install @fortawesome/angular-fontawesome@0.10.x
	ng add @angular/material
	npm i animate.css
	npm install -g @compodoc/compodoc

	npm i jwt-decode
	npm i ngx-pagination
.PHONY: install