import TypographyH1 from "@/components/typography/h1";
import TypographyH2 from "@/components/typography/h2";
import TypographyH4 from "@/components/typography/h4";
import TypographyP from "@/components/typography/p";
import WaitlistForm from "./waitlistForm";
import { Separator } from "@/components/ui/separator";

const Waitlist = () => {
  return (
    // <div>
    //   <TypographyH1>Waitlist</TypographyH1>
    //   <TypographyH2>Join the WanderFusion Waitlist!</TypographyH2>
    //   <TypographyH3>
    //     Simply enter your name and email below, and we'll notify you when
    //     WanderFusion is ready to take off!
    //   </TypographyH3>
    //   <div>
    //     <WaitlistForm />
    //   </div>
    //   <TypographyH3>Why Join?</TypographyH3>
    //   <TypographyList>
    //     <li>
    //       Be the First to Explore: Get exclusive early access and be among the
    //       first to experience WanderFusion's unique travel features.
    //     </li>
    //     <li>
    //       Stay in the Loop: Receive the latest updates, news, and special offers
    //       directly in your inbox.
    //     </li>
    //     <li>
    //       Join the Community: Connect with fellow travelers and be a part of the
    //       next big thing in group travel planning.
    //     </li>
    //   </TypographyList>
    //   <img
    //     className="py-20"
    //     src="https://raw.githubusercontent.com/akxcix/images/main/akxcix_paper_plane_pop_icon_dark_themed_a77a5135-3914-40e8-be1c-1ef495f361b2.png"
    //   />
    // </div>
    <div className="flex flex-col">
      <TypographyH1>Waitlist</TypographyH1>
      <TypographyH2>Join the WanderFusion Waitlist!</TypographyH2>
      <TypographyP>
        Ready to explore the world with friends and family like never before?
        You're just one step away from making travel planning as easy as a
        high-five. 🌏✋
      </TypographyP>
      <div className="flex flex-row p-2 space-x-8 rounded-md border">
        <div className="w-1/2 self-center	">
          <img
            className="w-max rounded-md border"
            src="https://raw.githubusercontent.com/akxcix/images/main/akxcix_paper_plane_pop_icon_dark_themed_a77a5135-3914-40e8-be1c-1ef495f361b2.png"
          />
        </div>
        <Separator orientation="vertical" />
        <div className="w-1/2">
          <WaitlistForm />
        </div>
      </div>
      <TypographyH4>
        Get ready to change the way you travel with friends. See you on the
        other side!
      </TypographyH4>
    </div>
  );
};

export default Waitlist;
