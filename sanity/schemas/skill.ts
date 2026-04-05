import { defineField, defineType } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["frontend", "backend", "design", "devops", "music", "other"],
      },
    }),
    defineField({
      name: "level",
      title: "Proficiency Level",
      type: "number",
      description: "1-5 scale",
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
