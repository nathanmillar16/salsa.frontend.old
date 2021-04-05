import Link from "next/link";

export default () => (
  <footer>
    Salsology © {new Date().getFullYear()} All rights Reserved ||{" "}
    <Link href="//nathanmillar.co.uk">
      <a>Created with love by Nathan J Millar</a>
    </Link>
  </footer>
);
