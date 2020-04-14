import Head from "next/head";

import * as React from "react";
import * as Constants from "~/common/constants";

import { css } from "react-emotion";

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
  padding: 64px 24px 64px 24px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const STYLES_FIXED_NAVIGATION = css`
  height: 72px;
  border-bottom: 2px solid #000000;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${Constants.brand.color};
  color: ${Constants.brand.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "inter-semi-bold";
`;

const STYLES_LEFT = css`
  padding-left: 24px;
  flex-shrink: 0;
  min-width: 188px;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

const STYLES_MIDDLE = css`
  min-width: 10%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    * {
      display: none;
    }
  }
`;

const STYLES_RIGHT = css`
  flex-shrink: 0;
  padding-right: 24px;
  min-width: 188px;
  text-align: right;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

const STYLES_ITEM = css`
  margin: 0 24px 0 24px;
  text-decoration: underline;
  color: ${Constants.brand.dark};
  cursor: pointer;
  transition: 200ms ease color;

  :visited {
    color: ${Constants.brand.dark};
  }

  :hover {
    color: ${Constants.colors.white};
  }
`;

const STYLES_CTA_ITEM = css`
  text-decoration: underline;
  color: ${Constants.colors.white};
  cursor: pointer;
  transition: 200ms ease color;

  :visited {
    color: ${Constants.colors.white};
  }

  :hover {
    color: ${Constants.colors.gray};
  }
`;

const STYLES_LOGO = css`
  text-decoration: underline;
  color: ${Constants.brand.dark};
  cursor: pointer;
  transition: 200ms ease color;

  :visited {
    color: ${Constants.brand.dark};
  }

  :hover {
    color: ${Constants.colors.gray};
  }
`;

const STYLES_H1 = css`
  font-family: "inter-semi-bold";
  font-size: 3.998rem;
  max-width: 640px;
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
  font-size: 1.999rem;
  line-height: 1.4;
  max-width: 640px;
  margin-top: 1.414rem;
  padding: 24px;
  text-align: center;
`;

const STYLES_LINK = css`
  font-family: "inter-medium";
  color: ${Constants.colors.white};
  font-size: 1.999rem;
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: ${Constants.colors.white};
  }

  :visited {
    color: ${Constants.colors.gray};
  }
`;

const STYLES_BUTTON = css`
  font-family: "inter-medium";
  font-size: 1.999rem;
  color: ${Constants.colors.white};
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: ${Constants.colors.white};
  }

  :visited {
    color: ${Constants.colors.gray};
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

const STYLES_CARD_AGENDA = css`
  padding: 24px;
  font-size: 1.999rem;
  text-align: center;
  border-radius: 16px;
`;

const STYLES_CARD_AGENDA_TIME = css``;

const STYLES_CARD_AGENDA_TITLE = css`
  margin-top: 4px;
`;

const STYLES_CARD_AGENDA_SPEAKER = css`
  margin-top: 4px;
  color: ${Constants.colors.black};
  text-decoration: underline;
`;

const STYLES_CARD_ACTION = css`
  margin-top: 4px;
  color: ${Constants.colors.black};
  text-decoration: underline;
`;

const CardAgenda = (props) => (
  <div className={STYLES_CARD_AGENDA}>
    <div className={STYLES_CARD_AGENDA_TIME}>{props.time}</div>
    <div className={STYLES_CARD_AGENDA_TITLE}>{props.children}</div>
    <div className={STYLES_CARD_AGENDA_SPEAKER}>{props.speaker}</div>
    <div className={STYLES_CARD_ACTION}>{props.action}</div>
  </div>
);

const STYLES_SPEAKER = css`
  padding: 24px;
  background: ${Constants.brand.dark};
  color: ${Constants.colors.white};
  font-size: 1.999rem;
  margin: 24px;
`;

const STYLES_SPEAKER_IMAGE = css`
  width: 244px;
  height: 344px;
  background-size: cover;
  background-position: 50% 50%;
`;

const STYLES_SPEAKER_NAME = css`
  margin-top: 1.414rem;
`;

const STYLES_SPEAKER_COMPANY = css`
  margin-top: 0.25rem;
`;

const Speaker = (props) => (
  <div className={STYLES_SPEAKER}>
    <div
      className={STYLES_SPEAKER_IMAGE}
      style={{ backgroundImage: `url('${props.src}')` }}
    />
    <div className={STYLES_SPEAKER_NAME}>{props.name}</div>
    <div className={STYLES_SPEAKER_COMPANY}>{props.company}</div>
  </div>
);

const STYLES_ROW = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
`;

