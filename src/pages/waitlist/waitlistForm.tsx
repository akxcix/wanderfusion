import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitWaitlistForm } from "@/network/client";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const WaitlistForm = () => {
  const { toast } = useToast();
  const [buttonState, setButtonState] = useState<"processing" | "active">(
    "active"
  );

  const formSchema = z.object({
    name: z.string().min(1, "Name is required."),
    mail: z.string().email("Invalid email address."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setButtonState("processing");
    submitWaitlistForm(values).then(({ status, message }) => {
      if (status === "error") {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } else {
        toast({
          description: message,
        });
      }
      setButtonState("active");
    });
  }

  return (
    <div className="flex flex-col p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input placeholder="naruto" {...field} />
                </FormControl>
                <FormDescription>what should we call you?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>mail</FormLabel>
                <FormControl>
                  <Input placeholder="naruto@wanderfusion.com" {...field} />
                </FormControl>
                <FormDescription>
                  where should we send the invite?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormButton state={buttonState} />
        </form>
      </Form>
    </div>
  );
};

type FormButtonProps = {
  state: "processing" | "active";
};

const FormButton: React.FC<FormButtonProps> = ({ state }) => {
  if (state === "active") {
    return <ButtonSubmit />;
  } else {
    return <ButtonLoading />;
  }
};

const ButtonSubmit = () => {
  return <Button type="submit">Submit</Button>;
};

const ButtonLoading = () => {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
};

export default WaitlistForm;
