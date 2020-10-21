import define1 from "./7764a40fe6b83ca1@413.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["sales.json",new URL("./files/b38dd80fb34e0a9ac6031eca1a9d53e51c234fe617fffb0ab964dbae1fd8c1772458218569449aa645375687e9307bcfed786225c113fbd3ab767f75813d8ac8",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Settle Easy dashboard

This page will be updated weekly
`
)});
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  main.variable(observer()).define(["md"], function(md){return(
md`## Sales by week:`
)});
  main.variable(observer("viewof chart")).define("viewof chart", ["vega","salesData"], function(vega,salesData){return(
vega(salesData)
)});
  main.variable(observer("chart")).define("chart", ["Generators", "viewof chart"], (G, _) => G.input(_));
  main.variable(observer("vega")).define("vega", ["require"], async function(require)
{
  const v = window.vega = await require("vega@3");
  const vl = window.vl = await require("vega-lite@2");
  const ve = await require("vega-embed@6");
  async function vega(spec, options) {
    const div = document.createElement("div");
    div.value = (await ve(div, spec, options)).view;
    return div;
  }
  vega.changeset = v.changeset;
  return vega;
}
);
  main.variable(observer("salesData")).define("salesData", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("sales.json").json()
)});
  main.variable(observer("style")).define("style", ["html"], function(html){return(
html`<style>
  .table-2 { white-space: nowrap; }
</style>`
)});
  return main;
}
