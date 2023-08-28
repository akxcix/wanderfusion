import TypographyH1 from "@/components/typography/h1";
import TypographyH2 from "@/components/typography/h2";
import TypographyH3 from "@/components/typography/h3";
import TypographyP from "@/components/typography/p";
import TypographyList from "@/components/typography/list";
import WaitlistForm from "../waitlist/waitlistForm";
import SplitCard from "@/components/commons/cards/splitcard";

const Home = () => {
  return (
    <div className="flex flex-col">
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

      <SplitCard imgSrc="https://wanderfusion.fra1.cdn.digitaloceanspaces.com/public/plane_pop_icon_dark_themed.png">
        <WaitlistForm />
      </SplitCard>
    </div>
  );
};

export default Home;
