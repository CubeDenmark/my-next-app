# ---- Build Stage ----
FROM node:24-alpine AS portfolio-builder
WORKDIR /app

# Copy only what’s needed for deps first (better caching)
# Copy source

COPY package*.json ./
COPY . .

RUN npm ci --legacy-peer-deps



# ❌ Skip lint in the image (run lint locally or in CI)
RUN npm run build

# ---- Production Stage ----
FROM node:24-alpine

WORKDIR /app

# Copy minimal artifacts
COPY --from=portfolio-builder ./app/.next /app/.next
COPY --from=portfolio-builder ./app/node_modules /app/node_modules
COPY --from=portfolio-builder ./app/public /app/public
COPY --from=portfolio-builder ./app/package.json /app/package.json

EXPOSE 3000

CMD [ "npm", "start" ]
