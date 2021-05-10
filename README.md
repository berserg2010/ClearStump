# Clear Stump

## Backend

```bash
$ virtualenv -p /usr/bin/python3 ./venv/
$ source venv/bin/activate
$ pip3 install -U  -r requirements.txt

$ python3 manage.py makemigrations
$ python3 manage.py migrate

$ python3 manage.py runserver 0.0.0.0:8000
```


## Frontend

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
