echo "Removing old docker container if exists"
docker rm -f angulardocker 
docker rm -f dbdocker 

echo "Build new angular docker image"
docker build -t angulardocker -f docker/web/Dockerfile .

echo "Build new database docker image"
docker build -t dbdocker -f docker/db/Dockerfile .

echo "Running application..."
docker run -d -it -p 80:80 --name angulardocker angulardocker
docker run -d -it -p 3000:3000 --name dbdocker dbdocker
echo "App started on port 80"
 
