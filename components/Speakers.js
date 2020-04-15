import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";

import Hexagon from "react-hexagon";
import { css } from "react-emotion";

const STYLES_ROW = css`
  max-width: 816px;
  margin: 3rem auto 0 auto;
  padding: 0 24px 0 24px;

  svg {
    width: 228px;
    height: 228px;

    polygon {
      stroke: ${Constants.colors.orange} !important;
    }
  }
`;

const Avatar = (props) => {
  const height = props.width / 1.156069;
  const border = `${height * 0.5}px solid transparent`;

  return (
    <div
      className={STYLES_HEXAGON}
      style={{
        backgroundImage: `url('/static/${props.src}')`,
        width: props.width,
      }}
    >
      <div
        className={STYLES_HEXAGON_TOP}
        style={{
          width: props.width,
          height: props.width / 1.156069,
          borderBottom: border,
        }}
      />
      <div
        className={STYLES_HEXAGON_BOTTOM}
        style={{ width: props.width, borderTop: border }}
      />
    </div>
  );
};

export default (props) => {
  return (
    <div className={STYLES_ROW}>
      <Hexagon backgroundImage="/static/adrian.jpg" backgroundScale="1.1" />
      <Hexagon backgroundImage="/static/colin.jpg" backgroundScale="1.1" />
      <Hexagon backgroundImage="/static/juan.png" backgroundScale="1.1" />
      <Hexagon backgroundImage="/static/molly.jpeg" backgroundScale="1.1" />
      <Hexagon backgroundImage="/static/pooja.jpeg" backgroundScale="1.1" />
      <Hexagon backgroundImage="/static/steven.png" backgroundScale="1.1" />
      <Hexagon backgroundImage="/static/yuni.jpg" backgroundScale="1.1" />
    </div>
  );
};
