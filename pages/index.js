import Head from "next/head";

import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/common/svg";
import * as Fixtures from "~/common/fixtures";

import { css } from "react-emotion";

import Navigation from "~/components/Navigation";
import Speakers from "~/components/Speakers";
import Schedule from "~/components/Schedule";

const EVENT_URL = `https://www.eventbrite.com/e/ipfs-pinning-summit-registration-102720606098`;

const STYLES_SECTION = css`
  padding: 64px 24px 64px 24px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const STYLES_SECTION_HERO = css`
  background-color: ${Constants.brand.dark};
  color: ${Constants.colors.white};
  padding: 64px 24px 64px 24px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 2px solid #ececec;
`;

const STYLES_INFO = css`
  color: ${Constants.colors.black};
  padding: 16px;
  font-size: 1.414rem;
  line-height: 1.5;
  border-radius: 0px 0px 4px 4px;
  text-align: center;
  max-width: 568px;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
    color: ${Constants.colors.darkTeal};
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
  font-family: "inter-semi-bold";
  font-weight: 400;
  font-size: 1.999rem;
  line-height: 1.4;
  max-width: 640px;
  margin-top: 1.414rem;
  padding: 24px;
  text-align: center;
`;

const STYLES_H3 = css`
  font-family: "inter-regular";
  font-weight: 400;
  font-size: 1.725rem;
  line-height: 1.4;
  max-width: 768px;
  margin-top: 1.414rem;
  padding: 24px;
  text-align: center;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
  }
`;

const STYLES_LINK = css`
  font-family: "inter-medium";
  color: ${Constants.colors.teal};
  font-size: 1.725rem;
  text-decoration: underline;
  cursor: pointer;

  :visited {
    color: ${Constants.colors.teal};
  }

  :hover {
    color: ${Constants.colors.darkTeal};
  }
`;

const STYLES_BUTTON = css`
  font-family: "inter-medium";
  font-size: 20px;
  color: ${Constants.colors.white};
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${Constants.colors.darkTeal};
  border-radius: 48px;
  height: 48px;
  padding: 0 16px 0 16px;
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
  background-color: ${Constants.colors.white};
  border-radius: 8px;
  width: 100%;
  max-width: 568px;
  margin: 24px 24px 0 24px;
  transition: transform ease 200ms;
  transform: scale(1);
  box-shadow: inset 0 0 0 2px #ececec;
  text-align: center;
`;

const STYLES_CARD_TOP = css`
  border-radius: 8px 8px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 48px 24px 48px 24px;
`;

const STYLES_CARD_BOTTOM = css`
  color: ${Constants.colors.black};
  border-radius: 0px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.414rem;
`;

const STYLES_CARD_BOTTOM_LEFT_TITLE = css`
  font-family: "inter-semi-bold";
  margin: 2px 0 4px 0;
  font-size: 1.717rem;
`;

const STYLES_CARD_BOTTOM_LEFT = css`
  min-width: 10%;
  width: 100%;
  padding-right: 24px;
`;

const STYLES_CARD_BOTTOM_RIGHT = css`
  flex-shrink: 0;
`;

export default class IndexPage extends React.Component {
  state = { selection: true, participating: true };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>IPFS Pinning Summit</title>
        </Head>
        <Navigation eventURL={EVENT_URL} />

        <div
          className={STYLES_SECTION_HERO}
          style={{ backgroundImage: `url('/static/bg-6.png')` }}
        >
          <div className={STYLES_CARD}>
            <div className={STYLES_CARD_TOP}>
              <SVG.Logo height="144px" />
            </div>
            <div className={STYLES_CARD_BOTTOM}>
              <div className={STYLES_CARD_BOTTOM_LEFT}>
                <div className={STYLES_CARD_BOTTOM_LEFT_TITLE}>
                  IPFS Pinning Summit
                </div>
                <div>May 7th — 8th</div>
              </div>
            </div>
            <div className={STYLES_INFO}>
              <div>
                The IPFS Pinning Summit is a 2-day virtual conference designed
                for the{" "}
                <strong>
                  infrastructure and service providers of the distributed web.
                </strong>
                <br />
                <br />
                Join fellow attendees and core IPFS and Filecoin developers to
                discuss learnings, pain points, and new opportunities for
                distributed web infrastructure.
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
          <H2>May 8th— Schedule</H2>

          <Schedule data={Fixtures.ScheduleTwo} />
        </div>

        <div className={STYLES_SECTION} id="speakers">
          <H2>Speakers</H2>

          <Speakers data={Fixtures.Presenters} />
        </div>

        <div className={STYLES_SECTION} id="watch">
          <H2>Watch</H2>
          <H3>Uploaded videos and keynotes will appear here.</H3>
        </div>

        <div
          className={STYLES_SECTION}
          style={{
            background: `linear-gradient(rgb(249, 249, 249), rgb(232, 234, 255))`,
          }}
          id="about"
        >
          <H2>About</H2>
          <H3>
            The IPFS Pinning Summit was co-organized by the{" "}
            <a className={STYLES_LINK} href="#">
              Filecoin Project
            </a>{" "}
            and the{" "}
            <a className={STYLES_LINK} href="#">
              IPFS Project
            </a>
            , and was sponsored by{" "}
            <a className={STYLES_LINK} href="#">
              Protocol Labs
            </a>
            .<br />
            <br />
            <a className={STYLES_LINK} href="#">
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
            <a className={STYLES_LINK} href="#">
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
            <a className={STYLES_LINK} href="#">
              Protocol Labs
            </a>{" "}
            is a research and development organization that was founded in 2014.
            Protocol Labs’ mission is to build modular, open-source technologies
            and protocols to upgrade the infrastructure of the internet. Over
            the last few years, Protocol Labs has built and maintained several
            open-source protocols, including{" "}
            <a className={STYLES_LINK} href="#">
              IPFS
            </a>
            ,{" "}
            <a className={STYLES_LINK} href="#">
              libp2p
            </a>
            ,{" "}
            <a className={STYLES_LINK} href="#">
              IPLD
            </a>
            , and{" "}
            <a className={STYLES_LINK} href="#">
              Filecoin
            </a>
            .
          </H3>
        </div>
      </React.Fragment>
    );
  }
}
