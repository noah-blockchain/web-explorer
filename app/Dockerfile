FROM node:10.15

ENV APP_ROOT /src
ARG API
ARG STATUS

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN set -x \
    && export API \
    && export PATH \
    && npm install \
    && npm run build

ENV HOST 0.0.0.0

CMD ["npm", "start"]
