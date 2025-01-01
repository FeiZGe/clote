import NoteCard, { NoteTypeCard } from "@/components/NoteCard";
import SearchForm from "@/components/SearchForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { NOTES_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query: string }>;
}) {

  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: NOTES_QUERY, params });

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">Keep All Your Classwork <br/> in One Place</h1>
        <p className="sub-heading !max-w-3xl">
          Easily manage notes, summarize content, and track your course progress.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Result: "${query}"` : "All Notes"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: NoteTypeCard) => (
              <NoteCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">Not found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
