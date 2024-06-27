// eslint-disable-next-line no-unused-vars
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [longUrl, setlongUrl] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();

    if (longUrl) {
      navigate(`/auth?createNew=${longUrl}`);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-20 sm:my-16 text-3xl sm:text-6x lg:text-7xl text-white text-center font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need 👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          onChange={(e) => setlongUrl(e.target.value)}
          placeholder="Enter your long URL"
          className="h-full flex-1 py-4 px-4"
        />
        <Button
          className="h-full px-8 text-xl"
          type="submit"
          variant="destructive"
        >
          Shorten!
        </Button>
      </form>
      <img src="/banner.jpeg" alt="banner" className="w-full my-11 md:px-11" />

      <Accordion
        type="multiple"
        collapsible
        className="w-full md:px-11 text-white/80"
      >
        <AccordionItem value="item-1" className="py-2">
          <AccordionTrigger>
            Do I need an accoutn to use the app ?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allowd you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="py-2">
          <AccordionTrigger>
            what analytics are available for my shortend URLs ?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks
            and devices types (mobile/desktop) for each of your shortendn URLs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="py-2">
          <AccordionTrigger>
            How does the Trimrr URL shortener works?{" "}
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortend URL redirects to the origninal logn URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Landing;
