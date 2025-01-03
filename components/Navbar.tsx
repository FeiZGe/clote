import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-prompt'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={75} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
              <>
                <Link href="/note/create">
                  <span>Create</span>
                </Link>

                <form action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}>
                  <Button variant="ghost" type="submit">
                    Logout
                  </Button>
                </form>

                <Link href={`/user/${session?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
          ) : (
            <form action={async () => {
              "use server";

              await signIn('github')
            }}>
              <Button variant="outline" type="submit">
                Login
              </Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar