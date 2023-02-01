import './global.scss';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/cart">Cart</Link>
          </nav>
        </header>
        {children}
        <footer>
          A lot of sweat, anger and frustration from Daniel Koller went into
          this project.
        </footer>
      </body>
    </html>
  );
}
