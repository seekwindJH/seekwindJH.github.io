---
title: VPN网络服务器 - docker版
icon: pen-to-square
date: 2024-01-28
---

## Preview

配置一个docker版本的VPN网络服务器，有2个核心要点：

1. docker容器的基础为dnsmasq docker容器
2. 安装zerotire客户端

## docker-compose.yaml

```yaml
version: "3"

networks:
  dnsmasq:
    external: false

services:
  server:
    image: jpillora/dnsmasq:1
    container_name: dnsmasq
    environment:
      - HTTP_USER=seekwind
      - USER_GID=90153034
    restart: always
    networks:
      - dnsmasq
    volumes:
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
      - /etc/ssl/certs/seekwind.crt:/etc/ssl/certs/seekwind.crt
    ports:
      - "5380:8080"
      - "53:53/udp"
```
