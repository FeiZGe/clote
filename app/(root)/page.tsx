import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: {
  searchParms: Promise<{ query: string }>;
}) {

  const query = (await searchParams).query;

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">เก็บทุกงาน<br />ในชั้นเรียนไว้ที่เดียว</h1>
        <p className="sub-heading !max-w-3xl">
          จัดการโน้ต สรุปเนื้อหา และติดตามความก้าวหน้าของวิชาเรียนได้อย่างง่ายดาย
        </p>

        <SearchForm query={query} />
      </section>

    </>
  );
}
