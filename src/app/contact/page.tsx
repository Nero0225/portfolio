import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Heading>Contact Us</Heading>
      <div className="mt-8 max-w-md mx-auto">
        <form className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              className="min-h-[100px]"
            />
          </div>
          <div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage; 