import Head from "next/head";
import events from "../../events.json";
import { fromImageToUrl } from "../../utils/urls";
import { priceFormatter } from "../../utils/format";
const event = events[0];

const Event = () => {
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

export default Event;
