(this.webpackJsonplamaadmin = this.webpackJsonplamaadmin || []).push([
  [0],
  {
    330: function (e, t, c) {},
    339: function (e, t, c) {},
    346: function (e, t, c) {},
    348: function (e, t, c) {},
    484: function (e, t, c) {},
    521: function (e, t, c) {},
    522: function (e, t, c) {},
    523: function (e, t, c) {},
    524: function (e, t, c) {},
    525: function (e, t, c) {},
    527: function (e, t, c) {},
    528: function (e, t, c) {},
    530: function (e, t, c) {},
    531: function (e, t, c) {},
    532: function (e, t, c) {},
    533: function (e, t, c) {},
    534: function (e, t, c) {},
    535: function (e, t, c) {},
    537: function (e, t, c) {},
    538: function (e, t, c) {},
    539: function (e, t, c) {},
    540: function (e, t, c) {},
    541: function (e, t, c) {},
    542: function (e, t, c) {},
    543: function (e, t, c) {},
    544: function (e, t, c) {},
    545: function (e, t, c) {},
    546: function (e, t, c) {},
    547: function (e, t, c) {},
    550: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(0),
        s = c(29),
        n = c.n(s),
        r = (c(330), c(594)),
        i = c(597),
        l = c(598),
        o = c(599),
        d = c(600),
        u = c(601),
        j = c(602),
        b = c(603),
        h = c(604),
        p = c(605),
        m = c(606),
        O = c(607),
        x = c(608),
        f = c(609),
        v = c(40),
        g = c(21),
        N = c(1);
      function w() {
        var e = Object(v.useLocation)(),
          t = e.pathname.split("/");
        return (
          console.log(t.includes(""), "route"),
          Object(N.jsx)("div", {
            className: "sidebar",
            children: Object(N.jsxs)("div", {
              className: "sidebarWrapper",
              children: [
                Object(N.jsxs)("div", {
                  className: "sidebarMenu",
                  children: [
                    Object(N.jsx)("h3", {
                      className: "sidebarTitle",
                      children: "Dashboard",
                    }),
                    Object(N.jsxs)("ul", {
                      className: "sidebarList",
                      children: [
                        Object(N.jsx)(g.b, {
                          to: "/",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              "/" === e.pathname ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(r.a, { className: "sidebarIcon" }),
                              "Home",
                            ],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          to: "/analatics",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("analatics") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(i.a, { className: "sidebarIcon" }),
                              "Analytics",
                            ],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          to: "/sales",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("sales") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(l.a, { className: "sidebarIcon" }),
                              "Sales",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "sidebarMenu",
                  children: [
                    Object(N.jsx)("h3", {
                      className: "sidebarTitle",
                      children: "Quick Menu",
                    }),
                    Object(N.jsxs)("ul", {
                      className: "sidebarList",
                      children: [
                        Object(N.jsx)(g.b, {
                          to: "/users",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("users") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(o.a, { className: "sidebarIcon" }),
                              "Users",
                            ],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          to: "/products",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("products") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(d.a, { className: "sidebarIcon" }),
                              "Products",
                            ],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          to: "/newproduct",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("newproduct") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(u.a, { className: "sidebarIcon" }),
                              "Add Product",
                            ],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          to: "/banners",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("newproduct") ? "active" : ""
                            ),
                            children: [Object(N.jsx)(j.a, {}), "Banner"],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          to: "/orders",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("orders") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(b.a, { className: "sidebarIcon" }),
                              "Orders",
                            ],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          to: "/transaction",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("transaction") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(h.a, { className: "sidebarIcon" }),
                              "Transactions",
                            ],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          className: "link",
                          to: "/reports",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              t.includes("reports") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(p.a, { className: "sidebarIcon" }),
                              "Reports",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "sidebarMenu",
                  children: [
                    Object(N.jsx)("h3", {
                      className: "sidebarTitle",
                      children: "Notifications",
                    }),
                    Object(N.jsxs)("ul", {
                      className: "sidebarList",
                      children: [
                        Object(N.jsx)(g.b, {
                          to: "/make-admin",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              e.pathname.includes("make-admin") ? "active" : ""
                            ),
                            children: [
                              Object(N.jsx)(m.a, { className: "sidebarIcon" }),
                              "Admin",
                            ],
                          }),
                        }),
                        Object(N.jsx)(g.b, {
                          to: "/mail",
                          className: "link",
                          children: Object(N.jsxs)("li", {
                            className: "sidebarListItem ".concat(
                              (e.pathname, "")
                            ),
                            children: [
                              Object(N.jsx)(O.a, { className: "sidebarIcon" }),
                              "Mail",
                            ],
                          }),
                        }),
                        Object(N.jsxs)(g.b, {
                          to: "/feedback",
                          className: "link",
                          children: [
                            " ",
                            Object(N.jsxs)("li", {
                              className: "sidebarListItem ".concat(
                                (e.pathname, "")
                              ),
                              children: [
                                Object(N.jsx)(x.a, {
                                  className: "sidebarIcon",
                                }),
                                "Feedback",
                              ],
                            }),
                          ],
                        }),
                        Object(N.jsxs)(g.b, {
                          to: "/messages",
                          className: "link",
                          children: [
                            " ",
                            Object(N.jsxs)("li", {
                              className: "sidebarListItem ".concat(
                                (e.pathname, "")
                              ),
                              children: [
                                Object(N.jsx)(f.a, {
                                  className: "sidebarIcon",
                                }),
                                "Messages",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var S = c(4),
        y = (c(339), c(610)),
        k = c(611),
        I = c(612),
        C = c(613),
        L = c(614),
        U = c(32),
        P = c(119),
        A = c.n(P),
        T = c(79),
        _ = Object(T.b)({
          name: "user",
          initialState: { currentUser: null, isLoading: !1, error: "" },
          reducers: {
            loginStart: function (e) {
              e.isLoading = !0;
            },
            loginSuccess: function (e, t) {
              (e.isLoading = !1), (e.currentUser = t.payload);
            },
            loginFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
            logout: function (e) {
              e.currentUser = null;
            },
            clear: function (e) {
              (e.currentUser = null), (e.isLoading = !1), (e.error = "");
            },
          },
        }),
        D = _.actions,
        F = D.loginStart,
        B = D.loginSuccess,
        E = D.loginFailure,
        R = D.logout,
        M = D.clear,
        Y = _.reducer,
        z = c(269),
        V = c.p + "static/media/logo.f271aebe.jpeg";
      function J() {
        var e = Object(a.useState)(!1),
          t = Object(S.a)(e, 2),
          c = t[0],
          s = t[1],
          n = Object(a.useState)(!1),
          j = Object(S.a)(n, 2),
          v = j[0],
          w = j[1],
          P = Object(U.c)(function (e) {
            return e.user;
          }).currentUser,
          T = null === P || void 0 === P ? void 0 : P.email,
          _ = null === P || void 0 === P ? void 0 : P.username,
          D = Object(z.useLocation)(),
          F = D.pathname.split("/"),
          B = Object(U.b)(),
          E = function () {
            s(!c);
          },
          M = function () {
            w(!v);
          },
          Y = A.a.url(T);
        return Object(N.jsxs)(N.Fragment, {
          children: [
            Object(N.jsx)("div", {
              className: "top-bar",
              children: Object(N.jsxs)("div", {
                className: "top-bar-wrapper",
                children: [
                  Object(N.jsx)("div", {
                    className: "topLeft",
                    children: Object(N.jsx)(g.b, {
                      to: "/",
                      children: Object(N.jsx)("span", {
                        className: "logo",
                        children: Object(N.jsx)("img", {
                          src: V,
                          style: { height: "50px" },
                          alt: "",
                        }),
                      }),
                    }),
                  }),
                  Object(N.jsx)("div", {
                    className: "dropdown",
                    onClick: M,
                    children: Object(N.jsx)(y.a, {}),
                  }),
                  Object(N.jsxs)("div", {
                    className: "topRight",
                    children: [
                      Object(N.jsxs)("div", {
                        className: "topbarIconContainer",
                        children: [
                          Object(N.jsx)(k.a, {}),
                          Object(N.jsx)("span", {
                            className: "topIconBadge",
                            children: "2",
                          }),
                        ],
                      }),
                      Object(N.jsxs)("div", {
                        className: "topbarIconContainer",
                        children: [
                          Object(N.jsx)(I.a, {}),
                          Object(N.jsx)("span", {
                            className: "topIconBadge",
                            children: "2",
                          }),
                        ],
                      }),
                      Object(N.jsx)("div", {
                        className: "topbarIconContainer",
                        children: Object(N.jsx)(C.a, {}),
                      }),
                      Object(N.jsx)("div", {
                        className: "topAvatar",
                        onClick: E,
                        children: Object(N.jsx)("img", {
                          src: Y,
                          alt: "",
                          className: "topAvatar-img",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c &&
              Object(N.jsx)("div", {
                className: "overlay",
                children: Object(N.jsxs)("div", {
                  className: "overlay-content",
                  children: [
                    Object(N.jsx)("div", {
                      className: "close",
                      onClick: E,
                      children: "X",
                    }),
                    Object(N.jsxs)("div", {
                      className: "popupProfile",
                      children: [
                        Object(N.jsx)("div", {
                          className: "topAvatar",
                          children: Object(N.jsx)("img", {
                            src: Y,
                            alt: "",
                            className: "topAvatar-img",
                          }),
                        }),
                        Object(N.jsx)("span", { children: _ }),
                        Object(N.jsx)("span", { children: T }),
                        Object(N.jsx)("button", {
                          title: "Logout",
                          onClick: function () {
                            B(R());
                          },
                          className: "btn-logout",
                          children: Object(N.jsx)(L.a, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            v &&
              Object(N.jsx)("div", {
                className: "overlay-drawer",
                children: Object(N.jsxs)("div", {
                  className: "overlay-drawer-content",
                  children: [
                    Object(N.jsx)("div", {
                      className: "close",
                      onClick: M,
                      children: "X",
                    }),
                    Object(N.jsxs)("div", {
                      className: "sidebarWrapperDrawer",
                      children: [
                        Object(N.jsxs)("div", {
                          className: "sidebarMenu",
                          children: [
                            Object(N.jsx)("h3", {
                              className: "sidebarTitle",
                              children: "Dashboard",
                            }),
                            Object(N.jsxs)("ul", {
                              className: "sidebarList",
                              children: [
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      "/" === D.pathname ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(r.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Home",
                                    ],
                                  }),
                                }),
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/analatics",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      F.includes("analatics") ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(i.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Analytics",
                                    ],
                                  }),
                                }),
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/sales",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      F.includes("sales") ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(l.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Sales",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "sidebarMenu",
                          children: [
                            Object(N.jsx)("h3", {
                              className: "sidebarTitle",
                              children: "Quick Menu",
                            }),
                            Object(N.jsxs)("ul", {
                              className: "sidebarList",
                              children: [
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/users",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      F.includes("users") ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(o.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Users",
                                    ],
                                  }),
                                }),
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/products",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      F.includes("products") ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(d.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Products",
                                    ],
                                  }),
                                }),
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/newproduct",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      F.includes("newproduct") ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(u.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Add Product",
                                    ],
                                  }),
                                }),
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/orders",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      F.includes("orders") ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(b.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Orders",
                                    ],
                                  }),
                                }),
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/transaction",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      F.includes("transaction") ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(h.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Transactions",
                                    ],
                                  }),
                                }),
                                Object(N.jsx)(g.b, {
                                  className: "link",
                                  onClick: M,
                                  to: "/reports",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      F.includes("reports") ? "active" : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(p.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Reports",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "sidebarMenu",
                          children: [
                            Object(N.jsx)("h3", {
                              className: "sidebarTitle",
                              children: "Notifications",
                            }),
                            Object(N.jsxs)("ul", {
                              className: "sidebarList",
                              children: [
                                Object(N.jsx)(g.b, {
                                  onClick: M,
                                  to: "/make-admin",
                                  className: "link",
                                  children: Object(N.jsxs)("li", {
                                    className: "sidebarListItem ".concat(
                                      D.pathname.includes("make-admin")
                                        ? "active"
                                        : ""
                                    ),
                                    children: [
                                      Object(N.jsx)(m.a, {
                                        className: "sidebarIcon",
                                      }),
                                      "Admin",
                                    ],
                                  }),
                                }),
                                Object(N.jsxs)("li", {
                                  className: "sidebarListItem ".concat(
                                    (D.pathname, "")
                                  ),
                                  children: [
                                    Object(N.jsx)(O.a, {
                                      className: "sidebarIcon",
                                    }),
                                    "Mail",
                                  ],
                                }),
                                Object(N.jsxs)("li", {
                                  className: "sidebarListItem ".concat(
                                    (D.pathname, "")
                                  ),
                                  children: [
                                    Object(N.jsx)(x.a, {
                                      className: "sidebarIcon",
                                    }),
                                    "Feedback",
                                  ],
                                }),
                                Object(N.jsxs)("li", {
                                  className: "sidebarListItem ".concat(
                                    (D.pathname, "")
                                  ),
                                  children: [
                                    Object(N.jsx)(f.a, {
                                      className: "sidebarIcon",
                                    }),
                                    "Messages",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      c(346);
      var X = c(8),
        K = c.n(X),
        W = c(13),
        H = (c(348), c(615)),
        q = c(616),
        G = c(288),
        Q = c(297),
        $ = c(151),
        Z = c(620),
        ee = c(178),
        te = function (e) {
          var t = e.name,
            c = e.margin;
          return Object(N.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: c || "",
            },
            children:
              "ball" === t
                ? Object(N.jsx)(ee.a, {
                    height: 100,
                    width: 100,
                    radius: 5,
                    color: "#4fa94d",
                    ariaLabel: "ball-triangle-loading",
                    wrapperClass: {},
                    wrapperStyle: "",
                    visible: !0,
                  })
                : "circle" === t
                ? Object(N.jsx)(ee.c, {
                    height: "80",
                    width: "80",
                    color: "#4fa94d",
                    ariaLabel: "circles-loading",
                    wrapperStyle: {},
                    wrapperClass: "",
                    visible: !0,
                  })
                : "block" === t
                ? Object(N.jsx)(ee.b, {
                    visible: !0,
                    height: "80",
                    width: "80",
                    ariaLabel: "blocks-loading",
                    wrapperStyle: {},
                    wrapperClass: "blocks-wrapper",
                  })
                : "Loading..",
          });
        },
        ce = c(50),
        ae = [
          "#8884d8",
          "#82ca9d",
          "#ffc658",
          "#f17422",
          "#c71585",
          "#008080",
          "#f26d6d",
          "#3cba9f",
          "#8e5ea2",
          "#e8c3b9",
          "#c45850",
          "#00CED1",
        ],
        se = function (e) {
          ce.b.success(e, { position: "top-right", autoClose: 3e3 });
        };
      function ne(e) {
        var t = e.title,
          c = e.data,
          a = e.dataKey,
          s = e.grid,
          n = e.isLoading,
          r = e.analatics;
        return Object(N.jsxs)("div", {
          className: "chart",
          children: [
            Object(N.jsx)("h3", { className: "chartTitle", children: t }),
            Object(N.jsx)(H.a, {
              width: "100%",
              aspect: 4,
              children: n
                ? Object(N.jsx)(te, { name: "block" })
                : Object(N.jsxs)(q.a, {
                    data: c,
                    children: [
                      Object(N.jsx)(G.a, {
                        dataKey: "name",
                        stroke: "#5550bd",
                      }),
                      Object(N.jsx)(Q.a, {
                        type: "monotone",
                        dataKey: a,
                        stroke: "#5550bd",
                      }),
                      Object(N.jsx)($.a, {}),
                      s &&
                        Object(N.jsx)(Z.a, {
                          stroke: "#e0dfdf",
                          strokeDasharray: "5 5",
                        }),
                    ],
                  }),
            }),
            r &&
              Object(N.jsxs)(N.Fragment, {
                children: [
                  Object(N.jsx)("p", {
                    style: { margin: "20px 0", textAlign: "center" },
                    children: "Month : Number Of Users",
                  }),
                  Object(N.jsx)("div", {
                    style: {
                      display: "flex",
                      gap: "11px",
                      justifyContent: "center",
                      width: "100%",
                      margin: "auto",
                    },
                    children: c.map(function (e, t) {
                      return Object(N.jsx)(
                        "div",
                        {
                          style: { color: ae[t % ae.length] },
                          children:
                            e.active_users > 0
                              ? Object(N.jsx)("div", {
                                  children: Object(N.jsxs)("p", {
                                    children: [e.name, " : ", e.active_users],
                                  }),
                                })
                              : Object(N.jsx)("noscript", {}),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      c(484);
      var re = c(205),
        ie = c.n(re),
        le =
          "https://rock-metal-backend-3yv4t3p4i-chttravels-projects.vercel.app/api/",
        oe = ie.a.create({ baseURL: le }),
        de = ie.a.create({ baseURL: le });
      de.interceptors.request.use(
        function (e) {
          var t = localStorage.getItem("token");
          return (
            console.log(t), t && (e.headers.token = "Bearer ".concat(t)), e
          );
        },
        function (e) {
          return Promise.reject(e);
        }
      );
      var ue = c(10),
        je = c.n(ue);
      function be() {
        var e = Object(a.useState)([]),
          t = Object(S.a)(e, 2),
          c = t[0],
          s = t[1],
          n = Object(a.useState)(0),
          r = Object(S.a)(n, 2),
          i = (r[0], r[1]),
          l = Object(a.useState)(!1),
          o = Object(S.a)(l, 2),
          d = o[0],
          u = o[1],
          j = Object(a.useMemo)(function () {
            return [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
          }, []);
        Object(a.useEffect)(function () {
          (function () {
            var e = Object(W.a)(
              K.a.mark(function e() {
                var t, c, a;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            u(!0),
                            (e.prev = 1),
                            (e.next = 4),
                            de.get("orders/income-stats")
                          );
                        case 4:
                          (a = e.sent),
                            s(a.data.data),
                            i(
                              (100 *
                                (null === (t = a.data.data[1]) || void 0 === t
                                  ? void 0
                                  : t.total_amount)) /
                                (null === (c = a.data.data[0]) || void 0 === c
                                  ? void 0
                                  : c.total_amount) -
                                100
                            ),
                            u(!1),
                            (e.next = 15);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(1)),
                            u(!1),
                            console.log(e.t0),
                            je.a.fire({
                              icon: "error",
                              title: "Oops...",
                              text: e.t0,
                            });
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []);
        var b = c.reduce(function (e, t) {
            return e + (null === t || void 0 === t ? void 0 : t.total_amount);
          }, 0),
          h = new Date().getMonth() + 1,
          p = c.find(function (e) {
            return e._id === h;
          });
        return Object(N.jsxs)("div", {
          className: "featured",
          children: [
            Object(N.jsx)("div", {
              className: "featuredItem",
              children: d
                ? Object(N.jsx)(te, { name: "ball" })
                : Object(N.jsx)(N.Fragment, {
                    children: p
                      ? Object(N.jsxs)(N.Fragment, {
                          children: [
                            Object(N.jsx)("span", {
                              className: "featuredTitle",
                              children: p && j[h - 1],
                            }),
                            Object(N.jsx)("div", {
                              className: "featuredMoneyContainer",
                              children:
                                p &&
                                Object(N.jsxs)("span", {
                                  className: "featuredMoney",
                                  children: ["\u09f3 ", p.total_amount, " BDT"],
                                }),
                            }),
                            Object(N.jsx)("span", {
                              className: "featuredSub",
                              children: "Compared to last month",
                            }),
                          ],
                        })
                      : Object(N.jsx)("p", {
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: "Not Found",
                        }),
                  }),
            }),
            Object(N.jsx)("div", {
              className: "featuredItem",
              children: d
                ? Object(N.jsx)(te, { name: "ball" })
                : Object(N.jsx)(N.Fragment, {
                    children: b
                      ? Object(N.jsxs)(N.Fragment, {
                          children: [
                            Object(N.jsx)("span", {
                              className: "featuredTitle",
                              children: "Total Sales",
                            }),
                            Object(N.jsx)("div", {
                              className: "featuredMoneyContainer",
                              children: Object(N.jsxs)("span", {
                                className: "featuredMoney",
                                children: ["\u09f3 ", b],
                              }),
                            }),
                            Object(N.jsx)("span", {
                              className: "featuredSub",
                              children: "Compared to last month",
                            }),
                            " ",
                          ],
                        })
                      : Object(N.jsx)("p", {
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: "Not Found",
                        }),
                  }),
            }),
            Object(N.jsx)("div", {
              className: "featuredItem",
              children: Object(N.jsxs)(N.Fragment, {
                children: [
                  Object(N.jsx)("span", {
                    className: "featuredTitle",
                    children: "Cost",
                  }),
                  Object(N.jsx)("div", {
                    className: "featuredMoneyContainer",
                    children: Object(N.jsx)("span", {
                      className: "featuredMoney",
                      children: "\u09f3 Not Applicable",
                    }),
                  }),
                  Object(N.jsx)("span", {
                    className: "featuredSub",
                    children: "Compared to last month",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      c(521), c(522);
      var he = c(624),
        pe = (c(523), c(621)),
        me = c(622),
        Oe = c(623),
        xe = function (e) {
          var t = e.user,
            c = e.onClose;
          return (
            console.log(t, c),
            Object(N.jsx)("div", {
              className: "user-popup",
              children: Object(N.jsxs)("div", {
                className: "user-popup-content",
                children: [
                  Object(N.jsx)("span", {
                    className: "user-close-button",
                    onClick: c,
                    children: "\xd7",
                  }),
                  t &&
                    Object(N.jsxs)("div", {
                      className: "contact",
                      children: [
                        Object(N.jsxs)("div", {
                          children: [
                            Object(N.jsx)(pe.a, {}),
                            Object(N.jsx)(me.a, {}),
                            Object(N.jsx)(Oe.a, {}),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          children: [
                            Object(N.jsxs)("p", { children: [": ", t.name] }),
                            Object(N.jsxs)("a", {
                              href: "mailto:".concat(t.mail),
                              children: [" : ", t.email],
                            }),
                            Object(N.jsxs)("a", {
                              href: "tel:".concat(t.phone),
                              children: [": ", t.phone],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            })
          );
        };
      function fe() {
        var e = Object(a.useState)([]),
          t = Object(S.a)(e, 2),
          c = t[0],
          s = t[1],
          n = Object(a.useState)(!1),
          r = Object(S.a)(n, 2),
          i = r[0],
          l = r[1],
          o = Object(a.useState)(null),
          d = Object(S.a)(o, 2),
          u = d[0],
          j = d[1],
          b = Object(a.useState)(!1),
          h = Object(S.a)(b, 2);
        h[0], h[1];
        Object(a.useEffect)(function () {
          l(!0),
            (function () {
              var e = Object(W.a)(
                K.a.mark(function e() {
                  var t;
                  return K.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              de.get("users/?new=true")
                            );
                          case 3:
                            (t = e.sent), s(t.data.data), l(!1), (e.next = 12);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              l(!1),
                              je.a.fire({
                                icon: "error",
                                title: "Oops...",
                                text: e.t0,
                              });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
        }, []);
        return Object(N.jsxs)("div", {
          className: "widgetSm",
          children: [
            Object(N.jsx)("span", {
              className: "widgetSmTitle",
              children: "New Join Members",
            }),
            Object(N.jsx)("ul", {
              className: "widgetSmList",
              children: i
                ? Object(N.jsx)(te, { margin: "20px", name: "circle" })
                : null === c || void 0 === c
                ? void 0
                : c.map(function (e) {
                    return Object(N.jsxs)(
                      "li",
                      {
                        className: "widgetSmListItem",
                        children: [
                          Object(N.jsx)("img", {
                            src:
                              (null === e || void 0 === e ? void 0 : e.img) ||
                              "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",
                            alt: "",
                            className: "widgetSmImg",
                          }),
                          Object(N.jsx)("div", {
                            className: "widgetSmUser",
                            children: Object(N.jsx)("span", {
                              className: "widgetSmUsername",
                              children:
                                null === e || void 0 === e ? void 0 : e.name,
                            }),
                          }),
                          Object(N.jsxs)("button", {
                            className: "widgetSmButton",
                            onClick: function () {
                              return (function (e) {
                                j(e);
                              })(e);
                            },
                            children: [
                              Object(N.jsx)(he.a, {
                                className: "widgetSmIcon",
                              }),
                              "Display",
                            ],
                          }),
                        ],
                      },
                      e._id
                    );
                  }),
            }),
            u &&
              Object(N.jsx)(xe, {
                user: u,
                onClose: function () {
                  j(null);
                },
              }),
          ],
        });
      }
      c(524);
      var ve = c(176);
      function ge() {
        var e = Object(a.useState)([]),
          t = Object(S.a)(e, 2),
          c = t[0],
          s = t[1],
          n = Object(a.useState)(!1),
          r = Object(S.a)(n, 2),
          i = r[0],
          l = r[1];
        Object(a.useEffect)(function () {
          l(!0),
            (function () {
              var e = Object(W.a)(
                K.a.mark(function e() {
                  var t;
                  return K.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              de.get("orders/?limit=5")
                            );
                          case 3:
                            (t = e.sent), s(t.data.data), l(!1), (e.next = 12);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              l(!1),
                              je.a.fire({
                                icon: "error",
                                title: "Oops...",
                                text: e.t0,
                              });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
        }, []);
        var o = function (e) {
          var t = e.type;
          return Object(N.jsx)("button", {
            className: "widgetLgButton " + t,
            children: t,
          });
        };
        return Object(N.jsxs)("div", {
          className: "widgetLg",
          children: [
            Object(N.jsx)("h3", {
              className: "widgetLgTitle",
              children: "Latest transactions",
            }),
            i
              ? Object(N.jsx)(te, { margin: "20px", name: "circle" })
              : Object(N.jsxs)("table", {
                  className: "widgetLgTable",
                  children: [
                    Object(N.jsxs)("tr", {
                      className: "widgetLgTr",
                      children: [
                        Object(N.jsx)("th", {
                          className: "widgetLgTh",
                          children: "Customer",
                        }),
                        Object(N.jsx)("th", {
                          className: "widgetLgTh",
                          children: "Date",
                        }),
                        Object(N.jsx)("th", {
                          className: "widgetLgTh",
                          children: "Amount",
                        }),
                        Object(N.jsx)("th", {
                          className: "widgetLgTh",
                          children: "Status",
                        }),
                      ],
                    }),
                    c.map(function (e) {
                      var t = e.transaction_Id,
                        c = e.paymentStatus,
                        a = e.createdAt,
                        s = e.total_amount,
                        n = e.user;
                      return Object(N.jsxs)(
                        "tr",
                        {
                          className: "widgetLgTr",
                          children: [
                            Object(N.jsx)("td", {
                              className: "widgetLgUser",
                              children: Object(N.jsx)("span", {
                                className: "widgetLgName",
                                children:
                                  null === n || void 0 === n ? void 0 : n.name,
                              }),
                            }),
                            Object(N.jsx)("td", {
                              className: "widgetLgDate",
                              children: Object(ve.a)(a),
                            }),
                            Object(N.jsxs)("td", {
                              className: "widgetLgAmount",
                              children: ["\u09f3 ", s],
                            }),
                            Object(N.jsx)("td", {
                              className: "widgetLgStatus",
                              children: Object(N.jsx)(o, { type: c }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  ],
                }),
          ],
        });
      }
      function Ne() {
        var e = Object(a.useState)([]),
          t = Object(S.a)(e, 2),
          c = t[0],
          s = t[1],
          n = Object(a.useState)(!1),
          r = Object(S.a)(n, 2),
          i = r[0],
          l = r[1],
          o = Object(a.useMemo)(function () {
            return [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
          }, []);
        return (
          Object(a.useEffect)(
            function () {
              (function () {
                var e = Object(W.a)(
                  K.a.mark(function e() {
                    var t, c;
                    return K.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                l(!0),
                                (e.prev = 1),
                                (e.next = 4),
                                de.get("/users/stats")
                              );
                            case 4:
                              (t = e.sent),
                                (c = Array.from(
                                  { length: 12 },
                                  function (e, c) {
                                    var a = c + 1,
                                      s = t.data.find(function (e) {
                                        return e._id === a;
                                      });
                                    return {
                                      name: o[c],
                                      "Active User": s ? s.total : 0,
                                    };
                                  }
                                )),
                                s(c),
                                l(!1),
                                (e.next = 14);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                l(!1),
                                je.a.fire({
                                  icon: "error",
                                  title: "Oops...",
                                  text: e.t0,
                                });
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 10]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [o]
          ),
          Object(N.jsxs)("div", {
            className: "home",
            children: [
              Object(N.jsx)(be, {}),
              Object(N.jsx)(ne, {
                data: c,
                title: "User Analytics",
                grid: !0,
                dataKey: "Active User",
                isLoading: i,
              }),
              Object(N.jsxs)("div", {
                className: "homeWidgets",
                children: [Object(N.jsx)(fe, {}), Object(N.jsx)(ge, {})],
              }),
            ],
          })
        );
      }
      c(525);
      var we = c(56),
        Se = c(625),
        ye = c(626),
        ke = c(11),
        Ie = Object(T.b)({
          name: "product",
          initialState: { isLoading: !1, products: [], product: {}, error: "" },
          reducers: {
            getProductStart: function (e) {
              (e.isLoading = !0), (e.error = "");
            },
            getProductSuccess: function (e, t) {
              (e.isLoading = !1), (e.products = t.payload);
            },
            getProductFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
            deleteProductStart: function (e) {
              (e.isLoading = !0), (e.error = "");
            },
            deleteProductSuccess: function (e, t) {
              e.isLoading = !1;
              var c = e.products.filter(function (e) {
                return e._id !== t.payload;
              });
              e.products = c;
            },
            deleteProductFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
            updateProductStart: function (e) {
              (e.isLoading = !0), (e.error = "");
            },
            updateProductSuccess: function (e, t) {
              e.isLoading = !1;
              var c = e.products.findIndex(function (e) {
                return e._id === t.payload.id;
              });
              if (-1 !== c) {
                var a = Object(ke.a)(
                  Object(ke.a)({}, t.payload.updatedProduct),
                  {},
                  { _id: t.payload.id }
                );
                e.products[c] = a;
              }
            },
            updateProductFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
            addProductStart: function (e) {
              (e.isLoading = !0), (e.error = "");
            },
            addProductSuccess: function (e, t) {
              (e.isLoading = !1), e.products.push(t.payload);
            },
            addProductFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
          },
        }),
        Ce = Ie.actions,
        Le = Ce.getProductStart,
        Ue = Ce.getProductSuccess,
        Pe = Ce.getProductFailure,
        Ae = Ce.deleteProductStart,
        Te = Ce.deleteProductSuccess,
        _e = Ce.deleteProductFailure,
        De = Ce.updateProductStart,
        Fe = Ce.updateProductSuccess,
        Be = Ce.updateProductFailure,
        Ee = Ce.addProductStart,
        Re = Ce.addProductSuccess,
        Me = Ce.addProductFailure,
        Ye = Ie.reducer,
        ze = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t) {
              var c, a, s, n;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(Le()),
                          (e.prev = 1),
                          (e.next = 4),
                          oe.get("/products")
                        );
                      case 4:
                        (c = e.sent), t(Ue(c.data.data)), (e.next = 13);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          (n =
                            (null === (a = e.t0.response) ||
                            void 0 === a ||
                            null === (s = a.data) ||
                            void 0 === s
                              ? void 0
                              : s.error) || "An error occurred."),
                          t(Pe(n)),
                          je.a.fire({
                            icon: "error",
                            title: "Oops...",
                            text: n,
                          });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ve = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c) {
              var a, s, n;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          c(Ae()),
                          (e.prev = 1),
                          (e.next = 4),
                          de.delete("/products/".concat(t))
                        );
                      case 4:
                        c(Te(t)), (e.next = 12);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          (n =
                            (null === (a = e.t0.response) ||
                            void 0 === a ||
                            null === (s = a.data) ||
                            void 0 === s
                              ? void 0
                              : s.error) || "An error occurred."),
                          c(_e(n)),
                          je.a.fire({
                            icon: "error",
                            title: "Oops...",
                            text: n,
                          });
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })(),
        Je = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c, a) {
              var s, n, r;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          a(De()),
                          (e.prev = 1),
                          (e.next = 4),
                          de.put("/products/".concat(t), c)
                        );
                      case 4:
                        a(Fe({ id: t, product: c })), (e.next = 12);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          (r =
                            (null === (s = e.t0.response) ||
                            void 0 === s ||
                            null === (n = s.data) ||
                            void 0 === n
                              ? void 0
                              : n.error) || "An error occurred."),
                          a(Be(r)),
                          je.a.fire({
                            icon: "error",
                            title: "Oops...",
                            text: r,
                          });
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, c, a) {
            return e.apply(this, arguments);
          };
        })(),
        Xe = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c) {
              var a, s, n, r;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          c(Ee()),
                          (e.prev = 1),
                          (e.next = 4),
                          de.post("/products", t)
                        );
                      case 4:
                        (a = e.sent), c(Re(a.data.data)), (e.next = 13);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          (r =
                            (null === (s = e.t0.response) ||
                            void 0 === s ||
                            null === (n = s.data) ||
                            void 0 === n
                              ? void 0
                              : n.error) || "An error occurred."),
                          c(Me(r)),
                          je.a.fire({
                            icon: "error",
                            title: "Oops...",
                            text: r,
                          });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })();
      function Ke() {
        var e = Object(U.b)(),
          t = Object(U.c)(function (e) {
            return e.product;
          }),
          c = t.products,
          s = t.isLoading;
        Object(a.useEffect)(
          function () {
            ze(e);
          },
          [e]
        );
        var n = [
          { field: "_id", headerName: "ID", width: 220 },
          {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: function (e) {
              return Object(N.jsxs)("div", {
                className: "productListItem",
                children: [
                  Object(N.jsx)("img", {
                    className: "productListImg",
                    src: e.row.img,
                    alt: "",
                  }),
                  e.row.title,
                ],
              });
            },
          },
          { field: "inStock", headerName: "Stock", width: 200 },
          { field: "price", headerName: "Price", width: 160 },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: function (t) {
              return Object(N.jsxs)(N.Fragment, {
                children: [
                  Object(N.jsx)(g.b, {
                    to: "/product/" + t.row._id,
                    children: Object(N.jsxs)("button", {
                      className: "productListEdit",
                      children: ["Update", Object(N.jsx)(Se.a, {})],
                    }),
                  }),
                  Object(N.jsx)(ye.a, {
                    className: "productListDelete",
                    onClick: function () {
                      return (
                        (c = t.row._id),
                        void je.a
                          .fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: !0,
                            confirmButtonColor: "#3bb077",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          })
                          .then(function (t) {
                            t.isConfirmed &&
                              (Ve(c, e),
                              je.a.fire(
                                "Deleted!",
                                "Your product has been deleted.",
                                "success"
                              ));
                          })
                      );
                      var c;
                    },
                  }),
                ],
              });
            },
          },
        ];
        return Object(N.jsx)("div", {
          className: "productList",
          style: { width: "100%", overflow: "auto" },
          children: s
            ? Object(N.jsx)(te, { name: "block" })
            : Object(N.jsx)(we.a, {
                className: "data-grid",
                rows: c,
                disableSelectionOnClick: !0,
                columns: n,
                getRowId: function (e) {
                  return null === e || void 0 === e ? void 0 : e._id;
                },
                checkboxSelection: !0,
                pagination: !0,
                pageSize: 10,
                rowsPerPageOptions: [10],
              }),
        });
      }
      c(527);
      var We = c.p + "static/media/profile.318b1da2.png",
        He = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c) {
              var a, s, n, r, i;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(F()),
                          (e.prev = 1),
                          (e.next = 4),
                          oe.post("/auth/login/dashboard", c)
                        );
                      case 4:
                        (s = e.sent),
                          t(B(s.data.data)),
                          localStorage.setItem(
                            "token",
                            null === (a = s.data.data) || void 0 === a
                              ? void 0
                              : a.accessToken
                          ),
                          je.a.fire({
                            icon: "success",
                            title: "SuccessFul",
                            text: "Login Successful",
                          }),
                          (e.next = 15);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(1)),
                          (i =
                            (null === (n = e.t0.response) ||
                            void 0 === n ||
                            null === (r = n.data) ||
                            void 0 === r
                              ? void 0
                              : r.error) || "An error occurred."),
                          t(E(i)),
                          je.a.fire({
                            icon: "error",
                            title: "Oops...",
                            text: i,
                          });
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })(),
        qe = function () {
          var e = Object(U.c)(function (e) {
              return e.user;
            }),
            t = e.isLoading,
            c = e.error,
            s = Object(a.useState)(""),
            n = Object(S.a)(s, 2),
            r = n[0],
            i = n[1],
            l = Object(a.useState)(""),
            o = Object(S.a)(l, 2),
            d = o[0],
            u = o[1],
            j = Object(U.b)(),
            b = function (e) {
              e.preventDefault(),
                r && d
                  ? He(j, { email: r, password: d })
                  : je.a.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Email and Password is required",
                    });
            };
          return (
            Object(a.useEffect)(
              function () {
                j(M());
              },
              [j, c]
            ),
            Object(N.jsx)("div", {
              className: "l-container",
              children: Object(N.jsxs)("div", {
                className: "l-wrapper",
                children: [
                  Object(N.jsx)("h1", { children: "Login" }),
                  Object(N.jsx)("div", {
                    className: "l-profile",
                    children: Object(N.jsx)("img", { src: We, alt: "" }),
                  }),
                  Object(N.jsxs)("form", {
                    className: "l-form",
                    onSubmit: b,
                    children: [
                      Object(N.jsx)("input", {
                        style: { padding: 10, marginBottom: 20 },
                        type: "email",
                        placeholder: "email",
                        onChange: function (e) {
                          return i(e.target.value);
                        },
                      }),
                      Object(N.jsx)("input", {
                        style: { padding: 10, marginBottom: 20 },
                        type: "password",
                        placeholder: "password",
                        onChange: function (e) {
                          return u(e.target.value);
                        },
                      }),
                      Object(N.jsx)("div", {
                        className: "l-btn",
                        children: t
                          ? Object(N.jsx)(te, { name: "block" })
                          : Object(N.jsx)("button", {
                              type: "submit",
                              onClick: b,
                              style: { padding: 10, width: 100 },
                              children: "Login",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Ge =
          (c(528),
          c(529),
          function () {
            var e = Object(a.useState)([]),
              t = Object(S.a)(e, 2),
              c = t[0],
              s = t[1],
              n = Object(a.useState)(!1),
              r = Object(S.a)(n, 2),
              i = r[0],
              l = r[1];
            Object(a.useEffect)(function () {
              (function () {
                var e = Object(W.a)(
                  K.a.mark(function e() {
                    var t;
                    return K.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                l(!0),
                                (e.prev = 1),
                                (e.next = 4),
                                de.get("orders")
                              );
                            case 4:
                              (t = e.sent),
                                s(t.data.data),
                                l(!1),
                                (e.next = 13);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                l(!1),
                                je.a.fire({
                                  icon: "error",
                                  title: "Oops...",
                                  text: e.t0,
                                });
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []);
            var o = (function () {
                var e = Object(W.a)(
                  K.a.mark(function e(t) {
                    var a, n, r, i;
                    return K.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.prev = 0),
                                (a = c.find(function (e) {
                                  return e._id === t;
                                })))
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                console.log("Order not found"),
                                e.abrupt("return")
                              );
                            case 5:
                              return (
                                (n =
                                  "pending" === a.paymentStatus.toLowerCase()
                                    ? "Paid"
                                    : "Pending"),
                                (e.next = 8),
                                de.put("/orders/".concat(t), {
                                  paymentStatus: n,
                                })
                              );
                            case 8:
                              (r = e.sent),
                                (i = c.map(function (e) {
                                  return e._id === t
                                    ? Object(ke.a)(
                                        Object(ke.a)({}, e),
                                        {},
                                        { paymentStatus: n }
                                      )
                                    : e;
                                })),
                                s(i),
                                r.data &&
                                  se("Payment Status Changed Successfully"),
                                (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(0)),
                                je.a.fire({
                                  icon: "error",
                                  title: "Oops...",
                                  text: e.t0,
                                });
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 14]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              d = [
                {
                  field: "transaction_Id",
                  headerName: "Transaction ID",
                  width: 220,
                },
                {
                  field: "name",
                  headerName: "User Name",
                  width: 200,
                  renderCell: function (e) {
                    var t, c;
                    return Object(N.jsx)("div", {
                      className: "createdat",
                      children:
                        null === (t = e.row) ||
                        void 0 === t ||
                        null === (c = t.user) ||
                        void 0 === c
                          ? void 0
                          : c.name,
                    });
                  },
                },
                {
                  field: "phone",
                  headerName: "Phone",
                  width: 200,
                  renderCell: function (e) {
                    var t, c;
                    return Object(N.jsx)("div", {
                      className: "createdat",
                      children:
                        null === (t = e.row) ||
                        void 0 === t ||
                        null === (c = t.user) ||
                        void 0 === c
                          ? void 0
                          : c.phone,
                    });
                  },
                },
                {
                  field: "createdAt",
                  headerName: "Date",
                  width: 200,
                  renderCell: function (e) {
                    return Object(N.jsx)("div", {
                      className: "createdat",
                      children: Object(ve.a)(e.row.createdAt),
                    });
                  },
                },
                {
                  field: "total_amount",
                  headerName: "Amount",
                  width: 160,
                  renderCell: function (e) {
                    return Object(N.jsxs)("div", {
                      className: "total_amount",
                      children: [
                        "\u09f3 ",
                        e.row.total_amount + e.row.deliveryCharge,
                      ],
                    });
                  },
                },
                {
                  field: "action",
                  headerName: "Payment",
                  width: 150,
                  renderCell: function (e) {
                    return Object(N.jsxs)(N.Fragment, {
                      children: [
                        Object(N.jsx)("p", {
                          className: "".concat(e.row.paymentStatus),
                          style: { marginRight: "10px" },
                          children:
                            "Pending" === e.row.paymentStatus
                              ? "Unpaid"
                              : "Paid",
                        }),
                        Object(N.jsx)("button", {
                          className: "productListEdit",
                          onClick: function () {
                            return o(e.row._id);
                          },
                          children: "Change",
                        }),
                      ],
                    });
                  },
                },
              ];
            return Object(N.jsx)("div", {
              className: "transaction",
              children: i
                ? Object(N.jsx)(te, { name: "block" })
                : Object(N.jsx)(we.a, {
                    rows: c,
                    disableSelectionOnClick: !0,
                    columns: d,
                    getRowId: function (e) {
                      return e._id;
                    },
                    checkboxSelection: !0,
                    pagination: !0,
                    pageSize: 10,
                    rowsPerPageOptions: [10],
                  }),
            });
          }),
        Qe =
          (c(530),
          Object(T.b)({
            name: "order",
            initialState: { isLoading: !1, orders: [], order: {}, error: "" },
            reducers: {
              getOrderedStart: function (e) {
                (e.isLoading = !0), (e.error = "");
              },
              getOrderedSuccess: function (e, t) {
                (e.isLoading = !1), (e.orders = t.payload), (e.error = "");
              },
              getOrderedFailure: function (e, t) {
                (e.isLoading = !1), (e.error = t.payload);
              },
              getSingleOrderStart: function (e) {
                (e.isLoading = !0), (e.error = "");
              },
              getSingleOrderSuccess: function (e, t) {
                (e.isLoading = !1), (e.order = t.payload);
              },
              getSingleOrderFailure: function (e, t) {
                (e.isLoading = !1), (e.error = t.payload);
              },
              deleteOrderStart: function (e) {
                (e.isLoading = !0), (e.error = "");
              },
              deleteOrderSuccess: function (e, t) {
                (e.isLoading = !1),
                  (e.orders = e.orders.filter(function (e) {
                    return e.transaction_Id !== t.payload;
                  }));
              },
              deleteOrderFailure: function (e, t) {
                (e.isLoading = !1), (e.error = t.payload);
              },
            },
          })),
        $e = Qe.actions,
        Ze = $e.getOrderedStart,
        et = $e.getOrderedSuccess,
        tt = $e.getOrderedFailure,
        ct = $e.getSingleOrderStart,
        at = $e.getSingleOrderSuccess,
        st = $e.getSingleOrderFailure,
        nt = $e.deleteOrderStart,
        rt = $e.deleteOrderSuccess,
        it = $e.deleteOrderFailure,
        lt = Qe.reducer,
        ot = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t) {
              var c, a, s, n;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(Ze()), (e.prev = 1), (e.next = 4), de.get("/orders")
                        );
                      case 4:
                        (c = e.sent), t(et(c.data.data)), (e.next = 13);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          (n =
                            (null === (a = e.t0.response) ||
                            void 0 === a ||
                            null === (s = a.data) ||
                            void 0 === s
                              ? void 0
                              : s.error) || "An error has occurred!"),
                          t(tt(n)),
                          je.a.fire({
                            icon: "error",
                            title: "Oops...",
                            text: n,
                          });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        dt = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c) {
              var a, s, n, r;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          c(ct()),
                          (e.prev = 1),
                          (e.next = 4),
                          de.get("/orders/".concat(t))
                        );
                      case 4:
                        (a = e.sent), c(at(a.data.data)), (e.next = 13);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          (r =
                            (null === (s = e.t0.response) ||
                            void 0 === s ||
                            null === (n = s.data) ||
                            void 0 === n
                              ? void 0
                              : n.error) || "An error has occurred!"),
                          c(st(r)),
                          je.a.fire({
                            icon: "error",
                            title: "Oops...",
                            text: r,
                          });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })(),
        ut = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c) {
              var a, s, n;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          c(nt()),
                          (e.prev = 1),
                          (e.next = 4),
                          de.delete("/orders/".concat(t))
                        );
                      case 4:
                        c(rt(t)), (e.next = 12);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          (n =
                            (null === (a = e.t0.response) ||
                            void 0 === a ||
                            null === (s = a.data) ||
                            void 0 === s
                              ? void 0
                              : s.error) || "An error has occurred!"),
                          c(it(n)),
                          je.a.fire({
                            icon: "error",
                            title: "Oops...",
                            text: n,
                          });
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })();
      function jt() {
        var e = Object(U.b)(),
          t = Object(U.c)(function (e) {
            return e.order;
          }),
          c = t.orders,
          s = t.isLoading;
        Object(a.useEffect)(
          function () {
            ot(e);
          },
          [e]
        );
        var n = [
          { field: "transaction_Id", headerName: "Transition ID", width: 150 },
          {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: function (e) {
              var t, c;
              return Object(N.jsxs)("div", {
                className: "productListItem",
                children: [
                  Object(N.jsx)("img", {
                    className: "productListImg",
                    src:
                      null === (t = e.row.products[0]) || void 0 === t
                        ? void 0
                        : t.img,
                    alt: "",
                  }),
                  null === (c = e.row.products[0]) || void 0 === c
                    ? void 0
                    : c.title,
                ],
              });
            },
          },
          { field: "paymentStatus", headerName: "Payment", width: 150 },
          {
            field: "shippingStatus",
            headerName: "Shipping Status",
            width: 150,
          },
          {
            field: "total_amount",
            headerName: "Price",
            width: 130,
            renderCell: function (e) {
              return (
                console.log(e.row),
                Object(N.jsx)("div", {
                  children: e.row.total_amount + e.row.deliveryCharge,
                })
              );
            },
          },
          {
            field: "data.cus_name",
            headerName: "Customer",
            width: 200,
            valueGetter: function (e) {
              var t;
              return e.row.data.cus_name
                ? null === (t = e.row.data) || void 0 === t
                  ? void 0
                  : t.cus_name
                : "Unknown";
            },
          },
          {
            field: "phone?phone:0151634445",
            headerName: "Phone",
            width: 130,
            valueGetter: function (e) {
              var t;
              return e.row.data.cus_phone
                ? null === (t = e.row.data) || void 0 === t
                  ? void 0
                  : t.cus_phone
                : "01xxxxxxxxx";
            },
          },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: function (t) {
              return Object(N.jsxs)("div", {
                children: [
                  Object(N.jsx)(g.b, {
                    to: "/orders/".concat(t.row.transaction_Id),
                    children: Object(N.jsx)("button", {
                      className: "viewBtn",
                      children: Object(N.jsx)(he.a, {}),
                    }),
                  }),
                  Object(N.jsx)(ye.a, {
                    className: "productListDelete",
                    onClick: function () {
                      return (
                        (c = t.row.transaction_Id),
                        void je.a
                          .fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: !0,
                            confirmButtonColor: "#00ffbb",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          })
                          .then(function (t) {
                            t.isConfirmed &&
                              (ut(c, e),
                              je.a.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                              ));
                          })
                      );
                      var c;
                    },
                  }),
                ],
              });
            },
          },
        ];
        return Object(N.jsx)("div", {
          className: "productList",
          children: s
            ? Object(N.jsx)(te, { name: "block" })
            : Object(N.jsx)(we.a, {
                rows: c,
                disableSelectionOnClick: !0,
                columns: n,
                getRowId: function (e) {
                  return e._id;
                },
                pagination: !0,
                pageSize: 10,
                rowsPerPageOptions: [10],
              }),
        });
      }
      c(531);
      var bt = function () {
          var e = Object(a.useState)([]),
            t = Object(S.a)(e, 2),
            c = t[0],
            s = t[1],
            n = Object(a.useState)(!1),
            r = Object(S.a)(n, 2),
            i = r[0],
            l = r[1],
            o = Object(a.useMemo)(function () {
              return [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ];
            }, []);
          return (
            Object(a.useEffect)(
              function () {
                (function () {
                  var e = Object(W.a)(
                    K.a.mark(function e() {
                      var t, c;
                      return K.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  l(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  de.get("/users/stats")
                                );
                              case 4:
                                (t = e.sent),
                                  (c = Array.from(
                                    { length: 12 },
                                    function (e, c) {
                                      var a = c + 1,
                                        s = t.data.find(function (e) {
                                          return e._id === a;
                                        });
                                      return {
                                        name: o[c],
                                        active_users: s ? s.total : 0,
                                      };
                                    }
                                  )),
                                  s(c),
                                  l(!1),
                                  (e.next = 14);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(1)),
                                  l(!1),
                                  je.a.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: e.t0,
                                  });
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 10]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [o]
            ),
            Object(N.jsx)("div", {
              className: "analatics",
              children: Object(N.jsx)(ne, {
                data: c,
                title: "User Analytics",
                grid: !0,
                dataKey: "active_users",
                isLoading: i,
                analatics: !0,
              }),
            })
          );
        },
        ht = c(289),
        pt = c(148),
        mt =
          (c(532),
          function () {
            var e = Object(a.useState)([]),
              t = Object(S.a)(e, 2),
              c = t[0],
              s = t[1],
              n = Object(a.useState)(!1),
              r = Object(S.a)(n, 2),
              i = r[0],
              l = r[1],
              o = Object(a.useMemo)(function () {
                return [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ];
              }, []);
            Object(a.useEffect)(
              function () {
                (function () {
                  var e = Object(W.a)(
                    K.a.mark(function e() {
                      var t, c;
                      return K.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  l(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  de.get("/orders/income-stats")
                                );
                              case 4:
                                (t = e.sent),
                                  (c = t.data.data.map(function (e) {
                                    return {
                                      name: o[e._id - 1],
                                      "Total Income": e.total_amount,
                                    };
                                  })),
                                  s(c),
                                  l(!1),
                                  (e.next = 14);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(1)),
                                  console.log(e.t0),
                                  je.a.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: e.t0,
                                  });
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 10]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [o]
            );
            var d = c.reduce(function (e, t) {
                return e + t["Total Income"];
              }, 0),
              u = Object(a.useState)({
                width: window.innerWidth,
                height: window.innerHeight,
              }),
              j = Object(S.a)(u, 2),
              b = j[0],
              h = j[1];
            return (
              Object(a.useEffect)(function () {
                var e = function () {
                  h({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  window.addEventListener("resize", e),
                  function () {
                    window.removeEventListener("resize", e);
                  }
                );
              }, []),
              Object(N.jsx)("div", {
                className: "income",
                children: i
                  ? Object(N.jsx)(te, { name: "block" })
                  : Object(N.jsxs)(N.Fragment, {
                      children: [
                        Object(N.jsxs)("h1", {
                          className: "heading",
                          children: ["Total Yearly Income: ", d, " BDT"],
                        }),
                        Object(N.jsxs)("div", {
                          children: [
                            Object(N.jsxs)(q.a, {
                              width: b.width >= 800 ? 800 : 370,
                              height: 400,
                              data: c,
                              className: "line-chart",
                              margin: {
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 10,
                              },
                              children: [
                                Object(N.jsx)(Z.a, { strokeDasharray: "3 3" }),
                                Object(N.jsx)(G.a, { dataKey: "name" }),
                                Object(N.jsx)(ht.a, {}),
                                Object(N.jsx)($.a, {}),
                                Object(N.jsx)(pt.a, {}),
                                Object(N.jsx)(Q.a, {
                                  type: "monotone",
                                  dataKey: "Total Income",
                                  stroke: "#00ffaa",
                                  activeDot: { r: 8 },
                                }),
                              ],
                            }),
                            Object(N.jsxs)("div", {
                              className: "income-text",
                              children: [
                                Object(N.jsx)("h3", {
                                  style: { textAlign: "center" },
                                  children: "Monthly Income",
                                }),
                                Object(N.jsx)("ul", {
                                  children: c.map(function (e, t) {
                                    return Object(N.jsxs)(
                                      "li",
                                      {
                                        style: { color: ae[t % ae.length] },
                                        children: [
                                          e.name,
                                          ": ",
                                          e["Total Income"],
                                          " BDT",
                                        ],
                                      },
                                      e.name
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
              })
            );
          }),
        Ot =
          (c(533),
          function () {
            return Object(N.jsx)("div", {
              className: "reports",
              children: "Under Development",
            });
          });
      c(534);
      function xt() {
        var e,
          t = Object(U.c)(function (e) {
            return e.order;
          }),
          c = t.order,
          s = t.isLoading,
          n = Object(v.useLocation)().pathname.split("/")[2],
          r = Object(U.b)(),
          i = Object(a.useState)(
            null === c || void 0 === c ? void 0 : c.shippingStatus
          ),
          l = Object(S.a)(i, 2),
          o = l[0],
          d = l[1],
          u = Object(a.useState)(
            null === c || void 0 === c ? void 0 : c.paymentStatus
          ),
          j = Object(S.a)(u, 2),
          b = j[0],
          h = j[1];
        Object(a.useEffect)(
          function () {
            dt(n, r);
          },
          [n, r]
        );
        var p = (null === c || void 0 === c ? void 0 : c.data) || {},
          m = p.cus_name,
          O = p.cus_phone,
          x = p.cus_postcode,
          f = p.cus_add1,
          g = p.cus_city,
          w = p.cus_email,
          y = p.shipping_method,
          k = (function () {
            var e = Object(W.a)(
              K.a.mark(function e() {
                var t;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t =
                              "pending" === c.shippingStatus.toLowerCase()
                                ? "Shippted"
                                : "Pending"),
                            (e.prev = 1),
                            (e.next = 4),
                            de.put("/orders/shipping/".concat(c._id), {
                              shippingStatus: t,
                            })
                          );
                        case 4:
                          d(t),
                            se("Shipping Status Changed Successfully"),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            je.a.fire({
                              icon: "error",
                              title: "Error",
                              text: e.t0,
                            });
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          I = (function () {
            var e = Object(W.a)(
              K.a.mark(function e() {
                var t;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t =
                              "pending" === c.paymentStatus.toLowerCase()
                                ? "paid"
                                : "Pending"),
                            (e.prev = 1),
                            (e.next = 4),
                            de.put("/orders/".concat(c._id), {
                              paymentStatus: t,
                            })
                          );
                        case 4:
                          h(t),
                            se("Payment Status Changed Successfully"),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            je.a.fire({
                              icon: "error",
                              title: "Error",
                              text: e.t0,
                            });
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          C = [
            { field: "_id", headerName: "Product ID", width: 200 },
            {
              field: "title",
              headerName: "Product",
              width: 250,
              renderCell: function (e) {
                return Object(N.jsxs)("div", {
                  className: "productListItem",
                  children: [
                    Object(N.jsx)("img", {
                      className: "productListImg",
                      src: e.row.img,
                      alt: "",
                    }),
                    e.row.title,
                  ],
                });
              },
            },
            { field: "quantity", headerName: "Quantity", width: 160 },
            { field: "size", headerName: "Size", width: 160 },
            { field: "color", headerName: "Color", width: 160 },
            { field: "price", headerName: "Price", width: 160 },
          ],
          L = c.products;
        return (
          console.log(b, "order"),
          Object(N.jsx)("div", {
            className: "superContainer",
            children: s
              ? Object(N.jsx)("div", {
                  style: { marginTop: "100px" },
                  children: Object(N.jsx)(te, { name: "block" }),
                })
              : Object(N.jsxs)(N.Fragment, {
                  children: [
                    Object(N.jsxs)("div", {
                      className: "shipping",
                      children: [
                        Object(N.jsxs)("div", {
                          children: [
                            Object(N.jsx)("h2", {
                              children: "Customer Details",
                            }),
                            Object(N.jsxs)("p", { children: ["Name : ", m] }),
                            Object(N.jsxs)("p", { children: ["Phone : ", O] }),
                            Object(N.jsxs)("p", { children: ["Email : ", w] }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          children: [
                            Object(N.jsx)("h2", {
                              children: "Shipping Details",
                            }),
                            Object(N.jsxs)("p", {
                              children: ["Address : ", f],
                            }),
                            Object(N.jsxs)("p", { children: ["City : ", g] }),
                            Object(N.jsxs)("p", {
                              children: ["Post Code : ", x],
                            }),
                            Object(N.jsxs)("p", {
                              children: [
                                "Total : \u09f3 ",
                                c.total_amount + c.deliveryCharge,
                              ],
                            }),
                            Object(N.jsxs)("p", {
                              children: [
                                "Shipping Status: ",
                                o || c.shippingStatus,
                              ],
                            }),
                            Object(N.jsx)("button", {
                              className: "status-btn",
                              onClick: k,
                              children: "Change Status",
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          children: [
                            Object(N.jsx)("h2", {
                              children: "Transaction Details",
                            }),
                            Object(N.jsxs)("p", {
                              children: [
                                "Transaction ID : ",
                                null === (e = c.transaction_Id) || void 0 === e
                                  ? void 0
                                  : e.toUpperCase(),
                              ],
                            }),
                            Object(N.jsxs)("p", {
                              children: [
                                "Product Price : \u09f3 ",
                                c.total_amount,
                              ],
                            }),
                            Object(N.jsxs)("p", {
                              children: [
                                "Delivery Charge : \u09f3 ",
                                c.deliveryCharge,
                              ],
                            }),
                            Object(N.jsxs)("p", {
                              children: [
                                "Subtotal : \u09f3 ",
                                c.total_amount + c.deliveryCharge,
                              ],
                            }),
                            Object(N.jsxs)("p", {
                              children: [
                                "Method :",
                                " ",
                                y || "Cash on Delivery",
                              ],
                            }),
                            Object(N.jsxs)("p", {
                              children: [
                                "Payment Status : ",
                                b || c.paymentStatus,
                              ],
                            }),
                            Object(N.jsx)("button", {
                              className: "status-btn",
                              onClick: I,
                              children: "Change Status",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsx)("div", {
                      className: "container",
                      style: { height: "400px" },
                      children: L
                        ? Object(N.jsx)(we.a, {
                            rows: L,
                            disableSelectionOnClick: !0,
                            columns: C,
                            getRowId: function (e) {
                              return e._id;
                            },
                            pagination: !0,
                            pageSize: 10,
                            rowsPerPageOptions: [10],
                          })
                        : "Loading...",
                    }),
                  ],
                }),
          })
        );
      }
      var ft = c(18),
        vt = (c(535), c(47)),
        gt = c(291),
        Nt = Object(gt.a)({
          apiKey: "AIzaSyAkQTczIghp7Cz3uurRmuzYE01pbTWXjmU",
          authDomain: "rock-metal-9602d.firebaseapp.com",
          projectId: "rock-metal-9602d",
          storageBucket: "rock-metal-9602d.appspot.com",
          messagingSenderId: "653787990399",
          appId: "1:653787990399:web:d74c1a3dfa0a0e6299324a",
        }),
        wt = c(292),
        St = c.n(wt);
      function yt() {
        var e = Object(U.c)(function (e) {
            return e.product;
          }).isLoading,
          t = Object(a.useState)({}),
          c = Object(S.a)(t, 2),
          s = c[0],
          n = c[1],
          r = Object(a.useState)(null),
          i = Object(S.a)(r, 2),
          l = i[0],
          o = i[1],
          d = Object(a.useState)([]),
          u = Object(S.a)(d, 2),
          j = u[0],
          b = u[1],
          h = Object(a.useState)([]),
          p = Object(S.a)(h, 2),
          m = p[0],
          O = p[1],
          x = Object(a.useState)([]),
          f = Object(S.a)(x, 2),
          g = f[0],
          w = f[1],
          y = Object(a.useState)(!1),
          k = Object(S.a)(y, 2),
          I = k[0],
          C = k[1],
          L = Object(U.b)(),
          P = Object(v.useHistory)(),
          A = function (e) {
            n(function (t) {
              return Object(ke.a)(
                Object(ke.a)({}, t),
                {},
                Object(ft.a)({}, e.target.name, e.target.value)
              );
            });
          },
          T = function (e, t) {
            O(e);
          };
        return Object(N.jsxs)("div", {
          className: "newProduct",
          children: [
            Object(N.jsx)("h1", {
              className: "addProductTitle",
              children: "New Product",
            }),
            e || I
              ? Object(N.jsx)(te, { name: "block", margin: "150px" })
              : Object(N.jsxs)("form", {
                  className: "addProductForm",
                  children: [
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Image" }),
                        Object(N.jsx)("input", {
                          type: "file",
                          id: "file",
                          autoComplete: "",
                          onChange: function (e) {
                            return o(e.target.files[0]);
                          },
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Title" }),
                        Object(N.jsx)("input", {
                          name: "title",
                          type: "text",
                          placeholder: "Apple Airpods",
                          onChange: A,
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Description" }),
                        Object(N.jsx)("input", {
                          name: "desc",
                          type: "text",
                          placeholder: "description...",
                          onChange: A,
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Price" }),
                        Object(N.jsx)("input", {
                          name: "price",
                          type: "number",
                          placeholder: "100",
                          onChange: A,
                          className: "price-input",
                          pattern: "^\\d+(\\.\\d{1,2})?$",
                          required: !0,
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Category" }),
                        Object(N.jsxs)("select", {
                          name: "category",
                          onChange: function (e) {
                            b([e.target.value]);
                          },
                          children: [
                            Object(N.jsx)("option", {
                              value: "@",
                              children: "Select Category",
                            }),
                            Object(N.jsx)("option", {
                              selected: !0,
                              value: "shirt",
                              children: "Shirt",
                            }),
                            Object(N.jsx)("option", {
                              selected: !0,
                              value: "hoodie",
                              children: "Hoodie",
                            }),
                            Object(N.jsx)("option", {
                              selected: !0,
                              value: "cotton",
                              children: "Cotton",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Sizes" }),
                        Object(N.jsx)(St.a, {
                          options: ["S", "M", "L", "XL", "XXL", "XXXL"],
                          onSelect: T,
                          onRemove: T,
                          selectedValues: m,
                          displayValue: "Select Sizes",
                          isObject: !1,
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Colors" }),
                        Object(N.jsxs)("select", {
                          name: "colors",
                          onChange: function (e) {
                            w([e.target.value]);
                          },
                          children: [
                            Object(N.jsx)("option", {
                              value: "@",
                              children: "Choose your color",
                            }),
                            Object(N.jsx)("option", {
                              value: "Black",
                              children: "Black",
                            }),
                            Object(N.jsx)("option", {
                              value: "White",
                              children: "White",
                            }),
                            Object(N.jsx)("option", {
                              value: "Green",
                              children: "Green",
                            }),
                            Object(N.jsx)("option", {
                              value: "Blue",
                              children: "Blue",
                            }),
                            Object(N.jsx)("option", {
                              value: "Red",
                              children: "Red",
                            }),
                            Object(N.jsx)("option", {
                              value: "Yellow",
                              children: "Yellow",
                            }),
                            Object(N.jsx)("option", {
                              value: "Orange",
                              children: "Orange",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Stock" }),
                        Object(N.jsxs)("select", {
                          name: "inStock",
                          onChange: A,
                          children: [
                            Object(N.jsx)("option", {
                              value: "false",
                              children: "No",
                            }),
                            Object(N.jsx)("option", {
                              selected: !0,
                              value: "true",
                              children: "Yes",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Featured" }),
                        Object(N.jsxs)("select", {
                          name: "isFeatured",
                          onChange: A,
                          children: [
                            Object(N.jsx)("option", {
                              value: "false",
                              children: "No",
                            }),
                            Object(N.jsx)("option", {
                              value: "true",
                              children: "Yes",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "addProductItem",
                      children: [
                        Object(N.jsx)("label", { children: "Trending" }),
                        Object(N.jsxs)("select", {
                          name: "isTreding",
                          onChange: A,
                          children: [
                            Object(N.jsx)("option", {
                              value: "false",
                              children: "No",
                            }),
                            Object(N.jsx)("option", {
                              value: "true",
                              children: "Yes",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsx)("button", {
                      type: "submit",
                      onClick: function (e) {
                        if (
                          (e.preventDefault(),
                          C(!0),
                          !s || !l || !j || !m || !g)
                        )
                          return (
                            je.a.fire({
                              icon: "warning",
                              title: "Fill the form",
                              text: "Please complete the inputs",
                            }),
                            void C(!1)
                          );
                        var t = new Date().getTime() + l.name,
                          c = Object(vt.b)(Nt),
                          a = Object(vt.c)(c, t),
                          n = Object(vt.d)(a, l);
                        n.on(
                          "state_changed",
                          function (e) {
                            var t = (e.bytesTransferred / e.totalBytes) * 100;
                            switch (
                              (console.log("Upload is " + t + "% done"),
                              e.state)
                            ) {
                              case "paused":
                                console.log("Upload is paused");
                                break;
                              case "running":
                                console.log("Upload is running");
                            }
                          },
                          function (e) {
                            console.log(e), C(!1);
                          },
                          function () {
                            Object(vt.a)(n.snapshot.ref).then(function (e) {
                              var t = Object(ke.a)(
                                Object(ke.a)({}, s),
                                {},
                                { img: e, categories: j, size: m, color: g }
                              );
                              Xe(t, L),
                                C(!1),
                                je.a
                                  .fire({
                                    icon: "success",
                                    title: "Product Added Successfully",
                                    showConfirmButton: !0,
                                  })
                                  .then(function (e) {
                                    e.isConfirmed && P.push("/products");
                                  });
                            });
                          }
                        );
                      },
                      className: "addProductButton",
                      disabled: e || I,
                      children: e || I ? "Loading..." : "Add Product",
                    }),
                  ],
                }),
          ],
        });
      }
      c(537);
      var kt = c(629);
      function It() {
        var e,
          t =
            null === (e = Object(v.useLocation)().pathname) || void 0 === e
              ? void 0
              : e.split("/")[2],
          c = Object(a.useState)({}),
          s = Object(S.a)(c, 2),
          n = s[0],
          r = s[1],
          i = Object(a.useState)(null),
          l = Object(S.a)(i, 2),
          o = l[0],
          d = l[1],
          u = Object(a.useState)([]),
          j = Object(S.a)(u, 2),
          b = j[0],
          h = j[1],
          p = Object(a.useState)([]),
          m = Object(S.a)(p, 2),
          O = m[0],
          x = m[1],
          f = Object(a.useState)([]),
          g = Object(S.a)(f, 2),
          w = g[0],
          y = g[1],
          k = Object(U.b)(),
          I = Object(v.useHistory)();
        Object(a.useEffect)(
          function () {
            (function () {
              var e = Object(W.a)(
                K.a.mark(function e() {
                  var c;
                  return K.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              de.get("/products/find/".concat(t))
                            );
                          case 3:
                            (c = e.sent), r(c.data.data), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              je.a.fire({
                                icon: "error",
                                title: "Oops...",
                                text: e.t0,
                              });
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [t]
        );
        var C = Object(a.useState)({}),
          L = Object(S.a)(C, 2),
          P = L[0],
          A = L[1],
          T = function (e) {
            A(function (t) {
              return Object(ke.a)(
                Object(ke.a)({}, t),
                {},
                Object(ft.a)({}, e.target.name, e.target.value)
              );
            });
          },
          _ = function (e) {
            if (
              (e.preventDefault(), null === o || void 0 === o ? void 0 : o.name)
            ) {
              var c =
                  new Date().getTime() +
                  (null === o || void 0 === o ? void 0 : o.name),
                a = Object(vt.b)(Nt),
                s = Object(vt.c)(a, c),
                n = Object(vt.d)(s, o);
              n.on(
                "state_changed",
                function (e) {
                  var t = (e.bytesTransferred / e.totalBytes) * 100;
                  switch ((console.log("Upload is " + t + "% done"), e.state)) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                  }
                },
                function (e) {
                  console.log(e),
                    ce.b.error(
                      "Error updating product. Please try again later.",
                      { position: "top-right", autoClose: 3e3 }
                    );
                },
                function () {
                  Object(vt.a)(n.snapshot.ref).then(function (e) {
                    var c = Object(ke.a)(
                      Object(ke.a)({}, P),
                      {},
                      { categories: b, img: e, size: O, color: w }
                    );
                    Je(t, c, k),
                      ce.b.success("Product Updated successfully!", {
                        position: "top-right",
                        autoClose: 3e3,
                      }),
                      I.push("/products");
                  });
                }
              );
            } else {
              var r = Object(ke.a)(
                Object(ke.a)({}, P),
                {},
                { categories: b, size: O, color: w }
              );
              Je(t, r, k),
                ce.b.success("Product Updated successfully!", {
                  position: "top-right",
                  autoClose: 3e3,
                }),
                I.push("/products");
            }
          };
        return Object(N.jsxs)("div", {
          className: "product",
          children: [
            Object(N.jsxs)("h1", {
              className: "productTitle",
              children: ["Update: ", n.title],
            }),
            Object(N.jsx)("div", {
              className: "productTop",
              children: Object(N.jsxs)("div", {
                className: "productTopRight",
                children: [
                  Object(N.jsxs)("div", {
                    className: "productInfoTop",
                    children: [
                      Object(N.jsx)("img", {
                        src: (null === o || void 0 === o ? void 0 : o.name)
                          ? URL.createObjectURL(o)
                          : null === n || void 0 === n
                          ? void 0
                          : n.img,
                        alt: "",
                        className: "productInfoImg",
                      }),
                      Object(N.jsx)("span", {
                        className: "productName",
                        children: null === n || void 0 === n ? void 0 : n.title,
                      }),
                    ],
                  }),
                  Object(N.jsxs)("div", {
                    className: "productInfoBottom",
                    children: [
                      Object(N.jsxs)("div", {
                        className: "productInfoItem",
                        children: [
                          Object(N.jsx)("span", {
                            className: "productInfoKey",
                            children: "id:",
                          }),
                          Object(N.jsx)("span", {
                            className: "productInfoValue",
                            children: n._id,
                          }),
                        ],
                      }),
                      Object(N.jsxs)("div", {
                        className: "productInfoItem",
                        children: [
                          Object(N.jsx)("span", {
                            className: "productInfoKey",
                            children: "sales:",
                          }),
                          Object(N.jsx)("span", {
                            className: "productInfoValue",
                            children: "5123",
                          }),
                        ],
                      }),
                      Object(N.jsxs)("div", {
                        className: "productInfoItem",
                        children: [
                          Object(N.jsx)("span", {
                            className: "productInfoKey",
                            children: "in stock:",
                          }),
                          Object(N.jsx)("span", {
                            className: "productInfoValue",
                            children: n.inStock,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(N.jsx)("div", {
              className: "productBottom",
              children: Object(N.jsxs)("form", {
                onSubmit: _,
                children: [
                  Object(N.jsxs)("div", {
                    className: "productForm",
                    children: [
                      Object(N.jsxs)("div", {
                        className: "productFormLeft",
                        children: [
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", { children: "Title" }),
                              Object(N.jsx)("input", {
                                name: "title",
                                type: "text",
                                placeholder: "Products name",
                                defaultValue: n.title,
                                onChange: T,
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", {
                                children: "Description",
                              }),
                              Object(N.jsx)("input", {
                                name: "desc",
                                type: "text",
                                placeholder: "description...",
                                defaultValue: n.desc,
                                onChange: T,
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", { children: "Price" }),
                              Object(N.jsx)("input", {
                                name: "price",
                                type: "number",
                                placeholder: "100",
                                className: "price-input",
                                pattern: "^\\d+(\\.\\d{1,2})?$",
                                defaultValue: n.price,
                                required: !0,
                                onChange: T,
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", {
                                children: "Categories",
                              }),
                              Object(N.jsx)("input", {
                                type: "text",
                                placeholder: "jeans,skirts",
                                defaultValue: n.categories,
                                onChange: function (e) {
                                  h(e.target.value.split(","));
                                },
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", { children: "Sizes" }),
                              Object(N.jsx)("input", {
                                type: "text",
                                placeholder: "M,L,XL,XXL",
                                defaultValue: n.size,
                                onChange: function (e) {
                                  x(e.target.value.split(","));
                                },
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", { children: "Colors" }),
                              Object(N.jsx)("input", {
                                type: "text",
                                placeholder: "red,green",
                                defaultValue: n.color,
                                onChange: function (e) {
                                  y(e.target.value.split(","));
                                },
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", { children: "Stock" }),
                              Object(N.jsxs)("select", {
                                name: "inStock",
                                onChange: T,
                                children: [
                                  Object(N.jsx)("option", {
                                    defaultValue: !0,
                                    value: "true",
                                    children: "Yes",
                                  }),
                                  Object(N.jsx)("option", {
                                    value: "false",
                                    children: "No",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", { children: "Featured" }),
                              Object(N.jsxs)("select", {
                                name: "isFeatured",
                                onChange: T,
                                children: [
                                  Object(N.jsx)("option", {
                                    defaultChecked: !0,
                                    value: "true",
                                    children: "Yes",
                                  }),
                                  Object(N.jsx)("option", {
                                    value: "false",
                                    children: "No",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            className: "addProductItem",
                            children: [
                              Object(N.jsx)("label", { children: "Trending" }),
                              Object(N.jsxs)("select", {
                                name: "isTreding",
                                onChange: T,
                                children: [
                                  Object(N.jsx)("option", {
                                    defaultChecked: !0,
                                    value: "true",
                                    children: "Yes",
                                  }),
                                  Object(N.jsx)("option", {
                                    value: "false",
                                    children: "No",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(N.jsx)("div", {
                        className: "productFormRight",
                        children: Object(N.jsxs)("div", {
                          className: "productUpload",
                          children: [
                            Object(N.jsx)("img", {
                              src: (
                                null === o || void 0 === o ? void 0 : o.name
                              )
                                ? URL.createObjectURL(o)
                                : n.img,
                              alt: "",
                              className: "productUploadImg",
                            }),
                            Object(N.jsx)("label", {
                              for: "file",
                              children: Object(N.jsx)(kt.a, {}),
                            }),
                            Object(N.jsx)("input", {
                              defaultValue: n.img,
                              onChange: function (e) {
                                return d(e.target.files[0]);
                              },
                              type: "file",
                              id: "file",
                              style: { display: "none" },
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(N.jsx)("button", {
                    type: "submit",
                    onClick: _,
                    className: "productButton",
                    children: "Update",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var Ct = c(28),
        Lt = c(37),
        Ut = c(87),
        Pt = c(88),
        At = c.p + "static/media/warning.ee916fd5.png",
        Tt = (function (e) {
          Object(Ut.a)(c, e);
          var t = Object(Pt.a)(c);
          function c(e) {
            var a;
            return (
              Object(Ct.a)(this, c),
              ((a = t.call(this, e)).state = { error: null, errorInfo: null }),
              a
            );
          }
          return (
            Object(Lt.a)(c, [
              {
                key: "componentDidCatch",
                value: function (e, t) {
                  this.setState({ error: e, errorInfo: t });
                },
              },
              {
                key: "render",
                value: function () {
                  return this.state.errorInfo
                    ? Object(N.jsxs)("div", {
                        style: {
                          color: "#5D5D5D",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100vh",
                        },
                        children: [
                          Object(N.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                              gap: "20px",
                            },
                            children: [
                              Object(N.jsx)("img", {
                                src: At,
                                alt: "",
                                style: { height: "150px" },
                              }),
                              Object(N.jsx)("h2", {
                                style: { fontWeight: "bold", fontSize: "2rem" },
                                children: "Uh oh! Something went wrong...",
                              }),
                            ],
                          }),
                          Object(N.jsxs)("details", {
                            style: {
                              whiteSpace: "pre-wrap",
                              marginTop: "0.5rem",
                              border: "1px solid #E53E3E",
                              borderRadius: "4px",
                              padding: "1rem",
                              textAlign: "left",
                              overflow: "auto",
                            },
                            children: [
                              Object(N.jsx)("summary", {
                                style: {
                                  marginBottom: "0.5rem",
                                  fontSize: "1rem",
                                  cursor: "pointer",
                                  fontWeight: "bold",
                                },
                                children: "Error details",
                              }),
                              Object(N.jsxs)("div", {
                                style: { padding: "0.5rem" },
                                children: [
                                  Object(N.jsx)("p", {
                                    style: {
                                      marginBottom: "0.5rem",
                                      fontSize: "1rem",
                                      fontFamily: "monospace",
                                    },
                                    children:
                                      this.state.error &&
                                      this.state.error.toString(),
                                  }),
                                  Object(N.jsxs)("details", {
                                    style: {
                                      whiteSpace: "pre-wrap",
                                      border: "1px solid #FCE7E7",
                                      borderRadius: "4px",
                                      padding: "0.5rem",
                                    },
                                    children: [
                                      Object(N.jsx)("summary", {
                                        style: {
                                          marginBottom: "0.5rem",
                                          fontSize: "1rem",
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                        },
                                        children: "Component stack trace",
                                      }),
                                      Object(N.jsx)("p", {
                                        style: {
                                          marginTop: "0.5rem",
                                          fontSize: "1rem",
                                          fontFamily: "monospace",
                                        },
                                        children:
                                          this.state.errorInfo.componentStack,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(N.jsx)("p", {
                            style: {
                              marginTop: "1rem",
                              fontSize: "1rem",
                              textAlign: "center",
                            },
                            children:
                              "Don't worry, our developers have been notified and are frantically working to fix it!",
                          }),
                        ],
                      })
                    : this.props.children;
                },
              },
            ]),
            c
          );
        })(a.Component);
      c(538);
      function _t() {
        var e = Object(a.useState)([]),
          t = Object(S.a)(e, 2),
          c = t[0],
          s = t[1],
          n = Object(a.useState)(!1),
          r = Object(S.a)(n, 2),
          i = r[0],
          l = r[1],
          o = (function () {
            var e = Object(W.a)(
              K.a.mark(function e(t) {
                return K.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        try {
                          je.a
                            .fire({
                              title: "Are you sure?",
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: !0,
                              confirmButtonColor: "#3bb077",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!",
                            })
                            .then(
                              (function () {
                                var e = Object(W.a)(
                                  K.a.mark(function e(c) {
                                    return K.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (!c.isConfirmed) {
                                              e.next = 5;
                                              break;
                                            }
                                            return (
                                              (e.next = 3),
                                              de.delete("/users/".concat(t))
                                            );
                                          case 3:
                                            s(function (e) {
                                              return e.filter(function (e) {
                                                return e._id !== t;
                                              });
                                            }),
                                              je.a.fire(
                                                "Deleted!",
                                                "Your file has been deleted.",
                                                "success"
                                              );
                                          case 5:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                        } catch (c) {
                          ce.b.error(
                            "Error deleting user. Please try again later.",
                            { position: "top-right", autoClose: 3e3 }
                          );
                        }
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          d = (function () {
            var e = Object(W.a)(
              K.a.mark(function e(t) {
                var a, n;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            de.post("/users/".concat(t), { isAdmin: !0 })
                          );
                        case 3:
                          (a = e.sent),
                            (n = c.filter(function (e) {
                              return e._id !== t;
                            })),
                            s(n),
                            a.data.data &&
                              je.a.fire({
                                icon: "success",
                                title: "Success",
                                text: "Add as Admin Successfully",
                              }),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            je.a.fire({
                              icon: "error",
                              title: "Error",
                              text: "Failed to add as admin",
                            });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        Object(a.useEffect)(function () {
          (function () {
            var e = Object(W.a)(
              K.a.mark(function e() {
                var t;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            l(!0), (e.prev = 1), (e.next = 4), de.get("users")
                          );
                        case 4:
                          (t = e.sent), s(t.data.data), l(!1), (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            l(!1),
                            je.a.fire({
                              icon: "error",
                              title: "Oops...",
                              text: e.t0,
                            });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []);
        var u = [
          { field: "_id", headerName: "ID", width: 200 },
          {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: function (e) {
              return Object(N.jsxs)("div", {
                className: "userListUser",
                children: [
                  Object(N.jsx)("img", {
                    className: "userListImg",
                    src: A.a.url(e.row.email),
                    alt: "",
                  }),
                  e.row.name,
                ],
              });
            },
          },
          { field: "email", headerName: "Email", width: 200 },
          { field: "phone", headerName: "Phone", width: 120 },
          {
            field: "isAdmin",
            headerName: "ADMIN",
            width: 160,
            renderCell: function (e) {
              return Object(N.jsx)("div", {
                children: e.row.isAdmin ? "YES" : "NO",
              });
            },
          },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: function (e) {
              return Object(N.jsxs)(N.Fragment, {
                children: [
                  Object(N.jsx)("button", {
                    onClick: function () {
                      return d(e.row._id);
                    },
                    className: "userListEdit",
                    children: "Make Admin",
                  }),
                  Object(N.jsx)(ye.a, {
                    className: "userListDelete",
                    onClick: function () {
                      return o(e.row._id);
                    },
                  }),
                ],
              });
            },
          },
        ];
        return Object(N.jsx)("div", {
          className: "userList",
          children: i
            ? Object(N.jsx)(te, { name: "block" })
            : c
            ? Object(N.jsx)(we.a, {
                rows: c,
                disableSelectionOnClick: !0,
                getRowId: function (e) {
                  return null === e || void 0 === e ? void 0 : e._id;
                },
                columns: u,
                pageSize: 8,
                checkboxSelection: !0,
              })
            : Object(N.jsx)("p", { children: "Not Found" }),
        });
      }
      var Dt = c(630),
        Ft = c(631),
        Bt = c(632);
      c(539);
      function Et() {
        return Object(N.jsxs)("div", {
          className: "user",
          children: [
            Object(N.jsxs)("div", {
              className: "userTitleContainer",
              children: [
                Object(N.jsx)("h1", {
                  className: "userTitle",
                  children: "Edit User",
                }),
                Object(N.jsx)(g.b, {
                  to: "/newUser",
                  children: Object(N.jsx)("button", {
                    className: "userAddButton",
                    children: "Create",
                  }),
                }),
              ],
            }),
            Object(N.jsxs)("div", {
              className: "userContainer",
              children: [
                Object(N.jsxs)("div", {
                  className: "userShow",
                  children: [
                    Object(N.jsxs)("div", {
                      className: "userShowTop",
                      children: [
                        Object(N.jsx)("img", {
                          src: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                          alt: "",
                          className: "userShowImg",
                        }),
                        Object(N.jsxs)("div", {
                          className: "userShowTopTitle",
                          children: [
                            Object(N.jsx)("span", {
                              className: "userShowUsername",
                              children: "Anna Becker",
                            }),
                            Object(N.jsx)("span", {
                              className: "userShowUserTitle",
                              children: "Software Engineer",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "userShowBottom",
                      children: [
                        Object(N.jsx)("span", {
                          className: "userShowTitle",
                          children: "Account Details",
                        }),
                        Object(N.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(N.jsx)(o.a, { className: "userShowIcon" }),
                            Object(N.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "annabeck99",
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(N.jsx)(Dt.a, { className: "userShowIcon" }),
                            Object(N.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "10.12.1999",
                            }),
                          ],
                        }),
                        Object(N.jsx)("span", {
                          className: "userShowTitle",
                          children: "Contact Details",
                        }),
                        Object(N.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(N.jsx)(Ft.a, { className: "userShowIcon" }),
                            Object(N.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "+1 123 456 67",
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(N.jsx)(O.a, { className: "userShowIcon" }),
                            Object(N.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "annabeck99@gmail.com",
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(N.jsx)(Bt.a, { className: "userShowIcon" }),
                            Object(N.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "New York | USA",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "userUpdate",
                  children: [
                    Object(N.jsx)("span", {
                      className: "userUpdateTitle",
                      children: Object(N.jsx)(he.a, {}),
                    }),
                    Object(N.jsxs)("form", {
                      className: "userUpdateForm",
                      children: [
                        Object(N.jsxs)("div", {
                          className: "userUpdateLeft",
                          children: [
                            Object(N.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(N.jsx)("label", {
                                  children: "Username",
                                }),
                                Object(N.jsx)("input", {
                                  type: "text",
                                  placeholder: "annabeck99",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                            Object(N.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(N.jsx)("label", {
                                  children: "Full Name",
                                }),
                                Object(N.jsx)("input", {
                                  type: "text",
                                  placeholder: "Anna Becker",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                            Object(N.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(N.jsx)("label", { children: "Email" }),
                                Object(N.jsx)("input", {
                                  type: "text",
                                  placeholder: "annabeck99@gmail.com",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                            Object(N.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(N.jsx)("label", { children: "Phone" }),
                                Object(N.jsx)("input", {
                                  type: "text",
                                  placeholder: "+1 123 456 67",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                            Object(N.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(N.jsx)("label", { children: "Address" }),
                                Object(N.jsx)("input", {
                                  type: "text",
                                  placeholder: "New York | USA",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "userUpdateRight",
                          children: [
                            Object(N.jsxs)("div", {
                              className: "userUpdateUpload",
                              children: [
                                Object(N.jsx)("img", {
                                  className: "userUpdateImg",
                                  src: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                                  alt: "",
                                }),
                                Object(N.jsx)("label", {
                                  htmlFor: "file",
                                  children: Object(N.jsx)(kt.a, {
                                    className: "userUpdateIcon",
                                  }),
                                }),
                                Object(N.jsx)("input", {
                                  type: "file",
                                  id: "file",
                                  style: { display: "none" },
                                }),
                              ],
                            }),
                            Object(N.jsx)("button", {
                              className: "userUpdateButton",
                              children: "Update",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      c(540);
      function Rt() {
        return Object(N.jsxs)("div", {
          className: "newUser",
          children: [
            Object(N.jsx)("h1", {
              className: "newUserTitle",
              children: "New User",
            }),
            Object(N.jsxs)("form", {
              className: "newUserForm",
              children: [
                Object(N.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(N.jsx)("label", { children: "Username" }),
                    Object(N.jsx)("input", {
                      type: "text",
                      placeholder: "john",
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(N.jsx)("label", { children: "Full Name" }),
                    Object(N.jsx)("input", {
                      type: "text",
                      placeholder: "John Smith",
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(N.jsx)("label", { children: "Email" }),
                    Object(N.jsx)("input", {
                      type: "email",
                      placeholder: "john@gmail.com",
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(N.jsx)("label", { children: "Password" }),
                    Object(N.jsx)("input", {
                      type: "password",
                      placeholder: "password",
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(N.jsx)("label", { children: "Phone" }),
                    Object(N.jsx)("input", {
                      type: "text",
                      placeholder: "+1 123 456 78",
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(N.jsx)("label", { children: "Address" }),
                    Object(N.jsx)("input", {
                      type: "text",
                      placeholder: "New York | USA",
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(N.jsx)("label", { children: "Gender" }),
                    Object(N.jsxs)("div", {
                      className: "newUserGender",
                      children: [
                        Object(N.jsx)("input", {
                          type: "radio",
                          name: "gender",
                          id: "male",
                          value: "male",
                        }),
                        Object(N.jsx)("label", {
                          for: "male",
                          children: "Male",
                        }),
                        Object(N.jsx)("input", {
                          type: "radio",
                          name: "gender",
                          id: "female",
                          value: "female",
                        }),
                        Object(N.jsx)("label", {
                          for: "female",
                          children: "Female",
                        }),
                        Object(N.jsx)("input", {
                          type: "radio",
                          name: "gender",
                          id: "other",
                          value: "other",
                        }),
                        Object(N.jsx)("label", {
                          for: "other",
                          children: "Other",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(N.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(N.jsx)("label", { children: "Active" }),
                    Object(N.jsxs)("select", {
                      className: "newUserSelect",
                      name: "active",
                      id: "active",
                      children: [
                        Object(N.jsx)("option", {
                          value: "yes",
                          children: "Yes",
                        }),
                        Object(N.jsx)("option", {
                          value: "no",
                          children: "No",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(N.jsx)("button", {
                  className: "newUserButton",
                  children: "Create",
                }),
              ],
            }),
          ],
        });
      }
      c(541);
      function Mt() {
        var e = Object(a.useState)([]),
          t = Object(S.a)(e, 2),
          c = t[0],
          s = t[1],
          n = Object(a.useState)(!1),
          r = Object(S.a)(n, 2),
          i = r[0],
          l = r[1],
          o = (function () {
            var e = Object(W.a)(
              K.a.mark(function e(t) {
                return K.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        try {
                          je.a
                            .fire({
                              title: "Are you sure?",
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: !0,
                              confirmButtonColor: "#3bb077",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!",
                            })
                            .then(
                              (function () {
                                var e = Object(W.a)(
                                  K.a.mark(function e(c) {
                                    return K.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (!c.isConfirmed) {
                                              e.next = 5;
                                              break;
                                            }
                                            return (
                                              (e.next = 3),
                                              de.delete("/users/".concat(t))
                                            );
                                          case 3:
                                            s(function (e) {
                                              return e.filter(function (e) {
                                                return e._id !== t;
                                              });
                                            }),
                                              je.a.fire(
                                                "Deleted!",
                                                "Your file has been deleted.",
                                                "success"
                                              );
                                          case 5:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                        } catch (c) {
                          ce.b.error(
                            "Error deleting user. Please try again later.",
                            { position: "top-right", autoClose: 3e3 }
                          );
                        }
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        Object(a.useEffect)(function () {
          (function () {
            var e = Object(W.a)(
              K.a.mark(function e() {
                var t;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            l(!0),
                            (e.prev = 1),
                            (e.next = 4),
                            de.get("users/?admin=admin")
                          );
                        case 4:
                          (t = e.sent), s(t.data.data), l(!1), (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            l(!1),
                            je.a.fire({
                              icon: "error",
                              title: "Oops...",
                              text: e.t0,
                            });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []);
        var d = (function () {
            var e = Object(W.a)(
              K.a.mark(function e(t) {
                var a, n;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            de.post("/users/".concat(t), { isAdmin: !1 })
                          );
                        case 3:
                          (a = e.sent),
                            (n = c.filter(function (e) {
                              return e._id !== t;
                            })),
                            s(n),
                            a.data.data &&
                              je.a.fire({
                                icon: "success",
                                title: "Success",
                                text: "Removed from Admin",
                              }),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            console.error(
                              "Error removing user from admin:",
                              e.t0
                            ),
                            je.a.fire({
                              icon: "error",
                              title: "Error",
                              text: "Failed to remove from admin",
                            });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          u = [
            { field: "_id", headerName: "ADMIN ID", width: 200 },
            {
              field: "user",
              headerName: "User",
              width: 200,
              renderCell: function (e) {
                return Object(N.jsxs)("div", {
                  className: "adminListUser",
                  children: [
                    Object(N.jsx)("img", {
                      className: "adminListImg",
                      src: A.a.url(e.row.email),
                      alt: "",
                    }),
                    e.row.name,
                  ],
                });
              },
            },
            { field: "email", headerName: "Email", width: 200 },
            { field: "phone", headerName: "Phone", width: 120 },
            {
              field: "isAdmin",
              headerName: "ADMIN",
              width: 120,
              renderCell: function (e) {
                return Object(N.jsx)("div", {
                  children: e.row.isAdmin ? "YES" : "NO",
                });
              },
            },
            {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: function (e) {
                return Object(N.jsxs)(N.Fragment, {
                  children: [
                    Object(N.jsx)("button", {
                      onClick: function () {
                        return d(e.row._id);
                      },
                      className: "adminListEdit",
                      children: "Remove",
                    }),
                    Object(N.jsx)(ye.a, {
                      className: "adminListDelete",
                      onClick: function () {
                        return o(e.row._id);
                      },
                    }),
                  ],
                });
              },
            },
          ];
        return Object(N.jsx)("div", {
          className: "adminList",
          children:
            i && !c
              ? Object(N.jsx)(te, { name: "block" })
              : Object(N.jsx)(we.a, {
                  rows: c,
                  disableSelectionOnClick: !0,
                  getRowId: function (e) {
                    return null === e || void 0 === e ? void 0 : e._id;
                  },
                  columns: u,
                  pageSize: 8,
                  checkboxSelection: !0,
                }),
        });
      }
      c(542);
      function Yt() {
        return Object(N.jsx)("div", {
          className: "mail-container",
          children: "Under Development",
        });
      }
      c(543);
      function zt() {
        return Object(N.jsx)("div", {
          className: "feedback-container",
          children: "Under Development",
        });
      }
      c(544);
      function Vt() {
        return Object(N.jsx)("div", {
          className: "msg-container",
          children: "Under Development",
        });
      }
      c(545);
      var Jt = Object(T.b)({
          name: "slider",
          initialState: { isLoading: !1, sliders: [], slider: {}, error: "" },
          reducers: {
            getSliderStart: function (e) {
              (e.isLoading = !0), (e.error = "");
            },
            getSliderSuccess: function (e, t) {
              (e.isLoading = !1), (e.sliders = t.payload);
            },
            getSliderFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
            deleteSliderStart: function (e) {
              (e.isLoading = !0), (e.error = "");
            },
            deleteSliderSuccess: function (e, t) {
              e.isLoading = !1;
              var c = e.sliders.filter(function (e) {
                return e._id !== t.payload;
              });
              e.sliders = c;
            },
            deleteSliderFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
            updateSliderStart: function (e) {
              (e.isLoading = !0), (e.error = "");
            },
            updateSliderSuccess: function (e, t) {
              e.isLoading = !1;
              var c = e.sliders.findIndex(function (e) {
                return e._id === t.payload.id;
              });
              if (-1 !== c) {
                var a = Object(ke.a)(
                  Object(ke.a)({}, t.payload.updatedSlider),
                  {},
                  { _id: t.payload.id }
                );
                e.sliders[c] = a;
              }
            },
            updatedSliderFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
            addSliderStart: function (e) {
              (e.isLoading = !0), (e.error = "");
            },
            addSliderSuccess: function (e, t) {
              (e.isLoading = !1), e.sliders.push(t.payload);
            },
            addSliderFailure: function (e, t) {
              (e.isLoading = !1), (e.error = t.payload);
            },
          },
        }),
        Xt = Jt.actions,
        Kt = Xt.getSliderStart,
        Wt = Xt.getSliderSuccess,
        Ht = Xt.getSliderFailure,
        qt = Xt.updateSliderStart,
        Gt = Xt.updateSliderSuccess,
        Qt = Xt.updatedSliderFailure,
        $t = Xt.addSliderStart,
        Zt = Xt.addSliderSuccess,
        ec = Xt.addSliderFailure,
        tc = Xt.deleteSliderStart,
        cc = Xt.deleteSliderSuccess,
        ac = Xt.deleteSliderFailure,
        sc = Jt.reducer,
        nc = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t) {
              var c, a, s, n;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(Kt()),
                          (e.prev = 1),
                          (e.next = 4),
                          oe.get("/sliders")
                        );
                      case 4:
                        (c = e.sent), t(Wt(c.data.data)), (e.next = 13);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          (n =
                            (null === (a = e.t0.response) ||
                            void 0 === a ||
                            null === (s = a.data) ||
                            void 0 === s
                              ? void 0
                              : s.error) || "Error Occurred."),
                          t(Ht(n)),
                          je.a.fire({ icon: "error", title: "Uh...", text: n });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        rc = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c) {
              var a, s, n;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          c(tc()),
                          (e.prev = 1),
                          (e.next = 4),
                          de.delete("/sliders/".concat(t))
                        );
                      case 4:
                        c(cc(t)),
                          je.a.fire({
                            icon: "success",
                            title: "Success",
                            text: "Slider Deleted Successfully!",
                          }),
                          (e.next = 13);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          (n =
                            (null === (a = e.t0.response) ||
                            void 0 === a ||
                            null === (s = a.data) ||
                            void 0 === s
                              ? void 0
                              : s.error) || "Error Occurred."),
                          c(ac(n)),
                          je.a.fire({ icon: "error", title: "Uh...", text: n });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })(),
        ic = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c, a) {
              var s, n, r;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          a(qt()),
                          (e.next = 4),
                          de.put("/sliders/".concat(t), c)
                        );
                      case 4:
                        a(Gt({ id: t, slider: c })),
                          je.a.fire({
                            icon: "success",
                            title: "Updated",
                            text: "Updated Slider Successfully!",
                          }),
                          (e.next = 13);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          (r =
                            (null === (s = e.t0.response) ||
                            void 0 === s ||
                            null === (n = s.data) ||
                            void 0 === n
                              ? void 0
                              : n.error) || "Error Occurred."),
                          a(Qt(r)),
                          je.a.fire({ icon: "error", title: "Uh...", text: r });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, c, a) {
            return e.apply(this, arguments);
          };
        })(),
        lc = (function () {
          var e = Object(W.a)(
            K.a.mark(function e(t, c) {
              var a, s, n, r;
              return K.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          c($t()),
                          (e.prev = 1),
                          (e.next = 4),
                          de.post("/sliders", t)
                        );
                      case 4:
                        (a = e.sent),
                          c(Zt(a.data.data)),
                          je.a.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Added Slider Successfully",
                          }),
                          (e.next = 14);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(1)),
                          (r =
                            (null === (s = e.t0.response) ||
                            void 0 === s ||
                            null === (n = s.data) ||
                            void 0 === n
                              ? void 0
                              : n.error) || "Error Occurred."),
                          c(ec(r)),
                          je.a.fire({ icon: "error", title: "Uh...", text: r });
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 9]]
              );
            })
          );
          return function (t, c) {
            return e.apply(this, arguments);
          };
        })();
      function oc() {
        var e = Object(U.b)(),
          t = Object(U.c)(function (e) {
            return e.slider;
          }),
          c = t.sliders,
          s = t.isLoading;
        Object(a.useEffect)(
          function () {
            nc(e);
          },
          [e]
        );
        var n = [
          { field: "_id", headerName: "ID", width: 220 },
          {
            field: "slider",
            headerName: "Product",
            width: 200,
            renderCell: function (e) {
              var t, c;
              return Object(N.jsxs)("div", {
                className: "bannerListItem",
                children: [
                  Object(N.jsx)("img", {
                    className: "bannerListImg",
                    src:
                      null === e ||
                      void 0 === e ||
                      null === (t = e.row) ||
                      void 0 === t
                        ? void 0
                        : t.img,
                    alt: "",
                  }),
                  null === e ||
                  void 0 === e ||
                  null === (c = e.row) ||
                  void 0 === c
                    ? void 0
                    : c.title,
                ],
              });
            },
          },
          { field: "cat", headerName: "Category", width: 200 },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: function (t) {
              return Object(N.jsxs)(N.Fragment, {
                children: [
                  Object(N.jsx)(g.b, {
                    to: "/banner/" + t.row._id,
                    children: Object(N.jsxs)("button", {
                      className: "bannerListEdit",
                      children: ["Update", Object(N.jsx)(Se.a, {})],
                    }),
                  }),
                  Object(N.jsx)(ye.a, {
                    className: "bannerListDelete",
                    onClick: function () {
                      return (
                        (c = t.row._id),
                        void je.a
                          .fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: !0,
                            confirmButtonColor: "#3bb077",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          })
                          .then(function (t) {
                            t.isConfirmed &&
                              (rc(c, e),
                              je.a.fire(
                                "Deleted!",
                                "Your product has been deleted.",
                                "success"
                              ));
                          })
                      );
                      var c;
                    },
                  }),
                ],
              });
            },
          },
          { field: "desc", headerName: "Description", width: 300 },
        ];
        return Object(N.jsxs)("div", {
          className: "bannerList",
          style: { width: "100%", overflow: "", height: "50vh" },
          children: [
            Object(N.jsx)("p", { className: "b-title", children: "Banners" }),
            s
              ? Object(N.jsx)(te, { name: "block" })
              : Object(N.jsx)(we.a, {
                  className: "data-grid",
                  rows: c,
                  disableSelectionOnClick: !0,
                  columns: n,
                  getRowId: function (e) {
                    return null === e || void 0 === e ? void 0 : e._id;
                  },
                  rowsPerPageOptions: [10],
                }),
            Object(N.jsx)(g.b, {
              to: "/add-banner",
              children: Object(N.jsx)("button", {
                className: "add-banner-btn",
                children: "Add New",
              }),
            }),
          ],
        });
      }
      c(546);
      var dc = c(293);
      function uc() {
        var e = Object(a.useState)({}),
          t = Object(S.a)(e, 2),
          c = t[0],
          s = t[1],
          n = Object(a.useState)(null),
          r = Object(S.a)(n, 2),
          i = r[0],
          l = r[1],
          o = Object(a.useState)([]),
          d = Object(S.a)(o, 2),
          u = d[0],
          j = d[1],
          b = Object(U.b)(),
          h = Object(dc.useHistory)(),
          p = function (e) {
            s(function (t) {
              return Object(ke.a)(
                Object(ke.a)({}, t),
                {},
                Object(ft.a)({}, e.target.name, e.target.value)
              );
            });
          };
        return Object(N.jsxs)("div", {
          className: "whole-wrapper",
          children: [
            Object(N.jsx)("div", { className: "banner-container" }),
            Object(N.jsxs)("div", {
              className: "banner-form-container",
              children: [
                Object(N.jsx)("h1", {
                  className: "banner-title",
                  children: "Add New Banner",
                }),
                Object(N.jsxs)("form", {
                  children: [
                    Object(N.jsxs)("div", {
                      className: "bannerForm",
                      children: [
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Image" }),
                            Object(N.jsx)("input", {
                              type: "file",
                              id: "file",
                              autoComplete: "",
                              onChange: function (e) {
                                return l(e.target.files[0]);
                              },
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Title" }),
                            Object(N.jsx)("input", {
                              name: "title",
                              type: "text",
                              placeholder: "Apple Airpods",
                              onChange: p,
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Description" }),
                            Object(N.jsx)("input", {
                              name: "desc",
                              type: "text",
                              placeholder: "description...",
                              onChange: p,
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Background" }),
                            Object(N.jsx)("input", {
                              name: "bg",
                              type: "text",
                              placeholder: "#fff,#ddd,#fddd",
                              onChange: p,
                              className: "price-input",
                              required: !0,
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Categories" }),
                            Object(N.jsx)("input", {
                              name: "cat",
                              type: "text",
                              placeholder: "jeans,skirts",
                              onChange: function (e) {
                                j(e.target.value.split(","));
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsx)("div", {
                      className: "addBannerBtn",
                      children: Object(N.jsx)("button", {
                        type: "submit",
                        onClick: function (e) {
                          console.log("click"),
                            e.preventDefault(),
                            (c && i && u) ||
                              je.a.fire({
                                icon: "warning",
                                title: "Fill the form",
                                text: "Please complete the inputs",
                              });
                          var t = new Date().getTime() + i.name,
                            a = Object(vt.b)(Nt),
                            s = Object(vt.c)(a, t),
                            n = Object(vt.d)(s, i);
                          n.on(
                            "state_changed",
                            function (e) {
                              var t = (e.bytesTransferred / e.totalBytes) * 100;
                              switch (
                                (console.log("Upload is " + t + "% done"),
                                e.state)
                              ) {
                                case "paused":
                                  console.log("Upload is paused");
                                  break;
                                case "running":
                                  console.log("Upload is running");
                              }
                            },
                            function (e) {
                              console.log(e);
                            },
                            function () {
                              Object(vt.a)(n.snapshot.ref).then(function (e) {
                                var t = Object(ke.a)(
                                  Object(ke.a)({}, c),
                                  {},
                                  { img: e, cat: u[0] }
                                );
                                console.log(t);
                                try {
                                  lc(t, b),
                                    je.a
                                      .fire({
                                        icon: "success",
                                        title: "Product Added Successfully",
                                        showConfirmButton: !0,
                                      })
                                      .then(function (e) {
                                        e.isConfirmed && h.push("/sliders");
                                      });
                                } catch (a) {
                                  console.error("Error adding slider:", a);
                                }
                              });
                            }
                          );
                        },
                        children: "Add",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      c(547);
      function jc() {
        var e,
          t =
            null === (e = Object(v.useLocation)().pathname) || void 0 === e
              ? void 0
              : e.split("/")[2],
          c = Object(a.useState)({}),
          s = Object(S.a)(c, 2),
          n = s[0],
          r = s[1],
          i = Object(a.useState)({}),
          l = Object(S.a)(i, 2),
          o = l[0],
          d = l[1],
          u = Object(a.useState)(null),
          j = Object(S.a)(u, 2),
          b = j[0],
          h = j[1],
          p = Object(a.useState)([]),
          m = Object(S.a)(p, 2),
          O = m[0],
          x = m[1],
          f = Object(U.b)(),
          g = Object(v.useHistory)();
        Object(a.useEffect)(
          function () {
            (function () {
              var e = Object(W.a)(
                K.a.mark(function e() {
                  var c;
                  return K.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              de.get("/sliders/find/".concat(t))
                            );
                          case 3:
                            (c = e.sent), r(c.data.data), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              je.a.fire({
                                icon: "error",
                                title: "Oops...",
                                text: e.t0,
                              });
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [t]
        );
        var w = function (e) {
          d(function (t) {
            return Object(ke.a)(
              Object(ke.a)({}, t),
              {},
              Object(ft.a)({}, e.target.name, e.target.value)
            );
          });
        };
        return Object(N.jsxs)("div", {
          className: "whole-wrapper",
          children: [
            Object(N.jsx)("div", { className: "banner-container" }),
            Object(N.jsxs)("div", {
              className: "banner-form-container",
              children: [
                Object(N.jsx)("h1", {
                  className: "banner-title",
                  children: "Update Banner",
                }),
                Object(N.jsxs)("form", {
                  children: [
                    Object(N.jsxs)("div", {
                      className: "bannerForm",
                      children: [
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Image" }),
                            Object(N.jsx)("img", {
                              src: (
                                null === b || void 0 === b ? void 0 : b.name
                              )
                                ? URL.createObjectURL(b)
                                : n.img,
                              alt: "",
                              className: "productUploadImg",
                            }),
                            Object(N.jsx)("label", {
                              for: "file",
                              children: Object(N.jsx)(kt.a, {}),
                            }),
                            Object(N.jsx)("input", {
                              defaultValue:
                                null === n || void 0 === n ? void 0 : n.img,
                              onChange: function (e) {
                                return h(e.target.files[0]);
                              },
                              type: "file",
                              id: "file",
                              style: { display: "none" },
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Title" }),
                            Object(N.jsx)("input", {
                              name: "title",
                              type: "text",
                              placeholder: "Apple Airpods",
                              defaultValue:
                                null === n || void 0 === n ? void 0 : n.title,
                              onChange: w,
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Description" }),
                            Object(N.jsx)("input", {
                              name: "desc",
                              type: "text",
                              placeholder: "description...",
                              defaultValue:
                                null === n || void 0 === n ? void 0 : n.desc,
                              onChange: w,
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Background" }),
                            Object(N.jsx)("input", {
                              name: "bg",
                              type: "text",
                              placeholder: "#fff,#ddd,#fddd",
                              defaultValue:
                                null === n || void 0 === n ? void 0 : n.bg,
                              onChange: w,
                              className: "price-input",
                              required: !0,
                            }),
                          ],
                        }),
                        Object(N.jsxs)("div", {
                          className: "bannerItem",
                          children: [
                            Object(N.jsx)("label", { children: "Categories" }),
                            Object(N.jsx)("input", {
                              name: "cat",
                              type: "text",
                              placeholder: "jeans,skirts",
                              defaultValue:
                                null === n || void 0 === n ? void 0 : n.cat,
                              onChange: function (e) {
                                x(e.target.value.split(","));
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsx)("div", {
                      className: "addBannerBtn",
                      children: Object(N.jsx)("button", {
                        type: "submit",
                        onClick: function (e) {
                          if (
                            (e.preventDefault(),
                            null === b || void 0 === b ? void 0 : b.name)
                          ) {
                            var c =
                                new Date().getTime() +
                                (null === b || void 0 === b ? void 0 : b.name),
                              a = Object(vt.b)(Nt),
                              s = Object(vt.c)(a, c),
                              n = Object(vt.d)(s, b);
                            n.on(
                              "state_changed",
                              function (e) {
                                var t =
                                  (e.bytesTransferred / e.totalBytes) * 100;
                                switch (
                                  (console.log("Upload is " + t + "% done"),
                                  e.state)
                                ) {
                                  case "paused":
                                    console.log("Upload is paused");
                                    break;
                                  case "running":
                                    console.log("Upload is running");
                                }
                              },
                              function (e) {
                                console.log(e),
                                  ce.b.error("May be some issues!!", {
                                    position: "top-right",
                                    autoClose: 3e3,
                                  });
                              },
                              function () {
                                Object(vt.a)(n.snapshot.ref).then(function (e) {
                                  var c = Object(ke.a)(
                                    Object(ke.a)({}, o),
                                    {},
                                    { img: e, cat: O[0] }
                                  );
                                  ic(t, c, f),
                                    ce.b.success(
                                      "Slider Updated successfully!",
                                      { position: "top-right", autoClose: 3e3 }
                                    ),
                                    g.push("/banners");
                                });
                              }
                            );
                          } else {
                            var r = Object(ke.a)(
                              Object(ke.a)({}, o),
                              {},
                              { cat: O[0] }
                            );
                            ic(t, r, f),
                              ce.b.success("Slider Updated successfully!", {
                                position: "top-right",
                                autoClose: 3e3,
                              }),
                              g.push("/banners");
                          }
                        },
                        children: "Update",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var bc = function () {
          var e = Object(U.c)(function (e) {
            var t, c;
            return null === (t = e.user) ||
              void 0 === t ||
              null === (c = t.currentUser) ||
              void 0 === c
              ? void 0
              : c.isAdmin;
          });
          return Object(N.jsx)(Tt, {
            children: Object(N.jsx)(g.a, {
              children: Object(N.jsx)(v.Switch, {
                children: e
                  ? Object(N.jsxs)(N.Fragment, {
                      children: [
                        Object(N.jsx)(J, {}),
                        Object(N.jsxs)("div", {
                          className: "container",
                          children: [
                            Object(N.jsx)(w, {}),
                            Object(N.jsx)(v.Route, {
                              exact: !0,
                              path: "/",
                              children: Object(N.jsx)(Ne, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/users",
                              children: Object(N.jsx)(_t, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/user/:userId",
                              children: Object(N.jsx)(Et, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/newUser",
                              children: Object(N.jsx)(Rt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/products",
                              children: Object(N.jsx)(Ke, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              exact: !0,
                              path: "/orders",
                              children: Object(N.jsx)(jt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/orders/:orderedId",
                              children: Object(N.jsx)(xt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/product/:productId",
                              children: Object(N.jsx)(It, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/newproduct",
                              children: Object(N.jsx)(yt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/banners",
                              children: Object(N.jsx)(oc, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/banner/:bannerId",
                              children: Object(N.jsx)(jc, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/add-banner",
                              children: Object(N.jsx)(uc, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/transaction",
                              children: Object(N.jsx)(Ge, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/analatics",
                              children: Object(N.jsx)(bt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/sales",
                              children: Object(N.jsx)(mt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/reports",
                              children: Object(N.jsx)(Ot, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/make-admin",
                              children: Object(N.jsx)(Mt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/mail",
                              children: Object(N.jsx)(Yt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/feedback",
                              children: Object(N.jsx)(zt, {}),
                            }),
                            Object(N.jsx)(v.Route, {
                              path: "/messages",
                              children: Object(N.jsx)(Vt, {}),
                            }),
                          ],
                        }),
                      ],
                    })
                  : Object(N.jsx)(qe, {}),
              }),
            }),
          });
        },
        hc = c(58),
        pc = c(89),
        mc = c(294),
        Oc = {
          key: "root",
          version: 1,
          storage: c.n(mc).a,
          whitelist: ["user"],
        },
        xc = Object(hc.b)({ user: Y, product: Ye, order: lt, slider: sc }),
        fc = Object(pc.g)(Oc, xc),
        vc = Object(T.a)({
          reducer: fc,
          middleware: function (e) {
            return e({
              serializableCheck: {
                ignoredActions: [pc.a, pc.f, pc.b, pc.c, pc.d, pc.e],
              },
            });
          },
        }),
        gc = Object(pc.h)(vc),
        Nc = c(295);
      (console.log = function () {}),
        n.a.render(
          Object(N.jsx)(U.a, {
            store: vc,
            children: Object(N.jsxs)(Nc.a, {
              loading: "null",
              persistor: gc,
              children: [
                Object(N.jsx)(ce.a, { position: "top-right", autoClose: 3e3 }),
                Object(N.jsx)(bc, {}),
              ],
            }),
          }),
          document.getElementById("root")
        );
    },
  },
  [[550, 1, 2]],
]);
//# sourceMappingURL=main.9659d1ba.chunk.js.map
