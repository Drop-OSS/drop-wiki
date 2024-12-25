# Exposing your instance
Exposing your instance allows it to be accessible from other computers than the one you're hosting it on.

## LAN
The `compose.yaml` provided in the [Quickstart guide](/guides/quickstart.md) already exposes the Drop instance on port 3000. If you're on the same LAN as your Drop instance, you can find it's IP and then use:
```
http://[instance IP]:3000
```

as the connection URL when setting up your Drop client.

## Reverse Proxy
If you are unsure how to set up a reverse proxy, or even what one is, this guide isn't for you. There are far better guides out there, so follow them to set up your reverse proxy.

As of `v0.1.0-beta` there is no special configuration required to run Drop behind a reverse proxy.

## VPN
If you are unsure how to setup a VPN for remote access, please find and follow a far better guide than this one. 

Accessing Drop over a VPN works very similarly to [accessing via LAN](#lan), so follow those steps.