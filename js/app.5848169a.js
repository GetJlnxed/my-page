(function(e) {
  function t(t) {
    for (var n, r, o = t[0], c = t[1], l = t[2], d = 0, p = []; d < o.length; d++)
      (r = o[d]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && p.push(a[r][0]),
        (a[r] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    u && u(t);
    while (p.length) p.shift()();
    return s.push.apply(s, l || []), i();
  }
  function i() {
    for (var e, t = 0; t < s.length; t++) {
      for (var i = s[t], n = !0, o = 1; o < i.length; o++) {
        var c = i[o];
        0 !== a[c] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = r((r.s = i[0]))));
    }
    return e;
  }
  var n = {},
    a = { app: 0 },
    s = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function(e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (r.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            i,
            n,
            function(t) {
              return e[t];
            }.bind(null, n),
          );
      return i;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/my-page/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var l = 0; l < o.length; l++) t(o[l]);
  var u = c;
  s.push([0, "chunk-vendors"]), i();
})({
  0: function(e, t, i) {
    e.exports = i("56d7");
  },
  "043b": function(e, t, i) {},
  "04cc": function(e, t, i) {
    e.exports = i.p + "img/js.fbefa2e5.png";
  },
  "0b40": function(e, t, i) {
    "use strict";
    i("043b");
  },
  1654: function(e, t, i) {},
  "1f87": function(e, t, i) {
    e.exports = i.p + "img/html.4fffb1de.png";
  },
  "20ff": function(e, t, i) {
    e.exports = i.p + "img/webpack.f5fb7112.png";
  },
  "2c83": function(e, t, i) {
    e.exports = i.p + "img/bootstrap.eda8a37b.png";
  },
  3390: function(e, t, i) {
    e.exports = i.p + "img/vue.807c9566.png";
  },
  "4a46": function(e, t, i) {},
  "4be0": function(e, t, i) {},
  5226: function(e, t, i) {
    e.exports = i.p + "img/caesar-glitched.c6d58663.gif";
  },
  "56d7": function(e, t, i) {
    "use strict";
    i.r(t);
    i("e260"), i("e6cf"), i("cca6"), i("a79d");
    var n = i("2b0e"),
      a = function() {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { attrs: { id: "app" } }, [i("router-view")], 1);
      },
      s = [],
      r = (i("7faf"), i("2877")),
      o = {},
      c = Object(r["a"])(o, a, s, !1, null, null, null),
      l = c.exports,
      u = i("8c4f"),
      d = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "transition",
          { attrs: { name: "fade" }, on: { "after-leave": e.pageLeaved } },
          [
            n(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.visibility.page,
                    expression: "visibility.page",
                  },
                ],
                staticClass: "section container introSection",
                on: { wheel: e.wheelHandler, swipe: e.swipeHandler },
              },
              [
                n(
                  "transition",
                  {
                    attrs: { name: "fade-slow", appear: "" },
                    on: { "after-appear": e.caesarAppeared },
                  },
                  [
                    n("div", { staticClass: "logos" }, [
                      n("img", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.state.caesarGlitching,
                            expression: "state.caesarGlitching",
                          },
                        ],
                        staticClass: "logos__logo",
                        attrs: { src: i("5226") },
                      }),
                      n("img", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !e.state.caesarGlitching,
                            expression: "!state.caesarGlitching",
                          },
                        ],
                        staticClass: "logos__logo",
                        attrs: { src: i("a680") },
                      }),
                    ]),
                  ],
                ),
                n(
                  "transition",
                  {
                    attrs: { name: "fade-slow" },
                    on: { "after-enter": e.scrollIconEntered },
                  },
                  [
                    e.visibility.scrollIcon
                      ? n(
                          "div",
                          {
                            staticClass:
                              "container container--column align-center justify-center scrollAdvise",
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass:
                                  "container scrollAdvise__inner align-center justify-center",
                              },
                              [
                                n("img", {
                                  staticClass: "scrollAdvise__icon",
                                  attrs: { src: i("ef80") },
                                }),
                                n(
                                  "transition",
                                  {
                                    attrs: { name: "slide-fade" },
                                    on: { "after-enter": e.scrollTextEntered },
                                  },
                                  [
                                    e.visibility.scrollIconText
                                      ? n(
                                          "p",
                                          { staticClass: "text scrollAdvise__text" },
                                          [e._v(" " + e._s(e.scrollText) + " ")],
                                        )
                                      : e._e(),
                                  ],
                                ),
                              ],
                              1,
                            ),
                          ],
                        )
                      : e._e(),
                  ],
                ),
              ],
              1,
            ),
          ],
        );
      },
      p = [],
      f = i("9029"),
      m = {
        data: function() {
          return { isMobile: f["isMobile"] };
        },
        created: function() {
          console.log(this.isMobile);
        },
      },
      h = {
        name: "Intro",
        mixins: [m],
        data: function() {
          return {
            scrollText: "",
            state: { caesarGlitching: !0, mayScroll: !1 },
            visibility: { page: !0, scrollIcon: !1, scrollIconText: !1 },
          };
        },
        created: function() {
          this.scrollText = f["isMobile"] ? "Swipe" : "Scroll down";
        },
        methods: {
          scrollIconEntered: function() {
            this.visibility.scrollIconText = !0;
          },
          scrollTextEntered: function() {
            this.state.mayScroll = !0;
          },
          caesarAppeared: function() {
            (this.visibility.scrollIcon = !0), (this.state.caesarGlitching = !1);
          },
          pageLeaved: function() {
            this.$router.push({ name: "greeting" });
          },
          switchOffPage: function() {
            for (var e in this.visibility) this.visibility[e] = !1;
          },
          wheelHandler: function(e) {
            var t = e.deltaY < 0 ? "up" : "down";
            this.state.mayScroll &&
              ("down" == t
                ? ((this.visibility.page = !1), (this.state.mayScroll = !1))
                : (this.state.mayScroll = !1));
          },
          swipeHandler: function() {
            (this.scrollText = "fdsf"), console.log("swipe");
          },
        },
      },
      v = h,
      g = (i("5937"), Object(r["a"])(v, d, p, !1, null, "b8ba8bf6", null)),
      b = g.exports,
      y = function() {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "transition",
          {
            attrs: { name: "fade", appear: "" },
            on: { "after-appear": e.pageAppeared, "after-leave": e.pageLeaved },
          },
          [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.visibility.page,
                    expression: "visibility.page",
                  },
                ],
                staticClass: "section container",
                on: { wheel: e.wheelHandler },
              },
              [
                i("div", { staticClass: "section__label" }, [
                  i("p", { staticClass: "text text--subheading" }, [
                    e._v(" 01. ———— Я "),
                  ]),
                ]),
                i(
                  "div",
                  {
                    staticClass:
                      "container container--row align-center justify-center aboutWall",
                  },
                  [
                    i(
                      "div",
                      {
                        staticClass:
                          "container align-center aboutWall__descriptionContainer",
                      },
                      [
                        i("p", { staticClass: "text text--test" }, [
                          e._v(
                            " Тут я хотел бы заметить, что Цезарь не просто так на главной ебалом тогрует. Водяная вода, сказки про компанию ",
                          ),
                        ]),
                      ],
                    ),
                    i("div", { staticClass: "container antraksLogoContainer" }, [
                      i(
                        "svg",
                        {
                          staticClass: "antraksLogo",
                          attrs: {
                            version: "1.1",
                            id: "Слой_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 1100 1000",
                          },
                        },
                        [
                          i("path", { staticClass: "st0", attrs: { d: "M575.5,374.5" } }),
                          i("polyline", {
                            staticClass: "st0",
                            attrs: {
                              points:
                                "215.13,999.79 215.34,999.5 215.5,999.5 721.5,297.5 ",
                            },
                          }),
                          i("polyline", {
                            staticClass: "st0",
                            attrs: {
                              points: "722,0.5 791.5,-0.5 937.5,-0.5 936.5,650.5 ",
                            },
                          }),
                          i("polygon", {
                            staticClass: "st0",
                            attrs: {
                              points:
                                "976.5,650.5 827.5,792.5 681.5,650.5 721.5,650.5 721.5,297.5 215.34,999.5 -0.5,999.5 721.5,0.5 \n\t936.5,0.5 936.5,650.5 ",
                            },
                          }),
                          i("polygon", {
                            staticClass: "st0",
                            attrs: { points: "1000,864 678.51,864 594,999 915.49,999 " },
                          }),
                        ],
                      ),
                    ]),
                  ],
                ),
              ],
            ),
          ],
        );
      },
      w = [],
      x = {
        name: "About",
        data: function() {
          return { state: { direction: null, mayScroll: !1 }, visibility: { page: !0 } };
        },
        methods: {
          pageAppeared: function() {
            this.state.mayScroll = !0;
          },
          pageLeaved: function() {
            "down" == this.state.direction
              ? this.$router.push({ name: "stack" })
              : this.$router.push({ name: "intro" });
          },
          wheelHandler: function(e) {
            var t = e.deltaY < 0 ? "up" : "down";
            this.state.mayScroll &&
              ((this.state.direction = "down" == t ? "down" : "up"),
              (this.visibility.page = !1),
              (this.state.mayScroll = !1));
          },
        },
      },
      _ = x,
      C = (i("0b40"), Object(r["a"])(_, y, w, !1, null, "39192d86", null)),
      S = C.exports,
      H = function() {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "transition",
          {
            attrs: { name: "fade-greeting", appear: "" },
            on: { "after-appear": e.pageAppeared, "after-leave": e.pageLeaved },
          },
          [
            e.visibility.page
              ? i("div", { staticClass: "section container" }, [
                  i(
                    "div",
                    {
                      staticClass:
                        "container container--column align-center justify-center",
                    },
                    [
                      i("h2", { staticClass: "text text--heading" }, [
                        e._v(" Hi, I am Roman "),
                      ]),
                    ],
                  ),
                ])
              : e._e(),
          ],
        );
      },
      k = [],
      j = {
        name: "Greeting",
        data: function() {
          return { visibility: { page: !0 } };
        },
        methods: {
          pageAppeared: function() {
            this.visibility.page = !1;
          },
          pageLeaved: function() {
            this.$router.push({ name: "about" });
          },
        },
      },
      A = j,
      T = (i("f57e"), Object(r["a"])(A, H, k, !1, null, "08e0efee", null)),
      L = T.exports,
      O = function() {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "transition",
          { attrs: { name: "fade", appear: "" }, on: { "after-leave": e.pageLeaved } },
          [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.visibility.page,
                    expression: "visibility.page",
                  },
                ],
                staticClass: "section container align-center justify-center",
                on: { wheel: e.wheelHandler },
              },
              [
                i("div", { staticClass: "section__label" }, [
                  i("p", { staticClass: "text text--subheading" }, [
                    e._v("02. ———— Стэк."),
                  ]),
                ]),
                i(
                  "div",
                  {
                    staticClass:
                      "container container--row align-center justify-center nowrap slides",
                  },
                  [
                    i("transition", { attrs: { name: "fade", appear: "" } }, [
                      e.visibility.backgroundLogo
                        ? i(
                            "div",
                            {
                              staticClass:
                                "backgroundLogo container align-center justify-center",
                            },
                            [
                              i("img", {
                                staticClass: "backgroundLogo__logo",
                                attrs: { src: e.itemImage, alt: "" },
                              }),
                            ],
                          )
                        : e._e(),
                    ]),
                    e._l(e.hatches, function(t) {
                      return i("Hatch", {
                        key: t.id,
                        attrs: {
                          selected: t.isSelected,
                          hovered: t.isHovered,
                          title: t.value,
                        },
                        on: { "hatch-entered": e.hatchEntered },
                        nativeOn: {
                          click: function(i) {
                            return e.clickHatchHandler(t);
                          },
                          mouseover: function(i) {
                            return e.hoverHatchHandler(t);
                          },
                          mouseleave: function(i) {
                            return e.unhoverHatchHandler(t);
                          },
                        },
                      });
                    }),
                  ],
                  2,
                ),
              ],
            ),
          ],
        );
      },
      E = [],
      N =
        (i("9911"),
        i("159b"),
        function() {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            {
              staticClass: "slide",
              class: { "slide--hovered": e.hovered, "slide--selected": e.selected },
            },
            [
              i(
                "transition",
                {
                  attrs: { name: "appear", appear: "" },
                  on: { "after-enter": e.hatchEntered },
                },
                [
                  i("span", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.isVisible,
                        expression: "isVisible",
                      },
                    ],
                    staticClass: "slide__hatch",
                  }),
                ],
              ),
              i("transition", { attrs: { name: "slide-fade-hatch", appear: "" } }, [
                e.selected
                  ? i("div", { staticClass: "slide__title" }, [
                      i("span", { staticClass: "text text--bold" }, [
                        e._v(e._s(e.title)),
                      ]),
                    ])
                  : e._e(),
              ]),
            ],
            1,
          );
        }),
      $ = [],
      I = {
        name: "Hatch",
        data: function() {
          return { isVisible: !1 };
        },
        props: {
          hovered: { type: Boolean, default: !1 },
          selected: { type: Boolean, default: !1 },
          title: { type: String, default: "" },
        },
        mounted: function() {
          var e = this;
          setTimeout(function() {
            e.isVisible = !0;
          }, this.getRandomArbitrary(20, 1800));
        },
        methods: {
          getRandomArbitrary: function(e, t) {
            return Math.random() * (t - e) + e;
          },
          hatchEntered: function(e) {
            this.$emit("hatch-entered", e);
          },
        },
      },
      P = I,
      M = (i("b30d"), Object(r["a"])(P, N, $, !1, null, "719307cf", null)),
      V = M.exports,
      G = {
        name: "Stack",
        data: function() {
          return {
            selectedImage: "",
            seltectedHatch: null,
            state: {
              hatchesAmount: 0,
              direction: null,
              hatchesLoadedAmount: 0,
              mayScroll: !1,
            },
            visibility: { backgroundLogo: !0, page: !0 },
            hatches: [
              { id: 0, isHovered: !1, isSelected: !1, value: "HTML", link: "html.png" },
              { id: 1, isHovered: !1, isSelected: !1, value: "CSS", link: "css.png" },
              {
                id: 7,
                isHovered: !1,
                isSelected: !1,
                value: "STYLUS",
                link: "stylus.png",
              },
              { id: 2, isHovered: !1, isSelected: !1, value: "JS", link: "js.png" },
              {
                id: 3,
                isHovered: !1,
                isSelected: !1,
                value: "JQUERY",
                link: "jquery.png",
              },
              { id: 4, isHovered: !1, isSelected: !1, value: "VUE", link: "vue.png" },
              {
                id: 5,
                isHovered: !1,
                isSelected: !1,
                value: "NATIVE",
                link: "vuenative.png",
              },
              {
                id: 6,
                isHovered: !1,
                isSelected: !1,
                value: "VUETIFY",
                link: "vuetify.png",
              },
              {
                id: 8,
                isHovered: !1,
                isSelected: !1,
                value: "WEBPACK",
                link: "webpack.png",
              },
              { id: 9, isHovered: !1, isSelected: !1, value: "GULP", link: "gulp.png" },
              { id: 10, isHovered: !1, isSelected: !1, value: "GIT", link: "git.png" },
              { id: 11, isHovered: !1, isSelected: !1, value: "NODE", link: "node.png" },
              { id: 12, isHovered: !1, isSelected: !1, value: "C#", link: "csharp.png" },
            ],
          };
        },
        components: { Hatch: V },
        created: function() {
          this.state.hatchesAmount = this.hatches.length;
        },
        methods: {
          clickHatchHandler: function(e) {
            var t = this;
            this.seltectedHatch != e &&
              (this.unselectAllhatches(),
              (this.seltectedHatch = e),
              (this.selectedImage = e.link),
              (e.isSelected = !0),
              (this.visibility.backgroundLogo = !1),
              setTimeout(function() {
                t.visibility.backgroundLogo = !0;
              }, 200));
          },
          unselectAllhatches: function() {
            this.hatches.forEach(function(e) {
              e.isSelected = !1;
            });
          },
          hoverHatchHandler: function(e) {
            e.isHovered = !0;
          },
          unhoverHatchHandler: function(e) {
            e.isHovered = !1;
          },
          hatchEntered: function(e) {
            console.log(e), this.state.hatchesLoadedAmount++;
          },
          pageLeaved: function() {
            "down" == this.state.direction
              ? this.$router.push({ name: "roadmap" })
              : this.$router.push({ name: "about" });
          },
          wheelHandler: function(e) {
            var t = e.deltaY < 0 ? "up" : "down";
            this.state.mayScroll &&
              ((this.state.direction = "down" == t ? "down" : "up"),
              (this.visibility.page = !1),
              (this.state.mayScroll = !1));
          },
        },
        watch: {
          state: {
            deep: !0,
            handler: function(e) {
              var t = this;
              e.hatchesLoadedAmount == this.state.hatchesAmount &&
                ((this.hatches[0].isHovered = !0),
                (this.state.mayScroll = !0),
                setTimeout(function() {
                  (t.hatches[0].isHovered = !1), t.clickHatchHandler(t.hatches[0]);
                }, 500));
            },
          },
        },
        computed: {
          itemImage: function() {
            if (this.selectedImage) {
              var e = this.selectedImage.toLowerCase();
              return i("5d88")("./".concat(e));
            }
          },
        },
      },
      U = G,
      Y = (i("ac6b"), Object(r["a"])(U, O, E, !1, null, "16458438", null)),
      R = Y.exports,
      q = function() {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "transition",
          { attrs: { name: "fade", appear: "" }, on: { "after-leave": e.pageLeaved } },
          [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.visibility.page,
                    expression: "visibility.page",
                  },
                ],
                staticClass: "section container justify-center align-center",
                on: { wheel: e.wheelHandler },
              },
              [
                i("transition", { attrs: { name: "fade", appear: "" } }, [
                  i("div", { staticClass: "section__label" }, [
                    i("p", { staticClass: "text text--subheading" }, [
                      e._v("03. ———— Путь."),
                    ]),
                  ]),
                ]),
                i(
                  "div",
                  { staticClass: "timeline" },
                  [
                    i("transition", { attrs: { name: "height", appear: "" } }, [
                      e.visibility.line
                        ? i("span", { staticClass: "timeline__line" })
                        : e._e(),
                    ]),
                    e._l(e.points, function(t) {
                      return i(
                        "timestamp",
                        {
                          key: t.id,
                          attrs: {
                            title: t.title,
                            content: t.content,
                            left: "left" == t.direction,
                            visibilityTimeout: t.timeout,
                            numberOneAmount: t.numbers.bugs,
                            numberTwoAmount: t.numbers.features,
                            numberThreeAmount: t.numbers.coffee,
                          },
                          on: {
                            rendered: function(i) {
                              return e.activatePoint(t.id);
                            },
                          },
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "container container--row",
                              class: {
                                "justify-end": "left" == t.direction,
                                "justify-start": "right" == !t.direction,
                              },
                            },
                            [
                              i("p", { staticClass: "text" }, [
                                e._v("Багов исправлено:"),
                              ]),
                              t.visible
                                ? i("AnimatedNumber", {
                                    attrs: { value: t.numbers.bugs },
                                  })
                                : e._e(),
                            ],
                            1,
                          ),
                          i(
                            "div",
                            {
                              staticClass: "container container--row",
                              class: {
                                "justify-end": "left" == t.direction,
                                "justify-start": "right" == !t.direction,
                              },
                            },
                            [
                              i("p", { staticClass: "text" }, [e._v("Фич придумано:")]),
                              t.visible
                                ? i("AnimatedNumber", {
                                    attrs: { value: t.numbers.features },
                                  })
                                : e._e(),
                            ],
                            1,
                          ),
                          i(
                            "div",
                            {
                              staticClass: "container container--row",
                              class: {
                                "justify-end": "left" == t.direction,
                                "justify-start": "right" == !t.direction,
                              },
                            },
                            [
                              i("p", { staticClass: "text" }, [
                                e._v("Чашек кофе испито:"),
                              ]),
                              t.visible
                                ? i("AnimatedNumber", {
                                    attrs: { value: t.numbers.coffee },
                                  })
                                : e._e(),
                            ],
                            1,
                          ),
                        ],
                      );
                    }),
                  ],
                  2,
                ),
              ],
              1,
            ),
          ],
        );
      },
      B = [],
      F =
        (i("7db0"),
        function() {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("transition", { attrs: { name: "fade" } }, [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.isVisible,
                    expression: "isVisible",
                  },
                ],
                staticClass: "timestamp",
                class: { "timestamp--left": e.left, "timestamp--right": !e.left },
              },
              [
                i("div", { staticClass: "timestamp__content" }, [
                  i("p", { staticClass: "text text--bold" }, [e._v(e._s(e.title))]),
                  i("p", { staticClass: "text" }, [e._v(" " + e._s(e.content) + " ")]),
                  i(
                    "div",
                    { staticClass: "container container--column" },
                    [e._t("default")],
                    2,
                  ),
                ]),
              ],
            ),
          ]);
        }),
      J = [],
      D =
        (i("a9e3"),
        {
          name: "Timestamp",
          data: function() {
            return { isVisible: !1 };
          },
          props: {
            title: { type: String, default: "Title" },
            content: { type: String, default: "Lorem ipsum lorem ipsum lorem ipsum" },
            visibilityTimeout: { type: Number, default: 2e3 },
            left: { type: Boolean, default: !1 },
          },
          mounted: function() {
            var e = this;
            setTimeout(function() {
              (e.isVisible = !0), e.$emit("rendered");
            }, this.visibilityTimeout);
          },
        }),
      W = D,
      K = (i("b10e"), Object(r["a"])(W, F, J, !1, null, "4afe04c0", null)),
      Q = K.exports,
      z = function() {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("p", { staticClass: "text" }, [e._v(e._s(e.animatedNumber))]);
      },
      X = [],
      Z = (i("b680"), i("cffa")),
      ee = {
        name: "AnimatedNumber",
        data: function() {
          return { number: 0, tweenedNumber: 0 };
        },
        props: { value: { type: Number, default: 0 } },
        mounted: function() {
          this.number = this.value;
        },
        computed: {
          animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
          },
        },
        watch: {
          number: function(e) {
            Z["a"].to(this.$data, { duration: 2.5, tweenedNumber: e });
          },
        },
      },
      te = ee,
      ie = Object(r["a"])(te, z, X, !1, null, null, null),
      ne = ie.exports,
      ae = {
        name: "Roadmap",
        data: function() {
          return {
            state: { direction: null, mayScroll: !1, activatedPoints: 0 },
            visibility: { line: !0, page: !0 },
            points: [
              {
                id: 0,
                title: "12.2019",
                content: "Выбор стека. Индикация состояния комплекта",
                direction: "left",
                visible: !1,
                number: 1500,
                timeout: 1500,
                numbers: { bugs: 25, features: 2, coffee: 127 },
              },
              {
                id: 1,
                title: "01.2020",
                content: "Модуль аналитики. Своя библиотека гистограмм",
                direction: "right",
                visible: !1,
                number: 1500,
                timeout: 2e3,
                numbers: { bugs: 65, features: 14, coffee: 450 },
              },
              {
                id: 2,
                title: "03.2020",
                content: "Уникальный выставочный макет. FLISR",
                direction: "left",
                visible: !1,
                number: 1500,
                timeout: 2500,
                numbers: { bugs: 89, features: 23, coffee: 874 },
              },
              {
                id: 3,
                title: "04.2020",
                content: "Удаленка. Увеличение эффективности",
                direction: "right",
                visible: !1,
                number: 1500,
                timeout: 3e3,
                numbers: { bugs: 250, features: 35, coffee: 1157 },
              },
              {
                id: 4,
                title: "17.02.2022",
                content: "text2 text 2tex2t",
                direction: "left",
                visible: !1,
                number: 1500,
                timeout: 3500,
                numbers: { bugs: 545, features: 187, coffee: 2345 },
              },
              {
                id: 5,
                title: "17.02.2023",
                content: "text2 text 2tex2t",
                direction: "right",
                visible: !1,
                timeout: 4e3,
                numbers: { bugs: 945, features: 450, coffee: 4122 },
              },
              {
                id: 6,
                title: "17.02.3721",
                content: "text2 text 2tex2t",
                direction: "left",
                visible: !1,
                timeout: 4500,
                numbers: {
                  bugs: 657785435,
                  features: 324600455,
                  coffee: 32460657785436547e47,
                },
              },
            ],
          };
        },
        components: { Timestamp: Q, AnimatedNumber: ne },
        methods: {
          activatePoint: function(e) {
            var t = this.points.find(function(t) {
              return t.id == e;
            });
            (t.visible = !0), this.state.activatedPoints++;
          },
          pageAppeared: function() {
            console.log("appeared"), (this.visibility.line = !0);
          },
          pageLeaved: function() {
            "down" == this.state.direction
              ? this.$router.push({ name: "intro" })
              : this.$router.push({ name: "stack" });
          },
          wheelHandler: function(e) {
            var t = e.deltaY < 0 ? "up" : "down";
            this.state.mayScroll &&
              ((this.state.direction = "down" == t ? "down" : "up"),
              (this.visibility.page = !1),
              (this.state.mayScroll = !1));
          },
        },
        watch: {
          state: {
            deep: !0,
            handler: function(e) {
              e.activatedPoints == this.points.length && (this.state.mayScroll = !0);
            },
          },
        },
      },
      se = ae,
      re = (i("855a"), Object(r["a"])(se, q, B, !1, null, "34b353f4", null)),
      oe = re.exports;
    n["a"].use(u["a"]);
    var ce = [
        { path: "/", name: "intro", component: b },
        { path: "/greeting", name: "greeting", component: L },
        { path: "/about", name: "about", component: S },
        { path: "/stack", name: "stack", component: R },
        { path: "/roadmap", name: "roadmap", component: oe },
      ],
      le = new u["a"]({ base: "/my-page/", routes: ce }),
      ue = le,
      de = i("2f62");
    n["a"].use(de["a"]);
    var pe = new de["a"].Store({ state: {}, mutations: {}, actions: {}, modules: {} }),
      fe = i("0086"),
      me = i.n(fe);
    n["a"].use(me.a),
      (n["a"].config.productionTip = !1),
      new n["a"]({
        router: ue,
        store: pe,
        render: function(e) {
          return e(l);
        },
      }).$mount("#app");
  },
  "588e": function(e, t, i) {},
  5937: function(e, t, i) {
    "use strict";
    i("f86f");
  },
  "5d88": function(e, t, i) {
    var n = {
      "./bootstrap.png": "2c83",
      "./csharp.png": "dfa2",
      "./css.png": "c37b",
      "./git.png": "ce40",
      "./gulp.png": "b6ee",
      "./html.png": "1f87",
      "./jquery.png": "9022",
      "./js.png": "04cc",
      "./mysql.png": "ad33",
      "./node.png": "dced",
      "./react.png": "e8ee",
      "./stylus.png": "c03b",
      "./vue.png": "3390",
      "./vuenative.png": "7194",
      "./vuetify.png": "7bca",
      "./webpack.png": "20ff",
    };
    function a(e) {
      var t = s(e);
      return i(t);
    }
    function s(e) {
      if (!i.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (a.keys = function() {
      return Object.keys(n);
    }),
      (a.resolve = s),
      (e.exports = a),
      (a.id = "5d88");
  },
  "647b": function(e, t, i) {},
  7194: function(e, t, i) {
    e.exports = i.p + "img/vuenative.fe5127f8.png";
  },
  "7bca": function(e, t, i) {
    e.exports = i.p + "img/vuetify.3d2446e3.png";
  },
  "7faf": function(e, t, i) {
    "use strict";
    i("b8ff");
  },
  "855a": function(e, t, i) {
    "use strict";
    i("4be0");
  },
  9022: function(e, t, i) {
    e.exports = i.p + "img/jquery.3a5cb045.png";
  },
  a680: function(e, t, i) {
    e.exports = i.p + "img/caesar_non_glitched.8109558f.png";
  },
  ac6b: function(e, t, i) {
    "use strict";
    i("647b");
  },
  ad33: function(e, t, i) {
    e.exports = i.p + "img/mysql.65a5c4c6.png";
  },
  b10e: function(e, t, i) {
    "use strict";
    i("4a46");
  },
  b30d: function(e, t, i) {
    "use strict";
    i("1654");
  },
  b6ee: function(e, t, i) {
    e.exports = i.p + "img/gulp.b706c388.png";
  },
  b8ff: function(e, t, i) {},
  c03b: function(e, t, i) {
    e.exports = i.p + "img/stylus.9864b98f.png";
  },
  c37b: function(e, t, i) {
    e.exports = i.p + "img/css.5810693e.png";
  },
  ce40: function(e, t, i) {
    e.exports = i.p + "img/git.061bb842.png";
  },
  dced: function(e, t, i) {
    e.exports = i.p + "img/node.b900265d.png";
  },
  dfa2: function(e, t, i) {
    e.exports = i.p + "img/csharp.76b468da.png";
  },
  e8ee: function(e, t, i) {
    e.exports = i.p + "img/react.1f644180.png";
  },
  ef80: function(e, t, i) {
    e.exports = i.p + "img/scroll.2e0605ec.gif";
  },
  f57e: function(e, t, i) {
    "use strict";
    i("588e");
  },
  f86f: function(e, t, i) {},
});
//# sourceMappingURL=app.5848169a.js.map
