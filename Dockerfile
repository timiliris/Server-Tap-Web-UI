# Utilisez une image Node.js pour construire votre application
FROM node:20.6.1 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Utilisez une image Nginx pour servir votre application
FROM nginx:alpine

# Copier le contenu construit de l'étape de construction à Nginx
COPY --from=build /app/www /usr/share/nginx/html

# Supprimez la configuration par défaut de Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copier votre configuration personnalisée Nginx
COPY nginx.conf /etc/nginx/conf.d/

# Exposer le port 8100
EXPOSE 8100

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
