FROM node:22-alpine AS development
WORKDIR /app
RUN mkdir -p logs uploads temp && \
    chown -R node:node /app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
USER node
EXPOSE 3001
CMD ["npm", "run", "dev"]

FROM node:22-alpine AS production
WORKDIR /app

RUN mkdir -p logs uploads temp && \
    chown -R node:node /app

COPY --chown=node:node package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --chown=node:node src ./src
COPY --chown=node:node .env.example ./

USER node
EXPOSE 3001
CMD ["node", "src/index.js"]
