import { defineComponent as R, resolveComponent as m, openBlock as s, createBlock as $, normalizeClass as H, withCtx as u, createTextVNode as x, toDisplayString as y, createCommentVNode as f, createElementVNode as i, ref as I, computed as C, onMounted as oe, reactive as te, createElementBlock as b, Fragment as z, createVNode as d, unref as S, pushScopeId as G, popScopeId as K, renderSlot as U, renderList as le } from "vue";
import M from "moment";
const ne = /* @__PURE__ */ R({
  __name: "JobFeatureChip",
  props: {
    feature: {},
    selected: { type: Boolean }
  },
  emits: ["click"],
  setup(r, { emit: n }) {
    function e() {
      n("click");
    }
    return (o, l) => {
      const t = m("v-icon"), c = m("v-chip");
      return s(), $(c, {
        key: o.feature.id,
        class: H(["mx-1 mb-2 text-capitalize cursor-pointer", `${o.selected ? "text-" + o.feature.textColor : ""}`]),
        color: o.feature.color,
        variant: o.selected ? "flat" : "tonal",
        rounded: "",
        onClick: e
      }, {
        default: u(() => [
          o.selected ? (s(), $(t, { key: 0 }, {
            default: u(() => [
              x(y("mdi-check"))
            ]),
            _: 1
          })) : f("", !0),
          i("span", null, y(o.feature.label), 1)
        ]),
        _: 1
      }, 8, ["class", "color", "variant"]);
    };
  }
});
function Q({
  street: r,
  state: n,
  zip: e,
  town: o
}) {
  let l = "";
  return r && (l += r), o != null && o.trim() && (l && (l += ", "), l += o.trim()), (n != null && n.trim() || e != null && e.trim()) && (l && (n != null && n.trim() || e != null && e.trim()) && (l += ","), n != null && n.trim() && (l && (l += " "), l += n == null ? void 0 : n.trim()), e != null && e.trim() && (l && (l += " "), l += e.trim())), l;
}
function re(r, n) {
  var l;
  const e = n || { job: !0, business: !0 }, o = [];
  return e != null && e.job && Array.isArray((l = r == null ? void 0 : r.jobsContact) == null ? void 0 : l.phone) && r.jobsContact.phone.forEach((t) => {
    o.push(t.numberFormatted);
  }), e != null && e.business && r != null && r.phoneFormatted && o.push(r.phoneFormatted), o.filter((t) => !!t);
}
const X = (r) => (G("data-v-b11ae3ba"), r = r(), K(), r), ie = { key: 0 }, ae = { key: 0 }, se = { class: "mb-5 text-center" }, ce = { class: "d-flex justify-center pb-5" }, ue = ["href"], de = { class: "d-flex flex-column justify-center align-center" }, pe = /* @__PURE__ */ X(() => /* @__PURE__ */ i("span", { class: "text-info mt-1" }, " Call ", -1)), be = ["href"], fe = { class: "d-flex flex-column justify-center align-center ml-10" }, me = /* @__PURE__ */ X(() => /* @__PURE__ */ i("span", { class: "text-info mt-1" }, " Message ", -1)), _e = { key: 1 }, ve = { class: "text-info" }, he = {
  class: "mt-3",
  style: { height: "300px" }
}, ge = ["src"], ye = /* @__PURE__ */ R({
  __name: "ButtonJobApply",
  props: {
    color: {},
    disableApply: { type: Boolean },
    business: {},
    job: {},
    variant: {}
  },
  setup(r) {
    const n = r, e = I(!1), o = C(() => {
      var h, p, g;
      return {
        job: String(((p = (h = n.business) == null ? void 0 : h.jobsContact) == null ? void 0 : p.email) || "").trim(),
        biz: String(((g = n.business) == null ? void 0 : g.email) || "").trim()
      };
    });
    oe(async () => {
      e.value = !0;
    });
    const l = C(() => re(n.business, { job: !0 })), t = C(() => n.business.mailingAddress), c = C(() => {
      var h, p, g, j;
      return [(h = t.value) == null ? void 0 : h.street, (p = t.value) == null ? void 0 : p.town, (g = t.value) == null ? void 0 : g.state, (j = t.value) == null ? void 0 : j.zip].filter((B) => !!B).join(", ");
    }), _ = te({
      callMessage: !1,
      address: !1,
      value: !1,
      map: !1
    }), L = C(() => {
      var p, g;
      return o.value.job || o.value.biz || ((p = t.value) == null ? void 0 : p.street) || ((g = l.value) == null ? void 0 : g.length);
    });
    function N() {
      if (!n.disableApply)
        if (o.value.job || o.value.biz) {
          const h = `mailto:${o.value.job || o.value.biz}?subject=Application for ${n.job.title}`;
          window.open(h, "_blank");
        } else
          l.value.length ? (_.value = !0, _.callMessage = !0) : t.value.street && (_.address = !0, _.value = !0);
    }
    return (h, p) => {
      const g = m("v-spacer"), j = m("v-icon"), B = m("v-btn"), P = m("v-card-title"), T = m("v-container"), a = m("v-card"), v = m("v-dialog");
      return s(), b(z, null, [
        e.value ? (s(), b("div", ie, [
          d(v, {
            modelValue: _.value,
            "onUpdate:modelValue": p[1] || (p[1] = (k) => _.value = k),
            width: "500"
          }, {
            default: u(() => [
              d(a, { class: "mx-auto w-100" }, {
                default: u(() => [
                  d(P, { class: "d-flex" }, {
                    default: u(() => [
                      d(g),
                      d(B, {
                        icon: "",
                        variant: "text",
                        onClick: p[0] || (p[0] = (k) => _.value = !1)
                      }, {
                        default: u(() => [
                          d(j, null, {
                            default: u(() => [
                              x("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  d(T, null, {
                    default: u(() => [
                      _.callMessage ? (s(), b("div", ae, [
                        i("div", se, y(l.value[0]), 1),
                        i("div", ce, [
                          i("a", {
                            href: `tel:${l.value[0]}`,
                            target: "_blank",
                            class: "decoration-none"
                          }, [
                            i("div", de, [
                              d(B, {
                                variant: "tonal",
                                icon: "",
                                color: "info"
                              }, {
                                default: u(() => [
                                  d(j, null, {
                                    default: u(() => [
                                      x(" mdi-phone ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              pe
                            ])
                          ], 8, ue),
                          i("a", {
                            href: `sms:${l.value[0]}`,
                            target: "_blank",
                            class: "decoration-none"
                          }, [
                            i("div", fe, [
                              d(B, {
                                variant: "tonal",
                                icon: "",
                                color: "info"
                              }, {
                                default: u(() => [
                                  d(j, null, {
                                    default: u(() => [
                                      x(" mdi-message ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              me
                            ])
                          ], 8, be)
                        ])
                      ])) : f("", !0),
                      _.address ? (s(), b("div", _e, [
                        i("strong", ve, y(S(Q)(t.value)), 1),
                        i("div", he, [
                          i("iframe", {
                            width: "100%",
                            height: "100%",
                            frameborder: "0",
                            scrolling: "no",
                            marginheight: "0",
                            marginwidth: "0",
                            src: `https://maps.google.com/maps?output=embed&q=${c.value}`
                          }, null, 8, ge)
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
        L.value ? (s(), $(B, {
          key: 1,
          rounded: "",
          variant: h.variant || "flat",
          color: n.color || "primary",
          class: "text-none",
          onClick: p[2] || (p[2] = (k) => N())
        }, {
          default: u(() => [
            x(" Apply Now ")
          ]),
          _: 1
        }, 8, ["variant", "color"])) : f("", !0)
      ], 64);
    };
  }
});
const Z = (r, n) => {
  const e = r.__vccOpts || r;
  for (const [o, l] of n)
    e[o] = l;
  return e;
}, xe = /* @__PURE__ */ Z(ye, [["__scopeId", "data-v-b11ae3ba"]]);
function Ce() {
  function r(o) {
    var t;
    const l = [];
    return o && (Array.isArray(o.logo) ? l.push(...o.logo) : (t = o.logo) != null && t.full && l.push(o.logo)), l;
  }
  function n(o) {
    const l = r(o), t = {};
    return l.forEach((c) => {
      c.theme ? c.theme === "dark" ? t.dark || (t.dark = c) : c.theme === "light" && (t.light || (t.light = c)) : (t.light || (t.light = c), t.dark || (t.dark = c));
    }), t;
  }
  function e(o, l) {
    var c;
    return (c = n(o)[l]) == null ? void 0 : c.full;
  }
  return {
    businessLogo: e
  };
}
const ke = [
  {
    id: "quotedPay",
    label: "*SHOW PAY*",
    color: "#2E7D32",
    textColor: "white",
    group: "compensation"
  },
  {
    id: "competitivePay",
    label: "Competitive Pay",
    color: "#2E7D32",
    textColor: "#ff0000",
    group: "compensation"
  },
  {
    id: "Hourly",
    label: "Hourly",
    color: "#2E7D32",
    textColor: "#ff0000",
    group: "compensation"
  },
  {
    id: "tips",
    label: "Tips",
    color: "#2E7D32",
    textColor: "#ff0000",
    group: "compensation"
  },
  {
    id: "salaried",
    label: "Salaried",
    color: "#2E7D32",
    textColor: "#ff0000",
    group: "compensation"
  },
  {
    id: "signupBonus",
    label: "Signup Bonus",
    color: "#2E7D32",
    textColor: "#ff0000",
    group: "compensation"
  },
  {
    id: "bonus",
    label: "Bonus pay",
    color: "#43A047",
    textColor: "white",
    group: "compensation"
  },
  {
    id: "bonuses",
    label: "Bonuses",
    color: "#43A047",
    textColor: "white",
    group: "compensation"
  },
  {
    id: "partTime",
    label: "Part Time",
    color: "#64B5F6",
    textColor: "black",
    group: "schedule"
  },
  {
    id: "partOrFullTime",
    label: "Part or Full Time",
    color: "#64B5F6",
    textColor: "black",
    group: "schedule"
  },
  {
    id: "fullTime",
    label: "Full Time",
    color: "#64B5F6",
    textColor: "black",
    group: "schedule"
  },
  {
    id: "temporary",
    label: "Temporary",
    color: "#64B5F6",
    textColor: "black",
    group: "schedule"
  },
  {
    id: "seasonal",
    label: "Seasonal",
    color: "#64B5F6",
    textColor: "black",
    group: "schedule"
  },
  {
    id: "yearRound",
    label: "Year-Round",
    color: "#64B5F6",
    textColor: "black",
    group: "schedule"
  },
  {
    id: "flexibleSchedule",
    label: "Flexible Schedule",
    color: "#42A5F5",
    textColor: "black",
    group: "schedule"
  },
  {
    id: "urgentlyHiring",
    label: "Urgently Hiring",
    color: "red",
    textColor: "white",
    group: "schedule"
  },
  {
    id: "noExperience",
    label: "No Experience",
    color: "orange",
    textColor: "black",
    group: "experience"
  },
  {
    id: "willTrain",
    label: "Will Train",
    color: "orange",
    textColor: "black",
    group: "experience"
  },
  {
    id: "entryLevel",
    label: "Entry Level",
    color: "orange",
    textColor: "black",
    group: "experience"
  },
  {
    id: "experience1-3",
    label: "1-3 Years of Experience",
    color: "orange",
    textColor: "black",
    group: "experience"
  },
  {
    id: "experience4+",
    label: "4+ Years of Experience",
    color: "orange",
    textColor: "black",
    group: "experience"
  },
  {
    id: "experienceAny",
    label: "Any Experience Welcomed ",
    color: "orange",
    textColor: "black",
    group: "experience"
  },
  {
    id: "experiencePreferred",
    label: "Experience Preferred",
    color: "orange",
    textColor: "black",
    group: "experience"
  },
  {
    id: "experienceRequired",
    label: "Experience Required",
    color: "orange",
    textColor: "black",
    group: "experience"
  },
  {
    id: "busRoute",
    label: "Bus Route",
    color: "purple",
    textColor: "white",
    group: "benefits"
  },
  {
    id: "workFromHome",
    label: "Work from Home",
    color: "purple",
    textColor: "white",
    group: "benefits"
  },
  {
    id: "benefits",
    label: "Benefits",
    color: "cyan",
    textColor: "white",
    group: "benefits"
  },
  {
    id: "heathInsurance",
    label: "Health Insurance",
    color: "cyan",
    textColor: "white",
    group: "benefits"
  },
  {
    id: "paidTimeOff",
    label: "Paid Time Off",
    color: "#00ACC1",
    textColor: "white",
    group: "benefits"
  },
  {
    id: "retirementBenefit",
    label: "Retirement Benefit",
    color: "#0097A7",
    textColor: "white",
    group: "benefits"
  },
  {
    id: "childCare",
    label: "Child Care",
    color: "#C0CA33",
    textColor: "white",
    group: "benefits"
  },
  {
    id: "fuelCosts",
    label: "Fuel Costs",
    color: "#C0CA33",
    textColor: "white",
    group: "benefits"
  },
  {
    id: "housing",
    label: "Housing",
    color: "#C0CA33",
    textColor: "white",
    group: "benefits"
  }
], ee = (r) => (G("data-v-6807ac42"), r = r(), K(), r), we = { class: "d-flex align-start w-100" }, je = { class: "w-100" }, Be = { class: "d-flex align-start w-100" }, Ae = { class: "white--text text-h5" }, $e = { class: "text-h6 font-weight-bold" }, Fe = {
  key: 0,
  class: "text-subtitle-1 mt-n1"
}, Ee = { class: "text-body-2 mt-1" }, Se = { key: 1 }, Le = { key: 0 }, Ne = { key: 1 }, Pe = { class: "mt-3" }, Te = { key: 0 }, De = { key: 0 }, Je = {
  key: 0,
  class: "text-subtitle-1 my-2"
}, Me = { class: "d-flex flex-wrap align-end mt-2" }, He = { class: "text-grey-lighten-1 text-caption" }, Ie = /* @__PURE__ */ ee(() => /* @__PURE__ */ i("br", null, null, -1)), Re = { class: "d-flex justify-center" }, Oe = { key: 0 }, Ve = /* @__PURE__ */ ee(() => /* @__PURE__ */ i("span", null, " Learn More", -1)), qe = /* @__PURE__ */ R({
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
  setup(r, { emit: n }) {
    const e = r, { businessLogo: o } = Ce(), l = I(!0), t = I(e.business || {}), c = C(() => ({
      showBizAddress: !0,
      showBizName: !0,
      showLogo: !0,
      showSubtitle: !0,
      subtitlePosition: "belowJobTitle",
      ...e.config || {}
    })), _ = C(() => e.theme || "light"), L = C(() => e.jobNewDays || 30), N = C(() => {
      var F, E;
      let a = [];
      const v = [];
      (F = e == null ? void 0 : e.job) != null && F.features && Array.isArray((E = e == null ? void 0 : e.job) == null ? void 0 : E.features) ? l.value ? a = e.job.features : a = e.job.features.slice(0, 4) : a = [];
      const k = (w) => a.filter((A) => A.id === w)[0];
      return (e.jobFeatures || ke).forEach((w) => {
        const A = k(w.id);
        A && (w.id === "quotedPay" ? A.label !== w.label && v.push(A) : v.push(w));
      }), v;
    }), h = C(() => {
      var a, v;
      return ((v = (a = e.job) == null ? void 0 : a.features) == null ? void 0 : v.length) || e.job.isRemote || e.job.rateAmount || e.job.rateLow && e.job.rateHigh || e.job.isSeasonal !== void 0 || e.job.monthsWorked || e.job.description || e.job.comments;
    });
    function p() {
      return M.duration(M().diff(e.job.date)).asDays();
    }
    function g() {
      return M(e.job.date).fromNow();
    }
    function j() {
      n("click:business", e.job.businessId);
    }
    function B(a) {
      var k, F, E;
      if (a.initials)
        return a.initials;
      const { name: v } = a;
      try {
        return (E = (F = (k = v.replace(/(?:^|\s)(a|an|the|and|&|\/|,)\s/gi, "").match(/\b\w/g)) == null ? void 0 : k.slice(0, 3)) == null ? void 0 : F.join("")) == null ? void 0 : E.toUpperCase();
      } catch (w) {
        return console.warn(w), "";
      }
    }
    const P = C(() => e.disableLearnMore ? "" : `/jobs/${e.id}`);
    function T() {
      e.disableLearnMore || (e.href && window.open(P.value, "_blank"), n("click:learn-more", e.id));
    }
    return (a, v) => {
      var V, q, W, Y;
      const k = m("v-img"), F = m("v-avatar"), E = m("v-sheet"), w = m("v-chip"), A = m("v-icon"), D = m("v-btn"), O = m("v-spacer");
      return s(), b("div", {
        class: H(["b-container", `b-${_.value} ${a.hideOutline ? "no-border" : ""}`])
      }, [
        i("div", we, [
          i("div", null, [
            i("div", je, [
              i("div", Be, [
                c.value.showLogo ? (s(), b("div", {
                  key: 0,
                  class: "mx-3 d-flex justify-center cursor-pointer",
                  onClick: j
                }, [
                  S(o)(t.value, _.value) ? (s(), $(k, {
                    key: 0,
                    src: S(o)(t.value, _.value),
                    alt: (V = t.value) == null ? void 0 : V.name,
                    width: "80"
                  }, null, 8, ["src", "alt"])) : B(t.value) ? (s(), $(E, {
                    key: 1,
                    width: "80"
                  }, {
                    default: u(() => [
                      d(F, {
                        variant: "tonal",
                        size: "60"
                      }, {
                        default: u(() => [
                          i("span", Ae, y(B(t.value)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : f("", !0)
                ])) : f("", !0),
                i("div", {
                  class: H(c.value.showLogo ? "" : "ml-3")
                }, [
                  i("div", $e, [
                    x(y(a.job.title) + " ", 1),
                    p() < L.value ? (s(), $(w, {
                      key: 0,
                      size: "small",
                      color: "warning"
                    }, {
                      default: u(() => [
                        x(" New ")
                      ]),
                      _: 1
                    })) : f("", !0)
                  ]),
                  c.value.showSubtitle && c.value.subtitlePosition === "belowJobTitle" ? (s(), b("div", Fe, y(a.job.subtitle), 1)) : f("", !0),
                  U(a.$slots, "address", {
                    job: a.job,
                    business: t.value
                  }, () => [
                    i("div", Ee, [
                      c.value.showBizName ? (s(), b("div", {
                        key: 0,
                        class: "text-info job-business-name",
                        onClick: j
                      }, y(t.value.name), 1)) : f("", !0),
                      c.value.showBizAddress ? (s(), b("div", Se, [
                        a.job.isRemote === "yes" ? (s(), b("span", Le, " Remote ")) : (s(), b("span", Ne, y(S(Q)({
                          street: t.value.street,
                          town: t.value.town
                        })), 1))
                      ])) : f("", !0)
                    ])
                  ], !0)
                ], 2)
              ]),
              i("div", Pe, [
                (s(!0), b(z, null, le(N.value, (J) => (s(), $(ne, {
                  key: J.id,
                  feature: J,
                  class: "mx-1"
                }, null, 8, ["feature"]))), 128)),
                ((W = (q = a.job) == null ? void 0 : q.features) == null ? void 0 : W.length) > 4 ? (s(), b("span", Te, [
                  l.value ? f("", !0) : (s(), $(D, {
                    key: 0,
                    color: "info",
                    variant: "tonal",
                    icon: "",
                    size: "x-small",
                    onClick: v[0] || (v[0] = (J) => l.value = !0)
                  }, {
                    default: u(() => [
                      d(A, null, {
                        default: u(() => [
                          x("mdi-dots-horizontal")
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
          d(O),
          (Y = e.permissions) != null && Y.updateJob && !a.hideEdit ? (s(), b("div", De, [
            i("div", null, [
              d(D, {
                variant: "text",
                icon: "",
                size: "small",
                to: `/jobs/${a.id}/edit`
              }, {
                default: u(() => [
                  d(A, null, {
                    default: u(() => [
                      x(" mdi-pencil ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["to"])
            ])
          ])) : f("", !0)
        ]),
        i("div", null, [
          c.value.showSubtitle && c.value.subtitlePosition === "aboveLearnMore" ? (s(), b("div", Je, y(a.job.subtitle), 1)) : f("", !0)
        ]),
        i("div", Me, [
          i("div", He, [
            x(" Posted"),
            Ie,
            x(" " + y(g()), 1)
          ]),
          U(a.$slots, "action", {}, () => [
            d(O),
            i("div", Re, [
              d(xe, {
                "disable-apply": a.disableApply,
                variant: "outlined",
                business: t.value,
                job: a.job
              }, null, 8, ["disable-apply", "business", "job"]),
              h.value ? (s(), b("div", Oe, [
                d(D, {
                  rounded: "",
                  variant: "outlined",
                  color: "primary",
                  class: "text-none ml-1",
                  onClick: T
                }, {
                  default: u(() => [
                    Ve
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
const Ue = /* @__PURE__ */ Z(qe, [["__scopeId", "data-v-6807ac42"]]);
export {
  Ue as JobCard
};
