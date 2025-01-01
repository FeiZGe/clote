import NoteCard, { NoteTypeCard } from "@/components/NoteCard";
import SearchForm from "@/components/SearchForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { NOTES_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query: string }>;
}) {

  const query = (await searchParams).query;

  const { data: posts } = await sanityFetch({ query: NOTES_QUERY });

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">เก็บทุกงาน<br />ในชั้นเรียนไว้ที่เดียว</h1>
        <p className="sub-heading !max-w-3xl">
          จัดการโน้ต สรุปเนื้อหา และติดตามความก้าวหน้าของวิชาเรียนได้อย่างง่ายดาย
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `ผลการค้นหา "${query}"` : "โน๊ตทั้งหมด"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: NoteTypeCard) => (
              <NoteCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">ไม่พบโน๊ต</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
