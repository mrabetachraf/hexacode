FROM node:10-alpine as build-step
WORKDIR /app
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY package.json ./
RUN npm install --save

COPY . .
RUN npm run build

FROM nginx:alpine as prod-stage
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist/* /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




