import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";

import { css } from "react-emotion";

const STYLES_ROW = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 816px;
  margin: 3rem auto 0 auto;
  padding: 0 24px 0 24px;
`;

const STYLES_LEFT = css`
  flex-shrink: 0;
  font-size: 1.414rem;
  min-width: 126px;

  @media (max-width: 768px) {
    min-width: 72px;
  }
`;

const STYLES_MIDDLE = css`
  padding-left: 48px;
  min-width: 10%;
  width: 100%;
  text-align: left;
`;

const STYLES_NAME = css`
  color: ${Constants.colors.white};
  font-size: 1.414rem;
  text-align: left;
`;

const STYLES_PARAGRAPH = css`
  font-size: 1.2rem;
  text-align: left;
  width: 100%;
  margin-top: 24px;
  line-height: 1.444;
`;

const STYLES_META = css`
  display: inline-flex;
  border-radius: 8px;
  margin-top: 24px;
  line-height: 1rem;
  font-family: "inter-medium";
  font-size: 1rem;
  padding: 8px 12px 8px 12px;
  background: #000;
  color: ${Constants.colors.white};
`;

const STYLES_PRESENTER = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const STYLES_PRESENTER_AVATAR = css`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-size: cover;
  background-position: 50% 50%;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

const STYLES_PRESENTER_NAME = css`
  color: ${Constants.colors.teal};
  padding-left: 16px;
  min-width: 10%;
  width: 100%;
`;

export default (props) => {
  return (
    <div>
      {props.data.map((d, index) => {
        return (
          <div className={STYLES_ROW} key={`${d.index}-${d.time}`}>
            <div className={STYLES_LEFT}>{d.time}</div>
            <div className={STYLES_MIDDLE}>
              <div className={STYLES_NAME}>{d.name}</div>
              {d.presenters
                ? d.presenters.map((p) => {
                    return (
                      <div className={STYLES_PRESENTER} key={p.name}>
                        <div
                          className={STYLES_PRESENTER_AVATAR}
                          style={{
                            backgroundImage: `url('/static/${p.photo}')`,
                          }}
                        />
                        <div className={STYLES_PRESENTER_NAME}>{p.name}</div>
                      </div>
                    );
                  })
                : null}
              {!Strings.isEmpty(d.value) ? (
                <div className={STYLES_PARAGRAPH}>{d.value}</div>
              ) : null}
              <div className={STYLES_META}>⏱ {d.duration} minutes</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
