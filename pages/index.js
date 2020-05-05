import Head from "next/head";

import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/common/svg";
import * as Fixtures from "~/common/fixtures";

import { css } from "react-emotion";

import Navigation from "~/components/Navigation";
import Speakers from "~/components/Speakers";
import Schedule from "~/components/Schedule";
import Organizations from "~/components/Organizations";

const EVENT_URL = `https://www.eventbrite.com/e/ipfs-pinning-summit-registration-102720606098`;

const STYLES_SECTION = css`
  padding: 96px 24px 64px 24px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const STYLES_SECTION_HERO = css`
  padding: 96px 24px 64px 24px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const STYLES_INFO = css`
  padding: 16px;
  font-size: 1.414rem;
  line-height: 1.5;
  text-align: center;
  max-width: 568px;
`;

const STYLES_INFO_HERO = css`
  padding: 16px;
  font-size: 2rem;
  line-height: 1.5;
  text-align: center;
  max-width: 568px;
  color: ${Constants.colors.white};

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
    color: ${Constants.colors.teal};
  }
`;

const STYLES_INFO_HERO_BOTTOM = css`
  padding: 16px;
  font-size: 1.414rem;
  line-height: 1.5;
  text-align: center;
  max-width: 568px;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
    color: ${Constants.colors.teal};
  }
`;

const STYLES_H1 = css`
  font-family: "inter-semi-bold";
  font-size: 2.444rem;
  max-width: 768px;
  line-height: 1.1;
  font-weight: 400;
  padding: 24px;
  text-align: center; 
`;

const STYLES_H2 = css`
  font-size: 12px;
  letter-spacing: 4px;
  color: ${Constants.colors.teal};
  text-transform: uppercase;
  margin: 2px 0 4px 0;
`;

const STYLES_H3 = css`
  font-family: "inter-regular";
  font-weight: 400;
  font-size: 1.717rem;
  line-height: 1.75;
  max-width: 768px;
  margin-top: 1.414rem;
  padding: 24px;
  text-align: center; 

  strong {
    font-family: "inter-semi-bold";
    color: ${Constants.colors.white};
    font-weight: 400;
  }
`;

const STYLES_LINK = css`
  font-family: "inter-medium";
  color: ${Constants.colors.teal};
  text-decoration: underline;
  cursor: pointer;

  :visited {
    color: ${Constants.colors.teal};
  }

  :hover {
    color: ${Constants.colors.white};
  }
`;

const STYLES_BUTTON = css`
  font-family: "inter-medium";
  font-size: 1rem;
  color: ${Constants.colors.white};
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${Constants.colors.orange};
  border-radius: 4px;
  height: 48px;
  padding: 0 24px 0 24px;
  transition: 200ms ease all;
  transform: scale(1);

  :visited {
    color: ${Constants.colors.white};
  }

  :hover {
    transform: scale(1.1);
    color: ${Constants.colors.white};
  }
`;

const H1 = (props) => (
  <h1 className={STYLES_H1} style={props.style}>
    {props.children}
  </h1>
);

const H2 = (props) => (
  <h2 className={STYLES_H2} style={props.style}>
    {props.children}
  </h2>
);

const H3 = (props) => (
  <h3 className={STYLES_H3} style={props.style}>
    {props.children}
  </h3>
);

const STYLES_ROW = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
`;

const STYLES_CARD = css`
  width: 100%;
  max-width: 568px;
  margin: 24px 24px 0 24px;
  transition: transform ease 200ms;
  text-align: center;
`;

const STYLES_CARD_TOP = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 48px 24px 0px 24px;
`;

const STYLES_CARD_BOTTOM = css`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.414rem;
`;

const STYLES_CARD_BOTTOM_TOP_TITLE = css`
  font-size: 12px;
  letter-spacing: 4px;
  color: ${Constants.colors.teal};
  text-transform: uppercase;
  margin: 2px 0 4px 0;
`;

const STYLES_CARD_BOTTOM_BOTTOM_TITLE = css`
  font-size: 12px;
  letter-spacing: 4px;
  color: ${Constants.colors.teal};
  text-transform: uppercase;
  margin: 2px 0 4px 0;
`;

const STYLES_CARD_BOTTOM_LEFT = css`
  min-width: 10%;
  width: 100%;
`;

const STYLES_CARD_BOTTOM_RIGHT = css`
  flex-shrink: 0;
`;

export default class IndexPage extends React.Component {
  state = { selection: true, participating: true };

