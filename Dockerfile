FROM node:latest as builder

WORKDIR /client

COPY package*.json ./



RUN npm ci --production

COPY client .
RUN npm install
RUN npm run build

#NGINX Web Server
FROM nginx:alpine as prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /client/build /usr/share/nginx/html
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

EXPOSE 80
#EXPOSE 443
CMD ["nginx", "-g","daemon off;"]