import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import events from "../events.json";
import { fromImageToUrl } from "../utils/urls";
import { priceFormatter } from "../utils/format";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salsology</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000" />
        <meta name="apple-mobile-web-app-title" content="Salsology" />
        <meta name="application-name" content="Salsology" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#ff0000" />
        {/* SEO */}
        {/* Todo - Pull these from Strapi */}
        <meta
          name="keywords"
          content="Salsa, dancing, Bachata, Salsa classes, Bolton, Salsafix, Salsa Fix, Salsology, Prestwich, Manchester, Horwich,"
        />
        <meta
          name="description"
          content="Upcoming Salsa events and Salsa dance classes in the North West and also details of events nationwide which feature DJ Gillian 'Salsa Fix'"
        />
      </Head>

      <h1>Events</h1>
      {events.map((event) => (
        <div key={event.EventName} className={styles.events}>
          <Link href={`/events/${event.EventSlug}`}>
            <a>
              <div className={styles.event__Row}>
                <div className={styles.event__ColImg}>
                  <img src={fromImageToUrl(event.EventImage)} />
                </div>
                <div className={styles.event__Col}>
                  {event.EventName} || {priceFormatter(event.EventPrice)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