  render() {
    const title = "IPFS Pinning Summit (May 7th - 8th) (2020)";
    const description =
      "The IPFS Pinning Summit is a 2-day virtual conference designed for the infrastructure and service providers of the distributed web.";
    const url = "https://ipfspinningsummit.com";

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/static/social.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/static/social.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Navigation eventURL={EVENT_URL} />

        <div className={STYLES_SECTION_HERO}>
          <div className={STYLES_CARD}>
            <div className={STYLES_CARD_TOP}>
              <SVG.Logo height="144px" />
            </div>
            <div className={STYLES_CARD_BOTTOM}>
              <div className={STYLES_CARD_BOTTOM_LEFT}>
                <div className={STYLES_CARD_BOTTOM_TOP_TITLE}>
                  IPFS Pinning Summit
                </div>
                <div className={STYLES_CARD_BOTTOM_BOTTOM_TITLE}>
                  May 7th — 8th
                </div>
              </div>
            </div>
            <div className={STYLES_INFO}>
              <div className={STYLES_INFO_HERO}>
                The IPFS Pinning Summit is a 2-day virtual conference designed
                for the{" "}
                <strong>
                  infrastructure and service providers of the distributed web.
                </strong>
              </div>
              <div className={STYLES_INFO_HERO_BOTTOM}>
                Join core IPFS, Filecoin, and Pinning Service developers to discuss learnings,
                pain points, and new opportunities for distributed web
                infrastructure.
                <br />
                <br />
                <a
                  className={STYLES_BUTTON}
                  style={{ margin: "0 0 48px 0" }}
                  href={EVENT_URL}
                >
                  Register now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={STYLES_SECTION} id="schedule">  
          <H2>May 7th — Schedule</H2> 

          <Schedule data={Fixtures.ScheduleOne} />  
        </div>  

        <div className={STYLES_SECTION}>  
          <H2>May 8th — Schedule</H2> 

          <Schedule data={Fixtures.ScheduleTwo} />  
        </div>  

        <div className={STYLES_SECTION} id="speakers">  
          <H2>Speakers</H2> 

          <Speakers data={Fixtures.Presenters} /> 
        </div>  

        <div className={STYLES_SECTION} id="organizations">  
          <H2>Organizations</H2> 

          <Organizations data={Fixtures.Organizations} /> 

        </div>  

        <div className={STYLES_SECTION} id="watch"> 
          <H2>Watch</H2>  
          <H3>Uploaded videos and keynotes will appear here.</H3> 
        </div>  

        <div className={STYLES_SECTION} id="about">
          <H2>About</H2>
          <H3>
            The IPFS Pinning Summit was co-organized by the{" "}
            <a className={STYLES_LINK} href="https://ipfs.io/">
              IPFS Project
            </a>{" "}
            and the{" "}
            <a className={STYLES_LINK} href="https://filecoin.io">
              Filecoin Project
            </a>
            , and was sponsored by{" "}
            <a className={STYLES_LINK} href="https://protocol.ai">
              Protocol Labs
            </a>
            .<br />
            <br />
            <a className={STYLES_LINK} href="https://ipfs.io">
              IPFS
            </a>{" "}
            is a peer-to-peer network and protocol designed to make the web
            faster, safer, and more open. IPFS reimagines the web to work peer
            to peer by addressing data by <strong>what</strong> it is instead of{" "}
            <strong>where</strong> it’s located on the network, or what entity
            is hosting it. Instead of a central point of failure and control
            over what the rest of the network can do, IPFS gives people the
            power to control their own data and tools, so no central
            organization can limit access, take it over, or censor
            communications.
            <br />
            <br />
            <a className={STYLES_LINK} href="https://filecoin.io">
              Filecoin
            </a>{" "}
            is a decentralized storage network, powered by a blockchain and a
            native token. The Filecoin protocol creates an algorithmic market
            for cloud storage, connecting entities that have resources like
            storage and bandwidth (“miners”) with entities that want to hire
            those resources (“clients”). Anyone can sign up to be a miner or a
            client on the network. Filecoin combines novel cryptography, market
            incentives, and a peer-to-peer network to create a robust foundation
            for humanity’s information.
            <br />
            <br />
            <a className={STYLES_LINK} href="https://protocol.ai">
              Protocol Labs
            </a>{" "}
            is a research and development organization that was founded in 2014.
            Protocol Labs’ mission is to build modular, open-source technologies
            and protocols to upgrade the infrastructure of the internet. Over
            the last few years, Protocol Labs has built and maintained several
            open-source protocols, including{" "}
            <a className={STYLES_LINK} href="https://ipfs.io">
              IPFS
            </a>
            ,{" "}
            <a className={STYLES_LINK} href="https://libp2p.io">
              libp2p
            </a>
            ,{" "}
            <a className={STYLES_LINK} href="https://ipld.io">
              IPLD
            </a>
            , and{" "}
            <a className={STYLES_LINK} href="https://filecoin.io">
              Filecoin
            </a>
            .
          </H3>
        </div>
      </React.Fragment>
    );
  }
}
