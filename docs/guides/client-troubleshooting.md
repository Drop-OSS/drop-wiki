# Troubleshooting

## I'm on Linux, with Nvidia proprietary drivers, and Drop won't launch

Add `WEBKIT_DISABLE_DMABUF_RENDERER=1` to the Drop .desktop file:

1. Open `/usr/share/applications/Drop\ Desktop\ Client.desktop` with your preferred editor
2. Add `env WEBKIT_DISABLE_DMABUF_RENDERER=1` before `drop-app` on the `Exec=drop-app` line

## "Server's and client's time is out of sync..." or HTTP 0

The server and client must be within 30 seconds of each other for security reasons. Drop uses short-lived tokens to authenticate securely, and they are valid for those 30 seconds. If you are the server administrator, please ensure both your server and client have the correct time. If you are a user, please double check your own system before asking your admin.
