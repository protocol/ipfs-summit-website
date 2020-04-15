import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/common/svg";
import * as Fixtures from "~/common/fixtures";

import { css } from "react-emotion";

const STYLES_FIXED_NAVIGATION = css`
  height: 72px;
  box-shadow: inset 0 -2px 0 ${Constants.colors.darkBorder};
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${Constants.colors.darkTeal};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "inter-semi-bold";
`;

const STYLES_LEFT = css`
  padding-left: 24px;
  flex-shrink: 0;
`;

const STYLES_MIDDLE = css`
  min-width: 10%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const STYLES_RIGHT = css`
  text-decoration: none;
  color: ${Constants.colors.gray};
  letter-spacing: 0.2px;
  flex-shrink: 0;
  padding: 0 24px 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;

  @media (max-width: 768px) {
    display: none;
  }
`;

const STYLES_ITEM = css`
  text-decoration: none;
  color: ${Constants.colors.gray};
  letter-spacing: 0.2px;
  cursor: pointer;
  transition: 200ms ease color;

  :visited {
    color: ${Constants.colors.gray};
  }

  :hover {
    color: ${Constants.colors.orange};
  }
`;

const STYLES_LOGO = css`
  text-decoration: none;
  color: ${Constants.colors.gray};
  cursor: pointer;
  transition: 200ms ease color;
  display: flex;

  :visited {
    color: ${Constants.colors.gray};
  }

  :hover {
    color: ${Constants.brand.color};
  }
`;

export default (props) => {
  return (
    <div className={STYLES_FIXED_NAVIGATION}>
      <span className={STYLES_LEFT}>
        <a
          className={STYLES_LOGO}
          target="_blank"
          href="https://ipfspinningsummit.com/"
        >
          <SVG.Logo height="32px" />
        </a>
      </span>
      <span className={STYLES_MIDDLE}>
        <a className={STYLES_ITEM} style={{ marginLeft: 48 }} href="#schedule">
          Schedule
        </a>
        <a className={STYLES_ITEM} style={{ marginLeft: 24 }} href="#watch">
          Watch
        </a>
        <a className={STYLES_ITEM} style={{ marginLeft: 24 }} href="#speakers">
          Speakers
        </a>
        <a className={STYLES_ITEM} style={{ marginLeft: 24 }} href="#about">
          About
        </a>
      </span>
      <span className={STYLES_RIGHT}>
        <a className={STYLES_ITEM} target="_blank" href={props.eventURL}>
          Register
        </a>
      </span>
    </div>
  );
};
