import TypographyH1 from "@/components/typography/h1";
import TypographyH2 from "@/components/typography/h2";
import TypographyH3 from "@/components/typography/h3";
import TypographyP from "@/components/typography/p";
import TypographyList from "@/components/typography/list";
import ButtonLink from "@/components/ui/buttonLink";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* <TypographyH1>WanderFusion</TypographyH1>
      <TypographyH1>The Ultimate Group Travel Planner</TypographyH1>
      <TypographyH3>Plan. Propose. Perfect.</TypographyH3>
      <TypographyP>
        Traveling with friends and family just became a whole lot easier.
        WanderFusion is your all-in-one solution to plan trips with your loved
        ones. Say goodbye to long chats and scattered plans. With WanderFusion,
        every decision is collective, every plan is synchronized.
      </TypographyP>
      <TypographyH2>Features:</TypographyH2>
      <TypographyList>
        <li>
          Slot Selection for Travel: Propose your travel time slots and let your
          friends overlay theirs. Find the perfect time window where everyone's
          available.
        </li>
        <li>
          Group Input: Let everyone voice their preferences. Whether it's
          destination ideas or dining spots, group decisions are now genuinely
          democratic.
        </li>
        <li>
          End-to-End Planning: From selecting travel dates to itinerary
          planning, WanderFusion offers a comprehensive trip planning
          experience.
        </li>
        <li>
          Notifications & Updates: Stay in the loop with real-time notifications
          whenever someone proposes a change or confirms a plan.
        </li>
        <li>
          Seamless Integrations: Sync your calendar, flights, and hotel
          bookings. Everything you need, all in one place.
        </li>
      </TypographyList>
      <p>
        Be One of the First to Experience WanderFusion!
        <br />
        We're getting ready to launch. If you're as excited as we are and want
        to be one of the first to try WanderFusion, sign up for our waitlist.
      </p> */}

      <TypographyH1>WanderFusion</TypographyH1>
      <TypographyH2>
        Your Travel Buddy for the Ultimate Group Getaways
      </TypographyH2>
      <TypographyH3>Get Ready. Propose. Explore. Enjoy.</TypographyH3>
      <TypographyP>
        Gone are the days of juggling group chats and scattered plans.
        Introducing WanderFusion, the one-stop destination to make your trips
        with friends and family as smooth as a breeze. Planning together? Now
        it’s not just possible, it's fun!
      </TypographyP>
      <TypographyH3>
        Here's what makes WanderFusion your next travel companion:
      </TypographyH3>
      <TypographyList>
        <li>
          Sync & Select Availability: Show your calendar-like slots, and let
          your buddies chime in. Find the perfect time when everyone's free, all
          in one place.
        </li>
        <li>
          Real-Time Itinerary Collaboration: Explore places, flights, hotels,
          and make decisions together. Your next adventure starts in the
          planning!
        </li>
        <li>
          Keep Travel Docs Handy: Private and group attachments mean all your
          important travel documents are just a click away.
        </li>
        <li>
          Chat & Expense Tracker: A common chat system to share those crazy
          ideas, and a payments tracker to ensure everyone’s paying their share
          (you know, just in case).
        </li>
        <li>
          Never Forget with Automatic Reminders: Because we all have that one
          friend who always forgets something.
        </li>
        <li>
          Get Social, Be an Explorer: Create a profile, showcase your trips,
          build an audience. Share your wanderlust with the world!
        </li>
        <li>
          Joint Calendar: Wanna see who's busy when? Check out the joint
          calendar and never miss a chance to hang out.
        </li>
      </TypographyList>
      <TypographyH3>WanderFusion is Almost Here!</TypographyH3>
      <TypographyP>
        We're packing our bags and getting ready for launch. If you're as
        thrilled as we are, don't just wait around – sign up for our waitlist
        and be among the first to embark on a journey with WanderFusion!
      </TypographyP>

      <ButtonLink variant="default" href="/waitlist">
        Join the waitlist!
      </ButtonLink>
    </div>
  );
};

export default Home;
