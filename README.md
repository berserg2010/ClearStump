# Clear Stump

## Backend

```shell
virtualenv -p /usr/bin/python3 ./venv/
source venv/bin/activate
pip3 install -U  -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate

python3 manage.py runserver 0.0.0.0:8000
```

## Frontend

[Demo](https://berserg2010.github.io/ClearStump/)

```shell
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn dev

# build for production and launch server
yarn build
yarn start

# generate static project
yarn generate
```