export default class IndexPage extends React.Component {
  state = { selection: true, participating: true };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>IPFS Pinning Summit</title>
        </Head>
        <div className={STYLES_FIXED_NAVIGATION}>
          <span className={STYLES_LEFT}>
            <a className={STYLES_LOGO} href="/">
              Logo
            </a>
          </span>
          <span className={STYLES_MIDDLE}>
            <a className={STYLES_ITEM} href="#schedule">
              Schedule
            </a>
            <a className={STYLES_ITEM} href="#watch">
              Watch
            </a>
            <a className={STYLES_ITEM} href="#speakers">
              Speakers
            </a>
            <a className={STYLES_ITEM} href="#about">
              About
            </a>
          </span>
          <span className={STYLES_RIGHT}>
            <a
              className={STYLES_CTA_ITEM}
              target="_blank"
              href="https://ipfs.io/"
            >
              Register Now
            </a>
          </span>
        </div>
        <div className={STYLES_SECTION_HERO}>
          <H1 style={{ paddingTop: 88 }}>IPFS Pinning Summit</H1>
          <H3>
            Two days
            <br /> April 23rd — 24th
            <br />
            <br /> Join IPFS and Filecoin developers and learn about
            opportunities to build on the network.
          </H3>

          <a
            className={STYLES_BUTTON}
            style={{ marginTop: 24, marginBottom: 88 }}
            href="https://ipfs.io/"
          >
            Register Now
          </a>
        </div>

        <div className={STYLES_SECTION} id="schedule">
          <H2>April 23 — Schedule</H2>

          <CardAgenda
            time="11 AM"
            speaker="Roger Blackmore (Microsoft)"
            action="Watch replay"
          >
            The Time I Found 4 Dogs
          </CardAgenda>

          <CardAgenda
            time="12 AM"
            speaker="Susie Smith (AirB&B)"
            action="Download keynote"
          >
            The Time I Found 20 Dogs
          </CardAgenda>

          <CardAgenda
            time="2 PM"
            speaker="Aaron McKenzie (Cisco)"
            action="Watch replay"
          >
            The Time I Found That Dog You Found
          </CardAgenda>

          <CardAgenda
            time="3 PM"
            speaker="Melody Bryant (Figma)"
            action="Download keynote"
          >
            It Wasn't A Dog
          </CardAgenda>

          <CardAgenda
            time="4 PM"
            speaker="Caleb Pooter (Microsoft)"
            action="Watch replay"
          >
            Should Have Been Different
          </CardAgenda>

          <CardAgenda
            time="5 PM"
            speaker="Rekka Bell (Foster Farms)"
            action="Download keynote"
          >
            Dogs Ending Statement
          </CardAgenda>
        </div>

        <div className={STYLES_SECTION}>
          <H2>April 24 — Schedule</H2>

          <CardAgenda
            time="11 AM"
            speaker="John Smith (Boeing)"
            action="Download keynote"
          >
            I Don't Want The Dogs Back
          </CardAgenda>

          <CardAgenda
            time="12 AM"
            speaker="Benson Clark (New York Times)"
            action="Watch replay"
          >
            Dogs Are Dogs And You Are You
          </CardAgenda>

          <CardAgenda
            time="2 PM"
            speaker="Rebecca Cox (Salesforce)"
            action="Watch replay"
          >
            A Dog Alone, And Two Dogs Together
          </CardAgenda>

          <CardAgenda
            time="3 PM"
            speaker="Thor Henderson (GitHub)"
            action="Download keynote"
          >
            Won't Find Any Dogs here
          </CardAgenda>
        </div>

        <div className={STYLES_SECTION} id="speakers">
          <H2>Speakers</H2>

          <div className={STYLES_ROW}>
            <Speaker
              name="Roger Blackmore"
              company="Microsoft"
              src="/static/placeholder-1.jpg"
            />

            <Speaker
              name="Susie Smith"
              company="AirB&B"
              src="/static/placeholder-2.jpg"
            />

            <Speaker
              name="Aaron McKenzie"
              company="Cisco"
              src="/static/placeholder-3.jpg"
            />

            <Speaker
              name="Melody Bryant"
              company="Figma"
              src="/static/placeholder-4.jpg"
            />

            <Speaker
              name="Caleb Pooter"
              company="Figma"
              src="/static/placeholder-5.jpg"
            />

            <Speaker
              name="Rekka Bell"
              company="Foster Farms"
              src="/static/placeholder-6.jpg"
            />

            <Speaker
              name="John Smith"
              company="Boeing"
              src="/static/placeholder-7.jpg"
            />

            <Speaker
              name="Benson Clark"
              company="New York Times"
              src="/static/placeholder-8.jpg"
            />

            <Speaker
              name="Rebecca Cox"
              company="Salesforce"
              src="/static/placeholder-9.jpg"
            />

            <Speaker
              name="Thor Henderson"
              company="GitHub"
              src="/static/placeholder-10.jpg"
            />
          </div>

          <div className={STYLES_SECTION} id="watch">
            <H2>Watch</H2>
            <H3>Uploaded videos and keynotes will appear here.</H3>
          </div>

          <div className={STYLES_SECTION} id="about">
            <H2>About</H2>
            <H3>
              IPFS powers the creation of diversely resilient networks that
              enable persistent availability — with or without Internet backbone
              connectivity. This means better connectivity for the developing
              world, during natural disasters, or just when you're on flaky
              coffee shop wi-fi. <br /> <br />
              <a
                className={STYLES_LINK}
                target="_blank"
                href="https://filecoin.io"
              >
                Learn about Filecoin
              </a>{" "}
              <br />{" "}
              <a target="_blank" className={STYLES_LINK} href="https://ipfs.io">
                Learn about IPFS
              </a>
            </H3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
