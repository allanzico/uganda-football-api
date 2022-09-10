ifneq (,$(wildcard ./ .env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

run-dev:
	docker compose -f docker-compose.dev.yml down -v
	docker compose -f docker-compose.dev.yml up -d

run-prod:
	docker compose -f docker-compose.yml down -v
	docker compose -f docker-compose.yml up