import {
  Gemini,
  Replit,
  GooglePaLM,
  MagicUI,
  VSCodium,
  MediaWiki,
} from "@/components/logos";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto flex flex-col px-6 md:grid max-w-7xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-6 flex flex-col gap-12 md:order-first sticky md:top-24 ">
            <div className="space-y-6">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
                Integrate with your favorite LLMs
              </h2>
              <p className="text-muted-foreground">
                Connect seamlessly with popular platforms and services to
                enhance your workflow.
              </p>
              <div className="relative w-full h-full">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63379.409909631715!2d79.880213!3d6.865045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a5187bb0c23%3A0x106e6116d34eb8fb!2s14%20Anderson%20Rd%2C%20Dehiwala-Mount%20Lavinia%2010350%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1763469232991!5m2!1sen!2sus"
                  className="h-full w-full min-h-[250px] border"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <Card className="mx-auto w-full p-8 shadow-md sm:p-16 rounded-none">
            <form
              action=""
              className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
            >
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input type="text" id="name" required />
              </div>

              <div>
                <Label htmlFor="email">Work Email</Label>
                <Input type="email" id="email" required />
              </div>

              <div>
                <Label htmlFor="country">Country/Region</Label>
                <Select>
                  <SelectTrigger>
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
                <Label htmlFor="website">Company Website</Label>
                <Input type="url" id="website" />
                <span className="text-muted-foreground inline-block text-sm">
                  Must start with 'https'
                </span>
              </div>

              <div>
                <Label htmlFor="job">Job function</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Job Function" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Finance</SelectItem>
                    <SelectItem value="2">Education</SelectItem>
                    <SelectItem value="3">Legal</SelectItem>
                    <SelectItem value="4">More</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" rows={3} />
              </div>

              <Button>Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
