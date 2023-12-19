docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hmproject-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t hmproject-java/app ../../..
