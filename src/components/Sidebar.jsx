import { cn } from "../lib/utils";
import MePicture from "../img/me.jpg";
import { EmailIcon, WebsiteIcon, GithubIcon, LinkedInIcon } from "./Icons";

const Sidebar = (props) => {
  return (
    <div class={cn("w-72 bg-theme-3 text-white flex flex-col", props.class)}>
      <div class=" relative isolate rounded-full p-2 border-2 border-white">
        <div class="absolute inset-2 rounded-full bg-theme-1 z-20 opacity-5"></div>
        <img src={MePicture} alt="Me" class="rounded-full z-10" />
      </div>

      {/* Name & Description */}
      <h1 className="mt-8 text-theme-2 font-medium text-xl">MOHAMAD NOWRUZI</h1>
      <h2 className="text-theme-2 font-medium text-lg">WEB DEVELOPER</h2>
      <p class="mt-2 text-sm leading-7">
        Working professionally since 2014 on web projects specially in small
        startup teams. Backed by strong engineering foundations and extensive
        low-level programming knowledge I'm ready to tackle new challenges.
      </p>

      {/* Education */}
      <h3 className="mt-8 text-theme-2 font-medium text-lg">EDUCATION</h3>
      <p class="mt-2 text-sm leading-7">
        Bachelor's Degree
        <br />
        In Computer Engineering
        <br />
        Razi University, Kermanshah, Iran
        <br />
        2013 — 2018
      </p>

      {/* Contact Me */}
      <div class="mt-16 flex flex-col gap-2 text-sm leading-7">
        <div class="flex items-center gap-2">
          <EmailIcon class="w-5 h-5" />
          <span class="relative bottom-px">madnowruzi@gmail.com</span>
        </div>
        <div class="flex items-center gap-2">
          <WebsiteIcon class="w-5 h-5" />
          <span class="relative bottom-px">www.madloper.info</span>
        </div>
        <div class="flex items-center gap-2">
          <LinkedInIcon class="w-5 h-5" />
          <span class="relative bottom-px">madnowruzi</span>
        </div>
        <div class="flex items-center gap-2">
          <GithubIcon class="w-5 h-5" />
          <span class="relative bottom-px">madnowruzi</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
