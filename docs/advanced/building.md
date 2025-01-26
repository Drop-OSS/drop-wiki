# Building Drop server for other platforms

Unfortunately, we don't have the time or resources to build and debug our software for platforms other than x86-64. However, we offer this guide as a way to get it running, at your own risk.

## Prerequisites

To compile:

- Rust (stable)
- Node.js v20
- `yarn` (v1/legacy) package manager
- `git` VCS
- Docker

To run:

- Docker

## Building `droplet`

`droplet` is a high-performance utility package for the Drop server. It's a `napi.rs` module, meaning it's written in Rust and then compiled to an NPM module.

Get started by cloning the `droplet` source code, and then enter the directory:

```shell
git clone https://github.com/Drop-OSS/droplet.git
```

Install the dependencies with `yarn`:

```shell
yarn
```

And then compile the package with the build script:

```shell
yarn build
```

Because we're building this locally, setup the yarn link so we can use this package while building the server:

```shell
yarn link
```

## Building `drop`

`drop` is the self hosted server. It's a Nuxt 3 project, but depends on the `droplet` package so isn't easily transportable.

Get started by cloning the `drop` source code, and then enter the directory:

```shell
git clone https://github.com/Drop-OSS/drop.git
```

Then, link your build `droplet` package:

```shell
yarn link "@drop/droplet"
```

Then, install dependencies:

```shell
yarn
```

Then, build the application:

```
yarn build
```

To package it into a Docker container, remove the build commands in the provided `Dockerfile`'s build-system (`yarn install` and `yarn build`), and then build the Docker image:

```shell
docker build . -t drop
```
