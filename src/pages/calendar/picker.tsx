import TypographyH2 from "@/components/typography/h2";
import { DatePickerWithRange } from "@/components/ui/daterangepicker";
import { toast } from "@/components/ui/use-toast";

const CalendarPicker = () => {
  const toastdate = (x) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(x, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <div>
      <TypographyH2>Pick Dates</TypographyH2>
      <DatePickerWithRange onSelectedDates={toastdate} />
    </div>
  );
};

export default CalendarPicker;
