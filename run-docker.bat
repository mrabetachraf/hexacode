docker rm -f angulardocker 
docker rm -f dbdocker 

docker build -t angulardocker -f docker/web/Dockerfile .

docker build -t dbdocker -f docker/db/Dockerfile .

docker run -d -it -p 80:80 --name angulardocker angulardocker
docker run -d -it -p 3000:3000 --name dbdocker dbdocker