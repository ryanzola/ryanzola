# Load environment variables from .env file
include .env
export $(shell sed 's/=.*//' .env)

.PHONY: build up deploy down

build:
	docker build -t $(IMAGE_NAME) -f Dockerfile .

up: build
	docker run --rm --name $(CONTAINER_NAME) \
		-p 3000:3000 \
		-v ${PWD}:/app \
		-v /app/node_modules \
		$(IMAGE_NAME)

deploy:
	npm run build
	gsutil -m cp -r ./build/* $(GCS_BUCKET)

down:
	docker stop $(CONTAINER_NAME) || true
	docker rmi $(IMAGE_NAME) || true
	rm -rf ./node_modules
	rm -rf ./build
	rm -f npm-debug.log* yarn-debug.log* yarn-error.log*
	rm -f .env.local .env.development.local .env.test.local .env.production.local

