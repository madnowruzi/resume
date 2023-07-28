import { For } from "solid-js";
import { cn } from "../lib/utils";

const Experiences = (props) => {
  return (
    <div class={cn("flex flex-col", props.class)}>
      <h2 class="text-theme-2 font-medium text-xl uppercase">
        Professional Experiences
      </h2>
      <ol class="list-none flex flex-col gap-5 mt-6 text-sm">
        <li>
          <h3 class="text-theme-2 font-medium text-lg uppercase flex items-center">
            Mayan Finance
            <span class="text-sm pl-2">&bull; 2022 — 2023</span>
          </h3>
          <div class="mt-1 flex flex-col gap-1 leading-1 pl-2">
            <p>
              Back-End Developer in DeFi Projects{" "}
              <a
                class="underline font-medium"
                href="https://tradeboard.io"
                target="_blank"
              >
                tradeboard.io
              </a>{" "}
              and{" "}
              <a
                class="underline font-medium"
                href="https://mayan.finance"
                target="_blank"
              >
                mayan.finance
              </a>{" "}
              on Ethereum and Solana.
            </p>
            <p>
              Used mostly NestJS, ethers.js, Redis and Postgres(with Timescale).
            </p>
            <p>Setup CI/CD using Github Actions, Kubernetes and Docker.</p>
            <p>Developed the fault-tolerant Relayer of MayanSwap.</p>
          </div>
        </li>

        <li>
          <h3 class="text-theme-2 font-medium text-lg uppercase flex items-center">
            Better products
            <span class="text-sm pl-2">
              &bull; 2022 <span class="text-xs uppercase">Part Time</span>
            </span>
          </h3>
          <div class="mt-1 flex flex-col gap-1 leading-1 pl-2">
            <p>
              Full-Stack Developer using Express, React, Mobx, Yjs and Postgres.
            </p>
            <p>
              Developed AWS Lambdas and setup AWS EventBridge and SQS. Also
              helped improve the existing Kubernetes and Docker configurations.
            </p>
          </div>
        </li>

        <li>
          <h3 class="text-theme-2 font-medium text-lg uppercase flex items-center">
            Legamart
            <span class="text-sm pl-2">&bull; 2021</span>
          </h3>
          <div class="mt-1 flex flex-col gap-1 leading-1 pl-2">
            <p>
              Back-End Developer joined to help rewrite{" "}
              <a
                class="underline font-medium"
                href="https://legamart.com"
                target="_blank"
              >
                legamart.com
              </a>{" "}
              from scratch in NestJS.
            </p>
            <p>
              I setup the scheduling system and the cron jobs using RabbitMQ,
              the payment system with KYC/KYB using mangopay and SSO Auth using
              Keycloack
            </p>
          </div>
        </li>

        <li>
          <h3 class="text-theme-2 font-medium text-lg uppercase flex items-center">
            Karsan Hatra
            <span class="text-sm pl-2">&bull; 2020</span>
          </h3>
          <div class="mt-1 flex flex-col gap-1 leading-1 pl-2">
            <p>
              As the Tech Lead I helped the company move into online fashion
              business.
            </p>
            <p>
              We developed in Laravel and Livewire to iterate fast and achieve a
              very fast and zero-JS UI.
            </p>
          </div>
        </li>

        <li>
          <h3 class="text-theme-2 font-medium text-lg uppercase flex items-center">
            Freelancing
            <span class="text-sm pl-2">&bull; 2018 — 2019</span>
          </h3>
          <div class="mt-1 flex flex-col gap-1 leading-1 pl-2">
            <p>
              Full-Stack Developer using mostly Laravel, Vue.js and Wordpress.
            </p>
          </div>
        </li>

        <li>
          <h3 class="text-theme-2 font-medium text-lg uppercase flex items-center">
            Kani Mehr
            <span class="text-sm pl-2">&bull; 2015 — 2017</span>
          </h3>
          <div class="mt-1 flex flex-col gap-1 leading-1 pl-2">
            <p>
              Joined the team as a Back-End Developer for the new version of{" "}
              <a
                class="underline text-medium"
                href="https://www.vcp.ir"
                target="_blank"
              >
                vcp.ir
              </a>
              .
            </p>
            <p>
              Using PHP, I Developed a multi-tenant payment and subscription
              system, Alongside a multi-provider domain management system.
            </p>
          </div>
        </li>

        <li>
          <h3 class="text-theme-2 font-medium text-lg uppercase flex items-center">
            Fanavari Etelaat va Ertebatat-e Gharb
            <span class="text-sm pl-2">&bull; 2014</span>
          </h3>
          <div class="mt-1 flex flex-col gap-1 leading-1 pl-2">
            <p>
              Full-Stack Developer on a governmental Project for automating
              Tenders. Used Vanilla PHP and CSS and Developed a Workflow Engine
              from scratch.
            </p>
          </div>
        </li>
      </ol>
      <div class="flex-1 flex items-end text-xs tracking-tighter opacity-40 pb-4">
        <ol class="list-none flex flex-wrap gap-1">
          <li># Data Structures</li>
          <li># Design Patterns</li>
          <li># SOLID Principles</li>
          <li># TDD</li>
          <li># JavaScript</li>
          <li># TypeScript</li>
          <li># NodeJS</li>
          <li># ExpressJS</li>
          <li># NestJS</li>
          <li># Next.js</li>
          <li># PHP</li>
          <li># Laravel</li>
          <li># Wordpress</li>
          <li># React</li>
          <li># Vue.js</li>
          <li># SQL</li>
          <li># MySQL</li>
          <li># Postgres</li>
          <li># MongoDB</li>
          <li># Redis</li>
          <li># RabbitMQ</li>
          <li># Kubernetes</li>
          <li># Docker</li>
          <li># AWS</li>
          <li># Linux</li>
          <li># Git</li>
          <li># Github</li>
          <li># OAuth2</li>
        </ol>
      </div>
    </div>
  );
};

export default Experiences;
