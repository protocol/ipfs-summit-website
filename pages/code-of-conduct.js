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
  display: block;
  padding: 188px 24px 64px 24px;
  min-height: 100vh;
  width: 100%;
  max-width: 768px;
  margin: 0 auto 0 auto;
`;

const STYLES_H1 = css`
  font-family: "inter-semi-bold";
  font-size: 2.444rem;
  line-height: 1.1;
  font-weight: 400;
`;

const STYLES_P = css`
  font-size: 1rem;
  line-height: 1.55;
  margin-top: 24px;

  strong {
    font-family: "inter-semi-bold";
    color: ${Constants.colors.white};
    font-weight: 400;
  }
`;

const STYLES_LI = css`
  font-size: 1rem;
  line-height: 1.55;
  margin-top: 12px;

  strong {
    font-family: "inter-semi-bold";
    color: ${Constants.colors.white};
    font-weight: 400;
  }
`;

const STYLES_UL = css`
  padding-left: 24px;
`;

const STYLES_H2 = css`
  font-family: "inter-semi-bold";
  font-weight: 400;
  font-size: 1.717rem;
  margin-top: 48px;
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

const H1 = (props) => (
  <h1 className={STYLES_H1} style={props.style}>
    {props.children}
  </h1>
);

const P = (props) => {
  return (
    <p className={STYLES_P} style={props.style}>
      {props.children}
    </p>
  );
};

const UL = (props) => {
  return (
    <ul className={STYLES_UL} style={props.style}>
      {props.children}
    </ul>
  );
};

const LI = (props) => {
  return (
    <li className={STYLES_LI} style={props.style}>
      {props.children}
    </li>
  );
};

const H2 = (props) => {
  return (
    <h2 className={STYLES_H2} style={props.style}>
      {props.children}
    </h2>
  );
};

export const CodeOfConduct = (props) => {
  return (
    <div className={STYLES_SECTION}>
      <H1>Code of conduct</H1>
      <P>
        The IPFS Pinning Summit is a friendly community event where everyone
        should feel welcome, safe and comfortable to share ideas and engage in
        open discussion. The IPFS Pinning Summit is dedicated to providing a
        harassment-free experience for everyone inclusive of gender, gender
        identity and expression, sexual orientation, disability, physical
        appearance, body size, race, age, nationality or religion.
      </P>
      <P>
        All participants, speakers, sponsors and staff are required to abide by
        our Code of Conduct at the IPFS Pinning Summit. Any violations will be
        dealt with seriously and may include being expelled and banned from the
        event and its online space. This is to protect the safety of our
        community and attendees.
      </P>
      <H2>Definitions</H2>
      <P>
        What do we mean by “harassment”? Harassment includes but isn’t limited
        to:
      </P>
      <UL>
        <LI>
          Offensive comments related to gender, gender identity and expression,
          sexual orientation, disability, mental illness, neurotype, physical
          appearance, body size, race, age, nationality, religion or belief,
          marital and civil partnership status, pregnancy or carer or parental
          status, familial status, veteran status, or citizenship.{" "}
        </LI>
        <LI>
          Unwelcome comments regarding a person’s lifestyle choices and
          practices, including those related to food, health, parenting, drugs,
          and employment.{" "}
        </LI>
        <LI>
          Homophobic, biphobic, transphobic, racist, or misogynist slurs or
          comments.{" "}
        </LI>
        <LI>Threats or acts of violence or intimidation.</LI>
        <LI>Unwelcome sexual attention.</LI>
        <LI>Sharing/displaying sexual or sexualised images.</LI>
        <LI>
          Deliberate “outing” of any aspect of a person’s identity without their
          consent.
        </LI>
        <LI>
          Harassing photography or recording, including logging online activity
          for harassment purposes.
        </LI>
        <LI>Sustained disruption of discussion.</LI>
        <LI>Deliberate misgendering.</LI>
        <LI>Physical contact without consent or after a request to cease.</LI>
        <LI>Advocating for or encouraging any of the above behaviors.</LI>
      </UL>
      <P>
        Participants asked to stop any harassing behavior are expected to stop
        immediately.
      </P>
      <P>
        Participants engaging in harassing behavior may be asked to leave the
        event and online space and may be banned temporarily or indefinitely.
      </P>
      <P>
        If harassment occurs outside an event or online space organised by the
        IPFS Pinning Summit that may impact the safety of our community, we
        reserve the right to investigate and take appropriate action, for
        instance banning from future events.
      </P>
      <H2>Reporting</H2>
      <P>
        If you are being harassed or made to feel unsafe or unwelcome, please
        report it as soon as possible. You can help us by reporting any behavior
        you think might go against the Code of Conduct.
      </P>
      <P>
        Please report any harassing behavior to one of the Event Organizers:
      </P>
      <UL>
        <LI>Jamie Nicholson</LI>
        <LI>Pooja Shah</LI>
        <LI>Yuni Graham</LI>
        <LI>Leela Lindner</LI>
      </UL>
      <H2>Reporting & enforcement process</H2>
      <UL>
        <LI>
          {" "}
          Incident report is taken in a safe, private space at events or in a
          personal and direct message online.
        </LI>
        <LI> Incident responders investigate with the reported person.</LI>
        <LI>
          {" "}
          Incident response team reconvene to discuss an appropriate response.
        </LI>
        <LI>Appropriate action is taken.</LI>
        <LI>
          Incident responders follow up with the reporter and the reported
          person.
        </LI>
        <LI>Inform community if necessary.</LI>
        <LI>Debrief and document internally.</LI>
      </UL>
      <P>
        Our Code of Conduct was based on resources from Geek Feminism wiki
        anti-harassment policy, created by the Ada Initiative and other
        volunteers, and the XOXO Community Code of Conduct.
      </P>{" "}
    </div>
  );
};

export default class CodeOfConductPage extends React.Component {
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
          <meta
            property="og:image"
            content="https://ipfspinningsummit.com/static/social.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta
            property="twitter:image"
            content="https://ipfspinningsummit.com/static/social.png"
          />

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
        <CodeOfConduct />
      </React.Fragment>
    );
  }
}
