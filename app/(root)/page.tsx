import NoteCard from "@/components/NoteCard";
import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query: string }>;
}) {

  const query = (await searchParams).query;

  const posts = [{ 
    _createAt: new Date(),
    views: 100,
    author: { _id: 1, name: "XiaoFei" },
    _id: 1,
    description: "this is a description",
    image: "https://images.unsplash.com/photo-1463436755683-3f805a9d1192?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "สอบ",
    title: "ข้อสอบปลายภาค",
   }]

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
            posts.map((post: NoteTypeCard, index: number) => (
              <NoteCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">ไม่พบโน๊ต</p>
          )}
        </ul>
      </section>
    </>
  );
}
