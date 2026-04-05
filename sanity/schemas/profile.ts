import { defineField, defineType } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Professional Title",
      type: "string",
      description: 'e.g. "Frontend Developer", "Lead Guitarist"',
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "longBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  "github",
                  "linkedin",
                  "twitter",
                  "instagram",
                  "youtube",
                  "dribbble",
                  "behance",
                  "spotify",
                  "soundcloud",
                  "website",
                ],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "resume",
      title: "Resume / CV",
      type: "file",
    }),
    defineField({
      name: "ownerType",
      title: "Owner Type",
      type: "string",
      description: "Adjusts AI personality for the chat theme",
      options: {
        list: ["developer", "designer", "musician", "artist", "photographer", "other"],
      },
      initialValue: "developer",
    }),
    defineField({
      name: "accentColor",
      title: "Accent Color",
      type: "string",
      description: "Hex color for theming (e.g. #6366f1)",
      initialValue: "#6366f1",
    }),
    defineField({
      name: "enabledThemes",
      title: "Enabled Themes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Chat AI", value: "chat" },
          { title: "Game / Codex", value: "game" },
          { title: "Podcast", value: "podcast" },
        ],
      },
      initialValue: ["chat", "game", "podcast"],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "avatar" },
  },
});
