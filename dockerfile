FROM node:10 as builder
ARG registry=https://registry.npm.taobao.org
ARG disturl=https://npm.taobao.org/dist
WORKDIR /app
COPY . .
WORKDIR /app
RUN npm config set unsafe-perm true
RUN yarn config set disturl $disturl\
    && yarn config set registry $registry\
    && yarn install && yarn build


FROM ubuntu:latest
RUN apt update && apt install -y  nginx
RUN mkdir -p /var/log/nginx  /var/lib/nginx/html
COPY --from=builder /app/build /var/lib/nginx/html/
RUN rm -f /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/
EXPOSE 80

CMD ["nginx","-g","daemon off;"]
