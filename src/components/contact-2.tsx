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
              <Button variant="outline" size="sm" asChild>
                <Link href="#">Get Started</Link>
              </Button>
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
