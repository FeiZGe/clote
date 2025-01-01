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

export const NOTE_BY_ID_QUERY = defineQuery(`*[_type == "note" && _id == $id][0] {
  _id, 
  title,
  slug, 
  _createAt, 
  author -> {
    _id, name, username, image, bio
  }, 
  views,
  description, 
  category, 
  image,
  pitch,
}`)

export const NOTE_VIEWS_QUERY = defineQuery(`
    *[_type == "note" && _id == $id][0]{
        _id, views
    }
`);