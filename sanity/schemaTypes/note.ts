import { defineField, defineType } from "sanity";

export const note = defineType({
  name: "note",
  title: "Note",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: 'title',
        maxLength: 50, // จำกัดความยาวของ slug
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^ก-๙a-z0-9\s-]/g, '') // ลบตัวอักษรที่ไม่จำเป็น
            .trim()
            .replace(/\s+/g, '-'), // แปลงช่องว่างเป็น "-"
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      type: "number",
      initialValue: 0, // ค่าเริ่มต้น
      validation: (Rule) => 
        Rule.min(0).error("จำนวน views ต้องไม่น้อยกว่า 0"),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("กรุณากรอกประเภทของโน๊ต"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});