install:
	cd ./app && npm i
start:
	docker-compose up -d
	docker-compose start
	docker-compose ps
stop:
	docker-compose stop
	docker-compose ps

restart:
	docker-compose stop
	docker-compose start
	docker-compose ps