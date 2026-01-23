# ---- Build Stage ----
FROM node:24-alpine AS build

WORKDIR /app

# Copy source
COPY . .

# Copy only what’s needed for deps first (better caching)
# COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps


# ❌ Skip lint in the image (run lint locally or in CI)
RUN npm run build

# ---- Production Stage ----
FROM node:24-alpine

WORKDIR /app

# Copy minimal artifacts
COPY --from=builder ./app/.next /app/.next
COPY --from=builder ./app/node_modules /app/node_modules
COPY --from=builder ./app/public /app/public
COPY --from=builder ./app/package.json /app/package.json

EXPOSE 3002

CMD [ "npm", "start" ]
