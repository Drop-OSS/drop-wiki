# Troubleshooting

## I'm on Linux, with Nvidia proprietary drivers, and Drop won't launch
Add `WEBKIT_DISABLE_DMABUF_RENDERER=1` to the Drop .desktop file:

1. Open `/usr/share/applications/Drop\ Desktop\ Client.desktop` with your preferred editor
2. Add `WEBKIT_DISABLE_DMABUF_RENDERER=1` before `drop-app` on the `Exec=drop-app` line

