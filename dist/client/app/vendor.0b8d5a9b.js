!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document)throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
  function c(a) {
    var b = !!a && "length" in a && a.length, c = fa.type(a);
    return "function" === c || fa.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  function d(a, b, c) {
    if (fa.isFunction(b))return fa.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType)return fa.grep(a, function (a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (pa.test(b))return fa.filter(b, a, c);
      b = fa.filter(b, a)
    }
    return fa.grep(a, function (a) {
      return _.call(b, a) > -1 !== c
    })
  }

  function e(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType;);
    return a
  }

  function f(a) {
    var b = {};
    return fa.each(a.match(va) || [], function (a, c) {
      b[c] = !0
    }), b
  }

  function g() {
    X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), fa.ready()
  }

  function h() {
    this.expando = fa.expando + h.uid++
  }

  function i(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(Ca, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ba.test(c) ? fa.parseJSON(c) : c
      } catch (e) {
      }
      Aa.set(a, b, c)
    } else c = void 0;
    return c
  }

  function j(a, b, c, d) {
    var e, f = 1, g = 20, h = d ? function () {
      return d.cur()
    } : function () {
      return fa.css(a, b, "")
    }, i = h(), j = c && c[3] || (fa.cssNumber[b] ? "" : "px"), k = (fa.cssNumber[b] || "px" !== j && +i) && Ea.exec(fa.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, fa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }

  function k(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], c) : c
  }

  function l(a, b) {
    for (var c = 0, d = a.length; d > c; c++)za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"))
  }

  function m(a, b, c, d, e) {
    for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++)if (f = a[p], f || 0 === f)if ("object" === fa.type(f))fa.merge(o, f.nodeType ? [f] : f); else if (La.test(f)) {
      for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || ["", ""])[1].toLowerCase(), i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--;)g = g.lastChild;
      fa.merge(o, g.childNodes), g = n.firstChild, g.textContent = ""
    } else o.push(b.createTextNode(f));
    for (n.textContent = "", p = 0; f = o[p++];)if (d && fa.inArray(f, d) > -1)e && e.push(f); else if (j = fa.contains(f.ownerDocument, f), g = k(n.appendChild(f), "script"), j && l(g), c)for (m = 0; f = g[m++];)Ja.test(f.type || "") && c.push(f);
    return n
  }

  function n() {
    return !0
  }

  function o() {
    return !1
  }

  function p() {
    try {
      return X.activeElement
    } catch (a) {
    }
  }

  function q(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b)q(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1)e = o; else if (!e)return this;
    return 1 === f && (g = e, e = function (a) {
      return fa().off(a), g.apply(this, arguments)
    }, e.guid = g.guid || (g.guid = fa.guid++)), a.each(function () {
      fa.event.add(this, b, e, d, c)
    })
  }

  function r(a, b) {
    return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
  }

  function s(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function t(a) {
    var b = Sa.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function u(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (za.hasData(a) && (f = za.access(a), g = za.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)for (c = 0, d = j[e].length; d > c; c++)fa.event.add(b, e, j[e][c])
      }
      Aa.hasData(a) && (h = Aa.access(a), i = fa.extend({}, h), Aa.set(b, i))
    }
  }

  function v(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && Ha.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
  }

  function w(a, b, c, d) {
    b = Z.apply([], b);
    var e, f, g, h, i, j, l = 0, n = a.length, o = n - 1, p = b[0], q = fa.isFunction(p);
    if (q || n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p))return a.each(function (e) {
      var f = a.eq(e);
      q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d)
    });
    if (n && (e = m(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++)i = e, l !== o && (i = fa.clone(i, !0, !0), h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
      if (h)for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++)i = g[l], Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")))
    }
    return a
  }

  function x(a, b, c) {
    for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || fa.cleanData(k(d)), d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
    return a
  }

  function y(a, b) {
    var c = fa(b.createElement(a)).appendTo(b.body), d = fa.css(c[0], "display");
    return c.detach(), d
  }

  function z(a) {
    var b = X, c = Va[a];
    return c || (c = y(a, b), "none" !== c && c || (Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ua[0].contentDocument, b.write(), b.close(), c = y(a, b), Ua.detach()), Va[a] = c), c
  }

  function A(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ya(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function B(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  function C(a) {
    if (a in db)return a;
    for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--;)if (a = cb[c] + b, a in db)return a
  }

  function D(a, b, c) {
    var d = Ea.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
  }

  function E(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += fa.css(a, c + Fa[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Fa[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
    return g
  }

  function F(b, c, d) {
    var e = !0, f = "width" === c ? b.offsetWidth : b.offsetHeight, g = Ya(b), h = "border-box" === fa.css(b, "boxSizing", !1, g);
    if (X.msFullscreenElement && a.top !== a && b.getClientRects().length && (f = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= f || null == f) {
      if (f = A(b, c, g), (0 > f || null == f) && (f = b.style[c]), Xa.test(f))return f;
      e = h && (da.boxSizingReliable() || f === b.style[c]), f = parseFloat(f) || 0
    }
    return f + E(b, c, d || (h ? "border" : "content"), e, g) + "px"
  }

  function G(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = za.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName)))) : (e = Ga(d), "none" === c && e || za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
    for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function H(a, b, c, d, e) {
    return new H.prototype.init(a, b, c, d, e)
  }

  function I() {
    return a.setTimeout(function () {
      eb = void 0
    }), eb = fa.now()
  }

  function J(a, b) {
    var c, d = 0, e = {height: a};
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = Fa[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function K(a, b, c) {
    for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
  }

  function L(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ga(a), p = za.get(a, "fxshow");
    c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i()
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
      n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
    }));
    for (d in b)if (e = b[d], gb.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
        if ("show" !== e || !p || void 0 === p[d])continue;
        o = !0
      }
      m[d] = p && p[d] || fa.style(a, d)
    } else j = void 0;
    if (fa.isEmptyObject(m))"inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j); else {
      p ? "hidden" in p && (o = p.hidden) : p = za.access(a, "fxshow", {}), f && (p.hidden = !o), o ? fa(a).show() : l.done(function () {
        fa(a).hide()
      }), l.done(function () {
        var b;
        za.remove(a, "fxshow");
        for (b in m)fa.style(a, b, m[b])
      });
      for (d in m)g = K(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function M(a, b) {
    var c, d, e, f, g;
    for (c in a)if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
      f = g.expand(f), delete a[d];
      for (c in f)c in a || (a[c] = f[c], b[c] = e)
    } else b[d] = e
  }

  function N(a, b, c) {
    var d, e, f = 0, g = N.prefilters.length, h = fa.Deferred().always(function () {
      delete i.elem
    }), i = function () {
      if (e)return !1;
      for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
    }, j = h.promise({
      elem: a,
      props: fa.extend({}, b),
      opts: fa.extend(!0, {specialEasing: {}, easing: fa.easing._default}, c),
      originalProperties: b,
      originalOptions: c,
      startTime: eb || I(),
      duration: c.duration,
      tweens: [],
      createTween: function (b, c) {
        var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d
      },
      stop: function (b) {
        var c = 0, d = b ? j.tweens.length : 0;
        if (e)return this;
        for (e = !0; d > c; c++)j.tweens[c].run(1);
        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
      }
    }), k = j.props;
    for (M(k, j.opts.specialEasing); g > f; f++)if (d = N.prefilters[f].call(j, a, k, j.opts))return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), d;
    return fa.map(k, K, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  function O(a) {
    return a.getAttribute && a.getAttribute("class") || ""
  }

  function P(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0, f = b.toLowerCase().match(va) || [];
      if (fa.isFunction(c))for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Q(a, b, c, d) {
    function e(h) {
      var i;
      return f[h] = !0, fa.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
      }), i
    }

    var f = {}, g = a === zb;
    return e(b.dataTypes[0]) || !f["*"] && e("*")
  }

  function R(a, b) {
    var c, d, e = fa.ajaxSettings.flatOptions || {};
    for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && fa.extend(!0, a, d), a
  }

  function S(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)for (e in h)if (h[e] && h[e].test(d)) {
      i.unshift(e);
      break
    }
    if (i[0] in c)f = i[0]; else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function T(a, b, c, d) {
    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
    if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break
      }
      if (g !== !0)if (g && a["throws"])b = g(b); else try {
        b = g(b)
      } catch (l) {
        return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
      }
    }
    return {state: "success", data: b}
  }

  function U(a, b, c, d) {
    var e;
    if (fa.isArray(b))fa.each(b, function (b, e) {
      c || Db.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
    }); else if (c || "object" !== fa.type(b))d(a, b); else for (e in b)U(a + "[" + e + "]", b[e], c, d)
  }

  function V(a) {
    return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }

  var W = [], X = a.document, Y = W.slice, Z = W.concat, $ = W.push, _ = W.indexOf, aa = {}, ba = aa.toString, ca = aa.hasOwnProperty, da = {}, ea = "2.2.0", fa = function (a, b) {
    return new fa.fn.init(a, b)
  }, ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ha = /^-ms-/, ia = /-([\da-z])/gi, ja = function (a, b) {
    return b.toUpperCase()
  };
  fa.fn = fa.prototype = {
    jquery: ea, constructor: fa, selector: "", length: 0, toArray: function () {
      return Y.call(this)
    }, get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
    }, pushStack: function (a) {
      var b = fa.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    }, each: function (a) {
      return fa.each(this, a)
    }, map: function (a) {
      return this.pushStack(fa.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    }, slice: function () {
      return this.pushStack(Y.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (a) {
      var b = this.length, c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: $, sort: W.sort, splice: W.splice
  }, fa.extend = fa.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d))) ? (e ? (e = !1, f = c && fa.isArray(c) ? c : []) : f = c && fa.isPlainObject(c) ? c : {}, g[b] = fa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, fa.extend({
    expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw new Error(a)
    }, noop: function () {
    }, isFunction: function (a) {
      return "function" === fa.type(a)
    }, isArray: Array.isArray, isWindow: function (a) {
      return null != a && a === a.window
    }, isNumeric: function (a) {
      var b = a && a.toString();
      return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0
    }, isPlainObject: function (a) {
      return "object" !== fa.type(a) || a.nodeType || fa.isWindow(a) ? !1 : a.constructor && !ca.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    }, isEmptyObject: function (a) {
      var b;
      for (b in a)return !1;
      return !0
    }, type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a
    }, globalEval: function (a) {
      var b, c = eval;
      a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = X.createElement("script"), b.text = a, X.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    }, camelCase: function (a) {
      return a.replace(ha, "ms-").replace(ia, ja)
    }, nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (a, b) {
      var d, e = 0;
      if (c(a))for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++); else for (e in a)if (b.call(a[e], e, a[e]) === !1)break;
      return a
    }, trim: function (a) {
      return null == a ? "" : (a + "").replace(ga, "")
    }, makeArray: function (a, b) {
      var d = b || [];
      return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)), d
    }, inArray: function (a, b, c) {
      return null == b ? -1 : _.call(b, a, c)
    }, merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
      return a.length = e, a
    }, grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    }, map: function (a, b, d) {
      var e, f, g = 0, h = [];
      if (c(a))for (e = a.length; e > g; g++)f = b(a[g], g, d), null != f && h.push(f); else for (g in a)f = b(a[g], g, d), null != f && h.push(f);
      return Z.apply([], h)
    }, guid: 1, proxy: function (a, b) {
      var c, d, e;
      return "string" == typeof b && (c = a[b], b = a, a = c), fa.isFunction(a) ? (d = Y.call(arguments, 2), e = function () {
        return a.apply(b || this, d.concat(Y.call(arguments)))
      }, e.guid = a.guid = a.guid || fa.guid++, e) : void 0
    }, now: Date.now, support: da
  }), "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]), fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    aa["[object " + b + "]"] = b.toLowerCase()
  });
  var ka = function (a) {
    function b(a, b, c, d) {
      var e, f, g, h, i, j, l, n, o = b && b.ownerDocument, p = b ? b.nodeType : 9;
      if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p)return c;
      if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
        if (11 !== p && (j = ra.exec(a)))if (e = j[1]) {
          if (9 === p) {
            if (!(g = b.getElementById(e)))return c;
            if (g.id === e)return c.push(g), c
          } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e)return c.push(g), c
        } else {
          if (j[2])return $.apply(c, b.getElementsByTagName(a)), c;
          if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName)return $.apply(c, b.getElementsByClassName(e)), c
        }
        if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
          if (1 !== p)o = b, n = a; else if ("object" !== b.nodeName.toLowerCase()) {
            for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;)l[f] = i + " " + m(l[f]);
            n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
          }
          if (n)try {
            return $.apply(c, o.querySelectorAll(n)), c
          } catch (q) {
          } finally {
            h === N && b.removeAttribute("id")
          }
        }
      }
      return B(a.replace(ha, "$1"), b, c, d)
    }

    function c() {
      function a(c, d) {
        return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
      }

      var b = [];
      return a
    }

    function d(a) {
      return a[N] = !0, a
    }

    function e(a) {
      var b = G.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function f(a, b) {
      for (var c = a.split("|"), d = c.length; d--;)w.attrHandle[c[d]] = b
    }

    function g(a, b) {
      var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
      if (d)return d;
      if (c)for (; c = c.nextSibling;)if (c === b)return -1;
      return a ? 1 : -1
    }

    function h(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function i(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function j(a) {
      return d(function (b) {
        return b = +b, d(function (c, d) {
          for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function k(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }

    function l() {
    }

    function m(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
      return d
    }

    function n(a, b, c) {
      var d = b.dir, e = c && "parentNode" === d, f = Q++;
      return b.first ? function (b, c, f) {
        for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
      } : function (b, c, g) {
        var h, i, j, k = [P, f];
        if (g) {
          for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return !0
        } else for (; b = b[d];)if (1 === b.nodeType || e) {
          if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f)return k[2] = h[2];
          if (i[d] = k, k[2] = a(b, c, g))return !0
        }
      }
    }

    function o(a) {
      return a.length > 1 ? function (b, c, d) {
        for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
        return !0
      } : a[0]
    }

    function p(a, c, d) {
      for (var e = 0, f = c.length; f > e; e++)b(a, c[e], d);
      return d
    }

    function q(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function r(a, b, c, e, f, g) {
      return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
        var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
        if (c && c(s, t, h, i), e)for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
        if (d) {
          if (f || a) {
            if (f) {
              for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
              f(null, t = [], j, i)
            }
            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
          }
        } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
      })
    }

    function s(a) {
      for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
        return a === b
      }, g, !0), j = n(function (a) {
        return aa(b, a) > -1
      }, g, !0), k = [function (a, c, d) {
        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
        return b = null, e
      }]; e > h; h++)if (c = w.relative[a[h].type])k = [n(o(k), c)]; else {
        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
          for (d = ++h; e > d && !w.relative[a[d].type]; d++);
          return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
        }
        k.push(c)
      }
      return o(k)
    }

    function t(a, c) {
      var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
        var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
        for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
          if (f && k) {
            for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];)if (m(k, g || G, h)) {
              i.push(k);
              break
            }
            j && (P = u)
          }
          e && ((k = !m && k) && n--, d && p.push(k))
        }
        if (n += o, e && o !== n) {
          for (l = 0; m = c[l++];)m(p, r, g, h);
          if (d) {
            if (n > 0)for (; o--;)p[o] || r[o] || (r[o] = Y.call(i));
            r = q(r)
          }
          $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
        }
        return j && (P = u, C = s), p
      };
      return e ? d(g) : g
    }

    var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
      return a === b && (E = !0), 0
    }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function (a, b) {
      for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
      return -1
    }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]", fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)", ga = new RegExp(ca + "+", "g"), ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ia = new RegExp("^" + ca + "*," + ca + "*"), ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), la = new RegExp(fa), ma = new RegExp("^" + da + "$"), na = {
      ID: new RegExp("^#(" + da + ")"),
      CLASS: new RegExp("^\\.(" + da + ")"),
      TAG: new RegExp("^(" + da + "|[*])"),
      ATTR: new RegExp("^" + ea),
      PSEUDO: new RegExp("^" + fa),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + ba + ")$", "i"),
      needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
    }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/, ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, ta = /'|\\/g, ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), va = function (a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
    }, wa = function () {
      F()
    };
    try {
      $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
    } catch (xa) {
      $ = {
        apply: X.length ? function (a, b) {
          Z.apply(a, _.call(b))
        } : function (a, b) {
          for (var c = a.length, d = 0; a[c++] = b[d++];);
          a.length = c - 1
        }
      }
    }
    v = b.support = {}, y = b.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, F = b.setDocument = function (a) {
      var b, c, d = a ? a.ownerDocument || a : O;
      return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), v.getElementsByTagName = e(function (a) {
        return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length
      }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function (a) {
        return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length
      }), v.getById ? (w.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && I) {
          var c = b.getElementById(a);
          return c ? [c] : []
        }
      }, w.filter.ID = function (a) {
        var b = a.replace(ua, va);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }) : (delete w.find.ID, w.filter.ID = function (a) {
        var b = a.replace(ua, va);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
      } : function (a, b) {
        var c, d = [], e = 0, f = b.getElementsByTagName(a);
        if ("*" === a) {
          for (; c = f[e++];)1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
          return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0
        }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function (a) {
        H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
      }), e(function (a) {
        var b = G.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
      })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
        v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa)
      }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)for (; b = b.parentNode;)if (b === a)return !0;
        return !1
      }, U = b ? function (a, b) {
        if (a === b)return E = !0, 0;
        var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
      } : function (a, b) {
        if (a === b)return E = !0, 0;
        var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
        if (!e || !f)return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
        if (e === f)return g(a, b);
        for (c = a; c = c.parentNode;)h.unshift(c);
        for (c = b; c = c.parentNode;)i.unshift(c);
        for (; h[d] === i[d];)d++;
        return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
      }, G) : G
    }, b.matches = function (a, c) {
      return b(a, null, null, c)
    }, b.matchesSelector = function (a, c) {
      if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c)))try {
        var d = L.call(a, c);
        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
      } catch (e) {
      }
      return b(c, G, null, [a]).length > 0
    }, b.contains = function (a, b) {
      return (a.ownerDocument || a) !== G && F(a), M(a, b)
    }, b.attr = function (a, b) {
      (a.ownerDocument || a) !== G && F(a);
      var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
      return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }, b.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, b.uniqueSort = function (a) {
      var b, c = [], d = 0, e = 0;
      if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
        for (; b = a[e++];)b === a[e] && (d = c.push(e));
        for (; d--;)a.splice(c[d], 1)
      }
      return D = null, a
    }, x = b.getText = function (a) {
      var b, c = "", d = 0, e = a.nodeType;
      if (e) {
        if (1 === e || 9 === e || 11 === e) {
          if ("string" == typeof a.textContent)return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling)c += x(a)
        } else if (3 === e || 4 === e)return a.nodeValue
      } else for (; b = a[d++];)c += x(b);
      return c
    }, w = b.selectors = {
      cacheLength: 50,
      createPseudo: d,
      match: na,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
        }, PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(ua, va).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        }, CLASS: function (a) {
          var b = R[a + " "];
          return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
              return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
            })
        }, ATTR: function (a, c, d) {
          return function (e) {
            var f = b.attr(e, a);
            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
          }
        }, CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
            if (q) {
              if (f) {
                for (; p;) {
                  for (m = b; m = m[p];)if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)if (1 === m.nodeType && ++t && m === b) {
                  k[a] = [P, n, t];
                  break
                }
              } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1)for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
              return t -= e, t === d || t % d === 0 && t / d >= 0
            }
          }
        }, PSEUDO: function (a, c) {
          var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
          return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
            for (var d, e = f(a, c), g = e.length; g--;)d = aa(a, e[g]), a[d] = !(b[d] = e[g])
          }) : function (a) {
            return f(a, 0, e)
          }) : f
        }
      },
      pseudos: {
        not: d(function (a) {
          var b = [], c = [], e = A(a.replace(ha, "$1"));
          return e[N] ? d(function (a, b, c, d) {
            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, d, f) {
            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
          }
        }), has: d(function (a) {
          return function (c) {
            return b(a, c).length > 0
          }
        }), contains: d(function (a) {
          return a = a.replace(ua, va), function (b) {
            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
          }
        }), lang: d(function (a) {
          return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(), function (b) {
            var c;
            do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
            return !1
          }
        }), target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        }, root: function (a) {
          return a === H
        }, focus: function (a) {
          return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        }, enabled: function (a) {
          return a.disabled === !1
        }, disabled: function (a) {
          return a.disabled === !0
        }, checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        }, selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
          return !0
        }, parent: function (a) {
          return !w.pseudos.empty(a)
        }, header: function (a) {
          return pa.test(a.nodeName)
        }, input: function (a) {
          return oa.test(a.nodeName)
        }, button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        }, text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        }, first: j(function () {
          return [0]
        }), last: j(function (a, b) {
          return [b - 1]
        }), eq: j(function (a, b, c) {
          return [0 > c ? c + b : c]
        }), even: j(function (a, b) {
          for (var c = 0; b > c; c += 2)a.push(c);
          return a
        }), odd: j(function (a, b) {
          for (var c = 1; b > c; c += 2)a.push(c);
          return a;
        }), lt: j(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
          return a
        }), gt: j(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
          return a
        })
      }
    }, w.pseudos.nth = w.pseudos.eq;
    for (u in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})w.pseudos[u] = h(u);
    for (u in{submit: !0, reset: !0})w.pseudos[u] = i(u);
    return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
      var d, e, f, g, h, i, j, k = S[a + " "];
      if (k)return c ? 0 : k.slice(0);
      for (h = a, i = [], j = w.preFilter; h;) {
        (!d || (e = ia.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
          value: d,
          type: e[0].replace(ha, " ")
        }), h = h.slice(d.length));
        for (g in w.filter)!(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
          value: d,
          type: g,
          matches: e
        }), h = h.slice(d.length));
        if (!d)break
      }
      return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
    }, A = b.compile = function (a, b) {
      var c, d = [], e = [], f = T[a + " "];
      if (!f) {
        for (b || (b = z(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
        f = T(a, t(e, d)), f.selector = a
      }
      return f
    }, B = b.select = function (a, b, c, d) {
      var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
      if (c = c || [], 1 === l.length) {
        if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
          if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b)return c;
          j && (b = b.parentNode), a = a.slice(f.shift().value.length)
        }
        for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
          if (f.splice(e, 1), a = d.length && m(f), !a)return $.apply(c, d), c;
          break
        }
      }
      return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
    }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
      return 1 & a.compareDocumentPosition(G.createElement("div"))
    }), e(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || f("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), v.attributes && e(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || f("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), e(function (a) {
      return null == a.getAttribute("disabled")
    }) || f(ba, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), b
  }(a);
  fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.uniqueSort = fa.unique = ka.uniqueSort, fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
  var la = function (a, b, c) {
    for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
      if (e && fa(a).is(c))break;
      d.push(a)
    }
    return d
  }, ma = function (a, b) {
    for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
    return c
  }, na = fa.expr.match.needsContext, oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, pa = /^.[^:#\[\.,]*$/;
  fa.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, fa.fn.extend({
    find: function (a) {
      var b, c = this.length, d = [], e = this;
      if ("string" != typeof a)return this.pushStack(fa(a).filter(function () {
        for (b = 0; c > b; b++)if (fa.contains(e[b], this))return !0
      }));
      for (b = 0; c > b; b++)fa.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? fa.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    }, filter: function (a) {
      return this.pushStack(d(this, a || [], !1))
    }, not: function (a) {
      return this.pushStack(d(this, a || [], !0))
    }, is: function (a) {
      return !!d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length
    }
  });
  var qa, ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, sa = fa.fn.init = function (a, b, c) {
    var d, e;
    if (!a)return this;
    if (c = c || qa, "string" == typeof a) {
      if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ra.exec(a), !d || !d[1] && b)return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
      if (d[1]) {
        if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), oa.test(d[1]) && fa.isPlainObject(b))for (d in b)fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
        return this
      }
      return e = X.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = X, this.selector = a, this
    }
    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
  };
  sa.prototype = fa.fn, qa = fa(X);
  var ta = /^(?:parents|prev(?:Until|All))/, ua = {children: !0, contents: !0, next: !0, prev: !0};
  fa.fn.extend({
    has: function (a) {
      var b = fa(a, this), c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++)if (fa.contains(this, b[a]))return !0
      })
    }, closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
        f.push(c);
        break
      }
      return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f)
    }, index: function (a) {
      return a ? "string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (a, b) {
      return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))))
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  }), fa.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    }, parents: function (a) {
      return la(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
      return la(a, "parentNode", c)
    }, next: function (a) {
      return e(a, "nextSibling")
    }, prev: function (a) {
      return e(a, "previousSibling")
    }, nextAll: function (a) {
      return la(a, "nextSibling")
    }, prevAll: function (a) {
      return la(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
      return la(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
      return la(a, "previousSibling", c)
    }, siblings: function (a) {
      return ma((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
      return ma(a.firstChild)
    }, contents: function (a) {
      return a.contentDocument || fa.merge([], a.childNodes)
    }
  }, function (a, b) {
    fa.fn[a] = function (c, d) {
      var e = fa.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var va = /\S+/g;
  fa.Callbacks = function (a) {
    a = "string" == typeof a ? f(a) : fa.extend({}, a);
    var b, c, d, e, g = [], h = [], i = -1, j = function () {
      for (e = a.once, d = b = !0; h.length; i = -1)for (c = h.shift(); ++i < g.length;)g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
      a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
    }, k = {
      add: function () {
        return g && (c && !b && (i = g.length - 1, h.push(c)), function d(b) {
          fa.each(b, function (b, c) {
            fa.isFunction(c) ? a.unique && k.has(c) || g.push(c) : c && c.length && "string" !== fa.type(c) && d(c)
          })
        }(arguments), c && !b && j()), this
      }, remove: function () {
        return fa.each(arguments, function (a, b) {
          for (var c; (c = fa.inArray(b, g, c)) > -1;)g.splice(c, 1), i >= c && i--
        }), this
      }, has: function (a) {
        return a ? fa.inArray(a, g) > -1 : g.length > 0
      }, empty: function () {
        return g && (g = []), this
      }, disable: function () {
        return e = h = [], g = c = "", this
      }, disabled: function () {
        return !g
      }, lock: function () {
        return e = h = [], c || (g = c = ""), this
      }, locked: function () {
        return !!e
      }, fireWith: function (a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
      }, fire: function () {
        return k.fireWith(this, arguments), this
      }, fired: function () {
        return !!d
      }
    };
    return k
  }, fa.extend({
    Deferred: function (a) {
      var b = [["resolve", "done", fa.Callbacks("once memory"), "resolved"], ["reject", "fail", fa.Callbacks("once memory"), "rejected"], ["notify", "progress", fa.Callbacks("memory")]], c = "pending", d = {
        state: function () {
          return c
        }, always: function () {
          return e.done(arguments).fail(arguments), this
        }, then: function () {
          var a = arguments;
          return fa.Deferred(function (c) {
            fa.each(b, function (b, f) {
              var g = fa.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
              })
            }), a = null
          }).promise()
        }, promise: function (a) {
          return null != a ? fa.extend(a, d) : d
        }
      }, e = {};
      return d.pipe = d.then, fa.each(b, function (a, f) {
        var g = f[2], h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    }, when: function (a) {
      var b, c, d, e = 0, f = Y.call(arguments), g = f.length, h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fa.Deferred(), j = function (a, c, d) {
        return function (e) {
          c[a] = this, d[a] = arguments.length > 1 ? Y.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
        }
      };
      if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
      return h || i.resolveWith(d, f), i.promise()
    }
  });
  var wa;
  fa.fn.ready = function (a) {
    return fa.ready.promise().done(a), this
  }, fa.extend({
    isReady: !1, readyWait: 1, holdReady: function (a) {
      a ? fa.readyWait++ : fa.ready(!0)
    }, ready: function (a) {
      (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))))
    }
  }), fa.ready.promise = function (b) {
    return wa || (wa = fa.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))), wa.promise(b)
  }, fa.ready.promise();
  var xa = function (a, b, c, d, e, f, g) {
    var h = 0, i = a.length, j = null == c;
    if ("object" === fa.type(c)) {
      e = !0;
      for (h in c)xa(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
        return j.call(fa(a), c)
      })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  }, ya = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  };
  h.uid = 1, h.prototype = {
    register: function (a, b) {
      var c = b || {};
      return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
        value: c,
        writable: !0,
        configurable: !0
      }), a[this.expando]
    }, cache: function (a) {
      if (!ya(a))return {};
      var b = a[this.expando];
      return b || (b = {}, ya(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b
    }, set: function (a, b, c) {
      var d, e = this.cache(a);
      if ("string" == typeof b)e[b] = c; else for (d in b)e[d] = b[d];
      return e
    }, get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
    }, access: function (a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    }, remove: function (a, b) {
      var c, d, e, f = a[this.expando];
      if (void 0 !== f) {
        if (void 0 === b)this.register(a); else {
          fa.isArray(b) ? d = b.concat(b.map(fa.camelCase)) : (e = fa.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(va) || [])), c = d.length;
          for (; c--;)delete f[d[c]]
        }
        (void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
      }
    }, hasData: function (a) {
      var b = a[this.expando];
      return void 0 !== b && !fa.isEmptyObject(b)
    }
  };
  var za = new h, Aa = new h, Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ca = /[A-Z]/g;
  fa.extend({
    hasData: function (a) {
      return Aa.hasData(a) || za.hasData(a)
    }, data: function (a, b, c) {
      return Aa.access(a, b, c)
    }, removeData: function (a, b) {
      Aa.remove(a, b)
    }, _data: function (a, b, c) {
      return za.access(a, b, c)
    }, _removeData: function (a, b) {
      za.remove(a, b)
    }
  }), fa.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = Aa.get(f), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
          for (c = g.length; c--;)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d])));
          za.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function () {
        Aa.set(this, a)
      }) : xa(this, function (b) {
        var c, d;
        if (f && void 0 === b) {
          if (c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase()), void 0 !== c)return c;
          if (d = fa.camelCase(a), c = Aa.get(f, d), void 0 !== c)return c;
          if (c = i(f, d, void 0), void 0 !== c)return c
        } else d = fa.camelCase(a), this.each(function () {
          var c = Aa.get(this, d);
          Aa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    }, removeData: function (a) {
      return this.each(function () {
        Aa.remove(this, a)
      })
    }
  }), fa.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = za.get(a, b), c && (!d || fa.isArray(c) ? d = za.access(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue: function (a, b) {
      b = b || "fx";
      var c = fa.queue(a, b), d = c.length, e = c.shift(), f = fa._queueHooks(a, b), g = function () {
        fa.dequeue(a, b)
      };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return za.get(a, c) || za.access(a, c, {
          empty: fa.Callbacks("once memory").add(function () {
            za.remove(a, [b + "queue", c])
          })
        })
    }
  }), fa.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = fa.queue(this, a, b);
        fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
      })
    }, dequeue: function (a) {
      return this.each(function () {
        fa.dequeue(this, a)
      })
    }, clearQueue: function (a) {
      return this.queue(a || "fx", [])
    }, promise: function (a, b) {
      var c, d = 1, e = fa.Deferred(), f = this, g = this.length, h = function () {
        --d || e.resolveWith(f, [f])
      };
      for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)c = za.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"), Fa = ["Top", "Right", "Bottom", "Left"], Ga = function (a, b) {
    return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
  }, Ha = /^(?:checkbox|radio)$/i, Ia = /<([\w:-]+)/, Ja = /^$|\/(?:java|ecma)script/i, Ka = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  Ka.optgroup = Ka.option, Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead, Ka.th = Ka.td;
  var La = /<|&#?\w+;/;
  !function () {
    var a = X.createDocumentFragment(), b = a.appendChild(X.createElement("div")), c = X.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var Ma = /^key/, Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Oa = /^([^.]*)(?:\.(.+)|)/;
  fa.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = za.get(a);
      if (q)for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = fa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
        return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0
      }), b = (b || "").match(va) || [""], j = b.length; j--;)h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = fa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = fa.event.special[n] || {}, k = fa.extend({
        type: n,
        origType: p,
        data: d,
        handler: c,
        guid: c.guid,
        selector: e,
        needsContext: e && fa.expr.match.needsContext.test(e),
        namespace: o.join(".")
      }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), fa.event.global[n] = !0)
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = za.hasData(a) && za.get(a);
      if (q && (i = q.events)) {
        for (b = (b || "").match(va) || [""], j = b.length; j--;)if (h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
          for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
          g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
        } else for (n in i)fa.event.remove(a, n + b[j], c, d, !0);
        fa.isEmptyObject(i) && za.remove(a, "handle events")
      }
    },
    dispatch: function (a) {
      a = fa.event.fix(a);
      var b, c, d, e, f, g = [], h = Y.call(arguments), i = (za.get(this, "events") || {})[a.type] || [], j = fa.event.special[a.type] || {};
      if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
        for (g = fa.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();)for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.rnamespace || a.rnamespace.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
        return j.postDispatch && j.postDispatch.call(this, a), a.result
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))for (; i !== this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length), d[e] && d.push(f);
        d.length && g.push({elem: i, handlers: d})
      }
      return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || X, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    fix: function (a) {
      if (a[fa.expando])return a;
      var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
      for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
      return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          return this !== p() && this.focus ? (this.focus(), !1) : void 0
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === p() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0
        }, _default: function (a) {
          return fa.nodeName(a.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    }
  }, fa.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c)
  }, fa.Event = function (a, b) {
    return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? n : o) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
  }, fa.Event.prototype = {
    constructor: fa.Event,
    isDefaultPrevented: o,
    isPropagationStopped: o,
    isImmediatePropagationStopped: o,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = n, a && a.preventDefault()
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = n, a && a.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = n, a && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, fa.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    fa.event.special[a] = {
      delegateType: b, bindType: b, handle: function (a) {
        var c, d = this, e = a.relatedTarget, f = a.handleObj;
        return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), fa.fn.extend({
    on: function (a, b, c, d) {
      return q(this, a, b, c, d)
    }, one: function (a, b, c, d) {
      return q(this, a, b, c, d, 1)
    }, off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj)return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a)this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = o), this.each(function () {
        fa.event.remove(this, a, c, b)
      })
    }
  });
  var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Qa = /<script|<style|<link/i, Ra = /checked\s*(?:[^=]|=\s*.checked.)/i, Sa = /^true\/(.*)/, Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  fa.extend({
    htmlPrefilter: function (a) {
      return a.replace(Pa, "<$1></$2>")
    }, clone: function (a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0), i = fa.contains(a.ownerDocument, a);
      if (!(da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++)v(f[d], g[d]);
      if (b)if (c)for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++)u(f[d], g[d]); else u(a, h);
      return g = k(h, "script"), g.length > 0 && l(g, !i && k(a, "script")), h
    }, cleanData: function (a) {
      for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++)if (ya(c)) {
        if (b = c[za.expando]) {
          if (b.events)for (d in b.events)e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
          c[za.expando] = void 0
        }
        c[Aa.expando] && (c[Aa.expando] = void 0)
      }
    }
  }), fa.fn.extend({
    domManip: w, detach: function (a) {
      return x(this, a, !0)
    }, remove: function (a) {
      return x(this, a)
    }, text: function (a) {
      return xa(this, function (a) {
        return void 0 === a ? fa.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
        })
      }, null, a, arguments.length)
    }, append: function () {
      return w(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = r(this, a);
          b.appendChild(a)
        }
      })
    }, prepend: function () {
      return w(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = r(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    }, before: function () {
      return w(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    }, after: function () {
      return w(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    }, empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (fa.cleanData(k(a, !1)), a.textContent = "");
      return this
    }, clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return fa.clone(this, a, b)
      })
    }, html: function (a) {
      return xa(this, function (a) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
        if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = fa.htmlPrefilter(a);
          try {
            for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(k(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {
          }
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    }, replaceWith: function () {
      var a = [];
      return w(this, arguments, function (b) {
        var c = this.parentNode;
        fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this))
      }, a)
    }
  }), fa.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    fa.fn[a] = function (a) {
      for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++)c = g === f ? this : this.clone(!0), fa(e[g])[b](c), $.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var Ua, Va = {
    HTML: "block",
    BODY: "block"
  }, Wa = /^margin/, Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"), Ya = function (b) {
    var c = b.ownerDocument.defaultView;
    return c.opener || (c = a), c.getComputedStyle(b)
  }, Za = function (a, b, c, d) {
    var e, f, g = {};
    for (f in b)g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b)a.style[f] = g[f];
    return e
  }, $a = X.documentElement;
  !function () {
    function b() {
      h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", $a.appendChild(g);
      var b = a.getComputedStyle(h);
      c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, $a.removeChild(g)
    }

    var c, d, e, f, g = X.createElement("div"), h = X.createElement("div");
    h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), fa.extend(da, {
      pixelPosition: function () {
        return b(), c
      }, boxSizingReliable: function () {
        return null == d && b(), d
      }, pixelMarginRight: function () {
        return null == d && b(), e
      }, reliableMarginLeft: function () {
        return null == d && b(), f
      }, reliableMarginRight: function () {
        var b, c = h.appendChild(X.createElement("div"));
        return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", $a.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), $a.removeChild(g), h.removeChild(c), b
      }
    }))
  }();
  var _a = /^(none|table(?!-c[ea]).+)/, ab = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, bb = {letterSpacing: "0", fontWeight: "400"}, cb = ["Webkit", "O", "Moz", "ms"], db = X.createElement("div").style;
  fa.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = A(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {"float": "cssFloat"},
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = fa.camelCase(b), i = a.style;
        return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ea.exec(c)) && e[1] && (c = j(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (fa.cssNumber[h] ? "" : "px")), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = fa.camelCase(b);
      return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = A(a, b, d)), "normal" === e && b in bb && (e = bb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
    }
  }), fa.each(["height", "width"], function (a, b) {
    fa.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth ? Za(a, ab, function () {
          return F(a, b, d)
        }) : F(a, b, d) : void 0
      }, set: function (a, c, d) {
        var e, f = d && Ya(a), g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
        return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = fa.css(a, b)), D(a, c, g)
      }
    }
  }), fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(A(a, "marginLeft")) || a.getBoundingClientRect().left - Za(a, {marginLeft: 0}, function () {
      return a.getBoundingClientRect().left
    })) + "px" : void 0
  }), fa.cssHooks.marginRight = B(da.reliableMarginRight, function (a, b) {
    return b ? Za(a, {display: "inline-block"}, A, [a, "marginRight"]) : void 0
  }), fa.each({margin: "", padding: "", border: "Width"}, function (a, b) {
    fa.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Wa.test(a) || (fa.cssHooks[a + b].set = D)
  }), fa.fn.extend({
    css: function (a, b) {
      return xa(this, function (a, b, c) {
        var d, e, f = {}, g = 0;
        if (fa.isArray(b)) {
          for (d = Ya(a), e = b.length; e > g; g++)f[b[g]] = fa.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
      }, a, b, arguments.length > 1)
    }, show: function () {
      return G(this, !0)
    }, hide: function () {
      return G(this)
    }, toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        Ga(this) ? fa(this).show() : fa(this).hide()
      })
    }
  }), fa.Tween = H, H.prototype = {
    constructor: H, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || fa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
    }, cur: function () {
      var a = H.propHooks[this.prop];
      return a && a.get ? a.get(this) : H.propHooks._default.get(this)
    }, run: function (a) {
      var b, c = H.propHooks[this.prop];
      return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : H.propHooks._default.set(this), this
    }
  }, H.prototype.init.prototype = H.prototype, H.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
      }, set: function (a) {
        fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : fa.style(a.elem, a.prop, a.now + a.unit)
      }
    }
  }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, fa.easing = {
    linear: function (a) {
      return a
    }, swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }, _default: "swing"
  }, fa.fx = H.prototype.init, fa.fx.step = {};
  var eb, fb, gb = /^(?:toggle|show|hide)$/, hb = /queueHooks$/;
  fa.Animation = fa.extend(N, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return j(c.elem, a, Ea.exec(b), c), c
      }]
    }, tweener: function (a, b) {
      fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(va);
      for (var c, d = 0, e = a.length; e > d; d++)c = a[d], N.tweeners[c] = N.tweeners[c] || [], N.tweeners[c].unshift(b)
    }, prefilters: [L], prefilter: function (a, b) {
      b ? N.prefilters.unshift(a) : N.prefilters.push(a)
    }
  }), fa.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? fa.extend({}, a) : {
      complete: c || !c && b || fa.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !fa.isFunction(b) && b
    };
    return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
    }, d
  }, fa.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(Ga).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
      var e = fa.isEmptyObject(a), f = fa.speed(b, c, d), g = function () {
        var b = N(this, fa.extend({}, a), f);
        (e || za.get(this, "finish")) && b.stop(!0)
      };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop, b(c)
      };
      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0, e = null != a && a + "queueHooks", f = fa.timers, g = za.get(this);
        if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && hb.test(e) && d(g[e]);
        for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        (b || !c) && fa.dequeue(this, a)
      })
    }, finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b, c = za.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fa.timers, g = d ? d.length : 0;
        for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish
      })
    }
  }), fa.each(["toggle", "show", "hide"], function (a, b) {
    var c = fa.fn[b];
    fa.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e)
    }
  }), fa.each({
    slideDown: J("show"),
    slideUp: J("hide"),
    slideToggle: J("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (a, b) {
    fa.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), fa.timers = [], fa.fx.tick = function () {
    var a, b = 0, c = fa.timers;
    for (eb = fa.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    c.length || fa.fx.stop(), eb = void 0
  }, fa.fx.timer = function (a) {
    fa.timers.push(a),
      a() ? fa.fx.start() : fa.timers.pop()
  }, fa.fx.interval = 13, fa.fx.start = function () {
    fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval))
  }, fa.fx.stop = function () {
    a.clearInterval(fb), fb = null
  }, fa.fx.speeds = {slow: 600, fast: 200, _default: 400}, fa.fn.delay = function (b, c) {
    return b = fa.fx ? fa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);
      d.stop = function () {
        a.clearTimeout(e)
      }
    })
  }, function () {
    var a = X.createElement("input"), b = X.createElement("select"), c = b.appendChild(X.createElement("option"));
    a.type = "checkbox", da.checkOn = "" !== a.value, da.optSelected = c.selected, b.disabled = !0, da.optDisabled = !c.disabled, a = X.createElement("input"), a.value = "t", a.type = "radio", da.radioValue = "t" === a.value
  }();
  var ib, jb = fa.expr.attrHandle;
  fa.fn.extend({
    attr: function (a, b) {
      return xa(this, fa.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
      return this.each(function () {
        fa.removeAttr(this, a)
      })
    }
  }), fa.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f)return "undefined" == typeof a.getAttribute ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void fa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = fa.find.attr(a, b), null == d ? void 0 : d))
    }, attrHooks: {
      type: {
        set: function (a, b) {
          if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }, removeAttr: function (a, b) {
      var c, d, e = 0, f = b && b.match(va);
      if (f && 1 === a.nodeType)for (; c = f[e++];)d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    }
  }), ib = {
    set: function (a, b, c) {
      return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = jb[b] || fa.find.attr;
    jb[b] = function (a, b, d) {
      var e, f;
      return d || (f = jb[b], jb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, jb[b] = f), e
    }
  });
  var kb = /^(?:input|select|textarea|button)$/i, lb = /^(?:a|area)$/i;
  fa.fn.extend({
    prop: function (a, b) {
      return xa(this, fa.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
      return this.each(function () {
        delete this[fa.propFix[a] || a]
      })
    }
  }), fa.extend({
    prop: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f)return 1 === f && fa.isXMLDoc(a) || (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    }, propHooks: {
      tabIndex: {
        get: function (a) {
          var b = fa.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }, propFix: {"for": "htmlFor", "class": "className"}
  }), da.optSelected || (fa.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }
  }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    fa.propFix[this.toLowerCase()] = this
  });
  var mb = /[\t\r\n\f]/g;
  fa.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (fa.isFunction(a))return this.each(function (b) {
        fa(this).addClass(a.call(this, b, O(this)))
      });
      if ("string" == typeof a && a)for (b = a.match(va) || []; c = this[i++];)if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
        for (g = 0; f = b[g++];)d.indexOf(" " + f + " ") < 0 && (d += f + " ");
        h = fa.trim(d), e !== h && c.setAttribute("class", h)
      }
      return this
    }, removeClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (fa.isFunction(a))return this.each(function (b) {
        fa(this).removeClass(a.call(this, b, O(this)))
      });
      if (!arguments.length)return this.attr("class", "");
      if ("string" == typeof a && a)for (b = a.match(va) || []; c = this[i++];)if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
        for (g = 0; f = b[g++];)for (; d.indexOf(" " + f + " ") > -1;)d = d.replace(" " + f + " ", " ");
        h = fa.trim(d), e !== h && c.setAttribute("class", h)
      }
      return this
    }, toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function (c) {
        fa(this).toggleClass(a.call(this, c, O(this), b), b)
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c)for (d = 0, e = fa(this), f = a.match(va) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else(void 0 === a || "boolean" === c) && (b = O(this), b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : za.get(this, "__className__") || ""))
      })
    }, hasClass: function (a) {
      var b, c, d = 0;
      for (b = " " + a + " "; c = this[d++];)if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1)return !0;
      return !1
    }
  });
  var nb = /\r/g;
  fa.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0];
      {
        if (arguments.length)return d = fa.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function (a) {
            return null == a ? "" : a + ""
          })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e)return b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)
      }
    }
  }), fa.extend({
    valHooks: {
      option: {
        get: function (a) {
          return fa.trim(a.value)
        }
      }, select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
            if (b = fa(c).val(), f)return b;
            g.push(b)
          }
          return g
        }, set: function (a, b) {
          for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;)d = e[g], (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), fa.each(["radio", "checkbox"], function () {
    fa.valHooks[this] = {
      set: function (a, b) {
        return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) > -1 : void 0
      }
    }, da.checkOn || (fa.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var ob = /^(?:focusinfocus|focusoutblur)$/;
  fa.extend(fa.event, {
    trigger: function (b, c, d, e) {
      var f, g, h, i, j, k, l, m = [d || X], n = ca.call(b, "type") ? b.type : b, o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
      if (g = h = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !ob.test(n + fa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), l = fa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
        if (!e && !l.noBubble && !fa.isWindow(d)) {
          for (i = l.delegateType || n, ob.test(i + n) || (g = g.parentNode); g; g = g.parentNode)m.push(g), h = g;
          h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a)
        }
        for (f = 0; (g = m[f++]) && !b.isPropagationStopped();)b.type = f > 1 ? i : l.bindType || n, k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && ya(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !ya(d) || j && fa.isFunction(d[n]) && !fa.isWindow(d) && (h = d[j], h && (d[j] = null), fa.event.triggered = n, d[n](), fa.event.triggered = void 0, h && (d[j] = h)), b.result
      }
    }, simulate: function (a, b, c) {
      var d = fa.extend(new fa.Event, c, {type: a, isSimulated: !0});
      fa.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
    }
  }), fa.fn.extend({
    trigger: function (a, b) {
      return this.each(function () {
        fa.event.trigger(a, b, this)
      })
    }, triggerHandler: function (a, b) {
      var c = this[0];
      return c ? fa.event.trigger(a, b, c, !0) : void 0
    }
  }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    fa.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), fa.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  }), da.focusin = "onfocusin" in a, da.focusin || fa.each({focus: "focusin", blur: "focusout"}, function (a, b) {
    var c = function (a) {
      fa.event.simulate(b, a.target, fa.event.fix(a))
    };
    fa.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this, e = za.access(d, b);
        e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1)
      }, teardown: function () {
        var d = this.ownerDocument || this, e = za.access(d, b) - 1;
        e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b))
      }
    }
  });
  var pb = a.location, qb = fa.now(), rb = /\?/;
  fa.parseJSON = function (a) {
    return JSON.parse(a + "")
  }, fa.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b)return null;
    try {
      c = (new a.DOMParser).parseFromString(b, "text/xml")
    } catch (d) {
      c = void 0
    }
    return (!c || c.getElementsByTagName("parsererror").length) && fa.error("Invalid XML: " + b), c
  };
  var sb = /#.*$/, tb = /([?&])_=[^&]*/, ub = /^(.*?):[ \t]*([^\r\n]*)$/gm, vb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, wb = /^(?:GET|HEAD)$/, xb = /^\/\//, yb = {}, zb = {}, Ab = "*/".concat("*"), Bb = X.createElement("a");
  Bb.href = pb.href, fa.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: pb.href,
      type: "GET",
      isLocal: vb.test(pb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Ab,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": fa.parseJSON, "text xml": fa.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (a, b) {
      return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a)
    },
    ajaxPrefilter: P(yb),
    ajaxTransport: P(zb),
    ajax: function (b, c) {
      function d(b, c, d, h) {
        var j, l, s, t, v, x = c;
        2 !== u && (u = 2, i && a.clearTimeout(i), e = void 0, g = h || "", w.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (t = S(m, w, d)), t = T(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (b || !x) && (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
      }

      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event, p = fa.Deferred(), q = fa.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
        readyState: 0,
        getResponseHeader: function (a) {
          var b;
          if (2 === u) {
            if (!h)for (h = {}; b = ub.exec(g);)h[b[1].toLowerCase()] = b[2];
            b = h[a.toLowerCase()]
          }
          return null == b ? null : b
        },
        getAllResponseHeaders: function () {
          return 2 === u ? g : null
        },
        setRequestHeader: function (a, b) {
          var c = a.toLowerCase();
          return u || (a = t[c] = t[c] || a, s[a] = b), this
        },
        overrideMimeType: function (a) {
          return u || (m.mimeType = a), this
        },
        statusCode: function (a) {
          var b;
          if (a)if (2 > u)for (b in a)r[b] = [r[b], a[b]]; else w.always(a[w.status]);
          return this
        },
        abort: function (a) {
          var b = a || v;
          return e && e.abort(b), d(0, b), this
        }
      };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || pb.href) + "").replace(sb, "").replace(xb, pb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(va) || [""], null == m.crossDomain) {
        j = X.createElement("a");
        try {
          j.href = m.url, j.href = j.href, m.crossDomain = Bb.protocol + "//" + Bb.host != j.protocol + "//" + j.host
        } catch (x) {
          m.crossDomain = !0
        }
      }
      if (m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(yb, m, c, w), 2 === u)return w;
      k = fa.event && m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !wb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (rb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = tb.test(f) ? f.replace(tb, "$1_=" + qb++) : f + (rb.test(f) ? "&" : "?") + "_=" + qb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ab + "; q=0.01" : "") : m.accepts["*"]);
      for (l in m.headers)w.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))return w.abort();
      v = "abort";
      for (l in{success: 1, error: 1, complete: 1})w[l](m[l]);
      if (e = Q(zb, m, c, w)) {
        if (w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), 2 === u)return w;
        m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          w.abort("timeout")
        }, m.timeout));
        try {
          u = 1, e.send(s, d)
        } catch (x) {
          if (!(2 > u))throw x;
          d(-1, x)
        }
      } else d(-1, "No Transport");
      return w
    },
    getJSON: function (a, b, c) {
      return fa.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return fa.get(a, void 0, b, "script")
    }
  }), fa.each(["get", "post"], function (a, b) {
    fa[b] = function (a, c, d, e) {
      return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax(fa.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, fa.isPlainObject(a) && a))
    }
  }), fa._evalUrl = function (a) {
    return fa.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
  }, fa.fn.extend({
    wrapAll: function (a) {
      var b;
      return fa.isFunction(a) ? this.each(function (b) {
        fa(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        for (var a = this; a.firstElementChild;)a = a.firstElementChild;
        return a
      }).append(this)), this)
    }, wrapInner: function (a) {
      return fa.isFunction(a) ? this.each(function (b) {
        fa(this).wrapInner(a.call(this, b))
      }) : this.each(function () {
        var b = fa(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    }, wrap: function (a) {
      var b = fa.isFunction(a);
      return this.each(function (c) {
        fa(this).wrapAll(b ? a.call(this, c) : a)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
      }).end()
    }
  }), fa.expr.filters.hidden = function (a) {
    return !fa.expr.filters.visible(a)
  }, fa.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
  };
  var Cb = /%20/g, Db = /\[\]$/, Eb = /\r?\n/g, Fb = /^(?:submit|button|image|reset|file)$/i, Gb = /^(?:input|select|textarea|keygen)/i;
  fa.param = function (a, b) {
    var c, d = [], e = function (a, b) {
      b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
    };
    if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a))fa.each(a, function () {
      e(this.name, this.value)
    }); else for (c in a)U(c, a[c], b, e);
    return d.join("&").replace(Cb, "+")
  }, fa.fn.extend({
    serialize: function () {
      return fa.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var a = fa.prop(this, "elements");
        return a ? fa.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !fa(this).is(":disabled") && Gb.test(this.nodeName) && !Fb.test(a) && (this.checked || !Ha.test(a))
      }).map(function (a, b) {
        var c = fa(this).val();
        return null == c ? null : fa.isArray(c) ? fa.map(c, function (a) {
          return {name: b.name, value: a.replace(Eb, "\r\n")}
        }) : {name: b.name, value: c.replace(Eb, "\r\n")}
      }).get()
    }
  }), fa.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest
    } catch (b) {
    }
  };
  var Hb = {0: 200, 1223: 204}, Ib = fa.ajaxSettings.xhr();
  da.cors = !!Ib && "withCredentials" in Ib, da.ajax = Ib = !!Ib, fa.ajaxTransport(function (b) {
    var c, d;
    return da.cors || Ib && !b.crossDomain ? {
      send: function (e, f) {
        var g, h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)for (g in b.xhrFields)h[g] = b.xhrFields[g];
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
        for (g in e)h.setRequestHeader(g, e[g]);
        c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
          }
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d()
          })
        }, c = c("abort");
        try {
          h.send(b.hasContent && b.data || null)
        } catch (i) {
          if (c)throw i
        }
      }, abort: function () {
        c && c()
      }
    } : void 0
  }), fa.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {
      "text script": function (a) {
        return fa.globalEval(a), a
      }
    }
  }), fa.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), fa.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (d, e) {
          b = fa("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
          }), X.head.appendChild(b[0])
        }, abort: function () {
          c && c()
        }
      }
    }
  });
  var Jb = [], Kb = /(=)\?(?=&|$)|\?\?/;
  fa.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var a = Jb.pop() || fa.expando + "_" + qb++;
      return this[a] = !0, a
    }
  }), fa.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (rb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || fa.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      void 0 === f ? fa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), da.createHTMLDocument = function () {
    var a = X.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
  }(), fa.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a)return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || (da.createHTMLDocument ? X.implementation.createHTMLDocument("") : X);
    var d = oa.exec(a), e = !c && [];
    return d ? [b.createElement(d[1])] : (d = m([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
  };
  var Lb = fa.fn.load;
  fa.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb)return Lb.apply(this, arguments);
    var d, e, f, g = this, h = a.indexOf(" ");
    return h > -1 && (d = fa.trim(a.slice(h)), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && fa.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
    }).always(c && function (a, b) {
        g.each(function () {
          c.apply(g, f || [a.responseText, b, a])
        })
      }), this
  }, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    fa.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), fa.expr.filters.animated = function (a) {
    return fa.grep(fa.timers, function (b) {
      return a === b.elem
    }).length
  }, fa.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = fa.css(a, "position"), l = fa(a), m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, fa.fn.extend({
    offset: function (a) {
      if (arguments.length)return void 0 === a ? this : this.each(function (b) {
        fa.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
      if (f)return b = f.documentElement, fa.contains(b, d) ? (e = d.getBoundingClientRect(), c = V(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e
    }, position: function () {
      if (this[0]) {
        var a, b, c = this[0], d = {top: 0, left: 0};
        return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += fa.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
          top: b.top - d.top - fa.css(c, "marginTop", !0),
          left: b.left - d.left - fa.css(c, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var a = this.offsetParent; a && "static" === fa.css(a, "position");)a = a.offsetParent;
        return a || $a
      })
    }
  }), fa.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
    var c = "pageYOffset" === b;
    fa.fn[a] = function (d) {
      return xa(this, function (a, d, e) {
        var f = V(a);
        return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
      }, a, d, arguments.length)
    }
  }), fa.each(["top", "left"], function (a, b) {
    fa.cssHooks[b] = B(da.pixelPosition, function (a, c) {
      return c ? (c = A(a, b), Xa.test(c) ? fa(a).position()[b] + "px" : c) : void 0
    })
  }), fa.each({Height: "height", Width: "width"}, function (a, b) {
    fa.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
      fa.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
        return xa(this, function (b, c, d) {
          var e;
          return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), fa.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c)
    }, unbind: function (a, b) {
      return this.off(a, null, b)
    }, delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }, size: function () {
      return this.length
    }
  }), fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return fa
  });
  var Mb = a.jQuery, Nb = a.$;
  return fa.noConflict = function (b) {
    return a.$ === fa && (a.$ = Nb), b && a.jQuery === fa && (a.jQuery = Mb), fa
  }, b || (a.jQuery = a.$ = fa), fa
}), function (a, b, c) {
  "use strict";
  function d(a, b) {
    return b = b || Error, function () {
      var c, d, e = 2, f = arguments, g = f[0], h = "[" + (a ? a + ":" : "") + g + "] ", i = f[1];
      for (h += i.replace(/\{\d+\}/g, function (a) {
        var b = +a.slice(1, -1), c = b + e;
        return c < f.length ? ta(f[c]) : a
      }), h += "\nhttp://errors.angularjs.org/1.4.9/" + (a ? a + "/" : "") + g, d = e, c = "?"; d < f.length; d++, c = "&")h += c + "p" + (d - e) + "=" + encodeURIComponent(ta(f[d]));
      return new b(h)
    }
  }

  function e(a) {
    if (null == a || C(a))return !1;
    if (Qd(a) || x(a) || Ed && a instanceof Ed)return !0;
    var b = "length" in Object(a) && a.length;
    return y(b) && (b >= 0 && (b - 1 in a || a instanceof Array) || "function" == typeof a.item)
  }

  function f(a, b, c) {
    var d, g;
    if (a)if (A(a))for (d in a)"prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a); else if (Qd(a) || e(a)) {
      var h = "object" != typeof a;
      for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
    } else if (a.forEach && a.forEach !== f)a.forEach(b, c, a); else if (w(a))for (d in a)b.call(c, a[d], d, a); else if ("function" == typeof a.hasOwnProperty)for (d in a)a.hasOwnProperty(d) && b.call(c, a[d], d, a); else for (d in a)zd.call(a, d) && b.call(c, a[d], d, a);
    return a
  }

  function g(a, b, c) {
    for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++)b.call(c, a[d[e]], d[e]);
    return d
  }

  function h(a) {
    return function (b, c) {
      a(c, b)
    }
  }

  function i() {
    return ++Od
  }

  function j(a, b) {
    b ? a.$$hashKey = b : delete a.$$hashKey
  }

  function k(a, b, c) {
    for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
      var g = b[e];
      if (v(g) || A(g))for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
        var m = h[i], n = g[m];
        c && v(n) ? z(n) ? a[m] = new Date(n.valueOf()) : B(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : K(n) ? a[m] = n.clone() : (v(a[m]) || (a[m] = Qd(n) ? [] : {}), k(a[m], [n], !0)) : a[m] = n
      }
    }
    return j(a, d), a
  }

  function l(a) {
    return k(a, Hd.call(arguments, 1), !1)
  }

  function m(a) {
    return k(a, Hd.call(arguments, 1), !0)
  }

  function n(a) {
    return parseInt(a, 10)
  }

  function o(a, b) {
    return l(Object.create(a), b)
  }

  function p() {
  }

  function q(a) {
    return a
  }

  function r(a) {
    return function () {
      return a
    }
  }

  function s(a) {
    return A(a.toString) && a.toString !== Kd
  }

  function t(a) {
    return "undefined" == typeof a
  }

  function u(a) {
    return "undefined" != typeof a
  }

  function v(a) {
    return null !== a && "object" == typeof a
  }

  function w(a) {
    return null !== a && "object" == typeof a && !Ld(a)
  }

  function x(a) {
    return "string" == typeof a
  }

  function y(a) {
    return "number" == typeof a
  }

  function z(a) {
    return "[object Date]" === Kd.call(a)
  }

  function A(a) {
    return "function" == typeof a
  }

  function B(a) {
    return "[object RegExp]" === Kd.call(a)
  }

  function C(a) {
    return a && a.window === a
  }

  function D(a) {
    return a && a.$evalAsync && a.$watch
  }

  function E(a) {
    return "[object File]" === Kd.call(a)
  }

  function F(a) {
    return "[object FormData]" === Kd.call(a)
  }

  function G(a) {
    return "[object Blob]" === Kd.call(a)
  }

  function H(a) {
    return "boolean" == typeof a
  }

  function I(a) {
    return a && A(a.then)
  }

  function J(a) {
    return a && y(a.length) && Rd.test(Kd.call(a))
  }

  function K(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
  }

  function L(a) {
    var b, c = {}, d = a.split(",");
    for (b = 0; b < d.length; b++)c[d[b]] = !0;
    return c
  }

  function M(a) {
    return yd(a.nodeName || a[0] && a[0].nodeName)
  }

  function N(a, b) {
    var c = a.indexOf(b);
    return c >= 0 && a.splice(c, 1), c
  }

  function O(a, b) {
    function c(a, b) {
      var c, e = b.$$hashKey;
      if (Qd(a))for (var f = 0, g = a.length; g > f; f++)b.push(d(a[f])); else if (w(a))for (c in a)b[c] = d(a[c]); else if (a && "function" == typeof a.hasOwnProperty)for (c in a)a.hasOwnProperty(c) && (b[c] = d(a[c])); else for (c in a)zd.call(a, c) && (b[c] = d(a[c]));
      return j(b, e), b
    }

    function d(a) {
      if (!v(a))return a;
      var b = e.indexOf(a);
      if (-1 !== b)return g[b];
      if (C(a) || D(a))throw Md("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
      var d, f = !1;
      return Qd(a) ? (d = [], f = !0) : J(a) ? d = new a.constructor(a) : z(a) ? d = new Date(a.getTime()) : B(a) ? (d = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), d.lastIndex = a.lastIndex) : A(a.cloneNode) ? d = a.cloneNode(!0) : (d = Object.create(Ld(a)), f = !0), e.push(a), g.push(d), f ? c(a, d) : d
    }

    var e = [], g = [];
    if (b) {
      if (J(b))throw Md("cpta", "Can't copy! TypedArray destination cannot be mutated.");
      if (a === b)throw Md("cpi", "Can't copy! Source and destination are identical.");
      return Qd(b) ? b.length = 0 : f(b, function (a, c) {
        "$$hashKey" !== c && delete b[c]
      }), e.push(a), g.push(b), c(a, b)
    }
    return d(a)
  }

  function P(a, b) {
    if (Qd(a)) {
      b = b || [];
      for (var c = 0, d = a.length; d > c; c++)b[c] = a[c]
    } else if (v(a)) {
      b = b || {};
      for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
    }
    return b || a
  }

  function Q(a, b) {
    if (a === b)return !0;
    if (null === a || null === b)return !1;
    if (a !== a && b !== b)return !0;
    var c, d, e, f = typeof a, g = typeof b;
    if (f == g && "object" == f) {
      if (!Qd(a)) {
        if (z(a))return z(b) ? Q(a.getTime(), b.getTime()) : !1;
        if (B(a))return B(b) ? a.toString() == b.toString() : !1;
        if (D(a) || D(b) || C(a) || C(b) || Qd(b) || z(b) || B(b))return !1;
        e = qa();
        for (d in a)if ("$" !== d.charAt(0) && !A(a[d])) {
          if (!Q(a[d], b[d]))return !1;
          e[d] = !0
        }
        for (d in b)if (!(d in e) && "$" !== d.charAt(0) && u(b[d]) && !A(b[d]))return !1;
        return !0
      }
      if (!Qd(b))return !1;
      if ((c = a.length) == b.length) {
        for (d = 0; c > d; d++)if (!Q(a[d], b[d]))return !1;
        return !0
      }
    }
    return !1
  }

  function R(a, b, c) {
    return a.concat(Hd.call(b, c))
  }

  function S(a, b) {
    return Hd.call(a, b || 0)
  }

  function T(a, b) {
    var c = arguments.length > 2 ? S(arguments, 2) : [];
    return !A(b) || b instanceof RegExp ? b : c.length ? function () {
      return arguments.length ? b.apply(a, R(c, arguments, 0)) : b.apply(a, c)
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a)
    }
  }

  function U(a, d) {
    var e = d;
    return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : C(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : D(d) && (e = "$SCOPE"), e
  }

  function V(a, b) {
    return "undefined" == typeof a ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, U, b))
  }

  function W(a) {
    return x(a) ? JSON.parse(a) : a
  }

  function X(a, b) {
    var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
    return isNaN(c) ? b : c
  }

  function Y(a, b) {
    return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
  }

  function Z(a, b, c) {
    c = c ? -1 : 1;
    var d = X(b, a.getTimezoneOffset());
    return Y(a, c * (d - a.getTimezoneOffset()))
  }

  function $(a) {
    a = Ed(a).clone();
    try {
      a.empty()
    } catch (b) {
    }
    var c = Ed("<div>").append(a).html();
    try {
      return a[0].nodeType === _d ? yd(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + yd(b)
      })
    } catch (b) {
      return yd(c)
    }
  }

  function _(a) {
    try {
      return decodeURIComponent(a)
    } catch (b) {
    }
  }

  function aa(a) {
    var b = {};
    return f((a || "").split("&"), function (a) {
      var c, d, e;
      a && (d = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (d = a.substring(0, c), e = a.substring(c + 1)), d = _(d), u(d) && (e = u(e) ? _(e) : !0, zd.call(b, d) ? Qd(b[d]) ? b[d].push(e) : b[d] = [b[d], e] : b[d] = e))
    }), b
  }

  function ba(a) {
    var b = [];
    return f(a, function (a, c) {
      Qd(a) ? f(a, function (a) {
        b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
      }) : b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
    }), b.length ? b.join("&") : ""
  }

  function ca(a) {
    return da(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
  }

  function da(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
  }

  function ea(a, b) {
    var c, d, e = Wd.length;
    for (d = 0; e > d; ++d)if (c = Wd[d] + b, x(c = a.getAttribute(c)))return c;
    return null
  }

  function fa(a, b) {
    var c, d, e = {};
    f(Wd, function (b) {
      var e = b + "app";
      !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
    }), f(Wd, function (b) {
      var e, f = b + "app";
      !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
    }), c && (e.strictDi = null !== ea(c, "strict-di"), b(c, d ? [d] : [], e))
  }

  function ga(c, d, e) {
    v(e) || (e = {});
    var g = {strictDi: !1};
    e = l(g, e);
    var h = function () {
      if (c = Ed(c), c.injector()) {
        var a = c[0] === b ? "document" : $(c);
        throw Md("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
      }
      d = d || [], d.unshift(["$provide", function (a) {
        a.value("$rootElement", c)
      }]), e.debugInfoEnabled && d.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0)
      }]), d.unshift("ng");
      var f = ab(d, e.strictDi);
      return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d), c(b)(a)
        })
      }]), f
    }, i = /^NG_ENABLE_DEBUG_INFO!/, j = /^NG_DEFER_BOOTSTRAP!/;
    return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), Nd.resumeBootstrap = function (a) {
      return f(a, function (a) {
        d.push(a)
      }), h()
    }, void(A(Nd.resumeDeferredBootstrap) && Nd.resumeDeferredBootstrap()))
  }

  function ha() {
    a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
  }

  function ia(a) {
    var b = Nd.element(a).injector();
    if (!b)throw Md("test", "no injector found for element argument to getTestability");
    return b.get("$$testability")
  }

  function ja(a, b) {
    return b = b || "_", a.replace(Xd, function (a, c) {
      return (c ? b : "") + a.toLowerCase()
    })
  }

  function ka() {
    var b;
    if (!Yd) {
      var d = Vd();
      Fd = t(d) ? a.jQuery : d ? a[d] : c, Fd && Fd.fn.on ? (Ed = Fd, l(Fd.fn, {
        scope: se.scope,
        isolateScope: se.isolateScope,
        controller: se.controller,
        injector: se.injector,
        inheritedData: se.inheritedData
      }), b = Fd.cleanData, Fd.cleanData = function (a) {
        var c;
        if (Pd)Pd = !1; else for (var d, e = 0; null != (d = a[e]); e++)c = Fd._data(d, "events"), c && c.$destroy && Fd(d).triggerHandler("$destroy");
        b(a)
      }) : Ed = Ca, Nd.element = Ed, Yd = !0
    }
  }

  function la(a, b, c) {
    if (!a)throw Md("areq", "Argument '{0}' is {1}", b || "?", c || "required");
    return a
  }

  function ma(a, b, c) {
    return c && Qd(a) && (a = a[a.length - 1]), la(A(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
  }

  function na(a, b) {
    if ("hasOwnProperty" === a)throw Md("badname", "hasOwnProperty is not a valid {0} name", b)
  }

  function oa(a, b, c) {
    if (!b)return a;
    for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)d = e[h], a && (a = (f = a)[d]);
    return !c && A(a) ? T(f, a) : a
  }

  function pa(a) {
    for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++)(b || a[e] !== c) && (b || (b = Ed(Hd.call(a, 0, e))), b.push(c));
    return b || a
  }

  function qa() {
    return Object.create(null)
  }

  function ra(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c())
    }

    var c = d("$injector"), e = d("ng"), f = b(a, "angular", Object);
    return f.$$minErr = f.$$minErr || d, b(f, "module", function () {
      var a = {};
      return function (d, f, g) {
        var h = function (a, b) {
          if ("hasOwnProperty" === a)throw e("badname", "hasOwnProperty is not a valid {0} name", b)
        };
        return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
          function a(a, b, c, d) {
            return d || (d = e), function () {
              return d[c || "push"]([a, b, arguments]), k
            }
          }

          function b(a, b) {
            return function (c, f) {
              return f && A(f) && (f.$$moduleName = d), e.push([a, b, arguments]), k
            }
          }

          if (!f)throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
          var e = [], h = [], i = [], j = a("$injector", "invoke", "push", h), k = {
            _invokeQueue: e,
            _configBlocks: h,
            _runBlocks: i,
            requires: f,
            name: d,
            provider: b("$provide", "provider"),
            factory: b("$provide", "factory"),
            service: b("$provide", "service"),
            value: a("$provide", "value"),
            constant: a("$provide", "constant", "unshift"),
            decorator: b("$provide", "decorator"),
            animation: b("$animateProvider", "register"),
            filter: b("$filterProvider", "register"),
            controller: b("$controllerProvider", "register"),
            directive: b("$compileProvider", "directive"),
            config: j,
            run: function (a) {
              return i.push(a), this
            }
          };
          return g && j(g), k
        })
      }
    })
  }

  function sa(a) {
    var b = [];
    return JSON.stringify(a, function (a, c) {
      if (c = U(a, c), v(c)) {
        if (b.indexOf(c) >= 0)return "...";
        b.push(c)
      }
      return c
    })
  }

  function ta(a) {
    return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : t(a) ? "undefined" : "string" != typeof a ? sa(a) : a
  }

  function ua(b) {
    l(b, {
      bootstrap: ga,
      copy: O,
      extend: l,
      merge: m,
      equals: Q,
      element: Ed,
      forEach: f,
      injector: ab,
      noop: p,
      bind: T,
      toJson: V,
      fromJson: W,
      identity: q,
      isUndefined: t,
      isDefined: u,
      isString: x,
      isFunction: A,
      isObject: v,
      isNumber: y,
      isElement: K,
      isArray: Qd,
      version: de,
      isDate: z,
      lowercase: yd,
      uppercase: Ad,
      callbacks: {counter: 0},
      getTestability: ia,
      $$minErr: d,
      $$csp: Ud,
      reloadWithDebugInfo: ha
    }), (Gd = ra(a))("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({$$sanitizeUri: sc}), a.provider("$compile", kb).directive({
        a: xf,
        input: Of,
        textarea: Of,
        form: Cf,
        script: Gg,
        select: Jg,
        style: Lg,
        option: Kg,
        ngBind: Rf,
        ngBindHtml: Tf,
        ngBindTemplate: Sf,
        ngClass: Vf,
        ngClassEven: Xf,
        ngClassOdd: Wf,
        ngCloak: Yf,
        ngController: Zf,
        ngForm: Df,
        ngHide: Ag,
        ngIf: ag,
        ngInclude: bg,
        ngInit: dg,
        ngNonBindable: rg,
        ngPluralize: vg,
        ngRepeat: wg,
        ngShow: zg,
        ngStyle: Bg,
        ngSwitch: Cg,
        ngSwitchWhen: Dg,
        ngSwitchDefault: Eg,
        ngOptions: ug,
        ngTransclude: Fg,
        ngModel: og,
        ngList: eg,
        ngChange: Uf,
        pattern: Ng,
        ngPattern: Ng,
        required: Mg,
        ngRequired: Mg,
        minlength: Pg,
        ngMinlength: Pg,
        maxlength: Og,
        ngMaxlength: Og,
        ngValue: Qf,
        ngModelOptions: qg
      }).directive({ngInclude: cg}).directive(yf).directive($f), a.provider({
        $anchorScroll: bb,
        $animate: He,
        $animateCss: Ke,
        $$animateJs: Fe,
        $$animateQueue: Ge,
        $$AnimateRunner: Je,
        $$animateAsyncRun: Ie,
        $browser: hb,
        $cacheFactory: ib,
        $controller: pb,
        $document: qb,
        $exceptionHandler: rb,
        $filter: Gc,
        $$forceReflow: Pe,
        $interpolate: Fb,
        $interval: Gb,
        $http: Bb,
        $httpParamSerializer: tb,
        $httpParamSerializerJQLike: ub,
        $httpBackend: Db,
        $xhrFactory: Cb,
        $location: Ub,
        $log: Vb,
        $parse: mc,
        $rootScope: rc,
        $q: nc,
        $$q: oc,
        $sce: wc,
        $sceDelegate: vc,
        $sniffer: xc,
        $templateCache: jb,
        $templateRequest: yc,
        $$testability: zc,
        $timeout: Ac,
        $window: Dc,
        $$rAF: qc,
        $$jqLite: Xa,
        $$HashMap: we,
        $$cookieReader: Fc
      })
    }])
  }

  function va() {
    return ++fe
  }

  function wa(a) {
    return a.replace(ie, function (a, b, c, d) {
      return d ? c.toUpperCase() : c
    }).replace(je, "Moz$1")
  }

  function xa(a) {
    return !ne.test(a)
  }

  function ya(a) {
    var b = a.nodeType;
    return b === Zd || !b || b === be
  }

  function za(a) {
    for (var b in ee[a.ng339])return !0;
    return !1
  }

  function Aa(a, b) {
    var c, d, e, g, h = b.createDocumentFragment(), i = [];
    if (xa(a))i.push(b.createTextNode(a)); else {
      for (c = c || h.appendChild(b.createElement("div")), d = (oe.exec(a) || ["", ""])[1].toLowerCase(), e = qe[d] || qe._default, c.innerHTML = e[1] + a.replace(pe, "<$1></$2>") + e[2], g = e[0]; g--;)c = c.lastChild;
      i = R(i, c.childNodes), c = h.firstChild, c.textContent = ""
    }
    return h.textContent = "", h.innerHTML = "", f(i, function (a) {
      h.appendChild(a)
    }), h
  }

  function Ba(a, c) {
    c = c || b;
    var d;
    return (d = me.exec(a)) ? [c.createElement(d[1])] : (d = Aa(a, c)) ? d.childNodes : []
  }

  function Ca(a) {
    if (a instanceof Ca)return a;
    var b;
    if (x(a) && (a = Sd(a), b = !0), !(this instanceof Ca)) {
      if (b && "<" != a.charAt(0))throw le("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
      return new Ca(a)
    }
    b ? Ma(this, Ba(a)) : Ma(this, a)
  }

  function Da(a) {
    return a.cloneNode(!0)
  }

  function Ea(a, b) {
    if (b || Ga(a), a.querySelectorAll)for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++)Ga(c[d])
  }

  function Fa(a, b, c, d) {
    if (u(d))throw le("offargs", "jqLite#off() does not support the `selector` argument");
    var e = Ha(a), g = e && e.events, h = e && e.handle;
    if (h)if (b) {
      var i = function (b) {
        var d = g[b];
        u(c) && N(d || [], c), u(c) && d && d.length > 0 || (he(a, b, h), delete g[b])
      };
      f(b.split(" "), function (a) {
        i(a), ke[a] && i(ke[a])
      })
    } else for (b in g)"$destroy" !== b && he(a, b, h), delete g[b]
  }

  function Ga(a, b) {
    var d = a.ng339, e = d && ee[d];
    if (e) {
      if (b)return void delete e.data[b];
      e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Fa(a)), delete ee[d], a.ng339 = c
    }
  }

  function Ha(a, b) {
    var d = a.ng339, e = d && ee[d];
    return b && !e && (a.ng339 = d = va(), e = ee[d] = {events: {}, data: {}, handle: c}), e
  }

  function Ia(a, b, c) {
    if (ya(a)) {
      var d = u(c), e = !d && b && !v(b), f = !b, g = Ha(a, !e), h = g && g.data;
      if (d)h[b] = c; else {
        if (f)return h;
        if (e)return h && h[b];
        l(h, b)
      }
    }
  }

  function Ja(a, b) {
    return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
  }

  function Ka(a, b) {
    b && a.setAttribute && f(b.split(" "), function (b) {
      a.setAttribute("class", Sd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Sd(b) + " ", " ")))
    })
  }

  function La(a, b) {
    if (b && a.setAttribute) {
      var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      f(b.split(" "), function (a) {
        a = Sd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
      }), a.setAttribute("class", Sd(c))
    }
  }

  function Ma(a, b) {
    if (b)if (b.nodeType)a[a.length++] = b; else {
      var c = b.length;
      if ("number" == typeof c && b.window !== b) {
        if (c)for (var d = 0; c > d; d++)a[a.length++] = b[d]
      } else a[a.length++] = b
    }
  }

  function Na(a, b) {
    return Oa(a, "$" + (b || "ngController") + "Controller")
  }

  function Oa(a, b, c) {
    a.nodeType == be && (a = a.documentElement);
    for (var d = Qd(b) ? b : [b]; a;) {
      for (var e = 0, f = d.length; f > e; e++)if (u(c = Ed.data(a, d[e])))return c;
      a = a.parentNode || a.nodeType === ce && a.host
    }
  }

  function Pa(a) {
    for (Ea(a, !0); a.firstChild;)a.removeChild(a.firstChild)
  }

  function Qa(a, b) {
    b || Ea(a);
    var c = a.parentNode;
    c && c.removeChild(a)
  }

  function Ra(b, c) {
    c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : Ed(c).on("load", b)
  }

  function Sa(a, b) {
    var c = te[b.toLowerCase()];
    return c && ue[M(a)] && c
  }

  function Ta(a) {
    return ve[a]
  }

  function Ua(a, b) {
    var c = function (c, d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented
      };
      var e = b[d || c.type], f = e ? e.length : 0;
      if (f) {
        if (t(c.immediatePropagationStopped)) {
          var g = c.stopImmediatePropagation;
          c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
          }
        }
        c.isImmediatePropagationStopped = function () {
          return c.immediatePropagationStopped === !0
        };
        var h = e.specialHandlerWrapper || Va;
        f > 1 && (e = P(e));
        for (var i = 0; f > i; i++)c.isImmediatePropagationStopped() || h(a, c, e[i])
      }
    };
    return c.elem = a, c
  }

  function Va(a, b, c) {
    c.call(a, b)
  }

  function Wa(a, b, c) {
    var d = b.relatedTarget;
    (!d || d !== a && !re.call(a, d)) && c.call(a, b)
  }

  function Xa() {
    this.$get = function () {
      return l(Ca, {
        hasClass: function (a, b) {
          return a.attr && (a = a[0]), Ja(a, b)
        }, addClass: function (a, b) {
          return a.attr && (a = a[0]), La(a, b)
        }, removeClass: function (a, b) {
          return a.attr && (a = a[0]), Ka(a, b)
        }
      })
    }
  }

  function Ya(a, b) {
    var c = a && a.$$hashKey;
    if (c)return "function" == typeof c && (c = a.$$hashKey()), c;
    var d = typeof a;
    return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || i)() : d + ":" + a
  }

  function Za(a, b) {
    if (b) {
      var c = 0;
      this.nextUid = function () {
        return ++c
      }
    }
    f(a, this.put, this)
  }

  function $a(a) {
    var b = a.toString().replace(Ae, ""), c = b.match(xe);
    return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
  }

  function _a(a, b, c) {
    var d, e, g, h;
    if ("function" == typeof a) {
      if (!(d = a.$inject)) {
        if (d = [], a.length) {
          if (b)throw x(c) && c || (c = a.name || $a(a)), Be("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
          e = a.toString().replace(Ae, ""), g = e.match(xe), f(g[1].split(ye), function (a) {
            a.replace(ze, function (a, b, c) {
              d.push(c)
            })
          })
        }
        a.$inject = d
      }
    } else Qd(a) ? (h = a.length - 1, ma(a[h], "fn"), d = a.slice(0, h)) : ma(a, "fn", !0);
    return d
  }

  function ab(a, b) {
    function d(a) {
      return function (b, c) {
        return v(b) ? void f(b, h(a)) : a(b, c)
      }
    }

    function e(a, b) {
      if (na(a, "service"), (A(b) || Qd(b)) && (b = y.instantiate(b)), !b.$get)throw Be("pget", "Provider '{0}' must define $get factory method.", a);
      return w[a + q] = b
    }

    function g(a, b) {
      return function () {
        var c = B.invoke(b, this);
        if (t(c))throw Be("undef", "Provider '{0}' must return a value from $get factory method.", a);
        return c
      }
    }

    function i(a, b, c) {
      return e(a, {$get: c !== !1 ? g(a, b) : b})
    }

    function j(a, b) {
      return i(a, ["$injector", function (a) {
        return a.instantiate(b)
      }])
    }

    function k(a, b) {
      return i(a, r(b), !1)
    }

    function l(a, b) {
      na(a, "constant"), w[a] = b, z[a] = b
    }

    function m(a, b) {
      var c = y.get(a + q), d = c.$get;
      c.$get = function () {
        var a = B.invoke(d, c);
        return B.invoke(b, null, {$delegate: a})
      }
    }

    function n(a) {
      la(t(a) || Qd(a), "modulesToLoad", "not an array");
      var b, c = [];
      return f(a, function (a) {
        function d(a) {
          var b, c;
          for (b = 0, c = a.length; c > b; b++) {
            var d = a[b], e = y.get(d[0]);
            e[d[1]].apply(e, d[2])
          }
        }

        if (!u.get(a)) {
          u.put(a, !0);
          try {
            x(a) ? (b = Gd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : A(a) ? c.push(y.invoke(a)) : Qd(a) ? c.push(y.invoke(a)) : ma(a, "module")
          } catch (e) {
            throw Qd(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Be("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
          }
        }
      }), c
    }

    function o(a, c) {
      function d(b, d) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === p)throw Be("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
          return a[b]
        }
        try {
          return s.unshift(b), a[b] = p, a[b] = c(b, d)
        } catch (e) {
          throw a[b] === p && delete a[b], e
        } finally {
          s.shift()
        }
      }

      function e(a, c, e, f) {
        "string" == typeof e && (f = e, e = null);
        var g, h, i, j = [], k = ab.$$annotate(a, b, f);
        for (h = 0, g = k.length; g > h; h++) {
          if (i = k[h], "string" != typeof i)throw Be("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
          j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
        }
        return Qd(a) && (a = a[g]), a.apply(c, j)
      }

      function f(a, b, c) {
        var d = Object.create((Qd(a) ? a[a.length - 1] : a).prototype || null), f = e(a, d, b, c);
        return v(f) || A(f) ? f : d
      }

      return {
        invoke: e, instantiate: f, get: d, annotate: ab.$$annotate, has: function (b) {
          return w.hasOwnProperty(b + q) || a.hasOwnProperty(b)
        }
      }
    }

    b = b === !0;
    var p = {}, q = "Provider", s = [], u = new Za([], !0), w = {
      $provide: {
        provider: d(e),
        factory: d(i),
        service: d(j),
        value: d(k),
        constant: d(l),
        decorator: m
      }
    }, y = w.$injector = o(w, function (a, b) {
      throw Nd.isString(b) && s.push(b), Be("unpr", "Unknown provider: {0}", s.join(" <- "))
    }), z = {}, B = z.$injector = o(z, function (a, b) {
      var d = y.get(a + q, b);
      return B.invoke(d.$get, d, c, a)
    });
    return f(n(a), function (a) {
      a && B.invoke(a)
    }), B
  }

  function bb() {
    var a = !0;
    this.disableAutoScrolling = function () {
      a = !1
    }, this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
      function e(a) {
        var b = null;
        return Array.prototype.some.call(a, function (a) {
          return "a" === M(a) ? (b = a, !0) : void 0
        }), b
      }

      function f() {
        var a = h.yOffset;
        if (A(a))a = a(); else if (K(a)) {
          var c = a[0], d = b.getComputedStyle(c);
          a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
        } else y(a) || (a = 0);
        return a
      }

      function g(a) {
        if (a) {
          a.scrollIntoView();
          var c = f();
          if (c) {
            var d = a.getBoundingClientRect().top;
            b.scrollBy(0, d - c)
          }
        } else b.scrollTo(0, 0)
      }

      function h(a) {
        a = x(a) ? a : c.hash();
        var b;
        a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null)
      }

      var i = b.document;
      return a && d.$watch(function () {
        return c.hash()
      }, function (a, b) {
        (a !== b || "" !== a) && Ra(function () {
          d.$evalAsync(h)
        })
      }), h
    }]
  }

  function cb(a, b) {
    return a || b ? a ? b ? (Qd(a) && (a = a.join(" ")), Qd(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
  }

  function db(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (c.nodeType === De)return c
    }
  }

  function eb(a) {
    x(a) && (a = a.split(" "));
    var b = qa();
    return f(a, function (a) {
      a.length && (b[a] = !0)
    }), b
  }

  function fb(a) {
    return v(a) ? a : {}
  }

  function gb(a, b, c, d) {
    function e(a) {
      try {
        a.apply(null, S(arguments, 1))
      } finally {
        if (s--, 0 === s)for (; u.length;)try {
          u.pop()()
        } catch (b) {
          c.error(b)
        }
      }
    }

    function g(a) {
      var b = a.indexOf("#");
      return -1 === b ? "" : a.substr(b)
    }

    function h() {
      z = null, j(), k()
    }

    function i() {
      try {
        return n.state
      } catch (a) {
      }
    }

    function j() {
      v = i(), v = t(v) ? null : v, Q(v, C) && (v = C), C = v
    }

    function k() {
      (x !== l.url() || w !== v) && (x = l.url(), w = v, f(A, function (a) {
        a(l.url(), v)
      }))
    }

    var l = this, m = (b[0], a.location), n = a.history, o = a.setTimeout, q = a.clearTimeout, r = {};
    l.isMock = !1;
    var s = 0, u = [];
    l.$$completeOutstandingRequest = e, l.$$incOutstandingRequestCount = function () {
      s++
    }, l.notifyWhenNoOutstandingRequests = function (a) {
      0 === s ? a() : u.push(a)
    };
    var v, w, x = m.href, y = b.find("base"), z = null;
    j(), w = v, l.url = function (b, c, e) {
      if (t(e) && (e = null), m !== a.location && (m = a.location), n !== a.history && (n = a.history), b) {
        var f = w === e;
        if (x === b && (!d.history || f))return l;
        var h = x && Lb(x) === Lb(b);
        return x = b, w = e, !d.history || h && f ? ((!h || z) && (z = b), c ? m.replace(b) : h ? m.hash = g(b) : m.href = b, m.href !== b && (z = b)) : (n[c ? "replaceState" : "pushState"](e, "", b), j(), w = v), l
      }
      return z || m.href.replace(/%27/g, "'")
    }, l.state = function () {
      return v
    };
    var A = [], B = !1, C = null;
    l.onUrlChange = function (b) {
      return B || (d.history && Ed(a).on("popstate", h), Ed(a).on("hashchange", h), B = !0), A.push(b), b
    }, l.$$applicationDestroyed = function () {
      Ed(a).off("hashchange popstate", h)
    }, l.$$checkUrlChange = k, l.baseHref = function () {
      var a = y.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    }, l.defer = function (a, b) {
      var c;
      return s++, c = o(function () {
        delete r[c], e(a)
      }, b || 0), r[c] = !0, c
    }, l.defer.cancel = function (a) {
      return r[a] ? (delete r[a], q(a), e(p), !0) : !1
    }
  }

  function hb() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
      return new gb(a, d, b, c)
    }]
  }

  function ib() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
        }

        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a))
        }

        if (a in b)throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
        var g = 0, h = l({}, c, {id: a}), i = qa(), j = c && c.capacity || Number.MAX_VALUE, k = qa(), m = null, n = null;
        return b[a] = {
          put: function (a, b) {
            if (!t(b)) {
              if (j < Number.MAX_VALUE) {
                var c = k[a] || (k[a] = {key: a});
                e(c)
              }
              return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
            }
          }, get: function (a) {
            if (j < Number.MAX_VALUE) {
              var b = k[a];
              if (!b)return;
              e(b)
            }
            return i[a]
          }, remove: function (a) {
            if (j < Number.MAX_VALUE) {
              var b = k[a];
              if (!b)return;
              b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
            }
            a in i && (delete i[a], g--)
          }, removeAll: function () {
            i = qa(), g = 0, k = qa(), m = n = null
          }, destroy: function () {
            i = null, h = null, k = null, delete b[a]
          }, info: function () {
            return l({}, h, {size: g})
          }
        }
      }

      var b = {};
      return a.info = function () {
        var a = {};
        return f(b, function (b, c) {
          a[c] = b.info()
        }), a
      }, a.get = function (a) {
        return b[a]
      }, a
    }
  }

  function jb() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates")
    }]
  }

  function kb(a, d) {
    function e(a, b, c) {
      var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
      return f(a, function (a, f) {
        var g = a.match(d);
        if (!g)throw Le("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
        e[f] = {mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f}
      }), e
    }

    function g(a, b) {
      var c = {isolateScope: null, bindToController: null};
      if (v(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), v(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), v(c.bindToController)) {
        var d = a.controller, f = a.controllerAs;
        if (!d)throw Le("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
        if (!ob(d, f))throw Le("noident", "Cannot bind to controller without identifier for directive '{0}'.", b)
      }
      return c
    }

    function i(a) {
      var b = a.charAt(0);
      if (!b || b !== yd(b))throw Le("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", a);
      if (a !== a.trim())throw Le("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a)
    }

    var j = {}, k = "Directive", m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, n = /(([\w\-]+)(?:\:([^;]+))?;?)/, s = L("ngSrc,ngSrcset,src,srcset"), w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, y = /^(on[a-z]+|formaction)$/;
    this.directive = function B(b, c) {
      return na(b, "directive"), x(b) ? (i(b), la(c, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], a.factory(b + k, ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];
        return f(j[b], function (e, f) {
          try {
            var h = a.invoke(e);
            A(h) ? h = {compile: r(h)} : !h.compile && h.link && (h.compile = r(h.link)), h.priority = h.priority || 0, h.index = f, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA";
            var i = h.$$bindings = g(h, h.name);
            v(i.isolateScope) && (h.$$isolateBindings = i.isolateScope), h.$$moduleName = e.$$moduleName, d.push(h)
          } catch (j) {
            c(j)
          }
        }), d
      }])), j[b].push(c)) : f(b, h(B)), this
    }, this.aHrefSanitizationWhitelist = function (a) {
      return u(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
    }, this.imgSrcSanitizationWhitelist = function (a) {
      return u(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
    };
    var z = !0;
    this.debugInfoEnabled = function (a) {
      return u(a) ? (z = a, this) : z
    }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, d, e, g, h, i, r, u, B, C) {
      function E(a, b) {
        try {
          a.addClass(b)
        } catch (c) {
        }
      }

      function F(a, b, c, d, e) {
        a instanceof Ed || (a = Ed(a)), f(a, function (b, c) {
          b.nodeType == _d && b.nodeValue.match(/\S+/) && (a[c] = Ed(b).wrap("<span></span>").parent()[0])
        });
        var g = H(a, b, a, c, d, e);
        F.$$addScopeClass(a);
        var h = null;
        return function (b, c, d) {
          la(b, "scope"), e && e.needsNewScope && (b = b.$parent.$new()), d = d || {};
          var f = d.parentBoundTranscludeFn, i = d.transcludeControllers, j = d.futureParentElement;
          f && f.$$boundTransclude && (f = f.$$boundTransclude), h || (h = G(j));
          var k;
          if (k = "html" !== h ? Ed(Z(h, Ed("<div>").append(a).html())) : c ? se.clone.call(a) : a, i)for (var l in i)k.data("$" + l + "Controller", i[l].instance);
          return F.$$addScopeInfo(k, b), c && c(k, b), g && g(b, k, k, f), k
        }
      }

      function G(a) {
        var b = a && a[0];
        return b && "foreignobject" !== M(b) && b.toString().match(/SVG/) ? "svg" : "html"
      }

      function H(a, b, d, e, f, g) {
        function h(a, d, e, f) {
          var g, h, i, j, k, l, m, n, q;
          if (o) {
            var r = d.length;
            for (q = new Array(r), k = 0; k < p.length; k += 3)m = p[k], q[m] = d[m]
          } else q = d;
          for (k = 0, l = p.length; l > k;)i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), F.$$addScopeInfo(Ed(i), j)) : j = a, n = g.transcludeOnThisElement ? I(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? I(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
        }

        for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++)i = new fa, j = J(a[q], [], i, 0 === q ? e : c, f), k = j.length ? O(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
        return n ? h : null
      }

      function I(a, b, c) {
        var d = function (d, e, f, g, h) {
          return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
            parentBoundTranscludeFn: c,
            transcludeControllers: f,
            futureParentElement: g
          })
        };
        return d
      }

      function J(a, b, c, d, e) {
        var f, g, h = a.nodeType, i = c.$attr;
        switch (h) {
          case Zd:
            R(b, lb(M(a)), "E", d, e);
            for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
              var u = !1, w = !1;
              j = r[s], k = j.name, p = Sd(j.value), o = lb(k), (q = ka.test(o)) && (k = k.replace(Me, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase()
              }));
              var y = o.match(ma);
              y && T(y[1]) && (u = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), l = lb(k.toLowerCase()), i[l] = k, (q || !c.hasOwnProperty(l)) && (c[l] = p, Sa(a, l) && (c[l] = !0)), aa(a, b, p, l, q), R(b, l, "A", d, e, u, w)
            }
            if (g = a.className, v(g) && (g = g.animVal), x(g) && "" !== g)for (; f = n.exec(g);)l = lb(f[2]), R(b, l, "C", d, e) && (c[l] = Sd(f[3])), g = g.substr(f.index + f[0].length);
            break;
          case _d:
            if (11 === Dd)for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === _d;)a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
            Y(b, a.nodeValue);
            break;
          case ae:
            try {
              f = m.exec(a.nodeValue), f && (l = lb(f[1]), R(b, l, "M", d, e) && (c[l] = Sd(f[2])))
            } catch (z) {
            }
        }
        return b.sort(W), b
      }

      function K(a, b, c) {
        var d = [], e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a)throw Le("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
            a.nodeType == Zd && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
          } while (e > 0)
        } else d.push(a);
        return Ed(d)
      }

      function L(a, b, c) {
        return function (d, e, f, g, h) {
          return e = K(e[0], b, c), a(d, e, f, g, h)
        }
      }

      function O(a, d, f, g, h, j, k, l, m) {
        function n(a, b, c, d) {
          a && (c && (a = L(a, c, d)), a.require = r.require, a.directiveName = s, (E === r || r.$$isolateScope) && (a = ca(a, {isolateScope: !0})), k.push(a)), b && (c && (b = L(b, c, d)), b.require = r.require, b.directiveName = s, (E === r || r.$$isolateScope) && (b = ca(b, {isolateScope: !0})), l.push(b))
        }

        function o(a, b, c, d) {
          var e;
          if (x(b)) {
            var f = b.match(w), g = b.substring(f[0].length), h = f[1] || f[3], i = "?" === f[2];
            if ("^^" === h ? c = c.parent() : (e = d && d[g], e = e && e.instance), !e) {
              var j = "$" + g + "Controller";
              e = h ? c.inheritedData(j) : c.data(j)
            }
            if (!e && !i)throw Le("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", g, a)
          } else if (Qd(b)) {
            e = [];
            for (var k = 0, l = b.length; l > k; k++)e[k] = o(a, b[k], c, d)
          }
          return e || null
        }

        function p(a, b, c, d, e, f) {
          var g = qa();
          for (var h in d) {
            var j = d[h], k = {
              $scope: j === E || j.$$isolateScope ? e : f,
              $element: a,
              $attrs: b,
              $transclude: c
            }, l = j.controller;
            "@" == l && (l = b[j.name]);
            var m = i(l, k, !0, j.controllerAs);
            g[j.name] = m, N || a.data("$" + j.name + "Controller", m.instance)
          }
          return g
        }

        function q(a, b, e, g, h) {
          function i(a, b, d) {
            var e;
            return D(a) || (d = b, b = a, a = c), N && (e = q), d || (d = N ? s.parent() : s), h(a, b, e, d, H)
          }

          var j, m, n, q, r, s, t, u, v;
          d === e ? (t = f, s = f.$$element) : (s = Ed(e), t = new fa(s, f)), n = b, E ? m = b.$new(!0) : B && (n = b.$parent), h && (r = i, r.$$boundTransclude = h), C && (q = p(s, t, r, C, m, b)), E && (F.$$addScopeInfo(s, m, !0, !(G && (G === E || G === E.$$originalDirective))), F.$$addScopeClass(s, !0), m.$$isolateBindings = E.$$isolateBindings, u = ea(b, t, m, m.$$isolateBindings, E), u && m.$on("$destroy", u));
          for (var w in q) {
            var x = C[w], y = q[w], z = x.$$bindings.bindToController;
            y.identifier && z && (v = ea(n, t, y.instance, z, x));
            var A = y();
            A !== y.instance && (y.instance = A, s.data("$" + x.name + "Controller", A), v && v(), v = ea(n, t, y.instance, z, x))
          }
          for (T = 0, W = k.length; W > T; T++)j = k[T], da(j, j.isolateScope ? m : b, s, t, j.require && o(j.directiveName, j.require, s, q), r);
          var H = b;
          for (E && (E.template || null === E.templateUrl) && (H = m), a && a(H, e.childNodes, c, h), T = l.length - 1; T >= 0; T--)j = l[T], da(j, j.isolateScope ? m : b, s, t, j.require && o(j.directiveName, j.require, s, q), r)
        }

        m = m || {};
        for (var r, s, t, u, y, z = -Number.MAX_VALUE, B = m.newScopeDirective, C = m.controllerDirectives, E = m.newIsolateScopeDirective, G = m.templateDirective, H = m.nonTlbTranscludeDirective, I = !1, M = !1, N = m.hasElementTranscludeDirective, O = f.$$element = Ed(d), Q = j, R = g, T = 0, W = a.length; W > T; T++) {
          r = a[T];
          var Y = r.$$start, _ = r.$$end;
          if (Y && (O = K(d, Y, _)), t = c, z > r.priority)break;
          if ((y = r.scope) && (r.templateUrl || (v(y) ? (X("new/isolated scope", E || B, r, O), E = r) : X("new/isolated scope", E, r, O)), B = B || r), s = r.name, !r.templateUrl && r.controller && (y = r.controller, C = C || qa(), X("'" + s + "' controller", C[s], r, O), C[s] = r), (y = r.transclude) && (I = !0, r.$$tlb || (X("transclusion", H, r, O), H = r), "element" == y ? (N = !0, z = r.priority, t = O, O = f.$$element = Ed(b.createComment(" " + s + ": " + f[s] + " ")), d = O[0], ba(h, S(t), d), R = F(t, g, z, Q && Q.name, {nonTlbTranscludeDirective: H})) : (t = Ed(Da(d)).contents(), O.empty(), R = F(t, g, c, c, {needsNewScope: r.$$isolateScope || r.$$newScope}))), r.template)if (M = !0, X("template", G, r, O), G = r, y = A(r.template) ? r.template(O, f) : r.template, y = ia(y), r.replace) {
            if (Q = r, t = xa(y) ? [] : nb(Z(r.templateNamespace, Sd(y))), d = t[0], 1 != t.length || d.nodeType !== Zd)throw Le("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", s, "");
            ba(h, O, d);
            var aa = {$attr: {}}, ga = J(d, [], aa), ha = a.splice(T + 1, a.length - (T + 1));
            (E || B) && P(ga, E, B), a = a.concat(ga).concat(ha), U(f, aa), W = a.length
          } else O.html(y);
          if (r.templateUrl)M = !0, X("template", G, r, O), G = r, r.replace && (Q = r), q = V(a.splice(T, a.length - T), O, f, h, I && R, k, l, {
            controllerDirectives: C,
            newScopeDirective: B !== r && B,
            newIsolateScopeDirective: E,
            templateDirective: G,
            nonTlbTranscludeDirective: H
          }), W = a.length; else if (r.compile)try {
            u = r.compile(O, f, R), A(u) ? n(null, u, Y, _) : u && n(u.pre, u.post, Y, _)
          } catch (ja) {
            e(ja, $(O))
          }
          r.terminal && (q.terminal = !0, z = Math.max(z, r.priority))
        }
        return q.scope = B && B.scope === !0, q.transcludeOnThisElement = I, q.templateOnThisElement = M, q.transclude = R, m.hasElementTranscludeDirective = N, q
      }

      function P(a, b, c) {
        for (var d = 0, e = a.length; e > d; d++)a[d] = o(a[d], {$$isolateScope: b, $$newScope: c})
      }

      function R(b, c, d, f, g, h, i) {
        if (c === g)return null;
        var l = null;
        if (j.hasOwnProperty(c))for (var m, n = a.get(c + k), p = 0, q = n.length; q > p; p++)try {
          m = n[p], (t(f) || f > m.priority) && -1 != m.restrict.indexOf(d) && (h && (m = o(m, {
            $$start: h,
            $$end: i
          })), b.push(m), l = m)
        } catch (r) {
          e(r)
        }
        return l
      }

      function T(b) {
        if (j.hasOwnProperty(b))for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++)if (c = d[e], c.multiElement)return !0;
        return !1
      }

      function U(a, b) {
        var c = b.$attr, d = a.$attr, e = a.$$element;
        f(a, function (d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
        }), f(b, function (b, f) {
          "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
        })
      }

      function V(a, b, c, d, e, h, i, j) {
        var k, l, m = [], n = b[0], p = a.shift(), q = o(p, {
          templateUrl: null,
          transclude: null,
          replace: null,
          $$originalDirective: p
        }), r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
        return b.empty(), g(r).then(function (g) {
          var o, t, u, w;
          if (g = ia(g), p.replace) {
            if (u = xa(g) ? [] : nb(Z(s, Sd(g))), o = u[0], 1 != u.length || o.nodeType !== Zd)throw Le("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
            t = {$attr: {}}, ba(d, b, o);
            var x = J(o, [], t);
            v(p.scope) && P(x, !0), a = x.concat(a), U(c, t)
          } else o = n, b.html(g);
          for (a.unshift(q), k = O(a, o, c, e, b, p, h, i, j), f(d, function (a, c) {
            a == o && (d[c] = b[0])
          }), l = H(b[0].childNodes, e); m.length;) {
            var y = m.shift(), z = m.shift(), A = m.shift(), B = m.shift(), C = b[0];
            if (!y.$$destroyed) {
              if (z !== n) {
                var D = z.className;
                j.hasElementTranscludeDirective && p.replace || (C = Da(o)), ba(A, Ed(z), C), E(Ed(C), D)
              }
              w = k.transcludeOnThisElement ? I(y, k.transclude, B) : B, k(l, y, C, d, w)
            }
          }
          m = null
        }), function (a, b, c, d, e) {
          var f = e;
          b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = I(b, k.transclude, e)), k(l, b, c, d, f)))
        }
      }

      function W(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
      }

      function X(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : ""
        }

        if (b)throw Le("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, $(d))
      }

      function Y(a, b) {
        var c = d(b, !0);
        c && a.push({
          priority: 0, compile: function (a) {
            var b = a.parent(), d = !!b.length;
            return d && F.$$addBindingClass(b), function (a, b) {
              var e = b.parent();
              d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function (a) {
                b[0].nodeValue = a
              })
            }
          }
        })
      }

      function Z(a, c) {
        switch (a = yd(a || "html")) {
          case"svg":
          case"math":
            var d = b.createElement("div");
            return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
          default:
            return c
        }
      }

      function _(a, b) {
        if ("srcdoc" == b)return u.HTML;
        var c = M(a);
        return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? u.RESOURCE_URL : void 0
      }

      function aa(a, b, c, e, f) {
        var g = _(a, e);
        f = s[e] || f;
        var h = d(c, !0, g, f);
        if (h) {
          if ("multiple" === e && "select" === M(a))throw Le("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", $(a));
          b.push({
            priority: 100, compile: function () {
              return {
                pre: function (a, b, i) {
                  var j = i.$$observers || (i.$$observers = qa());
                  if (y.test(e))throw Le("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                  var k = i[e];
                  k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                    "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                  }))
                }
              }
            }
          })
        }
      }

      function ba(a, c, d) {
        var e, f, g = c[0], h = c.length, i = g.parentNode;
        if (a)for (e = 0, f = a.length; f > e; e++)if (a[e] == g) {
          a[e++] = d;
          for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++)l > k ? a[j] = a[k] : delete a[j];
          a.length -= h - 1, a.context === g && (a.context = d);
          break
        }
        i && i.replaceChild(d, g);
        var m = b.createDocumentFragment();
        m.appendChild(g), Ed.hasData(g) && (Ed.data(d, Ed.data(g)), Fd ? (Pd = !0, Fd.cleanData([g])) : delete Ed.cache[g[Ed.expando]]);
        for (var n = 1, o = c.length; o > n; n++) {
          var p = c[n];
          Ed(p).remove(), m.appendChild(p), delete c[n]
        }
        c[0] = d, c.length = 1
      }

      function ca(a, b) {
        return l(function () {
          return a.apply(null, arguments)
        }, a, b)
      }

      function da(a, b, c, d, f, g) {
        try {
          a(b, c, d, f, g)
        } catch (h) {
          e(h, $(c))
        }
      }

      function ea(a, b, c, e, g) {
        var i = [];
        return f(e, function (e, f) {
          var j, k, l, m, n = e.attrName, o = e.optional, q = e.mode;
          switch (q) {
            case"@":
              o || zd.call(b, n) || (c[f] = b[n] = void 0), b.$observe(n, function (a) {
                x(a) && (c[f] = a)
              }), b.$$observers[n].$$scope = a, x(b[n]) && (c[f] = d(b[n])(a));
              break;
            case"=":
              if (!zd.call(b, n)) {
                if (o)break;
                b[n] = void 0
              }
              if (o && !b[n])break;
              k = h(b[n]), m = k.literal ? Q : function (a, b) {
                return a === b || a !== a && b !== b
              }, l = k.assign || function () {
                  throw j = c[f] = k(a), Le("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", b[n], g.name)
                }, j = c[f] = k(a);
              var r = function (b) {
                return m(b, c[f]) || (m(b, j) ? l(a, b = c[f]) : c[f] = b), j = b
              };
              r.$stateful = !0;
              var s;
              s = e.collection ? a.$watchCollection(b[n], r) : a.$watch(h(b[n], r), null, k.literal), i.push(s);
              break;
            case"&":
              if (k = b.hasOwnProperty(n) ? h(b[n]) : p, k === p && o)break;
              c[f] = function (b) {
                return k(a, b)
              }
          }
        }), i.length && function () {
          for (var a = 0, b = i.length; b > a; ++a)i[a]()
        }
      }

      var fa = function (a, b) {
        if (b) {
          var c, d, e, f = Object.keys(b);
          for (c = 0, d = f.length; d > c; c++)e = f[c], this[e] = b[e]
        } else this.$attr = {};
        this.$$element = a
      };
      fa.prototype = {
        $normalize: lb, $addClass: function (a) {
          a && a.length > 0 && B.addClass(this.$$element, a)
        }, $removeClass: function (a) {
          a && a.length > 0 && B.removeClass(this.$$element, a)
        }, $updateClass: function (a, b) {
          var c = mb(a, b);
          c && c.length && B.addClass(this.$$element, c);
          var d = mb(b, a);
          d && d.length && B.removeClass(this.$$element, d)
        }, $set: function (a, b, c, d) {
          var g, h = this.$$element[0], i = Sa(h, a), j = Ta(a), k = a;
          if (i ? (this.$$element.prop(a, b), d = i) : j && (this[j] = b, k = j), this[a] = b, d ? this.$attr[a] = d : (d = this.$attr[a], d || (this.$attr[a] = d = ja(a, "-"))), g = M(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a)this[a] = b = C(b, "src" === a); else if ("img" === g && "srcset" === a) {
            for (var l = "", m = Sd(b), n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, o = /\s/.test(m) ? n : /(,)/, p = m.split(o), q = Math.floor(p.length / 2), r = 0; q > r; r++) {
              var s = 2 * r;
              l += C(Sd(p[s]), !0), l += " " + Sd(p[s + 1])
            }
            var u = Sd(p[2 * r]).split(/\s/);
            l += C(Sd(u[0]), !0), 2 === u.length && (l += " " + Sd(u[1])), this[a] = b = l
          }
          c !== !1 && (null === b || t(b) ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
          var v = this.$$observers;
          v && f(v[k], function (a) {
            try {
              a(b)
            } catch (c) {
              e(c)
            }
          })
        }, $observe: function (a, b) {
          var c = this, d = c.$$observers || (c.$$observers = qa()), e = d[a] || (d[a] = []);
          return e.push(b), r.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || t(c[a]) || b(c[a])
          }), function () {
            N(e, b)
          }
        }
      };
      var ga = d.startSymbol(), ha = d.endSymbol(), ia = "{{" == ga || "}}" == ha ? q : function (a) {
        return a.replace(/\{\{/g, ga).replace(/}}/g, ha)
      }, ka = /^ngAttr[A-Z]/, ma = /^(.+)Start$/;
      return F.$$addBindingInfo = z ? function (a, b) {
        var c = a.data("$binding") || [];
        Qd(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
      } : p, F.$$addBindingClass = z ? function (a) {
        E(a, "ng-binding")
      } : p, F.$$addScopeInfo = z ? function (a, b, c, d) {
        var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
        a.data(e, b)
      } : p, F.$$addScopeClass = z ? function (a, b) {
        E(a, b ? "ng-isolate-scope" : "ng-scope")
      } : p, F
    }]
  }

  function lb(a) {
    return wa(a.replace(Me, ""))
  }

  function mb(a, b) {
    var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
    a:for (var f = 0; f < d.length; f++) {
      for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
      c += (c.length > 0 ? " " : "") + g
    }
    return c
  }

  function nb(a) {
    a = Ed(a);
    var b = a.length;
    if (1 >= b)return a;
    for (; b--;) {
      var c = a[b];
      c.nodeType === ae && Id.call(a, b, 1)
    }
    return a
  }

  function ob(a, b) {
    if (b && x(b))return b;
    if (x(a)) {
      var c = Oe.exec(a);
      if (c)return c[3]
    }
  }

  function pb() {
    var a = {}, b = !1;
    this.register = function (b, c) {
      na(b, "controller"), v(b) ? l(a, b) : a[b] = c
    }, this.allowGlobals = function () {
      b = !0
    }, this.$get = ["$injector", "$window", function (e, f) {
      function g(a, b, c, e) {
        if (!a || !v(a.$scope))throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
        a.$scope[b] = c
      }

      return function (d, h, i, j) {
        var k, m, n, o;
        if (i = i === !0, j && x(j) && (o = j), x(d)) {
          if (m = d.match(Oe), !m)throw Ne("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
          n = m[1], o = o || m[3], d = a.hasOwnProperty(n) ? a[n] : oa(h.$scope, n, !0) || (b ? oa(f, n, !0) : c), ma(d, n, !0)
        }
        if (i) {
          var p = (Qd(d) ? d[d.length - 1] : d).prototype;
          k = Object.create(p || null), o && g(h, o, k, n || d.name);
          var q;
          return q = l(function () {
            var a = e.invoke(d, k, h, n);
            return a !== k && (v(a) || A(a)) && (k = a, o && g(h, o, k, n || d.name)), k
          }, {instance: k, identifier: o})
        }
        return k = e.instantiate(d, h, n), o && g(h, o, k, n || d.name), k
      }
    }]
  }

  function qb() {
    this.$get = ["$window", function (a) {
      return Ed(a.document)
    }]
  }

  function rb() {
    this.$get = ["$log", function (a) {
      return function (b, c) {
        a.error.apply(a, arguments)
      }
    }]
  }

  function sb(a) {
    return v(a) ? z(a) ? a.toISOString() : V(a) : a
  }

  function tb() {
    this.$get = function () {
      return function (a) {
        if (!a)return "";
        var b = [];
        return g(a, function (a, c) {
          null === a || t(a) || (Qd(a) ? f(a, function (a, d) {
            b.push(da(c) + "=" + da(sb(a)))
          }) : b.push(da(c) + "=" + da(sb(a))))
        }), b.join("&")
      }
    }
  }

  function ub() {
    this.$get = function () {
      return function (a) {
        function b(a, d, e) {
          null === a || t(a) || (Qd(a) ? f(a, function (a, c) {
            b(a, d + "[" + (v(a) ? c : "") + "]")
          }) : v(a) && !z(a) ? g(a, function (a, c) {
            b(a, d + (e ? "" : "[") + c + (e ? "" : "]"))
          }) : c.push(da(d) + "=" + da(sb(a))))
        }

        if (!a)return "";
        var c = [];
        return b(a, "", !0), c.join("&")
      }
    }
  }

  function vb(a, b) {
    if (x(a)) {
      var c = a.replace(Ue, "").trim();
      if (c) {
        var d = b("Content-Type");
        (d && 0 === d.indexOf(Qe) || wb(c)) && (a = W(c))
      }
    }
    return a
  }

  function wb(a) {
    var b = a.match(Se);
    return b && Te[b[0]].test(a)
  }

  function xb(a) {
    function b(a, b) {
      a && (d[a] = d[a] ? d[a] + ", " + b : b)
    }

    var c, d = qa();
    return x(a) ? f(a.split("\n"), function (a) {
      c = a.indexOf(":"), b(yd(Sd(a.substr(0, c))), Sd(a.substr(c + 1)))
    }) : v(a) && f(a, function (a, c) {
      b(yd(c), Sd(a))
    }), d
  }

  function yb(a) {
    var b;
    return function (c) {
      if (b || (b = xb(a)), c) {
        var d = b[yd(c)];
        return void 0 === d && (d = null), d
      }
      return b
    }
  }

  function zb(a, b, c, d) {
    return A(d) ? d(a, b, c) : (f(d, function (d) {
      a = d(a, b, c)
    }), a)
  }

  function Ab(a) {
    return a >= 200 && 300 > a
  }

  function Bb() {
    var a = this.defaults = {
      transformResponse: [vb],
      transformRequest: [function (a) {
        return !v(a) || E(a) || G(a) || F(a) ? a : V(a)
      }],
      headers: {common: {Accept: "application/json, text/plain, */*"}, post: P(Re), put: P(Re), patch: P(Re)},
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      paramSerializer: "$httpParamSerializer"
    }, b = !1;
    this.useApplyAsync = function (a) {
      return u(a) ? (b = !!a, this) : b
    };
    var e = !0;
    this.useLegacyPromiseExtensions = function (a) {
      return u(a) ? (e = !!a, this) : e
    };
    var g = this.interceptors = [];
    this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (h, i, j, k, m, n) {
      function o(b) {
        function g(a) {
          var b = l({}, a);
          return b.data = zb(a.data, a.headers, a.status, j.transformResponse), Ab(a.status) ? b : m.reject(b)
        }

        function h(a, b) {
          var c, d = {};
          return f(a, function (a, e) {
            A(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
          }), d
        }

        function i(b) {
          var c, d, e, f = a.headers, g = l({}, b.headers);
          f = l({}, f.common, f[yd(b.method)]);
          a:for (c in f) {
            d = yd(c);
            for (e in g)if (yd(e) === d)continue a;
            g[c] = f[c]
          }
          return h(g, P(b))
        }

        if (!Nd.isObject(b))throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
        if (!x(b.url))throw d("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", b.url);
        var j = l({
          method: "get",
          transformRequest: a.transformRequest,
          transformResponse: a.transformResponse,
          paramSerializer: a.paramSerializer
        }, b);
        j.headers = i(b), j.method = Ad(j.method), j.paramSerializer = x(j.paramSerializer) ? n.get(j.paramSerializer) : j.paramSerializer;
        var k = function (b) {
          var d = b.headers, e = zb(b.data, yb(d), c, b.transformRequest);
          return t(e) && f(d, function (a, b) {
            "content-type" === yd(b) && delete d[b]
          }), t(b.withCredentials) && !t(a.withCredentials) && (b.withCredentials = a.withCredentials), r(b, e).then(g, g)
        }, o = [k, c], p = m.when(j);
        for (f(y, function (a) {
          (a.request || a.requestError) && o.unshift(a.request, a.requestError), (a.response || a.responseError) && o.push(a.response, a.responseError)
        }); o.length;) {
          var q = o.shift(), s = o.shift();
          p = p.then(q, s)
        }
        return e ? (p.success = function (a) {
          return ma(a, "fn"), p.then(function (b) {
            a(b.data, b.status, b.headers, j)
          }), p
        }, p.error = function (a) {
          return ma(a, "fn"), p.then(null, function (b) {
            a(b.data, b.status, b.headers, j)
          }), p
        }) : (p.success = We("success"), p.error = We("error")), p
      }

      function p(a) {
        f(arguments, function (a) {
          o[a] = function (b, c) {
            return o(l({}, c || {}, {method: a, url: b}))
          }
        })
      }

      function q(a) {
        f(arguments, function (a) {
          o[a] = function (b, c, d) {
            return o(l({}, d || {}, {method: a, url: b, data: c}))
          }
        })
      }

      function r(d, e) {
        function f(a, c, d, e) {
          function f() {
            g(c, a, d, e)
          }

          n && (Ab(a) ? n.put(y, [a, c, xb(d), e]) : n.remove(y)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
        }

        function g(a, b, c, e) {
          b = b >= -1 ? b : 0, (Ab(b) ? q.resolve : q.reject)({
            data: a,
            status: b,
            headers: yb(c),
            config: d,
            statusText: e
          })
        }

        function j(a) {
          g(a.data, a.status, P(a.headers()), a.statusText)
        }

        function l() {
          var a = o.pendingRequests.indexOf(d);
          -1 !== a && o.pendingRequests.splice(a, 1)
        }

        var n, p, q = m.defer(), r = q.promise, x = d.headers, y = s(d.url, d.paramSerializer(d.params));
        if (o.pendingRequests.push(d), r.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = v(d.cache) ? d.cache : v(a.cache) ? a.cache : w), n && (p = n.get(y), u(p) ? I(p) ? p.then(j, j) : Qd(p) ? g(p[1], p[0], P(p[2]), p[3]) : g(p, 200, {}, "OK") : n.put(y, r)), t(p)) {
          var z = Cc(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c;
          z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z), h(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType)
        }
        return r
      }

      function s(a, b) {
        return b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
      }

      var w = j("$http");
      a.paramSerializer = x(a.paramSerializer) ? n.get(a.paramSerializer) : a.paramSerializer;
      var y = [];
      return f(g, function (a) {
        y.unshift(x(a) ? n.get(a) : n.invoke(a))
      }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
    }]
  }

  function Cb() {
    this.$get = function () {
      return function () {
        return new a.XMLHttpRequest
      }
    }
  }

  function Db() {
    this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, c, d) {
      return Eb(a, d, a.defer, b.angular.callbacks, c[0])
    }]
  }

  function Eb(a, b, c, d, e) {
    function g(a, b, c) {
      var f = e.createElement("script"), g = null;
      return f.type = "text/javascript", f.src = a, f.async = !0, g = function (a) {
        he(f, "load", g), he(f, "error", g), e.body.removeChild(f), f = null;
        var h = -1, i = "unknown";
        a && ("load" !== a.type || d[b].called || (a = {type: "error"}), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
      }, ge(f, "load", g), ge(f, "error", g), e.body.appendChild(f), g
    }

    return function (e, h, i, j, k, l, m, n) {
      function o() {
        s && s(), v && v.abort()
      }

      function q(b, d, e, f, g) {
        u(y) && c.cancel(y), s = v = null, b(d, e, f, g), a.$$completeOutstandingRequest(p)
      }

      if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == yd(e)) {
        var r = "_" + (d.counter++).toString(36);
        d[r] = function (a) {
          d[r].data = a, d[r].called = !0
        };
        var s = g(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function (a, b) {
          q(j, a, d[r].data, "", b), d[r] = p
        })
      } else {
        var v = b(e, h);
        v.open(e, h, !0), f(k, function (a, b) {
          u(a) && v.setRequestHeader(b, a)
        }), v.onload = function () {
          var a = v.statusText || "", b = "response" in v ? v.response : v.responseText, c = 1223 === v.status ? 204 : v.status;
          0 === c && (c = b ? 200 : "file" == Bc(h).protocol ? 404 : 0), q(j, c, b, v.getAllResponseHeaders(), a)
        };
        var w = function () {
          q(j, -1, null, null, "")
        };
        if (v.onerror = w, v.onabort = w, m && (v.withCredentials = !0), n)try {
          v.responseType = n
        } catch (x) {
          if ("json" !== n)throw x
        }
        v.send(t(i) ? null : i)
      }
      if (l > 0)var y = c(o, l); else I(l) && l.then(o)
    }
  }

  function Fb() {
    var a = "{{", b = "}}";
    this.startSymbol = function (b) {
      return b ? (a = b, this) : a
    }, this.endSymbol = function (a) {
      return a ? (b = a, this) : b
    }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
      function f(a) {
        return "\\\\\\" + a
      }

      function g(c) {
        return c.replace(m, a).replace(n, b)
      }

      function h(a) {
        if (null == a)return "";
        switch (typeof a) {
          case"string":
            break;
          case"number":
            a = "" + a;
            break;
          default:
            a = V(a)
        }
        return a
      }

      function i(f, i, m, n) {
        function o(a) {
          try {
            return a = C(a), n && !u(a) ? a : h(a)
          } catch (b) {
            d(Xe.interr(f, b))
          }
        }

        n = !!n;
        for (var p, q, r, s = 0, v = [], w = [], x = f.length, y = [], z = []; x > s;) {
          if (-1 == (p = f.indexOf(a, s)) || -1 == (q = f.indexOf(b, p + j))) {
            s !== x && y.push(g(f.substring(s)));
            break
          }
          s !== p && y.push(g(f.substring(s, p))), r = f.substring(p + j, q), v.push(r), w.push(c(r, o)), s = q + k, z.push(y.length), y.push("")
        }
        if (m && y.length > 1 && Xe.throwNoconcat(f), !i || v.length) {
          var B = function (a) {
            for (var b = 0, c = v.length; c > b; b++) {
              if (n && t(a[b]))return;
              y[z[b]] = a[b]
            }
            return y.join("")
          }, C = function (a) {
            return m ? e.getTrusted(m, a) : e.valueOf(a)
          };
          return l(function (a) {
            var b = 0, c = v.length, e = new Array(c);
            try {
              for (; c > b; b++)e[b] = w[b](a);
              return B(e)
            } catch (g) {
              d(Xe.interr(f, g))
            }
          }, {
            exp: f, expressions: v, $$watchDelegate: function (a, b) {
              var c;
              return a.$watchGroup(w, function (d, e) {
                var f = B(d);
                A(b) && b.call(this, f, d !== e ? c : f, a), c = f
              })
            }
          })
        }
      }

      var j = a.length, k = b.length, m = new RegExp(a.replace(/./g, f), "g"), n = new RegExp(b.replace(/./g, f), "g");
      return i.startSymbol = function () {
        return a
      }, i.endSymbol = function () {
        return b
      }, i
    }]
  }

  function Gb() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", function (a, b, c, d) {
      function e(e, g, h, i) {
        var j = arguments.length > 4, k = j ? S(arguments, 4) : [], l = b.setInterval, m = b.clearInterval, n = 0, o = u(i) && !i, p = (o ? d : c).defer(), q = p.promise;
        return h = u(h) ? h : 0, q.then(null, null, j ? function () {
          e.apply(null, k)
        } : e), q.$$intervalId = l(function () {
          p.notify(n++), h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]), o || a.$apply()
        }, g), f[q.$$intervalId] = p, q
      }

      var f = {};
      return e.cancel = function (a) {
        return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
      }, e
    }]
  }

  function Hb(a) {
    for (var b = a.split("/"), c = b.length; c--;)b[c] = ca(b[c]);
    return b.join("/")
  }

  function Ib(a, b) {
    var c = Bc(a);
    b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = n(c.port) || Ze[c.protocol] || null
  }

  function Jb(a, b) {
    var c = "/" !== a.charAt(0);
    c && (a = "/" + a);
    var d = Bc(a);
    b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = aa(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
  }

  function Kb(a, b) {
    return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
  }

  function Lb(a) {
    var b = a.indexOf("#");
    return -1 == b ? a : a.substr(0, b)
  }

  function Mb(a) {
    return a.replace(/(#.+)|#$/, "$1")
  }

  function Nb(a) {
    return a.substr(0, Lb(a).lastIndexOf("/") + 1)
  }

  function Ob(a) {
    return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
  }

  function Pb(a, b, c) {
    this.$$html5 = !0, c = c || "", Ib(a, this), this.$$parse = function (a) {
      var c = Kb(b, a);
      if (!x(c))throw $e("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, b);
      Jb(c, this), this.$$path || (this.$$path = "/"), this.$$compose()
    }, this.$$compose = function () {
      var a = ba(this.$$search), c = this.$$hash ? "#" + ca(this.$$hash) : "";
      this.$$url = Hb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1)
    }, this.$$parseLinkUrl = function (d, e) {
      if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
      var f, g, h;
      return u(f = Kb(a, d)) ? (g = f, h = u(f = Kb(c, f)) ? b + (Kb("/", f) || f) : a + g) : u(f = Kb(b, d)) ? h = b + f : b == d + "/" && (h = b), h && this.$$parse(h), !!h
    }
  }

  function Qb(a, b, c) {
    Ib(a, this), this.$$parse = function (d) {
      function e(a, b, c) {
        var d, e = /^\/[A-Z]:(\/.*)/;
        return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
      }

      var f, g = Kb(a, d) || Kb(b, d);
      t(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", t(g) && (a = d, this.replace())) : (f = Kb(c, g), t(f) && (f = g)), Jb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
    }, this.$$compose = function () {
      var b = ba(this.$$search), d = this.$$hash ? "#" + ca(this.$$hash) : "";
      this.$$url = Hb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "")
    }, this.$$parseLinkUrl = function (b, c) {
      return Lb(a) == Lb(b) ? (this.$$parse(b), !0) : !1
    }
  }

  function Rb(a, b, c) {
    this.$$html5 = !0, Qb.apply(this, arguments), this.$$parseLinkUrl = function (d, e) {
      if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
      var f, g;
      return a == Lb(d) ? f = d : (g = Kb(b, d)) ? f = a + c + g : b === d + "/" && (f = b), f && this.$$parse(f), !!f
    }, this.$$compose = function () {
      var b = ba(this.$$search), d = this.$$hash ? "#" + ca(this.$$hash) : "";
      this.$$url = Hb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url
    }
  }

  function Sb(a) {
    return function () {
      return this[a]
    }
  }

  function Tb(a, b) {
    return function (c) {
      return t(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
    }
  }

  function Ub() {
    var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
    this.hashPrefix = function (b) {
      return u(b) ? (a = b, this) : a
    }, this.html5Mode = function (a) {
      return H(a) ? (b.enabled = a, this) : v(a) ? (H(a.enabled) && (b.enabled = a.enabled), H(a.requireBase) && (b.requireBase = a.requireBase), H(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
    }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
      function h(a, b, c) {
        var e = j.url(), f = j.$$state;
        try {
          d.url(a, b, c), j.$$state = d.state()
        } catch (g) {
          throw j.url(e), j.$$state = f, g
        }
      }

      function i(a, b) {
        c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
      }

      var j, k, l, m = d.baseHref(), n = d.url();
      if (b.enabled) {
        if (!m && b.requireBase)throw $e("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
        l = Ob(n) + (m || "/"), k = e.history ? Pb : Rb
      } else l = Lb(n), k = Qb;
      var o = Nb(l);
      j = new k(l, o, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
      var p = /^\s*(javascript|mailto):/i;
      f.on("click", function (a) {
        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
          for (var e = Ed(a.target); "a" !== M(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
          var h = e.prop("href"), i = e.attr("href") || e.attr("xlink:href");
          v(h) && "[object SVGAnimatedString]" === h.toString() && (h = Bc(h.animVal).href), p.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
        }
      }), Mb(j.absUrl()) != Mb(n) && d.url(j.absUrl(), !0);
      var q = !0;
      return d.onUrlChange(function (a, b) {
        return t(Kb(o, a)) ? void(g.location.href = a) : (c.$evalAsync(function () {
          var d, e = j.absUrl(), f = j.$$state;
          a = Mb(a), j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (q = !1, i(e, f)))
        }), void(c.$$phase || c.$digest()))
      }), c.$watch(function () {
        var a = Mb(d.url()), b = Mb(j.absUrl()), f = d.state(), g = j.$$replace, k = a !== b || j.$$html5 && e.history && f !== j.$$state;
        (q || k) && (q = !1, c.$evalAsync(function () {
          var b = j.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
          j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
        })), j.$$replace = !1
      }), j
    }]
  }

  function Vb() {
    var a = !0, b = this;
    this.debugEnabled = function (b) {
      return u(b) ? (a = b, this) : a
    }, this.$get = ["$window", function (c) {
      function d(a) {
        return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
      }

      function e(a) {
        var b = c.console || {}, e = b[a] || b.log || p, g = !1;
        try {
          g = !!e.apply
        } catch (h) {
        }
        return g ? function () {
          var a = [];
          return f(arguments, function (b) {
            a.push(d(b))
          }), e.apply(b, a)
        } : function (a, b) {
          e(a, null == b ? "" : b)
        }
      }

      return {
        log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
          var c = e("debug");
          return function () {
            a && c.apply(b, arguments)
          }
        }()
      }
    }]
  }

  function Wb(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)throw af("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
    return a
  }

  function Xb(a, b) {
    if (a += "", !x(a))throw af("iseccst", "Cannot convert object to primitive value! Expression: {0}", b);
    return a
  }

  function Yb(a, b) {
    if (a) {
      if (a.constructor === a)throw af("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
      if (a.window === a)throw af("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
      if (a.children && (a.nodeName || a.prop && a.attr && a.find))throw af("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
      if (a === Object)throw af("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
    }
    return a
  }

  function Zb(a, b) {
    if (a) {
      if (a.constructor === a)throw af("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
      if (a === bf || a === cf || a === df)throw af("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
    }
  }

  function $b(a, b) {
    if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor))throw af("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", b)
  }

  function _b(a, b) {
    return "undefined" != typeof a ? a : b
  }

  function ac(a, b) {
    return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
  }

  function bc(a, b) {
    var c = a(b);
    return !c.$stateful
  }

  function cc(a, b) {
    var c, d;
    switch (a.type) {
      case hf.Program:
        c = !0, f(a.body, function (a) {
          cc(a.expression, b), c = c && a.expression.constant
        }), a.constant = c;
        break;
      case hf.Literal:
        a.constant = !0, a.toWatch = [];
        break;
      case hf.UnaryExpression:
        cc(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
        break;
      case hf.BinaryExpression:
        cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
        break;
      case hf.LogicalExpression:
        cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
        break;
      case hf.ConditionalExpression:
        cc(a.test, b), cc(a.alternate, b), cc(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
        break;
      case hf.Identifier:
        a.constant = !1, a.toWatch = [a];
        break;
      case hf.MemberExpression:
        cc(a.object, b), a.computed && cc(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
        break;
      case hf.CallExpression:
        c = a.filter ? bc(b, a.callee.name) : !1, d = [], f(a.arguments, function (a) {
          cc(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
        }), a.constant = c, a.toWatch = a.filter && bc(b, a.callee.name) ? d : [a];
        break;
      case hf.AssignmentExpression:
        cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
        break;
      case hf.ArrayExpression:
        c = !0, d = [], f(a.elements, function (a) {
          cc(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
        }), a.constant = c, a.toWatch = d;
        break;
      case hf.ObjectExpression:
        c = !0, d = [], f(a.properties, function (a) {
          cc(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch)
        }), a.constant = c, a.toWatch = d;
        break;
      case hf.ThisExpression:
        a.constant = !1, a.toWatch = []
    }
  }

  function dc(a) {
    if (1 == a.length) {
      var b = a[0].expression, d = b.toWatch;
      return 1 !== d.length ? d : d[0] !== b ? d : c
    }
  }

  function ec(a) {
    return a.type === hf.Identifier || a.type === hf.MemberExpression
  }

  function fc(a) {
    return 1 === a.body.length && ec(a.body[0].expression) ? {
      type: hf.AssignmentExpression,
      left: a.body[0].expression,
      right: {type: hf.NGValueParameter},
      operator: "="
    } : void 0
  }

  function gc(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === hf.Literal || a.body[0].expression.type === hf.ArrayExpression || a.body[0].expression.type === hf.ObjectExpression)
  }

  function hc(a) {
    return a.constant
  }

  function ic(a, b) {
    this.astBuilder = a, this.$filter = b
  }

  function jc(a, b) {
    this.astBuilder = a, this.$filter = b
  }

  function kc(a) {
    return "constructor" == a
  }

  function lc(a) {
    return A(a.valueOf) ? a.valueOf() : kf.call(a)
  }

  function mc() {
    var a = qa(), b = qa();
    this.$get = ["$filter", function (d) {
      function e(a, b) {
        return null == a || null == b ? a === b : "object" == typeof a && (a = lc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
      }

      function g(a, b, d, f, g) {
        var h, i = f.inputs;
        if (1 === i.length) {
          var j = e;
          return i = i[0], a.$watch(function (a) {
            var b = i(a);
            return e(b, j) || (h = f(a, c, c, [b]), j = b && lc(b)), h
          }, b, d, g)
        }
        for (var k = [], l = [], m = 0, n = i.length; n > m; m++)k[m] = e, l[m] = null;
        return a.$watch(function (a) {
          for (var b = !1, d = 0, g = i.length; g > d; d++) {
            var j = i[d](a);
            (b || (b = !e(j, k[d]))) && (l[d] = j, k[d] = j && lc(j))
          }
          return b && (h = f(a, c, c, l)), h
        }, b, d, g)
      }

      function h(a, b, c, d) {
        var e, f;
        return e = a.$watch(function (a) {
          return d(a)
        }, function (a, c, d) {
          f = a, A(b) && b.apply(this, arguments), u(a) && d.$$postDigest(function () {
            u(f) && e()
          })
        }, c)
      }

      function i(a, b, c, d) {
        function e(a) {
          var b = !0;
          return f(a, function (a) {
            u(a) || (b = !1)
          }), b
        }

        var g, h;
        return g = a.$watch(function (a) {
          return d(a)
        }, function (a, c, d) {
          h = a, A(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function () {
            e(h) && g()
          })
        }, c)
      }

      function j(a, b, c, d) {
        var e;
        return e = a.$watch(function (a) {
          return d(a)
        }, function (a, c, d) {
          A(b) && b.apply(this, arguments), e()
        }, c)
      }

      function k(a, b) {
        if (!b)return a;
        var c = a.$$watchDelegate, d = !1, e = c !== i && c !== h, f = e ? function (c, e, f, g) {
          var h = d && g ? g[0] : a(c, e, f, g);
          return b(h, c, e)
        } : function (c, d, e, f) {
          var g = a(c, d, e, f), h = b(g, c, d);
          return u(g) ? h : g
        };
        return a.$$watchDelegate && a.$$watchDelegate !== g ? f.$$watchDelegate = a.$$watchDelegate : b.$stateful || (f.$$watchDelegate = g, d = !a.inputs, f.inputs = a.inputs ? a.inputs : [a]), f
      }

      var l = Ud().noUnsafeEval, m = {csp: l, expensiveChecks: !1}, n = {csp: l, expensiveChecks: !0};
      return function (c, e, f) {
        var l, o, q;
        switch (typeof c) {
          case"string":
            c = c.trim(), q = c;
            var r = f ? b : a;
            if (l = r[q], !l) {
              ":" === c.charAt(0) && ":" === c.charAt(1) && (o = !0, c = c.substring(2));
              var s = f ? n : m, t = new gf(s), u = new jf(t, d, s);
              l = u.parse(c), l.constant ? l.$$watchDelegate = j : o ? l.$$watchDelegate = l.literal ? i : h : l.inputs && (l.$$watchDelegate = g), r[q] = l
            }
            return k(l, e);
          case"function":
            return k(c, e);
          default:
            return k(p, e)
        }
      }
    }]
  }

  function nc() {
    this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
      return pc(function (b) {
        a.$evalAsync(b)
      }, b)
    }]
  }

  function oc() {
    this.$get = ["$browser", "$exceptionHandler", function (a, b) {
      return pc(function (b) {
        a.defer(b)
      }, b)
    }]
  }

  function pc(a, b) {
    function e(a, b, c) {
      function d(b) {
        return function (c) {
          e || (e = !0, b.call(a, c))
        }
      }

      var e = !1;
      return [d(b), d(c)]
    }

    function g() {
      this.$$state = {status: 0}
    }

    function h(a, b) {
      return function (c) {
        b.call(a, c)
      }
    }

    function i(a) {
      var d, e, f;
      f = a.pending, a.processScheduled = !1, a.pending = c;
      for (var g = 0, h = f.length; h > g; ++g) {
        e = f[g][0], d = f[g][a.status];
        try {
          A(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
        } catch (i) {
          e.reject(i), b(i)
        }
      }
    }

    function j(b) {
      !b.processScheduled && b.pending && (b.processScheduled = !0, a(function () {
        i(b)
      }))
    }

    function k() {
      this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
    }

    function m(a) {
      var b = new k, c = 0, d = Qd(a) ? [] : {};
      return f(a, function (a, e) {
        c++, s(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a)
        })
      }), 0 === c && b.resolve(d), b.promise
    }

    var n = d("$q", TypeError), o = function () {
      return new k
    };
    l(g.prototype, {
      then: function (a, b, c) {
        if (t(a) && t(b) && t(c))return this;
        var d = new k;
        return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
      }, "catch": function (a) {
        return this.then(null, a)
      }, "finally": function (a, b) {
        return this.then(function (b) {
          return r(b, !0, a)
        }, function (b) {
          return r(b, !1, a)
        }, b)
      }
    }), l(k.prototype, {
      resolve: function (a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(n("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
      }, $$resolve: function (a) {
        var c, d;
        d = e(this, this.$$resolve, this.$$reject);
        try {
          (v(a) || A(a)) && (c = a && a.then), A(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
        } catch (f) {
          d[1](f), b(f)
        }
      }, reject: function (a) {
        this.promise.$$state.status || this.$$reject(a)
      }, $$reject: function (a) {
        this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
      }, notify: function (c) {
        var d = this.promise.$$state.pending;
        this.promise.$$state.status <= 0 && d && d.length && a(function () {
          for (var a, e, f = 0, g = d.length; g > f; f++) {
            e = d[f][0], a = d[f][3];
            try {
              e.notify(A(a) ? a(c) : c)
            } catch (h) {
              b(h)
            }
          }
        })
      }
    });
    var p = function (a) {
      var b = new k;
      return b.reject(a), b.promise
    }, q = function (a, b) {
      var c = new k;
      return b ? c.resolve(a) : c.reject(a), c.promise
    }, r = function (a, b, c) {
      var d = null;
      try {
        A(c) && (d = c())
      } catch (e) {
        return q(e, !1)
      }
      return I(d) ? d.then(function () {
        return q(a, b)
      }, function (a) {
        return q(a, !1)
      }) : q(a, b)
    }, s = function (a, b, c, d) {
      var e = new k;
      return e.resolve(a), e.promise.then(b, c, d)
    }, u = s, w = function x(a) {
      function b(a) {
        d.resolve(a)
      }

      function c(a) {
        d.reject(a)
      }

      if (!A(a))throw n("norslvr", "Expected resolverFn, got '{0}'", a);
      if (!(this instanceof x))return new x(a);
      var d = new k;
      return a(b, c), d.promise
    };
    return w.defer = o, w.reject = p, w.when = s, w.resolve = u, w.all = m, w
  }

  function qc() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
        var b = c(a);
        return function () {
          d(b)
        }
      } : function (a) {
        var c = b(a, 16.66, !1);
        return function () {
          b.cancel(c)
        }
      };
      return f.supported = e, f
    }]
  }

  function rc() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = i(), this.$$ChildScope = null
      }

      return b.prototype = a, b
    }

    var b = 10, c = d("$rootScope"), g = null, h = null;
    this.digestTtl = function (a) {
      return arguments.length && (b = a), b
    }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, j, k, l) {
      function m(a) {
        a.currentScope.$$destroyed = !0
      }

      function n(a) {
        9 === Dd && (a.$$childHead && n(a.$$childHead), a.$$nextSibling && n(a.$$nextSibling)), a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
      }

      function o() {
        this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
      }

      function q(a) {
        if (z.$$phase)throw c("inprog", "{0} already in progress", z.$$phase);
        z.$$phase = a
      }

      function r() {
        z.$$phase = null
      }

      function s(a, b) {
        do a.$$watchersCount += b; while (a = a.$parent)
      }

      function u(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
      }

      function w() {
      }

      function x() {
        for (; D.length;)try {
          D.shift()()
        } catch (a) {
          j(a)
        }
        h = null
      }

      function y() {
        null === h && (h = l.defer(function () {
          z.$apply(x)
        }))
      }

      o.prototype = {
        constructor: o, $new: function (b, c) {
          var d;
          return c = c || this, b ? (d = new o, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), d
        }, $watch: function (a, b, c, d) {
          var e = k(a);
          if (e.$$watchDelegate)return e.$$watchDelegate(this, b, c, e, a);
          var f = this, h = f.$$watchers, i = {fn: b, last: w, get: e, exp: d || a, eq: !!c};
          return g = null, A(b) || (i.fn = p), h || (h = f.$$watchers = []), h.unshift(i), s(this, 1), function () {
            N(h, i) >= 0 && s(f, -1), g = null
          }
        }, $watchGroup: function (a, b) {
          function c() {
            i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
          }

          var d = new Array(a.length), e = new Array(a.length), g = [], h = this, i = !1, j = !0;
          if (!a.length) {
            var k = !0;
            return h.$evalAsync(function () {
              k && b(e, e, h)
            }), function () {
              k = !1
            }
          }
          return 1 === a.length ? this.$watch(a[0], function (a, c, f) {
            e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
          }) : (f(a, function (a, b) {
            var f = h.$watch(a, function (a, f) {
              e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
            });
            g.push(f)
          }), function () {
            for (; g.length;)g.shift()()
          })
        }, $watchCollection: function (a, b) {
          function c(a) {
            f = a;
            var b, c, d, h, i;
            if (!t(f)) {
              if (v(f))if (e(f)) {
                g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                for (var j = 0; b > j; j++)i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
              } else {
                g !== o && (g = o = {}, q = 0, l++), b = 0;
                for (c in f)zd.call(f, c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                if (q > b) {
                  l++;
                  for (c in g)zd.call(f, c) || (q--, delete g[c])
                }
              } else g !== f && (g = f, l++);
              return l
            }
          }

          function d() {
            if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j)if (v(f))if (e(f)) {
              h = new Array(f.length);
              for (var a = 0; a < f.length; a++)h[a] = f[a]
            } else {
              h = {};
              for (var c in f)zd.call(f, c) && (h[c] = f[c])
            } else h = f
          }

          c.$stateful = !0;
          var f, g, h, i = this, j = b.length > 1, l = 0, m = k(a, c), n = [], o = {}, p = !0, q = 0;
          return this.$watch(m, d)
        }, $digest: function () {
          var a, d, e, f, i, k, m, n, o, p, s = b, t = this, u = [];
          q("$digest"), l.$$checkUrlChange(), this === z && null !== h && (l.defer.cancel(h), x()), g = null;
          do {
            for (k = !1, n = t; B.length;) {
              try {
                p = B.shift(), p.scope.$eval(p.expression, p.locals)
              } catch (v) {
                j(v)
              }
              g = null
            }
            a:do {
              if (f = n.$$watchers)for (i = f.length; i--;)try {
                if (a = f[i])if ((d = a.get(n)) === (e = a.last) || (a.eq ? Q(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                  if (a === g) {
                    k = !1;
                    break a
                  }
                } else k = !0, g = a, a.last = a.eq ? O(d, null) : d, a.fn(d, e === w ? d : e, n), 5 > s && (o = 4 - s, u[o] || (u[o] = []), u[o].push({
                  msg: A(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                  newVal: d,
                  oldVal: e
                }))
              } catch (v) {
                j(v)
              }
              if (!(m = n.$$watchersCount && n.$$childHead || n !== t && n.$$nextSibling))for (; n !== t && !(m = n.$$nextSibling);)n = n.$parent
            } while (n = m);
            if ((k || B.length) && !s--)throw r(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, u)
          } while (k || B.length);
          for (r(); C.length;)try {
            C.shift()()
          } catch (v) {
            j(v)
          }
        }, $destroy: function () {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy"), this.$$destroyed = !0, this === z && l.$$applicationDestroyed(), s(this, -this.$$watchersCount);
            for (var b in this.$$listenerCount)u(this, this.$$listenerCount[b], b);
            a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function () {
              return p
            }, this.$$listeners = {}, this.$$nextSibling = null, n(this)
          }
        }, $eval: function (a, b) {
          return k(a)(this, b)
        }, $evalAsync: function (a, b) {
          z.$$phase || B.length || l.defer(function () {
            B.length && z.$digest()
          }), B.push({scope: this, expression: a, locals: b})
        }, $$postDigest: function (a) {
          C.push(a)
        }, $apply: function (a) {
          try {
            q("$apply");
            try {
              return this.$eval(a)
            } finally {
              r()
            }
          } catch (b) {
            j(b)
          } finally {
            try {
              z.$digest()
            } catch (b) {
              throw j(b), b
            }
          }
        }, $applyAsync: function (a) {
          function b() {
            c.$eval(a)
          }

          var c = this;
          a && D.push(b), y()
        }, $on: function (a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []), c.push(b);
          var d = this;
          do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
          var e = this;
          return function () {
            var d = c.indexOf(b);
            -1 !== d && (c[d] = null, u(e, 1, a))
          }
        }, $emit: function (a, b) {
          var c, d, e, f = [], g = this, h = !1, i = {
            name: a, targetScope: g, stopPropagation: function () {
              h = !0
            }, preventDefault: function () {
              i.defaultPrevented = !0
            }, defaultPrevented: !1
          }, k = R([i], arguments, 1);
          do {
            for (c = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = c.length; e > d; d++)if (c[d])try {
              c[d].apply(null, k)
            } catch (l) {
              j(l)
            } else c.splice(d, 1), d--, e--;
            if (h)return i.currentScope = null, i;
            g = g.$parent
          } while (g);
          return i.currentScope = null, i
        }, $broadcast: function (a, b) {
          var c = this, d = c, e = c, f = {
            name: a, targetScope: c, preventDefault: function () {
              f.defaultPrevented = !0
            }, defaultPrevented: !1
          };
          if (!c.$$listenerCount[a])return f;
          for (var g, h, i, k = R([f], arguments, 1); d = e;) {
            for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, i = g.length; i > h; h++)if (g[h])try {
              g[h].apply(null, k)
            } catch (l) {
              j(l)
            } else g.splice(h, 1), h--, i--;
            if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))for (; d !== c && !(e = d.$$nextSibling);)d = d.$parent
          }
          return f.currentScope = null, f
        }
      };
      var z = new o, B = z.$$asyncQueue = [], C = z.$$postDigestQueue = [], D = z.$$applyAsyncQueue = [];
      return z
    }]
  }

  function sc() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (b) {
      return u(b) ? (a = b, this) : a
    }, this.imgSrcSanitizationWhitelist = function (a) {
      return u(a) ? (b = a, this) : b
    }, this.$get = function () {
      return function (c, d) {
        var e, f = d ? b : a;
        return e = Bc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
      }
    }
  }

  function tc(a) {
    if ("self" === a)return a;
    if (x(a)) {
      if (a.indexOf("***") > -1)throw lf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
      return a = Td(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
    }
    if (B(a))return new RegExp("^" + a.source + "$");
    throw lf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
  }

  function uc(a) {
    var b = [];
    return u(a) && f(a, function (a) {
      b.push(tc(a))
    }), b
  }

  function vc() {
    this.SCE_CONTEXTS = mf;
    var a = ["self"], b = [];
    this.resourceUrlWhitelist = function (b) {
      return arguments.length && (a = uc(b)), a
    }, this.resourceUrlBlacklist = function (a) {
      return arguments.length && (b = uc(a)), b
    }, this.$get = ["$injector", function (c) {
      function d(a, b) {
        return "self" === a ? Cc(b) : !!a.exec(b.href)
      }

      function e(c) {
        var e, f, g = Bc(c.toString()), h = !1;
        for (e = 0, f = a.length; f > e; e++)if (d(a[e], g)) {
          h = !0;
          break
        }
        if (h)for (e = 0, f = b.length; f > e; e++)if (d(b[e], g)) {
          h = !1;
          break
        }
        return h
      }

      function f(a) {
        var b = function (a) {
          this.$$unwrapTrustedValue = function () {
            return a
          }
        };
        return a && (b.prototype = new a), b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue()
        }, b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString()
        }, b
      }

      function g(a, b) {
        var c = l.hasOwnProperty(a) ? l[a] : null;
        if (!c)throw lf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
        if (null === b || t(b) || "" === b)return b;
        if ("string" != typeof b)throw lf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
        return new c(b)
      }

      function h(a) {
        return a instanceof k ? a.$$unwrapTrustedValue() : a
      }

      function i(a, b) {
        if (null === b || t(b) || "" === b)return b;
        var c = l.hasOwnProperty(a) ? l[a] : null;
        if (c && b instanceof c)return b.$$unwrapTrustedValue();
        if (a === mf.RESOURCE_URL) {
          if (e(b))return b;
          throw lf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString());
        }
        if (a === mf.HTML)return j(b);
        throw lf("unsafe", "Attempting to use an unsafe value in a safe context.")
      }

      var j = function (a) {
        throw lf("unsafe", "Attempting to use an unsafe value in a safe context.")
      };
      c.has("$sanitize") && (j = c.get("$sanitize"));
      var k = f(), l = {};
      return l[mf.HTML] = f(k), l[mf.CSS] = f(k), l[mf.URL] = f(k), l[mf.JS] = f(k), l[mf.RESOURCE_URL] = f(l[mf.URL]), {
        trustAs: g,
        getTrusted: i,
        valueOf: h
      }
    }]
  }

  function wc() {
    var a = !0;
    this.enabled = function (b) {
      return arguments.length && (a = !!b), a
    }, this.$get = ["$parse", "$sceDelegate", function (b, c) {
      if (a && 8 > Dd)throw lf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
      var d = P(mf);
      d.isEnabled = function () {
        return a
      }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function (a, b) {
        return b
      }, d.valueOf = q), d.parseAs = function (a, c) {
        var e = b(c);
        return e.literal && e.constant ? e : b(c, function (b) {
          return d.getTrusted(a, b)
        })
      };
      var e = d.parseAs, g = d.getTrusted, h = d.trustAs;
      return f(mf, function (a, b) {
        var c = yd(b);
        d[wa("parse_as_" + c)] = function (b) {
          return e(a, b)
        }, d[wa("get_trusted_" + c)] = function (b) {
          return g(a, b)
        }, d[wa("trust_as_" + c)] = function (b) {
          return h(a, b)
        }
      }), d
    }]
  }

  function xc() {
    this.$get = ["$window", "$document", function (a, b) {
      var c, d, e = {}, f = n((/android (\d+)/.exec(yd((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
      if (j) {
        for (var m in j)if (d = i.exec(m)) {
          c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
          break
        }
        c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = x(j.webkitTransition), l = x(j.webkitAnimation))
      }
      return {
        history: !(!a.history || !a.history.pushState || 4 > f || g), hasEvent: function (a) {
          if ("input" === a && 11 >= Dd)return !1;
          if (t(e[a])) {
            var b = h.createElement("div");
            e[a] = "on" + a in b
          }
          return e[a]
        }, csp: Ud(), vendorPrefix: c, transitions: k, animations: l, android: f
      }
    }]
  }

  function yc() {
    this.$get = ["$templateCache", "$http", "$q", "$sce", function (a, b, c, d) {
      function e(f, g) {
        function h(a) {
          if (!g)throw Le("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", f, a.status, a.statusText);
          return c.reject(a)
        }

        e.totalPendingRequests++, x(f) && a.get(f) || (f = d.getTrustedResourceUrl(f));
        var i = b.defaults && b.defaults.transformResponse;
        Qd(i) ? i = i.filter(function (a) {
          return a !== vb
        }) : i === vb && (i = null);
        var j = {cache: a, transformResponse: i};
        return b.get(f, j)["finally"](function () {
          e.totalPendingRequests--
        }).then(function (b) {
          return a.put(f, b.data), b.data
        }, h)
      }

      return e.totalPendingRequests = 0, e
    }]
  }

  function zc() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, c) {
      var d = {};
      return d.findBindings = function (a, b, c) {
        var d = a.getElementsByClassName("ng-binding"), e = [];
        return f(d, function (a) {
          var d = Nd.element(a).data("$binding");
          d && f(d, function (d) {
            if (c) {
              var f = new RegExp("(^|\\s)" + Td(b) + "(\\s|\\||$)");
              f.test(d) && e.push(a)
            } else-1 != d.indexOf(b) && e.push(a)
          })
        }), e
      }, d.findModels = function (a, b, c) {
        for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
          var f = c ? "=" : "*=", g = "[" + d[e] + "model" + f + '"' + b + '"]', h = a.querySelectorAll(g);
          if (h.length)return h
        }
      }, d.getLocation = function () {
        return c.url()
      }, d.setLocation = function (b) {
        b !== c.url() && (c.url(b), a.$digest())
      }, d.whenStable = function (a) {
        b.notifyWhenNoOutstandingRequests(a)
      }, d
    }]
  }

  function Ac() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, c, d, e) {
      function f(f, h, i) {
        A(f) || (i = h, h = f, f = p);
        var j, k = S(arguments, 3), l = u(i) && !i, m = (l ? d : c).defer(), n = m.promise;
        return j = b.defer(function () {
          try {
            m.resolve(f.apply(null, k))
          } catch (b) {
            m.reject(b), e(b)
          } finally {
            delete g[n.$$timeoutId]
          }
          l || a.$apply()
        }, h), n.$$timeoutId = j, g[j] = m, n
      }

      var g = {};
      return f.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
      }, f
    }]
  }

  function Bc(a) {
    var b = a;
    return Dd && (nf.setAttribute("href", b), b = nf.href), nf.setAttribute("href", b), {
      href: nf.href,
      protocol: nf.protocol ? nf.protocol.replace(/:$/, "") : "",
      host: nf.host,
      search: nf.search ? nf.search.replace(/^\?/, "") : "",
      hash: nf.hash ? nf.hash.replace(/^#/, "") : "",
      hostname: nf.hostname,
      port: nf.port,
      pathname: "/" === nf.pathname.charAt(0) ? nf.pathname : "/" + nf.pathname
    }
  }

  function Cc(a) {
    var b = x(a) ? Bc(a) : a;
    return b.protocol === of.protocol && b.host === of.host
  }

  function Dc() {
    this.$get = r(a)
  }

  function Ec(a) {
    function b(a) {
      try {
        return decodeURIComponent(a)
      } catch (b) {
        return a
      }
    }

    var c = a[0] || {}, d = {}, e = "";
    return function () {
      var a, f, g, h, i, j = c.cookie || "";
      if (j !== e)for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++)f = a[g], h = f.indexOf("="), h > 0 && (i = b(f.substring(0, h)), t(d[i]) && (d[i] = b(f.substring(h + 1))));
      return d
    }
  }

  function Fc() {
    this.$get = Ec
  }

  function Gc(a) {
    function b(d, e) {
      if (v(d)) {
        var g = {};
        return f(d, function (a, c) {
          g[c] = b(c, a)
        }), g
      }
      return a.factory(d + c, e)
    }

    var c = "Filter";
    this.register = b, this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + c)
      }
    }], b("currency", Lc), b("date", $c), b("filter", Hc), b("json", _c), b("limitTo", ad), b("lowercase", vf), b("number", Mc), b("orderBy", bd), b("uppercase", wf)
  }

  function Hc() {
    return function (a, b, c) {
      if (!e(a)) {
        if (null == a)return a;
        throw d("filter")("notarray", "Expected array but received: {0}", a)
      }
      var f, g, h = Kc(b);
      switch (h) {
        case"function":
          f = b;
          break;
        case"boolean":
        case"null":
        case"number":
        case"string":
          g = !0;
        case"object":
          f = Ic(b, c, g);
          break;
        default:
          return a
      }
      return Array.prototype.filter.call(a, f)
    }
  }

  function Ic(a, b, c) {
    var d, e = v(a) && "$" in a;
    return b === !0 ? b = Q : A(b) || (b = function (a, b) {
      return t(a) ? !1 : null === a || null === b ? a === b : v(b) || v(a) && !s(a) ? !1 : (a = yd("" + a), b = yd("" + b), -1 !== a.indexOf(b))
    }), d = function (d) {
      return e && !v(d) ? Jc(d, a.$, b, !1) : Jc(d, a, b, c)
    }
  }

  function Jc(a, b, c, d, e) {
    var f = Kc(a), g = Kc(b);
    if ("string" === g && "!" === b.charAt(0))return !Jc(a, b.substring(1), c, d);
    if (Qd(a))return a.some(function (a) {
      return Jc(a, b, c, d)
    });
    switch (f) {
      case"object":
        var h;
        if (d) {
          for (h in a)if ("$" !== h.charAt(0) && Jc(a[h], b, c, !0))return !0;
          return e ? !1 : Jc(a, b, c, !1)
        }
        if ("object" === g) {
          for (h in b) {
            var i = b[h];
            if (!A(i) && !t(i)) {
              var j = "$" === h, k = j ? a : a[h];
              if (!Jc(k, i, c, j, j))return !1
            }
          }
          return !0
        }
        return c(a, b);
      case"function":
        return !1;
      default:
        return c(a, b)
    }
  }

  function Kc(a) {
    return null === a ? "null" : typeof a
  }

  function Lc(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c, d) {
      return t(c) && (c = b.CURRENCY_SYM), t(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Pc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
    }
  }

  function Mc(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return null == a ? a : Pc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
    }
  }

  function Nc(a) {
    var b, c, d, e, f, g = 0;
    for ((c = a.indexOf(qf)) > -1 && (a = a.replace(qf, "")), (d = a.search(/e/i)) > 0 ? (0 > c && (c = d), c += +a.slice(d + 1), a = a.substring(0, d)) : 0 > c && (c = a.length), d = 0; a.charAt(d) == rf; d++);
    if (d == (f = a.length))b = [0], c = 1; else {
      for (f--; a.charAt(f) == rf;)f--;
      for (c -= d, b = [], e = 0; f >= d; d++, e++)b[e] = +a.charAt(d)
    }
    return c > pf && (b = b.splice(0, pf - 1), g = c - 1, c = 1), {d: b, e: g, i: c}
  }

  function Oc(a, b, c, d) {
    var e = a.d, f = e.length - a.i;
    b = t(b) ? Math.min(Math.max(c, f), d) : +b;
    var g = b + a.i, h = e[g];
    if (g > 0)e.splice(g); else {
      a.i = 1, e.length = g = b + 1;
      for (var i = 0; g > i; i++)e[i] = 0
    }
    for (h >= 5 && e[g - 1]++; b > f; f++)e.push(0);
    var j = e.reduceRight(function (a, b, c, d) {
      return b += a, d[c] = b % 10, Math.floor(b / 10)
    }, 0);
    j && (e.unshift(j), a.i++)
  }

  function Pc(a, b, c, d, e) {
    if (!x(a) && !y(a) || isNaN(a))return "";
    var f, g = !isFinite(a), h = !1, i = Math.abs(a) + "", j = "";
    if (g)j = "∞"; else {
      f = Nc(i), Oc(f, e, b.minFrac, b.maxFrac);
      var k = f.d, l = f.i, m = f.e, n = [];
      for (h = k.reduce(function (a, b) {
        return a && !b
      }, !0); 0 > l;)k.unshift(0), l++;
      l > 0 ? n = k.splice(l) : (n = k, k = [0]);
      var o = [];
      for (k.length > b.lgSize && o.unshift(k.splice(-b.lgSize).join("")); k.length > b.gSize;)o.unshift(k.splice(-b.gSize).join(""));
      k.length && o.unshift(k.join("")), j = o.join(c), n.length && (j += d + n.join("")), m && (j += "e+" + m)
    }
    return 0 > a && !h ? b.negPre + j + b.negSuf : b.posPre + j + b.posSuf
  }

  function Qc(a, b, c) {
    var d = "";
    for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;)a = rf + a;
    return c && (a = a.substr(a.length - b)), d + a
  }

  function Rc(a, b, c, d) {
    return c = c || 0, function (e) {
      var f = e["get" + a]();
      return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Qc(f, b, d)
    }
  }

  function Sc(a, b) {
    return function (c, d) {
      var e = c["get" + a](), f = Ad(b ? "SHORT" + a : a);
      return d[f][e]
    }
  }

  function Tc(a, b, c) {
    var d = -1 * c, e = d >= 0 ? "+" : "";
    return e += Qc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Qc(Math.abs(d % 60), 2)
  }

  function Uc(a) {
    var b = new Date(a, 0, 1).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b)
  }

  function Vc(a) {
    return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
  }

  function Wc(a) {
    return function (b) {
      var c = Uc(b.getFullYear()), d = Vc(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
      return Qc(f, a)
    }
  }

  function Xc(a, b) {
    return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
  }

  function Yc(a, b) {
    return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
  }

  function Zc(a, b) {
    return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
  }

  function $c(a) {
    function b(a) {
      var b;
      if (b = a.match(c)) {
        var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
        b[9] && (e = n(b[9] + b[10]), f = n(b[9] + b[11])), g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
        var i = n(b[4] || 0) - e, j = n(b[5] || 0) - f, k = n(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
        return h.call(d, i, j, k, l), d
      }
      return a
    }

    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, d, e) {
      var g, h, i = "", j = [];
      if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, x(c) && (c = uf.test(c) ? n(c) : b(c)), y(c) && (c = new Date(c)), !z(c) || !isFinite(c.getTime()))return c;
      for (; d;)h = tf.exec(d), h ? (j = R(j, h, 1), d = j.pop()) : (j.push(d), d = null);
      var k = c.getTimezoneOffset();
      return e && (k = X(e, c.getTimezoneOffset()), c = Z(c, e, !0)), f(j, function (b) {
        g = sf[b], i += g ? g(c, a.DATETIME_FORMATS, k) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      }), i
    }
  }

  function _c() {
    return function (a, b) {
      return t(b) && (b = 2), V(a, b)
    }
  }

  function ad() {
    return function (a, b, c) {
      return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b), isNaN(b) ? a : (y(a) && (a = a.toString()), Qd(a) || x(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c ? Math.max(0, a.length + c) : c, b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a)
    }
  }

  function bd(a) {
    function b(b, c) {
      return c = c ? -1 : 1, b.map(function (b) {
        var d = 1, e = q;
        if (A(b))e = b; else if (x(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (d = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (e = a(b), e.constant))) {
          var f = e();
          e = function (a) {
            return a[f]
          }
        }
        return {get: e, descending: d * c}
      })
    }

    function c(a) {
      switch (typeof a) {
        case"number":
        case"boolean":
        case"string":
          return !0;
        default:
          return !1
      }
    }

    function d(a, b) {
      return "function" == typeof a.valueOf && (a = a.valueOf(), c(a)) ? a : s(a) && (a = a.toString(), c(a)) ? a : b
    }

    function f(a, b) {
      var c = typeof a;
      return null === a ? (c = "string", a = "null") : "string" === c ? a = a.toLowerCase() : "object" === c && (a = d(a, b)), {
        value: a,
        type: c
      }
    }

    function g(a, b) {
      var c = 0;
      return a.type === b.type ? a.value !== b.value && (c = a.value < b.value ? -1 : 1) : c = a.type < b.type ? -1 : 1, c
    }

    return function (a, c, d) {
      function h(a, b) {
        return {
          value: a, predicateValues: j.map(function (c) {
            return f(c.get(a), b)
          })
        }
      }

      function i(a, b) {
        for (var c = 0, d = 0, e = j.length; e > d && !(c = g(a.predicateValues[d], b.predicateValues[d]) * j[d].descending); ++d);
        return c
      }

      if (!e(a))return a;
      Qd(c) || (c = [c]), 0 === c.length && (c = ["+"]);
      var j = b(c, d);
      j.push({
        get: function () {
          return {}
        }, descending: d ? -1 : 1
      });
      var k = Array.prototype.map.call(a, h);
      return k.sort(i), a = k.map(function (a) {
        return a.value
      })
    }
  }

  function cd(a) {
    return A(a) && (a = {link: a}), a.restrict = a.restrict || "AC", r(a)
  }

  function dd(a, b) {
    a.$name = b
  }

  function ed(a, b, d, e, g) {
    var h = this, i = [];
    h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, h.$$parentForm = zf, h.$rollbackViewValue = function () {
      f(i, function (a) {
        a.$rollbackViewValue()
      })
    }, h.$commitViewValue = function () {
      f(i, function (a) {
        a.$commitViewValue()
      })
    }, h.$addControl = function (a) {
      na(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a), a.$$parentForm = h
    }, h.$$renameControl = function (a, b) {
      var c = a.$name;
      h[c] === a && delete h[c], h[b] = a, a.$name = b
    }, h.$removeControl = function (a) {
      a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function (b, c) {
        h.$setValidity(c, null, a)
      }), f(h.$error, function (b, c) {
        h.$setValidity(c, null, a)
      }), f(h.$$success, function (b, c) {
        h.$setValidity(c, null, a)
      }), N(i, a), a.$$parentForm = zf
    }, td({
      ctrl: this, $element: a, set: function (a, b, c) {
        var d = a[b];
        if (d) {
          var e = d.indexOf(c);
          -1 === e && d.push(c)
        } else a[b] = [c]
      }, unset: function (a, b, c) {
        var d = a[b];
        d && (N(d, c), 0 === d.length && delete a[b])
      }, $animate: e
    }), h.$setDirty = function () {
      e.removeClass(a, hg), e.addClass(a, ig), h.$dirty = !0, h.$pristine = !1, h.$$parentForm.$setDirty()
    }, h.$setPristine = function () {
      e.setClass(a, hg, ig + " " + Af), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function (a) {
        a.$setPristine()
      })
    }, h.$setUntouched = function () {
      f(i, function (a) {
        a.$setUntouched()
      })
    }, h.$setSubmitted = function () {
      e.addClass(a, Af), h.$submitted = !0, h.$$parentForm.$setSubmitted()
    }
  }

  function fd(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString()
    })
  }

  function gd(a, b, c, d, e, f) {
    hd(a, b, c, d, e, f), fd(d)
  }

  function hd(a, b, c, d, e, f) {
    var g = yd(b[0].type);
    if (!e.android) {
      var h = !1;
      b.on("compositionstart", function (a) {
        h = !0
      }), b.on("compositionend", function () {
        h = !1, i()
      })
    }
    var i = function (a) {
      if (j && (f.defer.cancel(j), j = null), !h) {
        var e = b.val(), i = a && a.type;
        "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Sd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
      }
    };
    if (e.hasEvent("input"))b.on("input", i); else {
      var j, k = function (a, b, c) {
        j || (j = f.defer(function () {
          j = null, b && b.value === c || i(a)
        }))
      };
      b.on("keydown", function (a) {
        var b = a.keyCode;
        91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
      }), e.hasEvent("paste") && b.on("paste cut", k)
    }
    b.on("change", i), d.$render = function () {
      var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
      b.val() !== a && b.val(a)
    }
  }

  function id(a, b) {
    if (z(a))return a;
    if (x(a)) {
      Kf.lastIndex = 0;
      var c = Kf.exec(a);
      if (c) {
        var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = Uc(d), k = 7 * (e - 1);
        return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
      }
    }
    return NaN
  }

  function jd(a, b) {
    return function (c, d) {
      var e, g;
      if (z(c))return c;
      if (x(c)) {
        if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), Ef.test(c))return new Date(c);
        if (a.lastIndex = 0, e = a.exec(c))return e.shift(), g = d ? {
          yyyy: d.getFullYear(),
          MM: d.getMonth() + 1,
          dd: d.getDate(),
          HH: d.getHours(),
          mm: d.getMinutes(),
          ss: d.getSeconds(),
          sss: d.getMilliseconds() / 1e3
        } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, f(e, function (a, c) {
          c < b.length && (g[b[c]] = +a)
        }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
      }
      return NaN
    }
  }

  function kd(a, b, d, e) {
    return function (f, g, h, i, j, k, l) {
      function m(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime())
      }

      function n(a) {
        return u(a) && !z(a) ? d(a) || c : a
      }

      ld(f, g, h, i), hd(f, g, h, i, j, k);
      var o, p = i && i.$options && i.$options.timezone;
      if (i.$$parserName = a, i.$parsers.push(function (a) {
          if (i.$isEmpty(a))return null;
          if (b.test(a)) {
            var e = d(a, o);
            return p && (e = Z(e, p)), e
          }
          return c
        }), i.$formatters.push(function (a) {
          if (a && !z(a))throw mg("datefmt", "Expected `{0}` to be a date", a);
          return m(a) ? (o = a, o && p && (o = Z(o, p, !0)), l("date")(a, e, p)) : (o = null, "")
        }), u(h.min) || h.ngMin) {
        var q;
        i.$validators.min = function (a) {
          return !m(a) || t(q) || d(a) >= q
        }, h.$observe("min", function (a) {
          q = n(a), i.$validate()
        })
      }
      if (u(h.max) || h.ngMax) {
        var r;
        i.$validators.max = function (a) {
          return !m(a) || t(r) || d(a) <= r
        }, h.$observe("max", function (a) {
          r = n(a), i.$validate()
        })
      }
    }
  }

  function ld(a, b, d, e) {
    var f = b[0], g = e.$$hasNativeValidators = v(f.validity);
    g && e.$parsers.push(function (a) {
      var d = b.prop(xd) || {};
      return d.badInput && !d.typeMismatch ? c : a
    })
  }

  function md(a, b, d, e, f, g) {
    if (ld(a, b, d, e), hd(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function (a) {
        return e.$isEmpty(a) ? null : Hf.test(a) ? parseFloat(a) : c
      }), e.$formatters.push(function (a) {
        if (!e.$isEmpty(a)) {
          if (!y(a))throw mg("numfmt", "Expected `{0}` to be a number", a);
          a = a.toString()
        }
        return a
      }), u(d.min) || d.ngMin) {
      var h;
      e.$validators.min = function (a) {
        return e.$isEmpty(a) || t(h) || a >= h
      }, d.$observe("min", function (a) {
        u(a) && !y(a) && (a = parseFloat(a, 10)), h = y(a) && !isNaN(a) ? a : c, e.$validate()
      })
    }
    if (u(d.max) || d.ngMax) {
      var i;
      e.$validators.max = function (a) {
        return e.$isEmpty(a) || t(i) || i >= a
      }, d.$observe("max", function (a) {
        u(a) && !y(a) && (a = parseFloat(a, 10)), i = y(a) && !isNaN(a) ? a : c, e.$validate()
      })
    }
  }

  function nd(a, b, c, d, e, f) {
    hd(a, b, c, d, e, f), fd(d), d.$$parserName = "url", d.$validators.url = function (a, b) {
      var c = a || b;
      return d.$isEmpty(c) || Ff.test(c)
    }
  }

  function od(a, b, c, d, e, f) {
    hd(a, b, c, d, e, f), fd(d), d.$$parserName = "email", d.$validators.email = function (a, b) {
      var c = a || b;
      return d.$isEmpty(c) || Gf.test(c)
    }
  }

  function pd(a, b, c, d) {
    t(c.name) && b.attr("name", i());
    var e = function (a) {
      b[0].checked && d.$setViewValue(c.value, a && a.type)
    };
    b.on("click", e), d.$render = function () {
      var a = c.value;
      b[0].checked = a == d.$viewValue
    }, c.$observe("value", d.$render)
  }

  function qd(a, b, c, d, e) {
    var f;
    if (u(d)) {
      if (f = a(d), !f.constant)throw mg("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, d);
      return f(b)
    }
    return e
  }

  function rd(a, b, c, d, e, f, g, h) {
    var i = qd(h, a, "ngTrueValue", c.ngTrueValue, !0), j = qd(h, a, "ngFalseValue", c.ngFalseValue, !1), k = function (a) {
      d.$setViewValue(b[0].checked, a && a.type)
    };
    b.on("click", k), d.$render = function () {
      b[0].checked = d.$viewValue
    }, d.$isEmpty = function (a) {
      return a === !1
    }, d.$formatters.push(function (a) {
      return Q(a, i)
    }), d.$parsers.push(function (a) {
      return a ? i : j
    })
  }

  function sd(a, b) {
    return a = "ngClass" + a, ["$animate", function (c) {
      function d(a, b) {
        var c = [];
        a:for (var d = 0; d < a.length; d++) {
          for (var e = a[d], f = 0; f < b.length; f++)if (e == b[f])continue a;
          c.push(e)
        }
        return c
      }

      function e(a) {
        var b = [];
        return Qd(a) ? (f(a, function (a) {
          b = b.concat(e(a))
        }), b) : x(a) ? a.split(" ") : v(a) ? (f(a, function (a, c) {
          a && (b = b.concat(c.split(" ")))
        }), b) : a
      }

      return {
        restrict: "AC", link: function (g, h, i) {
          function j(a) {
            var b = l(a, 1);
            i.$addClass(b)
          }

          function k(a) {
            var b = l(a, -1);
            i.$removeClass(b)
          }

          function l(a, b) {
            var c = h.data("$classCounts") || qa(), d = [];
            return f(a, function (a) {
              (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
            }), h.data("$classCounts", c), d.join(" ")
          }

          function m(a, b) {
            var e = d(b, a), f = d(a, b);
            e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
          }

          function n(a) {
            if (b === !0 || g.$index % 2 === b) {
              var c = e(a || []);
              if (o) {
                if (!Q(a, o)) {
                  var d = e(o);
                  m(d, c)
                }
              } else j(c)
            }
            o = P(a)
          }

          var o;
          g.$watch(i[a], n, !0), i.$observe("class", function (b) {
            n(g.$eval(i[a]))
          }), "ngClass" !== a && g.$watch("$index", function (c, d) {
            var f = 1 & c;
            if (f !== (1 & d)) {
              var h = e(g.$eval(i[a]));
              f === b ? j(h) : k(h)
            }
          })
        }
      }
    }]
  }

  function td(a) {
    function b(a, b, i) {
      t(b) ? d("$pending", a, i) : e("$pending", a, i), H(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(lg, !0), h.$valid = h.$invalid = c, g("", null)) : (f(lg, !1), h.$valid = ud(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
      var j;
      j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), h.$$parentForm.$setValidity(a, j, h)
    }

    function d(a, b, c) {
      h[a] || (h[a] = {}), k(h[a], b, c)
    }

    function e(a, b, d) {
      h[a] && l(h[a], b, d), ud(h[a]) && (h[a] = c)
    }

    function f(a, b) {
      b && !j[a] ? (m.addClass(i, a), j[a] = !0) : !b && j[a] && (m.removeClass(i, a), j[a] = !1)
    }

    function g(a, b) {
      a = a ? "-" + ja(a, "-") : "", f(fg + a, b === !0), f(gg + a, b === !1)
    }

    var h = a.ctrl, i = a.$element, j = {}, k = a.set, l = a.unset, m = a.$animate;
    j[gg] = !(j[fg] = i.hasClass(fg)), h.$setValidity = b
  }

  function ud(a) {
    if (a)for (var b in a)if (a.hasOwnProperty(b))return !1;
    return !0
  }

  function vd(a) {
    a[0].hasAttribute("selected") && (a[0].selected = !0)
  }

  var wd = /^\/(.+)\/([a-z]*)$/, xd = "validity", yd = function (a) {
    return x(a) ? a.toLowerCase() : a
  }, zd = Object.prototype.hasOwnProperty, Ad = function (a) {
    return x(a) ? a.toUpperCase() : a
  }, Bd = function (a) {
    return x(a) ? a.replace(/[A-Z]/g, function (a) {
      return String.fromCharCode(32 | a.charCodeAt(0))
    }) : a
  }, Cd = function (a) {
    return x(a) ? a.replace(/[a-z]/g, function (a) {
      return String.fromCharCode(-33 & a.charCodeAt(0))
    }) : a
  };
  "i" !== "I".toLowerCase() && (yd = Bd, Ad = Cd);
  var Dd, Ed, Fd, Gd, Hd = [].slice, Id = [].splice, Jd = [].push, Kd = Object.prototype.toString, Ld = Object.getPrototypeOf, Md = d("ng"), Nd = a.angular || (a.angular = {}), Od = 0;
  Dd = b.documentMode, p.$inject = [], q.$inject = [];
  var Pd, Qd = Array.isArray, Rd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, Sd = function (a) {
    return x(a) ? a.trim() : a
  }, Td = function (a) {
    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
  }, Ud = function () {
    function a() {
      try {
        return new Function(""), !1
      } catch (a) {
        return !0
      }
    }

    if (!u(Ud.rules)) {
      var c = b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
      if (c) {
        var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
        Ud.rules = {
          noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
          noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
        }
      } else Ud.rules = {noUnsafeEval: a(), noInlineStyle: !1}
    }
    return Ud.rules
  }, Vd = function () {
    if (u(Vd.name_))return Vd.name_;
    var a, c, d, e, f = Wd.length;
    for (c = 0; f > c; ++c)if (d = Wd[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
      e = a.getAttribute(d + "jq");
      break
    }
    return Vd.name_ = e
  }, Wd = ["ng-", "data-ng-", "ng:", "x-ng-"], Xd = /[A-Z]/g, Yd = !1, Zd = 1, $d = 2, _d = 3, ae = 8, be = 9, ce = 11, de = {
    full: "1.4.9",
    major: 1,
    minor: 4,
    dot: 9,
    codeName: "implicit-superannuation"
  };
  Ca.expando = "ng339";
  var ee = Ca.cache = {}, fe = 1, ge = function (a, b, c) {
    a.addEventListener(b, c, !1)
  }, he = function (a, b, c) {
    a.removeEventListener(b, c, !1)
  };
  Ca._data = function (a) {
    return this.cache[a[this.expando]] || {}
  };
  var ie = /([\:\-\_]+(.))/g, je = /^moz([A-Z])/, ke = {
    mouseleave: "mouseout",
    mouseenter: "mouseover"
  }, le = d("jqLite"), me = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ne = /<|&#?\w+;/, oe = /<([\w:-]+)/, pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, qe = {
    option: [1, '<select multiple="multiple">', "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td;
  var re = Node.prototype.contains || function (a) {
      return !!(16 & this.compareDocumentPosition(a))
    }, se = Ca.prototype = {
    ready: function (c) {
      function d() {
        e || (e = !0, c())
      }

      var e = !1;
      "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), Ca(a).on("load", d))
    }, toString: function () {
      var a = [];
      return f(this, function (b) {
        a.push("" + b)
      }), "[" + a.join(", ") + "]"
    }, eq: function (a) {
      return Ed(a >= 0 ? this[a] : this[this.length + a])
    }, length: 0, push: Jd, sort: [].sort, splice: [].splice
  }, te = {};
  f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
    te[yd(a)] = a
  });
  var ue = {};
  f("input,select,option,textarea,button,form,details".split(","), function (a) {
    ue[a] = !0
  });
  var ve = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
  f({data: Ia, removeData: Ga, hasData: za}, function (a, b) {
    Ca[b] = a
  }), f({
    data: Ia, inheritedData: Oa, scope: function (a) {
      return Ed.data(a, "$scope") || Oa(a.parentNode || a, ["$isolateScope", "$scope"])
    }, isolateScope: function (a) {
      return Ed.data(a, "$isolateScope") || Ed.data(a, "$isolateScopeNoTemplate")
    }, controller: Na, injector: function (a) {
      return Oa(a, "$injector")
    }, removeAttr: function (a, b) {
      a.removeAttribute(b)
    }, hasClass: Ja, css: function (a, b, c) {
      return b = wa(b), u(c) ? void(a.style[b] = c) : a.style[b]
    }, attr: function (a, b, d) {
      var e = a.nodeType;
      if (e !== _d && e !== $d && e !== ae) {
        var f = yd(b);
        if (te[f]) {
          if (!u(d))return a[b] || (a.attributes.getNamedItem(b) || p).specified ? f : c;
          d ? (a[b] = !0, a.setAttribute(b, f)) : (a[b] = !1, a.removeAttribute(f))
        } else if (u(d))a.setAttribute(b, d); else if (a.getAttribute) {
          var g = a.getAttribute(b, 2);
          return null === g ? c : g
        }
      }
    }, prop: function (a, b, c) {
      return u(c) ? void(a[b] = c) : a[b]
    }, text: function () {
      function a(a, b) {
        if (t(b)) {
          var c = a.nodeType;
          return c === Zd || c === _d ? a.textContent : ""
        }
        a.textContent = b
      }

      return a.$dv = "", a
    }(), val: function (a, b) {
      if (t(b)) {
        if (a.multiple && "select" === M(a)) {
          var c = [];
          return f(a.options, function (a) {
            a.selected && c.push(a.value || a.text)
          }), 0 === c.length ? null : c
        }
        return a.value
      }
      a.value = b
    }, html: function (a, b) {
      return t(b) ? a.innerHTML : (Ea(a, !0), void(a.innerHTML = b))
    }, empty: Pa
  }, function (a, b) {
    Ca.prototype[b] = function (b, c) {
      var d, e, f = this.length;
      if (a !== Pa && t(2 == a.length && a !== Ja && a !== Na ? b : c)) {
        if (v(b)) {
          for (d = 0; f > d; d++)if (a === Ia)a(this[d], b); else for (e in b)a(this[d], e, b[e]);
          return this
        }
        for (var g = a.$dv, h = t(g) ? Math.min(f, 1) : f, i = 0; h > i; i++) {
          var j = a(this[i], b, c);
          g = g ? g + j : j
        }
        return g
      }
      for (d = 0; f > d; d++)a(this[d], b, c);
      return this
    }
  }), f({
    removeData: Ga, on: function (a, b, d, e) {
      if (u(e))throw le("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
      if (ya(a)) {
        var f = Ha(a, !0), g = f.events, h = f.handle;
        h || (h = f.handle = Ua(a, g));
        for (var i = b.indexOf(" ") >= 0 ? b.split(" ") : [b], j = i.length, k = function (b, c, e) {
          var f = g[b];
          f || (f = g[b] = [], f.specialHandlerWrapper = c, "$destroy" === b || e || ge(a, b, h)), f.push(d)
        }; j--;)b = i[j], ke[b] ? (k(ke[b], Wa), k(b, c, !0)) : k(b)
      }
    }, off: Fa, one: function (a, b, c) {
      a = Ed(a), a.on(b, function d() {
        a.off(b, c), a.off(b, d)
      }), a.on(b, c)
    }, replaceWith: function (a, b) {
      var c, d = a.parentNode;
      Ea(a), f(new Ca(b), function (b) {
        c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
      })
    }, children: function (a) {
      var b = [];
      return f(a.childNodes, function (a) {
        a.nodeType === Zd && b.push(a)
      }), b
    }, contents: function (a) {
      return a.contentDocument || a.childNodes || []
    }, append: function (a, b) {
      var c = a.nodeType;
      if (c === Zd || c === ce) {
        b = new Ca(b);
        for (var d = 0, e = b.length; e > d; d++) {
          var f = b[d];
          a.appendChild(f)
        }
      }
    }, prepend: function (a, b) {
      if (a.nodeType === Zd) {
        var c = a.firstChild;
        f(new Ca(b), function (b) {
          a.insertBefore(b, c)
        })
      }
    }, wrap: function (a, b) {
      b = Ed(b).eq(0).clone()[0];
      var c = a.parentNode;
      c && c.replaceChild(b, a), b.appendChild(a)
    }, remove: Qa, detach: function (a) {
      Qa(a, !0)
    }, after: function (a, b) {
      var c = a, d = a.parentNode;
      b = new Ca(b);
      for (var e = 0, f = b.length; f > e; e++) {
        var g = b[e];
        d.insertBefore(g, c.nextSibling), c = g
      }
    }, addClass: La, removeClass: Ka, toggleClass: function (a, b, c) {
      b && f(b.split(" "), function (b) {
        var d = c;
        t(d) && (d = !Ja(a, b)), (d ? La : Ka)(a, b)
      })
    }, parent: function (a) {
      var b = a.parentNode;
      return b && b.nodeType !== ce ? b : null
    }, next: function (a) {
      return a.nextElementSibling
    }, find: function (a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : []
    }, clone: Da, triggerHandler: function (a, b, c) {
      var d, e, g, h = b.type || b, i = Ha(a), j = i && i.events, k = j && j[h];
      k && (d = {
        preventDefault: function () {
          this.defaultPrevented = !0
        }, isDefaultPrevented: function () {
          return this.defaultPrevented === !0
        }, stopImmediatePropagation: function () {
          this.immediatePropagationStopped = !0
        }, isImmediatePropagationStopped: function () {
          return this.immediatePropagationStopped === !0
        }, stopPropagation: p, type: h, target: a
      }, b.type && (d = l(d, b)), e = P(k), g = c ? [d].concat(c) : [d], f(e, function (b) {
        d.isImmediatePropagationStopped() || b.apply(a, g)
      }))
    }
  }, function (a, b) {
    Ca.prototype[b] = function (b, c, d) {
      for (var e, f = 0, g = this.length; g > f; f++)t(e) ? (e = a(this[f], b, c, d), u(e) && (e = Ed(e))) : Ma(e, a(this[f], b, c, d));
      return u(e) ? e : this
    }, Ca.prototype.bind = Ca.prototype.on, Ca.prototype.unbind = Ca.prototype.off
  }), Za.prototype = {
    put: function (a, b) {
      this[Ya(a, this.nextUid)] = b
    }, get: function (a) {
      return this[Ya(a, this.nextUid)]
    }, remove: function (a) {
      var b = this[a = Ya(a, this.nextUid)];
      return delete this[a], b
    }
  };
  var we = [function () {
    this.$get = [function () {
      return Za
    }]
  }], xe = /^[^\(]*\(\s*([^\)]*)\)/m, ye = /,/, ze = /^\s*(_?)(\S+?)\1\s*$/, Ae = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Be = d("$injector");
  ab.$$annotate = _a;
  var Ce = d("$animate"), De = 1, Ee = "ng-animate", Fe = function () {
    this.$get = function () {
    }
  }, Ge = function () {
    var a = new Za, b = [];
    this.$get = ["$$AnimateRunner", "$rootScope", function (c, d) {
      function e(a, b, c) {
        var d = !1;
        return b && (b = x(b) ? b.split(" ") : Qd(b) ? b : [], f(b, function (b) {
          b && (d = !0, a[b] = c)
        })), d
      }

      function g() {
        f(b, function (b) {
          var c = a.get(b);
          if (c) {
            var d = eb(b.attr("class")), e = "", g = "";
            f(c, function (a, b) {
              var c = !!d[b];
              a !== c && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b)
            }), f(b, function (a) {
              e && La(a, e), g && Ka(a, g)
            }), a.remove(b)
          }
        }), b.length = 0
      }

      function h(c, f, h) {
        var i = a.get(c) || {}, j = e(i, f, !0), k = e(i, h, !1);
        (j || k) && (a.put(c, i), b.push(c), 1 === b.length && d.$$postDigest(g))
      }

      return {
        enabled: p, on: p, off: p, pin: p, push: function (a, b, d, e) {
          e && e(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && h(a, d.addClass, d.removeClass);
          var f = new c;
          return f.complete(), f
        }
      }
    }]
  }, He = ["$provide", function (a) {
    var b = this;
    this.$$registeredAnimations = Object.create(null), this.register = function (c, d) {
      if (c && "." !== c.charAt(0))throw Ce("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
      var e = c + "-animation";
      b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
    }, this.classNameFilter = function (a) {
      if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
        var b = new RegExp("(\\s+|\\/)" + Ee + "(\\s+|\\/)");
        if (b.test(this.$$classNameFilter.toString()))throw Ce("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ee)
      }
      return this.$$classNameFilter
    }, this.$get = ["$$animateQueue", function (a) {
      function b(a, b, c) {
        if (c) {
          var d = db(c);
          !d || d.parentNode || d.previousElementSibling || (c = null)
        }
        c ? c.after(a) : b.prepend(a)
      }

      return {
        on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
          a.end && a.end()
        }, enter: function (c, d, e, f) {
          return d = d && Ed(d), e = e && Ed(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", fb(f))
        }, move: function (c, d, e, f) {
          return d = d && Ed(d), e = e && Ed(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", fb(f))
        }, leave: function (b, c) {
          return a.push(b, "leave", fb(c), function () {
            b.remove()
          })
        }, addClass: function (b, c, d) {
          return d = fb(d), d.addClass = cb(d.addclass, c), a.push(b, "addClass", d)
        }, removeClass: function (b, c, d) {
          return d = fb(d), d.removeClass = cb(d.removeClass, c), a.push(b, "removeClass", d)
        }, setClass: function (b, c, d, e) {
          return e = fb(e), e.addClass = cb(e.addClass, c), e.removeClass = cb(e.removeClass, d), a.push(b, "setClass", e)
        }, animate: function (b, c, d, e, f) {
          return f = fb(f), f.from = f.from ? l(f.from, c) : c, f.to = f.to ? l(f.to, d) : d, e = e || "ng-inline-animate", f.tempClasses = cb(f.tempClasses, e), a.push(b, "animate", f)
        }
      }
    }]
  }], Ie = function () {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        c.push(b), c.length > 1 || a(function () {
          for (var a = 0; a < c.length; a++)c[a]();
          c = []
        })
      }

      var c = [];
      return function () {
        var a = !1;
        return b(function () {
          a = !0
        }), function (c) {
          a ? c() : b(c)
        }
      }
    }]
  }, Je = function () {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, c, d, e) {
      function g(a) {
        this.setHost(a);
        var b = c(), f = function (a) {
          e(a, 0, !1)
        };
        this._doneCallbacks = [], this._tick = function (a) {
          var c = d[0];
          c && c.hidden ? f(a) : b(a)
        }, this._state = 0
      }

      var h = 0, i = 1, j = 2;
      return g.chain = function (a, b) {
        function c() {
          return d === a.length ? void b(!0) : void a[d](function (a) {
            return a === !1 ? void b(!1) : (d++, void c())
          })
        }

        var d = 0;
        c()
      }, g.all = function (a, b) {
        function c(c) {
          e = e && c, ++d === a.length && b(e)
        }

        var d = 0, e = !0;
        f(a, function (a) {
          a.done(c)
        })
      }, g.prototype = {
        setHost: function (a) {
          this.host = a || {}
        }, done: function (a) {
          this._state === j ? a() : this._doneCallbacks.push(a)
        }, progress: p, getPromise: function () {
          if (!this.promise) {
            var b = this;
            this.promise = a(function (a, c) {
              b.done(function (b) {
                b === !1 ? c() : a()
              })
            })
          }
          return this.promise
        }, then: function (a, b) {
          return this.getPromise().then(a, b)
        }, "catch": function (a) {
          return this.getPromise()["catch"](a)
        }, "finally": function (a) {
          return this.getPromise()["finally"](a)
        }, pause: function () {
          this.host.pause && this.host.pause()
        }, resume: function () {
          this.host.resume && this.host.resume()
        }, end: function () {
          this.host.end && this.host.end(), this._resolve(!0)
        }, cancel: function () {
          this.host.cancel && this.host.cancel(), this._resolve(!1)
        }, complete: function (a) {
          var b = this;
          b._state === h && (b._state = i, b._tick(function () {
            b._resolve(a)
          }))
        }, _resolve: function (a) {
          this._state !== j && (f(this._doneCallbacks, function (b) {
            b(a)
          }), this._doneCallbacks.length = 0, this._state = j)
        }
      }, g
    }]
  }, Ke = function () {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, c) {
      return function (b, d) {
        function e() {
          return a(function () {
            f(), h || i.complete(), h = !0
          }), i
        }

        function f() {
          g.addClass && (b.addClass(g.addClass), g.addClass = null), g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null), g.to && (b.css(g.to), g.to = null)
        }

        var g = d || {};
        g.$$prepared || (g = O(g)), g.cleanupStyles && (g.from = g.to = null), g.from && (b.css(g.from), g.from = null);
        var h, i = new c;
        return {start: e, end: e}
      }
    }]
  }, Le = d("$compile");
  kb.$inject = ["$provide", "$$sanitizeUriProvider"];
  var Me = /^((?:x|data)[\:\-_])/i, Ne = d("$controller"), Oe = /^(\S+)(\s+as\s+([\w$]+))?$/, Pe = function () {
    this.$get = ["$document", function (a) {
      return function (b) {
        return b ? !b.nodeType && b instanceof Ed && (b = b[0]) : b = a[0].body, b.offsetWidth + 1
      }
    }]
  }, Qe = "application/json", Re = {"Content-Type": Qe + ";charset=utf-8"}, Se = /^\[|^\{(?!\{)/, Te = {
    "[": /]$/,
    "{": /}$/
  }, Ue = /^\)\]\}',?\n/, Ve = d("$http"), We = function (a) {
    return function () {
      throw Ve("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", a)
    }
  }, Xe = Nd.$interpolateMinErr = d("$interpolate");
  Xe.throwNoconcat = function (a) {
    throw Xe("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a);
  }, Xe.interr = function (a, b) {
    return Xe("interr", "Can't interpolate: {0}\n{1}", a, b.toString())
  };
  var Ye = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Ze = {
    http: 80,
    https: 443,
    ftp: 21
  }, $e = d("$location"), _e = {
    $$html5: !1, $$replace: !1, absUrl: Sb("$$absUrl"), url: function (a) {
      if (t(a))return this.$$url;
      var b = Ye.exec(a);
      return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
    }, protocol: Sb("$$protocol"), host: Sb("$$host"), port: Sb("$$port"), path: Tb("$$path", function (a) {
      return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
    }), search: function (a, b) {
      switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (x(a) || y(a))a = a.toString(), this.$$search = aa(a); else {
            if (!v(a))throw $e("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
            a = O(a, {}), f(a, function (b, c) {
              null == b && delete a[c]
            }), this.$$search = a
          }
          break;
        default:
          t(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
      }
      return this.$$compose(), this
    }, hash: Tb("$$hash", function (a) {
      return null !== a ? a.toString() : ""
    }), replace: function () {
      return this.$$replace = !0, this
    }
  };
  f([Rb, Qb, Pb], function (a) {
    a.prototype = Object.create(_e), a.prototype.state = function (b) {
      if (!arguments.length)return this.$$state;
      if (a !== Pb || !this.$$html5)throw $e("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
      return this.$$state = t(b) ? null : b, this
    }
  });
  var af = d("$parse"), bf = Function.prototype.call, cf = Function.prototype.apply, df = Function.prototype.bind, ef = qa();
  f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    ef[a] = !0
  });
  var ff = {n: "\n", f: "\f", r: "\r", t: "	", v: "\x0B", "'": "'", '"': '"'}, gf = function (a) {
    this.options = a
  };
  gf.prototype = {
    constructor: gf, lex: function (a) {
      for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
        var b = this.text.charAt(this.index);
        if ('"' === b || "'" === b)this.readString(b); else if (this.isNumber(b) || "." === b && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(b))this.readIdent(); else if (this.is(b, "(){}[].,;:?"))this.tokens.push({
          index: this.index,
          text: b
        }), this.index++; else if (this.isWhitespace(b))this.index++; else {
          var c = b + this.peek(), d = c + this.peek(2), e = ef[b], f = ef[c], g = ef[d];
          if (e || f || g) {
            var h = g ? d : f ? c : b;
            this.tokens.push({index: this.index, text: h, operator: !0}), this.index += h.length
          } else this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
      }
      return this.tokens
    }, is: function (a, b) {
      return -1 !== b.indexOf(a)
    }, peek: function (a) {
      var b = a || 1;
      return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
    }, isNumber: function (a) {
      return a >= "0" && "9" >= a && "string" == typeof a
    }, isWhitespace: function (a) {
      return " " === a || "\r" === a || "	" === a || "\n" === a || "\x0B" === a || " " === a
    }, isIdent: function (a) {
      return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
    }, isExpOperator: function (a) {
      return "-" === a || "+" === a || this.isNumber(a)
    }, throwError: function (a, b, c) {
      c = c || this.index;
      var d = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
      throw af("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
    }, readNumber: function () {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var c = yd(this.text.charAt(this.index));
        if ("." == c || this.isNumber(c))a += c; else {
          var d = this.peek();
          if ("e" == c && this.isExpOperator(d))a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1))a += c; else {
            if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1))break;
            this.throwError("Invalid exponent")
          }
        }
        this.index++
      }
      this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
    }, readIdent: function () {
      for (var a = this.index; this.index < this.text.length;) {
        var b = this.text.charAt(this.index);
        if (!this.isIdent(b) && !this.isNumber(b))break;
        this.index++
      }
      this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
    }, readString: function (a) {
      var b = this.index;
      this.index++;
      for (var c = "", d = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index);
        if (d += f, e) {
          if ("u" === f) {
            var g = this.text.substring(this.index + 1, this.index + 5);
            g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
          } else {
            var h = ff[f];
            c += h || f
          }
          e = !1
        } else if ("\\" === f)e = !0; else {
          if (f === a)return this.index++, void this.tokens.push({index: b, text: d, constant: !0, value: c});
          c += f
        }
        this.index++
      }
      this.throwError("Unterminated quote", b)
    }
  };
  var hf = function (a, b) {
    this.lexer = a, this.options = b
  };
  hf.Program = "Program", hf.ExpressionStatement = "ExpressionStatement", hf.AssignmentExpression = "AssignmentExpression", hf.ConditionalExpression = "ConditionalExpression", hf.LogicalExpression = "LogicalExpression", hf.BinaryExpression = "BinaryExpression", hf.UnaryExpression = "UnaryExpression", hf.CallExpression = "CallExpression", hf.MemberExpression = "MemberExpression", hf.Identifier = "Identifier", hf.Literal = "Literal", hf.ArrayExpression = "ArrayExpression", hf.Property = "Property", hf.ObjectExpression = "ObjectExpression", hf.ThisExpression = "ThisExpression", hf.NGValueParameter = "NGValueParameter", hf.prototype = {
    ast: function (a) {
      this.text = a, this.tokens = this.lexer.lex(a);
      var b = this.program();
      return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b
    },
    program: function () {
      for (var a = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))return {
        type: hf.Program,
        body: a
      }
    },
    expressionStatement: function () {
      return {type: hf.ExpressionStatement, expression: this.filterChain()}
    },
    filterChain: function () {
      for (var a, b = this.expression(); a = this.expect("|");)b = this.filter(b);
      return b
    },
    expression: function () {
      return this.assignment()
    },
    assignment: function () {
      var a = this.ternary();
      return this.expect("=") && (a = {
        type: hf.AssignmentExpression,
        left: a,
        right: this.assignment(),
        operator: "="
      }), a
    },
    ternary: function () {
      var a, b, c = this.logicalOR();
      return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
        type: hf.ConditionalExpression,
        test: c,
        alternate: a,
        consequent: b
      }) : c
    },
    logicalOR: function () {
      for (var a = this.logicalAND(); this.expect("||");)a = {
        type: hf.LogicalExpression,
        operator: "||",
        left: a,
        right: this.logicalAND()
      };
      return a
    },
    logicalAND: function () {
      for (var a = this.equality(); this.expect("&&");)a = {
        type: hf.LogicalExpression,
        operator: "&&",
        left: a,
        right: this.equality()
      };
      return a
    },
    equality: function () {
      for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");)b = {
        type: hf.BinaryExpression,
        operator: a.text,
        left: b,
        right: this.relational()
      };
      return b
    },
    relational: function () {
      for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");)b = {
        type: hf.BinaryExpression,
        operator: a.text,
        left: b,
        right: this.additive()
      };
      return b
    },
    additive: function () {
      for (var a, b = this.multiplicative(); a = this.expect("+", "-");)b = {
        type: hf.BinaryExpression,
        operator: a.text,
        left: b,
        right: this.multiplicative()
      };
      return b
    },
    multiplicative: function () {
      for (var a, b = this.unary(); a = this.expect("*", "/", "%");)b = {
        type: hf.BinaryExpression,
        operator: a.text,
        left: b,
        right: this.unary()
      };
      return b
    },
    unary: function () {
      var a;
      return (a = this.expect("+", "-", "!")) ? {
        type: hf.UnaryExpression,
        operator: a.text,
        prefix: !0,
        argument: this.unary()
      } : this.primary()
    },
    primary: function () {
      var a;
      this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = O(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
      for (var b; b = this.expect("(", "[", ".");)"(" === b.text ? (a = {
        type: hf.CallExpression,
        callee: a,
        arguments: this.parseArguments()
      }, this.consume(")")) : "[" === b.text ? (a = {
        type: hf.MemberExpression,
        object: a,
        property: this.expression(),
        computed: !0
      }, this.consume("]")) : "." === b.text ? a = {
        type: hf.MemberExpression,
        object: a,
        property: this.identifier(),
        computed: !1
      } : this.throwError("IMPOSSIBLE");
      return a
    },
    filter: function (a) {
      for (var b = [a], c = {
        type: hf.CallExpression,
        callee: this.identifier(),
        arguments: b,
        filter: !0
      }; this.expect(":");)b.push(this.expression());
      return c
    },
    parseArguments: function () {
      var a = [];
      if (")" !== this.peekToken().text)do a.push(this.expression()); while (this.expect(","));
      return a
    },
    identifier: function () {
      var a = this.consume();
      return a.identifier || this.throwError("is not a valid identifier", a), {type: hf.Identifier, name: a.text}
    },
    constant: function () {
      return {type: hf.Literal, value: this.consume().value}
    },
    arrayDeclaration: function () {
      var a = [];
      if ("]" !== this.peekToken().text)do {
        if (this.peek("]"))break;
        a.push(this.expression())
      } while (this.expect(","));
      return this.consume("]"), {type: hf.ArrayExpression, elements: a}
    },
    object: function () {
      var a, b = [];
      if ("}" !== this.peekToken().text)do {
        if (this.peek("}"))break;
        a = {
          type: hf.Property,
          kind: "init"
        }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), a.value = this.expression(), b.push(a)
      } while (this.expect(","));
      return this.consume("}"), {type: hf.ObjectExpression, properties: b}
    },
    throwError: function (a, b) {
      throw af("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
    },
    consume: function (a) {
      if (0 === this.tokens.length)throw af("ueoe", "Unexpected end of expression: {0}", this.text);
      var b = this.expect(a);
      return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
    },
    peekToken: function () {
      if (0 === this.tokens.length)throw af("ueoe", "Unexpected end of expression: {0}", this.text);
      return this.tokens[0]
    },
    peek: function (a, b, c, d) {
      return this.peekAhead(0, a, b, c, d)
    },
    peekAhead: function (a, b, c, d, e) {
      if (this.tokens.length > a) {
        var f = this.tokens[a], g = f.text;
        if (g === b || g === c || g === d || g === e || !b && !c && !d && !e)return f
      }
      return !1
    },
    expect: function (a, b, c, d) {
      var e = this.peek(a, b, c, d);
      return e ? (this.tokens.shift(), e) : !1
    },
    constants: {
      "true": {type: hf.Literal, value: !0},
      "false": {type: hf.Literal, value: !1},
      "null": {type: hf.Literal, value: null},
      undefined: {type: hf.Literal, value: c},
      "this": {type: hf.ThisExpression}
    }
  }, ic.prototype = {
    compile: function (a, b) {
      var d = this, e = this.astBuilder.ast(a);
      this.state = {
        nextId: 0,
        filters: {},
        expensiveChecks: b,
        fn: {vars: [], body: [], own: {}},
        assign: {vars: [], body: [], own: {}},
        inputs: []
      }, cc(e, d.$filter);
      var g, h = "";
      if (this.stage = "assign", g = fc(e)) {
        this.state.computing = "assign";
        var i = this.nextId();
        this.recurse(g, i), this.return_(i), h = "fn.assign=" + this.generateFunction("assign", "s,v,l")
      }
      var j = dc(e.body);
      d.stage = "inputs", f(j, function (a, b) {
        var c = "fn" + b;
        d.state[c] = {vars: [], body: [], own: {}}, d.state.computing = c;
        var e = d.nextId();
        d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b
      }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
      var k = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;", l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", k)(this.$filter, Wb, Yb, Zb, Xb, $b, _b, ac, a);
      return this.state = this.stage = c, l.literal = gc(e), l.constant = hc(e), l
    }, USE: "use", STRICT: "strict", watchFns: function () {
      var a = [], b = this.state.inputs, c = this;
      return f(b, function (b) {
        a.push("var " + b + "=" + c.generateFunction(b, "s"))
      }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
    }, generateFunction: function (a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
    }, filterPrefix: function () {
      var a = [], b = this;
      return f(this.state.filters, function (c, d) {
        a.push(c + "=$filter(" + b.escape(d) + ")")
      }), a.length ? "var " + a.join(",") + ";" : ""
    }, varsPrefix: function (a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
    }, body: function (a) {
      return this.state[a].body.join("")
    }, recurse: function (a, b, d, e, g, h) {
      var i, j, k, l, m = this;
      if (e = e || p, !h && u(a.watchId))return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
      switch (a.type) {
        case hf.Program:
          f(a.body, function (b, d) {
            m.recurse(b.expression, c, c, function (a) {
              j = a
            }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j)
          });
          break;
        case hf.Literal:
          l = this.escape(a.value), this.assign(b, l), e(l);
          break;
        case hf.UnaryExpression:
          this.recurse(a.argument, c, c, function (a) {
            j = a
          }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
          break;
        case hf.BinaryExpression:
          this.recurse(a.left, c, c, function (a) {
            i = a
          }), this.recurse(a.right, c, c, function (a) {
            j = a
          }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", this.assign(b, l), e(l);
          break;
        case hf.LogicalExpression:
          b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
          break;
        case hf.ConditionalExpression:
          b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
          break;
        case hf.Identifier:
          b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name), Wb(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function () {
            m.if_("inputs" === m.stage || "s", function () {
              g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
            })
          }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || kc(a.name)) && m.addEnsureSafeObject(b), e(b);
          break;
        case hf.MemberExpression:
          i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function () {
            m.if_(m.notNull(i), function () {
              a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.getStringValue(j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, d.name = j)) : (Wb(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || kc(a.property.name)) && (l = m.ensureSafeObject(l)), m.assign(b, l), d && (d.computed = !1, d.name = a.property.name))
            }, function () {
              m.assign(b, "undefined")
            }), e(b)
          }, !!g);
          break;
        case hf.CallExpression:
          b = b || this.nextId(), a.filter ? (j = m.filter(a.callee.name), k = [], f(a.arguments, function (a) {
            var b = m.nextId();
            m.recurse(a, b), k.push(b)
          }), l = j + "(" + k.join(",") + ")", m.assign(b, l), e(b)) : (j = m.nextId(), i = {}, k = [], m.recurse(a.callee, j, i, function () {
            m.if_(m.notNull(j), function () {
              m.addEnsureSafeFunction(j), f(a.arguments, function (a) {
                m.recurse(a, m.nextId(), c, function (a) {
                  k.push(m.ensureSafeObject(a))
                })
              }), i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + "(" + k.join(",") + ")") : l = j + "(" + k.join(",") + ")", l = m.ensureSafeObject(l), m.assign(b, l)
            }, function () {
              m.assign(b, "undefined")
            }), e(b)
          }));
          break;
        case hf.AssignmentExpression:
          if (j = this.nextId(), i = {}, !ec(a.left))throw af("lval", "Trying to assign a value to a non l-value");
          this.recurse(a.left, c, i, function () {
            m.if_(m.notNull(i.context), function () {
              m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), m.addEnsureSafeAssignContext(i.context), l = m.member(i.context, i.name, i.computed) + a.operator + j, m.assign(b, l), e(b || l)
            })
          }, 1);
          break;
        case hf.ArrayExpression:
          k = [], f(a.elements, function (a) {
            m.recurse(a, m.nextId(), c, function (a) {
              k.push(a)
            })
          }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
          break;
        case hf.ObjectExpression:
          k = [], f(a.properties, function (a) {
            m.recurse(a.value, m.nextId(), c, function (b) {
              k.push(m.escape(a.key.type === hf.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
            })
          }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
          break;
        case hf.ThisExpression:
          this.assign(b, "s"), e("s");
          break;
        case hf.NGValueParameter:
          this.assign(b, "v"), e("v")
      }
    }, getHasOwnProperty: function (a, b) {
      var c = a + "." + b, d = this.current().own;
      return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
    }, assign: function (a, b) {
      return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0
    }, filter: function (a) {
      return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
    }, ifDefined: function (a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")"
    }, plus: function (a, b) {
      return "plus(" + a + "," + b + ")"
    }, return_: function (a) {
      this.current().body.push("return ", a, ";")
    }, if_: function (a, b, c) {
      if (a === !0)b(); else {
        var d = this.current().body;
        d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
      }
    }, not: function (a) {
      return "!(" + a + ")"
    }, notNull: function (a) {
      return a + "!=null"
    }, nonComputedMember: function (a, b) {
      return a + "." + b
    }, computedMember: function (a, b) {
      return a + "[" + b + "]"
    }, member: function (a, b, c) {
      return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
    }, addEnsureSafeObject: function (a) {
      this.current().body.push(this.ensureSafeObject(a), ";")
    }, addEnsureSafeMemberName: function (a) {
      this.current().body.push(this.ensureSafeMemberName(a), ";")
    }, addEnsureSafeFunction: function (a) {
      this.current().body.push(this.ensureSafeFunction(a), ";")
    }, addEnsureSafeAssignContext: function (a) {
      this.current().body.push(this.ensureSafeAssignContext(a), ";")
    }, ensureSafeObject: function (a) {
      return "ensureSafeObject(" + a + ",text)"
    }, ensureSafeMemberName: function (a) {
      return "ensureSafeMemberName(" + a + ",text)"
    }, ensureSafeFunction: function (a) {
      return "ensureSafeFunction(" + a + ",text)"
    }, getStringValue: function (a) {
      this.assign(a, "getStringValue(" + a + ",text)")
    }, ensureSafeAssignContext: function (a) {
      return "ensureSafeAssignContext(" + a + ",text)"
    }, lazyRecurse: function (a, b, c, d, e, f) {
      var g = this;
      return function () {
        g.recurse(a, b, c, d, e, f)
      }
    }, lazyAssign: function (a, b) {
      var c = this;
      return function () {
        c.assign(a, b)
      }
    }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }, escape: function (a) {
      if (x(a))return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
      if (y(a))return a.toString();
      if (a === !0)return "true";
      if (a === !1)return "false";
      if (null === a)return "null";
      if ("undefined" == typeof a)return "undefined";
      throw af("esc", "IMPOSSIBLE")
    }, nextId: function (a, b) {
      var c = "v" + this.state.nextId++;
      return a || this.current().vars.push(c + (b ? "=" + b : "")), c
    }, current: function () {
      return this.state[this.state.computing]
    }
  }, jc.prototype = {
    compile: function (a, b) {
      var c = this, d = this.astBuilder.ast(a);
      this.expression = a, this.expensiveChecks = b, cc(d, c.$filter);
      var e, g;
      (e = fc(d)) && (g = this.recurse(e));
      var h, i = dc(d.body);
      i && (h = [], f(i, function (a, b) {
        var d = c.recurse(a);
        a.input = d, h.push(d), a.watchId = b
      }));
      var j = [];
      f(d.body, function (a) {
        j.push(c.recurse(a.expression))
      });
      var k = 0 === d.body.length ? function () {
      } : 1 === d.body.length ? j[0] : function (a, b) {
        var c;
        return f(j, function (d) {
          c = d(a, b)
        }), c
      };
      return g && (k.assign = function (a, b, c) {
        return g(a, c, b)
      }), h && (k.inputs = h), k.literal = gc(d), k.constant = hc(d), k
    }, recurse: function (a, b, d) {
      var e, g, h, i = this;
      if (a.input)return this.inputs(a.input, a.watchId);
      switch (a.type) {
        case hf.Literal:
          return this.value(a.value, b);
        case hf.UnaryExpression:
          return g = this.recurse(a.argument), this["unary" + a.operator](g, b);
        case hf.BinaryExpression:
          return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
        case hf.LogicalExpression:
          return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
        case hf.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
        case hf.Identifier:
          return Wb(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || kc(a.name), b, d, i.expression);
        case hf.MemberExpression:
          return e = this.recurse(a.object, !1, !!d), a.computed || (Wb(a.property.name, i.expression), g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);
        case hf.CallExpression:
          return h = [], f(a.arguments, function (a) {
            h.push(i.recurse(a))
          }), a.filter && (g = this.$filter(a.callee.name)), a.filter || (g = this.recurse(a.callee, !0)), a.filter ? function (a, d, e, f) {
            for (var i = [], j = 0; j < h.length; ++j)i.push(h[j](a, d, e, f));
            var k = g.apply(c, i, f);
            return b ? {context: c, name: c, value: k} : k
          } : function (a, c, d, e) {
            var f, j = g(a, c, d, e);
            if (null != j.value) {
              Yb(j.context, i.expression), Zb(j.value, i.expression);
              for (var k = [], l = 0; l < h.length; ++l)k.push(Yb(h[l](a, c, d, e), i.expression));
              f = Yb(j.value.apply(j.context, k), i.expression)
            }
            return b ? {value: f} : f
          };
        case hf.AssignmentExpression:
          return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right), function (a, c, d, f) {
            var h = e(a, c, d, f), j = g(a, c, d, f);
            return Yb(h.value, i.expression), $b(h.context), h.context[h.name] = j, b ? {value: j} : j
          };
        case hf.ArrayExpression:
          return h = [], f(a.elements, function (a) {
            h.push(i.recurse(a))
          }), function (a, c, d, e) {
            for (var f = [], g = 0; g < h.length; ++g)f.push(h[g](a, c, d, e));
            return b ? {value: f} : f
          };
        case hf.ObjectExpression:
          return h = [], f(a.properties, function (a) {
            h.push({key: a.key.type === hf.Identifier ? a.key.name : "" + a.key.value, value: i.recurse(a.value)})
          }), function (a, c, d, e) {
            for (var f = {}, g = 0; g < h.length; ++g)f[h[g].key] = h[g].value(a, c, d, e);
            return b ? {value: f} : f
          };
        case hf.ThisExpression:
          return function (a) {
            return b ? {value: a} : a
          };
        case hf.NGValueParameter:
          return function (a, c, d, e) {
            return b ? {value: d} : d
          }
      }
    }, "unary+": function (a, b) {
      return function (c, d, e, f) {
        var g = a(c, d, e, f);
        return g = u(g) ? +g : 0, b ? {value: g} : g
      }
    }, "unary-": function (a, b) {
      return function (c, d, e, f) {
        var g = a(c, d, e, f);
        return g = u(g) ? -g : 0, b ? {value: g} : g
      }
    }, "unary!": function (a, b) {
      return function (c, d, e, f) {
        var g = !a(c, d, e, f);
        return b ? {value: g} : g
      }
    }, "binary+": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g), i = b(d, e, f, g), j = ac(h, i);
        return c ? {value: j} : j
      }
    }, "binary-": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g), i = b(d, e, f, g), j = (u(h) ? h : 0) - (u(i) ? i : 0);
        return c ? {value: j} : j
      }
    }, "binary*": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) * b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary/": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) / b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary%": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) % b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary===": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) === b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary!==": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) !== b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary==": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) == b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary!=": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) != b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary<": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) < b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary>": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) > b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary<=": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) <= b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary>=": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) >= b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary&&": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) && b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "binary||": function (a, b, c) {
      return function (d, e, f, g) {
        var h = a(d, e, f, g) || b(d, e, f, g);
        return c ? {value: h} : h
      }
    }, "ternary?:": function (a, b, c, d) {
      return function (e, f, g, h) {
        var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
        return d ? {value: i} : i
      }
    }, value: function (a, b) {
      return function () {
        return b ? {context: c, name: c, value: a} : a
      }
    }, identifier: function (a, b, d, e, f) {
      return function (g, h, i, j) {
        var k = h && a in h ? h : g;
        e && 1 !== e && k && !k[a] && (k[a] = {});
        var l = k ? k[a] : c;
        return b && Yb(l, f), d ? {context: k, name: a, value: l} : l
      }
    }, computedMember: function (a, b, c, d, e) {
      return function (f, g, h, i) {
        var j, k, l = a(f, g, h, i);
        return null != l && (j = b(f, g, h, i), j = Xb(j), Wb(j, e), d && 1 !== d && l && !l[j] && (l[j] = {}), k = l[j], Yb(k, e)), c ? {
          context: l,
          name: j,
          value: k
        } : k
      }
    }, nonComputedMember: function (a, b, d, e, f, g) {
      return function (h, i, j, k) {
        var l = a(h, i, j, k);
        f && 1 !== f && l && !l[b] && (l[b] = {});
        var m = null != l ? l[b] : c;
        return (d || kc(b)) && Yb(m, g), e ? {context: l, name: b, value: m} : m
      }
    }, inputs: function (a, b) {
      return function (c, d, e, f) {
        return f ? f[b] : a(c, d, e)
      }
    }
  };
  var jf = function (a, b, c) {
    this.lexer = a, this.$filter = b, this.options = c, this.ast = new hf(this.lexer), this.astCompiler = c.csp ? new jc(this.ast, b) : new ic(this.ast, b)
  };
  jf.prototype = {
    constructor: jf, parse: function (a) {
      return this.astCompiler.compile(a, this.options.expensiveChecks)
    }
  };
  var kf = Object.prototype.valueOf, lf = d("$sce"), mf = {
    HTML: "html",
    CSS: "css",
    URL: "url",
    RESOURCE_URL: "resourceUrl",
    JS: "js"
  }, Le = d("$compile"), nf = b.createElement("a"), of = Bc(a.location.href);
  Ec.$inject = ["$document"], Gc.$inject = ["$provide"];
  var pf = 22, qf = ".", rf = "0";
  Lc.$inject = ["$locale"], Mc.$inject = ["$locale"];
  var sf = {
    yyyy: Rc("FullYear", 4),
    yy: Rc("FullYear", 2, 0, !0),
    y: Rc("FullYear", 1),
    MMMM: Sc("Month"),
    MMM: Sc("Month", !0),
    MM: Rc("Month", 2, 1),
    M: Rc("Month", 1, 1),
    dd: Rc("Date", 2),
    d: Rc("Date", 1),
    HH: Rc("Hours", 2),
    H: Rc("Hours", 1),
    hh: Rc("Hours", 2, -12),
    h: Rc("Hours", 1, -12),
    mm: Rc("Minutes", 2),
    m: Rc("Minutes", 1),
    ss: Rc("Seconds", 2),
    s: Rc("Seconds", 1),
    sss: Rc("Milliseconds", 3),
    EEEE: Sc("Day"),
    EEE: Sc("Day", !0),
    a: Xc,
    Z: Tc,
    ww: Wc(2),
    w: Wc(1),
    G: Yc,
    GG: Yc,
    GGG: Yc,
    GGGG: Zc
  }, tf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, uf = /^\-?\d+$/;
  $c.$inject = ["$locale"];
  var vf = r(yd), wf = r(Ad);
  bd.$inject = ["$parse"];
  var xf = r({
    restrict: "E", compile: function (a, b) {
      return b.href || b.xlinkHref ? void 0 : function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var c = "[object SVGAnimatedString]" === Kd.call(b.prop("href")) ? "xlink:href" : "href";
          b.on("click", function (a) {
            b.attr(c) || a.preventDefault()
          })
        }
      }
    }
  }), yf = {};
  f(te, function (a, b) {
    function c(a, c, e) {
      a.$watch(e[d], function (a) {
        e.$set(b, !!a)
      })
    }

    if ("multiple" != a) {
      var d = lb("ng-" + b), e = c;
      "checked" === a && (e = function (a, b, e) {
        e.ngModel !== e[d] && c(a, b, e)
      }), yf[d] = function () {
        return {restrict: "A", priority: 100, link: e}
      }
    }
  }), f(ve, function (a, b) {
    yf[b] = function () {
      return {
        priority: 100, link: function (a, c, d) {
          if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
            var e = d.ngPattern.match(wd);
            if (e)return void d.$set("ngPattern", new RegExp(e[1], e[2]))
          }
          a.$watch(d[b], function (a) {
            d.$set(b, a)
          })
        }
      }
    }
  }), f(["src", "srcset", "href"], function (a) {
    var b = lb("ng-" + a);
    yf[b] = function () {
      return {
        priority: 99, link: function (c, d, e) {
          var f = a, g = a;
          "href" === a && "[object SVGAnimatedString]" === Kd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function (b) {
            return b ? (e.$set(g, b), void(Dd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
          })
        }
      }
    }
  });
  var zf = {
    $addControl: p,
    $$renameControl: dd,
    $removeControl: p,
    $setValidity: p,
    $setDirty: p,
    $setPristine: p,
    $setSubmitted: p
  }, Af = "ng-submitted";
  ed.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  var Bf = function (a) {
    return ["$timeout", "$parse", function (b, d) {
      function e(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || p
      }

      var f = {
        name: "form",
        restrict: a ? "EAC" : "E",
        require: ["form", "^^?form"],
        controller: ed,
        compile: function (d, f) {
          d.addClass(hg).addClass(fg);
          var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
          return {
            pre: function (a, d, f, h) {
              var i = h[0];
              if (!("action" in f)) {
                var j = function (b) {
                  a.$apply(function () {
                    i.$commitViewValue(), i.$setSubmitted()
                  }), b.preventDefault()
                };
                ge(d[0], "submit", j), d.on("$destroy", function () {
                  b(function () {
                    he(d[0], "submit", j)
                  }, 0, !1)
                })
              }
              var k = h[1] || i.$$parentForm;
              k.$addControl(i);
              var m = g ? e(i.$name) : p;
              g && (m(a, i), f.$observe(g, function (b) {
                i.$name !== b && (m(a, c), i.$$parentForm.$$renameControl(i, b), (m = e(i.$name))(a, i))
              })), d.on("$destroy", function () {
                i.$$parentForm.$removeControl(i), m(a, c), l(i, zf)
              })
            }
          }
        }
      };
      return f
    }]
  }, Cf = Bf(), Df = Bf(!0), Ef = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Ff = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Gf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Hf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, If = /^(\d{4})-(\d{2})-(\d{2})$/, Jf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Kf = /^(\d{4})-W(\d\d)$/, Lf = /^(\d{4})-(\d\d)$/, Mf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Nf = {
    text: gd,
    date: kd("date", If, jd(If, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
    "datetime-local": kd("datetimelocal", Jf, jd(Jf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
    time: kd("time", Mf, jd(Mf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
    week: kd("week", Kf, id, "yyyy-Www"),
    month: kd("month", Lf, jd(Lf, ["yyyy", "MM"]), "yyyy-MM"),
    number: md,
    url: nd,
    email: od,
    radio: pd,
    checkbox: rd,
    hidden: p,
    button: p,
    submit: p,
    reset: p,
    file: p
  }, Of = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, c, d) {
    return {
      restrict: "E", require: ["?ngModel"], link: {
        pre: function (e, f, g, h) {
          h[0] && (Nf[yd(g.type)] || Nf.text)(e, f, g, h[0], b, a, c, d)
        }
      }
    }
  }], Pf = /^(true|false|\d+)$/, Qf = function () {
    return {
      restrict: "A", priority: 100, compile: function (a, b) {
        return Pf.test(b.ngValue) ? function (a, b, c) {
          c.$set("value", a.$eval(c.ngValue))
        } : function (a, b, c) {
          a.$watch(c.ngValue, function (a) {
            c.$set("value", a)
          })
        }
      }
    }
  }, Rf = ["$compile", function (a) {
    return {
      restrict: "AC", compile: function (b) {
        return a.$$addBindingClass(b), function (b, c, d) {
          a.$$addBindingInfo(c, d.ngBind), c = c[0], b.$watch(d.ngBind, function (a) {
            c.textContent = t(a) ? "" : a
          })
        }
      }
    }
  }], Sf = ["$interpolate", "$compile", function (a, b) {
    return {
      compile: function (c) {
        return b.$$addBindingClass(c), function (c, d, e) {
          var f = a(d.attr(e.$attr.ngBindTemplate));
          b.$$addBindingInfo(d, f.expressions), d = d[0], e.$observe("ngBindTemplate", function (a) {
            d.textContent = t(a) ? "" : a
          })
        }
      }
    }
  }], Tf = ["$sce", "$parse", "$compile", function (a, b, c) {
    return {
      restrict: "A", compile: function (d, e) {
        var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (a) {
          return (a || "").toString()
        });
        return c.$$addBindingClass(d), function (b, d, e) {
          c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function () {
            d.html(a.getTrustedHtml(f(b)) || "")
          })
        }
      }
    }
  }], Uf = r({
    restrict: "A", require: "ngModel", link: function (a, b, c, d) {
      d.$viewChangeListeners.push(function () {
        a.$eval(c.ngChange)
      })
    }
  }), Vf = sd("", !0), Wf = sd("Odd", 0), Xf = sd("Even", 1), Yf = cd({
    compile: function (a, b) {
      b.$set("ngCloak", c), a.removeClass("ng-cloak")
    }
  }), Zf = [function () {
    return {restrict: "A", scope: !0, controller: "@", priority: 500}
  }], $f = {}, _f = {blur: !0, focus: !0};
  f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = lb("ng-" + a);
    $f[b] = ["$parse", "$rootScope", function (c, d) {
      return {
        restrict: "A", compile: function (e, f) {
          var g = c(f[b], null, !0);
          return function (b, c) {
            c.on(a, function (c) {
              var e = function () {
                g(b, {$event: c})
              };
              _f[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
            })
          }
        }
      }
    }]
  });
  var ag = ["$animate", function (a) {
    return {
      multiElement: !0,
      transclude: "element",
      priority: 600,
      terminal: !0,
      restrict: "A",
      $$tlb: !0,
      link: function (c, d, e, f, g) {
        var h, i, j;
        c.$watch(e.ngIf, function (c) {
          c ? i || g(function (c, f) {
            i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {clone: c}, a.enter(c, d.parent(), d)
          }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = pa(h.clone), a.leave(j).then(function () {
            j = null
          }), h = null))
        })
      }
    }
  }], bg = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, c) {
    return {
      restrict: "ECA",
      priority: 400,
      terminal: !0,
      transclude: "element",
      controller: Nd.noop,
      compile: function (d, e) {
        var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
        return function (d, e, i, j, k) {
          var l, m, n, o = 0, p = function () {
            m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function () {
              m = null
            }), m = n, n = null)
          };
          d.$watch(f, function (f) {
            var i = function () {
              !u(h) || h && !d.$eval(h) || b()
            }, m = ++o;
            f ? (a(f, !0).then(function (a) {
              if (!d.$$destroyed && m === o) {
                var b = d.$new();
                j.template = a;
                var h = k(b, function (a) {
                  p(), c.enter(a, null, e).then(i)
                });
                l = b, n = h, l.$emit("$includeContentLoaded", f), d.$eval(g)
              }
            }, function () {
              d.$$destroyed || m === o && (p(), d.$emit("$includeContentError", f))
            }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null)
          })
        }
      }
    }
  }], cg = ["$compile", function (a) {
    return {
      restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
        return /SVG/.test(d[0].toString()) ? (d.empty(), void a(Aa(f.template, b).childNodes)(c, function (a) {
          d.append(a)
        }, {futureParentElement: d})) : (d.html(f.template), void a(d.contents())(c))
      }
    }
  }], dg = cd({
    priority: 450, compile: function () {
      return {
        pre: function (a, b, c) {
          a.$eval(c.ngInit)
        }
      }
    }
  }), eg = function () {
    return {
      restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, e) {
        var g = b.attr(d.$attr.ngList) || ", ", h = "false" !== d.ngTrim, i = h ? Sd(g) : g, j = function (a) {
          if (!t(a)) {
            var b = [];
            return a && f(a.split(i), function (a) {
              a && b.push(h ? Sd(a) : a)
            }), b
          }
        };
        e.$parsers.push(j), e.$formatters.push(function (a) {
          return Qd(a) ? a.join(g) : c
        }), e.$isEmpty = function (a) {
          return !a || !a.length
        }
      }
    }
  }, fg = "ng-valid", gg = "ng-invalid", hg = "ng-pristine", ig = "ng-dirty", jg = "ng-untouched", kg = "ng-touched", lg = "ng-pending", mg = d("ngModel"), ng = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, e, g, h, i, j, k, l) {
    this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a), this.$$parentForm = zf;
    var m, n = g(d.ngModel), o = n.assign, q = n, r = o, s = null, v = this;
    this.$$setOptions = function (a) {
      if (v.$options = a, a && a.getterSetter) {
        var b = g(d.ngModel + "()"), c = g(d.ngModel + "($$$p)");
        q = function (a) {
          var c = n(a);
          return A(c) && (c = b(a)), c
        }, r = function (a, b) {
          A(n(a)) ? c(a, {$$$p: v.$modelValue}) : o(a, v.$modelValue)
        }
      } else if (!n.assign)throw mg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, $(e))
    }, this.$render = p, this.$isEmpty = function (a) {
      return t(a) || "" === a || null === a || a !== a
    };
    var w = 0;
    td({
      ctrl: this, $element: e, set: function (a, b) {
        a[b] = !0
      }, unset: function (a, b) {
        delete a[b]
      }, $animate: h
    }), this.$setPristine = function () {
      v.$dirty = !1, v.$pristine = !0, h.removeClass(e, ig), h.addClass(e, hg)
    }, this.$setDirty = function () {
      v.$dirty = !0, v.$pristine = !1, h.removeClass(e, hg), h.addClass(e, ig), v.$$parentForm.$setDirty()
    }, this.$setUntouched = function () {
      v.$touched = !1, v.$untouched = !0, h.setClass(e, jg, kg)
    }, this.$setTouched = function () {
      v.$touched = !0, v.$untouched = !1, h.setClass(e, kg, jg)
    }, this.$rollbackViewValue = function () {
      i.cancel(s), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
    }, this.$validate = function () {
      if (!y(v.$modelValue) || !isNaN(v.$modelValue)) {
        var a = v.$$lastCommittedViewValue, b = v.$$rawModelValue, d = v.$valid, e = v.$modelValue, f = v.$options && v.$options.allowInvalid;
        v.$$runValidators(b, a, function (a) {
          f || d === a || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope())
        })
      }
    }, this.$$runValidators = function (a, b, d) {
      function e() {
        var a = v.$$parserName || "parse";
        return t(m) ? (i(a, null), !0) : (m || (f(v.$validators, function (a, b) {
          i(b, null)
        }), f(v.$asyncValidators, function (a, b) {
          i(b, null)
        })), i(a, m), m)
      }

      function g() {
        var c = !0;
        return f(v.$validators, function (d, e) {
          var f = d(a, b);
          c = c && f, i(e, f)
        }), c ? !0 : (f(v.$asyncValidators, function (a, b) {
          i(b, null)
        }), !1)
      }

      function h() {
        var d = [], e = !0;
        f(v.$asyncValidators, function (f, g) {
          var h = f(a, b);
          if (!I(h))throw mg("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
          i(g, c), d.push(h.then(function () {
            i(g, !0)
          }, function (a) {
            e = !1, i(g, !1)
          }))
        }), d.length ? k.all(d).then(function () {
          j(e)
        }, p) : j(!0)
      }

      function i(a, b) {
        l === w && v.$setValidity(a, b)
      }

      function j(a) {
        l === w && d(a)
      }

      w++;
      var l = w;
      return e() && g() ? void h() : void j(!1)
    }, this.$commitViewValue = function () {
      var a = v.$viewValue;
      i.cancel(s), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
    }, this.$$parseAndValidate = function () {
      function b() {
        v.$modelValue !== g && v.$$writeModelToScope()
      }

      var d = v.$$lastCommittedViewValue, e = d;
      if (m = t(e) ? c : !0)for (var f = 0; f < v.$parsers.length; f++)if (e = v.$parsers[f](e), t(e)) {
        m = !1;
        break
      }
      y(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
      var g = v.$modelValue, h = v.$options && v.$options.allowInvalid;
      v.$$rawModelValue = e, h && (v.$modelValue = e, b()), v.$$runValidators(e, v.$$lastCommittedViewValue, function (a) {
        h || (v.$modelValue = a ? e : c, b())
      })
    }, this.$$writeModelToScope = function () {
      r(a, v.$modelValue), f(v.$viewChangeListeners, function (a) {
        try {
          a()
        } catch (c) {
          b(c)
        }
      })
    }, this.$setViewValue = function (a, b) {
      v.$viewValue = a, (!v.$options || v.$options.updateOnDefault) && v.$$debounceViewValueCommit(b)
    }, this.$$debounceViewValueCommit = function (b) {
      var c, d = 0, e = v.$options;
      e && u(e.debounce) && (c = e.debounce, y(c) ? d = c : y(c[b]) ? d = c[b] : y(c["default"]) && (d = c["default"])), i.cancel(s), d ? s = i(function () {
        v.$commitViewValue()
      }, d) : j.$$phase ? v.$commitViewValue() : a.$apply(function () {
        v.$commitViewValue()
      })
    }, a.$watch(function () {
      var b = q(a);
      if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
        v.$modelValue = v.$$rawModelValue = b, m = c;
        for (var d = v.$formatters, e = d.length, f = b; e--;)f = d[e](f);
        v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(b, f, p))
      }
      return b
    })
  }], og = ["$rootScope", function (a) {
    return {
      restrict: "A",
      require: ["ngModel", "^?form", "^?ngModelOptions"],
      controller: ng,
      priority: 1,
      compile: function (b) {
        return b.addClass(hg).addClass(jg).addClass(fg), {
          pre: function (a, b, c, d) {
            var e = d[0], f = d[1] || e.$$parentForm;
            e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function (a) {
              e.$name !== a && e.$$parentForm.$$renameControl(e, a)
            }), a.$on("$destroy", function () {
              e.$$parentForm.$removeControl(e)
            })
          }, post: function (b, c, d, e) {
            var f = e[0];
            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function (a) {
              f.$$debounceViewValueCommit(a && a.type)
            }), c.on("blur", function (c) {
              f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
            })
          }
        }
      }
    }
  }], pg = /(\s+|^)default(\s+|$)/, qg = function () {
    return {
      restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
        var c = this;
        this.$options = O(a.$eval(b.ngModelOptions)), u(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Sd(this.$options.updateOn.replace(pg, function () {
          return c.$options.updateOnDefault = !0, " "
        }))) : this.$options.updateOnDefault = !0
      }]
    }
  }, rg = cd({
    terminal: !0,
    priority: 1e3
  }), sg = d("ngOptions"), tg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, ug = ["$compile", "$parse", function (a, c) {
    function d(a, b, d) {
      function f(a, b, c, d, e) {
        this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
      }

      function g(a) {
        var b;
        if (!j && e(a))b = a; else {
          b = [];
          for (var c in a)a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
        }
        return b
      }

      var h = a.match(tg);
      if (!h)throw sg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, $(b));
      var i = h[5] || h[7], j = h[6], k = / as /.test(h[0]) && h[1], l = h[9], m = c(h[2] ? h[1] : i), n = k && c(k), o = n || m, p = l && c(l), q = l ? function (a, b) {
        return p(d, b)
      } : function (a) {
        return Ya(a)
      }, r = function (a, b) {
        return q(a, x(a, b))
      }, s = c(h[2] || h[1]), t = c(h[3] || ""), u = c(h[4] || ""), v = c(h[8]), w = {}, x = j ? function (a, b) {
        return w[j] = b, w[i] = a, w
      } : function (a) {
        return w[i] = a, w
      };
      return {
        trackBy: l, getTrackByValue: r, getWatchables: c(v, function (a) {
          var b = [];
          a = a || [];
          for (var c = g(a), e = c.length, f = 0; e > f; f++) {
            var i = a === c ? f : c[f], j = (a[i], x(a[i], i)), k = q(a[i], j);
            if (b.push(k), h[2] || h[1]) {
              var l = s(d, j);
              b.push(l)
            }
            if (h[4]) {
              var m = u(d, j);
              b.push(m)
            }
          }
          return b
        }), getOptions: function () {
          for (var a = [], b = {}, c = v(d) || [], e = g(c), h = e.length, i = 0; h > i; i++) {
            var j = c === e ? i : e[i], k = c[j], m = x(k, j), n = o(d, m), p = q(n, m), w = s(d, m), y = t(d, m), z = u(d, m), A = new f(p, n, w, y, z);
            a.push(A), b[p] = A
          }
          return {
            items: a, selectValueMap: b, getOptionFromViewValue: function (a) {
              return b[r(a)]
            }, getViewValueFromOption: function (a) {
              return l ? Nd.copy(a.viewValue) : a.viewValue
            }
          }
        }
      }
    }

    function g(b, c, e, g) {
      function j(a, b) {
        a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue)
      }

      function k(a, b, c, d) {
        var e;
        return b && yd(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b) : a.appendChild(e)), e
      }

      function l(a) {
        for (var b; a;)b = a.nextSibling, Qa(a), a = b
      }

      function m(a) {
        var b = p && p[0], c = w && w[0];
        if (b || c)for (; a && (a === b || a === c || a.nodeType === ae || "option" === M(a) && "" === a.value);)a = a.nextSibling;
        return a
      }

      function n() {
        var a = x && q.readValue();
        x = y.getOptions();
        var b = {}, d = c[0].firstChild;
        if (v && c.prepend(p), d = m(d), x.items.forEach(function (a) {
            var e, f, g;
            a.group ? (e = b[a.group], e || (f = k(c[0], d, "optgroup", i), d = f.nextSibling, f.label = a.group, e = b[a.group] = {
              groupElement: f,
              currentOptionElement: f.firstChild
            }), g = k(e.groupElement, e.currentOptionElement, "option", h), j(a, g), e.currentOptionElement = g.nextSibling) : (g = k(c[0], d, "option", h), j(a, g), d = g.nextSibling)
          }), Object.keys(b).forEach(function (a) {
            l(b[a].currentOptionElement)
          }), l(d), o.$render(), !o.$isEmpty(a)) {
          var e = q.readValue(), f = y.trackBy || r;
          (f ? Q(a, e) : a === e) || (o.$setViewValue(e), o.$render())
        }
      }

      var o = g[1];
      if (o) {
        for (var p, q = g[0], r = e.multiple, s = 0, t = c.children(), u = t.length; u > s; s++)if ("" === t[s].value) {
          p = t.eq(s);
          break
        }
        var v = !!p, w = Ed(h.cloneNode(!1));
        w.val("?");
        var x, y = d(e.ngOptions, c, b), z = function () {
          v || c.prepend(p), c.val(""), p.prop("selected", !0), p.attr("selected", !0)
        }, A = function () {
          v || p.remove()
        }, B = function () {
          c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0)
        }, C = function () {
          w.remove()
        };
        r ? (o.$isEmpty = function (a) {
          return !a || 0 === a.length
        }, q.writeValue = function (a) {
          x.items.forEach(function (a) {
            a.element.selected = !1
          }), a && a.forEach(function (a) {
            var b = x.getOptionFromViewValue(a);
            b && !b.disabled && (b.element.selected = !0)
          })
        }, q.readValue = function () {
          var a = c.val() || [], b = [];
          return f(a, function (a) {
            var c = x.selectValueMap[a];
            c && !c.disabled && b.push(x.getViewValueFromOption(c))
          }), b
        }, y.trackBy && b.$watchCollection(function () {
          return Qd(o.$viewValue) ? o.$viewValue.map(function (a) {
            return y.getTrackByValue(a)
          }) : void 0
        }, function () {
          o.$render()
        })) : (q.writeValue = function (a) {
          var b = x.getOptionFromViewValue(a);
          b && !b.disabled ? c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || v ? (C(), z()) : (A(), B())
        }, q.readValue = function () {
          var a = x.selectValueMap[c.val()];
          return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a)) : null
        }, y.trackBy && b.$watch(function () {
          return y.getTrackByValue(o.$viewValue)
        }, function () {
          o.$render()
        })), v ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = Ed(h.cloneNode(!1)), n(), b.$watchCollection(y.getWatchables, n)
      }
    }

    var h = b.createElement("option"), i = b.createElement("optgroup");
    return {
      restrict: "A", terminal: !0, require: ["select", "?ngModel"], link: {
        pre: function (a, b, c, d) {
          d[0].registerOption = p
        }, post: g
      }
    }
  }], vg = ["$locale", "$interpolate", "$log", function (a, b, c) {
    var d = /{}/g, e = /^when(Minus)?(.+)$/;
    return {
      link: function (g, h, i) {
        function j(a) {
          h.text(a || "")
        }

        var k, l = i.count, m = i.$attr.when && h.attr(i.$attr.when), n = i.offset || 0, o = g.$eval(m) || {}, q = {}, r = b.startSymbol(), s = b.endSymbol(), u = r + l + "-" + n + s, v = Nd.noop;
        f(i, function (a, b) {
          var c = e.exec(b);
          if (c) {
            var d = (c[1] ? "-" : "") + yd(c[2]);
            o[d] = h.attr(i.$attr[b])
          }
        }), f(o, function (a, c) {
          q[c] = b(a.replace(d, u))
        }), g.$watch(l, function (b) {
          var d = parseFloat(b), e = isNaN(d);
          if (e || d in o || (d = a.pluralCat(d - n)), d !== k && !(e && y(k) && isNaN(k))) {
            v();
            var f = q[d];
            t(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = p, j()) : v = g.$watch(f, j), k = d
          }
        })
      }
    }
  }], wg = ["$parse", "$animate", function (a, g) {
    var h = "$$NG_REMOVED", i = d("ngRepeat"), j = function (a, b, c, d, e, f, g) {
      a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
    }, k = function (a) {
      return a.clone[0]
    }, l = function (a) {
      return a.clone[a.clone.length - 1]
    };
    return {
      restrict: "A",
      multiElement: !0,
      transclude: "element",
      priority: 1e3,
      terminal: !0,
      $$tlb: !0,
      compile: function (d, m) {
        var n = m.ngRepeat, o = b.createComment(" end ngRepeat: " + n + " "), p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
        if (!p)throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
        var q = p[1], r = p[2], s = p[3], t = p[4];
        if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p)throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
        var u = p[3] || p[1], v = p[2];
        if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
        var w, x, y, z, A = {$id: Ya};
        return t ? w = a(t) : (y = function (a, b) {
          return Ya(b)
        }, z = function (a) {
          return a
        }), function (a, b, d, m, p) {
          w && (x = function (b, c, d) {
            return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
          });
          var q = qa();
          a.$watchCollection(r, function (d) {
            var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0], J = qa();
            if (s && (a[s] = d), e(d))E = d, D = x || y; else {
              D = x || z, E = [];
              for (var K in d)zd.call(d, K) && "$" !== K.charAt(0) && E.push(K)
            }
            for (w = E.length, G = new Array(w), m = 0; w > m; m++)if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C])F = q[C], delete q[C], J[C] = F, G[m] = F; else {
              if (J[C])throw f(G, function (a) {
                a && a.scope && (q[a.id] = a)
              }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
              G[m] = {id: C, scope: c, clone: c}, J[C] = !0
            }
            for (var L in q) {
              if (F = q[L], H = pa(F.clone), g.leave(H), H[0].parentNode)for (m = 0, r = H.length; r > m; m++)H[m][h] = !0;
              F.scope.$destroy()
            }
            for (m = 0; w > m; m++)if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
              t = I;
              do t = t.nextSibling; while (t && t[h]);
              k(F) != t && g.move(pa(F.clone), null, Ed(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
            } else p(function (a, b) {
              F.scope = b;
              var c = o.cloneNode(!1);
              a[a.length++] = c, g.enter(a, null, Ed(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
            });
            q = J
          })
        }
      }
    }
  }], xg = "ng-hide", yg = "ng-hide-animate", zg = ["$animate", function (a) {
    return {
      restrict: "A", multiElement: !0, link: function (b, c, d) {
        b.$watch(d.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](c, xg, {tempClasses: yg})
        })
      }
    }
  }], Ag = ["$animate", function (a) {
    return {
      restrict: "A", multiElement: !0, link: function (b, c, d) {
        b.$watch(d.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](c, xg, {tempClasses: yg})
        })
      }
    }
  }], Bg = cd(function (a, b, c) {
    a.$watch(c.ngStyle, function (a, c) {
      c && a !== c && f(c, function (a, c) {
        b.css(c, "")
      }), a && b.css(a)
    }, !0)
  }), Cg = ["$animate", function (a) {
    return {
      require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {}
      }], link: function (c, d, e, g) {
        var h = e.ngSwitch || e.on, i = [], j = [], k = [], l = [], m = function (a, b) {
          return function () {
            a.splice(b, 1)
          }
        };
        c.$watch(h, function (c) {
          var d, e;
          for (d = 0, e = k.length; e > d; ++d)a.cancel(k[d]);
          for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
            var h = pa(j[d].clone);
            l[d].$destroy();
            var n = k[d] = a.leave(h);
            n.then(m(k, d))
          }
          j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function (c) {
            c.transclude(function (d, e) {
              l.push(e);
              var f = c.element;
              d[d.length++] = b.createComment(" end ngSwitchWhen: ");
              var g = {clone: d};
              j.push(g), a.enter(d, f.parent(), f)
            })
          })
        })
      }
    }
  }], Dg = cd({
    transclude: "element",
    priority: 1200,
    require: "^ngSwitch",
    multiElement: !0,
    link: function (a, b, c, d, e) {
      d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
        transclude: e,
        element: b
      })
    }
  }), Eg = cd({
    transclude: "element",
    priority: 1200,
    require: "^ngSwitch",
    multiElement: !0,
    link: function (a, b, c, d, e) {
      d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({transclude: e, element: b})
    }
  }), Fg = cd({
    restrict: "EAC", link: function (a, b, c, e, f) {
      if (!f)throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", $(b));
      f(function (a) {
        b.empty(), b.append(a)
      })
    }
  }), Gg = ["$templateCache", function (a) {
    return {
      restrict: "E", terminal: !0, compile: function (b, c) {
        if ("text/ng-template" == c.type) {
          var d = c.id, e = b[0].text;
          a.put(d, e)
        }
      }
    }
  }], Hg = {$setViewValue: p, $render: p}, Ig = ["$element", "$scope", "$attrs", function (a, d, e) {
    var f = this, g = new Za;
    f.ngModelCtrl = Hg, f.unknownOption = Ed(b.createElement("option")), f.renderUnknownOption = function (b) {
      var c = "? " + Ya(b) + " ?";
      f.unknownOption.val(c), a.prepend(f.unknownOption), a.val(c)
    }, d.$on("$destroy", function () {
      f.renderUnknownOption = p
    }), f.removeUnknownOption = function () {
      f.unknownOption.parent() && f.unknownOption.remove()
    }, f.readValue = function () {
      return f.removeUnknownOption(), a.val()
    }, f.writeValue = function (b) {
      f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), "" === b && f.emptyOption.prop("selected", !0)) : null == b && f.emptyOption ? (f.removeUnknownOption(), a.val("")) : f.renderUnknownOption(b)
    }, f.addOption = function (a, b) {
      na(a, '"option value"'), "" === a && (f.emptyOption = b);
      var c = g.get(a) || 0;
      g.put(a, c + 1), f.ngModelCtrl.$render(), vd(b)
    }, f.removeOption = function (a) {
      var b = g.get(a);
      b && (1 === b ? (g.remove(a), "" === a && (f.emptyOption = c)) : g.put(a, b - 1))
    }, f.hasOption = function (a) {
      return !!g.get(a)
    }, f.registerOption = function (a, b, c, d, e) {
      if (d) {
        var g;
        c.$observe("value", function (a) {
          u(g) && f.removeOption(g), g = a, f.addOption(a, b)
        })
      } else e ? a.$watch(e, function (a, d) {
        c.$set("value", a), d !== a && f.removeOption(d), f.addOption(a, b)
      }) : f.addOption(c.value, b);
      b.on("$destroy", function () {
        f.removeOption(c.value), f.ngModelCtrl.$render()
      })
    }
  }], Jg = function () {
    function a(a, b, c, d) {
      var e = d[1];
      if (e) {
        var g = d[0];
        if (g.ngModelCtrl = e, b.on("change", function () {
            a.$apply(function () {
              e.$setViewValue(g.readValue())
            })
          }), c.multiple) {
          g.readValue = function () {
            var a = [];
            return f(b.find("option"), function (b) {
              b.selected && a.push(b.value)
            }), a
          }, g.writeValue = function (a) {
            var c = new Za(a);
            f(b.find("option"), function (a) {
              a.selected = u(c.get(a.value))
            })
          };
          var h, i = NaN;
          a.$watch(function () {
            i !== e.$viewValue || Q(h, e.$viewValue) || (h = P(e.$viewValue), e.$render()), i = e.$viewValue
          }), e.$isEmpty = function (a) {
            return !a || 0 === a.length
          }
        }
      }
    }

    function b(a, b, c, d) {
      var e = d[1];
      if (e) {
        var f = d[0];
        e.$render = function () {
          f.writeValue(e.$viewValue)
        }
      }
    }

    return {restrict: "E", require: ["select", "?ngModel"], controller: Ig, priority: 1, link: {pre: a, post: b}}
  }, Kg = ["$interpolate", function (a) {
    return {
      restrict: "E", priority: 100, compile: function (b, c) {
        if (u(c.value))var d = a(c.value, !0); else {
          var e = a(b.text(), !0);
          e || c.$set("value", b.text())
        }
        return function (a, b, c) {
          var f = "$selectController", g = b.parent(), h = g.data(f) || g.parent().data(f);
          h && h.registerOption(a, b, c, d, e)
        }
      }
    }
  }], Lg = r({restrict: "E", terminal: !1}), Mg = function () {
    return {
      restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
        d && (c.required = !0, d.$validators.required = function (a, b) {
          return !c.required || !d.$isEmpty(b)
        }, c.$observe("required", function () {
          d.$validate()
        }))
      }
    }
  }, Ng = function () {
    return {
      restrict: "A", require: "?ngModel", link: function (a, b, e, f) {
        if (f) {
          var g, h = e.ngPattern || e.pattern;
          e.$observe("pattern", function (a) {
            if (x(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test)throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, $(b));
            g = a || c, f.$validate()
          }), f.$validators.pattern = function (a, b) {
            return f.$isEmpty(b) || t(g) || g.test(b)
          }
        }
      }
    }
  }, Og = function () {
    return {
      restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
        if (d) {
          var e = -1;
          c.$observe("maxlength", function (a) {
            var b = n(a);
            e = isNaN(b) ? -1 : b, d.$validate()
          }), d.$validators.maxlength = function (a, b) {
            return 0 > e || d.$isEmpty(b) || b.length <= e
          }
        }
      }
    }
  }, Pg = function () {
    return {
      restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
        if (d) {
          var e = 0;
          c.$observe("minlength", function (a) {
            e = n(a) || 0, d.$validate()
          }), d.$validators.minlength = function (a, b) {
            return d.$isEmpty(b) || b.length >= e
          }
        }
      }
    }
  };
  return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ka(), ua(Nd), Nd.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";
      var b = a.indexOf(".");
      return -1 == b ? 0 : a.length - b - 1
    }

    function d(a, d) {
      var e = d;
      c === e && (e = Math.min(b(a), 3));
      var f = Math.pow(10, e), g = (a * f | 0) % f;
      return {v: e, f: g}
    }

    var e = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    a.value("$locale", {
      DATETIME_FORMATS: {
        AMPMS: ["AM", "PM"],
        DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        ERANAMES: ["Before Christ", "Anno Domini"],
        ERAS: ["BC", "AD"],
        FIRSTDAYOFWEEK: 6,
        MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        WEEKENDRANGE: [5, 6],
        fullDate: "EEEE, MMMM d, y",
        longDate: "MMMM d, y",
        medium: "MMM d, y h:mm:ss a",
        mediumDate: "MMM d, y",
        mediumTime: "h:mm:ss a",
        "short": "M/d/yy h:mm a",
        shortDate: "M/d/yy",
        shortTime: "h:mm a"
      },
      NUMBER_FORMATS: {
        CURRENCY_SYM: "$",
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        PATTERNS: [{
          gSize: 3,
          lgSize: 3,
          maxFrac: 3,
          minFrac: 0,
          minInt: 1,
          negPre: "-",
          negSuf: "",
          posPre: "",
          posSuf: ""
        }, {gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-¤", negSuf: "", posPre: "¤", posSuf: ""}]
      },
      id: "en-us",
      pluralCat: function (a, b) {
        var c = 0 | a, f = d(a, b);
        return 1 == c && 0 == f.v ? e.ONE : e.OTHER
      }
    })
  }]), void Ed(b).ready(function () {
    fa(b, ga)
  }))
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), function (a, b, c) {
  "use strict";
  function d(a) {
    return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
  }

  function e(a, e) {
    if (!d(e))throw g("badmember", 'Dotted member path "@{0}" is invalid.', e);
    for (var f = e.split("."), h = 0, i = f.length; i > h && b.isDefined(a); h++) {
      var j = f[h];
      a = null !== a ? a[j] : c
    }
    return a
  }

  function f(a, c) {
    c = c || {}, b.forEach(c, function (a, b) {
      delete c[b]
    });
    for (var d in a)!a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
    return c
  }

  var g = b.$$minErr("$resource"), h = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
  b.module("ngResource", ["ng"]).provider("$resource", function () {
    var a = /^https?:\/\/[^\/]*/, d = this;
    this.defaults = {
      stripTrailingSlashes: !0,
      actions: {
        get: {method: "GET"},
        save: {method: "POST"},
        query: {method: "GET", isArray: !0},
        remove: {method: "DELETE"},
        "delete": {method: "DELETE"}
      }
    }, this.$get = ["$http", "$log", "$q", function (h, i, j) {
      function k(a) {
        return l(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
      }

      function l(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
      }

      function m(a, b) {
        this.template = a, this.defaults = q({}, d.defaults, b), this.urlParams = {}
      }

      function n(a, k, l, t) {
        function u(a, b) {
          var c = {};
          return b = q({}, k, b), p(b, function (b, d) {
            s(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
          }), c
        }

        function v(a) {
          return a.resource
        }

        function w(a) {
          f(a || {}, this)
        }

        var x = new m(a, t);
        return l = q({}, d.defaults.actions, l), w.prototype.toJSON = function () {
          var a = q({}, this);
          return delete a.$promise, delete a.$resolved, a
        }, p(l, function (a, d) {
          var e = /^(POST|PUT|PATCH)$/i.test(a.method);
          w[d] = function (k, l, m, n) {
            var t, y, z, A = {};
            switch (arguments.length) {
              case 4:
                z = n, y = m;
              case 3:
              case 2:
                if (!s(l)) {
                  A = k, t = l, y = m;
                  break
                }
                if (s(k)) {
                  y = k, z = l;
                  break
                }
                y = l, z = m;
              case 1:
                s(k) ? y = k : e ? t = k : A = k;
                break;
              case 0:
                break;
              default:
                throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
            }
            var B = this instanceof w, C = B ? t : a.isArray ? [] : new w(t), D = {}, E = a.interceptor && a.interceptor.response || v, F = a.interceptor && a.interceptor.responseError || c;
            p(a, function (a, c) {
              switch (c) {
                default:
                  D[c] = r(a);
                  break;
                case"params":
                case"isArray":
                case"interceptor":
                  break;
                case"timeout":
                  a && !b.isNumber(a) && i.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests.\n  If you need support for cancellable $resource actions, you should upgrade to version 1.5 or higher.")
              }
            }), e && (D.data = t), x.setUrlParams(D, q({}, u(t, a.params || {}), A), a.url);
            var G = h(D).then(function (c) {
              var e = c.data, h = C.$promise;
              if (e) {
                if (b.isArray(e) !== !!a.isArray)throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", d, a.isArray ? "array" : "object", b.isArray(e) ? "array" : "object", D.method, D.url);
                a.isArray ? (C.length = 0, p(e, function (a) {
                  "object" == typeof a ? C.push(new w(a)) : C.push(a)
                })) : (f(e, C), C.$promise = h)
              }
              return C.$resolved = !0, c.resource = C, c
            }, function (a) {
              return C.$resolved = !0, (z || o)(a), j.reject(a)
            });
            return G = G.then(function (a) {
              var b = E(a);
              return (y || o)(b, a.headers), b
            }, F), B ? G : (C.$promise = G, C.$resolved = !1, C)
          }, w.prototype["$" + d] = function (a, b, c) {
            s(a) && (c = b, b = a, a = {});
            var e = w[d].call(this, a, this, b, c);
            return e.$promise || e
          }
        }), w.bind = function (b) {
          return n(a, q({}, k, b), l)
        }, w
      }

      var o = b.noop, p = b.forEach, q = b.extend, r = b.copy, s = b.isFunction;
      return m.prototype = {
        setUrlParams: function (c, d, e) {
          var f, h, i = this, j = e || i.template, l = "", m = i.urlParams = {};
          p(j.split(/\W/), function (a) {
            if ("hasOwnProperty" === a)throw g("badname", "hasOwnProperty is not a valid parameter name.");
            !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (m[a] = !0)
          }), j = j.replace(/\\:/g, ":"), j = j.replace(a, function (a) {
            return l = a, ""
          }), d = d || {}, p(i.urlParams, function (a, c) {
            f = d.hasOwnProperty(c) ? d[c] : i.defaults[c], b.isDefined(f) && null !== f ? (h = k(f), j = j.replace(new RegExp(":" + c + "(\\W|$)", "g"), function (a, b) {
              return h + b
            })) : j = j.replace(new RegExp("(/?):" + c + "(\\W|$)", "g"), function (a, b, c) {
              return "/" == c.charAt(0) ? c : b + c
            })
          }), i.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), c.url = l + j.replace(/\/\\\./, "/."), p(d, function (a, b) {
            i.urlParams[b] || (c.params = c.params || {}, c.params[b] = a)
          })
        }
      }, n
    }]
  })
}(window, window.angular), function (a, b, c) {
  "use strict";
  function d(a, c, d) {
    function e(a, d, e) {
      var g, h;
      e = e || {}, h = e.expires, g = b.isDefined(e.path) ? e.path : f, b.isUndefined(d) && (h = "Thu, 01 Jan 1970 00:00:00 GMT", d = ""), b.isString(h) && (h = new Date(h));
      var i = encodeURIComponent(a) + "=" + encodeURIComponent(d);
      i += g ? ";path=" + g : "", i += e.domain ? ";domain=" + e.domain : "", i += h ? ";expires=" + h.toUTCString() : "", i += e.secure ? ";secure" : "";
      var j = i.length + 1;
      return j > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + j + " > 4096 bytes)!"), i
    }

    var f = d.baseHref(), g = a[0];
    return function (a, b, c) {
      g.cookie = e(a, b, c)
    }
  }

  b.module("ngCookies", ["ng"]).provider("$cookies", [function () {
    function a(a) {
      return a ? b.extend({}, d, a) : d
    }

    var d = this.defaults = {};
    this.$get = ["$$cookieReader", "$$cookieWriter", function (d, e) {
      return {
        get: function (a) {
          return d()[a]
        }, getObject: function (a) {
          var c = this.get(a);
          return c ? b.fromJson(c) : c
        }, getAll: function () {
          return d()
        }, put: function (b, c, d) {
          e(b, c, a(d))
        }, putObject: function (a, c, d) {
          this.put(a, b.toJson(c), d)
        }, remove: function (b, d) {
          e(b, c, a(d))
        }
      }
    }]
  }]), b.module("ngCookies").factory("$cookieStore", ["$cookies", function (a) {
    return {
      get: function (b) {
        return a.getObject(b)
      }, put: function (b, c) {
        a.putObject(b, c)
      }, remove: function (b) {
        a.remove(b)
      }
    }
  }]), d.$inject = ["$document", "$log", "$browser"], b.module("ngCookies").provider("$$cookieWriter", function () {
    this.$get = d
  })
}(window, window.angular), function (a, b, c) {
  "use strict";
  function d() {
    this.$get = ["$$sanitizeUri", function (a) {
      return function (b) {
        var c = [];
        return g(b, j(c, function (b, c) {
          return !/^unsafe/.test(a(b, c))
        })), c.join("")
      }
    }]
  }

  function e(a) {
    var c = [], d = j(c, b.noop);
    return d.chars(a), c.join("")
  }

  function f(a, c) {
    var d, e = {}, f = a.split(",");
    for (d = 0; d < f.length; d++)e[c ? b.lowercase(f[d]) : f[d]] = !0;
    return e
  }

  function g(a, c) {
    function d(a, d, f, g) {
      if (d = b.lowercase(d), z[d])for (; t.last() && A[t.last()];)e("", t.last());
      y[d] && t.last() == d && e("", d), g = v[d] || !!g, g || t.push(d);
      var i = {};
      f.replace(n, function (a, b, c, d, e) {
        var f = c || d || e || "";
        i[b] = h(f)
      }), c.start && c.start(d, i, g)
    }

    function e(a, d) {
      var e, f = 0;
      if (d = b.lowercase(d))for (f = t.length - 1; f >= 0 && t[f] != d; f--);
      if (f >= 0) {
        for (e = t.length - 1; e >= f; e--)c.end && c.end(t[e]);
        t.length = f
      }
    }

    "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
    var f, g, i, j, t = [], u = a;
    for (t.last = function () {
      return t[t.length - 1]
    }; a;) {
      if (j = "", g = !0, t.last() && C[t.last()] ? (a = a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function (a, b) {
          return b = b.replace(q, "$1").replace(s, "$1"), c.chars && c.chars(h(b)), ""
        }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1)) : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ""), g = !1)) : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1)) : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1) : (j += "<", a = a.substring(1))), g && (f = a.indexOf("<"), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(h(j)))), a == u)throw k("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
      u = a
    }
    e()
  }

  function h(a) {
    return a ? (I.innerHTML = a.replace(/</g, "&lt;"), I.textContent) : ""
  }

  function i(a) {
    return a.replace(/&/g, "&amp;").replace(t, function (a) {
      var b = a.charCodeAt(0), c = a.charCodeAt(1);
      return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
    }).replace(u, function (a) {
      return "&#" + a.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function j(a, c) {
    var d = !1, e = b.bind(a, a.push);
    return {
      start: function (a, f, g) {
        a = b.lowercase(a), !d && C[a] && (d = a), d || D[a] !== !0 || (e("<"), e(a), b.forEach(f, function (d, f) {
          var g = b.lowercase(f), h = "img" === a && "src" === g || "background" === g;
          H[g] !== !0 || E[g] === !0 && !c(d, h) || (e(" "), e(f), e('="'), e(i(d)), e('"'))
        }), e(g ? "/>" : ">"))
      }, end: function (a) {
        a = b.lowercase(a), d || D[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
      }, chars: function (a) {
        d || e(i(a))
      }
    }
  }

  var k = b.$$minErr("$sanitize"), l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, m = /^<\/\s*([\w:-]+)[^>]*>/, n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, o = /^</, p = /^<\//, q = /<!--(.*?)-->/g, r = /<!DOCTYPE([^>]*?)>/i, s = /<!\[CDATA\[(.*?)]]>/g, t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = /([^\#-~| |!])/g, v = f("area,br,col,hr,img,wbr"), w = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), x = f("rp,rt"), y = b.extend({}, x, w), z = b.extend({}, w, f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), A = b.extend({}, x, f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), B = f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"), C = f("script,style"), D = b.extend({}, v, z, A, y, B), E = f("background,cite,href,longdesc,src,usemap,xlink:href"), F = f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"), G = f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0), H = b.extend({}, E, G, F), I = document.createElement("pre");
  b.module("ngSanitize", []).provider("$sanitize", d), b.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
    var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i, d = /^mailto:/i;
    return function (f, g) {
      function h(a) {
        a && n.push(e(a))
      }

      function i(a, c) {
        n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
      }

      if (!f)return f;
      for (var j, k, l, m = f, n = []; j = m.match(c);)k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(d, "")), m = m.substring(l + j[0].length);
      return h(m), a(n.join(""))
    }
  }])
}(window, window.angular), function (a, b, c) {
  "use strict";
  function d() {
    function a(a, c) {
      return b.extend(Object.create(a), c)
    }

    function c(a, b) {
      var c = b.caseInsensitiveMatch, d = {originalPath: a, regexp: a}, e = d.keys = [];
      return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, b, c, d) {
        var f = "?" === d ? d : null, g = "*" === d ? d : null;
        return e.push({
          name: c,
          optional: !!f
        }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "");
      }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
    }

    var d = {};
    this.when = function (a, e) {
      var f = b.copy(e);
      if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
        var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
        d[g] = b.extend({redirectTo: a}, c(g, f))
      }
      return this
    }, this.caseInsensitiveMatch = !1, this.otherwise = function (a) {
      return "string" == typeof a && (a = {redirectTo: a}), this.when(null, a), this
    }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (c, e, f, g, h, j, k) {
      function l(a, b) {
        var c = b.keys, d = {};
        if (!b.regexp)return null;
        var e = b.regexp.exec(a);
        if (!e)return null;
        for (var f = 1, g = e.length; g > f; ++f) {
          var h = c[f - 1], i = e[f];
          h && i && (d[h.name] = i)
        }
        return d
      }

      function m(a) {
        var d = t.current;
        q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault()
      }

      function n() {
        var a = t.current, d = q;
        r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), g.when(d).then(function () {
          if (d) {
            var a, c, e = b.extend({}, d.resolve);
            return b.forEach(e, function (a, c) {
              e[c] = b.isString(a) ? h.get(a) : h.invoke(a, null, null, c)
            }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), b.isDefined(c) && (d.loadedTemplateUrl = k.valueOf(c), a = j(c))), b.isDefined(a) && (e.$template = a), g.all(e)
          }
        }).then(function (e) {
          d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a))
        }, function (b) {
          d == t.current && c.$broadcast("$routeChangeError", d, a, b)
        }))
      }

      function o() {
        var c, f;
        return b.forEach(d, function (d, g) {
          !f && (c = l(e.path(), d)) && (f = a(d, {params: b.extend({}, e.search(), c), pathParams: c}), f.$$route = d)
        }), f || d[null] && a(d[null], {params: {}, pathParams: {}})
      }

      function p(a, c) {
        var d = [];
        return b.forEach((a || "").split(":"), function (a, b) {
          if (0 === b)d.push(a); else {
            var e = a.match(/(\w+)(?:[?*])?(.*)/), f = e[1];
            d.push(c[f]), d.push(e[2] || ""), delete c[f]
          }
        }), d.join("")
      }

      var q, r, s = !1, t = {
        routes: d, reload: function () {
          s = !0, c.$evalAsync(function () {
            m(), n()
          })
        }, updateParams: function (a) {
          if (!this.current || !this.current.$$route)throw i("norout", "Tried updating route when with no current route");
          a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), e.search(a)
        }
      };
      return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t
    }]
  }

  function e() {
    this.$get = function () {
      return {}
    }
  }

  function f(a, c, d) {
    return {
      restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (e, f, g, h, i) {
        function j() {
          n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function () {
            n = null
          }), m = null)
        }

        function k() {
          var g = a.current && a.current.locals, h = g && g.$template;
          if (b.isDefined(h)) {
            var k = e.$new(), n = a.current, q = i(k, function (a) {
              d.enter(a, null, m || f).then(function () {
                !b.isDefined(o) || o && !e.$eval(o) || c()
              }), j()
            });
            m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
          } else j()
        }

        var l, m, n, o = g.autoscroll, p = g.onload || "";
        e.$on("$routeChangeSuccess", k), k()
      }
    }
  }

  function g(a, b, c) {
    return {
      restrict: "ECA", priority: -400, link: function (d, e) {
        var f = c.current, g = f.locals;
        e.html(g.$template);
        var h = a(e.contents());
        if (f.controller) {
          g.$scope = d;
          var i = b(f.controller, g);
          f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
        }
        h(d)
      }
    }
  }

  var h = b.module("ngRoute", ["ng"]).provider("$route", d), i = b.$$minErr("ngRoute");
  h.provider("$routeParams", e), h.directive("ngView", f), h.directive("ngView", g), f.$inject = ["$route", "$anchorScroll", "$animate"], g.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.transition", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-popup.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/tooltip/tooltip-template-popup.html", "template/popover/popover-html.html", "template/popover/popover-template.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("collapse", ["$animate", function (a) {
  return {
    link: function (b, c, d) {
      function e() {
        c.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), a.addClass(c, "in", {to: {height: c[0].scrollHeight + "px"}}).then(f)
      }

      function f() {
        c.removeClass("collapsing"), c.css({height: "auto"})
      }

      function g() {
        return c.hasClass("collapse") || c.hasClass("in") ? (c.css({height: c[0].scrollHeight + "px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), void a.removeClass(c, "in", {to: {height: "0"}}).then(h)) : h()
      }

      function h() {
        c.css({height: "0"}), c.removeClass("collapsing"), c.addClass("collapse")
      }

      b.$watch(d.collapse, function (a) {
        a ? g() : e()
      })
    }
  }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function (a, b, c) {
  this.groups = [], this.closeOthers = function (d) {
    var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
    e && angular.forEach(this.groups, function (a) {
      a !== d && (a.isOpen = !1)
    })
  }, this.addGroup = function (a) {
    var b = this;
    this.groups.push(a), a.$on("$destroy", function (c) {
      b.removeGroup(a)
    })
  }, this.removeGroup = function (a) {
    var b = this.groups.indexOf(a);
    -1 !== b && this.groups.splice(b, 1)
  }
}]).directive("accordion", function () {
  return {
    restrict: "EA",
    controller: "AccordionController",
    controllerAs: "accordion",
    transclude: !0,
    replace: !1,
    templateUrl: function (a, b) {
      return b.templateUrl || "template/accordion/accordion.html"
    }
  }
}).directive("accordionGroup", function () {
  return {
    require: "^accordion", restrict: "EA", transclude: !0, replace: !0, templateUrl: function (a, b) {
      return b.templateUrl || "template/accordion/accordion-group.html"
    }, scope: {heading: "@", isOpen: "=?", isDisabled: "=?"}, controller: function () {
      this.setHeading = function (a) {
        this.heading = a
      }
    }, link: function (a, b, c, d) {
      d.addGroup(a), a.openClass = c.openClass || "panel-open", a.panelClass = c.panelClass, a.$watch("isOpen", function (c) {
        b.toggleClass(a.openClass, c), c && d.closeOthers(a)
      }), a.toggleOpen = function (b) {
        a.isDisabled || b && 32 !== b.which || (a.isOpen = !a.isOpen)
      }
    }
  }
}).directive("accordionHeading", function () {
  return {
    restrict: "EA",
    transclude: !0,
    template: "",
    replace: !0,
    require: "^accordionGroup",
    link: function (a, b, c, d, e) {
      d.setHeading(e(a, angular.noop))
    }
  }
}).directive("accordionTransclude", function () {
  return {
    require: "^accordionGroup", link: function (a, b, c, d) {
      a.$watch(function () {
        return d[c.accordionTransclude]
      }, function (a) {
        a && (b.find("span").html(""), b.find("span").append(a))
      })
    }
  }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function (a, b) {
  a.closeable = !!b.close, this.close = a.close
}]).directive("alert", function () {
  return {
    controller: "AlertController", controllerAs: "alert", templateUrl: function (a, b) {
      return b.templateUrl || "template/alert/alert.html"
    }, transclude: !0, replace: !0, scope: {type: "@", close: "&"}
  }
}).directive("dismissOnTimeout", ["$timeout", function (a) {
  return {
    require: "alert", link: function (b, c, d, e) {
      a(function () {
        e.close()
      }, parseInt(d.dismissOnTimeout, 10))
    }
  }
}]), angular.module("ui.bootstrap.bindHtml", []).value("$bindHtmlUnsafeSuppressDeprecated", !1).directive("bindHtmlUnsafe", ["$log", "$bindHtmlUnsafeSuppressDeprecated", function (a, b) {
  return function (c, d, e) {
    b || a.warn("bindHtmlUnsafe is now deprecated. Use ngBindHtml instead"), d.addClass("ng-binding").data("$binding", e.bindHtmlUnsafe), c.$watch(e.bindHtmlUnsafe, function (a) {
      d.html(a || "")
    })
  }
}]), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
  activeClass: "active",
  toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig", function (a) {
  this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function () {
  return {
    require: ["btnRadio", "ngModel"],
    controller: "ButtonsController",
    controllerAs: "buttons",
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      b.find("input").css({display: "none"}), f.$render = function () {
        b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
      }, b.bind(e.toggleEvent, function () {
        if (!c.disabled) {
          var d = b.hasClass(e.activeClass);
          (!d || angular.isDefined(c.uncheckable)) && a.$apply(function () {
            f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
          })
        }
      })
    }
  }
}).directive("btnCheckbox", ["$document", function (a) {
  return {
    require: ["btnCheckbox", "ngModel"],
    controller: "ButtonsController",
    controllerAs: "button",
    link: function (b, c, d, e) {
      function f() {
        return h(d.btnCheckboxTrue, !0)
      }

      function g() {
        return h(d.btnCheckboxFalse, !1)
      }

      function h(a, c) {
        var d = b.$eval(a);
        return angular.isDefined(d) ? d : c
      }

      var i = e[0], j = e[1];
      c.find("input").css({display: "none"}), j.$render = function () {
        c.toggleClass(i.activeClass, angular.equals(j.$modelValue, f()))
      }, c.bind(i.toggleEvent, function () {
        d.disabled || b.$apply(function () {
          j.$setViewValue(c.hasClass(i.activeClass) ? g() : f()), j.$render()
        })
      }), c.on("keypress", function (e) {
        d.disabled || 32 !== e.which || a[0].activeElement !== c[0] || b.$apply(function () {
          j.$setViewValue(c.hasClass(i.activeClass) ? g() : f()), j.$render()
        })
      })
    }
  }
}]), angular.module("ui.bootstrap.carousel", []).controller("CarouselController", ["$scope", "$element", "$interval", "$animate", function (a, b, c, d) {
  function e(b, c, e) {
    r || (angular.extend(b, {direction: e, active: !0}), angular.extend(l.currentSlide || {}, {
      direction: e,
      active: !1
    }), d.enabled() && !a.noTransition && !a.$currentTransition && b.$element && l.slides.length > 1 && (b.$element.data(p, b.direction), l.currentSlide && l.currentSlide.$element && l.currentSlide.$element.data(p, b.direction), a.$currentTransition = !0, n ? d.on("addClass", b.$element, function (b, c) {
      "close" === c && (a.$currentTransition = null, d.off("addClass", b))
    }) : b.$element.one("$animate:close", function () {
      a.$currentTransition = null
    })), l.currentSlide = b, q = c, g())
  }

  function f(a) {
    if (angular.isUndefined(m[a].index))return m[a];
    var b;
    m.length;
    for (b = 0; b < m.length; ++b)if (m[b].index == a)return m[b]
  }

  function g() {
    h();
    var b = +a.interval;
    !isNaN(b) && b > 0 && (j = c(i, b))
  }

  function h() {
    j && (c.cancel(j), j = null)
  }

  function i() {
    var b = +a.interval;
    k && !isNaN(b) && b > 0 && m.length ? a.next() : a.pause()
  }

  var j, k, l = this, m = l.slides = a.slides = [], n = angular.version.minor >= 4, o = "uib-noTransition", p = "uib-slideDirection", q = -1;
  l.currentSlide = null;
  var r = !1;
  l.select = a.select = function (b, c) {
    var d = a.indexOfSlide(b);
    void 0 === c && (c = d > l.getCurrentIndex() ? "next" : "prev"), b && b !== l.currentSlide && !a.$currentTransition && e(b, d, c)
  }, a.$on("$destroy", function () {
    r = !0
  }), l.getCurrentIndex = function () {
    return l.currentSlide && angular.isDefined(l.currentSlide.index) ? +l.currentSlide.index : q
  }, a.indexOfSlide = function (a) {
    return angular.isDefined(a.index) ? +a.index : m.indexOf(a)
  }, a.next = function () {
    var b = (l.getCurrentIndex() + 1) % m.length;
    return 0 === b && a.noWrap() ? void a.pause() : l.select(f(b), "next")
  }, a.prev = function () {
    var b = l.getCurrentIndex() - 1 < 0 ? m.length - 1 : l.getCurrentIndex() - 1;
    return a.noWrap() && b === m.length - 1 ? void a.pause() : l.select(f(b), "prev")
  }, a.isActive = function (a) {
    return l.currentSlide === a
  }, a.$watch("interval", g), a.$on("$destroy", h), a.play = function () {
    k || (k = !0, g())
  }, a.pause = function () {
    a.noPause || (k = !1, h())
  }, l.addSlide = function (b, c) {
    b.$element = c, m.push(b), 1 === m.length || b.active ? (l.select(m[m.length - 1]), 1 == m.length && a.play()) : b.active = !1
  }, l.removeSlide = function (a) {
    angular.isDefined(a.index) && m.sort(function (a, b) {
      return +a.index > +b.index
    });
    var b = m.indexOf(a);
    m.splice(b, 1), m.length > 0 && a.active ? b >= m.length ? l.select(m[b - 1]) : l.select(m[b]) : q > b && q--, 0 === m.length && (l.currentSlide = null)
  }, a.$watch("noTransition", function (a) {
    b.data(o, a)
  })
}]).directive("carousel", [function () {
  return {
    restrict: "EA",
    transclude: !0,
    replace: !0,
    controller: "CarouselController",
    controllerAs: "carousel",
    require: "carousel",
    templateUrl: function (a, b) {
      return b.templateUrl || "template/carousel/carousel.html"
    },
    scope: {interval: "=", noTransition: "=", noPause: "=", noWrap: "&"}
  }
}]).directive("slide", function () {
  return {
    require: "^carousel", restrict: "EA", transclude: !0, replace: !0, templateUrl: function (a, b) {
      return b.templateUrl || "template/carousel/slide.html"
    }, scope: {active: "=?", actual: "=?", index: "=?"}, link: function (a, b, c, d) {
      d.addSlide(a, b), a.$on("$destroy", function () {
        d.removeSlide(a)
      }), a.$watch("active", function (b) {
        b && d.select(a)
      })
    }
  }
}).animation(".item", ["$injector", "$animate", function (a, b) {
  function c(a, b, c) {
    a.removeClass(b), c && c()
  }

  var d = "uib-noTransition", e = "uib-slideDirection", f = null;
  return a.has("$animateCss") && (f = a.get("$animateCss")), {
    beforeAddClass: function (a, g, h) {
      if ("active" == g && a.parent() && !a.parent().data(d)) {
        var i = !1, j = a.data(e), k = "next" == j ? "left" : "right", l = c.bind(this, a, k + " " + j, h);
        return a.addClass(j), f ? f(a, {addClass: k}).start().done(l) : b.addClass(a, k).then(function () {
          i || l(), h()
        }), function () {
          i = !0
        }
      }
      h()
    }, beforeRemoveClass: function (a, g, h) {
      if ("active" === g && a.parent() && !a.parent().data(d)) {
        var i = !1, j = a.data(e), k = "next" == j ? "left" : "right", l = c.bind(this, a, k, h);
        return f ? f(a, {addClass: k}).start().done(l) : b.addClass(a, k).then(function () {
          i || l(), h()
        }), function () {
          i = !0
        }
      }
      h()
    }
  }
}]), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$log", "$locale", "orderByFilter", function (a, b, c) {
  function d(a) {
    var b = [], d = a.split("");
    return angular.forEach(g, function (c, e) {
      var f = a.indexOf(e);
      if (f > -1) {
        a = a.split(""), d[f] = "(" + c.regex + ")", a[f] = "$";
        for (var g = f + 1, h = f + e.length; h > g; g++)d[g] = "", a[g] = "$";
        a = a.join(""), b.push({index: f, apply: c.apply})
      }
    }), {regex: new RegExp("^" + d.join("") + "$"), map: c(b, "index")}
  }

  function e(a, b, c) {
    return 1 > c ? !1 : 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
  }

  var f = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  this.parsers = {};
  var g = {
    yyyy: {
      regex: "\\d{4}", apply: function (a) {
        this.year = +a
      }
    },
    yy: {
      regex: "\\d{2}", apply: function (a) {
        this.year = +a + 2e3
      }
    },
    y: {
      regex: "\\d{1,4}", apply: function (a) {
        this.year = +a
      }
    },
    MMMM: {
      regex: b.DATETIME_FORMATS.MONTH.join("|"), apply: function (a) {
        this.month = b.DATETIME_FORMATS.MONTH.indexOf(a)
      }
    },
    MMM: {
      regex: b.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (a) {
        this.month = b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)
      }
    },
    MM: {
      regex: "0[1-9]|1[0-2]", apply: function (a) {
        this.month = a - 1
      }
    },
    M: {
      regex: "[1-9]|1[0-2]", apply: function (a) {
        this.month = a - 1
      }
    },
    dd: {
      regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (a) {
        this.date = +a
      }
    },
    d: {
      regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (a) {
        this.date = +a
      }
    },
    EEEE: {regex: b.DATETIME_FORMATS.DAY.join("|")},
    EEE: {regex: b.DATETIME_FORMATS.SHORTDAY.join("|")},
    HH: {
      regex: "(?:0|1)[0-9]|2[0-3]", apply: function (a) {
        this.hours = +a
      }
    },
    hh: {
      regex: "0[0-9]|1[0-2]", apply: function (a) {
        this.hours = +a
      }
    },
    H: {
      regex: "1?[0-9]|2[0-3]", apply: function (a) {
        this.hours = +a
      }
    },
    h: {
      regex: "[0-9]|1[0-2]", apply: function (a) {
        this.hours = +a
      }
    },
    mm: {
      regex: "[0-5][0-9]", apply: function (a) {
        this.minutes = +a
      }
    },
    m: {
      regex: "[0-9]|[1-5][0-9]", apply: function (a) {
        this.minutes = +a
      }
    },
    sss: {
      regex: "[0-9][0-9][0-9]", apply: function (a) {
        this.milliseconds = +a
      }
    },
    ss: {
      regex: "[0-5][0-9]", apply: function (a) {
        this.seconds = +a
      }
    },
    s: {
      regex: "[0-9]|[1-5][0-9]", apply: function (a) {
        this.seconds = +a
      }
    },
    a: {
      regex: b.DATETIME_FORMATS.AMPMS.join("|"), apply: function (a) {
        12 === this.hours && (this.hours = 0), "PM" === a && (this.hours += 12)
      }
    }
  };
  this.parse = function (c, g, h) {
    if (!angular.isString(c) || !g)return c;
    g = b.DATETIME_FORMATS[g] || g, g = g.replace(f, "\\$&"), this.parsers[g] || (this.parsers[g] = d(g));
    var i = this.parsers[g], j = i.regex, k = i.map, l = c.match(j);
    if (l && l.length) {
      var m, n;
      angular.isDate(h) && !isNaN(h.getTime()) ? m = {
        year: h.getFullYear(),
        month: h.getMonth(),
        date: h.getDate(),
        hours: h.getHours(),
        minutes: h.getMinutes(),
        seconds: h.getSeconds(),
        milliseconds: h.getMilliseconds()
      } : (h && a.warn("dateparser:", "baseDate is not a valid date"), m = {
        year: 1900,
        month: 0,
        date: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      });
      for (var o = 1, p = l.length; p > o; o++) {
        var q = k[o - 1];
        q.apply && q.apply.call(m, l[o])
      }
      return e(m.year, m.month, m.date) && (n = new Date(m.year, m.month, m.date, m.hours, m.minutes, m.seconds, m.milliseconds || 0)), n
    }
  }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (a, b) {
  function c(a, c) {
    return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
  }

  function d(a) {
    return "static" === (c(a, "position") || "static")
  }

  var e = function (b) {
    for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);)e = e.offsetParent;
    return e || c
  };
  return {
    position: function (b) {
      var c = this.offset(b), d = {top: 0, left: 0}, f = e(b[0]);
      f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
      var g = b[0].getBoundingClientRect();
      return {
        width: g.width || b.prop("offsetWidth"),
        height: g.height || b.prop("offsetHeight"),
        top: c.top - d.top,
        left: c.left - d.left
      }
    }, offset: function (c) {
      var d = c[0].getBoundingClientRect();
      return {
        width: d.width || c.prop("offsetWidth"),
        height: d.height || c.prop("offsetHeight"),
        top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
        left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
      }
    }, positionElements: function (a, b, c, d) {
      var e, f, g, h, i = c.split("-"), j = i[0], k = i[1] || "center";
      e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
      var l = {
        center: function () {
          return e.left + e.width / 2 - f / 2
        }, left: function () {
          return e.left
        }, right: function () {
          return e.left + e.width
        }
      }, m = {
        center: function () {
          return e.top + e.height / 2 - g / 2
        }, top: function () {
          return e.top
        }, bottom: function () {
          return e.top + e.height
        }
      };
      switch (j) {
        case"right":
          h = {top: m[k](), left: l[j]()};
          break;
        case"left":
          h = {top: m[k](), left: e.left - f};
          break;
        case"bottom":
          h = {top: m[j](), left: l[k]()};
          break;
        default:
          h = {top: e.top - g, left: l[k]()}
      }
      return h
    }
  }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).value("$datepickerSuppressError", !1).constant("datepickerConfig", {
  formatDay: "dd",
  formatMonth: "MMMM",
  formatYear: "yyyy",
  formatDayHeader: "EEE",
  formatDayTitle: "MMMM yyyy",
  formatMonthTitle: "yyyy",
  datepickerMode: "day",
  minMode: "day",
  maxMode: "year",
  showWeeks: !0,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null,
  shortcutPropagation: !1
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$log", "dateFilter", "datepickerConfig", "$datepickerSuppressError", function (a, b, c, d, e, f, g, h) {
  var i = this, j = {$setViewValue: angular.noop};
  this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "showWeeks", "startingDay", "yearRange", "shortcutPropagation"], function (c, e) {
    i[c] = angular.isDefined(b[c]) ? 6 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : g[c]
  }), angular.forEach(["minDate", "maxDate"], function (d) {
    b[d] ? a.$parent.$watch(c(b[d]), function (a) {
      i[d] = a ? new Date(a) : null, i.refreshView()
    }) : i[d] = g[d] ? new Date(g[d]) : null
  }), angular.forEach(["minMode", "maxMode"], function (d) {
    b[d] ? a.$parent.$watch(c(b[d]), function (c) {
      i[d] = angular.isDefined(c) ? c : b[d], a[d] = i[d], ("minMode" == d && i.modes.indexOf(a.datepickerMode) < i.modes.indexOf(i[d]) || "maxMode" == d && i.modes.indexOf(a.datepickerMode) > i.modes.indexOf(i[d])) && (a.datepickerMode = i[d])
    }) : (i[d] = g[d] || null, a[d] = i[d])
  }), a.datepickerMode = a.datepickerMode || g.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), angular.isDefined(b.initDate) ? (this.activeDate = a.$parent.$eval(b.initDate) || new Date, a.$parent.$watch(b.initDate, function (a) {
    a && (j.$isEmpty(j.$modelValue) || j.$invalid) && (i.activeDate = a, i.refreshView())
  })) : this.activeDate = new Date, a.isActive = function (b) {
    return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
  }, this.init = function (a) {
    j = a, j.$render = function () {
      i.render()
    }
  }, this.render = function () {
    if (j.$viewValue) {
      var a = new Date(j.$viewValue), b = !isNaN(a);
      b ? this.activeDate = a : h || e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')
    }
    this.refreshView()
  }, this.refreshView = function () {
    if (this.element) {
      this._refreshView();
      var a = j.$viewValue ? new Date(j.$viewValue) : null;
      j.$setValidity("dateDisabled", !a || this.element && !this.isDisabled(a))
    }
  }, this.createDateObject = function (a, b) {
    var c = j.$viewValue ? new Date(j.$viewValue) : null;
    return {
      date: a,
      label: f(a, b),
      selected: c && 0 === this.compare(a, c),
      disabled: this.isDisabled(a),
      current: 0 === this.compare(a, new Date),
      customClass: this.customClass(a)
    }
  }, this.isDisabled = function (c) {
    return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
        date: c,
        mode: a.datepickerMode
      })
  }, this.customClass = function (b) {
    return a.customClass({date: b, mode: a.datepickerMode})
  }, this.split = function (a, b) {
    for (var c = []; a.length > 0;)c.push(a.splice(0, b));
    return c
  }, this.fixTimeZone = function (a) {
    var b = a.getHours();
    a.setHours(23 === b ? b + 2 : 0)
  }, a.select = function (b) {
    if (a.datepickerMode === i.minMode) {
      var c = j.$viewValue ? new Date(j.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
      c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
    } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
  }, a.move = function (a) {
    var b = i.activeDate.getFullYear() + a * (i.step.years || 0), c = i.activeDate.getMonth() + a * (i.step.months || 0);
    i.activeDate.setFullYear(b, c, 1), i.refreshView()
  }, a.toggleMode = function (b) {
    b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
  }, a.keys = {
    13: "enter",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  var k = function () {
    i.element[0].focus()
  };
  a.$on("datepicker.focus", k), a.keydown = function (b) {
    var c = a.keys[b.which];
    if (c && !b.shiftKey && !b.altKey)if (b.preventDefault(), i.shortcutPropagation || b.stopPropagation(), "enter" === c || "space" === c) {
      if (i.isDisabled(i.activeDate))return;
      a.select(i.activeDate), k()
    } else!b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
  }
}]).directive("datepicker", function () {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: function (a, b) {
      return b.templateUrl || "template/datepicker/datepicker.html"
    },
    scope: {datepickerMode: "=?", dateDisabled: "&", customClass: "&", shortcutPropagation: "&?"},
    require: ["datepicker", "^ngModel"],
    controller: "DatepickerController",
    controllerAs: "datepicker",
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      e.init(f)
    }
  }
}).directive("daypicker", ["dateFilter", function (a) {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/datepicker/day.html",
    require: "^datepicker",
    link: function (b, c, d, e) {
      function f(a, b) {
        return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
      }

      function g(a, b) {
        for (var c, d = new Array(b), f = new Date(a), g = 0; b > g;)c = new Date(f), e.fixTimeZone(c), d[g++] = c, f.setDate(f.getDate() + 1);
        return d
      }

      function h(a) {
        var b = new Date(a);
        b.setDate(b.getDate() + 4 - (b.getDay() || 7));
        var c = b.getTime();
        return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
      }

      b.showWeeks = e.showWeeks, e.step = {months: 1}, e.element = c;
      var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      e._refreshView = function () {
        var c = e.activeDate.getFullYear(), d = e.activeDate.getMonth(), f = new Date(c, d, 1), i = e.startingDay - f.getDay(), j = i > 0 ? 7 - i : -i, k = new Date(f);
        j > 0 && k.setDate(-j + 1);
        for (var l = g(k, 42), m = 0; 42 > m; m++)l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
          secondary: l[m].getMonth() !== d,
          uid: b.uniqueId + "-" + m
        });
        b.labels = new Array(7);
        for (var n = 0; 7 > n; n++)b.labels[n] = {abbr: a(l[n].date, e.formatDayHeader), full: a(l[n].date, "EEEE")};
        if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
          b.weekNumbers = [];
          for (var o = (11 - e.startingDay) % 7, p = b.rows.length, q = 0; p > q; q++)b.weekNumbers.push(h(b.rows[q][o].date))
        }
      }, e.compare = function (a, b) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
      }, e.handleKeyDown = function (a, b) {
        var c = e.activeDate.getDate();
        if ("left" === a)c -= 1; else if ("up" === a)c -= 7; else if ("right" === a)c += 1; else if ("down" === a)c += 7; else if ("pageup" === a || "pagedown" === a) {
          var d = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
          e.activeDate.setMonth(d, 1), c = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), c)
        } else"home" === a ? c = 1 : "end" === a && (c = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
        e.activeDate.setDate(c)
      }, e.refreshView()
    }
  }
}]).directive("monthpicker", ["dateFilter", function (a) {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/datepicker/month.html",
    require: "^datepicker",
    link: function (b, c, d, e) {
      e.step = {years: 1}, e.element = c, e._refreshView = function () {
        for (var c, d = new Array(12), f = e.activeDate.getFullYear(), g = 0; 12 > g; g++)c = new Date(f, g, 1), e.fixTimeZone(c), d[g] = angular.extend(e.createDateObject(c, e.formatMonth), {uid: b.uniqueId + "-" + g});
        b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(d, 3)
      }, e.compare = function (a, b) {
        return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
      }, e.handleKeyDown = function (a, b) {
        var c = e.activeDate.getMonth();
        if ("left" === a)c -= 1; else if ("up" === a)c -= 3; else if ("right" === a)c += 1; else if ("down" === a)c += 3; else if ("pageup" === a || "pagedown" === a) {
          var d = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
          e.activeDate.setFullYear(d)
        } else"home" === a ? c = 0 : "end" === a && (c = 11);
        e.activeDate.setMonth(c)
      }, e.refreshView()
    }
  }
}]).directive("yearpicker", ["dateFilter", function (a) {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/datepicker/year.html",
    require: "^datepicker",
    link: function (a, b, c, d) {
      function e(a) {
        return parseInt((a - 1) / f, 10) * f + 1
      }

      var f = d.yearRange;
      d.step = {years: f}, d.element = b, d._refreshView = function () {
        for (var b, c = new Array(f), g = 0, h = e(d.activeDate.getFullYear()); f > g; g++)b = new Date(h + g, 0, 1), d.fixTimeZone(b), c[g] = angular.extend(d.createDateObject(b, d.formatYear), {uid: a.uniqueId + "-" + g});
        a.title = [c[0].label, c[f - 1].label].join(" - "), a.rows = d.split(c, 5)
      }, d.compare = function (a, b) {
        return a.getFullYear() - b.getFullYear()
      }, d.handleKeyDown = function (a, b) {
        var c = d.activeDate.getFullYear();
        "left" === a ? c -= 1 : "up" === a ? c -= 5 : "right" === a ? c += 1 : "down" === a ? c += 5 : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? c = e(d.activeDate.getFullYear()) : "end" === a && (c = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(c)
      }, d.refreshView()
    }
  }
}]).constant("datepickerPopupConfig", {
  datepickerPopup: "yyyy-MM-dd",
  datepickerPopupTemplateUrl: "template/datepicker/popup.html",
  datepickerTemplateUrl: "template/datepicker/datepicker.html",
  html5Types: {date: "yyyy-MM-dd", "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss", month: "yyyy-MM"},
  currentText: "Today",
  clearText: "Clear",
  closeText: "Done",
  closeOnDateSelection: !0,
  appendToBody: !1,
  showButtonBar: !0,
  onOpenFocus: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$rootScope", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", "$timeout", function (a, b, c, d, e, f, g, h, i) {
  return {
    restrict: "EA",
    require: "ngModel",
    scope: {isOpen: "=?", currentText: "@", clearText: "@", closeText: "@", dateDisabled: "&", customClass: "&"},
    link: function (j, k, l, m) {
      function n(a) {
        return a.replace(/([A-Z])/g, function (a) {
          return "-" + a.toLowerCase()
        })
      }

      function o(a) {
        angular.isNumber(a) && (a = new Date(a));
        {
          if (!a)return null;
          if (angular.isDate(a) && !isNaN(a))return a;
          if (angular.isString(a)) {
            var b = g.parse(a, q, j.date);
            return isNaN(b) ? void 0 : b
          }
        }
      }

      function p(a, b) {
        var c = a || b;
        if (!l.ngRequired && !c)return !0;
        if (angular.isNumber(c) && (c = new Date(c)), c) {
          if (angular.isDate(c) && !isNaN(c))return !0;
          if (angular.isString(c)) {
            var d = g.parse(c, q);
            return !isNaN(d)
          }
          return !1
        }
        return !0
      }

      var q, r = angular.isDefined(l.closeOnDateSelection) ? j.$parent.$eval(l.closeOnDateSelection) : h.closeOnDateSelection, s = angular.isDefined(l.datepickerAppendToBody) ? j.$parent.$eval(l.datepickerAppendToBody) : h.appendToBody, t = angular.isDefined(l.onOpenFocus) ? j.$parent.$eval(l.onOpenFocus) : h.onOpenFocus, u = angular.isDefined(l.datepickerPopupTemplateUrl) ? l.datepickerPopupTemplateUrl : h.datepickerPopupTemplateUrl, v = angular.isDefined(l.datepickerTemplateUrl) ? l.datepickerTemplateUrl : h.datepickerTemplateUrl, w = {};
      j.showButtonBar = angular.isDefined(l.showButtonBar) ? j.$parent.$eval(l.showButtonBar) : h.showButtonBar, j.getText = function (a) {
        return j[a + "Text"] || h[a + "Text"]
      }, j.isDisabled = function (a) {
        return "today" === a && (a = new Date), j.watchData.minDate && j.compare(a, w.minDate) < 0 || j.watchData.maxDate && j.compare(a, w.maxDate) > 0
      }, j.compare = function (a, b) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
      };
      var x = !1;
      if (h.html5Types[l.type] ? (q = h.html5Types[l.type], x = !0) : (q = l.datepickerPopup || h.datepickerPopup, l.$observe("datepickerPopup", function (a, b) {
          var c = a || h.datepickerPopup;
          if (c !== q && (q = c, m.$modelValue = null, !q))throw new Error("datepickerPopup must have a date format specified.")
        })), !q)throw new Error("datepickerPopup must have a date format specified.");
      if (x && l.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");
      var y = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
      y.attr({"ng-model": "date", "ng-change": "dateSelection(date)", "template-url": u});
      var z = angular.element(y.children()[0]);
      if (z.attr("template-url", v), x && "month" === l.type && (z.attr("datepicker-mode", '"month"'), z.attr("min-mode", "month")), l.datepickerOptions) {
        var A = j.$parent.$eval(l.datepickerOptions);
        A && A.initDate && (j.initDate = A.initDate, z.attr("init-date", "initDate"), delete A.initDate), angular.forEach(A, function (a, b) {
          z.attr(n(b), a)
        })
      }
      j.watchData = {}, angular.forEach(["minMode", "maxMode", "minDate", "maxDate", "datepickerMode", "initDate", "shortcutPropagation"], function (a) {
        if (l[a]) {
          var c = b(l[a]);
          if (j.$parent.$watch(c, function (b) {
              j.watchData[a] = b, ("minDate" === a || "maxDate" === a) && (w[a] = new Date(b))
            }), z.attr(n(a), "watchData." + a), "datepickerMode" === a) {
            var d = c.assign;
            j.$watch("watchData." + a, function (a, b) {
              angular.isFunction(d) && a !== b && d(j.$parent, a)
            })
          }
        }
      }), l.dateDisabled && z.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), l.showWeeks && z.attr("show-weeks", l.showWeeks), l.customClass && z.attr("custom-class", "customClass({ date: date, mode: mode })"), x ? m.$formatters.push(function (a) {
        return j.date = a, a
      }) : (m.$$parserName = "date", m.$validators.date = p, m.$parsers.unshift(o), m.$formatters.push(function (a) {
        return j.date = a, m.$isEmpty(a) ? a : f(a, q)
      })), j.dateSelection = function (a) {
        angular.isDefined(a) && (j.date = a);
        var b = j.date ? f(j.date, q) : null;
        k.val(b), m.$setViewValue(b), r && (j.isOpen = !1, k[0].focus())
      }, m.$viewChangeListeners.push(function () {
        j.date = g.parse(m.$viewValue, q, j.date)
      });
      var B = function (a) {
        !j.isOpen || k[0].contains(a.target) || y[0].contains(a.target) || j.$apply(function () {
          j.isOpen = !1
        })
      }, C = function (a) {
        27 === a.which && j.isOpen ? (a.preventDefault(), a.stopPropagation(), j.$apply(function () {
          j.isOpen = !1
        }), k[0].focus()) : 40 !== a.which || j.isOpen || (a.preventDefault(), a.stopPropagation(), j.$apply(function () {
          j.isOpen = !0
        }))
      };
      k.bind("keydown", C), j.keydown = function (a) {
        27 === a.which && (j.isOpen = !1, k[0].focus())
      }, j.$watch("isOpen", function (a) {
        a ? (j.position = s ? e.offset(k) : e.position(k), j.position.top = j.position.top + k.prop("offsetHeight"), i(function () {
          t && j.$broadcast("datepicker.focus"), c.bind("click", B)
        }, 0, !1)) : c.unbind("click", B)
      }), j.select = function (a) {
        if ("today" === a) {
          var b = new Date;
          angular.isDate(j.date) ? (a = new Date(j.date),
            a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
        }
        j.dateSelection(a)
      }, j.close = function () {
        j.isOpen = !1, k[0].focus()
      };
      var D = a(y)(j);
      y.remove(), s ? c.find("body").append(D) : k.after(D), j.$on("$destroy", function () {
        j.isOpen === !0 && (d.$$phase || j.$apply(function () {
          j.isOpen = !1
        })), D.remove(), k.unbind("keydown", C), c.unbind("click", B)
      })
    }
  }
}]).directive("datepickerPopupWrap", function () {
  return {
    restrict: "EA", replace: !0, transclude: !0, templateUrl: function (a, b) {
      return b.templateUrl || "template/datepicker/popup.html"
    }
  }
}), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("dropdownConfig", {openClass: "open"}).service("dropdownService", ["$document", "$rootScope", function (a, b) {
  var c = null;
  this.open = function (b) {
    c || (a.bind("click", d), a.bind("keydown", e)), c && c !== b && (c.isOpen = !1), c = b
  }, this.close = function (b) {
    c === b && (c = null, a.unbind("click", d), a.unbind("keydown", e))
  };
  var d = function (a) {
    if (c && (!a || "disabled" !== c.getAutoClose())) {
      var d = c.getToggleElement();
      if (!(a && d && d[0].contains(a.target))) {
        var e = c.getDropdownElement();
        a && "outsideClick" === c.getAutoClose() && e && e[0].contains(a.target) || (c.isOpen = !1, b.$$phase || c.$apply())
      }
    }
  }, e = function (a) {
    27 === a.which ? (c.focusToggleElement(), d()) : c.isKeynavEnabled() && /(38|40)/.test(a.which) && c.isOpen && (a.preventDefault(), a.stopPropagation(), c.focusDropdownEntry(a.which))
  }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", "$position", "$document", "$compile", "$templateRequest", function (a, b, c, d, e, f, g, h, i, j) {
  var k, l, m = this, n = a.$new(), o = d.openClass, p = angular.noop, q = b.onToggle ? c(b.onToggle) : angular.noop, r = !1, s = !1, t = h.find("body");
  this.init = function (d) {
    m.$element = d, b.isOpen && (l = c(b.isOpen), p = l.assign, a.$watch(l, function (a) {
      n.isOpen = !!a
    })), r = angular.isDefined(b.dropdownAppendToBody), s = angular.isDefined(b.keyboardNav), r && m.dropdownMenu && (t.append(m.dropdownMenu), t.addClass("dropdown"), d.on("$destroy", function () {
      m.dropdownMenu.remove()
    }))
  }, this.toggle = function (a) {
    return n.isOpen = arguments.length ? !!a : !n.isOpen
  }, this.isOpen = function () {
    return n.isOpen
  }, n.getToggleElement = function () {
    return m.toggleElement
  }, n.getAutoClose = function () {
    return b.autoClose || "always"
  }, n.getElement = function () {
    return m.$element
  }, n.isKeynavEnabled = function () {
    return s
  }, n.focusDropdownEntry = function (a) {
    var b = m.dropdownMenu ? angular.element(m.dropdownMenu).find("a") : angular.element(m.$element).find("ul").eq(0).find("a");
    switch (a) {
      case 40:
        angular.isNumber(m.selectedOption) ? m.selectedOption = m.selectedOption === b.length - 1 ? m.selectedOption : m.selectedOption + 1 : m.selectedOption = 0;
        break;
      case 38:
        angular.isNumber(m.selectedOption) ? m.selectedOption = 0 === m.selectedOption ? 0 : m.selectedOption - 1 : m.selectedOption = b.length - 1
    }
    b[m.selectedOption].focus()
  }, n.getDropdownElement = function () {
    return m.dropdownMenu
  }, n.focusToggleElement = function () {
    m.toggleElement && m.toggleElement[0].focus()
  }, n.$watch("isOpen", function (b, c) {
    if (r && m.dropdownMenu) {
      var d = g.positionElements(m.$element, m.dropdownMenu, "bottom-left", !0), h = {
        top: d.top + "px",
        display: b ? "block" : "none"
      }, l = m.dropdownMenu.hasClass("dropdown-menu-right");
      l ? (h.left = "auto", h.right = window.innerWidth - (d.left + m.$element.prop("offsetWidth")) + "px") : (h.left = d.left + "px", h.right = "auto"), m.dropdownMenu.css(h)
    }
    var s = r ? t : m.$element;
    if (f[b ? "addClass" : "removeClass"](s, o).then(function () {
        angular.isDefined(b) && b !== c && q(a, {open: !!b})
      }), b)m.dropdownMenuTemplateUrl && j(m.dropdownMenuTemplateUrl).then(function (a) {
      k = n.$new(), i(a.trim())(k, function (a) {
        var b = a;
        m.dropdownMenu.replaceWith(b), m.dropdownMenu = b
      })
    }), n.focusToggleElement(), e.open(n); else {
      if (m.dropdownMenuTemplateUrl) {
        k && k.$destroy();
        var u = angular.element('<ul class="dropdown-menu"></ul>');
        m.dropdownMenu.replaceWith(u), m.dropdownMenu = u
      }
      e.close(n), m.selectedOption = null
    }
    angular.isFunction(p) && p(a, b)
  }), a.$on("$locationChangeSuccess", function () {
    "disabled" !== n.getAutoClose() && (n.isOpen = !1)
  });
  var u = a.$on("$destroy", function () {
    n.$destroy()
  });
  n.$on("$destroy", u)
}]).directive("dropdown", function () {
  return {
    controller: "DropdownController", link: function (a, b, c, d) {
      d.init(b), b.addClass("dropdown")
    }
  }
}).directive("dropdownMenu", function () {
  return {
    restrict: "AC", require: "?^dropdown", link: function (a, b, c, d) {
      if (d) {
        var e = c.templateUrl;
        e && (d.dropdownMenuTemplateUrl = e), d.dropdownMenu || (d.dropdownMenu = b)
      }
    }
  }
}).directive("keyboardNav", function () {
  return {
    restrict: "A", require: "?^dropdown", link: function (a, b, c, d) {
      b.bind("keydown", function (a) {
        if (-1 !== [38, 40].indexOf(a.which)) {
          a.preventDefault(), a.stopPropagation();
          var b = d.dropdownMenu.find("a");
          switch (a.which) {
            case 40:
              angular.isNumber(d.selectedOption) ? d.selectedOption = d.selectedOption === b.length - 1 ? d.selectedOption : d.selectedOption + 1 : d.selectedOption = 0;
              break;
            case 38:
              angular.isNumber(d.selectedOption) ? d.selectedOption = 0 === d.selectedOption ? 0 : d.selectedOption - 1 : d.selectedOption = b.length - 1
          }
          b[d.selectedOption].focus()
        }
      })
    }
  }
}).directive("dropdownToggle", function () {
  return {
    require: "?^dropdown", link: function (a, b, c, d) {
      if (d) {
        b.addClass("dropdown-toggle"), d.toggleElement = b;
        var e = function (e) {
          e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function () {
            d.toggle()
          })
        };
        b.bind("click", e), b.attr({"aria-haspopup": !0, "aria-expanded": !1}), a.$watch(d.isOpen, function (a) {
          b.attr("aria-expanded", !!a)
        }), a.$on("$destroy", function () {
          b.unbind("click", e)
        })
      }
    }
  }
}), angular.module("ui.bootstrap.modal", []).factory("$$stackedMap", function () {
  return {
    createNew: function () {
      var a = [];
      return {
        add: function (b, c) {
          a.push({key: b, value: c})
        }, get: function (b) {
          for (var c = 0; c < a.length; c++)if (b == a[c].key)return a[c]
        }, keys: function () {
          for (var b = [], c = 0; c < a.length; c++)b.push(a[c].key);
          return b
        }, top: function () {
          return a[a.length - 1]
        }, remove: function (b) {
          for (var c = -1, d = 0; d < a.length; d++)if (b == a[d].key) {
            c = d;
            break
          }
          return a.splice(c, 1)[0]
        }, removeTop: function () {
          return a.splice(a.length - 1, 1)[0]
        }, length: function () {
          return a.length
        }
      }
    }
  }
}).factory("$$multiMap", function () {
  return {
    createNew: function () {
      var a = {};
      return {
        entries: function () {
          return Object.keys(a).map(function (b) {
            return {key: b, value: a[b]}
          })
        }, get: function (b) {
          return a[b]
        }, hasKey: function (b) {
          return !!a[b]
        }, keys: function () {
          return Object.keys(a)
        }, put: function (b, c) {
          a[b] || (a[b] = []), a[b].push(c)
        }, remove: function (b, c) {
          var d = a[b];
          if (d) {
            var e = d.indexOf(c);
            -1 !== e && d.splice(e, 1), d.length || delete a[b]
          }
        }
      }
    }
  }
}).directive("modalBackdrop", ["$animate", "$injector", "$modalStack", function (a, b, c) {
  function d(b, d, f) {
    f.modalInClass && (e ? e(d, {addClass: f.modalInClass}).start() : a.addClass(d, f.modalInClass), b.$on(c.NOW_CLOSING_EVENT, function (b, c) {
      var g = c();
      e ? e(d, {removeClass: f.modalInClass}).start().then(g) : a.removeClass(d, f.modalInClass).then(g)
    }))
  }

  var e = null;
  return b.has("$animateCss") && (e = b.get("$animateCss")), {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/modal/backdrop.html",
    compile: function (a, b) {
      return a.addClass(b.backdropClass), d
    }
  }
}]).directive("modalWindow", ["$modalStack", "$q", "$animate", "$injector", function (a, b, c, d) {
  var e = null;
  return d.has("$animateCss") && (e = d.get("$animateCss")), {
    restrict: "EA",
    scope: {index: "@"},
    replace: !0,
    transclude: !0,
    templateUrl: function (a, b) {
      return b.templateUrl || "template/modal/window.html"
    },
    link: function (d, f, g) {
      f.addClass(g.windowClass || ""), d.size = g.size, d.close = function (b) {
        var c = a.getTop();
        c && c.value.backdrop && "static" !== c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
      }, d.$isRendered = !0;
      var h = b.defer();
      g.$observe("modalRender", function (a) {
        "true" == a && h.resolve()
      }), h.promise.then(function () {
        var h = null;
        g.modalInClass && (h = e ? e(f, {addClass: g.modalInClass}).start() : c.addClass(f, g.modalInClass), d.$on(a.NOW_CLOSING_EVENT, function (a, b) {
          var d = b();
          e ? e(f, {removeClass: g.modalInClass}).start().then(d) : c.removeClass(f, g.modalInClass).then(d)
        })), b.when(h).then(function () {
          var a = f[0].querySelectorAll("[autofocus]");
          a.length ? a[0].focus() : f[0].focus()
        });
        var i = a.getTop();
        i && a.modalRendered(i.key)
      })
    }
  }
}]).directive("modalAnimationClass", [function () {
  return {
    compile: function (a, b) {
      b.modalAnimation && a.addClass(b.modalAnimationClass)
    }
  }
}]).directive("modalTransclude", function () {
  return {
    link: function (a, b, c, d, e) {
      e(a.$parent, function (a) {
        b.empty(), b.append(a)
      })
    }
  }
}).factory("$modalStack", ["$animate", "$timeout", "$document", "$compile", "$rootScope", "$q", "$injector", "$$multiMap", "$$stackedMap", function (a, b, c, d, e, f, g, h, i) {
  function j() {
    for (var a = -1, b = t.keys(), c = 0; c < b.length; c++)t.get(b[c]).value.backdrop && (a = c);
    return a
  }

  function k(a, b) {
    var d = c.find("body").eq(0), e = t.get(a).value;
    t.remove(a), m(e.modalDomEl, e.modalScope, function () {
      var b = e.openedClass || s;
      u.remove(b, a), d.toggleClass(b, u.hasKey(b))
    }), l(), b && b.focus ? b.focus() : d.focus()
  }

  function l() {
    if (p && -1 == j()) {
      var a = q;
      m(p, q, function () {
        a = null
      }), p = void 0, q = void 0
    }
  }

  function m(b, c, d) {
    function e() {
      e.done || (e.done = !0, o ? o(b, {event: "leave"}).start().then(function () {
        b.remove()
      }) : a.leave(b), c.$destroy(), d && d())
    }

    var g, h = null, i = function () {
      return g || (g = f.defer(), h = g.promise), function () {
        g.resolve()
      }
    };
    return c.$broadcast(v.NOW_CLOSING_EVENT, i), f.when(h).then(e)
  }

  function n(a, b, c) {
    return !a.value.modalScope.$broadcast("modal.closing", b, c).defaultPrevented
  }

  var o = null;
  g.has("$animateCss") && (o = g.get("$animateCss"));
  var p, q, r, s = "modal-open", t = i.createNew(), u = h.createNew(), v = {NOW_CLOSING_EVENT: "modal.stack.now-closing"}, w = 0, x = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";
  return e.$watch(j, function (a) {
    q && (q.index = a)
  }), c.bind("keydown", function (a) {
    if (a.isDefaultPrevented())return a;
    var b = t.top();
    if (b && b.value.keyboard)switch (a.which) {
      case 27:
        a.preventDefault(), e.$apply(function () {
          v.dismiss(b.key, "escape key press")
        });
        break;
      case 9:
        v.loadFocusElementList(b);
        var c = !1;
        a.shiftKey ? v.isFocusInFirstItem(a) && (c = v.focusLastFocusableElement()) : v.isFocusInLastItem(a) && (c = v.focusFirstFocusableElement()), c && (a.preventDefault(), a.stopPropagation())
    }
  }), v.open = function (a, b) {
    var f = c[0].activeElement, g = b.openedClass || s;
    t.add(a, {
      deferred: b.deferred,
      renderDeferred: b.renderDeferred,
      modalScope: b.scope,
      backdrop: b.backdrop,
      keyboard: b.keyboard,
      openedClass: b.openedClass
    }), u.put(g, a);
    var h = c.find("body").eq(0), i = j();
    if (i >= 0 && !p) {
      q = e.$new(!0), q.index = i;
      var k = angular.element('<div modal-backdrop="modal-backdrop"></div>');
      k.attr("backdrop-class", b.backdropClass), b.animation && k.attr("modal-animation", "true"), p = d(k)(q), h.append(p)
    }
    var l = angular.element('<div modal-window="modal-window"></div>');
    l.attr({
      "template-url": b.windowTemplateUrl,
      "window-class": b.windowClass,
      size: b.size,
      index: t.length() - 1,
      animate: "animate"
    }).html(b.content), b.animation && l.attr("modal-animation", "true");
    var m = d(l)(b.scope);
    t.top().value.modalDomEl = m, t.top().value.modalOpener = f, h.append(m), h.addClass(g), v.clearFocusListCache()
  }, v.close = function (a, b) {
    var c = t.get(a);
    return c && n(c, b, !0) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.resolve(b), k(a, c.value.modalOpener), !0) : !c
  }, v.dismiss = function (a, b) {
    var c = t.get(a);
    return c && n(c, b, !1) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.reject(b), k(a, c.value.modalOpener), !0) : !c
  }, v.dismissAll = function (a) {
    for (var b = this.getTop(); b && this.dismiss(b.key, a);)b = this.getTop()
  }, v.getTop = function () {
    return t.top()
  }, v.modalRendered = function (a) {
    var b = t.get(a);
    b && b.value.renderDeferred.resolve()
  }, v.focusFirstFocusableElement = function () {
    return r.length > 0 ? (r[0].focus(), !0) : !1
  }, v.focusLastFocusableElement = function () {
    return r.length > 0 ? (r[r.length - 1].focus(), !0) : !1
  }, v.isFocusInFirstItem = function (a) {
    return r.length > 0 ? (a.target || a.srcElement) == r[0] : !1
  }, v.isFocusInLastItem = function (a) {
    return r.length > 0 ? (a.target || a.srcElement) == r[r.length - 1] : !1
  }, v.clearFocusListCache = function () {
    r = [], w = 0
  }, v.loadFocusElementList = function (a) {
    if ((void 0 === r || !r.length0) && a) {
      var b = a.value.modalDomEl;
      b && b.length && (r = b[0].querySelectorAll(x))
    }
  }, v
}]).provider("$modal", function () {
  var a = {
    options: {animation: !0, backdrop: !0, keyboard: !0},
    $get: ["$injector", "$rootScope", "$q", "$templateRequest", "$controller", "$modalStack", function (b, c, d, e, f, g) {
      function h(a) {
        return a.template ? d.when(a.template) : e(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl)
      }

      function i(a) {
        var c = [];
        return angular.forEach(a, function (a) {
          angular.isFunction(a) || angular.isArray(a) ? c.push(d.when(b.invoke(a))) : angular.isString(a) ? c.push(d.when(b.get(a))) : c.push(d.when(a))
        }), c
      }

      var j = {}, k = null;
      return j.getPromiseChain = function () {
        return k
      }, j.open = function (b) {
        var e = d.defer(), j = d.defer(), l = d.defer(), m = {
          result: e.promise,
          opened: j.promise,
          rendered: l.promise,
          close: function (a) {
            return g.close(m, a)
          },
          dismiss: function (a) {
            return g.dismiss(m, a)
          }
        };
        if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl)throw new Error("One of template or templateUrl options is required.");
        var n, o = d.all([h(b)].concat(i(b.resolve)));
        return n = k = d.all([k]).then(function () {
          return o
        }, function () {
          return o
        }).then(function (a) {
          var d = (b.scope || c).$new();
          d.$close = m.close, d.$dismiss = m.dismiss, d.$on("$destroy", function () {
            d.$$uibDestructionScheduled || d.$dismiss("$uibUnscheduledDestruction")
          });
          var h, i = {}, k = 1;
          b.controller && (i.$scope = d, i.$modalInstance = m, angular.forEach(b.resolve, function (b, c) {
            i[c] = a[k++]
          }), h = f(b.controller, i), b.controllerAs && (b.bindToController && angular.extend(h, d), d[b.controllerAs] = h)), g.open(m, {
            scope: d,
            deferred: e,
            renderDeferred: l,
            content: a[0],
            animation: b.animation,
            backdrop: b.backdrop,
            keyboard: b.keyboard,
            backdropClass: b.backdropClass,
            windowClass: b.windowClass,
            windowTemplateUrl: b.windowTemplateUrl,
            size: b.size,
            openedClass: b.openedClass
          }), j.resolve(!0)
        }, function (a) {
          j.reject(a), e.reject(a)
        })["finally"](function () {
          k === n && (k = null)
        }), m
      }, j
    }]
  };
  return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function (a, b, c) {
  var d = this, e = {$setViewValue: angular.noop}, f = b.numPages ? c(b.numPages).assign : angular.noop;
  this.init = function (g, h) {
    e = g, this.config = h, e.$render = function () {
      d.render()
    }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
      d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
    }) : this.itemsPerPage = h.itemsPerPage, a.$watch("totalItems", function () {
      a.totalPages = d.calculateTotalPages()
    }), a.$watch("totalPages", function (b) {
      f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
    })
  }, this.calculateTotalPages = function () {
    var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
    return Math.max(b || 0, 1)
  }, this.render = function () {
    a.page = parseInt(e.$viewValue, 10) || 1
  }, a.selectPage = function (b, c) {
    c && c.preventDefault();
    var d = !a.ngDisabled || !c;
    d && a.page !== b && b > 0 && b <= a.totalPages && (c && c.target && c.target.blur(), e.$setViewValue(b), e.$render())
  }, a.getText = function (b) {
    return a[b + "Text"] || d.config[b + "Text"]
  }, a.noPrevious = function () {
    return 1 === a.page
  }, a.noNext = function () {
    return a.page === a.totalPages
  }
}]).constant("paginationConfig", {
  itemsPerPage: 10,
  boundaryLinks: !1,
  directionLinks: !0,
  firstText: "First",
  previousText: "Previous",
  nextText: "Next",
  lastText: "Last",
  rotate: !0
}).directive("pagination", ["$parse", "paginationConfig", function (a, b) {
  return {
    restrict: "EA",
    scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@", ngDisabled: "="},
    require: ["pagination", "?ngModel"],
    controller: "PaginationController",
    controllerAs: "pagination",
    templateUrl: function (a, b) {
      return b.templateUrl || "template/pagination/pagination.html"
    },
    replace: !0,
    link: function (c, d, e, f) {
      function g(a, b, c) {
        return {number: a, text: b, active: c}
      }

      function h(a, b) {
        var c = [], d = 1, e = b, f = angular.isDefined(k) && b > k;
        f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
        for (var h = d; e >= h; h++) {
          var i = g(h, h, h === a);
          c.push(i)
        }
        if (f && !l) {
          if (d > 1) {
            var j = g(d - 1, "...", !1);
            c.unshift(j)
          }
          if (b > e) {
            var m = g(e + 1, "...", !1);
            c.push(m)
          }
        }
        return c
      }

      var i = f[0], j = f[1];
      if (j) {
        var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize, l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
        c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
          k = parseInt(a, 10), i.render()
        });
        var m = i.render;
        i.render = function () {
          m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
        }
      }
    }
  }
}]).constant("pagerConfig", {
  itemsPerPage: 10,
  previousText: "« Previous",
  nextText: "Next »",
  align: !0
}).directive("pager", ["pagerConfig", function (a) {
  return {
    restrict: "EA",
    scope: {totalItems: "=", previousText: "@", nextText: "@", ngDisabled: "="},
    require: ["pager", "?ngModel"],
    controller: "PaginationController",
    controllerAs: "pagination",
    templateUrl: function (a, b) {
      return b.templateUrl || "template/pagination/pager.html"
    },
    replace: !0,
    link: function (b, c, d, e) {
      var f = e[0], g = e[1];
      g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
    }
  }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
  function a(a) {
    var b = /[A-Z]/g, c = "-";
    return a.replace(b, function (a, b) {
      return (b ? c : "") + a.toLowerCase()
    })
  }

  var b = {placement: "top", animation: !0, popupDelay: 0, useContentExp: !1}, c = {
    mouseenter: "mouseleave",
    click: "click",
    focus: "blur",
    none: ""
  }, d = {};
  this.options = function (a) {
    angular.extend(d, a)
  }, this.setTriggers = function (a) {
    angular.extend(c, a)
  }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", "$rootScope", "$parse", function (e, f, g, h, i, j, k, l) {
    return function (e, m, n, o) {
      function p(a) {
        var b = (a || o.trigger || n).split(" "), d = b.map(function (a) {
          return c[a] || a
        });
        return {show: b, hide: d}
      }

      o = angular.extend({}, b, d, o);
      var q = a(e), r = j.startSymbol(), s = j.endSymbol(), t = "<div " + q + '-popup title="' + r + "title" + s + '" ' + (o.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + r + "content" + s + '" ') + 'placement="' + r + "placement" + s + '" popup-class="' + r + "popupClass" + s + '" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';
      return {
        restrict: "EA", compile: function (a, b) {
          var c = f(t);
          return function (a, b, d, f) {
            function j() {
              I.isOpen ? q() : n()
            }

            function n() {
              (!H || a.$eval(d[m + "Enable"])) && (v(), I.popupDelay ? D || (D = g(r, I.popupDelay, !1)) : r())
            }

            function q() {
              s(), k.$$phase || k.$digest()
            }

            function r() {
              return D = null, C && (g.cancel(C), C = null), (o.useContentExp ? I.contentExp() : I.content) ? (t(), I.isOpen = !0, K && K.assign(I.origScope, I.isOpen), k.$$phase || I.$apply(), A.css({display: "block"}), void L()) : angular.noop
            }

            function s() {
              I.isOpen = !1, K && K.assign(I.origScope, I.isOpen), g.cancel(D), D = null, g.cancel(E), E = null, I.animation ? C || (C = g(u, 500)) : u()
            }

            function t() {
              A && u(), B = I.$new(), A = c(B, function (a) {
                F ? h.find("body").append(a) : b.after(a)
              }), o.useContentExp && (B.$watch("contentExp()", function (a) {
                !a && I.isOpen && s()
              }), B.$watch(function () {
                J || (J = !0, B.$$postDigest(function () {
                  J = !1, I.isOpen && L()
                }))
              }))
            }

            function u() {
              C = null, A && (A.remove(), A = null), B && (B.$destroy(), B = null)
            }

            function v() {
              w(), x(), y()
            }

            function w() {
              I.popupClass = d[m + "Class"]
            }

            function x() {
              var a = d[m + "Placement"];
              I.placement = angular.isDefined(a) ? a : o.placement
            }

            function y() {
              var a = d[m + "PopupDelay"], b = parseInt(a, 10);
              I.popupDelay = isNaN(b) ? o.popupDelay : b
            }

            function z() {
              var a = d[m + "Trigger"];
              M(), G = p(a), "none" !== G.show && G.show.forEach(function (a, c) {
                a === G.hide[c] ? b[0].addEventListener(a, j) : a && (b[0].addEventListener(a, n), b[0].addEventListener(G.hide[c], q))
              })
            }

            var A, B, C, D, E, F = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, G = p(void 0), H = angular.isDefined(d[m + "Enable"]), I = a.$new(!0), J = !1, K = angular.isDefined(d[m + "IsOpen"]) ? l(d[m + "IsOpen"]) : !1, L = function () {
              A && (E || (E = g(function () {
                A.css({top: 0, left: 0, width: "auto", height: "auto"});
                var a = i.position(A), c = i.positionElements(b, A, I.placement, F);
                c.top += "px", c.left += "px", c.width = a.width + "px", c.height = a.height + "px", A.css(c), E = null
              }, 0, !1)))
            };
            I.origScope = a, I.isOpen = !1, I.contentExp = function () {
              return a.$eval(d[e])
            }, o.useContentExp || d.$observe(e, function (a) {
              I.content = a, !a && I.isOpen ? s() : L()
            }), d.$observe("disabled", function (a) {
              D && a && (g.cancel(D), D = null), a && I.isOpen && s()
            }), d.$observe(m + "Title", function (a) {
              I.title = a, L()
            }), d.$observe(m + "Placement", function () {
              I.isOpen && (x(), L())
            }), K && a.$watch(K, function (a) {
              a !== I.isOpen && j()
            });
            var M = function () {
              G.show.forEach(function (a) {
                b.unbind(a, n)
              }), G.hide.forEach(function (a) {
                b.unbind(a, q)
              })
            };
            z();
            var N = a.$eval(d[m + "Animation"]);
            I.animation = angular.isDefined(N) ? !!N : o.animation;
            var O = a.$eval(d[m + "AppendToBody"]);
            F = angular.isDefined(O) ? O : F, F && a.$on("$locationChangeSuccess", function () {
              I.isOpen && s()
            }), a.$on("$destroy", function () {
              g.cancel(C), g.cancel(D), g.cancel(E), M(), u(), I = null
            })
          }
        }
      }
    }
  }]
}).directive("tooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function (a, b, c, d) {
  return {
    link: function (e, f, g) {
      var h, i, j, k = e.$eval(g.tooltipTemplateTranscludeScope), l = 0, m = function () {
        i && (i.remove(), i = null), h && (h.$destroy(), h = null), j && (a.leave(j).then(function () {
          i = null
        }), i = j, j = null)
      };
      e.$watch(b.parseAsResourceUrl(g.tooltipTemplateTransclude), function (b) {
        var g = ++l;
        b ? (d(b, !0).then(function (d) {
          if (g === l) {
            var e = k.$new(), i = d, n = c(i)(e, function (b) {
              m(), a.enter(b, f)
            });
            h = e, j = n, h.$emit("$includeContentLoaded", b)
          }
        }, function () {
          g === l && (m(), e.$emit("$includeContentError", b))
        }), e.$emit("$includeContentRequested", b)) : m()
      }), e.$on("$destroy", m)
    }
  }
}]).directive("tooltipClasses", function () {
  return {
    restrict: "A", link: function (a, b, c) {
      a.placement && b.addClass(a.placement), a.popupClass && b.addClass(a.popupClass), a.animation() && b.addClass(c.tooltipAnimationClass)
    }
  }
}).directive("tooltipPopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
    templateUrl: "template/tooltip/tooltip-popup.html"
  }
}).directive("tooltip", ["$tooltip", function (a) {
  return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipTemplatePopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&", originScope: "&"},
    templateUrl: "template/tooltip/tooltip-template-popup.html"
  }
}).directive("tooltipTemplate", ["$tooltip", function (a) {
  return a("tooltipTemplate", "tooltip", "mouseenter", {useContentExp: !0})
}]).directive("tooltipHtmlPopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
    templateUrl: "template/tooltip/tooltip-html-popup.html"
  }
}).directive("tooltipHtml", ["$tooltip", function (a) {
  return a("tooltipHtml", "tooltip", "mouseenter", {useContentExp: !0})
}]).directive("tooltipHtmlUnsafePopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
    templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
  }
}).value("tooltipHtmlUnsafeSuppressDeprecated", !1).directive("tooltipHtmlUnsafe", ["$tooltip", "tooltipHtmlUnsafeSuppressDeprecated", "$log", function (a, b, c) {
  return b || c.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."), a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {
      title: "@",
      contentExp: "&",
      placement: "@",
      popupClass: "@",
      animation: "&",
      isOpen: "&",
      originScope: "&"
    },
    templateUrl: "template/popover/popover-template.html"
  }
}).directive("popoverTemplate", ["$tooltip", function (a) {
  return a("popoverTemplate", "popover", "click", {useContentExp: !0})
}]).directive("popoverHtmlPopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {contentExp: "&", title: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
    templateUrl: "template/popover/popover-html.html"
  }
}).directive("popoverHtml", ["$tooltip", function (a) {
  return a("popoverHtml", "popover", "click", {useContentExp: !0})
}]).directive("popoverPopup", function () {
  return {
    restrict: "EA",
    replace: !0,
    scope: {title: "@", content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
    templateUrl: "template/popover/popover.html"
  }
}).directive("popover", ["$tooltip", function (a) {
  return a("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
  animate: !0,
  max: 100
}).value("$progressSuppressWarning", !1).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function (a, b, c) {
  var d = this, e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
  this.bars = [], a.max = angular.isDefined(a.max) ? a.max : c.max, this.addBar = function (b, c) {
    e || c.css({transition: "none"}), this.bars.push(b), b.max = a.max, b.$watch("value", function (a) {
      b.recalculatePercentage()
    }), b.recalculatePercentage = function () {
      b.percent = +(100 * b.value / b.max).toFixed(2);
      var a = d.bars.reduce(function (a, b) {
        return a + b.percent
      }, 0);
      a > 100 && (b.percent -= a - 100)
    }, b.$on("$destroy", function () {
      c = null, d.removeBar(b)
    })
  }, this.removeBar = function (a) {
    this.bars.splice(this.bars.indexOf(a), 1)
  }, a.$watch("max", function (b) {
    d.bars.forEach(function (b) {
      b.max = a.max, b.recalculatePercentage()
    })
  })
}]).directive("uibProgress", function () {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    controller: "ProgressController",
    require: "uibProgress",
    scope: {max: "=?"},
    templateUrl: "template/progressbar/progress.html"
  }
}).directive("progress", ["$log", "$progressSuppressWarning", function (a, b) {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    controller: "ProgressController",
    require: "progress",
    scope: {max: "=?"},
    templateUrl: "template/progressbar/progress.html",
    link: function () {
      b && a.warn("progress is now deprecated. Use uib-progress instead")
    }
  }
}]).directive("uibBar", function () {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    require: "^uibProgress",
    scope: {value: "=", type: "@"},
    templateUrl: "template/progressbar/bar.html",
    link: function (a, b, c, d) {
      d.addBar(a, b)
    }
  }
}).directive("bar", ["$log", "$progressSuppressWarning", function (a, b) {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    require: "^progress",
    scope: {value: "=", type: "@"},
    templateUrl: "template/progressbar/bar.html",
    link: function (c, d, e, f) {
      b && a.warn("bar is now deprecated. Use uib-bar instead"), f.addBar(c, d)
    }
  }
}]).directive("progressbar", function () {
  return {
    restrict: "EA",
    replace: !0,
    transclude: !0,
    controller: "ProgressController",
    scope: {value: "=", max: "=?", type: "@"},
    templateUrl: "template/progressbar/progressbar.html",
    link: function (a, b, c, d) {
      d.addBar(a, angular.element(b.children()[0]))
    }
  }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
  max: 5,
  stateOn: null,
  stateOff: null,
  titles: ["one", "two", "three", "four", "five"]
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function (a, b, c) {
  var d = {$setViewValue: angular.noop};
  this.init = function (e) {
    d = e, d.$render = this.render, d.$formatters.push(function (a) {
      return angular.isNumber(a) && a << 0 !== a && (a = Math.round(a)), a
    }), this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
    var f = angular.isDefined(b.titles) ? a.$parent.$eval(b.titles) : c.titles;
    this.titles = angular.isArray(f) && f.length > 0 ? f : c.titles;
    var g = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
    a.range = this.buildTemplateObjects(g)
  }, this.buildTemplateObjects = function (a) {
    for (var b = 0, c = a.length; c > b; b++)a[b] = angular.extend({index: b}, {
      stateOn: this.stateOn,
      stateOff: this.stateOff,
      title: this.getTitle(b)
    }, a[b]);
    return a
  }, this.getTitle = function (a) {
    return a >= this.titles.length ? a + 1 : this.titles[a]
  }, a.rate = function (b) {
    !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(d.$viewValue === b ? 0 : b), d.$render())
  }, a.enter = function (b) {
    a.readonly || (a.value = b), a.onHover({value: b})
  }, a.reset = function () {
    a.value = d.$viewValue, a.onLeave()
  }, a.onKeydown = function (b) {
    /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
  }, this.render = function () {
    a.value = d.$viewValue
  }
}]).directive("rating", function () {
  return {
    restrict: "EA",
    require: ["rating", "ngModel"],
    scope: {readonly: "=?", onHover: "&", onLeave: "&"},
    controller: "RatingController",
    templateUrl: "template/rating/rating.html",
    replace: !0,
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      e.init(f)
    }
  }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (a) {
  var b = this, c = b.tabs = a.tabs = [];
  b.select = function (a) {
    angular.forEach(c, function (b) {
      b.active && b !== a && (b.active = !1, b.onDeselect(), a.selectCalled = !1)
    }), a.active = !0, a.selectCalled || (a.onSelect(), a.selectCalled = !0)
  }, b.addTab = function (a) {
    c.push(a), 1 === c.length && a.active !== !1 ? a.active = !0 : a.active ? b.select(a) : a.active = !1
  }, b.removeTab = function (a) {
    var e = c.indexOf(a);
    if (a.active && c.length > 1 && !d) {
      var f = e == c.length - 1 ? e - 1 : e + 1;
      b.select(c[f])
    }
    c.splice(e, 1)
  };
  var d;
  a.$on("$destroy", function () {
    d = !0
  })
}]).directive("tabset", function () {
  return {
    restrict: "EA",
    transclude: !0,
    replace: !0,
    scope: {type: "@"},
    controller: "TabsetController",
    templateUrl: "template/tabs/tabset.html",
    link: function (a, b, c) {
      a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
    }
  }
}).directive("tab", ["$parse", "$log", function (a, b) {
  return {
    require: "^tabset",
    restrict: "EA",
    replace: !0,
    templateUrl: "template/tabs/tab.html",
    transclude: !0,
    scope: {active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect"},
    controller: function () {
    },
    link: function (c, d, e, f, g) {
      c.$watch("active", function (a) {
        a && f.select(c)
      }), c.disabled = !1, e.disable && c.$parent.$watch(a(e.disable), function (a) {
        c.disabled = !!a
      }), e.disabled && (b.warn('Use of "disabled" attribute has been deprecated, please use "disable"'), c.$parent.$watch(a(e.disabled), function (a) {
        c.disabled = !!a
      })), c.select = function () {
        c.disabled || (c.active = !0)
      }, f.addTab(c), c.$on("$destroy", function () {
        f.removeTab(c)
      }), c.$transcludeFn = g
    }
  }
}]).directive("tabHeadingTransclude", function () {
  return {
    restrict: "A", require: "^tab", link: function (a, b, c, d) {
      a.$watch("headingElement", function (a) {
        a && (b.html(""), b.append(a))
      })
    }
  }
}).directive("tabContentTransclude", function () {
  function a(a) {
    return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || a.hasAttribute("x-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase() || "x-tab-heading" === a.tagName.toLowerCase())
  }

  return {
    restrict: "A", require: "^tabset", link: function (b, c, d) {
      var e = b.$eval(d.tabContentTransclude);
      e.$transcludeFn(e.$parent, function (b) {
        angular.forEach(b, function (b) {
          a(b) ? e.headingElement = b : c.append(b)
        })
      })
    }
  }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: !0,
  meridians: null,
  readonlyInput: !1,
  mousewheel: !0,
  arrowkeys: !0,
  showSpinners: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function (a, b, c, d, e, f) {
  function g() {
    var b = parseInt(a.hours, 10), c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
    return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === q[1] && (b += 12)), b) : void 0
  }

  function h() {
    var b = parseInt(a.minutes, 10);
    return b >= 0 && 60 > b ? b : void 0
  }

  function i(a) {
    return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a.toString()
  }

  function j(a) {
    k(), p.$setViewValue(new Date(o)), l(a)
  }

  function k() {
    p.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
  }

  function l(b) {
    var c = o.getHours(), d = o.getMinutes();
    a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), "m" !== b && (a.minutes = i(d)), a.meridian = o.getHours() < 12 ? q[0] : q[1]
  }

  function m(a, b) {
    var c = new Date(a.getTime() + 6e4 * b), d = new Date(a);
    return d.setHours(c.getHours(), c.getMinutes()), d
  }

  function n(a) {
    o = m(o, a), j()
  }

  var o = new Date, p = {$setViewValue: angular.noop}, q = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
  this.init = function (c, d) {
    p = c, p.$render = this.render, p.$formatters.unshift(function (a) {
      return a ? new Date(a) : null
    });
    var e = d.eq(0), g = d.eq(1), h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
    h && this.setupMousewheelEvents(e, g);
    var i = angular.isDefined(b.arrowkeys) ? a.$parent.$eval(b.arrowkeys) : f.arrowkeys;
    i && this.setupArrowkeyEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
  };
  var r = f.hourStep;
  b.hourStep && a.$parent.$watch(c(b.hourStep), function (a) {
    r = parseInt(a, 10)
  });
  var s = f.minuteStep;
  b.minuteStep && a.$parent.$watch(c(b.minuteStep), function (a) {
    s = parseInt(a, 10)
  });
  var t;
  a.$parent.$watch(c(b.min), function (a) {
    var b = new Date(a);
    t = isNaN(b) ? void 0 : b
  });
  var u;
  a.$parent.$watch(c(b.max), function (a) {
    var b = new Date(a);
    u = isNaN(b) ? void 0 : b
  }), a.noIncrementHours = function () {
    var a = m(o, 60 * r);
    return a > u || o > a && t > a
  }, a.noDecrementHours = function () {
    var a = m(o, 60 * -r);
    return t > a || a > o && a > u
  }, a.noIncrementMinutes = function () {
    var a = m(o, s);
    return a > u || o > a && t > a
  }, a.noDecrementMinutes = function () {
    var a = m(o, -s);
    return t > a || a > o && a > u
  }, a.noToggleMeridian = function () {
    return o.getHours() < 13 ? m(o, 720) > u : m(o, -720) < t
  }, a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function (b) {
    if (a.showMeridian = !!b, p.$error.time) {
      var c = g(), d = h();
      angular.isDefined(c) && angular.isDefined(d) && (o.setHours(c), j())
    } else l()
  }), this.setupMousewheelEvents = function (b, c) {
    var d = function (a) {
      a.originalEvent && (a = a.originalEvent);
      var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
      return a.detail || b > 0
    };
    b.bind("mousewheel wheel", function (b) {
      a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
    }), c.bind("mousewheel wheel", function (b) {
      a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
    })
  }, this.setupArrowkeyEvents = function (b, c) {
    b.bind("keydown", function (b) {
      38 === b.which ? (b.preventDefault(), a.incrementHours(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementHours(), a.$apply())
    }), c.bind("keydown", function (b) {
      38 === b.which ? (b.preventDefault(), a.incrementMinutes(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementMinutes(), a.$apply())
    })
  }, this.setupInputEvents = function (b, c) {
    if (a.readonlyInput)return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
    var d = function (b, c) {
      p.$setViewValue(null), p.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
    };
    a.updateHours = function () {
      var a = g(), b = h();
      angular.isDefined(a) && angular.isDefined(b) ? (o.setHours(a), t > o || o > u ? d(!0) : j("h")) : d(!0)
    }, b.bind("blur", function (b) {
      !a.invalidHours && a.hours < 10 && a.$apply(function () {
        a.hours = i(a.hours)
      })
    }), a.updateMinutes = function () {
      var a = h(), b = g();
      angular.isDefined(a) && angular.isDefined(b) ? (o.setMinutes(a), t > o || o > u ? d(void 0, !0) : j("m")) : d(void 0, !0)
    }, c.bind("blur", function (b) {
      !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
        a.minutes = i(a.minutes)
      })
    })
  }, this.render = function () {
    var b = p.$viewValue;
    isNaN(b) ? (p.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (b && (o = b), t > o || o > u ? (p.$setValidity("time", !1), a.invalidHours = !0, a.invalidMinutes = !0) : k(), l())
  }, a.showSpinners = angular.isDefined(b.showSpinners) ? a.$parent.$eval(b.showSpinners) : f.showSpinners, a.incrementHours = function () {
    a.noIncrementHours() || n(60 * r)
  }, a.decrementHours = function () {
    a.noDecrementHours() || n(60 * -r)
  }, a.incrementMinutes = function () {
    a.noIncrementMinutes() || n(s)
  }, a.decrementMinutes = function () {
    a.noDecrementMinutes() || n(-s)
  }, a.toggleMeridian = function () {
    a.noToggleMeridian() || n(720 * (o.getHours() < 12 ? 1 : -1))
  }
}]).directive("timepicker", function () {
  return {
    restrict: "EA",
    require: ["timepicker", "?^ngModel"],
    controller: "TimepickerController",
    controllerAs: "timepicker",
    replace: !0,
    scope: {},
    templateUrl: function (a, b) {
      return b.templateUrl || "template/timepicker/timepicker.html"
    },
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f, b.find("input"))
    }
  }
}), angular.module("ui.bootstrap.transition", []).value("$transitionSuppressDeprecated", !1).factory("$transition", ["$q", "$timeout", "$rootScope", "$log", "$transitionSuppressDeprecated", function (a, b, c, d, e) {
  function f(a) {
    for (var b in a)if (void 0 !== h.style[b])return a[b]
  }

  e || d.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");
  var g = function (d, e, f) {
    f = f || {};
    var h = a.defer(), i = g[f.animation ? "animationEndEventName" : "transitionEndEventName"], j = function (a) {
      c.$apply(function () {
        d.unbind(i, j), h.resolve(d)
      })
    };
    return i && d.bind(i, j), b(function () {
      angular.isString(e) ? d.addClass(e) : angular.isFunction(e) ? e(d) : angular.isObject(e) && d.css(e), i || h.resolve(d)
    }), h.promise.cancel = function () {
      i && d.unbind(i, j), h.reject("Transition cancelled")
    }, h.promise
  }, h = document.createElement("trans"), i = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    transition: "transitionend"
  }, j = {
    WebkitTransition: "webkitAnimationEnd",
    MozTransition: "animationend",
    OTransition: "oAnimationEnd",
    transition: "animationend"
  };
  return g.transitionEndEventName = f(i), g.animationEndEventName = f(j), g
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position"]).factory("typeaheadParser", ["$parse", function (a) {
  var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
  return {
    parse: function (c) {
      var d = c.match(b);
      if (!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
      return {itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1])}
    }
  }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$position", "typeaheadParser", function (a, b, c, d, e, f, g, h, i) {
  var j = [9, 13, 27, 38, 40], k = 200;
  return {
    require: ["ngModel", "^?ngModelOptions"], link: function (l, m, n, o) {
      function p() {
        K.moveInProgress || (K.moveInProgress = !0, K.$digest()), S && d.cancel(S), S = d(function () {
          K.matches.length && q(), K.moveInProgress = !1, K.$digest()
        }, k)
      }

      function q() {
        K.position = D ? h.offset(m) : h.position(m), K.position.top += m.prop("offsetHeight")
      }

      var r = o[0], s = o[1], t = l.$eval(n.typeaheadMinLength);
      t || 0 === t || (t = 1);
      var u, v, w = l.$eval(n.typeaheadWaitMs) || 0, x = l.$eval(n.typeaheadEditable) !== !1, y = b(n.typeaheadLoading).assign || angular.noop, z = b(n.typeaheadOnSelect), A = angular.isDefined(n.typeaheadSelectOnBlur) ? l.$eval(n.typeaheadSelectOnBlur) : !1, B = b(n.typeaheadNoResults).assign || angular.noop, C = n.typeaheadInputFormatter ? b(n.typeaheadInputFormatter) : void 0, D = n.typeaheadAppendToBody ? l.$eval(n.typeaheadAppendToBody) : !1, E = l.$eval(n.typeaheadFocusFirst) !== !1, F = n.typeaheadSelectOnExact ? l.$eval(n.typeaheadSelectOnExact) : !1, G = b(n.ngModel), H = b(n.ngModel + "($$$p)"), I = function (a, b) {
        return angular.isFunction(G(l)) && s && s.$options && s.$options.getterSetter ? H(a, {$$$p: b}) : G.assign(a, b)
      }, J = i.parse(n.typeahead), K = l.$new(), L = l.$on("$destroy", function () {
        K.$destroy()
      });
      K.$on("$destroy", L);
      var M = "typeahead-" + K.$id + "-" + Math.floor(1e4 * Math.random());
      m.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": M});
      var N = angular.element("<div typeahead-popup></div>");
      N.attr({
        id: M,
        matches: "matches",
        active: "activeIdx",
        select: "select(activeIdx)",
        "move-in-progress": "moveInProgress",
        query: "query",
        position: "position"
      }), angular.isDefined(n.typeaheadTemplateUrl) && N.attr("template-url", n.typeaheadTemplateUrl), angular.isDefined(n.typeaheadPopupTemplateUrl) && N.attr("popup-template-url", n.typeaheadPopupTemplateUrl);
      var O = function () {
        K.matches = [], K.activeIdx = -1, m.attr("aria-expanded", !1)
      }, P = function (a) {
        return M + "-option-" + a
      };
      K.$watch("activeIdx", function (a) {
        0 > a ? m.removeAttr("aria-activedescendant") : m.attr("aria-activedescendant", P(a))
      });
      var Q = function (a, b) {
        return K.matches.length > b && a ? a.toUpperCase() === K.matches[b].label.toUpperCase() : !1
      }, R = function (a) {
        var b = {$viewValue: a};
        y(l, !0), B(l, !1), c.when(J.source(l, b)).then(function (c) {
          var d = a === r.$viewValue;
          if (d && u)if (c && c.length > 0) {
            K.activeIdx = E ? 0 : -1, B(l, !1), K.matches.length = 0;
            for (var e = 0; e < c.length; e++)b[J.itemName] = c[e], K.matches.push({
              id: P(e),
              label: J.viewMapper(K, b),
              model: c[e]
            });
            K.query = a, q(), m.attr("aria-expanded", !0), F && 1 === K.matches.length && Q(a, 0) && K.select(0)
          } else O(), B(l, !0);
          d && y(l, !1)
        }, function () {
          O(), y(l, !1), B(l, !0)
        })
      };
      D && (angular.element(f).bind("resize", p), e.find("body").bind("scroll", p));
      var S;
      K.moveInProgress = !1, O(), K.query = void 0;
      var T, U = function (a) {
        T = d(function () {
          R(a)
        }, w)
      }, V = function () {
        T && d.cancel(T)
      };
      r.$parsers.unshift(function (a) {
        return u = !0, 0 === t || a && a.length >= t ? w > 0 ? (V(), U(a)) : R(a) : (y(l, !1), V(), O()), x ? a : a ? void r.$setValidity("editable", !1) : (r.$setValidity("editable", !0), null)
      }), r.$formatters.push(function (a) {
        var b, c, d = {};
        return x || r.$setValidity("editable", !0), C ? (d.$model = a, C(l, d)) : (d[J.itemName] = a, b = J.viewMapper(l, d), d[J.itemName] = void 0, c = J.viewMapper(l, d), b !== c ? b : a)
      }), K.select = function (a) {
        var b, c, e = {};
        v = !0, e[J.itemName] = c = K.matches[a].model, b = J.modelMapper(l, e), I(l, b), r.$setValidity("editable", !0), r.$setValidity("parse", !0), z(l, {
          $item: c,
          $model: b,
          $label: J.viewMapper(l, e)
        }), O(), K.$eval(n.typeaheadFocusOnSelect) !== !1 && d(function () {
          m[0].focus()
        }, 0, !1)
      }, m.bind("keydown", function (a) {
        if (0 !== K.matches.length && -1 !== j.indexOf(a.which)) {
          if (-1 === K.activeIdx && (9 === a.which || 13 === a.which))return O(), void K.$digest();
          a.preventDefault(), 40 === a.which ? (K.activeIdx = (K.activeIdx + 1) % K.matches.length, K.$digest()) : 38 === a.which ? (K.activeIdx = (K.activeIdx > 0 ? K.activeIdx : K.matches.length) - 1, K.$digest()) : 13 === a.which || 9 === a.which ? K.$apply(function () {
            K.select(K.activeIdx)
          }) : 27 === a.which && (a.stopPropagation(), O(), K.$digest())
        }
      }), m.bind("blur", function () {
        A && K.matches.length && -1 !== K.activeIdx && !v && (v = !0, K.$apply(function () {
          K.select(K.activeIdx)
        })), u = !1, v = !1
      });
      var W = function (a) {
        m[0] !== a.target && 3 !== a.which && 0 !== K.matches.length && (O(), g.$$phase || K.$digest())
      };
      e.bind("click", W), l.$on("$destroy", function () {
        e.unbind("click", W), D && X.remove(), N.remove()
      });
      var X = a(N)(K);
      D ? e.find("body").append(X) : m.after(X)
    }
  }
}]).directive("typeaheadPopup", function () {
  return {
    restrict: "EA",
    scope: {matches: "=", query: "=", active: "=", position: "&", moveInProgress: "=", select: "&"},
    replace: !0,
    templateUrl: function (a, b) {
      return b.popupTemplateUrl || "template/typeahead/typeahead-popup.html"
    },
    link: function (a, b, c) {
      a.templateUrl = c.templateUrl, a.isOpen = function () {
        return a.matches.length > 0
      }, a.isActive = function (b) {
        return a.active == b
      }, a.selectActive = function (b) {
        a.active = b
      }, a.selectMatch = function (b) {
        a.select({activeIdx: b})
      }
    }
  }
}).directive("typeaheadMatch", ["$templateRequest", "$compile", "$parse", function (a, b, c) {
  return {
    restrict: "EA", scope: {index: "=", match: "=", query: "="}, link: function (d, e, f) {
      var g = c(f.templateUrl)(d.$parent) || "template/typeahead/typeahead-match.html";
      a(g).then(function (a) {
        b(a.trim())(d, function (a) {
          e.replaceWith(a)
        })
      })
    }
  }
}]).filter("typeaheadHighlight", ["$sce", "$injector", "$log", function (a, b, c) {
  function d(a) {
    return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
  }

  function e(a) {
    return /<.*>/g.test(a)
  }

  var f;
  return f = b.has("$sanitize"), function (b, g) {
    return !f && e(b) && c.warn("Unsafe use of typeahead please use ngSanitize"), b = g ? ("" + b).replace(new RegExp(d(g), "gi"), "<strong>$&</strong>") : b, f || (b = a.trustAsHtml(b)), b
  }
}]), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function (a) {
  a.put("template/accordion/accordion-group.html", '<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function (a) {
  a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function (a) {
  a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close($event)">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function (a) {
  a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function (a) {
  a.put("template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function (a) {
  a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function (a) {
  a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function (a) {
  a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function (a) {
  a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function (a) {
  a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (a) {
  a.put("template/modal/backdrop.html", '<div class="modal-backdrop"\n     modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function (a) {
  a.put("template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n    modal-in-class="in"\n	ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (a) {
  a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (a) {
  a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')
}]), angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function (a) {
  a.put("template/tooltip/tooltip-html-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (a) {
  a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (a) {
  a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function (a) {
  a.put("template/tooltip/tooltip-template-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
}]), angular.module("template/popover/popover-html.html", []).run(["$templateCache", function (a) {
  a.put("template/popover/popover-html.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')
}]), angular.module("template/popover/popover-template.html", []).run(["$templateCache", function (a) {
  a.put("template/popover/popover-template.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function (a) {
  a.put("template/popover/popover.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function (a) {
  a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function (a) {
  a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function (a) {
  a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n</div>\n')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function (a) {
  a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" ></i>\n</span>\n')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function (a) {
  a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function (a) {
  a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function (a) {
  a.put("template/timepicker/timepicker.html", '<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (a) {
  a.put("template/typeahead/typeahead-match.html", '<a href tabindex="-1" ng-bind-html="match.label | typeaheadHighlight:query"></a>\n')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (a) {
  a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), function () {
  function a(a, b, c) {
    for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e;)if (a[d] === b)return d;
    return -1
  }

  function b(b, c) {
    var d = typeof c;
    if (b = b.cache, "boolean" == d || null == c)return b[c] ? 0 : -1;
    "number" != d && "string" != d && (d = "object");
    var e = "number" == d ? c : u + c;
    return b = (b = b[d]) && b[e], "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1
  }

  function c(a) {
    var b = this.cache, c = typeof a;
    if ("boolean" == c || null == a)b[a] = !0; else {
      "number" != c && "string" != c && (c = "object");
      var d = "number" == c ? a : u + a, e = b[c] || (b[c] = {});
      "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
    }
  }

  function d(a) {
    return a.charCodeAt(0)
  }

  function e(a, b) {
    for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f;) {
      var g = c[e], h = d[e];
      if (g !== h) {
        if (g > h || "undefined" == typeof g)return 1;
        if (h > g || "undefined" == typeof h)return -1
      }
    }
    return a.index - b.index
  }

  function f(a) {
    var b = -1, d = a.length, e = a[0], f = a[d / 2 | 0], g = a[d - 1];
    if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g)return !1;
    var h = i();
    h["false"] = h["null"] = h["true"] = h.undefined = !1;
    var j = i();
    for (j.array = a, j.cache = h, j.push = c; ++b < d;)j.push(a[b]);
    return j
  }

  function g(a) {
    return "\\" + _[a]
  }

  function h() {
    return q.pop() || []
  }

  function i() {
    return r.pop() || {
        array: null,
        cache: null,
        criteria: null,
        "false": !1,
        index: 0,
        "null": !1,
        number: null,
        object: null,
        push: null,
        string: null,
        "true": !1,
        undefined: !1,
        value: null
      }
  }

  function j(a) {
    return "function" != typeof a.toString && "string" == typeof(a + "")
  }

  function l(a) {
    a.length = 0, q.length < w && q.push(a)
  }

  function m(a) {
    var b = a.cache;
    b && m(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, r.length < w && r.push(a)
  }

  function n(a, b, c) {
    b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
    for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;)f[d] = a[b + d];
    return f
  }

  function o(c) {
    function q(a) {
      return a && "object" == typeof a && !kd(a) && Rc.call(a, "__wrapped__") ? a : new r(a)
    }

    function r(a, b) {
      this.__chain__ = !!b, this.__wrapped__ = a
    }

    function w(a) {
      function b() {
        if (d) {
          var a = n(d);
          Sc.apply(a, arguments)
        }
        if (this instanceof b) {
          var f = ba(c.prototype), g = c.apply(f, a || arguments);
          return La(g) ? g : f
        }
        return c.apply(e, a || arguments)
      }

      var c = a[0], d = a[2], e = a[4];
      return jd(b, a), b
    }

    function _(a, b, c, d, e) {
      if (c) {
        var f = c(a);
        if ("undefined" != typeof f)return f
      }
      var g = La(a);
      if (!g)return a;
      var i = Kc.call(a);
      if (!W[i] || !hd.nodeClass && j(a))return a;
      var k = fd[i];
      switch (i) {
        case O:
        case P:
          return new k(+a);
        case S:
        case V:
          return new k(a);
        case U:
          return f = k(a.source, C.exec(a)), f.lastIndex = a.lastIndex, f
      }
      var m = kd(a);
      if (b) {
        var o = !d;
        d || (d = h()), e || (e = h());
        for (var p = d.length; p--;)if (d[p] == a)return e[p];
        f = m ? k(a.length) : {}
      } else f = m ? n(a) : vd({}, a);
      return m && (Rc.call(a, "index") && (f.index = a.index), Rc.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (m ? ud : yd)(a, function (a, g) {
        f[g] = _(a, b, c, d, e)
      }), o && (l(d), l(e)), f) : f
    }

    function ba(a, b) {
      return La(a) ? Yc(a) : {}
    }

    function ca(a, b, c) {
      if ("function" != typeof a)return ec;
      if ("undefined" == typeof b || !("prototype" in a))return a;
      var d = a.__bindData__;
      if ("undefined" == typeof d && (hd.funcNames && (d = !a.name), d = d || !hd.funcDecomp, !d)) {
        var e = Pc.call(a);
        hd.funcNames || (d = !D.test(e)), d || (d = H.test(e), jd(a, d))
      }
      if (d === !1 || d !== !0 && 1 & d[1])return a;
      switch (c) {
        case 1:
          return function (c) {
            return a.call(b, c)
          };
        case 2:
          return function (c, d) {
            return a.call(b, c, d)
          };
        case 3:
          return function (c, d, e) {
            return a.call(b, c, d, e)
          };
        case 4:
          return function (c, d, e, f) {
            return a.call(b, c, d, e, f)
          }
      }
      return Pb(a, b)
    }

    function da(a) {
      function b() {
        var a = i ? g : this;
        if (e) {
          var o = n(e);
          Sc.apply(o, arguments)
        }
        if ((f || k) && (o || (o = n(arguments)), f && Sc.apply(o, f), k && o.length < h))return d |= 16, da([c, l ? d : -4 & d, o, null, g, h]);
        if (o || (o = arguments), j && (c = a[m]), this instanceof b) {
          a = ba(c.prototype);
          var p = c.apply(a, o);
          return La(p) ? p : a
        }
        return c.apply(a, o)
      }

      var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], i = 1 & d, j = 2 & d, k = 4 & d, l = 8 & d, m = c;
      return jd(b, a), b
    }

    function ea(c, d) {
      var e = -1, g = pa(), h = c ? c.length : 0, i = h >= v && g === a, j = [];
      if (i) {
        var k = f(d);
        k ? (g = b, d = k) : i = !1
      }
      for (; ++e < h;) {
        var l = c[e];
        g(d, l) < 0 && j.push(l)
      }
      return i && m(d), j
    }

    function ga(a, b, c, d) {
      for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f;) {
        var h = a[e];
        if (h && "object" == typeof h && "number" == typeof h.length && (kd(h) || ta(h))) {
          b || (h = ga(h, b, c));
          var i = -1, j = h.length, k = g.length;
          for (g.length += j; ++i < j;)g[k++] = h[i]
        } else c || g.push(h)
      }
      return g
    }

    function ha(a, b, c, d, e, f) {
      if (c) {
        var g = c(a, b);
        if ("undefined" != typeof g)return !!g
      }
      if (a === b)return 0 !== a || 1 / a == 1 / b;
      var i = typeof a, k = typeof b;
      if (!(a !== a || a && $[i] || b && $[k]))return !1;
      if (null == a || null == b)return a === b;
      var m = Kc.call(a), n = Kc.call(b);
      if (m == M && (m = T), n == M && (n = T), m != n)return !1;
      switch (m) {
        case O:
        case P:
          return +a == +b;
        case S:
          return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
        case U:
        case V:
          return a == Dc(b)
      }
      var o = m == N;
      if (!o) {
        var p = Rc.call(a, "__wrapped__"), q = Rc.call(b, "__wrapped__");
        if (p || q)return ha(p ? a.__wrapped__ : a, q ? b.__wrapped__ : b, c, d, e, f);
        if (m != T || !hd.nodeClass && (j(a) || j(b)))return !1;
        var r = !hd.argsObject && ta(a) ? Bc : a.constructor, s = !hd.argsObject && ta(b) ? Bc : b.constructor;
        if (r != s && !(Ka(r) && r instanceof r && Ka(s) && s instanceof s) && "constructor" in a && "constructor" in b)return !1
      }
      var t = !e;
      e || (e = h()), f || (f = h());
      for (var u = e.length; u--;)if (e[u] == a)return f[u] == b;
      var v = 0;
      if (g = !0, e.push(a), f.push(b), o) {
        if (u = a.length, v = b.length, g = v == u, g || d)for (; v--;) {
          var w = u, x = b[v];
          if (d)for (; w-- && !(g = ha(a[w], x, c, d, e, f));); else if (!(g = ha(a[v], x, c, d, e, f)))break
        }
      } else xd(b, function (b, h, i) {
        return Rc.call(i, h) ? (v++, g = Rc.call(a, h) && ha(a[h], b, c, d, e, f)) : void 0
      }), g && !d && xd(a, function (a, b, c) {
        return Rc.call(c, b) ? g = --v > -1 : void 0
      });
      return e.pop(), f.pop(), t && (l(e), l(f)), g
    }

    function ia(a, b, c, d, e) {
      (kd(b) ? db : yd)(b, function (b, f) {
        var g, h, i = b, j = a[f];
        if (b && ((h = kd(b)) || zd(b))) {
          for (var k = d.length; k--;)if (g = d[k] == b) {
            j = e[k];
            break
          }
          if (!g) {
            var l;
            c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)), l || (j = h ? kd(j) ? j : [] : zd(j) ? j : {}), d.push(b), e.push(j), l || ia(j, b, c, d, e)
          }
        } else c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
        a[f] = j
      })
    }

    function ja(a, b) {
      return a + Oc(ed() * (b - a + 1))
    }

    function ka(c, d, e) {
      var g = -1, i = pa(), j = c ? c.length : 0, k = [], n = !d && j >= v && i === a, o = e || n ? h() : k;
      if (n) {
        var p = f(o);
        i = b, o = p
      }
      for (; ++g < j;) {
        var q = c[g], r = e ? e(q, g, c) : q;
        (d ? !g || o[o.length - 1] !== r : i(o, r) < 0) && ((e || n) && o.push(r), k.push(q))
      }
      return n ? (l(o.array), m(o)) : e && l(o), k
    }

    function la(a) {
      return function (b, c, d) {
        var e = {};
        if (c = q.createCallback(c, d, 3), kd(b))for (var f = -1, g = b.length; ++f < g;) {
          var h = b[f];
          a(e, h, c(h, f, b), b)
        } else ud(b, function (b, d, f) {
          a(e, b, c(b, d, f), f)
        });
        return e
      }
    }

    function ma(a, b, c, d, e, f) {
      var g = 1 & b, h = 2 & b, i = 4 & b, j = 16 & b, k = 32 & b;
      if (!h && !Ka(a))throw new Ec;
      j && !c.length && (b &= -17, j = c = !1), k && !d.length && (b &= -33, k = d = !1);
      var l = a && a.__bindData__;
      if (l && l !== !0)return l = n(l), l[2] && (l[2] = n(l[2])), l[3] && (l[3] = n(l[3])), !g || 1 & l[1] || (l[4] = e), !g && 1 & l[1] && (b |= 8), !i || 4 & l[1] || (l[5] = f), j && Sc.apply(l[2] || (l[2] = []), c), k && Wc.apply(l[3] || (l[3] = []), d), l[1] |= b, ma.apply(null, l);
      var m = 1 == b || 17 === b ? w : da;
      return m([a, b, c, d, e, f])
    }

    function na() {
      Z.shadowedProps = K, Z.array = Z.bottom = Z.loop = Z.top = "", Z.init = "iterable", Z.useHas = !0;
      for (var a, b = 0; a = arguments[b]; b++)for (var c in a)Z[c] = a[c];
      var d = Z.args;
      Z.firstArg = /^[^,]+/.exec(d)[0];
      var e = yc("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + d + ") {\n" + id(Z) + "\n}");
      return e(ca, Q, Gc, Rc, t, ta, kd, Qa, Z.keys, Hc, $, gd, V, Ic, Kc)
    }

    function oa(a) {
      return qd[a]
    }

    function pa() {
      var b = (b = q.indexOf) === yb ? a : b;
      return b
    }

    function qa(a) {
      return "function" == typeof a && Lc.test(a)
    }

    function ra(a) {
      var b, c;
      return !a || Kc.call(a) != T || (b = a.constructor, Ka(b) && !(b instanceof b)) || !hd.argsClass && ta(a) || !hd.nodeClass && j(a) ? !1 : hd.ownLast ? (xd(a, function (a, b, d) {
        return c = Rc.call(d, b), !1
      }), c !== !1) : (xd(a, function (a, b) {
        c = b
      }), "undefined" == typeof c || Rc.call(a, c))
    }

    function sa(a) {
      return rd[a]
    }

    function ta(a) {
      return a && "object" == typeof a && "number" == typeof a.length && Kc.call(a) == M || !1
    }

    function ua(a, b, c, d) {
      return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), _(a, b, "function" == typeof c && ca(c, d, 1))
    }

    function va(a, b, c) {
      return _(a, !0, "function" == typeof b && ca(b, c, 1))
    }

    function wa(a, b) {
      var c = ba(a);
      return b ? vd(c, b) : c
    }

    function xa(a, b, c) {
      var d;
      return b = q.createCallback(b, c, 3), yd(a, function (a, c, e) {
        return b(a, c, e) ? (d = c, !1) : void 0
      }), d
    }

    function ya(a, b, c) {
      var d;
      return b = q.createCallback(b, c, 3), Aa(a, function (a, c, e) {
        return b(a, c, e) ? (d = c, !1) : void 0
      }), d
    }

    function za(a, b, c) {
      var d = [];
      xd(a, function (a, b) {
        d.push(b, a)
      });
      var e = d.length;
      for (b = ca(b, c, 3); e-- && b(d[e--], d[e], a) !== !1;);
      return a
    }

    function Aa(a, b, c) {
      var d = md(a), e = d.length;
      for (b = ca(b, c, 3); e--;) {
        var f = d[e];
        if (b(a[f], f, a) === !1)break
      }
      return a
    }

    function Ba(a) {
      var b = [];
      return xd(a, function (a, c) {
        Ka(a) && b.push(c)
      }), b.sort()
    }

    function Ca(a, b) {
      return a ? Rc.call(a, b) : !1
    }

    function Da(a) {
      for (var b = -1, c = md(a), d = c.length, e = {}; ++b < d;) {
        var f = c[b];
        e[a[f]] = f
      }
      return e
    }

    function Ea(a) {
      return a === !0 || a === !1 || a && "object" == typeof a && Kc.call(a) == O || !1
    }

    function Fa(a) {
      return a && "object" == typeof a && Kc.call(a) == P || !1
    }

    function Ga(a) {
      return a && 1 === a.nodeType || !1
    }

    function Ha(a) {
      var b = !0;
      if (!a)return b;
      var c = Kc.call(a), d = a.length;
      return c == N || c == V || (hd.argsClass ? c == M : ta(a)) || c == T && "number" == typeof d && Ka(a.splice) ? !d : (yd(a, function () {
        return b = !1
      }), b)
    }

    function Ia(a, b, c, d) {
      return ha(a, b, "function" == typeof c && ca(c, d, 2))
    }

    function Ja(a) {
      return $c(a) && !_c(parseFloat(a))
    }

    function Ka(a) {
      return "function" == typeof a
    }

    function La(a) {
      return !(!a || !$[typeof a])
    }

    function Ma(a) {
      return Oa(a) && a != +a
    }

    function Na(a) {
      return null === a
    }

    function Oa(a) {
      return "number" == typeof a || a && "object" == typeof a && Kc.call(a) == S || !1
    }

    function Pa(a) {
      return a && $[typeof a] && Kc.call(a) == U || !1
    }

    function Qa(a) {
      return "string" == typeof a || a && "object" == typeof a && Kc.call(a) == V || !1
    }

    function Ra(a) {
      return "undefined" == typeof a
    }

    function Sa(a, b, c) {
      var d = {};
      return b = q.createCallback(b, c, 3), yd(a, function (a, c, e) {
        d[c] = b(a, c, e)
      }), d
    }

    function Ta(a) {
      var b = arguments, c = 2;
      if (!La(a))return a;
      if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2])var d = ca(b[--c - 1], b[c--], 2); else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
      for (var e = n(arguments, 1, c), f = -1, g = h(), i = h(); ++f < c;)ia(a, e[f], d, g, i);
      return l(g), l(i), a
    }

    function Ua(a, b, c) {
      var d = {};
      if ("function" != typeof b) {
        var e = [];
        xd(a, function (a, b) {
          e.push(b)
        }), e = ea(e, ga(arguments, !0, !1, 1));
        for (var f = -1, g = e.length; ++f < g;) {
          var h = e[f];
          d[h] = a[h]
        }
      } else b = q.createCallback(b, c, 3), xd(a, function (a, c, e) {
        b(a, c, e) || (d[c] = a)
      });
      return d
    }

    function Va(a) {
      for (var b = -1, c = md(a), d = c.length, e = uc(d); ++b < d;) {
        var f = c[b];
        e[b] = [f, a[f]]
      }
      return e
    }

    function Wa(a, b, c) {
      var d = {};
      if ("function" != typeof b)for (var e = -1, f = ga(arguments, !0, !1, 1), g = La(a) ? f.length : 0; ++e < g;) {
        var h = f[e];
        h in a && (d[h] = a[h])
      } else b = q.createCallback(b, c, 3), xd(a, function (a, c, e) {
        b(a, c, e) && (d[c] = a)
      });
      return d
    }

    function Xa(a, b, c, d) {
      var e = kd(a);
      if (null == c)if (e)c = []; else {
        var f = a && a.constructor, g = f && f.prototype;
        c = ba(g)
      }
      return b && (b = q.createCallback(b, d, 4), (e ? ud : yd)(a, function (a, d, e) {
        return b(c, a, d, e)
      })), c
    }

    function Ya(a) {
      for (var b = -1, c = md(a), d = c.length, e = uc(d); ++b < d;)e[b] = a[c[b]];
      return e
    }

    function Za(a) {
      var b = arguments, c = -1, d = ga(b, !0, !1, 1), e = b[2] && b[2][b[1]] === a ? 1 : d.length, f = uc(e);
      for (hd.unindexedChars && Qa(a) && (a = a.split("")); ++c < e;)f[c] = a[d[c]];
      return f
    }

    function $a(a, b, c) {
      var d = -1, e = pa(), f = a ? a.length : 0, g = !1;
      return c = (0 > c ? bd(0, f + c) : c) || 0, kd(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Qa(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : ud(a, function (a) {
        return ++d >= c ? !(g = a === b) : void 0
      }), g
    }

    function _a(a, b, c) {
      var d = !0;
      if (b = q.createCallback(b, c, 3), kd(a))for (var e = -1, f = a.length; ++e < f && (d = !!b(a[e], e, a));); else ud(a, function (a, c, e) {
        return d = !!b(a, c, e)
      });
      return d
    }

    function ab(a, b, c) {
      var d = [];
      if (b = q.createCallback(b, c, 3), kd(a))for (var e = -1, f = a.length; ++e < f;) {
        var g = a[e];
        b(g, e, a) && d.push(g)
      } else ud(a, function (a, c, e) {
        b(a, c, e) && d.push(a)
      });
      return d
    }

    function bb(a, b, c) {
      if (b = q.createCallback(b, c, 3), !kd(a)) {
        var d;
        return ud(a, function (a, c, e) {
          return b(a, c, e) ? (d = a, !1) : void 0
        }), d
      }
      for (var e = -1, f = a.length; ++e < f;) {
        var g = a[e];
        if (b(g, e, a))return g
      }
    }

    function cb(a, b, c) {
      var d;
      return b = q.createCallback(b, c, 3), eb(a, function (a, c, e) {
        return b(a, c, e) ? (d = a, !1) : void 0
      }), d
    }

    function db(a, b, c) {
      if (b && "undefined" == typeof c && kd(a))for (var d = -1, e = a.length; ++d < e && b(a[d], d, a) !== !1;); else ud(a, b, c);
      return a
    }

    function eb(a, b, c) {
      var d = a, e = a ? a.length : 0;
      if (b = b && "undefined" == typeof c ? b : ca(b, c, 3), kd(a))for (; e-- && b(a[e], e, a) !== !1;); else {
        if ("number" != typeof e) {
          var f = md(a);
          e = f.length
        } else hd.unindexedChars && Qa(a) && (d = a.split(""));
        ud(a, function (a, c, g) {
          return c = f ? f[--e] : --e, b(d[c], c, g)
        })
      }
      return a
    }

    function fb(a, b) {
      var c = n(arguments, 2), d = -1, e = "function" == typeof b, f = a ? a.length : 0, g = uc("number" == typeof f ? f : 0);
      return db(a, function (a) {
        g[++d] = (e ? b : a[b]).apply(a, c)
      }), g
    }

    function gb(a, b, c) {
      var d = -1, e = a ? a.length : 0, f = uc("number" == typeof e ? e : 0);
      if (b = q.createCallback(b, c, 3), kd(a))for (; ++d < e;)f[d] = b(a[d], d, a); else ud(a, function (a, c, e) {
        f[++d] = b(a, c, e)
      });
      return f
    }

    function hb(a, b, c) {
      var e = -(1 / 0), f = e;
      if ("function" != typeof b && c && c[b] === a && (b = null), null == b && kd(a))for (var g = -1, h = a.length; ++g < h;) {
        var i = a[g];
        i > f && (f = i)
      } else b = null == b && Qa(a) ? d : q.createCallback(b, c, 3), ud(a, function (a, c, d) {
        var g = b(a, c, d);
        g > e && (e = g, f = a)
      });
      return f
    }

    function ib(a, b, c) {
      var e = 1 / 0, f = e;
      if ("function" != typeof b && c && c[b] === a && (b = null), null == b && kd(a))for (var g = -1, h = a.length; ++g < h;) {
        var i = a[g];
        f > i && (f = i)
      } else b = null == b && Qa(a) ? d : q.createCallback(b, c, 3), ud(a, function (a, c, d) {
        var g = b(a, c, d);
        e > g && (e = g, f = a)
      });
      return f
    }

    function jb(a, b, c, d) {
      var e = arguments.length < 3;
      if (b = q.createCallback(b, d, 4), kd(a)) {
        var f = -1, g = a.length;
        for (e && (c = a[++f]); ++f < g;)c = b(c, a[f], f, a)
      } else ud(a, function (a, d, f) {
        c = e ? (e = !1, a) : b(c, a, d, f)
      });
      return c
    }

    function kb(a, b, c, d) {
      var e = arguments.length < 3;
      return b = q.createCallback(b, d, 4), eb(a, function (a, d, f) {
        c = e ? (e = !1, a) : b(c, a, d, f)
      }), c
    }

    function lb(a, b, c) {
      return b = q.createCallback(b, c, 3), ab(a, function (a, c, d) {
        return !b(a, c, d)
      })
    }

    function mb(a, b, c) {
      if (a && "number" != typeof a.length ? a = Ya(a) : hd.unindexedChars && Qa(a) && (a = a.split("")), null == b || c)return a ? a[ja(0, a.length - 1)] : p;
      var d = nb(a);
      return d.length = cd(bd(0, b), d.length), d
    }

    function nb(a) {
      var b = -1, c = a ? a.length : 0, d = uc("number" == typeof c ? c : 0);
      return db(a, function (a) {
        var c = ja(0, ++b);
        d[b] = d[c], d[c] = a
      }), d
    }

    function ob(a) {
      var b = a ? a.length : 0;
      return "number" == typeof b ? b : md(a).length
    }

    function pb(a, b, c) {
      var d;
      if (b = q.createCallback(b, c, 3), kd(a))for (var e = -1, f = a.length; ++e < f && !(d = b(a[e], e, a));); else ud(a, function (a, c, e) {
        return !(d = b(a, c, e))
      });
      return !!d
    }

    function qb(a, b, c) {
      var d = -1, f = kd(b), g = a ? a.length : 0, j = uc("number" == typeof g ? g : 0);
      for (f || (b = q.createCallback(b, c, 3)), db(a, function (a, c, e) {
        var g = j[++d] = i();
        f ? g.criteria = gb(b, function (b) {
          return a[b]
        }) : (g.criteria = h())[0] = b(a, c, e), g.index = d, g.value = a
      }), g = j.length, j.sort(e); g--;) {
        var k = j[g];
        j[g] = k.value, f || l(k.criteria), m(k)
      }
      return j
    }

    function rb(a) {
      return a && "number" == typeof a.length ? hd.unindexedChars && Qa(a) ? a.split("") : n(a) : Ya(a)
    }

    function sb(a) {
      for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
        var e = a[b];
        e && d.push(e)
      }
      return d
    }

    function tb(a) {
      return ea(a, ga(arguments, !0, !0, 1))
    }

    function ub(a, b, c) {
      var d = -1, e = a ? a.length : 0;
      for (b = q.createCallback(b, c, 3); ++d < e;)if (b(a[d], d, a))return d;
      return -1
    }

    function vb(a, b, c) {
      var d = a ? a.length : 0;
      for (b = q.createCallback(b, c, 3); d--;)if (b(a[d], d, a))return d;
      return -1
    }

    function wb(a, b, c) {
      var d = 0, e = a ? a.length : 0;
      if ("number" != typeof b && null != b) {
        var f = -1;
        for (b = q.createCallback(b, c, 3); ++f < e && b(a[f], f, a);)d++
      } else if (d = b, null == d || c)return a ? a[0] : p;
      return n(a, 0, cd(bd(0, d), e))
    }

    function xb(a, b, c, d) {
      return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = gb(a, c, d)), ga(a, b)
    }

    function yb(b, c, d) {
      if ("number" == typeof d) {
        var e = b ? b.length : 0;
        d = 0 > d ? bd(0, e + d) : d || 0
      } else if (d) {
        var f = Hb(b, c);
        return b[f] === c ? f : -1
      }
      return a(b, c, d)
    }

    function zb(a, b, c) {
      var d = 0, e = a ? a.length : 0;
      if ("number" != typeof b && null != b) {
        var f = e;
        for (b = q.createCallback(b, c, 3); f-- && b(a[f], f, a);)d++
      } else d = null == b || c ? 1 : b || d;
      return n(a, 0, cd(bd(0, e - d), e))
    }

    function Ab() {
      for (var c = [], d = -1, e = arguments.length, g = h(), i = pa(), j = i === a, k = h(); ++d < e;) {
        var n = arguments[d];
        (kd(n) || ta(n)) && (c.push(n), g.push(j && n.length >= v && f(d ? c[d] : k)))
      }
      var o = c[0], p = -1, q = o ? o.length : 0, r = [];
      a:for (; ++p < q;) {
        var s = g[0];
        if (n = o[p], (s ? b(s, n) : i(k, n)) < 0) {
          for (d = e, (s || k).push(n); --d;)if (s = g[d], (s ? b(s, n) : i(c[d], n)) < 0)continue a;
          r.push(n)
        }
      }
      for (; e--;)s = g[e], s && m(s);
      return l(g), l(k), r
    }

    function Bb(a, b, c) {
      var d = 0, e = a ? a.length : 0;
      if ("number" != typeof b && null != b) {
        var f = e;
        for (b = q.createCallback(b, c, 3); f-- && b(a[f], f, a);)d++
      } else if (d = b, null == d || c)return a ? a[e - 1] : p;
      return n(a, bd(0, e - d))
    }

    function Cb(a, b, c) {
      var d = a ? a.length : 0;
      for ("number" == typeof c && (d = (0 > c ? bd(0, d + c) : cd(c, d - 1)) + 1); d--;)if (a[d] === b)return d;
      return -1
    }

    function Db(a) {
      for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)for (var f = -1, g = b[c]; ++f < e;)a[f] === g && (Vc.call(a, f--, 1), e--);
      return a
    }

    function Eb(a, b, c) {
      a = +a || 0, c = "number" == typeof c ? c : +c || 1, null == b && (b = a, a = 0);
      for (var d = -1, e = bd(0, Mc((b - a) / (c || 1))), f = uc(e); ++d < e;)f[d] = a, a += c;
      return f
    }

    function Fb(a, b, c) {
      var d = -1, e = a ? a.length : 0, f = [];
      for (b = q.createCallback(b, c, 3); ++d < e;) {
        var g = a[d];
        b(g, d, a) && (f.push(g), Vc.call(a, d--, 1), e--)
      }
      return f
    }

    function Gb(a, b, c) {
      if ("number" != typeof b && null != b) {
        var d = 0, e = -1, f = a ? a.length : 0;
        for (b = q.createCallback(b, c, 3); ++e < f && b(a[e], e, a);)d++
      } else d = null == b || c ? 1 : bd(0, b);
      return n(a, d)
    }

    function Hb(a, b, c, d) {
      var e = 0, f = a ? a.length : e;
      for (c = c ? q.createCallback(c, d, 1) : ec, b = c(b); f > e;) {
        var g = e + f >>> 1;
        c(a[g]) < b ? e = g + 1 : f = g
      }
      return e
    }

    function Ib() {
      return ka(ga(arguments, !0, !0))
    }

    function Jb(a, b, c, d) {
      return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (c = q.createCallback(c, d, 3)), ka(a, b, c)
    }

    function Kb(a) {
      return ea(a, n(arguments, 1))
    }

    function Lb() {
      for (var a = -1, b = arguments.length; ++a < b;) {
        var c = arguments[a];
        if (kd(c) || ta(c))var d = d ? ka(ea(d, c).concat(ea(c, d))) : c
      }
      return d || []
    }

    function Mb() {
      for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, c = a ? hb(Dd(a, "length")) : 0, d = uc(0 > c ? 0 : c); ++b < c;)d[b] = Dd(a, b);
      return d
    }

    function Nb(a, b) {
      var c = -1, d = a ? a.length : 0, e = {};
      for (b || !d || kd(a[0]) || (b = []); ++c < d;) {
        var f = a[c];
        b ? e[f] = b[c] : f && (e[f[0]] = f[1])
      }
      return e
    }

    function Ob(a, b) {
      if (!Ka(b))throw new Ec;
      return function () {
        return --a < 1 ? b.apply(this, arguments) : void 0
      }
    }

    function Pb(a, b) {
      return arguments.length > 2 ? ma(a, 17, n(arguments, 2), null, b) : ma(a, 1, null, null, b)
    }

    function Qb(a) {
      for (var b = arguments.length > 1 ? ga(arguments, !0, !1, 1) : Ba(a), c = -1, d = b.length; ++c < d;) {
        var e = b[c];
        a[e] = ma(a[e], 1, null, null, a)
      }
      return a
    }

    function Rb(a, b) {
      return arguments.length > 2 ? ma(b, 19, n(arguments, 2), null, a) : ma(b, 3, null, null, a)
    }

    function Sb() {
      for (var a = arguments, b = a.length; b--;)if (!Ka(a[b]))throw new Ec;
      return function () {
        for (var b = arguments, c = a.length; c--;)b = [a[c].apply(this, b)];
        return b[0]
      }
    }

    function Tb(a, b) {
      return b = "number" == typeof b ? b : +b || a.length, ma(a, 4, null, null, null, b)
    }

    function Ub(a, b, c) {
      var d, e, f, g, h, i, j, k = 0, l = !1, m = !0;
      if (!Ka(a))throw new Ec;
      if (b = bd(0, b) || 0, c === !0) {
        var n = !0;
        m = !1
      } else La(c) && (n = c.leading, l = "maxWait" in c && (bd(b, c.maxWait) || 0), m = "trailing" in c ? c.trailing : m);
      var o = function () {
        var c = b - (Fd() - g);
        if (0 >= c) {
          e && Nc(e);
          var l = j;
          e = i = j = p, l && (k = Fd(), f = a.apply(h, d), i || e || (d = h = null))
        } else i = Uc(o, c)
      }, q = function () {
        i && Nc(i), e = i = j = p, (m || l !== b) && (k = Fd(), f = a.apply(h, d), i || e || (d = h = null))
      };
      return function () {
        if (d = arguments, g = Fd(), h = this, j = m && (i || !n), l === !1)var c = n && !i; else {
          e || n || (k = g);
          var p = l - (g - k), r = 0 >= p;
          r ? (e && (e = Nc(e)), k = g, f = a.apply(h, d)) : e || (e = Uc(q, p))
        }
        return r && i ? i = Nc(i) : i || b === l || (i = Uc(o, b)), c && (r = !0, f = a.apply(h, d)), !r || i || e || (d = h = null), f
      }
    }

    function Vb(a) {
      if (!Ka(a))throw new Ec;
      var b = n(arguments, 1);
      return Uc(function () {
        a.apply(p, b)
      }, 1)
    }

    function Wb(a, b) {
      if (!Ka(a))throw new Ec;
      var c = n(arguments, 2);
      return Uc(function () {
        a.apply(p, c)
      }, b)
    }

    function Xb(a, b) {
      if (!Ka(a))throw new Ec;
      var c = function () {
        var d = c.cache, e = b ? b.apply(this, arguments) : u + arguments[0];
        return Rc.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
      };
      return c.cache = {}, c
    }

    function Yb(a) {
      var b, c;
      if (!Ka(a))throw new Ec;
      return function () {
        return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
      }
    }

    function Zb(a) {
      return ma(a, 16, n(arguments, 1))
    }

    function $b(a) {
      return ma(a, 32, null, n(arguments, 1))
    }

    function _b(a, b, c) {
      var d = !0, e = !0;
      if (!Ka(a))throw new Ec;
      return c === !1 ? d = !1 : La(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), X.leading = d, X.maxWait = b, X.trailing = e, Ub(a, b, X)
    }

    function ac(a, b) {
      return ma(b, 16, [a])
    }

    function bc(a) {
      return function () {
        return a
      }
    }

    function cc(a, b, c) {
      var d = typeof a;
      if (null == a || "function" == d)return ca(a, b, c);
      if ("object" != d)return ic(a);
      var e = md(a), f = e[0], g = a[f];
      return 1 != e.length || g !== g || La(g) ? function (b) {
        for (var c = e.length, d = !1; c-- && (d = ha(b[e[c]], a[e[c]], null, !0)););
        return d
      } : function (a) {
        var b = a[f];
        return g === b && (0 !== g || 1 / g == 1 / b)
      }
    }

    function dc(a) {
      return null == a ? "" : Dc(a).replace(td, oa)
    }

    function ec(a) {
      return a
    }

    function fc(a, b, c) {
      var d = !0, e = b && Ba(b);
      b && (c || e.length) || (null == c && (c = b), f = r, b = a, a = q, e = Ba(b)), c === !1 ? d = !1 : La(c) && "chain" in c && (d = c.chain);
      var f = a, g = Ka(f);
      db(e, function (c) {
        var e = a[c] = b[c];
        g && (f.prototype[c] = function () {
          var b = this.__chain__, c = this.__wrapped__, g = [c];
          Sc.apply(g, arguments);
          var h = e.apply(a, g);
          if (d || b) {
            if (c === h && La(h))return this;
            h = new f(h), h.__chain__ = b
          }
          return h
        })
      })
    }

    function gc() {
      return c._ = Jc, this
    }

    function hc() {
    }

    function ic(a) {
      return function (b) {
        return b[a]
      }
    }

    function jc(a, b, c) {
      var d = null == a, e = null == b;
      if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) {
        var f = ed();
        return cd(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
      }
      return ja(a, b)
    }

    function kc(a, b) {
      if (a) {
        var c = a[b];
        return Ka(c) ? a[b]() : c
      }
    }

    function lc(a, b, c) {
      var d = q.templateSettings;
      a = Dc(a || ""), c = wd({}, c, d);
      var e, f = wd({}, c.imports, d.imports), h = md(f), i = Ya(f), j = 0, k = c.interpolate || G, l = "__p += '", m = Cc((c.escape || G).source + "|" + k.source + "|" + (k === E ? B : G).source + "|" + (c.evaluate || G).source + "|$", "g");
      a.replace(m, function (b, c, d, f, h, i) {
        return d || (d = f), l += a.slice(j, i).replace(I, g), c && (l += "' +\n__e(" + c + ") +\n'"), h && (e = !0, l += "';\n" + h + ";\n__p += '"), d && (l += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), j = i + b.length, b
      }), l += "';\n";
      var n = c.variable, o = n;
      o || (n = "obj", l = "with (" + n + ") {\n" + l + "\n}\n"), l = (e ? l.replace(y, "") : l).replace(z, "$1").replace(A, "$1;"), l = "function(" + n + ") {\n" + (o ? "" : n + " || (" + n + " = {});\n") + "var __t, __p = '', __e = _.escape" + (e ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}";
      var r = "\n/*\n//# sourceURL=" + (c.sourceURL || "/lodash/template/source[" + L++ + "]") + "\n*/";
      try {
        var s = yc(h, "return " + l + r).apply(p, i)
      } catch (t) {
        throw t.source = l, t
      }
      return b ? s(b) : (s.source = l, s)
    }

    function mc(a, b, c) {
      a = (a = +a) > -1 ? a : 0;
      var d = -1, e = uc(a);
      for (b = ca(b, c, 1); ++d < a;)e[d] = b(d);
      return e
    }

    function nc(a) {
      return null == a ? "" : Dc(a).replace(sd, sa)
    }

    function oc(a) {
      var b = ++s;
      return Dc(null == a ? "" : a) + b
    }

    function pc(a) {
      return a = new r(a), a.__chain__ = !0, a
    }

    function qc(a, b) {
      return b(a), a
    }

    function rc() {
      return this.__chain__ = !0, this
    }

    function sc() {
      return Dc(this.__wrapped__)
    }

    function tc() {
      return this.__wrapped__
    }

    c = c ? fa.defaults(aa.Object(), c, fa.pick(aa, J)) : aa;
    var uc = c.Array, vc = c.Boolean, wc = c.Date, xc = c.Error, yc = c.Function, zc = c.Math, Ac = c.Number, Bc = c.Object, Cc = c.RegExp, Dc = c.String, Ec = c.TypeError, Fc = [], Gc = xc.prototype, Hc = Bc.prototype, Ic = Dc.prototype, Jc = c._, Kc = Hc.toString, Lc = Cc("^" + Dc(Kc).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), Mc = zc.ceil, Nc = c.clearTimeout, Oc = zc.floor, Pc = yc.prototype.toString, Qc = qa(Qc = Bc.getPrototypeOf) && Qc, Rc = Hc.hasOwnProperty, Sc = Fc.push, Tc = Hc.propertyIsEnumerable, Uc = c.setTimeout, Vc = Fc.splice, Wc = Fc.unshift, Xc = function () {
      try {
        var a = {}, b = qa(b = Bc.defineProperty) && b, c = b(a, a, a) && b
      } catch (d) {
      }
      return c
    }(), Yc = qa(Yc = Bc.create) && Yc, Zc = qa(Zc = uc.isArray) && Zc, $c = c.isFinite, _c = c.isNaN, ad = qa(ad = Bc.keys) && ad, bd = zc.max, cd = zc.min, dd = c.parseInt, ed = zc.random, fd = {};
    fd[N] = uc, fd[O] = vc, fd[P] = wc, fd[R] = yc, fd[T] = Bc, fd[S] = Ac, fd[U] = Cc, fd[V] = Dc;
    var gd = {};
    gd[N] = gd[P] = gd[S] = {
      constructor: !0,
      toLocaleString: !0,
      toString: !0,
      valueOf: !0
    }, gd[O] = gd[V] = {constructor: !0, toString: !0, valueOf: !0}, gd[Q] = gd[R] = gd[U] = {
      constructor: !0,
      toString: !0
    }, gd[T] = {constructor: !0}, function () {
      for (var a = K.length; a--;) {
        var b = K[a];
        for (var c in gd)Rc.call(gd, c) && !Rc.call(gd[c], b) && (gd[c][b] = !1)
      }
    }(), r.prototype = q.prototype;
    var hd = q.support = {};
    !function () {
      var a = function () {
        this.x = 1
      }, b = {0: 1, length: 1}, d = [];
      a.prototype = {valueOf: 1, y: 1};
      for (var e in new a)d.push(e);
      for (e in arguments);
      hd.argsClass = Kc.call(arguments) == M, hd.argsObject = arguments.constructor == Bc && !(arguments instanceof uc), hd.enumErrorProps = Tc.call(Gc, "message") || Tc.call(Gc, "name"), hd.enumPrototypes = Tc.call(a, "prototype"), hd.funcDecomp = !qa(c.WinRTError) && H.test(o), hd.funcNames = "string" == typeof yc.name, hd.nonEnumArgs = 0 != e, hd.nonEnumShadows = !/valueOf/.test(d), hd.ownLast = "x" != d[0], hd.spliceObjects = (Fc.splice.call(b, 0, 1), !b[0]), hd.unindexedChars = "x"[0] + Bc("x")[0] != "xx";
      try {
        hd.nodeClass = !(Kc.call(document) == T && !({toString: 0} + ""))
      } catch (f) {
        hd.nodeClass = !0
      }
    }(1), q.templateSettings = {
      escape: /<%-([\s\S]+?)%>/g,
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: E,
      variable: "",
      imports: {_: q}
    };
    var id = function (a) {
      var b = "var index, iterable = " + a.firstArg + ", result = " + a.init + ";\nif (!iterable) return result;\n" + a.top + ";";
      a.array ? (b += "\nvar length = iterable.length; index = -1;\nif (" + a.array + ") {  ", hd.unindexedChars && (b += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), b += "\n  while (++index < length) {\n    " + a.loop + ";\n  }\n}\nelse {  ") : hd.nonEnumArgs && (b += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + a.loop + ";\n    }\n  } else {  "), hd.enumPrototypes && (b += "\n  var skipProto = typeof iterable == 'function';\n  "), hd.enumErrorProps && (b += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
      var c = [];
      if (hd.enumPrototypes && c.push('!(skipProto && index == "prototype")'), hd.enumErrorProps && c.push('!(skipErrorProps && (index == "message" || index == "name"))'), a.useHas && a.keys)b += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }  "; else if (b += "\n  for (index in iterable) {\n", a.useHas && c.push("hasOwnProperty.call(iterable, index)"), c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }    ", hd.nonEnumShadows) {
        for (b += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; k < 7; k++)b += "\n    index = '" + a.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", a.useHas || (b += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), b += ") {\n      " + a.loop + ";\n    }      ";
        b += "\n  }    "
      }
      return (a.array || hd.nonEnumArgs) && (b += "\n}"), b += a.bottom + ";\nreturn result"
    };
    Yc || (ba = function () {
      function a() {
      }

      return function (b) {
        if (La(b)) {
          a.prototype = b;
          var d = new a;
          a.prototype = null
        }
        return d || c.Object()
      }
    }());
    var jd = Xc ? function (a, b) {
      Y.value = b, Xc(a, "__bindData__", Y), Y.value = null
    } : hc;
    hd.argsClass || (ta = function (a) {
      return a && "object" == typeof a && "number" == typeof a.length && Rc.call(a, "callee") && !Tc.call(a, "callee") || !1
    });
    var kd = Zc || function (a) {
        return a && "object" == typeof a && "number" == typeof a.length && Kc.call(a) == N || !1
      }, ld = na({
      args: "object",
      init: "[]",
      top: "if (!(objectTypes[typeof object])) return result",
      loop: "result.push(index)"
    }), md = ad ? function (a) {
      return La(a) ? hd.enumPrototypes && "function" == typeof a || hd.nonEnumArgs && a.length && ta(a) ? ld(a) : ad(a) : []
    } : ld, nd = {
      args: "collection, callback, thisArg",
      top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
      array: "typeof length == 'number'",
      keys: md,
      loop: "if (callback(iterable[index], index, collection) === false) return result"
    }, od = {
      args: "object, source, guard",
      top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
      keys: md,
      loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
      bottom: "  }\n}"
    }, pd = {top: "if (!objectTypes[typeof iterable]) return result;\n" + nd.top, array: !1}, qd = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, rd = Da(qd), sd = Cc("(" + md(rd).join("|") + ")", "g"), td = Cc("[" + md(qd).join("") + "]", "g"), ud = na(nd), vd = na(od, {
      top: od.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
      loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
    }), wd = na(od), xd = na(nd, pd, {useHas: !1}), yd = na(nd, pd);
    Ka(/x/) && (Ka = function (a) {
      return "function" == typeof a && Kc.call(a) == R
    });
    var zd = Qc ? function (a) {
      if (!a || Kc.call(a) != T || !hd.argsClass && ta(a))return !1;
      var b = a.valueOf, c = qa(b) && (c = Qc(b)) && Qc(c);
      return c ? a == c || Qc(a) == c : ra(a)
    } : ra, Ad = la(function (a, b, c) {
      Rc.call(a, c) ? a[c]++ : a[c] = 1
    }), Bd = la(function (a, b, c) {
      (Rc.call(a, c) ? a[c] : a[c] = []).push(b)
    }), Cd = la(function (a, b, c) {
      a[c] = b
    }), Dd = gb, Ed = ab, Fd = qa(Fd = wc.now) && Fd || function () {
        return (new wc).getTime()
      }, Gd = 8 == dd(x + "08") ? dd : function (a, b) {
      return dd(Qa(a) ? a.replace(F, "") : a, b || 0)
    };
    return q.after = Ob, q.assign = vd, q.at = Za, q.bind = Pb, q.bindAll = Qb, q.bindKey = Rb, q.chain = pc, q.compact = sb, q.compose = Sb, q.constant = bc, q.countBy = Ad, q.create = wa, q.createCallback = cc, q.curry = Tb, q.debounce = Ub, q.defaults = wd, q.defer = Vb, q.delay = Wb, q.difference = tb, q.filter = ab, q.flatten = xb, q.forEach = db, q.forEachRight = eb, q.forIn = xd, q.forInRight = za, q.forOwn = yd, q.forOwnRight = Aa, q.functions = Ba, q.groupBy = Bd, q.indexBy = Cd, q.initial = zb, q.intersection = Ab, q.invert = Da, q.invoke = fb, q.keys = md, q.map = gb, q.mapValues = Sa, q.max = hb, q.memoize = Xb, q.merge = Ta, q.min = ib, q.omit = Ua, q.once = Yb, q.pairs = Va, q.partial = Zb, q.partialRight = $b, q.pick = Wa, q.pluck = Dd, q.property = ic, q.pull = Db, q.range = Eb, q.reject = lb, q.remove = Fb, q.rest = Gb, q.shuffle = nb, q.sortBy = qb, q.tap = qc, q.throttle = _b, q.times = mc, q.toArray = rb, q.transform = Xa, q.union = Ib, q.uniq = Jb, q.values = Ya, q.where = Ed, q.without = Kb, q.wrap = ac, q.xor = Lb, q.zip = Mb, q.zipObject = Nb, q.collect = gb, q.drop = Gb, q.each = db, q.eachRight = eb, q.extend = vd, q.methods = Ba, q.object = Nb, q.select = ab, q.tail = Gb, q.unique = Jb, q.unzip = Mb, fc(q), q.clone = ua, q.cloneDeep = va, q.contains = $a, q.escape = dc, q.every = _a, q.find = bb, q.findIndex = ub, q.findKey = xa, q.findLast = cb, q.findLastIndex = vb, q.findLastKey = ya, q.has = Ca, q.identity = ec, q.indexOf = yb, q.isArguments = ta, q.isArray = kd, q.isBoolean = Ea, q.isDate = Fa, q.isElement = Ga,q.isEmpty = Ha,q.isEqual = Ia,q.isFinite = Ja,q.isFunction = Ka,q.isNaN = Ma,q.isNull = Na,q.isNumber = Oa,q.isObject = La,q.isPlainObject = zd,q.isRegExp = Pa,q.isString = Qa,q.isUndefined = Ra,q.lastIndexOf = Cb,q.mixin = fc,q.noConflict = gc,q.noop = hc,q.now = Fd,q.parseInt = Gd,q.random = jc,q.reduce = jb,q.reduceRight = kb,q.result = kc,q.runInContext = o,q.size = ob,q.some = pb,q.sortedIndex = Hb,q.template = lc,q.unescape = nc,q.uniqueId = oc,q.all = _a,q.any = pb,q.detect = bb,q.findWhere = bb,q.foldl = jb,q.foldr = kb,q.include = $a,q.inject = jb,fc(function () {
      var a = {};
      return yd(q, function (b, c) {
        q.prototype[c] || (a[c] = b)
      }), a
    }(), !1),q.first = wb,q.last = Bb,q.sample = mb,q.take = wb,q.head = wb,yd(q, function (a, b) {
      var c = "sample" !== b;
      q.prototype[b] || (q.prototype[b] = function (b, d) {
        var e = this.__chain__, f = a(this.__wrapped__, b, d);
        return e || null != b && (!d || c && "function" == typeof b) ? new r(f, e) : f
      })
    }),q.VERSION = "2.4.2",q.prototype.chain = rc,q.prototype.toString = sc,q.prototype.value = tc,q.prototype.valueOf = tc,ud(["join", "pop", "shift"], function (a) {
      var b = Fc[a];
      q.prototype[a] = function () {
        var a = this.__chain__, c = b.apply(this.__wrapped__, arguments);
        return a ? new r(c, a) : c
      }
    }),ud(["push", "reverse", "sort", "unshift"], function (a) {
      var b = Fc[a];
      q.prototype[a] = function () {
        return b.apply(this.__wrapped__, arguments), this
      }
    }),ud(["concat", "slice", "splice"], function (a) {
      var b = Fc[a];
      q.prototype[a] = function () {
        return new r(b.apply(this.__wrapped__, arguments), this.__chain__)
      }
    }),hd.spliceObjects || ud(["pop", "shift", "splice"], function (a) {
        var b = Fc[a], c = "splice" == a;
        q.prototype[a] = function () {
          var a = this.__chain__, d = this.__wrapped__, e = b.apply(d, arguments);
          return 0 === d.length && delete d[0], a || c ? new r(e, a) : e
        }
      }),q
  }

  var p, q = [], r = [], s = 0, t = {}, u = +new Date + "", v = 75, w = 40, x = " 	\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　", y = /\b__p \+= '';/g, z = /\b(__p \+=) '' \+/g, A = /(__e\(.*?\)|\b__t\)) \+\n'';/g, B = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, C = /\w*$/, D = /^\s*function[ \n\r\t]+\w/, E = /<%=([\s\S]+?)%>/g, F = RegExp("^[" + x + "]*0+(?=.$)"), G = /($^)/, H = /\bthis\b/, I = /['\n\r\t\u2028\u2029\\]/g, J = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"], K = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], L = 0, M = "[object Arguments]", N = "[object Array]", O = "[object Boolean]", P = "[object Date]", Q = "[object Error]", R = "[object Function]", S = "[object Number]", T = "[object Object]", U = "[object RegExp]", V = "[object String]", W = {};
  W[R] = !1, W[M] = W[N] = W[O] = W[P] = W[S] = W[T] = W[U] = W[V] = !0;
  var X = {leading: !1, maxWait: 0, trailing: !1}, Y = {
    configurable: !1,
    enumerable: !1,
    value: null,
    writable: !1
  }, Z = {
    args: "",
    array: null,
    bottom: "",
    firstArg: "",
    init: "",
    keys: null,
    loop: "",
    shadowedProps: null,
    support: null,
    top: "",
    useHas: !1
  }, $ = {"boolean": !1, "function": !0, object: !0, number: !1, string: !1, undefined: !1}, _ = {
    "\\": "\\",
    "'": "'",
    "\n": "n",
    "\r": "r",
    "	": "t",
    "\u2028": "u2028",
    "\u2029": "u2029"
  }, aa = $[typeof window] && window || this, ba = $[typeof exports] && exports && !exports.nodeType && exports, ca = $[typeof module] && module && !module.nodeType && module, da = ca && ca.exports === ba && ba, ea = $[typeof global] && global;
  !ea || ea.global !== ea && ea.window !== ea || (aa = ea);
  var fa = o();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (aa._ = fa, define(function () {
    return fa
  })) : ba && ca ? da ? (ca.exports = fa)._ = fa : ba._ = fa : aa._ = fa
}.call(this), !function (a, b, c) {
  "use strict";
  function d(a) {
    return {
      require: "?ngModel", restrict: "A", link: function (c, d, e, f) {
        function g() {
          var a = h(c);
          return b.isObject(a) && a.hasOwnProperty("$viewValue") && (a = a.$viewValue), a
        }

        if (!f)return void(console && console.warn && console.warn("Match validation requires ngModel to be on the element"));
        var h = a(e.match), i = a(e.matchCaseless);
        c.$watch(g, function () {
          f.$$parseAndValidate()
        }), f.$validators.match = function () {
          var a = g();
          return i(c) && b.isString(a) && b.isString(f.$viewValue) ? f.$viewValue.toLowerCase() === a.toLowerCase() : f.$viewValue === a
        }
      }
    }
  }

  b.module("validation.match", []), b.module("validation.match").directive("match", d), d.$inject = ["$parse"]
}(window, window.angular);
