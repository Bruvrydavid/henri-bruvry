/**
 * @module       jQuery
 * @author       jQuery Foundation and other contributors
 * @see          https://code.jquery.com/jquery/
 * @license      MIT (jquery.org/license)
 * @version      3.2.1
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e,
        t.head.appendChild(n).parentNode.removeChild(n)
    }
    function r(e) {
        var t = !!e && "length"in e && e.length
          , n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function o(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n
        }) : Ee.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e),
        he.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }
    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function s(e) {
        var t = {};
        return he.each(e.match(je) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function u(e) {
        return e
    }
    function l(e) {
        throw e
    }
    function c(e, t, n, r) {
        var i;
        try {
            e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function f() {
        te.removeEventListener("DOMContentLoaded", f),
        e.removeEventListener("load", f),
        he.ready()
    }
    function p() {
        this.expando = he.expando + p.uid++
    }
    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
    }
    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Re, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = d(n)
                } catch (e) {}
                Oe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function g(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return he.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (he.cssNumber[t] ? "" : "px"), c = (he.cssNumber[t] || "px" !== l && +u) && Ie.exec(he.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do {
                o = o || ".5",
                c /= o,
                he.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    function v(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = _e[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = he.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        _e[r] = i,
        i)
    }
    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = Fe.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && $e(r) && (i[o] = v(r))) : "none" !== n && (i[o] = "none",
            Fe.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && i(e, t) ? he.merge([e], n) : n
    }
    function x(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
    }
    function b(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === he.type(o))
                    he.merge(p, o.nodeType ? [o] : o);
                else if (Ge.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (Xe.exec(o) || ["", ""])[1].toLowerCase(),
                    u = Ve[s] || Ve._default,
                    a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    he.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (r && he.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = he.contains(o.ownerDocument, o),
            a = y(f.appendChild(o), "script"),
            l && x(a),
            n)
                for (c = 0; o = a[c++]; )
                    Ue.test(o.type || "") && n.push(o);
        return f
    }
    function w() {
        return !0
    }
    function T() {
        return !1
    }
    function C() {
        try {
            return te.activeElement
        } catch (e) {}
    }
    function E(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                E(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = T;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        i = function(e) {
            return he().off(e),
            a.apply(this, arguments)
        }
        ,
        i.guid = a.guid || (a.guid = he.guid++)),
        e.each(function() {
            he.event.add(this, t, i, r, n)
        })
    }
    function k(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
    }
    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function N(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function D(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (o = Fe.access(e),
            a = Fe.set(t, o),
            l = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        he.event.add(t, i, l[i][n])
            }
            Oe.hasData(e) && (s = Oe.access(e),
            u = he.extend({}, s),
            Oe.set(t, u))
        }
    }
    function j(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function A(e, t, r, i) {
        t = ie.apply([], t);
        var o, a, s, u, l, c, f = 0, p = e.length, d = p - 1, h = t[0], g = he.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !pe.checkClone && tt.test(h))
            return e.each(function(n) {
                var o = e.eq(n);
                g && (t[0] = h.call(this, n, o.html())),
                A(o, t, r, i)
            });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, i),
        a = o.firstChild,
        1 === o.childNodes.length && (o = a),
        a || i)) {
            for (u = (s = he.map(y(o, "script"), S)).length; f < p; f++)
                l = o,
                f !== d && (l = he.clone(l, !0, !0),
                u && he.merge(s, y(l, "script"))),
                r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                he.map(s, N),
                f = 0; f < u; f++)
                    l = s[f],
                    Ue.test(l.type || "") && !Fe.access(l, "globalEval") && he.contains(c, l) && (l.src ? he._evalUrl && he._evalUrl(l.src) : n(l.textContent.replace(rt, ""), c))
        }
        return e
    }
    function q(e, t, n) {
        for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || he.cleanData(y(r)),
            r.parentNode && (n && he.contains(r.ownerDocument, r) && x(y(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function L(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || at(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (a = he.style(e, t)),
        !pe.pixelMarginRight() && ot.test(a) && it.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function H(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function F(e) {
        if (e in pt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--; )
            if ((e = ft[n] + t)in pt)
                return e
    }
    function O(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = F(e) || e),
        t
    }
    function P(e, t, n) {
        var r = Ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function R(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (a += he.css(e, n + We[o], !0, i)),
            r ? ("content" === n && (a -= he.css(e, "padding" + We[o], !0, i)),
            "margin" !== n && (a -= he.css(e, "border" + We[o] + "Width", !0, i))) : (a += he.css(e, "padding" + We[o], !0, i),
            "padding" !== n && (a += he.css(e, "border" + We[o] + "Width", !0, i)));
        return a
    }
    function M(e, t, n) {
        var r, i = at(e), o = L(e, t, i), a = "border-box" === he.css(e, "boxSizing", !1, i);
        return ot.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]),
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (o = parseFloat(o) || 0) + R(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }
    function I(e, t, n, r, i) {
        return new I.prototype.init(e,t,n,r,i)
    }
    function W() {
        ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, he.fx.interval),
        he.fx.tick())
    }
    function $() {
        return e.setTimeout(function() {
            dt = void 0
        }),
        dt = he.now()
    }
    function B(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            n = We[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function _(e, t, n) {
        for (var r, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function z(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = he.camelCase(n),
            i = t[r],
            o = e[n],
            Array.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = he.cssHooks[r]) && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function X(e, t, n) {
        var r, i, o = 0, a = X.prefilters.length, s = he.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = dt || $(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: he.extend({}, t),
            opts: he.extend(!0, {
                specialEasing: {},
                easing: he.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: dt || $(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (z(c, l.opts.specialEasing); o < a; o++)
            if (r = X.prefilters[o].call(l, e, c, l.opts))
                return he.isFunction(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(r.stop, r)),
                r;
        return he.map(c, _, l),
        he.isFunction(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        he.fx.timer(he.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    function U(e) {
        return (e.match(je) || []).join(" ")
    }
    function V(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function G(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            he.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== he.type(t))
            r(e, t);
        else
            for (i in t)
                G(e + "[" + i + "]", t[i], n, r)
    }
    function Y(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(je) || [];
            if (he.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Q(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
            he.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                i(l),
                !1)
            }),
            u
        }
        var o = {}
          , a = e === Mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function J(e, t) {
        var n, r, i = he.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && he.extend(!0, e, r),
        e
    }
    function K(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function Z(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var ee = []
      , te = e.document
      , ne = Object.getPrototypeOf
      , re = ee.slice
      , ie = ee.concat
      , oe = ee.push
      , ae = ee.indexOf
      , se = {}
      , ue = se.toString
      , le = se.hasOwnProperty
      , ce = le.toString
      , fe = ce.call(Object)
      , pe = {}
      , de = "3.2.1"
      , he = function(e, t) {
        return new he.fn.init(e,t)
    }
      , ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ve = /^-ms-/
      , me = /-([a-z])/g
      , ye = function(e, t) {
        return t.toUpperCase()
    };
    he.fn = he.prototype = {
        jquery: de,
        constructor: he,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    },
    he.extend = he.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || he.isFunction(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    r = e[t],
                    a !== r && (l && r && (he.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {},
                    a[t] = he.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    he.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== fe))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(me, ye)
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var i, o, a = 0, s = [];
            if (r(e))
                for (i = e.length; a < i; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return ie.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            he.isFunction(e))
                return r = re.call(arguments, 2),
                i = function() {
                    return e.apply(t || this, r.concat(re.call(arguments)))
                }
                ,
                i.guid = e.guid = e.guid || he.guid++,
                i
        },
        now: Date.now,
        support: pe
    }),
    "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]),
    he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, p, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t),
            t = t || q,
            H)) {
                if (11 !== h && (u = ge.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (d && (a = d.getElementById(i)) && R(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return Q.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (b.qsa && !z[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h)
                        d = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = M),
                        o = (c = E(e)).length; o--; )
                            c[o] = "#" + s + " " + f(c[o]);
                        p = c.join(","),
                        d = ve.test(e) && l(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return Q.apply(n, d.querySelectorAll(p)),
                            n
                        } catch (e) {} finally {
                            s === M && t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(oe, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[M] = !0,
            e
        }
        function i(e) {
            var t = q.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                w.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function u(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = $++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [W, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (f = t[M] || (t[M] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === W && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function d(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[M] && (i = v(i)),
            o && !o[M] && (o = v(o, a)),
            r(function(r, a, s, u) {
                var l, c, f, p = [], d = [], v = a.length, m = r || h(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? m : g(m, p, e, s, u), x = n ? o || (r ? e : v || i) ? [] : a : y;
                if (n && n(y, x, s, u),
                i)
                    for (l = g(x, d),
                    i(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = x.length; c--; )
                                (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--; )
                            (f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else
                    x = g(x === a ? x.splice(v, x.length) : x),
                    o ? o(null, a, x, u) : Q.apply(a, x)
            })
        }
        function m(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                return e === t
            }, a, !0), l = p(function(e) {
                return K(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                i
            }
            ]; s < i; s++)
                if (n = w.relative[e[s].type])
                    c = [p(d(c), n)];
                else {
                    if ((n = w.filter[e[s].type].apply(null, e[s].matches))[M]) {
                        for (r = ++s; r < i && !w.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e))
                    }
                    c.push(n)
                }
            return d(c)
        }
        function y(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , a = function(r, a, s, u, l) {
                var c, f, p, d = 0, h = "0", v = r && [], m = [], y = N, x = r || o && w.find.TAG("*", l), b = W += null == y ? 1 : Math.random() || .1, T = x.length;
                for (l && (N = a === q || a || l); h !== T && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0,
                        a || c.ownerDocument === q || (A(c),
                        s = !H); p = e[f++]; )
                            if (p(c, a || q, s)) {
                                u.push(c);
                                break
                            }
                        l && (W = b)
                    }
                    i && ((c = !p && c) && d--,
                    r && v.push(c))
                }
                if (d += h,
                i && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(v, m, a, s);
                    if (r) {
                        if (d > 0)
                            for (; h--; )
                                v[h] || m[h] || (m[h] = G.call(u));
                        m = g(m)
                    }
                    Q.apply(u, m),
                    l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = b,
                N = y),
                v
            };
            return i ? r(a) : a
        }
        var x, b, w, T, C, E, k, S, N, D, j, A, q, L, H, F, O, P, R, M = "sizzle" + 1 * new Date, I = e.document, W = 0, $ = 0, B = n(), _ = n(), z = n(), X = function(e, t) {
            return e === t && (j = !0),
            0
        }, U = {}.hasOwnProperty, V = [], G = V.pop, Y = V.push, Q = V.push, J = V.slice, K = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", ie = new RegExp(ee + "+","g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), le = new RegExp(re), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), ye = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, we = function() {
            A()
        }, Te = p(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Q.apply(V = J.call(I.childNodes), I.childNodes),
            V[I.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: V.length ? function(e, t) {
                    Y.apply(e, J.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        b = t.support = {},
        C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        A = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r,
            L = q.documentElement,
            H = !C(q),
            I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
            b.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            b.getElementsByTagName = i(function(e) {
                return e.appendChild(q.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            b.getElementsByClassName = he.test(q.getElementsByClassName),
            b.getById = i(function(e) {
                return L.appendChild(e).id = M,
                !q.getElementsByName || !q.getElementsByName(M).length
            }),
            b.getById ? (w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            w.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            w.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && H)
                    return t.getElementsByClassName(e)
            }
            ,
            O = [],
            F = [],
            (b.qsa = he.test(q.querySelectorAll)) && (i(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + ee + "*(?:value|" + Z + ")"),
                e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
            }),
            i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + ee + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"),
                L.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = P.call(e, "*"),
                P.call(e, "[s!='']:x"),
                O.push("!=", re)
            }),
            F = F.length && new RegExp(F.join("|")),
            O = O.length && new RegExp(O.join("|")),
            t = he.test(L.compareDocumentPosition),
            R = t || he.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            X = t ? function(e, t) {
                if (e === t)
                    return j = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && R(I, e) ? -1 : t === q || t.ownerDocument === I && R(I, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return j = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                if (!i || !o)
                    return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                if (i === o)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    u.unshift(n);
                for (; s[r] === u[r]; )
                    r++;
                return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
            }
            ,
            q) : q
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && A(e),
            n = n.replace(ue, "='$1']"),
            b.matchesSelector && H && !z[n + " "] && (!O || !O.test(n)) && (!F || !F.test(n)))
                try {
                    var r = P.call(e, n);
                    if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, q, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && A(e),
            R(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && A(e);
            var n = w.attrHandle[t.toLowerCase()]
              , r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(xe, be)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (j = !b.detectDuplicates,
            D = !b.sortStable && e.slice(0),
            e.sort(X),
            j) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return D = null,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += T(t);
            return n
        }
        ,
        (w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(me, ye),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(me, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (v) {
                            if (o) {
                                for (; g; ) {
                                    for (p = t; p = p[g]; )
                                        if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild],
                            a && y) {
                                for (x = (d = (l = (c = (f = (p = v)[M] || (p[M] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === W && l[1]) && l[2],
                                p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [W, d, x];
                                        break
                                    }
                            } else if (y && (p = t,
                            f = p[M] || (p[M] = {}),
                            c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                            l = c[e] || [],
                            d = l[0] === W && l[1],
                            x = d),
                            !1 === x)
                                for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[M] || (p[M] = {}),
                                c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                c[e] = [W, x]),
                                p !== t)); )
                                    ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            r = K(e, i[a]),
                            e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = k(e.replace(oe, "$1"));
                    return i[M] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(me, ye),
                    function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(me, ye).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return de.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[x] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            w.pseudos[x] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(x);
        return c.prototype = w.filters = w.pseudos,
        w.setFilters = new c,
        E = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = _[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = w.preFilter; s; ) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                r = !1,
                (i = se.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }),
                s = s.slice(r.length));
                for (a in w.filter)
                    !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : _(e, u).slice(0)
        }
        ,
        k = t.compile = function(e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = E(e)),
                n = t.length; n--; )
                    o = m(t[n]),
                    o[M] ? r.push(o) : i.push(o);
                (o = z(e, y(i, r))).selector = e
            }
            return o
        }
        ,
        S = t.select = function(e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e, p = !r && E(e = c.selector || e);
            if (n = n || [],
            1 === p.length) {
                if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !w.relative[s = a.type]); )
                    if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && f(o)))
                            return Q.apply(n, r),
                            n;
                        break
                    }
            }
            return (c || k(e, p))(r, t, !H, n, !t || ve.test(e) && l(t.parentNode) || t),
            n
        }
        ,
        b.sortStable = M.split("").sort(X).join("") === M,
        b.detectDuplicates = !!j,
        A(),
        b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("fieldset"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        b.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    he.find = xe,
    he.expr = xe.selectors,
    he.expr[":"] = he.expr.pseudos,
    he.uniqueSort = he.unique = xe.uniqueSort,
    he.text = xe.getText,
    he.isXMLDoc = xe.isXML,
    he.contains = xe.contains,
    he.escapeSelector = xe.escape;
    var be = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && he(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , we = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , Te = he.expr.match.needsContext
      , Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , Ee = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    he.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(he(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (he.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                he.find(e, i[t], n);
            return r > 1 ? he.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
        }
    });
    var ke, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || ke,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof he ? t[0] : t,
                he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)),
                Ce.test(r[1]) && he.isPlainObject(t))
                    for (r in t)
                        he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = te.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }
    ).prototype = he.fn,
    ke = he(te);
    var Ne = /^(?:parents|prev(?:Until|All))/
      , De = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && he(e);
            if (!Te.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e),
            he.merge([], e.childNodes))
        }
    }, function(e, t) {
        he.fn[e] = function(n, r) {
            var i = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = he.filter(r, i)),
            this.length > 1 && (De[e] || he.uniqueSort(i),
            Ne.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var je = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, r, i, o = [], a = [], u = -1, l = function() {
            for (i = i || e.once,
            r = t = !0; a.length; u = -1)
                for (n = a.shift(); ++u < o.length; )
                    !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, c = {
            add: function() {
                return o && (n && !t && (u = o.length - 1,
                a.push(n)),
                function t(n) {
                    he.each(n, function(n, r) {
                        he.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== he.type(r) && t(r)
                    })
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return he.each(arguments, function(e, t) {
                    for (var n; (n = he.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? he.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                a.push(n),
                t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
    ,
    he.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return he.Deferred(function(t) {
                        he.each(n, function(n, r) {
                            var i = he.isFunction(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    function o(t, n, r, i) {
                        return function() {
                            var s = this
                              , c = arguments
                              , f = function() {
                                var e, f;
                                if (!(t < a)) {
                                    if ((e = r.apply(s, c)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    he.isFunction(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i)) : (a++,
                                    f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0,
                                    c = [e]),
                                    (i || n.resolveWith)(s, c))
                                }
                            }
                              , p = i ? f : function() {
                                try {
                                    f()
                                } catch (e) {
                                    he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace),
                                    t + 1 >= a && (r !== l && (s = void 0,
                                    c = [e]),
                                    n.rejectWith(s, c))
                                }
                            }
                            ;
                            t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()),
                            e.setTimeout(p))
                        }
                    }
                    var a = 0;
                    return he.Deferred(function(e) {
                        n[0][3].add(o(0, e, he.isFunction(i) ? i : u, e.notifyWith)),
                        n[1][3].add(o(0, e, he.isFunction(t) ? t : u)),
                        n[2][3].add(o(0, e, he.isFunction(r) ? r : l))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? he.extend(e, i) : i
                }
            }
              , o = {};
            return he.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = re.call(arguments)
              , o = he.Deferred()
              , a = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? re.call(arguments) : n,
                    --t || o.resolveWith(r, i)
                }
            };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t),
            "pending" === o.state() || he.isFunction(i[n] && i[n].then)))
                return o.then();
            for (; n--; )
                c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    he.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var qe = he.Deferred();
    he.fn.ready = function(e) {
        return qe.then(e).catch(function(e) {
            he.readyException(e)
        }),
        this
    }
    ,
    he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0,
            !0 !== e && --he.readyWait > 0 || qe.resolveWith(te, [he]))
        }
    }),
    he.ready.then = qe.then,
    "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", f),
    e.addEventListener("load", f));
    var Le = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === he.type(n)) {
            i = !0;
            for (s in n)
                Le(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        he.isFunction(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(he(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , He = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    p.uid = 1,
    p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[he.camelCase(t)] = n;
            else
                for (r in t)
                    i[he.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t),
                    t = t in r ? [t] : t.match(je) || []),
                    n = t.length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Fe = new p
      , Oe = new p
      , Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Re = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return Oe.hasData(e) || Fe.hasData(e)
        },
        data: function(e, t, n) {
            return Oe.access(e, t, n)
        },
        removeData: function(e, t) {
            Oe.remove(e, t)
        },
        _data: function(e, t, n) {
            return Fe.access(e, t, n)
        },
        _removeData: function(e, t) {
            Fe.remove(e, t)
        }
    }),
    he.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Oe.get(o),
                1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = he.camelCase(r.slice(5)),
                        h(o, r, i[r]));
                    Fe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Oe.set(this, e)
            }) : Le(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Oe.get(o, e)))
                        return n;
                    if (void 0 !== (n = h(o, e)))
                        return n
                } else
                    this.each(function() {
                        Oe.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Oe.remove(this, e)
            })
        }
    }),
    he.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Fe.get(e, t),
                n && (!r || Array.isArray(n) ? r = Fe.access(e, t, he.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = he._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                he.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Fe.get(e, n) || Fe.access(e, n, {
                empty: he.Callbacks("once memory").add(function() {
                    Fe.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    he.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = he.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Fe.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ie = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$","i")
      , We = ["Top", "Right", "Bottom", "Left"]
      , $e = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
    }
      , Be = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }
      , _e = {};
    he.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $e(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i
      , Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Ue = /^$|\/(?:java|ecma)script/i
      , Ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ve.optgroup = Ve.option,
    Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead,
    Ve.th = Ve.td;
    var Ge = /<|&#?\w+;/;
    !function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div"))
          , t = te.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = te.documentElement
      , Qe = /^key/
      , Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ke = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Fe.get(e);
            if (v)
                for (n.handler && (o = n,
                n = o.handler,
                i = o.selector),
                i && he.find.matchesSelector(Ye, i),
                n.guid || (n.guid = he.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(t) {
                    return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(je) || [""]).length; l--; )
                    s = Ke.exec(t[l]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = he.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = he.event.special[d] || {},
                    c = he.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && he.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || (p = u[d] = [],
                    p.delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    he.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Fe.hasData(e) && Fe.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(je) || [""]).length; l--; )
                    if (s = Ke.exec(t[l]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = he.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || he.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            he.event.remove(e, d + t[l], n, r, !0);
                he.isEmptyObject(u) && Fe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = he.event.fix(e), u = new Array(arguments.length), l = (Fe.get(this, "events") || {})[s.type] || [], c = he.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = he.event.handlers.call(this, s, l),
                t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            r = t[n],
                            i = r.selector + " ",
                            void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(l) > -1 : he.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    he.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    he.Event = function(e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && he.extend(this, t),
        this.timeStamp = e && e.timeStamp || he.now(),
        void (this[he.expando] = !0)) : new he.Event(e,t)
    }
    ,
    he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp),
    he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || he.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    he.fn.extend({
        on: function(e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = T),
            this.each(function() {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , et = /<script|<style|<link/i
      , tt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , nt = /^true\/(.*)/
      , rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ze, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (a = y(s),
                o = y(e),
                r = 0,
                i = o.length; r < i; r++)
                    j(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e),
                    a = a || y(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        D(o[r], a[r]);
                else
                    D(e, s);
            return (a = y(s, "script")).length > 0 && x(a, !u && y(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (He(n)) {
                    if (t = n[Fe.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                        n[Fe.expando] = void 0
                    }
                    n[Oe.expando] && (n[Oe.expando] = void 0)
                }
        }
    }),
    he.fn.extend({
        detach: function(e) {
            return q(this, e, !0)
        },
        remove: function(e) {
            return q(this, e)
        },
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (he.cleanData(y(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ve[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return A(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var n, r = [], i = he(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                he(i[a])[t](n),
                oe.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var it = /^margin/
      , ot = new RegExp("^(" + Me + ")(?!px)[a-z%]+$","i")
      , at = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                s.innerHTML = "",
                Ye.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top,
                o = "2px" === t.marginLeft,
                r = "4px" === t.width,
                s.style.marginRight = "50%",
                i = "4px" === t.marginRight,
                Ye.removeChild(a),
                s = null
            }
        }
        var n, r, i, o, a = te.createElement("div"), s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        pe.clearCloneStyle = "content-box" === s.style.backgroundClip,
        a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        a.appendChild(s),
        he.extend(pe, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return t(),
                r
            },
            pixelMarginRight: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                o
            }
        }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/
      , ut = /^--/
      , lt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ct = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ft = ["Webkit", "Moz", "ms"]
      , pt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n
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
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = he.camelCase(t), u = ut.test(t), l = e.style;
                return u || (t = O(s)),
                a = he.cssHooks[t] || he.cssHooks[s],
                void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = Ie.exec(n)) && i[1] && (n = g(e, t, i),
                o = "number"),
                void (null != n && n === n && ("number" === o && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")),
                pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = he.camelCase(t);
            return ut.test(t) || (t = O(s)),
            (a = he.cssHooks[t] || he.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = L(e, t, r)),
            "normal" === i && t in ct && (i = ct[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r) : Be(e, lt, function() {
                        return M(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = r && at(e), a = r && R(e, t, r, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return a && (i = Ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = he.css(e, t)),
                P(e, n, a)
            }
        }
    }),
    he.cssHooks.marginLeft = H(pe.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        it.test(e) || (he.cssHooks[e + t].set = P)
    }),
    he.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = at(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = he.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    he.Tween = I,
    I.prototype = {
        constructor: I,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || he.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (he.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : I.propHooks._default.set(this),
            this
        }
    },
    I.prototype.init.prototype = I.prototype,
    I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    he.fx = I.prototype.init,
    he.fx.step = {};
    var dt, ht, gt = /^(?:toggle|show|hide)$/, vt = /queueHooks$/;
    he.Animation = he.extend(X, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return g(n.elem, e, Ie.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            he.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(je);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                X.tweeners[n] = X.tweeners[n] || [],
                X.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && $e(e), v = Fe.get(e, "fxshow");
            n.queue || (null == (a = he._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    he.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (r in t)
                if (i = t[r],
                gt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || he.style(e, r)
                }
            if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(d)) {
                f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Fe.get(e, "display")),
                "none" === (c = he.css(e, "display")) && (l ? c = l : (m([e], !0),
                l = e.style.display || l,
                c = he.css(e, "display"),
                m([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === he.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1;
                for (r in d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Fe.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && m([e], !0),
                    p.done(function() {
                        g || m([e]),
                        Fe.remove(e, "fxshow");
                        for (r in d)
                            he.style(e, r, d[r])
                    })),
                    u = _(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
            }
        }
        ],
        prefilter: function(e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e)
        }
    }),
    he.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            he.isFunction(r.old) && r.old.call(this),
            r.queue && he.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    he.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter($e).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = he.isEmptyObject(e)
              , o = he.speed(t, n, r)
              , a = function() {
                var t = X(this, he.extend({}, e), o);
                (i || Fe.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = he.timers
                  , a = Fe.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && vt.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || he.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Fe.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = he.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                he.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    he.each(["toggle", "show", "hide"], function(e, t) {
        var n = he.fn[t];
        he.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i)
        }
    }),
    he.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        he.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    he.timers = [],
    he.fx.tick = function() {
        var e, t = 0, n = he.timers;
        for (dt = he.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(),
        dt = void 0
    }
    ,
    he.fx.timer = function(e) {
        he.timers.push(e),
        he.fx.start()
    }
    ,
    he.fx.interval = 13,
    he.fx.start = function() {
        ht || (ht = !0,
        W())
    }
    ,
    he.fx.stop = function() {
        ht = null
    }
    ,
    he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    he.fn.delay = function(t, n) {
        return t = he.fx ? he.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = te.createElement("input")
          , t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox",
        pe.checkOn = "" !== e.value,
        pe.optSelected = t.selected,
        (e = te.createElement("input")).value = "t",
        e.type = "radio",
        pe.radioValue = "t" === e.value
    }();
    var mt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return Le(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }),
    he.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)),
                void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = he.find.attr(e, t),
                null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(je);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    mt = {
        set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = yt[a],
            yt[a] = i,
            i = null != n(e, t, r) ? a : null,
            yt[a] = o),
            i
        }
    });
    var xt = /^(?:input|select|textarea|button)$/i
      , bt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return Le(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e]
            })
        }
    }),
    he.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t,
                i = he.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    pe.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    }),
    he.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (he.isFunction(e))
                return this.each(function(t) {
                    he(this).addClass(e.call(this, t, V(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[u++]; )
                    if (i = V(n),
                    r = 1 === n.nodeType && " " + U(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = U(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (he.isFunction(e))
                return this.each(function(t) {
                    he(this).removeClass(e.call(this, t, V(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[u++]; )
                    if (i = V(n),
                    r = 1 === n.nodeType && " " + U(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = U(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                he(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = he(this),
                    o = e.match(je) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = V(this)) && Fe.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + U(V(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var wt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = he.isFunction(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, he(this).val()) : e,
                null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = he.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
            "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }),
    he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : U(he.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options, a = e.selectedIndex, s = "select-one" === e.type, u = s ? null : [], l = s ? a + 1 : o.length;
                    for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                        if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(),
                            s)
                                return t;
                            u.push(t)
                        }
                    return u
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--; )
                        r = i[a],
                        (r.selected = he.inArray(he.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = he.inArray(he(e).val(), t) > -1
            }
        },
        pe.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || te], d = le.call(t, "type") ? t.type : t, h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || te,
            3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(d + he.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
            d = h.shift(),
            h.sort()),
            l = d.indexOf(":") < 0 && "on" + d,
            t = t[he.expando] ? t : new he.Event(d,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : he.makeArray(n, [t]),
            f = he.event.special[d] || {},
            i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !he.isWindow(r)) {
                    for (u = f.delegateType || d,
                    Tt.test(u + d) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        s = a;
                    s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || d,
                    (c = (Fe.get(a, "events") || {})[t.type] && Fe.get(a, "handle")) && c.apply(a, n),
                    (c = l && a[l]) && c.apply && He(a) && (t.result = c.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !He(r) || l && he.isFunction(r[d]) && !he.isWindow(r) && ((s = r[l]) && (r[l] = null),
                he.event.triggered = d,
                r[d](),
                he.event.triggered = void 0,
                s && (r[l] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(r, null, t)
        }
    }),
    he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return he.event.trigger(e, t, n, !0)
        }
    }),
    he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        he.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    pe.focusin = "onfocusin"in e,
    pe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = Fe.access(r, t);
                i || r.addEventListener(e, n, !0),
                Fe.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = Fe.access(r, t) - 1;
                i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, !0),
                Fe.remove(r, t))
            }
        }
    });
    var Ct = e.location
      , Et = he.now()
      , kt = /\?/;
    he.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t),
        n
    }
    ;
    var St = /\[\]$/
      , Nt = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , jt = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = he.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e))
            he.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                G(n, e[n], t, i);
        return r.join("&")
    }
    ,
    he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = te.createElement("a");
    Wt.href = Ct.href,
    he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Ft.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e)
        },
        ajaxPrefilter: Y(Rt),
        ajaxTransport: Y(Mt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var l, p, d, b, w, T = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                i = void 0,
                a = s || "",
                C.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (b = K(h, C, r)),
                b = Z(h, b, C, l),
                l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (he.lastModified[o] = w),
                (w = C.getResponseHeader("etag")) && (he.etag[o] = w)),
                204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                p = b.data,
                d = b.error,
                l = !d)) : (d = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                C.status = t,
                C.statusText = (n || T) + "",
                l ? m.resolveWith(g, [p, T, C]) : m.rejectWith(g, [C, T, d]),
                C.statusCode(x),
                x = void 0,
                f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]),
                y.fireWith(g, [C, T]),
                f && (v.trigger("ajaxComplete", [C, h]),
                --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = he.ajaxSetup({}, n), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? he(g) : he.event, m = he.Deferred(), y = he.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = Ht.exec(a); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            C.always(e[C.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (m.promise(C),
            h.url = ((t || h.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(je) || [""],
            null == h.crossDomain) {
                l = te.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)),
            Q(Rt, h, n, C),
            c)
                return C;
            (f = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Ot.test(h.type),
            o = h.url.replace(qt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(o.length),
            h.data && (o += (kt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Lt, "$1"),
            d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d),
            h.url = o + d),
            h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]),
            he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers)
                C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c))
                return C.abort();
            if (T = "abort",
            y.add(h.complete),
            C.done(h.success),
            C.fail(h.error),
            i = Q(Mt, h, n, C)) {
                if (C.readyState = 1,
                f && v.trigger("ajaxSend", [C, h]),
                c)
                    return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(b, r)
                } catch (e) {
                    if (c)
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script")
        }
    }),
    he.each(["get", "post"], function(e, t) {
        he[t] = function(e, n, r, i) {
            return he.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            he.ajax(he.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, he.isPlainObject(e) && e))
        }
    }),
    he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])),
            t = he(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = he(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e)
    }
    ,
    he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var $t = {
        0: 200,
        1223: 204
    }
      , Bt = he.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials"in Bt,
    pe.ajax = Bt = !!Bt,
    he.ajaxTransport(function(t) {
        var n, r;
        if (pe.cors || Bt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e),
                e
            }
        }
    }),
    he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    te.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var _t = []
      , zt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = _t.pop() || he.expando + "_" + Et++;
            return this[e] = !0,
            e
        }
    }),
    he.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(zt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || he.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? he(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                _t.push(i)),
                a && he.isFunction(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    pe.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    he.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var r, i, o;
        return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""),
        r = t.createElement("base"),
        r.href = te.location.href,
        t.head.appendChild(r)) : t = te),
        i = Ce.exec(e),
        o = !n && [],
        i ? [t.createElement(i[1])] : (i = b([e], t, o),
        o && o.length && he(o).remove(),
        he.merge([], i.childNodes))
    }
    ,
    he.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = U(e.slice(s)),
        e = e.slice(0, s)),
        he.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && he.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    he.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = he.css(e, "position"), c = he(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = he.css(e, "top"),
            u = he.css(e, "left"),
            ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (r = c.position(),
            a = r.top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    he.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    he.offset.setOffset(this, e, t)
                });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(),
            t = o.ownerDocument,
            n = t.documentElement,
            i = t.defaultView,
            {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                i(e[0], "html") || (r = e.offset()),
                r = {
                    top: r.top + he.css(e[0], "borderTopWidth", !0),
                    left: r.left + he.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - r.top - he.css(n, "marginTop", !0),
                    left: t.left - r.left - he.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ye
            })
        }
    }),
    he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(r) {
            return Le(this, function(e, r, i) {
                var o;
                return he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }),
    he.each(["top", "left"], function(e, t) {
        he.cssHooks[t] = H(pe.pixelPosition, function(e, n) {
            if (n)
                return n = L(e, t),
                ot.test(n) ? he(e).position()[t] + "px" : n
        })
    }),
    he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            he.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Le(this, function(t, n, i) {
                    var o;
                    return he.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    he.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    he.holdReady = function(e) {
        e ? he.readyWait++ : he.ready(!0)
    }
    ,
    he.isArray = Array.isArray,
    he.parseJSON = JSON.parse,
    he.nodeName = i,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var Xt = e.jQuery
      , Ut = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Ut),
        t && e.jQuery === he && (e.jQuery = Xt),
        he
    }
    ,
    t || (e.jQuery = e.$ = he),
    he
});

/**
 * @module       Migrate
 * @author       jQuery Foundation and other contributors
 * @see          https://code.jquery.com/jquery/
 * @license      MIT
 * @version      3.0.0
 * @requires     module:jQuery
 */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(a, b) {
    "use strict";
    function c(c) {
        var d = b.console;
        e[c] || (e[c] = !0,
        a.migrateWarnings.push(c),
        d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c),
        a.migrateTrace && d.trace && d.trace()))
    }
    function d(a, b, d, e) {
        Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return c(e),
                d
            }
        })
    }
    a.migrateVersion = "3.0.0",
    function() {
        var c = b.console && b.console.log && function() {
            b.console.log.apply(b.console, arguments)
        }
          , d = /^[12]\./;
        c && (a && !d.test(a.fn.jquery) || c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        a.migrateWarnings && c("JQMIGRATE: Migrate plugin loaded multiple times"),
        c("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion))
    }();
    var e = {};
    a.migrateWarnings = [],
    void 0 === a.migrateTrace && (a.migrateTrace = !0),
    a.migrateReset = function() {
        e = {},
        a.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === document.compatMode && c("jQuery is not compatible with Quirks Mode");
    var f = a.fn.init
      , g = a.isNumeric
      , h = a.find
      , i = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/
      , j = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    a.fn.init = function(a) {
        var b = Array.prototype.slice.call(arguments);
        return "string" == typeof a && "#" === a && (c("jQuery( '#' ) is not a valid selector"),
        b[0] = []),
        f.apply(this, b)
    }
    ,
    a.fn.init.prototype = a.fn,
    a.find = function(a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && i.test(a))
            try {
                document.querySelector(a)
            } catch (d) {
                a = a.replace(j, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a),
                    c("Attribute selector with '#' must be quoted: " + b[0]),
                    b[0] = a
                } catch (e) {
                    c("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
        return h.apply(this, b)
    }
    ;
    var k;
    for (k in h)
        Object.prototype.hasOwnProperty.call(h, k) && (a.find[k] = h[k]);
    a.fn.size = function() {
        return c("jQuery.fn.size() is deprecated; use the .length property"),
        this.length
    }
    ,
    a.parseJSON = function() {
        return c("jQuery.parseJSON is deprecated; use JSON.parse"),
        JSON.parse.apply(null, arguments)
    }
    ,
    a.isNumeric = function(b) {
        function d(b) {
            var c = b && b.toString();
            return !a.isArray(b) && c - parseFloat(c) + 1 >= 0
        }
        var e = g(b)
          , f = d(b);
        return e !== f && c("jQuery.isNumeric() should not be called on constructed objects"),
        f
    }
    ,
    d(a, "unique", a.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"),
    d(a.expr, "filters", a.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"),
    d(a.expr, ":", a.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
    var l = a.ajax;
    a.ajax = function() {
        var a = l.apply(this, arguments);
        return a.promise && (d(a, "success", a.done, "jQXHR.success is deprecated and removed"),
        d(a, "error", a.fail, "jQXHR.error is deprecated and removed"),
        d(a, "complete", a.always, "jQXHR.complete is deprecated and removed")),
        a
    }
    ;
    var m = a.fn.removeAttr
      , n = a.fn.toggleClass
      , o = /\S+/g;
    a.fn.removeAttr = function(b) {
        var d = this;
        return a.each(b.match(o), function(b, e) {
            a.expr.match.bool.test(e) && (c("jQuery.fn.removeAttr no longer sets boolean properties: " + e),
            d.prop(e, !1))
        }),
        m.apply(this, arguments)
    }
    ,
    a.fn.toggleClass = function(b) {
        return void 0 !== b && "boolean" != typeof b ? n.apply(this, arguments) : (c("jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var c = this.getAttribute && this.getAttribute("class") || "";
            c && a.data(this, "__className__", c),
            this.setAttribute && this.setAttribute("class", c || b === !1 ? "" : a.data(this, "__className__") || "")
        }))
    }
    ;
    var p = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function() {
            var a;
            return p = !0,
            a = d.apply(this, arguments),
            p = !1,
            a
        }
        )
    }),
    a.swap = function(a, b, d, e) {
        var f, g, h = {};
        p || c("jQuery.swap() is undocumented and deprecated");
        for (g in b)
            h[g] = a.style[g],
            a.style[g] = b[g];
        f = d.apply(a, e || []);
        for (g in b)
            a.style[g] = h[g];
        return f
    }
    ;
    var q = a.data;
    a.data = function(b, d, e) {
        var f;
        return d && d !== a.camelCase(d) && (f = a.hasData(b) && q.call(this, b),
        f && d in f) ? (c("jQuery.data() always sets/gets camelCased names: " + d),
        arguments.length > 2 && (f[d] = e),
        f[d]) : q.apply(this, arguments)
    }
    ;
    var r = a.Tween.prototype.run;
    a.Tween.prototype.run = function(b) {
        a.easing[this.easing].length > 1 && (c('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'),
        a.easing[this.easing] = a.easing[this.easing].bind(a.easing, b, this.options.duration * b, 0, 1, this.options.duration)),
        r.apply(this, arguments)
    }
    ;
    var s = a.fn.load
      , t = a.event.fix;
    a.event.props = [],
    a.event.fixHooks = {},
    a.event.fix = function(b) {
        var d, e = b.type, f = this.fixHooks[e], g = a.event.props;
        if (g.length)
            for (c("jQuery.event.props are deprecated and removed: " + g.join()); g.length; )
                a.event.addProp(g.pop());
        if (f && !f._migrated_ && (f._migrated_ = !0,
        c("jQuery.event.fixHooks are deprecated and removed: " + e),
        (g = f.props) && g.length))
            for (; g.length; )
                a.event.addProp(g.pop());
        return d = t.call(this, b),
        f && f.filter ? f.filter(d, b) : d
    }
    ,
    a.each(["load", "unload", "error"], function(b, d) {
        a.fn[d] = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === d && "string" == typeof a[0] ? s.apply(this, a) : (c("jQuery.fn." + d + "() is deprecated"),
            a.splice(0, 0, d),
            arguments.length ? this.on.apply(this, a) : (this.triggerHandler.apply(this, a),
            this))
        }
    }),
    a(function() {
        a(document).triggerHandler("ready")
    }),
    a.event.special.ready = {
        setup: function() {
            this === document && c("'ready' event is deprecated")
        }
    },
    a.fn.extend({
        bind: function(a, b, d) {
            return c("jQuery.fn.bind() is deprecated"),
            this.on(a, null, b, d)
        },
        unbind: function(a, b) {
            return c("jQuery.fn.unbind() is deprecated"),
            this.off(a, null, b)
        },
        delegate: function(a, b, d, e) {
            return c("jQuery.fn.delegate() is deprecated"),
            this.on(b, a, d, e)
        },
        undelegate: function(a, b, d) {
            return c("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d)
        }
    });
    var u = a.fn.offset;
    a.fn.offset = function() {
        var b, d = this[0], e = {
            top: 0,
            left: 0
        };
        return d && d.nodeType ? (b = (d.ownerDocument || document).documentElement,
        a.contains(b, d) ? u.apply(this, arguments) : (c("jQuery.fn.offset() requires an element connected to a document"),
        e)) : (c("jQuery.fn.offset() requires a valid DOM element"),
        e)
    }
    ;
    var v = a.param;
    a.param = function(b, d) {
        var e = a.ajaxSettings && a.ajaxSettings.traditional;
        return void 0 === d && e && (c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        d = e),
        v.call(this, b, d)
    }
    ;
    var w = a.fn.andSelf || a.fn.addBack;
    a.fn.andSelf = function() {
        return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
    }
    ;
    var x = a.Deferred
      , y = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
    a.Deferred = function(b) {
        var d = x()
          , e = d.promise();
        return d.pipe = e.pipe = function() {
            var b = arguments;
            return c("deferred.pipe() is deprecated"),
            a.Deferred(function(c) {
                a.each(y, function(f, g) {
                    var h = a.isFunction(b[f]) && b[f];
                    d[g[1]](function() {
                        var b = h && h.apply(this, arguments);
                        b && a.isFunction(b.promise) ? b.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g[0] + "With"](this === e ? c.promise() : this, h ? [b] : arguments)
                    })
                }),
                b = null
            }).promise()
        }
        ,
        b && b.call(d, d),
        d
    }
}(jQuery, window);

/**
 * @module       Cookie
 * @see          https://github.com/carhartl/jquery-cookie
 * @license      MIT
 * @requires     module:jQuery
 */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }
    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }
    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }
    function t(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")),
            u.json ? JSON.parse(e) : e
        } catch (e) {}
    }
    function r(n, o) {
        var i = u.raw ? n : t(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g
      , u = e.cookie = function(t, c, s) {
        if (arguments.length > 1 && !e.isFunction(c)) {
            if ("number" == typeof (s = e.extend({}, u.defaults, s)).expires) {
                var d = s.expires
                  , f = s.expires = new Date;
                f.setMilliseconds(f.getMilliseconds() + 864e5 * d)
            }
            return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
        }
        for (var a = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; l < m; l++) {
            var x = p[l].split("=")
              , g = o(x.shift())
              , j = x.join("=");
            if (t === g) {
                a = r(j, c);
                break
            }
            t || void 0 === (j = r(j)) || (a[g] = j)
        }
        return a
    }
    ;
    u.defaults = {},
    e.removeCookie = function(n, o) {
        return e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })),
        !e.cookie(n)
    }
});

/**
 * @module       Device.js
 * @see          https://github.com/matthewhudson/device.js
 * @license      MIT
 */
(function() {
    var n, e, o, t, i, r, d, a, c, l;
    e = window.device,
    n = {},
    window.device = n,
    t = window.document.documentElement,
    l = window.navigator.userAgent.toLowerCase(),
    n.ios = function() {
        return n.iphone() || n.ipod() || n.ipad()
    }
    ,
    n.iphone = function() {
        return !n.windows() && i("iphone")
    }
    ,
    n.ipod = function() {
        return i("ipod")
    }
    ,
    n.ipad = function() {
        return i("ipad")
    }
    ,
    n.android = function() {
        return !n.windows() && i("android")
    }
    ,
    n.androidPhone = function() {
        return n.android() && i("mobile")
    }
    ,
    n.androidTablet = function() {
        return n.android() && !i("mobile")
    }
    ,
    n.blackberry = function() {
        return i("blackberry") || i("bb10") || i("rim")
    }
    ,
    n.blackberryPhone = function() {
        return n.blackberry() && !i("tablet")
    }
    ,
    n.blackberryTablet = function() {
        return n.blackberry() && i("tablet")
    }
    ,
    n.windows = function() {
        return i("windows")
    }
    ,
    n.windowsPhone = function() {
        return n.windows() && i("phone")
    }
    ,
    n.windowsTablet = function() {
        return n.windows() && i("touch") && !n.windowsPhone()
    }
    ,
    n.fxos = function() {
        return (i("(mobile;") || i("(tablet;")) && i("; rv:")
    }
    ,
    n.fxosPhone = function() {
        return n.fxos() && i("mobile")
    }
    ,
    n.fxosTablet = function() {
        return n.fxos() && i("tablet")
    }
    ,
    n.meego = function() {
        return i("meego")
    }
    ,
    n.cordova = function() {
        return window.cordova && "file:" === location.protocol
    }
    ,
    n.nodeWebkit = function() {
        return "object" == typeof window.process
    }
    ,
    n.mobile = function() {
        return n.androidPhone() || n.iphone() || n.ipod() || n.windowsPhone() || n.blackberryPhone() || n.fxosPhone() || n.meego()
    }
    ,
    n.tablet = function() {
        return n.ipad() || n.androidTablet() || n.blackberryTablet() || n.windowsTablet() || n.fxosTablet()
    }
    ,
    n.desktop = function() {
        return !n.tablet() && !n.mobile()
    }
    ,
    n.television = function() {
        var n, e = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
        for (n = 0; n < e.length; ) {
            if (i(e[n]))
                return !0;
            n++
        }
        return !1
    }
    ,
    n.portrait = function() {
        return window.innerHeight / window.innerWidth > 1
    }
    ,
    n.landscape = function() {
        return window.innerHeight / window.innerWidth < 1
    }
    ,
    n.noConflict = function() {
        return window.device = e,
        this
    }
    ,
    i = function(n) {
        return -1 !== l.indexOf(n)
    }
    ,
    d = function(n) {
        var e;
        return e = new RegExp(n,"i"),
        t.className.match(e)
    }
    ,
    o = function(n) {
        var e = null;
        d(n) || (e = t.className.replace(/^\s+|\s+$/g, ""),
        t.className = e + " " + n)
    }
    ,
    c = function(n) {
        d(n) && (t.className = t.className.replace(" " + n, ""))
    }
    ,
    n.ios() ? n.ipad() ? o("ios ipad tablet") : n.iphone() ? o("ios iphone mobile") : n.ipod() && o("ios ipod mobile") : n.android() ? o(n.androidTablet() ? "android tablet" : "android mobile") : n.blackberry() ? o(n.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : n.windows() ? o(n.windowsTablet() ? "windows tablet" : n.windowsPhone() ? "windows mobile" : "desktop") : n.fxos() ? o(n.fxosTablet() ? "fxos tablet" : "fxos mobile") : n.meego() ? o("meego mobile") : n.nodeWebkit() ? o("node-webkit") : n.television() ? o("television") : n.desktop() && o("desktop"),
    n.cordova() && o("cordova"),
    r = function() {
        n.landscape() ? (c("portrait"),
        o("landscape")) : (c("landscape"),
        o("portrait"))
    }
    ,
    a = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize",
    window.addEventListener ? window.addEventListener(a, r, !1) : window.attachEvent ? window.attachEvent(a, r) : window[a] = r,
    r(),
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return n
    }) : "undefined" != typeof module && module.exports ? module.exports = n : window.device = n
}
).call(this);

/**
 * @module       ResizeEvent
 * @see          https://benalman.com/projects/jquery-resize-plugin/
 * @license      MIT
 * @requires     module:jQuery
 */
(function($, h, c) {
    var a = $([]), e = $.resize = $.extend($.resize, {}), i, k = "setTimeout", j = "resize", d = j + "-special-event", b = "delay", f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = {
        setup: function() {
            if (!e[f] && this[k]) {
                return false
            }
            var l = $(this);
            a = a.add(l);
            $.data(this, d, {
                w: l.width(),
                h: l.height()
            });
            if (a.length === 1) {
                g()
            }
        },
        teardown: function() {
            if (!e[f] && this[k]) {
                return false
            }
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) {
                clearTimeout(i)
            }
        },
        add: function(l) {
            if (!e[f] && this[k]) {
                return false
            }
            var n;
            function m(s, o, p) {
                var q = $(this)
                  , r = $.data(this, d);
                r.w = o !== c ? o : q.width();
                r.h = p !== c ? p : q.height();
                n.apply(this, arguments)
            }
            if ($.isFunction(l)) {
                n = l;
                return m
            } else {
                n = l.handler;
                l.handler = m
            }
        }
    };
    function g() {
        i = h[k](function() {
            a.each(function() {
                var n = $(this)
                  , m = n.width()
                  , l = n.height()
                  , o = $.data(this, d);
                if (m !== o.w || l !== o.h) {
                    n.trigger(j, [o.w = m, o.h = l])
                }
            });
            g()
        }, e[b])
    }
}
)(jQuery, this);

/**
 * @module       Easing
 * @author       George McGinley Smith
 * @see          https://gsgd.co.uk/sandbox/jquery/easing/
 * @license      BSD
 * @version      1.4.0
 * @requires     module:jQuery
 */
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return n(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    function e(n) {
        var e = 7.5625
          , t = 2.75;
        return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
    }
    n.easing.jswing = n.easing.swing;
    var t = Math.pow
      , u = Math.sqrt
      , r = Math.sin
      , i = Math.cos
      , a = Math.PI
      , c = 1.70158
      , o = 1.525 * c
      , s = 2 * a / 3
      , f = 2 * a / 4.5;
    n.extend(n.easing, {
        def: "easeOutQuad",
        swing: function(e) {
            return n.easing[n.easing.def](e)
        },
        easeInQuad: function(n) {
            return n * n
        },
        easeOutQuad: function(n) {
            return 1 - (1 - n) * (1 - n)
        },
        easeInOutQuad: function(n) {
            return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2
        },
        easeInCubic: function(n) {
            return n * n * n
        },
        easeOutCubic: function(n) {
            return 1 - t(1 - n, 3)
        },
        easeInOutCubic: function(n) {
            return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2
        },
        easeInQuart: function(n) {
            return n * n * n * n
        },
        easeOutQuart: function(n) {
            return 1 - t(1 - n, 4)
        },
        easeInOutQuart: function(n) {
            return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2
        },
        easeInQuint: function(n) {
            return n * n * n * n * n
        },
        easeOutQuint: function(n) {
            return 1 - t(1 - n, 5)
        },
        easeInOutQuint: function(n) {
            return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2
        },
        easeInSine: function(n) {
            return 1 - i(n * a / 2)
        },
        easeOutSine: function(n) {
            return r(n * a / 2)
        },
        easeInOutSine: function(n) {
            return -(i(a * n) - 1) / 2
        },
        easeInExpo: function(n) {
            return 0 === n ? 0 : t(2, 10 * n - 10)
        },
        easeOutExpo: function(n) {
            return 1 === n ? 1 : 1 - t(2, -10 * n)
        },
        easeInOutExpo: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2
        },
        easeInCirc: function(n) {
            return 1 - u(1 - t(n, 2))
        },
        easeOutCirc: function(n) {
            return u(1 - t(n - 1, 2))
        },
        easeInOutCirc: function(n) {
            return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2
        },
        easeInElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s)
        },
        easeOutElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1
        },
        easeInOutElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -t(2, 20 * n - 10) * r((20 * n - 11.125) * f) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1
        },
        easeInBack: function(n) {
            return 2.70158 * n * n * n - c * n * n
        },
        easeOutBack: function(n) {
            return 1 + 2.70158 * t(n - 1, 3) + c * t(n - 1, 2)
        },
        easeInOutBack: function(n) {
            return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2
        },
        easeInBounce: function(n) {
            return 1 - e(1 - n)
        },
        easeOutBounce: e,
        easeInOutBounce: function(n) {
            return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2
        }
    })
});

/**
 * @module       TouchSwipe
 * @see          https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @license      MIT
 * @version      1.6.18
 */
!function(e) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
    "use strict";
    function n(n) {
        return !n || void 0 !== n.allowPageScroll || void 0 === n.swipe && void 0 === n.swipeStatus || (n.allowPageScroll = c),
        void 0 !== n.click && void 0 === n.tap && (n.tap = n.click),
        n || (n = {}),
        n = e.extend({}, e.fn.swipe.defaults, n),
        this.each(function() {
            var r = e(this)
              , i = r.data(D);
            i || (i = new t(this,n),
            r.data(D, i))
        })
    }
    function t(n, t) {
        function P(n) {
            if (!(ce() || e(n.target).closest(t.excludedElements, Ve).length > 0)) {
                var r = n.originalEvent ? n.originalEvent : n;
                if (!r.pointerType || "mouse" != r.pointerType || 0 != t.fallbackToMouseEvents) {
                    var i, l = r.touches, o = l ? l[0] : r;
                    return We = y,
                    l ? ze = l.length : !1 !== t.preventDefaultEvents && n.preventDefault(),
                    je = 0,
                    Ne = null,
                    He = null,
                    Xe = null,
                    _e = 0,
                    qe = 0,
                    Qe = 0,
                    Ce = 1,
                    Fe = 0,
                    Ye = we(),
                    ue(),
                    pe(0, o),
                    !l || ze === t.fingers || t.fingers === T || X() ? (Ze = Oe(),
                    2 == ze && (pe(1, l[1]),
                    qe = Qe = be(Ge[0].start, Ge[1].start)),
                    (t.swipeStatus || t.pinchStatus) && (i = j(r, We))) : i = !1,
                    !1 === i ? (We = x,
                    j(r, We),
                    i) : (t.hold && (nn = setTimeout(e.proxy(function() {
                        Ve.trigger("hold", [r.target]),
                        t.hold && (i = t.hold.call(Ve, r, r.target))
                    }, this), t.longTapThreshold)),
                    se(!0),
                    null)
                }
            }
        }
        function L(e) {
            var n = e.originalEvent ? e.originalEvent : e;
            if (We !== m && We !== x && !ae()) {
                var r, i = n.touches, l = fe(i ? i[0] : n);
                if (Be = Oe(),
                i && (ze = i.length),
                t.hold && clearTimeout(nn),
                We = E,
                2 == ze && (0 == qe ? (pe(1, i[1]),
                qe = Qe = be(Ge[0].start, Ge[1].start)) : (fe(i[1]),
                Qe = be(Ge[0].end, Ge[1].end),
                Xe = Ee(Ge[0].end, Ge[1].end)),
                Ce = ye(qe, Qe),
                Fe = Math.abs(qe - Qe)),
                ze === t.fingers || t.fingers === T || !i || X()) {
                    if (Ne = Se(l.start, l.end),
                    He = Se(l.last, l.end),
                    C(e, He),
                    je = me(l.start, l.end),
                    _e = Te(),
                    de(Ne, je),
                    r = j(n, We),
                    !t.triggerOnTouchEnd || t.triggerOnTouchLeave) {
                        var o = !0;
                        if (t.triggerOnTouchLeave) {
                            var u = Me(this);
                            o = De(l.end, u)
                        }
                        !t.triggerOnTouchEnd && o ? We = U(E) : t.triggerOnTouchLeave && !o && (We = U(m)),
                        We != x && We != m || j(n, We)
                    }
                } else
                    We = x,
                    j(n, We);
                !1 === r && (We = x,
                j(n, We))
            }
        }
        function R(e) {
            var n = e.originalEvent ? e.originalEvent : e
              , r = n.touches;
            if (r) {
                if (r.length && !ae())
                    return oe(n),
                    !0;
                if (r.length && ae())
                    return !0
            }
            return ae() && (ze = Ke),
            Be = Oe(),
            _e = Te(),
            _() || !H() ? (We = x,
            j(n, We)) : t.triggerOnTouchEnd || !1 === t.triggerOnTouchEnd && We === E ? (!1 !== t.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(),
            We = m,
            j(n, We)) : !t.triggerOnTouchEnd && B() ? (We = m,
            N(n, We, h)) : We === E && (We = x,
            j(n, We)),
            se(!1),
            null
        }
        function k() {
            ze = 0,
            Be = 0,
            Ze = 0,
            qe = 0,
            Qe = 0,
            Ce = 1,
            ue(),
            se(!1)
        }
        function A(e) {
            var n = e.originalEvent ? e.originalEvent : e;
            t.triggerOnTouchLeave && (We = U(m),
            j(n, We))
        }
        function I() {
            Ve.unbind(Re, P),
            Ve.unbind(Ue, k),
            Ve.unbind(ke, L),
            Ve.unbind(Ae, R),
            Ie && Ve.unbind(Ie, A),
            se(!1)
        }
        function U(e) {
            var n = e
              , r = Q()
              , i = H()
              , l = _();
            return !r || l ? n = x : !i || e != E || t.triggerOnTouchEnd && !t.triggerOnTouchLeave ? !i && e == m && t.triggerOnTouchLeave && (n = x) : n = m,
            n
        }
        function j(e, n) {
            var t, r = e.touches;
            return (z() || W()) && (t = N(e, n, p)),
            (Y() || X()) && !1 !== t && (t = N(e, n, f)),
            ie() && !1 !== t ? t = N(e, n, d) : le() && !1 !== t ? t = N(e, n, g) : re() && !1 !== t && (t = N(e, n, h)),
            n === x && k(e),
            n === m && (r ? r.length || k(e) : k(e)),
            t
        }
        function N(n, c, s) {
            var w;
            if (s == p) {
                if (Ve.trigger("swipeStatus", [c, Ne || null, je || 0, _e || 0, ze, Ge, He]),
                t.swipeStatus && !1 === (w = t.swipeStatus.call(Ve, n, c, Ne || null, je || 0, _e || 0, ze, Ge, He)))
                    return !1;
                if (c == m && V()) {
                    if (clearTimeout(en),
                    clearTimeout(nn),
                    Ve.trigger("swipe", [Ne, je, _e, ze, Ge, He]),
                    t.swipe && !1 === (w = t.swipe.call(Ve, n, Ne, je, _e, ze, Ge, He)))
                        return !1;
                    switch (Ne) {
                    case r:
                        Ve.trigger("swipeLeft", [Ne, je, _e, ze, Ge, He]),
                        t.swipeLeft && (w = t.swipeLeft.call(Ve, n, Ne, je, _e, ze, Ge, He));
                        break;
                    case i:
                        Ve.trigger("swipeRight", [Ne, je, _e, ze, Ge, He]),
                        t.swipeRight && (w = t.swipeRight.call(Ve, n, Ne, je, _e, ze, Ge, He));
                        break;
                    case l:
                        Ve.trigger("swipeUp", [Ne, je, _e, ze, Ge, He]),
                        t.swipeUp && (w = t.swipeUp.call(Ve, n, Ne, je, _e, ze, Ge, He));
                        break;
                    case o:
                        Ve.trigger("swipeDown", [Ne, je, _e, ze, Ge, He]),
                        t.swipeDown && (w = t.swipeDown.call(Ve, n, Ne, je, _e, ze, Ge, He))
                    }
                }
            }
            if (s == f) {
                if (Ve.trigger("pinchStatus", [c, Xe || null, Fe || 0, _e || 0, ze, Ce, Ge]),
                t.pinchStatus && !1 === (w = t.pinchStatus.call(Ve, n, c, Xe || null, Fe || 0, _e || 0, ze, Ce, Ge)))
                    return !1;
                if (c == m && F())
                    switch (Xe) {
                    case u:
                        Ve.trigger("pinchIn", [Xe || null, Fe || 0, _e || 0, ze, Ce, Ge]),
                        t.pinchIn && (w = t.pinchIn.call(Ve, n, Xe || null, Fe || 0, _e || 0, ze, Ce, Ge));
                        break;
                    case a:
                        Ve.trigger("pinchOut", [Xe || null, Fe || 0, _e || 0, ze, Ce, Ge]),
                        t.pinchOut && (w = t.pinchOut.call(Ve, n, Xe || null, Fe || 0, _e || 0, ze, Ce, Ge))
                    }
            }
            return s == h ? c !== x && c !== m || (clearTimeout(en),
            clearTimeout(nn),
            J() && !ee() ? ($e = Oe(),
            en = setTimeout(e.proxy(function() {
                $e = null,
                Ve.trigger("tap", [n.target]),
                t.tap && (w = t.tap.call(Ve, n, n.target))
            }, this), t.doubleTapThreshold)) : ($e = null,
            Ve.trigger("tap", [n.target]),
            t.tap && (w = t.tap.call(Ve, n, n.target)))) : s == d ? c !== x && c !== m || (clearTimeout(en),
            clearTimeout(nn),
            $e = null,
            Ve.trigger("doubletap", [n.target]),
            t.doubleTap && (w = t.doubleTap.call(Ve, n, n.target))) : s == g && (c !== x && c !== m || (clearTimeout(en),
            $e = null,
            Ve.trigger("longtap", [n.target]),
            t.longTap && (w = t.longTap.call(Ve, n, n.target)))),
            w
        }
        function H() {
            var e = !0;
            return null !== t.threshold && (e = je >= t.threshold),
            e
        }
        function _() {
            var e = !1;
            return null !== t.cancelThreshold && null !== Ne && (e = ge(Ne) - je >= t.cancelThreshold),
            e
        }
        function q() {
            return null === t.pinchThreshold || Fe >= t.pinchThreshold
        }
        function Q() {
            return !(t.maxTimeThreshold && _e >= t.maxTimeThreshold)
        }
        function C(e, n) {
            if (!1 !== t.preventDefaultEvents)
                if (t.allowPageScroll === c)
                    e.preventDefault();
                else {
                    var u = t.allowPageScroll === s;
                    switch (n) {
                    case r:
                        (t.swipeLeft && u || !u && t.allowPageScroll != w) && e.preventDefault();
                        break;
                    case i:
                        (t.swipeRight && u || !u && t.allowPageScroll != w) && e.preventDefault();
                        break;
                    case l:
                        (t.swipeUp && u || !u && t.allowPageScroll != v) && e.preventDefault();
                        break;
                    case o:
                        (t.swipeDown && u || !u && t.allowPageScroll != v) && e.preventDefault()
                    }
                }
        }
        function F() {
            var e = G()
              , n = Z()
              , t = q();
            return e && n && t
        }
        function X() {
            return !!(t.pinchStatus || t.pinchIn || t.pinchOut)
        }
        function Y() {
            return !(!F() || !X())
        }
        function V() {
            var e = Q()
              , n = H()
              , t = G()
              , r = Z();
            return !_() && r && t && n && e
        }
        function W() {
            return !!(t.swipe || t.swipeStatus || t.swipeLeft || t.swipeRight || t.swipeUp || t.swipeDown)
        }
        function z() {
            return !(!V() || !W())
        }
        function G() {
            return ze === t.fingers || t.fingers === T || !S
        }
        function Z() {
            return 0 !== Ge[0].end.x
        }
        function B() {
            return !!t.tap
        }
        function J() {
            return !!t.doubleTap
        }
        function K() {
            return !!t.longTap
        }
        function $() {
            if (null == $e)
                return !1;
            var e = Oe();
            return J() && e - $e <= t.doubleTapThreshold
        }
        function ee() {
            return $()
        }
        function ne() {
            return (1 === ze || !S) && (isNaN(je) || je < t.threshold)
        }
        function te() {
            return _e > t.longTapThreshold && je < b
        }
        function re() {
            return !(!ne() || !B())
        }
        function ie() {
            return !(!$() || !J())
        }
        function le() {
            return !(!te() || !K())
        }
        function oe(e) {
            Je = Oe(),
            Ke = e.touches.length + 1
        }
        function ue() {
            Je = 0,
            Ke = 0
        }
        function ae() {
            var e = !1;
            return Je && Oe() - Je <= t.fingerReleaseThreshold && (e = !0),
            e
        }
        function ce() {
            return !(!0 !== Ve.data(D + "_intouch"))
        }
        function se(e) {
            Ve && (!0 === e ? (Ve.bind(ke, L),
            Ve.bind(Ae, R),
            Ie && Ve.bind(Ie, A)) : (Ve.unbind(ke, L, !1),
            Ve.unbind(Ae, R, !1),
            Ie && Ve.unbind(Ie, A, !1)),
            Ve.data(D + "_intouch", !0 === e))
        }
        function pe(e, n) {
            var t = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            return t.start.x = t.last.x = t.end.x = n.pageX || n.clientX,
            t.start.y = t.last.y = t.end.y = n.pageY || n.clientY,
            Ge[e] = t,
            t
        }
        function fe(e) {
            var n = void 0 !== e.identifier ? e.identifier : 0
              , t = he(n);
            return null === t && (t = pe(n, e)),
            t.last.x = t.end.x,
            t.last.y = t.end.y,
            t.end.x = e.pageX || e.clientX,
            t.end.y = e.pageY || e.clientY,
            t
        }
        function he(e) {
            return Ge[e] || null
        }
        function de(e, n) {
            e != c && (n = Math.max(n, ge(e)),
            Ye[e].distance = n)
        }
        function ge(e) {
            if (Ye[e])
                return Ye[e].distance
        }
        function we() {
            var e = {};
            return e[r] = ve(r),
            e[i] = ve(i),
            e[l] = ve(l),
            e[o] = ve(o),
            e
        }
        function ve(e) {
            return {
                direction: e,
                distance: 0
            }
        }
        function Te() {
            return Be - Ze
        }
        function be(e, n) {
            var t = Math.abs(e.x - n.x)
              , r = Math.abs(e.y - n.y);
            return Math.round(Math.sqrt(t * t + r * r))
        }
        function ye(e, n) {
            return (n / e * 1).toFixed(2)
        }
        function Ee() {
            return Ce < 1 ? a : u
        }
        function me(e, n) {
            return Math.round(Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2)))
        }
        function xe(e, n) {
            var t = e.x - n.x
              , r = n.y - e.y
              , i = Math.atan2(r, t)
              , l = Math.round(180 * i / Math.PI);
            return l < 0 && (l = 360 - Math.abs(l)),
            l
        }
        function Se(e, n) {
            if (Pe(e, n))
                return c;
            var t = xe(e, n);
            return t <= 45 && t >= 0 ? r : t <= 360 && t >= 315 ? r : t >= 135 && t <= 225 ? i : t > 45 && t < 135 ? o : l
        }
        function Oe() {
            return (new Date).getTime()
        }
        function Me(n) {
            var t = (n = e(n)).offset();
            return {
                left: t.left,
                right: t.left + n.outerWidth(),
                top: t.top,
                bottom: t.top + n.outerHeight()
            }
        }
        function De(e, n) {
            return e.x > n.left && e.x < n.right && e.y > n.top && e.y < n.bottom
        }
        function Pe(e, n) {
            return e.x == n.x && e.y == n.y
        }
        var t = e.extend({}, t)
          , Le = S || M || !t.fallbackToMouseEvents
          , Re = Le ? M ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown"
          , ke = Le ? M ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove"
          , Ae = Le ? M ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup"
          , Ie = Le ? M ? "mouseleave" : null : "mouseleave"
          , Ue = M ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel"
          , je = 0
          , Ne = null
          , He = null
          , _e = 0
          , qe = 0
          , Qe = 0
          , Ce = 1
          , Fe = 0
          , Xe = 0
          , Ye = null
          , Ve = e(n)
          , We = "start"
          , ze = 0
          , Ge = {}
          , Ze = 0
          , Be = 0
          , Je = 0
          , Ke = 0
          , $e = 0
          , en = null
          , nn = null;
        try {
            Ve.bind(Re, P),
            Ve.bind(Ue, k)
        } catch (n) {
            e.error("events not supported " + Re + "," + Ue + " on jQuery.swipe")
        }
        this.enable = function() {
            return this.disable(),
            Ve.bind(Re, P),
            Ve.bind(Ue, k),
            Ve
        }
        ,
        this.disable = function() {
            return I(),
            Ve
        }
        ,
        this.destroy = function() {
            I(),
            Ve.data(D, null),
            Ve = null
        }
        ,
        this.option = function(n, r) {
            if ("object" == typeof n)
                t = e.extend(t, n);
            else if (void 0 !== t[n]) {
                if (void 0 === r)
                    return t[n];
                t[n] = r
            } else {
                if (!n)
                    return t;
                e.error("Option " + n + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }
    var r = "left"
      , i = "right"
      , l = "up"
      , o = "down"
      , u = "in"
      , a = "out"
      , c = "none"
      , s = "auto"
      , p = "swipe"
      , f = "pinch"
      , h = "tap"
      , d = "doubletap"
      , g = "longtap"
      , w = "horizontal"
      , v = "vertical"
      , T = "all"
      , b = 10
      , y = "start"
      , E = "move"
      , m = "end"
      , x = "cancel"
      , S = "ontouchstart"in window
      , O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !S
      , M = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !S
      , D = "TouchSwipe"
      , P = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".noSwipe",
        preventDefaultEvents: !0
    };
    e.fn.swipe = function(t) {
        var r = e(this)
          , i = r.data(D);
        if (i && "string" == typeof t) {
            if (i[t])
                return i[t].apply(i, Array.prototype.slice.call(arguments, 1));
            e.error("Method " + t + " does not exist on jQuery.swipe")
        } else if (i && "object" == typeof t)
            i.option.apply(i, arguments);
        else if (!(i || "object" != typeof t && t))
            return n.apply(this, arguments);
        return r
    }
    ,
    e.fn.swipe.version = "1.6.18",
    e.fn.swipe.defaults = P,
    e.fn.swipe.phases = {
        PHASE_START: y,
        PHASE_MOVE: E,
        PHASE_END: m,
        PHASE_CANCEL: x
    },
    e.fn.swipe.directions = {
        LEFT: r,
        RIGHT: i,
        UP: l,
        DOWN: o,
        IN: u,
        OUT: a
    },
    e.fn.swipe.pageScroll = {
        NONE: c,
        HORIZONTAL: w,
        VERTICAL: v,
        AUTO: s
    },
    e.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: T
    }
});

/**
 * @module       Popper.js
 * @author       Federico Zivolo
 * @see          https://github.com/FezVrasta/popper.js
 * @license      MIT
 * @version      1.16.1
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = e.ownerDocument.defaultView
          , n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
            return e.ownerDocument.body;
        case '#document':
            return e.body;
        }
        var i = t(e)
          , r = i.overflow
          , p = i.overflowX
          , s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }
    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }
    function p(e) {
        if (!e)
            return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , n = o ? e : t
          , i = o ? t : e
          , r = document.createRange();
        r.setStart(n, 0),
        r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i))
            return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
          , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
          , n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement
              , r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , n = l(t, 'top')
          , i = l(t, 'left')
          , r = o ? -1 : 1;
        return e.top += n * r,
        e.bottom += n * r,
        e.left += i * r,
        e.right += i * r,
        e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
          , n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width']) + parseFloat(e['border' + n + 'Width'])
    }
    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }
    function c(e) {
        var t = e.body
          , o = e.documentElement
          , n = r(10) && getComputedStyle(o);
        return {
            height: h('Height', t, o, n),
            width: h('Width', t, o, n)
        }
    }
    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top')
                  , i = l(e, 'left');
                o.top += n,
                o.left += i,
                o.bottom += n,
                o.right += i
            } else
                o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
          , s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}
          , d = s.width || e.clientWidth || p.width
          , a = s.height || e.clientHeight || p.height
          , f = e.offsetWidth - d
          , h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'),
            h -= m(u, 'y'),
            p.width -= f,
            p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , p = r(10)
          , s = 'HTML' === o.nodeName
          , d = u(e)
          , a = u(o)
          , l = n(e)
          , m = t(o)
          , h = parseFloat(m.borderTopWidth)
          , c = parseFloat(m.borderLeftWidth);
        i && s && (a.top = ee(a.top, 0),
        a.left = ee(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0,
        b.marginLeft = 0,
        !p && s) {
            var w = parseFloat(m.marginTop)
              , y = parseFloat(m.marginLeft);
            b.top -= h - w,
            b.bottom -= h - w,
            b.left -= c - y,
            b.right -= c - y,
            b.marginTop = w,
            b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)),
        b
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = e.ownerDocument.documentElement
          , n = b(e, o)
          , i = ee(o.clientWidth, window.innerWidth || 0)
          , r = ee(o.clientHeight, window.innerHeight || 0)
          , p = t ? 0 : l(o)
          , s = t ? 0 : l(o, 'left')
          , d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d)
    }
    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n)
            return !1;
        if ('fixed' === t(e, 'position'))
            return !0;
        var i = o(e);
        return !!i && y(i)
    }
    function E(e) {
        if (!e || !e.parentElement || r())
            return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
            o = o.parentElement;
        return o || document.documentElement
    }
    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , d = {
            top: 0,
            left: 0
        }
          , l = s ? E(e) : a(e, i(t));
        if ('viewport' === p)
            d = w(l, s);
        else {
            var f;
            'scrollParent' === p ? (f = n(o(t)),
            'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
            var m = b(f, l, s);
            if ('HTML' === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument)
                  , g = h.height
                  , u = h.width;
                d.top += m.top - m.marginTop,
                d.bottom = g + m.top,
                d.left += m.left - m.marginLeft,
                d.right = u + m.left
            } else
                d = m
        }
        r = r || 0;
        var v = 'number' == typeof r;
        return d.left += v ? r : r.left || 0,
        d.top += v ? r : r.top || 0,
        d.right -= v ? r : r.right || 0,
        d.bottom -= v ? r : r.bottom || 0,
        d
    }
    function x(e) {
        var t = e.width
          , o = e.height;
        return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = v(o, n, r, i)
          , s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }
          , d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , a = d.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        })
          , l = 0 < a.length ? a[0].key : d[0].key
          , f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , r = n ? E(t) : a(t, i(o));
        return b(o, r, n)
    }
    function S(e) {
        var t = e.ownerDocument.defaultView
          , o = t.getComputedStyle(e)
          , n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0)
          , i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0)
          , r = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
        return r
    }
    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e)
          , i = {
            width: n.width,
            height: n.height
        }
          , r = -1 !== ['right', 'left'].indexOf(o)
          , p = r ? 'top' : 'left'
          , s = r ? 'left' : 'top'
          , d = r ? 'height' : 'width'
          , a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2,
        i[s] = o === s ? t[s] - n[a] : t[T(s)],
        i
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o
            });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper),
            o.offsets.reference = g(o.offsets.reference),
            o = n(o, t))
        }),
        o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = C(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
            e = P(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name
              , n = e.enabled;
            return n && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n]
              , r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r])
                return r
        }
        return null
    }
    function H() {
        return this.state.isDestroyed = !0,
        W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
        this.popper.style.position = '',
        this.popper.style.top = '',
        this.popper.style.left = '',
        this.popper.style.right = '',
        this.popper.style.bottom = '',
        this.popper.style.willChange = '',
        this.popper.style[B('transform')] = ''),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName
          , p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
        r || M(n(p.parentNode), t, o, i),
        i.push(p)
    }
    function F(e, t, o, i) {
        o.updateBound = i,
        A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents),
        o.scrollElement = r,
        o.eventsEnabled = !0,
        o
    }
    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
            e.style[o] = t[o] + n
        })
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function q(e, t) {
        var o = e.offsets
          , n = o.popper
          , i = o.reference
          , r = $
          , p = function(e) {
            return e
        }
          , s = r(i.width)
          , d = r(n.width)
          , a = -1 !== ['left', 'right'].indexOf(e.placement)
          , l = -1 !== e.placement.indexOf('-')
          , f = t ? a || l || s % 2 == d % 2 ? r : Z : p
          , m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        }
    }
    function K(e, t, o) {
        var n = D(e, function(e) {
            var o = e.name;
            return o === t
        })
          , i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = he.indexOf(e)
          , n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , r = +i[1]
          , p = i[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
            case '%p':
                s = o;
                break;
            case '%':
            case '%r':
            default:
                s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0),
            a / 100 * r
        }
        return r
    }
    function X(e, t, o, n) {
        var i = [0, 0]
          , r = -1 !== ['right', 'left'].indexOf(n)
          , p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = p.indexOf(D(p, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
          , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width'
              , p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                p = !0,
                e) : p ? (e[e.length - 1] += t,
                p = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return _(e, i, t, o)
            })
        }),
        a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }),
        i
    }
    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d),
        'left' === d ? (p.top += o[0],
        p.left -= o[1]) : 'right' === d ? (p.top += o[0],
        p.left += o[1]) : 'top' === d ? (p.left += o[0],
        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
        p.top += o[1]),
        e.popper = p,
        e
    }
    var Q = Math.min
      , Z = Math.floor
      , $ = Math.round
      , ee = Math.max
      , te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator
      , oe = function() {
        for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
            if (te && 0 <= navigator.userAgent.indexOf(e[t]))
                return 1;
        return 0
    }()
      , ne = te && window.Promise
      , ie = ne ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, oe))
        }
    }
      , re = te && !!(window.MSInputMethodContext && document.documentMode)
      , pe = te && /MSIE 10/.test(navigator.userAgent)
      , se = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
      , de = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n],
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value'in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        return function(t, o, n) {
            return o && e(t.prototype, o),
            n && e(t, n),
            t
        }
    }()
      , ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o,
        e
    }
      , le = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var n in t = arguments[o],
            t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }
      , fe = te && /Firefox/i.test(navigator.userAgent)
      , me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
      , he = me.slice(3)
      , ce = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }
      , ge = function() {
        function t(o, n) {
            var i = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            se(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = ie(this.update.bind(this)),
            this.options = le({}, t.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = o && o.jquery ? o[0] : o,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }),
            this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(),
            this.state.eventsEnabled = p
        }
        return de(t, [{
            key: 'update',
            value: function() {
                return k.call(this)
            }
        }, {
            key: 'destroy',
            value: function() {
                return H.call(this)
            }
        }, {
            key: 'enableEventListeners',
            value: function() {
                return I.call(this)
            }
        }, {
            key: 'disableEventListeners',
            value: function() {
                return U.call(this)
            }
        }]),
        t
    }();
    return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
    ge.placements = me,
    ge.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets
                          , r = i.reference
                          , p = i.popper
                          , s = -1 !== ['bottom', 'top'].indexOf(o)
                          , d = s ? 'left' : 'top'
                          , a = s ? 'width' : 'height'
                          , l = {
                            start: ae({}, d, r[d]),
                            end: ae({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform')
                      , i = e.instance.popper.style
                      , r = i.top
                      , s = i.left
                      , d = i[n];
                    i.top = '',
                    i.left = '',
                    i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r,
                    i.left = s,
                    i[n] = d,
                    t.boundaries = a;
                    var l = t.priority
                      , f = e.offsets.popper
                      , m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])),
                            ae({}, e, o)
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top'
                              , n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))),
                            ae({}, o, n)
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }),
                    e.offsets.popper = f,
                    e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , o = t.popper
                      , n = t.reference
                      , i = e.placement.split('-')[0]
                      , r = Z
                      , p = -1 !== ['top', 'bottom'].indexOf(i)
                      , s = p ? 'right' : 'bottom'
                      , d = p ? 'left' : 'top'
                      , a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                    o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i),
                        !i)
                            return e;
                    } else if (!e.instance.popper.contains(i))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                        e;
                    var r = e.placement.split('-')[0]
                      , p = e.offsets
                      , s = p.popper
                      , d = p.reference
                      , a = -1 !== ['left', 'right'].indexOf(r)
                      , l = a ? 'height' : 'width'
                      , f = a ? 'Top' : 'Left'
                      , m = f.toLowerCase()
                      , h = a ? 'left' : 'top'
                      , c = a ? 'bottom' : 'right'
                      , u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                    d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
                    e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2
                      , w = t(e.instance.popper)
                      , y = parseFloat(w['margin' + f])
                      , E = parseFloat(w['border' + f + 'Width'])
                      , v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (n = {},
                    ae(n, m, $(v)),
                    ae(n, h, ''),
                    n),
                    e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , n = e.placement.split('-')[0]
                      , i = T(n)
                      , r = e.placement.split('-')[1] || ''
                      , p = [];
                    switch (t.behavior) {
                    case ce.FLIP:
                        p = [n, i];
                        break;
                    case ce.CLOCKWISE:
                        p = G(n);
                        break;
                    case ce.COUNTERCLOCKWISE:
                        p = G(n, !0);
                        break;
                    default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1)
                            return e;
                        n = e.placement.split('-')[0],
                        i = T(n);
                        var a = e.offsets.popper
                          , l = e.offsets.reference
                          , f = Z
                          , m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom)
                          , h = f(a.left) < f(o.left)
                          , c = f(a.right) > f(o.right)
                          , g = f(a.top) < f(o.top)
                          , u = f(a.bottom) > f(o.bottom)
                          , b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u
                          , w = -1 !== ['top', 'bottom'].indexOf(n)
                          , y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u)
                          , E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g)
                          , v = y || E;
                        (m || b || v) && (e.flipped = !0,
                        (m || b) && (n = p[d + 1]),
                        v && (r = z(r)),
                        e.placement = n + (r ? '-' + r : ''),
                        e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)),
                        e = P(e.instance.modifiers, e, 'flip'))
                    }),
                    e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport',
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = e.offsets
                      , i = n.popper
                      , r = n.reference
                      , p = -1 !== ['left', 'right'].indexOf(o)
                      , s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0),
                    e.placement = T(t),
                    e.offsets.popper = g(i),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference
                      , o = D(e.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x
                      , n = t.y
                      , i = e.offsets.popper
                      , r = D(e.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = q(e, 2 > window.devicePixelRatio || !fe), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top,
                    s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left,
                    a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                        m[c] = 0,
                        m[g] = 0,
                        m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1
                          , y = 'right' == g ? -1 : 1;
                        m[c] = d * w,
                        m[g] = s * y,
                        m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes),
                    e.styles = le({}, m, e.styles),
                    e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return V(e.instance.popper, e.styles),
                    j(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed)
                      , p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p),
                    V(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }),
                    o
                },
                gpuAcceleration: void 0
            }
        }
    },
    ge
});

/**
 * @module       Bootstrap
 * @author       Twitter, Inc.
 * @see          https://getbootstrap.com
 * @license      MIT
 * @version      4.5.3
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, (function(t, e, n) {
    "use strict";
    function i(t) {
        return t && "object" == typeof t && "default"in t ? t : {
            default: t
        }
    }
    var o = i(e)
      , a = i(n);
    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function l(t, e, n) {
        return e && s(t.prototype, e),
        n && s(t, n),
        t
    }
    function r() {
        return (r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    function u(t) {
        var e = this
          , n = !1;
        return o.default(this).one(d.TRANSITION_END, (function() {
            n = !0
        }
        )),
        setTimeout((function() {
            n || d.triggerTransitionEnd(e)
        }
        ), t),
        this
    }
    var d = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = o.default(t).css("transition-duration")
              , n = o.default(t).css("transition-delay")
              , i = parseFloat(e)
              , a = parseFloat(n);
            return i || a ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            o.default(t).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , a = e[i]
                      , s = a && d.isElement(a) ? "element" : null === (l = a) || "undefined" == typeof l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var l
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? d.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof o.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = o.default.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    d.jQueryDetection(),
    o.default.fn.emulateTransitionEnd = u,
    o.default.event.special[d.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(t) {
            if (o.default(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var f = "alert"
      , c = o.default.fn[f]
      , h = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, "bs.alert"),
            this._element = null
        }
        ,
        e._getRootElement = function(t) {
            var e = d.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n || (n = o.default(t).closest(".alert")[0]),
            n
        }
        ,
        e._triggerCloseEvent = function(t) {
            var e = o.default.Event("close.bs.alert");
            return o.default(t).trigger(e),
            e
        }
        ,
        e._removeElement = function(t) {
            var e = this;
            if (o.default(t).removeClass("show"),
            o.default(t).hasClass("fade")) {
                var n = d.getTransitionDurationFromElement(t);
                o.default(t).one(d.TRANSITION_END, (function(n) {
                    return e._destroyElement(t, n)
                }
                )).emulateTransitionEnd(n)
            } else
                this._destroyElement(t)
        }
        ,
        e._destroyElement = function(t) {
            o.default(t).detach().trigger("closed.bs.alert").remove()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data("bs.alert");
                i || (i = new t(this),
                n.data("bs.alert", i)),
                "close" === e && i[e](this)
            }
            ))
        }
        ,
        t._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h)),
    o.default.fn[f] = h._jQueryInterface,
    o.default.fn[f].Constructor = h,
    o.default.fn[f].noConflict = function() {
        return o.default.fn[f] = c,
        h._jQueryInterface
    }
    ;
    var g = o.default.fn.button
      , m = function() {
        function t(t) {
            this._element = t,
            this.shouldAvoidTriggerChange = !1
        }
        var e = t.prototype;
        return e.toggle = function() {
            var t = !0
              , e = !0
              , n = o.default(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = this._element.querySelector('input:not([type="hidden"])');
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains("active"))
                            t = !1;
                        else {
                            var a = n.querySelector(".active");
                            a && o.default(a).removeClass("active")
                        }
                    t && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")),
                    this.shouldAvoidTriggerChange || o.default(i).trigger("change")),
                    i.focus(),
                    e = !1
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")),
            t && o.default(this._element).toggleClass("active"))
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, "bs.button"),
            this._element = null
        }
        ,
        t._jQueryInterface = function(e, n) {
            return this.each((function() {
                var i = o.default(this)
                  , a = i.data("bs.button");
                a || (a = new t(this),
                i.data("bs.button", a)),
                a.shouldAvoidTriggerChange = n,
                "toggle" === e && a[e]()
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
        var e = t.target
          , n = e;
        if (o.default(e).hasClass("btn") || (e = o.default(e).closest(".btn")[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
            t.preventDefault();
        else {
            var i = e.querySelector('input:not([type="hidden"])');
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled")))
                return void t.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === e.tagName || m._jQueryInterface.call(o.default(e), "toggle", "INPUT" === n.tagName)
        }
    }
    )).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
        var e = o.default(t.target).closest(".btn")[0];
        o.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }
    )),
    o.default(window).on("load.bs.button.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var i = t[e]
              , o = i.querySelector('input:not([type="hidden"])');
            o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
        }
        for (var a = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; a < s; a++) {
            var l = t[a];
            "true" === l.getAttribute("aria-pressed") ? l.classList.add("active") : l.classList.remove("active")
        }
    }
    )),
    o.default.fn.button = m._jQueryInterface,
    o.default.fn.button.Constructor = m,
    o.default.fn.button.noConflict = function() {
        return o.default.fn.button = g,
        m._jQueryInterface
    }
    ;
    var p = "carousel"
      , _ = ".bs.carousel"
      , v = o.default.fn[p]
      , b = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , y = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , E = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , w = function() {
        function t(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var e = t.prototype;
        return e.next = function() {
            this._isSliding || this._slide("next")
        }
        ,
        e.nextWhenVisible = function() {
            var t = o.default(this._element);
            !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next()
        }
        ,
        e.prev = function() {
            this._isSliding || this._slide("prev")
        }
        ,
        e.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        e.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        e.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(".active.carousel-item");
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    o.default(this._element).one("slid.bs.carousel", (function() {
                        return e.to(t)
                    }
                    ));
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = t > n ? "next" : "prev";
                    this._slide(i, this._items[t])
                }
        }
        ,
        e.dispose = function() {
            o.default(this._element).off(_),
            o.default.removeData(this._element, "bs.carousel"),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        e._getConfig = function(t) {
            return t = r({}, b, t),
            d.typeCheckConfig(p, t, y),
            t
        }
        ,
        e._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0,
                e > 0 && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", (function(e) {
                return t._keydown(e)
            }
            )),
            "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", (function(e) {
                return t.pause(e)
            }
            )).on("mouseleave.bs.carousel", (function(e) {
                return t.cycle(e)
            }
            )),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        e._addTouchEventListeners = function() {
            var t = this;
            if (this._touchSupported) {
                var e = function(e) {
                    t._pointerEvent && E[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                }
                  , n = function(e) {
                    t._pointerEvent && E[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                    t._handleSwipe(),
                    "hover" === t._config.pause && (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    t.touchTimeout = setTimeout((function(e) {
                        return t.cycle(e)
                    }
                    ), 500 + t._config.interval))
                };
                o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t) {
                    return t.preventDefault()
                }
                )),
                this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", (function(t) {
                    return e(t)
                }
                )),
                o.default(this._element).on("pointerup.bs.carousel", (function(t) {
                    return n(t)
                }
                )),
                this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", (function(t) {
                    return e(t)
                }
                )),
                o.default(this._element).on("touchmove.bs.carousel", (function(e) {
                    return function(e) {
                        e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                    }(e)
                }
                )),
                o.default(this._element).on("touchend.bs.carousel", (function(t) {
                    return n(t)
                }
                )))
            }
        }
        ,
        e._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        e._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(t)
        }
        ,
        e._getItemByDirection = function(t, e) {
            var n = "next" === t
              , i = "prev" === t
              , o = this._getItemIndex(e)
              , a = this._items.length - 1;
            if ((i && 0 === o || n && o === a) && !this._config.wrap)
                return e;
            var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        e._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(this._element.querySelector(".active.carousel-item"))
              , a = o.default.Event("slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return o.default(this._element).trigger(a),
            a
        }
        ,
        e._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                o.default(e).removeClass("active");
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && o.default(n).addClass("active")
            }
        }
        ,
        e._slide = function(t, e) {
            var n, i, a, s = this, l = this._element.querySelector(".active.carousel-item"), r = this._getItemIndex(l), u = e || l && this._getItemByDirection(t, l), f = this._getItemIndex(u), c = Boolean(this._interval);
            if ("next" === t ? (n = "carousel-item-left",
            i = "carousel-item-next",
            a = "left") : (n = "carousel-item-right",
            i = "carousel-item-prev",
            a = "right"),
            u && o.default(u).hasClass("active"))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, a).isDefaultPrevented() && l && u) {
                this._isSliding = !0,
                c && this.pause(),
                this._setActiveIndicatorElement(u);
                var h = o.default.Event("slid.bs.carousel", {
                    relatedTarget: u,
                    direction: a,
                    from: r,
                    to: f
                });
                if (o.default(this._element).hasClass("slide")) {
                    o.default(u).addClass(i),
                    d.reflow(u),
                    o.default(l).addClass(n),
                    o.default(u).addClass(n);
                    var g = parseInt(u.getAttribute("data-interval"), 10);
                    g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    this._config.interval = g) : this._config.interval = this._config.defaultInterval || this._config.interval;
                    var m = d.getTransitionDurationFromElement(l);
                    o.default(l).one(d.TRANSITION_END, (function() {
                        o.default(u).removeClass(n + " " + i).addClass("active"),
                        o.default(l).removeClass("active " + i + " " + n),
                        s._isSliding = !1,
                        setTimeout((function() {
                            return o.default(s._element).trigger(h)
                        }
                        ), 0)
                    }
                    )).emulateTransitionEnd(m)
                } else
                    o.default(l).removeClass("active"),
                    o.default(u).addClass("active"),
                    this._isSliding = !1,
                    o.default(this._element).trigger(h);
                c && this.cycle()
            }
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this).data("bs.carousel")
                  , i = r({}, b, o.default(this).data());
                "object" == typeof e && (i = r({}, i, e));
                var a = "string" == typeof e ? e : i.slide;
                if (n || (n = new t(this,i),
                o.default(this).data("bs.carousel", n)),
                "number" == typeof e)
                    n.to(e);
                else if ("string" == typeof a) {
                    if ("undefined" == typeof n[a])
                        throw new TypeError('No method named "' + a + '"');
                    n[a]()
                } else
                    i.interval && i.ride && (n.pause(),
                    n.cycle())
            }
            ))
        }
        ,
        t._dataApiClickHandler = function(e) {
            var n = d.getSelectorFromElement(this);
            if (n) {
                var i = o.default(n)[0];
                if (i && o.default(i).hasClass("carousel")) {
                    var a = r({}, o.default(i).data(), o.default(this).data())
                      , s = this.getAttribute("data-slide-to");
                    s && (a.interval = !1),
                    t._jQueryInterface.call(o.default(i), a),
                    s && o.default(i).data("bs.carousel").to(s),
                    e.preventDefault()
                }
            }
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return b
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", w._dataApiClickHandler),
    o.default(window).on("load.bs.carousel.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
            var i = o.default(t[e]);
            w._jQueryInterface.call(i, i.data())
        }
    }
    )),
    o.default.fn[p] = w._jQueryInterface,
    o.default.fn[p].Constructor = w,
    o.default.fn[p].noConflict = function() {
        return o.default.fn[p] = v,
        w._jQueryInterface
    }
    ;
    var T = "collapse"
      , C = o.default.fn[T]
      , S = {
        toggle: !0,
        parent: ""
    }
      , N = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , D = function() {
        function t(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
                var a = n[i]
                  , s = d.getSelectorFromElement(a)
                  , l = [].slice.call(document.querySelectorAll(s)).filter((function(e) {
                    return e === t
                }
                ));
                null !== s && l.length > 0 && (this._selector = s,
                this._triggerArray.push(a))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var e = t.prototype;
        return e.toggle = function() {
            o.default(this._element).hasClass("show") ? this.hide() : this.show()
        }
        ,
        e.show = function() {
            var e, n, i = this;
            if (!this._isTransitioning && !o.default(this._element).hasClass("show") && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
                return "string" == typeof i._config.parent ? t.getAttribute("data-parent") === i._config.parent : t.classList.contains("collapse")
            }
            ))).length && (e = null),
            !(e && (n = o.default(e).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
                var a = o.default.Event("show.bs.collapse");
                if (o.default(this._element).trigger(a),
                !a.isDefaultPrevented()) {
                    e && (t._jQueryInterface.call(o.default(e).not(this._selector), "hide"),
                    n || o.default(e).data("bs.collapse", null));
                    var s = this._getDimension();
                    o.default(this._element).removeClass("collapse").addClass("collapsing"),
                    this._element.style[s] = 0,
                    this._triggerArray.length && o.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var l = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , r = d.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(d.TRANSITION_END, (function() {
                        o.default(i._element).removeClass("collapsing").addClass("collapse show"),
                        i._element.style[s] = "",
                        i.setTransitioning(!1),
                        o.default(i._element).trigger("shown.bs.collapse")
                    }
                    )).emulateTransitionEnd(r),
                    this._element.style[s] = this._element[l] + "px"
                }
            }
        }
        ,
        e.hide = function() {
            var t = this;
            if (!this._isTransitioning && o.default(this._element).hasClass("show")) {
                var e = o.default.Event("hide.bs.collapse");
                if (o.default(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    d.reflow(this._element),
                    o.default(this._element).addClass("collapsing").removeClass("collapse show");
                    var i = this._triggerArray.length;
                    if (i > 0)
                        for (var a = 0; a < i; a++) {
                            var s = this._triggerArray[a]
                              , l = d.getSelectorFromElement(s);
                            if (null !== l)
                                o.default([].slice.call(document.querySelectorAll(l))).hasClass("show") || o.default(s).addClass("collapsed").attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var r = d.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(d.TRANSITION_END, (function() {
                        t.setTransitioning(!1),
                        o.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    }
                    )).emulateTransitionEnd(r)
                }
            }
        }
        ,
        e.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, "bs.collapse"),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        e._getConfig = function(t) {
            return (t = r({}, S, t)).toggle = Boolean(t.toggle),
            d.typeCheckConfig(T, t, N),
            t
        }
        ,
        e._getDimension = function() {
            return o.default(this._element).hasClass("width") ? "width" : "height"
        }
        ,
        e._getParent = function() {
            var e, n = this;
            d.isElement(this._config.parent) ? (e = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , a = [].slice.call(e.querySelectorAll(i));
            return o.default(a).each((function(e, i) {
                n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
            }
            )),
            e
        }
        ,
        e._addAriaAndCollapsedClass = function(t, e) {
            var n = o.default(t).hasClass("show");
            e.length && o.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n)
        }
        ,
        t._getTargetFromElement = function(t) {
            var e = d.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data("bs.collapse")
                  , a = r({}, S, n.data(), "object" == typeof e && e ? e : {});
                if (!i && a.toggle && "string" == typeof e && /show|hide/.test(e) && (a.toggle = !1),
                i || (i = new t(this,a),
                n.data("bs.collapse", i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return S
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = o.default(this)
          , n = d.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(n));
        o.default(i).each((function() {
            var t = o.default(this)
              , n = t.data("bs.collapse") ? "toggle" : e.data();
            D._jQueryInterface.call(t, n)
        }
        ))
    }
    )),
    o.default.fn[T] = D._jQueryInterface,
    o.default.fn[T].Constructor = D,
    o.default.fn[T].noConflict = function() {
        return o.default.fn[T] = C,
        D._jQueryInterface
    }
    ;
    var k = "dropdown"
      , A = o.default.fn[k]
      , I = new RegExp("38|40|27")
      , j = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , O = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , x = function() {
        function t(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e = t.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !o.default(this._element).hasClass("disabled")) {
                var e = o.default(this._menu).hasClass("show");
                t._clearMenus(),
                e || this.show(!0)
            }
        }
        ,
        e.show = function(e) {
            if (void 0 === e && (e = !1),
            !(this._element.disabled || o.default(this._element).hasClass("disabled") || o.default(this._menu).hasClass("show"))) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = o.default.Event("show.bs.dropdown", n)
                  , s = t._getParentFromElement(this._element);
                if (o.default(s).trigger(i),
                !i.isDefaultPrevented()) {
                    if (!this._inNavbar && e) {
                        if ("undefined" == typeof a.default)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        var l = this._element;
                        "parent" === this._config.reference ? l = s : d.isElement(this._config.reference) && (l = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (l = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && o.default(s).addClass("position-static"),
                        this._popper = new a.default(l,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === o.default(s).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    o.default(this._menu).toggleClass("show"),
                    o.default(s).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown", n))
                }
            }
        }
        ,
        e.hide = function() {
            if (!this._element.disabled && !o.default(this._element).hasClass("disabled") && o.default(this._menu).hasClass("show")) {
                var e = {
                    relatedTarget: this._element
                }
                  , n = o.default.Event("hide.bs.dropdown", e)
                  , i = t._getParentFromElement(this._element);
                o.default(i).trigger(n),
                n.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                o.default(this._menu).toggleClass("show"),
                o.default(i).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown", e)))
            }
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, "bs.dropdown"),
            o.default(this._element).off(".bs.dropdown"),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            o.default(this._element).on("click.bs.dropdown", (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            }
            ))
        }
        ,
        e._getConfig = function(t) {
            return t = r({}, this.constructor.Default, o.default(this._element).data(), t),
            d.typeCheckConfig(k, t, this.constructor.DefaultType),
            t
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var e = t._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(".dropdown-menu"))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var t = o.default(this._element.parentNode)
              , e = "bottom-start";
            return t.hasClass("dropup") ? e = o.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : o.default(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"),
            e
        }
        ,
        e._detectNavbar = function() {
            return o.default(this._element).closest(".navbar").length > 0
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element) || {}),
                e
            }
            : e.offset = this._config.offset,
            e
        }
        ,
        e._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }),
            r({}, t, this._config.popperConfig)
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this).data("bs.dropdown");
                if (n || (n = new t(this,"object" == typeof e ? e : null),
                o.default(this).data("bs.dropdown", n)),
                "string" == typeof e) {
                    if ("undefined" == typeof n[e])
                        throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }
            ))
        }
        ,
        t._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, a = n.length; i < a; i++) {
                    var s = t._getParentFromElement(n[i])
                      , l = o.default(n[i]).data("bs.dropdown")
                      , r = {
                        relatedTarget: n[i]
                    };
                    if (e && "click" === e.type && (r.clickEvent = e),
                    l) {
                        var u = l._menu;
                        if (o.default(s).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && o.default.contains(s, e.target))) {
                            var d = o.default.Event("hide.bs.dropdown", r);
                            o.default(s).trigger(d),
                            d.isDefaultPrevented() || ("ontouchstart"in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop),
                            n[i].setAttribute("aria-expanded", "false"),
                            l._popper && l._popper.destroy(),
                            o.default(u).removeClass("show"),
                            o.default(s).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown", r)))
                        }
                    }
                }
        }
        ,
        t._getParentFromElement = function(t) {
            var e, n = d.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        t._dataApiKeydownHandler = function(e) {
            if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || o.default(e.target).closest(".dropdown-menu").length) : !I.test(e.which)) && !this.disabled && !o.default(this).hasClass("disabled")) {
                var n = t._getParentFromElement(this)
                  , i = o.default(n).hasClass("show");
                if (i || 27 !== e.which) {
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    !i || 27 === e.which || 32 === e.which)
                        return 27 === e.which && o.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"),
                        void o.default(this).trigger("click");
                    var a = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
                        return o.default(t).is(":visible")
                    }
                    ));
                    if (0 !== a.length) {
                        var s = a.indexOf(e.target);
                        38 === e.which && s > 0 && s--,
                        40 === e.which && s < a.length - 1 && s++,
                        s < 0 && (s = 0),
                        a[s].focus()
                    }
                }
            }
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return j
            }
        }, {
            key: "DefaultType",
            get: function() {
                return O
            }
        }]),
        t
    }();
    o.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', x._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", x._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", x._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        x._jQueryInterface.call(o.default(this), "toggle")
    }
    )).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        t.stopPropagation()
    }
    )),
    o.default.fn[k] = x._jQueryInterface,
    o.default.fn[k].Constructor = x,
    o.default.fn[k].noConflict = function() {
        return o.default.fn[k] = A,
        x._jQueryInterface
    }
    ;
    var P = o.default.fn.modal
      , R = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , L = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , q = function() {
        function t(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(".modal-dialog"),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var e = t.prototype;
        return e.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        e.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                o.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                var n = o.default.Event("show.bs.modal", {
                    relatedTarget: t
                });
                o.default(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                o.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(t) {
                    return e.hide(t)
                }
                )),
                o.default(this._dialog).on("mousedown.dismiss.bs.modal", (function() {
                    o.default(e._element).one("mouseup.dismiss.bs.modal", (function(t) {
                        o.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return e._showElement(t)
                }
                )))
            }
        }
        ,
        e.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = o.default.Event("hide.bs.modal");
                if (o.default(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = o.default(this._element).hasClass("fade");
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    o.default(document).off("focusin.bs.modal"),
                    o.default(this._element).removeClass("show"),
                    o.default(this._element).off("click.dismiss.bs.modal"),
                    o.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                    i) {
                        var a = d.getTransitionDurationFromElement(this._element);
                        o.default(this._element).one(d.TRANSITION_END, (function(t) {
                            return e._hideModal(t)
                        }
                        )).emulateTransitionEnd(a)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        e.dispose = function() {
            [window, this._element, this._dialog].forEach((function(t) {
                return o.default(t).off(".bs.modal")
            }
            )),
            o.default(document).off("focusin.bs.modal"),
            o.default.removeData(this._element, "bs.modal"),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(t) {
            return t = r({}, R, t),
            d.typeCheckConfig("modal", t, L),
            t
        }
        ,
        e._triggerBackdropTransition = function() {
            var t = this;
            if ("static" === this._config.backdrop) {
                var e = o.default.Event("hidePrevented.bs.modal");
                if (o.default(this._element).trigger(e),
                e.isDefaultPrevented())
                    return;
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                n || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
                var i = d.getTransitionDurationFromElement(this._dialog);
                o.default(this._element).off(d.TRANSITION_END),
                o.default(this._element).one(d.TRANSITION_END, (function() {
                    t._element.classList.remove("modal-static"),
                    n || o.default(t._element).one(d.TRANSITION_END, (function() {
                        t._element.style.overflowY = ""
                    }
                    )).emulateTransitionEnd(t._element, i)
                }
                )).emulateTransitionEnd(i),
                this._element.focus()
            } else
                this.hide()
        }
        ,
        e._showElement = function(t) {
            var e = this
              , n = o.default(this._element).hasClass("fade")
              , i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            o.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0,
            n && d.reflow(this._element),
            o.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
            var a = o.default.Event("shown.bs.modal", {
                relatedTarget: t
            })
              , s = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                o.default(e._element).trigger(a)
            };
            if (n) {
                var l = d.getTransitionDurationFromElement(this._dialog);
                o.default(this._dialog).one(d.TRANSITION_END, s).emulateTransitionEnd(l)
            } else
                s()
        }
        ,
        e._enforceFocus = function() {
            var t = this;
            o.default(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(e) {
                document !== e.target && t._element !== e.target && 0 === o.default(t._element).has(e.target).length && t._element.focus()
            }
            ))
        }
        ,
        e._setEscapeEvent = function() {
            var t = this;
            this._isShown ? o.default(this._element).on("keydown.dismiss.bs.modal", (function(e) {
                t._config.keyboard && 27 === e.which ? (e.preventDefault(),
                t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
            }
            )) : this._isShown || o.default(this._element).off("keydown.dismiss.bs.modal")
        }
        ,
        e._setResizeEvent = function() {
            var t = this;
            this._isShown ? o.default(window).on("resize.bs.modal", (function(e) {
                return t.handleUpdate(e)
            }
            )) : o.default(window).off("resize.bs.modal")
        }
        ,
        e._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                o.default(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                o.default(t._element).trigger("hidden.bs.modal")
            }
            ))
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && (o.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(t) {
            var e = this
              , n = o.default(this._element).hasClass("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && this._backdrop.classList.add(n),
                o.default(this._backdrop).appendTo(document.body),
                o.default(this._element).on("click.dismiss.bs.modal", (function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition()
                }
                )),
                n && d.reflow(this._backdrop),
                o.default(this._backdrop).addClass("show"),
                !t)
                    return;
                if (!n)
                    return void t();
                var i = d.getTransitionDurationFromElement(this._backdrop);
                o.default(this._backdrop).one(d.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                o.default(this._backdrop).removeClass("show");
                var a = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (o.default(this._element).hasClass("fade")) {
                    var s = d.getTransitionDurationFromElement(this._backdrop);
                    o.default(this._backdrop).one(d.TRANSITION_END, a).emulateTransitionEnd(s)
                } else
                    a()
            } else
                t && t()
        }
        ,
        e._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"))
                  , n = [].slice.call(document.querySelectorAll(".sticky-top"));
                o.default(e).each((function(e, n) {
                    var i = n.style.paddingRight
                      , a = o.default(n).css("padding-right");
                    o.default(n).data("padding-right", i).css("padding-right", parseFloat(a) + t._scrollbarWidth + "px")
                }
                )),
                o.default(n).each((function(e, n) {
                    var i = n.style.marginRight
                      , a = o.default(n).css("margin-right");
                    o.default(n).data("margin-right", i).css("margin-right", parseFloat(a) - t._scrollbarWidth + "px")
                }
                ));
                var i = document.body.style.paddingRight
                  , a = o.default(document.body).css("padding-right");
                o.default(document.body).data("padding-right", i).css("padding-right", parseFloat(a) + this._scrollbarWidth + "px")
            }
            o.default(document.body).addClass("modal-open")
        }
        ,
        e._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
            o.default(t).each((function(t, e) {
                var n = o.default(e).data("padding-right");
                o.default(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            }
            ));
            var e = [].slice.call(document.querySelectorAll(".sticky-top"));
            o.default(e).each((function(t, e) {
                var n = o.default(e).data("margin-right");
                "undefined" != typeof n && o.default(e).css("margin-right", n).removeData("margin-right")
            }
            ));
            var n = o.default(document.body).data("padding-right");
            o.default(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure",
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        t._jQueryInterface = function(e, n) {
            return this.each((function() {
                var i = o.default(this).data("bs.modal")
                  , a = r({}, R, o.default(this).data(), "object" == typeof e && e ? e : {});
                if (i || (i = new t(this,a),
                o.default(this).data("bs.modal", i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e](n)
                } else
                    a.show && i.show(n)
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return R
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(t) {
        var e, n = this, i = d.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var a = o.default(e).data("bs.modal") ? "toggle" : r({}, o.default(e).data(), o.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var s = o.default(e).one("show.bs.modal", (function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", (function() {
                o.default(n).is(":visible") && n.focus()
            }
            ))
        }
        ));
        q._jQueryInterface.call(o.default(e), a, this)
    }
    )),
    o.default.fn.modal = q._jQueryInterface,
    o.default.fn.modal.Constructor = q,
    o.default.fn.modal.noConflict = function() {
        return o.default.fn.modal = P,
        q._jQueryInterface
    }
    ;
    var F = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Q = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , B = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi
      , H = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function U(t, e, n) {
        if (0 === t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), a = [].slice.call(i.body.querySelectorAll("*")), s = function(t, n) {
            var i = a[t]
              , s = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            var l = [].slice.call(i.attributes)
              , r = [].concat(e["*"] || [], e[s] || []);
            l.forEach((function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === F.indexOf(n) || Boolean(t.nodeValue.match(B) || t.nodeValue.match(H));
                    for (var i = e.filter((function(t) {
                        return t instanceof RegExp
                    }
                    )), o = 0, a = i.length; o < a; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, r) || i.removeAttribute(t.nodeName)
            }
            ))
        }, l = 0, r = a.length; l < r; l++)
            s(l);
        return i.body.innerHTML
    }
    var M = "tooltip"
      , W = o.default.fn[M]
      , V = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , z = ["sanitize", "whiteList", "sanitizeFn"]
      , K = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , X = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Y = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Q,
        popperConfig: null
    }
      , $ = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , J = function() {
        function t(t, e) {
            if ("undefined" == typeof a.default)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var e = t.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }
        ,
        e.disable = function() {
            this._isEnabled = !1
        }
        ,
        e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        e.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = o.default(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    o.default(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (o.default(this.getTipElement()).hasClass("show"))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            o.default.removeData(this.element, this.constructor.DATA_KEY),
            o.default(this.element).off(this.constructor.EVENT_KEY),
            o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && o.default(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        e.show = function() {
            var t = this;
            if ("none" === o.default(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var e = o.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                o.default(this.element).trigger(e);
                var n = d.findShadowRoot(this.element)
                  , i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !i)
                    return;
                var s = this.getTipElement()
                  , l = d.getUID(this.constructor.NAME);
                s.setAttribute("id", l),
                this.element.setAttribute("aria-describedby", l),
                this.setContent(),
                this.config.animation && o.default(s).addClass("fade");
                var r = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement
                  , u = this._getAttachment(r);
                this.addAttachmentClass(u);
                var f = this._getContainer();
                o.default(s).data(this.constructor.DATA_KEY, this),
                o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(s).appendTo(f),
                o.default(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new a.default(this.element,s,this._getPopperConfig(u)),
                o.default(s).addClass("show"),
                "ontouchstart"in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
                var c = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null,
                    o.default(t.element).trigger(t.constructor.Event.SHOWN),
                    "out" === e && t._leave(null, t)
                };
                if (o.default(this.tip).hasClass("fade")) {
                    var h = d.getTransitionDurationFromElement(this.tip);
                    o.default(this.tip).one(d.TRANSITION_END, c).emulateTransitionEnd(h)
                } else
                    c()
            }
        }
        ,
        e.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , i = o.default.Event(this.constructor.Event.HIDE)
              , a = function() {
                "show" !== e._hoverState && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                o.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (o.default(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (o.default(n).removeClass("show"),
                "ontouchstart"in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                o.default(this.tip).hasClass("fade")) {
                    var s = d.getTransitionDurationFromElement(n);
                    o.default(n).one(d.TRANSITION_END, a).emulateTransitionEnd(s)
                } else
                    a();
                this._hoverState = ""
            }
        }
        ,
        e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        e.addAttachmentClass = function(t) {
            o.default(this.getTipElement()).addClass("bs-tooltip-" + t)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || o.default(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(o.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()),
            o.default(t).removeClass("fade show")
        }
        ,
        e.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = U(e, this.config.whiteList, this.config.sanitizeFn)),
            t.html(e)) : t.text(e) : this.config.html ? o.default(e).parent().is(t) || t.empty().append(e) : t.text(o.default(e).text())
        }
        ,
        e.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        e._getPopperConfig = function(t) {
            var e = this;
            return r({}, {
                placement: t,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function(t) {
                    return e._handlePopperPlacementChange(t)
                }
            }, this.config.popperConfig)
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element) || {}),
                e
            }
            : e.offset = this.config.offset,
            e
        }
        ,
        e._getContainer = function() {
            return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container)
        }
        ,
        e._getAttachment = function(t) {
            return X[t.toUpperCase()]
        }
        ,
        e._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach((function(e) {
                if ("click" === e)
                    o.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }
                    ));
                else if ("manual" !== e) {
                    var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                      , i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    o.default(t.element).on(n, t.config.selector, (function(e) {
                        return t._enter(e)
                    }
                    )).on(i, t.config.selector, (function(e) {
                        return t._leave(e)
                    }
                    ))
                }
            }
            )),
            this._hideModalHandler = function() {
                t.element && t.hide()
            }
            ,
            o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = r({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        e._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        e._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || o.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            o.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            o.default(e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout),
            e._hoverState = "show",
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                "show" === e._hoverState && e.show()
            }
            ), e.config.delay.show) : e.show())
        }
        ,
        e._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || o.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            o.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = "out",
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                "out" === e._hoverState && e.hide()
            }
            ), e.config.delay.hide) : e.hide())
        }
        ,
        e._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        e._getConfig = function(t) {
            var e = o.default(this.element).data();
            return Object.keys(e).forEach((function(t) {
                -1 !== z.indexOf(t) && delete e[t]
            }
            )),
            "number" == typeof (t = r({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            d.typeCheckConfig(M, t, this.constructor.DefaultType),
            t.sanitize && (t.template = U(t.template, t.whiteList, t.sanitizeFn)),
            t
        }
        ,
        e._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        e._cleanTipClass = function() {
            var t = o.default(this.getTipElement())
              , e = t.attr("class").match(V);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        e._handlePopperPlacementChange = function(t) {
            this.tip = t.instance.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        e._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (o.default(t).removeClass("fade"),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data("bs.tooltip")
                  , a = "object" == typeof e && e;
                if ((i || !/dispose|hide/.test(e)) && (i || (i = new t(this,a),
                n.data("bs.tooltip", i)),
                "string" == typeof e)) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Y
            }
        }, {
            key: "NAME",
            get: function() {
                return M
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return $
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return K
            }
        }]),
        t
    }();
    o.default.fn[M] = J._jQueryInterface,
    o.default.fn[M].Constructor = J,
    o.default.fn[M].noConflict = function() {
        return o.default.fn[M] = W,
        J._jQueryInterface
    }
    ;
    var G = "popover"
      , Z = o.default.fn[G]
      , tt = new RegExp("(^|\\s)bs-popover\\S+","g")
      , et = r({}, J.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , nt = r({}, J.DefaultType, {
        content: "(string|element|function)"
    })
      , it = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , ot = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this
        }
        n = t,
        (e = i).prototype = Object.create(n.prototype),
        e.prototype.constructor = e,
        e.__proto__ = n;
        var a = i.prototype;
        return a.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        a.addAttachmentClass = function(t) {
            o.default(this.getTipElement()).addClass("bs-popover-" + t)
        }
        ,
        a.getTipElement = function() {
            return this.tip = this.tip || o.default(this.config.template)[0],
            this.tip
        }
        ,
        a.setContent = function() {
            var t = o.default(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show")
        }
        ,
        a._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        a._cleanTipClass = function() {
            var t = o.default(this.getTipElement())
              , e = t.attr("class").match(tt);
            null !== e && e.length > 0 && t.removeClass(e.join(""))
        }
        ,
        i._jQueryInterface = function(t) {
            return this.each((function() {
                var e = o.default(this).data("bs.popover")
                  , n = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this,n),
                o.default(this).data("bs.popover", e)),
                "string" == typeof t)) {
                    if ("undefined" == typeof e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        l(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return et
            }
        }, {
            key: "NAME",
            get: function() {
                return G
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return it
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return nt
            }
        }]),
        i
    }(J);
    o.default.fn[G] = ot._jQueryInterface,
    o.default.fn[G].Constructor = ot,
    o.default.fn[G].noConflict = function() {
        return o.default.fn[G] = Z,
        ot._jQueryInterface
    }
    ;
    var at = "scrollspy"
      , st = o.default.fn[at]
      , lt = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , rt = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , ut = function() {
        function t(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            o.default(this._scrollElement).on("scroll.bs.scrollspy", (function(t) {
                return n._process(t)
            }
            )),
            this.refresh(),
            this._process()
        }
        var e = t.prototype;
        return e.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , n = "auto" === this._config.method ? e : this._config.method
              , i = "position" === n ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
                var e, a = d.getSelectorFromElement(t);
                if (a && (e = document.querySelector(a)),
                e) {
                    var s = e.getBoundingClientRect();
                    if (s.width || s.height)
                        return [o.default(e)[n]().top + i, a]
                }
                return null
            }
            )).filter((function(t) {
                return t
            }
            )).sort((function(t, e) {
                return t[0] - e[0]
            }
            )).forEach((function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            }
            ))
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, "bs.scrollspy"),
            o.default(this._scrollElement).off(".bs.scrollspy"),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        e._getConfig = function(t) {
            if ("string" != typeof (t = r({}, lt, "object" == typeof t && t ? t : {})).target && d.isElement(t.target)) {
                var e = o.default(t.target).attr("id");
                e || (e = d.getUID(at),
                o.default(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return d.typeCheckConfig(at, t, rt),
            t
        }
        ,
        e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        e._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        e._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",").map((function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            }
            ))
              , n = o.default([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"),
            n.addClass("active")) : (n.addClass("active"),
            n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),
            n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
            o.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        ,
        e._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
                return t.classList.contains("active")
            }
            )).forEach((function(t) {
                return t.classList.remove("active")
            }
            ))
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this).data("bs.scrollspy");
                if (n || (n = new t(this,"object" == typeof e && e),
                o.default(this).data("bs.scrollspy", n)),
                "string" == typeof e) {
                    if ("undefined" == typeof n[e])
                        throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return lt
            }
        }]),
        t
    }();
    o.default(window).on("load.bs.scrollspy.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--; ) {
            var n = o.default(t[e]);
            ut._jQueryInterface.call(n, n.data())
        }
    }
    )),
    o.default.fn[at] = ut._jQueryInterface,
    o.default.fn[at].Constructor = ut,
    o.default.fn[at].noConflict = function() {
        return o.default.fn[at] = st,
        ut._jQueryInterface
    }
    ;
    var dt = o.default.fn.tab
      , ft = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass("active") || o.default(this._element).hasClass("disabled"))) {
                var e, n, i = o.default(this._element).closest(".nav, .list-group")[0], a = d.getSelectorFromElement(this._element);
                if (i) {
                    var s = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";
                    n = (n = o.default.makeArray(o.default(i).find(s)))[n.length - 1]
                }
                var l = o.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                })
                  , r = o.default.Event("show.bs.tab", {
                    relatedTarget: n
                });
                if (n && o.default(n).trigger(l),
                o.default(this._element).trigger(r),
                !r.isDefaultPrevented() && !l.isDefaultPrevented()) {
                    a && (e = document.querySelector(a)),
                    this._activate(this._element, i);
                    var u = function() {
                        var e = o.default.Event("hidden.bs.tab", {
                            relatedTarget: t._element
                        })
                          , i = o.default.Event("shown.bs.tab", {
                            relatedTarget: n
                        });
                        o.default(n).trigger(e),
                        o.default(t._element).trigger(i)
                    };
                    e ? this._activate(e, e.parentNode, u) : u()
                }
            }
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, "bs.tab"),
            this._element = null
        }
        ,
        e._activate = function(t, e, n) {
            var i = this
              , a = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? o.default(e).children(".active") : o.default(e).find("> li > .active"))[0]
              , s = n && a && o.default(a).hasClass("fade")
              , l = function() {
                return i._transitionComplete(t, a, n)
            };
            if (a && s) {
                var r = d.getTransitionDurationFromElement(a);
                o.default(a).removeClass("show").one(d.TRANSITION_END, l).emulateTransitionEnd(r)
            } else
                l()
        }
        ,
        e._transitionComplete = function(t, e, n) {
            if (e) {
                o.default(e).removeClass("active");
                var i = o.default(e.parentNode).find("> .dropdown-menu .active")[0];
                i && o.default(i).removeClass("active"),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (o.default(t).addClass("active"),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            d.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && o.default(t.parentNode).hasClass("dropdown-menu")) {
                var a = o.default(t).closest(".dropdown")[0];
                if (a) {
                    var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
                    o.default(s).addClass("active")
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data("bs.tab");
                if (i || (i = new t(this),
                n.data("bs.tab", i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
        t.preventDefault(),
        ft._jQueryInterface.call(o.default(this), "show")
    }
    )),
    o.default.fn.tab = ft._jQueryInterface,
    o.default.fn.tab.Constructor = ft,
    o.default.fn.tab.noConflict = function() {
        return o.default.fn.tab = dt,
        ft._jQueryInterface
    }
    ;
    var ct = o.default.fn.toast
      , ht = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , gt = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , mt = function() {
        function t(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var e = t.prototype;
        return e.show = function() {
            var t = this
              , e = o.default.Event("show.bs.toast");
            if (o.default(this._element).trigger(e),
            !e.isDefaultPrevented()) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var n = function() {
                    t._element.classList.remove("showing"),
                    t._element.classList.add("show"),
                    o.default(t._element).trigger("shown.bs.toast"),
                    t._config.autohide && (t._timeout = setTimeout((function() {
                        t.hide()
                    }
                    ), t._config.delay))
                };
                if (this._element.classList.remove("hide"),
                d.reflow(this._element),
                this._element.classList.add("showing"),
                this._config.animation) {
                    var i = d.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(d.TRANSITION_END, n).emulateTransitionEnd(i)
                } else
                    n()
            }
        }
        ,
        e.hide = function() {
            if (this._element.classList.contains("show")) {
                var t = o.default.Event("hide.bs.toast");
                o.default(this._element).trigger(t),
                t.isDefaultPrevented() || this._close()
            }
        }
        ,
        e.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains("show") && this._element.classList.remove("show"),
            o.default(this._element).off("click.dismiss.bs.toast"),
            o.default.removeData(this._element, "bs.toast"),
            this._element = null,
            this._config = null
        }
        ,
        e._getConfig = function(t) {
            return t = r({}, gt, o.default(this._element).data(), "object" == typeof t && t ? t : {}),
            d.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
        }
        ,
        e._setListeners = function() {
            var t = this;
            o.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() {
                return t.hide()
            }
            ))
        }
        ,
        e._close = function() {
            var t = this
              , e = function() {
                t._element.classList.add("hide"),
                o.default(t._element).trigger("hidden.bs.toast")
            };
            if (this._element.classList.remove("show"),
            this._config.animation) {
                var n = d.getTransitionDurationFromElement(this._element);
                o.default(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        e._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data("bs.toast");
                if (i || (i = new t(this,"object" == typeof e && e),
                n.data("bs.toast", i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e](this)
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ht
            }
        }, {
            key: "Default",
            get: function() {
                return gt
            }
        }]),
        t
    }();
    o.default.fn.toast = mt._jQueryInterface,
    o.default.fn.toast.Constructor = mt,
    o.default.fn.toast.noConflict = function() {
        return o.default.fn.toast = ct,
        mt._jQueryInterface
    }
    ,
    t.Alert = h,
    t.Button = m,
    t.Carousel = w,
    t.Collapse = D,
    t.Dropdown = x,
    t.Modal = q,
    t.Popover = ot,
    t.Scrollspy = ut,
    t.Tab = ft,
    t.Toast = mt,
    t.Tooltip = J,
    t.Util = d,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));

/**
 * @module       Regula
 * @description  An annotation-based form-validation framework in Javascript
 * @license      BSD
 * @version      1.3.4
 * @copyright    Robert Nyman, https://www.robertnyman.com
 */
(function(e, t) {
    typeof define == "function" && define.amd ? define("utils/MapUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.MapUtils = t())
}
)(this, function() {
    return {
        iterateOverMap: function(e, t) {
            var n = 0;
            for (var r in e)
                e.hasOwnProperty(r) && r !== "__size__" && (t.call(e, r, e[r], n),
                n++)
        },
        exists: function(e, t) {
            var n = !1
              , r = 0;
            while (!n && r < e.length)
                n = t == e[r],
                r++;
            return n
        },
        put: function(e, t, n) {
            e.__size__ || (e.__size__ = 0),
            e[t] || e.__size__++,
            e[t] = n
        },
        isEmpty: function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("utils/DOMUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.DOMUtils = t())
}(this, function() {
    function t(e, t, n, r) {
        var i = t == "*" && e.all ? e.all : e.getElementsByTagName(t), s = [], o = typeof r != "undefined" ? new RegExp("(^|\\s)" + r + "(\\s|$)") : null, u, a;
        for (var f = 0; f < i.length; f++)
            u = i[f],
            a = u.getAttribute && u.getAttribute(n),
            typeof a == "string" && a.length > 0 && (typeof r == "undefined" || o && o.test(a)) && s.push(u);
        return s
    }
    function n(e, t) {
        var n = e.getAttribute && e.getAttribute(t) || null;
        if (!n) {
            var r = e.attributes;
            for (var i = 0; i < r.length; i++)
                r[i].nodeName === t && (n = r[i].nodeValue)
        }
        return n
    }
    function r() {
        return "regula-generated-" + Math.floor(Math.random() * 1e6)
    }
    function i() {
        return typeof document.createElement("input").checkValidity == "function"
    }
    var e = {
        form: "The form",
        select: "The select box",
        textarea: "The text area",
        checkbox: "The checkbox",
        radio: "The radio button",
        text: "The text field",
        password: "The password",
        email: "The email",
        url: "The URL",
        number: "The number",
        datetime: "The datetime",
        "datetime-local": "The local datetime",
        date: "The date",
        month: "The month",
        time: "The time",
        week: "The week",
        range: "The range",
        tel: "The telephone number",
        color: "The color"
    };
    return {
        friendlyInputNames: e,
        getElementsByAttribute: t,
        getAttributeValueForElement: n,
        generateRandomId: r,
        supportsHTML5Validation: i
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("service/GroupService", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.GroupService = t())
}(this, function() {
    var e = {
        Default: 0
    }
      , t = {
        0: "Default"
    }
      , n = []
      , r = 1;
    return {
        Group: e,
        ReverseGroup: t,
        deletedGroupIndices: n,
        firstCustomGroupIndex: r
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("utils/ArrayUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.ArrayUtils = t())
}(this, function() {
    function e(e, t) {
        var n = "";
        for (var r = 0; r < e.length; r++)
            n += e[r] + t;
        return n.replace(new RegExp(t + "$"), "")
    }
    return {
        explode: e
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("service/ExceptionService", ["utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.ExceptionService = t(e.regulaModules.ArrayUtils))
}(this, function(e) {
    function i(e, t, n) {
        var r = "";
        return e != null ? (r = e.id,
        t == "" || t == null || t == undefined ? r += ": " : r += "." + t + ": ") : t != "" && t != null && t != undefined && (r = "@" + t + ": "),
        r + n
    }
    function s(t) {
        var n = "Function received: {";
        for (var r in t)
            t.hasOwnProperty(r) && (typeof t[r] == "string" ? n += r + ": " + t[r] + ", " : t[r]instanceof Array && (n += r + ": [" + e.explode(t[r], ", ") + "], "));
        return n = n.replace(/, $/, "") + "}",
        n
    }
    var t = {
        IllegalArgumentException: function(e) {
            this.name = "IllegalArgumentException",
            this.message = e
        },
        ConstraintDefinitionException: function(e) {
            this.name = "ConstraintDefinitionException",
            this.message = e
        },
        BindException: function(e) {
            this.name = "BindException",
            this.message = e
        },
        MissingFeatureException: function(e) {
            this.name = "MissingFeatureException",
            this.message = e
        }
    };
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = t[n];
            r.prototype = new Error,
            r.prototype.constructor = r
        }
    return {
        Exception: t,
        generateExceptionMessage: i,
        explodeParameters: s
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("service/ValidationService", ["utils/DOMUtils", "utils/MapUtils", "service/GroupService", "service/ExceptionService", "utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.ValidationService = t(e.regulaModules.DOMUtils, e.regulaModules.MapUtils, e.regulaModules.GroupService, e.regulaModules.ExceptionService, e.regulaModules.ArrayUtils))
}(this, function(e, t, n, r, i) {
    function h(e) {
        for (var t in e)
            e.hasOwnProperty(t) && v(t, e)
    }
    function p(e) {
        s = e.config,
        o = e.ReverseConstraint,
        u = e.constraintDefinitions,
        a = e.boundConstraints
    }
    function v(e, t) {
        var n = t[e]
          , i = e.replace(/(^[A-Z]+)/, function(e) {
            return e.toLowerCase()
        });
        n.async ? c[i] = function(t, i, s) {
            if (typeof s == "undefined")
                throw new r.Exception.IllegalArgumentException(e + " is an asynchronous constraint, but you have not provided a callback.");
            return n.validator.call(t, i, c, s)
        }
        : c[i] = function(e, t) {
            return n.validator.call(e, t, c)
        }
    }
    function m(e, n, r, i) {
        function a(n, r) {
            var i = {};
            for (var s in n)
                n.hasOwnProperty(s) && s != "__size__" && t.put(i, s, n[s]);
            if (r.length > 0)
                for (var s in e)
                    e.hasOwnProperty(s) && s != "__size__" && t.put(i, s, e[s]);
            return i
        }
        function f(e, t, n, i) {
            var s = o[y.constraintType]
              , a = W(t, s, i)
              , f = {
                group: n,
                constraintName: e.constraintName,
                custom: u[s].custom,
                compound: u[s].compound,
                async: u[s].async,
                constraintParameters: y.params,
                failingElements: e.failingElements,
                message: a
            };
            return r.reportAsSingleViolation || (f.composingConstraintViolations = e.composingConstraintViolations || []),
            f
        }
        var l = []
          , c = [];
        for (var h = 0; h < r.composingConstraints.length; h++) {
            var p = r.composingConstraints[h]
              , d = o[p.constraintType];
            u[d].async ? c.push(p) : l.push(p)
        }
        var v = null
          , m = this;
        if (g(this, e)) {
            if (l.length > 0) {
                v = [];
                for (var h = 0; h < l.length; h++) {
                    var y = l[h]
                      , b = o[y.constraintType]
                      , w = a(y.params, r.params)
                      , E = U(n, m.id, b, w);
                    if (!E.constraintPassed) {
                        var S = f(E, m.id, n, w);
                        if (s.enableHTML5Validation)
                            for (var x = 0; x < E.failingElements.length; x++)
                                E.failingElements[x].setCustomValidity(S.message);
                        v.push(S)
                    }
                }
            }
            if (c.length > 0) {
                v === null && (v = []);
                var T = 0;
                for (var h = 0; h < c.length; h++) {
                    var y = c[h]
                      , b = o[y.constraintType]
                      , w = a(y.params, r.params);
                    z(n, m.id, b, w, N)
                }
                function N(e) {
                    if (!e.constraintPassed) {
                        var t = f(e, m.id, n, w);
                        if (s.enableHTML5Validation)
                            for (var r = 0; r < e.failingElements.length; r++)
                                e.failingElements[r].setCustomValidity(t.message);
                        v.push(t)
                    }
                    T++,
                    T === c.length && i(v)
                }
            }
        } else
            v = [];
        return v
    }
    function g(e, t) {
        var n = s.validateEmptyFields;
        return typeof t["ignoreEmpty"] != "undefined" && (n = !t.ignoreEmpty),
        !d.blank.call(e) || !!n
    }
    function y(e) {
        var t = {
            YMD: {
                Year: 0,
                Month: 1,
                Day: 2
            },
            MDY: {
                Month: 0,
                Day: 1,
                Year: 2
            },
            DMY: {
                Day: 0,
                Month: 1,
                Year: 2
            }
        }
          , n = t[e.format]
          , r = e.separator;
        typeof e["separator"] == "undefined" && (r = /\//.test(this.value) ? "/" : /\./.test(this.value) ? "." : / /.test(this.value) ? " " : /[^0-9]+/);
        var i = this.value.split(r)
          , s = new Date(i[n.Year],i[n.Month] - 1,i[n.Day])
          , o = new Date;
        return typeof e["date"] != "undefined" && (i = e.date.split(r),
        o = new Date(i[n.Year],i[n.Month] - 1,i[n.Day])),
        {
            dateToValidate: s,
            dateToTestAgainst: o
        }
    }
    function b(e) {
        return function(t, n, r) {
            var i = !0;
            return g(this, t) && (i = e.call(this, t, n, r)),
            i
        }
    }
    function w() {
        return !this.validity.typeMismatch
    }
    function E(e) {
        function t(e) {
            var t = e.groups || null
              , n = e.elementIds || null
              , r = (typeof e.constraintType == "undefined" ? null : e.constraintType) || null
              , i = "";
            return i += t == null ? "0" : "1",
            i += n == null ? "0" : "1",
            i += r == null ? "0" : "1",
            i
        }
        f = {},
        l = {};
        var r = {
            "000": S,
            "001": x,
            "010": T,
            "011": N,
            100: C,
            101: k,
            110: L,
            111: A
        };
        if (!e || typeof e == "undefined")
            e = {};
        typeof e.independent == "undefined" && (e.independent = !0),
        typeof e.constraintType != "undefined" && (e.constraintType = o[e.constraintType]);
        if (typeof e.groups != "undefined") {
            var i = e.groups;
            e.groups = [];
            for (var s = 0; s < i.length; s++)
                e.groups.push(n.ReverseGroup[i[s]])
        }
        if (typeof e.elements != "undefined") {
            e.elementIds = [];
            for (var s = 0; s < e.elements.length; s++)
                e.elementIds.push(e.elements[s].id)
        } else
            typeof e.elementId != "undefined" && (e.elementIds = [e.elementId]);
        return r[t(e)](e)
    }
    function S(e) {
        var t = {
            asyncContexts: [],
            syncContexts: []
        };
        for (var n in a)
            if (a.hasOwnProperty(n)) {
                var r = a[n];
                for (var i in r)
                    if (r.hasOwnProperty(i))
                        if (!document.getElementById(i))
                            delete r[i];
                        else {
                            var s = r[i];
                            for (var o in s)
                                if (s.hasOwnProperty(o)) {
                                    var u = H(n, i, o);
                                    u.async ? t.asyncContexts.push(u) : t.syncContexts.push(u)
                                }
                        }
            }
        return t = M(t),
        D(t, e)
    }
    function x(e) {
        var t = {
            asyncContexts: [],
            syncContexts: []
        };
        for (var n in a)
            if (a.hasOwnProperty(n)) {
                var r = a[n];
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        var s = r[i];
                        if (s[e.constraintType]) {
                            var o = H(n, i, e.constraintType);
                            o.async ? t.asyncContexts.push(o) : t.syncContexts.push(o)
                        }
                    }
            }
        return t = M(t),
        D(t, e)
    }
    function T(e) {
        var t = {}
          , n = {
            asyncContexts: [],
            syncContexts: []
        };
        for (var s in a)
            if (a.hasOwnProperty(s)) {
                var o = a[s];
                for (var u = 0; u < e.elementIds.length; u++) {
                    var f = e.elementIds[u];
                    typeof t[f] == "undefined" && (t[f] = 0);
                    var l = o[f];
                    if (typeof l != "undefined") {
                        t[f]++;
                        for (var c in l)
                            if (l.hasOwnProperty(c)) {
                                var h = H(s, f, c);
                                h.async ? n.asyncContexts.push(h) : n.syncContexts.push(h)
                            }
                    }
                }
            }
        var p = [];
        for (var f in t)
            t.hasOwnProperty(f) && t[f] === 0 && p.push(f);
        if (p.length > 0)
            throw new r.Exception.IllegalArgumentException("No constraints have been bound to the specified elements: " + i.explode(p) + ". " + r.explodeParameters(e));
        return n = M(n),
        D(n, e)
    }
    function N(e) {
        var t = []
          , n = {
            asyncContexts: [],
            syncContexts: []
        };
        for (var s in a)
            if (a.hasOwnProperty(s)) {
                var o = a[s];
                for (var u = 0; u < e.elementIds.length; u++) {
                    var f = e.elementIds[u]
                      , l = o[f];
                    if (typeof l != "undefined") {
                        var c = H(s, f, e.constraintType);
                        c.async ? n.asyncContexts.push(c) : n.syncContexts.push(c)
                    } else
                        t.push(f)
                }
            }
        if (t.length > 0)
            throw new r.Exception.IllegalArgumentException("No constraints have been bound to the specified elements: " + i.explode(t) + ". " + r.explodeParameters(e));
        return n = M(n),
        D(n, e)
    }
    function C(e) {
        var t = !1
          , n = {
            groupedContexts: {}
        }
          , i = 0;
        while (i < e.groups.length) {
            var s = e.groups[i]
              , o = a[s];
            if (typeof o == "undefined")
                throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            for (var u in o)
                if (o.hasOwnProperty(u)) {
                    var f = o[u];
                    for (var l in f)
                        if (f.hasOwnProperty(l)) {
                            var c = H(s, u, l);
                            n.groupedContexts[s] || (n.groupedContexts[s] = {
                                asyncContexts: [],
                                syncContexts: []
                            }),
                            c.async ? (t = !0,
                            n.groupedContexts[s].asyncContexts.push(c)) : n.groupedContexts[s].syncContexts.push(c)
                        }
                }
            i++
        }
        var h = _(n);
        return e.groups = h.groups,
        n = h.uniqueConstraintsToValidate,
        P(e, n, t)
    }
    function k(e) {
        var t = !1
          , n = {
            groupedContexts: {}
        }
          , i = 0;
        while (i < e.groups.length) {
            var s = e.groups[i]
              , o = a[s];
            if (typeof o == "undefined")
                throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            var u = !1;
            for (var f in o)
                if (o.hasOwnProperty(f)) {
                    var l = o[f];
                    if (l[e.constraintType]) {
                        u = !0;
                        var c = H(s, f, e.constraintType);
                        n.groupedContexts[s] || (n.groupedContexts[s] = {
                            asyncContexts: [],
                            syncContexts: []
                        }),
                        c.async ? (t = !0,
                        n.groupedContexts[s].asyncContexts.push(c)) : n.groupedContexts[s].syncContexts.push(c)
                    }
                }
            if (!u)
                throw new r.Exception.IllegalArgumentException("Constraint " + e.constraintType + " has not been bound to any element under group " + s + ". " + r.explodeParameters(e));
            i++
        }
        var h = _(n);
        return e.groups = h.groups,
        n = h.uniqueConstraintsToValidate,
        P(e, n, t)
    }
    function L(e) {
        var t = []
          , n = []
          , s = !1
          , o = {
            groupedContexts: {}
        }
          , u = 0;
        while (u < e.groups.length) {
            var f = e.groups[u]
              , l = a[f];
            if (!l)
                throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            for (var c = 0; c < e.elementIds.length; c++) {
                var h = e.elementIds[c]
                  , p = l[h];
                if (p) {
                    for (var d in p)
                        if (p.hasOwnProperty(d)) {
                            var v = H(f, h, d);
                            o.groupedContexts[f] || (o.groupedContexts[f] = {
                                asyncContexts: [],
                                syncContexts: []
                            }),
                            v.async ? (s = !0,
                            o.groupedContexts[f].asyncContexts.push(v)) : o.groupedContexts[f].syncContexts.push(v)
                        }
                } else
                    t.push(f),
                    n.push(h)
            }
            u++
        }
        if (t.length > 0)
            throw new r.Exception.IllegalArgumentException("The following elements: " + i.explode(n) + " were not found in one or more of the following group(s): [" + i.explode(t, ",").replace(/,/g, ", ") + "]. " + r.explodeParameters(e));
        var m = _(o);
        return e.groups = m.groups,
        o = m.uniqueConstraintsToValidate,
        P(e, o, s)
    }
    function A(e) {
        var t = !1
          , n = {
            groupedContexts: {}
        }
          , r = 0;
        while (r < e.groups.length) {
            var i = e.groups[r];
            for (var s = 0; s < e.elementIds.length; s++) {
                var o = e.elementIds[s]
                  , u = H(i, o, e.constraintType);
                n.groupedContexts[i] || (n.groupedContexts[i] = {
                    asyncContexts: [],
                    syncContexts: []
                }),
                u.async ? (t = !0,
                n.groupedContexts[i].asyncContexts.push(u)) : n.groupedContexts[i].syncContexts.push(u)
            }
            r++
        }
        var a = _(n);
        return e.groups = a.groups,
        n = a.uniqueConstraintsToValidate,
        P(e, n, t)
    }
    function O(e) {
        var t = !0;
        f[e.elementId] || (f[e.elementId] = {});
        var n = document.getElementById(e.elementId).cloneNode(!1)
          , r = n.name.replace(/\s/g, "");
        return typeof n.type != "undefined" && n.type.toLowerCase() === "radio" && r !== "" ? l[r] || (l[r] = {}) : l[r] = {},
        !f[e.elementId][e.elementConstraint] && !l[r][e.elementConstraint] && (t = !1,
        f[e.elementId][e.elementConstraint] = !0,
        typeof n.type != "undefined" && n.type.toLowerCase() === "radio" && r !== "" && (l[r][e.elementConstraint] = !0)),
        t
    }
    function M(e) {
        var t = {
            asyncContexts: [],
            syncContexts: []
        };
        for (var n = 0; n < e.syncContexts.length; n++) {
            var r = e.syncContexts[n];
            O(r) || t.syncContexts.push(r)
        }
        for (var n = 0; n < e.asyncContexts.length; n++) {
            var r = e.asyncContexts[n];
            O(r) || t.asyncContexts.push(r)
        }
        return t
    }
    function _(e) {
        var t = []
          , n = {
            groupedContexts: {}
        };
        for (var r in e.groupedContexts)
            if (e.groupedContexts.hasOwnProperty(r)) {
                for (var i = 0; i < e.groupedContexts[r].syncContexts.length; i++) {
                    var s = e.groupedContexts[r].syncContexts[i];
                    O(s) || (n.groupedContexts[r] || (n.groupedContexts[r] = {
                        asyncContexts: [],
                        syncContexts: []
                    }),
                    n.groupedContexts[r].syncContexts.push(s),
                    t.indexOf(r) == -1 && t.push(r))
                }
                for (var i = 0; i < e.groupedContexts[r].asyncContexts.length; i++) {
                    var s = e.groupedContexts[r].asyncContexts[i];
                    O(s) || (n.groupedContexts[r] || (n.groupedContexts[r] = {
                        asyncContexts: [],
                        syncContexts: []
                    }),
                    n.groupedContexts[r].asyncContexts.push(s),
                    t.indexOf(r) == -1 && t.push(r))
                }
            }
        return {
            groups: t,
            uniqueConstraintsToValidate: n
        }
    }
    function D(e, t) {
        var n = [];
        e.syncContexts.length > 0 && (n = B(e));
        if (e.asyncContexts.length > 0) {
            if (!t.callback)
                throw new r.Exception.IllegalArgumentException("One or more constraints to be validated are asynchronous, but a callback has not been provided.");
            j(e, function(e) {
                n.length > 0 ? n = n.concat(e) : n = e,
                t.callback(n)
            })
        } else
            t.callback && t.callback(n);
        return n
    }
    function P(e, t, n) {
        var i = F(e.groups, e.independent, t);
        if (n) {
            if (!e.callback)
                throw new r.Exception.IllegalArgumentException("One or more constraints to be validated are asynchronous, but a callback has not been provided.");
            if (!e.independent && i.length > 0) {
                var s = i[0].group
                  , o = t.groupedContexts[s];
                t.groupedContexts = {},
                t.groupedContexts[s] = o
            }
            I(e.groups, e.independent, t, function(t) {
                i.length > 0 ? i = i.concat(t) : i = t,
                e.callback(i)
            })
        } else
            e.callback && e.callback(i);
        return i
    }
    function H(e, t, n) {
        var i = a[e];
        if (!i)
            throw new r.Exception.IllegalArgumentException("Undefined group in group list (group: " + e + ", elementId: " + t + ", constraint: " + n + ")");
        var s = i[t];
        if (!s)
            throw new r.Exception.IllegalArgumentException("No constraints have been defined for the element with id: " + t + " in group " + e);
        var o = s[n];
        if (!o)
            throw new r.Exception.IllegalArgumentException("Constraint " + n + " in group " + e + " hasn't been bound to the element with id " + t);
        return {
            group: e,
            elementId: t,
            elementConstraint: n,
            params: o,
            async: u[n].async
        }
    }
    function B(e) {
        var t = []
          , n = 0;
        while (n < e.syncContexts.length) {
            var r = e.syncContexts[n]
              , i = q(r.group, r.elementId, r.elementConstraint, r.params);
            i && t.push(i),
            n++
        }
        return t
    }
    function j(e, t) {
        function o(i) {
            r++,
            i && n.push(i),
            r === e.asyncContexts.length && t(n)
        }
        var n = []
          , r = 0;
        for (var i = 0; i < e.asyncContexts.length; i++) {
            var s = e.asyncContexts[i];
            R(s.group, s.elementId, s.elementConstraint, s.params, o)
        }
    }
    function F(e, t, n) {
        var r = []
          , i = 0
          , s = !0;
        while (i < e.length && s) {
            var o = e[i]
              , u = n.groupedContexts[o].syncContexts;
            for (var a = 0; a < u.length; a++) {
                var f = u[a]
                  , l = q(f.group, f.elementId, f.elementConstraint, f.params);
                l && r.push(l)
            }
            i++,
            s = r.length == 0 || t && r.length != 0
        }
        return r
    }
    function I(e, t, n, r) {
        var i = []
          , s = !0;
        (function o(u) {
            if (u < e.length && s) {
                var a = e[u]
                  , f = n.groupedContexts[a].asyncContexts
                  , l = 0;
                for (var c = 0; c < f.length; c++) {
                    var h = f[c];
                    R(h.group, h.elementId, h.elementConstraint, h.params, p)
                }
                function p(e) {
                    l++,
                    e && i.push(e),
                    l === f.length && (s = i.length === 0 || t && i.length != 0,
                    o(++u))
                }
            } else
                r(i)
        }
        )(0)
    }
    function q(e, t, n, r) {
        var i, o = U(e, t, n, r), a = "";
        o.constraintPassed || (a = W(t, n, r),
        i = {
            group: e,
            constraintName: n,
            formSpecific: u[n].formSpecific,
            custom: u[n].custom,
            compound: u[n].compound,
            async: u[n].async,
            composingConstraintViolations: o.composingConstraintViolations || [],
            constraintParameters: r,
            failingElements: o.failingElements,
            message: a
        });
        if (s.enableHTML5Validation)
            for (var f = 0; f < o.failingElements.length; f++)
                o.failingElements[f].setCustomValidity("");
        return i
    }
    function R(e, t, n, r, i) {
        var o;
        z(e, t, n, r, function(a) {
            var f = "";
            a.constraintPassed || (f = W(t, n, r),
            o = {
                group: e,
                constraintName: n,
                formSpecific: u[n].formSpecific,
                custom: u[n].custom,
                compound: u[n].compound,
                async: u[n].async,
                composingConstraintViolations: a.composingConstraintViolations || [],
                constraintParameters: r,
                failingElements: a.failingElements,
                message: f
            });
            if (s.enableHTML5Validation)
                for (var l = 0; l < a.failingElements.length; l++)
                    a.failingElements[l].setCustomValidity("");
            i(o)
        })
    }
    function U(t, n, r, i) {
        var s = !1
          , o = []
          , a = document.getElementById(n)
          , f = [];
        u[r].formSpecific ? (o = u[r].validator.call(a, i, c),
        s = o.length == 0) : u[r].compound ? (f = u[r].validator.call(a, i, t, u[r], null),
        s = f.length == 0,
        s || o.push(a)) : (s = u[r].validator.call(a, i, c),
        s || o.push(a));
        var l = a.cloneNode(!1).name.replace(/\s/g, "")
          , h = a.cloneNode(!1).type;
        typeof h != "undefined" && h.toLowerCase() === "radio" && l !== "" && (o = e.getElementsByAttribute(document.body, "input", "name", l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")));
        var p = {
            constraintName: r,
            constraintPassed: s,
            failingElements: o
        };
        return u[r].reportAsSingleViolation || (p.composingConstraintViolations = f),
        p
    }
    function z(t, n, r, i, s) {
        function a(t, n, i, s) {
            var a = o.cloneNode(!1).name.replace(/\s/g, "")
              , f = o.cloneNode(!1).type;
            typeof f != "undefined" && f.toLowerCase() === "radio" && a !== "" && (i = e.getElementsByAttribute(document.body, "input", "name", a));
            var l = {
                constraintName: r,
                constraintPassed: t,
                failingElements: i
            };
            u[r].reportAsSingleViolation || (l.composingConstraintViolations = n),
            s(l)
        }
        var o = document.getElementById(n);
        u[r].formSpecific ? u[r].validator.call(o, i, c, function(e) {
            a(e.length === 0, null, e, s)
        }) : u[r].compound ? u[r].validator.call(o, i, t, u[r], function(e) {
            var t = []
              , n = e.length === 0;
            n || t.push(o),
            a(n, e, t, s)
        }) : u[r].validator.call(o, i, c, function(e) {
            var t = [];
            e || t.push(o),
            a(e, null, t, s)
        })
    }
    function W(t, n, r) {
        var i = document.getElementById(t)
          , s = "";
        r.message ? s = r.message : r.msg ? s = r.msg : s = u[n].defaultMessage;
        for (var o in r)
            if (r.hasOwnProperty(o)) {
                var a = new RegExp("{" + o + "}","g");
                s = s.replace(a, r[o])
            }
        if (u[n].compound && typeof u[n].composingConstraints != "undefined")
            for (var f = 0; f < u[n].composingConstraints.length; f++) {
                var l = u[n].composingConstraints[f];
                for (var o in l.params)
                    if (l.params.hasOwnProperty(o)) {
                        var a = new RegExp("{" + o + "}","g");
                        s = s.replace(a, l.params[o])
                    }
            }
        if (/{label}/.test(s)) {
            var c = e.friendlyInputNames[i.cloneNode(!1).tagName.toLowerCase()];
            c || (c = e.friendlyInputNames[i.cloneNode(!1).type.toLowerCase()]),
            s = s.replace(/{label}/, c),
            s = s.replace(/{flags}/g, "")
        }
        return s = s.replace(/\\\"/g, '"'),
        s
    }
    var s = {}
      , o = {}
      , u = {}
      , a = {}
      , f = {}
      , l = {}
      , c = {}
      , d = {
        checked: function(t) {
            var n = !1;
            if (this.type.toLowerCase() === "radio" && this.name.replace(/\s/g, "") !== "") {
                var r = e.getElementsByAttribute(document.body, "input", "name", this.name.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"))
                  , i = 0;
                while (i < r.length && !n)
                    n = r[i].checked,
                    i++
            } else
                n = this.checked;
            return n
        },
        selected: function(e) {
            return this.selectedIndex > 0
        },
        max: function(e) {
            var t = !0;
            return g(this, e) && (t = parseFloat(this.value) <= parseFloat(e.value)),
            t
        },
        min: function(e) {
            var t = !0;
            return g(this, e) && (t = parseFloat(this.value) >= parseFloat(e.value)),
            t
        },
        range: function(e) {
            var t = !0;
            return g(this, e) && (t = this.value.replace(/\s/g, "") != "" && parseFloat(this.value) <= parseFloat(e.max) && parseFloat(this.value) >= parseFloat(e.min)),
            t
        },
        notBlank: function(e) {
            return this.value.replace(/\s/g, "") != ""
        },
        blank: function(e) {
            return this.value.replace(/\s/g, "") === ""
        },
        matches: function(e) {
            var t = !0;
            if (g(this, e)) {
                var n, r;
                typeof e["regex"] == "string" ? r = e.regex.replace(/^\//, "").replace(/\/$/, "") : r = e.regex,
                typeof e["flags"] != "undefined" ? n = new RegExp(r.toString().replace(/^\//, "").replace(/\/[^\/]*$/, ""),e.flags) : n = new RegExp(r),
                t = n.test(this.value)
            }
            return t
        },
        email: function(e) {
            var t = !0;
            return g(this, e) && (t = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(this.value)),
            t
        },
        alpha: function(e) {
            var t = !0;
            return g(this, e) && (t = /^[A-Za-z]+$/.test(this.value)),
            t
        },
        numeric: function(e) {
            var t = !0;
            return g(this, e) && (t = /^[0-9]+$/.test(this.value)),
            t
        },
        integer: function(e) {
            var t = !0;
            return g(this, e) && (t = /^-?[0-9]+$/.test(this.value)),
            t
        },
        real: function(e) {
            var t = !0;
            return g(this, e) && (t = /^-?([0-9]+(\.[0-9]+)?|\.[0-9]+)$/.test(this.value)),
            t
        },
        alphaNumeric: function(e) {
            var t = !0;
            return g(this, e) && (t = /^[0-9A-Za-z]+$/.test(this.value)),
            t
        },
        completelyFilled: function(e) {
            var t = [];
            for (var n = 0; n < this.elements.length; n++) {
                var r = this.elements[n];
                d.required.call(r) || t.push(r)
            }
            return t
        },
        passwordsMatch: function(e) {
            var t = []
              , n = document.getElementById(e.field1)
              , r = document.getElementById(e.field2);
            return n.value != r.value && (t = [n, r]),
            t
        },
        required: function(e) {
            var t = !0;
            return this.tagName && (this.tagName.toLowerCase() === "select" ? t = d.selected.call(this) : this.type.toLowerCase() === "checkbox" || this.type.toLowerCase() === "radio" ? t = d.checked.call(this) : (this.tagName.toLowerCase() === "input" || this.tagName.toLowerCase() === "textarea") && this.type.toLowerCase() != "button" && (t = d.notBlank.call(this))),
            t
        },
        length: function(e) {
            var t = !0;
            return g(this, e) && (t = this.value.length >= e.min && this.value.length <= e.max),
            t
        },
        digits: function(e) {
            var t = !0;
            if (g(this, e)) {
                var n = this.value.replace(/\s/g, "")
                  , r = n.split(/\./);
                t = !1,
                n.length > 0 && (r.length == 1 && (r[1] = ""),
                e.integer > 0 ? t = r[0].length <= e.integer : t = !0,
                e.fraction > 0 && (t = t && r[1].length <= e.fraction))
            }
            return t
        },
        past: function(e) {
            var t = !0;
            if (g(this, e)) {
                var n = y.call(this, e);
                t = n.dateToValidate < n.dateToTestAgainst
            }
            return t
        },
        future: function(e) {
            var t = !0;
            if (g(this, e)) {
                var n = y.call(this, e);
                t = n.dateToValidate > n.dateToTestAgainst
            }
            return t
        },
        url: function(e) {
            var t = !0;
            return g(this, e) && (t = /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(this.value)),
            t
        },
        step: function(e) {
            var t = !0;
            if (g(this, e)) {
                var n = parseFloat(this.value)
                  , r = parseFloat(e.max)
                  , i = parseFloat(e.min)
                  , s = parseFloat(e.value);
                t = n <= r && n >= i && n % s === 0
            }
            return t
        },
        html5Required: function(e) {
            return !this.validity.valueMissing
        },
        html5Email: w,
        html5URL: w,
        html5Number: w,
        html5DateTime: w,
        html5DateTimeLocal: w,
        html5Date: w,
        html5Month: w,
        html5Time: w,
        html5Week: w,
        html5Range: w,
        html5Tel: w,
        html5Color: w,
        html5Pattern: function(e) {
            return !this.validity.patternMismatch
        },
        html5MaxLength: function(e) {
            return !this.validity.tooLong
        },
        html5Min: function(e) {
            return !this.validity.rowUnderflow
        },
        html5Max: function(e) {
            return !this.validity.rowOverflow
        },
        html5Step: function(e) {
            return !this.validity.stepMismatch
        }
    };
    return {
        Validator: d,
        init: p,
        wrapValidatorWithEmptyCheck: b,
        initializePublicValidators: h,
        compoundValidator: m,
        validate: E,
        runValidatorFor: U,
        interpolateConstraintDefaultMessage: W,
        createPublicValidator: v
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("domain/CompositionGraph", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.CompositionGraph = t())
}(this, function() {
    function n(n) {
        var r = n.type
          , i = n.name
          , s = n.parent
          , o = typeof e[r] == "undefined" ? {
            visited: !1,
            name: i,
            type: r,
            parents: [],
            children: []
        } : e[r];
        s == null ? t.children.push(o) : (s.children.push(o),
        o.parents.push(s)),
        e[r] = o
    }
    function r() {
        var e = {}
          , n = function r(t, n) {
            var i = typeof e[t.type] == "undefined" ? {
                visited: t.visited,
                name: t.name,
                type: t.type,
                parents: [],
                children: []
            } : e[t.type];
            n !== null && i.parents.push(n);
            for (var s = 0; s < t.children.length; s++)
                i.children.push(r(t.children[s], i));
            return e[t.type] = i,
            i
        }(t, null);
        return {
            typeToNodeMap: e,
            root: n
        }
    }
    function i(t) {
        var n = e[t];
        return typeof n == "undefined" ? null : n
    }
    function s(e) {
        var t = function n(e, t) {
            var r = {
                cycle: !1,
                path: t
            };
            if (e.visited)
                r.cycle = !0;
            else {
                e.visited = !0;
                var i = 0;
                while (i < e.children.length && !r.cycle)
                    r = n(e.children[i], t + "." + e.children[i].name),
                    i++
            }
            return r
        }(e, e.name);
        return t.cycle || o(),
        t
    }
    function o() {
        (function e(t) {
            t.visited = !1;
            for (var n = 0; n < t.children.length; n++)
                e(t.children[n])
        }
        )(t)
    }
    function u() {
        return t
    }
    function a(e) {
        t = e
    }
    function f(n) {
        e = n.typeToNodeMap,
        t = n.root
    }
    var e = {}
      , t = {
        visited: !1,
        name: "RootNode",
        type: -1,
        parents: [],
        children: []
    };
    return {
        ROOT: -1,
        addNode: n,
        getNodeByType: i,
        analyze: s,
        getRoot: u,
        setRoot: a,
        clone: r,
        initializeFromClone: f
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("service/ConstraintService", ["service/ValidationService", "domain/CompositionGraph", "service/ExceptionService", "utils/MapUtils", "utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.ConstraintService = t(e.regulaModules.ValidationService, e.regulaModules.CompositionGraph, e.regulaModules.ExceptionService, e.regulaModules.MapUtils, e.regulaModules.ArrayUtils))
}(this, function(e, t, n, r, i) {
    function f(r) {
        var i = typeof r.async == "undefined" ? a[r.name].async : r.async
          , u = r.validator;
        r.validatorRedefined && !r.formSpecific && (u = e.wrapValidatorWithEmptyCheck(u));
        var f = t.getNodeByType(r.constraintType);
        if (r.compound) {
            v(r.name, r.composingConstraints, r.params);
            var l = t.clone();
            d(r.name, r.composingConstraints);
            var c = t.analyze(f);
            if (c.cycle)
                throw t.initializeFromClone(l),
                new n.Exception.ConstraintDefinitionException("regula.override: The overriding composing-constraints you have specified have created a cyclic composition: " + c.path);
            i = !1;
            var h = 0;
            while (h < r.composingConstraints.length && !i) {
                var p = r.composingConstraints[h]
                  , m = a[o[p.constraintType]];
                i = m.async,
                h++
            }
        }
        f !== null && function g(e) {
            for (var n = 0; n < e.parents.length; n++) {
                var r = e.parents[n];
                if (r.type !== t.ROOT) {
                    var s = o[r.type]
                      , u = a[s];
                    u.async = i,
                    g(r)
                }
            }
        }(f),
        a[r.name] = {
            async: i,
            formSpecific: r.formSpecific,
            constraintType: s[r.name],
            custom: !0,
            compound: r.compound,
            params: r.params,
            composingConstraints: r.composingConstraints,
            defaultMessage: r.defaultMessage,
            validator: u
        },
        a[r.name].custom && r.validatorRedefined && e.createPublicValidator(r.name, a)
    }
    function l(t) {
        s[t.name] = u,
        o[u++] = t.name;
        var n = t.validator;
        t.formSpecific || (n = e.wrapValidatorWithEmptyCheck(t.validator)),
        a[t.name] = {
            async: t.async,
            formSpecific: t.formSpecific,
            validator: n,
            constraintType: s[t.name],
            custom: !0,
            compound: !1,
            params: t.params,
            defaultMessage: t.defaultMessage
        },
        e.createPublicValidator(t.name, a)
    }
    function c(t) {
        v(t.name, t.constraints, t.params);
        var n = !1
          , r = 0;
        while (r < t.constraints.length && !n) {
            var i = t.constraints[r]
              , f = o[i.constraintType];
            n = n || a[f].async,
            r++
        }
        s[t.name] = u,
        o[u++] = t.name,
        a[t.name] = {
            async: n,
            formSpecific: t.formSpecific,
            constraintType: s[t.name],
            custom: !0,
            compound: !0,
            params: t.params,
            reportAsSingleViolation: t.reportAsSingleViolation,
            composingConstraints: t.constraints,
            defaultMessage: t.defaultMessage,
            validator: e.compoundValidator
        },
        e.createPublicValidator(t.name, a),
        d(t.name, t.constraints)
    }
    function h(e, t, r) {
        var i = {
            successful: !0,
            message: "",
            data: null
        }
          , s = e.cloneNode(!1);
        if (s.tagName.toLowerCase() == "form" && !a[t].formSpecific)
            i = {
                successful: !1,
                message: n.generateExceptionMessage(e, t, "@" + t + " is not a form constraint, but you are trying to bind it to a form"),
                data: null
            };
        else if (s.tagName.toLowerCase() != "form" && a[t].formSpecific)
            i = {
                successful: !1,
                message: n.generateExceptionMessage(e, t, "@" + t + " is a form constraint, but you are trying to bind it to a non-form element"),
                data: null
            };
        else if ((typeof s.type == "undefined" || s.type.toLowerCase() != "checkbox" && s.type.toLowerCase() != "radio") && t == "Checked")
            i = {
                successful: !1,
                message: n.generateExceptionMessage(e, t, "@" + t + " is only applicable to checkboxes and radio buttons. You are trying to bind it to an input element that is neither a checkbox nor a radio button."),
                data: null
            };
        else if (s.tagName.toLowerCase() != "select" && t == "Selected")
            i = {
                successful: !1,
                message: n.generateExceptionMessage(e, t, "@" + t + " is only applicable to select boxes. You are trying to bind it to an input element that is not a select box."),
                data: null
            };
        else {
            var o = p(e, a[t], r);
            o.error ? i = {
                successful: !1,
                message: o.message,
                data: null
            } : i.data = r
        }
        return i
    }
    function p(e, t, r) {
        var s = {
            error: !1,
            message: ""
        };
        r.__size__ < t.params.length && (s = {
            error: !0,
            message: n.generateExceptionMessage(e, o[t.constraintType], "@" + o[t.constraintType] + " expects at least " + t.params.length + " parameter(s). However, you have provided only " + r.__size__),
            data: null
        });
        var u = [];
        for (var a = 0; a < t.params.length; a++) {
            var f = t.params[a];
            typeof r[f] == "undefined" && u.push(f)
        }
        return u.length > 0 && (s = {
            error: !0,
            message: n.generateExceptionMessage(e, o[t.constraintType], "You seem to have provided some optional or required parameters for @" + o[t.constraintType] + ", but you are still missing the following " + u.length + " required parameter(s): " + i.explode(u, ", ")),
            data: null
        }),
        s
    }
    function d(e, n) {
        var r = t.getNodeByType(s[e]);
        r == null && (t.addNode({
            type: s[e],
            name: e,
            parent: null
        }),
        r = t.getNodeByType(s[e]));
        for (var i = 0; i < r.children.length; i++) {
            var u = r.children[i]
              , f = [];
            for (var l = 0; l < u.parents.length; l++)
                u.parents[l] !== r && f.push(u.parents[l]);
            u.parents = f
        }
        r.children = [];
        for (var i = 0; i < n.length; i++) {
            var c = o[n[i].constraintType]
              , h = a[c];
            t.addNode({
                type: h.constraintType,
                name: o[h.constraintType],
                parent: r
            })
        }
    }
    function v(e, t, i) {
        for (var s = 0; s < t.length; s++) {
            if (typeof t[s].constraintType == "undefined")
                throw new n.Exception.ConstraintDefinitionException("In compound constraint " + e + ": A composing constraint has no constraint type specified.");
            var u = t[s]
              , f = o[u.constraintType]
              , l = {
                __size__: 0
            };
            u.params = u.params || {};
            for (var c in u.params)
                u.params.hasOwnProperty(c) && r.put(l, c, u.params[c]);
            var h = 0;
            for (var d in u.params)
                u.params.hasOwnProperty(d) && h++;
            u.params.__size__ = h;
            for (var v = 0; v < i.length; v++)
                r.put(l, i[v], null);
            var m = p(null, a[f], l);
            if (m.error)
                throw new n.Exception.ConstraintDefinitionException("In compound constraint " + e + ": " + m.message)
        }
    }
    var s = {}
      , o = {}
      , u = 0;
    (function(e) {
        for (var t = 0; t < e.length; t++)
            s[e[t]] = t,
            o[t] = e[t];
        u = t,
        s.Between = s.row,
        s.Matches = s.Pattern,
        s.Empty = s.Blank,
        s.NotEmpty = s.NotBlank,
        s.IsAlpha = s.Alpha,
        s.IsNumeric = s.Numeric,
        s.IsAlphaNumeric = s.AlphaNumeric
    }
    )(["Checked", "Selected", "Max", "Min", "Range", "Between", "NotBlank", "NotEmpty", "Blank", "Empty", "Pattern", "Matches", "Email", "Alpha", "IsAlpha", "Numeric", "IsNumeric", "AlphaNumeric", "IsAlphaNumeric", "Integer", "Real", "CompletelyFilled", "PasswordsMatch", "Required", "Length", "Digits", "Past", "Future", "Step", "URL", "HTML5Required", "HTML5Email", "HTML5URL", "HTML5MaxLength", "HTML5Pattern", "HTML5Min", "HTML5Max", "HTML5Step"]);
    var a = {
        Checked: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.checked,
            constraintType: s.Checked,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} needs to be checked."
        },
        Selected: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.selected,
            constraintType: s.Selected,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} needs to be selected."
        },
        Max: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.max,
            constraintType: s.Max,
            custom: !1,
            compound: !1,
            params: ["value"],
            defaultMessage: "{label} needs to be lesser than or equal to {value}."
        },
        Min: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.min,
            constraintType: s.Min,
            custom: !1,
            compound: !1,
            params: ["value"],
            defaultMessage: "{label} needs to be greater than or equal to {value}."
        },
        Range: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.row,
            constraintType: s.row,
            custom: !1,
            compound: !1,
            params: ["min", "max"],
            defaultMessage: "{label} needs to be between {min} and {max}."
        },
        NotBlank: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.notBlank,
            constraintType: s.NotBlank,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} cannot be blank."
        },
        Blank: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.blank,
            constraintType: s.Blank,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} needs to be blank."
        },
        Pattern: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.matches,
            constraintType: s.Pattern,
            custom: !1,
            compound: !1,
            params: ["regex"],
            defaultMessage: "{label} needs to match {regex}{flags}."
        },
        Email: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.email,
            constraintType: s.Email,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is not a valid email."
        },
        Alpha: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.alpha,
            constraintType: s.Alpha,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} can only contain letters."
        },
        Numeric: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.numeric,
            constraintType: s.Numeric,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "Only numbers are required"
        },
        AlphaNumeric: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.alphaNumeric,
            constraintType: s.AlphaNumeric,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} can only contain numbers and letters."
        },
        Integer: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.integer,
            constraintType: s.Integer,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} must be an integer."
        },
        Real: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.real,
            constraintType: s.Real,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} must be a real number."
        },
        CompletelyFilled: {
            async: !1,
            html5: !1,
            formSpecific: !0,
            validator: e.Validator.completelyFilled,
            constraintType: s.CompletelyFilled,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} must be completely filled."
        },
        PasswordsMatch: {
            async: !1,
            html5: !1,
            formSpecific: !0,
            validator: e.Validator.passwordsMatch,
            constraintType: s.PasswordsMatch,
            custom: !1,
            compound: !1,
            params: ["field1", "field2"],
            defaultMessage: "Passwords do not match."
        },
        Required: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.required,
            constraintType: s.Required,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is required."
        },
        Length: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.length,
            constraintType: s.Length,
            custom: !1,
            compound: !1,
            params: ["min", "max"],
            defaultMessage: "{label} length must be between {min} and {max}."
        },
        Digits: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.digits,
            constraintType: s.Digits,
            custom: !1,
            compound: !1,
            params: ["integer", "fraction"],
            defaultMessage: "{label} must have up to {integer} digits and {fraction} fractional digits."
        },
        Past: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.past,
            constraintType: s.Past,
            custom: !1,
            compound: !1,
            params: ["format"],
            defaultMessage: "{label} must be in the past."
        },
        Future: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.future,
            constraintType: s.Future,
            custom: !1,
            compound: !1,
            params: ["format"],
            defaultMessage: "{label} must be in the future."
        },
        Step: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.step,
            constraintType: s.Step,
            custom: !1,
            compound: !1,
            params: ["min", "max", "value"],
            defaultMessage: "{label} must be equal to {min} or greater, and equal to {max} or lesser, at increments of {value}."
        },
        URL: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.url,
            constraintType: s.URL,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} must be a valid URL."
        },
        HTML5Required: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "required",
            formSpecific: !1,
            validator: e.Validator.html5Required,
            constraintType: s.HTML5Required,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is required."
        },
        HTML5Email: {
            async: !1,
            html5: !0,
            inputType: "email",
            attribute: null,
            formSpecific: !1,
            validator: e.Validator.html5Email,
            constraintType: s.HTML5Email,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is not a valid email."
        },
        HTML5Pattern: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "pattern",
            formSpecific: !1,
            validator: e.Validator.html5Pattern,
            constraintType: s.HTML5Pattern,
            custom: !1,
            compound: !1,
            params: ["pattern"],
            defaultMessage: "{label} needs to match {pattern}."
        },
        HTML5URL: {
            async: !1,
            html5: !0,
            inputType: "url",
            attribute: null,
            formSpecific: !1,
            validator: e.Validator.html5URL,
            constraintType: s.HTML5URL,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is not a valid URL."
        },
        HTML5MaxLength: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "maxlength",
            formSpecific: !1,
            validator: e.Validator.html5MaxLength,
            constraintType: s.HTML5MaxLength,
            custom: !1,
            compound: !1,
            params: ["maxlength"],
            defaultMessage: "{label} must be less than {maxlength} characters."
        },
        HTML5Min: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "min",
            formSpecific: !1,
            validator: e.Validator.html5Min,
            constraintType: s.HTML5Min,
            custom: !1,
            compound: !1,
            params: ["min"],
            defaultMessage: "{label} needs to be greater than or equal to {min}."
        },
        HTML5Max: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "max",
            formSpecific: !1,
            validator: e.Validator.html5Max,
            constraintType: s.HTML5Max,
            custom: !1,
            compound: !1,
            params: ["max"],
            defaultMessage: "{label} needs to be lesser than or equal to {max}."
        },
        HTML5Step: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "step",
            formSpecific: !1,
            validator: e.Validator.html5Step,
            constraintType: s.HTML5Step,
            custom: !1,
            compound: !1,
            params: ["step"],
            defaultMessage: "{label} must be equal to the minimum value or greater at increments of {step}."
        }
    };
    return {
        Constraint: s,
        ReverseConstraint: o,
        firstCustomConstraintIndex: u,
        constraintDefinitions: a,
        override: f,
        custom: l,
        compound: c,
        verifyConstraintDefinition: h,
        verifyParameterCountMatches: p
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("parser/Parser", ["utils/MapUtils", "service/ExceptionService", "service/ConstraintService"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.Parser = t(e.regulaModules.MapUtils, e.regulaModules.ExceptionService, e.regulaModules.ConstraintService))
}(this, function(e, t, n) {
    function r(e) {
        return e ? e.replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }
    function i(e) {
        return e[0]
    }
    function s(t) {
        var n = t.str
          , r = t.delimiters.split("")
          , i = t.returnDelimiters || !1
          , s = t.returnEmptyTokens || !1
          , o = []
          , u = 0;
        for (var a = 0; a < n.length; a++)
            if (e.exists(r, n.charAt(a))) {
                var f = n.substring(u, a);
                f.length == 0 ? s && o.push(f) : o.push(f),
                i && o.push(n.charAt(a)),
                u = a + 1
            }
        if (u < n.length) {
            var f = n.substring(u, n.length);
            f.length == 0 ? s && o.push(f) : o.push(f)
        }
        return o
    }
    function o(o, u) {
        function l(e) {
            var t = {
                successful: !0,
                message: "",
                data: null
            }
              , n = [];
            while (e.length > 0 && t.successful)
                t = c(e),
                n.push(t.data);
            return t.data = n,
            t
        }
        function c(e) {
            var n = {
                successful: !0,
                message: "",
                data: null
            }
              , i = e.shift();
            return r(i).length == 0 && (i = e.shift()),
            i == "@" ? n = h(e) : n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid constraint. Constraint definitions need to start with '@'") + " " + n.message,
                data: null
            },
            n
        }
        function h(e) {
            var r = {
                Between: "Range",
                Matches: "Pattern",
                Empty: "Blank",
                NotEmpty: "NotBlank",
                IsAlpha: "Alpha",
                IsNumeric: "Integer",
                IsAlphaNumeric: "AlphaNumeric"
            }
              , i = p(e);
            if (i.successful) {
                a = i.data,
                a = r[a] ? r[a] : a;
                if (n.constraintDefinitions[a]) {
                    i = m(e);
                    if (i.successful) {
                        i = n.verifyConstraintDefinition(o, a, i.data);
                        if (i.successful) {
                            var s = i.data;
                            i.data = {
                                element: o,
                                constraintName: a,
                                definedParameters: s
                            }
                        }
                    }
                } else
                    i = {
                        successful: !1,
                        message: t.generateExceptionMessage(o, a, "I cannot find the specified constraint name. If this is a custom constraint, you need to define it before you bind to it") + " " + i.message,
                        data: null
                    }
            } else
                i = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid constraint name in constraint definition") + " " + i.message,
                    data: null
                };
            return i
        }
        function p(e) {
            var n = r(e.shift())
              , i = d(n.charAt(0));
            if (i.successful) {
                var s = 1;
                while (s < n.length && i.successful)
                    i = v(n.charAt(s)),
                    s++;
                i.successful && (i.data = n)
            } else
                i = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid starting character for constraint name. Can only include A-Z, a-z, and _") + " " + i.message,
                    data: null
                };
            return i
        }
        function d(e) {
            var n = {
                successful: !0,
                message: "",
                data: null
            };
            if (!/[A-Za-z_]/.test(e) || typeof e == "undefined" || e == null)
                n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid starting character"),
                    data: null
                };
            return n
        }
        function v(e) {
            var n = {
                successful: !0,
                message: "",
                data: null
            };
            return /[0-9A-Za-z_]/.test(e) || (n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid character in identifier. Can only include 0-9, A-Z, a-z, and _") + " " + n.message,
                data: null
            }),
            n
        }
        function m(n) {
            var s = {
                successful: !0,
                message: "",
                data: {}
            };
            if (i(n) == "(") {
                n.shift();
                var u = {};
                if (i(n) == ")")
                    n.shift();
                else {
                    s = g(n);
                    if (s.successful) {
                        e.put(u, s.data.name, s.data.value),
                        r(i(n)).length == 0 && n.shift();
                        while (n.length > 0 && i(n) == "," && s.successful)
                            n.shift(),
                            s = g(n),
                            s.successful && (e.put(u, s.data.name, s.data.value),
                            r(i(n)).length == 0 && n.shift());
                        if (s.successful) {
                            var f = n.shift();
                            r(f).length == 0 && (f = n.shift()),
                            f != ")" ? s = {
                                successful: !1,
                                message: t.generateExceptionMessage(o, a, "Cannot find matching closing ) in parameter list") + " " + s.message,
                                data: null
                            } : s.data = u
                        }
                    } else
                        s = {
                            successful: !1,
                            message: t.generateExceptionMessage(o, a, "Invalid parameter definition") + " " + s.message,
                            data: null
                        }
                }
            } else
                i(n) !== undefined && i(n) != "@" && (s = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Unexpected character '" + i(n) + "'" + " after constraint definition") + " " + s.message,
                    data: null
                });
            return s
        }
        function g(e) {
            var n = y(e);
            if (n.successful) {
                var r = n.data
                  , i = e.shift();
                i == "=" ? (n = b(e),
                n.successful ? n.data = {
                    name: r,
                    value: n.data
                } : n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid parameter value") + " " + n.message,
                    data: null
                }) : (e.unshift(i),
                n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "'=' expected after parameter name " + n.message),
                    data: null
                })
            } else
                n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid parameter name. You might have unmatched parentheses") + " " + n.message,
                    data: null
                };
            return n
        }
        function y(e) {
            var n = r(e.shift());
            n.length == 0 && (n = e.shift());
            var i = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid starting character for parameter name. Can only include A-Z, a-z, and _"),
                data: null
            };
            if (typeof n != "undefined") {
                i = d(n.charAt(0));
                if (i.successful) {
                    var s = 1;
                    while (s < n.length && i.successful)
                        i = v(n.charAt(s)),
                        s++;
                    i.successful && (i.data = n)
                } else
                    i = {
                        successful: !1,
                        message: t.generateExceptionMessage(o, a, "Invalid starting character for parameter name. Can only include A-Z, a-z, and _") + " " + i.message,
                        data: null
                    }
            }
            return i
        }
        function b(e) {
            r(i(e)).length == 0 && e.shift();
            var n = {
                successful: !0,
                message: "",
                data: []
            };
            if (i(e) == ")")
                n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Parameter value expected") + " " + n.message,
                    data: null
                };
            else {
                n = w(e);
                var s = n.message;
                n.successful || (n = C(e),
                n.message = n.message + " " + s,
                s = n.message,
                n.successful || (n = L(e),
                n.message = n.message + " " + s,
                s = n.message,
                n.successful || (n = A(e),
                n.message = n.message + " " + s,
                s = n.message,
                n.successful || (n = O(e),
                n.message = n.message + " " + s,
                s = n.message,
                n.successful || (n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Parameter value must be a number, quoted string, regular expression, or a boolean") + " " + s,
                    data: null
                })))))
            }
            return n
        }
        function w(e) {
            var n = E(e);
            return n.successful || (n = S(e),
            n.successful || (n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Parameter value is not a number") + " " + n.message,
                data: null
            })),
            n
        }
        function E(e) {
            var n = e.shift()
              , r = {
                successful: !0,
                message: "",
                data: null
            };
            return n == "-" ? (r = S(e),
            r.successful && (r.data = n + r.data)) : (e.unshift(n),
            r = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a negative number"),
                data: null
            }),
            r
        }
        function S(e) {
            var n = null;
            if (i(e) != ".") {
                n = T(e);
                if (i(e) == ".") {
                    var r = n.data;
                    n = x(e),
                    n.successful && (n.data = r + n.data)
                }
            } else
                n = x(e);
            return n.successful || (n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a positive number") + " " + n.message,
                data: null
            }),
            n
        }
        function x(e) {
            var n = e.shift()
              , r = T(e);
            return r.successful ? r.data = n + r.data : r = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a valid fraction"),
                data: null
            },
            r
        }
        function T(e) {
            var n = r(e.shift())
              , i = N(n.charAt(0));
            if (i.successful) {
                var s = 1;
                while (s < n.length && i.successful)
                    i = N(n.charAt(s)),
                    s++;
                i.successful && (i.data = n)
            } else
                e.unshift(n),
                i = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Not a valid integer") + " " + i.message,
                    data: []
                };
            return i
        }
        function N(e) {
            var n = {
                successful: !0,
                message: "",
                data: null
            };
            return /[0-9]/.test(e) || (n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a valid digit"),
                data: null
            }),
            n
        }
        function C(e) {
            var n = e.shift()
              , r = ""
              , s = {
                successful: !0,
                message: "",
                data: null
            };
            if (n == '"') {
                var u = !1;
                while (e.length > 0 && s.successful && !u)
                    i(e) == '"' ? (u = !0,
                    e.shift()) : (s = k(e),
                    r += s.data);
                u || (s = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Unterminated string literal"),
                    data: null
                })
            } else
                e.unshift(n),
                s = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid quoted string"),
                    data: null
                };
            return s.successful = s.successful && u,
            s.data = r,
            s
        }
        function k(e) {
            var t = ""
              , n = e.shift();
            return n == "\\" && (t = e.shift()),
            {
                successful: !0,
                message: "",
                data: n + t
            }
        }
        function L(e) {
            var n = ""
              , r = e.shift()
              , s = {
                successful: !0,
                message: "",
                data: null
            };
            if (r == "/") {
                n = r;
                var u = !1;
                while (e.length > 0 && s.successful && !u)
                    i(e) == "/" ? (n += e.shift(),
                    u = !0) : (s = k(e),
                    n += s.data);
                u || (s = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Unterminated regex literal"),
                    data: null
                })
            } else
                e.unshift(r),
                s = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Not a regular expression"),
                    data: null
                };
            return s.successful = s.successful && u,
            s.data = n,
            s
        }
        function A(e) {
            var n = e.shift()
              , i = {
                successful: !0,
                message: "",
                data: null
            };
            return r(n) == "true" || r(n) == "false" ? i = {
                successful: !0,
                message: "",
                data: n === "true"
            } : (e.unshift(n),
            i = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a boolean"),
                data: null
            }),
            i
        }
        function O(e) {
            var n = []
              , s = e.shift()
              , u = {
                successful: !0,
                message: "",
                data: null
            };
            if (s == "[") {
                r(i(e)).length == 0 && e.shift(),
                i(e) == "]" ? u = {
                    successful: !0,
                    message: "",
                    data: ""
                } : u = M(e);
                if (u.successful) {
                    n.push(u.data),
                    r(i(e)).length == 0 && e.shift();
                    while (e.length > 0 && i(e) == "," && u.successful)
                        e.shift(),
                        u = M(e),
                        n.push(u.data),
                        r(i(e)).length == 0 && e.shift();
                    u.data = n,
                    s = e.shift(),
                    r(s).length == 0 && e.shift(),
                    s != "]" && (u = {
                        successful: !1,
                        message: t.generateExceptionMessage(o, a, "Cannot find matching closing ] in group definition") + " " + u.message,
                        data: null
                    })
                } else
                    u = {
                        successful: !1,
                        message: t.generateExceptionMessage(o, a, "Invalid group definition") + " " + u.message,
                        data: null
                    }
            } else
                e.unshift(s),
                u = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Not a valid group definition"),
                    data: null
                };
            return u
        }
        function M(e) {
            var n = {
                successful: !0,
                message: "",
                data: ""
            }
              , i = r(e.shift());
            i.length == 0 && (i = e.shift()),
            n = d(i.charAt(0));
            if (n.successful) {
                var s = 1;
                while (s < i.length && n.successful)
                    n = v(i.charAt(s)),
                    s++;
                n.successful && (n.data = i)
            } else
                n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid starting character for group name. Can only include A-Z, a-z, and _") + " " + n.message,
                    data: null
                };
            return n
        }
        var a = ""
          , f = s({
            str: r(u.replace(/\s*\n\s*/g, "")),
            delimiters: '@()[]=,"\\/-\\.',
            returnDelimiters: !0,
            returnEmptyTokens: !1
        });
        return l(f)
    }
    return {
        parse: o
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("service/BindingService", ["utils/MapUtils", "service/GroupService", "utils/DOMUtils", "parser/Parser", "service/ConstraintService", "service/ExceptionService"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}),
    e.regulaModules.BindingService = t(e.regulaModules.MapUtils, e.regulaModules.GroupService, e.regulaModules.DOMUtils, e.regulaModules.Parser, e.regulaModules.ConstraintService, e.regulaModules.ExceptionService))
}(this, function(e, t, n, r, i, s) {
    function a() {
        o === null && f()
    }
    function f() {
        o = {
            Default: {}
        }
    }
    function l() {
        return o
    }
    function c(n, r) {
        if (e.isEmpty(o[r][n])) {
            delete o[r][n];
            if (e.isEmpty(o[r])) {
                delete o[r];
                var i = t.Group[r];
                delete t.Group[r],
                delete t.ReverseGroup[i],
                t.deletedGroupIndices.push(i)
            }
        }
    }
    function h(e) {
        var t = {
            successful: !0,
            message: "",
            data: null
        }
          , n = typeof e.cloneNode != "undefined" ? e.cloneNode(!1) : e
          , r = null;
        return typeof n.tagName != "undefined" && (r = n.tagName.toLowerCase()),
        r !== "form" && r !== "select" && r !== "textarea" && r !== "input" ? t = {
            successful: !1,
            message: r + "#" + e.id + " is not an input, select, textarea, or form element! Validation constraints can only be attached to input, select, textarea, or form elements.",
            data: null
        } : r === "input" && e.getAttribute("type") === null && (t = {
            successful: !1,
            message: r + "#" + e.id + " does not have a type attribute.",
            data: null
        }),
        t
    }
    function p(e) {
        var t = e.element, i;
        t === null ? i = n.getElementsByAttribute(document.body, "*", "data-constraints") : i = [t];
        var s = {
            successful: !0,
            message: "",
            data: null
        }
          , o = 0;
        while (o < i.length && s.successful) {
            t = i[o],
            s = h(t);
            if (s.successful) {
                t.id || (t.id = n.generateRandomId());
                var u = t.getAttribute("data-constraints");
                if (u !== null) {
                    s = r.parse(t, u);
                    if (s.successful && s.data !== null) {
                        var a = s.data
                          , f = 0;
                        while (s.successful && f < a.length) {
                            var l = a[f];
                            s = g(l.element, l.constraintName, l.definedParameters),
                            f++
                        }
                    }
                }
                o++
            }
        }
        return s
    }
    function d(t) {
        function a(e, t, r) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s.id || (s.id = n.generateRandomId()),
                e[s.id] || (e[s.id] = []);
                var o = {
                    constraint: r.constraint,
                    params: {}
                };
                r.value === null && (o.params[r.attribute] = n.getAttributeValueForElement(s, r.attribute)),
                e[s.id].push(o)
            }
        }
        var r = t.element
          , s = {
            successful: !0,
            message: "",
            data: null
        }
          , o = [{
            attribute: "required",
            value: null,
            constraint: i.Constraint.HTML5Required
        }, {
            attribute: "type",
            value: "email",
            constraint: i.Constraint.HTML5Email
        }, {
            attribute: "type",
            value: "url",
            constraint: i.Constraint.HTML5URL
        }, {
            attribute: "pattern",
            value: null,
            constraint: i.Constraint.HTML5Pattern
        }, {
            attribute: "maxlength",
            value: null,
            constraint: i.Constraint.HTML5MaxLength
        }, {
            attribute: "min",
            value: null,
            constraint: i.Constraint.HTML5Min
        }, {
            attribute: "max",
            value: null,
            constraint: i.Constraint.HTML5Max
        }, {
            attribute: "step",
            value: null,
            constraint: i.Constraint.HTML5Step
        }]
          , u = {
            email: i.Constraint.HTML5Email,
            url: i.Constraint.HTML5URL
        }
          , f = {};
        if (r === null)
            for (var l = 0; l < o.length; l++) {
                var c = o[l]
                  , p = null;
                c.value == null ? p = n.getElementsByAttribute(document.body, "*", c.attribute) : p = n.getElementsByAttribute(document.body, "*", c.attribute, c.value),
                a(f, p, c)
            }
        else {
            r.id || (r.id = n.generateRandomId()),
            s = h(r);
            if (s.successful) {
                f[r.id] = [];
                for (var l = 0; l < o.length; l++) {
                    var c = o[l];
                    if (c.value === null) {
                        if (n.getAttributeValueForElement(r, c.attribute) != null) {
                            var d = {
                                constraint: c.constraint,
                                params: {}
                            };
                            d.params[c.attribute] = n.getAttributeValueForElement(r, c.attribute),
                            f[r.id].push(d)
                        }
                    } else {
                        var v = n.getAttributeValueForElement(r, c.attribute);
                        v != null && typeof u[v] != "undefined" && f[r.id].push({
                            constraint: u[v],
                            params: {}
                        })
                    }
                }
            }
        }
        return e.iterateOverMap(f, function(e, t, n) {
            var r = document.getElementById(e);
            for (var o = 0; o < t.length; o++) {
                var u = t[o];
                s = g(r, i.ReverseConstraint[u.constraint], u.params)
            }
        }),
        s
    }
    function v(e) {
        var t = {
            successful: !0,
            message: "",
            data: null
        }
          , n = e.element
          , r = e.constraints || []
          , i = n && n.tagName ? n.tagName.toLowerCase() : null;
        if (!n)
            t = {
                successful: !1,
                message: "regula.bind expects a non-null element attribute in the options argument. " + s.explodeParameters(e),
                data: null
            };
        else if (n.nodeType !== 1)
            t = {
                successful: !1,
                message: "regula.bind: element attribute is expected to be an HTMLElement, but was of unexpected type: " + typeof n + ". " + s.explodeParameters(e),
                data: null
            };
        else if (i != "form" && i != "select" && i != "textarea" && i != "input")
            t = {
                successful: !1,
                message: i + "#" + n.id + " is not an input, select, textarea, or form element! Validation constraints can only be attached to input, select, textarea, or form elements. " + s.explodeParameters(e),
                data: null
            };
        else if (r.length > 0) {
            var o = 0;
            while (o < r.length && t.successful)
                t = m(r[o], e),
                o++
        } else
            t = p({
                element: n
            });
        return t
    }
    function m(n, r) {
        function u(e, t) {
            var n = {}
              , r = [];
            for (var i = 0; i < e.length; i++)
                r.push(e[i]),
                n[e[i]] = !0;
            for (var s = 0; s < t.length; s++)
                n[t[s]] || r.push(t[s]);
            return r
        }
        function a(t, n) {
            var r = [];
            for (var i = 0; i < n.length; i++)
                e.exists(t, n[i]) || r.push(n[i]);
            return r
        }
        function f(n, r, s) {
            var f = o[t.ReverseGroup[t.Group.Default]][n.id][i.ReverseConstraint[r]].groups
              , l = [];
            s.groups ? l = s.groups : l.push(t.ReverseGroup[t.Group.Default]),
            e.exists(l, t.ReverseGroup[t.Group.Default]) || l.push(t.ReverseGroup[t.Group.Default]);
            var h = a(l, u(f, l));
            for (var p = 0; p < h.length; p++) {
                var d = h[p];
                delete o[d][n.id][i.ReverseConstraint[r]],
                c(n.id, d)
            }
        }
        var l = {
            successful: !0,
            message: "",
            data: null
        }
          , h = r.element
          , p = n.overwriteConstraint || !1
          , d = n.overwriteParameters || !1
          , v = n.constraintType
          , m = n.params || {}
          , y = {
            __size__: 0
        }
          , b = m.groups;
        if (typeof v == "undefined")
            l = {
                successful: !1,
                message: "regula.bind expects a valid constraint type for each constraint in constraints attribute of the options argument. " + s.explodeParameters(r),
                data: null
            };
        else if (m && m.groups)
            if (m.groups instanceof Array) {
                var w = []
                  , E = 0;
                while (E < m.groups.length && l.successful)
                    typeof m["groups"][E] == "string" ? w.push(m.groups[E]) : typeof t.ReverseGroup[m["groups"][E]] != "undefined" ? w.push(t.ReverseGroup[m.groups[E]]) : l = {
                        successful: !1,
                        message: "Invalid group: " + m.groups[E] + ". " + s.explodeParameters(r),
                        data: null
                    },
                    E++;
                l.successful && (m.groups = w)
            } else
                l = {
                    successful: !1,
                    message: "The groups parameter must be an array of enums or strings " + s.explodeParameters(r),
                    data: null
                };
        if (l.successful) {
            if (!o[t.ReverseGroup[t.Group.Default]][h.id] || !o[t.ReverseGroup[t.Group.Default]][h.id][i.ReverseConstraint[v]]) {
                for (var S in m)
                    m.hasOwnProperty(S) && e.put(y, S, m[S]);
                l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y)
            } else if (p) {
                for (var S in m)
                    m.hasOwnProperty(S) && e.put(y, S, m[S]);
                l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y),
                l.successful && f(h, v, m)
            } else {
                var x = o[t.ReverseGroup[t.Group.Default]][h.id][i.ReverseConstraint[v]];
                for (var S in x)
                    x.hasOwnProperty(S) && e.put(y, S, x[S]);
                if (d) {
                    for (var S in m)
                        m.hasOwnProperty(S) && e.put(y, S, m[S]);
                    l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y),
                    l.successful && f(h, v, y)
                } else
                    for (var S in m)
                        m.hasOwnProperty(S) && (x[S] || e.put(y, S, m[S]))
            }
            l.successful && (l = g(h, i.ReverseConstraint[v], y))
        }
        return m.groups = b,
        l
    }
    function g(n, r, u) {
        var a = {
            successful: !0,
            message: "",
            data: null
        };
        u.groups || e.put(u, "groups", [t.ReverseGroup[t.Group.Default]]);
        var f = u.groups;
        f.indexOf(t.ReverseGroup[t.Group.Default]) === -1 && (f.push(t.ReverseGroup[t.Group.Default]),
        u.groups = f);
        for (var l = 0; l < f.length; l++) {
            var c = f[l];
            if (!o[c]) {
                var h = -1;
                t.deletedGroupIndices.length > 0 ? h = t.deletedGroupIndices.pop() : h = t.firstCustomGroupIndex++,
                t.Group[c] = h,
                t.ReverseGroup[h] = c,
                o[c] = {}
            }
            o[c][n.id] || (o[c][n.id] = {}),
            o[c][n.id][r] = u
        }
        if (i.constraintDefinitions[r].html5)
            if (n.getAttribute("type") !== null && i.constraintDefinitions[r].inputType !== null && n.getAttribute("type") !== i.constraintDefinitions[r].inputType)
                a = {
                    successful: !1,
                    message: s.generateExceptionMessage(n, r, "Element type of " + n.getAttribute("type") + " conflicts with type of constraint @" + r + ": " + i.constraintDefinitions[r].inputType),
                    data: null
                };
            else {
                var p = i.constraintDefinitions[r].attribute
                  , d = i.constraintDefinitions[r].inputType;
                (p !== null && n.getAttribute(p) === null || d !== null && n.getAttribute("type") === null) && y(n, r, u)
            }
        return a
    }
    function y(e, t, n) {
        if (t === i.ReverseConstraint[i.Constraint.HTML5Required])
            e.setAttribute("required", "true");
        else {
            var r = i.constraintDefinitions[t];
            for (var s = 0; s < r.params.length; s++)
                e.setAttribute(r.params[s], n[r.params[s]])
        }
        var o = e.getAttribute("class");
        /regula-modified/.test(o) || e.setAttribute("class", o + " regula-modified")
    }
    function b(e) {
        var t = !1;
        for (var n = 0; n < e.elements.length; n++) {
            var r = e.elements[n].id
              , u = e.constraints || [];
            if (u.length == 0)
                for (var a in o)
                    o.hasOwnProperty(a) && typeof o[a][r] != "undefined" && (delete o[a][r],
                    a !== "Default" && c(r, a),
                    t = !0);
            else
                for (var f = 0; f < u.length; f++) {
                    var l = u[f];
                    for (var a in o)
                        o.hasOwnProperty(a) && typeof o[a][r] != "undefined" && (delete o[a][r][i.ReverseConstraint[l]],
                        a !== "Default" && c(r, a),
                        t = !0)
                }
        }
        if (e.elements.length > 0 && !t)
            throw new s.Exception.IllegalArgumentException("Element with id " + r + " does not have any constraints bound to it. " + s.explodeParameters(e))
    }
    function w(e) {
        var n = e.elementId
          , r = e.group
          , s = e.constraint
          , u = typeof o[t.ReverseGroup[t.Group.Default]][n] != "undefined";
        if (u && typeof r != "undefined" && typeof s == "undefined") {
            var a = t.ReverseGroup[r];
            u = typeof a != "undefined" && typeof o[a][n] != "undefined"
        } else if (u && typeof r == "undefined" && typeof s != "undefined") {
            var f = i.ReverseConstraint[s];
            u = typeof f != "undefined" && typeof o[t.ReverseGroup[t.Group.Default]][n][f] != "undefined"
        } else if (u && typeof r != "undefined" && typeof s != "undefined") {
            var a = t.ReverseGroup[r]
              , f = i.ReverseConstraint[s];
            u = typeof a != "undefined" && typeof f != "undefined" && typeof o[a][n] != "undefined" && typeof o[a][n][f] != "undefined"
        }
        return u
    }
    var o = null
      , u = {};
    return {
        initializeBoundConstraints: a,
        resetBoundConstraints: f,
        getBoundConstraints: l,
        removeElementAndGroupFromBoundConstraintsIfEmpty: c,
        bindAfterParsing: p,
        bindHTML5ValidationConstraints: d,
        bindFromOptions: v,
        unbind: b,
        isBound: w
    }
}),
function(e, t) {
    typeof define == "function" && define.amd ? define("regula", ["utils/MapUtils", "utils/DOMUtils", "service/BindingService", "service/ExceptionService", "service/ConstraintService", "service/ValidationService", "service/GroupService"], t) : (e.regula = t(e.regulaModules.MapUtils, e.regulaModules.DOMUtils, e.regulaModules.BindingService, e.regulaModules.ExceptionService, e.regulaModules.ConstraintService, e.regulaModules.ValidationService, e.regulaModules.GroupService),
    e.regula._modules = e.regulaModules,
    e.regulaModules = undefined)
}(this, function(e, t, n, r, i, s, o) {
    function f(t) {
        e.iterateOverMap(t, function(e, t, n) {
            typeof u[e] != "undefined" && (u[e] = t)
        })
    }
    function l(e) {
        var i = {
            successful: !0,
            message: "",
            data: null
        };
        if (typeof e == "undefined" || !e)
            n.resetBoundConstraints(),
            u.enableHTML5Validation && t.supportsHTML5Validation() && (i = n.bindHTML5ValidationConstraints({
                element: null
            })),
            i.successful && (i = n.bindAfterParsing({
                element: null
            }));
        else {
            var s = e.elements;
            if (typeof s == "undefined" || !s)
                u.enableHTML5Validation && t.supportsHTML5Validation() && typeof e.element != "undefined" && e.element !== null && (i = n.bindHTML5ValidationConstraints({
                    element: e.element
                })),
                i.successful && (i = n.bindFromOptions(e));
            else {
                var o = 0;
                while (i.successful && o < s.length)
                    e.element = s[o],
                    u.enableHTML5Validation && t.supportsHTML5Validation() && (i = n.bindHTML5ValidationConstraints({
                        element: e.element
                    })),
                    i.successful ? (i = n.bindFromOptions(e),
                    i.successful || (i.message = "regula.bind: Element " + (o + 1) + " of " + s.length + " failed: " + i.message)) : i.message = "regula.bind: Failed binding HTML5 validation constraints: Element " + (o + 1) + " of " + s.length + " failed: " + i.message,
                    o++
            }
        }
        if (!i.successful)
            throw new r.Exception.BindException(i.message)
    }
    function c(e) {
        if (typeof e == "undefined" || !e)
            n.resetBoundConstraints();
        else {
            if (typeof e.elementId == "undefined" && typeof e.elements == "undefined")
                throw new r.Exception.IllegalArgumentException("regula.unbind requires an elementId attribute, or an elements attribute if options are provided");
            if (!(typeof e.elements == "undefined" || e.elements instanceof Array))
                throw new r.Exception.IllegalArgumentException("regula.unbind expects the elements attribute to be an array, if it is provided");
            if (typeof e.elements == "undefined") {
                e.elements = [document.getElementById(e.elementId)];
                if (e.elements[0] === null)
                    throw new r.Exception.IllegalArgumentException("Element with id " + e.elementId + " does not have any constraints bound to it. " + r.explodeParameters(e))
            }
            n.unbind(e)
        }
    }
    function h(e) {
        if (typeof e == "undefined")
            throw new r.Exception.IllegalArgumentException("regula.isBound expects options");
        var t = e.element
          , i = e.elementId;
        if (typeof t == "undefined" && typeof i == "undefined")
            throw new r.Exception.IllegalArgumentException("regula.isBound expects at the very least, either an element or elementId attribute");
        if (e.hasOwnProperty("constraint") && typeof e.constraint == "undefined")
            throw new r.Exception.IllegalArgumentException("Undefined constraint was supplied as a parameter");
        if (e.hasOwnProperty("group") && typeof e.group == "undefined")
            throw new r.Exception.IllegalArgumentException("Undefined group was supplied as a parameter");
        return typeof t != "undefined" && (i = t.id),
        n.isBound({
            elementId: i,
            group: e.group,
            constraint: e.constraint
        })
    }
    function p(e) {
        if (!e)
            throw new r.Exception.IllegalArgumentException("regula.override expects options");
        if (typeof e.constraintType == "undefined")
            throw new r.Exception.IllegalArgumentException("regula.override expects a valid constraintType attribute in the options argument");
        var t = i.ReverseConstraint[e.constraintType];
        if (typeof t == "undefined")
            throw new r.Exception.IllegalArgumentException("regula.override: I could not find the specified constraint. Perhaps it has not been defined? Function received: " + r.explodeParameters(e));
        var n = !1
          , s = i.constraintDefinitions[t].formSpecific;
        i.constraintDefinitions[t].custom && (s = typeof e.formSpecific == "undefined" ? i.constraintDefinitions[t].formSpecific : e.formSpecific);
        var o = i.constraintDefinitions[t].custom && typeof e.async != "undefined" ? e.async : i.constraintDefinitions[t].async
          , u = i.constraintDefinitions[t].custom ? e.params || i.constraintDefinitions[t].params : i.constraintDefinitions[t].params
          , a = e.defaultMessage || i.constraintDefinitions[t].defaultMessage
          , f = i.constraintDefinitions[t].compound
          , l = e.constraints || i.constraintDefinitions[t].constraints
          , c = i.constraintDefinitions[t].validator;
        i.constraintDefinitions[t].custom && !i.constraintDefinitions[t].compound && typeof e.validator != "undefined" && (c = e.validator,
        n = !0);
        if (typeof s != "boolean")
            throw new r.Exception.IllegalArgumentException("regula.override expects the formSpecific attribute in the options argument to be a boolean");
        if (typeof c != "function")
            throw new r.Exception.IllegalArgumentException("regula.override expects the validator attribute in the options argument to be a function");
        if (!(u instanceof Array))
            throw new r.Exception.IllegalArgumentException("regula.override expects the params attribute in the options argument to be an array");
        if (typeof a != "string")
            throw new r.Exception.IllegalArgumentException("regula.override expects the defaultMessage attribute in the options argument to be a string");
        i.override({
            async: o,
            formSpecific: s,
            name: t,
            constraintType: e.constraintType,
            compound: f,
            params: u,
            composingConstraints: l,
            defaultMessage: a,
            validator: c,
            validatorRedefined: n
        })
    }
    function d(e) {
        if (!e)
            throw new r.Exception.IllegalArgumentException("regula.custom expects options");
        var t = e.name
          , n = e.formSpecific || !1
          , s = e.validator
          , o = e.params || []
          , u = e.defaultMessage || ""
          , a = typeof e.async == "undefined" ? !1 : e.async;
        if (!t)
            throw new r.Exception.IllegalArgumentException("regula.custom expects a name attribute in the options argument");
        if (typeof t != "string")
            throw new r.Exception.IllegalArgumentException("regula.custom expects the name attribute in the options argument to be a string");
        if (t.replace(/\s/g, "").length == 0)
            throw new r.Exception.IllegalArgumentException("regula.custom cannot accept an empty string for the name attribute in the options argument");
        if (typeof n != "boolean")
            throw new r.Exception.IllegalArgumentException("regula.custom expects the formSpecific attribute in the options argument to be a boolean");
        if (!s)
            throw new r.Exception.IllegalArgumentException("regula.custom expects a validator attribute in the options argument");
        if (typeof s != "function")
            throw new r.Exception.IllegalArgumentException("regula.custom expects the validator attribute in the options argument to be a function");
        if (o.constructor.toString().indexOf("Array") < 0)
            throw new r.Exception.IllegalArgumentException("regula.custom expects the params attribute in the options argument to be an array");
        if (typeof u != "string")
            throw new r.Exception.IllegalArgumentException("regula.custom expects the defaultMessage attribute in the options argument to be a string");
        if (i.constraintDefinitions[t])
            throw new r.Exception.IllegalArgumentException("There is already a constraint called " + t + ". If you wish to override this constraint, use regula.override");
        i.custom({
            async: a,
            name: t,
            formSpecific: n,
            validator: s,
            custom: !0,
            compound: !1,
            params: o,
            defaultMessage: u
        })
    }
    function v(e) {
        if (!e)
            throw new r.Exception.IllegalArgumentException("regula.compound expects options");
        var t = e.name
          , n = e.constraints || []
          , s = e.formSpecific || !1
          , o = e.defaultMessage || ""
          , u = e.params || []
          , a = typeof e.reportAsSingleViolation == "undefined" ? !1 : e.reportAsSingleViolation;
        if (!t)
            throw new r.Exception.IllegalArgumentException("regula.compound expects a name attribute in the options argument");
        if (typeof t != "string")
            throw new r.Exception.IllegalArgumentException("regula.compound expects name to be a string parameter");
        if (u.constructor.toString().indexOf("Array") < 0)
            throw new r.Exception.IllegalArgumentException("regula.compound expects the params attribute in the options argument to be an array");
        if (n.length == 0)
            throw new r.Exception.IllegalArgumentException("regula.compound expects an array of composing constraints under a constraints attribute in the options argument");
        if (i.constraintDefinitions[t])
            throw new r.Exception.IllegalArgumentException("regula.compound: There is already a constraint called " + t + ". If you wish to override this constraint, use regula.override");
        i.compound({
            name: t,
            formSpecific: s,
            params: u,
            reportAsSingleViolation: a,
            constraints: n,
            defaultMessage: o
        })
    }
    function m(e, t) {
        s.init({
            config: u,
            ReverseConstraint: i.ReverseConstraint,
            constraintDefinitions: i.constraintDefinitions,
            boundConstraints: n.getBoundConstraints()
        });
        var o = [];
        if (typeof e == "undefined" || typeof e.groups == "undefined" || e.groups instanceof Array) {
            if (typeof e != "undefined" && typeof e.groups != "undefined" && e.groups.length == 0)
                throw new r.Exception.IllegalArgumentException("regula.validate: If a groups attribute is provided, it must not be empty.");
            if (typeof e != "undefined" && e.hasOwnProperty("constraintType") && typeof e.constraintType == "undefined")
                throw new r.Exception.IllegalArgumentException("regula.validate: If a constraintType attribute is provided, it cannot be undefined.");
            typeof t == "undefined" && typeof e == "function" && (e = {
                callback: e
            }),
            typeof t != "undefined" && (e.callback = t);
            if (typeof e != "undefined" && typeof e.elements != "undefined") {
                if (!(e.elements instanceof Array))
                    throw new r.Exception.IllegalArgumentException("regula.validate: If an elements attribute is provided, it must be an array.");
                if (e.elements.length == 0)
                    throw new r.Exception.IllegalArgumentException("regula.validate: If an elements attribute is provided, it must not be empty.");
                o = s.validate(e)
            } else
                o = s.validate(e);
            return o
        }
        throw new r.Exception.IllegalArgumentException("regula.validate: If a groups attribute is provided, it must be an array.")
    }
    var u = {
        validateEmptyFields: !0,
        enableHTML5Validation: !0,
        debug: !1
    }
      , a = {
        DMY: "DMY",
        MDY: "MDY",
        YMD: "YMD"
    };
    return n.initializeBoundConstraints(),
    s.initializePublicValidators(i.constraintDefinitions),
    {
        configure: f,
        bind: l,
        unbind: c,
        isBound: h,
        validate: m,
        custom: d,
        compound: v,
        override: p,
        Constraint: i.Constraint,
        Group: o.Group,
        DateFormat: a,
        Exception: r.Exception
    }
});
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(e) {
        return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void n.error("Method " + e + " does not exist on jQuery.regula") : i.bind.apply(this, arguments)
    }
    var n = e
      , i = {
        bind: function(t) {
            return this instanceof e && (t || (t = {}),
            this.get().length > 0 && n.extend(!0, t, {
                elements: this.get()
            })),
            regula.bind(t),
            this
        },
        unbind: function(t) {
            return this instanceof e && (t || (t = {}),
            this.get().length > 0 && n.extend(!0, t, {
                elements: this.get()
            })),
            regula.unbind(t),
            this
        },
        isBound: function(t) {
            return this instanceof e && (t || (t = {}),
            this.get().length > 0 && n.extend(!0, t, {
                element: this.get(0)
            })),
            regula.isBound(t),
            this
        },
        validate: function(t) {
            return this instanceof e && (t || (t = {}),
            this.get().length > 0 && n.extend(!0, t, {
                elements: this.get()
            })),
            regula.validate(t)
        },
        custom: function(e) {
            return regula.custom(e),
            this
        },
        compound: function(e) {
            return regula.compound(e),
            this
        },
        override: function(e) {
            return regula.override(e),
            this
        }
    };
    i.on = i.bind,
    i.off = i.unbind,
    n.fn.regula = t,
    n.regula = t
});

/**
 * @module       Form
 * @version      3.51
 * @author       M. Alsup
 * @see          {@link https://malsup.com/jquery/form}
 * @see          {@link https://github.com/jquery-form/form}
 * @license      MIT and GPL
 * @requires     module:jQuery
 */
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["../jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";
    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(),
        e(t.target).ajaxSubmit(r))
    }
    function r(t) {
        var r = t.target
          , a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length)
                return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r,
        "image" == r.type)
            if (void 0 !== t.offsetX)
                i.clk_x = t.offsetX,
                i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
                var o = a.offset();
                i.clk_x = t.pageX - o.left,
                i.clk_y = t.pageY - o.top
            } else
                i.clk_x = t.pageX - r.offsetLeft,
                i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }
    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files,
    n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i)
            return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }
    ,
    e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++)
                i[a] = i[a].replace(/\+/g, " "),
                n = i[a].split("="),
                s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }
        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++)
                n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++)
                    o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0
                      , a = e.loaded || e.position
                      , n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)),
                    t.uploadProgress(e, a, n, r)
                }, !1),
                r
            }
            ),
            s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) {
                r.data = t.formData ? t.formData : n,
                c && c.call(this, e, r)
            }
            ,
            e.ajax(s)
        }
        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t)
                    return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r),
                    t = e.document
                }
                return t
            }
            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e),
                        e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"),
                        s(k),
                        j && clearTimeout(j),
                        j = void 0
                    }
                }
                var r = f.attr2("target")
                  , i = f.attr2("action")
                  , o = "multipart/form-data"
                  , c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p),
                (!u || /post/i.test(u)) && w.setAttribute("method", "POST"),
                i != m.url && w.setAttribute("action", m.url),
                m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }),
                m.timeout && (j = setTimeout(function() {
                    T = !0,
                    s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData)
                            m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"),
                    g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1),
                    setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i),
                    w.setAttribute("enctype", c),
                    r ? w.setAttribute("target", r) : f.removeAttr("target"),
                    e(l).remove()
                }
            }
            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g),
                    M || (a("cannot access response document"),
                    t = k),
                    t === D && x)
                        return x.abort("timeout"),
                        void S.reject(x, "timeout");
                    if (t == k && x)
                        return x.abort("server abort"),
                        void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T)
                                throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o),
                            !o && window.opera && (null === M.body || !M.body.innerHTML) && --O)
                                return a("requeing onLoad callback, DOM not available"),
                                void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null,
                            x.responseXML = M.XMLDocument ? M.XMLDocument : M,
                            o && (m.dataType = "xml"),
                            x.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }
                            ,
                            u && (x.status = Number(u.getAttribute("status")) || x.status,
                            x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase()
                              , l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f)
                                    x.responseText = f.value,
                                    x.status = Number(f.getAttribute("status")) || x.status,
                                    x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0]
                                      , h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else
                                "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror",
                                x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y),
                            i = "error",
                            x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"),
                        i = null),
                        x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"),
                        "success" === i ? (m.success && m.success.call(m.context, E, "success", x),
                        S.resolve(x.responseText, "success", x),
                        d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText),
                        m.error && m.error.call(m.context, x, i, r),
                        S.reject(x, "error", r),
                        d && e.event.trigger("ajaxError", [x, m, r])),
                        d && e.event.trigger("ajaxComplete", [x, m]),
                        d && !--e.active && e.event.trigger("ajaxStop"),
                        m.complete && m.complete.call(m.context, x, i),
                        F = !0,
                        m.timeout && clearTimeout(j),
                        setTimeout(function() {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(),
                            x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function(e) {
                x.abort(e)
            }
            ,
            r)
                for (l = 0; l < h.length; l++)
                    c = e(h[l]),
                    i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t),
            m.context = m.context || m,
            p = "jqFormIO" + (new Date).getTime(),
            m.iframeTarget ? (v = e(m.iframeTarget),
            b = v.attr2("name"),
            b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'),
            v.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })),
            g = v[0],
            x = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(t) {
                    var r = "timeout" === t ? "timeout" : "aborted";
                    a("aborting upload... " + r),
                    this.aborted = 1;
                    try {
                        g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                    } catch (n) {}
                    v.attr("src", m.iframeSrc),
                    x.error = r,
                    m.error && m.error.call(m.context, x, r, t),
                    d && e.event.trigger("ajaxError", [x, m, r]),
                    m.complete && m.complete.call(m.context, x, r)
                }
            },
            d = m.global,
            d && 0 === e.active++ && e.event.trigger("ajaxStart"),
            d && e.event.trigger("ajaxSend", [x, m]),
            m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
                return m.global && e.active--,
                S.reject(),
                S;
            if (x.aborted)
                return S.reject(),
                S;
            y = w.clk,
            y && (b = y.name,
            b && !y.disabled && (m.extraData = m.extraData || {},
            m.extraData[b] = y.value,
            "image" == y.type && (m.extraData[b + ".x"] = w.clk_x,
            m.extraData[b + ".y"] = w.clk_y)));
            var D = 1
              , k = 2
              , A = e("meta[name=csrf-token]").attr("content")
              , L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {},
            m.extraData[L] = A),
            m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function(e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"),
                t.async = "false",
                t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"),
                t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }
            , C = e.parseJSON || function(e) {
                return window.eval("(" + e + ")")
            }
            , _ = function(t, r, a) {
                var n = t.getResponseHeader("content-type") || ""
                  , i = "xml" === r || !r && n.indexOf("xml") >= 0
                  , o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"),
                a && a.dataFilter && (o = a.dataFilter(o, r)),
                "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)),
                o
            };
            return S
        }
        if (!this.length)
            return a("ajaxSubmit: skipping submit process - no element selected"),
            this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}),
        u = t.type || this.attr2("method"),
        c = t.url || this.attr2("action"),
        l = "string" == typeof c ? e.trim(c) : "",
        l = l || window.location.href || "",
        l && (l = (l.match(/^([^#]+)/) || [])[1]),
        t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]),
        m.veto)
            return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
            this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
            return a("ajaxSubmit: submit aborted via beforeSerialize callback"),
            this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data,
        p = e.param(t.data, d)),
        t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
            return a("ajaxSubmit: submit aborted via beforeSubmit callback"),
            this;
        if (this.trigger("form-submit-validate", [v, this, t, m]),
        m.veto)
            return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p),
        "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g,
        t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() {
            f.resetForm()
        }),
        t.clearForm && x.push(function() {
            f.clearForm(t.includeHidden)
        }),
        !t.dataType && t.target) {
            var y = t.success || function() {}
            ;
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else
            t.success && x.push(t.success);
        if (t.success = function(e, r, a) {
            for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
                x[i].apply(n, [e, r, a || f, f])
        }
        ,
        t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() {
            return "" !== e(this).val()
        })
          , w = j.length > 0
          , S = "multipart/form-data"
          , D = f.attr("enctype") == S || f.attr("encoding") == S
          , k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t),
        f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++)
            h[E] = null;
        return this.trigger("form-submit-notify", [this, t]),
        this
    }
    ,
    e.fn.ajaxForm = function(n) {
        if (n = n || {},
        n.delegation = n.delegation && e.isFunction(e.fn.on),
        !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"),
            e(function() {
                e(i.s, i.c).ajaxForm(n)
            }),
            this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")),
            this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r),
        this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }
    ,
    e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ,
    e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length)
            return a;
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()),
        s && (i = e(':input[form="' + s + '"]').get(),
        i.length && (u = (u || []).concat(i))),
        !u || !u.length)
            return a;
        var c, l, f, m, d, p, h;
        for (c = 0,
        p = u.length; p > c; c++)
            if (d = u[c],
            f = d.name,
            f && !d.disabled)
                if (t && o.clk && "image" == d.type)
                    o.clk == d && (a.push({
                        name: f,
                        value: e(d).val(),
                        type: d.type
                    }),
                    a.push({
                        name: f + ".x",
                        value: o.clk_x
                    }, {
                        name: f + ".y",
                        value: o.clk_y
                    }));
                else if (m = e.fieldValue(d, !0),
                m && m.constructor == Array)
                    for (r && r.push(d),
                    l = 0,
                    h = m.length; h > l; l++)
                        a.push({
                            name: f,
                            value: m[l]
                        });
                else if (n.fileapi && "file" == d.type) {
                    r && r.push(d);
                    var v = d.files;
                    if (v.length)
                        for (l = 0; l < v.length; l++)
                            a.push({
                                name: f,
                                value: v[l],
                                type: d.type
                            });
                    else
                        a.push({
                            name: f,
                            value: "",
                            type: d.type
                        })
                } else
                    null !== m && "undefined" != typeof m && (r && r.push(d),
                    a.push({
                        name: f,
                        value: m,
                        type: d.type,
                        required: d.required
                    }));
        if (!t && o.clk) {
            var g = e(o.clk)
              , x = g[0];
            f = x.name,
            f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }),
            a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }
    ,
    e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }
    ,
    e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++)
                        r.push({
                            name: a,
                            value: n[i]
                        });
                else
                    null !== n && "undefined" != typeof n && r.push({
                        name: this.name,
                        value: n
                    })
            }
        }),
        e.param(r)
    }
    ,
    e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a]
              , o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }
    ,
    e.fieldValue = function(t, r) {
        var a = t.name
          , n = t.type
          , i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0),
        r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))
            return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o)
                return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value),
                    c)
                        return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }
    ,
    e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }
    ,
    e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type
              , n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }
    ,
    e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }
    ,
    e.fn.enable = function(e) {
        return void 0 === e && (e = !0),
        this.each(function() {
            this.disabled = !e
        })
    }
    ,
    e.fn.selected = function(t) {
        return void 0 === t && (t = !0),
        this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r)
                this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1),
                this.selected = t
            }
        })
    }
    ,
    e.fn.ajaxSubmit.debug = !1
});

/**
 * @module       RDInputLabel
 * @author       Evgeniy Gusarov
 * @license      MIT
 */
(function() {
    !function(t, e, i) {
        var s, n;
        return n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isWebkit = /safari|chrome/i.test(navigator.userAgent),
        s = function() {
            function s(s, n) {
                this.options = t.extend(!0, {}, this.Defaults, n),
                this.$element = t(s).addClass("rd-input-label"),
                this.$target = t("#" + this.$element.attr("for")),
                this.$win = t(i),
                this.$doc = t(e),
                this.initialize()
            }
            return s.prototype.Defaults = {
                callbacks: null
            },
            s.prototype.initialize = function() {
                return this.$target.on("input", t.proxy(this.change, this)).on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("hover", t.proxy(this.hover, this)).parents("form").on("reset", t.proxy(this.reset, this)),
                this.change(),
                this.hover(),
                this
            }
            ,
            s.prototype.hover = function() {
                return isWebkit && (this.$target.is(":-webkit-autofill") ? this.$element.addClass("auto-fill") : this.$element.removeClass("auto-fill")),
                this
            }
            ,
            s.prototype.change = function() {
                return isWebkit && (this.$target.is(":-webkit-autofill") ? this.$element.addClass("auto-fill") : this.$element.removeClass("auto-fill")),
                "" !== this.$target.val() ? (this.$element.hasClass("focus") || this.focus(),
                this.$element.addClass("not-empty")) : this.$element.removeClass("not-empty"),
                this
            }
            ,
            s.prototype.focus = function() {
                return this.$element.addClass("focus"),
                this
            }
            ,
            s.prototype.reset = function() {
                return setTimeout(t.proxy(this.blur, this)),
                this
            }
            ,
            s.prototype.blur = function(t) {
                return "" === this.$target.val() && this.$element.removeClass("focus").removeClass("not-empty"),
                this
            }
            ,
            s
        }(),
        t.fn.extend({
            RDInputLabel: function(e) {
                return this.each(function() {
                    var i;
                    return i = t(this),
                    i.data("RDInputLabel") ? void 0 : i.data("RDInputLabel", new s(this,e))
                })
            }
        }),
        i.RDInputLabel = s
    }(window.jQuery, document, window),
    "undefined" != typeof module && null !== module ? module.exports = window.RDInputLabel : "function" == typeof define && define.amd && define(["jquery"], function() {
        "use strict";
        return window.RDInputLabel
    })
}
).call(this);

/**
 * @module       RD Navbar
 * @author       Evgeniy Gusarov
 * @see          https://ua.linkedin.com/pub/evgeniy-gusarov/8a/a40/54a
 * @version      2.2.5
 */
(function() {
    var t;
    t = "ontouchstart"in window,
    function(n, o, e) {
        var a;
        a = function() {
            function a(t, a) {
                this.options = n.extend(!0, {}, this.Defaults, a),
                this.$element = n(t),
                this.$clone = null,
                this.$win = n(e),
                this.$doc = n(o),
                this.currentLayout = this.options.layout,
                this.loaded = !1,
                this.focusOnHover = this.options.focusOnHover,
                this.focusTimer = !1,
                this.cloneTimer = !1,
                this.isStuck = !1,
                this.initialize()
            }
            return a.prototype.Defaults = {
                layout: "rd-navbar-static",
                deviceLayout: "rd-navbar-fixed",
                focusOnHover: !0,
                focusOnHoverTimeout: 800,
                linkedElements: ["html"],
                domAppend: !0,
                stickUp: !0,
                stickUpClone: !0,
                stickUpOffset: "100%",
                anchorNav: !0,
                anchorNavSpeed: 400,
                anchorNavOffset: 0,
                anchorNavEasing: "swing",
                autoHeight: !0,
                responsive: {
                    0: {
                        layout: "rd-navbar-fixed",
                        deviceLayout: "rd-navbar-fixed",
                        focusOnHover: !1,
                        stickUp: !1
                    },
                    992: {
                        layout: "rd-navbar-static",
                        deviceLayout: "rd-navbar-static",
                        focusOnHover: !0,
                        stickUp: !0
                    }
                },
                callbacks: {
                    onToggleSwitch: !1,
                    onToggleClose: !1,
                    onDomAppend: !1,
                    onDropdownOver: !1,
                    onDropdownOut: !1,
                    onDropdownToggle: !1,
                    onDropdownClose: !1,
                    onStuck: !1,
                    onUnstuck: !1,
                    onAnchorChange: !1
                }
            },
            a.prototype.initialize = function() {
                var n;
                return (n = this).$element.addClass("rd-navbar").addClass(n.options.layout),
                t && n.$element.addClass("rd-navbar--is-touch"),
                n.options.domAppend && n.createNav(n),
                n.options.stickUpClone && n.createClone(n),
                n.$element.addClass("rd-navbar-original"),
                n.addAdditionalClassToToggles(".rd-navbar-original", "toggle-original", "toggle-original-elements"),
                n.applyHandlers(n),
                n.offset = n.$element.offset().top,
                n.height = n.$element.outerHeight(),
                n.loaded = !0,
                n
            }
            ,
            a.prototype.resize = function(o, e) {
                var a, s;
                return s = t ? o.getOption("deviceLayout") : o.getOption("layout"),
                a = o.$element.add(o.$clone),
                s === o.currentLayout && o.loaded || (o.switchClass(a, o.currentLayout, s),
                null != o.options.linkedElements && n.grep(o.options.linkedElements, function(t, n) {
                    return o.switchClass(t, o.currentLayout + "-linked", s + "-linked")
                }),
                o.currentLayout = s),
                o.focusOnHover = o.getOption("focusOnHover"),
                o
            }
            ,
            a.prototype.stickUp = function(t, o) {
                function e() {
                    "resize" === o.type ? t.switchClass(i, "", "rd-navbar--is-stuck") : i.addClass("rd-navbar--is-stuck"),
                    t.isStuck = !0
                }
                var a, s, r, i, l;
                return s = t.getOption("stickUp"),
                (n("html").hasClass("ios") || t.$element.hasClass("rd-navbar-fixed")) && (s = !1),
                a = t.$doc.scrollTop(),
                i = null != t.$clone ? t.$clone : t.$element,
                r = t.getOption("stickUpOffset"),
                l = "string" == typeof r ? r.indexOf("%") > 0 ? parseFloat(r) * t.height / 100 : parseFloat(r) : r,
                s ? (a >= l && !t.isStuck || a < l && t.isStuck) && (t.$element.add(t.$clone).find("[data-rd-navbar-toggle]").each(function() {
                    n.proxy(t.closeToggle, this)(t, !1)
                }).end().find(".rd-navbar-submenu").removeClass("opened").removeClass("focus"),
                a >= l && !t.isStuck && !t.$element.hasClass("rd-navbar-fixed") ? (t.options.callbacks.onStuck && t.options.callbacks.onStuck.call(t),
                navigator.platform.match(/(Mac)/i) ? setTimeout(e, 10) : e()) : ("resize" === o.type ? t.switchClass(i, "rd-navbar--is-stuck", "") : i.removeClass("rd-navbar--is-stuck").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", n.proxy(t.resizeWrap, t, o)),
                t.isStuck = !1,
                t.options.callbacks.onUnstuck && t.options.callbacks.onUnstuck.call(t))) : (t.$element.find(".rd-navbar-submenu").removeClass("opened").removeClass("focus"),
                t.isStuck && (t.switchClass(i, "rd-navbar--is-stuck", ""),
                t.isStuck = !1,
                t.resizeWrap(o))),
                t
            }
            ,
            a.prototype.resizeWrap = function(t) {
                var n, o;
                if (null == (o = this).$clone && !o.isStuck)
                    return n = o.$element.parent(),
                    o.getOption("autoHeight") ? (o.height = o.$element.outerHeight(),
                    "resize" === t.type ? (n.addClass("rd-navbar--no-transition").css("height", o.height),
                    n[0].offsetHeight,
                    n.removeClass("rd-navbar--no-transition")) : n.css("height", o.height)) : void n.css("height", "auto")
            }
            ,
            a.prototype.createNav = function(t) {
                return t.$element.find(".rd-navbar-dropdown, .rd-navbar-megamenu").each(function() {
                    var t;
                    return t = n(this),
                    this.getBoundingClientRect(),
                    t.hasClass("rd-navbar-megamenu") ? t.parent().addClass("rd-navbar--has-megamenu") : t.parent().addClass("rd-navbar--has-dropdown")
                }).parents("li").addClass("rd-navbar-submenu"),
                n('<span class="rd-navbar-submenu-toggle"></span>').insertAfter(".rd-navbar-nav li.rd-navbar-submenu > a"),
                t.options.callbacks.onDomAppend && t.options.callbacks.onDomAppend.call(this),
                t
            }
            ,
            a.prototype.createClone = function(t) {
                return t.$clone = t.$element.clone().insertAfter(t.$element).addClass("rd-navbar--is-clone"),
                t.addAdditionalClassToToggles(".rd-navbar--is-clone", "toggle-cloned", "toggle-cloned-elements"),
                t
            }
            ,
            a.prototype.closeToggle = function(t, o) {
                var e, a, s, r, i, l, c;
                return a = n(o.target),
                i = !1,
                l = this.getAttribute("data-rd-navbar-toggle"),
                t.options.stickUpClone && t.isStuck ? (r = ".toggle-cloned",
                s = ".toggle-cloned-elements",
                c = !a.hasClass("toggle-cloned")) : (r = ".toggle-original",
                s = ".toggle-original-elements",
                c = !a.hasClass("toggle-original")),
                o.target !== this && !a.parents(r + "[data-rd-navbar-toggle]").length && !a.parents(s).length && l && c && ((e = n(this).parents("body").find(l).add(n(this).parents(".rd-navbar")[0])).each(function() {
                    if (!i)
                        return i = !0 === (o.target === this || n.contains(this, o.target))
                }),
                i || (e.add(this).removeClass("active"),
                t.options.callbacks.onToggleClose && t.options.callbacks.onToggleClose.call(this, t))),
                this
            }
            ,
            a.prototype.switchToggle = function(t, o) {
                var e, a, s;
                return o.preventDefault(),
                n(this).hasClass("toggle-cloned") ? (s = ".rd-navbar--is-clone",
                e = ".toggle-cloned-elements") : (s = ".rd-navbar-original",
                e = ".toggle-original-elements"),
                (a = this.getAttribute("data-rd-navbar-toggle")) && (n(s + " [data-rd-navbar-toggle]").not(this).each(function() {
                    var t;
                    if (t = this.getAttribute("data-rd-navbar-toggle"))
                        return n(this).parents("body").find(s + " " + t + e).add(this).add(n.inArray(".rd-navbar", t.split(/\s*,\s*/i)) > -1 && n(this).parents("body")[0]).removeClass("active")
                }),
                n(this).parents("body").find(s + " " + a + e).add(this).add(n.inArray(".rd-navbar", a.split(/\s*,\s*/i)) > -1 && n(this).parents(".rd-navbar")[0]).toggleClass("active")),
                t.options.callbacks.onToggleSwitch && t.options.callbacks.onToggleSwitch.call(this, t),
                this
            }
            ,
            a.prototype.dropdownOver = function(t, o) {
                var e;
                if (t.focusOnHover) {
                    if (e = n(this),
                    clearTimeout(o),
                    t.options.callbacks.onDropdownOver && !t.options.callbacks.onDropdownOver.call(this, t))
                        return this;
                    e.addClass("focus").siblings().removeClass("opened").each(t.dropdownUnfocus)
                }
                return this
            }
            ,
            a.prototype.dropdownTouch = function(t, o) {
                var e, a;
                if (e = n(this),
                clearTimeout(o),
                t.focusOnHover) {
                    if (a = !1,
                    e.hasClass("focus") && (a = !0),
                    !a)
                        return e.addClass("focus").siblings().removeClass("opened").each(t.dropdownUnfocus),
                        !1;
                    t.options.callbacks.onDropdownOver && t.options.callbacks.onDropdownOver.call(this, t)
                }
                return this
            }
            ,
            a.prototype.dropdownOut = function(t, o) {
                return t.focusOnHover && (n(this).one("mouseenter.navbar", function() {
                    return clearTimeout(o)
                }),
                t.options.callbacks.onDropdownOut && t.options.callbacks.onDropdownOut.call(this, t),
                clearTimeout(o),
                o = setTimeout(n.proxy(t.dropdownUnfocus, this, t), t.options.focusOnHoverTimeout)),
                this
            }
            ,
            a.prototype.dropdownUnfocus = function(t) {
                return n(this).find("li.focus").add(this).removeClass("focus"),
                this
            }
            ,
            a.prototype.dropdownClose = function(t, o) {
                return o.target === this || n(o.target).parents(".rd-navbar-submenu").length || (n(this).find("li.focus").add(this).removeClass("focus").removeClass("opened"),
                t.options.callbacks.onDropdownClose && t.options.callbacks.onDropdownClose.call(this, t)),
                this
            }
            ,
            a.prototype.dropdownToggle = function(t) {
                return n(this).toggleClass("opened").siblings().removeClass("opened"),
                t.options.callbacks.onDropdownToggle && t.options.callbacks.onDropdownToggle.call(this, t),
                this
            }
            ,
            a.prototype.goToAnchor = function(t, o) {
                var e, a;
                return a = this.hash,
                e = n(a),
                !!t.getOption("anchorNav") && (e.length && (o.preventDefault(),
                n("html, body").stop().animate({
                    scrollTop: e.offset().top + t.getOption("anchorNavOffset") + 1
                }, t.getOption("anchorNavSpeed"), t.getOption("anchorNavEasing"), function() {
                    return t.changeAnchor(a)
                })),
                this)
            }
            ,
            a.prototype.activateAnchor = function(t) {
                var o, e, a, s, r, i, l, c, d, p, u, h;
                if (s = this,
                u = s.$doc.scrollTop(),
                h = s.$win.height(),
                r = s.$doc.height(),
                p = s.getOption("anchorNavOffset"),
                !s.options.anchorNav)
                    return !1;
                if (u + h > r - 50)
                    return (o = n('[data-type="anchor"]').last()).length && o.offset().top >= u && (i = "#" + o.attr("id"),
                    (e = n('.rd-navbar-nav a[href^="' + i + '"]').parent()).hasClass("active") || (e.addClass("active").siblings().removeClass("active"),
                    s.options.callbacks.onAnchorChange && s.options.callbacks.onAnchorChange.call(o[0], s))),
                    o;
                d = n('.rd-navbar-nav a[href^="#"]').get();
                for (l in d)
                    c = d[l],
                    i = (a = n(c)).attr("href"),
                    (o = n(i)).length && o.offset().top + p <= u && o.offset().top + o.outerHeight() > u && (a.parent().addClass("active").siblings().removeClass("active"),
                    s.options.callbacks.onAnchorChange && s.options.callbacks.onAnchorChange.call(o[0], s));
                return null
            }
            ,
            a.prototype.getAnchor = function() {
                return history && history.state ? history.state.id : null
            }
            ,
            a.prototype.changeAnchor = function(t) {
                return history && (history.state && history.state.id !== t ? history.replaceState({
                    anchorId: t
                }, null, t) : history.pushState({
                    anchorId: t
                }, null, t)),
                this
            }
            ,
            a.prototype.applyHandlers = function(t) {
                return null != t.options.responsive && t.$win.on("resize.navbar", n.proxy(t.resize, t.$win[0], t)).on("resize.navbar", n.proxy(t.resizeWrap, t)).on("resize.navbar", n.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on("orientationchange.navbar", n.proxy(t.resize, t.$win[0], t)).trigger("resize.navbar"),
                t.$doc.on("scroll.navbar", n.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on("scroll.navbar", n.proxy(t.activateAnchor, t)),
                t.$element.add(t.$clone).find("[data-rd-navbar-toggle]").each(function() {
                    var o;
                    return (o = n(this)).on("click", n.proxy(t.switchToggle, this, t)),
                    o.parents("body").on("click", n.proxy(t.closeToggle, this, t))
                }),
                t.$element.add(t.$clone).find(".rd-navbar-submenu").each(function() {
                    var o, e;
                    return o = n(this),
                    e = o.parents(".rd-navbar--is-clone").length ? t.cloneTimer : t.focusTimer,
                    o.on("mouseleave.navbar", n.proxy(t.dropdownOut, this, t, e)),
                    o.find("> a").on("mouseenter.navbar", n.proxy(t.dropdownOver, this, t, e)),
                    o.find("> a").on("touchstart.navbar", n.proxy(t.dropdownTouch, this, t, e)),
                    o.find("> .rd-navbar-submenu-toggle").on("click", n.proxy(t.dropdownToggle, this, t)),
                    o.parents("body").on("click", n.proxy(t.dropdownClose, this, t))
                }),
                t.$element.add(t.$clone).find('.rd-navbar-nav a[href^="#"]').each(function() {
                    return n(this).on("click", n.proxy(t.goToAnchor, this, t))
                }),
                t.$element.find(".rd-navbar-dropdown, .rd-navbar-megamenu").each(function() {
                    var t, o;
                    t = n(this),
                    (o = this.getBoundingClientRect()).left + t.outerWidth() >= e.innerWidth - 10 ? this.className += " rd-navbar-open-left" : o.left - t.outerWidth() <= 10 && (this.className += " rd-navbar-open-right")
                }),
                t
            }
            ,
            a.prototype.switchClass = function(t, o, e) {
                var a;
                return (a = t instanceof jQuery ? t : n(t)).addClass("rd-navbar--no-transition").removeClass(o).addClass(e),
                a[0].offsetHeight,
                a.removeClass("rd-navbar--no-transition")
            }
            ,
            a.prototype.getOption = function(t) {
                var n, o;
                for (n in this.options.responsive)
                    n <= e.innerWidth && (o = n);
                return null != this.options.responsive && null != this.options.responsive[o][t] ? this.options.responsive[o][t] : this.options[t]
            }
            ,
            a.prototype.addAdditionalClassToToggles = function(t, o, e) {
                return n(t).find("[data-rd-navbar-toggle]").each(function() {
                    var a;
                    return n(this).addClass(o),
                    a = this.getAttribute("data-rd-navbar-toggle"),
                    n(this).parents("body").find(t).find(a).addClass(e)
                })
            }
            ,
            a
        }(),
        n.fn.extend({
            RDNavbar: function(t) {
                var o;
                if (!(o = n(this)).data("RDNavbar"))
                    return o.data("RDNavbar", new a(this,t))
            }
        }),
        e.RDNavbar = a
    }(window.jQuery, document, window),
    "undefined" != typeof module && null !== module ? module.exports = window.RDNavbar : "function" == typeof define && define.amd && define(["jquery"], function() {
        "use strict";
        return window.RDNavbar
    })
}
).call(this);

/**
 * @module       UIToTop
 * @author       Matt Varone
 * @see          https://www.mattvarone.com/web-design/uitotop-jquery-plugin/
 * @license      MIT
 */
!function(o) {
    o.fn.UItoTop = function(n) {
        var e = {
            text: "",
            min: 500,
            scrollSpeed: 800,
            containerID: "ui-to-top",
            containerClass: "ui-to-top fa fa-angle-up",
            easingType: "easeIn"
        }
          , t = o.extend(e, n)
          , i = "#" + t.containerID;
        o("body").append('<a href="#" id="' + t.containerID + '" class="' + t.containerClass + '" >' + t.text + "</a>"),
        o(i).click(function() {
            return o("html, body").stop().animate({
                scrollTop: 0
            }, t.scrollSpeed, t.easingType),
            !1
        }),
        o(window).scroll(function() {
            var n = o(window).scrollTop();
            "undefined" == typeof document.body.style.maxHeight && o(i).css({
                position: "absolute",
                top: o(window).scrollTop() + o(window).height() - 50
            }),
            n > t.min ? o(i).stop(!0, !0).addClass("active") : o(i).removeClass("active")
        })
    }
}(jQuery);

/**
 * @module       Materianize Parallax
 * @see          https://materializecss.com/parallax-demo.html
 * @licesne      MIT
 */
!function(i) {
    i.fn.parallax = function() {
        var a = i(window).width();
        return this.each(function(t) {
            function n(t) {
                var n;
                n = a < 601 ? r.height() > 0 ? r.height() : r.children("img").height() : r.height() > 0 ? r.height() : 500;
                var e = r.children("img").first()
                  , l = e.height() - n
                  , o = r.offset().top + n
                  , h = r.offset().top
                  , d = i(window).scrollTop()
                  , s = window.innerHeight
                  , c = (d + s - h) / (n + s)
                  , g = Math.round(l * c);
                t && e.css("display", "block"),
                o > d && h < d + s && e.css("transform", "translate3D(-50%," + g + "px, 0)")
            }
            var r = i(this).prepend('<div class="material-parallax parallax"><img src="images/_blank.png" alt=""></div>').find(".material-parallax");
            r.children("img").first().attr("src", r.parents("[data-parallax-img]").data("parallax-img")),
            r.children("img").one("load", function() {
                n(!0)
            }).each(function() {
                this.complete && i(this).trigger("load")
            }),
            i(window).scroll(function() {
                a = i(window).width(),
                n(!1)
            }),
            i(window).resize(function() {
                a = i(window).width(),
                n(!1)
            })
        })
    }
}(jQuery);

/**
 * @module       Lightgallery
 * @author       Sachin N
 * @see          https://sachinchoolur.github.io/lightGallery/
 * @license      GPLv3
 * @version      1.6.2 - 2017-10-03
 */
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        function b(b, d) {
            if (this.el = b,
            this.$el = a(b),
            this.s = a.extend({}, c, d),
            this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.modules = {},
            this.lGalleryOn = !1,
            this.lgBusy = !1,
            this.hideBartimeout = !1,
            this.isTouch = "ontouchstart"in document.documentElement,
            this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
            this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(),
            this.$slide = "",
            this.$outer = "",
            this.init(),
            this
        }
        var c = {
            mode: "lg-slide",
            cssEasing: "ease",
            easing: "linear",
            speed: 600,
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: !1,
            iframeMaxWidth: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1
        };
        b.prototype.init = function() {
            var b = this;
            b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
            var c = window.location.hash;
            c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10),
            a("body").addClass("lg-from-hash"),
            a("body").hasClass("lg-on") || (setTimeout(function() {
                b.build(b.index)
            }),
            a("body").addClass("lg-on"))),
            b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"),
            b.index = b.s.index || 0,
            a("body").hasClass("lg-on") || setTimeout(function() {
                b.build(b.index),
                a("body").addClass("lg-on")
            })) : b.$items.on("click.lgcustom", function(c) {
                try {
                    c.preventDefault(),
                    c.preventDefault()
                } catch (a) {
                    c.returnValue = !1
                }
                b.$el.trigger("onBeforeOpen.lg"),
                b.index = b.s.index || b.$items.index(this),
                a("body").hasClass("lg-on") || (b.build(b.index),
                a("body").addClass("lg-on"))
            })
        }
        ,
        b.prototype.build = function(b) {
            var c = this;
            c.structure(),
            a.each(a.fn.lightGallery.modules, function(b) {
                c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
            }),
            c.slide(b, !1, !1, !1),
            c.s.keyPress && c.keyPress(),
            c.$items.length > 1 ? (c.arrow(),
            setTimeout(function() {
                c.enableDrag(),
                c.enableSwipe()
            }, 50),
            c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function() {
                c.$el.trigger("onSlideClick.lg")
            }),
            c.counter(),
            c.closeGallery(),
            c.$el.trigger("onAfterOpen.lg"),
            c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
                c.$outer.removeClass("lg-hide-items"),
                clearTimeout(c.hideBartimeout),
                c.hideBartimeout = setTimeout(function() {
                    c.$outer.addClass("lg-hide-items")
                }, c.s.hideBarsDelay)
            }),
            c.$outer.trigger("mousemove.lg")
        }
        ,
        b.prototype.structure = function() {
            var b, c = "", d = "", e = 0, f = "", g = this;
            for (a("body").append('<div class="lg-backdrop"></div>'),
            a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"),
            e = 0; e < this.$items.length; e++)
                c += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"),
            ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'),
            b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>",
            a("body").append(b),
            this.$outer = a(".lg-outer"),
            this.$slide = this.$outer.find(".lg-item"),
            this.s.useLeft ? (this.$outer.addClass("lg-use-left"),
            this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"),
            g.setTop(),
            a(window).on("resize.lg orientationchange.lg", function() {
                setTimeout(function() {
                    g.setTop()
                }, 100)
            }),
            this.$slide.eq(this.index).addClass("lg-current"),
            this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"),
            this.s.speed = 0),
            this.$outer.addClass(this.s.mode),
            this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"),
            this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
            this.doCss()) {
                var h = this.$outer.find(".lg-inner");
                h.css("transition-timing-function", this.s.cssEasing),
                h.css("transition-duration", this.s.speed + "ms")
            }
            setTimeout(function() {
                a(".lg-backdrop").addClass("in")
            }),
            setTimeout(function() {
                g.$outer.addClass("lg-visible")
            }, this.s.backdropDuration),
            this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
            this.prevScrollTop = a(window).scrollTop()
        }
        ,
        b.prototype.setTop = function() {
            if ("100%" !== this.s.height) {
                var b = a(window).height()
                  , c = (b - parseInt(this.s.height, 10)) / 2
                  , d = this.$outer.find(".lg");
                b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
            }
        }
        ,
        b.prototype.doCss = function() {
            var a = function() {
                var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"]
                  , b = document.documentElement
                  , c = 0;
                for (c = 0; c < a.length; c++)
                    if (a[c]in b.style)
                        return !0
            };
            return !!a()
        }
        ,
        b.prototype.isVideo = function(a, b) {
            var c;
            if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"),
            !a)
                return c ? {
                    html5: !0
                } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - https://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),
                !1);
            var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i)
              , e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i)
              , f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i)
              , g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return d ? {
                youtube: d
            } : e ? {
                vimeo: e
            } : f ? {
                dailymotion: f
            } : g ? {
                vk: g
            } : void 0
        }
        ,
        b.prototype.counter = function() {
            this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }
        ,
        b.prototype.addHtml = function(b) {
            var c, d, e = null;
            if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b),
            d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"),
            this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))),
            !c)
                if ("undefined" != typeof e && null !== e) {
                    var f = e.substring(0, 1);
                    "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
                } else
                    e = "";
            ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e),
            "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),
            this.$el.trigger("onAfterAppendSubHtml.lg", [b])
        }
        ,
        b.prototype.preload = function(a) {
            var b = 1
              , c = 1;
            for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
                this.loadContent(a + b, !1, 0);
            for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
                this.loadContent(a - c, !1, 0)
        }
        ,
        b.prototype.loadContent = function(b, c, d) {
            var e, f, g, h, i, j, k = this, l = !1, m = function(b) {
                for (var c = [], d = [], e = 0; e < b.length; e++) {
                    var g = b[e].split(" ");
                    "" === g[0] && g.splice(0, 1),
                    d.push(g[0]),
                    c.push(g[1])
                }
                for (var h = a(window).width(), i = 0; i < c.length; i++)
                    if (parseInt(c[i], 10) > h) {
                        f = d[i];
                        break
                    }
            };
            if (k.s.dynamic) {
                if (k.s.dynamicEl[b].poster && (l = !0,
                g = k.s.dynamicEl[b].poster),
                j = k.s.dynamicEl[b].html,
                f = k.s.dynamicEl[b].src,
                k.s.dynamicEl[b].responsive) {
                    var n = k.s.dynamicEl[b].responsive.split(",");
                    m(n)
                }
                h = k.s.dynamicEl[b].srcset,
                i = k.s.dynamicEl[b].sizes
            } else {
                if (k.$items.eq(b).attr("data-poster") && (l = !0,
                g = k.$items.eq(b).attr("data-poster")),
                j = k.$items.eq(b).attr("data-html"),
                f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"),
                k.$items.eq(b).attr("data-responsive")) {
                    var o = k.$items.eq(b).attr("data-responsive").split(",");
                    m(o)
                }
                h = k.$items.eq(b).attr("data-srcset"),
                i = k.$items.eq(b).attr("data-sizes")
            }
            var p = !1;
            k.s.dynamic ? k.s.dynamicEl[b].iframe && (p = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (p = !0);
            var q = k.isVideo(f, b);
            if (!k.$slide.eq(b).hasClass("lg-loaded")) {
                if (p)
                    k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
                else if (l) {
                    var r = "";
                    r = q && q.youtube ? "lg-has-youtube" : q && q.vimeo ? "lg-has-vimeo" : "lg-has-html5",
                    k.$slide.eq(b).prepend('<div class="lg-video-cont ' + r + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
                } else
                    q ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),
                    k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
                if (k.$el.trigger("onAferAppendSlide.lg", [b]),
                e = k.$slide.eq(b).find(".lg-object"),
                i && e.attr("sizes", i),
                h) {
                    e.attr("srcset", h);
                    try {
                        picturefill({
                            elements: [e[0]]
                        })
                    } catch (a) {
                        console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                    }
                }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b),
                k.$slide.eq(b).addClass("lg-loaded")
            }
            k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                var c = 0;
                d && !a("body").hasClass("lg-from-hash") && (c = d),
                setTimeout(function() {
                    k.$slide.eq(b).addClass("lg-complete"),
                    k.$el.trigger("onSlideItemLoad.lg", [b, d || 0])
                }, c)
            }),
            q && q.html5 && !l && k.$slide.eq(b).addClass("lg-complete"),
            c === !0 && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                k.preload(b)
            }))
        }
        ,
        b.prototype.slide = function(b, c, d, e) {
            var f = this.$outer.find(".lg-current").index()
              , g = this;
            if (!g.lGalleryOn || f !== b) {
                var h = this.$slide.length
                  , i = g.lGalleryOn ? this.s.speed : 0;
                if (!g.lgBusy) {
                    if (this.s.download) {
                        var j;
                        j = g.s.dynamic ? g.s.dynamicEl[b].downloadUrl !== !1 && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")),
                        j ? (a("#lg-download").attr("href", j),
                        g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
                    }
                    if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]),
                    g.lgBusy = !0,
                    clearTimeout(g.hideBartimeout),
                    ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                        g.addHtml(b)
                    }, i),
                    this.arrowDisable(b),
                    e || (b < f ? e = "prev" : b > f && (e = "next")),
                    c) {
                        this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                        var k, l;
                        h > 2 ? (k = b - 1,
                        l = b + 1,
                        0 === b && f === h - 1 ? (l = 0,
                        k = h - 1) : b === h - 1 && 0 === f && (l = 0,
                        k = h - 1)) : (k = 0,
                        l = 1),
                        "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"),
                        g.$slide.eq(b).addClass("lg-current")
                    } else
                        g.$outer.addClass("lg-no-trans"),
                        this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                        "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"),
                        this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"),
                        this.$slide.eq(f).addClass("lg-prev-slide")),
                        setTimeout(function() {
                            g.$slide.removeClass("lg-current"),
                            g.$slide.eq(b).addClass("lg-current"),
                            g.$outer.removeClass("lg-no-trans")
                        }, 50);
                    g.lGalleryOn ? (setTimeout(function() {
                        g.loadContent(b, !0, 0)
                    }, this.s.speed + 50),
                    setTimeout(function() {
                        g.lgBusy = !1,
                        g.$el.trigger("onAfterSlide.lg", [f, b, c, d])
                    }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration),
                    g.lgBusy = !1,
                    g.$el.trigger("onAfterSlide.lg", [f, b, c, d])),
                    g.lGalleryOn = !0,
                    this.s.counter && a("#lg-counter-current").text(b + 1)
                }
                g.index = b
            }
        }
        ,
        b.prototype.goToNextSlide = function(a) {
            var b = this
              , c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1),
            b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++,
            b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
            b.slide(b.index, a, !1, "next")) : c ? (b.index = 0,
            b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
            b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"),
            setTimeout(function() {
                b.$outer.removeClass("lg-right-end")
            }, 400)))
        }
        ,
        b.prototype.goToPrevSlide = function(a) {
            var b = this
              , c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1),
            b.lgBusy || (b.index > 0 ? (b.index--,
            b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
            b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1,
            b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
            b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"),
            setTimeout(function() {
                b.$outer.removeClass("lg-left-end")
            }, 400)))
        }
        ,
        b.prototype.keyPress = function() {
            var b = this;
            this.$items.length > 1 && a(window).on("keyup.lg", function(a) {
                b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(),
                b.goToPrevSlide()),
                39 === a.keyCode && (a.preventDefault(),
                b.goToNextSlide()))
            }),
            a(window).on("keydown.lg", function(a) {
                b.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(),
                b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy())
            })
        }
        ,
        b.prototype.arrow = function() {
            var a = this;
            this.$outer.find(".lg-prev").on("click.lg", function() {
                a.goToPrevSlide()
            }),
            this.$outer.find(".lg-next").on("click.lg", function() {
                a.goToNextSlide()
            })
        }
        ,
        b.prototype.arrowDisable = function(a) {
            !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"),
            a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
        }
        ,
        b.prototype.setTranslate = function(a, b, c) {
            this.s.useLeft ? a.css("left", b) : a.css({
                transform: "translate3d(" + b + "px, " + c + "px, 0px)"
            })
        }
        ,
        b.prototype.touchMove = function(b, c) {
            var d = c - b;
            Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"),
            this.setTranslate(this.$slide.eq(this.index), d, 0),
            this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0),
            this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
        }
        ,
        b.prototype.touchEnd = function(a) {
            var b = this;
            "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
            this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"),
            setTimeout(function() {
                b.$outer.removeClass("lg-dragging"),
                a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
                b.$slide.removeAttr("style")
            }),
            setTimeout(function() {
                b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
            }, b.s.speed + 100)
        }
        ,
        b.prototype.enableSwipe = function() {
            var a = this
              , b = 0
              , c = 0
              , d = !1;
            a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
                a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(),
                a.manageSwipeClass(),
                b = c.originalEvent.targetTouches[0].pageX)
            }),
            a.$slide.on("touchmove.lg", function(e) {
                a.$outer.hasClass("lg-zoomed") || (e.preventDefault(),
                c = e.originalEvent.targetTouches[0].pageX,
                a.touchMove(b, c),
                d = !0)
            }),
            a.$slide.on("touchend.lg", function() {
                a.$outer.hasClass("lg-zoomed") || (d ? (d = !1,
                a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
            }))
        }
        ,
        b.prototype.enableDrag = function() {
            var b = this
              , c = 0
              , d = 0
              , e = !1
              , f = !1;
            b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function(d) {
                b.$outer.hasClass("lg-zoomed") || (a(d.target).hasClass("lg-object") || a(d.target).hasClass("lg-video-play")) && (d.preventDefault(),
                b.lgBusy || (b.manageSwipeClass(),
                c = d.pageX,
                e = !0,
                b.$outer.scrollLeft += 1,
                b.$outer.scrollLeft -= 1,
                b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
                b.$el.trigger("onDragstart.lg")))
            }),
            a(window).on("mousemove.lg", function(a) {
                e && (f = !0,
                d = a.pageX,
                b.touchMove(c, d),
                b.$el.trigger("onDragmove.lg"))
            }),
            a(window).on("mouseup.lg", function(g) {
                f ? (f = !1,
                b.touchEnd(d - c),
                b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"),
                e && (e = !1,
                b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
            }))
        }
        ,
        b.prototype.manageSwipeClass = function() {
            var a = this.index + 1
              , b = this.index - 1;
            this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)),
            this.$slide.removeClass("lg-next-slide lg-prev-slide"),
            b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
            this.$slide.eq(a).addClass("lg-next-slide")
        }
        ,
        b.prototype.mousewheel = function() {
            var a = this;
            a.$outer.on("mousewheel.lg", function(b) {
                b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
                b.preventDefault())
            })
        }
        ,
        b.prototype.closeGallery = function() {
            var b = this
              , c = !1;
            this.$outer.find(".lg-close").on("click.lg", function() {
                b.destroy()
            }),
            b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
                c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
            }),
            b.$outer.on("mouseup.lg", function(d) {
                (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
            }))
        }
        ,
        b.prototype.destroy = function(b) {
            var c = this;
            b || (c.$el.trigger("onBeforeClose.lg"),
            a(window).scrollTop(c.prevScrollTop)),
            b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            a.removeData(c.el, "lightGallery")),
            this.$el.off(".lg.tm"),
            a.each(a.fn.lightGallery.modules, function(a) {
                c.modules[a] && c.modules[a].destroy()
            }),
            this.lGalleryOn = !1,
            clearTimeout(c.hideBartimeout),
            this.hideBartimeout = !1,
            a(window).off(".lg"),
            a("body").removeClass("lg-on lg-from-hash"),
            c.$outer && c.$outer.removeClass("lg-visible"),
            a(".lg-backdrop").removeClass("in"),
            setTimeout(function() {
                c.$outer && c.$outer.remove(),
                a(".lg-backdrop").remove(),
                b || c.$el.trigger("onCloseAfter.lg")
            }, c.s.backdropDuration + 50)
        }
        ,
        a.fn.lightGallery = function(c) {
            return this.each(function() {
                if (a.data(this, "lightGallery"))
                    try {
                        a(this).data("lightGallery").init()
                    } catch (a) {
                        console.error("lightGallery has not initiated properly")
                    }
                else
                    a.data(this, "lightGallery", new b(this,c))
            })
        }
        ,
        a.fn.lightGallery.modules = {}
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            autoplay: !1,
            pause: 5e3,
            progressBar: !0,
            fourceAutoplay: !1,
            autoplayControls: !0,
            appendAutoplayControlsTo: ".lg-toolbar"
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s),
            this.interval = !1,
            this.fromAuto = !0,
            this.canceledOnTouch = !1,
            this.fourceAutoplayTemp = this.core.s.fourceAutoplay,
            this.core.doCss() || (this.core.s.progressBar = !1),
            this.init(),
            this)
        };
        c.prototype.init = function() {
            var a = this;
            a.core.s.autoplayControls && a.controls(),
            a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),
            a.progress(),
            a.core.s.autoplay && a.$el.one("onSlideItemLoad.lg.tm", function() {
                a.startlAuto()
            }),
            a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
                a.interval && (a.cancelAuto(),
                a.canceledOnTouch = !0)
            }),
            a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
                !a.interval && a.canceledOnTouch && (a.startlAuto(),
                a.canceledOnTouch = !1)
            })
        }
        ,
        c.prototype.progress = function() {
            var a, b, c = this;
            c.$el.on("onBeforeSlide.lg.tm", function() {
                c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find(".lg-progress-bar"),
                b = c.core.$outer.find(".lg-progress"),
                c.interval && (b.removeAttr("style"),
                a.removeClass("lg-start"),
                setTimeout(function() {
                    b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"),
                    a.addClass("lg-start")
                }, 20))),
                c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
                c.fromAuto = !1
            })
        }
        ,
        c.prototype.controls = function() {
            var b = this
              , c = '<span class="lg-autoplay-button lg-icon"></span>';
            a(this.core.s.appendAutoplayControlsTo).append(c),
            b.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
                a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(),
                b.core.s.fourceAutoplay = !1) : b.interval || (b.startlAuto(),
                b.core.s.fourceAutoplay = b.fourceAutoplayTemp)
            })
        }
        ,
        c.prototype.startlAuto = function() {
            var a = this;
            a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"),
            a.core.$outer.addClass("lg-show-autoplay"),
            a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            a.interval = setInterval(function() {
                a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0,
                a.fromAuto = !0,
                a.core.slide(a.core.index, !1, !1, "next")
            }, a.core.s.speed + a.core.s.pause)
        }
        ,
        c.prototype.cancelAuto = function() {
            clearInterval(this.interval),
            this.interval = !1,
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
        }
        ,
        c.prototype.destroy = function() {
            this.cancelAuto(),
            this.core.$outer.find(".lg-progress-bar").remove()
        }
        ,
        a.fn.lightGallery.modules.autoplay = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            fullScreen: !0
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            this.core.s = a.extend({}, b, this.core.s),
            this.init(),
            this
        };
        c.prototype.init = function() {
            var a = "";
            if (this.core.s.fullScreen) {
                if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled))
                    return;
                a = '<span class="lg-fullscreen lg-icon"></span>',
                this.core.$outer.find(".lg-toolbar").append(a),
                this.fullScreen()
            }
        }
        ,
        c.prototype.requestFullscreen = function() {
            var a = document.documentElement;
            a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
        }
        ,
        c.prototype.exitFullscreen = function() {
            window.fullScreen ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : null
        }
        ,
        c.prototype.fullScreen = function() {
            var b = this;
            a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
                b.core.$outer.toggleClass("lg-fullscreen-on")
            }),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
                document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b.exitFullscreen() : b.requestFullscreen()
            })
        }
        ,
        c.prototype.destroy = function() {
            this.exitFullscreen(),
            a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
        }
        ,
        a.fn.lightGallery.modules.fullscreen = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            pager: !1
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            this.core.s = a.extend({}, b, this.core.s),
            this.core.s.pager && this.core.$items.length > 1 && this.init(),
            this
        };
        c.prototype.init = function() {
            var b, c, d, e = this, f = "";
            if (e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),
            e.core.s.dynamic)
                for (var g = 0; g < e.core.s.dynamicEl.length; g++)
                    f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
            else
                e.core.$items.each(function() {
                    f += e.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>'
                });
            c = e.core.$outer.find(".lg-pager-outer"),
            c.html(f),
            b = e.core.$outer.find(".lg-pager-cont"),
            b.on("click.lg touchend.lg", function() {
                var b = a(this);
                e.core.index = b.index(),
                e.core.slide(e.core.index, !1, !0, !1)
            }),
            c.on("mouseover.lg", function() {
                clearTimeout(d),
                c.addClass("lg-pager-hover")
            }),
            c.on("mouseout.lg", function() {
                d = setTimeout(function() {
                    c.removeClass("lg-pager-hover")
                })
            }),
            e.core.$el.on("onBeforeSlide.lg.tm", function(a, c, d) {
                b.removeClass("lg-pager-active"),
                b.eq(d).addClass("lg-pager-active")
            })
        }
        ,
        c.prototype.destroy = function() {}
        ,
        a.fn.lightGallery.modules.pager = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            thumbnail: !0,
            animateThumb: !0,
            currentPagerPosition: "middle",
            thumbWidth: 100,
            thumbHeight: "80px",
            thumbContHeight: 100,
            thumbMargin: 5,
            exThumbImage: !1,
            showThumbByDefault: !0,
            toogleThumb: !0,
            pullCaptionUp: !0,
            enableThumbDrag: !0,
            enableThumbSwipe: !0,
            swipeThreshold: 50,
            loadYoutubeThumbnail: !0,
            youtubeThumbSize: 1,
            loadVimeoThumbnail: !0,
            vimeoThumbSize: "thumbnail_small",
            loadDailymotionThumbnail: !0
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.core.s = a.extend({}, b, this.core.s),
            this.$el = a(c),
            this.$thumbOuter = null,
            this.thumbOuterWidth = 0,
            this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin),
            this.thumbIndex = this.core.index,
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            this.left = 0,
            this.init(),
            this
        };
        c.prototype.init = function() {
            var a = this;
            this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() {
                a.core.$outer.addClass("lg-thumb-open")
            }, 700),
            this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"),
            this.build(),
            this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
            this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
            this.thumbClickable = !1) : this.thumbClickable = !0,
            this.toogle(),
            this.thumbkeyPress())
        }
        ,
        c.prototype.build = function() {
            function b(a, b, c) {
                var g, h = d.core.isVideo(a, c) || {}, i = "";
                h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = "//i.vimeocdn.com/video/error_" + f + ".jpg",
                i = h.vimeo[1]) : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : g = b,
                e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>',
                i = ""
            }
            var c, d = this, e = "", f = "", g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
            switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
                f = "640";
                break;
            case "thumbnail_medium":
                f = "200x150";
                break;
            case "thumbnail_small":
                f = "100x75"
            }
            if (d.core.$outer.addClass("lg-has-thumb"),
            d.core.$outer.find(".lg").append(g),
            d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"),
            d.thumbOuterWidth = d.$thumbOuter.width(),
            d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({
                width: d.thumbTotalWidth + "px",
                position: "relative"
            }),
            this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"),
            d.core.s.dynamic)
                for (var h = 0; h < d.core.s.dynamicEl.length; h++)
                    b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
            else
                d.core.$items.each(function(c) {
                    d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c)
                });
            d.core.$outer.find(".lg-thumb").html(e),
            c = d.core.$outer.find(".lg-thumb-item"),
            c.each(function() {
                var b = a(this)
                  , c = b.attr("data-vimeo-id");
                c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", {
                    format: "json"
                }, function(a) {
                    b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize])
                })
            }),
            c.eq(d.core.index).addClass("active"),
            d.core.$el.on("onBeforeSlide.lg.tm", function() {
                c.removeClass("active"),
                c.eq(d.core.index).addClass("active")
            }),
            c.on("click.lg touchend.lg", function() {
                var b = a(this);
                setTimeout(function() {
                    (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(),
                    d.core.slide(d.core.index, !1, !0, !1))
                }, 50)
            }),
            d.core.$el.on("onBeforeSlide.lg.tm", function() {
                d.animateThumb(d.core.index)
            }),
            a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
                setTimeout(function() {
                    d.animateThumb(d.core.index),
                    d.thumbOuterWidth = d.$thumbOuter.width()
                }, 200)
            })
        }
        ,
        c.prototype.setTranslate = function(a) {
            this.core.$outer.find(".lg-thumb").css({
                transform: "translate3d(-" + a + "px, 0px, 0px)"
            })
        }
        ,
        c.prototype.animateThumb = function(a) {
            var b = this.core.$outer.find(".lg-thumb");
            if (this.core.s.animateThumb) {
                var c;
                switch (this.core.s.currentPagerPosition) {
                case "left":
                    c = 0;
                    break;
                case "middle":
                    c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case "right":
                    c = this.thumbOuterWidth - this.core.s.thumbWidth
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c,
                this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
                this.left < 0 && (this.left = 0),
                this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"),
                this.core.doCss() || b.animate({
                    left: -this.left + "px"
                }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"),
                this.setTranslate(this.left)
            }
        }
        ,
        c.prototype.enableThumbDrag = function() {
            var b = this
              , c = 0
              , d = 0
              , e = !1
              , f = !1
              , g = 0;
            b.$thumbOuter.addClass("lg-grab"),
            b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(a) {
                b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(),
                c = a.pageX,
                e = !0,
                b.core.$outer.scrollLeft += 1,
                b.core.$outer.scrollLeft -= 1,
                b.thumbClickable = !1,
                b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
            }),
            a(window).on("mousemove.lg.thumb", function(a) {
                e && (g = b.left,
                f = !0,
                d = a.pageX,
                b.$thumbOuter.addClass("lg-dragging"),
                g -= d - c,
                g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth),
                g < 0 && (g = 0),
                b.setTranslate(g))
            }),
            a(window).on("mouseup.lg.thumb", function() {
                f ? (f = !1,
                b.$thumbOuter.removeClass("lg-dragging"),
                b.left = g,
                Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : b.thumbClickable = !0,
                e && (e = !1,
                b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
            })
        }
        ,
        c.prototype.enableThumbSwipe = function() {
            var a = this
              , b = 0
              , c = 0
              , d = !1
              , e = 0;
            a.core.$outer.find(".lg-thumb").on("touchstart.lg", function(c) {
                a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(),
                b = c.originalEvent.targetTouches[0].pageX,
                a.thumbClickable = !1)
            }),
            a.core.$outer.find(".lg-thumb").on("touchmove.lg", function(f) {
                a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(),
                c = f.originalEvent.targetTouches[0].pageX,
                d = !0,
                a.$thumbOuter.addClass("lg-dragging"),
                e = a.left,
                e -= c - b,
                e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth),
                e < 0 && (e = 0),
                a.setTranslate(e))
            }),
            a.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
                a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1,
                a.$thumbOuter.removeClass("lg-dragging"),
                Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0),
                a.left = e) : a.thumbClickable = !0
            })
        }
        ,
        c.prototype.toogle = function() {
            var a = this;
            a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"),
            a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),
            a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
                a.core.$outer.toggleClass("lg-thumb-open")
            }))
        }
        ,
        c.prototype.thumbkeyPress = function() {
            var b = this;
            a(window).on("keydown.lg.thumb", function(a) {
                38 === a.keyCode ? (a.preventDefault(),
                b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(),
                b.core.$outer.removeClass("lg-thumb-open"))
            })
        }
        ,
        c.prototype.destroy = function() {
            this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"))
        }
        ,
        a.fn.lightGallery.modules.Thumbnail = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            videoMaxWidth: "855px",
            youtubePlayerParams: !1,
            vimeoPlayerParams: !1,
            dailymotionPlayerParams: !1,
            vkPlayerParams: !1,
            videojs: !1,
            videojsOptions: {}
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            this.core.s = a.extend({}, b, this.core.s),
            this.videoLoaded = !1,
            this.init(),
            this
        };
        c.prototype.init = function() {
            var b = this;
            b.core.$el.on("hasVideo.lg.tm", function(a, c, d, e) {
                if (b.core.$slide.eq(c).find(".lg-video").append(b.loadVideo(d, "lg-object", !0, c, e)),
                e)
                    if (b.core.s.videojs)
                        try {
                            videojs(b.core.$slide.eq(c).find(".lg-html5").get(0), b.core.s.videojsOptions, function() {
                                b.videoLoaded || this.play()
                            })
                        } catch (a) {
                            console.error("Make sure you have included videojs")
                        }
                    else
                        b.videoLoaded || b.core.$slide.eq(c).find(".lg-html5").get(0).play()
            }),
            b.core.$el.on("onAferAppendSlide.lg.tm", function(a, c) {
                var d = b.core.$slide.eq(c).find(".lg-video-cont");
                d.hasClass("lg-has-iframe") || (d.css("max-width", b.core.s.videoMaxWidth),
                b.videoLoaded = !0)
            });
            var c = function(a) {
                if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible"))
                    if (a.hasClass("lg-has-video")) {
                        var c = a.find(".lg-youtube").get(0)
                          , d = a.find(".lg-vimeo").get(0)
                          , e = a.find(".lg-dailymotion").get(0)
                          , f = a.find(".lg-html5").get(0);
                        if (c)
                            c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                        else if (d)
                            try {
                                $f(d).api("play")
                            } catch (a) {
                                console.error("Make sure you have included froogaloop2 js")
                            }
                        else if (e)
                            e.contentWindow.postMessage("play", "*");
                        else if (f)
                            if (b.core.s.videojs)
                                try {
                                    videojs(f).play()
                                } catch (a) {
                                    console.error("Make sure you have included videojs")
                                }
                            else
                                f.play();
                        a.addClass("lg-video-playing")
                    } else {
                        a.addClass("lg-video-playing lg-has-video");
                        var g, h, i = function(c, d) {
                            if (a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)),
                            d)
                                if (b.core.s.videojs)
                                    try {
                                        videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function() {
                                            this.play()
                                        })
                                    } catch (a) {
                                        console.error("Make sure you have included videojs")
                                    }
                                else
                                    b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()
                        };
                        b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src,
                        h = b.core.s.dynamicEl[b.core.index].html,
                        i(g, h)) : (g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src"),
                        h = b.core.$items.eq(b.core.index).attr("data-html"),
                        i(g, h));
                        var j = a.find(".lg-object");
                        a.find(".lg-video").append(j),
                        a.find(".lg-video-object").hasClass("lg-html5") || (a.removeClass("lg-complete"),
                        a.find(".lg-video-object").on("load.lg error.lg", function() {
                            a.addClass("lg-complete")
                        }))
                    }
            };
            b.core.doCss() && b.core.$items.length > 1 && (b.core.s.enableSwipe || b.core.s.enableDrag) ? b.core.$el.on("onSlideClick.lg.tm", function() {
                var a = b.core.$slide.eq(b.core.index);
                c(a)
            }) : b.core.$slide.on("click.lg", function() {
                c(a(this))
            }),
            b.core.$el.on("onBeforeSlide.lg.tm", function(c, d, e) {
                var f = b.core.$slide.eq(d)
                  , g = f.find(".lg-youtube").get(0)
                  , h = f.find(".lg-vimeo").get(0)
                  , i = f.find(".lg-dailymotion").get(0)
                  , j = f.find(".lg-vk").get(0)
                  , k = f.find(".lg-html5").get(0);
                if (g)
                    g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                else if (h)
                    try {
                        $f(h).api("pause")
                    } catch (a) {
                        console.error("Make sure you have included froogaloop2 js")
                    }
                else if (i)
                    i.contentWindow.postMessage("pause", "*");
                else if (k)
                    if (b.core.s.videojs)
                        try {
                            videojs(k).pause()
                        } catch (a) {
                            console.error("Make sure you have included videojs")
                        }
                    else
                        k.pause();
                j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
                var l;
                l = b.core.s.dynamic ? b.core.s.dynamicEl[e].src : b.core.$items.eq(e).attr("href") || b.core.$items.eq(e).attr("data-src");
                var m = b.core.isVideo(l, e) || {};
                (m.youtube || m.vimeo || m.dailymotion || m.vk) && b.core.$outer.addClass("lg-hide-download")
            }),
            b.core.$el.on("onAfterSlide.lg.tm", function(a, c) {
                b.core.$slide.eq(c).removeClass("lg-video-playing")
            })
        }
        ,
        c.prototype.loadVideo = function(b, c, d, e, f) {
            var g = ""
              , h = 1
              , i = ""
              , j = this.core.isVideo(b, e) || {};
            if (d && (h = this.videoLoaded ? 0 : 1),
            j.youtube)
                i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1",
                this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)),
                g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';
            else if (j.vimeo)
                i = "?autoplay=" + h + "&api=1",
                this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)),
                g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
            else if (j.dailymotion)
                i = "?wmode=opaque&autoplay=" + h + "&api=postMessage",
                this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)),
                g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';
            else if (j.html5) {
                var k = f.substring(0, 1);
                "." !== k && "#" !== k || (f = a(f).html()),
                g = f
            } else
                j.vk && (i = "&autoplay=" + h,
                this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)),
                g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="https://vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
            return g
        }
        ,
        c.prototype.destroy = function() {
            this.videoLoaded = !1
        }
        ,
        a.fn.lightGallery.modules.video = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = function() {
            var a = !1
              , b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return b && parseInt(b[2], 10) < 54 && (a = !0),
            a
        }
          , c = {
            scale: 1,
            zoom: !0,
            actualSize: !0,
            enableZoomAfter: 300,
            useLeftForZoom: b()
        }
          , d = function(b) {
            return this.core = a(b).data("lightGallery"),
            this.core.s = a.extend({}, c, this.core.s),
            this.core.s.zoom && this.core.doCss() && (this.init(),
            this.zoomabletimeout = !1,
            this.pageX = a(window).width() / 2,
            this.pageY = a(window).height() / 2 + a(window).scrollTop()),
            this
        };
        d.prototype.init = function() {
            var b = this
              , c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
            b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
            b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"),
            this.core.$outer.find(".lg-toolbar").append(c),
            b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c, d, e) {
                var f = b.core.s.enableZoomAfter + e;
                a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"),
                b.zoomabletimeout = setTimeout(function() {
                    b.core.$slide.eq(d).addClass("lg-zoomable")
                }, f + 30)
            });
            var d = 1
              , e = function(c) {
                var d, e, f = b.core.$outer.find(".lg-current .lg-image"), g = (a(window).width() - f.prop("offsetWidth")) / 2, h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
                d = b.pageX - g,
                e = b.pageY - h;
                var i = (c - 1) * d
                  , j = (c - 1) * e;
                f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c),
                b.core.s.useLeftForZoom ? f.parent().css({
                    left: -i + "px",
                    top: -j + "px"
                }).attr("data-x", i).attr("data-y", j) : f.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
            }
              , f = function() {
                d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(),
                d < 1 && (d = 1),
                e(d)
            }
              , g = function(c, e, g, h) {
                var i, j = e.prop("offsetWidth");
                i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
                var k;
                b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j,
                d = k || 2),
                h ? (b.pageX = a(window).width() / 2,
                b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX,
                b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY),
                f(),
                setTimeout(function() {
                    b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }, 10)
            }
              , h = !1;
            b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, c) {
                var d = b.core.$slide.eq(c).find(".lg-image");
                d.on("dblclick", function(a) {
                    g(a, d, c)
                }),
                d.on("touchstart", function(a) {
                    h ? (clearTimeout(h),
                    h = null,
                    g(a, d, c)) : h = setTimeout(function() {
                        h = null
                    }, 300),
                    a.preventDefault()
                })
            }),
            a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
                b.pageX = a(window).width() / 2,
                b.pageY = a(window).height() / 2 + a(window).scrollTop(),
                e(d)
            }),
            a("#lg-zoom-out").on("click.lg", function() {
                b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale,
                f())
            }),
            a("#lg-zoom-in").on("click.lg", function() {
                b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale,
                f())
            }),
            a("#lg-actual-size").on("click.lg", function(a) {
                g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0)
            }),
            b.core.$el.on("onBeforeSlide.lg.tm", function() {
                d = 1,
                b.resetZoom()
            }),
            b.zoomDrag(),
            b.zoomSwipe()
        }
        ,
        d.prototype.resetZoom = function() {
            this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            this.pageX = a(window).width() / 2,
            this.pageY = a(window).height() / 2 + a(window).scrollTop()
        }
        ,
        d.prototype.zoomSwipe = function() {
            var a = this
              , b = {}
              , c = {}
              , d = !1
              , e = !1
              , f = !1;
            a.core.$slide.on("touchstart.lg", function(c) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                    f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(),
                    e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(),
                    (e || f) && (c.preventDefault(),
                    b = {
                        x: c.originalEvent.targetTouches[0].pageX,
                        y: c.originalEvent.targetTouches[0].pageY
                    })
                }
            }),
            a.core.$slide.on("touchmove.lg", function(g) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                    g.preventDefault(),
                    d = !0,
                    c = {
                        x: g.originalEvent.targetTouches[0].pageX,
                        y: g.originalEvent.targetTouches[0].pageY
                    },
                    a.core.$outer.addClass("lg-zoom-dragging"),
                    i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")),
                    h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")),
                    (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({
                        left: h + "px",
                        top: i + "px"
                    }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
                }
            }),
            a.core.$slide.on("touchend.lg", function() {
                a.core.$outer.hasClass("lg-zoomed") && d && (d = !1,
                a.core.$outer.removeClass("lg-zoom-dragging"),
                a.touchendZoom(b, c, e, f))
            })
        }
        ,
        d.prototype.zoomDrag = function() {
            var b = this
              , c = {}
              , d = {}
              , e = !1
              , f = !1
              , g = !1
              , h = !1;
            b.core.$slide.on("mousedown.lg.zoom", function(d) {
                var f = b.core.$slide.eq(b.core.index).find(".lg-object");
                h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(),
                g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(),
                b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(),
                c = {
                    x: d.pageX,
                    y: d.pageY
                },
                e = !0,
                b.core.$outer.scrollLeft += 1,
                b.core.$outer.scrollLeft -= 1,
                b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
            }),
            a(window).on("mousemove.lg.zoom", function(a) {
                if (e) {
                    var i, j, k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                    f = !0,
                    d = {
                        x: a.pageX,
                        y: a.pageY
                    },
                    b.core.$outer.addClass("lg-zoom-dragging"),
                    j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")),
                    i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")),
                    b.core.s.useLeftForZoom ? k.css({
                        left: i + "px",
                        top: j + "px"
                    }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)")
                }
            }),
            a(window).on("mouseup.lg.zoom", function(a) {
                e && (e = !1,
                b.core.$outer.removeClass("lg-zoom-dragging"),
                !f || c.x === d.x && c.y === d.y || (d = {
                    x: a.pageX,
                    y: a.pageY
                },
                b.touchendZoom(c, d, g, h)),
                f = !1),
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
            })
        }
        ,
        d.prototype.touchendZoom = function(a, b, c, d) {
            var e = this
              , f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap")
              , g = e.core.$slide.eq(e.core.index).find(".lg-object")
              , h = -Math.abs(f.attr("data-x")) + (b.x - a.x)
              , i = -Math.abs(f.attr("data-y")) + (b.y - a.y)
              , j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2
              , k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j)
              , l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2
              , m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
            (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)),
            c && (h <= -m ? h = -m : h >= -l && (h = -l)),
            d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")),
            c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")),
            e.core.s.useLeftForZoom ? f.css({
                left: h + "px",
                top: i + "px"
            }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
        }
        ,
        d.prototype.destroy = function() {
            var b = this;
            b.core.$el.off(".lg.zoom"),
            a(window).off(".lg.zoom"),
            b.core.$slide.off(".lg.zoom"),
            b.core.$el.off(".lg.tm.zoom"),
            b.resetZoom(),
            clearTimeout(b.zoomabletimeout),
            b.zoomabletimeout = !1
        }
        ,
        a.fn.lightGallery.modules.zoom = d
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            hash: !0
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.core.s = a.extend({}, b, this.core.s),
            this.core.s.hash && (this.oldHash = window.location.hash,
            this.init()),
            this
        };
        c.prototype.init = function() {
            var b, c = this;
            c.core.$el.on("onAfterSlide.lg.tm", function(a, b, d) {
                history.replaceState ? history.replaceState(null, null, "#lg=" + c.core.s.galleryId + "&slide=" + d) : window.location.hash = "lg=" + c.core.s.galleryId + "&slide=" + d
            }),
            a(window).on("hashchange.lg.hash", function() {
                b = window.location.hash;
                var a = parseInt(b.split("&slide=")[1], 10);
                b.indexOf("lg=" + c.core.s.galleryId) > -1 ? c.core.slide(a, !1, !1) : c.core.lGalleryOn && c.core.destroy()
            })
        }
        ,
        c.prototype.destroy = function() {
            this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "",
            this.core.$el.off(".lg.hash"))
        }
        ,
        a.fn.lightGallery.modules.hash = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            share: !0,
            facebook: !0,
            facebookDropdownText: "Facebook",
            twitter: !0,
            twitterDropdownText: "Twitter",
            googlePlus: !0,
            googlePlusDropdownText: "GooglePlus",
            pinterest: !0,
            pinterestDropdownText: "Pinterest"
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.core.s = a.extend({}, b, this.core.s),
            this.core.s.share && this.init(),
            this
        };
        c.prototype.init = function() {
            var b = this
              , c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
            c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "",
            c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "",
            c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "",
            c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "",
            c += "</ul></span>",
            this.core.$outer.find(".lg-toolbar").append(c),
            this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'),
            a("#lg-share").on("click.lg", function() {
                b.core.$outer.toggleClass("lg-dropdown-active")
            }),
            a("#lg-dropdown-overlay").on("click.lg", function() {
                b.core.$outer.removeClass("lg-dropdown-active")
            }),
            b.core.$el.on("onAfterSlide.lg.tm", function(c, d, e) {
                setTimeout(function() {
                    a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b.getSahreProps(e, "facebookShareUrl") || window.location.href)),
                    a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b.getSahreProps(e, "tweetText") + "&url=" + encodeURIComponent(b.getSahreProps(e, "twitterShareUrl") || window.location.href)),
                    a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b.getSahreProps(e, "googleplusShareUrl") || window.location.href)),
                    a("#lg-share-pinterest").attr("href", "https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(b.getSahreProps(e, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(b.getSahreProps(e, "src")) + "&description=" + b.getSahreProps(e, "pinterestText"))
                }, 100)
            })
        }
        ,
        c.prototype.getSahreProps = function(a, b) {
            var c = "";
            if (this.core.s.dynamic)
                c = this.core.s.dynamicEl[a][b];
            else {
                var d = this.core.$items.eq(a).attr("href")
                  , e = this.core.$items.eq(a).data(b);
                c = "src" === b ? d || e : e
            }
            return c
        }
        ,
        c.prototype.destroy = function() {}
        ,
        a.fn.lightGallery.modules.share = c
    }()
});

/**
 * @module       WOW
 * @author       Matthieu Aussaguel
 * @see          https://mynameismatthieu.com/WOW/
 * @license      MIT
 * @version      1.1.3
 */
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);

/**
 * @module       Mousewheel
 * @author       jQuery Foundation and other contributors
 * @see          https://github.com/jquery/jquery-mousewheel
 * @license      MIT
 * @version      3.1.13
 * @requires     module:jQuery
 */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event
          , h = i.call(arguments, 1)
          , j = 0
          , l = 0
          , m = 0
          , n = 0
          , o = 0
          , p = 0;
        if (b = a.event.fix(g),
        b.type = "mousewheel",
        "detail"in g && (m = -1 * g.detail),
        "wheelDelta"in g && (m = g.wheelDelta),
        "wheelDeltaY"in g && (m = g.wheelDeltaY),
        "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
        "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
        m = 0),
        j = 0 === m ? l : m,
        "deltaY"in g && (m = -1 * g.deltaY,
        j = m),
        "deltaX"in g && (l = g.deltaX,
        0 === m && (j = -1 * l)),
        0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q,
                m *= q,
                l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r,
                m *= r,
                l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)),
            (!f || f > n) && (f = n,
            d(g, n) && (f /= 40)),
            d(g, n) && (j /= 40,
            l /= 40,
            m /= 40),
            j = Math[j >= 1 ? "floor" : "ceil"](j / f),
            l = Math[l >= 1 ? "floor" : "ceil"](l / f),
            m = Math[m >= 1 ? "floor" : "ceil"](m / f),
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left,
                p = b.clientY - s.top
            }
            return b.deltaX = l,
            b.deltaY = m,
            b.deltaFactor = f,
            b.offsetX = o,
            b.offsetY = p,
            b.deltaMode = 0,
            h.unshift(b, j, l, m),
            e && clearTimeout(e),
            e = setTimeout(c, 200),
            (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c; )
                    this.addEventListener(h[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c; )
                    this.removeEventListener(h[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"),
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)
              , d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")),
            parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event
          , h = i.call(arguments, 1)
          , j = 0
          , l = 0
          , m = 0
          , n = 0
          , o = 0
          , p = 0;
        if (b = a.event.fix(g),
        b.type = "mousewheel",
        "detail"in g && (m = -1 * g.detail),
        "wheelDelta"in g && (m = g.wheelDelta),
        "wheelDeltaY"in g && (m = g.wheelDeltaY),
        "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
        "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
        m = 0),
        j = 0 === m ? l : m,
        "deltaY"in g && (m = -1 * g.deltaY,
        j = m),
        "deltaX"in g && (l = g.deltaX,
        0 === m && (j = -1 * l)),
        0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q,
                m *= q,
                l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r,
                m *= r,
                l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)),
            (!f || f > n) && (f = n,
            d(g, n) && (f /= 40)),
            d(g, n) && (j /= 40,
            l /= 40,
            m /= 40),
            j = Math[j >= 1 ? "floor" : "ceil"](j / f),
            l = Math[l >= 1 ? "floor" : "ceil"](l / f),
            m = Math[m >= 1 ? "floor" : "ceil"](m / f),
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left,
                p = b.clientY - s.top
            }
            return b.deltaX = l,
            b.deltaY = m,
            b.deltaFactor = f,
            b.offsetX = o,
            b.offsetY = p,
            b.deltaMode = 0,
            h.unshift(b, j, l, m),
            e && clearTimeout(e),
            e = setTimeout(c, 200),
            (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c; )
                    this.addEventListener(h[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c; )
                    this.removeEventListener(h[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"),
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)
              , d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")),
            parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});

/**
 * @module       PageTransition
 * @author       Roman Kravchuk (JeremyLuis)
 * @license      MIT
 * @version      1.1.4
 * @description  Smooth transition between pages
 * @requires     module:jQuery
 */
function pageTransition(t) {
    t = t || {},
    t.target = t.target || null,
    t.delay = t.delay || 500,
    t.duration = t.duration || 1e3,
    t.classIn = t.classIn || null,
    t.classOut = t.classOut || null,
    t.classActive = t.classActive || null,
    t.onReady = t.onReady || null,
    t.onTransitionStart = t.onTransitionStart || null,
    t.onTransitionEnd = t.onTransitionEnd || null,
    t.conditions = t.conditions || function(t, n) {
        return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(n)
    }
    ,
    t.target && (setTimeout(function() {
        t.onReady && t.onReady(t),
        t.classIn && t.target.classList.add(t.classIn),
        t.classActive && t.target.classList.add(t.classActive),
        t.duration && (t.target.style.animationDuration = t.duration + "ms"),
        t.target.addEventListener("animationstart", function() {
            setTimeout(function() {
                t.classIn && t.target.classList.remove(t.classIn),
                t.onTransitionEnd && t.onTransitionEnd(t)
            }, t.duration)
        })
    }, t.delay),
    $("a").click(function(n) {
        var a = n.currentTarget.getAttribute("href");
        if (t.conditions(n, a)) {
            var s = this.href;
            n.preventDefault(),
            t.onTransitionStart && t.onTransitionStart(t),
            t.classIn && t.target.classList.remove(t.classIn),
            t.classOut && t.target.classList.add(t.classOut),
            setTimeout(function() {
                window.location = s,
                /firefox/i.test(navigator.userAgent) && setTimeout(function() {
                    t.onReady && t.onReady(t),
                    t.classOut && t.target.classList.remove(t.classOut)
                }, 1e3),
                setTimeout(function() {
                    /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && (t.onReady && t.onReady(t),
                    t.classOut && t.target.classList.remove(t.classOut))
                }, 1e3)
            }, t.duration)
        }
    }))
}

/**
 * @module  αUtil
 * @version v1.0.1
 * @desc    Service functions for α-modules
 * @author  OXAYAZA {@link https://github.com/OXAYAZA}
 * @license CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @see     {@link https://www.linkedin.com/in/%D1%8E%D1%80%D0%B8%D0%B9-%D0%B1%D0%B0%D0%B7%D0%B0%D0%B5%D0%B2-166479165/}
 */
function Util() {}
Util.inViewport = function(element, cb) {
    var rect = element.getBoundingClientRect()
      , inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (cb instanceof Function && inView)
        cb();
    return inView
}
;
Util.merge = function(sources, options) {
    options = options || {};
    var initial = {};
    for (var s = 0; s < sources.length; s++) {
        var source = sources[s];
        if (!source)
            continue;
        for (var key in source) {
            if (options.except && !options.except.indexOf(key)) {
                continue
            } else if (source[key]instanceof Object && !(source[key]instanceof Node) && !(source[key]instanceof Function)) {
                initial[key] = Util.merge([initial[key], source[key]], options)
            } else if (options.skipNull && source[key] === null) {
                continue
            } else {
                initial[key] = source[key]
            }
        }
    }
    return initial
}
;
Util.uId = function(length) {
    var uId = "";
    for (var i = 0; i < length; i++) {
        uId += String.fromCharCode(97 + Math.random() * 25)
    }
    return uId
}
;

/**
 * @module   αCounter
 * @version  v0.1.1
 * @author   OXAYAZA {@link https://github.com/OXAYAZA}
 * @license  CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @requires module:αUtil
 * @see      {@link https://oxayaza.page.link/gitHub_aCounters}
 */
function aCounter(data) {
    function Counter(data) {
        if (!data || !data.node)
            throw Error('Missing required aCounter parameters (node).');
        this.params = Util.merge([this.defaults, data]);
        this.params.node.counter = this;
        if (!this.params.to) {
            try {
                this.params.to = parseInt(this.params.node.textContent, 10)
            } catch (error) {
                throw Error('Unable to get aCounter value')
            }
        }
        this.run = this.run.bind(this);
        return this
    }
    Counter.prototype.internal = {
        intervalId: null,
        value: 0,
        loops: 0,
        increment: 0,
        loop: 0
    };
    Counter.prototype.defaults = {
        node: null,
        from: 0,
        to: null,
        duration: 3000,
        refresh: 30,
        formatter: null,
        onStart: null,
        onUpdate: null,
        onComplete: null
    };
    Counter.prototype.run = function() {
        clearInterval(this.internal.intervalId);
        this.internal.value = this.params.from;
        this.internal.loops = Math.ceil(this.params.duration / this.params.refresh);
        this.internal.increment = (this.params.to - this.params.from) / this.internal.loops;
        this.internal.loop = 0;
        if (this.params.onStart instanceof Function)
            this.params.onStart.call(this, ~~this.internal.value);
        this.internal.intervalId = setInterval(this.update.bind(this), this.params.refresh)
    }
    ;
    Counter.prototype.update = function() {
        this.internal.value += this.internal.increment;
        this.internal.loop++;
        if (this.params.onUpdate instanceof Function)
            this.params.onUpdate.call(this, ~~this.internal.value);
        if (this.internal.loop >= this.internal.loops) {
            clearInterval(this.internal.intervalId);
            this.internal.value = this.params.to;
            if (this.params.onComplete instanceof Function)
                this.params.onComplete.call(this, ~~this.internal.value)
        }
        this.render()
    }
    ;
    Counter.prototype.render = function() {
        if (this.params.formatter instanceof Function) {
            this.params.node.innerHTML = this.params.formatter.call(this, ~~this.internal.value)
        } else {
            this.params.node.innerHTML = ~~this.internal.value
        }
    }
    ;
    return new Counter(data)
}

/**
 * @module   αProgressCircle
 * @version  v0.1.1
 * @author   OXAYAZA {@link https://github.com/OXAYAZA}
 * @license  CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @requires module:αUtil
 * @see      {@link https://oxayaza.page.link/gitHub_aCounters}
 */
function aProgressCircle(data) {
    function Circle(data) {
        if (!data || !data.node)
            throw Error('Missing required \u03B1ProgressCircle parameters (node).');
        this.params = Util.merge([this.defaults, data]);
        this.params.node.progressCircle = this;
        this.internal.clipPath = document.createElementNS('https://www.w3.org/2000/svg', 'clipPath');
        this.internal.clipPath.id = this.params.clipId;
        this.params.node.appendChild(this.internal.clipPath);
        this.internal.path = document.createElementNS('https://www.w3.org/2000/svg', 'path');
        this.internal.path.setAttribute('d', this.internal.pathD);
        this.internal.clipPath.appendChild(this.internal.path);
        this.internal.clipped = this.params.node.querySelector(this.params.clipped);
        this.internal.clipped.setAttribute('clip-path', 'url(#' + this.params.clipId + ')');
        this.internal.viewBox = this.params.node.getAttribute('viewBox').split(' ').map(function(value) {
            return parseFloat(value)
        });
        this.internal.ellipse.rx = this.internal.viewBox[2] / 2 * 1.44;
        this.internal.ellipse.ry = this.internal.viewBox[3] / 2 * 1.44;
        this.internal.ellipse.cx = this.internal.viewBox[0] + this.internal.viewBox[2] / 2;
        this.internal.ellipse.cy = this.internal.viewBox[1] + this.internal.viewBox[3] / 2;
        this.render(this.params.angle)
    }
    Circle.prototype.internal = {
        viewBox: [0, 0, 100, 100],
        ellipse: {
            rx: 72,
            ry: 72,
            cx: 50,
            cy: 50
        },
        x: 0,
        y: 0,
        clipped: null,
        clipPath: null,
        path: null,
        pathD: ''
    };
    Circle.prototype.defaults = {
        node: null,
        clipped: '.clipped',
        clipId: Util.uId(8),
        angle: 0
    };
    Circle.prototype.calc = function() {
        this.internal.x = Math.sin(this.params.angle * Math.PI / 180) * this.internal.ellipse.rx + this.internal.ellipse.cx;
        this.internal.y = -Math.cos(this.params.angle * Math.PI / 180) * this.internal.ellipse.ry + this.internal.ellipse.cy
    }
    ;
    Circle.prototype.genPath = function() {
        if (this.params.angle >= -360 && this.params.angle < -180) {
            this.internal.pathD = 'M ' + this.internal.ellipse.cx + ' ' + this.internal.ellipse.cy + ' L ' + this.internal.x + ' ' + this.internal.y + ' A ' + this.internal.ellipse.rx + ' ' + this.internal.ellipse.ry + ' 0 0 1 ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy + this.internal.ellipse.ry) + ' A ' + this.internal.ellipse.rx + ' ' + this.internal.ellipse.ry + ' 0 0 1 ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy - this.internal.ellipse.ry)
        } else if (this.params.angle >= -180 && this.params.angle < 0) {
            this.internal.pathD = 'M ' + this.internal.ellipse.cx + ' ' + this.internal.ellipse.cy + ' L ' + this.internal.x + ' ' + this.internal.y + ' A ' + this.internal.ellipse.rx + ' ' + this.internal.ellipse.ry + ' 0 0 1 ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy - this.internal.ellipse.ry)
        } else if (this.params.angle >= 0 && this.params.angle < 180) {
            this.internal.pathD = 'M ' + this.internal.ellipse.cx + ' ' + this.internal.ellipse.cy + ' L ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy - this.internal.ellipse.ry) + ' A ' + this.internal.ellipse.rx + ' ' + this.internal.ellipse.ry + ' 0 0 1 ' + this.internal.x + ' ' + this.internal.y
        } else if (this.params.angle >= 180 && this.params.angle <= 360) {
            this.internal.pathD = 'M ' + this.internal.ellipse.cx + ' ' + this.internal.ellipse.cy + ' L ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy - this.internal.ellipse.ry) + ' A ' + this.internal.ellipse.rx + ' ' + this.internal.ellipse.ry + ' 0 0 1 ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy + this.internal.ellipse.ry) + ' A ' + this.internal.ellipse.rx + ' ' + this.internal.ellipse.ry + ' 0 0 1 ' + this.internal.x + ' ' + this.internal.y
        } else {
            this.internal.pathD = 'M ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy - this.internal.ellipse.ry) + ' A ' + this.internal.ellipse.rx + ' ' + this.internal.ellipse.ry + ' 0 0 1 ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy + this.internal.ellipse.ry) + ' A ' + this.internal.ellipse.rx + ' ' + this.internal.ellipse.ry + ' 0 0 1 ' + this.internal.ellipse.cx + ' ' + (this.internal.ellipse.cy - this.internal.ellipse.ry)
        }
    }
    ;
    Circle.prototype.render = function(angle) {
        if (typeof angle === 'number')
            this.params.angle = angle;
        this.calc();
        this.genPath();
        this.internal.path.setAttribute('d', this.internal.pathD)
    }
    ;
    return new Circle(data)
}

/**
 * @module   αCountdown
 * @version  v0.1.1
 * @author   OXAYAZA {@link https://github.com/OXAYAZA}
 * @license  CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @requires module:αUtil
 * @requires module:αProgressCircle
 * @see      {@link https://oxayaza.page.link/gitHub_aCounters}
 */
function aCountdown(data) {
    function Countdown(data) {
        if (!data || !data.node || typeof data.to === 'undefined') {
            throw Error('Missing of bad required \u03B1Countdown parameters (node, from, to).')
        }
        this.params = Util.merge([this.defaults, data], {
            skipNull: true
        });
        this.params.node.countdown = this;
        this.internal.to = Number(new Date(this.params.to));
        this.internal.from = this.params.from ? Number(new Date(this.params.from)) : this.internal.to - this.constant.year;
        for (var key in this.internal.counters) {
            this.internal.counters[key] = this.params.node.querySelector('[data-counter-' + key + ']')
        }
        for (var key in this.internal.circles) {
            this.internal.circles[key] = this.params.node.querySelector('[data-progress-' + key + ']');
            if (this.internal.circles[key])
                aProgressCircle({
                    node: this.internal.circles[key]
                })
        }
        this.run()
    }
    Countdown.prototype.defaults = {
        from: null,
        to: null,
        tick: 1000,
        count: 'auto',
        onTick: null
    };
    Countdown.prototype.constant = {
        second: 1000,
        minute: 1000 * 60,
        hour: 1000 * 60 * 60,
        day: 1000 * 60 * 60 * 24,
        year: 1000 * 60 * 60 * 24 * 365
    };
    Countdown.prototype.internal = {
        from: null,
        to: null,
        now: null,
        counters: {
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        },
        circles: {
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        },
        period: {
            full: null,
            now: null
        },
        time: {
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        },
        angle: {
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        },
        tmp: {
            days: null,
            hours: null,
            minutes: null
        }
    };
    Countdown.prototype.calc = function() {
        this.internal.time.days = this.internal.period.now / this.constant.day;
        this.internal.angle.days = 360 / ~~(this.internal.period.full / this.constant.day) * ~~this.internal.time.days || 0;
        this.internal.tmp.days = ~~this.internal.time.days * this.constant.day;
        this.internal.time.hours = (this.internal.period.now - this.internal.tmp.days) / this.constant.hour;
        this.internal.angle.hours = 360 / 24 * this.internal.time.hours;
        this.internal.tmp.hours = ~~this.internal.time.hours * this.constant.hour;
        this.internal.time.minutes = (this.internal.period.now - (this.internal.tmp.days + this.internal.tmp.hours)) / this.constant.minute;
        this.internal.angle.minutes = 360 / 60 * this.internal.time.minutes;
        this.internal.tmp.minutes = ~~this.internal.time.minutes * this.constant.minute;
        this.internal.time.seconds = (this.internal.period.now - (this.internal.tmp.days + this.internal.tmp.hours + this.internal.tmp.minutes)) / this.constant.second;
        this.internal.angle.seconds = 360 / 60 * this.internal.time.seconds
    }
    ;
    Countdown.prototype.mode = function() {
        this.internal.now = Number(new Date);
        if (this.internal.to > this.internal.now && ['auto', 'until'].indexOf(this.params.count) > -1) {
            this.internal.period.full = this.internal.to - this.internal.from;
            this.internal.period.now = this.internal.to - this.internal.now
        } else if (this.internal.to < this.internal.now && ['auto', 'since'].indexOf(this.params.count) > -1) {
            this.internal.period.full = this.internal.to - this.internal.from;
            this.internal.period.now = this.internal.now - this.internal.to
        }
    }
    ;
    Countdown.prototype.render = function() {
        this.mode();
        this.calc();
        for (var key in this.internal.counters) {
            if (this.internal.counters[key])
                this.internal.counters[key].innerText = ~~this.internal.time[key];
            if (this.internal.circles[key])
                this.internal.circles[key].progressCircle.render(this.internal.angle[key])
        }
    }
    ;
    Countdown.prototype.run = function() {
        this.render();
        setInterval(function() {
            this.render();
            if (this.params.onTick instanceof Function)
                this.params.onTick.call(this)
        }
        .bind(this), this.params.tick)
    }
    ;
    return new Countdown(data)
}

/*!
 * fullPage 2.9.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e, t, n, o, r) {
    "function" == typeof define && define.amd ? define(function() {
        return e.fullpage = o(t, n),
        e.fullpage
    }) : "object" == typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n)
}(this, window, document, function(e, t) {
    "use strict";
    var n = "fullpage-wrapper"
      , o = "." + n
      , r = "fp-responsive"
      , i = "fp-notransition"
      , l = "fp-destroyed"
      , a = "fp-enabled"
      , c = "fp-viewing"
      , s = "active"
      , u = "." + s
      , f = "fp-completely"
      , d = "." + f
      , v = ".section"
      , p = "fp-section"
      , h = "." + p
      , g = h + u
      , m = "fp-tableCell"
      , S = "." + m
      , b = "fp-auto-height"
      , w = "fp-normal-scroll"
      , y = "fp-nav"
      , E = "#" + y
      , L = "fp-tooltip"
      , x = "." + L
      , A = "fp-show-active"
      , T = ".slide"
      , k = "fp-slide"
      , M = "." + k
      , O = M + u
      , C = "fp-slides"
      , I = "." + C
      , H = "fp-slidesContainer"
      , B = "." + H
      , R = "fp-table"
      , z = "fp-slidesNav"
      , j = "." + z
      , N = j + " a"
      , P = ".fp-controlArrow"
      , D = "fp-prev"
      , V = "fp-controlArrow " + D
      , Y = P + ("." + D)
      , F = "fp-controlArrow fp-next"
      , U = P + ".fp-next";
    function W(t, n) {
        e.console && e.console[t] && e.console[t]("fullPage: " + n)
    }
    function X(e, n) {
        return (n = arguments.length > 1 ? n : t) ? n.querySelectorAll(e) : null
    }
    function _(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o)
                for (var r in o)
                    o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = _(e[r], o[r]))
        }
        return e
    }
    function q(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className))
    }
    function K() {
        return "innerHeight"in e ? e.innerHeight : t.documentElement.offsetHeight
    }
    function Q(e, t) {
        var n;
        for (n in e = oe(e),
        t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) {
                    e[o].style[n] = t[n]
                }
        return e
    }
    function $(e, t, n) {
        for (var o = e[n]; o && !Le(o, t); )
            o = o[n];
        return o
    }
    function G(e, t) {
        return $(e, t, "previousElementSibling")
    }
    function J(e, t) {
        return $(e, t, "nextElementSibling")
    }
    function Z(e) {
        return e.previousElementSibling
    }
    function ee(e) {
        return e.nextElementSibling
    }
    function te(e) {
        return e[e.length - 1]
    }
    function ne(e, t) {
        e = le(e) ? e[0] : e;
        for (var n = null != t ? X(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e)
                return o;
            1 == n[r].nodeType && o++
        }
        return -1
    }
    function oe(e) {
        return le(e) ? e : [e]
    }
    function re(e) {
        e = oe(e);
        for (var t = 0; t < e.length; t++)
            e[t].style.display = "none";
        return e
    }
    function ie(e) {
        e = oe(e);
        for (var t = 0; t < e.length; t++)
            e[t].style.display = "block";
        return e
    }
    function le(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
    }
    function ae(e, t) {
        e = oe(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t
        }
        return e
    }
    function ce(e, t) {
        e = oe(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " ")
            }
        }
        return e
    }
    function se(e, t) {
        t.appendChild(e)
    }
    function ue(e, n, o) {
        var r;
        n = n || t.createElement("div");
        for (var i = 0; i < e.length; i++) {
            var l = e[i];
            (o && !i || !o) && (r = n.cloneNode(!0),
            l.parentNode.insertBefore(r, l)),
            r.appendChild(l)
        }
        return e
    }
    function fe(e, t) {
        ue(e, t, !0)
    }
    function de(e, t) {
        for ("string" == typeof t && (t = Ae(t)),
        e.appendChild(t); e.firstChild !== t; )
            t.appendChild(e.firstChild)
    }
    function ve(e) {
        for (var n = t.createDocumentFragment(); e.firstChild; )
            n.appendChild(e.firstChild);
        e.parentNode.replaceChild(n, e)
    }
    function pe(e, t) {
        return e && 1 === e.nodeType ? Le(e, t) ? e : pe(e.parentNode, t) : null
    }
    function he(e, t) {
        me(e, e.nextSibling, t)
    }
    function ge(e, t) {
        me(e, e, t)
    }
    function me(e, t, n) {
        le(n) || ("string" == typeof n && (n = Ae(n)),
        n = [n]);
        for (var o = 0; o < n.length; o++)
            e.parentNode.insertBefore(n[o], t)
    }
    function Se() {
        var n = t.documentElement;
        return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0)
    }
    function be(e) {
        return Array.prototype.filter.call(e.parentNode.children, function(t) {
            return t !== e
        })
    }
    function we(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    function ye(e) {
        if ("function" == typeof e)
            return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }
    function Ee(n, o, r) {
        var i;
        r = void 0 === r ? {} : r,
        "function" == typeof e.CustomEvent ? i = new CustomEvent(o,{
            detail: r
        }) : (i = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, r),
        n.dispatchEvent(i)
    }
    function Le(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
    }
    function xe(e, t) {
        if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++)
                e[n].style.display = t ? "block" : "none";
        return e
    }
    function Ae(e) {
        var n = t.createElement("div");
        return n.innerHTML = e.trim(),
        n.firstChild
    }
    function Te(e) {
        e = oe(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
        }
    }
    function ke(e, t, n) {
        for (var o = e[n], r = []; o; )
            (Le(o, t) || null == t) && r.push(o),
            o = o[n];
        return r
    }
    function Me(e, t) {
        return ke(e, t, "nextElementSibling")
    }
    function Oe(e, t) {
        return ke(e, t, "previousElementSibling")
    }
    return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, n) {
        n = n || e;
        for (var o = 0; o < this.length; o++)
            t.call(n, this[o], o, this)
    }
    ),
    e.fp_utils = {
        $: X,
        deepExtend: _,
        hasClass: q,
        getWindowHeight: K,
        css: Q,
        until: $,
        prevUntil: G,
        nextUntil: J,
        prev: Z,
        next: ee,
        last: te,
        index: ne,
        getList: oe,
        hide: re,
        show: ie,
        isArrayOrList: le,
        addClass: ae,
        removeClass: ce,
        appendTo: se,
        wrap: ue,
        wrapAll: fe,
        wrapInner: de,
        unwrap: ve,
        closest: pe,
        after: he,
        before: ge,
        insertBefore: me,
        getScrollTop: Se,
        siblings: be,
        preventDefault: we,
        isFunction: ye,
        trigger: Ee,
        matches: Le,
        toggle: xe,
        createElementFromHTML: Ae,
        remove: Te,
        filter: function(e, t) {
            Array.prototype.filter.call(e, t)
        },
        untilAll: ke,
        nextAll: Me,
        prevAll: Oe,
        showError: W
    },
    function($, oe) {
        var le = !0;
        if (!q(X("html"), a)) {
            var ue = X("html, body")
              , me = X("body")[0]
              , ke = {};
            oe = _({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: v,
                slideSelector: T,
                v2compatible: !1,
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, oe);
            var Ce, Ie, He, Be, Re = !1, ze = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), je = "ontouchstart"in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, Ne = "string" == typeof $ ? X($)[0] : $, Pe = K(), De = !1, Ve = !0, Ye = !0, Fe = [], Ue = {
                m: {
                    up: !0,
                    down: !0,
                    left: !0,
                    right: !0
                }
            };
            Ue.k = _({}, Ue.m);
            var We, Xe, _e, qe, Ke, Qe, $e, Ge, Je = e.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }, Ze = {
                touchmove: "ontouchmove"in e ? "touchmove" : Je.move,
                touchstart: "ontouchstart"in e ? "touchstart" : Je.down
            }, et = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', tt = _({}, oe), nt = !1;
            Yn(),
            e.fp_easings = _(e.fp_easings, {
                easeInOutCubic: function(e, t, n, o) {
                    return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                }
            }),
            Ne && (ke.version = "3.0.4",
            ke.setAutoScrolling = vt,
            ke.setRecordHistory = pt,
            ke.setScrollingSpeed = ht,
            ke.setFitToSection = gt,
            ke.setLockAnchors = function(e) {
                oe.lockAnchors = e
            }
            ,
            ke.setMouseWheelScrolling = mt,
            ke.setAllowScrolling = St,
            ke.setKeyboardScrolling = wt,
            ke.moveSectionUp = yt,
            ke.moveSectionDown = Et,
            ke.silentMoveTo = Lt,
            ke.moveTo = xt,
            ke.moveSlideRight = At,
            ke.moveSlideLeft = Tt,
            ke.fitToSection = Pt,
            ke.reBuild = kt,
            ke.setResponsive = Mt,
            ke.getFullpageData = oe,
            ke.destroy = function(n) {
                vt(!1, "internal"),
                St(!0),
                bt(!1),
                wt(!1),
                ae(Ne, l),
                clearTimeout(qe),
                clearTimeout(_e),
                clearTimeout(Xe),
                clearTimeout(Ke),
                clearTimeout(Qe),
                e.removeEventListener("scroll", Nt),
                e.removeEventListener("hashchange", cn),
                e.removeEventListener("resize", bn),
                t.removeEventListener("keydown", un),
                t.removeEventListener("keyup", fn),
                ["click", "touchstart"].forEach(function(e) {
                    t.removeEventListener(e, Ot)
                }),
                ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) {
                    t.removeEventListener(e, It, !0)
                }),
                clearTimeout(qe),
                clearTimeout(_e),
                n && (Nn(0),
                X("img[data-src], source[data-src], audio[data-src], iframe[data-src]", Ne).forEach(function(e) {
                    en(e, "src")
                }),
                X("img[data-srcset]").forEach(function(e) {
                    en(e, "srcset")
                }),
                Te(X(E + ", " + j + ", " + P)),
                Q(X(h), {
                    height: "",
                    "background-color": "",
                    padding: ""
                }),
                Q(X(M), {
                    width: ""
                }),
                Q(Ne, {
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }),
                Q(ue, {
                    overflow: "",
                    height: ""
                }),
                ce(X("html"), a),
                ce(me, r),
                me.className.split(/\s+/).forEach(function(e) {
                    0 === e.indexOf(c) && ce(me, e)
                }),
                X(h + ", " + M).forEach(function(e) {
                    oe.scrollOverflowHandler && oe.scrollOverflow && oe.scrollOverflowHandler.remove(e),
                    ce(e, R + " " + s + " " + f);
                    var t = e.getAttribute("data-fp-styles");
                    t && e.setAttribute("style", e.getAttribute("data-fp-styles")),
                    q(e, p) && !nt && e.removeAttribute("data-anchor")
                }),
                En(Ne),
                [S, B, I].forEach(function(e) {
                    X(e, Ne).forEach(function(e) {
                        ve(e)
                    })
                }),
                Q(Ne, {
                    "-webkit-transition": "none",
                    transition: "none"
                }),
                e.scrollTo(0, 0),
                [p, k, H].forEach(function(e) {
                    ce(X("." + e), e)
                }))
            }
            ,
            ke.getActiveSection = function() {
                return new Xn(X(g)[0])
            }
            ,
            ke.getActiveSlide = function() {
                return Gt(X(O, X(g)[0])[0])
            }
            ,
            ke.test = {
                top: "0px",
                translate3d: "translate3d(0px, 0px, 0px)",
                translate3dH: function() {
                    for (var e = [], t = 0; t < X(oe.sectionSelector, Ne).length; t++)
                        e.push("translate3d(0px, 0px, 0px)");
                    return e
                }(),
                left: function() {
                    for (var e = [], t = 0; t < X(oe.sectionSelector, Ne).length; t++)
                        e.push(0);
                    return e
                }(),
                options: oe,
                setAutoScrolling: vt
            },
            ke.shared = {
                afterRenderActions: jt
            },
            e.fullpage_api = ke,
            oe.css3 && (oe.css3 = function() {
                var n, o = t.createElement("p"), r = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                for (var i in o.style.display = "block",
                t.body.insertBefore(o, null),
                r)
                    void 0 !== o.style[i] && (o.style[i] = "translate3d(1px,1px,1px)",
                    n = e.getComputedStyle(o).getPropertyValue(r[i]));
                return t.body.removeChild(o),
                void 0 !== n && n.length > 0 && "none" !== n
            }()),
            oe.scrollBar = oe.scrollBar || oe.hybrid,
            function() {
                if (!oe.anchors.length) {
                    var e = "[data-anchor]"
                      , t = X(oe.sectionSelector.split(",").join(e + ",") + e, Ne);
                    t.length && (nt = !0,
                    t.forEach(function(e) {
                        oe.anchors.push(e.getAttribute("data-anchor").toString())
                    }))
                }
                if (!oe.navigationTooltips.length) {
                    var e = "[data-tooltip]"
                      , n = X(oe.sectionSelector.split(",").join(e + ",") + e, Ne);
                    n.length && n.forEach(function(e) {
                        oe.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                    })
                }
            }(),
            function() {
                Q(Ne, {
                    height: "100%",
                    position: "relative"
                }),
                ae(Ne, n),
                ae(X("html"), a),
                Pe = K(),
                ce(Ne, l),
                ae(X(oe.sectionSelector, Ne), p),
                ae(X(oe.slideSelector, Ne), k);
                for (var e = X(h), o = 0; o < e.length; o++) {
                    var r = o
                      , i = e[o]
                      , c = X(M, i)
                      , u = c.length;
                    i.setAttribute("data-fp-styles", i.getAttribute("style")),
                    Bt(i, r),
                    Rt(i, r),
                    u > 0 ? Ht(i, c, u) : oe.verticalCentered && An(i)
                }
                oe.fixedElements && oe.css3 && X(oe.fixedElements).forEach(function(e) {
                    me.appendChild(e)
                }),
                oe.navigation && function() {
                    var e = t.createElement("div");
                    e.setAttribute("id", y);
                    var n = t.createElement("ul");
                    e.appendChild(n),
                    se(e, me);
                    var o = X(E)[0];
                    ae(o, "fp-" + oe.navigationPosition),
                    oe.showActiveTooltip && ae(o, A);
                    for (var r = "", i = 0; i < X(h).length; i++) {
                        var l = "";
                        oe.anchors.length && (l = oe.anchors[i]),
                        r += '<li><a href="#' + l + '"><span class="fp-sr-only">' + zt(i, "Section") + "</span><span></span></a>";
                        var a = oe.navigationTooltips[i];
                        void 0 !== a && "" !== a && (r += '<div class="' + L + " fp-" + oe.navigationPosition + '">' + a + "</div>"),
                        r += "</li>"
                    }
                    X("ul", o)[0].innerHTML = r,
                    Q(X(E), {
                        "margin-top": "-" + X(E)[0].offsetHeight / 2 + "px"
                    });
                    var c = X("li", X(E)[0])[ne(X(g)[0], h)];
                    ae(X("a", c), s)
                }(),
                X('iframe[src*="youtube.com/embed/"]', Ne).forEach(function(e) {
                    var t, n, o;
                    n = "enablejsapi=1",
                    o = (t = e).getAttribute("src"),
                    t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                }),
                oe.scrollOverflow && (We = oe.scrollOverflowHandler.init(oe))
            }(),
            St(!0),
            bt(!0),
            vt(oe.autoScrolling, "internal"),
            wn(),
            Rn(),
            "complete" === t.readyState && an(),
            e.addEventListener("load", an),
            oe.scrollOverflow || jt(),
            e.addEventListener("scroll", Nt),
            e.addEventListener("hashchange", cn),
            e.addEventListener("blur", hn),
            e.addEventListener("resize", bn),
            t.addEventListener("keydown", un),
            t.addEventListener("keyup", fn),
            ["click", "touchstart"].forEach(function(e) {
                t.addEventListener(e, Ot)
            }),
            oe.normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) {
                Ct(e, !1)
            }),
            ["mouseleave", "touchend"].forEach(function(e) {
                Ct(e, !0)
            })));
            var ot = !1
              , rt = 0
              , it = 0
              , lt = 0
              , at = 0
              , ct = 0
              , st = (new Date).getTime()
              , ut = 0
              , ft = 0
              , dt = Pe;
            return ke
        }
        function vt(e, t) {
            e || Nn(0),
            Vn("autoScrolling", e, t);
            var n = X(g)[0];
            if (oe.autoScrolling && !oe.scrollBar)
                Q(ue, {
                    overflow: "hidden",
                    height: "100%"
                }),
                pt(tt.recordHistory, "internal"),
                Q(Ne, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }),
                null != n && Nn(n.offsetTop);
            else if (Q(ue, {
                overflow: "visible",
                height: "initial"
            }),
            pt(!1, "internal"),
            Q(Ne, {
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            null != n) {
                var o = Jt(n.offsetTop);
                o.element.scrollTo(0, o.options)
            }
        }
        function pt(e, t) {
            Vn("recordHistory", e, t)
        }
        function ht(e, t) {
            Vn("scrollingSpeed", e, t)
        }
        function gt(e, t) {
            Vn("fitToSection", e, t)
        }
        function mt(n) {
            n ? (function() {
                var n, o = "";
                e.addEventListener ? n = "addEventListener" : (n = "attachEvent",
                o = "on");
                var r = "onwheel"in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == r ? t[n](o + "MozMousePixelScroll", Xt, !1) : t[n](o + r, Xt, !1)
            }(),
            Ne.addEventListener("mousedown", dn),
            Ne.addEventListener("mouseup", vn)) : (t.addEventListener ? (t.removeEventListener("mousewheel", Xt, !1),
            t.removeEventListener("wheel", Xt, !1),
            t.removeEventListener("MozMousePixelScroll", Xt, !1)) : t.detachEvent("onmousewheel", Xt),
            Ne.removeEventListener("mousedown", dn),
            Ne.removeEventListener("mouseup", vn))
        }
        function St(e, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function(t) {
                Dn(e, t, "m")
            }) : Dn(e, "all", "m")
        }
        function bt(e) {
            e ? (mt(!0),
            function() {
                if (ze || je) {
                    oe.autoScrolling && (me.removeEventListener(Ze.touchmove, Vt, {
                        passive: !1
                    }),
                    me.addEventListener(Ze.touchmove, Vt, {
                        passive: !1
                    }));
                    var e = X(o)[0];
                    e && (e.removeEventListener(Ze.touchstart, Ut),
                    e.removeEventListener(Ze.touchmove, Yt, {
                        passive: !1
                    }),
                    e.addEventListener(Ze.touchstart, Ut),
                    e.addEventListener(Ze.touchmove, Yt, {
                        passive: !1
                    }))
                }
            }()) : (mt(!1),
            function() {
                if (ze || je) {
                    oe.autoScrolling && (me.removeEventListener(Ze.touchmove, Yt, {
                        passive: !1
                    }),
                    me.removeEventListener(Ze.touchmove, Vt, {
                        passive: !1
                    }));
                    var e = X(o)[0];
                    e && (e.removeEventListener(Ze.touchstart, Ut),
                    e.removeEventListener(Ze.touchmove, Yt, {
                        passive: !1
                    }))
                }
            }())
        }
        function wt(e, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function(t) {
                Dn(e, t, "k")
            }) : (Dn(e, "all", "k"),
            oe.keyboardScrolling = e)
        }
        function yt() {
            var e = G(X(g)[0], h);
            e || !oe.loopTop && !oe.continuousVertical || (e = te(X(h))),
            null != e && Kt(e, null, !0)
        }
        function Et() {
            var e = J(X(g)[0], h);
            e || !oe.loopBottom && !oe.continuousVertical || (e = X(h)[0]),
            null != e && Kt(e, null, !1)
        }
        function Lt(e, t) {
            ht(0, "internal"),
            xt(e, t),
            ht(tt.scrollingSpeed, "internal")
        }
        function xt(e, t) {
            var n = Mn(e);
            void 0 !== t ? On(e, t) : null != n && Kt(n)
        }
        function At(e) {
            _t("right", e)
        }
        function Tt(e) {
            _t("left", e)
        }
        function kt(t) {
            if (!q(Ne, l)) {
                De = !0,
                Pe = K();
                for (var n = X(h), o = 0; o < n.length; ++o) {
                    var r = n[o]
                      , i = X(I, r)[0]
                      , a = X(M, r);
                    oe.verticalCentered && Q(X(S, r), {
                        height: Tn(r) + "px"
                    }),
                    Q(r, {
                        height: Pe + "px"
                    }),
                    a.length > 1 && mn(i, X(O, i)[0])
                }
                oe.scrollOverflow && We.createScrollBarForAll();
                var c = ne(X(g)[0], h);
                c && Lt(c + 1),
                De = !1,
                ye(oe.afterResize) && t && oe.afterResize.call(Ne, e.innerWidth, e.innerHeight),
                ye(oe.afterReBuild) && !t && oe.afterReBuild.call(Ne)
            }
        }
        function Mt(e) {
            var t = q(me, r);
            e ? t || (vt(!1, "internal"),
            gt(!1, "internal"),
            re(X(E)),
            ae(me, r),
            ye(oe.afterResponsive) && oe.afterResponsive.call(Ne, e)) : t && (vt(tt.autoScrolling, "internal"),
            gt(tt.autoScrolling, "internal"),
            ie(X(E)),
            ce(me, r),
            ye(oe.afterResponsive) && oe.afterResponsive.call(Ne, e))
        }
        function Ot(e) {
            var t = e.target;
            t && pe(t, E + " a") ? function(e) {
                we(e);
                var t = ne(pe(this, E + " li"));
                Kt(X(h)[t])
            }
            .call(t, e) : Le(t, x) ? function() {
                Ee(Z(this), "click")
            }
            .call(t) : Le(t, P) ? function() {
                var e = pe(this, h);
                q(this, D) ? Ue.m.left && Tt(e) : Ue.m.right && At(e)
            }
            .call(t, e) : Le(t, N) || null != pe(t, N) ? function(e) {
                we(e);
                var t = X(I, pe(this, h))[0]
                  , n = X(M, t)[ne(pe(this, "li"))];
                mn(t, n)
            }
            .call(t, e) : pe(t, oe.menu + " [data-menuanchor]") && function(e) {
                !X(oe.menu)[0] || !oe.lockAnchors && oe.anchors.length || (we(e),
                xt(this.getAttribute("data-menuanchor")))
            }
            .call(t, e)
        }
        function Ct(e, n) {
            t["fp_" + e] = n,
            t.addEventListener(e, It, !0)
        }
        function It(e) {
            e.target != t && oe.normalScrollElements.split(",").forEach(function(n) {
                null != pe(e.target, n) && bt(t["fp_" + e.type])
            })
        }
        function Ht(e, n, o) {
            var r = 100 * o
              , i = 100 / o
              , l = t.createElement("div");
            l.className = C,
            fe(n, l);
            var a = t.createElement("div");
            a.className = H,
            fe(n, a),
            Q(X(B, e), {
                width: r + "%"
            }),
            o > 1 && (oe.controlArrows && function(e) {
                var t = [Ae('<div class="' + V + '"></div>'), Ae('<div class="' + F + '"></div>')];
                he(X(I, e)[0], t),
                "#fff" !== oe.controlArrowColor && (Q(X(U, e), {
                    "border-color": "transparent transparent transparent " + oe.controlArrowColor
                }),
                Q(X(Y, e), {
                    "border-color": "transparent " + oe.controlArrowColor + " transparent transparent"
                })),
                oe.loopHorizontal || re(X(Y, e))
            }(e),
            oe.slidesNavigation && function(e, t) {
                se(Ae('<div class="' + z + '"><ul></ul></div>'), e);
                var n = X(j, e)[0];
                ae(n, "fp-" + oe.slidesNavPosition);
                for (var o = 0; o < t; o++)
                    se(Ae('<li><a href="#"><span class="fp-sr-only">' + zt(o, "Slide") + "</span><span></span></a></li>"), X("ul", n)[0]);
                Q(n, {
                    "margin-left": "-" + n.innerWidth / 2 + "px"
                }),
                ae(X("a", X("li", n)[0]), s)
            }(e, o)),
            n.forEach(function(e) {
                Q(e, {
                    width: i + "%"
                }),
                oe.verticalCentered && An(e)
            });
            var c = X(O, e)[0];
            null != c && (0 !== ne(X(g), h) || 0 === ne(X(g), h) && 0 !== ne(c)) ? jn(c, "internal") : ae(n[0], s)
        }
        function Bt(e, t) {
            t || null != X(g)[0] || ae(e, s),
            Be = X(g)[0],
            Q(e, {
                height: Pe + "px"
            }),
            oe.paddingTop && Q(e, {
                "padding-top": oe.paddingTop
            }),
            oe.paddingBottom && Q(e, {
                "padding-bottom": oe.paddingBottom
            }),
            void 0 !== oe.sectionsColor[t] && Q(e, {
                "background-color": oe.sectionsColor[t]
            }),
            void 0 !== oe.anchors[t] && e.setAttribute("data-anchor", oe.anchors[t])
        }
        function Rt(e, t) {
            void 0 !== oe.anchors[t] && q(e, s) && Ln(oe.anchors[t], t),
            oe.menu && oe.css3 && null != pe(X(oe.menu)[0], o) && me.appendChild(X(oe.menu)[0])
        }
        function zt(e, t) {
            return oe.navigationTooltips[e] || oe.anchors[e] || t + " " + (e + 1)
        }
        function jt() {
            var e, t = X(g)[0];
            ae(t, f),
            tn(t),
            nn(t),
            oe.scrollOverflow && oe.scrollOverflowHandler.afterLoad(),
            (!(e = Mn(sn().section)) || void 0 !== e && ne(e) === ne(Be)) && ye(oe.afterLoad) && Qt("afterLoad", {
                activeSection: null,
                element: t,
                direction: null,
                anchorLink: t.getAttribute("data-anchor"),
                sectionIndex: ne(t, h)
            }),
            ye(oe.afterRender) && Qt("afterRender")
        }
        function Nt() {
            var e, t, n, o;
            if (!oe.autoScrolling || oe.scrollBar) {
                var r = Se()
                  , i = function(e) {
                    var t = e > rt ? "down" : "up";
                    return rt = e,
                    ut = e,
                    t
                }(r)
                  , l = 0
                  , a = r + K() / 2
                  , c = me.offsetHeight - K() === r
                  , u = X(h);
                if (c)
                    l = u.length - 1;
                else if (r)
                    for (var d = 0; d < u.length; ++d)
                        u[d].offsetTop <= a && (l = d);
                else
                    l = 0;
                if (t = i,
                n = X(g)[0].offsetTop,
                o = n + K(),
                ("up" == t ? o >= Se() + K() : n <= Se()) && (q(X(g)[0], f) || (ae(X(g)[0], f),
                ce(be(X(g)[0]), f))),
                !q(e = u[l], s)) {
                    ot = !0;
                    var v, p, m = X(g)[0], S = ne(m, h) + 1, b = xn(e), w = e.getAttribute("data-anchor"), y = ne(e, h) + 1, E = X(O, e)[0], L = {
                        activeSection: m,
                        sectionIndex: y - 1,
                        anchorLink: w,
                        element: e,
                        leavingSection: S,
                        direction: b
                    };
                    E && (p = E.getAttribute("data-anchor"),
                    v = ne(E)),
                    Ye && (ae(e, s),
                    ce(be(e), s),
                    ye(oe.onLeave) && Qt("onLeave", L),
                    ye(oe.afterLoad) && Qt("afterLoad", L),
                    rn(m),
                    tn(e),
                    nn(e),
                    Ln(w, y - 1),
                    oe.anchors.length && (Ce = w),
                    In(v, p, w)),
                    clearTimeout(Ke),
                    Ke = setTimeout(function() {
                        ot = !1
                    }, 100)
                }
                oe.fitToSection && (clearTimeout(Qe),
                Qe = setTimeout(function() {
                    oe.fitToSection && X(g)[0].offsetHeight <= Pe && Pt()
                }, oe.fitToSectionDelay))
            }
        }
        function Pt() {
            Ye && (De = !0,
            Kt(X(g)[0]),
            De = !1)
        }
        function Dt(e) {
            if (Ue.m[e]) {
                var t = "down" === e ? Et : yt;
                if (oe.scrollOverflow) {
                    var n = oe.scrollOverflowHandler.scrollable(X(g)[0])
                      , o = "down" === e ? "bottom" : "top";
                    if (null != n) {
                        if (!oe.scrollOverflowHandler.isScrolled(o, n))
                            return !0;
                        t()
                    } else
                        t()
                } else
                    t()
            }
        }
        function Vt(e) {
            oe.autoScrolling && Ft(e) && Ue.m.up && we(e)
        }
        function Yt(t) {
            var n = pe(t.target, h);
            if (Ft(t)) {
                oe.autoScrolling && we(t);
                var o = zn(t);
                at = o.y,
                ct = o.x,
                X(I, n).length && Math.abs(lt - ct) > Math.abs(it - at) ? !Re && Math.abs(lt - ct) > e.innerWidth / 100 * oe.touchSensitivity && (lt > ct ? Ue.m.right && At(n) : Ue.m.left && Tt(n)) : oe.autoScrolling && Ye && Math.abs(it - at) > e.innerHeight / 100 * oe.touchSensitivity && (it > at ? Dt("down") : at > it && Dt("up"))
            }
        }
        function Ft(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }
        function Ut(e) {
            if (oe.fitToSection && (Ge = !1),
            Ft(e)) {
                var t = zn(e);
                it = t.y,
                lt = t.x
            }
        }
        function Wt(e, t) {
            for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++)
                n += o[r];
            return Math.ceil(n / t)
        }
        function Xt(t) {
            var n = (new Date).getTime()
              , o = q(X(d)[0], w);
            if (!Ue.m.down && !Ue.m.up)
                return we(t),
                !1;
            if (oe.autoScrolling && !He && !o) {
                var r = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail
                  , i = Math.max(-1, Math.min(1, r))
                  , l = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX
                  , a = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !l;
                Fe.length > 149 && Fe.shift(),
                Fe.push(Math.abs(r)),
                oe.scrollBar && we(t);
                var c = n - st;
                return st = n,
                c > 200 && (Fe = []),
                Ye && Wt(Fe, 10) >= Wt(Fe, 70) && a && Dt(i < 0 ? "down" : "up"),
                !1
            }
            oe.fitToSection && (Ge = !1)
        }
        function _t(e, t) {
            var n = null == t ? X(g)[0] : t
              , o = X(I, n)[0];
            if (!(null == o || Re || X(M, o).length < 2)) {
                var r = X(O, o)[0]
                  , i = null;
                if (null == (i = "left" === e ? G(r, M) : J(r, M))) {
                    if (!oe.loopHorizontal)
                        return;
                    var l = be(r);
                    i = "left" === e ? l[l.length - 1] : l[0]
                }
                Re = !ke.test.isTesting,
                mn(o, i, e)
            }
        }
        function qt() {
            for (var e = X(O), t = 0; t < e.length; t++)
                jn(e[t], "internal")
        }
        function Kt(e, t, n) {
            if (null != e) {
                var o, r, i = {
                    element: e,
                    callback: t,
                    isMovementUp: n,
                    dtop: function(e) {
                        var t = e.offsetHeight
                          , n = e.offsetTop
                          , o = n
                          , r = n > ut
                          , i = o - Pe + t
                          , l = oe.bigSectionsDestination;
                        return t > Pe ? (r || l) && "bottom" !== l || (o = i) : (r || De && null == ee(e)) && (o = i),
                        ut = o,
                        o
                    }(e),
                    yMovement: xn(e),
                    anchorLink: e.getAttribute("data-anchor"),
                    sectionIndex: ne(e, h),
                    activeSlide: X(O, e)[0],
                    activeSection: X(g)[0],
                    leavingSection: ne(X(g), h) + 1,
                    localIsResizing: De
                };
                if (!(i.activeSection == e && !De || oe.scrollBar && Se() === i.dtop && !q(e, b))) {
                    if (null != i.activeSlide && (o = i.activeSlide.getAttribute("data-anchor"),
                    r = ne(i.activeSlide)),
                    !i.localIsResizing) {
                        var l = i.yMovement;
                        if (void 0 !== n && (l = n ? "up" : "down"),
                        i.direction = l,
                        ye(oe.onLeave) && !1 === Qt("onLeave", i))
                            return
                    }
                    oe.autoScrolling && oe.continuousVertical && void 0 !== i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && (i = function(e) {
                        return e.isMovementUp ? ge(X(g)[0], Me(e.activeSection, h)) : he(X(g)[0], Oe(e.activeSection, h).reverse()),
                        Nn(X(g)[0].offsetTop),
                        qt(),
                        e.wrapAroundElements = e.activeSection,
                        e.dtop = e.element.offsetTop,
                        e.yMovement = xn(e.element),
                        e.leavingSection = ne(e.activeSection, h) + 1,
                        e.sectionIndex = ne(e.element, h),
                        e
                    }(i)),
                    i.localIsResizing || rn(i.activeSection),
                    oe.scrollOverflow && oe.scrollOverflowHandler.beforeLeave(),
                    ae(e, s),
                    ce(be(e), s),
                    tn(e),
                    oe.scrollOverflow && oe.scrollOverflowHandler.onLeave(),
                    Ye = ke.test.isTesting,
                    In(r, o, i.anchorLink, i.sectionIndex),
                    function(e) {
                        if (oe.css3 && oe.autoScrolling && !oe.scrollBar) {
                            var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                            kn(t, !0),
                            oe.scrollingSpeed ? (clearTimeout(_e),
                            _e = setTimeout(function() {
                                Zt(e)
                            }, oe.scrollingSpeed)) : Zt(e)
                        } else {
                            var n = Jt(e.dtop);
                            ke.test.top = -e.dtop + "px",
                            Fn(n.element, n.options, oe.scrollingSpeed, function() {
                                oe.scrollBar ? setTimeout(function() {
                                    Zt(e)
                                }, 30) : Zt(e)
                            })
                        }
                    }(i),
                    Ce = i.anchorLink,
                    Ln(i.anchorLink, i.sectionIndex)
                }
            }
        }
        function Qt(e, t) {
            var n, o = function(e, t) {
                var n;
                return (n = oe.v2compatible ? {
                    afterRender: function() {
                        return [Ne]
                    },
                    onLeave: function() {
                        return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction]
                    },
                    afterLoad: function() {
                        return [t.element, t.anchorLink, t.sectionIndex + 1]
                    },
                    afterSlideLoad: function() {
                        return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex]
                    },
                    onSlideLeave: function() {
                        return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex]
                    }
                } : {
                    afterRender: function() {
                        return {
                            section: $t(X(g)[0]),
                            slide: Gt(X(O, X(g)[0])[0])
                        }
                    },
                    onLeave: function() {
                        return {
                            origin: $t(t.activeSection),
                            destination: $t(t.element),
                            direction: t.direction
                        }
                    },
                    afterLoad: function() {
                        return n.onLeave()
                    },
                    afterSlideLoad: function() {
                        return {
                            section: $t(t.section),
                            origin: Gt(t.prevSlide),
                            destination: Gt(t.destiny),
                            direction: t.direction
                        }
                    },
                    onSlideLeave: function() {
                        return n.afterSlideLoad()
                    }
                })[e]()
            }(e, t);
            if (oe.v2compatible) {
                if (!1 === oe[e].apply(o[0], o.slice(1)))
                    return !1
            } else if (Ee(Ne, e, o),
            !1 === oe[e].apply(o[Object.keys(o)[0]], (n = o,
            Object.keys(n).map(function(e) {
                return n[e]
            }))))
                return !1;
            return !0
        }
        function $t(e) {
            return e ? new Xn(e) : null
        }
        function Gt(e) {
            return e ? new _n(e) : null
        }
        function Jt(t) {
            var n = {};
            return oe.autoScrolling && !oe.scrollBar ? (n.options = -t,
            n.element = X(o)[0]) : (n.options = t,
            n.element = e),
            n
        }
        function Zt(e) {
            !function(e) {
                null != e.wrapAroundElements && (e.isMovementUp ? ge(X(h)[0], e.wrapAroundElements) : he(X(h)[X(h).length - 1], e.wrapAroundElements),
                Nn(X(g)[0].offsetTop),
                qt())
            }(e),
            ye(oe.afterLoad) && !e.localIsResizing && Qt("afterLoad", e),
            oe.scrollOverflow && oe.scrollOverflowHandler.afterLoad(),
            e.localIsResizing || nn(e.element),
            ae(e.element, f),
            ce(be(e.element), f),
            Ye = !0,
            ye(e.callback) && e.callback()
        }
        function en(e, t) {
            e.setAttribute(t, e.getAttribute("data-" + t)),
            e.removeAttribute("data-" + t)
        }
        function tn(e) {
            oe.lazyLoading && X("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", ln(e)).forEach(function(e) {
                if (["src", "srcset"].forEach(function(t) {
                    var n = e.getAttribute("data-" + t);
                    null != n && n && en(e, t)
                }),
                Le(e, "source")) {
                    var t = pe(e, "video, audio");
                    t && t.load()
                }
            })
        }
        function nn(e) {
            var t = ln(e);
            X("video, audio", t).forEach(function(e) {
                e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
            }),
            X('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) {
                e.hasAttribute("data-autoplay") && on(e),
                e.onload = function() {
                    e.hasAttribute("data-autoplay") && on(e)
                }
            })
        }
        function on(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }
        function rn(e) {
            var t = ln(e);
            X("video, audio", t).forEach(function(e) {
                e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
            }),
            X('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) {
                /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }
        function ln(e) {
            var t = X(O, e);
            return t.length && (e = t[0]),
            e
        }
        function an() {
            var e = sn()
              , t = e.section
              , n = e.slide;
            t && (oe.animateAnchor ? On(t, n) : Lt(t, n))
        }
        function cn() {
            if (!ot && !oe.lockAnchors) {
                var e = sn()
                  , t = e.section
                  , n = e.slide
                  , o = void 0 === Ce
                  , r = void 0 === Ce && void 0 === n && !Re;
                t && t.length && (t && t !== Ce && !o || r || !Re && Ie != n) && On(t, n)
            }
        }
        function sn() {
            var t, n, o = e.location.hash;
            if (o.length) {
                var r = o.replace("#", "").split("/")
                  , i = o.indexOf("#/") > -1;
                t = i ? "/" + r[1] : decodeURIComponent(r[0]);
                var l = i ? r[2] : r[1];
                l && l.length && (n = decodeURIComponent(l))
            }
            return {
                section: t,
                slide: n
            }
        }
        function un(e) {
            clearTimeout($e);
            var n = t.activeElement
              , o = e.keyCode;
            9 === o ? function(e) {
                var n = e.shiftKey
                  , o = t.activeElement
                  , r = pn(ln(X(g)[0]));
                function i(e) {
                    return we(e),
                    r[0] ? r[0].focus() : null
                }
                (function(e) {
                    var n = pn(t)
                      , o = n.indexOf(t.activeElement)
                      , r = e.shiftKey ? o - 1 : o + 1
                      , i = n[r]
                      , l = Gt(pe(i, M))
                      , a = $t(pe(i, h));
                    return !l && !a
                }
                )(e) || (o ? null == pe(o, g + "," + g + " " + O) && (o = i(e)) : i(e),
                (!n && o == r[r.length - 1] || n && o == r[0]) && we(e))
            }(e) : Le(n, "textarea") || Le(n, "input") || Le(n, "select") || "true" === n.getAttribute("contentEditable") || "" === n.getAttribute("contentEditable") || !oe.keyboardScrolling || !oe.autoScrolling || ([40, 38, 32, 33, 34].indexOf(o) > -1 && we(e),
            He = e.ctrlKey,
            $e = setTimeout(function() {
                !function(e) {
                    var t = e.shiftKey;
                    if (Ye || !([37, 39].indexOf(e.keyCode) < 0))
                        switch (e.keyCode) {
                        case 38:
                        case 33:
                            Ue.k.up && yt();
                            break;
                        case 32:
                            if (t && Ue.k.up) {
                                yt();
                                break
                            }
                        case 40:
                        case 34:
                            Ue.k.down && Et();
                            break;
                        case 36:
                            Ue.k.up && xt(1);
                            break;
                        case 35:
                            Ue.k.down && xt(X(h).length);
                            break;
                        case 37:
                            Ue.k.left && Tt();
                            break;
                        case 39:
                            Ue.k.right && At()
                        }
                }(e)
            }, 150))
        }
        function fn(e) {
            Ve && (He = e.ctrlKey)
        }
        function dn(e) {
            2 == e.which && (ft = e.pageY,
            Ne.addEventListener("mousemove", gn))
        }
        function vn(e) {
            2 == e.which && Ne.removeEventListener("mousemove", gn)
        }
        function pn(e) {
            return [].slice.call(X(et, e)).filter(function(e) {
                return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
            })
        }
        function hn() {
            Ve = !1,
            He = !1
        }
        function gn(e) {
            Ye && (e.pageY < ft && Ue.m.up ? yt() : e.pageY > ft && Ue.m.down && Et()),
            ft = e.pageY
        }
        function mn(e, t, n) {
            var o, r, i = pe(e, h), l = {
                slides: e,
                destiny: t,
                direction: n,
                destinyPos: {
                    left: t.offsetLeft
                },
                slideIndex: ne(t),
                section: i,
                sectionIndex: ne(i, h),
                anchorLink: i.getAttribute("data-anchor"),
                slidesNav: X(j, i)[0],
                slideAnchor: Bn(t),
                prevSlide: X(O, i)[0],
                prevSlideIndex: ne(X(O, i)[0]),
                localIsResizing: De
            };
            l.xMovement = (o = l.prevSlideIndex,
            r = l.slideIndex,
            o == r ? "none" : o > r ? "left" : "right"),
            l.localIsResizing || (Ye = !1),
            oe.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && ye(oe.onSlideLeave) && !1 === Qt("onSlideLeave", l) ? Re = !1 : (ae(t, s),
            ce(be(t), s),
            l.localIsResizing || (rn(l.prevSlide),
            tn(t)),
            !oe.loopHorizontal && oe.controlArrows && (xe(X(Y, i), 0 !== l.slideIndex),
            xe(X(U, i), null != ee(t))),
            q(i, s) && !l.localIsResizing && In(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex),
            function(e, t, n) {
                var o = t.destinyPos;
                if (oe.css3) {
                    var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                    ke.test.translate3dH[t.sectionIndex] = r,
                    Q(yn(X(B, e)), Pn(r)),
                    qe = setTimeout(function() {
                        n && Sn(t)
                    }, oe.scrollingSpeed)
                } else
                    ke.test.left[t.sectionIndex] = Math.round(o.left),
                    Fn(e, Math.round(o.left), oe.scrollingSpeed, function() {
                        n && Sn(t)
                    })
            }(e, l, !0))
        }
        function Sn(e) {
            var t, n;
            t = e.slidesNav,
            n = e.slideIndex,
            oe.slidesNavigation && null != t && (ce(X(u, t), s),
            ae(X("a", X("li", t)[n]), s)),
            e.localIsResizing || (ye(oe.afterSlideLoad) && Qt("afterSlideLoad", e),
            Ye = !0,
            nn(e.destiny)),
            Re = !1
        }
        function bn() {
            if (wn(),
            ze) {
                var e = t.activeElement;
                if (!Le(e, "textarea") && !Le(e, "input") && !Le(e, "select")) {
                    var n = K();
                    Math.abs(n - dt) > 20 * Math.max(dt, n) / 100 && (Xe = setTimeout(function() {
                        kt(!0),
                        dt = n
                    }, navigator.userAgent.match("CriOS") ? 50 : 0))
                }
            } else
                clearTimeout(Xe),
                Xe = setTimeout(function() {
                    kt(!0)
                }, 350)
        }
        function wn() {
            var t = oe.responsive || oe.responsiveWidth
              , n = oe.responsiveHeight
              , o = t && e.innerWidth < t
              , r = n && e.innerHeight < n;
            t && n ? Mt(o || r) : t ? Mt(o) : n && Mt(r)
        }
        function yn(e) {
            var t = "all " + oe.scrollingSpeed + "ms " + oe.easingcss3;
            return ce(e, i),
            Q(e, {
                "-webkit-transition": t,
                transition: t
            })
        }
        function En(e) {
            return ae(e, i)
        }
        function Ln(e, t) {
            var n, o;
            n = e,
            o = X(oe.menu)[0],
            oe.menu && null != o && (ce(X(u, o), s),
            ae(X('[data-menuanchor="' + n + '"]', o), s)),
            function(e, t) {
                oe.navigation && null != X(E)[0] && (ce(X(u, X(E)[0]), s),
                ae(e ? X('a[href="#' + e + '"]', X(E)[0]) : X("a", X("li", X(E)[0])[t]), s))
            }(e, t)
        }
        function xn(e) {
            var t = ne(X(g)[0], h)
              , n = ne(e, h);
            return t == n ? "none" : t > n ? "up" : "down"
        }
        function An(e) {
            if (!q(e, R)) {
                var n = t.createElement("div");
                n.className = m,
                n.style.height = Tn(e) + "px",
                ae(e, R),
                de(e, n)
            }
        }
        function Tn(e) {
            var t = Pe;
            if (oe.paddingTop || oe.paddingBottom) {
                var n = e;
                q(n, p) || (n = pe(e, h));
                var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
                t = Pe - o
            }
            return t
        }
        function kn(e, t) {
            t ? yn(Ne) : En(Ne),
            Q(Ne, Pn(e)),
            ke.test.translate3d = e,
            setTimeout(function() {
                ce(Ne, i)
            }, 10)
        }
        function Mn(e) {
            var t = X(h + '[data-anchor="' + e + '"]', Ne)[0];
            if (!t) {
                var n = void 0 !== e ? e - 1 : 0;
                t = X(h)[n]
            }
            return t
        }
        function On(e, t) {
            var n = Mn(e);
            if (null != n) {
                var o = function(e, t) {
                    var n = X(M + '[data-anchor="' + e + '"]', t)[0];
                    return null == n && (e = void 0 !== e ? e : 0,
                    n = X(M, t)[e]),
                    n
                }(t, n);
                Bn(n) === Ce || q(n, s) ? Cn(o) : Kt(n, function() {
                    Cn(o)
                })
            }
        }
        function Cn(e) {
            null != e && mn(pe(e, I), e)
        }
        function In(e, t, n, o) {
            var r = "";
            oe.anchors.length && !oe.lockAnchors && (e ? (null != n && (r = n),
            null == t && (t = e),
            Ie = t,
            Hn(r + "/" + t)) : null != e ? (Ie = t,
            Hn(n)) : Hn(n)),
            Rn()
        }
        function Hn(t) {
            if (oe.recordHistory)
                location.hash = t;
            else if (ze || je)
                e.history.replaceState(void 0, void 0, "#" + t);
            else {
                var n = e.location.href.split("#")[0];
                e.location.replace(n + "#" + t)
            }
        }
        function Bn(e) {
            if (!e)
                return null;
            var t = e.getAttribute("data-anchor")
              , n = ne(e);
            return null == t && (t = n),
            t
        }
        function Rn() {
            var e = X(g)[0]
              , t = X(O, e)[0]
              , n = Bn(e)
              , o = Bn(t)
              , r = String(n);
            t && (r = r + "-" + o),
            r = r.replace("/", "-").replace("#", "");
            var i = new RegExp("\\b\\s?" + c + "-[^\\s]+\\b","g");
            me.className = me.className.replace(i, ""),
            ae(me, c + "-" + r)
        }
        function zn(e) {
            var t = [];
            return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
            t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
            je && Ft(e) && oe.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY,
            t.x = e.touches[0].pageX),
            t
        }
        function jn(e, t) {
            ht(0, "internal"),
            void 0 !== t && (De = !0),
            mn(pe(e, I), e),
            void 0 !== t && (De = !1),
            ht(tt.scrollingSpeed, "internal")
        }
        function Nn(e) {
            var t = Math.round(e);
            if (oe.css3 && oe.autoScrolling && !oe.scrollBar)
                kn("translate3d(0px, -" + t + "px, 0px)", !1);
            else if (oe.autoScrolling && !oe.scrollBar)
                Q(Ne, {
                    top: -t + "px"
                }),
                ke.test.top = -t + "px";
            else {
                var n = Jt(t);
                Un(n.element, n.options)
            }
        }
        function Pn(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }
        function Dn(e, t, n) {
            "all" !== t ? Ue[n][t] = e : Object.keys(Ue[n]).forEach(function(t) {
                Ue[n][t] = e
            })
        }
        function Vn(e, t, n) {
            oe[e] = t,
            "internal" !== n && (tt[e] = t)
        }
        function Yn() {
            le || (W("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),
            W("error", "https://github.com/alvarotrigo/fullPage.js#options.")),
            q(X("html"), a) ? W("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (oe.continuousVertical && (oe.loopTop || oe.loopBottom) && (oe.continuousVertical = !1,
            W("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            !oe.scrollOverflow || !oe.scrollBar && oe.autoScrolling || W("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),
            !oe.continuousVertical || !oe.scrollBar && oe.autoScrolling || (oe.continuousVertical = !1,
            W("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            oe.scrollOverflow && null == oe.scrollOverflowHandler && (oe.scrollOverflow = !1,
            W("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
            ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"].forEach(function(e) {
                oe[e] && W("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e)
            }),
            oe.anchors.forEach(function(e) {
                var t = [].slice.call(X("[name]")).filter(function(t) {
                    return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                })
                  , n = [].slice.call(X("[id]")).filter(function(t) {
                    return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                });
                (n.length || t.length) && (W("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
                n.length && W("error", '"' + e + '" is is being used by another element `id` property'),
                t.length && W("error", '"' + e + '" is is being used by another element `name` property'))
            }))
        }
        function Fn(t, n, o, r) {
            var i = function(t) {
                return t.self != e && q(t, C) ? t.scrollLeft : !oe.autoScrolling || oe.scrollBar ? Se() : t.offsetTop
            }(t)
              , l = n - i
              , a = 0;
            Ge = !0;
            var c = function() {
                if (Ge) {
                    var s = n;
                    a += 20,
                    o && (s = e.fp_easings[oe.easing](a, i, l, o)),
                    Un(t, s),
                    a < o ? setTimeout(c, 20) : void 0 !== r && r()
                } else
                    a < o && r()
            };
            c()
        }
        function Un(t, n) {
            !oe.autoScrolling || oe.scrollBar || t.self != e && q(t, C) ? t.self != e && q(t, C) ? t.scrollLeft = n : t.scrollTo(0, n) : t.style.top = n + "px"
        }
        function Wn(e, t) {
            this.anchor = e.getAttribute("data-anchor"),
            this.item = e,
            this.index = ne(e, t),
            this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1,
            this.isFirst = !this.index
        }
        function Xn(e) {
            Wn.call(this, e, h)
        }
        function _n(e) {
            Wn.call(this, e, M)
        }
        Yn()
    }
}),
window.jQuery && window.fullpage && function(e, t) {
    "use strict";
    e && t ? e.fn.fullpage = function(n) {
        var o = new t(this[0],n);
        Object.keys(o).forEach(function(t) {
            e.fn.fullpage[t] = o[t]
        })
    }
    : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
}(window.jQuery, window.fullpage);

/**
 * @module       Parallax.js
 * @author       Matthew Wagerfield - @wagerfield
 * @see          https://github.com/wagerfield/parallax
 * @license      MIT
 */
!function(a, b, c) {
    "use strict";
    function g(a, b) {
        this.element = a,
        this.layers = a.getElementsByClassName("layer");
        var c = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        for (var d in c)
            null === c[d] && delete c[d];
        this.extend(this, f, b, c),
        this.calibrationTimer = null,
        this.calibrationFlag = !0,
        this.enabled = !1,
        this.depths = [],
        this.raf = null,
        this.bounds = null,
        this.ex = 0,
        this.ey = 0,
        this.ew = 0,
        this.eh = 0,
        this.ecx = 0,
        this.ecy = 0,
        this.erx = 0,
        this.ery = 0,
        this.cx = 0,
        this.cy = 0,
        this.ix = 0,
        this.iy = 0,
        this.mx = 0,
        this.my = 0,
        this.vx = 0,
        this.vy = 0,
        this.onMouseMove = this.onMouseMove.bind(this),
        this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
        this.onOrientationTimer = this.onOrientationTimer.bind(this),
        this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
        this.onAnimationFrame = this.onAnimationFrame.bind(this),
        this.onWindowResize = this.onWindowResize.bind(this),
        this.initialise()
    }
    var d = "Parallax"
      , e = 30
      , f = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    g.prototype.extend = function() {
        if (arguments.length > 1)
            for (var a = arguments[0], b = 1, c = arguments.length; b < c; b++) {
                var d = arguments[b];
                for (var e in d)
                    a[e] = d[e]
            }
    }
    ,
    g.prototype.data = function(a, b) {
        return this.deserialize(a.getAttribute("data-" + b))
    }
    ,
    g.prototype.deserialize = function(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : !isNaN(parseFloat(a)) && isFinite(a) ? parseFloat(a) : a)
    }
    ,
    g.prototype.camelCase = function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
            return b ? b.toUpperCase() : ""
        })
    }
    ,
    g.prototype.transformSupport = function(d) {
        for (var e = b.createElement("div"), f = !1, g = null, h = !1, i = null, j = null, k = 0, l = this.vendors.length; k < l; k++)
            if (null !== this.vendors[k] ? (i = this.vendors[k][0] + "transform",
            j = this.vendors[k][1] + "Transform") : (i = "transform",
            j = "transform"),
            e.style[j] !== c) {
                f = !0;
                break
            }
        switch (d) {
        case "2D":
            h = f;
            break;
        case "3D":
            if (f) {
                var m = b.body || b.createElement("body")
                  , n = b.documentElement
                  , o = n.style.overflow;
                b.body || (n.style.overflow = "hidden",
                n.appendChild(m),
                m.style.overflow = "hidden",
                m.style.background = ""),
                m.appendChild(e),
                e.style[j] = "translate3d(1px,1px,1px)",
                g = a.getComputedStyle(e).getPropertyValue(i),
                h = g !== c && g.length > 0 && "none" !== g,
                n.style.overflow = o,
                m.removeChild(e)
            }
        }
        return h
    }
    ,
    g.prototype.ww = null,
    g.prototype.wh = null,
    g.prototype.wcx = null,
    g.prototype.wcy = null,
    g.prototype.wrx = null,
    g.prototype.wry = null,
    g.prototype.portrait = null,
    g.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
    g.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
    g.prototype.motionSupport = !!a.DeviceMotionEvent,
    g.prototype.orientationSupport = !!a.DeviceOrientationEvent,
    g.prototype.orientationStatus = 0,
    g.prototype.propertyCache = {},
    g.prototype.initialise = function() {
        g.prototype.transform2DSupport === c && (g.prototype.transform2DSupport = g.prototype.transformSupport("2D"),
        g.prototype.transform3DSupport = g.prototype.transformSupport("3D")),
        this.transform3DSupport && this.accelerate(this.element);
        var b = a.getComputedStyle(this.element);
        "static" === b.getPropertyValue("position") && (this.element.style.position = "relative"),
        this.updateLayers(),
        this.updateDimensions(),
        this.enable(),
        this.queueCalibration(this.calibrationDelay)
    }
    ,
    g.prototype.updateLayers = function() {
        this.layers = this.element.getElementsByClassName("layer"),
        this.depths = [];
        for (var a = 0, b = this.layers.length; a < b; a++) {
            var c = this.layers[a];
            this.transform3DSupport && this.accelerate(c),
            c.style.position = a ? "absolute" : "relative",
            c.style.display = "block",
            c.style.left = 0,
            c.style.top = 0,
            this.depths.push(this.data(c, "depth") || 0)
        }
    }
    ,
    g.prototype.updateDimensions = function() {
        this.ww = a.innerWidth,
        this.wh = a.innerHeight,
        this.wcx = this.ww * this.originX,
        this.wcy = this.wh * this.originY,
        this.wrx = Math.max(this.wcx, this.ww - this.wcx),
        this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }
    ,
    g.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(),
        this.ex = this.bounds.left,
        this.ey = this.bounds.top,
        this.ew = this.bounds.width,
        this.eh = this.bounds.height,
        this.ecx = this.ew * this.originX,
        this.ecy = this.eh * this.originY,
        this.erx = Math.max(this.ecx, this.ew - this.ecx),
        this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }
    ,
    g.prototype.queueCalibration = function(a) {
        clearTimeout(this.calibrationTimer),
        this.calibrationTimer = setTimeout(this.onCalibrationTimer, a)
    }
    ,
    g.prototype.enable = function() {
        this.enabled || (this.enabled = !0,
        this.orientationSupport ? (this.portrait = null,
        a.addEventListener("deviceorientation", this.onDeviceOrientation),
        setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0,
        this.cy = 0,
        this.portrait = !1,
        a.addEventListener("mousemove", this.onMouseMove)),
        a.addEventListener("resize", this.onWindowResize),
        this.raf = requestAnimationFrame(this.onAnimationFrame))
    }
    ,
    g.prototype.disable = function() {
        this.enabled && (this.enabled = !1,
        this.orientationSupport ? a.removeEventListener("deviceorientation", this.onDeviceOrientation) : a.removeEventListener("mousemove", this.onMouseMove),
        a.removeEventListener("resize", this.onWindowResize),
        cancelAnimationFrame(this.raf))
    }
    ,
    g.prototype.calibrate = function(a, b) {
        this.calibrateX = a === c ? this.calibrateX : a,
        this.calibrateY = b === c ? this.calibrateY : b
    }
    ,
    g.prototype.invert = function(a, b) {
        this.invertX = a === c ? this.invertX : a,
        this.invertY = b === c ? this.invertY : b
    }
    ,
    g.prototype.friction = function(a, b) {
        this.frictionX = a === c ? this.frictionX : a,
        this.frictionY = b === c ? this.frictionY : b
    }
    ,
    g.prototype.scalar = function(a, b) {
        this.scalarX = a === c ? this.scalarX : a,
        this.scalarY = b === c ? this.scalarY : b
    }
    ,
    g.prototype.limit = function(a, b) {
        this.limitX = a === c ? this.limitX : a,
        this.limitY = b === c ? this.limitY : b
    }
    ,
    g.prototype.origin = function(a, b) {
        this.originX = a === c ? this.originX : a,
        this.originY = b === c ? this.originY : b
    }
    ,
    g.prototype.clamp = function(a, b, c) {
        return a = Math.max(a, b),
        a = Math.min(a, c)
    }
    ,
    g.prototype.css = function(a, b, d) {
        var e = this.propertyCache[b];
        if (!e)
            for (var f = 0, g = this.vendors.length; f < g; f++)
                if (e = null !== this.vendors[f] ? this.camelCase(this.vendors[f][1] + "-" + b) : b,
                a.style[e] !== c) {
                    this.propertyCache[b] = e;
                    break
                }
        a.style[e] = d
    }
    ,
    g.prototype.accelerate = function(a) {
        this.css(a, "transform", "translate3d(0,0,0)"),
        this.css(a, "transform-style", "preserve-3d"),
        this.css(a, "backface-visibility", "hidden")
    }
    ,
    g.prototype.setPosition = function(a, b, c) {
        b += "px",
        c += "px",
        this.transform3DSupport ? this.css(a, "transform", "translate3d(" + b + "," + c + ",0)") : this.transform2DSupport ? this.css(a, "transform", "translate(" + b + "," + c + ")") : (a.style.left = b,
        a.style.top = c)
    }
    ,
    g.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(),
        this.orientationSupport = !1,
        this.enable())
    }
    ,
    g.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    }
    ,
    g.prototype.onWindowResize = function() {
        this.updateDimensions()
    }
    ,
    g.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var a = this.ix - this.cx
          , b = this.iy - this.cy;
        (Math.abs(a) > this.calibrationThreshold || Math.abs(b) > this.calibrationThreshold) && this.queueCalibration(0),
        this.portrait ? (this.mx = this.calibrateX ? b : this.iy,
        this.my = this.calibrateY ? a : this.ix) : (this.mx = this.calibrateX ? a : this.ix,
        this.my = this.calibrateY ? b : this.iy),
        this.mx *= this.ew * (this.scalarX / 100),
        this.my *= this.eh * (this.scalarY / 100),
        isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
        isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
        this.vx += (this.mx - this.vx) * this.frictionX,
        this.vy += (this.my - this.vy) * this.frictionY;
        for (var c = 0, d = this.layers.length; c < d; c++) {
            var e = this.layers[c]
              , f = this.depths[c]
              , g = this.vx * f * (this.invertX ? -1 : 1)
              , h = this.vy * f * (this.invertY ? -1 : 1);
            this.setPosition(e, g, h)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }
    ,
    g.prototype.onDeviceOrientation = function(a) {
        if (!this.desktop && null !== a.beta && null !== a.gamma) {
            this.orientationStatus = 1;
            var b = (a.beta || 0) / e
              , c = (a.gamma || 0) / e
              , d = this.wh > this.ww;
            this.portrait !== d && (this.portrait = d,
            this.calibrationFlag = !0),
            this.calibrationFlag && (this.calibrationFlag = !1,
            this.cx = b,
            this.cy = c),
            this.ix = b,
            this.iy = c
        }
    }
    ,
    g.prototype.onMouseMove = function(a) {
        var b = a.clientX
          , c = a.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (b = Math.max(b, this.ex),
        b = Math.min(b, this.ex + this.ew),
        c = Math.max(c, this.ey),
        c = Math.min(c, this.ey + this.eh)),
        this.ix = (b - this.ex - this.ecx) / this.erx,
        this.iy = (c - this.ey - this.ecy) / this.ery) : (this.ix = (b - this.wcx) / this.wrx,
        this.iy = (c - this.wcy) / this.wry)
    }
    ,
    a[d] = g
}(window, document);

/**
 * @module Tilt.js
 * @Licensed MIT license
 * @see https://github.com/gijsroge/tilt.js
 */
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
}
: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}
;
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function(i, s) {
        return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(i)),
        t(s),
        s
    }
    : t(jQuery)
}(function(t) {
    return t.fn.tilt = function(i) {
        var s = function() {
            this.ticking || (requestAnimationFrame(g.bind(this)),
            this.ticking = !0)
        }
          , e = function() {
            var i = this;
            t(this).on("mousemove", o),
            t(this).on("mouseenter", a),
            this.settings.reset && t(this).on("mouseleave", l),
            this.settings.glare && t(window).on("resize", d.bind(i))
        }
          , n = function() {
            var i = this;
            void 0 !== this.timeout && clearTimeout(this.timeout),
            t(this).css({
                transition: this.settings.speed + "ms " + this.settings.easing
            }),
            this.settings.glare && this.glareElement.css({
                transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
            }),
            this.timeout = setTimeout(function() {
                t(i).css({
                    transition: ""
                }),
                i.settings.glare && i.glareElement.css({
                    transition: ""
                })
            }, this.settings.speed)
        }
          , a = function(i) {
            this.ticking = !1,
            t(this).css({
                "will-change": "transform"
            }),
            n.call(this),
            t(this).trigger("tilt.mouseEnter")
        }
          , r = function(i) {
            return "undefined" == typeof i && (i = {
                pageX: t(this).offset().left + t(this).outerWidth() / 2,
                pageY: t(this).offset().top + t(this).outerHeight() / 2
            }),
            {
                x: i.pageX,
                y: i.pageY
            }
        }
          , o = function(t) {
            this.mousePositions = r(t),
            s.call(this)
        }
          , l = function() {
            n.call(this),
            this.reset = !0,
            s.call(this),
            t(this).trigger("tilt.mouseLeave")
        }
          , h = function() {
            var i = t(this).outerWidth()
              , s = t(this).outerHeight()
              , e = t(this).offset().left
              , n = t(this).offset().top
              , a = (this.mousePositions.x - e) / i
              , r = (this.mousePositions.y - n) / s
              , o = (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2)
              , l = (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2)
              , h = Math.atan2(this.mousePositions.x - (e + i / 2), -(this.mousePositions.y - (n + s / 2))) * (180 / Math.PI);
            return {
                tiltX: o,
                tiltY: l,
                percentageX: 100 * a,
                percentageY: 100 * r,
                angle: h
            }
        }
          , g = function() {
            return this.transforms = h.call(this),
            this.reset ? (this.reset = !1,
            t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"),
            void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"),
            this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"),
            this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"),
            this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)),
            t(this).trigger("change", [this.transforms]),
            void (this.ticking = !1))
        }
          , c = function() {
            var i = this.settings.glarePrerender;
            if (i || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
            this.glareElementWrapper = t(this).find(".js-tilt-glare"),
            this.glareElement = t(this).find(".js-tilt-glare-inner"),
            !i) {
                var s = {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%"
                };
                this.glareElementWrapper.css(s).css({
                    overflow: "hidden",
                    "pointer-events": "none"
                }),
                this.glareElement.css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    width: "" + 2 * t(this).outerWidth(),
                    height: "" + 2 * t(this).outerWidth(),
                    transform: "rotate(180deg) translate(-50%, -50%)",
                    "transform-origin": "0% 0%",
                    opacity: "0"
                })
            }
        }
          , d = function() {
            this.glareElement.css({
                width: "" + 2 * t(this).outerWidth(),
                height: "" + 2 * t(this).outerWidth()
            })
        };
        return t.fn.tilt.destroy = function() {
            t(this).each(function() {
                t(this).find(".js-tilt-glare").remove(),
                t(this).css({
                    "will-change": "",
                    transform: ""
                }),
                t(this).off("mousemove mouseenter mouseleave")
            })
        }
        ,
        t.fn.tilt.getValues = function() {
            var i = [];
            return t(this).each(function() {
                this.mousePositions = r.call(this),
                i.push(h.call(this))
            }),
            i
        }
        ,
        t.fn.tilt.reset = function() {
            t(this).each(function() {
                var i = this;
                this.mousePositions = r.call(this),
                this.settings = t(this).data("settings"),
                l.call(this),
                setTimeout(function() {
                    i.reset = !1
                }, this.settings.transition)
            })
        }
        ,
        this.each(function() {
            var s = this;
            this.settings = t.extend({
                maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
                easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
                transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
                axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
            }, i),
            null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),
            this.settings.disableAxis = this.settings.axis),
            this.init = function() {
                t(s).data("settings", s.settings),
                s.settings.glare && c.call(s),
                e.call(s)
            }
            ,
            this.init()
        })
    }
    ,
    t("[data-tilt]").tilt(),
    !0
});