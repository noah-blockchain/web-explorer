FROM node:10.15

ENV APP_ROOT /src
ARG API
ARG STATUS

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0

CMD ["npm", "start"]
