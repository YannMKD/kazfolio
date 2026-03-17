# --- Étape 1 : Build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Étape 2 : Production avec Caddy ---
FROM caddy:2-alpine

# On expose le port 8080 (ou celui de ton choix)
EXPOSE 8080

# Copie des fichiers buildés
COPY --from=build /app/dist /usr/share/caddy

# Commande magique qui :
# 1. Écoute sur le port 8080
# 2. Sert les fichiers statiques
# 3. Redirige les erreurs vers index.html (pour React Router)
CMD ["caddy", "file-server", "--listen", ":8080", "--root", "/usr/share/caddy", "--try-files", "{path}", "/index.html"]