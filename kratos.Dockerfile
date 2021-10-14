FROM oryd/kratos:latest-sqlite

COPY ./kratos.yml /etc/config/kratos/kratos.yml
COPY ./identity.schema.json /etc/config/kratos/identity.schema.json
