echo 'install node modules'
sudo npm install --save

echo 'running json server'
json-server --no-cors db.json &

echo 'running application'
ng serve --o
