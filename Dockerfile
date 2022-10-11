# Base 이미지 FROM node:14.15.1-alpine3.12
FROM node:16.13.2

# 빌드된 산출물을 실행시키기 위해 필요한 serve 모듈
RUN npm install -g serve

# 작업 공간
RUN mkdir /app
WORKDIR /app
RUN mkdir ./public

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies leaving out dev dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build
RUN npm run build


# 실행 명령어
ENTRYPOINT ["server", "-s", "build"]
