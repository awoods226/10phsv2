import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            !(function(a, b, c, d, e, f, g) {
              function h() {
                if (
                  void 0 !== a.zenplanner.directLoader &&
                  null !== window.zenplanner.directLoader
                ) {
                  clearInterval(j);
                  for (var b = 0, d = a.zenplanner.directLoadArgs.length; d > b; b++)
                    a.zenplanner.directLoadArgs[b].widgetInstanceId === g &&
                      a.zenplanner.directLoader.loadWidget(c, e, f, g);
                } else
                  i++ > 10 &&
                    (console.log("Zen Planner widget : " + e + ", failed to load."),
                    clearInterval(j));
              }
              (a.zenplanner = a.zenplanner || {}),
                (a.zenplanner.directLoadArgs = a.zenplanner.directLoadArgs || []);
              var i = 0,
                j = null;
              if (
                void 0 === a.zenplanner.directLoader ||
                null === a.zenplanner.directLoader
              ) {
                a.zenplanner.directLoadArgs.push({
                  module: e,
                  partitionApiKey: f,
                  widgetInstanceId: g
                });
                var k = b.createElement("script");
                (k.async = 1),
                  (k.src = c + "/" + d),
                  b.head.appendChild(k),
                  (j = setInterval(h, 1e3));
              } else a.zenplanner.directLoader.loadWidget(c, e, f, g);
            })(
              window,
              document,
              "https://studio.zenplanner.com",
              "zenplanner/studio/target/zp-widget-direct.js",
              "leadcapture",
              "80396d5d-37a6-4e39-b91c-2420624da9cd",
              "1adfe833-41db-4c72-bf50-a6e27d5f822c"
            );
        `
            }}
          />
          <script src="https://trial-2E517811.zenplanner.com/zenplanner/skin/js/resize.js" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
