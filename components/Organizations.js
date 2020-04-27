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

const STYLES_ORGANIZATION = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 528px) {
    width: 100%;
  }
`;

const STYLES_LOGO = css`
  height: 176px;
  width: 176px;
  margin-bottom: 24px;
  flex-shrink: 0;
  background-size: cover;
  background-position: 50% 50%;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
`;

const Org = (props) => {
  return (
    <div className={STYLES_ORGANIZATION}>
      <a 
        target="_blank"
        href={props.url}
      >
        <div
          className={STYLES_LOGO}
          style={{
            backgroundImage: `url('/static/${props.logo}')`,
          }}
        />
      </a>
    </div>
  );
};

export default (props) => {
  const organizations = Object.keys(props.data);
  const entities = organizations.map((s) => {
    const each = props.data[s];

    return <Org key={each.name} {...each} />;
  });

  return <div className={STYLES_ROW}>{entities}</div>;
};