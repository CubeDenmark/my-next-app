FROM node:18-alpine AS testbuilder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run lint -- --fix

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=testbuilder /app/.next ./.next
COPY --from=testbuilder /app/node_modules ./node_modules
COPY --from=testbuilder /app/public ./public
COPY --from=testbuilder /app/package.json ./package.json

EXPOSE 3001

CMD [ "npm", "start" ]