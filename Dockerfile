FROM node:14-alpine3.10

WORKDIR /usr/src/app/openapi-utilities-lib

RUN npm i typescript -g

COPY ./package*.json ./
COPY ./tsconfig.json ./
COPY ./src ./src

RUN npm i && \
    npm run build && \
    rm -rf node_modules && \
    rm -rf src && \
    rm tsconfig.json && \
    npm i --only=prod && \
    rm package-lock.json && \ 
    npm link

RUN npm uninstall typescript -g

# COPY ./openapi.yaml ./build/openapi.yaml

# /usr/src/app/tax-calculator-service/data/
#
# VOLUME ["/usr/src/app/tax-calculator-service/logs", "/usr/src/app/tax-calculator-service/data"]

CMD ["node", "build/index.js"]