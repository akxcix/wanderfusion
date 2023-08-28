import TypographyH1 from "@/components/typography/h1";
import TypographyH2 from "@/components/typography/h2";
import TypographyH4 from "@/components/typography/h4";
import TypographyP from "@/components/typography/p";
import WaitlistForm from "./waitlistForm";
import SplitCard from "@/components/commons/cards/splitcard";

const Waitlist = () => {
  return (
    <div className="flex flex-col">
      <TypographyH1>Waitlist</TypographyH1>
      <TypographyH2>Join the WanderFusion Waitlist!</TypographyH2>
      <TypographyP>
        Ready to explore the world with friends and family like never before?
        You're just one step away from making travel planning as easy as a
        high-five. 🌏✋
      </TypographyP>
      <SplitCard imgSrc="https://wanderfusion.fra1.cdn.digitaloceanspaces.com/public/plane_pop_icon_dark_themed.png">
        <WaitlistForm />
      </SplitCard>
      <TypographyH4>
        Get ready to change the way you travel with friends. See you on the
        other side!
      </TypographyH4>
    </div>
  );
};

export default Waitlist;
