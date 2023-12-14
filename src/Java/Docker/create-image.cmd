docker build --no-cache -f SQL\Dockerfile.PostgreSql -t _modul_ucheta_sroka_dejjstviya_dogovora-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t _modul_ucheta_sroka_dejjstviya_dogovora-java/app ../../..
