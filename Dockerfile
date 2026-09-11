# Dockerfile para entorno de desarrollo React + Vite + Tailwind CSS
FROM node:20-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias dentro del contenedor
RUN npm install

# Copiar el resto del código del proyecto
COPY . .

# Exponer el puerto de desarrollo de Vite
EXPOSE 5173

# Comando por defecto para iniciar el servidor de desarrollo Vite con soporte para Docker host
CMD ["npm", "run", "dev", "--", "--host"]
