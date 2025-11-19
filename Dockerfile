FROM node:22.12.0 AS build

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

FROM nginx:stable
COPY --from=build /app/dist /usr/share/nginx/html
