import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.campfire.camp/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.campfire.camp/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.campfire.camp/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.campfire.camp/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.campfire.camp/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.campfire.camp/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.campfire.camp",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.campfire.camp/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.campfire.camp/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://www.facebook.com/CAMP-GLOBAL-107839080680846",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "한국어",
        href: "https://t.me/CAMPKOR",
      },
    ],
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/campfire-DeFi",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
