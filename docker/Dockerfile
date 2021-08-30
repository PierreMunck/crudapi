FROM node:14

RUN apt-get update && apt-get install -y --no-install-recommends \
        vim \
    && rm -rf /var/lib/apt/lists/*

ENV NPM_CONFIG_LOGLEVEL warn

USER node
