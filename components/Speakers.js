import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";

import { css } from "react-emotion";

const STYLES_ROW = css`
  max-width: 1024px;
  width: 100%;
  margin-top: 3rem;
  padding: 0 24px 0 24px;
`;

const STYLES_SPEAKER = css`
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 33.33%;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 528px) {
    width: 100%;
  }
`;

const STYLES_AVATAR = css`
  height: 88px;
  width: 88px;
  margin-bottom: 24px;
  flex-shrink: 0;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
`;

const STYLES_RIGHT = css`
  padding-left: 24px;
  padding-right: 24px;
  min-width: 10%;
  width: 100%;
  font-size: 1.228rem;
`;

const STYLES_TITLE = css`
  margin-top: 8px;
  color: ${Constants.colors.white};
`;

const STYLES_ORGANIZATION = css`
  margin-top: 4px;
`;

const Avatar = (props) => {
  return (
    <div className={STYLES_SPEAKER}>
      <div
        className={STYLES_AVATAR}
        style={{
          backgroundImage: `url('/static/${props.photo}')`,
        }}
      />
      <div className={STYLES_RIGHT}>
        <div className={STYLES_TITLE}>{props.name}</div>
        <div className={STYLES_ORGANIZATION}>{props.organization}</div>
      </div>
    </div>
  );
};

export default (props) => {
  const speakers = Object.keys(props.data);
  const entities = speakers.map((s) => {
    const each = props.data[s];

    return <Avatar key={each.name} {...each} />;
  });

  return <div className={STYLES_ROW}>{entities}</div>;
};
