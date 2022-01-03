const u = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = n(e);
    fetch(e.href, o);
  }
};
u();
let d = 0,
  c = 0;
window.onload = () => {
  s();
};
const s = () => {
  (document.getElementById("grid").innerHTML = ""),
    (d = document.getElementById("gridHeight").value),
    (c = document.getElementById("gridWidth").value),
    m(d),
    f(c);
};
let a = document.getElementById("submit-btn");
a.addEventListener("click", s);
const m = (l) => {
    for (let t = 0; t < l; t++) {
      let n = document.createElement("div");
      (n.id = `row-${t}`),
        n.classList.add("row"),
        document.getElementById("grid").appendChild(n);
    }
  },
  f = (l) => {
    for (let t = 0; t < d; t++)
      for (let n = 0; n < c; n++) {
        let r = document.createElement("div");
        (r.id = `col-${n}`),
          r.classList.add("col"),
          r.addEventListener("click", () => {
            r.hasAttribute("style")
              ? r.removeAttribute("style")
              : (r.style.backgroundColor =
                  document.getElementById("pixelColor").value);
          }),
          document.getElementById(`row-${t}`).appendChild(r);
      }
  };
