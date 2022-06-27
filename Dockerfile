# Definieren des Basis Docker Images
FROM node:lts-alpine

# Erstellen des Anwendungsverzeichnisses
WORKDIR /usr/src/app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# Kopieren der Quelltextdateien
COPY . .

# Installieren der Abhängigkeiten
RUN npm i

# Freigeben des Ports, unter dem der 
# Express-Server läuft
EXPOSE 30000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=30000

# Starten des definierten npm-Scripts
RUN [ "npm", "run", "build" ]
CMD [ "npm", "run", "start" ]
# Alternativ Starten im Debug-Modus
# CMD [ "npm", "start:debug" ]
