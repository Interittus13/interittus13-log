const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Arpit Gupta",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "DevOps Engineer",
    bio: "👨‍💻 I'm a DevOps wizard on a mission to orchestrate seamless software magic, ensuring that code and systems dance in perfect harmony.",
    email: "arpt.gupta@outlook.com",
    linkedin: "interittus13",
    github: "Interittus13",
    instagram: "",
  },
  projects: [
    {
      name: `interittus13-log`,
      href: "https://github.com/Interittus13/interittus13-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "interittus13-log",
    description: "welcome to interittus13-log!",
  },

  // CONFIG configration (required)
  link: "https://interittus13-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
