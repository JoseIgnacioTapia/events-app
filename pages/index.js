import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

// We should use getStaticProps to pre-render the page during the build process and  potentially on the server if we set revalidate to a certain value so that we have a mostly updated page. For this king of page we don´t need server side rendering to pre-render it for every request

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
