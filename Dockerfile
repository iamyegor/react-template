# Build image
FROM node:18-alpine AS build

WORKDIR /app
RUN npm install -g pnpm
COPY package.json ./

RUN pnpm install
COPY . .
RUN pnpm run build

# Production image
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]