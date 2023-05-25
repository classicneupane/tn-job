import { defineComponent as R, resolveComponent as m, openBlock as r, createBlock as A, normalizeClass as P, withCtx as u, createTextVNode as j, toDisplayString as g, createCommentVNode as f, createElementVNode as a, ref as O, computed as k, onMounted as te, reactive as oe, createElementBlock as v, Fragment as G, createVNode as d, unref as N, pushScopeId as K, popScopeId as Q, renderSlot as W, renderList as ne } from "vue";
import V from "moment";
const se = /* @__PURE__ */ R({
  __name: "JobFeatureChip",
  props: {
    feature: {},
    selected: { type: Boolean }
  },
  emits: ["click"],
  setup(l, { emit: s }) {
    function e() {
      s("click");
    }
    return (t, n) => {
      const o = m("v-icon"), c = m("v-chip");
      return r(), A(c, {
        key: t.feature.id,
        class: P(["mx-1 mb-2 text-capitalize cursor-pointer", `${t.selected ? "text-" + t.feature.textColor : ""}`]),
        color: t.feature.color,
        variant: t.selected ? "flat" : "tonal",
        rounded: "",
        onClick: e
      }, {
        default: u(() => [
          t.selected ? (r(), A(o, { key: 0 }, {
            default: u(() => [
              j(g("mdi-check"))
            ]),
            _: 1
          })) : f("", !0),
          a("span", null, g(t.feature.label), 1)
        ]),
        _: 1
      }, 8, ["class", "color", "variant"]);
    };
  }
});
function X({
  street: l,
  state: s,
  zip: e,
  town: t
}) {
  let n = "";
  return l && (n += l), t != null && t.trim() && (n && (n += ", "), n += t.trim()), (s != null && s.trim() || e != null && e.trim()) && (n && (s != null && s.trim() || e != null && e.trim()) && (n += ","), s != null && s.trim() && (n && (n += " "), n += s == null ? void 0 : s.trim()), e != null && e.trim() && (n && (n += " "), n += e.trim())), n;
}
function le(l, s) {
  var n;
  const e = s || { job: !0, business: !0 }, t = [];
  return e != null && e.job && Array.isArray((n = l == null ? void 0 : l.jobsContact) == null ? void 0 : n.phone) && l.jobsContact.phone.forEach((o) => {
    t.push(o.numberFormatted);
  }), e != null && e.business && l != null && l.phoneFormatted && t.push(l.phoneFormatted), t.filter((o) => !!o);
}
const Y = (l) => (K("data-v-b11ae3ba"), l = l(), Q(), l), ae = { key: 0 }, ie = { key: 0 }, re = { class: "mb-5 text-center" }, ce = { class: "d-flex justify-center pb-5" }, ue = ["href"], de = { class: "d-flex flex-column justify-center align-center" }, _e = /* @__PURE__ */ Y(() => /* @__PURE__ */ a("span", { class: "text-info mt-1" }, " Call ", -1)), ve = ["href"], fe = { class: "d-flex flex-column justify-center align-center ml-10" }, me = /* @__PURE__ */ Y(() => /* @__PURE__ */ a("span", { class: "text-info mt-1" }, " Message ", -1)), be = { key: 1 }, he = { class: "text-info" }, pe = {
  class: "mt-3",
  style: { height: "300px" }
}, ye = ["src"], ge = /* @__PURE__ */ R({
  __name: "ButtonJobApply",
  props: {
    color: {},
    disableApply: { type: Boolean },
    business: {},
    job: {},
    variant: {}
  },
  setup(l) {
    const s = l, e = O(!1), t = k(() => {
      var p, _, y;
      return {
        job: String(((_ = (p = s.business) == null ? void 0 : p.jobsContact) == null ? void 0 : _.email) || "").trim(),
        biz: String(((y = s.business) == null ? void 0 : y.email) || "").trim()
      };
    });
    te(async () => {
      e.value = !0;
    });
    const n = k(() => le(s.business, { job: !0 })), o = k(() => s.business.mailingAddress), c = k(() => {
      var p, _, y, C;
      return [(p = o.value) == null ? void 0 : p.street, (_ = o.value) == null ? void 0 : _.town, (y = o.value) == null ? void 0 : y.state, (C = o.value) == null ? void 0 : C.zip].filter((x) => !!x).join(", ");
    }), b = oe({
      callMessage: !1,
      address: !1,
      value: !1,
      map: !1
    }), S = k(() => {
      var _, y;
      return t.value.job || t.value.biz || ((_ = o.value) == null ? void 0 : _.street) || ((y = n.value) == null ? void 0 : y.length);
    });
    function J() {
      if (!s.disableApply)
        if (t.value.job || t.value.biz) {
          const p = `mailto:${t.value.job || t.value.biz}?subject=Application for ${s.job.title}`;
          window.open(p, "_blank");
        } else
          n.value.length ? (b.value = !0, b.callMessage = !0) : o.value.street && (b.address = !0, b.value = !0);
    }
    return (p, _) => {
      const y = m("v-spacer"), C = m("v-icon"), x = m("v-btn"), M = m("v-card-title"), I = m("v-container"), i = m("v-card"), h = m("v-dialog");
      return r(), v(G, null, [
        e.value ? (r(), v("div", ae, [
          d(h, {
            modelValue: b.value,
            "onUpdate:modelValue": _[1] || (_[1] = (w) => b.value = w),
            width: "500"
          }, {
            default: u(() => [
              d(i, { class: "mx-auto w-100" }, {
                default: u(() => [
                  d(M, { class: "d-flex" }, {
                    default: u(() => [
                      d(y),
                      d(x, {
                        icon: "",
                        variant: "text",
                        onClick: _[0] || (_[0] = (w) => b.value = !1)
                      }, {
                        default: u(() => [
                          d(C, null, {
                            default: u(() => [
                              j("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  d(I, null, {
                    default: u(() => [
                      b.callMessage ? (r(), v("div", ie, [
                        a("div", re, g(n.value[0]), 1),
                        a("div", ce, [
                          a("a", {
                            href: `tel:${n.value[0]}`,
                            target: "_blank",
                            class: "decoration-none"
                          }, [
                            a("div", de, [
                              d(x, {
                                variant: "tonal",
                                icon: "",
                                color: "info"
                              }, {
                                default: u(() => [
                                  d(C, null, {
                                    default: u(() => [
                                      j(" mdi-phone ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              _e
                            ])
                          ], 8, ue),
                          a("a", {
                            href: `sms:${n.value[0]}`,
                            target: "_blank",
                            class: "decoration-none"
                          }, [
                            a("div", fe, [
                              d(x, {
                                variant: "tonal",
                                icon: "",
                                color: "info"
                              }, {
                                default: u(() => [
                                  d(C, null, {
                                    default: u(() => [
                                      j(" mdi-message ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              me
                            ])
                          ], 8, ve)
                        ])
                      ])) : f("", !0),
                      b.address ? (r(), v("div", be, [
                        a("strong", he, g(N(X)(o.value)), 1),
                        a("div", pe, [
                          a("iframe", {
                            width: "100%",
                            height: "100%",
                            frameborder: "0",
                            scrolling: "no",
                            marginheight: "0",
                            marginwidth: "0",
                            src: `https://maps.google.com/maps?output=embed&q=${c.value}`
                          }, null, 8, ye)
                        ])
                      ])) : f("", !0)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])) : f("", !0),
        S.value ? (r(), A(x, {
          key: 1,
          rounded: "",
          variant: p.variant || "flat",
          color: s.color || "primary",
          class: "text-none",
          onClick: _[2] || (_[2] = (w) => J())
        }, {
          default: u(() => [
            j(" Apply Now ")
          ]),
          _: 1
        }, 8, ["variant", "color"])) : f("", !0)
      ], 64);
    };
  }
});
const Z = (l, s) => {
  const e = l.__vccOpts || l;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, je = /* @__PURE__ */ Z(ge, [["__scopeId", "data-v-b11ae3ba"]]);
function ke() {
  function l(t) {
    var o;
    const n = [];
    return t && (Array.isArray(t.logo) ? n.push(...t.logo) : (o = t.logo) != null && o.full && n.push(t.logo)), n;
  }
  function s(t) {
    const n = l(t), o = {};
    return n.forEach((c) => {
      c.theme ? c.theme === "dark" ? o.dark || (o.dark = c) : c.theme === "light" && (o.light || (o.light = c)) : (o.light || (o.light = c), o.dark || (o.dark = c));
    }), o;
  }
  function e(t, n) {
    var c;
    return (c = s(t)[n]) == null ? void 0 : c.full;
  }
  return {
    businessLogo: e
  };
}
const ee = (l) => (K("data-v-976b79ac"), l = l(), Q(), l), we = { class: "d-flex align-start w-100" }, $e = { class: "w-100" }, Ce = { class: "d-flex align-start w-100" }, xe = { class: "white--text text-h5" }, Be = { class: "text-h6 font-weight-bold" }, Ae = {
  key: 0,
  class: "text-subtitle-1 mt-n1"
}, Le = { class: "text-body-2 mt-1" }, Fe = { key: 1 }, Ne = { key: 0 }, Se = { key: 1 }, Je = { class: "mt-3" }, Me = { key: 0 }, Ie = { key: 0 }, De = {
  key: 0,
  class: "text-subtitle-1 my-2"
}, Ee = { class: "d-flex flex-wrap align-end mt-2" }, Ve = { class: "text-grey-lighten-1 text-caption" }, Pe = /* @__PURE__ */ ee(() => /* @__PURE__ */ a("br", null, null, -1)), Oe = { class: "d-flex justify-center" }, Re = { key: 0 }, Te = /* @__PURE__ */ ee(() => /* @__PURE__ */ a("span", null, " Learn More", -1)), qe = /* @__PURE__ */ R({
  __name: "JobCard",
  props: {
    id: {},
    job: {},
    jobFeatures: {},
    jobNewDays: {},
    permissions: {},
    business: {},
    fetchBusinessFirestore: { type: Boolean },
    hideEdit: { type: Boolean },
    hideOutline: { type: Boolean },
    disableLearnMore: { type: Boolean },
    disableApply: { type: Boolean },
    config: {},
    href: { type: Boolean },
    theme: {}
  },
  emits: ["click:business", "click:learn-more"],
  setup(l, { emit: s }) {
    const e = l, { businessLogo: t } = ke(), n = O(!0), o = O(e.business || {}), c = k(() => ({
      showBizAddress: !0,
      showBizName: !0,
      showLogo: !0,
      showSubtitle: !0,
      subtitlePosition: "belowJobTitle",
      ...e.config || {}
    })), b = k(() => e.theme || "light"), S = k(() => e.jobNewDays || 30), J = k(() => {
      var L, F;
      let i = [];
      const h = [];
      (L = e == null ? void 0 : e.job) != null && L.features && Array.isArray((F = e == null ? void 0 : e.job) == null ? void 0 : F.features) ? n.value ? i = e.job.features : i = e.job.features.slice(0, 4) : i = [];
      const w = ($) => i.filter((B) => B.id === $)[0];
      return e.jobFeatures.forEach(($) => {
        const B = w($.id);
        B && ($.id === "quotedPay" ? B.label !== $.label && h.push(B) : h.push($));
      }), h;
    }), p = k(() => {
      var i, h;
      return ((h = (i = e.job) == null ? void 0 : i.features) == null ? void 0 : h.length) || e.job.isRemote || e.job.rateAmount || e.job.rateLow && e.job.rateHigh || e.job.isSeasonal !== void 0 || e.job.monthsWorked || e.job.description || e.job.comments;
    });
    function _() {
      return V.duration(V().diff(e.job.date)).asDays();
    }
    function y() {
      return V(e.job.date).fromNow();
    }
    function C() {
      s("click:business", e.job.businessId);
    }
    function x(i) {
      var w, L, F;
      if (i.initials)
        return i.initials;
      const { name: h } = i;
      try {
        return (F = (L = (w = h.replace(/(?:^|\s)(a|an|the|and|&|\/|,)\s/gi, "").match(/\b\w/g)) == null ? void 0 : w.slice(0, 3)) == null ? void 0 : L.join("")) == null ? void 0 : F.toUpperCase();
      } catch ($) {
        return console.warn($), "";
      }
    }
    const M = k(() => e.disableLearnMore ? "" : `/jobs/${e.id}`);
    function I() {
      e.disableLearnMore || (e.href && window.open(M.value, "_blank"), s("click:learn-more", e.id));
    }
    return (i, h) => {
      var q, U, z, H;
      const w = m("v-img"), L = m("v-avatar"), F = m("v-sheet"), $ = m("v-chip"), B = m("v-icon"), D = m("v-btn"), T = m("v-spacer");
      return r(), v("div", {
        class: P(["b-container", `b-${b.value} ${i.hideOutline ? "no-border" : ""}`])
      }, [
        a("div", we, [
          a("div", null, [
            a("div", $e, [
              a("div", Ce, [
                c.value.showLogo ? (r(), v("div", {
                  key: 0,
                  class: "mx-3 d-flex justify-center cursor-pointer",
                  onClick: C
                }, [
                  N(t)(o.value, b.value) ? (r(), A(w, {
                    key: 0,
                    src: N(t)(o.value, b.value),
                    alt: (q = o.value) == null ? void 0 : q.name,
                    width: "80"
                  }, null, 8, ["src", "alt"])) : x(o.value) ? (r(), A(F, {
                    key: 1,
                    width: "80"
                  }, {
                    default: u(() => [
                      d(L, {
                        variant: "tonal",
                        size: "60"
                      }, {
                        default: u(() => [
                          a("span", xe, g(x(o.value)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : f("", !0)
                ])) : f("", !0),
                a("div", {
                  class: P(c.value.showLogo ? "" : "ml-3")
                }, [
                  a("div", Be, [
                    j(g(i.job.title) + " ", 1),
                    _() < S.value ? (r(), A($, {
                      key: 0,
                      size: "small",
                      color: "warning"
                    }, {
                      default: u(() => [
                        j(" New ")
                      ]),
                      _: 1
                    })) : f("", !0)
                  ]),
                  c.value.showSubtitle && c.value.subtitlePosition === "belowJobTitle" ? (r(), v("div", Ae, g(i.job.subtitle), 1)) : f("", !0),
                  W(i.$slots, "address", {
                    job: i.job,
                    business: o.value
                  }, () => [
                    a("div", Le, [
                      c.value.showBizName ? (r(), v("div", {
                        key: 0,
                        class: "text-info job-business-name",
                        onClick: C
                      }, g(o.value.name), 1)) : f("", !0),
                      c.value.showBizAddress ? (r(), v("div", Fe, [
                        i.job.isRemote === "yes" ? (r(), v("span", Ne, " Remote ")) : (r(), v("span", Se, g(N(X)({
                          street: o.value.street,
                          town: o.value.town
                        })), 1))
                      ])) : f("", !0)
                    ])
                  ], !0)
                ], 2)
              ]),
              a("div", Je, [
                (r(!0), v(G, null, ne(J.value, (E) => (r(), A(se, {
                  key: E.id,
                  feature: E,
                  class: "mx-1"
                }, null, 8, ["feature"]))), 128)),
                ((z = (U = i.job) == null ? void 0 : U.features) == null ? void 0 : z.length) > 4 ? (r(), v("span", Me, [
                  n.value ? f("", !0) : (r(), A(D, {
                    key: 0,
                    color: "info",
                    variant: "tonal",
                    icon: "",
                    size: "x-small",
                    onClick: h[0] || (h[0] = (E) => n.value = !0)
                  }, {
                    default: u(() => [
                      d(B, null, {
                        default: u(() => [
                          j("mdi-dots-horizontal")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }))
                ])) : f("", !0)
              ])
            ])
          ]),
          d(T),
          (H = e.permissions) != null && H.updateJob && !i.hideEdit ? (r(), v("div", Ie, [
            a("div", null, [
              d(D, {
                variant: "text",
                icon: "",
                size: "small",
                to: `/jobs/${i.id}/edit`
              }, {
                default: u(() => [
                  d(B, null, {
                    default: u(() => [
                      j(" mdi-pencil ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["to"])
            ])
          ])) : f("", !0)
        ]),
        a("div", null, [
          c.value.showSubtitle && c.value.subtitlePosition === "aboveLearnMore" ? (r(), v("div", De, g(i.job.subtitle), 1)) : f("", !0)
        ]),
        a("div", Ee, [
          a("div", Ve, [
            j(" Posted"),
            Pe,
            j(" " + g(y()), 1)
          ]),
          W(i.$slots, "action", {}, () => [
            d(T),
            a("div", Oe, [
              d(je, {
                "disable-apply": i.disableApply,
                variant: "outlined",
                business: o.value,
                job: i.job
              }, null, 8, ["disable-apply", "business", "job"]),
              p.value ? (r(), v("div", Re, [
                d(D, {
                  rounded: "",
                  variant: "outlined",
                  color: "primary",
                  class: "text-none ml-1",
                  onClick: I
                }, {
                  default: u(() => [
                    Te
                  ]),
                  _: 1
                })
              ])) : f("", !0)
            ])
          ], !0)
        ])
      ], 2);
    };
  }
});
const He = /* @__PURE__ */ Z(qe, [["__scopeId", "data-v-976b79ac"]]);
export {
  He as JobCard
};
