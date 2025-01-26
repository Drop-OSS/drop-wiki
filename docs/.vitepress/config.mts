import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Drop",
  description:
    "Drop is an open-source, self-hosted game distribution platform. Like Steam!",
  head: [["link", { rel: "icon", href: "/drop.svg" }]],
  themeConfig: {
    logo: "/drop.svg",
    footer: {
      message:
        "If you have any suggestions to update this wiki, please submit them on our GitHub",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "GitHub", link: "https://github.com/Drop-OSS" },
    ],

    sidebar: [
      { text: "What is Drop?", link: "/about" },
      { text: "Roadmap", link: "/roadmap" },
      {
        text: "Admin Guides",
        items: [
          { text: "Quickstart", link: "/guides/quickstart" },
          { text: "Exposing your instance", link: "/guides/exposing" },
          {
            text: "Create your admin account",
            link: "/guides/create-admin-account",
          },

          { text: "Troubleshooting", link: "/guides/server-troubleshooting" },
        ],
      },
      {
        text: "User Guides",
        items: [
          { text: "Getting started with Drop", link: "/guides/client" },
          { text: "Troubleshooting", link: "/guides/client-troubleshooting" },
        ],
      },
      {
        text: "Metadata",
        items: [{ text: "GiantBomb", link: "/metadata/giantbomb" }],
      },
      {
        text: "Advanced",
        items: [
          { text: "Building for other platforms", link: "/advanced/building" },
        ],
      },
      {
        text: "Documentation",
        items: [{ text: "Library", link: "/docs/library" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Drop-OSS" },
      { icon: "discord", link: "https://discord.gg/NHx46XKJWA" },
    ],

    outline: {
      level: [2, 3],
    },
  },
});
