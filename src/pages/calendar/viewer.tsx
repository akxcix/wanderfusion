import { Calendar } from "@/components/ui/calendar";

const CalendarViewer = ({ date }) => {
  return (
    <div>
      <Calendar fromDate={date.from} toDate={date.to} />
    </div>
  );
};

export default CalendarViewer;
