# Use uma imagem base Node.js
FROM node:18

# Diretório de trabalho dentro do contêiner
WORKDIR ./src/server.js


# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Comando para iniciar o aplicativo
CMD [ "node", "server.js" ]
