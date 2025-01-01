import { defineQuery } from "next-sanity";

export const NOTES_QUERY = defineQuery(`*[_type == "note" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createAt desc) {
  _id, 
  title,
  slug, 
  _createdAt, 
  author -> {
    _id, name, image, bio
  }, 
  views,
  description, 
  category, 
  image
}`);