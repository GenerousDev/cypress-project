FROM cypress/included:9.6.1

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "npx", "cypress", "run" ]