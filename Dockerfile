# Use uma imagem base Node.js
FROM node:18.16.0

# Diretório de trabalho dentro do contêiner
WORKDIR ./src/server.js

# Copie o arquivo de dependências para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Comando para iniciar o aplicativo
CMD [ "node", "server.js" ]
