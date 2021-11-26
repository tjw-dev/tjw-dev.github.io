import React from "react"
import styled from "astroturf/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TitlePrefix = styled.span`
  ${"@apply leading-normal font-title"};
`
const TitlePostfix = styled.span`
  background-clip: text;
  -webkit-text-fill-color: transparent;
  ${"@apply leading-normal font-title-light text-black bg-black"};
  ${"@apply bg-gradient-to-r from-purple-700 via-red-500 to-yellow-500"};
`

const SocialIcons = () => (
  <div className="flex font-normal leading-none align-middle text-center text-black dark:text-white sm:text-3xl md:text-5xl text-1xl transition-none">
    {/* }
      <a href="https://twitter.com/thejustinwalsh" className="flex-grow">
        <FontAwesomeIcon
          className="transform transition-transform duration-200 hover:scale-125"
          icon={faTwitter}
          size="1x"
          alt="twitter"
        />
        <span className="hidden">Twitter</span>
      </a>
      */}
    <a href="https://github.com/tjw-dev" className="flex-grow">
      <FontAwesomeIcon
        className="transform transition-transform duration-200 hover:scale-125"
        icon={faGithub}
        size="1x"
        alt="github"
      />
      <span className="hidden">Github</span>
    </a>
    {/* }
      <a href="https://www.linkedin.com/in/justinwalsh/" className="flex-grow">
        <FontAwesomeIcon
          className="transform transition-transform duration-200 hover:scale-125"
          icon={faLinkedin}
          size="1x"
          alt="linkedin"
        />
        <span className="hidden">LinkedIn</span>
      </a>
      */}
    <a href="https://discord.gg/SzxMh6GjS8" className="flex-grow">
      <FontAwesomeIcon
        className="transform transition-transform duration-200 hover:scale-125"
        icon={faDiscord}
        size="1x"
        alt="discord"
      />
      <span className="hidden">Discord</span>
    </a>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto h-full flex justify-center items-center">
      <div className="flex">
        <div className="px-6 text-left">
          <h1 className="sm:text-7xl md:text-8xl text-4xl md:text-left text-center">
            <TitlePrefix className="text-black dark:text-white transition-none">tjw</TitlePrefix>
            <TitlePostfix>.dev</TitlePostfix>
          </h1>
          <SocialIcons />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
