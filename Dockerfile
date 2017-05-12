FROM node:7.10

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn --pure-lockfile

COPY .eslintrc.js .postcssrc.js /app/

COPY config /app/config
COPY build /app/build
COPY src /app/src
COPY static /app/static
COPY index.html /app/
RUN npm run build

COPY lib /app/lib

CMD npm start
