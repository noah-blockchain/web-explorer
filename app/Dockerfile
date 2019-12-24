FROM node:10.15

ENV APP_ROOT /src
ARG APP_ENV

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

RUN set -x \
    && cat .env.${APP_ENV} >.env \
    && npm install \
    && npm run build

ENV HOST 0.0.0.0

CMD ["npm", "start"]
