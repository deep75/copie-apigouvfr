FROM node:18.12.1-alpine as build

WORKDIR /app
COPY . ./
COPY .env ./
RUN npm install
RUN npm run build

FROM node:18.12.1-alpine

COPY --from=build /app /
EXPOSE 3000
CMD ["npm", "run", "start"]
