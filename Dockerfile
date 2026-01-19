# ---- Build Stage ----
FROM node:18-alpine AS build
WORKDIR /app

# Copy only what’s needed for deps first (better caching)
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy source
COPY . .

# ❌ Skip lint in the image (run lint locally or in CI)
RUN npm run build

# ---- Production Stage ----
FROM node:18-alpine AS production
WORKDIR /app

# Copy minimal artifacts
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

<<<<<<< HEAD
EXPOSE 3000
CMD ["npm", "start"]
=======
EXPOSE 3001

CMD [ "npm", "start" ]
>>>>>>> 2cfc2016dcaf1028b2c3f065c47f64f8d2ed426e
