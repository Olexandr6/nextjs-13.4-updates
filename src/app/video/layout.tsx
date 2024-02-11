import Link from "next/link";

export default function VideoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Videos</h1>

      <nav>
        <Link href="/video/all">All videos</Link>
        <Link href="/video/favorites">Favorites</Link>
      </nav>

      {children}
    </>
  );
}