FROM debian:buster

# Install generictools
RUN apt-get -y update && apt-get upgrade -y && apt-get install -y \
curl

# Set env variables
ENV SH_PANEL_MONGO_URI=mongodb://localhost:27017 \
SH_PANEL_MONGO_DB=shpanel \
SH_HTTP_PORT=3223 \
SH_API_SRV_PORT=3222

RUN mkdir -p /root/scripts
RUN mkdir -p /root/go/src/github.com/smart-evolution/shpanel/public
RUN mkdir -p /root/go/src/github.com/smart-evolution/shpanel/views

ADD ./public /root/go/src/github.com/smart-evolution/shpanel/public
ADD ./views /root/go/src/github.com/smart-evolution/shpanel/views
COPY ./shpanel /root/go/src/github.com/smart-evolution/shpanel/
COPY ./docker/sh-panel/prod/entrypoint.sh /root/scripts/

ENTRYPOINT /root/scripts/entrypoint.sh
