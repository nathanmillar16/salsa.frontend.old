import Head from "next/head";
import { API_URL, fromImageToUrl } from "../../utils/urls";
import { priceFormatter } from "../../utils/format";

const Event = ({ event }) => {
  return (
    <div>
      <Head>
        {event.EventName} && <title>{event.EventName} - Salsology</title>
        {event.EventDescription && (
          <meta name="description" content={event.EventDescription} />
        )}
        {/* May need canonical link attr */}
      </Head>
      <h3>{event.EventName}</h3>
      <img src={fromImageToUrl(event.EventImage)} />
      <p>{priceFormatter(event.EventPrice)}</p>

      <i>{event.EventDescription}</i>
    </div>
  );
};

export async function getStaticProps({ params: { EventSlug } }) {
  const event_res = await fetch(`${API_URL}/events/?EventSlug=${EventSlug}`);
  //localhost:1337/events/?EventSlug=dance-event-2
  const found_event = await event_res.json();

  return {
    props: {
      event: found_event[0],
    },
  };
}

export async function getStaticPaths() {
  const events_res = await fetch(`${API_URL}/events/`);
  const events = await events_res.json();

  return {
    paths: events.map((event) => ({
      params: { EventSlug: String(event.EventSlug) },
    })),
    //show 404 if page not matched
    fallback: false,
  };
}

export default Event;
