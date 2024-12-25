# Quickstart
This guide quickly runs through how to get set up with Drop in about five minutes, depending on your experience. 

## Setting up the instance

The easiest way to get Drop running is using our pre-built Docker container. 

```yaml compose.yaml
services:
  postgres:
    image: postgres:14-alpine
    ports:
      - 5432:5432
    healthcheck:
      test: ["CMD-SHELL", "pg_isready", "-d", "postgres"]
      interval: 30s
      timeout: 60s
      retries: 5
      start_period: 10s
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=drop
      - POSTGRES_USER=drop
      - POSTGRES_DB=drop
  drop:
    image: registry.deepcore.dev/drop-oss/drop/main:latest
    depends_on:
      postgres:
        condition: service_healthy
    ports:
      - 3000:3000
    volumes:
      - ./library:/library
      - ./certs:/certs
      - ./objects:/objects
    environment:
      - DATABASE_URL=postgres://drop:drop@postgres:5432/drop
      - FS_BACKEND_PATH=/objects
      - CLIENT_CERTIFICATES=/certs
      - LIBRARY=/library
      - GIANT_BOMB_API_KEY=REPLACE_WITH_YOUR_KEY
```

**The main things in this `compose.yaml` is the volumes attached to the `drop` service:**

1. `./library` is where you will put your games to be imported into Drop. See '[Structuring your library](/docs/library.md#structuring-your-library)' once you're set up.
2. `./certs` is where Drop will store cryptographic certificates relating to the function of Drop end clients and the connections between them. In order to make sure the traffic isn't being snooped on, keep this directory safe.
3. `./objects` is where Drop will store uploaded & downloaded files (from metadata providers)


**In addition, configure your chosen metadata provider:**

- [GiantBomb](/metadata/giantbomb.md) (only one supported as of v0.1.0-beta)

::: tip
If you want to, you can generate a more secure PostgreSQL username & password.
:::

Once your instance is running, [create your admin account](/guides/create-admin-account.md).

## Setting up a client

To set up a client, your Drop instance will have to be accessible from it. See [Exposing your instance](/guides/exposing.md) for information on how to do that.

First, download the latest client for your platform from [the GitHub releases page](https://github.com/Drop-OSS/drop-app/releases). Then, install it for your platform. If we don't have a binary available for your platform, please create an issue on [the Drop app repository](https://github.com/Drop-OSS/drop-app) and we'll investigate it.

Once installed, open the Drop app for the first time. There is an automated wizard that'll walk you through the steps of signing into your Drop instance. 