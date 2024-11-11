# 環境構築

## server（express）

```
cd ./server
npm i
cp .env.example .env
```

.envの作成

```
MONGODB_URL = "MONGODBのURL"
SECRET_KEY = "自作のシークレットキー"
TOKEN_SECRET_KEY = "自作のシークレットキー"
```

サーバー起動

```
npm start
```

## client（react）

```
cd ./client
npm i
npm start
```

http://localhost:3000/login
