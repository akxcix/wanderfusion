import TypographyH1 from "@/components/typography/h1";
import ButtonLink from "@/components/ui/buttonLink";
import CalendarViewer from "../calendar/viewer";
import { DateRange } from "react-day-picker";
import * as React from "react";
import { addDays } from "date-fns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Profile = () => {
  const calendars = [
    {
      id: "cal1",
      name: "Public",
      dates: [
        {
          from: "2023-08-21T19:42:04.396Z",
          to: "2023-08-26T19:42:04.396Z",
        },
      ],
    },
    {
      id: "cal2",
      name: "Buildspace IRL",
      dates: [
        {
          from: "2023-09-26T19:42:04.396Z",
          to: "2023-10-05T19:42:04.396Z",
        },
      ],
    },
    {
      id: "cal3",
      name: "Japan with homies",
      dates: [
        {
          from: "2023-08-09T19:42:04.396Z",
          to: "2023-08-21T19:42:04.396Z",
        },
      ],
    },
  ];

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), -5),
    to: addDays(new Date(), 5),
  });

  const callbacklog = (x) => {
    console.log(x);
    const selectedCal = calendars.filter((r) => r.id === x);
    if (selectedCal) {
      const selectedDate = selectedCal.at(0)?.dates.at(0);
      if (selectedDate) {
        const dateRange = {
          from: new Date(selectedDate.from),
          to: new Date(selectedDate.to),
        };
        setDate(dateRange);
      }
    }
  };

  return (
    <div>
      <TypographyH1>Hello, @akxcix</TypographyH1>
      <div className="flex flex-row p-2 space-x-2 rounded-md border">
        <div className="flex flex-col">
          <div>
            <SelectCal calendars={calendars} callback={callbacklog} />
          </div>
          <div>
            <CalendarViewer date={date} />
            <ButtonLink
              variant="default"
              href="/calendar/update"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Add Dates
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectCal = ({ calendars, callback }) => {
  return (
    <div>
      <Select
        onValueChange={(x) => {
          if (callback) callback(x);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Calendar" />
        </SelectTrigger>
        <SelectContent>
          {calendars.map((x) => (
            <SelectItem key={x.id} value={x.id}>
              {x.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Profile;
