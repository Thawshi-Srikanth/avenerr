import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl border-t px-6">
          <span className="text-caption -ml-6 -mt-3.5 block w-max bg-red-500 px-6 ">
            Contact Us
          </span>
          <div className=" flex flex-col mt-12 justify-end items-end md:grid w-full md:grid-cols-2 md:gap-12">
            <div className="order-last mt-6 flex flex-col gap-12 md:order-first sticky md:top-24 ">
              <div className="space-y-6">
                <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
                  Get Quality. Reach Avenierr.
                </h2>
                <p className="text-muted-foreground">
                  From medicine supplies to orthopaedic and surgical product
                  inquiries, our experts are here to guide you. Connect with us
                  for accurate information and dependable support.
                </p>
                <div className="relative w-full h-full">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63379.409909631715!2d79.880213!3d6.865045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a5187bb0c23%3A0x106e6116d34eb8fb!2s14%20Anderson%20Rd%2C%20Dehiwala-Mount%20Lavinia%2010350%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1763469232991!5m2!1sen!2sus"
                    className="h-full w-full min-h-[400px] border"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <Card className="mx-auto w-full h-full p-8 shadow-md sm:p-16 rounded-none border-primary">
              <form
                action=""
                className="**:[&>label]:block space-y-6 *:space-y-3"
              >
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    type="text"
                    id="name"
                    required
                    className=" rounded-none"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Work Email</Label>
                  <Input
                    type="email"
                    id="email"
                    required
                    className=" rounded-none"
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country/Region</Label>
                  <Select>
                    <SelectTrigger className=" rounded-none">
                      <SelectValue placeholder="Select Country/Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">DR Congo</SelectItem>
                      <SelectItem value="2">United States</SelectItem>
                      <SelectItem value="3">France</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="msg">Message</Label>
                  <Textarea
                    id="msg"
                    rows={8}
                    className=" rounded-none h-full"
                  />
                </div>

                <Button>Submit</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
