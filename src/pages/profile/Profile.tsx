import Calendar from "@/components/commons/calendar/Calendar";
import TypographyH1 from "@/components/typography/h1";
import ButtonLink from "@/components/ui/buttonLink";

const Profile = () => {
  return (
    <div>
      <TypographyH1>Hello, @akxcix</TypographyH1>
      <ButtonLink
        variant="default"
        href="/calendar/update"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Add Dates
      </ButtonLink>
      <Calendar />
    </div>
  );
};

export default Profile;
