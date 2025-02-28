(function (_) {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    /*


 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
    var ca, da, ha, ia, la, na, pa, oa, ra, za, Ia, La, Oa, Qa, Sa, Xa, Va, Ya, Za, $a, bb, cb, fb, gb, ib, jb, kb, mb,
        nb, rb, sb, vb, yb, Ab, Cb, Eb, Ib, Kb, Jb, Lb, Mb, Fb, Nb, Qb, Rb, Ub, Vb, Xb, Yb, $b, fc, gc, jc, lc, nc, pc,
        qc, sc, tc, vc, xc, yc, Cc, Ec, Jc, Kc, Mc, Wc, Xc, Yc, Zc, Uc, Tc, Nc, cd, dd, gd, hd, od, jd, qd, rd, td, wd,
        xd, zd, Ad, Bd, Fd, Hd, Gd, Rd, Td, Sd, Vd, Ud, Wd, Yd, yd, ce, de, ee, he, ne, ie, ke, le, oe, pe, re, se, te,
        xe, ye, ze, je, me, Ie, Je, Me, Ne, Oe, Pe, Te, Ue, Ve, Re, bf, Se, cf, gf, kf, mf, qf, rf, sf, Lf, Nf, Pf, Tf,
        Vf, Wf, $f, ag, bg, dg, eg, fg, gg, hg, kg, og, qg, pg, ug, wg, xg, Ng, Og, Qg, Rg, Vg, Yg, Zg, ah, ch, eh, fh,
        ih, jh, nh, oh, qh, rh, th, sh, vh, wh, xh, yh, Ah, Bh, Ch, Dh, Qh, Rh, Sh, Vh, Xh, ai, Zh, di, ii, ji, ki, gi,
        hi, li, mi, wi, ui, zi, Hi, ni, Qi, aj, bj, fj, lj, nj, oj, rj, wj, zj, Aj, Lj, Oj, Pj, Qj, Xj, Yj, Zj, ak, bk,
        dk, gk, ek, hk, fk, ik, kk, nk, pk, qk, tk, rk, wk, xk, yk, Ck, Dk, Jk, Kk, Vk, al, Zk, $k, fl, jl, ll, ml, nl,
        pl, tl, Al, wl, ql, Il, Gl, Hl, Kl, Ll, Ol, Vl, Yl, Zl, L, $l, fm, dm, qm, N, sm, tm, um, wm, ym, zm, Gm, Hm,
        Jm, Km, Qm, Xm, Zm, an, bn, cn, dn, en, hn, mn, on, qn, pn, In, Jn, Kn, Ln, rn, Mn, En, Pn, Qn, Un, Vn, Yn, Zn,
        $n, bo, go, lo, no, oo, qo, ro, vo, wo, xo, Bo, uo, Do, Eo, Fo, Ho, Ko, Mo, No, Oo, Po, Ro, So, Wo, Yo, Zo, Xo,
        dp, ep, fp, jp, kp, mp, wp, yp, Bp, Ep, Dp, Cp, Op, Rp, Sp, Tp, Up, Wp, Yp, Zp, $p, bq, cq, eq, dq, gq, jq, iq,
        kq, mq, nq, qq, rq, tq, wq, vq, yq, zq, Aq, Cq, Dq, Fq, Eq, Iq, Kq, Mq, Oq, Tq, Uq, Vq, Yq, ar, Zq, $q, br, cr,
        fr, gr, hr, ir, jr, kr, lr, mr, or, sr, ur, vr, wr, zr, Jr, Cr, Or, Pr, Qr, Rr, Tr, Vr, Xr, $r, cs, ls, as, bs,
        es, fs, Zr, ds, ps, ts, vs, xs, zs, Ra, As, Bs, Ds, Cs, Es, Fs, Hs, Is, Ks, Ms, Qs, Rs, Ns, Ss, Ts, Vs, Xs, Zs,
        $s, bt, ct, lt, mt, qt, rt, st, tt, zt, Bt, Dt, Et, Ft, It, Wt, Bu, Cu, rv, uv, Cv, yv, zv, Fv, Jv, Mv, Ov, Nv,
        cw, fw, gw, hw, iw, kw, jw, mw, uw, yw, Ew, Iw, Jw, Kw, Lw, Nw, Ow, Pw, Qw, Sw, Tw, Uw, ax, bx, cx, Sf, ex, hx,
        fx, gx, ix, jx;
    ca = function (a) {
        return function () {
            return _.ba[a].apply(this, arguments)
        }
    };
    da = function () {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    ha = function (a) {
        return ea ? fa ? fa.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    };
    ia = function (a) {
        return -1 != da().indexOf(a)
    };
    la = function () {
        return ea ? !!fa && 0 < fa.brands.length : !1
    };
    na = function () {
        return ia("Firefox") || ia("FxiOS")
    };
    pa = function () {
        !ia("Safari") || oa() || (la() ? 0 : ia("Coast")) || (la() ? 0 : ia("Opera")) || (la() ? 0 : ia("Edge")) || (la() ? ha("Microsoft Edge") : ia("Edg/")) || la() && ha("Opera")
    };
    oa = function () {
        return la() ? ha("Chromium") : (ia("Chrome") || ia("CriOS")) && !(la() ? 0 : ia("Edge")) || ia("Silk")
    };
    ra = function (a) {
        return new qa(function (b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.xa = function (a) {
        var b = void 0 === b ? sa : b;
        a:if (b = void 0 === b ? sa : b, !(a instanceof _.ua)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof qa && d.ul(a)) {
                    a = va(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.wa
    };
    za = function (a) {
        for (var b = _.ya.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return va(c.join(""))
    };
    _.Ca = function (a) {
        if (Aa.test(a)) return a
    };
    _.Ea = function (a) {
        return a instanceof _.ua ? _.Da(a) : _.Ca(a)
    };
    _.Fa = function (a, b) {
        b = _.Ea(b);
        void 0 !== b && (a.href = b)
    };
    Ia = function (a, b) {
        b = _.Ha(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    _.Ja = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    La = function (a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    Oa = function (a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++], f = _.Ma(e) ? "o" + _.Na(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    Qa = function (a, b) {
        a.sort(b || _.Pa)
    };
    Sa = function (a) {
        for (var b = Ra, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {index: d, value: a[d]};
        var e = b || _.Pa;
        Qa(c, function (f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    Xa = function (a, b) {
        if (!_.Ua(a) || !_.Ua(b) || a.length != b.length) return !1;
        for (var c = a.length, d = Va, e = 0; e < c; e++) if (!d(a[e], b[e])) return !1;
        return !0
    };
    _.Pa = function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    Va = function (a, b) {
        return a === b
    };
    Ya = function (a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d], f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    Za = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d)) for (var e = 0; e < d.length; e += 8192) for (var f = Za.apply(null, La(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]); else b.push(d)
        }
        return b
    };
    $a = function (a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    bb = function (a) {
        var b = [], c = 0, d;
        for (d in a) b[c++] = a[d];
        return b
    };
    cb = function (a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return c
    };
    fb = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < db.length; f++) c = db[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    gb = function (a) {
        throw Error("unexpected value " + a + "!");
    };
    ib = function (a) {
        var b = new hb;
        b.Ni = a;
        return b
    };
    jb = function (a) {
        var b, c,
            d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    kb = function (a, b) {
        if (b instanceof hb) b = b.Ni; else throw Error("");
        a.textContent = b;
        jb(a)
    };
    mb = function (a, b) {
        a.src = _.lb(b);
        jb(a)
    };
    nb = function (a) {
        a = a(function (b) {
            b.name = b.constructor.name;
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        a.prototype.constructor = a
    };
    rb = function (a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (ob) {
            if (b && (pb ? !a.vl() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (qb || (qb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f; else {
                    if (2048 > f) d[c++] = f >> 6 | 192; else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    sb = function (a) {
        _.t.setTimeout(function () {
            throw a;
        }, 0)
    };
    vb = function (a) {
        if (!tb) return ub(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    yb = function (a) {
        return wb[a] || ""
    };
    Ab = function (a) {
        return zb && null != a && a instanceof Uint8Array
    };
    Cb = function (a) {
        if (a !== Bb) throw Error("illegal external caller");
    };
    Eb = function () {
        return "function" === typeof BigInt
    };
    Ib = function (a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.u(Fb(c, a)), b = c.next().value, a = c.next().value, c = b);
        Gb = c >>> 0;
        Hb = a >>> 0
    };
    Kb = function (a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a); else Eb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Jb(c) + Jb(a));
        return c
    };
    Jb = function (a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    };
    Lb = function () {
        var a = Gb, b = Hb;
        b & 2147483648 ? Eb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = _.u(Fb(a, b)), a = b.next().value, b = b.next().value, a = "-" + Kb(a, b)) : a = Kb(a, b);
        return a
    };
    Mb = function (a) {
        if (16 > a.length) Ib(Number(a)); else if (Eb()) a = BigInt(a), Gb = Number(a & BigInt(4294967295)) >>> 0, Hb = Number(a >> BigInt(32) & BigInt(4294967295)); else {
            var b = +("-" === a[0]);
            Hb = Gb = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Hb *= 1E6, Gb = 1E6 * Gb + d, 4294967296 <= Gb && (Hb += _.x(Math, "trunc").call(Math, Gb / 4294967296), Hb >>>= 0, Gb >>>= 0);
            b && (b = _.u(Fb(Gb, Hb)), a = b.next().value, b = b.next().value, Gb = a, Hb = b)
        }
    };
    Fb = function (a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    Nb = function (a) {
        return Array.prototype.slice.call(a)
    };
    Qb = function (a) {
        return "function" === typeof _.A.Symbol && "symbol" === typeof (0, _.A.Symbol)() ? (0, _.A.Symbol)() : a
    };
    Rb = function (a, b, c) {
        return c ? a | b : a & ~b
    };
    Ub = function (a) {
        Tb(a, 34);
        return a
    };
    Vb = function (a) {
        Tb(a, 32);
        return a
    };
    Xb = function (a, b) {
        Wb(b, (a | 0) & -14591)
    };
    Yb = function (a, b) {
        Wb(b, (a | 34) & -14557)
    };
    $b = function (a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    fc = function (a) {
        return !(!a || "object" !== typeof a || a.zl !== ac)
    };
    gc = function (a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    jc = function (a, b, c) {
        if (null != a) if ("string" === typeof a) a = a ? new hc(a, Bb) : ic(); else if (a.constructor !== hc) if (Ab(a)) a = a.length ? new hc(c ? a : new Uint8Array(a), Bb) : ic(); else {
            if (!b) throw Error();
            a = void 0
        }
        return a
    };
    lc = function (a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = kc(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? _.x(b, "includes").call(b, c) : b.has(c)))) return !1;
        Wb(a, d | 1);
        return !0
    };
    nc = function (a) {
        if (a & 2) throw Error();
    };
    pc = function (a) {
        if (oc) throw Error("");
        oc = function (b) {
            _.t.setTimeout(function () {
                a(b)
            }, 0)
        }
    };
    qc = function (a) {
        if (oc) try {
            oc(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    };
    sc = function () {
        var a = Error();
        rc(a, "incident");
        oc ? qc(a) : sb(a)
    };
    tc = function (a) {
        a = Error(a);
        rc(a, "warning");
        qc(a);
        return a
    };
    _.uc = function (a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    vc = function (a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    };
    xc = function (a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + wc(a) + ": " + a);
        return a
    };
    yc = function (a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    };
    _.Ac = function (a) {
        var b = typeof a;
        return "number" === b ? _.x(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : zc.test(a)
    };
    _.Bc = function (a) {
        if (!_.x(Number, "isFinite").call(Number, a)) throw tc("enum");
        return a | 0
    };
    Cc = function (a) {
        return null == a ? a : _.Bc(a)
    };
    _.Dc = function (a) {
        return null == a ? a : _.x(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Ec = function (a) {
        if ("number" !== typeof a) throw tc("int32");
        if (!_.x(Number, "isFinite").call(Number, a)) throw tc("int32");
        return a | 0
    };
    Jc = function (a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.x(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Kc = function (a) {
        if ("number" !== typeof a) throw tc("uint32");
        if (!_.x(Number, "isFinite").call(Number, a)) throw tc("uint32");
        return a >>> 0
    };
    _.Lc = function (a) {
        return null == a ? a : Kc(a)
    };
    Mc = function (a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.x(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    };
    _.Vc = function (a, b) {
        b = !!b;
        if (!_.Ac(a)) throw tc("int64");
        return "string" === typeof a ? Nc(a) : b ? Tc(a) : Uc(a)
    };
    Wc = function (a) {
        return null == a ? a : _.Vc(a)
    };
    Xc = function (a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    };
    Yc = function (a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    };
    Zc = function (a) {
        if (0 > a) {
            Ib(a);
            var b = Kb(Gb, Hb);
            a = Number(b);
            return _.x(Number, "isSafeInteger").call(Number, a) ? a : b
        }
        if (Xc(String(a))) return a;
        Ib(a);
        return 4294967296 * Hb + (Gb >>> 0)
    };
    Uc = function (a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (!_.x(Number, "isSafeInteger").call(Number, a)) {
            Ib(a);
            var b = Gb, c = Hb;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    };
    _.$c = function (a) {
        a = _.x(Math, "trunc").call(Math, a);
        return 0 <= a && _.x(Number, "isSafeInteger").call(Number, a) ? a : Zc(a)
    };
    Tc = function (a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (_.x(Number, "isSafeInteger").call(Number, a)) a = String(a); else {
            var b = String(a);
            Yc(b) ? a = b : (Ib(a), a = Lb())
        }
        return a
    };
    _.ad = function (a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (0 <= a && _.x(Number, "isSafeInteger").call(Number, a)) a = String(a); else {
            var b = String(a);
            Xc(b) ? a = b : (Ib(a), a = Kb(Gb, Hb))
        }
        return a
    };
    Nc = function (a) {
        var b = _.x(Math, "trunc").call(Math, Number(a));
        if (_.x(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        Yc(a) || (Mb(a), a = Lb());
        return a
    };
    _.bd = function (a) {
        var b = _.x(Math, "trunc").call(Math, Number(a));
        if (_.x(Number, "isSafeInteger").call(Number, b) && 0 <= b) return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        Xc(a) || (Mb(a), a = Kb(Gb, Hb));
        return a
    };
    cd = function (a) {
        if (null == a) return a;
        if (_.Ac(a)) {
            var b;
            "number" === typeof a ? b = Uc(a) : b = Nc(a);
            return b
        }
    };
    dd = function (a, b) {
        b = void 0 === b ? !1 : b;
        if (null == a) return a;
        if (_.Ac(a)) return "string" === typeof a ? Nc(a) : b ? Tc(a) : Uc(a)
    };
    _.ed = function (a) {
        if (null != a) {
            var b = !!b;
            if (!_.Ac(a)) throw tc("uint64");
            a = "string" === typeof a ? _.bd(a) : b ? _.ad(a) : _.$c(a)
        }
        return a
    };
    _.fd = function (a) {
        if ("string" !== typeof a) throw Error();
        return a
    };
    gd = function (a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    };
    hd = function (a) {
        return null == a || "string" === typeof a ? a : void 0
    };
    od = function (a, b, c, d) {
        if (null != a && "object" === typeof a && a.yg === id) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? jd(b) : new b : void 0;
        var e = c = kc(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && Wb(a, e);
        return new b(a)
    };
    jd = function (a) {
        var b = a[pd];
        if (b) return b;
        b = new a;
        Ub(b.D);
        return a[pd] = b
    };
    qd = function (a, b, c) {
        if (b) return xc(a);
        var d;
        return null != (d = yc(a)) ? d : c ? !1 : void 0
    };
    rd = function (a, b, c) {
        if (b) return _.fd(a);
        var d;
        return null != (d = hd(a)) ? d : c ? "" : void 0
    };
    td = function (a, b) {
        sd = b;
        a = new a(b);
        sd = void 0;
        return a
    };
    wd = function (a) {
        switch (typeof a) {
            case "boolean":
                return ud || (ud = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? vd || (vd = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.B = function (a, b, c) {
        null == a && (a = sd);
        sd = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = kc(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a:{
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (gc(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (1024 <= b) throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (1024 < b) throw Error("spvt");
                    d = d & -16760833 | (b & 1023) << 14
                }
            }
        }
        Wb(a, d);
        return a
    };
    xd = function (a) {
        return a
    };
    zd = function (a, b, c, d, e, f) {
        a = od(a, d, c, f);
        e && (a = yd(a));
        return a
    };
    Ad = function (a) {
        return a
    };
    Bd = function (a) {
        return [a, this.get(a)]
    };
    Fd = function () {
        return Cd || (Cd = new Dd(Ub([]), void 0, void 0, void 0, Ed))
    };
    Hd = function (a, b) {
        return Gd(b)
    };
    Gd = function (a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a) if (Array.isArray(a)) {
                    if (lc(a, void 0, 0)) return
                } else {
                    if (Ab(a)) return vb(a);
                    if (a instanceof hc) return Id(a);
                    if (a instanceof Dd) return Jd(a)
                }
        }
        return a
    };
    Rd = function (a, b, c) {
        a = Nb(a);
        var d = a.length, e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    };
    Td = function (a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = lc(a, void 0, 0) ? void 0 : e && kc(a) & 2 ? a : Sd(a, b, c, void 0 !== d, e); else if (gc(a)) {
                var f = {}, g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Td(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    };
    Sd = function (a, b, c, d, e) {
        var f = d || c ? kc(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = Nb(a);
        for (var g = 0; g < a.length; g++) a[g] = Td(a[g], b, c, d, e);
        c && c(f, a);
        return a
    };
    Vd = function (a) {
        return Td(a, Ud, void 0, void 0, !1)
    };
    Ud = function (a) {
        return a.yg === id ? a.toJSON() : a instanceof Dd ? Jd(a, Vd) : Gd(a)
    };
    Wd = function (a, b, c) {
        c = void 0 === c ? Yb : c;
        if (null != a) {
            if (zb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = kc(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? Wb(a, (d | 34) & -12293) : Sd(a, Wd, d & 4 ? Yb : c, !0, !0)
            }
            a.yg === id ? (c = a.D, d = Xd(c), a = d & 2 ? a : td(a.constructor, Yd(c, d, !0))) : a instanceof Dd && !(a.Dd & 2) && (c = Ub(Zd(a, Wd)), a = new Dd(c, a.Cf, a.Sd, a.mh));
            return a
        }
    };
    _.$d = function (a) {
        var b = a.D;
        return td(a.constructor, Yd(b, Xd(b), !1))
    };
    Yd = function (a, b, c) {
        var d = c || b & 2 ? Yb : Xb, e = !!(b & 32);
        a = Rd(a, b, function (f) {
            return Wd(f, e, d)
        });
        Tb(a, 32 | (c ? 2 : 0));
        return a
    };
    yd = function (a) {
        var b = a.D, c = Xd(b);
        return c & 2 ? td(a.constructor, Yd(b, c, !1)) : a
    };
    _.ae = function (a) {
        var b = a.D, c = Xd(b);
        return c & 2 ? a : td(a.constructor, Yd(b, c, !0))
    };
    ce = function (a, b, c, d) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[be] = (a.constructor[be] | 0) + 1) && sc();
        return 0 === c ? !1 : !(c & b)
    };
    de = function (a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    };
    ee = function (a, b, c, d, e) {
        var f = $b(b);
        if (c >= f || e) {
            var g = b;
            if (b & 256) e = a[a.length - 1]; else {
                if (null == d) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && Wb(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    he = function (a, b, c, d) {
        var e = b & 2, f = fe(a, b, c, d);
        Array.isArray(f) || (f = ge);
        var g = !!(b & 32), h = kc(f);
        0 === h && g && !e ? (h |= 33, Wb(f, h)) : h & 1 || (h |= 1, Wb(f, h));
        if (e) h & 2 || Ub(f), Object.freeze(f); else if (2 & h || 2048 & h) f = Nb(f), e = 1, g && (e |= 32), Wb(f, e), ee(a, b, c, f, d);
        return f
    };
    ne = function (a, b, c, d, e, f, g) {
        var h = a.D, k = Xd(h);
        d = 2 & k ? 1 : d;
        f = !!f;
        var l = ie(h, k, b, e), m = kc(l);
        if (ce(a, m, g, f)) {
            if (4 & m || Object.isFrozen(l)) l = Nb(l), m = je(m, k), k = ee(h, k, b, l, e);
            for (var n = a = 0; a < l.length; a++) {
                var p = c(l[a]);
                null != p && (l[n++] = p)
            }
            n < a && (l.length = n);
            m = ke(m, k);
            m = Rb(m, 20, !0);
            m = Rb(m, 4096, !1);
            m = Rb(m, 8192, !1);
            g && (m = Rb(m, g, !0));
            Wb(l, m);
            2 & m && Object.freeze(l)
        }
        le(m) || (g = m, (c = 1 === d) ? (32 & m || (l = Nb(l), g = 0, k = ee(h, k, b, l, e)), m = Rb(m, 2, !0)) : m = me(m, k, f), m !== g && Wb(l, m), c && Object.freeze(l));
        2 === d && le(m) && (l = Nb(l), m = je(m, k), m = me(m, k, f), Wb(l, m), ee(h, k, b, l, e));
        return l
    };
    ie = function (a, b, c, d) {
        a = fe(a, b, c, d);
        return Array.isArray(a) ? a : ge
    };
    ke = function (a, b) {
        0 === a && (a = je(a, b));
        return a = Rb(a, 1, !0)
    };
    le = function (a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    };
    oe = function (a) {
        return jc(a, !0, !0)
    };
    pe = function (a) {
        return jc(a, !0, !1)
    };
    re = function (a, b, c, d, e, f) {
        var g = b & 2;
        a:{
            var h = c, k = b & 2;
            c = !1;
            if (null == h) {
                if (k) {
                    a = Fd();
                    break a
                }
                h = []
            } else if (h.constructor === Dd) {
                if (0 == (h.Dd & 2) || k) {
                    a = h;
                    break a
                }
                h = Zd(h)
            } else Array.isArray(h) ? c = !!(kc(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Fd();
                    break a
                }
                c || (c = !0, Ub(h))
            } else if (c) {
                c = !1;
                k = Nb(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = Nb(k[h]);
                    Array.isArray(l[1]) && (l[1] = Ub(l[1]))
                }
                h = k
            }
            c || (kc(h) & 64 ? qe(h, 32) : 32 & b && Vb(h));
            f = new Dd(h, e, rd, f);
            ee(a, b, d, f, !1);
            a = f
        }
        if (null == a) return a;
        !g && e && (a.ek = !0);
        return a
    };
    se = function (a, b, c) {
        a = a.D;
        var d = Xd(a);
        return re(a, d, fe(a, d, b), b, void 0, c)
    };
    te = function (a, b, c) {
        a = a.D;
        var d = Xd(a);
        return re(a, d, fe(a, d, b), b, c)
    };
    _.ue = function (a, b, c, d) {
        var e = a.D, f = Xd(e);
        nc(f);
        if (null == c) return ee(e, f, b), a;
        var g = kc(c), h = g, k = !!(2 & g) || Object.isFrozen(c), l = !k && !1;
        if (ce(a, g)) for (g = 21, k && (c = Nb(c), h = 0, g = je(g, f), g = me(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = Nb(c), h = 0, g = je(g, f), g = me(g, f, !0));
        g !== h && Wb(c, g);
        ee(e, f, b, c);
        return a
    };
    _.ve = function (a, b, c, d) {
        var e = a.D, f = Xd(e);
        nc(f);
        ee(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    };
    _.we = function (a, b, c, d) {
        var e = a.D, f = Xd(e);
        nc(f);
        b = he(e, f, b);
        e = kc(b);
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    };
    xe = function (a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != fe(a, b, f) && (0 !== d && (b = ee(a, b, d)), d = f)
        }
        return d
    };
    ye = function (a, b, c, d) {
        a = a.D;
        var e = Xd(a), f = fe(a, e, c, d);
        b = od(f, b, !1, e);
        b !== f && null != b && ee(a, e, c, b, d);
        return b
    };
    ze = function (a, b, c, d, e, f) {
        var g = !!(2 & b), h = g ? 1 : 2, k = 1 === h;
        h = 2 === h;
        e = !!e;
        f && (f = !g);
        g = ie(a, b, d);
        var l = kc(g), m = !!(4 & l);
        if (!m) {
            l = ke(l, b);
            var n = g, p = b, r;
            (r = !!(2 & l)) && (p = Rb(p, 2, !0));
            for (var v = !r, w = !0, z = 0, y = 0; z < n.length; z++) {
                var C = od(n[z], c, !1, p);
                if (C instanceof c) {
                    if (!r) {
                        var G = !!(kc(C.D) & 2);
                        v && (v = !G);
                        w && (w = G)
                    }
                    n[y++] = C
                }
            }
            y < z && (n.length = y);
            l = Rb(l, 4, !0);
            l = Rb(l, 16, w);
            l = Rb(l, 8, v);
            Wb(n, l);
            r && Object.freeze(n)
        }
        c = !!(8 & l) || k && !g.length;
        if (f && !c) {
            le(l) && (g = Nb(g), l = je(l, b), b = ee(a, b, d, g));
            f = g;
            c = l;
            for (n = 0; n < f.length; n++) l = f[n], p = yd(l), l !== p && (f[n] = p);
            c = Rb(c, 8, !0);
            c = Rb(c, 16, !f.length);
            Wb(f, c);
            l = c
        }
        le(l) || (f = l, k ? (c = !!(32 & l), c || (g = Nb(g), f = 0, b = ee(a, b, d, g)), l = Rb(l, !g.length || 16 & l && (!m || c) ? 2 : 2048, !0)) : l = me(l, b, e), l !== f && Wb(g, l), k && Object.freeze(g));
        h && le(l) && (g = Nb(g), l = je(l, b), l = me(l, b, e), Wb(g, l), ee(a, b, d, g));
        return g
    };
    je = function (a, b) {
        a = Rb(a, 2, !!(2 & b));
        a = Rb(a, 32, !0);
        return a = Rb(a, 2048, !1)
    };
    me = function (a, b, c) {
        32 & b && c || (a = Rb(a, 32, !1));
        return a
    };
    Ie = function (a, b, c, d) {
        a = a.D;
        var e = Xd(a);
        nc(e);
        b = ze(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        kc(c.D) & 2 ? qe(b, 8) : qe(b, 16);
        return c
    };
    Je = function (a) {
        return dd(a, !0)
    };
    _.Ke = function (a, b) {
        return null != a ? a : b
    };
    Me = function (a, b, c) {
        var d = Le ? void 0 : a.constructor.da;
        var e = Xd(c ? a.D : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (gc(c = b[a - 1])) {
            a:{
                var g = c;
                var h = {}, k = !1, l;
                for (l in g) if (Object.prototype.hasOwnProperty.call(g, l)) {
                    var m = g[l];
                    if (Array.isArray(m)) {
                        var n = m;
                        if (lc(m, d, +l) || fc(m) && 0 === m.size) m = null;
                        m != n && (k = !0)
                    }
                    null != m ? h[l] = m : k = !0
                }
                if (k) {
                    for (var p in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);
            a--
        }
        for (l = +!!(e & 512) - 1; 0 < a; a--) {
            p = a - 1;
            c = b[p];
            p -= l;
            if (!(null == c || lc(c, d, p) || fc(c) && 0 === c.size)) break;
            var r = !0
        }
        if (!f && !r) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };
    Ne = function (a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        Tb(b, 128);
        return td(a, Vb(b))
    };
    Oe = function (a, b) {
        if (Array.isArray(b)) {
            var c = kc(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                null != f && (b[e++] = f)
            }
            e < d && (b.length = e);
            Wb(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    };
    Pe = function (a, b, c) {
        a[b] = c
    };
    Te = function (a) {
        var b = a[Qe];
        if (!b) {
            var c = Re(a);
            b = function (d, e) {
                return Se(d, e, c)
            };
            a[Qe] = b
        }
        return b
    };
    Ue = function (a) {
        return a.g
    };
    Ve = function (a, b) {
        var c, d, e = a.g;
        return function (f, g, h) {
            return e(f, g, h, d || (d = Re(b).g), c || (c = Te(b)))
        }
    };
    Re = function (a) {
        var b = a[We];
        if (b) return b;
        b = a[We] = {};
        var c = Ue, d = Ve;
        var e = void 0 === e ? Pe : e;
        b.g = wd(a[0]);
        var f = 0, g = a[++f];
        g && g.constructor === Object && (b.Nk = g, g = a[++f], "function" === typeof g && (b.l = g, b.A = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof Xe) var m = g; else m = Ye, f--;
            if (m.Cj) {
                g = a[++f];
                l = a;
                var n = f;
                "function" == typeof g && (g = g(), l[n] = g);
                l = g
            }
            g = a[++f];
            n = k + 1;
            "number" === typeof g && 0 > g && (n -= g, g = a[++f]);
            for (; k < n; k++) {
                var p = h[k];
                e(b, k, l ? d(m, l, p) : c(m, p))
            }
        }
        Ze in a && $e in a && We in a && (a.length = 0);
        return b
    };
    bf = function (a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Nk) if (c = c[b]) {
            c = Array.isArray(c) ? c[0] instanceof Xe ? c : [af, c] : [c, void 0];
            var d = c[0].g;
            if (c = c[1]) {
                var e = Te(c), f = Re(c).g;
                c = (c = a.A) ? c(f, e) : function (g, h, k) {
                    return d(g, h, k, f, e)
                }
            } else c = d;
            return a[b] = c
        }
    };
    Se = function (a, b, c) {
        for (var d = Xd(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e, m = bf(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.x(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = bf(c, d)) && f(b, e, d)))
        }
    };
    cf = function (a) {
        return new Xe(a, !1)
    };
    gf = function (a, b, c) {
        a:if (null != b) {
            if (_.Ac(b)) {
                if ("string" === typeof b) {
                    b = Nc(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = Uc(b);
                    break a
                }
            }
            b = void 0
        }
        null != b && ("string" === typeof b && df(b), null != b && (ef(a, c, 0), "number" === typeof b ? (a = a.g, Ib(b), ff(a, Gb, Hb)) : (c = df(b), ff(a.g, c.A, c.g))))
    };
    kf = function (a, b, c, d, e) {
        b = b instanceof _.E ? b.D : Array.isArray(b) ? _.B(b, d[0], d[1]) : void 0;
        null != b && (c = hf(a, c), e(b, a), jf(a, c))
    };
    mf = function (a) {
        var b = _.lf();
        if (!a) throw Error(b && b() || String(a));
    };
    _.lf = function () {
        var a = nf;
        nf = void 0;
        return a
    };
    qf = function (a) {
        return function () {
            var b = new of;
            Se(this.D, b, Re(a));
            pf(b, b.g.end());
            for (var c = new Uint8Array(b.A), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    };
    rf = function (a) {
        return function (b) {
            if (null == b || "" == b) b = new a; else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = td(a, Vb(b))
            }
            return b
        }
    };
    sf = function (a) {
        var b = a.split(/\?|#/), c = /\?/.test(a) ? "?" + b[1] : "";
        return {path: b[0], ce: c, hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""}
    };
    _.If = function (a) {
        var b = _.ya.apply(1, arguments);
        if (0 === b.length) return tf(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return tf(c)
    };
    _.Jf = function (a, b) {
        a = sf(_.lb(a).toString());
        var c = a.ce, d = c.length ? "&" : "?";
        b.forEach(function (e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return tf(a.path + c + a.hash)
    };
    Lf = function (a) {
        var b = {};
        b.winner_qid = a.getEscapedQemQueryId();
        b.cid = _.F(a, 19);
        b.ecrs = _.F(a, 11);
        return {
            Jj: "https://googleads.g.doubleclick.net/td/activeview?" + _.x(Object, "entries").call(Object, b).map(function (c) {
                var d = _.u(c);
                c = d.next().value;
                d = d.next().value;
                return encodeURIComponent(c) + "=" + encodeURIComponent(d)
            }).join("&") + "&acvw=[VIEWABILITY]", kl: 40, metadata: new Kf
        }
    };
    Nf = function (a) {
        return a ? a.passive && Mf() ? a : a.capture || !1 : !1
    };
    Pf = function (a) {
        var b = window, c = !0;
        c = void 0 === c ? !1 : c;
        new _.A.Promise(function (d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }

            var g = b.document.createElement("script");
            g.onload = function () {
                f();
                d()
            };
            g.onerror = function () {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            mb(g, a);
            c && "complete" !== b.document.readyState ? _.Of(b, "load", function () {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    Tf = function (a) {
        var b, c, d, e, f, g;
        return _.Qf(function (h) {
            switch (h.g) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.A + "&st=") + a.qd, c = void 0, h.l = 2, h.yield(Rf(b), 4);
                case 4:
                    c = h.A;
                    h.g = 3;
                    h.l = 0;
                    break;
                case 2:
                    Sf(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Rd || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.l ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.j,
                        Yj: c.bg_hash_basename,
                        Xj: c.bg_binary,
                        yl: a.g + "_" + a.A,
                        Rd: d,
                        qd: a.qd,
                        Xe: e,
                        uf: f,
                        We: g
                    }) : h.return(void 0)
            }
        })
    };
    Vf = function (a) {
        var b;
        _.Qf(function (c) {
            if (1 == c.g) return c.yield(Tf(a), 2);
            if (b = c.A) {
                var d = b, e = "sodar2";
                e = void 0 === e ? "sodar2" : e;
                var f = window, g = f.GoogleGcLKhOms;
                g && "function" === typeof g.push || (g = f.GoogleGcLKhOms = []);
                var h = {};
                g.push((h._ctx_ = d.context, h._bgv_ = d.Yj, h._bgp_ = d.Xj, h._li_ = d.yl, h._jk_ = d.Rd, h._st_ = d.qd, h._rc_ = d.Xe, h._dl_ = d.uf, h._g2_ = d.We, h));
                if (d = f.GoogleDX5YKUSk) f.GoogleDX5YKUSk = void 0, d[1]();
                e = _.If(Uf, e);
                Pf(e)
            }
            return c.return(b)
        })
    };
    Wf = function (a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    _.H = function (a) {
        return _.Xf(Yf).A(a.g, a.defaultValue)
    };
    _.Zf = function (a) {
        return _.Xf(Yf).l(a.g, a.defaultValue)
    };
    $f = function (a) {
        return _.Xf(Yf).j(a.g, a.defaultValue)
    };
    ag = function (a) {
        return _.Xf(Yf).L(a.g, a.defaultValue)
    };
    bg = function (a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {
        }
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    dg = function (a) {
        return cg(0 !== a.length % 4 ? a + "A" : a).map(function (b) {
            return (_.I = b.toString(2), _.x(_.I, "padStart")).call(_.I, 8, "0")
        }).join("")
    };
    eg = function (a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    fg = function (a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    gg = function (a, b) {
        a = dg(a);
        return a.length < b ? _.x(a, "padEnd").call(a, b, "0") : a
    };
    hg = function (a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    _.ig = function (a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.jg = function (a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    kg = function (a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.lg = function (a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(kg("domLoading", a) || Infinity, kg("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(kg("responseEnd", a), kg("navigationStart", a)) : b
    };
    og = function (a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.mg("IMG", a.document);
        if (c || d) {
            var g = function (h) {
                c && c(h);
                d && Ia(a.google_image_requests, f);
                _.ng(f, "load", g);
                _.ng(f, "error", g)
            };
            _.Of(f, "load", g);
            _.Of(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    qg = function (a, b) {
        try {
            var c = function (d) {
                var e = {};
                return [(e[d.lc] = d.Wb, e)]
            };
            return JSON.stringify([a.filter(function (d) {
                return d.Nb
            }).map(c), b.toJSON(), a.filter(function (d) {
                return !d.Nb
            }).map(c)])
        } catch (d) {
            return pg(d, b), ""
        }
    };
    pg = function (a, b) {
        try {
            rg({
                m: _.sg(a instanceof Error ? a : Error(String(a))),
                b: _.tg(b, 1, 0) || null,
                v: _.F(b, 2) || null
            }, "rcs_internal")
        } catch (c) {
        }
    };
    ug = function (a, b, c, d, e, f) {
        try {
            var g = a.g, h = _.mg("SCRIPT", g);
            h.async = !0;
            mb(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function () {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function () {
                0 < c ? ug(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    };
    wg = function (a, b, c, d) {
        c = void 0 === c ? function () {
        } : c;
        d = void 0 === d ? function () {
        } : d;
        ug(vg(a), b, 0, !1, c, d)
    };
    xg = function (a) {
        return a[_.x(_.A.Symbol, "iterator")]()
    };
    Ng = function (a) {
        var b = yg(zg(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    };
    Og = function (a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = yg(zg(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    Qg = function (a) {
        var b = zg(a), c = {search: "", hash: ""};
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        _.x(Object, "assign").call(Object, a, c);
        if (a.port && ":" === a.port[0]) throw Error("port should not start with ':'");
        a.hash && "#" != a.hash[0] && (a.hash = "#" + a.hash);
        c.search ? "?" != c.search[0] && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + Pg(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol + "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = zg(b).toString();
        "/" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
        return 1E3 >= a.toString().length ? a : null
    };
    Rg = function (a) {
        a && "function" == typeof a.xa && a.xa()
    };
    Vg = function (a) {
        a = Tg(a.data.__fciReturn);
        return {payload: a, Pg: _.Ug(a, 1)}
    };
    Yg = function () {
        var a = da();
        return a ? _.Wg("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function (b) {
            return _.Xg(a, b)
        }) || _.Xg(a, "OMI/") && !_.Xg(a, "XiaoMi/") ? !0 : _.Xg(a, "Presto") && _.Xg(a, "Linux") && !_.Xg(a, "X11") && !_.Xg(a, "Android") && !_.Xg(a, "Mobi") : !1
    };
    Zg = function () {
        return function (a) {
            return 0 === a
        }
    };
    ah = function () {
        var a = $g;
        return function (b) {
            for (var c in a) if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    ch = function () {
        var a = bh;
        return function (b) {
            return b instanceof a
        }
    };
    eh = function (a) {
        return function (b) {
            if (!dh(b)) return !1;
            for (var c = _.u(_.x(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.u(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (!0 === e.so) continue;
                    return !1
                }
                if (!e(b[d])) return !1
            }
            return !0
        }
    };
    fh = function () {
        return function (a) {
            return Array.isArray(a)
        }
    };
    ih = function () {
        return function (a) {
            return gh(a) ? a.every(function (b) {
                return hh(b)
            }) : !1
        }
    };
    jh = function (a) {
        return !!a && a.top === a
    };
    nh = function (a) {
        a = void 0 === a ? _.t : a;
        var b = new kh;
        "SVGElement" in a && "createElementNS" in a.document && b.set(0);
        var c = lh();
        c["allow-top-navigation-by-user-activation"] && b.set(1);
        c["allow-popups-to-escape-sandbox"] && b.set(2);
        a.crypto && a.crypto.subtle && b.set(3);
        "TextDecoder" in a && "TextEncoder" in a && b.set(4);
        return mh(b)
    };
    oh = function (a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {payload: b, Pg: b.__uspapiReturn.callId}
    };
    qh = function (a, b) {
        b = void 0 === b ? window : b;
        if (ph(a)) try {
            return b.localStorage
        } catch (c) {
        }
        return null
    };
    rh = function (a) {
        return "null" !== a.origin
    };
    th = function (a, b, c) {
        return ph(b) ? sh(a, c) : null
    };
    sh = function (a, b) {
        b = rh(b) ? b.document.cookie : null;
        return null === b ? null : (new uh({cookie: b})).get(a) || ""
    };
    vh = function (a, b, c, d) {
        rh(d) && (new uh(d.document)).set(a, b, c)
    };
    wh = function (a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {payload: b, Pg: b.__gppReturn.callId}
    };
    xh = function (a) {
        return !a || 1 === a.length && -1 === a[0]
    };
    yh = function (a, b, c) {
        return b[a] || c
    };
    Ah = function (a) {
        _.Xf(zh).l(a)
    };
    Bh = function () {
        return _.Xf(zh).j()
    };
    Ch = function (a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.I = c.allowedFeatures(), _.x(_.I, "includes")).call(_.I, a))
    };
    Dh = function (a) {
        a = void 0 === a ? navigator : a;
        try {
            var b, c;
            return !!(null == (b = a.protectedAudience) ? 0 : null == (c = b.queryFeatureSupport) ? 0 : c.call(b, "deprecatedRenderURLReplacements"))
        } catch (d) {
            return !1
        }
    };
    Qh = function (a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && Ch("run-ad-auction", c))
    };
    Rh = function (a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && Ch("browsing-topics", b))
    };
    Sh = function (a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && Ch("shared-storage", c))
    };
    Vh = function (a) {
        a = void 0 === a ? _.Th() : a;
        return function (b) {
            return _.Uh(b + " + " + a) % 1E3
        }
    };
    Xh = function (a) {
        _.Xf(Wh).g(a)
    };
    ai = function () {
        if (void 0 === b) {
            var a = void 0 === a ? _.t : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        Yh(_.Xf(zh), a);
        Zh(b);
        $h(_.Xf(Wh), b);
        _.Xf(Yf).g()
    };
    Zh = function (a) {
        var b = _.Xf(Yf);
        b.A = function (c, d) {
            return yh(5, a, function () {
                return !1
            })(c, d, 2)
        };
        b.l = function (c, d) {
            return yh(6, a, function () {
                return 0
            })(c, d, 2)
        };
        b.j = function (c, d) {
            return yh(7, a, function () {
                return ""
            })(c, d, 2)
        };
        b.L = function (c, d) {
            return yh(8, a, function () {
                return []
            })(c, d, 2)
        };
        b.g = function () {
            yh(15, a, function () {
            })(2)
        }
    };
    di = function (a) {
        try {
            var b, c,
                d = null == (b = a.performance) ? void 0 : null == (c = b.getEntriesByType("navigation")) ? void 0 : c[0];
            if (null == d ? 0 : d.type) {
                var e;
                return null != (e = bi.get(d.type)) ? e : null
            }
        } catch (k) {
        }
        var f, g, h;
        return null != (h = ci.get(null == (f = a.performance) ? void 0 : null == (g = f.navigation) ? void 0 : g.type)) ? h : null
    };
    ii = function (a, b, c, d) {
        var e = new _.ei, f = "", g = function (k) {
            try {
                var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (_.ng(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (m) {
            }
        }, h = gi(a);
        return h ? (_.Of(a, "message", g), f = c(h), e.promise) : (c = hi(a)) ? (f = String(Math.floor(2147483647 * _.Th())), _.Of(a, "message", g), b(c, f), e.promise) : null
    };
    ji = function (a) {
        return ii(a, function (b, c) {
            var d, e;
            return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function (b) {
            return b.getQueryInfo()
        }, function (b) {
            return b.signal
        })
    };
    ki = function (a) {
        return !!gi(a) || !!hi(a)
    };
    gi = function (a) {
        var b;
        if ("function" === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    hi = function (a) {
        var b, c, d, e, f, g;
        if ("function" === typeof (null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof (null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    li = function (a) {
        var b, c;
        return null != (c = (_.I = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function (d) {
            return a[d]
        }), _.x(_.I, "find")).call(_.I, function (d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    mi = function (a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(_.Uh(a))) ? d : 0
    };
    wi = function (a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, l, m,
                n = null != (m = null == (g = f(null != (k = b.Xc) ? k : "")) ? void 0 : g.bids) ? m : null == (h = f(null != (l = b.adUnitCode) ? l : "")) ? void 0 : h.bids;
            if (null != n && n.length && (g = n.filter(function (v) {
                var w = v.adId;
                return v.auctionId !== c && _.x(Object, "values").call(Object, d).some(function (z) {
                    return _.x(z, "includes").call(z, w)
                })
            }), g.length)) {
                var p, r;
                f = null == (p = e.adUnits) ? void 0 : null == (r = _.x(p, "find").call(p, function (v) {
                    v = v.code;
                    return v === b.Xc || v === b.adUnitCode
                })) ? void 0 : r.mediaTypes;
                p = _.u(g);
                for (r = p.next(); !r.done; r = p.next()) r = r.value, g = ni(r, d, f), g = oi(a, pi(qi(ri(si(new ti, r.bidder), 1), 6, !0), g)), ui(r.bidder, e, g), "number" === typeof r.timeToRespond && _.vi(g, 2, Math.round(r.timeToRespond))
            }
        }
    };
    ui = function (a, b, c) {
        for (var d = []; a && !_.x(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0, f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.ue(c, 10, d, _.fd)
    };
    zi = function (a, b, c) {
        null != _.Dc(_.xi(a, 3)) || (c === b.adUnitCode ? _.yi(a, 3, 1) : c === b.Xc && _.yi(a, 3, 2))
    };
    Hi = function (a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function () {
            return null
        });
        1 !== (null == f ? void 0 : _.tg(f, 1, 0)) && _.Ai(b, 5, f);
        Bi(a, Ci, 5) || (f ? 1 === _.tg(f, 1, 0) ? Di(a, f) : Di(a, Ei(Fi(Gi(new Ci, e), 1), mi(c, d))) : Di(a, Fi(Gi(new Ci, e), mi(c, d) ? 2 : 3)))
    };
    ni = function (a, b, c) {
        var d = a.cpm, e = a.originalCpm, f = a.currency, g = a.originalCurrency, h = a.dealId, k = a.adserverTargeting,
            l = a.bidder, m = a.adId, n = a.mediaType, p = a.height, r = a.width, v = new Ii;
        "number" === typeof d && (_.vi(v, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Ug(v, 2) || _.vi(v, 8, d)));
        "string" === typeof f && Ji(v, 3, f);
        (_.I = ["string", "number"], _.x(_.I, "includes")).call(_.I, typeof h) && (f = new Ki, h = Ji(f, 1, String(h)), _.Ai(v, 6, h));
        if ("object" === typeof k) for (h = _.u(["", "_" + l]), f = h.next(); !f.done; f = h.next()) {
            d = f.value;
            f = [];
            e = _.u(_.x(Object, "entries").call(Object, k));
            for (g = e.next(); !g.done; g = e.next()) {
                g = _.u(g.value);
                var w = g.next().value;
                g = g.next().value;
                w = (w + d).slice(0, 20);
                var z = void 0;
                if (null != (z = b[w]) && z.length) if (b[w][0] === String(g)) f.push(w); else {
                    f = [];
                    break
                }
            }
            d = Li(v, 4, 2);
            _.ue(v, 4, d.concat(f), _.fd)
        }
        switch (n || "banner") {
            case "banner":
                _.yi(v, 5, 1);
                break;
            case "native":
                _.yi(v, 5, 2);
                break;
            case "video":
                _.yi(v, 5, 3);
                b = new Mi;
                var y;
                if ("adpod" === (null == c ? void 0 : null == (y = c.video) ? void 0 : y.context)) {
                    var C, G = null == c ? void 0 : null == (C = c.video) ? void 0 : C.adPodDurationSec;
                    _.vi(b, 1, G)
                } else C = null == c ? void 0 : null == (G = c.video) ? void 0 : G.maxduration, _.vi(b, 1, C);
                var D;
                if ("number" === typeof (null == c ? void 0 : null == (D = c.video) ? void 0 : D.skip)) {
                    var M;
                    c = !!(null == c ? 0 : null == (M = c.video) ? 0 : M.skip);
                    qi(b, 2, c)
                }
                var S;
                a = null == (S = a.meta) ? void 0 : S.adServerCatId;
                S = Ji(b, 3, a);
                if ("object" !== typeof k) k = null; else {
                    var P, aa;
                    a = String(null != (aa = null != (P = k["hb_pb_cat_dur_" + l]) ? P : k.hb_pb_cat_dur) ? aa : "");
                    var ka, ma, ja, Ga;
                    P = String(null != (Ga = null != (ja = null != (ma = null != (ka = k["hb_cache_id_" + l]) ? ka : k["hb_uuid_" + l]) ? ma : k.hb_cache_id) ? ja : k.hb_uuid) ? Ga : "");
                    k = a && P ? a + "_" + P : P ? P : null
                }
                Ji(S, 4, k);
                _.Ai(v, 9, b)
        }
        _.x(Number, "isFinite").call(Number, p) && _.x(Number, "isFinite").call(Number, r) && (k = new Ni, r = _.Oi(k, 1, Math.round(r)), p = _.Oi(r, 2, Math.round(p)), _.Ai(v, 7, p));
        "string" === typeof m && Ji(v, 1, m);
        return v
    };
    Qi = function (a, b) {
        var c = new _.A.Map, d = function (k) {
            var l = c.get(k);
            l || (l = {}, c.set(k, l));
            return l
        }, e = [];
        a = _.u(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args, h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.Pi(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.u(g.bids);
                    for (h = g.next(); !h.done; h = g.next()) if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).km = f)
            }
        }
        d = new _.A.Map;
        a = _.u(_.x(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.u(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.km, g && h && d.set(f, {
            latency: h - g,
            ri: !1
        });
        e = _.u(e);
        for (a = e.next(); !a.done; a = e.next()) if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.ri = !0;
        return d
    };
    aj = function (a, b, c, d, e, f, g) {
        var h = _.Zf(Ri);
        c = void 0 === c ? {} : c;
        d = void 0 === d ? new _.A.Map : d;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? new _.A.Map : f;
        g = void 0 === g ? new Si : g;
        h = void 0 === h ? 0 : h;
        var k = new _.A.Map, l = (0, a.getEvents)(), m = l.filter(function (Ba) {
                var Ka = Ba.args;
                return "auctionEnd" === Ba.eventType && Ka.auctionId
            }), n = new Ti, p = function (Ba) {
                return Ba === b.Xc || Ba === b.adUnitCode
            }, r, v, w,
            z = null != (w = Ui.get((null != (r = b.Xc) ? r : "") + (null != (v = b.adUnitCode) ? v : ""))) ? w : 0, y;
        m = null != (y = m.filter(function (Ba) {
            var Ka, Wa, eb;
            return Number(null == (Ka = Ba.args) ? void 0 : Ka.timestamp) > z && (null == (Wa = Ba.args) ? void 0 : null == (eb = Wa.adUnitCodes) ? void 0 : _.x(eb, "find").call(eb, p))
        })) ? y : [];
        if (!m.length) return null;
        var C;
        if (m = null == (C = m.reduce(function (Ba, Ka) {
            return Number(Ka.args.timestamp) > Number(Ba.args.timestamp) ? Ka : Ba
        })) ? void 0 : C.args) {
            y = void 0 === m.bidderRequests ? [] : m.bidderRequests;
            C = void 0 === m.bidsReceived ? [] : m.bidsReceived;
            var G = m.auctionId;
            m = m.timestamp;
            if (G && null != m && y.length) {
                var D, M;
                Ui.set((null != (D = b.Xc) ? D : "") + (null != (M = b.adUnitCode) ? M : ""), m);
                D = Vi(n);
                a.version && Wi.test(a.version) && Ji(D, 6, a.version);
                var S, P, aa;
                if (null == (S = a.getConfig) ? 0 : null == (P = S.call(a).cache) ? 0 : null == (aa = P.url) ? 0 : aa.length) {
                    var ka, ma;
                    Xi(D, null == (ka = a.getConfig) ? void 0 : null == (ma = ka.call(a).cache) ? void 0 : ma.url)
                }
                _.Ai(D, 9, g);
                g = Yi(function () {
                    return Qi(l, G)
                });
                S = _.u(y);
                aa = S.next();
                for (P = {}; !aa.done; P = {
                    bidderCode: void 0,
                    lj: void 0
                }, aa = S.next()) for (ka = aa.value, P.bidderCode = ka.bidderCode, ma = ka.bids, aa = ka.timeout, P.lj = ka.src, ka = ka.auctionStart, ma = _.u(ma), y = ma.next(), M = {}; !y.done; M = {ue: void 0}, y = ma.next()) if (w = y.value, M.ue = w.bidId, v = w.transactionId, y = w.adUnitCode, m = w.getFloor, r = w.mediaTypes, w = w.ortb2Imp, M.ue && p(y)) {
                    zi(D, b, y);
                    var ja = void 0, Ga = void 0;
                    h && !_.Zi(D, 11) && "string" === typeof (null == (ja = w) ? void 0 : null == (Ga = ja.ext) ? void 0 : Ga.gpid) && Ji(D, 11, w.ext.gpid.substring(0, h));
                    v && (_.Zi(D, 4) || Ji(D, 4, v), k.has(v) || k.set(v, ka));
                    null == $i(D, 8) && _.x(Number, "isFinite").call(Number, aa) && _.Oi(D, 8, aa);
                    w = _.x(C, "find").call(C, function (Ba) {
                        return function (Ka) {
                            return Ka.requestId === Ba.ue
                        }
                    }(M));
                    v = oi(D, function (Ba) {
                        return function () {
                            var Ka = si(new ti, Ba.bidderCode);
                            ui(Ba.bidderCode, a, Ka);
                            switch (Ba.lj) {
                                case "client":
                                    _.yi(Ka, 7, 1);
                                    break;
                                case "s2s":
                                    _.yi(Ka, 7, 2)
                            }
                            return Ka
                        }
                    }(P)());
                    Hi(D, v, y, d, e, f, m);
                    w ? (ri(v, 1), "number" === typeof w.timeToRespond && _.x(Number, "isFinite").call(Number, w.timeToRespond) && _.vi(v, 2, Math.round(w.timeToRespond)), M = ni(w, c, r), pi(v, M)) : (M = g().get(M.ue)) && !M.ri ? (ri(v, 2), _.x(Number, "isFinite").call(Number, M.latency) && _.vi(v, 2, Math.round(M.latency))) : (M = ri(v, 3), _.x(Number, "isFinite").call(Number, aa) && _.vi(M, 2, Math.round(aa)))
                }
                var ta;
                (null == (ta = a.getConfig) ? 0 : ta.call(a).useBidCache) && wi(D, b, G, c, a);
                return n
            }
        }
    };
    bj = function (a, b) {
        var c, d;
        return _.Qf(function (e) {
            if (1 == e.g) return c = b ? a.filter(function (f) {
                return !f.Cd
            }) : a, e.yield(_.A.Promise.all(c.map(function (f) {
                return f.Kh.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function (f) {
                return f.Cd
            });
            return e.yield(_.A.Promise.race([_.A.Promise.all(d.map(function (f) {
                return f.Kh.promise
            })), new _.A.Promise(function (f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    };
    _.cj = function (a) {
        return a.innerHeight >= a.innerWidth
    };
    _.ej = function (a) {
        var b = _.dj(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    fj = function (a, b) {
        b = void 0 === b ? 420 : b;
        return (a = _.dj(a, !0)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    _.gj = function (a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.hj = function (a) {
        return _.gj(a).clientHeight
    };
    _.dj = function (a, b) {
        var c = _.gj(a).clientWidth;
        return (void 0 === b ? 0 : b) ? c * _.ij(a) : c
    };
    _.jj = function (a, b) {
        var c = _.gj(a);
        return b ? (a = _.hj(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.kj = function (a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    lj = function (a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {cmd: []});
                var e;
                b.googletag.queryIds = null != (e = b.googletag.queryIds) ? e : [];
                b.googletag.queryIds.push(c);
                500 < b.googletag.queryIds.length && b.googletag.queryIds.shift()
            }
        } catch (f) {
        }
    };
    _.mj = function (a) {
        var b = a.vf, c = a.Ee, d = a.ef, e = a.wf, f = a.Fe;
        a = a.ff;
        for (var g = [], h = 0; h < a; h++) for (var k = 0; k < d; k++) {
            var l = k, m = d - 1, n = h, p = a - 1;
            g.push({x: b + (0 === m ? 0 : l / m) * (c - b), y: e + (0 === p ? 0 : n / p) * (f - e)})
        }
        return g
    };
    nj = function (a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    _.uj = function (a) {
        var b = a.oa, c = a.Bg, d = a.af, e = a.xh, f = a.va, g = a.fk;
        a = 0;
        try {
            a |= b !== b.top ? 512 : 0;
            var h = Math.min(b.screen.width || 0, b.screen.height || 0);
            a |= h ? 320 > h ? 8192 : 0 : 2048;
            a |= b.navigator && oj(b.navigator.userAgent) ? 1048576 : 0;
            if (c) {
                h = a;
                var k = b.innerHeight;
                var l = _.ij(b) * k >= c;
                var m = h | (l ? 0 : 1024)
            } else m = a | (_.cj(b) ? 0 : 8);
            a = m;
            a |= fj(b, d)
        } catch (n) {
            a |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.mj({
                    vf: 0,
                    Ee: b.innerWidth,
                    ef: 3,
                    wf: 0,
                    Fe: Math.min(Math.round(b.innerWidth / 320 * 50), pj) + 15,
                    ff: 3
                });
                null != qj(rj(b, c), d) && (a |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, m = Math.min(Math.round(b.innerWidth / 320 * 50), pj) + 15, l = _.mj({
                    vf: 0,
                    Ee: d,
                    ef: 3,
                    wf: e - m,
                    Fe: e,
                    ff: 3
                }), 25 < m && l.push({x: d - 25, y: e - 25}), null != qj(rj(b, c), l) && (a |= 16777216)
        }
        g && (f = void 0 === f ? null : f, f = void 0 === f ? null : f, g = b.innerHeight, g = _.mj({
            vf: 0,
            Ee: b.innerWidth,
            ef: 10,
            wf: g - 66,
            Fe: g,
            ff: 10
        }), g = null != qj(rj(b, f), g));
        g && (a |= 16777216);
        return a
    };
    oj = function (a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    rj = function (a, b) {
        return new _.vj(a, {Rh: wj(a, void 0 === b ? null : b)})
    };
    wj = function (a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function (d, e, f) {
                var g, h;
                _.xj(c, "ach_evt", {
                    tn: d.tagName,
                    id: null != (g = d.getAttribute("id")) ? g : "",
                    cls: null != (h = d.getAttribute("class")) ? h : "",
                    ign: String(f),
                    pw: a.innerWidth,
                    ph: a.innerHeight,
                    x: e.x,
                    y: e.y
                }, !0, 1)
            }
        }
    };
    zj = function (a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.yj(b, function (d) {
            return c - d < 1E3 * a
        })
    };
    Aj = function (a, b, c) {
        try {
            var d = a.getItem(c);
            if (!d) return [];
            try {
                var e = JSON.parse(d)
            } catch (f) {
            }
            if (!Array.isArray(e) || _.Wg(e, function (f) {
                return !_.x(Number, "isInteger").call(Number, f)
            })) return a.removeItem(c), [];
            e = zj(b, e);
            e.length || null == a || a.removeItem(c);
            return e
        } catch (f) {
            return null
        }
    };
    _.Cj = function (a, b, c) {
        return 0 >= b || null == a || !Bj(a) ? null : Aj(a, b, c)
    };
    Lj = function (a) {
        var b = _.Dj(new _.Ej, a.mb);
        b = Fj(b, 4, _.Gj, Wc(a.El));
        b = _.Hj(b, 11, a.Ea);
        b = _.Ij(b, 8, a.pvsid);
        b = _.Ij(b, 7, a.Lf);
        b = _.Hj(b, 9, a.Fb);
        var c = _.Jj(b, _.Kj, 5);
        _.we(c, 1, _.Bc, a.fb);
        return b
    };
    _.Mj = function (a) {
        var b = _.Dj(new _.Ej, a.mb);
        b = Fj(b, 3, _.Gj, Cc(a.U));
        b = _.Hj(b, 11, a.Ea);
        b = _.Ij(b, 8, a.pvsid);
        b = _.Ij(b, 7, a.Lf);
        b = _.Hj(b, 9, a.Fb);
        var c = _.Jj(b, _.Kj, 5);
        _.we(c, 1, _.Bc, a.fb);
        return b
    };
    Oj = function (a, b) {
        return null !== _.Nj(a, function (c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0)
    };
    Pj = function (a, b) {
        return _.Nj(a, function (c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        }, !0)
    };
    Qj = function (a) {
        for (var b = [], c = _.u(a.document.querySelectorAll("*")), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.getComputedStyle(d, null);
            "fixed" === e.position && "none" !== e.display && "hidden" !== e.visibility && b.push(d)
        }
        return b
    };
    Xj = function (a, b) {
        b = b.getBoundingClientRect();
        var c = b.left, d = b.bottom, e = b.right;
        return 0 <= b.top && 0 <= c && d <= a.innerHeight && e <= a.innerWidth
    };
    Yj = function (a) {
        return Math.round(10 * Math.round(a / 10))
    };
    Zj = function (a) {
        return a.position + "-" + Yj(a.ia) + "x" + Yj(a.ra) + "-" + Yj(a.scrollY + a.kd) + "Y"
    };
    ak = function (a) {
        return "f-" + Zj({position: a.position, kd: a.kd, scrollY: 0, ia: a.ia, ra: a.ra})
    };
    bk = function (a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    };
    dk = function (a, b, c) {
        var d = _.ck(c.oa).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.ra), g = Math.max(e.left - 10, 0), h = Math.min(e.right + 10, c.ia),
                    k = .3 * c.ia;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = ak({position: "left", kd: e, ia: c.ia, ra: c.ra});
                        b.set(l, bk(b.get(l), g))
                    }
                    if (g < c.ia && h > c.ia - k) {
                        l = ak({position: "right", kd: e, ia: c.ia, ra: c.ra});
                        var m = c.ia - h;
                        b.set(l, bk(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    };
    gk = function (a, b) {
        var c = b.oa, d = b.Fc, e = "f-" + Yj(b.ia) + "x" + Yj(b.ra);
        a.has(e) || (a.set(e, 0), e = Qj(c), d ? (ek(a, b, e.filter(function (f) {
            return Xj(c, f)
        })), fk(c, e.filter(function (f) {
            return !Xj(c, f)
        }))) : ek(a, b, e))
    };
    ek = function (a, b, c) {
        var d = b.yc, e = b.oa;
        _.ck(e).sideRailProcessedFixedElements.clear();
        d = new _.A.Set([].concat(_.Pi(_.x(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.Pi(d)));
        c = _.u(c);
        for (e = c.next(); !e.done; e = c.next()) e = e.value, Oj(e, d) || dk(e, a, b)
    };
    hk = function (a) {
        if (1200 > a.ia || 650 > a.ra) return null;
        var b = _.ck(a.oa).sideRailAvailableSpace;
        a.pi || gk(b, {oa: a.oa, ia: a.ia, ra: a.ra, yc: a.yc, Fc: a.Fc});
        for (var c = [], d = .9 * a.ra, e = _.kj(a.oa), f = (a.ra - d) / 2, g = f, h = d / 7, k = 0; 8 > k; k++) {
            var l = c, m = l.push;
            var n = g;
            var p = a.position, r = b, v = {oa: a.oa, ia: a.ia, ra: a.ra, yc: a.yc},
                w = ak({position: p, kd: n, ia: v.ia, ra: v.ra}),
                z = Zj({position: p, kd: n, scrollY: e, ia: v.ia, ra: v.ra});
            if (!r.has(z)) {
                var y = "left" === p ? 20 : v.ia - 20, C = y;
                p = .3 * v.ia / 5 * ("left" === p ? 1 : -1);
                for (var G = 0; 6 > G; G++) {
                    var D = nj(v.oa.document, {x: Math.round(C), y: Math.round(n)}), M = Oj(D, v.yc), S = Pj(D, v.oa);
                    if (!M && null !== S) {
                        dk(S, r, v);
                        r.delete(z);
                        break
                    }
                    M || (M = v, "true" === D.getAttribute("google-side-rail-overlap") ? M = !0 : "false" === D.getAttribute("google-side-rail-overlap") ? M = !1 : (S = D.offsetHeight >= .25 * M.ra, M = D.offsetWidth >= .9 * M.ia && S));
                    if (M) r.set(z, Math.round(Math.abs(C - y) + 20)); else if (C !== y) C -= p, p /= 2; else {
                        r.set(z, 0);
                        break
                    }
                    C += p
                }
            }
            n = bk(r.get(w), r.get(z));
            m.call(l, n);
            g += h
        }
        b = a.bj;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        l = [];
        h = _.x(Array(c.length), "fill").call(Array(c.length), 0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[k];) l.pop();
            h[k] = 0 === l.length ? 0 : l[l.length - 1] + 1;
            l.push(k)
        }
        l = [];
        m = c.length - 1;
        k = _.x(Array(c.length), "fill").call(Array(c.length), 0);
        for (n = m; 0 <= n; n--) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[n];) l.pop();
            k[n] = 0 === l.length ? m : l[l.length - 1] - 1;
            l.push(n)
        }
        l = null;
        for (m = 0; m < c.length; m++) if (n = {
            position: e,
            width: Math.round(c[m]),
            height: Math.round((k[m] - h[m] + 1) * d),
            offsetY: f + h[m] * d
        }, r = n.width >= g && n.height >= a, 0 === b && r) {
            l = n;
            break
        } else 1 === b && r && (!l || n.width * n.height > l.width * l.height) && (l = n);
        return l
    };
    fk = function (a, b) {
        var c = _.ck(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(function () {
                setTimeout(function () {
                    ik(a);
                    for (var f = _.u(c.A), g = f.next(); !g.done; g = f.next()) g = g.value, g()
                }, 500)
            });
            b = _.u(b);
            for (var e = b.next(); !e.done; e = b.next()) d.observe(e.value, {attributes: !0});
            c.g = d
        }
    };
    ik = function (a) {
        a = _.ck(a).sideRailAvailableSpace;
        var b = _.x(Array, "from").call(Array, _.x(a, "keys").call(a)).filter(function (d) {
            return _.x(d, "startsWith").call(d, "f-")
        });
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next()) a.delete(c.value)
    };
    _.jk = function (a) {
        if (a.ka) return a.ka.Eb(1228, function () {
            return hk(a)
        }) || null;
        try {
            return hk(a)
        } catch (b) {
        }
        return null
    };
    kk = function (a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g], l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (D) {
                    if (15 == D.code) throw D.styleSheet = k, D;
                }
                h = l
            } catch (D) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length) for (l = 0; l < Math.min(h.length, e); ++l) try {
                var m = h[l], n, p = m, r = c;
                if (!(n = f.call(a, p.selectorText) && r(p))) a:{
                    var v = void 0;
                    p = a;
                    r = f;
                    var w = c, z = e, y = null != (v = m.cssRules) ? v : [];
                    for (v = 0; v < Math.min(y.length, z); v++) {
                        var C = y[v], G = w;
                        if (r.call(p, C.selectorText) && G(C)) {
                            n = !0;
                            break a
                        }
                    }
                    n = !1
                }
                if (n) return !0
            } catch (D) {
            }
        }
        return !1
    };
    nk = function (a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.x(lk, "includes").call(lk, e.height) || (null == e ? 0 : e.maxHeight) && !_.x(mk, "includes").call(mk, e.maxHeight) || kk(a, b.document, function (f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.x(lk, "includes").call(lk, g) || !!f && !_.x(mk, "includes").call(mk, f)
        }, c, d) ? !1 : !0
    };
    pk = function (a, b, c) {
        if (!a) return !0;
        var d = !0;
        ok(a, function (e) {
            return d = nk(e, b, 10, 10)
        }, c);
        return d
    };
    qk = function (a) {
        return "number" === typeof a || "string" === typeof a
    };
    tk = function (a) {
        a = rk(a);
        return _.sk(a)
    };
    rk = function (a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    wk = function (a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = uk.g();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        2 === e.g && (e = {}, rg(_.x(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(vk(window)), e.em = c, e.lid = b, e.eids = Bh().join(), e), d), "esp"))
    };
    xk = function () {
        var a = window;
        var b = void 0 === b ? function () {
        } : b;
        return new _.A.Promise(function (c) {
            var d = function () {
                c(b());
                _.ng(a, "load", d)
            };
            _.Of(a, "load", d)
        })
    };
    yk = function (a) {
        var b = [], c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {
        }
        return b
    };
    Ck = function (a, b) {
        return _.zk(a, Ak, 2).some(function (c) {
            return Bk(c, 1) === b && _.Zi(c, 2)
        })
    };
    Dk = function (a, b) {
        return _.zk(a, Ak, 2).some(function (c) {
            return Bk(c, 1) === b && _.Zi(c, 2)
        })
    };
    Jk = function (a, b, c, d) {
        if (b) for (var e = _.u(yk(b)), f = e.next(), g = {}; !f.done; g = {Ec: void 0}, f = e.next()) if (g.Ec = f.value, (f = Ek().get(g.Ec, b).Tc) && !Dk(a, g.Ec)) {
            var h = Fk(f);
            if (2 !== h && 3 !== h) {
                h = !1;
                if (c) {
                    var k = /^(\d+)$/.exec(g.Ec);
                    if (k && !(h = _.x(c.split(","), "includes").call(c.split(","), k[1]))) continue;
                    if (!h && !c.split(",").some(function (m) {
                        return function (n) {
                            var p;
                            return null == d ? void 0 : null == (p = d.get(n)) ? void 0 : p.has(m.Ec)
                        }
                    }(g))) continue
                }
                qi(f, 9, h);
                (h = Bk(f, 2)) && 1024 < h.length && (k = {}, wk(55, g.Ec, null, (k.sl = String(h.length), k)), _.Gk(f.kb(Hk(108)), 2));
                Ik(a, 2, Ak, f);
                f = Bk(f, 2);
                k = h = void 0;
                var l = {};
                wk(19, g.Ec, null, (l.hs = f ? "1" : "0", l.sl = String(null != (k = null == (h = f) ? void 0 : h.length) ? k : -1), l))
            }
        }
    };
    Kk = function (a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Vk = function (a, b, c, d, e, f) {
        f = void 0 === f ? Lk : f;
        var g, h, k, l, m, n, p, r, v, w, z, y, C;
        return _.Qf(function (G) {
            return 1 == G.g ? (g = new Mk, h = new Nk(a, c, e), J(g, h), J(g, new Ok(h.o, void 0, d, e)), k = new Pk(h.j, e), J(g, k), l = new Qk(k.j, e), J(g, l), m = new Rk(b, l.j, e), J(g, m), J(g, new Ok(m.o, void 0, d, e)), n = new Sk(m.j, m.H, f.kh ? 1024 : 300, f.kh ? 1024 : 1E3, e), J(g, n), J(g, new Ok(n.j, void 0, d, e)), p = new Tk(e), J(g, p), r = new Uk(p.output, l.o, e), J(g, r), v = new Rk(b, r.j, e), J(g, v), w = new Ok(v.j, void 0, d, e), J(g, w), g.run(), C = a, G.yield(n.j.promise, 2)) : G.return({
                id: C,
                collectorGeneratedData: null != (y = null == (z = G.A) ? void 0 : Bk(z, 2)) ? y : null
            })
        })
    };
    al = function (a, b, c, d) {
        var e = {kh: _.H(Wk)};
        e = void 0 === e ? Lk : e;
        Xk() !== Yk(window) ? wk(16, "") : Zk(a, "encryptedSignalProviders", c) && Zk(a, "secureSignalProviders", c) || (wk(38, ""), $k(a, "encryptedSignalProviders", b, e, c, d), $k(a, "secureSignalProviders", b, e, c, function () {
        }))
    };
    Zk = function (a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    $k = function (a, b, c, d, e, f) {
        var g, h = new bl(null != (g = a[b]) ? g : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new cl(h);
        h.addErrorHandler(e)
    };
    fl = function (a, b) {
        var c = new Mk, d = new Tk(b);
        a = new dl(d.output, a, b);
        el(c, [d, a]);
        c.run()
    };
    jl = function (a, b, c, d, e) {
        var f = b.toString();
        if (gl.has(f)) return null;
        gl.add(f);
        f = new Mk;
        a = new Nk(a, c, e);
        var g = new Ok(a.o, c, d, e), h = new hl(a.j, e), k = new Pk(h.j, e);
        b = new il(k.j, b, e);
        c = new Ok(b.j, c, d, e);
        el(f, [a, g, h, k, b, c]);
        f.run();
        return f
    };
    ll = function (a, b, c) {
        c = void 0 === c ? kl : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {value: !0}), "complete" === a.document.readyState ? c(a, b) : _.Of(a, "load", function () {
            return void c(a, b)
        }))
    };
    ml = function (a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {
        }
        return null
    };
    nl = function (a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    pl = function (a) {
        if (a === a.top || _.ol(a.top)) return _.A.Promise.resolve({status: 4});
        var b = ml(a);
        if (!b) return _.A.Promise.resolve({status: 2});
        if (a.parent === a.top && nl(a.document.referrer)) return _.A.Promise.resolve({status: 3});
        var c = new _.ei;
        a = new MessageChannel;
        a.port1.onmessage = function (d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({Kb: d.data.topUrl, status: d.data.topUrl ? 0 : 1})
        };
        b.postMessage({msgType: "__goog_top_url_req"}, "*", [a.port2]);
        return c.promise
    };
    tl = function (a, b) {
        var c = ql(a);
        return c.messageChannelSendRequestFn ? _.A.Promise.resolve(c.messageChannelSendRequestFn) : new _.A.Promise(function (d) {
            function e(k) {
                return h.g(k).then(function (l) {
                    return l.data
                })
            }

            var f = _.mg("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.lb(rl).toString();
            var g = (new URL(rl.toString())).origin,
                h = sl({destination: a, ub: f, origin: g, Bb: "goog:gRpYw:doubleclick"});
            h.g("goog:topics:frame:handshake:ack").then(function (k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    Al = function (a, b, c, d) {
        var e = {skipTopicsObservation: _.H(ul), includeBuyerTopics: _.H(vl)};
        e = void 0 === e ? {} : e;
        var f = wl(d), g = f.ye, h = f.xe;
        b = ql(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(function (k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && Xa(k, g))); else if (ah()(k)) l || (l = k !== g); else return c.Db(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new xl, n = _.ig();
                var p = _.vi(m, 2, n);
                k instanceof Uint8Array ? Fj(p, 1, yl, jc(k, !1, !1)) : Fj(p, 3, yl, Cc(k));
                d.setItem("goog:cached:topics", zl(p))
            } catch (r) {
            }
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.A.Promise.resolve(g) : b.getTopicsPromise
    };
    wl = function (a) {
        if (!a) return {ye: null, xe: !0};
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {ye: null, xe: !0};
            var c = Bl(b), d = Cl(c, yl);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = Dl(El(c, Fl(c, yl, 1)));
                    break;
                case 3:
                    e = _.tg(c, Fl(c, yl, 3), 0);
                    break;
                default:
                    gb(d)
            }
            var f = _.Ug(c, 2) + 6048E5 < _.ig();
            return {ye: e, xe: f}
        } catch (g) {
            return {ye: null, xe: !0}
        }
    };
    ql = function (a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    Il = function (a) {
        if (oa()) {
            var b = a.document.documentElement.lang;
            Gl(a) ? Hl(vk(a), !0, "", b) : (new MutationObserver(function (c, d) {
                Gl(a) && (Hl(vk(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {attributeFilter: ["class"]})
        }
    };
    Gl = function (a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    Hl = function (a, b, c, d) {
        rg({ptt: "17", pvsid: "" + a, ibatl: String(b), pl: c, nl: d}, "translate-event")
    };
    Kl = function (a) {
        var b = "";
        Jl(function (c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    Ll = function () {
        var a = Date.now();
        return _.x(Number, "isFinite").call(Number, a) ? Math.round(a) : 0
    };
    Ol = function (a) {
        var b = new Ml;
        var c = Ll();
        b = _.Ij(b, 1, c);
        b = _.Ij(b, 2, a.pvsid);
        b = _.Hj(b, 3, a.Pa);
        c = Bh();
        b = _.ue(b, 4, c, Ec);
        b = _.Ij(b, 5, a.yi);
        a = _.Hj(b, 12, a.Ea);
        var d;
        if (b = null == (d = _.A.globalThis.performance) ? void 0 : d.memory) {
            d = new Nl;
            try {
                _.Ij(d, 1, b.jsHeapSizeLimit)
            } catch (e) {
            }
            try {
                _.Ij(d, 2, b.totalJSHeapSize)
            } catch (e) {
            }
            try {
                _.Ij(d, 3, b.usedJSHeapSize)
            } catch (e) {
            }
        } else d = void 0;
        d && _.Ai(a, 10, d);
        return a
    };
    Vl = function (a) {
        var b = _.lg();
        if (a.Rc) {
            var c = a.Qa, d = c.Qc, e = Ol(a), f = new Pl;
            b = _.Ij(f, 2, b);
            f = new Ql;
            f = _.Rl(f, 1, a.Rc);
            f = _.Sl(f, 2, a.yi);
            f = _.Rl(f, 3, a.hj);
            f = _.Sl(f, 4, a.xi);
            f = _.Rl(f, 5, a.ah);
            a = _.Sl(f, 6, a.eg);
            a = _.Ai(b, 3, a);
            e = _.Tl(e, 6, Ul, a);
            d.call(c, e)
        }
    };
    Yl = function (a) {
        if (!a.Rc) return function () {
        };
        var b = Ll();
        a.Qa.Qc(Wl(Ol(a)));
        return function () {
            var c = a.Qa, d = c.Qc, e = Ol(a);
            var f = new Xl;
            var g = Ll() - b;
            f = _.Ij(f, 1, g);
            e = _.Tl(e, 14, Ul, f);
            return void d.call(c, e)
        }
    };
    Zl = function (a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    L = function (a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function () {
            var e = _.ya.apply(0, arguments), f = $l(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Rc && a.hj) {
                    var h = a.Qa, k = h.Qc, l = Ol(a);
                    var m = _.Ij(l, 5, a.xi);
                    var n = new am;
                    var p = _.K(n, 1, b);
                    var r = _.Sl(p, 2, g);
                    var v = _.Tl(m, 9, Ul, r);
                    k.call(h, v)
                }
            } catch (w) {
            }
            return f
        }
    };
    $l = function (a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function () {
            var e = _.ya.apply(0, arguments), f = void 0, g = !1, h = null, k = _.Xf(bm);
            try {
                var l = _.H(cm);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) dm.call(this, a, 110, m); else if (dm.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if (_.em(h), !g && !d) throw m;
                }
            }
            return f
        }
    };
    fm = function (a, b, c, d) {
        return $l(a, b, c, void 0 === d ? !1 : d)()
    };
    dm = function (a, b, c) {
        if (a.ah) {
            c = _.gm(c) ? c.error : c;
            var d = new hm, e = new im;
            try {
                var f = vk(window);
                _.Ij(e, 1, f)
            } catch (p) {
            }
            try {
                var g = Bh();
                _.ue(e, 2, g, Ec)
            } catch (p) {
            }
            try {
                _.Hj(e, 3, window.document.URL)
            } catch (p) {
            }
            f = _.Ai(d, 2, e);
            g = new jm;
            b = _.K(g, 1, b);
            try {
                var h = hh(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.Hj(b, 2, h)
            } catch (p) {
            }
            try {
                var k = hh(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.Hj(b, 3, k)
            } catch (p) {
            }
            try {
                var l = hh(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.ue(b, 4, l.split(/\n\s*/), _.fd)
            } catch (p) {
            }
            h = _.Ai(f, 1, b);
            k = new km;
            try {
                _.Hj(k, 1, a.Pa)
            } catch (p) {
            }
            try {
                var m = lm();
                _.Sl(k, 2, m)
            } catch (p) {
            }
            try {
                var n = [].concat(_.Pi(_.x(mm, "keys").call(mm)));
                _.ue(k, 3, n, _.fd)
            } catch (p) {
            }
            _.Tl(h, 4, nm, k);
            _.Ij(h, 5, a.eg);
            a.Qa.qm(h)
        }
    };
    qm = function (a, b) {
        var c = om.get(a);
        c || (b = c = b(), pm.set(b, a), om.set(a, b));
        return c
    };
    N = function (a) {
        return function () {
            return new rm(a, [].concat(_.Pi(_.ya.apply(0, arguments))))
        }
    };
    sm = function (a) {
        return "[" + a.map(function (b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? sm(b) : String(b)
        }).join(", ") + "]"
    };
    tm = function (a, b) {
        b = sm(b);
        b = b.substring(1, b.length - 1);
        return new rm(96, [a, b])
    };
    um = function (a) {
        return (_.I = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.x(_.I, "includes")).call(_.I, a) ? a : null
    };
    wm = function (a, b, c) {
        return qm(c, function () {
            return new vm(a, b, c)
        })
    };
    ym = function (a, b, c) {
        return qm(c, function () {
            return new xm(a, b, c)
        })
    };
    zm = function (a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : O(d, tm("Slot.setClickUrl", [a]), c)
    };
    Gm = function (a, b, c, d, e) {
        if ("string" !== typeof a || Am(a)) O(e, tm("Slot.setTargeting", [a, b]), c); else {
            var f = [];
            Array.isArray(b) ? f = b : _.Ua(b) ? f = _.x(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.I = Bm(d), _.x(_.I, "find")).call(_.I, function (g) {
                return Bk(g, 1) === a
            })) ? Cm(b, f) : (b = Cm(Dm(new Em, a), f), Ik(d, 9, Em, b));
            e.info(Fm(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    Hm = function (a, b, c, d) {
        if (null != a && "object" === typeof a) for (var e = _.u(_.x(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, Gm(f, a[f], b, c, d); else d.error(tm("Slot.updateTargetingFromMap", [a]), b)
    };
    Jm = function (a, b, c, d) {
        return "string" !== typeof a ? (O(d, tm("Slot.getTargeting", [a]), b), []) : (b = (_.I = Bm(c), _.x(_.I, "find")).call(_.I, function (e) {
            return Bk(e, 1) === a
        })) ? Im(b).slice() : []
    };
    Km = function (a) {
        return Bm(a).map(function (b) {
            return _.F(b, 1)
        })
    };
    Qm = function (a, b, c, d) {
        if (void 0 === a) _.Gk(c, 9), d.info(Lm(b.getAdUnitPath()), b); else if (_.H(Mm) && ("string" !== typeof a || Am(a))) O(d, tm("Slot.clearTargeting", [a]), b); else {
            var e = Bm(c), f = _.x(e, "findIndex").call(e, function (g) {
                return Bk(g, 1) === a
            });
            0 > f ? O(d, Nm(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.Om(c, 9, e), d.info(Pm(a, b.getAdUnitPath()), b))
        }
    };
    _.Tm = function (a) {
        _.Xf(Rm).g = !0;
        return Sm[a]
    };
    Xm = function (a, b, c) {
        var d, e;
        return null != (e = null == (d = _.x(a, "find").call(a, function (f) {
            f = _.Um(f, Vm, 1);
            return Wm(f, 1) <= b && Wm(f, 2) <= c
        })) ? void 0 : _.zk(d, Vm, 2)) ? e : null
    };
    Zm = function (a, b, c) {
        var d;
        "number" === typeof b && "number" === typeof c && _.zk(a, Ym, 6).length ? d = Xm(_.zk(a, Ym, 6), b, c) : d = _.zk(a, Vm, 5);
        return d
    };
    an = function (a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = $m(!1, b), c = Zm(a, b.width, b.height));
        null != c || (c = Zm(a));
        return null == c ? [] : c.map(function (d) {
            return _.Q(d, 3) ? "fluid" : [Wm(d, 1), Wm(d, 2)]
        })
    };
    bn = function (a) {
        var b = [], c = !1;
        a = _.u(an(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    cn = function (a) {
        return 0 !== a && 1 !== a
    };
    dn = function (a) {
        return cn(a) && !(_.I = [8, 9], _.x(_.I, "includes")).call(_.I, a)
    };
    en = function (a) {
        var b = a.document;
        return jh(a) ? b.URL : b.referrer
    };
    hn = function (a) {
        try {
            return fn(a, window.top)
        } catch (b) {
            return new _.gn(-12245933, -12245933)
        }
    };
    mn = function (a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.jn(kn, a), a = new _.ln(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    on = function (a, b) {
        for (var c = {}, d = _.u(_.x(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = _.$d(b[e]), g = _.Xf(nn), h = g.g.get(e);
            null == h ? h = ++_.Xf(bm).A : g.g.delete(e);
            _.Gk(f, 20, _.Lc(h));
            c[e] = f
        }
        return {ca: _.$d(a), T: c}
    };
    qn = function () {
        for (var a = "", b = _.u(pn()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    pn = function () {
        var a;
        if ("function" === typeof (null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof (null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    In = function (a, b, c, d) {
        var e = rn(b, a) || En(b, a);
        if (!e) return null;
        var f = hn(e), g = e === En(b, a), h = Yi(function () {
            var p = g ? En(b, a) : e;
            return p && Fn(p, window)
        }), k = function (p) {
            var r;
            return null == (r = h()) ? void 0 : r.getPropertyValue(p)
        };
        c = an(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = Gn(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = Gn(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && Hn(e) ? f : new _.gn(-12245933, -12245933)
    };
    Jn = function (a, b, c, d) {
        var e = En(a, c), f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = In(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Kn = function (a) {
        return "google_ads_iframe_" + a.toString()
    };
    Ln = function (a) {
        return Kn(a) + "__container__"
    };
    rn = function (a, b) {
        var c;
        return (null == (c = En(a, b)) ? void 0 : c.querySelector('[id="' + Ln(a) + '"]')) || null
    };
    Mn = function (a, b) {
        var c, d;
        return null != (d = null == (c = rn(a, b)) ? void 0 : c.querySelector('iframe[id="' + Kn(a) + '"]')) ? d : null
    };
    En = function (a, b) {
        b = void 0 === b ? document : b;
        return Nn().l.get(a) || b.getElementById(a.getDomId())
    };
    Pn = function (a, b, c) {
        return qm(c, function () {
            return new On(a, b, c, c.g)
        })
    };
    Qn = function (a) {
        return _.x(Object, "assign").call(Object, {}, a, _.x(Object, "fromEntries").call(Object, _.x(Object, "entries").call(Object, a).map(function (b) {
            b = _.u(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    Un = function () {
        var a = {}, b = Qn(Rn);
        a.OutOfPageFormat = b;
        b = Qn(Sn);
        a.TrafficSource = b;
        b = Qn(Tn);
        a.Taxonomy = b;
        return a
    };
    Vn = function () {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a.tag_origin = "to", a
    };
    Yn = function (a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== Vn()[a] && "string" === typeof b) {
            var f = (_.I = c.Sa(), _.x(_.I, "find")).call(_.I, function (g) {
                return Bk(g, 1) === a
            });
            f ? Cm(f, [b]) : (f = Wn(Dm(new Em, a), b), Ik(c, 14, Em, f));
            e.info(Xn(a, String(b), d))
        } else O(e, tm("PubAdsService.set", [a, b]))
    };
    Zn = function (a, b, c) {
        return "string" !== typeof a ? (O(c, tm("PubAdsService.get", [a])), null) : (b = (b = (_.I = b.Sa(), _.x(_.I, "find")).call(_.I, function (d) {
            return Bk(d, 1) === a
        })) && Im(b)) ? b[0] : null
    };
    $n = function (a) {
        return a.Sa().map(function (b) {
            return _.F(b, 1)
        })
    };
    bo = function () {
        for (var a = $f(ao) || "0-0-0", b = a.split("-").map(function (e) {
            return Number(e)
        }), c = ["1", "0", "40"].map(function (e) {
            return Number(e)
        }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    go = function () {
        if (co) return co;
        for (var a = ag(eo), b = [], c = 0; c < a.length; c += 2) _.fo(a[c], a[c + 1], b);
        return co = b.join("&")
    };
    lo = function (a, b) {
        if (!b || !_.Ma(b)) return null;
        var c = !1, d = new ho;
        _.io(b, function (e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? qi(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? qi(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? qi(d, 3, b.sandbox) : c = g = !0;
                    break;
                default:
                    g = !0
            }
            g && a.error(jo("setSafeFrameConfig", ko(b), f, ko(e)))
        });
        return c ? null : d
    };
    no = function (a) {
        var b = new ho;
        a = _.u(a);
        for (var c = a.next(); !c.done; c = a.next()) if (c = c.value) {
            if (null != mo(c, 1)) {
                var d = b, e = _.Q(c, 1);
                qi(d, 1, e)
            }
            null != mo(c, 2) && (d = b, e = _.Q(c, 2), qi(d, 2, e));
            null != mo(c, 3) && (d = b, c = _.Q(c, 3), qi(d, 3, c))
        }
        return b
    };
    oo = function (a, b) {
        var c = {};
        b = (c[0] = Vh(b.pvsid), c);
        return _.Xf(zh).A(a, b)
    };
    qo = function (a, b) {
        var c;
        return null == (c = _.po(a, "__gads", b)) ? void 0 : _.x(c.split(":"), "find").call(c.split(":"), function (d) {
            return 0 === d.indexOf("ID=")
        })
    };
    ro = function (a, b, c, d) {
        (c = qo(c, d)) ? (d = {}, b = (d[0] = Vh(b.pvsid), d[1] = Vh(c), d), _.Xf(zh).A(a, b)) : oo(a, b)
    };
    vo = function (a) {
        var b = a.key, c = a.value, d = a.Fa, e = a.serviceName, f = a.zm, g = a.vb, h = a.R;
        a = a.context;
        var k = null;
        "string" === typeof c ? k = [c] : Array.isArray(c) ? k = c : _.Ua(c) && (k = _.x(Array, "from").call(Array, c));
        k = k && Za(k);
        var l, m = null != (l = null == k ? void 0 : k.every(function (n) {
            return "string" === typeof n
        })) ? l : !1;
        if ("string" === typeof b && !Am(b) && m) {
            c = k;
            l = (_.I = _.zk(d, Em, 2), _.x(_.I, "find")).call(_.I, function (n) {
                return Bk(n, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    O(h, so(c.join()));
                    return
                }
                if (l) {
                    O(h, to(c.join()));
                    return
                }
                c = uo(c, g, a)
            }
            l ? Cm(l, c) : (f = Cm(Dm(new Em, b), c), Ik(d, 2, Em, f));
            h.info(Fm(b, c.join(), e))
        } else O(h, tm("PubAdsService.setTargeting", [b, c]))
    };
    wo = function (a, b, c) {
        return "string" !== typeof a ? (O(c, tm("PubAdsService.getTargeting", [a])), []) : (b = (_.I = _.zk(b, Em, 2), _.x(_.I, "find")).call(_.I, function (d) {
            return Bk(d, 1) === a
        })) ? Im(b).slice() : []
    };
    xo = function (a) {
        return _.zk(a, Em, 2).map(function (b) {
            return _.F(b, 1)
        })
    };
    Bo = function (a, b, c, d) {
        if (void 0 === a) _.Gk(b, 2), d.info(yo(c)); else if (_.H(Mm) && ("string" !== typeof a || Am(a))) O(d, tm("PubAdsService.clearTargeting", [a])); else if ("gpt-beta" === a) O(d, zo(a)); else {
            var e = _.zk(b, Em, 2), f = _.x(e, "findIndex").call(e, function (g) {
                return Bk(g, 1) === a
            });
            0 > f ? O(d, Nm(a, c)) : (e.splice(f, 1), _.Om(b, 2, e), d.info(Ao(a, c)))
        }
    };
    uo = function (a, b, c) {
        var d = [];
        a = _.u(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.g = e;
            var f = oo(9, c);
            1 === f.length && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    Do = function () {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = Co.exec(null != (b = null == (a = _.Tm(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    Eo = function (a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    Fo = function (a, b) {
        var c = b.g;
        return a.map(function (d) {
            return _.x(c, "find").call(c, function (e) {
                return e.g === d
            })
        }).filter(ch())
    };
    Ho = function () {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function () {
                Go();
                return !0
            }, set: function () {
                Go()
            }, configurable: !0
        })
    };
    Ko = function (a, b, c, d, e, f) {
        var g = Io(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Fa;
        if (!f || !g) return O(b, tm("PubAdsService.definePassback", [d, e])), null;
        qi(g, 17, !0);
        c.slotAdded(f, g);
        return {Ki: Pn(a, b, new Jo(a, f, c)), Fa: g}
    };
    Mo = function (a, b, c, d, e) {
        return qm(c, function () {
            return new Lo(a, b, c, d, e)
        })
    };
    No = function (a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === Vn()[a] ? O(e, tm("Slot.set", [a, b]), c) : (c = (_.I = d.Sa(), _.x(_.I, "find")).call(_.I, function (f) {
            return Bk(f, 1) === a
        })) ? Cm(c, [b]) : (b = Wn(Dm(new Em, a), b), Ik(d, 3, Em, b))
    };
    Oo = function (a, b, c, d) {
        return "string" !== typeof a ? (O(d, tm("Slot.get", [a]), b), null) : (b = (b = (_.I = c.Sa(), _.x(_.I, "find")).call(_.I, function (e) {
            return Bk(e, 1) === a
        })) && Im(b)) ? b[0] : null
    };
    Po = function (a) {
        return a.Sa().map(function (b) {
            return _.F(b, 1)
        })
    };
    Ro = function (a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Qo) : "fluid" === a
    };
    So = function (a) {
        return Array.isArray(a) && 2 === a.length && Qo(a[0]) && Qo(a[1])
    };
    Wo = function (a) {
        return Array.isArray(a) ? To(Uo(new Vm, a[0]), a[1]) : Vo()
    };
    Yo = function (a) {
        var b = [];
        if (Xo(a)) b.push(Wo(a)); else if (Array.isArray(a)) {
            a = _.u(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Xo(c) ? b.push(Wo(c)) : Xa(c, ["fluid"]) && b.push(Vo())
        }
        return b
    };
    Zo = function (a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return Yo(a)
    };
    Xo = function (a) {
        return _.H($o) ? Array.isArray(a) && 2 === a.length ? a.every(ap) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    dp = function (a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new bp("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!So(b)) throw new bp("Size must be an array of two non-negative integers");
        b = To(Uo(new Vm, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = []; else if (a = Yo(a[1]), 0 === a.length) throw new bp("At least one slot size must be present");
        b = cp(b);
        return _.Om(b, 2, a)
    };
    ep = function (a) {
        if (!Array.isArray(a)) return "Size mapping must be an array";
        var b = [];
        a = _.u(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            if (!Array.isArray(c) || 2 !== c.length) return "Each mapping entry must be an array of size 2";
            if (!So(c[0])) return "Size must be an array of two non-negative integers";
            var d = _.u(c[0]), e = d.next().value;
            d = d.next().value;
            d = To(Uo(new Vm, e), d);
            if (Array.isArray(c[1]) && 0 === c[1].length) var f = []; else if (f = Yo(c[1]), 0 === f.length) return "At least one slot size must be present";
            c = b;
            e = c.push;
            d = cp(d);
            d = _.Om(d, 2, f);
            e.call(c, d)
        }
        return b
    };
    fp = function () {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {cmd: []}
    };
    jp = function (a, b) {
        _.H(gp) ? (_.Gk(a, 28), null !== b && dh(b) && _.x(Object, "hasOwn").call(Object, b, "enabled") && (b = b.enabled, hp(b) && (b = ip(b), _.Ai(a, 28, b)))) : void 0 === b || null === b ? _.Gk(a, 28) : (b = b.enabled, hp(b) ? (b = ip(b), _.Ai(a, 28, b)) : void 0 !== b && null !== b || _.Gk(a, 28))
    };
    kp = function (a, b) {
        if (!b) return [];
        var c = [];
        b = _.u((_.I = se(b, 26, rd), _.x(_.I, "values")).call(_.I));
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            try {
                c.push(JSON.parse(d))
            } catch (e) {
                dm(a, 1023, e)
            }
        }
        return c
    };
    mp = function (a, b, c) {
        return qm(c, function () {
            return new lp(a, b, c)
        })
    };
    wp = function (a, b, c, d, e, f, g, h) {
        var k = new Mk, l = new np(a, h);
        J(k, l);
        e = new op(a, d, e);
        J(k, e);
        e = new pp(a, b, d, f, l.qb);
        J(k, e);
        h = new qp(a, b, c, d, h, f, l.qb);
        J(k, h);
        if (_.H(rp)) {
            b = new sp(a, b, c, d, f, l.qb);
            J(k, b);
            var m = b.j
        }
        l = new tp(a, l.qb, h.j, e.j, m);
        J(k, l);
        0 < _.Zf(up) && J(k, new vp(a, g, l.output));
        k.run();
        return {qb: l.output, Za: k}
    };
    yp = function (a, b) {
        return qm(b, function () {
            return new xp(a, b)
        })
    };
    Bp = function (a, b, c) {
        var d = $l(a, 77, function () {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new zp(c);
                b.cmd = yp(a, f);
                null != e && e.length && (_.H(Ap) ? b.cmd.push.apply(f, e) : f.push.apply(f, e))
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.Of(window, "load", function () {
            return window.setTimeout(d, 0)
        }) : d()
    };
    Ep = function (a) {
        var b = window;
        "complete" === _.t.document.readyState ? fm(a, 94, function () {
            fp()._pubconsole_disable_ || null !== Cp(b) && Dp(a, b)
        }) : _.Of(_.t, "load", $l(a, 94, function () {
            fp()._pubconsole_disable_ || null !== Cp(b) && Dp(a, b)
        }))
    };
    Dp = function (a, b) {
        b = void 0 === b ? _.t : b;
        if (!Fp) {
            var c = new Gp("gpt_pubconsole_loaded");
            Hp(c, a);
            Ip(c, "param", String(Cp(b)));
            Ip(c, "api", String(Jp));
            Kp(c);
            _.Lp(b.document, Mp);
            Fp = !0
        }
    };
    Cp = function (a) {
        var b = en(a), c;
        return null != (c = (_.I = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.x(_.I, "find")).call(_.I, function (d) {
            var e = b.search(Np);
            b:{
                var f = 0;
                for (var g = d.length; 0 <= (f = b.indexOf(d, f)) && f < e;) {
                    var h = b.charCodeAt(f - 1);
                    if (38 == h || 63 == h) if (h = b.charCodeAt(f + g), !h || 61 == h || 38 == h || 35 == h) break b;
                    f += g + 1
                }
                f = -1
            }
            if (0 > f) d = null; else {
                g = b.indexOf("&", f);
                if (0 > g || g > e) g = e;
                f += d.length + 1;
                d = decodeURIComponent(b.slice(f, -1 !== g ? g : 0).replace(/\+/g, " "))
            }
            return null !== d
        })) ? c : null
    };
    Op = function () {
        fp()._pubconsole_disable_ = !0
    };
    Rp = function () {
        Pp && (fp().console.openConsole(Qp), Qp = void 0, Pp = !1)
    };
    Sp = function (a) {
        switch (Number(a)) {
            case 0:
                return "";
            case 1:
                return "Out-of-page creative";
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            case 6:
                return "Shoppit";
            case 7:
                return "Game Manual Interstitial";
            case 4:
                return "Rewarded";
            case 8:
            case 9:
                return "Side Rail";
            default:
                return ""
        }
    };
    Tp = function (a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(Bk(a, 1)), c.push(bn(a)), c.push(Bk(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.Uh(c.join(":")).toString() : "0"
    };
    Up = function (a) {
        if (!_.ol(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    Wp = function (a, b, c, d, e) {
        var f = void 0, g = $l(a.context, b, e);
        _.Of(c, d, g) && (f = function () {
            return void _.ng(c, d, g)
        }, _.Vp(a, f));
        return f
    };
    Yp = function (a) {
        a = (_.ol(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Xp(a, function (b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Zp = function (a) {
        return Math.round(Number(Gn(a)))
    };
    $p = function (a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.x(Array, "from").call(Array, b.children).some(function (c) {
            return c !== a && !(_.I = ["script", "style"], _.x(_.I, "includes")).call(_.I, c.tagName.toLowerCase())
        })
    };
    bq = function (a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.aq(a, c), a = a.parentElement
    };
    cq = function (a, b, c, d, e) {
        _.aq(a, {"margin-left": "0px", "margin-right": "0px"});
        var f = {}, g = "rtl" === d.direction, h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function () {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function (k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.aq(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.aq(a, f)), !0) : !1
    };
    eq = function (a, b, c, d, e, f, g, h, k, l) {
        window.setTimeout(function () {
            var m = bn(d);
            if (window.IntersectionObserver) {
                var n, p = null != (n = Mn(c, b)) ? n : En(c, b);
                m = dq(a, b, c, e, f, g, m, h, k, l, p);
                (new window.IntersectionObserver(m, {threshold: .98})).observe(p)
            }
        }, 500)
    };
    dq = function (a, b, c, d, e, f, g, h, k, l, m) {
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.Zf(fq);
        return $l(a, 459, function (p, r) {
            (p = null == p ? void 0 : p[0]) && gq(a, b, c, d, e, f, g, h, k, l, r, m, p, n)
        })
    };
    gq = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        var v = p.boundingClientRect, w = p.intersectionRatio, z = window.innerWidth, y = v.left, C = v.right,
            G = 0 > y + 2, D = 0 < C - (z + 2);
        (.98 <= w || G || D) && hq(k, function (M) {
            m.unobserve(n);
            var S = G || D;
            var P = new kh;
            iq(n, S) && P.set(10);
            if (void 0 !== h && $p(n)) {
                var aa, ka = null == (aa = En(c, b)) ? void 0 : aa.parentElement, ma;
                aa = ka ? null == (ma = Fn(ka, window)) ? void 0 : ma.width : void 0;
                h !== aa && P.set(16)
            }
            S ? (P.set(8), S = mh(P)) : S = jq(b, c, w, P);
            ma = kq(c, n, f);
            P = ma.ol;
            ma = ma.tl;
            Hp(M, a);
            Ip(M, "qid", l);
            Ip(M, "iu", c.getAdUnitPath());
            Ip(M, "e", String(S));
            G && Ip(M, "ofl", String(y));
            D && Ip(M, "ofr", String(C - z));
            Ip(M, "ret", e + "x" + f);
            Ip(M, "req", g);
            Ip(M, "bm", String(d));
            Ip(M, "efh", Number(P));
            Ip(M, "stk", Number(ma));
            Ip(M, "ifi", lq(window))
        }, r)
    };
    jq = function (a, b, c, d) {
        var e = Mn(b, a) || En(b, a);
        try {
            var f = e.getBoundingClientRect(), g = f.left, h = f.top, k = f.width, l = f.height, m = En(b, a),
                n = Fn(m, window);
            if ("hidden" === n.visibility || "none" === n.display) return mh(d);
            var p = Zp(n.getPropertyValue("border-top-width") || 0) + 1;
            b = g + k;
            f = h + l;
            c = (1 - c) * l;
            var r = a.elementsFromPoint(g + p + 2, h + c + p);
            var v = a.elementsFromPoint(b - p - 2, h + c + p);
            var w = a.elementsFromPoint(b - p - 2, f - c - p);
            var z = a.elementsFromPoint(g + p + 2, f - c - p);
            var y = a.elementsFromPoint(b / 2, f - c - p)
        } catch (G) {
            return d.set(1), mh(d)
        }
        if (!(r && r.length && v && v.length && w && w.length && z && z.length && y && y.length)) return d.set(7), mh(d);
        a = function (G, D) {
            for (var M = !1, S = 0; S < G.length; S++) {
                var P = G[S];
                if (M) {
                    var aa = Fn(P, window);
                    if ("hidden" !== aa.visibility && !mq(P) && !C(e, P)) {
                        d.set(D);
                        "absolute" === aa.position && d.set(11);
                        break
                    }
                } else e === P && (M = !0)
            }
        };
        nq(e) && d.set(9);
        var C = function (G, D) {
            return oq(G, D) || oq(D, G)
        };
        g = r[0];
        e === g || C(e, g) || mq(g) || d.set(2);
        g = v[0];
        e === g || C(e, g) || mq(g) || d.set(3);
        g = w[0];
        e === g || C(e, g) || mq(g) || d.set(4);
        g = z[0];
        e === g || C(e, g) || mq(g) || d.set(5);
        if (mq(e)) return mh(d);
        a(r, 12);
        a(v, 13);
        a(w, 14);
        a(z, 15);
        a(y, 6);
        return mh(d)
    };
    iq = function (a, b) {
        var c = !1, d = !1;
        return pq(a, function (e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    };
    kq = function (a, b, c) {
        var d = (a = En(a)) && Fn(a, window), e = d ? "absolute" !== d.position : !0, f = !1, g = a && a.parentElement,
            h = !1;
        ok(b, function (k) {
            var l = k.style;
            if (e) if (h || (h = k === g)) e = nk(k, _.t, -1, -1); else {
                l = l && l.height;
                var m = (l && _.x(l, "endsWith").call(l, "px") ? Zp(l) : 0) >= c;
                !l || m || "string" === typeof l && _.x(lk, "includes").call(lk, l) || (e = !1)
            }
            f || (k = Fn(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {ol: e, tl: f}
    };
    mq = function (a) {
        return pq(a, function (b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    nq = function (a) {
        return pq(a, function (b) {
            var c;
            return (_.I = ["left", "right"], _.x(_.I, "includes")).call(_.I, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    qq = function (a, b, c, d) {
        var e = _.mg("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    rq = function (a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    tq = function (a, b, c) {
        var d = new _.A.Map;
        a = _.u(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = Bi(f, sq, 28) ? _.Um(f, sq, 28) : _.Um(c, sq, 34);
            var g = void 0;
            d.set(e, (null == (g = f) ? 0 : null != mo(g, 1)) ? _.Q(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    wq = function (a, b, c) {
        var d, e, f = [], g = [];
        a = _.u(a);
        for (d = a.next(); !d.done; d = a.next()) if (d = d.value, 1 === b.get(d)) f.push(null), g.push(null); else {
            var h = c, k = En(d);
            d = uq((null == k ? void 0 : k.parentElement) && Fn(k.parentElement, h) || null);
            if (!d || 1 === d[0] && 1 === d[3]) {
                var l = e = d = void 0, m = null != (l = null == k ? void 0 : k.parentElement) ? l : null;
                l = null != (e = mn(m)) ? e : new _.ln(0, 0);
                vq(l, m, h, 100);
                e = null != (d = mn(k)) ? d : new _.ln(0, 0);
                vq(e, k, h, 1);
                -1 === l.height && (e.height = -1);
                d = l;
                d = d.width + "x" + d.height;
                e = e.width + "x" + e.height
            } else e = d = "-1x-1";
            f.push(d);
            g.push(e)
        }
        return {Ml: f, Fm: g}
    };
    vq = function (a, b, c, d) {
        try {
            var e;
            if (!(e = !b || !pk(b, c, d))) {
                a:{
                    do {
                        var f = Fn(b, c);
                        if (f && "fixed" == f.position) {
                            var g = !1;
                            break a
                        }
                    } while (b = b.parentElement);
                    g = !0
                }
                e = !g
            }
            e && (a.height = -1)
        } catch (h) {
            a.width = -1, a.height = -1
        }
    };
    yq = function (a, b, c) {
        var d = 0 !== (0, _.xq)(), e = $m(!0, c, d).width, f = [], g = [], h = [];
        if (null !== c && c != c.top) {
            var k = $m(!1, c).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        }
        -12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * c.outerWidth < e && h.push(10));
        a = _.u(a);
        for (d = a.next(); !d.done; d = a.next()) if (k = d.value, 1 === b.get(k)) f.push(null), g.push(null); else {
            d = new kh;
            var l = En(k);
            k = 0;
            var m = !1, n = !1, p = !1;
            if (l) {
                for (var r = 0, v = l; v && 100 > r; r++, v = v.parentElement) {
                    var w = Fn(v, c);
                    if (w) {
                        var z = w, y = z.display, C = z.overflowX;
                        if ("visible" !== z.overflowY && (d.set(2), (z = mn(v)) && (k = k ? Math.min(k, z.width) : z.width), d.get(9))) break;
                        rq(w) && d.set(9);
                        "none" === y && d.set(7);
                        "IFRAME" === v.nodeName && (w = parseInt(w.width, 10), w < e && (d.set(8), k = k ? Math.min(w, k) : w));
                        n || (n = "scroll" === C || "auto" === C);
                        m || (m = "flex" === y);
                        p || (p = "listbox" === v.role)
                    } else d.set(3)
                }
                if (!p) {
                    if (m = n && m) l = l.getBoundingClientRect().left, m = l > e || 0 > l;
                    p = m
                }
                p && d.set(11)
            } else d.set(1);
            l = _.u(h);
            for (m = l.next(); !m.done; m = l.next()) d.set(m.value);
            f.push(mh(d));
            g.push(k)
        }
        return {Tk: f, Kl: g}
    };
    zq = function (a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.u(e);
            g = a.next();
            for (f = {}; !g.done; f = {Qg: void 0}, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = mi(g, b), f.Qg = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.u(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                        Tb: void 0,
                        ji: void 0
                    }, k = e.next()) k = k.value, h.ji = "function" === typeof k.getFloor ? k.getFloor : void 0, h.Tb = Gi(Ei(Fi(new Ci, 4), g), c), k.getFloor = function (l, m) {
                        return function (n) {
                            4 === _.tg(l.Tb, 1, 0) && Fi(l.Tb, 1);
                            var p, r = null == (p = l.ji) ? void 0 : p.apply(this, [n]);
                            n = c ? r || {} : {currency: "USD", floor: m.Qg};
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.tg(l.Tb, 1, 0) && (n = Ei(Fi(l.Tb, 6), 1E6 * r.floor), Ji(n, 3, r.currency)), r) : (r.floor || 0) > m.Qg ? (1 === _.tg(l.Tb, 1, 0) && Ei(Fi(l.Tb, 5), 1E6 * r.floor), r) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.Tb)
                }
            }
        }
    };
    Aq = function (a, b) {
        var c = a.que, d = function () {
            var e;
            null == a || null == (e = a.requestBids) || e.before.call(b, function (f, g) {
                return fp().pbjs_hooks.push({context: b, nextFunction: f, requestBidsConfig: g})
            }, 0)
        };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d) : null == c || c.unshift(d)
    };
    Cq = function (a, b) {
        return qm(b, function () {
            return new Bq(a, b)
        })
    };
    Dq = function (a, b) {
        for (var c = new kh, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return mh(c)
    };
    Fq = function (a, b) {
        return Eq(a, b)
    };
    Eq = function (a, b) {
        return a.map(function (c) {
            return b(c)
        })
    };
    Iq = function (a, b, c, d, e, f, g) {
        if (f) {
            var h = {fh: new Gq}, k = new Mk;
            a = new Hq(a, b, c, d, e, f, g, h);
            J(k, a);
            k.run();
            return {Vj: h, Za: k}
        }
    };
    Kq = function (a, b) {
        var c;
        return !(null != (c = Jq(b, 22)) ? !c : !_.Q(a, 15))
    };
    Mq = function (a) {
        var b;
        var c = new Lq;
        c = _.Ij(c, 2, a.pvsid);
        c = _.Hj(c, 3, a.Pa);
        c = _.Hj(c, 6, a.Ea);
        var d = null != (b = a.Lf) ? b : _.ig();
        b = _.Ij(c, 1, d);
        c = Bh();
        b = _.ue(b, 4, c, Ec);
        a.payload && (c = a.payload(), _.Ai(b, 7, c));
        a.mb && _.Ij(b, 5, a.mb);
        return b
    };
    Oq = function (a, b, c, d) {
        for (var e = _.u(_.x(Object, "entries").call(Object, Nq)), f = e.next(); !f.done; f = e.next()) {
            var g = _.u(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && O(a, g(String(c), d))
        }
    };
    Tq = function (a, b, c) {
        a.sm && a.Qa.fj(Mq(_.x(Object, "assign").call(Object, {}, a, {
            mb: a.Jl, payload: function () {
                var d = new Pq;
                var e = _.Qq(d, Rq, 1, Sq);
                e = _.Oi(e, 1, b);
                _.Oi(e, 2, c);
                return d
            }
        })))
    };
    Uq = function (a, b, c) {
        b = void 0 === b ? !1 : b;
        c = (c = void 0 === c ? null : c) ? qh(c) : null;
        b = void 0 === b ? !0 : b;
        var d = 0;
        try {
            d |= a !== a.top ? 512 : 0;
            var e;
            if (!(e = !a.navigator)) {
                var f = a.navigator;
                e = "brave" in f && "isBrave" in f.brave || !1
            }
            d |= e || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            d |= fj(a, 2500);
            !b || c && Bj(c) || (d |= 4194304)
        } catch (g) {
            d |= 32
        }
        return d
    };
    Vq = function (a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            case 6:
                return 42;
            case 7:
                return 10;
            case 8:
                return 3;
            case 9:
                return 4
        }
    };
    Yq = function (a, b, c) {
        a = Vq(a);
        if (!a) return null;
        if (10 === a) return 0;
        var d = 0;
        if (!(_.I = [11, 10], _.x(_.I, "includes")).call(_.I, a)) {
            d |= b !== b.top ? 512 : 0;
            var e = _.ck(b);
            e = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && e.adCount ? 1 == a || 2 == a ? !(!e.adCount[1] && !e.adCount[2]) : (e = e.adCount[a]) ? 1 <= e : !1 : !1;
            e && (d |= 64);
            if (d) return d
        }
        if (2 === a || 1 === a) {
            var f = {oa: b, af: _.Wq, xh: c ? a : void 0};
            0 === (0, _.xq)() && (f.af = 3E3, f.Bg = 650);
            d |= _.uj(f)
        } else if (8 === a) d |= Uq(b); else if (3 === a || 4 === a) {
            var g = a;
            e = _.H(Xq);
            g = void 0 === g ? null : g;
            c = b !== b.top ? 512 : 0;
            oj(null == (f = b.navigator) ? void 0 : f.userAgent) && (c |= 1048576);
            f = b.innerWidth;
            1200 > f && (c |= 65536);
            var h = b.innerHeight;
            650 > h && (c |= 2097152);
            g && 0 === c && (g = 3 === g ? "left" : "right", (f = _.jk({
                oa: b,
                pi: !1,
                bj: 1,
                position: g,
                ia: f,
                ra: h,
                yc: new _.A.Set,
                minWidth: 120,
                minHeight: 500,
                Fc: void 0 === e ? !1 : e
            })) ? _.ck(b).sideRailPlasParam.set(g, f.width + "x" + f.height + "_" + String(g).charAt(0)) : c |= 16);
            d |= c
        } else 11 !== a && 42 !== a && (d |= 32);
        d || (b = _.ck(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return d
    };
    ar = function (a, b, c, d) {
        var e = d.Nh, f = d.adUnitPath;
        d = void 0 === d.xb ? !1 : d.xb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Zq(e)) ? $q(a, b, f, c, {
            Sb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            xb: d
        }) : (b.error(tm("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Zq = function (a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!Xp(Rn, function (b) {
                    return b === a
                })
        }
    };
    $q = function (a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {Sb: e.Sb, format: f, xb: e.xb});
        a = b.slotId;
        b = b.Fa;
        a && b && (_.yi(b, 15, f), _.Vp(a, function () {
            var g = window, h = Vq(f);
            if (h) {
                g = _.ck(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    br = function (a, b) {
        var c;
        return !(null != (c = Jq(a, 11)) ? !c : !_.Q(b, 10))
    };
    cr = function (a, b, c, d) {
        if (a = En(a, b)) {
            var e;
            if (c = null != (e = Jq(c, 24)) ? e : _.Q(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    fr = function (a, b) {
        var c = b.M, d = b.P;
        b = b.aa;
        a = _.u(a.X);
        for (var e = a.next(); !e.done; e = a.next()) if (e = e.value, _.dr(c, e)) {
            var f = d, g = f.ca;
            f = f.T[e.getDomId()];
            br(f, g) && cr(e, b, f, g);
            er(c, e);
            var h = void 0, k = void 0;
            null != (h = null != (k = Jq(f, 10)) ? k : _.Q(g, 11)) && h && cr(e, b, f, g)
        }
        return {}
    };
    gr = function (a) {
        if (61440 >= a.length) return {url: a, wh: 0};
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {url: b, wh: a.length - b.length + 8}
    };
    hr = function (a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    ir = function (a, b) {
        b = void 0 === b ? window : b;
        return !!hr(a, b)
    };
    jr = function (a) {
        var b, c;
        return null != (c = null == (b = _.x(a, "find").call(a, function (d) {
            return "page_url" === Bk(d, 1)
        })) ? void 0 : Im(b)[0]) ? c : null
    };
    kr = function (a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")), c = a.indexOf("&", b);
        -1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    lr = function (a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Jl(function () {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    mr = function (a, b) {
        var c = b.T;
        return !!jr(b.ca.Sa()) || a.some(function (d) {
            return null !== jr(c[d.getDomId()].Sa())
        })
    };
    or = function (a, b) {
        var c, d, e, f, g;
        return _.Qf(function (h) {
            c = a;
            d = c.bd;
            e = b;
            f = e.jg;
            return (null != (g = d) ? g : f.bd()) ? h.return(nr(f)) : h.return(null)
        })
    };
    sr = function (a, b, c) {
        var d = window, e = new Mk;
        d = new pr(d);
        _.R(e, d);
        a = new qr(a, d, c, _.Tm(150));
        J(e, a);
        b = new rr(879, or, {bd: b ? a.cd : void 0}, {jg: d, wo: !!b}, void 0, e.C.g);
        b = J(e, b).output;
        e.run();
        return {cd: a.cd, Uh: b, Za: e}
    };
    ur = function () {
        var a = void 0 === a ? window : a;
        tr = _.ig(a)
    };
    vr = function (a, b) {
        var c = _.mg("DIV");
        c.id = a;
        c.textContent = b;
        _.aq(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    wr = function (a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {rootMargin: a + "%"})
    };
    zr = function (a, b, c, d, e) {
        var f = void 0 === f ? _.A.globalThis.IntersectionObserver : f;
        if (!b) return {ug: e};
        var g = null != $i(b, 1) ? null != xr(b) && 0 !== (0, _.xq)() ? $i(b, 1) * xr(b) : $i(b, 1) : null;
        if (null == g) return {ug: e};
        b = new Mk;
        a = new yr(a, d, c, g, e, f);
        J(b, a);
        b.run();
        return {ug: a.output, xl: b}
    };
    Jr = function (a, b, c, d, e) {
        var f = window, g = new Mk, h = J(g, new Ar(a, b, Br, function (m) {
            return Cr("i-adframe-load", m.detail.data)
        })), k = J(g, new Ar(a, b, Br, function (m) {
            return Cr("i-dismiss", m.detail.data)
        }));
        h = 0 < _.Zf(Dr) ? J(g, new Er(a, h.output, void 0)).output : h.output;
        h = J(g, new Fr(a, b, c, h));
        J(g, new Gr(a, f, d, e, h.output));
        if (f.top === f) var l = J(g, new Hr(a, f, h.output)).output;
        J(g, new Ir(a, b, c, h.output, k.output, l));
        return g
    };
    Cr = function (a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {
        }
        return !1
    };
    Or = function () {
        var a = {};
        return a[576944485] = new Kr, a[578856259] = new Lr(function () {
            return _.Zf(Mr)
        }), a[607368714] = new Nr, a
    };
    Pr = function (a, b) {
        a.V.log(576944485, Mq, _.x(Object, "assign").call(Object, {}, a, b))
    };
    Qr = function (a) {
        return window.IntersectionObserver && new IntersectionObserver(a, {threshold: [.5]})
    };
    Rr = function (a) {
        return Math.max.apply(Math, _.Pi(null != a ? a : []))
    };
    Tr = function (a) {
        return (_.I = [4, 5, 7, 1], _.x(_.I, "includes")).call(_.I, Sr(a))
    };
    Vr = function (a, b, c) {
        return new Ur(c, a, Br, function (d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {
            }
            return null
        })
    };
    Xr = function (a) {
        var b = {paw_id: Wr(), gpa: 0};
        a.postMessage(JSON.stringify(b))
    };
    $r = function (a, b, c) {
        if (_.x(Object, "keys").call(Object, a).some(function (d) {
            return (_.I = _.x(Object, "values").call(Object, Yr), _.x(_.I, "includes")).call(_.I, Number(d))
        })) return !0;
        Zr("taxonomies", a, b, c);
        return !1
    };
    cs = function (a, b, c, d, e) {
        if (null == a) Zr("taxonomy", a, d, e); else {
            var f = Number(a);
            (_.I = _.x(Object, "values").call(Object, Tn), _.x(_.I, "includes")).call(_.I, Number(f)) ? a = !0 : (Zr("taxonomy", a, d, e), a = !1);
            a && (null == b ? Zr("taxonomyData", b, d, e) : as(b, d, e) && bs(f, b, c, d))
        }
    };
    ls = function (a, b, c, d, e) {
        if (!ds(a)) Zr("taxonomy", a, d, e); else if (null == b) Zr("taxonomyData", b, d, e); else if (as(b, d, e) && es(_.x(b, "values"), d, b) && (b = fs(a, _.x(b, "values"), d, b), b.size)) {
            b = [].concat(_.Pi(b));
            e = new gs;
            var f = hs.get(a);
            e = _.Oi(e, 3, f);
            is(c, js(e, b));
            d.info(ks(ko(b), ko(a)))
        }
    };
    as = function (a, b, c) {
        if (dh(a) && a.hasOwnProperty("values")) return !0;
        Zr("taxonomyData", a, b, c);
        return !1
    };
    bs = function (a, b, c, d) {
        if (es(_.x(b, "values"), d, b)) {
            var e = fs(a, _.x(b, "values"), d, b);
            e.size && (b = (_.I = _.zk(c, gs, 1), _.x(_.I, "find")).call(_.I, function (f) {
                return _.tg(f, 1, 0) === a
            }), e = [].concat(_.Pi(e)), b ? js(b, e) : is(c, js(ms(new gs, a), e)), d.info(ks(ko(e), ko(a))))
        }
    };
    es = function (a, b, c) {
        if (Array.isArray(a)) return !0;
        Zr("taxonomyData.values", a, b, c);
        return !1
    };
    fs = function (a, b, c, d) {
        if (!ih()(b)) return Zr("taxonomyData.values", b, c, d), new _.A.Set;
        d = new _.A.Set;
        var e = !1;
        b = _.u(b);
        for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            if (10 <= d.size) {
                e = !0;
                break
            }
            d.add(f)
        }
        e && O(c, ns(ko(a), ko(10)));
        return d
    };
    Zr = function (a, b, c, d) {
        O(c, jo("googletag.setConfig.pps", ko(d), a, ko(b)))
    };
    ds = function (a) {
        return hs.has(a)
    };
    ps = function (a) {
        return os.has(a)
    };
    ts = function (a, b) {
        if (3 === _.qs(b)) {
            var c = {Yd: new rs}, d = new Mk;
            J(d, new ss(a, b, c.Yd));
            d.run();
            return {Za: d, Vl: c}
        }
    };
    vs = function (a, b, c, d, e, f, g) {
        if (b) {
            var h = {Rg: new Gq}, k = new Mk;
            J(k, new us(a, b, c, d, h, e, f, g));
            k.run();
            return {Za: k, pf: h}
        }
    };
    xs = function (a) {
        ws = a
    };
    zs = function (a, b, c, d) {
        al(b, d, function (e, f) {
            dm(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function () {
            return void O(c, ys())
        })
    };
    Ra = function (a, b) {
        a:{
            b = b[0];
            a = a[0];
            for (var c = _.Pa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = _.Pa(b.length, a.length)
        }
        return b
    };
    As = function (a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.x(a, "includes").call(a, 0)
    };
    Bs = function (a) {
        if (As(a)) return {size: [], Wg: !0};
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function (c) {
                c = As(c);
                b = b || c;
                return !c
            });
            return {size: a, Wg: b}
        }
        return {size: a, Wg: !1}
    };
    Ds = function (a, b) {
        var c = b.T;
        return Fq(a, function (d) {
            return Cs(c[d.getDomId()]).join("&")
        })
    };
    Cs = function (a) {
        a = Es(a);
        var b = [];
        _.io(a, function (c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    Es = function (a) {
        for (var b = {}, c = _.u(Bm(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.F(d, 1)] = Im(d);
        a = Li(a, 8, 2);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    Fs = function (a) {
        var b = !1, c = _.zk(a, Em, 2).map(function (d) {
            var e = _.F(d, 1);
            b = "excl_cat" === e;
            d = Im(d);
            return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
        });
        a = Li(a, 3, 2);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    Hs = function (a, b, c, d, e) {
        if (c) {
            var f = {ke: new Gq, me: new Gq, rd: new Gq}, g = new Mk;
            J(g, new Gs(a, b, c, d, f, e));
            g.run();
            return {Za: g, Mm: f}
        }
    };
    Is = function (a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    Ks = function (a, b) {
        return a.filter(function (c) {
            return Js(c, 2) > b
        })
    };
    Ms = function (a, b) {
        a = new _.A.Map(a.map(function (e) {
            return [_.F(e, 1), e]
        }));
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.F(c, 1));
            d ? Ls(d, Math.max(Js(c, 2), Js(d, 2))) : a.set(_.F(c, 1), c)
        }
        return _.x(Array, "from").call(Array, _.x(a, "values").call(a))
    };
    Qs = function (a, b, c, d) {
        if (Ns(b, c, d)) return new _.A.Map;
        c = new _.A.Map(_.x(Object, "entries").call(Object, b).filter(function (k) {
            var l = _.u(k);
            k = l.next().value;
            l = l.next().value;
            return _.x(k, "startsWith").call(k, "gads_privacy_sandbox_td_buyerlist__") && l
        }).map(function (k) {
            var l = _.u(k);
            k = l.next().value;
            l = l.next().value;
            return [k, Os(l)]
        }));
        d = _.u(c);
        for (var e = d.next(); !e.done; e = d.next()) {
            var f = _.u(e.value);
            e = f.next().value;
            f = f.next().value;
            var g = _.zk(f, Ps, 1), h = Ks(g, a);
            0 === h.length ? (c.delete(e), b.removeItem(e)) : h.length < g.length && (_.Om(f, 1, h), b.setItem(e, zl(f)))
        }
        return c
    };
    Rs = function (a, b) {
        return String(_.Uh(b + "-" + _.F(a, 2) + _.F(a, 4) + _.Q(a, 3)))
    };
    Ns = function (a, b, c) {
        if (!_.Q(b, 3)) return !1;
        b = Rs(b, c);
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        c = _.u(_.x(Object, "keys").call(Object, a).filter(function (e) {
            return _.x(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (var d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    Ss = function (a) {
        return null !== a && _.x(Number, "isFinite").call(Number, a) && 0 <= a
    };
    Ts = function (a) {
        return (_.I = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.x(_.I, "includes")).call(_.I, a)
    };
    Vs = function (a, b, c, d, e) {
        if (b) {
            var f = b.Zb, g = b.fm;
            if (b.ih && 4 === f) {
                b = new Gq;
                f = new Gq;
                if (!g) return b.G({kind: 1, reason: 1}), f.G(!1), {qj: {Ti: b, hi: f}};
                g = new Mk;
                a = new Us(a, c, d, e, b, f);
                J(g, a);
                g.run();
                return {qj: {Ti: b, hi: f}, Sm: g}
            }
        }
    };
    Xs = function (a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner", e = _.Q(c, 18), f = _.Q(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = _.F(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        _.Q(c, 4) && (d += "&is_plog=1");
        (e = _.F(c, 11)) && (d += "&ecrs=" + e);
        if (null == c ? 0 : _.F(c, 19)) d += "&cid=" + encodeURIComponent(_.F(c, 19));
        (null == c ? 0 : _.Q(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        Ws(d)
    };
    Zs = function (a) {
        var b = a.Wf, c = a.Ab, d = void 0 === a.Bh ? [] : a.Bh, e = a.interestGroupBuyers, f = a.dl, g = a.Ok,
            h = a.am;
        a = a.im;
        var k = _.Zf(Ys), l = {};
        void 0 !== f && (l["https://googleads.g.doubleclick.net"] = f, l["https://td.doubleclick.net"] = f);
        if (g) {
            g = _.u(g);
            for (var m = g.next(); !m.done; m = g.next()) {
                var n = _.u(m.value);
                m = n.next().value;
                n = n.next().value;
                l[m] = n
            }
        }
        e = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            trustedScoringSignalsUrl: "https://securepubads.g.doubleclick.net/td/sts",
            interestGroupBuyers: null != e ? e : ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
            sellerExperimentGroupId: f,
            auctionSignals: b.auctionSignals.promise,
            sellerSignals: b.g.promise,
            sellerTimeout: k,
            sellerCurrency: "USD",
            perBuyerCurrencies: b.perBuyerCurrencies.promise,
            perBuyerExperimentGroupIds: l,
            perBuyerSignals: b.perBuyerSignals.promise,
            perBuyerTimeouts: b.perBuyerTimeouts.promise,
            perBuyerCumulativeTimeouts: b.perBuyerCumulativeTimeouts.promise
        };
        h && (e.deprecatedRenderURLReplacements = b.deprecatedRenderURLReplacements.promise);
        a && (e.reportingTimeout = a);
        e.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        c = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            interestGroupBuyers: [],
            auctionSignals: {},
            sellerExperimentGroupId: f,
            sellerSignals: b.topLevelSellerSignals.promise,
            sellerTimeout: k,
            signal: c.signal,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: [e].concat(_.Pi(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    $s = function (a, b) {
        var c = b.Wf;
        c.topLevelSellerSignals.resolve(a.sellerSignals);
        c.directFromSellerSignals.resolve(a.directFromSellerSignals);
        c.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        c.resolveToConfig.resolve(!!a.resolveToConfig);
        var d;
        a = null == (d = a.componentAuctions) ? void 0 : _.x(d, "find").call(d, function (m) {
            return Ts(m.seller)
        });
        var e;
        d = null != (e = null == a ? void 0 : a.perBuyerCumulativeTimeouts) ? e : {};
        b = _.u(b.interestGroupBuyers);
        for (e = b.next(); !e.done; e = b.next()) {
            e = e.value;
            var f = void 0, g = void 0;
            (null == (f = a) ? 0 : null == (g = f.interestGroupBuyers) ? 0 : _.x(g, "includes").call(g, e)) || (d[e] = 0)
        }
        if (a) {
            c.auctionSignals.resolve(a.auctionSignals);
            c.g.resolve(a.sellerSignals);
            c.perBuyerSignals.resolve(a.perBuyerSignals);
            var h;
            c.perBuyerTimeouts.resolve(null != (h = a.perBuyerTimeouts) ? h : {});
            c.perBuyerCumulativeTimeouts.resolve(d);
            var k;
            c.perBuyerCurrencies.resolve(null != (k = a.perBuyerCurrencies) ? k : {});
            var l;
            c.deprecatedRenderURLReplacements.resolve(null != (l = a.deprecatedRenderURLReplacements) ? l : {})
        } else c.auctionSignals.resolve(void 0), c.g.resolve(void 0), c.perBuyerSignals.resolve({}), c.perBuyerTimeouts.resolve({}), c.perBuyerCumulativeTimeouts.resolve(d), c.perBuyerCurrencies.resolve({}), c.deprecatedRenderURLReplacements.resolve({})
    };
    bt = function (a, b) {
        if (_.H(at) && !Ss(b)) return [];
        var c = Math.round(b);
        return a.map(function (d) {
            var e = new Ps;
            d = _.Hj(e, 1, d);
            return Ls(d, c)
        })
    };
    ct = function (a, b, c, d, e) {
        a.Lb.G(e);
        a.Ga.G(c);
        a.Ja.G(d);
        null == b || b.G(!1)
    };
    lt = function (a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, r, v, w;
        return _.Qf(function (z) {
            if (1 == z.g) return ("string" !== typeof a || _.x(a, "startsWith").call(a, "urn:")) && dt.deprecatedURNToURL && dt.deprecatedReplaceInURN ? z.yield(dt.deprecatedURNToURL(a), 2) : z.return();
            c = z.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(et)) ? f : []).forEach(function (y) {
                d[y] = e
            });
            g = b.al || "";
            (null != (h = c.match(ft)) ? h : []).forEach(function (y) {
                d[y] = g
            });
            k = b.Qj || "";
            (null != (l = c.match(gt)) ? l : []).forEach(function (y) {
                d[y] = k
            });
            m = b.Mj || "";
            (null != (n = c.match(ht)) ? n : []).forEach(function (y) {
                d[y] = m
            });
            p = b.Kj || "";
            (null != (r = c.match(jt)) ? r : []).forEach(function (y) {
                d[y] = p
            });
            v = b.hm || "";
            (null != (w = c.match(kt)) ? w : []).forEach(function (y) {
                d[y] = v
            });
            return z.yield(dt.deprecatedReplaceInURN(a, d), 0)
        })
    };
    mt = function (a) {
        return "function" === typeof FencedFrameConfig && a instanceof FencedFrameConfig
    };
    qt = function (a) {
        var b = a.Gk, c = a.Tj, d = a.cm, e = a.el;
        a = a.mb;
        if ("string" === typeof c || mt(c)) c = 4; else switch (c) {
            case null:
                c = 5;
                break;
            case 2:
                c = 1;
                break;
            case 3:
                c = 3;
                break;
            case 1:
                c = 2;
                break;
            case 4:
            case 0:
                c = 0;
                break;
            default:
                c = 0
        }
        var f = new nt;
        c = _.K(f, 3, c);
        d = _.Hj(c, 2, d);
        b = _.Sl(d, 1, b);
        void 0 !== e && _.Hj(b, 4, e);
        e = new ot;
        void 0 !== a && _.Sl(e, 1, a);
        _.Tl(e, 3, pt, b);
        return e
    };
    rt = function (a, b, c, d, e, f, g, h) {
        var k = 3 === b, l = 2 === b, m = 1 === b, n = f.getEscapedQemQueryId(), p = _.F(f, 6);
        hq("run_ad_auction_stats", function (r) {
            Hp(r, a);
            Ip(r, "duration_ms", c);
            Ip(r, "applied_timeout_ms", d);
            Ip(r, "timed_out", l ? 1 : 0);
            Ip(r, "error", k ? 1 : 0);
            Ip(r, "auction_skipped", m ? 1 : 0);
            Ip(r, "auction_winner", h ? 1 : 0);
            Ip(r, "thread_release_only", _.Q(f, 15) ? 1 : 0);
            Ip(r, "winner_qid", null != n ? n : "");
            Ip(r, "xfpQid", null != p ? p : "");
            Ip(r, "publisher_tag", "gpt");
            e && Ip(r, "parallel", "1");
            0 < g && Ip(r, "nc", g)
        }, 1)
    };
    st = function (a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(), g = _.F(e, 6);
        hq("run_ad_auction_complete", function (h) {
            Hp(h, a);
            Ip(h, "duration_ms", Math.round(d));
            Ip(h, "applied_timeout_ms", c);
            Ip(h, "auction_has_winner", b);
            f && Ip(h, "winner_qid", f);
            g && Ip(h, "xfpQid", g)
        }, 1)
    };
    tt = function (a, b) {
        var c = b.getEscapedQemQueryId(), d = _.F(b, 6);
        hq("pre_run_ad_auction_ping", function (e) {
            Hp(e, a);
            Ip(e, "winner_qid", null != c ? c : "");
            Ip(e, "xfpQid", null != d ? d : "");
            Ip(e, "publisher_tag", "gpt")
        }, 1)
    };
    zt = function (a, b, c, d) {
        var e = En(a, document);
        e && lj(e, window, d, !0);
        ut(_.Xf(bm), "5", vt(c.T[a.getDomId()], 20));
        wt(a, xt, 801, {Hh: null, isBackfill: !1});
        if (_.dr(b, a) && !Mn(a, document)) {
            b = c.ca;
            c = c.T[a.getDomId()];
            var f;
            (null != (f = Jq(c, 10)) ? f : _.Q(b, 11)) && cr(a, document, c, b)
        }
        wt(a, yt, 825, {isEmpty: !0})
    };
    Bt = function (a) {
        if (!_.H(At)) return null;
        var b = new _.A.Set;
        a = _.u(_.x(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, _.Q(c, 2) && _.zk(c, Ps, 1).forEach(function (d) {
            b.add(_.F(d, 1))
        });
        return 0 < b.size ? _.x(Array, "from").call(Array, b) : null
    };
    Dt = function (a, b, c, d, e, f, g, h, k) {
        if (b) {
            var l = b.Zb;
            if (b.ih && 0 !== l) return b = new Mk, a = new Ct(a, l, c, d, e, f, g, h, k), J(b, a), b.run(), {
                Rm: a.j,
                Qm: b
            }
        }
    };
    Et = function () {
        for (var a = _.u(_.x(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value, d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), b = ib(b.textContent), kb(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    Ft = function (a, b) {
        b = _.u(_.x(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.u(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    It = function (a, b, c) {
        var d = [];
        c = [].concat(_.Pi(c.X)).slice();
        if (b) {
            if (!Array.isArray(b)) return O(a, tm("googletag.destroySlots", [b])), !1;
            Oa(b);
            d = c.filter(function (e) {
                return _.x(b, "includes").call(b, e.g)
            })
        } else d = c;
        if (!d.length) return !1;
        Gt(d);
        Ht(d);
        return !0
    };
    Wt = function (a, b, c, d, e, f, g, h, k, l) {
        var m = fp(), n, p, r = L(a, 74, function (w, z, y) {
            return e.defineSlot(a, b, w, z, y)
        }), v = {};
        r = (v._loaded_ = !0, v.cmd = [], v._vars_ = m._vars_, v.evalScripts = function () {
            try {
                Et()
            } catch (y) {
                dm(a, 297, y);
                var w, z;
                null == (w = window.console) || null == (z = w.error) || z.call(w, y)
            }
        }, v.display = L(a, 95, function (w) {
            Jt(c, w, e)
        }), v.defineOutOfPageSlot = L(a, 73, function (w, z) {
            return (w = ar(a, b, e, {Nh: z, adUnitPath: w})) ? w.g : null
        }), v.getVersion = L(a, 946, function () {
            return a.Te
        }), v.pubads = L(a, 947, function () {
            return Mo(a, b, c, e, h)
        }), v.companionAds = L(a, 816, function () {
            null != n || (n = new Kt(a, b, c, f));
            return wm(a, b, n)
        }), v.content = L(a, 817, function () {
            null != p || (p = new Lt(a, b, g));
            return ym(a, b, p)
        }), v.setAdIframeTitle = L(a, 729, xs), v.getEventLog = L(a, 945, function () {
            return new Mt(a, b)
        }), v.sizeMapping = L(a, 90, function () {
            return new Nt(a, b)
        }), v.enableServices = L(a, 91, function () {
            for (var w = _.u(Ot), z = w.next(); !z.done; z = w.next()) z = z.value, z.enabled && b.info(Pt()), Qt(z)
        }), v.destroySlots = L(a, 75, function (w) {
            return It(b, w, e)
        }), v.enums = Un(), v.defineSlot = r, v.defineUnit = r, v.getWindowsThatCanCommunicateWithHostpageLibrary = L(a, 955, function (w) {
            return Rt(k, w).map(function (z) {
                var y;
                return null == (y = Mn(z, document)) ? void 0 : y.contentWindow
            }).filter(function (z) {
                return !!z
            })
        }), v.disablePublisherConsole = L(a, 93, Op), v.onPubConsoleJsLoad = L(a, 731, Rp), v.openConsole = L(a, 732, function (w) {
            Jp = !0;
            var z;
            (null == (z = fp()) ? 0 : z.console) ? fp().console.openConsole(w) : (w && (Qp = w), Pp = !0, Dp(a))
        }), v.setConfig = L(a, 1034, function (w) {
            if (dh(w)) {
                if (_.x(Object, "hasOwn").call(Object, w, "pps")) {
                    var z = w.pps;
                    if (null === z) {
                        var y = _.Jj(d, St, 33);
                        _.Gk(y, 2)
                    } else {
                        y = _.Jj(_.Jj(d, St, 33), Tt, 2);
                        _.Gk(y, 1);
                        if (dh(z) && z.hasOwnProperty("taxonomies")) var C = !0; else O(b, tm("googletag.setConfig.pps", [z])), C = !1;
                        if (C) if (C = z.taxonomies, dh(C) && null !== C) {
                            var G;
                            _.x(Object, "keys").call(Object, C).some(ds) ? G = ls : $r(C, b, z) && (G = cs);
                            if (G) {
                                z = _.u(_.x(Object, "entries").call(Object, C));
                                for (var D = z.next(); !D.done; D = z.next()) {
                                    var M = _.u(D.value);
                                    D = M.next().value;
                                    M = M.next().value;
                                    G(D, M, y, b, C)
                                }
                            }
                        } else Zr("taxonomies", C, b, z)
                    }
                }
                _.x(Object, "hasOwn").call(Object, w, "adExpansion") && (_.Gk(d, 34), y = w.adExpansion, null !== y && dh(y) && _.x(Object, "hasOwn").call(Object, y, "enabled") && (y = y.enabled, hp(y) && (y = ip(y), _.Ai(d, 34, y))));
                if (_.x(Object, "hasOwn").call(Object, w, "privacyTreatments")) {
                    w = w.privacyTreatments;
                    _.Gk(d, 36);
                    a:{
                        if (null !== w && dh(w) && _.x(Object, "hasOwn").call(Object, w, "treatments")) {
                            w = w.treatments;
                            if (Ut(w) && w.every(ps)) {
                                w = {treatments: w};
                                break a
                            }
                            O(b, tm("googletag.setConfig", [w]))
                        }
                        w = void 0
                    }
                    y = w;
                    if (void 0 !== y) {
                        w = new _.A.Set;
                        y = _.u(y.treatments);
                        for (G = y.next(); !G.done; G = y.next()) {
                            G = G.value;
                            a:{
                                switch (G) {
                                    case "disablePersonalization":
                                        C = 1;
                                        break a
                                }
                                C = void 0
                            }
                            void 0 === C ? O(b, tm("googletag.setConfig", [G])) : w.add(C)
                        }
                        if (w.size) {
                            y = new Vt;
                            G = y.D;
                            C = kc(G);
                            nc(Xd(y.D));
                            G = he(G, C, 1, !1);
                            C = kc(G);
                            C = !!(4 & C) && !!(4096 & C);
                            if (Array.isArray(w)) for (z = 0; z < w.length; z++) G.push(_.Bc(w[z], C)); else for (w = _.u(w), z = w.next(); !z.done; z = w.next()) G.push(_.Bc(z.value, C));
                            _.Ai(d, 36, y)
                        }
                    }
                }
            } else O(b, tm("googletag.setConfig", [w]))
        }), v.apiReady = !0, v);
        zs(a, m, b, l);
        Ft(m, r)
    };
    Bu = function (a, b, c, d, e, f, g, h, k) {
        var l = window, m = Nn(), n = new Mk, p = new Xt(a, l);
        p = J(n, p).output;
        var r = new Mk;
        var v = new Yt(a, l);
        J(r, v);
        r.run();
        r = {Rl: v.C, mc: v.mc};
        _.H(Zt) && J(n, new $t(a, l));
        if (oa()) {
            v = {Mi: new Gq};
            var w = new Mk;
            J(w, new gu(a, window, v.Mi));
            w.run()
        } else v = void 0;
        var z = _.H(hu);
        w = l.navigator;
        l = Qh(l.isSecureContext, l.navigator, l.document);
        l = !z && l;
        z = _.Zf(iu);
        var y = !!w.getInterestGroupAdAuctionData;
        w = _.H(ju) && !!w.createAuctionNonce;
        l = {ih: l, Zb: z, fm: y, Oj: w};
        if (e) {
            var C = new Mk;
            w = new ku(a, e);
            J(C, w);
            y = new lu(a, w.j);
            J(C, y);
            C.run();
            var G = y.j;
            var D = y.C;
            var M = y.o;
            C = y.Id;
            var S = y.H;
            z = y.J;
            w = y.Df;
            y = y.Hd;
            var P, aa = new mu(a, document, fp(), b, m, c, null != (P = window.location.hash) ? P : "");
            J(n, aa);
            b = new nu(a, fp(), null, b, m, c, S);
            J(n, b);
            m = new ou(a, M);
            J(n, m);
            h = new pu(a, window, D, h);
            J(n, h);
            P = {
                bc: new Gq,
                rc: new Gq,
                qc: new Gq,
                oc: new Gq,
                Vc: new Gq,
                Kc: new Gq,
                mf: new Gq,
                nf: new Gq,
                Jf: new Gq
            };
            D = new Mk;
            J(D, new qu(a, f, G, window, P));
            D.run();
            e = sr(a, e, h.j);
            G = e.cd;
            D = e.Uh;
            _.R(n, e.Za);
            e = new ru(a, D);
            J(n, e);
            f = new su(a, D);
            J(n, f);
            c = wp(a, c, d, window, G, D, 2).qb;
            if (_.H(tu)) {
                G = new uu(a, window.navigator, c);
                var ka = G.j;
                J(n, G)
            }
            G = void 0;
            _.H(vu) && (d = new wu(a, d, window, c), G = d.output, J(n, d));
            _.H(xu) || Do() ? d = void 0 : (d = {
                Fg: new Gq,
                zb: new Gq
            }, D = new Mk, J(D, new yu(a, C, c, d)), D.run(), d = {rf: d, Za: D});
            if (d) var ma = d.rf;
            d = window;
            D = !Rh(d.isSecureContext, d.document);
            Sh(d.isSecureContext, d, d.document) || !D ? (D = new Mk, d = new zu(a, d, p, c), J(D, d), D.run(), d = d.j) : d = void 0;
            D = new Mk;
            a = new Au(a, g, k, c, z);
            J(D, a);
            D.run();
            C = {
                se: P,
                rf: ma,
                Hl: h.j,
                lk: m.output,
                Ub: b.Ub,
                Id: C,
                Oe: e.Oe,
                Xk: f.j,
                Df: w,
                zf: d,
                Th: G,
                rk: ka,
                Hd: y
            }
        }
        n.run();
        return {Ql: r, Zl: v, Uf: p, Pm: l, Ae: {jd: new _.A.Set}, Jb: C}
    };
    Cu = function (a) {
        var b = {threshold: [0, .3, .5, .75, 1]};
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    rv = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, z, y, C, G) {
        var D = new Mk, M = $m(!0, window), S = k.ca, P = k.T[e.getDomId()], aa = C.Uf, ka = C.Ae.jd, ma,
            ja = null == (ma = C.Jb) ? void 0 : ma.zf, Ga = new Du(a, window);
        J(D, Ga);
        var ta = m.height, Ba = m.width, Ka = m.tb, Wa = m.Oa, eb = m.Bd, Ta = m.isBackfill, bc = m.Hb, Fc = m.Zk,
            Zb = m.gb, mc = m.Kf, cc = m.lh, dc = m.sg, Oc = m.Qb, Pc = m.Ue, uf = m.Kb, Ae = m.Ra, Kd = m.ga,
            Be = m.Sg, Ag = m.jk, Bg = m.Of, Qc = new Gq;
        Qc.G(p);
        var Ld = new Eu(a, window.top, Qc);
        J(D, Ld);
        var Md = new Fu(a, Sr(P), M.height, Zb, ta);
        J(D, Md);
        var ab = new Gu(a, e, En(e, n), e.getDomId(), Ln(e), n.documentElement, Sr(P), h, f);
        Hu(D, ab);
        var Ob = ab.output, vf = new Iu(a, Ae, eb, Ta, bc);
        J(D, vf);
        var Ce = new Ju(a, _.Um(S, Ku, 5), P, d);
        J(D, Ce);
        var Cg = new Lu(a, window.location.hash, M, e.getAdUnitPath(), P, f, Md.output, mc, Ba, ta, vf.output, Ob);
        Hu(D, Cg);
        var kd = Cg.K, wf = new Mu(a, S, P, eb, bc, kd.Ve);
        J(D, wf);
        var sj = Ld.output, tj = kd.Ga, Dg = kd.Ja;
        if (Qh(window.isSecureContext, window.navigator, window.document) && !_.H(hu) && g) {
            var Eh = {Lc: new rs, Ga: new Gq, Ja: new Gq, ed: new Gq}, Eg = new Mk;
            J(Eg, new Nu(a, e, sj, P, h, p, f, tj, Dg, Ob, r, k, y, Wa, Kd, Eh, v, G));
            Eg.run();
            var Fh = {Za: Eg, Tm: Eh}
        } else Fh = void 0;
        var Fg = Fh;
        if (Fg) {
            _.R(D, Fg.Za);
            var De = Fg.Tm
        }
        var Gh, Hh, Ih = null != (Hh = null == (Gh = De) ? void 0 : Gh.Ga) ? Hh : kd.Ga, Jh, Kh,
            Nd = null != (Kh = null == (Jh = De) ? void 0 : Jh.Ja) ? Kh : kd.Ja, Lh,
            ld = null == (Lh = De) ? void 0 : Lh.Lc, Mh, xf = null == (Mh = De) ? void 0 : Mh.ed,
            Gc = new Ou(a, e, S, P, Sr(P), n, h, Ob, wf.output, Nd, Ka, ld);
        J(D, Gc);
        var yf = new Pu(a, Gc.output);
        J(D, yf);
        var zf = new Qu(a, e, M, h, yf.output, Ce.j, ld);
        J(D, zf);
        var Rc = new Ru(a, zf.output, Gc.output, Ce.j, ld);
        J(D, Rc);
        var Gg = new Su(a, window, M, e, P, Ob, Gc.output, Ka, Nd, kd.ve, Wa);
        Hu(D, Gg);
        var Hg = new Tu(a, S, P, cc, Ih, wf.output);
        J(D, Hg);
        var Ig = new Uu(a, window, uf, Ga.output, ld);
        J(D, Ig);
        var Af = new Vu(a, Sr(P), n);
        J(D, Af);
        var Sc = new Wu(a, z, Sr(P), Zb, Fc, ld);
        J(D, Sc);
        var Bf = new Xu(a, dc, xf, Qc, ld);
        J(D, Bf);
        var Nh = window;
        if (_.H(ul) && ja) {
            var Ee = new Mk;
            J(Ee, new Yu(a, Nh, Bg, ja));
            Ee.run();
            var md = Ee
        } else md = void 0;
        var nd = md;
        nd && _.R(D, nd);
        var Pb = new Zu(a, e, h, k, w, l, Ka, Wa, Ta, Oc, Kd, window, Ih, wf.output, Rc.output, Ob, Gc.output, Nd, Hg.output, Gg.Lc, Ig.output, Af.output, Sc.output, aa, ld);
        J(D, Pb);
        var Cf = new $u(a, window, e, Pb.o, Qc);
        J(D, Cf);
        var Jg = Sr(P);
        switch (Jg) {
            case 2:
            case 3:
                _.H(av) ? J(D, new bv(a, h, Sr(P), e, window, Zb, Pb.j, Ob, Sc.output, Nd)) : J(D, new cv(a, h, Sr(P), e, window, Zb, Pb.j, Ob, Sc.output, Nd));
                break;
            case 5:
                J(D, new dv(a, e, k.xd, Fc, n, Pb.j, Ob, Ld.output, Sc.output, y));
                break;
            case 4:
                var Df = new ev(a, e, w, window, Pb.j, Ob);
                _.R(D, Df);
                Df.run();
                break;
            case 7:
                Hu(D, Jr(a, e, w, Pb.j, Ob));
                break;
            case 8:
            case 9:
                var Kg = Pb.j, Oh = Gc.output, Lg = window, Od = new Mk, Fe = 8 === Jg ? 3 : 4, Hc = new fv(a, z);
                J(Od, Hc);
                J(Od, new gv(a, Lg, Fe, Hc.output, Kg, Oh, Nd));
                Od.run();
                Od && _.R(D, Od)
        }
        var Ge = new hv(a, e, Pb.j, n, w);
        J(D, Ge);
        var Ef = new iv(a, e, jv(h, e), window.top);
        J(D, Ef);
        var Mg = Pb.j, Ic = new Mk, Ff = J(Ic, new Ar(a, e, kv)), Ph = J(Ic, new lv(a, n, Mg, Ff.output));
        J(Ic, new mv(a, Ph.output, w, e));
        Ic.run();
        _.R(D, Ic);
        var Gf = new nv(a, jv(h, e), window.top, Pb.j, Ga.output, Ef.output, Ef.j);
        J(D, Gf);
        J(D, new ov(a, e, Ka, eb, Pb.j, Gc.output, Pb.C));
        var Hf = new pv(a, window, Pc, Pb.j, Gc.output, Ob);
        J(D, Hf);
        var ec = fp(), Pd = new Mk, Qd = new qv(a, n, ec, S, c, b, d, ka, Ag);
        J(Pd, Qd);
        Pd.run();
        _.R(D, Pd);
        var He = new Gq;
        He.G(Be);
        J(D, new nu(a, fp(), S, b, c, d, He));
        return D
    };
    uv = function (a, b, c) {
        var d = null;
        try {
            var e = sv(b.top.document, b.top).y;
            d = a.map(function (f) {
                var g = c.ca, h = c.T[f.getDomId()];
                g = Kq(g, h);
                var k;
                f = null == (k = Jn(f, h, b.document, g)) ? void 0 : k.y;
                k = $m(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++tv
            })
        } catch (f) {
        }
        return d
    };
    Cv = function (a) {
        return fm(a.la.context, 1132, function () {
            if (a.ma.X.length) {
                var b = new _.A.Set(ag(vv));
                var c = a.la.Z;
                c = _.H(wv) && _.Q(c, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : [];
                c = _.u(c);
                for (var d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.A.Map;
                c = _.u(xv);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + (yv(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
                d = _.u(d);
                for (e = d.next(); !e.done; e = d.next()) {
                    var f = _.u(e.value);
                    e = f.next().value;
                    var g = f.next().value;
                    f = g.value;
                    g = void 0 === g.options ? {} : g.options;
                    (new RegExp("[?&]" + e + "=")).test(c);
                    if (!b.has(e) && null != f) {
                        var h = void 0 === g.Ia ? !1 : g.Ia;
                        if (f = "object" !== typeof f ? null == f || !h && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? zv(f, g) : null) "?" !== c[c.length - 1] && (c += "&"), c += e + "=" + f
                    }
                }
                if (1 === _.Zf(Av) || 2 === _.Zf(Av)) b = _.Zf(Bv), b = 0 >= b ? "" : (_.I = _.x(Array, "from").call(Array, {length: Math.ceil(b / 8)}), _.x(_.I, "fill")).call(_.I, "testdata").join("").substring(0, b), 2 === _.Zf(Av) && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    yv = function (a) {
        var b = a.la.Z, c, d;
        a = null != (d = null == (c = Dv(a.ma.P.ca)) ? void 0 : _.Q(c, 9)) ? d : !1;
        c = _.H(wv) && _.Q(b, 8);
        return a || c || !ph(b)
    };
    zv = function (a, b) {
        var c = void 0 === b.Ta ? "," : b.Ta, d = void 0 === b.Gd ? "" : b.Gd, e = void 0 === b.Ia ? !1 : b.Ia, f = !1;
        a = a.map(function (g) {
            f || (f = !!g);
            return String(0 === g && e ? g : g || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    };
    Fv = function (a, b) {
        var c = a.responseText;
        b = b.R;
        403 === a.status && b.error(Ev(c));
        return {}
    };
    Jv = function (a, b) {
        try {
            _.Zf(Gv);
            var c, d = null != (c = b.Go) ? c : Hv, e = _.u(a.X), f = e.next();
            for (a = {}; !f.done; a = {ie: void 0}, f = e.next()) {
                a.ie = f.value;
                var g = d.get(a.ie);
                d.set(a.ie, (new Date).getTime());
                g ? b.va.Xb.jc.Yh.refresh.dm.Mc({
                    Pc: (new Date).getTime() - g,
                    Im: _.Zf(Iv)
                }) : _.Vp(a.ie, function (h) {
                    return function () {
                        return void d.delete(h.ie)
                    }
                }(a))
            }
        } catch (h) {
        }
        return {}
    };
    Mv = function () {
        var a = _.Zf(Kv);
        switch (a) {
            case 0:
                return oa() && Lv(window.fetch) && Lv(window.TextDecoderStream);
            case 1:
                return oa() && Lv(window.fetch) && !!window.TextDecoderStream;
            case 2:
                return oa() && !!window.fetch && !!window.TextDecoderStream;
            case 3:
                return !na() && Lv(window.fetch) && !!window.TextDecoderStream;
            case 4:
                return !na() && !!window.fetch && !!window.TextDecoderStream;
            case 5:
                return Lv(window.fetch) && !!window.TextDecoderStream;
            case 6:
                return !!window.fetch && !!window.TextDecoderStream;
            default:
                gb(a)
        }
    };
    Ov = function (a, b, c) {
        b = Nv(b, c);
        switch (b) {
            case 0:
                a();
                break;
            case 1:
                c.setTimeout(a, 0);
                break;
            case 2:
                c.scheduler.yield().then(a);
                break;
            default:
                gb(b)
        }
    };
    Nv = function (a, b) {
        if (0 === a) return 0;
        a = _.Zf(Pv);
        switch (a) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 6:
                var c;
                return (null == (c = b.scheduler) ? 0 : c.yield) ? 2 : 1;
            case 5:
                var d;
                return (null == (d = b.scheduler) ? 0 : d.yield) ? 2 : 0;
            default:
                gb(a)
        }
    };
    cw = function (a, b) {
        a = a.Lg;
        var c = b.Ra, d, e;
        b = Qv(a, 6);
        var f = Qv(a, 7), g = !!mo(a, 8), h = Rv(a, 10), k = null != (e = a.getEscapedQemQueryId()) ? e : "";
        e = _.Um(a, Sv, 43);
        var l = !!mo(a, 9), m = !!mo(a, 12), n = _.Um(a, Tv, Fl(a, Uv, 48)), p = _.Um(a, Vv, Fl(a, Uv, 39)),
            r = _.Dc(_.xi(a, 36)), v = !!mo(a, 13), w = Rv(a, 49), z = _.Um(a, Wv, 51), y = Rv(a, 61);
        if (0 !== c.kind) {
            var C;
            c = {kind: 0, hb: null != (C = Bk(a, 4)) ? C : ""}
        }
        C = c;
        c = _.Um(a, Xv, 58);
        var G = null == (d = _.Um(a, Yv, 56)) ? void 0 : Rv(d, 1);
        d = _.zk(a, Zv, 62);
        var D = _.zk(a, $v, 67), M = ne(a, 63, dd, 2, void 0, void 0, 0);
        return {
            output: {
                height: b,
                width: f,
                isEmpty: g,
                tb: h,
                Oa: k,
                Bd: e,
                isBackfill: l,
                Hb: m,
                Zk: n,
                gb: p,
                Kf: r,
                lh: v,
                Qb: w,
                Ue: z,
                Kb: y,
                Ra: C,
                ga: c,
                Zm: G,
                Sg: d,
                jk: D,
                sg: M,
                Of: !!mo(a, 64),
                dg: _.Um(a, aw, 68),
                tk: _.H(bw) ? Rv(a, 1) : void 0
            }
        }
    };
    fw = function (a, b) {
        var c = b.R;
        b = b.context;
        var d;
        (null == (d = _.Um(a.Lg, dw, 69)) ? 0 : _.Q(d, 1)) && O(c, ew(b.Pa));
        return {}
    };
    gw = function (a) {
        var b = a;
        return function () {
            var c = _.ya.apply(0, arguments);
            if (b) {
                var d = b;
                b = null;
                d.apply(null, _.Pi(c))
            }
        }
    };
    hw = function (a) {
        var b = null, c = 0, d = 0;
        return function () {
            var e, f, g, h;
            return _.Qf(function (k) {
                if (1 == k.g) return c && clearTimeout(c), c = 0, e = new _.ei, f = gw(e.resolve), g = ++d, k.yield(0, 2);
                if (d !== g) return f(!1), k.return(e.promise);
                b ? b(!1) : f(!0);
                h = gw(function () {
                    b = null;
                    c = 0;
                    f(!0)
                });
                c = setTimeout(h, _.Zf(Iv));
                _.Vp(a, function () {
                    return void f(!1)
                });
                b = f;
                return k.return(e.promise)
            })
        }
    };
    iw = function (a) {
        var b = 0, c = null, d = 0, e = 0;
        return function () {
            var f, g, h, k, l, m;
            return _.Qf(function (n) {
                if (1 == n.g) return f = new _.ei, g = gw(f.resolve), h = ++e, n.yield(0, 2);
                if (e !== h) return g(!1), n.return(f.promise);
                null == (k = c) || k(!1);
                l = gw(function () {
                    b = (new Date).getTime();
                    c = null;
                    d = 0;
                    g(!0)
                });
                d && clearTimeout(d);
                m = (new Date).getTime() - b;
                m > _.Zf(Iv) ? l() : (d = setTimeout(l, _.Zf(Iv) - m), _.Vp(a, function () {
                    return void g(!1)
                }), c = g);
                return n.return(f.promise)
            })
        }
    };
    kw = function (a, b) {
        a = a.X;
        var c = b.M, d = b.yb;
        b = b.rl;
        if (!a.length) return {de: []};
        for (var e = _.u(a), f = e.next(); !f.done; f = e.next()) er(c, f.value);
        return b ? {de: []} : d ? (c = Zl(a[0].getAdUnitPath()), {de: jw(a, c)}) : {
            de: a.map(function (g) {
                return {networkCode: Zl(g.getAdUnitPath()), X: [g]}
            })
        }
    };
    jw = function (a, b) {
        var c = [];
        a = Ya(a, function (f) {
            return Zl(f.getAdUnitPath())
        });
        a = _.u(_.x(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.u(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({networkCode: d, X: e}) : c.push({networkCode: d, X: e})
        }
        return c
    };
    mw = function (a, b) {
        a = a.X;
        var c = function (d) {
            return !!an(b.T[d.getDomId()]).length
        };
        return {ij: a.filter(c), tj: a.filter(lw(c))}
    };
    uw = function () {
        var a = new nw;
        var b = (new ow).setCorrelator(vk(_.t));
        var c = Bh().join();
        b = _.Hj(b, 5, c);
        b = _.K(b, 2, 1);
        a = _.Ai(a, 1, b);
        b = new pw;
        c = _.H(qw);
        b = _.Rl(b, 7, c);
        c = _.H(rw);
        b = _.Rl(b, 8, c);
        c = _.H(sw);
        b = _.Rl(b, 9, c);
        b = _.Rl(b, 10, !0);
        c = _.H(tw);
        b = _.Rl(b, 13, c);
        b = _.Rl(b, 16, !0);
        a = _.Ai(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    yw = function () {
        var a = _.H(vw) ? _.If(ww) : _.If(xw);
        _.Lp(document, a)
    };
    Ew = function (a, b) {
        var c = zw() || Aw() ? 1 : _.Th(), d = .001 > c;
        d ? (b.F = !0, Ah(31067358)) : .002 > c && Ah(31067357);
        oo(23, a);
        a = 1E-4 > c;
        b = _.Zf(up);
        b = 0 < b && c < 1 / b;
        var e = _.Zf(Bw), f = 0 < e && c < e, g = _.Zf(Cw), h = 0 < g && c < 1 / g, k = _.Zf(Gv);
        k = 0 < k && c < 1 / k;
        var l = _.Zf(Dw);
        return {
            Rc: d,
            yi: 1E3,
            hj: a,
            xi: 1E4,
            ah: d,
            eg: 1E3,
            um: f,
            bm: e,
            sm: h,
            Jl: g,
            vm: k,
            wm: 0 < l && c < 1 / l,
            pm: b,
            Fh: c
        }
    };
    Iw = function (a, b) {
        var c = _.x(Object, "assign").call(Object, {}, a);
        a = a.Fh;
        c = (delete c.Fh, c);
        var d = window.document.URL, e = new Fw(4, b.Pa, 1E3);
        a = new Gw(e, a);
        return _.x(Object, "assign").call(Object, {}, b, c, {Ao: new Hw(b)}, {Qa: e, Ea: d, V: a})
    };
    _.ba = [];
    Jw = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    };
    Kw = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    Lw = function (a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.Mw = Lw(this);
    Nw = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.A = {};
    Ow = {};
    _.x = function (a, b, c) {
        if (!c || null != a) {
            c = Ow[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    Pw = function (a, b, c) {
        if (b) a:{
            var d = a.split(".");
            a = 1 === d.length;
            var e = d[0], f;
            !a && e in _.A ? f = _.A : f = _.Mw;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];
            c = Nw && "es6" === c ? f[d] : null;
            b = b(c);
            null != b && (a ? Kw(_.A, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === Ow[d] && (a = 1E9 * Math.random() >>> 0, Ow[d] = Nw ? _.Mw.Symbol(d) : "$jscp$" + a + "$" + d), Kw(f, Ow[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Pw("Symbol", function (a) {
        if (a) return a;
        var b = function (f, g) {
            this.g = f;
            Kw(this, "description", {configurable: !0, writable: !0, value: g})
        };
        b.prototype.toString = function () {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", d = 0, e = function (f) {
            if (this instanceof e) throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++, f)
        };
        return e
    }, "es6");
    Pw("Symbol.iterator", function (a) {
        if (a) return a;
        a = (0, _.A.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.Mw[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && Kw(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return Qw(Jw(this))
                }
            })
        }
        return a
    }, "es6");
    Qw = function (a) {
        a = {next: a};
        a[_.x(_.A.Symbol, "iterator")] = function () {
            return this
        };
        return a
    };
    _.Rw = function (a) {
        return a.raw = a
    };
    Sw = function (a, b) {
        a.raw = b;
        return a
    };
    _.u = function (a) {
        var b = "undefined" != typeof _.A.Symbol && _.x(_.A.Symbol, "iterator") && a[_.x(_.A.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {next: Jw(a)};
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.Pi = function (a) {
        if (!(a instanceof Array)) {
            a = _.u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    Tw = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Uw = Nw && "function" == typeof _.x(Object, "assign") ? _.x(Object, "assign") : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Tw(d, e) && (a[e] = d[e])
        }
        return a
    };
    Pw("Object.assign", function (a) {
        return a || Uw
    }, "es6");
    var Vw = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, Ww = function () {
        function a() {
            function c() {
            }

            new c;
            Reflect.construct(c, [], function () {
            });
            return new c instanceof c
        }

        if (Nw && "undefined" != typeof Reflect && Reflect.construct) {
            if (a()) return Reflect.construct;
            var b = Reflect.construct;
            return function (c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function (c, d, e) {
            void 0 === e && (e = c);
            e = Vw(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }(), Xw;
    if (Nw && "function" == typeof _.x(Object, "setPrototypeOf")) Xw = _.x(Object, "setPrototypeOf"); else {
        var Yw;
        a:{
            var Zw = {a: !0}, $w = {};
            try {
                $w.__proto__ = Zw;
                Yw = $w.a;
                break a
            } catch (a) {
            }
            Yw = !1
        }
        Xw = Yw ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    ax = Xw;
    _.T = function (a, b) {
        a.prototype = Vw(b.prototype);
        a.prototype.constructor = a;
        if (ax) ax(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.Gm = b.prototype
    };
    bx = function () {
        this.F = !1;
        this.j = null;
        this.A = void 0;
        this.g = 1;
        this.K = this.l = 0;
        this.L = null
    };
    cx = function (a) {
        if (a.F) throw new TypeError("Generator is already running");
        a.F = !0
    };
    bx.prototype.I = function (a) {
        this.A = a
    };
    var dx = function (a, b) {
        a.L = {exception: b, ml: !0};
        a.g = a.l || a.K
    };
    bx.prototype.return = function (a) {
        this.L = {return: a};
        this.g = this.K
    };
    bx.prototype.yield = function (a, b) {
        this.g = b;
        return {value: a}
    };
    Sf = function (a) {
        a.l = 0;
        var b = a.L.exception;
        a.L = null;
        return b
    };
    ex = function (a) {
        this.g = new bx;
        this.A = a
    };
    hx = function (a, b) {
        cx(a.g);
        var c = a.g.j;
        if (c) return fx(a, "return" in c ? c["return"] : function (d) {
            return {value: d, done: !0}
        }, b, a.g.return);
        a.g.return(b);
        return gx(a)
    };
    fx = function (a, b, c, d) {
        try {
            var e = b.call(a.g.j, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.F = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.j = null, dx(a.g, g), gx(a)
        }
        a.g.j = null;
        d.call(a.g, f);
        return gx(a)
    };
    gx = function (a) {
        for (; a.g.g;) try {
            var b = a.A(a.g);
            if (b) return a.g.F = !1, {value: b.value, done: !1}
        } catch (c) {
            a.g.A = void 0, dx(a.g, c)
        }
        a.g.F = !1;
        if (a.g.L) {
            b = a.g.L;
            a.g.L = null;
            if (b.ml) throw b.exception;
            return {value: b.return, done: !0}
        }
        return {value: void 0, done: !0}
    };
    ix = function (a) {
        this.next = function (b) {
            cx(a.g);
            a.g.j ? b = fx(a, a.g.j.next, b, a.g.I) : (a.g.I(b), b = gx(a));
            return b
        };
        this.throw = function (b) {
            cx(a.g);
            a.g.j ? b = fx(a, a.g.j["throw"], b, a.g.I) : (dx(a.g, b), b = gx(a));
            return b
        };
        this.return = function (b) {
            return hx(a, b)
        };
        this[_.x(_.A.Symbol, "iterator")] = function () {
            return this
        }
    };
    jx = function (a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }

        return new _.A.Promise(function (d, e) {
            function f(g) {
                g.done ? d(g.value) : _.A.Promise.resolve(g.value).then(b, c).then(f, e)
            }

            f(a.next())
        })
    };
    _.Qf = function (a) {
        return jx(new ix(new ex(a)))
    };
    _.ya = function () {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Pw("Reflect", function (a) {
        return a ? a : {}
    }, "es6");
    Pw("Reflect.construct", function () {
        return Ww
    }, "es6");
    Pw("Reflect.setPrototypeOf", function (a) {
        return a ? a : ax ? function (b, c) {
            try {
                return ax(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Pw("Promise", function (a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function (h) {
                h(g)
            })
        }

        if (a) return a;
        b.prototype.A = function (g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function () {
                    h.L()
                })
            }
            this.g.push(g)
        };
        var d = _.Mw.setTimeout;
        b.prototype.l = function (g) {
            d(g, 0)
        };
        b.prototype.L = function () {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        b.prototype.j = function (g) {
            this.l(function () {
                throw g;
            })
        };
        var e = function (g) {
            this.A = 0;
            this.l = void 0;
            this.g = [];
            this.I = !1;
            var h = this.j();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.j = function () {
            function g(l) {
                return function (m) {
                    k || (k = !0, l.call(h, m))
                }
            }

            var h = this, k = !1;
            return {resolve: g(this.H), reject: g(this.L)}
        };
        e.prototype.H = function (g) {
            if (g === this) this.L(new TypeError("A Promise cannot resolve to itself")); else if (g instanceof e) this.na(g); else {
                a:switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.Ca(g) : this.F(g)
            }
        };
        e.prototype.Ca = function (g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.L(k);
                return
            }
            "function" == typeof h ? this.O(h, g) : this.F(g)
        };
        e.prototype.L = function (g) {
            this.K(2, g)
        };
        e.prototype.F = function (g) {
            this.K(1, g)
        };
        e.prototype.K = function (g, h) {
            if (0 != this.A) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.A);
            this.A = g;
            this.l = h;
            2 === this.A && this.J();
            this.o()
        };
        e.prototype.J = function () {
            var g = this;
            d(function () {
                if (g.C()) {
                    var h = _.Mw.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        };
        e.prototype.C = function () {
            if (this.I) return !1;
            var g = _.Mw.CustomEvent, h = _.Mw.Event, k = _.Mw.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {cancelable: !0}) : "function" === typeof h ? g = new h("unhandledrejection", {cancelable: !0}) : (g = _.Mw.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        };
        e.prototype.o = function () {
            if (null != this.g) {
                for (var g = 0; g < this.g.length; ++g) f.A(this.g[g]);
                this.g = null
            }
        };
        var f = new b;
        e.prototype.na = function (g) {
            var h = this.j();
            g.ze(h.resolve, h.reject)
        };
        e.prototype.O = function (g, h) {
            var k = this.j();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function (g, h) {
            function k(p, r) {
                return "function" == typeof p ? function (v) {
                    try {
                        l(p(v))
                    } catch (w) {
                        m(w)
                    }
                } : r
            }

            var l, m, n = new e(function (p, r) {
                l = p;
                m = r
            });
            this.ze(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function (g) {
            return this.then(void 0, g)
        };
        e.prototype.ze = function (g, h) {
            function k() {
                switch (l.A) {
                    case 1:
                        g(l.l);
                        break;
                    case 2:
                        h(l.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.A);
                }
            }

            var l = this;
            null == this.g ? f.A(k) : this.g.push(k);
            this.I = !0
        };
        e.resolve = c;
        e.reject = function (g) {
            return new e(function (h, k) {
                k(g)
            })
        };
        e.race = function (g) {
            return new e(function (h, k) {
                for (var l = _.u(g), m = l.next(); !m.done; m = l.next()) c(m.value).ze(h, k)
            })
        };
        e.all = function (g) {
            var h = _.u(g), k = h.next();
            return k.done ? c([]) : new e(function (l, m) {
                function n(v) {
                    return function (w) {
                        p[v] = w;
                        r--;
                        0 == r && l(p)
                    }
                }

                var p = [], r = 0;
                do p.push(void 0), r++, c(k.value).ze(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    Pw("Object.setPrototypeOf", function (a) {
        return a || ax
    }, "es6");
    var kx = function (a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {gi: e, vj: f}
        }
        return {gi: -1, vj: void 0}
    };
    Pw("Array.prototype.find", function (a) {
        return a ? a : function (b, c) {
            return kx(this, b, c).vj
        }
    }, "es6");
    Pw("WeakMap", function (a) {
        function b() {
        }

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }

        if (function () {
            if (!a || !Object.seal) return !1;
            try {
                var g = Object.seal({}), h = Object.seal({}), k = new a([[g, 2], [h, 3]]);
                if (2 != k.get(g) || 3 != k.get(h)) return !1;
                k.delete(g);
                k.set(h, 4);
                return !k.has(g) && 4 == k.get(h)
            } catch (l) {
                return !1
            }
        }()) return a;
        var d = "$jscomp_hidden_" + Math.random(), e = 0, f = function (g) {
            this.g = (e += Math.random() + 1).toString();
            if (g) {
                g = _.u(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        };
        f.prototype.set = function (g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!Tw(g, d)) {
                var k = new b;
                Kw(g, d, {value: k})
            }
            if (!Tw(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function (g) {
            return c(g) && Tw(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function (g) {
            return c(g) && Tw(g, d) && Tw(g[d], this.g)
        };
        f.prototype.delete = function (g) {
            return c(g) && Tw(g, d) && Tw(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    Pw("Map", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !_.x(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({x: 4}), k = new a(_.u([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({x: 4}) || k.set({x: 4}, "t") != k || 2 != k.size) return !1;
                var l = _.x(k, "entries").call(k), m = l.next();
                if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                m = l.next();
                return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
            } catch (n) {
                return !1
            }
        }()) return a;
        var b = new _.A.WeakMap, c = function (h) {
            this[0] = {};
            this[1] = f();
            this.size = 0;
            if (h) {
                h = _.u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        };
        c.prototype.set = function (h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.Ya ? l.Ya.value = k : (l.Ya = {
                next: this[1],
                Ob: this[1].Ob,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.Ya), this[1].Ob.next = l.Ya, this[1].Ob = l.Ya, this.size++);
            return this
        };
        c.prototype.delete = function (h) {
            h = d(this, h);
            return h.Ya && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.Ya.Ob.next = h.Ya.next, h.Ya.next.Ob = h.Ya.Ob, h.Ya.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function () {
            this[0] = {};
            this[1] = this[1].Ob = f();
            this.size = 0
        };
        c.prototype.has = function (h) {
            return !!d(this, h).Ya
        };
        c.prototype.get = function (h) {
            return (h = d(this, h).Ya) && h.value
        };
        c.prototype.entries = function () {
            return e(this, function (h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function () {
            return e(this, function (h) {
                return h.key
            })
        };
        c.prototype.values = function () {
            return e(this, function (h) {
                return h.value
            })
        };
        c.prototype.forEach = function (h, k) {
            for (var l = _.x(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.x(_.A.Symbol, "iterator")] = _.x(c.prototype, "entries");
        var d = function (h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
            var m = h[0][l];
            if (m && Tw(h[0], l)) for (h = 0; h < m.length; h++) {
                var n = m[h];
                if (k !== k && n.key !== n.key || k === n.key) return {id: l, list: m, index: h, Ya: n}
            }
            return {id: l, list: m, index: -1, Ya: void 0}
        }, e = function (h, k) {
            var l = h[1];
            return Qw(function () {
                if (l) {
                    for (; l.head != h[1];) l = l.Ob;
                    for (; l.next != l.head;) return l = l.next, {done: !1, value: k(l)};
                    l = null
                }
                return {done: !0, value: void 0}
            })
        }, f = function () {
            var h = {};
            return h.Ob = h.next = h.head = h
        }, g = 0;
        return c
    }, "es6");
    var lx = function (a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Pw("String.prototype.endsWith", function (a) {
        return a ? a : function (b, c) {
            var d = lx(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;) if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var mx = function (a, b) {
        a instanceof String && (a += "");
        var c = 0, d = !1, e = {
            next: function () {
                if (!d && c < a.length) {
                    var f = c++;
                    return {value: b(f, a[f]), done: !1}
                }
                d = !0;
                return {done: !0, value: void 0}
            }
        };
        e[_.x(_.A.Symbol, "iterator")] = function () {
            return e
        };
        return e
    };
    Pw("Array.prototype.entries", function (a) {
        return a ? a : function () {
            return mx(this, function (b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Pw("Array.prototype.keys", function (a) {
        return a ? a : function () {
            return mx(this, function (b) {
                return b
            })
        }
    }, "es6");
    Pw("String.prototype.startsWith", function (a) {
        return a ? a : function (b, c) {
            var d = lx(this, b, "startsWith"), e = d.length, f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;) if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    Pw("Number.isFinite", function (a) {
        return a ? a : function (b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Pw("String.prototype.repeat", function (a) {
        return a ? a : function (b) {
            var c = lx(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;) if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    Pw("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Pw("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.x(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Pw("String.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            return -1 !== lx(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Pw("Array.prototype.values", function (a) {
        return a ? a : function () {
            return mx(this, function (b, c) {
                return c
            })
        }
    }, "es8");
    Pw("Set", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !_.x(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({x: 4}), d = new a(_.u([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({x: 4}) != d || 2 != d.size) return !1;
                var e = _.x(d, "entries").call(d), f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }()) return a;
        var b = function (c) {
            this.g = new _.A.Map;
            if (c) {
                c = _.u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function (c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function (c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function () {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function (c) {
            return this.g.has(c)
        };
        b.prototype.entries = function () {
            return _.x(this.g, "entries").call(this.g)
        };
        b.prototype.values = function () {
            return _.x(this.g, "values").call(this.g)
        };
        b.prototype.keys = _.x(b.prototype, "values");
        b.prototype[_.x(_.A.Symbol, "iterator")] = _.x(b.prototype, "values");
        b.prototype.forEach = function (c, d) {
            var e = this;
            this.g.forEach(function (f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    Pw("Array.prototype.findIndex", function (a) {
        return a ? a : function (b, c) {
            return kx(this, b, c).gi
        }
    }, "es6");
    Pw("Array.prototype.flatMap", function (a) {
        return a ? a : function (b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function (e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    Pw("Number.EPSILON", function () {
        return Math.pow(2, -52)
    }, "es6");
    Pw("Number.MAX_SAFE_INTEGER", function () {
        return 9007199254740991
    }, "es6");
    Pw("Number.isInteger", function (a) {
        return a ? a : function (b) {
            return _.x(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Pw("Number.isSafeInteger", function (a) {
        return a ? a : function (b) {
            return _.x(Number, "isInteger").call(Number, b) && Math.abs(b) <= _.x(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    Pw("Math.trunc", function (a) {
        return a ? a : function (b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    Pw("Object.values", function (a) {
        return a ? a : function (b) {
            var c = [], d;
            for (d in b) Tw(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Pw("Number.isNaN", function (a) {
        return a ? a : function (b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    Pw("Array.from", function (a) {
        return a ? a : function (b, c, d) {
            c = null != c ? c : function (h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof _.A.Symbol && _.x(_.A.Symbol, "iterator") && b[_.x(_.A.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    Pw("Array.prototype.fill", function (a) {
        return a ? a : function (b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");
    var nx = function (a) {
        return a ? a : _.x(Array.prototype, "fill")
    };
    Pw("Int8Array.prototype.fill", nx, "es6");
    Pw("Uint8Array.prototype.fill", nx, "es6");
    Pw("Uint8ClampedArray.prototype.fill", nx, "es6");
    Pw("Int16Array.prototype.fill", nx, "es6");
    Pw("Uint16Array.prototype.fill", nx, "es6");
    Pw("Int32Array.prototype.fill", nx, "es6");
    Pw("Uint32Array.prototype.fill", nx, "es6");
    Pw("Float32Array.prototype.fill", nx, "es6");
    Pw("Float64Array.prototype.fill", nx, "es6");
    Pw("Object.entries", function (a) {
        return a ? a : function (b) {
            var c = [], d;
            for (d in b) Tw(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Pw("globalThis", function (a) {
        return a || _.Mw
    }, "es_2020");
    var ox = function (a, b) {
        a = void 0 !== a ? String(a) : " ";
        return 0 < b && a ? _.x(a, "repeat").call(a, Math.ceil(b / a.length)).substring(0, b) : ""
    };
    Pw("String.prototype.padStart", function (a) {
        return a ? a : function (b, c) {
            var d = lx(this, null, "padStart");
            return ox(c, b - d.length) + d
        }
    }, "es8");
    Pw("String.prototype.padEnd", function (a) {
        return a ? a : function (b, c) {
            var d = lx(this, null, "padStart");
            return d + ox(c, b - d.length)
        }
    }, "es8");
    Pw("AggregateError", function (a) {
        if (a) return a;
        a = function (b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.T(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    Pw("Promise.any", function (a) {
        return a ? a : function (b) {
            b = b instanceof Array ? b : _.x(Array, "from").call(Array, b);
            return _.A.Promise.all(b.map(function (c) {
                return _.A.Promise.resolve(c).then(function (d) {
                    throw d;
                }, function (d) {
                    return d
                })
            })).then(function (c) {
                throw new _.A.AggregateError(c, "All promises were rejected");
            }, function (c) {
                return c
            })
        }
    }, "es_2021");
    Pw("Object.fromEntries", function (a) {
        return a ? a : function (b) {
            var c = {};
            if (!(_.x(_.A.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.x(_.A.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    Pw("Object.hasOwn", function (a) {
        return a ? a : function (b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    Pw("Promise.prototype.finally", function (a) {
        return a ? a : function (b) {
            return this.then(function (c) {
                return _.A.Promise.resolve(b()).then(function () {
                    return c
                })
            }, function (c) {
                return _.A.Promise.resolve(b()).then(function () {
                    throw c;
                })
            })
        }
    }, "es9");
    Pw("Array.prototype.flat", function (a) {
        return a ? a : function (b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function (d) {
                Array.isArray(d) && 0 < b ? (d = _.x(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    Pw("String.raw", function (a) {
        return a ? a : function (b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    Pw("Math.sign", function (a) {
        return a ? a : function (b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    }, "es6");
    Pw("String.fromCodePoint", function (a) {
        return a ? a : function (b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    var px, wc, qx, rx, sx, tx;
    _.t = this || self;
    px = function (a) {
        a:{
            var b = ["CLOSURE_FLAGS"];
            for (var c = _.t, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
                b = null;
                break a
            }
            b = c
        }
        a = b && b[a];
        return null != a ? a : !1
    };
    wc = function (a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.Ua = function (a) {
        var b = wc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.Ma = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.Na = function (a) {
        return Object.prototype.hasOwnProperty.call(a, qx) && a[qx] || (a[qx] = ++rx)
    };
    qx = "closure_uid_" + (1E9 * Math.random() >>> 0);
    rx = 0;
    sx = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    tx = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    };
    _.ux = function (a, b, c) {
        _.ux = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? sx : tx;
        return _.ux.apply(null, arguments)
    };
    _.vx = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var wx;
    var ea = px(610401301), Le = px(188588736);
    var xx, Am, yx, Gx, Ax, Bx, Cx, Dx, Ex, Fx, zx;
    xx = function (a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    Am = function (a) {
        return /^[\s\xa0]*$/.test(a)
    };
    yx = function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    Gx = function (a) {
        if (!zx.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(Ax, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Bx, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Cx, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Dx, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Ex, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Fx, "&#0;"));
        return a
    };
    Ax = /&/g;
    Bx = /</g;
    Cx = />/g;
    Dx = /"/g;
    Ex = /'/g;
    Fx = /\x00/g;
    zx = /[\x00&<>"']/;
    _.Xg = function (a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };
    var fa, Hx = _.t.navigator;
    fa = Hx ? Hx.userAgentData || null : null;
    var Kx = function (a, b) {
        this.g = a === Ix && b || "";
        this.A = Jx
    };
    Kx.prototype.toString = function () {
        return this.g
    };
    var Lx = function (a) {
        return a instanceof Kx && a.constructor === Kx && a.A === Jx ? a.g : "type_error:Const"
    }, Jx = {}, Ix = {};
    var Sx, Rx, Qx, Nx, Tx, tf, Ox;
    _.Mx = function (a) {
        this.g = a
    };
    _.Mx.prototype.toString = function () {
        return this.g + ""
    };
    _.Px = function (a, b) {
        a = Nx.exec(_.lb(a).toString());
        var c = a[3] || "";
        return tf(a[1] + Ox("?", a[2] || "", b) + Ox("#", c))
    };
    _.lb = function (a) {
        return a instanceof _.Mx && a.constructor === _.Mx ? a.g : "type_error:TrustedResourceUrl"
    };
    Sx = function (a, b) {
        var c = Lx(a);
        if (!Qx.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Rx, function (d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Kx ? Lx(d) : encodeURIComponent(String(d))
        });
        return tf(a)
    };
    Rx = /%{(\w+)}/g;
    Qx = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    Nx = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    Tx = {};
    tf = function (a) {
        return new _.Mx(a, Tx)
    };
    Ox = function (a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) if (Object.prototype.hasOwnProperty.call(c, d)) {
            var e = c[d];
            e = Array.isArray(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
            }
        }
        return b
    };
    var Ux, Vx, Wx, va, Xx;
    _.ua = function (a) {
        this.g = a
    };
    _.ua.prototype.toString = function () {
        return this.g.toString()
    };
    _.Da = function (a) {
        return a instanceof _.ua && a.constructor === _.ua ? a.g : "type_error:SafeUrl"
    };
    Ux = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    Vx = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    Wx = {};
    va = function (a) {
        return new _.ua(a, Wx)
    };
    Xx = va("about:invalid#zClosurez");
    _.wa = va("about:invalid#zClosurez");
    var qa = function (a) {
        this.ul = a
    }, sa = [ra("data"), ra("http"), ra("https"), ra("mailto"), ra("ftp"), new qa(function (a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })], Aa = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    _.Ha = function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Yx = function (a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.yj = function (a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Zx = function (a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.Wg = function (a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var $x = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var ay;
    ay = {};
    _.by = function (a) {
        this.g = a
    };
    _.by.prototype.toString = function () {
        return this.g.toString()
    };
    _.cy = function (a) {
        return a instanceof _.by && a.constructor === _.by ? a.g : "type_error:SafeStyleSheet"
    };
    var dy, hy, jy, ky, ly, gy;
    dy = {};
    _.ey = function (a) {
        this.g = a
    };
    _.ey.prototype.toString = function () {
        return this.g.toString()
    };
    _.fy = function (a) {
        return a instanceof _.ey && a.constructor === _.ey ? a.g : "type_error:SafeHtml"
    };
    hy = function (a) {
        var b = gy;
        b = b instanceof _.ey ? b : _.sk(Gx(String(b)));
        var c = [], d = function (e) {
            Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.ey ? e : _.sk(Gx(String(e))), c.push(_.fy(e).toString()))
        };
        a.forEach(d);
        return _.sk(c.join(_.fy(b).toString()))
    };
    _.iy = function (a) {
        return hy(Array.prototype.slice.call(arguments))
    };
    _.sk = function (a) {
        return new _.ey(a, dy)
    };
    jy = /^[a-zA-Z0-9-]+$/;
    ky = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0};
    ly = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    gy = new _.ey(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", dy);
    _.my = _.sk("<br>");
    var ny = {
        An: 0,
        Dn: 1,
        yn: 2,
        zn: 3,
        0: "FORMATTED_HTML_CONTENT",
        1: "HTML_FORMATTED_CONTENT",
        2: "EMBEDDED_INTERNAL_CONTENT",
        3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
    }, oy = function (a, b) {
        b = Error.call(this, a + " cannot be used with intent " + ny[b]);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.type = a;
        this.name = "TypeCannotBeUsedWithIntentError"
    };
    _.T(oy, Error);
    var hb = function () {
    };
    hb.prototype.toString = function () {
        return this.Ni.toString()
    };
    var rc = function (a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var py, qy, sy;
    py = function () {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    qy = 2147483648 * Math.random() | 0;
    _.ry = function (a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    };
    sy = function (a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
            return c + d.toUpperCase()
        })
    };
    _.ty = function (a) {
        _.ty[" "](a);
        return a
    };
    _.ty[" "] = function () {
    };
    var uy = function (a, b) {
        try {
            return _.ty(a[b]), !0
        } catch (c) {
        }
        return !1
    };
    var vy, xy, yy, zy, Ay, By;
    vy = la() ? !1 : ia("Opera");
    _.wy = la() ? !1 : ia("Trident") || ia("MSIE");
    xy = ia("Edge");
    yy = ia("Gecko") && !(_.Xg(da(), "WebKit") && !ia("Edge")) && !(ia("Trident") || ia("MSIE")) && !ia("Edge");
    zy = _.Xg(da(), "WebKit") && !ia("Edge");
    Ay = function () {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a:{
        var Cy = "", Dy = function () {
            var a = da();
            if (yy) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (xy) return /Edge\/([\d\.]+)/.exec(a);
            if (_.wy) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (zy) return /WebKit\/(\S+)/.exec(a);
            if (vy) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Dy && (Cy = Dy ? Dy[1] : "");
        if (_.wy) {
            var Ey = Ay();
            if (null != Ey && Ey > parseFloat(Cy)) {
                By = String(Ey);
                break a
            }
        }
        By = Cy
    }
    var Fy = By, Gy;
    if (_.t.document && _.wy) {
        var Hy = Ay();
        Gy = Hy ? Hy : parseInt(Fy, 10) || void 0
    } else Gy = void 0;
    var Iy = Gy;
    !ia("Android") || oa();
    oa();
    pa();
    _.wy || pa();
    nb(function (a) {
        return function (b) {
            a(this);
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function (c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b
        }
    });
    nb(function (a) {
        return function () {
            a(this);
            this.message = "argument out of range"
        }
    });
    nb(function (a) {
        return function () {
            a(this);
            this.message = "no elements in sequence"
        }
    });
    nb(function (a) {
        return function () {
            a(this);
            this.message = "object unsubscribed"
        }
    });
    nb(function (a) {
        return function (b) {
            a(this);
            this.message = b
        }
    });
    nb(function (a) {
        return function (b) {
            a(this);
            this.message = b
        }
    });
    nb(function (a) {
        return function (b) {
            b = void 0 === b ? null : b;
            a(this);
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = b
        }
    });
    var qb, pb = "function" === typeof String.prototype.vl, ob = "undefined" !== typeof TextEncoder;
    var Jy = {}, Ky = null, Ly = yy || zy || "function" == typeof _.t.btoa, ub = function (a, b) {
        void 0 === b && (b = 0);
        My();
        b = Jy[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e], h = a[e + 1], k = a[e + 2], l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }, Ny = function (a, b) {
        if (Ly && !b) a = _.t.btoa(a); else {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255, f >>= 8);
                c[d++] = f
            }
            a = ub(c, b)
        }
        return a
    }, cg = function (a) {
        var b = [];
        Oy(a, function (c) {
            b.push(c)
        });
        return b
    }, Py = function (a) {
        var b = a.length, c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c), e = 0;
        Oy(a, function (f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }, Oy = function (a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++), m = Ky[l];
                if (null != m) return m;
                if (!Am(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }

        My();
        for (var d = 0; ;) {
            var e = c(-1), f = c(0), g = c(64), h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }, My = function () {
        if (!Ky) {
            Ky = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Jy[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Ky[f] && (Ky[f] = e)
                }
            }
        }
    };
    var zb = "undefined" !== typeof Uint8Array, tb = !_.wy && "function" === typeof btoa, Qy = /[-_.]/g,
        wb = {"-": "+", _: "/", ".": "="}, Ry, Bb = {};
    var Sy, hc = function (a, b) {
        Cb(b);
        this.g = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }, ic = function () {
        return Sy || (Sy = new hc(null, Bb))
    }, Id = function (a) {
        var b = a.g;
        return null == b ? "" : "string" === typeof b ? b : a.g = vb(b)
    }, Dl = function (a) {
        Cb(Bb);
        var b = a.g;
        if (null != b && !Ab(b)) if ("string" === typeof b) if (tb) {
            Qy.test(b) && (b = b.replace(Qy, yb));
            b = atob(b);
            for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
            b = c
        } else b = Py(b); else b = null;
        return (a = null == b ? b : a.g = b) ? new Uint8Array(a) : Ry || (Ry = new Uint8Array(0))
    };
    hc.prototype.isEmpty = function () {
        return null == this.g
    };
    var Gb = 0, Hb = 0, Ty;
    var Uy = function (a, b) {
        this.A = a >>> 0;
        this.g = b >>> 0
    }, Wy = function (a) {
        if (!a) return Vy || (Vy = new Uy(0, 0));
        if (!/^\d+$/.test(a)) return null;
        Mb(a);
        return new Uy(Gb, Hb)
    }, Vy, Xy = function (a, b) {
        this.A = a >>> 0;
        this.g = b >>> 0
    }, df = function (a) {
        if (!a) return Yy || (Yy = new Xy(0, 0));
        if (!/^-?\d+$/.test(a)) return null;
        Mb(a);
        return new Xy(Gb, Hb)
    }, Yy;
    var Zy = function () {
        this.g = []
    };
    Zy.prototype.length = function () {
        return this.g.length
    };
    Zy.prototype.end = function () {
        var a = this.g;
        this.g = [];
        return a
    };
    var ff = function (a, b, c) {
        for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.g.push(b)
    }, $y = function (a, b) {
        for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }, az = function (a, b) {
        if (0 <= b) $y(a, b); else {
            for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
            a.g.push(1)
        }
    };
    var of = function () {
        this.l = [];
        this.A = 0;
        this.g = new Zy
    }, pf = function (a, b) {
        0 !== b.length && (a.l.push(b), a.A += b.length)
    }, hf = function (a, b) {
        ef(a, b, 2);
        b = a.g.end();
        pf(a, b);
        b.push(a.A);
        return b
    }, jf = function (a, b) {
        var c = b.pop();
        for (c = a.A + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.A++;
        b.push(c);
        a.A++
    }, ef = function (a, b, c) {
        $y(a.g, 8 * b + c)
    }, bz = function (a, b, c) {
        ef(a, b, 2);
        $y(a.g, c.length);
        pf(a, a.g.end());
        pf(a, c)
    };
    var Xe = function (a, b) {
        this.g = a;
        this.Cj = b
    };
    var cz = Qb(), pd = Qb("0di"), dz = Qb("2ex"), be = Qb("0dg");
    var Tb = cz ? function (a, b) {
        a[cz] |= b
    } : function (a, b) {
        void 0 !== a.wb ? a.wb |= b : Object.defineProperties(a, {
            wb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }, qe = cz ? function (a, b) {
        a[cz] &= ~b
    } : function (a, b) {
        void 0 !== a.wb && (a.wb &= ~b)
    }, kc = cz ? function (a) {
        return a[cz] | 0
    } : function (a) {
        return a.wb | 0
    }, Xd = cz ? function (a) {
        return a[cz]
    } : function (a) {
        return a.wb
    }, Wb = cz ? function (a, b) {
        a[cz] = b;
        return a
    } : function (a, b) {
        void 0 !== a.wb ? a.wb = b : Object.defineProperties(a, {
            wb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    };
    var id = {}, ac = {}, ez, ge, fz = [];
    Wb(fz, 55);
    ge = Object.freeze(fz);
    var gz = function (a, b, c) {
        this.j = 0;
        this.g = a;
        this.A = b;
        this.l = c
    };
    gz.prototype.next = function () {
        if (this.j < this.g.length) {
            var a = this.g[this.j++];
            return {done: !1, value: this.A ? this.A.call(this.l, a) : a}
        }
        return {done: !0, value: void 0}
    };
    gz.prototype[_.x(_.A.Symbol, "iterator")] = function () {
        return new gz(this.g, this.A, this.l)
    };
    _.hz = Object.freeze(new function () {
    });
    Object.freeze(new function () {
    });
    var iz, oc;
    var zc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var sd, ud, vd;
    var Ed = {}, jz = function () {
        try {
            var a = function () {
                return Ww(_.A.Map, [], this.constructor)
            };
            _.T(a, _.A.Map);
            new a;
            return !1
        } catch (b) {
            return !0
        }
    }(), kz = function () {
        this.g = new _.A.Map
    };
    _.q = kz.prototype;
    _.q.get = function (a) {
        return this.g.get(a)
    };
    _.q.set = function (a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    };
    _.q.delete = function (a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    };
    _.q.clear = function () {
        this.g.clear();
        this.size = this.g.size
    };
    _.q.has = function (a) {
        return this.g.has(a)
    };
    _.q.entries = function () {
        return _.x(this.g, "entries").call(this.g)
    };
    _.q.keys = function () {
        return _.x(this.g, "keys").call(this.g)
    };
    _.q.values = function () {
        return _.x(this.g, "values").call(this.g)
    };
    _.q.forEach = function (a, b) {
        return this.g.forEach(a, b)
    };
    kz.prototype[_.x(_.A.Symbol, "iterator")] = function () {
        return _.x(this, "entries").call(this)
    };
    var lz = function () {
        if (jz) return _.x(Object, "setPrototypeOf").call(Object, kz.prototype, _.A.Map.prototype), Object.defineProperties(kz.prototype, {
            size: {
                value: 0,
                configurable: !0,
                enumerable: !0,
                writable: !0
            }
        }), kz;
        var a = function () {
            return Ww(_.A.Map, [], this.constructor)
        };
        _.T(a, _.A.Map);
        return a
    }(), Dd = function (a, b, c, d) {
        c = void 0 === c ? xd : c;
        d = void 0 === d ? xd : d;
        var e = lz.call(this) || this;
        var f = kc(a);
        f |= 64;
        Wb(a, f);
        e.Dd = f;
        e.Cf = b;
        e.Sd = c;
        e.mh = e.Cf ? zd : d;
        for (var g = 0; g < a.length; g++) {
            var h = a[g], k = c(h[0], !1, !0), l = h[1];
            b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
            lz.prototype.set.call(e, k, l)
        }
        return e
    };
    _.T(Dd, lz);
    var mz = function (a) {
        if (a.Dd & 2) throw Error("Cannot mutate an immutable Map");
    }, Jd = function (a, b) {
        b = void 0 === b ? Ad : b;
        if (0 !== a.size) return Zd(a, b)
    }, Zd = function (a, b) {
        b = void 0 === b ? Ad : b;
        var c = [];
        a = _.x(lz.prototype, "entries").call(a);
        for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
        return c
    };
    _.q = Dd.prototype;
    _.q.clear = function () {
        mz(this);
        lz.prototype.clear.call(this)
    };
    _.q.delete = function (a) {
        mz(this);
        return lz.prototype.delete.call(this, this.Sd(a, !0, !1))
    };
    _.q.entries = function () {
        var a = _.x(Array, "from").call(Array, _.x(lz.prototype, "keys").call(this));
        return new gz(a, Bd, this)
    };
    _.q.keys = function () {
        return _.x(lz.prototype, "keys").call(this)
    };
    _.q.values = function () {
        var a = _.x(Array, "from").call(Array, _.x(lz.prototype, "keys").call(this));
        return new gz(a, Dd.prototype.get, this)
    };
    _.q.forEach = function (a, b) {
        var c = this;
        lz.prototype.forEach.call(this, function (d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.q.set = function (a, b) {
        mz(this);
        a = this.Sd(a, !0, !1);
        return null == a ? this : null == b ? (lz.prototype.delete.call(this, a), this) : lz.prototype.set.call(this, a, this.mh(b, !0, !0, this.Cf, !1, this.Dd))
    };
    _.q.has = function (a) {
        return lz.prototype.has.call(this, this.Sd(a, !1, !1))
    };
    _.q.get = function (a) {
        a = this.Sd(a, !1, !1);
        var b = lz.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Cf;
            return c ? (c = this.mh(b, !1, !0, c, this.ek, this.Dd), c !== b && lz.prototype.set.call(this, a, c), c) : b
        }
    };
    Dd.prototype[_.x(_.A.Symbol, "iterator")] = function () {
        return _.x(this, "entries").call(this)
    };
    Dd.prototype.toJSON = void 0;
    Dd.prototype.zl = ac;
    var Cd;
    var fe, Bi, xr, mo, El, Fj, Fl, Cl, nz, Ik, $i, Wm, oz, pz, Bk, Li, vt, Js, rz, sz, uz, vz, Jq, Qv, Rv, wz, qi, Ji;
    _.xi = function (a, b) {
        a = a.D;
        return fe(a, Xd(a), b)
    };
    fe = function (a, b, c, d) {
        if (-1 === c) return null;
        var e = $b(b);
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                if (de(a, b, e, c) && null != dz) {
                    var g;
                    a = null != (g = iz) ? g : iz = {};
                    g = a[dz] || 0;
                    4 <= g || (a[dz] = g + 1, sc())
                }
                return d
            }
            return de(a, b, e, c)
        }
    };
    _.Gk = function (a, b, c) {
        var d = a.D, e = Xd(d);
        nc(e);
        ee(d, e, b, c);
        return a
    };
    Bi = function (a, b, c) {
        return void 0 !== ye(a, b, c, !1)
    };
    xr = function (a) {
        a = a.D;
        var b = Xd(a), c = fe(a, b, 3), d = vc(c);
        null != d && d !== c && ee(a, b, 3, d);
        return d
    };
    mo = function (a, b) {
        return yc(_.xi(a, b))
    };
    El = function (a, b) {
        a = a.D;
        var c = Xd(a), d = fe(a, c, b), e = jc(d, !0, !!(c & 34));
        null != e && e !== d && ee(a, c, b, e);
        return null == e ? ic() : e
    };
    Fj = function (a, b, c, d) {
        var e = a.D, f = Xd(e);
        nc(f);
        (c = xe(e, f, c)) && c !== b && null != d && (f = ee(e, f, c));
        ee(e, f, b, d);
        return a
    };
    Fl = function (a, b, c) {
        a = a.D;
        return xe(a, Xd(a), b) === c ? c : -1
    };
    Cl = function (a, b) {
        a = a.D;
        return xe(a, Xd(a), b)
    };
    _.Qq = function (a, b, c, d) {
        var e = a.D, f = Xd(e);
        d = xe(e, f, d);
        a = _.Jj(a, b, c);
        d && d !== c && ee(e, f, d);
        return a
    };
    _.Jj = function (a, b, c) {
        a = a.D;
        var d = Xd(a);
        nc(d);
        var e = fe(a, d, c);
        b = yd(od(e, b, !0, d));
        e !== b && ee(a, d, c, b);
        return b
    };
    nz = function (a, b, c) {
        return (a = ye(a, b, c, !1)) ? a : jd(b)
    };
    _.Um = function (a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = ye(a, b, c, d);
        if (null == b) return b;
        a = a.D;
        var e = Xd(a);
        if (!(e & 2)) {
            var f = yd(b);
            f !== b && (b = f, ee(a, e, c, b, d))
        }
        return b
    };
    _.zk = function (a, b, c) {
        a = a.D;
        var d = Xd(a);
        return ze(a, d, b, c, !1, !(2 & d))
    };
    _.Ai = function (a, b, c) {
        null == c && (c = void 0);
        return _.Gk(a, b, c)
    };
    _.Tl = function (a, b, c, d) {
        null == d && (d = void 0);
        return Fj(a, b, c, d)
    };
    _.Om = function (a, b, c) {
        var d = a.D, e = Xd(d);
        nc(e);
        if (null == c) return ee(d, e, b), a;
        for (var f = kc(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, n = 0; n < c.length; n++) {
            var p = c[n];
            h || (p = !!(kc(p.D) & 2), l && (l = !p), m && (m = p))
        }
        h || (f = Rb(f, 5, !0), f = Rb(f, 8, l), f = Rb(f, 16, m));
        k && f !== g && (c = Nb(c), g = 0, f = je(f, e), f = me(f, e, !0));
        f !== g && Wb(c, f);
        ee(d, e, b, c);
        return a
    };
    Ik = function (a, b, c, d) {
        Ie(a, b, c, d);
        return a
    };
    $i = function (a, b) {
        return Jc(_.xi(a, b))
    };
    Wm = function (a, b) {
        return Mc(_.xi(a, b))
    };
    oz = function (a, b) {
        a = _.xi(a, b);
        var c;
        null == a ? c = a : _.Ac(a) ? "number" === typeof a ? c = _.$c(a) : c = _.bd(a) : c = void 0;
        return c
    };
    pz = function (a, b) {
        return ne(a, b, cd, 2, void 0, void 0, 0)
    };
    Bk = function (a, b) {
        return hd(_.xi(a, b))
    };
    Li = function (a, b, c, d, e) {
        return ne(a, b, hd, c, d, e)
    };
    _.Q = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        return _.Ke(mo(a, b), c)
    };
    _.qz = function (a, b) {
        var c = void 0 === c ? 0 : c;
        return _.Ke($i(a, b), c)
    };
    vt = function (a, b) {
        var c = void 0 === c ? 0 : c;
        return _.Ke(Wm(a, b), c)
    };
    _.Ug = function (a, b) {
        var c = void 0 === c ? 0 : c;
        return _.Ke(cd(_.xi(a, b)), c)
    };
    Js = function (a, b) {
        var c = void 0 === c ? 0 : c;
        return _.Ke(oz(a, b), c)
    };
    _.F = function (a, b) {
        var c = void 0 === c ? "" : c;
        return _.Ke(Bk(a, b), c)
    };
    _.tg = function (a, b, c) {
        c = void 0 === c ? 0 : c;
        return _.Ke(_.Dc(_.xi(a, b)), c)
    };
    rz = function (a, b) {
        var c = void 0 === c ? "0" : c;
        return _.Ke(dd(_.xi(a, b), !0), c)
    };
    sz = function (a, b, c) {
        a = Li(a, b, 3, void 0, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    uz = function (a) {
        return _.Ug(a, Fl(a, tz, 3))
    };
    vz = function (a, b) {
        return _.F(a, Fl(a, b, 2))
    };
    Jq = function (a, b) {
        a = mo(a, b);
        return null == a ? void 0 : a
    };
    Qv = function (a, b) {
        a = $i(a, b);
        return null == a ? void 0 : a
    };
    Rv = function (a, b) {
        a = Bk(a, b);
        return null == a ? void 0 : a
    };
    wz = function (a, b) {
        a = _.Dc(_.xi(a, b));
        return null == a ? void 0 : a
    };
    qi = function (a, b, c) {
        return _.Gk(a, b, null == c ? c : xc(c))
    };
    _.Rl = function (a, b, c) {
        return _.ve(a, b, null == c ? c : xc(c), !1)
    };
    _.Oi = function (a, b, c) {
        return _.Gk(a, b, null == c ? c : Ec(c))
    };
    _.Sl = function (a, b, c) {
        return _.ve(a, b, null == c ? c : Ec(c), 0)
    };
    _.vi = function (a, b, c) {
        return _.Gk(a, b, Wc(c))
    };
    _.Ij = function (a, b, c) {
        return _.ve(a, b, Wc(c), "0")
    };
    Ji = function (a, b, c) {
        return _.Gk(a, b, gd(c))
    };
    _.Hj = function (a, b, c) {
        return _.ve(a, b, gd(c), "")
    };
    _.yi = function (a, b, c) {
        return _.Gk(a, b, Cc(c))
    };
    _.K = function (a, b, c) {
        return _.ve(a, b, Cc(c), 0)
    };
    _.Zi = function (a, b) {
        return null != Bk(a, b)
    };
    _.E = function (a, b, c) {
        this.D = _.B(a, b, c)
    };
    _.E.prototype.toJSON = function () {
        return ez ? Me(this, this.D, !1) : Me(this, Sd(this.D, Ud, void 0, void 0, !1), !0)
    };
    var zl = function (a) {
        ez = !0;
        try {
            return JSON.stringify(a.toJSON(), Hd)
        } finally {
            ez = !1
        }
    };
    _.E.prototype.yg = id;
    var $e = (0, _.A.Symbol)(), Qe = (0, _.A.Symbol)(), We = (0, _.A.Symbol)(), Ze = (0, _.A.Symbol)(),
        xz = cf(function (a, b, c) {
            b = vc(b);
            null != b && (ef(a, c, 5), a = a.g, c = Ty || (Ty = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Hb = 0, b = Gb = c.getUint32(0, !0), a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }), yz = cf(gf), zz = cf(gf), Az = cf(function (a, b, c) {
            a:if (null != b) {
                if (_.Ac(b)) {
                    if ("string" === typeof b) {
                        b = _.bd(b);
                        break a
                    }
                    if ("number" === typeof b) {
                        b = _.$c(b);
                        break a
                    }
                }
                b = void 0
            }
            null != b && ("string" === typeof b && Wy(b), null != b && (ef(a, c, 0), "number" === typeof b ? (a = a.g, Ib(b), ff(a, Gb, Hb)) : (c = Wy(b), ff(a.g, c.A, c.g))))
        }), Bz = cf(function (a, b, c) {
            b = Jc(b);
            null != b && null != b && (ef(a, c, 0), az(a.g, b))
        }), Cz = cf(function (a, b, c) {
            b = yc(b);
            null != b && (ef(a, c, 0), a.g.g.push(b ? 1 : 0))
        }), Dz = cf(function (a, b, c) {
            b = hd(b);
            null != b && bz(a, c, rb(b))
        }), Ez;
    Ez = new Xe(function (a, b, c) {
        b = Oe(hd, b);
        if (null != b) for (var d = 0; d < b.length; d++) {
            var e = a, f = c, g = b[d];
            null != g && bz(e, f, rb(g))
        }
    }, !1);
    var af = new Xe(kf, !0), Ye = new Xe(kf, !0), Fz;
    Fz = new Xe(function (a, b, c, d, e) {
        if (Array.isArray(b)) for (var f = 0; f < b.length; f++) kf(a, b[f], c, d, e)
    }, !0);
    var Gz = cf(function (a, b, c) {
        b = Mc(b);
        null != b && null != b && (ef(a, c, 0), $y(a.g, b))
    }), Hz = cf(function (a, b, c) {
        b = Jc(b);
        null != b && (b = parseInt(b, 10), ef(a, c, 0), az(a.g, b))
    }), Iz;
    Iz = new Xe(function (a, b, c) {
        b = Oe(Jc, b);
        if (null != b && b.length) {
            c = hf(a, c);
            for (var d = 0; d < b.length; d++) az(a.g, b[d]);
            jf(a, c)
        }
    }, !1);
    var nf = void 0;
    var Kf = function (a) {
        this.D = _.B(a)
    };
    _.T(Kf, _.E);
    var Jz = _.Rw(["https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js"]);
    var Uf = _.Rw(["https://tpc.googlesyndication.com/sodar/", ".js"]),
        Kz = _.Rw(["https://www.google.com/recaptcha/api2/aframe"]);
    _.If(Kz);
    var Lz, lw, Yi;
    Lz = function () {
        return !0
    };
    lw = function (a) {
        return function () {
            return !a.apply(this, arguments)
        }
    };
    Yi = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Mz = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    _.Nz = function (a, b) {
        var c = 0, d = !1, e = [], f = function () {
            c = 0;
            d && (d = !1, g())
        }, g = function () {
            c = _.t.setTimeout(f, b);
            var h = e;
            e = [];
            a.apply(void 0, h)
        };
        return function (h) {
            e = arguments;
            c ? d = !0 : g()
        }
    };
    var Mf;
    Mf = Yi(function () {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
            _.t.addEventListener("test", null, b)
        } catch (c) {
        }
        return a
    });
    _.Of = function (a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Nf(d)), !0) : !1
    };
    _.ng = function (a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Nf(d)), !0) : !1
    };
    var Rf = function (a) {
        return new _.A.Promise(function (b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function () {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Oz = function (a) {
        this.D = _.B(a)
    };
    _.T(Oz, _.E);
    var Pz = function (a) {
        this.D = _.B(a)
    };
    _.T(Pz, _.E);
    var Qz = function (a) {
        this.g = a.A;
        this.A = a.l;
        this.j = a.j;
        this.Rd = a.Rd;
        this.B = a.B;
        this.qd = a.qd;
        this.Xe = a.Xe;
        this.uf = a.uf;
        this.We = a.We;
        this.l = a.g
    }, Rz = function (a, b, c) {
        this.A = a;
        this.l = b;
        this.j = c;
        this.B = window;
        this.qd = "env";
        this.Xe = "n";
        this.uf = "0";
        this.We = "1";
        this.g = !0
    };
    Rz.prototype.build = function () {
        return new Qz(this)
    };
    var Ki = function (a) {
        this.D = _.B(a)
    };
    _.T(Ki, _.E);
    Ki.prototype.getId = function () {
        return _.F(this, 1)
    };
    var Sz = [0, Dz];
    var Ni = function (a) {
        this.D = _.B(a)
    };
    _.T(Ni, _.E);
    Ni.prototype.getWidth = function () {
        return _.qz(this, 1)
    };
    Ni.prototype.getHeight = function () {
        return _.qz(this, 2)
    };
    var Tz = [0, Bz, -1];
    var Mi = function (a) {
        this.D = _.B(a)
    };
    _.T(Mi, _.E);
    var Uz = [0, zz, Cz, Dz, -1];
    var Ii = function (a) {
        this.D = _.B(a)
    };
    _.T(Ii, _.E);
    Ii.da = [4];
    var Vz = [0, Dz, zz, Dz, Ez, Hz, Sz, Tz, zz, Uz];
    var Ci = function (a) {
        this.D = _.B(a)
    };
    _.T(Ci, _.E);
    var Fi = function (a, b) {
        return _.yi(a, 1, b)
    }, Gi = function (a, b) {
        return qi(a, 4, b)
    }, Ei = function (a, b) {
        return _.Oi(a, 2, b)
    }, Wz = [0, Hz, Bz, Dz, Cz];
    var ti = function (a) {
        this.D = _.B(a)
    };
    _.T(ti, _.E);
    var si = function (a, b) {
        return Ji(a, 1, b)
    }, pi = function (a, b) {
        return Ik(a, 3, Ii, b)
    }, ri = function (a, b) {
        return _.yi(a, 4, b)
    };
    ti.prototype.Xh = function () {
        return _.tg(this, 7, 0)
    };
    ti.da = [10, 3];
    var Xz = [0, Dz, zz, Fz, Vz, Hz, Wz, Cz, Hz, 2, Ez];
    var Si = function (a) {
        this.D = _.B(a)
    };
    _.T(Si, _.E);
    var Yz = [0, Hz, Cz, zz];
    var Zz = function (a) {
        this.D = _.B(a)
    };
    _.T(Zz, _.E);
    var oi = function (a, b) {
        return Ie(a, 2, ti, b)
    }, Di = function (a, b) {
        _.Ai(a, 5, b)
    }, Xi = function (a, b) {
        Ji(a, 10, b)
    };
    Zz.da = [2];
    var $z = [0, Hz, Fz, Xz, Hz, Dz, Wz, Dz, Cz, Bz, Yz, Dz, -1];
    var Ti = function (a) {
        this.D = _.B(a)
    };
    _.T(Ti, _.E);
    var Vi = function (a) {
        var b = new Zz;
        b = _.yi(b, 1, 1);
        return Ie(a, 1, Zz, b)
    };
    Ti.da = [1];
    Ti.prototype.g = qf([0, Fz, $z]);
    var aA = function (a) {
        this.D = _.B(a)
    };
    _.T(aA, _.E);
    var tz = [2, 3];
    var bA = function (a) {
        this.D = _.B(a)
    };
    _.T(bA, _.E);
    bA.da = [1];
    var cA = function (a) {
        this.D = _.B(a)
    };
    _.T(cA, _.E);
    cA.da = [1];
    var dA = function (a) {
        this.D = _.B(a)
    };
    _.T(dA, _.E);
    var eA = [2, 3];
    var fA = function (a) {
        this.D = _.B(a)
    };
    _.T(fA, _.E);
    fA.da = [2];
    var gA = function (a) {
        this.D = _.B(a)
    };
    _.T(gA, _.E);
    gA.da = [6, 4];
    var hA = function (a) {
        this.D = _.B(a)
    };
    _.T(hA, _.E);
    hA.da = [4, 5];
    var iA = function (a) {
        this.D = _.B(a)
    };
    _.T(iA, _.E);
    var jA = function (a) {
        this.D = _.B(a)
    };
    _.T(jA, _.E);
    jA.prototype.Wh = function () {
        return nz(this, iA, 2)
    };
    jA.da = [1];
    var kA = function (a) {
        this.D = _.B(a)
    };
    _.T(kA, _.E);
    var lA = function (a) {
        this.D = _.B(a)
    };
    _.T(lA, _.E);
    lA.da = [1];
    var mA = function (a) {
        this.D = _.B(a)
    };
    _.T(mA, _.E);
    var nA = [0, Hz, zz];
    var oA = function (a) {
        this.D = _.B(a)
    };
    _.T(oA, _.E);
    var pA = [0, yz];
    var qA = function (a) {
        this.D = _.B(a)
    };
    _.T(qA, _.E);
    qA.prototype.getEscapedQemQueryId = function () {
        return _.F(this, 1)
    };
    var rA = [0, Dz, pA, nA];
    var sA = function (a) {
        this.D = _.B(a)
    };
    _.T(sA, _.E);
    sA.prototype.getAdUnitPath = function () {
        return _.F(this, 1)
    };
    _.tA = function (a) {
        this.D = _.B(a)
    };
    _.T(_.tA, _.E);
    _.uA = function (a) {
        this.D = _.B(a)
    };
    _.T(_.uA, _.E);
    _.uA.prototype.Qe = ca(0);
    _.uA.prototype.Ld = ca(1);
    _.uA.prototype.Se = ca(2);
    _.uA.da = [15, 24];
    var vA = function (a) {
        this.D = _.B(a)
    };
    _.T(vA, _.E);
    vA.prototype.getAdUnitPath = function () {
        return _.F(this, 2)
    };
    var Zv = function (a) {
        this.D = _.B(a)
    };
    _.T(Zv, _.E);
    var wA = [5, 7, 8, 9];
    var xA = function (a) {
        this.D = _.B(a)
    };
    _.T(xA, _.E);
    var yA = function (a) {
        this.D = _.B(a)
    };
    _.T(yA, _.E);
    yA.da = [4, 5, 6];
    var zA = function (a) {
        this.D = _.B(a)
    };
    _.T(zA, _.E);
    zA.prototype.getValue = function () {
        return _.F(this, 2)
    };
    zA.prototype.kg = function () {
        return _.Zi(this, 2)
    };
    var AA = function (a) {
        this.D = _.B(a)
    };
    _.T(AA, _.E);
    var Vv = function (a) {
        this.D = _.B(a)
    };
    _.T(Vv, _.E);
    Vv.da = [13];
    var Tv = function (a) {
        this.D = _.B(a)
    };
    _.T(Tv, _.E);
    Tv.da = [15, 13];
    var BA = function (a) {
        this.D = _.B(a)
    };
    _.T(BA, _.E);
    var Hk = function (a) {
        var b = new BA;
        return _.yi(b, 1, a)
    }, CA = [0, Hz];
    var Ak = function (a) {
        this.D = _.B(a)
    };
    _.T(Ak, _.E);
    var DA = function (a) {
        var b = new Ak;
        return Ji(b, 1, a)
    }, EA = function (a) {
        var b = window.Date.now();
        b = _.x(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
        return _.vi(a, 3, b)
    };
    Ak.prototype.kb = function (a) {
        return _.Ai(this, 10, a)
    };
    var FA = rf(Ak), GA = [0, Dz, -1, zz, Bz, -2, zz, xz, Cz, CA, Cz];
    var HA = [0, 1, [0, Az, -2], -1, Dz, -1, Cz, [0, 3, Hz, Dz], zz, Iz, Gz];
    var IA = function (a) {
        this.D = _.B(a)
    };
    _.T(IA, _.E);
    IA.da = [1, 2];
    IA.prototype.g = qf([0, Fz, HA, Fz, GA]);
    var Yv = function (a) {
        this.D = _.B(a)
    };
    _.T(Yv, _.E);
    var JA = function (a) {
        this.D = _.B(a)
    };
    _.T(JA, _.E);
    JA.prototype.getValue = function () {
        return _.F(this, 1)
    };
    JA.prototype.kg = function () {
        return _.Zi(this, 1)
    };
    JA.prototype.getVersion = function () {
        return _.tg(this, 5, 0)
    };
    var Sv = function (a) {
        this.D = _.B(a)
    };
    _.T(Sv, _.E);
    var $v = function (a) {
        this.D = _.B(a)
    };
    _.T($v, _.E);
    $v.prototype.getAdUnitPath = function () {
        return _.F(this, 1)
    };
    var aw = function (a) {
        this.D = _.B(a)
    };
    _.T(aw, _.E);
    var Wv = function (a) {
        this.D = _.B(a)
    };
    _.T(Wv, _.E);
    var dw = function (a) {
        this.D = _.B(a)
    };
    _.T(dw, _.E);
    var KA = function (a) {
        this.D = _.B(a)
    };
    _.T(KA, _.E);
    KA.prototype.getContentUrl = function () {
        return _.F(this, 2)
    };
    KA.da = [11];
    var LA = function (a) {
        this.D = _.B(a)
    };
    _.T(LA, _.E);
    LA.prototype.getEscapedQemQueryId = function () {
        return _.F(this, 4)
    };
    LA.da = [2, 23, 29];
    var MA = function (a) {
        this.D = _.B(a)
    };
    _.T(MA, _.E);
    var NA = function (a) {
        this.D = _.B(a)
    };
    _.T(NA, _.E);
    var OA = function (a) {
        this.D = _.B(a)
    };
    _.T(OA, _.E);
    var PA = function (a) {
        this.D = _.B(a)
    };
    _.T(PA, _.E);
    var QA = function (a) {
        this.D = _.B(a)
    };
    _.T(QA, _.E);
    var RA = function (a) {
        this.D = _.B(a)
    };
    _.T(RA, _.E);
    RA.prototype.getEscapedQemQueryId = function () {
        return _.F(this, 2)
    };
    var SA = function (a) {
        this.D = _.B(a)
    };
    _.T(SA, _.E);
    var TA = function (a) {
        this.D = _.B(a)
    };
    _.T(TA, _.E);
    var Xv = function (a) {
        this.D = _.B(a)
    };
    _.T(Xv, _.E);
    var UA = function (a) {
        return nz(a, RA, 5)
    };
    Xv.prototype.getWidth = function () {
        return _.qz(this, 9)
    };
    Xv.prototype.getHeight = function () {
        return _.qz(this, 10)
    };
    Xv.da = [3, 7, 27, 11, 32];
    var VA = function (a) {
        this.D = _.B(a)
    };
    _.T(VA, _.E);
    VA.prototype.getHeight = function () {
        return $i(this, 6)
    };
    VA.prototype.getWidth = function () {
        return $i(this, 7)
    };
    VA.prototype.getEscapedQemQueryId = function () {
        return Bk(this, 34)
    };
    VA.da = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var Uv = [39, 48];
    var WA = function (a) {
        this.D = _.B(a)
    };
    _.T(WA, _.E);
    var XA = rf(WA);
    WA.da = [1, 2, 3];
    var YA = window;
    var pw = function (a) {
        this.D = _.B(a)
    };
    _.T(pw, _.E);
    pw.da = [15];
    var ow = function (a) {
        this.D = _.B(a)
    };
    _.T(ow, _.E);
    ow.prototype.getCorrelator = function () {
        return _.Ug(this, 1)
    };
    ow.prototype.setCorrelator = function (a) {
        return _.Ij(this, 1, a)
    };
    var nw = function (a) {
        this.D = _.B(a)
    };
    _.T(nw, _.E);
    var ZA, $A, aB;
    _.U = function (a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    ZA = function (a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    $A = function (a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? "" : b
    };
    aB = function (a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var bB = new _.U(590317302), cB = new _.U(1958);
    _.Xf = function (a) {
        var b = "Hc";
        if (a.Hc && a.hasOwnProperty(b)) return a.Hc;
        b = new a;
        return a.Hc = b
    };
    var Yf = function () {
        var a = {};
        this.A = function (b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function (b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function (b, c) {
            return null != a[b] ? a[b] : c
        };
        this.L = function (b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function () {
        }
    };
    var dB = _.wy || zy;
    _.eB = Yi(function () {
        var a = document.createElement("div"), b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.fy(gy);
        return !b.parentElement
    });
    _.gn = function (a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.gn.prototype.equals = function (a) {
        return a instanceof _.gn && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.gn.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.gn.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.gn.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.ln = function (a, b) {
        this.width = a;
        this.height = b
    };
    _.q = _.ln.prototype;
    _.q.aspectRatio = function () {
        return this.width / this.height
    };
    _.q.isEmpty = function () {
        return !(this.width * this.height)
    };
    _.q.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.q.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.q.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var vg, iB, hB, lB, nB, sB;
    vg = function (a) {
        return a ? new _.fB(_.gB(a)) : wx || (wx = new _.fB)
    };
    iB = function (a, b) {
        $a(b, function (c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : hB.hasOwnProperty(d) ? a.setAttribute(hB[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    hB = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.kB = function (a) {
        a = a.document;
        a = _.jB(a) ? a.documentElement : a.body;
        return new _.ln(a.clientWidth, a.clientHeight)
    };
    lB = function (a) {
        return a.scrollingElement ? a.scrollingElement : !zy && _.jB(a) ? a.documentElement : a.body || a.documentElement
    };
    _.mB = function (a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    nB = function (a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }

        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!_.Ua(f) || _.Ma(f) && 0 < f.nodeType) d(f); else {
                a:{
                    if (f && "number" == typeof f.length) {
                        if (_.Ma(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.Yx(g ? _.Ja(f) : f, d)
            }
        }
    };
    _.oB = function (a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.jB = function (a) {
        return "CSS1Compat" == a.compatMode
    };
    _.pB = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.qB = function (a) {
        var b;
        if (dB && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.Ma(b) && 1 == b.nodeType ? b : null
    };
    _.rB = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.gB = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    sB = function (a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.mB(a.contentDocument) : null)
        } catch (b) {
        }
        return null
    };
    _.Nj = function (a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    _.fB = function (a) {
        this.g = a || _.t.document || document
    };
    _.q = _.fB.prototype;
    _.q.bl = function (a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    };
    _.q.en = _.fB.prototype.bl;
    _.q.getElementsByTagName = function (a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    _.q.createElement = function (a) {
        return _.oB(this.g, a)
    };
    _.q.createTextNode = function (a) {
        return this.g.createTextNode(String(a))
    };
    _.q.append = function (a, b) {
        nB(_.gB(a), a, arguments)
    };
    _.q.Ij = _.pB;
    _.q.contains = _.rB;
    var uB = function () {
        return ea && fa ? fa.mobile : !tB() && (ia("iPod") || ia("iPhone") || ia("Android") || ia("IEMobile"))
    }, tB = function () {
        return ea && fa ? !fa.mobile && (ia("iPad") || ia("Android") || ia("Silk")) : ia("iPad") || ia("Android") && !ia("Mobile") || ia("Silk")
    };
    var wB, Np;
    _.vB = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    wB = function (a) {
        return a ? decodeURI(a) : a
    };
    _.fo = function (a, b, c) {
        if (Array.isArray(b)) for (var d = 0; d < b.length; d++) _.fo(a, String(b[d]), c); else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    Np = /#|$/;
    var Jl, Xk, xB, Yk, Fn, Xp, Aw, zw, zB, AB, Gn, BB, CB, DB, EB, FB, lh, Lv, GB, HB, oq, ok, pq, uq, IB, KB, LB, MB,
        NB, OB, vk, PB, ap, Qo, QB, ko, RB, SB;
    _.ol = function (a) {
        try {
            return !!a && null != a.location.href && uy(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Jl = function (a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? xB(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.ol(c) || !a(c));) c = xB(c)
    };
    Xk = function () {
        var a = window;
        Jl(function (b) {
            a = b;
            return !1
        });
        return a
    };
    xB = function (a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {
        }
        return null
    };
    Yk = function (a) {
        return _.ol(a.top) ? a.top : null
    };
    _.Lp = function (a, b) {
        var c = _.mg("SCRIPT", a);
        mb(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Fn = function (a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.Th = function () {
        if (!_.A.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.A.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.io = function (a, b) {
        if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.yB = function (a) {
        var b = [];
        _.io(a, function (c) {
            b.push(c)
        });
        return b
    };
    Xp = function (a, b) {
        return cb(a, function (c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.Uh = function (a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Aw = Yi(function () {
        return _.Wg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], zB) || 1E-4 > Math.random()
    });
    zw = Yi(function () {
        return zB("MSIE")
    });
    zB = function (a) {
        return -1 != da().indexOf(a)
    };
    AB = /^([0-9.]+)px$/;
    Gn = function (a) {
        return (a = AB.exec(a)) ? +a[1] : null
    };
    BB = function () {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {
        }
        return !0
    };
    CB = function () {
        var a = _.t.location.href;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {
        }
        return ""
    };
    DB = {
        jn: "allow-forms",
        kn: "allow-modals",
        ln: "allow-orientation-lock",
        mn: "allow-pointer-lock",
        nn: "allow-popups",
        on: "allow-popups-to-escape-sandbox",
        pn: "allow-presentation",
        qn: "allow-same-origin",
        rn: "allow-scripts",
        sn: "allow-top-navigation",
        un: "allow-top-navigation-by-user-activation"
    };
    EB = Yi(function () {
        return _.yB(DB)
    });
    FB = function (a) {
        var b = EB();
        return a.length ? _.yj(b, function (c) {
            return !(0 <= _.Ha(a, c))
        }) : b
    };
    lh = function () {
        var a = _.mg("IFRAME"), b = {};
        _.Yx(EB(), function (c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    Lv = function (a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    GB = function (a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = xB(a))) break
        }
        return null
    };
    HB = function (a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document, c = b.head, d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.mg("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {
        }
        return null
    };
    _.xq = Yi(function () {
        return uB() ? 2 : tB() ? 1 : 0
    });
    oq = function (a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.aq = function (a, b) {
        _.io(b, function (c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    ok = function (a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    pq = function (a, b) {
        for (var c = 100; a && c--;) {
            var d = Fn(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    uq = function (a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.Zx(a, parseFloat)
    };
    IB = {};
    _.JB = (IB["http://googleads.g.doubleclick.net"] = !0, IB["http://pagead2.googlesyndication.com"] = !0, IB["https://googleads.g.doubleclick.net"] = !0, IB["https://pagead2.googlesyndication.com"] = !0, IB);
    KB = function (a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    LB = [];
    MB = function () {
        var a = LB;
        LB = [];
        a = _.u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {
            }
        }
    };
    NB = function (a) {
        return a.replace(/\\(n|r|\\)/g, function (b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    OB = function () {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    vk = function (a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {value: OB(), configurable: !1})
        } catch (b) {
        }
        return Number(a.goog_pvsid) || -1
    };
    PB = function (a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (LB.push(b), 1 == LB.length && (_.A.Promise ? _.A.Promise.resolve().then(MB) : window.setImmediate ? setImmediate(MB) : setTimeout(MB, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    ap = function (a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Qo = function (a) {
        return 0 === a || ap(a)
    };
    QB = function (a) {
        return new _.A.Promise(function (b) {
            setTimeout(function () {
                return void b(void 0)
            }, a)
        })
    };
    ko = function (a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {
        }
        return b || String(a)
    };
    _.mg = function (a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    RB = function (a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.ol(a) && (b = a);
        return b
    };
    _.ij = function (a) {
        return _.H(bB) || oa() && uB() ? SB(a, !0) : 1
    };
    SB = function (a, b) {
        var c = (void 0 === b ? 0 : b) ? Yk(a) : a;
        if (!c) return 1;
        a = 0 === (0, _.xq)();
        b = !!c.document.querySelector('meta[name=viewport][content*="width=device-width"]');
        var d = c.innerWidth;
        c = c.outerWidth;
        if (0 === d) return 1;
        var e = Math.round(100 * (c / d + _.x(Number, "EPSILON"))) / 100;
        return 1 === e ? 1 : a || b ? e : Math.round(100 * (c / d / .4 + _.x(Number, "EPSILON"))) / 100
    };
    _.TB = function (a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.TB.prototype.getWidth = function () {
        return this.right - this.left
    };
    _.TB.prototype.getHeight = function () {
        return this.bottom - this.top
    };
    _.UB = function (a) {
        return new _.TB(a.top, a.right, a.bottom, a.left)
    };
    _.TB.prototype.contains = function (a) {
        return this && a ? a instanceof _.TB ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.TB.prototype.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.TB.prototype.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.TB.prototype.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var VB = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }, WB = function (a) {
        return new _.TB(a.top, a.left + a.width, a.top + a.height, a.left)
    }, XB = function (a, b) {
        var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new VB(c, e, d - c, a - e)
        }
        return null
    };
    VB.prototype.contains = function (a) {
        return a instanceof _.gn ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    VB.prototype.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    VB.prototype.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    VB.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var YB = function (a) {
        return (a = void 0 === a ? bg() : a) ? _.ol(a.master) ? a.master : null : null
    };
    var aC, cC, kn, dC, eC, fn;
    _.$B = function (a, b, c) {
        if ("string" === typeof b) (b = _.ZB(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var e = b[d], f = _.ZB(c, d);
            f && (c.style[f] = e)
        }
    };
    aC = {};
    _.ZB = function (a, b) {
        var c = aC[b];
        if (!c) {
            var d = _.ry(b);
            c = d;
            void 0 === a.style[d] && (d = (zy ? "Webkit" : yy ? "Moz" : _.wy ? "ms" : null) + sy(d), void 0 !== a.style[d] && (c = d));
            aC[b] = c
        }
        return c
    };
    _.bC = function (a, b) {
        var c = _.gB(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    cC = function (a, b) {
        return _.bC(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    kn = function (a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
    };
    dC = function (a) {
        if (_.wy && !(8 <= Number(Iy))) return a.offsetParent;
        var b = _.gB(a), c = cC(a, "position"), d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = cC(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    eC = function (a) {
        var b = _.gB(a), c = new _.gn(0, 0);
        var d = b ? _.gB(b) : document;
        d = !_.wy || 9 <= Number(Iy) || _.jB(vg(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = kn(a);
        d = vg(b).g;
        b = lB(d);
        d = d.parentWindow || d.defaultView;
        b = _.wy && d.pageYOffset != b.scrollTop ? new _.gn(b.scrollLeft, b.scrollTop) : new _.gn(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    fn = function (a, b) {
        var c = new _.gn(0, 0), d = _.mB(_.gB(a));
        if (!uy(d, "parent")) return c;
        do {
            var e = d == b ? eC(a) : _.fC(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.fC = function (a) {
        a = kn(a);
        return new _.gn(a.left, a.top)
    };
    _.gC = function (a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.jn = function (a, b) {
        if ("none" != cC(b, "display")) return a(b);
        var c = b.style, d = c.display, e = c.visibility, f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.hC = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = zy && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = kn(a), new _.ln(a.right - a.left, a.bottom - a.top)) : new _.ln(b, c)
    };
    var jC, lq;
    _.iC = _.Rw(["//fonts.googleapis.com/css"]);
    jC = function (a) {
        a = void 0 === a ? YA : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    };
    lq = function (a) {
        a = YB(bg(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    _.Kj = function (a) {
        this.D = _.B(a)
    };
    _.T(_.Kj, _.E);
    _.Kj.da = [1];
    var kC = function (a) {
        this.D = _.B(a)
    };
    _.T(kC, _.E);
    var lC = {"-": 0, Y: 2, N: 1};
    var mC = function (a) {
        this.D = _.B(a)
    };
    _.T(mC, _.E);
    mC.prototype.getVersion = function () {
        return _.qz(this, 2)
    };
    mC.da = [3];
    var nC = function (a) {
        this.D = _.B(a)
    };
    _.T(nC, _.E);
    var oC = function (a) {
        this.D = _.B(a)
    };
    _.T(oC, _.E);
    var pC = function (a) {
        this.D = _.B(a)
    };
    _.T(pC, _.E);
    pC.prototype.getVersion = function () {
        return _.qz(this, 1)
    };
    var qC = function (a) {
        this.D = _.B(a)
    };
    _.T(qC, _.E);
    var rC = function (a) {
        this.D = _.B(a)
    };
    _.T(rC, _.E);
    var sC = function (a) {
        var b = new rC;
        return _.Ai(b, 1, a)
    };
    var tC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], uC = 6 + tC.reduce(function (a, b) {
        return a + b
    });
    var vC = function (a) {
        this.D = _.B(a)
    };
    _.T(vC, _.E);
    var wC = function (a) {
        this.D = _.B(a)
    };
    _.T(wC, _.E);
    wC.prototype.getVersion = function () {
        return _.qz(this, 1)
    };
    var xC = function (a) {
        this.D = _.B(a)
    };
    _.T(xC, _.E);
    var yC = function (a) {
        this.D = _.B(a)
    };
    _.T(yC, _.E);
    var zC = function (a) {
        var b = new yC;
        return _.Ai(b, 1, a)
    };
    var AC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], BC = 6 + AC.reduce(function (a, b) {
        return a + b
    });
    var CC = function (a) {
        this.D = _.B(a)
    };
    _.T(CC, _.E);
    var DC = function (a) {
        this.D = _.B(a)
    };
    _.T(DC, _.E);
    var EC = function (a) {
        this.D = _.B(a)
    };
    _.T(EC, _.E);
    EC.prototype.getVersion = function () {
        return _.qz(this, 1)
    };
    var FC = function (a) {
        this.D = _.B(a)
    };
    _.T(FC, _.E);
    var GC = function (a) {
        this.D = _.B(a)
    };
    _.T(GC, _.E);
    var HC = function (a) {
        var b = new GC;
        return _.Ai(b, 1, a)
    };
    var IC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], JC = 6 + IC.reduce(function (a, b) {
        return a + b
    });
    var KC = function (a) {
        this.D = _.B(a)
    };
    _.T(KC, _.E);
    var LC = function (a) {
        this.D = _.B(a)
    };
    _.T(LC, _.E);
    LC.prototype.getVersion = function () {
        return _.qz(this, 1)
    };
    var MC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], NC = 6 + MC.reduce(function (a, b) {
        return a + b
    });
    var OC = function (a) {
        this.D = _.B(a)
    };
    _.T(OC, _.E);
    _.gm = function (a) {
        return !!(a.error && a.meta && a.id)
    };
    _.PC = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var QC = null, RC = function () {
        if (null === QC) {
            QC = "";
            try {
                var a = "";
                try {
                    a = _.t.top.location.hash
                } catch (c) {
                    a = _.t.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    QC = b ? b[1] : ""
                }
            } catch (c) {
            }
        }
        return QC
    };
    var SC = function (a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var TC, UC, VC, WC, XC;
    TC = _.t.performance;
    UC = !!(TC && TC.mark && TC.measure && TC.clearMarks);
    VC = Yi(function () {
        var a;
        if (a = UC) a = RC(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    WC = function (a, b) {
        this.events = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.g = VC() || (null != c ? c : Math.random() < a)
    };
    _.em = function (a) {
        a && TC && VC() && (TC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), TC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    XC = function (a, b, c, d, e, f) {
        a.g && (b = new SC(b, c, d, void 0 === e ? 0 : e, f), !a.g || 2048 < a.events.length || a.events.push(b))
    };
    WC.prototype.start = function (a, b) {
        if (!this.g) return null;
        var c = _.jg() || _.ig();
        a = new SC(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        TC && VC() && TC.mark(b);
        return a
    };
    WC.prototype.end = function (a) {
        if (this.g && "number" === typeof a.value) {
            var b = _.jg() || _.ig();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            TC && VC() && TC.mark(b);
            !this.g || 2048 < this.events.length || this.events.push(a)
        }
    };
    var ut = function (a, b, c) {
        var d = _.jg();
        d && XC(a, b, 9, d, 0, c)
    };
    var aD, $C, cD, bD;
    _.YC = function () {
        this.l = "&";
        this.A = {};
        this.j = 0;
        this.g = []
    };
    _.ZC = function (a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    aD = function (a, b, c, d, e) {
        var f = [];
        _.io(a, function (g, h) {
            (g = $C(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    $C = function (a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push($C(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(aD(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    cD = function (a, b) {
        var c = "https://pagead2.googlesyndication.com" + b, d = bD(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function (m, n) {
            return m - n
        });
        b = null;
        for (var e = "", f = 0; f < a.g.length; f++) for (var g = a.g[f], h = a.A[g], k = 0; k < h.length; k++) {
            if (!d) {
                b = null == b ? g : b;
                break
            }
            var l = aD(h[k], a.l, ",$");
            if (l) {
                l = e + l;
                if (d >= l.length) {
                    d -= l.length;
                    c += l;
                    e = a.l;
                    break
                }
                b = null == b ? g : b
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    };
    bD = function (a) {
        var b = 1, c;
        for (c in a.A) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    _.sg = function (a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var dD = function (a, b, c, d, e) {
        og(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
    }, rg = function (a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.io(a, function (e, f) {
            if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
        });
        Ws(d, c)
    }, Ws = function (a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        var d = void 0 === d ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
        } : b.headers = {"Attribution-Reporting-Eligible": "event-source"}), c.fetch(a, b)) : dD(c, a, void 0, b, d)
    };
    var eD = function (a, b) {
        var c = new OC;
        a = _.K(c, 1, a);
        b = _.Hj(a, 2, b);
        this.j = _.ae(b)
    };
    var fD = function (a) {
        this.D = _.B(a)
    };
    _.T(fD, _.E);
    var hD = function (a, b) {
        return Fj(a, 1, gD, gd(b))
    }, iD = function (a, b) {
        return Fj(a, 2, gD, Wc(b))
    }, jD = function (a, b) {
        return Fj(a, 3, gD, null == b ? b : xc(b))
    }, gD = [1, 2, 3];
    var kD = function (a) {
        this.D = _.B(a)
    };
    _.T(kD, _.E);
    var mD = function (a, b) {
        return Fj(a, 4, lD, _.uc(b))
    }, lD = [2, 4];
    var nD = function (a) {
        this.D = _.B(a)
    };
    _.T(nD, _.E);
    var oD = function (a) {
        var b = new nD;
        return _.Hj(b, 1, a)
    }, pD = function (a, b) {
        return _.Ai(a, 3, b)
    }, qD = function (a, b) {
        return Ik(a, 4, fD, b)
    };
    nD.da = [4];
    var rD = function (a) {
        this.D = _.B(a)
    };
    _.T(rD, _.E);
    var sD = function (a) {
        this.D = _.B(a)
    };
    _.T(sD, _.E);
    var am = function (a) {
        this.D = _.B(a)
    };
    _.T(am, _.E);
    var Ql = function (a) {
        this.D = _.B(a)
    };
    _.T(Ql, _.E);
    var Pl = function (a) {
        this.D = _.B(a)
    };
    _.T(Pl, _.E);
    var Nl = function (a) {
        this.D = _.B(a)
    };
    _.T(Nl, _.E);
    var Xl = function (a) {
        this.D = _.B(a)
    };
    _.T(Xl, _.E);
    var tD = function (a) {
        this.D = _.B(a)
    };
    _.T(tD, _.E);
    var uD = function (a) {
        this.D = _.B(a)
    };
    _.T(uD, _.E);
    var Ml = function (a) {
        this.D = _.B(a)
    };
    _.T(Ml, _.E);
    Ml.prototype.getTagSessionCorrelator = function () {
        return _.Ug(this, 2)
    };
    var Wl = function (a) {
        var b = new tD;
        return _.Tl(a, 13, Ul, b)
    };
    Ml.da = [4];
    var Ul = [6, 7, 8, 9, 11, 13, 14];
    var vD = function (a) {
        this.D = _.B(a)
    };
    _.T(vD, _.E);
    var wD = function (a) {
        this.D = _.B(a)
    };
    _.T(wD, _.E);
    var Rq = function (a) {
        this.D = _.B(a)
    };
    _.T(Rq, _.E);
    _.Ej = function (a) {
        this.D = _.B(a)
    };
    _.T(_.Ej, _.E);
    _.Ej.prototype.getTagSessionCorrelator = function () {
        return _.Ug(this, 8)
    };
    _.Dj = function (a, b) {
        return _.Sl(a, 10, b)
    };
    _.Gj = [3, 4, 6];
    var Pq = function (a) {
        this.D = _.B(a)
    };
    _.T(Pq, _.E);
    var xD = function (a) {
        var b = new Pq;
        return _.Tl(b, 2, Sq, a)
    }, Sq = [1, 2, 4, 5];
    var Lq = function (a) {
        this.D = _.B(a)
    };
    _.T(Lq, _.E);
    Lq.prototype.getTagSessionCorrelator = function () {
        return _.Ug(this, 2)
    };
    Lq.da = [4];
    var km = function (a) {
        this.D = _.B(a)
    };
    _.T(km, _.E);
    km.da = [3];
    var jm = function (a) {
        this.D = _.B(a)
    };
    _.T(jm, _.E);
    jm.da = [4, 5];
    var im = function (a) {
        this.D = _.B(a)
    };
    _.T(im, _.E);
    im.prototype.getTagSessionCorrelator = function () {
        return _.Ug(this, 1)
    };
    im.da = [2];
    var hm = function (a) {
        this.D = _.B(a)
    };
    _.T(hm, _.E);
    var nm = [4, 6];
    var yD = function (a) {
        this.D = _.B(a)
    };
    _.T(yD, _.E);
    yD.prototype.getTagSessionCorrelator = function () {
        return _.Ug(this, 1)
    };
    yD.prototype.getMessageId = function () {
        return _.tg(this, 8, 0)
    };
    yD.prototype.getMessageArgs = function (a) {
        return sz(this, 9, a)
    };
    yD.da = [2, 9];
    var nt = function (a) {
        this.D = _.B(a)
    };
    _.T(nt, _.E);
    var ot = function (a) {
        this.D = _.B(a)
    };
    _.T(ot, _.E);
    var pt = [3];
    var AD = function (a) {
        this.jc = new zD(a)
    }, zD = function (a) {
        this.Yh = new BD(a);
        this.td = new CD(a)
    }, BD = function (a) {
        this.mk = new DD(a);
        this.refresh = new ED(a)
    }, DD = function (a) {
        this.nk = new FD(a)
    }, FD = function (a) {
        this.Mc = function (b) {
            var c = b.Pc, d = b.Nf, e = b.di, f = b.ei;
            b = b.ai;
            a(pD(qD(qD(qD(qD(oD("XVNPAd"), iD(new fD, Math.round(d))), jD(new fD, e)), jD(new fD, f)), jD(new fD, b)), mD(new kD, c)))
        }
    }, ED = function (a) {
        this.dm = new GD(a)
    }, GD = function (a) {
        this.Mc = function (b) {
            var c = b.Pc;
            b = b.Im;
            a(pD(qD(oD("e1Ueh"), iD(new fD, Math.round(b))), mD(new kD, c)))
        }
    }, CD = function (a) {
        this.bh = new HD(a);
        this.Uj = new ID(a);
        this.ck = new JD(a);
        this.sk = new KD(a)
    }, ID = function (a) {
        this.Mc = function (b) {
            b = b.Pc;
            a(pD(oD("rsv8Kc"), mD(new kD, b)))
        }
    }, JD = function (a) {
        this.Gc = function (b) {
            var c = b.Sc, d = b.Mf;
            b = b.status;
            d = qD(qD(oD("SOomke"), hD(new fD, d)), hD(new fD, b));
            b = new kD;
            c = Fj(b, 2, lD, Wc(Math.round(c)));
            a(pD(d, c))
        }
    }, KD = function (a) {
        this.Mc = function (b) {
            var c = b.Pc;
            b = b.Gl;
            a(pD(qD(oD("zi5kKf"), iD(new fD, Math.round(b))), mD(new kD, c)))
        }
    }, HD = function (a) {
        this.nh = new LD(a)
    }, LD = function (a) {
        this.Gc = function (b) {
            var c = b.Sc;
            b = b.status;
            b = qD(oD("TP3y1d"), hD(new fD, b));
            var d = new kD;
            c = Fj(d, 2, lD, Wc(Math.round(c)));
            a(pD(b, c))
        }
    }, MD = function () {
        eD.apply(this, arguments);
        var a = this;
        this.Xb = new AD(function (b) {
            return a.om(b)
        })
    };
    _.T(MD, eD);
    _.ND = function () {
        MD.apply(this, arguments)
    };
    _.T(_.ND, MD);
    _.q = _.ND.prototype;
    _.q.qm = function () {
        this.A.apply(this, _.Pi(_.ya.apply(0, arguments).map(function (a) {
            return {Nb: !0, lc: 2, Wb: a.toJSON()}
        })))
    };
    _.q.Qc = function () {
        this.A.apply(this, _.Pi(_.ya.apply(0, arguments).map(function (a) {
            return {Nb: !0, lc: 5, Wb: a.toJSON()}
        })))
    };
    _.q.fj = function () {
        this.A.apply(this, _.Pi(_.ya.apply(0, arguments).map(function (a) {
            return {Nb: !0, lc: 15, Wb: a.toJSON()}
        })))
    };
    _.q.gj = ca(3);
    _.q.tm = function () {
        this.A.apply(this, _.Pi(_.ya.apply(0, arguments).map(function (a) {
            return {Nb: !0, lc: 17, Wb: a.toJSON()}
        })))
    };
    _.q.rm = function () {
        this.A.apply(this, _.Pi(_.ya.apply(0, arguments).map(function (a) {
            return {Nb: !0, lc: 19, Wb: a.toJSON()}
        })))
    };
    _.q.xm = function () {
        this.A.apply(this, _.Pi(_.ya.apply(0, arguments).map(function (a) {
            return {Nb: !0, lc: 21, Wb: a.toJSON()}
        })))
    };
    _.q.om = function () {
        this.A.apply(this, _.Pi(_.ya.apply(0, arguments).map(function (a) {
            return {Nb: !1, lc: 1, Wb: a.toJSON()}
        })))
    };
    var OD = function (a, b) {
        if (_.A.globalThis.fetch) _.A.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function () {
        }); else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var PD = function (a, b, c, d, e, f, g, h) {
        _.ND.call(this, a, b);
        this.C = c;
        this.o = d;
        this.Ca = e;
        this.I = f;
        this.K = g;
        this.L = h;
        this.g = [];
        this.l = null;
        this.F = !1
    };
    _.T(PD, _.ND);
    var QD = function (a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.g.length) {
            var b = qg(a.g, a.j);
            a.o(a.C + "?e=1", b);
            a.g = []
        }
    };
    PD.prototype.A = function () {
        var a = _.ya.apply(0, arguments), b = this;
        try {
            this.K && 65536 <= qg(this.g.concat(a), this.j).length && QD(this), this.L && !this.F && (this.F = !0, this.L.g(function () {
                QD(b)
            })), this.g.push.apply(this.g, _.Pi(a)), this.g.length >= this.I && QD(this), this.g.length && null === this.l && (this.l = setTimeout(function () {
                QD(b)
            }, this.Ca))
        } catch (c) {
            pg(c, this.j)
        }
    };
    var Fw = function (a, b, c, d, e, f) {
        PD.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", OD, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.A.globalThis.fetch, f)
    };
    _.T(Fw, PD);
    var RD = new ZA(494575051), SD = new aB(489560439), TD = new aB(505762507);
    var Mm, Ap, UD, bw, gp, fq, VD, WD, XD, Ri, YD, ZD, $D, Bv, Av, Pv, aE, Cw, bE, cE, dE, up, eE, fE, gE, hE, iE, jE,
        xu, kE, lE, mE, Bw, nE, Kv, oE, pE, qE, rE, rp, xE, AE, Mr, BE, cm, DE, av, EE, Dr, FE, Xq, GE, HE, IE, JE, KE,
        tu, LE, ME, NE, OE, PE, Iv, QE, Gv, RE, eo, ao, SE, Wk, vv, UE, VE, WE, $o, XE, wv, vl, YE, ZE, $E, aF, ul, bF,
        hu, vu, iu, cF, Dw, dF, eF, fF, gF, ju, hF, XF, YF, ZF, $F, At, at, aG, bG, Ys, cG, dG, eG, fG, gG, hG, iG, jG,
        kG, rw, sw, lG, tw, qw, mG, nG, Zt, vw, oG;
    Mm = new _.U(620850133);
    Ap = new _.U(619242419);
    UD = new _.U(620950234);
    bw = new _.U(607106222, !0);
    gp = new _.U(577939489, !0);
    fq = new ZA(7, .1);
    VD = new _.U(212);
    WD = new _.U(561694963, !0);
    XD = new _.U(609732864);
    Ri = new ZA(612427113);
    YD = new ZA(462420536);
    ZD = new _.U(476475256, !0);
    $D = new ZA(438663674);
    Bv = new ZA(45409629);
    Av = new ZA(522348973);
    Pv = new ZA(550605190);
    aE = new ZA(564509649);
    Cw = new ZA(578655462, 20);
    bE = new _.U(558225291);
    cE = new _.U(591917863, !0);
    dE = new _.U(613699219, !0);
    up = new ZA(617843383);
    eE = new _.U(620932180);
    fE = new _.U(577861852);
    gE = new _.U(573236024, !0);
    hE = new _.U(619946851);
    iE = new _.U(620930073);
    jE = new _.U(617296881);
    xu = new _.U(453);
    kE = new _.U(454);
    lE = new ZA(377289019, 1E4);
    mE = new ZA(529, 20);
    Bw = new ZA(573282293, .01);
    nE = new $A(10);
    Kv = new ZA(610770343);
    oE = new _.U(610525552);
    pE = new _.U(45624259);
    qE = new _.U(45622305);
    rE = new _.U(360245597, !0);
    rp = new _.U(540043576, !0);
    _.sE = new _.U(479390945);
    _.tE = new _.U(518650310);
    _.uE = new _.U(547020083, !0);
    _.vE = new _.U(561164161, !0);
    _.wE = new ZA(550718589, 250);
    xE = new _.U(586382198);
    _.yE = new _.U(600451522, !0);
    _.zE = new ZA(609494714);
    AE = new ZA(575880738, 10);
    Mr = new ZA(586681283);
    BE = new _.U(599186119, !0);
    _.CE = new _.U(531615531);
    cm = new _.U(85);
    DE = new ZA(618260805, 10);
    av = new _.U(524098256);
    EE = new _.U(595824397, !0);
    Dr = new ZA(532520346, 120);
    FE = new _.U(557870754, !0);
    Xq = new _.U(614048762, !0);
    GE = new _.U(618260804);
    HE = new aB(466086960);
    IE = new ZA(398776877, 6E4);
    JE = new ZA(374201269, 6E4);
    KE = new ZA(371364213, 6E4);
    tu = new _.U(570764855, !0);
    LE = new $A(579921177, "control_1\\.\\d");
    ME = new ZA(570764854, 50);
    NE = new _.U(578725095, !0);
    OE = new _.U(453275889);
    PE = new _.U(377936516, !0);
    Iv = new ZA(599575765, 1E3);
    QE = new _.U(605401295);
    Gv = new ZA(609715571);
    RE = new ZA(24);
    eo = new aB(1);
    ao = new $A(2, "1-0-40");
    SE = new _.U(608664189);
    Wk = new _.U(602464517);
    _.TE = new ZA(506394061, 100);
    vv = new aB(489);
    UE = new _.U(392065905);
    VE = new ZA(360245595, 500);
    WE = new _.U(561985307);
    $o = new _.U(45397804, !0);
    XE = new _.U(45398607, !0);
    wv = new _.U(424117738);
    vl = new _.U(531493729);
    YE = new _.U(563462360, !0);
    ZE = new _.U(555237688);
    $E = new _.U(555237687);
    aF = new _.U(555237686);
    ul = new _.U(507033477, !0);
    bF = new _.U(619623441);
    hu = new _.U(399705355);
    vu = new _.U(45420038);
    iu = new ZA(514795754, 2);
    cF = new ZA(609173130);
    Dw = new ZA(613312178);
    dF = new _.U(590730357);
    eF = new _.U(590730358);
    fF = new _.U(590730359);
    gF = new aB(603422363);
    ju = new _.U(590730356);
    hF = new _.U(564724551);
    XF = new _.U(567489814, !0);
    YF = new _.U(45415915, !0);
    ZF = new _.U(613969547);
    $F = new _.U(609010285);
    At = new _.U(582338617, !0);
    at = new _.U(588117531, !0);
    aG = new _.U(612823209, !0);
    bG = new _.U(582287318, !0);
    Ys = new ZA(596918936, 500);
    cG = new ZA(607730666, 10);
    dG = new _.U(609053740, !0);
    eG = new ZA(620252253);
    fG = new _.U(612834765, !0);
    gG = new _.U(616896918);
    hG = new _.U(501);
    iG = new _.U(439828594);
    jG = new _.U(483962503);
    kG = new _.U(506738118);
    rw = new _.U(77);
    sw = new _.U(78);
    lG = new _.U(83);
    tw = new _.U(80);
    qw = new _.U(76);
    mG = new _.U(84);
    nG = new _.U(1958);
    Zt = new _.U(1973);
    vw = new _.U(188);
    oG = new _.U(485990406);
    bb({On: 0, Nn: 1, Kn: 2, Fn: 3, Ln: 4, Gn: 5, Mn: 6, In: 7, Jn: 8, En: 9, Hn: 10, Pn: 11}).map(function (a) {
        return Number(a)
    });
    bb({Rn: 0, Sn: 1, Qn: 2}).map(function (a) {
        return Number(a)
    });
    var pG = function (a, b) {
        this.g = xg(a);
        this.A = b
    };
    pG.prototype[_.x(_.A.Symbol, "iterator")] = function () {
        return this
    };
    pG.prototype.next = function () {
        var a = this.g.next();
        return {value: a.done ? void 0 : this.A.call(void 0, a.value), done: a.done}
    };
    var qG = function (a, b) {
        return new pG(a, b)
    }, rG = function (a) {
        this.A = a;
        this.g = 0
    };
    rG.prototype[_.x(_.A.Symbol, "iterator")] = function () {
        return this
    };
    rG.prototype.next = function () {
        for (; this.g < this.A.length;) {
            var a = this.A[this.g].next();
            if (!a.done) return a;
            this.g++
        }
        return {done: !0}
    };
    var sG = function () {
        return new rG(_.ya.apply(0, arguments).map(xg))
    };
    var tG = _.t.URL, uG;
    try {
        new tG("http://example.com"), uG = !0
    } catch (a) {
        uG = !1
    }
    var vG = uG, wG = function (a) {
        this.g = new _.A.Map;
        0 == a.indexOf("?") && (a = a.substring(1));
        a = _.u(a.split("&"));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            b = c;
            var d = "";
            c = c.split("=");
            1 < c.length && (b = decodeURIComponent(c[0].replace("+", " ")), d = decodeURIComponent(c[1].replace("+", " ")));
            c = this.g.get(b);
            null == c && (c = [], this.g.set(b, c));
            c.push(d)
        }
    };
    wG.prototype.get = function (a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    };
    wG.prototype.getAll = function (a) {
        return [].concat(_.Pi(this.g.get(a) || []))
    };
    wG.prototype.has = function (a) {
        return this.g.has(a)
    };
    wG.prototype[_.x(_.A.Symbol, "iterator")] = function () {
        return sG.apply(null, _.Pi(qG(this.g, function (a) {
            var b = a[0];
            return qG(a[1], function (c) {
                return [b, c]
            })
        })))
    };
    wG.prototype.toString = function () {
        return Pg(this)
    };
    var Pg = function (a) {
            var b = function (c) {
                return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function (d) {
                    return {"!": "%21", "(": "%28", ")": "%29", "%20": "+", "'": "%27", "~": "%7E"}[d]
                })
            };
            return _.x(Array, "from").call(Array, a, function (c) {
                return b(c[0]) + "=" + b(c[1])
            }).join("&")
        }, yG = function (a) {
            var b = _.oB(document, "A");
            try {
                _.Fa(b, va(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!xG.has(c)) throw Error(a + " is not a valid URL.");
            if (!b.hostname) throw Error(a + " is not a valid URL.");
            var d = b.href;
            a = {
                href: d,
                protocol: b.protocol,
                username: "",
                password: "",
                hostname: b.hostname,
                pathname: "/" + b.pathname,
                search: b.search,
                hash: b.hash,
                toString: function () {
                    return d
                }
            };
            xG.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        }, zg = function (a) {
            if (vG) {
                try {
                    var b = new tG(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = xG.get(b.protocol);
                if (!c) throw Error(a + " is not a valid URL.");
                if (!b.hostname) throw Error(a + " is not a valid URL.");
                "null" == b.origin && (a = {
                    href: b.href,
                    protocol: b.protocol,
                    username: "",
                    password: "",
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    pathname: b.pathname,
                    search: b.search,
                    hash: b.hash
                }, a.origin = c === b.port ? b.protocol + "//" + b.hostname : b.protocol + "//" + b.hostname + ":" + b.port, b = a);
                return b
            }
            return yG(a)
        }, xG = new _.A.Map([["http:", "80"], ["https:", "443"], ["ws:", "80"], ["wss:", "443"], ["ftp:", "21"]]),
        yg = function (a) {
            return vG && a.searchParams ? a.searchParams : new wG(a.search)
        };
    var zG = function (a) {
        var b = a.document, c = function () {
            if (!a.frames.googlefcPresent) if (b.body) {
                var d = _.mg("IFRAME", b);
                d.style.display = "none";
                d.style.width = "0px";
                d.style.height = "0px";
                d.style.border = "none";
                d.style.zIndex = "-1000";
                d.style.left = "-1000px";
                d.style.top = "-1000px";
                d.name = "googlefcPresent";
                b.body.appendChild(d)
            } else a.setTimeout(c, 5)
        };
        c()
    };
    var AG = function (a) {
        this.D = _.B(a)
    };
    _.T(AG, _.E);
    AG.da = [1, 2];
    var BG = function (a) {
        this.D = _.B(a)
    };
    _.T(BG, _.E);
    var Tg = rf(BG);
    _.V = function () {
        this.L = this.L;
        this.Ca = this.Ca
    };
    _.V.prototype.L = !1;
    _.V.prototype.xa = function () {
        this.L || (this.L = !0, this.A())
    };
    _.R = function (a, b) {
        _.Vp(a, _.vx(Rg, b))
    };
    _.Vp = function (a, b) {
        a.L ? b() : (a.Ca || (a.Ca = []), a.Ca.push(b))
    };
    _.V.prototype.A = function () {
        if (this.Ca) for (; this.Ca.length;) this.Ca.shift()()
    };
    var CG = function (a, b, c, d) {
        _.V.call(this);
        this.H = b;
        this.C = c;
        this.o = d;
        this.F = new _.A.Map;
        this.J = 0;
        this.l = new _.A.Map;
        this.K = new _.A.Map;
        this.I = void 0;
        this.j = a
    };
    _.T(CG, _.V);
    CG.prototype.A = function () {
        delete this.g;
        this.F.clear();
        this.l.clear();
        this.K.clear();
        this.I && (_.ng(this.j, "message", this.I), delete this.I);
        delete this.j;
        delete this.o;
        _.V.prototype.A.call(this)
    };
    var DG = function (a) {
        if (a.g) return a.g;
        a.C && a.C(a.j) ? a.g = a.j : a.g = GB(a.j, a.H);
        var b;
        return null != (b = a.g) ? b : null
    }, FG = function (a, b, c) {
        if (DG(a)) if (a.g === a.j) (b = a.F.get(b)) && b(a.g, c); else {
            var d = a.l.get(b);
            if (d && d.fd) {
                EG(a);
                var e = ++a.J;
                a.K.set(e, {Jc: d.Jc, yk: d.Ud(c), Sl: "addEventListener" === b});
                a.g.postMessage(d.fd(c, e), "*")
            }
        }
    }, EG = function (a) {
        a.I || (a.I = function (b) {
            try {
                var c = a.o ? a.o(b) : void 0;
                if (c) {
                    var d = c.Pg, e = a.K.get(d);
                    if (e) {
                        e.Sl || a.K.delete(d);
                        var f;
                        null == (f = e.Jc) || f.call(e, e.yk, c.payload)
                    }
                }
            } catch (g) {
            }
        }, _.Of(a.j, "message", a.I))
    };
    var GG = function (a, b) {
        var c = {
            cb: function (d) {
                d = Tg(d);
                b.Rb({vc: d})
            }
        };
        b.spsp && (c.spsp = b.spsp);
        a = a.googlefc || (a.googlefc = {});
        a.__fci = a.__fci || [];
        a.__fci.push(b.command, c)
    }, HG = {
        Ud: function (a) {
            return a.Rb
        }, fd: function (a, b) {
            return {__fciCall: {callId: b, command: a.command, spsp: a.spsp || void 0}}
        }, Jc: function (a, b) {
            a({vc: b})
        }
    }, pr = function (a) {
        _.V.call(this);
        this.g = this.l = !1;
        this.caller = new CG(a, "googlefcPresent", void 0, Vg);
        this.caller.F.set("getDataWithCallback", GG);
        this.caller.l.set("getDataWithCallback", HG)
    };
    _.T(pr, _.V);
    pr.prototype.A = function () {
        this.caller.xa();
        _.V.prototype.A.call(this)
    };
    pr.prototype.bd = function (a) {
        if (void 0 === a ? 0 : a) return !1;
        this.l || (this.g = !!DG(this.caller), this.l = !0);
        return this.g
    };
    var nr = function (a) {
        return new _.A.Promise(function (b) {
            a.bd() && FG(a.caller, "getDataWithCallback", {
                command: "loaded", Rb: function (c) {
                    b(c.vc)
                }
            })
        })
    }, IG = function (a, b) {
        a.bd() && FG(a.caller, "getDataWithCallback", {
            command: "prov", spsp: zl(b), Rb: function () {
            }
        })
    };
    var JG = function (a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }, KG = function (a, b) {
        b = void 0 === b ? {} : b;
        _.V.call(this);
        this.l = a;
        this.g = null;
        this.F = {};
        this.o = 0;
        var c;
        this.K = null != (c = b.timeoutMs) ? c : 500;
        var d;
        this.I = null != (d = b.Wj) ? d : !1;
        this.j = null
    };
    _.T(KG, _.V);
    KG.prototype.A = function () {
        this.F = {};
        this.j && (_.ng(this.l, "message", this.j), delete this.j);
        delete this.F;
        delete this.l;
        delete this.g;
        _.V.prototype.A.call(this)
    };
    var MG = function (a) {
        return "function" === typeof a.l.__tcfapi || null != LG(a)
    };
    KG.prototype.addEventListener = function (a) {
        var b = this, c = {internalBlockOnErrors: this.I}, d = _.Mz(function () {
            return a(c)
        }), e = 0;
        -1 !== this.K && (e = setTimeout(function () {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.K));
        var f = function (g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = JG(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            NG(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    KG.prototype.removeEventListener = function (a) {
        a && a.listenerId && NG(this, "removeEventListener", null, a.listenerId)
    };
    var PG = function (a, b, c) {
        var d = void 0 === d ? "755" : d;
        a:{
            if (a.publisher && a.publisher.restrictions) {
                var e = a.publisher.restrictions[b];
                if (void 0 !== e) {
                    e = e[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        if (0 === e) return !1;
        var f = c;
        2 === c ? (f = 0, 2 === e && (f = 1)) : 3 === c && (f = 1, 1 === e && (f = 0));
        a = 0 === f ? a.purpose && a.vendor ? (c = OG(a.vendor.consents, void 0 === d ? "755" : d)) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : c && OG(a.purpose.consents, b) : !0 : 1 === f ? a.purpose && a.vendor ? OG(a.purpose.legitimateInterests, b) && OG(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return a
    }, OG = function (a, b) {
        return !(!a || !a[b])
    }, NG = function (a, b, c, d) {
        c || (c = function () {
        });
        if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d); else if (LG(a)) {
            QG(a);
            var e = ++a.o;
            a.F[e] = c;
            a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }, LG = function (a) {
        if (a.g) return a.g;
        a.g = GB(a.l, "__tcfapiLocator");
        return a.g
    }, QG = function (a) {
        a.j || (a.j = function (b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.F[c.callId](c.returnValue, c.success)
            } catch (d) {
            }
        }, _.Of(a.l, "message", a.j))
    }, RG = function (a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = JG(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (rg({e: String(a.internalErrorState)}, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }, SG = function (a, b, c) {
        return !1 === a.gdprApplies ? !0 : b.every(function (d) {
            return PG(a, d, c)
        })
    };
    var TG = function (a, b, c) {
        this.g = a;
        this.l = b;
        this.A = void 0 === c ? function () {
        } : c
    }, UG = function (a, b, c) {
        return new TG(a, b, c)
    };
    TG.prototype.start = function (a, b) {
        a = void 0 === a ? !1 : a;
        if (this.g === this.g.top) try {
            zG(this.g), VG(this, a, b)
        } catch (c) {
        }
    };
    var VG = function (a, b, c) {
        b = void 0 === b ? !1 : b;
        var d = {};
        try {
            var e = Ng(a.g), f = Og(a.g);
            d.fc = e;
            d.fctype = f
        } catch (h) {
        }
        try {
            var g = Qg(a.g.location.href)
        } catch (h) {
        }
        b && g && (d.href = g);
        b = WG(a.l, d);
        wg(a.g, b, function () {
            a.A(!0)
        }, function () {
            a.A(!1)
        });
        c && IG(new pr(a.g), c)
    }, WG = function (a, b) {
        var c = new Kx(Ix, "https://fundingchoicesmessages.google.com/i/%{id}");
        b = _.x(Object, "assign").call(Object, {}, b, {ers: 3});
        return _.Px(Sx(c, {id: a}), b)
    };
    var XG = _.A.Promise;
    var YG = function (a) {
        this.A = a
    };
    YG.prototype.send = function (a, b, c) {
        this.A.then(function (d) {
            d.send(a, b, c)
        })
    };
    YG.prototype.g = function (a, b) {
        return this.A.then(function (c) {
            return c.g(a, b)
        })
    };
    var ZG = function (a) {
        this.data = a
    };
    var $G = function (a) {
        this.A = a
    };
    $G.prototype.send = function (a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        aH(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    };
    $G.prototype.g = function (a, b) {
        var c = this;
        return new XG(function (d) {
            c.send(a, d, b)
        })
    };
    var bH = function (a, b) {
        aH(a, b);
        return new $G(a)
    }, aH = function (a, b) {
        b && (a.onmessage = function (c) {
            b(new ZG(c.data, bH(c.ports[0])))
        })
    };
    var sl = function (a) {
        var b = a.ub, c = void 0 === a.Bb ? "ZNWN1d" : a.Bb, d = void 0 === a.onMessage ? void 0 : a.onMessage,
            e = void 0 === a.gf ? void 0 : a.gf;
        return cH({
            destination: a.destination, Xh: function () {
                return b.contentWindow
            }, Il: dH(a.origin), Bb: c, onMessage: d, gf: e
        })
    }, cH = function (a) {
        var b = a.destination, c = a.Xh, d = a.Il, e = void 0 === a.je ? void 0 : a.je, f = a.Bb,
            g = void 0 === a.onMessage ? void 0 : a.onMessage, h = void 0 === a.gf ? void 0 : a.gf,
            k = Object.create(null);
        d.forEach(function (l) {
            k[l] = !0
        });
        return new YG(new XG(function (l, m) {
            var n = function (p) {
                p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(bH(p.ports[0], g)), h && h(p)))
            };
            b.addEventListener("message", n, !1)
        }))
    }, dH = function (a) {
        a = "string" === typeof a ? [a] : a;
        var b = Object.create(null);
        a.forEach(function (c) {
            if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return a
    };
    var hh = function (a) {
        return "string" === typeof a
    }, hp = function (a) {
        return "boolean" === typeof a
    }, dh = function (a) {
        return !!a && ("object" === typeof a || "function" === typeof a)
    }, Ut = fh(), gh = fh();
    var eH = navigator, fH = function (a) {
            var b = 1, c;
            if (void 0 != a && "" != a) for (b = 0, c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
            return b
        }, gH = function (a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return fH(a.toLowerCase())
        }, hH = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        iH = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"), jH = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var kh = function () {
        this.data = [];
        this.g = -1
    };
    kh.prototype.set = function (a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.x(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
    };
    kh.prototype.get = function (a) {
        return !!this.data[a]
    };
    var mh = function (a) {
        -1 === a.g && (a.g = a.data.reduce(function (b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };
    var kH = function (a, b) {
        (0, a.__uspapi)("getUSPData", 1, function (c, d) {
            b.Rb({vc: null != c ? c : void 0, He: d ? void 0 : 2})
        })
    }, lH = {
        Ud: function (a) {
            return a.Rb
        }, fd: function (a, b) {
            a = {};
            return a.__uspapiCall = {callId: b, command: "getUSPData", version: 1}, a
        }, Jc: function (a, b) {
            b = b.__uspapiReturn;
            var c;
            a({vc: null != (c = b.returnValue) ? c : void 0, He: b.success ? void 0 : 2})
        }
    }, mH = function (a, b) {
        b = void 0 === b ? {} : b;
        _.V.call(this);
        var c;
        this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
        this.caller = new CG(a, "__uspapiLocator", function (d) {
            return "function" === typeof d.__uspapi
        }, oh);
        this.caller.F.set("getDataWithCallback", kH);
        this.caller.l.set("getDataWithCallback", lH)
    };
    _.T(mH, _.V);
    mH.prototype.A = function () {
        this.caller.xa();
        _.V.prototype.A.call(this)
    };
    var nH = function (a, b) {
        var c = {};
        if (DG(a.caller)) {
            var d = _.Mz(function () {
                b(c)
            });
            FG(a.caller, "getDataWithCallback", {
                Rb: function (e) {
                    e.He || (c = e.vc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var uh = function (a) {
        this.g = a || {cookie: ""}
    }, oH = function (a) {
        if (!_.t.navigator.cookieEnabled) return !1;
        if (!a.isEmpty()) return !0;
        a.set("TESTCOOKIESENABLED", "1", {Ye: 60});
        if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
        a.remove("TESTCOOKIESENABLED");
        return !0
    };
    _.q = uh.prototype;
    _.q.set = function (a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Co;
            d = c.cj || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Ye
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
        this.g.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "")
    };
    _.q.get = function (a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = yx(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    _.q.remove = function (a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {Ye: 0, path: b, domain: c});
        return d
    };
    _.q.isEmpty = function () {
        return !this.g.cookie
    };
    _.q.clear = function () {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = yx(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };
    var pH = new uh("undefined" == typeof document ? null : document);
    var qH;
    var rH = function (a) {
        this.g = a
    }, sH = function (a, b, c) {
        var d = c.Oi;
        c = c.Pi;
        a = a.g;
        qH || (qH = rh(a) ? oH(new uh(a.document)) : !1);
        a = qH;
        return !a || _.Q(b, 8) || (d || !ph(b)) && c ? !1 : !0
    }, tH = function (a, b, c) {
        var d = _.H(jE), e = c.Oi;
        c = c.Pi;
        d = void 0 === d ? !1 : d;
        if (!_.Q(b, 8) && (!e && ph(b) || !c)) {
            if (d) {
                var f;
                return null != (f = sh("__eoi", a.g)) ? f : void 0
            }
            return (new uh(a.g.document)).get("__eoi") || ""
        }
    };
    var uH = function (a, b) {
        b = b.listener;
        (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
    }, vH = function (a, b) {
        (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
    }, wH = function (a, b) {
        (0, a.__gpp)("getSection", function (c) {
            b.Rb({vc: null != c ? c : void 0, He: c ? void 0 : 4})
        }, b.apiPrefix)
    }, xH = {
        Ud: function (a) {
            return a.listener
        }, fd: function (a, b) {
            a = {};
            return a.__gppCall = {callId: b, command: "addEventListener", version: "1.1"}, a
        }, Jc: function (a, b) {
            b = b.__gppReturn;
            a(b.returnValue, b.success)
        }
    }, yH = {
        Ud: function (a) {
            return a.listener
        }, fd: function (a, b) {
            var c = {};
            return c.__gppCall = {callId: b, command: "removeEventListener", version: "1.1", parameter: a.listenerId}, c
        }, Jc: function (a, b) {
            b = b.__gppReturn;
            var c = b.returnValue.data;
            null == a || a(c, b.success)
        }
    }, zH = {
        Ud: function (a) {
            return a.Rb
        }, fd: function (a, b) {
            var c = {};
            return c.__gppCall = {callId: b, command: "getSection", version: "1.1", parameter: a.apiPrefix}, c
        }, Jc: function (a, b) {
            b = b.__gppReturn;
            var c;
            a({vc: null != (c = b.returnValue) ? c : void 0, He: b.success ? void 0 : 2})
        }
    }, AH = function (a, b) {
        var c = void 0 === b ? {} : b;
        b = c.timeoutMs;
        var d = c.addListenerRemovalCallback;
        c = c.allowEmptyApplicableSection;
        _.V.call(this);
        this.caller = new CG(a, "__gppLocator", function (e) {
            return "function" === typeof e.__gpp
        }, wh);
        this.caller.F.set("addEventListener", uH);
        this.caller.l.set("addEventListener", xH);
        this.caller.F.set("removeEventListener", vH);
        this.caller.l.set("removeEventListener", yH);
        this.caller.F.set("getDataWithCallback", wH);
        this.caller.l.set("getDataWithCallback", zH);
        this.timeoutMs = null != b ? b : 500;
        this.addListenerRemovalCallback = d;
        this.allowEmptyApplicableSection = c
    };
    _.T(AH, _.V);
    AH.prototype.A = function () {
        this.caller.xa();
        _.V.prototype.A.call(this)
    };
    AH.prototype.addEventListener = function (a) {
        var b = this, c = _.Mz(function () {
            a(BH, !0)
        }), d = -1 === this.timeoutMs ? void 0 : setTimeout(function () {
            c()
        }, this.timeoutMs);
        FG(this.caller, "addEventListener", {
            listener: function (e, f) {
                clearTimeout(d);
                try {
                    var g;
                    if (void 0 === (null == (g = e.pingData) ? void 0 : g.gppVersion) || "1" === e.pingData.gppVersion || "1.0" === e.pingData.gppVersion) {
                        b.removeEventListener(e.listenerId);
                        var h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else !Array.isArray(e.pingData.applicableSections) || 0 === e.pingData.applicableSections.length && !b.allowEmptyApplicableSection ? (b.removeEventListener(e.listenerId), h = {
                        eventName: "signalStatus",
                        data: "ready",
                        pingData: {
                            internalErrorState: 2,
                            gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                            applicableSections: [-1]
                        }
                    }) : h = e;
                    a(h, f)
                } catch (k) {
                    if (null == e ? 0 : e.listenerId) try {
                        b.removeEventListener(e.listenerId)
                    } catch (l) {
                        a(CH, !0);
                        return
                    }
                    a(DH, !0)
                }
            }
        })
    };
    AH.prototype.removeEventListener = function (a) {
        FG(this.caller, "removeEventListener", {
            listener: this.addListenerRemovalCallback ? function () {
            } : void 0, listenerId: a
        })
    };
    var EH = function (a) {
        if (!a) return !1;
        var b = dg(a.split("~")[0]), c = eg(b.slice(0, 6)), d = eg(b.slice(6, 12)), e = new mC;
        var f = _.Sl(e, 1, c);
        var g = _.Sl(f, 2, d);
        for (var h = b.slice(12), k = eg(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
            if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
            var p = 0 === eg(m[0]);
            m = m.slice(1);
            var r = hg(m, h), v = 0 === l.length ? 0 : l[l.length - 1], w = fg(r) + v;
            m = m.slice(r.length);
            if (p) l.push(w); else {
                for (var z = hg(m, h), y = fg(z), C = 0; C <= y; C++) l.push(w + C);
                m = m.slice(z.length)
            }
        }
        if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
        var G = _.ue(g, 3, l, Ec);
        var D = _.x(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
        for (var M = 0; M < ne(G, 3, Jc, 2).length; ++M) {
            var S = ne(G, 3, Jc, 2)[M], P = D[M];
            switch (S) {
                case 8:
                    if (0 === P.length) throw Error("Cannot decode empty USCA section string.");
                    var aa = P.split(".");
                    if (2 < aa.length) throw Error("Expected at most 1 sub-section but got " + (aa.length - 1) + " when decoding " + P + ".");
                    var ka = void 0, ma = void 0, ja = void 0, Ga = void 0, ta = void 0, Ba = void 0, Ka = void 0,
                        Wa = void 0, eb = void 0, Ta = void 0, bc = void 0, Fc = void 0, Zb = void 0, mc = void 0,
                        cc = void 0, dc = void 0, Oc = void 0, Pc = void 0, uf = void 0, Ae = void 0, Kd = void 0,
                        Be = void 0, Ag = void 0, Bg = aa[0];
                    if (0 === Bg.length) throw Error("Cannot decode empty core segment string.");
                    var Qc = gg(Bg, uC), Ld = eg(Qc.slice(0, 6));
                    Qc = Qc.slice(6);
                    if (1 !== Ld) throw Error("Unable to decode unsupported USCA Section specification version " + Ld + " - only version 1 is supported.");
                    for (var Md = 0, ab = [], Ob = 0; Ob < tC.length; Ob++) {
                        var vf = tC[Ob];
                        ab.push(eg(Qc.slice(Md, Md + vf)));
                        Md += vf
                    }
                    var Ce = new pC;
                    Ag = _.Sl(Ce, 1, Ld);
                    var Cg = ab.shift();
                    Be = _.K(Ag, 2, Cg);
                    var kd = ab.shift();
                    Kd = _.K(Be, 3, kd);
                    var wf = ab.shift();
                    Ae = _.K(Kd, 4, wf);
                    var sj = ab.shift();
                    uf = _.K(Ae, 5, sj);
                    var tj = ab.shift();
                    Pc = _.K(uf, 6, tj);
                    var Dg = new oC, Eh = ab.shift();
                    Oc = _.K(Dg, 1, Eh);
                    var Eg = ab.shift();
                    dc = _.K(Oc, 2, Eg);
                    var Fh = ab.shift();
                    cc = _.K(dc, 3, Fh);
                    var Fg = ab.shift();
                    mc = _.K(cc, 4, Fg);
                    var De = ab.shift();
                    Zb = _.K(mc, 5, De);
                    var Gh = ab.shift();
                    Fc = _.K(Zb, 6, Gh);
                    var Hh = ab.shift();
                    bc = _.K(Fc, 7, Hh);
                    var Ih = ab.shift();
                    Ta = _.K(bc, 8, Ih);
                    var Jh = ab.shift();
                    eb = _.K(Ta, 9, Jh);
                    Wa = _.Ai(Pc, 7, eb);
                    var Kh = new nC, Nd = ab.shift();
                    Ka = _.K(Kh, 1, Nd);
                    var Lh = ab.shift();
                    Ba = _.K(Ka, 2, Lh);
                    ta = _.Ai(Wa, 8, Ba);
                    var ld = ab.shift();
                    Ga = _.K(ta, 9, ld);
                    var Mh = ab.shift();
                    ja = _.K(Ga, 10, Mh);
                    var xf = ab.shift();
                    ma = _.K(ja, 11, xf);
                    var Gc = ab.shift();
                    var yf = ka = _.K(ma, 12, Gc);
                    if (1 === aa.length) var zf = sC(yf); else {
                        var Rc = sC(yf), Gg = void 0, Hg = void 0, Ig = void 0, Af = aa[1];
                        if (0 === Af.length) throw Error("Cannot decode empty GPC segment string.");
                        var Sc = gg(Af, 3), Bf = eg(Sc.slice(0, 2));
                        if (0 > Bf || 1 < Bf) throw Error("Attempting to decode unknown GPC segment subsection type " + Bf + ".");
                        Ig = Bf + 1;
                        var Nh = eg(Sc.charAt(2)), Ee = new qC;
                        Hg = _.K(Ee, 2, Ig);
                        Gg = _.Rl(Hg, 1, !!Nh);
                        zf = _.Ai(Rc, 2, Gg)
                    }
                    var md = _.Um(zf, pC, 1);
                    if (1 === _.tg(md, 5, 0) || 1 === _.tg(md, 6, 0)) return !0;
                    break;
                case 10:
                    if (0 === P.length) throw Error("Cannot decode empty USCO section string.");
                    var nd = P.split(".");
                    if (2 < nd.length) throw Error("Expected at most 2 segments but got " + nd.length + " when decoding " + P + ".");
                    var Pb = void 0, Cf = void 0, Jg = void 0, Df = void 0, Kg = void 0, Oh = void 0, Lg = void 0,
                        Od = void 0, Fe = void 0, Hc = void 0, Ge = void 0, Ef = void 0, Mg = void 0, Ic = void 0,
                        Ff = void 0, Ph = void 0, Gf = void 0, Hf = void 0, ec = nd[0];
                    if (0 === ec.length) throw Error("Cannot decode empty core segment string.");
                    var Pd = gg(ec, BC), Qd = eg(Pd.slice(0, 6));
                    Pd = Pd.slice(6);
                    if (1 !== Qd) throw Error("Unable to decode unsupported USCO Section specification version " + Qd + " - only version 1 is supported.");
                    for (var He = 0, xb = [], fi = 0; fi < AC.length; fi++) {
                        var Rj = AC[fi];
                        xb.push(eg(Pd.slice(He, He + Rj)));
                        He += Rj
                    }
                    var sn = new wC;
                    Hf = _.Sl(sn, 1, Qd);
                    var tn = xb.shift();
                    Gf = _.K(Hf, 2, tn);
                    var Sj = xb.shift();
                    Ph = _.K(Gf, 3, Sj);
                    var un = xb.shift();
                    Ff = _.K(Ph, 4, un);
                    var vn = xb.shift();
                    Ic = _.K(Ff, 5, vn);
                    var Tj = xb.shift();
                    Mg = _.K(Ic, 6, Tj);
                    var wn = new vC, Uj = xb.shift();
                    Ef = _.K(wn, 1, Uj);
                    var xn = xb.shift();
                    Ge = _.K(Ef, 2, xn);
                    var Vj = xb.shift();
                    Hc = _.K(Ge, 3, Vj);
                    var yn = xb.shift();
                    Fe = _.K(Hc, 4, yn);
                    var zn = xb.shift();
                    Od = _.K(Fe, 5, zn);
                    var Sg = xb.shift();
                    Lg = _.K(Od, 6, Sg);
                    var aV = xb.shift();
                    Oh = _.K(Lg, 7, aV);
                    Kg = _.Ai(Mg, 7, Oh);
                    var bV = xb.shift();
                    Df = _.K(Kg, 8, bV);
                    var cV = xb.shift();
                    Jg = _.K(Df, 9, cV);
                    var dV = xb.shift();
                    Cf = _.K(Jg, 10, dV);
                    var eV = xb.shift();
                    var iF = Pb = _.K(Cf, 11, eV);
                    if (1 === nd.length) var jF = zC(iF); else {
                        var fV = zC(iF), kF = void 0, lF = void 0, mF = void 0, nF = nd[1];
                        if (0 === nF.length) throw Error("Cannot decode empty GPC segment string.");
                        var oF = gg(nF, 3), An = eg(oF.slice(0, 2));
                        if (0 > An || 1 < An) throw Error("Attempting to decode unknown GPC segment subsection type " + An + ".");
                        mF = An + 1;
                        var gV = eg(oF.charAt(2)), hV = new xC;
                        lF = _.K(hV, 2, mF);
                        kF = _.Rl(lF, 1, !!gV);
                        jF = _.Ai(fV, 2, kF)
                    }
                    var pF = _.Um(jF, wC, 1);
                    if (1 === _.tg(pF, 5, 0) || 1 === _.tg(pF, 6, 0)) return !0;
                    break;
                case 12:
                    if (0 === P.length) throw Error("Cannot decode empty usct section string.");
                    var Wj = P.split(".");
                    if (2 < Wj.length) throw Error("Expected at most 2 segments but got " + Wj.length + " when decoding " + P + ".");
                    var iV = void 0, qF = void 0, rF = void 0, sF = void 0, tF = void 0, uF = void 0, vF = void 0,
                        wF = void 0, xF = void 0, yF = void 0, zF = void 0, AF = void 0, BF = void 0, CF = void 0,
                        DF = void 0, EF = void 0, FF = void 0, GF = void 0, HF = void 0, IF = void 0, JF = void 0,
                        KF = void 0, LF = Wj[0];
                    if (0 === LF.length) throw Error("Cannot decode empty core segment string.");
                    var Bn = gg(LF, JC), au = eg(Bn.slice(0, 6));
                    Bn = Bn.slice(6);
                    if (1 !== au) throw Error("Unable to decode unsupported USCT Section specification version " + au + " - only version 1 is supported.");
                    for (var bu = 0, Db = [], cu = 0; cu < IC.length; cu++) {
                        var MF = IC[cu];
                        Db.push(eg(Bn.slice(bu, bu + MF)));
                        bu += MF
                    }
                    var jV = new EC;
                    KF = _.Sl(jV, 1, au);
                    var kV = Db.shift();
                    JF = _.K(KF, 2, kV);
                    var lV = Db.shift();
                    IF = _.K(JF, 3, lV);
                    var mV = Db.shift();
                    HF = _.K(IF, 4, mV);
                    var nV = Db.shift();
                    GF = _.K(HF, 5, nV);
                    var oV = Db.shift();
                    FF = _.K(GF, 6, oV);
                    var pV = new DC, qV = Db.shift();
                    EF = _.K(pV, 1, qV);
                    var rV = Db.shift();
                    DF = _.K(EF, 2, rV);
                    var sV = Db.shift();
                    CF = _.K(DF, 3, sV);
                    var tV = Db.shift();
                    BF = _.K(CF, 4, tV);
                    var uV = Db.shift();
                    AF = _.K(BF, 5, uV);
                    var vV = Db.shift();
                    zF = _.K(AF, 6, vV);
                    var wV = Db.shift();
                    yF = _.K(zF, 7, wV);
                    var xV = Db.shift();
                    xF = _.K(yF, 8, xV);
                    wF = _.Ai(FF, 7, xF);
                    var yV = new CC, zV = Db.shift();
                    vF = _.K(yV, 1, zV);
                    var AV = Db.shift();
                    uF = _.K(vF, 2, AV);
                    var BV = Db.shift();
                    tF = _.K(uF, 3, BV);
                    sF = _.Ai(wF, 8, tF);
                    var CV = Db.shift();
                    rF = _.K(sF, 9, CV);
                    var DV = Db.shift();
                    qF = _.K(rF, 10, DV);
                    var EV = Db.shift();
                    var NF = iV = _.K(qF, 11, EV);
                    if (1 === Wj.length) var OF = HC(NF); else {
                        var FV = HC(NF), PF = void 0, QF = void 0, RF = void 0, SF = Wj[1];
                        if (0 === SF.length) throw Error("Cannot decode empty GPC segment string.");
                        var TF = gg(SF, 3), Cn = eg(TF.slice(0, 2));
                        if (0 > Cn || 1 < Cn) throw Error("Attempting to decode unknown GPC segment subsection type " + Cn + ".");
                        RF = Cn + 1;
                        var GV = eg(TF.charAt(2)), HV = new FC;
                        QF = _.K(HV, 2, RF);
                        PF = _.Rl(QF, 1, !!GV);
                        OF = _.Ai(FV, 2, PF)
                    }
                    var UF = _.Um(OF, EC, 1);
                    if (1 === _.tg(UF, 5, 0) || 1 === _.tg(UF, 6, 0)) return !0;
                    break;
                case 9:
                    if (0 === P.length) throw Error("Cannot decode empty USVA section string.");
                    var Dn = gg(P, NC), du = eg(Dn.slice(0, 6));
                    Dn = Dn.slice(6);
                    if (1 !== du) throw Error("Unable to decode unsupported USVA Section specification version " + du + " - only version 1 is supported.");
                    for (var eu = 0, Sb = [], fu = 0; fu < MC.length; fu++) {
                        var VF = MC[fu];
                        Sb.push(eg(Dn.slice(eu, eu + VF)));
                        eu += VF
                    }
                    var IV = du, JV = new LC, KV = _.Sl(JV, 1, IV), LV = Sb.shift(), MV = _.K(KV, 2, LV),
                        NV = Sb.shift(), OV = _.K(MV, 3, NV), PV = Sb.shift(), QV = _.K(OV, 4, PV), RV = Sb.shift(),
                        SV = _.K(QV, 5, RV), TV = Sb.shift();
                    var UV = _.K(SV, 6, TV);
                    var VV = new KC, WV = Sb.shift(), XV = _.K(VV, 1, WV), YV = Sb.shift(), ZV = _.K(XV, 2, YV),
                        $V = Sb.shift(), aW = _.K(ZV, 3, $V), bW = Sb.shift(), cW = _.K(aW, 4, bW), dW = Sb.shift(),
                        eW = _.K(cW, 5, dW), fW = Sb.shift(), gW = _.K(eW, 6, fW), hW = Sb.shift(), iW = _.K(gW, 7, hW),
                        jW = Sb.shift();
                    var kW = _.K(iW, 8, jW);
                    var lW = _.Ai(UV, 7, kW), mW = Sb.shift(), nW = _.K(lW, 8, mW), oW = Sb.shift(),
                        pW = _.K(nW, 9, oW), qW = Sb.shift(), rW = _.K(pW, 10, qW), sW = Sb.shift(),
                        WF = _.K(rW, 11, sW);
                    if (1 === _.tg(WF, 5, 0) || 1 === _.tg(WF, 6, 0)) return !0
            }
        }
        return !1
    }, DH = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {internalErrorState: 2, gppString: "GPP_ERROR_STRING_UNAVAILABLE", applicableSections: [-1]},
        listenerId: -1
    }, BH = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    }, CH = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    };
    var bp = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, bp.prototype)
    };
    _.T(bp, Error);
    bp.prototype.name = "PublisherInputError";
    var FH = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, FH.prototype)
    };
    _.T(FH, Error);
    FH.prototype.name = "ServerError";
    var GH = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, GH.prototype)
    };
    _.T(GH, Error);
    GH.prototype.name = "NetworkError";
    var zh = function () {
    };
    zh.prototype.g = function () {
    };
    zh.prototype.l = function () {
    };
    zh.prototype.A = function () {
        return []
    };
    zh.prototype.j = function () {
        return []
    };
    var Yh = function (a, b) {
        a.g = yh(1, b, function () {
        });
        a.A = function (c, d) {
            return yh(2, b, function () {
                return []
            })(c, 2, d)
        };
        a.j = function () {
            return yh(3, b, function () {
                return []
            })(2)
        };
        a.l = function (c) {
            yh(16, b, function () {
            })(c, 2)
        }
    };
    var Wh = function () {
        this.g = function () {
        }
    }, $h = function (a, b) {
        a.g = yh(14, b, function () {
        })
    };
    var $m = function (a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.ln(b.innerWidth, b.innerHeight)).round() : _.kB(b || window).round()
        } catch (d) {
            return new _.ln(-12245933, -12245933)
        }
    }, HH = function (a) {
        a = void 0 === a ? _.t : a;
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }, IH = function (a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    }, sv = function (a, b) {
        b = void 0 === b ? _.t : b;
        a = a.scrollingElement || IH(a);
        return new _.gn(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }, Hn = function (a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var JH = function (a) {
        this.D = _.B(a)
    };
    _.T(JH, _.E);
    JH.prototype.ei = function () {
        return _.Zi(this, 1)
    };
    JH.prototype.di = function () {
        return _.Zi(this, 2)
    };
    var ph = function (a) {
        return _.Q(a, 5)
    }, KH = function (a, b) {
        qi(a, 13, b)
    }, LH = function (a, b) {
        qi(a, 12, b)
    }, MH = function (a, b) {
        return _.ue(a, 10, b, _.Vc)
    }, NH = function (a, b) {
        return Ji(a, 11, b)
    };
    JH.prototype.ai = function () {
        return _.Zi(this, 11)
    };
    JH.da = [10];
    var PH, QH, RH;
    _.OH = function (a) {
        this.g = a;
        this.A = 0
    };
    PH = function (a, b) {
        if (0 === a.A) {
            if (_.po(a, "__gads", b)) b = !0; else {
                var c = a.g;
                ph(b) && vh("GoogleAdServingTest", "Good", void 0, c);
                if (c = "Good" === th("GoogleAdServingTest", b, a.g)) {
                    var d = a.g;
                    ph(b) && rh(d) && (new uh(d.document)).remove("GoogleAdServingTest", void 0, void 0)
                }
                b = c
            }
            a.A = b ? 2 : 1
        }
        return 2 === a.A
    };
    _.po = function (a, b, c) {
        return c ? th(b, c, a.g) : null
    };
    QH = function (a, b, c, d) {
        if (d) {
            var e = _.Ug(c, 2) - Date.now() / 1E3;
            e = {Ye: Math.max(e, 0), path: _.F(c, 3), domain: _.F(c, 4), cj: !1};
            c = c.getValue();
            a = a.g;
            ph(d) && vh(b, c, e, a)
        }
    };
    RH = function (a, b, c) {
        if (c && th(b, c, a.g)) {
            var d = a.g.location.hostname;
            if ("localhost" === d) d = ["localhost"]; else if (d = d.split("."), 2 > d.length) d = []; else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.u(d);
            for (var g = d.next(); !g.done; g = d.next()) e = b, f = a.g, g = g.value, ph(c) && rh(f) && (new uh(f.document)).remove(e, "/", g)
        }
    };
    var SH = {},
        TH = (SH[3] = tf(Lx(new Kx(Ix, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), SH);
    ({})[3] = tf(Lx(new Kx(Ix, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var UH = function (a) {
        this.g = a;
        this.A = py()
    }, VH = function (a) {
        var b = {};
        _.Yx(a, function (c) {
            b[c.g] = c.A
        });
        return b
    };
    _.WH = _.Rw(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var XH = function (a, b, c, d, e, f) {
        _.V.call(this);
        this.Bb = a;
        this.status = 1;
        this.j = b;
        this.l = c;
        this.H = d;
        this.Qd = !!e;
        this.F = Math.random();
        this.I = {};
        this.g = null;
        this.K = (0, _.ux)(this.C, this);
        this.U = f
    };
    _.T(XH, _.V);
    XH.prototype.C = function (a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.Qd && a.source != this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {
            }
            if (_.Ma(b) && (a = b.i, b.c === this.Bb && a != this.F)) {
                if (2 !== this.status) try {
                    this.status = 2, YH(this), this.g && (this.g(), this.g = null)
                } catch (c) {
                }
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.Ma(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var YH = function (a) {
        var b = {};
        b.c = a.Bb;
        b.i = a.F;
        a.U && (b.e = a.U);
        a.j.postMessage(JSON.stringify(b), a.l)
    };
    XH.prototype.o = function () {
        if (1 === this.status) {
            try {
                this.j.postMessage && YH(this)
            } catch (a) {
            }
            window.setTimeout((0, _.ux)(this.o, this), 50)
        }
    };
    XH.prototype.connect = function (a) {
        a && (this.g = a);
        _.Of(window, "message", this.K);
        this.H && this.o()
    };
    var ZH = function (a, b, c) {
        a.I[b] = c
    };
    XH.prototype.send = function (a, b) {
        var c = {};
        c.c = this.Bb;
        c.i = this.F;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(JSON.stringify(c), this.l)
        } catch (d) {
        }
    };
    XH.prototype.A = function () {
        this.status = 3;
        _.ng(window, "message", this.K);
        _.V.prototype.A.call(this)
    };
    var bi = new _.A.Map([["navigate", 1], ["reload", 2], ["back_forward", 3], ["prerender", 4]]),
        ci = new _.A.Map([[0, 1], [1, 2], [2, 3]]);
    var $H = function (a) {
        this.D = _.B(a)
    };
    _.T($H, _.E);
    var aI = rf($H);
    var bI = function (a) {
        this.D = _.B(a)
    };
    _.T(bI, _.E);
    var cI = function (a) {
        this.D = _.B(a)
    };
    _.T(cI, _.E);
    var dI, eI, fI, gI;
    _.qs = function (a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    dI = function (a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    eI = function (a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    fI = function (a, b) {
        if (3 == _.qs(b)) return !1;
        a();
        return !0
    };
    gI = function (a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        if (!fI(a, b)) if (c) {
            var d = function () {
                _.ng(b, "prerenderingchange", d);
                a()
            };
            _.Of(b, "prerenderingchange", d)
        } else {
            var e = !1, f = dI(b), g = function () {
                !e && fI(a, b) && (e = !0, _.ng(b, f, g))
            };
            f && _.Of(b, f, g)
        }
    };
    _.ei = function () {
        var a = this;
        this.promise = new _.A.Promise(function (b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.hI = function () {
        this.g = Math.random()
    };
    _.xj = function (a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .001)) try {
            if (c instanceof _.YC) var f = c; else f = new _.YC, _.io(c, function (h, k) {
                var l = f, m = l.j++;
                h = _.ZC(k, h);
                l.g.push(m);
                l.A[m] = h
            });
            var g = cD(f, "/pagead/gen_204?id=" + b + "&");
            g && dD(_.t, g)
        } catch (h) {
        }
    };
    var Wi = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/, Ui = new _.A.Map;
    var iI = function (a) {
        this.D = _.B(a)
    };
    _.T(iI, _.E);
    var jI = function (a) {
        this.D = _.B(a)
    };
    _.T(jI, _.E);
    var kI = function (a, b) {
        return _.ue(a, 1, b, _.fd)
    };
    jI.da = [1];
    var lI = function (a) {
        this.D = _.B(a)
    };
    _.T(lI, _.E);
    var mI = function (a, b) {
        return _.ue(a, 1, b, Kc)
    };
    lI.da = [1, 2];
    var nI = function (a) {
        this.D = _.B(a)
    };
    _.T(nI, _.E);
    var oI = function (a) {
        this.D = _.B(a)
    };
    _.T(oI, _.E);
    var pI = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, pI.prototype);
        this.name = "InputError"
    };
    _.T(pI, Error);
    var qI = function () {
        this.ib = !1
    }, rI = function () {
        qI.apply(this, arguments);
        this.od = new _.ei
    };
    _.T(rI, qI);
    var sI = function (a, b) {
        a.ib || (a.ib = !0, a.be = b, a.od.resolve(b))
    };
    _.Mw.Object.defineProperties(rI.prototype, {
        promise: {
            configurable: !0, enumerable: !0, get: function () {
                return this.od.promise
            }
        }, Oc: {
            configurable: !0, enumerable: !0, get: function () {
                return this.ib
            }
        }, error: {
            configurable: !0, enumerable: !0, get: function () {
                return this.ae
            }
        }
    });
    var Gq = function () {
        rI.apply(this, arguments)
    };
    _.T(Gq, rI);
    _.q = Gq.prototype;
    _.q.G = function (a) {
        sI(this, a)
    };
    _.q.Ha = function (a) {
        sI(this, null != a ? a : null)
    };
    _.q.ba = function () {
        sI(this, null)
    };
    _.q.Ka = function (a) {
        var b = this;
        a.then(function (c) {
            sI(b, c)
        })
    };
    _.q.kb = function (a) {
        this.ib || (this.ib = !0, this.be = null, this.ae = a, this.od.reject(a))
    };
    var tI = function () {
        rI.apply(this, arguments)
    };
    _.T(tI, rI);
    tI.prototype.G = function (a) {
        sI(this, a)
    };
    tI.prototype.Ka = function (a) {
        var b = this;
        a.then(function (c) {
            return void sI(b, c)
        })
    };
    tI.prototype.kb = function (a) {
        this.ib || (this.ib = !0, this.ae = a, this.od.reject(a))
    };
    var uI = function () {
        tI.apply(this, arguments)
    };
    _.T(uI, tI);
    uI.prototype.Ha = function (a) {
        sI(this, null != a ? a : null)
    };
    uI.prototype.ba = function () {
        sI(this, null)
    };
    uI.prototype.Ka = function (a) {
        var b = this;
        a.then(function (c) {
            return void b.Ha(c)
        })
    };
    var vI = function (a) {
        this.ib = !1;
        this.Yb = a
    };
    _.T(vI, qI);
    vI.prototype.Oc = function () {
        return this.Yb.ib
    };
    vI.prototype.kg = function () {
        return null != this.Yb.be
    };
    _.Mw.Object.defineProperties(vI.prototype, {
        error: {
            configurable: !0, enumerable: !0, get: function () {
                return this.Yb.ae
            }
        }
    });
    var wI = function (a) {
        vI.call(this, a);
        this.Yb = a
    };
    _.T(wI, vI);
    _.Mw.Object.defineProperties(wI.prototype, {
        value: {
            configurable: !0, enumerable: !0, get: function () {
                return this.Yb.be
            }
        }
    });
    var xI = function (a) {
        vI.call(this, a);
        this.Yb = a
    };
    _.T(xI, vI);
    _.Mw.Object.defineProperties(xI.prototype, {
        value: {
            configurable: !0, enumerable: !0, get: function () {
                var a;
                return null != (a = this.Yb.be) ? a : null
            }
        }
    });
    var yI = function () {
        vI.apply(this, arguments)
    };
    _.T(yI, vI);
    _.Mw.Object.defineProperties(yI.prototype, {
        value: {
            configurable: !0, enumerable: !0, get: function () {
                var a;
                return null != (a = this.Yb.be) ? a : null
            }
        }
    });
    var rs = function () {
        rI.apply(this, arguments)
    };
    _.T(rs, rI);
    rs.prototype.notify = function () {
        sI(this, null)
    };
    var zI = function (a, b) {
        b.then(function () {
            a.notify()
        })
    }, AI = function (a, b) {
        b = void 0 === b ? !1 : b;
        rI.call(this);
        var c = this;
        a = a.map(function (d) {
            return d.promise.then(function (e) {
                if (b || null != e) return e;
                throw e;
            }, function (e) {
                c.ib = !0;
                c.ae = e;
                c.od.reject(e);
                return null
            })
        });
        _.x(_.A.Promise, "any").call(_.A.Promise, a).then(function (d) {
            c.ib || sI(c, d)
        }, function () {
            c.ib || sI(c, null)
        })
    };
    _.T(AI, rI);
    var BI = function () {
        _.V.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    _.T(BI, _.V);
    var CI = function (a, b, c) {
        a.j.push({Cd: void 0 === c ? !1 : c, Kh: b})
    };
    BI.prototype.A = function () {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        _.V.prototype.A.call(this)
    };
    var DI = function (a, b, c) {
        _.V.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.na = c;
        this.started = !1;
        this.F = new BI;
        _.R(this, this.F)
    };
    _.T(DI, _.V);
    DI.prototype.start = function () {
        var a = this, b;
        return _.Qf(function (c) {
            if (1 == c.g) {
                if (a.started) return c.return();
                a.started = !0;
                c.l = 2;
                return c.yield(bj(a.F.j, a.timeoutMs), 4)
            }
            if (2 != c.g) {
                if (!a.L) {
                    for (var d = 0, e = _.u(a.F.l), f = e.next(); !f.done; f = e.next()) {
                        if (!f.value.kg()) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    a.g()
                }
                c.g = 0;
                c.l = 0
            } else {
                b = Sf(c);
                if (a.L) return c.return();
                b instanceof pI ? a.K(b) : b instanceof Error && (a.na ? a.na(a.id, b) : a.I(b), a.l(b));
                c.g = 0
            }
        })
    };
    var W = function (a, b) {
        b = void 0 === b ? new Gq : b;
        a.F.g.push(b);
        return b
    }, EI = function (a) {
        var b = void 0 === b ? new uI : b;
        a.F.g.push(b);
        return b
    }, FI = function (a, b) {
        b = void 0 === b ? new rs : b;
        a.F.g.push(b);
        return b
    }, X = function (a, b) {
        CI(a.F, b);
        b = new wI(b);
        a.F.l.push(b);
        return b
    }, Y = function (a, b) {
        CI(a.F, b);
        return new xI(b)
    }, GI = function (a, b) {
        CI(a.F, b, !0);
        return new xI(b)
    }, HI = function (a, b) {
        CI(a.F, b)
    }, II = function (a, b) {
        b = new AI(b);
        CI(a.F, b);
        b = new wI(b);
        a.F.l.push(b);
        return b
    };
    DI.prototype.K = function () {
    };
    DI.prototype.l = function (a) {
        if (!this.na && this.F.g.length) {
            a = new pI(a.message);
            for (var b = _.u(this.F.g), c = b.next(); !c.done; c = b.next()) if (c = c.value, !c.Oc) {
                var d = a;
                c.ib = !0;
                c.ae = d;
                c.od.reject(d)
            }
        }
    };
    var JI = function (a, b, c, d, e, f) {
        DI.call(this, a, e, f);
        this.f = b;
        this.C = d;
        a = {};
        c = _.u(_.x(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next()) d = _.u(b.value), b = d.next().value, (d = d.next().value) && (a[b] = Y(this, d));
        this.o = a
    };
    _.T(JI, DI);
    JI.prototype.g = function () {
        for (var a = this.f, b = {}, c = _.u(_.x(Object, "entries").call(Object, this.o)), d = c.next(); !d.done; d = c.next()) {
            var e = _.u(d.value);
            d = e.next().value;
            e = e.next().value;
            b[d] = e.value
        }
        a = a.call(this, b, this.C);
        this.j(a)
    };
    JI.prototype.I = function () {
    };
    var rr = function (a, b, c, d, e, f) {
        JI.call(this, a, b, c, d, e, f);
        this.output = W(this, new Gq)
    };
    _.T(rr, JI);
    rr.prototype.j = function (a) {
        this.output.Ka(a)
    };
    var KI = function (a, b, c, d, e, f, g) {
        JI.call(this, a, b, c, d, f, g);
        this.finished = new rs;
        a = _.x(Object, "keys").call(Object, e);
        a = _.u(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = W(this)
    };
    _.T(KI, JI);
    KI.prototype.j = function (a) {
        a = _.u(_.x(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.u(b.value);
            b = c.next().value;
            c = c.next().value;
            sI(this[b], c)
        }
        this.finished.notify()
    };
    var LI = function (a) {
        this.g = void 0 === a ? function () {
        } : a
    };
    var Mk = function (a) {
        a = void 0 === a ? new LI : a;
        _.V.call(this);
        this.C = a;
        this.F = [];
        this.I = [];
        this.H = {};
        this.l = [];
        this.j = new _.ei;
        this.g = {}
    };
    _.T(Mk, _.V);
    var J = function (a, b) {
        _.R(a, b);
        a.F.push(b);
        return b
    }, el = function (a, b) {
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next()) J(a, c.value)
    }, MI = function (a, b, c, d, e, f) {
        b = new KI(b, c, d, e, f, void 0, a.C.g);
        return J(a, b)
    }, Hu = function (a, b) {
        a.I.push(b);
        _.R(a, b)
    }, NI = function (a) {
        var b, c, d, e, f, g, h, k, l, m, n, p;
        return _.Qf(function (r) {
            switch (r.g) {
                case 1:
                    if (!a.l.length) {
                        r.g = 2;
                        break
                    }
                    return r.yield(_.A.Promise.all(a.l.map(function (v) {
                        return v.j.promise
                    })), 2);
                case 2:
                    b = _.u(a.F);
                    for (c = b.next(); !c.done; c = b.next()) d = c.value, d.start();
                    e = _.u(a.I);
                    for (f = e.next(); !f.done; f = e.next()) g = f.value, NI(g);
                    if (!a.g) {
                        r.g = 4;
                        break
                    }
                    h = _.x(Object, "keys").call(Object, a.g);
                    if (!h.length) {
                        r.g = 4;
                        break
                    }
                    return r.yield(_.A.Promise.all(_.x(Object, "values").call(Object, a.g).map(function (v) {
                        return v.promise
                    })), 6);
                case 6:
                    for (k = r.A, l = 0, m = _.u(h), n = m.next(); !n.done; n = m.next()) p = n.value, a.H[p] = k[l++];
                case 4:
                    return a.j.resolve(a.H), r.return(a.j.promise)
            }
        })
    };
    Mk.prototype.run = function () {
        NI(this)
    };
    Mk.prototype.A = function () {
        _.V.prototype.A.call(this);
        this.F.length = 0;
        this.I.length = 0;
        this.l.length = 0
    };
    var OI = function (a) {
        this.D = _.B(a)
    };
    _.T(OI, _.E);
    OI.da = [1];
    var PI = [0, Fz, rA];
    var QI = function (a) {
        this.D = _.B(a)
    };
    _.T(QI, _.E);
    QI.da = [1, 2];
    QI.prototype.g = qf([0, Fz, rA, Fz, PI]);
    _.Wq = 728 * 1.38;
    var SI, RI;
    SI = function () {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new RI;
        this.sideRailProcessedFixedElements = new _.A.Set;
        this.sideRailAvailableSpace = new _.A.Map;
        this.sideRailPlasParam = new _.A.Map;
        this.A = [];
        this.g = null
    };
    _.ck = function (a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.A.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.A.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.A.Map)) : a.google_reactive_ads_global_state = new SI;
        return a.google_reactive_ads_global_state
    };
    RI = function () {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var WI, YI, UI;
    _.TI = function (a) {
        this.g = _.ck(a).floatingAdsStacking
    };
    _.VI = function (a, b) {
        return new UI(a, b)
    };
    WI = function (a) {
        a = _.yB(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.XI = function (a, b) {
        a.g.maxZIndexListeners.push(b);
        b(WI(a))
    };
    YI = function (a) {
        var b = WI(a);
        _.Yx(a.g.maxZIndexListeners, function (c) {
            return c(b)
        })
    };
    UI = function (a, b) {
        this.A = a;
        this.l = b;
        this.g = null
    };
    _.ZI = function (a) {
        if (null == a.g) {
            var b = a.A, c = a.l, d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            YI(b);
            a.g = d
        }
    };
    _.$I = function (a) {
        if (null != a.g) {
            var b = a.A;
            delete b.g.maxZIndexRestrictions[a.g];
            YI(b);
            a.g = null
        }
    };
    var qj, aJ;
    _.vj = function (a, b) {
        b = void 0 === b ? {} : b;
        this.oa = a;
        this.Fa = b
    };
    _.bJ = function (a, b) {
        var c = nj(a.oa.document, b);
        if (c) {
            var d;
            if (!(d = aJ(a, c, b))) a:{
                d = a.oa.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = aJ(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    };
    qj = function (a, b) {
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next()) if (c = _.bJ(a, c.value)) return c;
        return null
    };
    aJ = function (a, b, c) {
        if ("fixed" !== cC(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.jn(_.hC, b).width && 1 >= _.jn(_.hC, b).height || a.Fa.Hk && !a.Fa.Hk(b) ? !0 : !1;
        a.Fa.Rh && a.Fa.Rh(b, c, d);
        return d ? null : b
    };
    var pj = 90 * 1.38;
    var Bj = function (a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (c) {
            return !1
        }
    };
    var cJ, dJ, eJ;
    cJ = _.Rw(["* { pointer-events: none; }"]);
    dJ = function (a, b) {
        var c = _.mg("STYLE", a);
        c.textContent = _.cy(new _.by(cJ[0], ay));
        null == a || a.head.appendChild(c);
        setTimeout(function () {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.fJ = function (a, b, c) {
        if (!a.body) return null;
        var d = new eJ;
        d.apply(a, b);
        return function () {
            var e = c || 0;
            0 < e && dJ(b.document, e);
            _.$B(a.body, {filter: d.g, webkitFilter: d.g, overflow: d.l, position: d.j, top: d.L});
            b.scrollTo(0, d.A)
        }
    };
    eJ = function () {
        this.g = this.L = this.j = this.l = null;
        this.A = 0
    };
    eJ.prototype.apply = function (a, b) {
        this.l = a.body.style.overflow;
        this.j = a.body.style.position;
        this.L = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.kj(b);
        _.$B(a.body, "top", -this.A + "px")
    };
    var Lr = function (a, b) {
        this.g = a;
        this.A = void 0 === b ? 0 : b
    };
    Lr.prototype.send = function (a, b) {
        var c = a.rm, d = this.A++;
        b = _.Sl(b, 1, d);
        c.call(a, b)
    };
    _.Mw.Object.defineProperties(Lr.prototype, {
        Vf: {
            configurable: !0, enumerable: !0, get: function () {
                return this.g()
            }
        }
    });
    var lk = ["auto", "inherit", "100%"], mk = lk.concat(["none"]);
    var gJ = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var hJ = function (a, b, c, d, e, f) {
        this.l = _.UB(a);
        this.A = _.UB(b);
        this.j = c;
        this.g = _.UB(d);
        this.L = e;
        this.F = f
    }, iJ = function (a) {
        return JSON.stringify({
            windowCoords_t: a.l.top,
            windowCoords_r: a.l.right,
            windowCoords_b: a.l.bottom,
            windowCoords_l: a.l.left,
            frameCoords_t: a.A.top,
            frameCoords_r: a.A.right,
            frameCoords_b: a.A.bottom,
            frameCoords_l: a.A.left,
            styleZIndex: a.j,
            allowedExpansion_t: a.g.top,
            allowedExpansion_r: a.g.right,
            allowedExpansion_b: a.g.bottom,
            allowedExpansion_l: a.g.left,
            xInView: a.L,
            yInView: a.F
        })
    }, jJ = function (a) {
        var b = window, c = b.screenX || b.screenLeft || 0, d = b.screenY || b.screenTop || 0;
        b = new _.TB(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
        c = eC(a);
        d = _.jn(_.hC, a);
        var e = new VB(c.x, c.y, d.width, d.height);
        c = WB(e);
        d = String(cC(a, "zIndex"));
        var f = new _.TB(0, Infinity, Infinity, 0);
        for (var g = vg(a), h = g.g.body, k = g.g.documentElement, l = lB(g.g); a = dC(a);) if (!(_.wy && 0 == a.clientWidth || zy && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != cC(a, "overflow")) {
            var m = eC(a), n = new _.gn(a.clientLeft, a.clientTop);
            m.x += n.x;
            m.y += n.y;
            f.top = Math.max(f.top, m.y);
            f.right = Math.min(f.right, m.x + a.clientWidth);
            f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
            f.left = Math.max(f.left, m.x)
        }
        a = l.scrollLeft;
        l = l.scrollTop;
        f.left = Math.max(f.left, a);
        f.top = Math.max(f.top, l);
        g = g.g;
        g = _.kB(g.parentWindow || g.defaultView || window);
        f.right = Math.min(f.right, a + g.width);
        f.bottom = Math.min(f.bottom, l + g.height);
        l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new VB(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? XB(e, f) : null;
        g = a = 0;
        l && !(new _.ln(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
        l = new _.TB(0, 0, 0, 0);
        if (h = f) (e = XB(e, f)) ? (k = WB(f), m = WB(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
        h && (l = new _.TB(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
        return new hJ(b, c, d, l, a, g)
    };
    var kJ = function (a) {
        this.L = a;
        this.j = null;
        this.C = this.status = 0;
        this.A = null;
        this.Bb = "sfchannel" + a
    };
    kJ.prototype.rg = function () {
        return 2 == this.C
    };
    var lJ = function (a) {
        this.g = a
    };
    lJ.prototype.getValue = function (a, b) {
        return null == this.g[a] || null == this.g[a][b] ? null : this.g[a][b]
    };
    var mJ = function (a, b) {
        this.Je = a;
        this.Ke = b;
        this.A = this.g = !1
    };
    var nJ = function (a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.g = a;
        this.A = b;
        this.l = c;
        this.permissions = d;
        this.metadata = e;
        this.j = f;
        this.Qd = g;
        this.hostpageLibraryTokens = h;
        this.U = ""
    };
    var oJ = function (a, b) {
        this.A = a;
        this.U = b
    };
    oJ.prototype.g = function (a) {
        this.U && a && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var pJ = function (a, b, c) {
        oJ.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(pJ, oJ);
    pJ.prototype.g = function () {
        return oJ.prototype.g.call(this, {uid: this.A, version: this.version})
    };
    var qJ = function (a, b, c, d) {
        oJ.call(this, a, void 0 === d ? "" : d);
        this.j = b;
        this.l = c
    };
    _.T(qJ, oJ);
    qJ.prototype.g = function () {
        return oJ.prototype.g.call(this, {uid: this.A, initialWidth: this.j, initialHeight: this.l})
    };
    var rJ = function (a, b, c) {
        oJ.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(rJ, oJ);
    rJ.prototype.g = function () {
        return oJ.prototype.g.call(this, {uid: this.A, description: this.description})
    };
    var sJ = function (a, b, c, d) {
        oJ.call(this, a, void 0 === d ? "" : d);
        this.l = b;
        this.push = c
    };
    _.T(sJ, oJ);
    sJ.prototype.g = function () {
        return oJ.prototype.g.call(this, {
            uid: this.A,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var tJ = function (a, b) {
        oJ.call(this, a, void 0 === b ? "" : b)
    };
    _.T(tJ, oJ);
    tJ.prototype.g = function () {
        return oJ.prototype.g.call(this, {uid: this.A})
    };
    var uJ = function (a, b, c) {
        oJ.call(this, a, void 0 === c ? "" : c);
        this.j = b
    };
    _.T(uJ, oJ);
    uJ.prototype.g = function () {
        var a = {uid: this.A, newGeometry: iJ(this.j)};
        return oJ.prototype.g.call(this, a)
    };
    var vJ = function (a, b, c, d, e, f) {
        uJ.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.T(vJ, uJ);
    vJ.prototype.g = function () {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: iJ(this.j),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.U && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var wJ = function (a, b, c, d) {
        oJ.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(wJ, oJ);
    wJ.prototype.g = function () {
        return oJ.prototype.g.call(this, {uid: this.A, width: this.width, height: this.height})
    };
    var xJ = function (a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Jl(function () {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var yJ, BJ, CJ, AJ;
    yJ = function () {
        this.g = []
    };
    _.zJ = function (a) {
        return a + "px"
    };
    BJ = function (a, b, c, d, e) {
        a.g.push(new AJ(b, c, d, e))
    };
    CJ = function (a) {
        for (var b = a.g.length - 1; 0 <= b; b--) {
            var c = a.g[b];
            c.A ? (c.l.style.removeProperty(c.g), c.l.style.setProperty(c.g, String(c.j), c.L)) : c.l.style[c.g] = c.j
        }
        a.g.length = 0
    };
    AJ = function (a, b, c, d) {
        this.l = a;
        this.g = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.j = this.A ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.L = this.A ? a.style.getPropertyPriority(this.g) : void 0;
        this.A ? (a.style.removeProperty(this.g), a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    };
    var DJ, EJ;
    DJ = function (a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    EJ = function () {
        var a = window, b = _.jg(a);
        b && DJ({label: "2", type: 9, value: b}, a)
    };
    _.FJ = function (a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window, g = "undefined" !== typeof queueMicrotask;
        return function () {
            e && g && queueMicrotask(function () {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.jg(), k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (n) {
                k = 13;
                if (!c) throw n;
                c(a, n)
            } finally {
                if (f.google_measure_js_timing && h) {
                    var m = _.jg() || 0;
                    DJ(_.x(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: h,
                        duration: m - h,
                        type: k
                    }, e && g && {taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1}), f)
                }
            }
            return l
        }
    };
    var KJ = function (a) {
        kJ.call(this, a.uniqueId);
        var b = this;
        this.I = a.V;
        this.o = 1 === a.size;
        this.O = new mJ(a.permissions.Je && !this.o, a.permissions.Ke && !this.o);
        this.F = a.Og;
        var c;
        this.La = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.wa = "file:" == c ? "*" : c + "//" + d;
        this.eb = !!a.Qd;
        this.W = a.Yi ? "//" + a.Yi + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ta = a.ub ? "*" : "https:" + this.W;
        this.ja = GJ(a);
        this.l = new yJ;
        HJ(this, a.Og, a.size);
        this.j = this.ha = jJ(a.Og);
        this.J = a.mm || "1-0-40";
        var e;
        this.qa = null != (e = a.dk) ? e : "";
        IJ(this, a);
        this.Ca = _.FJ(412, function () {
            return JJ(b)
        }, a.sb);
        this.H = -1;
        this.K = 0;
        var f = _.FJ(415, function () {
            b.g && (b.g.name = "", a.Gi && a.Gi(), _.ng(b.g, "load", f))
        }, a.sb);
        _.Of(this.g, "load", f);
        this.ng = _.FJ(413, this.ng, a.sb);
        this.Tg = _.FJ(417, this.Tg, a.sb);
        this.Xg = _.FJ(419, this.Xg, a.sb);
        this.gg = _.FJ(411, this.gg, a.sb);
        this.Qf = _.FJ(409, this.Qf, a.sb);
        this.na = _.FJ(410, this.na, a.sb);
        this.Hg = _.FJ(416, this.Hg, a.sb);
        this.A = new XH(this.Bb, this.g.contentWindow, this.ta, !1);
        ZH(this.A, "init_done", (0, _.ux)(this.ng, this));
        ZH(this.A, "register_done", (0, _.ux)(this.Tg, this));
        ZH(this.A, "report_error", (0, _.ux)(this.Xg, this));
        ZH(this.A, "expand_request", (0, _.ux)(this.gg, this));
        ZH(this.A, "collapse_request", (0, _.ux)(this.Qf, this));
        ZH(this.A, "creative_geometry_update", (0, _.ux)(this.na, this));
        this.A.connect((0, _.ux)(this.Hg, this))
    };
    _.T(KJ, kJ);
    var HJ = function (a, b, c) {
        a.o ? (b.style.width = _.gC("100%", !0), b.style.height = _.gC("auto", !0)) : (b.style.width = _.gC(c.width, !0), b.style.height = _.gC(c.height, !0))
    }, IJ = function (a, b) {
        var c = b.ub, d = b.content, e = b.Od, f = b.size, g = void 0 === b.Pd ? "3rd party ad content" : b.Pd,
            h = b.Me;
        b = b.If;
        var k = {shared: {sf_ver: a.J, ck_on: oH(pH) ? 1 : 0, flash_ver: "0"}};
        d = c ? "" : null != d ? d : "";
        d = a.J + ";" + d.length + ";" + d;
        k = new nJ(a.L, a.wa, a.ha, a.O, new lJ(k), a.o, a.eb, a.La);
        var l = {};
        l.uid = k.g;
        l.hostPeerName = k.A;
        l.initialGeometry = iJ(k.l);
        var m = k.permissions;
        m = JSON.stringify({expandByOverlay: m.Je, expandByPush: m.Ke, readCookie: m.g, writeCookie: m.A});
        l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.g), l.reportCreativeGeometry = k.j, l.isDifferentSourceWindow = k.Qd, l.goog_safeframe_hlt = VH(k.hostpageLibraryTokens), l);
        k.U && (l.sentinel = k.U);
        k = JSON.stringify(l);
        l = f.width;
        f = f.height;
        a.o && (f = l = 0);
        m = {};
        e = (m.id = e, m.title = g, m.name = d + k, m.scrolling = "no", m.marginWidth = "0", m.marginHeight = "0", m.width = String(l), m.height = String(f), m["data-is-safeframe"] = "true", m);
        void 0 === c && (g = a.qa, f = a.W, d = a.J, (k = g) && (k = "?" + k), f = (void 0 === f ? "//tpc.googlesyndication.com" : f) + ("/safeframe/" + d + "/html/container.html" + k), (d = xJ(_.mB(_.gB(a.F)))) && (f += (g ? "&" : "?") + "n=" + d), e.src = "https:" + f);
        null !== a.ja && (e.sandbox = a.ja);
        h && (e.allow = h);
        b && (e.credentialless = "true");
        e["aria-label"] = "Advertisement";
        e.tabIndex = "0";
        c ? (a.g = c, iB(a.g, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && fb(c, e), h = _.mg("IFRAME"), iB(h, c), a.g = h);
        a.o && (a.g.style.minWidth = "100%");
        a.F.appendChild(a.g)
    };
    _.q = KJ.prototype;
    _.q.Hg = function () {
        _.Of(window, "resize", this.Ca);
        _.Of(window, "scroll", this.Ca)
    };
    _.q.ng = function (a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Ma(b) || !qk(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new pJ(b.uid, b.version, b.sentinel);
            if (this.L !== c.A || this.J !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.q.Tg = function (a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Ma(b) || !qk(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.L !== (new qJ(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).A) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.q.Xg = function (a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Ma(b) || !qk(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new rJ(b.uid, b.description, b.sentinel);
            if (this.L !== c.A) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.q.gg = function (a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Ma(b) || !qk(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new sJ(b.uid, new _.TB(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.L !== c.A) throw Error("Wrong source container");
            if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.O.Ke || !c.push && this.O.Je) {
                var e = c.l, f = c.push, g = this.j = jJ(this.g);
                if (e.top <= g.g.top && e.right <= g.g.right && e.bottom <= g.g.bottom && e.left <= g.g.left) {
                    if (!f) for (var h = this.g.parentNode; h && h.style; h = h.parentNode) BJ(this.l, h, "overflowX", "visible", "important"), BJ(this.l, h, "overflowY", "visible", "important");
                    var k = WB(new VB(0, 0, this.j.A.getWidth(), this.j.A.getHeight()));
                    _.Ma(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    BJ(this.l, this.F, "position", "relative");
                    BJ(this.l, this.g, "position", "absolute");
                    if (f) {
                        var l = this.l, m = this.F, n = k.getWidth();
                        BJ(l, m, "width", _.zJ(n));
                        var p = this.l, r = this.F, v = k.getHeight();
                        BJ(p, r, "height", _.zJ(v))
                    } else BJ(this.l, this.g, "zIndex", "10000");
                    var w = this.l, z = this.g, y = k.getWidth();
                    BJ(w, z, "width", _.zJ(y));
                    var C = this.l, G = this.g, D = k.getHeight();
                    BJ(C, G, "height", _.zJ(D));
                    BJ(this.l, this.g, "left", _.zJ(k.left));
                    BJ(this.l, this.g, "top", _.zJ(k.top));
                    this.C = 2;
                    this.j = jJ(this.g);
                    d = !0
                } else d = !1
            }
            a = d;
            this.A.send("expand_response", (new vJ(this.L, a, this.j, c.l, c.push)).g());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (S) {
            var M;
            null == (M = this.I) || M.error("Invalid EXPAND_REQUEST message. Reason: " + S.message)
        }
    };
    _.q.Qf = function (a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.rg()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Ma(b) || !qk(b.uid)) throw Error("Cannot parse JSON message");
            if (this.L !== (new tJ(b.uid, b.sentinel)).A) throw Error("Wrong source container");
            CJ(this.l);
            this.C = 0;
            this.g && (this.j = jJ(this.g));
            this.A.send("collapse_response", (new uJ(this.L, this.j)).g())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var JJ = function (a) {
        if (1 == a.status || 2 == a.status) switch (a.K) {
            case 0:
                LJ(a);
                a.H = window.setTimeout((0, _.ux)(a.fa, a), 1E3);
                a.K = 1;
                break;
            case 1:
                a.K = 2;
                break;
            case 2:
                a.K = 2
        }
    };
    KJ.prototype.na = function (a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Ma(b) || !qk(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new wJ(b.uid, b.width, b.height, b.sentinel);
            if (this.L !== c.A) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.o) d !== this.g.height && (this.g.height = d, JJ(this)); else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    KJ.prototype.fa = function () {
        if (1 == this.status || 2 == this.status) switch (this.K) {
            case 1:
                this.K = 0;
                break;
            case 2:
                LJ(this), this.H = window.setTimeout((0, _.ux)(this.fa, this), 1E3), this.K = 1
        }
    };
    var LJ = function (a) {
            a.j = jJ(a.g);
            a.A.send("geometry_update", (new uJ(a.L, a.j)).g())
        }, GJ = function (a) {
            var b = null;
            a.aj && (b = a.aj);
            return null == b ? null : b.join(" ")
        }, MJ = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        NJ = ["allow-top-navigation"], OJ = ["allow-same-origin"], PJ = FB([].concat(_.Pi(MJ), _.Pi(NJ)));
    FB([].concat(_.Pi(MJ), _.Pi(OJ)));
    FB([].concat(_.Pi(MJ), _.Pi(NJ), _.Pi(OJ)));
    var QJ = _.Rw(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]), RJ = {
        wl: function (a) {
            if ("string" !== typeof a.version) throw new TypeError("version is not a string");
            if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
            if ("string" !== typeof a.xf) throw new TypeError("subdomain is not a string");
            if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.xf)) throw new RangeError("Invalid subdomain: " + a.xf);
            return tf("https://" + a.xf + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
        }, Eo: function (a) {
            return _.If(QJ, a)
        }
    };
    var SJ = function () {
    };
    SJ.g = function () {
        throw Error("Must be overridden");
    };
    var uk = function () {
        this.g = 0
    };
    _.T(uk, SJ);
    uk.Hc = void 0;
    uk.g = function () {
        return uk.Hc ? uk.Hc : uk.Hc = new uk
    };
    var TJ = function () {
        this.cache = {}
    }, Ek = function () {
        UJ || (UJ = new TJ);
        return UJ
    }, Fk = function (a) {
        var b = cd(_.xi(a, 3));
        if (!b) return 3;
        if (void 0 === Bk(a, 2)) return 4;
        a = Date.now();
        return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
    };
    TJ.prototype.get = function (a, b) {
        if (this.cache[a]) return {Tc: this.cache[a], success: !0};
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            wk(6, a, null == (d = g) ? void 0 : d.message);
            return {Tc: null, success: !1}
        }
        if (!c) return {Tc: null, success: !0};
        try {
            var e = FA(c);
            this.cache[a] = e;
            return {Tc: e, success: !0}
        } catch (g) {
            var f;
            wk(5, a, null == (f = g) ? void 0 : f.message);
            return {Tc: null, success: !1}
        }
    };
    TJ.prototype.set = function (a, b) {
        var c = Bk(a, 1), d = "_GESPSK-" + c;
        EA(a);
        try {
            b.setItem(d, zl(a))
        } catch (f) {
            var e;
            wk(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    TJ.prototype.remove = function (a, b) {
        a = Bk(a, 1);
        try {
            b.removeItem("_GESPSK-" + a), delete this.cache[a]
        } catch (d) {
            var c;
            wk(8, a, null == (c = d) ? void 0 : c.message)
        }
    };
    var UJ = null;
    var VJ = function (a, b) {
        DI.call(this, a);
        this.id = a;
        this.C = b
    };
    _.T(VJ, DI);
    VJ.prototype.I = function (a) {
        this.C(this.id, a)
    };
    var Ok = function (a, b, c, d) {
        VJ.call(this, 1041, d);
        this.storage = b;
        this.o = X(this, a);
        c && (this.j = Y(this, c))
    };
    _.T(Ok, VJ);
    Ok.prototype.g = function () {
        var a = this.o.value, b, c, d = null != (c = this.storage) ? c : null == (b = this.j) ? void 0 : b.value;
        d && Ek().set(a, d) && _.Zi(a, 2) && wk(27, Bk(a, 1))
    };
    var Qk = function (a, b) {
        VJ.call(this, 1048, b);
        this.j = W(this);
        this.o = W(this);
        this.H = X(this, a)
    };
    _.T(Qk, VJ);
    Qk.prototype.g = function () {
        var a = this.H.value, b = function (c) {
            var d = {};
            wk(c, Bk(a, 1), null, (d.tic = String(Math.round((Date.now() - cd(_.xi(a, 3))) / 6E4)), d))
        };
        switch (Fk(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.o.G(a);
                break;
            case 2:
                b(26);
                this.j.G(a);
                break;
            case 3:
                wk(9, Bk(a, 1));
                this.j.G(a);
                break;
            case 4:
                b(23), this.j.G(a)
        }
    };
    var WJ = function (a, b) {
        VJ.call(this, 1094, b);
        this.j = FI(this);
        this.o = X(this, a)
    };
    _.T(WJ, VJ);
    WJ.prototype.g = function () {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a) for (var b = _.u(_.x(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next()) if (c = c.value, _.x(c, "startsWith").call(c, "_GESPSK")) try {
                a.removeItem(c)
            } catch (d) {
            }
            UJ = new TJ;
            this.j.notify()
        }
    };
    var dl = function (a, b, c) {
        VJ.call(this, 1049, c);
        this.storage = b;
        HI(this, a)
    };
    _.T(dl, VJ);
    dl.prototype.g = function () {
        for (var a = _.u(yk(this.storage)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Ek().get(b, this.storage).Tc;
            if (c) {
                var d = Fk(c);
                if (2 === d || 3 === d) Ek().remove(c, this.storage), wk(40, b)
            }
        }
    };
    var Nk = function (a, b, c) {
        VJ.call(this, 1027, c);
        this.Be = a;
        this.storage = b;
        this.j = W(this);
        this.o = W(this)
    };
    _.T(Nk, VJ);
    Nk.prototype.g = function () {
        var a = Ek().get(this.Be, this.storage).Tc;
        a || (a = EA(DA(this.Be)), this.o.G(a.kb(Hk(100))));
        this.j.G(a)
    };
    var Lk = {kh: !1};
    var hl = function (a, b) {
        VJ.call(this, 1036, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(hl, VJ);
    hl.prototype.g = function () {
        var a = this.o.value;
        0 !== Fk(a) && this.j.G(a)
    };
    var Uk = function (a, b, c) {
        VJ.call(this, 1046, c);
        this.output = FI(this);
        this.j = W(this);
        this.o = X(this, b);
        HI(this, a)
    };
    _.T(Uk, VJ);
    Uk.prototype.g = function () {
        this.j.G(this.o.value)
    };
    var Rk = function (a, b, c) {
        VJ.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = W(this);
        this.o = W(this);
        this.H = W(this);
        this.J = X(this, b)
    };
    _.T(Rk, VJ);
    Rk.prototype.g = function () {
        var a = this, b = this.J.value, c = Bk(b, 1);
        wk(18, c);
        try {
            var d = _.ig();
            this.collectorFunction().then(function (e) {
                wk(29, c, null, {delta: String(_.ig() - d)});
                a.j.G(Ji(b, 2, e));
                a.H.Ha(e)
            }).catch(function (e) {
                wk(28, c, Kk(e));
                a.o.G(b.kb(Hk(106)))
            })
        } catch (e) {
            wk(1, c, Kk(e)), this.o.G(b.kb(Hk(107)))
        }
    };
    var Pk = function (a, b) {
        VJ.call(this, 1028, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(Pk, VJ);
    Pk.prototype.g = function () {
        var a = this.o.value, b = Bk(a, 1);
        null != cd(_.xi(a, 3)) || wk(35, b);
        this.j.G(a)
    };
    var Sk = function (a, b, c, d, e) {
        VJ.call(this, 1050, e);
        this.J = c;
        this.H = d;
        this.j = W(this);
        this.o = X(this, a);
        this.O = Y(this, b)
    };
    _.T(Sk, VJ);
    Sk.prototype.g = function () {
        var a = this.o.value, b = Bk(a, 1), c = this.O.value;
        if (null == c) wk(41, b), a.kb(Hk(111)), this.j.G(a); else if ("string" !== typeof c) wk(21, b), this.j.G(a.kb(Hk(113))); else {
            if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
                var d = {};
                wk(12, b, null, (d.sl = String(c.length), d));
                b = a.kb(Hk(108));
                _.Gk(b, 2)
            } else c.length || wk(20, b), _.Gk(a, 10);
            this.j.G(a)
        }
    };
    var Tk = function (a) {
        VJ.call(this, 1046, a);
        this.output = FI(this)
    };
    _.T(Tk, VJ);
    Tk.prototype.g = function () {
        var a = this;
        xk().then(function () {
            a.output.notify()
        })
    };
    var XJ = function (a, b, c, d, e) {
        e = void 0 === e ? Lk : e;
        VJ.call(this, 1059, d);
        this.O = b;
        this.J = c;
        this.o = e;
        this.j = W(this);
        this.W = X(this, a);
        this.H = Y(this, c)
    };
    _.T(XJ, VJ);
    XJ.prototype.g = function () {
        var a = this.H.value;
        if (a) {
            var b = this.W.value, c = b.id, d = b.collectorFunction, e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            wk(42, b, null, (c.ea = String(Number(this.O)), c));
            this.j.Ka(Vk(b, d, a, this.J, this.C, this.o))
        }
    };
    var YJ = function (a, b) {
        VJ.call(this, 1057, b);
        this.j = a;
        this.o = W(this);
        this.H = W(this)
    };
    _.T(YJ, VJ);
    YJ.prototype.g = function () {
        if (this.j) if ("object" !== typeof this.j) wk(46, "UNKNOWN_COLLECTOR_ID"), ZJ(this, "UNKNOWN_COLLECTOR_ID", 112); else {
            var a = this.j.id, b = this.j.networkCode;
            a && b && (delete this.j.id, wk(47, a + ";" + b));
            a = null != b ? b : a;
            "string" !== typeof a ? (b = {}, wk(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), ZJ(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (wk(14, a), ZJ(this, a, 105)) : (_.I = ag(TD), _.x(_.I, "includes")).call(_.I, a) ? (wk(22, a), ZJ(this, a, 104)) : this.H.G(this.j)
        } else wk(39, "UNKNOWN_COLLECTOR_ID"), ZJ(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var ZJ = function (a, b, c) {
        a.o.G(DA(b).kb(Hk(c)))
    };
    var bl = function (a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? Lk : e;
        this.g = b;
        this.l = c;
        this.aa = f;
        this.K = d;
        this.I = e;
        this.F = [];
        this.L = [];
        this.j = [];
        this.A = 0;
        a = _.u(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    bl.prototype.push = function (a) {
        var b = this;
        this.l || this.K();
        var c = function (f, g) {
            return void $J(b, f, g)
        };
        a = new YJ(a, c);
        var d = new Ok(a.o, void 0, this.g, c);
        c = new XJ(a.H, this.l, this.g, c, this.I);
        var e = new Mk;
        el(e, [a, d, c]);
        e.run();
        a = c.j.promise;
        this.F.push(a);
        d = _.u(this.L);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    bl.prototype.addOnSignalResolveCallback = function (a) {
        this.L.push(a);
        for (var b = _.u(this.F), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    bl.prototype.addErrorHandler = function (a) {
        this.j.push(a)
    };
    bl.prototype.clearAllCache = function () {
        var a = this, b = this.aa.currentScript instanceof HTMLScriptElement ? this.aa.currentScript.src : "";
        if (1 === this.A) {
            var c = {};
            wk(49, "", null, (c.url = b, c))
        } else if (c = String(_.Uh(null != b ? b : "")), (_.I = ag(SD), _.x(_.I, "includes")).call(_.I, c)) c = {}, wk(48, "", null, (c.url = b, c)); else {
            var d = new Mk;
            c = new WJ(this.g, function (e, f) {
                return void $J(a, e, f)
            });
            J(d, c);
            d.run();
            this.A = 1;
            setTimeout(function () {
                a.A = 0
            }, 1E3 * _.Zf(RD));
            d = {};
            wk(43, "", null, (d.url = b, d));
            return c.j.promise
        }
    };
    var $J = function (a, b, c) {
        a = _.u(a.j);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
    }, cl = function (a) {
        this.push = function (b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function (b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function (b) {
            a.addErrorHandler(b)
        };
        this.clearAllCache = function () {
            a.clearAllCache()
        }
    };
    var il = function (a, b, c) {
        VJ.call(this, 1035, c);
        this.o = b;
        this.j = W(this);
        this.H = X(this, a)
    };
    _.T(il, VJ);
    il.prototype.g = function () {
        var a = this, b = this.H.value, c = Bk(b, 1), d = this.o.toString(), e = {};
        wk(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        mb(f, this.o);
        var g = function () {
            var h = {};
            wk(31, c, null, (h.url = d, h));
            a.j.G(b.kb(Hk(109)));
            _.ng(f, "error", g)
        };
        document.head.appendChild(f);
        _.Of(f, "error", g)
    };
    var gl = new _.A.Set;
    var kl = function (a, b) {
        try {
            var c = void 0 === _.Q(b, 6) ? !0 : _.Q(b, 6), d, e, f = Wf(_.tg(b, 2, 0)), g = _.F(b, 3);
            a:switch (_.tg(b, 4, 0)) {
                case 1:
                    var h = "pt";
                    break a;
                case 2:
                    h = "cr";
                    break a;
                default:
                    h = ""
            }
            var k = new Rz(f, g, h), l = null != (e = null == (d = _.Um(b, Oz, 5)) ? void 0 : _.F(d, 1)) ? e : "";
            k.Rd = l;
            k.g = c;
            k.B = a;
            var m = k.build();
            Vf(m)
        } catch (n) {
        }
    };
    var aK = function (a) {
        this.D = _.B(a)
    };
    _.T(aK, _.E);
    aK.prototype.g = qf([0, zz, -3, Cz]);
    var bK = [.05, .1, .2, .5], cK = [0, .5, 1], dK = function (a) {
        a = Yk(a);
        if (!a) return -1;
        try {
            var b = IH(a.document);
            var c = new _.ln(b.clientWidth, b.clientHeight)
        } catch (d) {
            c = new _.ln(-12245933, -12245933)
        }
        return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
    }, eK = function (a, b) {
        return 0 >= a || 0 >= b ? [] : bK.map(function (c) {
            return Math.min(a / b * c, 1)
        })
    }, gK = function (a) {
        this.L = a.B;
        this.j = a.Sb;
        this.I = a.timer;
        this.l = null;
        this.g = a.sb;
        this.A = fK(this);
        this.F = a.Bm || !1
    }, hK = function () {
        var a;
        return !!window.IntersectionObserver && Lv(null == (a = window.performance) ? void 0 : a.now)
    };
    gK.prototype.getSlotId = function () {
        return this.l
    };
    var jK = function (a, b) {
        if (a.A) {
            if (null != a.l) {
                try {
                    iK(a, Math.round(performance.now()), 0, 0, 0, !1)
                } catch (c) {
                    a.g && a.g(c)
                }
                a.A && a.A.unobserve(a.j)
            }
            a.l = b;
            a.A.observe(a.j)
        }
    }, fK = function (a) {
        if (!_.t.IntersectionObserver) return null;
        var b = a.j.offsetWidth * a.j.offsetHeight, c = dK(a.L);
        b = [].concat(_.Pi(cK), _.Pi(eK(c, b)));
        Oa(b);
        return new _.t.IntersectionObserver(function (d) {
            try {
                for (var e = dK(a.L), f = _.u(d), g = f.next(); !g.done; g = f.next()) {
                    var h = g.value, k = Math.round(h.boundingClientRect.width * h.boundingClientRect.height),
                        l = Math.round(h.intersectionRect.width * h.intersectionRect.height), m = Math.round(h.time);
                    if (_.x(Number, "isSafeInteger").call(Number, k) && _.x(Number, "isSafeInteger").call(Number, l) && _.x(Number, "isSafeInteger").call(Number, e) && _.x(Number, "isSafeInteger").call(Number, m)) a.F && iK(a, m, k, l, e, h.isIntersecting); else {
                        var n = d = void 0;
                        null == (n = (d = a).g) || n.call(d, Error("invalid geometry: " + k + " | " + l + " | " + e + " | " + m))
                    }
                }
            } catch (p) {
                a.g && a.g(p)
            }
        }, {threshold: b})
    }, iK = function (a, b, c, d, e, f) {
        if (null == a.l) throw Error("Not Attached.");
        var g = new aK;
        c = _.vi(g, 1, c);
        d = _.vi(c, 2, d);
        e = _.vi(d, 3, e);
        b = _.vi(e, 4, b);
        f = qi(b, 5, f);
        f = ub(f.g(), 4);
        XC(a.I, "1", 10, f, void 0, a.l)
    };
    var kK = function (a, b) {
        this.g = a;
        this.A = b
    }, lK = function (a) {
        if (a.g.frames.google_ads_top_frame) return !0;
        var b = HB(a.g);
        b = b && b.contentWindow;
        if (!b) return !1;
        b.addEventListener("message", function (c) {
            var d = c.ports;
            "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                msgType: "__goog_top_url_resp",
                topUrl: a.A
            })
        }, !1);
        return !0
    };
    var xl = function (a) {
        this.D = _.B(a)
    };
    _.T(xl, _.E);
    var Bl = rf(xl), yl = [1, 3];
    var $g = {lo: 0, ho: 1, io: 9, co: 2, eo: 3, ko: 5, jo: 7, fo: 10};
    var mK = _.Rw(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]), rl = _.If(mK);
    var Gp = function (a) {
        var b = void 0 === b ? vk(_.t) : b;
        this.id = a;
        this.g = .001 > Math.random();
        this.ce = {pvsid: String(b)}
    }, nK = function (a) {
        a = Zl(a);
        var b;
        mm.set(a, (null != (b = mm.get(a)) ? b : 0) + 1)
    }, lm = function () {
        return [].concat(_.Pi(_.x(mm, "values").call(mm))).reduce(function (a, b) {
            return a + b
        }, 0)
    }, Ip = function (a, b, c) {
        "string" !== typeof c && (c = String(c));
        /^\w+$/.test(b) && (c ? a.ce[b] = c : delete a.ce[b])
    }, Kp = function (a) {
        var b = 1;
        b = void 0 === b ? null : b;
        if (oK()) b = !0; else {
            var c = a.g;
            b && 0 <= b && (c = Math.random() < b);
            b = c && !!a.id
        }
        b && dD(window, pK(a) || "", void 0, !0)
    }, pK = function (a) {
        var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
        _.io(a.ce, function (c, d) {
            c && (b += "&" + d + "=" + encodeURIComponent(c))
        });
        return b
    }, qK = function (a) {
        var b = [].concat(_.Pi(_.x(mm, "keys").call(mm)));
        b = b.map(function (c) {
            return c.replace(/,/g, "\\,")
        });
        3 >= b.length ? Ip(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), Ip(a, "nw_id", b.join()))
    }, Hp = function (a, b) {
        Ip(a, "vrg", b.Te);
        qK(a);
        Ip(a, "nslots", lm().toString());
        b = Bh();
        b.length && Ip(a, "eid", b.join());
        Ip(a, "pub_url", document.URL)
    }, hq = function (a, b, c) {
        c = void 0 === c ? .001 : c;
        if (void 0 === c || 0 > c || 1 < c) c = .001;
        Math.random() < c && (a = new Gp(a), b(a), Kp(a))
    }, mm = new _.A.Map, oK = Yi(function () {
        return !!CB()
    });
    var bm = function () {
        WC.call(this, _.H(cm) || _.H(mG) ? 1 : 0, _.t);
        this.A = 0;
        var a = _.H(cm) || _.H(mG);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.T(bm, WC);
    _.rK = function (a) {
        this.context = a
    };
    _.rK.prototype.Eb = function (a, b) {
        return fm(this.context, a, b)
    };
    _.rK.prototype.Ba = function (a, b) {
        return $l(this.context, a, b)
    };
    _.rK.prototype.Db = function (a, b) {
        dm(this.context, a, b);
        return !1
    };
    _.rK.prototype.pd = ca(4);
    var sK = function () {
        this.id = "goog_" + qy++
    }, tK = function (a) {
        _.V.call(this);
        this.context = a;
        this.l = new _.A.Map
    };
    _.T(tK, _.V);
    tK.prototype.A = function () {
        _.V.prototype.A.call(this);
        this.l.clear()
    };
    tK.prototype.listen = function (a, b) {
        var c = this;
        if (this.L) return function () {
        };
        var d = "string" === typeof a ? a : a.id, e, f,
            g = null != (f = null == (e = this.l.get(d)) ? void 0 : e.add(b)) ? f : new _.A.Set([b]);
        this.l.set(d, g);
        return function () {
            return void uK(c, a, b)
        }
    };
    var vK = function (a) {
            var b = kv;
            var c = void 0 === c ? function () {
                return !0
            } : c;
            return new _.A.Promise(function (d) {
                var e = a.listen(b, function (f) {
                    c(f) && (e(), d(f))
                })
            })
        }, uK = function (a, b, c) {
            var d;
            return !(null == (d = a.l.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        }, wt = function (a, b, c, d) {
            var e, f, g, h, k, l, m, n;
            _.Qf(function (p) {
                e = "string" === typeof b ? b : b.id;
                f = a.l.get(e);
                if (null == (g = f) || !g.size) return p.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: d,
                    bubbles: !0,
                    cancelable: !0
                }) : function () {
                    var r = document.createEvent("CustomEvent");
                    r.initCustomEvent(e, !0, !0, d);
                    return r
                }();
                k = [];
                l = _.u(f);
                m = l.next();
                for (n = {}; !m.done; n = {vg: void 0}, m = l.next()) n.vg = m.value, k.push(new _.A.Promise(function (r) {
                    return function (v) {
                        return _.Qf(function (w) {
                            if (1 == w.g) return w.yield(0, 2);
                            fm(a.context, c, function () {
                                a.l.has(e) && f.has(r.vg) && (0, r.vg)(h)
                            }, !0);
                            v();
                            w.g = 0
                        })
                    }
                }(n)));
                return p.yield(_.A.Promise.all(k), 0)
            })
        }, wK = new sK, xK = new sK, xt = new sK, yK = new sK, yt = new sK, zK = new sK, AK = new sK, Br = new sK,
        kv = new sK, BK = new sK;
    var CK = function () {
        this.data = void 0;
        this.status = 0;
        this.g = []
    }, DK = function (a) {
        a.data = void 0;
        a.status = 1
    };
    var EK, IK, LK, jv, MK, HK, GK, FK, er;
    EK = function () {
        this.g = new _.A.Map;
        this.F = 0;
        this.A = new _.A.Map;
        this.Kb = null;
        this.j = this.l = this.o = this.I = 0;
        this.Ne = null;
        this.K = new CK;
        this.L = new CK
    };
    IK = function (a, b) {
        a.g.get(b) || (a.g.set(b, {
            Nc: !0,
            Mg: "",
            zd: "",
            Vi: 0,
            Ig: [],
            Kg: [],
            Dc: !1,
            to: -1
        }), _.Vp(b, function () {
            a.g.delete(b);
            FK(a, b)
        }), b.listen(xK, function (c) {
            c = c.detail;
            var d = a.g.get(b);
            d.Mg = Bk(c, 33) || "";
            d.Dc = !0;
            GK(a, b, function () {
                return void (d.Mg = "")
            });
            HK(a, b, function () {
                return void (d.Dc = !1)
            })
        }))
    };
    _.dr = function (a, b) {
        var c;
        return null == (c = a.g.get(b)) ? void 0 : c.Nc
    };
    _.JK = function (a, b) {
        if (a = a.g.get(b)) a.Nc = !1
    };
    _.KK = function (a, b) {
        if (a = a.g.get(b)) a.Nc = !0
    };
    LK = function (a, b) {
        if (!b.length) return [];
        var c = Zl(b[0].getAdUnitPath());
        b.every(function (g) {
            return Zl(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.u(a.g);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.u(e.value);
            e = f.next().value;
            (f = f.next().value.Mg) && Zl(e.getAdUnitPath()) === c && !_.x(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    jv = function (a, b) {
        var c, d;
        return null != (d = null == (c = a.g.get(b)) ? void 0 : c.zd) ? d : ""
    };
    MK = function (a, b) {
        return (a = a.g.get(b)) ? a.Vi - 1 : 0
    };
    HK = function (a, b, c) {
        (a = a.g.get(b)) && a.Ig.push(c)
    };
    GK = function (a, b, c) {
        (a = a.g.get(b)) && a.Kg.push(c)
    };
    FK = function (a, b) {
        if (a = a.g.get(b)) for (b = a.Kg.slice(), a.Kg.length = 0, a = _.u(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    er = function (a, b) {
        if (a = a.g.get(b)) for (b = a.Ig.slice(), a.Ig.length = 0, a = _.u(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    EK.prototype.Dc = function (a) {
        var b, c;
        return null != (c = null == (b = this.g.get(a)) ? void 0 : b.Dc) ? c : !1
    };
    var NK = function (a, b, c) {
        if (a = a.g.get(b)) a.Ui = c
    }, OK = function (a, b) {
        if (a = a.g.get(b)) {
            var c;
            null == (c = a.Ui) || c.xa();
            delete a.Ui
        }
    };
    var pm = new _.A.Map, om = new _.A.Map;
    var rm = function (a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    rm.prototype.getMessageId = function () {
        return this.messageId
    };
    rm.prototype.getMessageArgs = function () {
        return this.messageArgs
    };
    var PK = N(2), QK = N(3), RK = N(4), SK = N(5), TK = N(6), UK = N(12), VK = N(14), WK = N(16), Lm = N(19),
        XK = N(20), YK = N(23), ZK = N(26), $K = N(28), aL = N(149), bL = N(30), cL = N(31), dL = N(34), eL = N(35),
        Xn = N(36), Pt = N(38), fL = N(40), gL = N(48), hL = N(50), iL = N(60), jL = N(63), kL = N(64), lL = N(66),
        mL = N(68), nL = N(69), oL = N(70), pL = N(71), qL = N(78), rL = N(80), Ao = N(82), Nm = N(84), sL = N(85),
        tL = N(87), Fm = N(88), uL = N(92), vL = N(93), wL = N(99), Pm = N(103), yo = N(104), xL = N(105), so = N(106),
        to = N(107), zo = N(108), yL = N(113), zL = N(114), AL = N(115), BL = N(117), CL = N(118), DL = N(120),
        EL = N(119), jo = N(121), FL = N(122), GL = N(123), HL = N(126), IL = N(127), JL = N(144), ks = N(129),
        ns = N(132), KL = N(134), LL = N(135), ML = N(136), NL = N(137), OL = N(138), PL = N(139), QL = N(140),
        RL = N(143), SL = N(145), TL = N(147), UL = N(150), VL = N(164), WL = N(152), XL = N(153), YL = N(154),
        ys = N(155), ZL = N(156), $L = N(157), aM = N(158), bM = N(159), cM = N(160), Ev = N(161), ew = N(162);
    var dM = function (a, b, c) {
        var d = this;
        this.addEventListener = L(a, 86, function (e, f) {
            if ("function" !== typeof f) return O(b, tm("Service.addEventListener", [e, f])), d;
            var g = um(e);
            if (!g) return O(b, vL(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = L(a, 904, function (e, f) {
            var g = um(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : O(b, tm("Service.removeEventListener", [e, f]))
        });
        this.getSlots = L(a, 573, function () {
            return c.g.map(function (e) {
                return e.g
            })
        });
        this.getSlotIdMap = L(a, 574, function () {
            for (var e = {}, f = _.u(c.g), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.g;
            return e
        });
        this.getName = L(a, 575, function () {
            return c.getName()
        })
    };
    var vm = function (a, b, c) {
        dM.call(this, a, b, c);
        this.setRefreshUnfilledSlots = L(a, 59, function (d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = L(a, 69, function (d) {
            c.Nc && eM(c, fM(c, d))
        });
        this.refreshAllSlots = L(a, 60, function () {
            c.Nc && eM(c)
        });
        this.setVideoSession = L(a, 61, function (d, e, f) {
            c.I = e;
            c.C = f;
            "number" === typeof d && (e = Nn().g, _.Gk(e, 29, _.ed(d)))
        });
        this.getDisplayAdsCorrelator = L(a, 62, function () {
            return String(oz(Nn().g, 26))
        });
        this.getVideoStreamCorrelator = L(a, 63, function () {
            var d = Nn().g;
            d = Js(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = L(a, 64, function (d) {
            var e = _.x(c.g, "find").call(c.g, function (f) {
                return f.g === d
            });
            return !!e && gM(c, e)
        });
        this.onImplementationLoaded = L(a, 65, function () {
            c.R.info(gL("GPT CompanionAds"))
        });
        this.slotRenderEnded = L(a, 67, function (d, e, f) {
            var g = _.x(c.g, "find").call(c.g, function (h) {
                return h.g === d
            });
            return g && hM(c, g, e, f)
        })
    };
    _.T(vm, dM);
    var xm = function (a, b, c) {
        dM.call(this, a, b, c);
        this.setContent = L(a, 72, function (d) {
            var e = _.x(c.g, "find").call(c.g, function (f) {
                return f.g === d
            });
            b.error(JL(), e)
        })
    };
    _.T(xm, dM);
    var Em = function (a) {
        this.D = _.B(a)
    };
    _.T(Em, _.E);
    var Dm = function (a, b) {
        return Ji(a, 1, b)
    }, Im = function (a) {
        return Li(a, 2, 2)
    }, Cm = function (a, b) {
        return _.ue(a, 2, b, _.fd)
    }, Wn = function (a, b) {
        return _.we(a, 2, _.fd, b)
    };
    Em.da = [2];
    var iM = function (a) {
        this.D = _.B(a)
    };
    _.T(iM, _.E);
    iM.prototype.setTagForChildDirectedTreatment = function (a) {
        return _.yi(this, 5, a)
    };
    iM.prototype.clearTagForChildDirectedTreatment = function () {
        return _.Gk(this, 5)
    };
    iM.prototype.setTagForUnderAgeOfConsent = function (a) {
        return _.yi(this, 6, a)
    };
    var sq = function (a) {
        this.D = _.B(a)
    };
    _.T(sq, _.E);
    var ip = function (a) {
        var b = new sq;
        return qi(b, 1, a)
    };
    var Ku = function (a) {
        this.D = _.B(a)
    };
    _.T(Ku, _.E);
    var Vt = function (a) {
        this.D = _.B(a)
    };
    _.T(Vt, _.E);
    Vt.da = [1];
    var ho = function (a) {
        this.D = _.B(a)
    };
    _.T(ho, _.E);
    var gs = function (a) {
        this.D = _.B(a)
    };
    _.T(gs, _.E);
    var ms = function (a, b) {
        return _.yi(a, 1, b)
    }, js = function (a, b) {
        return _.ue(a, 2, b, _.fd)
    };
    gs.da = [2];
    var Tt = function (a) {
        this.D = _.B(a)
    };
    _.T(Tt, _.E);
    var is = function (a, b) {
        Ik(a, 1, gs, b)
    };
    Tt.da = [1];
    var St = function (a) {
        this.D = _.B(a)
    };
    _.T(St, _.E);
    var jM = function (a) {
        this.D = _.B(a)
    };
    _.T(jM, _.E);
    jM.prototype.getCategoryExclusions = function (a) {
        return sz(this, 3, a)
    };
    jM.prototype.Sa = function () {
        return _.zk(this, Em, 14)
    };
    jM.prototype.Bc = function () {
        return _.Um(this, ho, 18)
    };
    var Dv = function (a) {
        return _.Um(a, iM, 25)
    };
    jM.prototype.getCorrelator = function () {
        return Js(this, 26)
    };
    jM.prototype.setCorrelator = function (a) {
        return _.Gk(this, 26, _.ed(a))
    };
    jM.prototype.Wh = function () {
        return nz(this, St, 33)
    };
    jM.da = [2, 3, 14];
    var nn = function () {
        this.g = new _.A.Map
    };
    var kM = {},
        Sm = (kM[253] = !1, kM[246] = [], kM[150] = "", kM[221] = !1, kM[36] = /^true$/.test("false"), kM[172] = null, kM[260] = void 0, kM[251] = null, kM),
        Rm = function () {
            this.g = !1
        };
    var lM = function () {
        this.A = {};
        this.g = new jM;
        this.l = new _.A.Map;
        this.g.setCorrelator(OB());
        _.Tm(36) && qi(this.g, 15, !0)
    }, mM = function (a) {
        var b = Nn(), c = a.getDomId();
        if (c && !b.A.hasOwnProperty(c)) {
            var d = _.Xf(nn), e = ++_.Xf(bm).A;
            d.g.set(c, e);
            _.Gk(a, 20, _.Lc(e));
            b.A[c] = a
        }
    }, nM = function (a, b) {
        return a.A[b]
    }, Nn = function () {
        return _.Xf(lM)
    };
    var oM = {}, pM = (oM.companion_ads = "companionAds", oM.content = "content", oM.publisher_ads = "pubads", oM);
    var qM = Yi(qn);
    var On = function (a, b, c, d) {
        var e = this, f = c.getSlotId(), g = Nn().g, h = nM(Nn(), f.getDomId());
        this.set = L(a, 83, function (k, l) {
            "page_url" === k && l && (k = [Cm(Dm(new Em, k), [String(l)])], _.Om(h, 3, k));
            return e
        });
        this.get = L(a, 84, function (k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (_.I = h.Sa(), _.x(_.I, "find")).call(_.I, function (n) {
                return Bk(n, 1) === k
            })) ? void 0 : Im(l)[0]) ? m : null
        });
        this.setClickUrl = L(a, 79, function (k) {
            zm(k, h, f, b);
            return e
        });
        this.setTargeting = L(a, 81, function (k, l) {
            Gm(k, l, f, h, b);
            return e
        });
        this.updateTargetingFromMap = L(a, 85, function (k) {
            Hm(k, f, h, b);
            return e
        });
        this.display = L(a, 78, function () {
            var k = on(g, Nn().A);
            var l = void 0 === l ? document : l;
            var m;
            null != (m = k.T[f.getDomId()]) && qi(m, 19, !0);
            m = f.getDomId();
            m = Gx(m);
            var n = {id: m};
            var p = void 0 === p ? gy : p;
            var r = _.x(Object, "assign").call(Object, {}, n);
            m = n.id;
            var v = n.style;
            n = n.data;
            r = (delete r.id, delete r.style, delete r.data, r);
            if (_.x(Object, "keys").call(Object, r).length) throw Error("Invalid attribute(s): " + _.x(Object, "keys").call(Object, r));
            m = {id: m, style: v ? v : void 0};
            if (n) for (v = _.u(_.x(n, "entries").call(n)), n = v.next(); !n.done; n = v.next()) r = _.u(n.value), n = r.next().value, r = r.next().value, mf(gJ.test(n)), m[n] = r;
            if (!jy.test("div")) throw Error("");
            if ("DIV" in ly) throw Error("");
            v = "";
            if (m) for (w in m) if (Object.prototype.hasOwnProperty.call(m, w)) {
                if (!jy.test(w)) throw Error("");
                r = m[w];
                if (null != r) {
                    n = w;
                    if (r instanceof Kx) r = Lx(r); else {
                        if ("style" == n.toLowerCase()) throw Error("");
                        if (/^on/i.test(n)) throw Error("");
                        if (n.toLowerCase() in ky) if (r instanceof _.Mx) r = _.lb(r).toString(); else if (r instanceof _.ua) r = _.Da(r); else if ("string" === typeof r) r instanceof _.ua || (r = String(r), Vx.test(r) ? r = va(r) : (r = String(r), r = r.replace(/(%0A|%0D)/g, ""), r = r.match(Ux) ? va(r) : null)), r = (r || Xx).toString(); else throw Error("");
                    }
                    n = n + '="' + Gx(String(r)) + '"';
                    v += " " + n
                }
            }
            var w = "<div" + v;
            null == p ? p = [] : Array.isArray(p) || (p = [p]);
            !0 === $x.div ? w += ">" : (m = _.iy(p), w += ">" + _.fy(m).toString() + "</div>");
            w = _.sk(w);
            l.write(_.fy(w));
            En(f, l) && (Qt(d), IK(d.M, f), rM(d, k, f))
        });
        this.setTagForChildDirectedTreatment = L(a, 80, function (k) {
            if (0 === k || 1 === k) {
                var l = Dv(g) || new iM;
                l.setTagForChildDirectedTreatment(k);
                _.Ai(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = L(a, 567, function (k) {
            "boolean" === typeof k ? qi(h, 12, k) : O(b, tm("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = L(a, 448, function (k) {
            if (0 === k || 1 === k) {
                var l = Dv(g) || new iM;
                l.setTagForUnderAgeOfConsent(k);
                _.Ai(g, 25, l)
            }
            return e
        })
    };
    var Yr = {bo: 0, Yn: 1, Zn: 2, ao: 3};
    var Rn = {
        REWARDED: 4,
        TOP_ANCHOR: 2,
        BOTTOM_ANCHOR: 3,
        INTERSTITIAL: 5,
        GAME_MANUAL_INTERSTITIAL: 7,
        LEFT_SIDE_RAIL: 8,
        RIGHT_SIDE_RAIL: 9
    }, Tn = {IAB_AUDIENCE_1_1: 1, IAB_CONTENT_2_1: 2, IAB_CONTENT_2_2: 3}, Sn = {PURCHASED: 1, ORGANIC: 2};
    var sM = "", co = null;
    var Jo = function (a, b, c) {
        tK.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.T(Jo, tK);
    Jo.prototype.getSlotId = function () {
        return this.slotId
    };
    var bh = function (a, b, c, d) {
        tK.call(this, a);
        this.adUnitPath = b;
        this.Sb = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(bh, tK);
    _.q = bh.prototype;
    _.q.getId = function () {
        return this.id
    };
    _.q.getAdUnitPath = function () {
        return this.adUnitPath
    };
    _.q.getName = function () {
        return this.adUnitPath
    };
    _.q.toString = function () {
        return this.getId()
    };
    _.q.getDomId = function () {
        return this.Sb
    };
    var tM = function (a, b) {
        a.g = b
    };
    var Co = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
    var Go = _.Mz(function () {
        return void KB("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
    }), uM = _.Mz(function () {
        return void KB("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
    }), vM = _.Mz(function () {
        return void KB("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
    }), Lo = function (a, b, c, d, e) {
        dM.call(this, a, b, c);
        var f = this, g = Nn().g, h = Nn().A, k = !1;
        this.setTargeting = L(a, 1, function (l, m) {
            vo({key: l, value: m, Fa: g, serviceName: c.getName(), zm: c.enabled, vb: e, R: b, context: a});
            return f
        });
        this.clearTargeting = L(a, 2, function (l) {
            Bo(l, g, c.getName(), b);
            return f
        });
        this.getTargeting = L(a, 38, function (l) {
            return wo(l, g, b)
        });
        this.getTargetingKeys = L(a, 39, function () {
            return xo(g)
        });
        this.setCategoryExclusion = L(a, 3, function (l) {
            "string" !== typeof l || Am(l) ? O(b, tm("PubAdsService.setCategoryExclusion", [l])) : ((_.I = Li(g, 3, 2), _.x(_.I, "includes")).call(_.I, l) || _.we(g, 3, _.fd, l), b.info(sL(l)));
            return f
        });
        this.clearCategoryExclusions = L(a, 4, function () {
            _.Gk(g, 3);
            b.info(tL());
            return f
        });
        this.disableInitialLoad = L(a, 5, function () {
            qi(g, 4, !0);
            k || (k = !0, Ho())
        });
        this.enableSingleRequest = L(a, 6, function () {
            if (c.enabled && !_.Q(g, 6)) return O(b, iL("PubAdsService.enableSingleRequest")), !1;
            b.info(jL("single request"));
            qi(g, 6, !0);
            return !0
        });
        this.enableAsyncRendering = L(a, 7, function () {
            return !0
        });
        this.enableSyncRendering = L(a, 8, function () {
            KB("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
            return !1
        });
        this.enableLazyLoad = L(a, 485, function (l) {
            var m = new Ku;
            m = _.Oi(m, 1, 800);
            m = _.Oi(m, 2, 400);
            m = _.Gk(m, 3, _.uc(3));
            if (_.Ma(l)) {
                var n = l.fetchMarginPercent;
                "number" === typeof n && (0 <= n ? _.Oi(m, 1, n) : -1 === n && _.Gk(m, 1));
                n = l.renderMarginPercent;
                "number" === typeof n && (0 <= n ? _.Oi(m, 2, n) : -1 === n && _.Gk(m, 2));
                l = l.mobileScaling;
                "number" === typeof l && (0 < l ? _.Gk(m, 3, _.uc(l)) : -1 === l && _.Gk(m, 3, _.uc(1)))
            }
            window.IntersectionObserver || !$i(m, 1) && !$i(m, 2) ? _.Ai(g, 5, m) : O(b, UL())
        });
        this.setCentering = L(a, 9, function (l) {
            l = !!l;
            b.info(kL("centering", String(l)));
            qi(g, 15, l)
        });
        this.definePassback = L(a, 10, function (l, m) {
            return (l = Ko(a, b, c, l, m, d)) && l.Ki
        });
        this.refresh = L(a, 11, function () {
            var l = _.ya.apply(0, arguments), m = _.u(l), n = m.next().value;
            m = m.next().value;
            m = void 0 === m ? {} : m;
            n && !Array.isArray(n) || !_.Ma(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? O(b, tm("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(OB()), n = n ? Fo(n, c) : _.H(SE) ? c.g.filter(function (p) {
                var r = h[p.getDomId()];
                return !(!En(p) && !cn(Sr(r)))
            }) : c.g, c.refresh(on(g, h), n) || O(b, tm("PubAdsService.refresh", l)))
        });
        this.enableVideoAds = L(a, 12, function () {
            qi(g, 21, !0);
            wM(c, g)
        });
        this.setVideoContent = L(a, 13, function (l, m) {
            xM(c, l, m, g)
        });
        this.collapseEmptyDivs = L(a, 14, function (l) {
            l = void 0 === l ? !1 : l;
            l = void 0 === l ? !1 : l;
            qi(g, 11, !0);
            l = !!l;
            qi(g, 10, l);
            b.info(qL(String(l)));
            return !!_.Q(g, 11)
        });
        this.clear = L(a, 15, function (l) {
            if (Array.isArray(l)) return yM(c, g, h, Fo(l, c));
            if (void 0 === l) return yM(c, g, h, c.g);
            O(b, tm("PubAdsService.clear", [l]));
            return !1
        });
        this.setLocation = L(a, 16, function (l) {
            "string" !== typeof l ? O(b, tm("PubAdsService.setLocation", [l])) : Ji(g, 8, l);
            return f
        });
        this.setCookieOptions = L(a, 17, function () {
            uM();
            return f
        });
        this.setTagForChildDirectedTreatment = L(a, 18, function (l) {
            vM();
            if (1 !== l && 0 !== l) return O(b, FL("PubadsService.setTagForChildDirectedTreatment", ko(l), "0,1")), f;
            var m = Dv(g) || new iM;
            m.setTagForChildDirectedTreatment(l);
            _.Ai(g, 25, m);
            return f
        });
        this.clearTagForChildDirectedTreatment = L(a, 19, function () {
            vM();
            var l = Dv(g);
            if (!l) return f;
            l.clearTagForChildDirectedTreatment();
            _.Ai(g, 25, l);
            return f
        });
        this.setPublisherProvidedId = L(a, 20, function (l) {
            l = String(l);
            b.info(kL("PPID", l));
            Ji(g, 16, l);
            return f
        });
        this.set = L(a, 21, function (l, m) {
            Yn(l, m, g, c.getName(), b);
            return f
        });
        this.get = L(a, 22, function (l) {
            return Zn(l, g, b)
        });
        this.getAttributeKeys = L(a, 23, function () {
            return $n(g)
        });
        this.display = L(a, 24, function (l, m, n, p) {
            return void c.display(l, m, d, n, p)
        });
        this.updateCorrelator = L(a, 25, function () {
            KB(Eo("update"));
            O(b, AL());
            g.setCorrelator(OB());
            return f
        });
        this.defineOutOfPagePassback = L(a, 35, function (l) {
            l = Ko(a, b, c, l, [1, 1], d);
            if (!l) return null;
            _.yi(l.Fa, 15, 1);
            return l.Ki
        });
        this.setForceSafeFrame = L(a, 36, function (l) {
            "boolean" !== typeof l ? O(b, tm("PubAdsService.setForceSafeFrame", [ko(l)])) : qi(g, 13, l);
            return f
        });
        this.setSafeFrameConfig = L(a, 37, function (l) {
            var m = lo(b, l);
            m ? _.Ai(g, 18, m) : O(b, tm("PubAdsService.setSafeFrameConfig", [l]));
            return f
        });
        this.setRequestNonPersonalizedAds = L(a, 445, function (l) {
            vM();
            if (0 !== l && 1 !== l) return O(b, FL("PubAdsService.setRequestNonPersonalizedAds", ko(l), "0,1")), f;
            var m = Dv(g) || new iM;
            qi(m, 8, !!l);
            _.Ai(g, 25, m);
            return f
        });
        this.setTagForUnderAgeOfConsent = L(a, 447, function (l) {
            l = void 0 === l ? 2 : l;
            vM();
            if (2 !== l && 0 !== l && 1 !== l) return O(b, FL("PubadsService.setTagForUnderAgeOfConsent", ko(l), "2,0,1")), f;
            var m = Dv(g) || new iM;
            m.setTagForUnderAgeOfConsent(l);
            _.Ai(g, 25, m);
            return f
        });
        this.getCorrelator = L(a, 27, function () {
            return String(oz(g, 26))
        });
        this.getTagSessionCorrelator = L(a, 631, function () {
            return vk(_.t)
        });
        this.getVideoContent = L(a, 30, function () {
            return zM(c, g)
        });
        this.getVersion = L(a, 568, function () {
            return a.Te
        });
        this.forceExperiment = L(a, 569, function (l) {
            return void c.forceExperiment(l)
        });
        this.setCorrelator = L(a, 28, function (l) {
            KB(Eo("set"));
            O(b, zL());
            if (jh(window)) return f;
            if (!ap(l)) return O(b, tm("PubadsService.setCorrelator", [ko(l)])), f;
            l = g.setCorrelator(l);
            qi(l, 27, !0);
            return f
        });
        this.markAsAmp = L(a, 570, function () {
            window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
        });
        this.isSRA = L(a, 571, function () {
            return !!_.Q(g, 6)
        });
        this.setImaContent = L(a, 328, function (l, m) {
            _.Zi(g, 22) ? xM(c, l, m, g) : (qi(g, 21, !0), wM(c, g), "string" === typeof l && Ji(g, 19, l), "string" === typeof m && Ji(g, 20, m))
        });
        this.getImaContent = L(a, 329, function () {
            return _.Zi(g, 22) ? zM(c, g) : c.enabled ? {vid: _.F(g, 19) || "", cmsid: _.F(g, 20) || ""} : null
        });
        this.isInitialLoadDisabled = L(a, 572, function () {
            return !!_.Q(g, 4)
        });
        this.setPrivacySettings = L(a, 648, function (l) {
            if (!_.Ma(l)) return O(b, tm("PubAdsService.setPrivacySettings", [l])), f;
            var m = l.restrictDataProcessing, n = l.childDirectedTreatment, p = l.underAgeOfConsent, r = l.limitedAds,
                v = l.nonPersonalizedAds, w = l.userOptedOutOfPersonalization, z = l.trafficSource, y,
                C = null != (y = Dv(g)) ? y : new iM;
            "boolean" === typeof v ? qi(C, 8, v) : void 0 !== v && O(b, jo("PubAdsService.setPrivacySettings", ko(l), "nonPersonalizedAds", ko(v)));
            "boolean" === typeof w ? qi(C, 13, w) : void 0 !== w && O(b, jo("PubAdsService.setPrivacySettings", ko(l), "userOptedOutOfPersonalization", ko(w)));
            "boolean" === typeof m ? qi(C, 1, m) : void 0 !== m && O(b, jo("PubAdsService.setPrivacySettings", ko(l), "restrictDataProcessing", ko(m)));
            if ("boolean" === typeof r) {
                m = Do();
                if (r && !_.Q(C, 9) && a.Rc) {
                    v = a.Qa;
                    w = v.Qc;
                    y = Ol(a);
                    var G = new uD;
                    G = _.Rl(G, 1, !0);
                    G = _.Rl(G, 2, m);
                    y = _.Tl(y, 11, Ul, G);
                    w.call(v, y)
                }
                m ? qi(C, 9, r) : r && O(b, TL())
            } else void 0 !== r && O(b, jo("PubAdsService.setPrivacySettings", ko(l), "limitedAds", ko(r)));
            void 0 !== p && (null === p ? C.setTagForUnderAgeOfConsent(2) : !1 === p ? C.setTagForUnderAgeOfConsent(0) : !0 === p ? C.setTagForUnderAgeOfConsent(1) : O(b, jo("PubAdsService.setPrivacySettings", ko(l), "underAgeOfConsent", ko(p))));
            void 0 !== n && (null === n ? C.clearTagForChildDirectedTreatment() : !1 === n ? C.setTagForChildDirectedTreatment(0) : !0 === n ? C.setTagForChildDirectedTreatment(1) : O(b, jo("PubAdsService.setPrivacySettings", ko(l), "childDirectedTreatment", ko(n))));
            void 0 !== z && (null === z ? _.Gk(C, 10) : (_.I = _.x(Object, "values").call(Object, Sn), _.x(_.I, "includes")).call(_.I, z) ? _.yi(C, 10, z) : O(b, jo("PubAdsService.setPrivacySettings", ko(l), "trafficSource", ko(z))));
            _.Ai(g, 25, C);
            return f
        })
    };
    _.T(Lo, dM);
    var AM = function (a, b) {
        this.getId = L(a, 593, function () {
            return b.getId()
        });
        this.getAdUnitPath = L(a, 594, function () {
            return b.getAdUnitPath()
        });
        this.getName = L(a, 595, function () {
            return b.getName()
        });
        this.toString = L(a, 596, function () {
            return b.toString()
        });
        this.getDomId = L(a, 597, function () {
            return b.getDomId()
        })
    };
    var BM = function () {
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
        this.isBackfill = !1;
        this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
    }, CM = function (a, b) {
        a.advertiserId = b
    }, DM = function (a, b) {
        a.campaignId = b
    }, EM = function (a, b) {
        a.yieldGroupIds = b
    }, FM = function (a, b) {
        a.companyIds = b
    };
    var Vm = function (a) {
        this.D = _.B(a)
    };
    _.T(Vm, _.E);
    Vm.prototype.getWidth = function () {
        return vt(this, 1)
    };
    var Uo = function (a, b) {
        return _.Gk(a, 1, _.Lc(b))
    };
    Vm.prototype.getHeight = function () {
        return vt(this, 2)
    };
    var To = function (a, b) {
        return _.Gk(a, 2, _.Lc(b))
    }, Vo = function () {
        var a = new Vm;
        return qi(a, 3, !0)
    };
    var Ym = function (a) {
        this.D = _.B(a)
    };
    _.T(Ym, _.E);
    var cp = function (a) {
        var b = new Ym;
        return _.Ai(b, 1, a)
    };
    Ym.da = [2];
    var GM = function (a) {
        this.D = _.B(a)
    };
    _.T(GM, _.E);
    var HM = function (a) {
        var b = new GM;
        return _.yi(b, 1, a)
    };
    var IM = function (a) {
        this.D = _.B(a)
    };
    _.T(IM, _.E);
    IM.da = [1];
    var JM = function (a) {
        this.D = _.B(a)
    };
    _.T(JM, _.E);
    var KM = function (a) {
        this.D = _.B(a)
    };
    _.T(KM, _.E);
    KM.prototype.getAdUnitPath = function () {
        return _.F(this, 1)
    };
    KM.prototype.getDomId = function () {
        return _.F(this, 2)
    };
    var LM = function (a, b) {
        Ji(a, 2, b)
    };
    KM.prototype.Sa = function () {
        return _.zk(this, Em, 3)
    };
    KM.prototype.getServices = function (a) {
        return sz(this, 4, a)
    };
    var MM = function (a, b) {
        _.Om(a, 5, b)
    };
    KM.prototype.getClickUrl = function () {
        return _.F(this, 7)
    };
    KM.prototype.setClickUrl = function (a) {
        return Ji(this, 7, a)
    };
    KM.prototype.getCategoryExclusions = function (a) {
        return sz(this, 8, a)
    };
    var Bm = function (a) {
        return _.zk(a, Em, 9)
    };
    KM.prototype.Bc = function () {
        return _.Um(this, ho, 13)
    };
    var Sr = function (a) {
        return _.tg(a, 15, 0)
    };
    KM.da = [3, 4, 5, 6, 8, 9, 27];
    var NM = function (a, b) {
        this.width = a;
        this.height = b
    };
    NM.prototype.getWidth = function () {
        return this.width
    };
    NM.prototype.getHeight = function () {
        return this.height
    };
    var OM = new _.A.Set(["unhideWindow", "navBar"]);
    var lp = function (a, b, c) {
        var d = this, e = nM(Nn(), c.getDomId()), f = "", g = null, h = function () {
            return ""
        }, k = "", l = !1;
        _.Vp(c, function () {
            e = new KM;
            f = "";
            g = null;
            h = function () {
                return ""
            };
            k = ""
        });
        c.listen(xt, function (n) {
            var p = n.detail;
            n = p.Hh;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = L(a, 40, function (n, p) {
            No(n, p, c, e, b);
            return d
        });
        this.get = L(a, 41, function (n) {
            return Oo(n, c, e, b)
        });
        this.getAttributeKeys = L(a, 42, function () {
            return Po(e)
        });
        this.addService = L(a, 43, function (n) {
            n = pm.get(n);
            if (!n) return O(b, tm("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((_.I = Li(e, 4, 2), _.x(_.I, "includes")).call(_.I, p)) return b.info(UK(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = L(a, 44, function (n) {
            if (_.H(UD)) n = ep(n), "string" === typeof n ? O(b, tm("Slot.defineSizeMapping", [n]), c) : _.Om(e, 6, n); else try {
                var p = e;
                if (!Array.isArray(n)) throw new bp("Size mapping must be an array");
                var r = n.map(dp);
                _.Om(p, 6, r)
            } catch (v) {
                n = v, dm(a, 44, n), KB("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = L(a, 45, function (n) {
            zm(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = L(a, 46, function (n) {
            var p = e;
            "string" !== typeof n || Am(n) ? O(b, tm("Slot.setCategoryExclusion", [n]), c) : ((_.I = Li(p, 8, 2), _.x(_.I, "includes")).call(_.I, n) || _.we(p, 8, _.fd, n), b.info(VK(n), c));
            return d
        });
        this.clearCategoryExclusions = L(a, 47, function () {
            _.Gk(e, 8);
            b.info(WK(), c);
            return d
        });
        this.getCategoryExclusions = L(a, 48, function () {
            return Li(e, 8, 2).slice()
        });
        this.setTargeting = L(a, 49, function (n, p) {
            Gm(n, p, c, e, b);
            return d
        });
        this.updateTargetingFromMap = L(a, 649, function (n) {
            Hm(n, c, e, b);
            return d
        });
        this.clearTargeting = L(a, 50, function (n) {
            Qm(n, c, e, b);
            return d
        });
        this.getTargeting = L(a, 51, function (n) {
            return Jm(n, c, e, b)
        });
        this.getTargetingKeys = L(a, 52, function () {
            return Km(e)
        });
        this.setCollapseEmptyDiv = L(a, 53, function (n, p) {
            var r = e;
            p = void 0 === p ? !1 : p;
            p = void 0 === p ? !1 : p;
            "boolean" !== typeof n || "boolean" !== typeof p ? O(b, tm("Slot.setCollapseEmptyDiv", [n, p]), c) : (r = qi(r, 10, n), qi(r, 11, n && p), p && !n && O(b, XK(c.toString()), c));
            return d
        });
        this.getAdUnitPath = L(a, 54, function () {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = L(a, 598, function () {
            return c.getDomId()
        });
        this.setForceSafeFrame = L(a, 55, function (n) {
            var p = e;
            "boolean" !== typeof n ? O(b, tm("Slot.setForceSafeFrame", [String(n)]), c) : qi(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = L(a, 56, function (n) {
            var p = e, r = lo(b, n);
            r ? _.Ai(p, 13, r) : b.error(tm("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen(xK, function (n) {
            n = n.detail;
            if (mo(n, 8)) g = null; else {
                g = new BM;
                var p = !!mo(n, 9);
                g.isBackfill = p;
                var r = pz(n, 15), v = pz(n, 16);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = pz(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                pz(n, 17).length && CM(g, pz(n, 17)[0]);
                pz(n, 18).length && DM(g, pz(n, 18)[0]);
                pz(n, 19).length && EM(g, pz(n, 19));
                pz(n, 20).length && FM(g, pz(n, 20));
                n = ne(n, 45, Xd(n.D) & 34 ? oe : pe, 2).map(function (w) {
                    return Id(w)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = L(a, 355, function () {
            return g
        });
        this.getName = L(a, 170, function () {
            b.error(RL());
            return c.getAdUnitPath()
        });
        var m = new AM(a, c);
        this.getSlotId = L(a, 579, function () {
            return m
        });
        this.getServices = L(a, 580, function () {
            return Li(e, 4, 2).map(function (n) {
                var p = pM[n];
                if (p) {
                    var r, v, w;
                    n = null != (w = null == (v = (r = fp())[p]) ? void 0 : v.call(r)) ? w : null
                } else n = null;
                return n
            })
        });
        this.getSizes = L(a, 581, function (n, p) {
            var r, v;
            return null != (v = null == (r = Zm(e, n, p)) ? void 0 : r.map(function (w) {
                return _.Q(w, 3) ? "fluid" : new NM(w.getWidth(), w.getHeight())
            })) ? v : null
        });
        this.getClickUrl = L(a, 582, function () {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = L(a, 583, function () {
            for (var n = {}, p = _.u(Bm(e)), r = p.next(); !r.done; r = p.next()) r = r.value, _.F(r, 1) && (n[Bk(r, 1)] = Im(r));
            return n
        });
        this.getOutOfPage = L(a, 584, function (n) {
            return "number" === typeof n ? Sr(e) === n : 0 !== Sr(e)
        });
        this.getCollapseEmptyDiv = L(a, 585, function () {
            var n = e;
            return null != mo(n, 10) ? _.Q(n, 10) : null
        });
        this.getDivStartsCollapsed = L(a, 586, function () {
            var n = e;
            return null != mo(n, 11) ? _.Q(n, 11) : null
        });
        c.listen(yK, function (n) {
            h = n.detail.qk
        });
        this.getContentUrl = L(a, 587, function () {
            return h()
        });
        this.getFirstLook = L(a, 588, function () {
            KB("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(xK, function (n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = L(a, 591, function () {
            return k
        });
        this.getHtml = L(a, 592, function () {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = L(a, 1022, function (n) {
            var p = e;
            if (dh(n)) {
                var r = n.componentAuction, v = n.adExpansion, w = n.outstream;
                if (null != r) {
                    var z = {componentAuction: r};
                    if (_.Ma(z)) {
                        if (r = se(p, 26, rd), void 0 !== z.componentAuction) {
                            z = _.u(z.componentAuction);
                            for (var y = z.next(); !y.done; y = z.next()) {
                                var C = y.value;
                                y = C.configKey;
                                C = C.auctionConfig;
                                "string" !== typeof y || Am(y) || (null === C ? r.delete(y) : C && r.set(y, JSON.stringify(C)))
                            }
                        }
                    } else O(b, tm("googletag.Slot.setConfig", [z]))
                }
                if (_.x(Object, "hasOwn").call(Object, n, "interstitial")) if (5 !== Sr(p)) O(b, cM("interstitial"), c); else {
                    z = n.interstitial;
                    b.info(ZL("interstitial", ko(z)), c);
                    if (dh(z)) for (r = {}, z = _.u(_.x(Object, "entries").call(Object, z)), y = z.next(); !y.done; y = z.next()) switch (C = _.u(y.value), y = C.next().value, C = C.next().value, y) {
                        case "triggers":
                            r.triggers = C;
                            break;
                        default:
                            O(b, aM("interstitial", y), c)
                    } else O(b, bM("googletag.slot.setConfig", "interstitial", ko(z)), c), r = null;
                    y = r;
                    r = new IM;
                    z = {};
                    if (y && y.triggers) if (y = y.triggers, dh(y)) for (z.triggers = {}, y = _.u(_.x(Object, "entries").call(Object, y)), C = y.next(); !C.done; C = y.next()) {
                        var G = _.u(C.value);
                        C = G.next().value;
                        G = G.next().value;
                        var D = C;
                        C = G;
                        if (OM.has(D)) if (hp(C)) switch (D) {
                            case "unhideWindow":
                                G = HM(2);
                                G = qi(G, 2, C);
                                Ik(r, 1, GM, G);
                                z.triggers.Io = C;
                                break;
                            case "navBar":
                                _.H(BE) ? (G = HM(3), G = qi(G, 2, C), Ik(r, 1, GM, G), z.triggers.vo = C) : O(b, aM("interstitial.triggers", D), c)
                        } else O(b, bM("interstitial.triggers", D, ko(C)), c); else O(b, aM("interstitial.triggers", D), c)
                    } else O(b, bM("interstitial", "triggers", ko(y)), c);
                    b.info($L("interstitial", ko(z)), c);
                    _.Ai(p, 29, r)
                }
                _.H(gp) ? _.x(Object, "hasOwn").call(Object, n, "adExpansion") && jp(p, v) : jp(p, v);
                if (_.H(bw) && _.x(Object, "hasOwn").call(Object, n, "outstream") && (_.Gk(p, 31), null !== w)) if (dh(w)) if (0 !== Sr(p)) O(b, cM("outstream", String(Sr(p))), c); else {
                    a:{
                        v = ["exposeVast"];
                        n = new _.A.Map;
                        w = _.u(_.x(Object, "entries").call(Object, w));
                        for (r = w.next(); !r.done; r = w.next()) z = _.u(r.value), r = z.next().value, z = z.next().value, _.x(v, "includes").call(v, r) ? n.set(r, z) : O(b, aM("outstream", r), c);
                        if (0 === n.size) w = null; else for (w = new JM, n = _.u(n), v = n.next(); !v.done; v = n.next()) if (r = _.u(v.value), v = r.next().value, r = r.next().value, "exposeVast" === v) {
                            if (!hp(r)) {
                                O(b, bM("outstream", "exposeVast", ko(r)), c);
                                w = null;
                                break a
                            }
                            qi(w, 1, r)
                        }
                    }
                    w && _.Ai(p, 31, w)
                } else O(b, bM("googletag.slot.setConfig", "outstream", ko(w)), c)
            } else O(b, tm("googletag.slot.setConfig", [n]), c)
        })
    };
    var Z = function (a, b, c) {
        DI.call(this, b, c);
        this.context = a
    };
    _.T(Z, DI);
    Z.prototype.I = function (a) {
        dm(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var vp = function (a, b, c, d) {
        Z.call(this, a, 1226);
        this.Nf = b;
        this.startTime = _.ig();
        this.j = X(this, c);
        this.va = null != d ? d : this.context.Qa
    };
    _.T(vp, Z);
    vp.prototype.g = function () {
        this.context.pm && this.va.Xb.jc.Yh.mk.nk.Mc({
            Pc: _.ig() - this.startTime,
            Nf: this.Nf,
            di: !!_.F(this.j.value, 2),
            ei: !!_.F(this.j.value, 1),
            ai: !!_.F(this.j.value, 11)
        })
    };
    vp.prototype.l = function (a) {
        this.I(a)
    };
    var tp = function (a, b, c, d, e) {
        Z.call(this, a, 959);
        this.qb = b;
        this.output = W(this);
        this.j = X(this, b);
        HI(this, c);
        HI(this, d);
        e && HI(this, e)
    };
    _.T(tp, Z);
    tp.prototype.g = function () {
        this.output.G(this.j.value)
    };
    var sp = function (a, b, c, d, e, f) {
        Z.call(this, a, 1172);
        this.R = b;
        this.M = c;
        this.B = d;
        this.j = FI(this);
        HI(this, e);
        this.o = X(this, f)
    };
    _.T(sp, Z);
    sp.prototype.g = function () {
        var a = this, b = new AH(this.B, {addListenerRemovalCallback: _.H(dE), allowEmptyApplicableSection: _.H(eE)});
        _.R(this, b);
        if (DG(b.caller)) {
            var c = this.M.L, d = c.status, e = function (f) {
                if (f.internalErrorState) NH(a.o.value, f.gppString); else if (xh(f.applicableSections)) LH(MH(a.o.value, f.applicableSections.filter(function (k) {
                    return _.x(Number, "isInteger").call(Number, k)
                })), !1); else {
                    var g = NH(MH(a.o.value, f.applicableSections.filter(function (k) {
                        return _.x(Number, "isInteger").call(Number, k)
                    })), f.gppString);
                    try {
                        var h = EH(f.gppString)
                    } catch (k) {
                        dm(a.context, 1182, k), h = !1
                    }
                    LH(g, h)
                }
                a.j.notify()
            };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.g.push(e);
                    break;
                case 0:
                    DK(c);
                    c.g.push(e);
                    this.R.info(DL());
                    b.addEventListener($l(this.context, 1173, function (f) {
                        if ("ready" === f.pingData.signalStatus || xh(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.g.forEach(function (g) {
                            g(f.pingData)
                        }), c.g = []
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var qp = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.R = b;
        this.M = c;
        this.B = d;
        this.o = e;
        this.j = FI(this);
        HI(this, f);
        this.C = X(this, g)
    };
    _.T(qp, Z);
    qp.prototype.g = function () {
        var a = this, b = new KG(this.B, {timeoutMs: -1, Wj: !0});
        _.R(this, b);
        if (MG(b)) {
            var c = this.M.K, d = c.status, e = function (f) {
                var g = a.C.value, h, k;
                if (k = !(a.o ? _.Q(a.o, 9) : _.H(fE) && Do())) k = {mg: _.Tm(221) && !Yg()}, k = void 0 === k ? {} : k, k = RG(f) ? !1 === f.gdprApplies ? !0 : "tcunavailable" === f.tcString ? !k.mg : (k.mg || void 0 !== f.gdprApplies || k.ro) && (k.mg || "string" === typeof f.tcString && f.tcString.length) ? PG(f, "1", 0) : !0 : !1;
                k = qi(g, 5, k);
                var l = !SG(f, ["3", "4"], 0);
                k = qi(k, 9, l);
                k = Ji(k, 2, f.tcString);
                l = null != (h = f.addtlConsent) ? h : "";
                h = Ji(k, 4, l);
                _.yi(h, 7, f.internalErrorState);
                null != f.gdprApplies && qi(g, 3, f.gdprApplies);
                SG(f, ["2", "7", "9", "10"], 1) || qi(g, 8, !0);
                a.j.notify()
            };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.g.push(e);
                    break;
                case 0:
                    DK(c);
                    c.g.push(e);
                    this.R.info(CL());
                    b.addEventListener(function (f) {
                        RG(f) ? ("tcunavailable" === f.tcString ? a.R.info(EL("failed")) : a.R.info(EL("succeeded")), c.data = f, c.status = 2, c.g.forEach(function (g) {
                            g(f)
                        }), c.g = []) : DK(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var pp = function (a, b, c, d, e) {
        Z.call(this, a, 875);
        this.R = b;
        this.B = c;
        this.j = FI(this);
        HI(this, d);
        this.o = X(this, e)
    };
    _.T(pp, Z);
    pp.prototype.g = function () {
        var a = this, b = new mH(this.B);
        _.R(this, b);
        if (DG(b.caller)) {
            var c = $l(this.context, 660, function (d) {
                d && "string" === typeof d.uspString && (Ji(a.o.value, 1, d.uspString), KH(a.o.value, $l(a.context, 1187, function () {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && lC.hasOwnProperty(f[1]) && lC.hasOwnProperty(f[2]) && lC.hasOwnProperty(f[3]) ? (f = new kC, f = _.Sl(f, 1, parseInt(e[0], 10)), f = _.K(f, 2, lC[e[1]]), f = _.K(f, 3, lC[e[2]]), e = _.K(f, 4, lC[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.tg(e, 3, 0))
                })()));
                a.j.notify()
            });
            this.R.info(BL());
            nH(b, c)
        } else this.j.notify()
    };
    var np = function (a, b) {
        Z.call(this, a, 958);
        this.j = b;
        this.qb = W(this)
    };
    _.T(np, Z);
    np.prototype.g = function () {
        var a = new JH, b = this.j ? _.Q(this.j, 9) : Do(), c = _.Tm(221) && !Yg();
        qi(a, 5, !b && !c);
        this.qb.G(a)
    };
    var op = function (a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.B = b;
        this.o = d;
        this.j = X(this, c)
    };
    _.T(op, Z);
    op.prototype.g = function () {
        var a = this;
        fm(this.context, 894, function () {
            return void hq("cmpMet", function (b) {
                Hp(b, a.context);
                var c = new KG(a.B);
                _.R(a, c);
                var d = new mH(a.B);
                _.R(a, d);
                Ip(b, "fc", Number(a.j.value));
                Ip(b, "tcfv1", Number(!!a.B.__cmp));
                Ip(b, "tcfv2", Number(MG(c)));
                Ip(b, "usp", Number(!!DG(d.caller)));
                Ip(b, "ptt", 17)
            }, a.o)
        })
    };
    var PM = function (a, b, c, d) {
        Z.call(this, a, 1103);
        this.j = b;
        this.Z = c;
        this.privacyTreatments = d;
        this.output = W(this)
    };
    _.T(PM, Z);
    PM.prototype.g = function () {
        this.output.G(!!ph(this.Z) && !_.Q(this.Z, 9) && !_.Q(this.Z, 13) && (!_.H(rp) || !_.Q(this.Z, 12)) && (this.j ? _.Q(this.j, 9) || _.Q(this.j, 8) || _.Q(this.j, 1) || _.H(OE) && _.Q(this.j, 13) || 1 === _.tg(this.j, 6, 2) || 1 === _.Dc(_.xi(this.j, 5)) || _.x(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var zp = function (a) {
        this.R = a;
        this.A = this.g = 0
    };
    zp.prototype.push = function () {
        for (var a = _.u(_.ya.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.A.globalThis), this.g++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.R.error(bL(String(c)))
            }
        }
        this.R.info(cL(String(this.g), String(this.A)));
        return this.g
    };
    var xp = function (a, b) {
        this.push = L(a, 76, b.push.bind(b))
    };
    var QM = ["Debug", "Info", "Warning", "Error", "Fatal"], RM = function (a, b, c) {
        this.level = a;
        this.message = b;
        this.g = c;
        this.timestamp = new Date
    };
    _.q = RM.prototype;
    _.q.getSlot = function () {
        return this.g
    };
    _.q.getLevel = function () {
        return this.level
    };
    _.q.getTimestamp = function () {
        return this.timestamp
    };
    _.q.getMessage = function () {
        return this.message
    };
    _.q.toString = function () {
        return this.timestamp.toTimeString() + ": " + QM[this.level] + ": " + this.message
    };
    var SM = _.Rw(["https://console.googletagservices.com/pubconsole/loader.js"]), Mp = _.If(SM), Qp, Pp = !1, Fp = !1,
        Jp = !1;
    var Mt = function (a, b) {
        this.getAllEvents = L(a, 563, function () {
            return Fp ? TM(b).slice() : []
        });
        this.getEventsBySlot = L(a, 565, function (c) {
            return Fp ? UM(b, c).slice() : []
        });
        this.getEventsByLevel = L(a, 566, function (c) {
            return Fp ? VM(b, c).slice() : []
        })
    };
    var WM = {
        20: function (a) {
            return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
        }, 23: function (a) {
            return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
        }, 34: function (a) {
            return "Size mapping is null because invalid mappings were added: " + a[0] + "."
        }, 60: function (a) {
            return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
        }, 66: function (a) {
            return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
        }, 68: function () {
            return "Slots cannot be cleared until service is enabled."
        }, 80: function (a) {
            return "Slot object at position " + a[0] + " is of incorrect type."
        }, 84: function (a) {
            return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
        }, 93: function (a) {
            return "Failed to register listener. Unknown event type: " + a[0] + "."
        }, 96: function (a) {
            return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
        }, 122: function (a) {
            return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
        }, 121: function (a) {
            return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
        }, 151: function (a) {
            return "Invalid arguments: " + a[0] + "(" + a[1] + "). All zero-area slot sizes were removed."
        }, 105: function (a) {
            return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
        }, 106: function (a) {
            return "Publisher betas " + a[0] + " were declared after enableServices() was called."
        }, 107: function (a) {
            return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
        }, 108: function (a) {
            return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
        }, 123: function (a) {
            return "Refresh was throttled for slot: " + a[0] + "."
        }, 113: function (a) {
            return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
        }, 114: function () {
            return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
        }, 115: function () {
            return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
        }, 132: function (a) {
            return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
        }, 133: function () {
            return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
        }, 134: function (a) {
            return Sp(a[0]) + " " + a[1] + " not requested: Format already created on the page."
        }, 135: function (a) {
            return Sp(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
        }, 136: function (a) {
            return Sp(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
        }, 137: function (a) {
            return Sp(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
        }, 138: function (a) {
            return Sp(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
        }, 139: function (a) {
            return Sp(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
        }, 140: function (a) {
            return Sp(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
        }, 145: function (a) {
            return Sp(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
        }, 143: function () {
            return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
        }, 147: function () {
            return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
        }, 150: function () {
            return "Legacy browser does not support intersection observer causing lazy render/fetch as well as viewability events not to work properly."
        }, 164: function () {
            return "Lazy loading is not supported for Side Rail formats. Invocation will have no effect."
        }, 154: function (a) {
            return "Refresh is disabled for " + Sp(a[0]) + " " + a[1] + "."
        }, 152: function () {
            return "Attempted to load GPT multiple times."
        }, 155: function () {
            return "Using deprecated googletag.encryptedSignalProviders. Please use googletag.secureSignalProviders instead."
        }, 158: function (a) {
            return "Unrecognized property encountered when calling setConfig: " + a[0] + "." + a[1]
        }, 159: function (a) {
            return "Invalid value encountered when calling setConfig: " + a[0] + "." + a[1] + ": " + a[2]
        }, 160: function (a) {
            return "slot.setConfig key " + a[0] + " is not valid for this slot."
        }, 162: function (a) {
            return "GPT script src version " + a[0] + " is deprecated and will soon expire and fail to show ads. https://developers.google.com/publisher-tag/release-notes#2023-06-19"
        }
    }, XM = {
        26: function (a) {
            return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
        }, 28: function (a) {
            return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
        }, 149: function (a) {
            return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
        }, 92: function (a) {
            return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
        }, 30: function (a) {
            return "Exception in googletag.cmd function: " + a[0] + "."
        }, 126: function () {
            return "Attempted to collect prebid data but window.pbjs is undefined."
        }, 153: function () {
            return "Attempted to load GPT from both standard and limited ads domains."
        }, 127: function (a) {
            return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
        }, 144: function () {
            return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
        }, 161: function (a) {
            return "403 HTTP Response: " + a[0] + "."
        }
    };
    var YM = function (a) {
        this.context = a;
        this.A = this.g = 0;
        this.l = window;
        this.events = [];
        this.events.length = 1E3
    }, TM = function (a) {
        return [].concat(_.Pi(a.events.slice(a.g)), _.Pi(a.events.slice(0, a.g))).filter(function (b) {
            return !!b
        })
    }, UM = function (a, b) {
        return TM(a).filter(function (c) {
            return c.getSlot() === b
        })
    }, VM = function (a, b) {
        return TM(a).filter(function (c) {
            return c.getLevel() >= b
        })
    };
    YM.prototype.log = function (a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        var e, f, g = new RM(a, b, null != (f = null == (e = c) ? void 0 : e.g) ? f : null);
        this.events[this.g] = g;
        this.g = (this.g + 1) % 1E3;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs();
        e = b.getMessageId();
        var k = WM[e] || XM[e];
        e = void 0;
        if (k) {
            e = k(h);
            if (d) throw new bp(e);
            d = this.A < _.Zf(mE) && f && _.t.console;
            if (this.l === top && d || _.x(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse")) {
                d = "[GPT] " + e;
                var l, m, n, p;
                2 === a ? null == (m = (l = _.t.console).warn) || m.call(l, d) : null == (p = (n = _.t.console).error) || p.call(n, d);
                this.A++
            }
        }
        a:if (m = e, l = c, l = void 0 === l ? null : l, this.context.um) {
            switch (a) {
                case 2:
                    n = 1;
                    break;
                case 3:
                    n = 2;
                    break;
                default:
                    break a
            }
            var r, v, w;
            a = this.context.Qa;
            c = a.tm;
            p = new yD;
            p = _.Ij(p, 1, this.context.pvsid);
            d = Bh();
            p = _.ue(p, 2, d, Ec);
            p = _.Hj(p, 3, this.context.Ea);
            p = _.Hj(p, 4, this.context.Pa);
            p = _.Ij(p, 5, this.context.bm);
            n = _.K(p, 6, n);
            m = _.Hj(n, 7, m);
            n = b.getMessageId();
            m = _.K(m, 8, n);
            b = b.getMessageArgs();
            b = _.ue(m, 9, b, _.fd);
            m = Zl(null != (w = null == (r = l) ? void 0 : r.getAdUnitPath()) ? w : "");
            r = _.Hj(b, 10, m);
            w = null == (v = l) ? void 0 : v.getAdUnitPath();
            v = _.Hj(r, 11, w);
            c.call(a, v)
        }
        return g
    };
    YM.prototype.info = function (a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var O = function (a, b, c) {
        return a.log(2, b, c, !1)
    };
    YM.prototype.error = function (a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var ZM = function () {
        var a = {ca: Nn().g, nj: new Date(Date.now()), Jh: window.location.href}, b = this;
        a = void 0 === a ? {} : a;
        var c = void 0 === a.ca ? Nn().g : a.ca, d = void 0 === a.nj ? new Date(Date.now()) : a.nj,
            e = void 0 === a.Jh ? window.location.href : a.Jh;
        this.g = "";
        this.j = this.A = null;
        this.L = this.F = !1;
        this.l = function () {
            return !1
        };
        a = {};
        var f = {}, g = {};
        this.I = (g[3] = (a[72] = function (h, k) {
            var l = b.A;
            h = Number(h);
            k = Number(k);
            l = null !== l ? _.Uh("w5uHecUBa2S:" + h + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
            return l
        }, a[13] = function () {
            return _.ya.apply(0, arguments).some(function (h) {
                return _.x(b.g, "startsWith").call(b.g, h)
            })
        }, a[12] = function () {
            return !!_.Q(c, 6)
        }, a[15] = function (h) {
            return b.l(h)
        }, a[66] = function () {
            try {
                return !!HTMLScriptElement.supports("webbundle")
            } catch (h) {
                return !1
            }
        }, a[67] = function () {
            return b.F
        }, a[68] = function () {
            return b.L
        }, a[74] = function () {
            return _.x(_.ya.apply(0, arguments), "includes").call(_.ya.apply(0, arguments), String(_.Uh(e)))
        }, a), g[4] = (f[14] = function () {
            var h = Number(b.j || void 0);
            isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
            return h
        }, f), g[5] = {}, g)
    }, $M = function (a, b) {
        if (b && !a.A) {
            b = b.split(":");
            a.A = _.x(b, "find").call(b, function (d) {
                return 0 === d.indexOf("ID=")
            }) || null;
            var c;
            a.j = (null == (c = _.x(b, "find").call(b, function (d) {
                return 0 === d.indexOf("T=")
            })) ? void 0 : c.substring(2)) || null
        }
    };
    var nv = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 863);
        this.o = c;
        this.zd = Number(b);
        this.j = X(this, d);
        this.H = X(this, e);
        this.J = X(this, f);
        this.C = X(this, g)
    };
    _.T(nv, Z);
    nv.prototype.g = function () {
        var a = this.J.value, b = this.j.value, c = this.C.value, d = this.H.value, e = this.o;
        var f = Up(e);
        var g = b.getBoundingClientRect();
        e = _.ol(e) ? fn(b, e) : {x: 0, y: 0};
        b = e.x;
        e = e.y;
        g = new _.TB(e, b + g.right, e + g.bottom, b);
        b = new bI;
        b = _.Oi(b, 1, g.top);
        b = _.Oi(b, 3, g.bottom);
        b = _.Oi(b, 2, g.left);
        g = _.Oi(b, 4, g.right);
        b = new cI;
        b = _.Gk(b, 1, _.Lc(this.zd));
        d = qi(b, 2, !d);
        d = _.Ai(d, 3, g);
        c = _.Oi(d, 4, c);
        f = _.Oi(c, 5, f);
        f = {type: "asmres", payload: zl(f)};
        a.ports[0].postMessage(f)
    };
    var Ur = function (a, b, c, d) {
        Z.call(this, a, 1061);
        var e = this;
        this.output = W(this);
        this.output.Ka(new _.A.Promise(function (f) {
            var g = b.listen(c, function (h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.Vp(e, g)
        }))
    };
    _.T(Ur, Z);
    Ur.prototype.g = function () {
    };
    var Ar = function (a, b, c, d) {
        d = void 0 === d ? function () {
            return !0
        } : d;
        Z.call(this, a, 1061);
        var e = this;
        this.output = FI(this);
        zI(this.output, new _.A.Promise(function (f) {
            var g = b.listen(c, function (h) {
                d(h) && (g(), f())
            });
            _.Vp(e, g)
        }))
    };
    _.T(Ar, Z);
    Ar.prototype.g = function () {
    };
    var iv = function (a, b, c, d) {
        Ur.call(this, a, b, Br, function (e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && vt(aI(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.j = W(this)
    };
    _.T(iv, Ur);
    iv.prototype.g = function () {
        this.j.G(Up(this.o))
    };
    var aN = /(<head(\s+[^>]*)?>)/i, Iu = function (a, b, c, d, e) {
        Z.call(this, a, 665);
        this.Ra = b;
        this.Bd = c;
        this.isBackfill = d;
        this.Hb = e;
        this.output = W(this)
    };
    _.T(Iu, Z);
    Iu.prototype.g = function () {
        var a;
        0 !== this.Ra.kind || null == (a = this.Bd) || !_.F(a, 1) || this.Hb ? this.output.G(this.Ra) : (a = this.Ra.hb, na() || (a = a.replace(aN, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.isBackfill && (a = a.replace(aN, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            hb: a
        }))
    };
    var bN = function (a, b, c) {
        Z.call(this, a, 1124);
        this.Yd = FI(this);
        this.o = X(this, b);
        this.j = X(this, c)
    };
    _.T(bN, Z);
    bN.prototype.g = function () {
        _.$B(this.j.value, {"min-width": "100%", visibility: "hidden"});
        _.$B(this.o.value, "min-width", "100%");
        this.Yd.notify()
    };
    var cN = function (a, b, c, d, e) {
        Z.call(this, a, 1125);
        this.o = X(this, b);
        this.j = X(this, c);
        HI(this, d);
        HI(this, e)
    };
    _.T(cN, Z);
    cN.prototype.g = function () {
        var a = this.o.value, b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.$B(this.j.value, "visibility", "visible"))
    };
    var ov = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 718);
        this.slotId = b;
        this.tb = c;
        this.Bd = d;
        this.o = e;
        this.C = f;
        this.output = W(this);
        this.j = new Ar(this.context, this.slotId, kv);
        this.H = X(this, g)
    };
    _.T(ov, Z);
    ov.prototype.g = function () {
        var a = !this.H.value;
        if (!this.Bd || "height" !== this.tb || a) this.j.xa(), this.output.G(!1); else {
            a = new Mk;
            _.R(this, a);
            var b = new bN(this.context, this.o, this.C);
            J(a, b);
            J(a, this.j);
            J(a, new cN(this.context, this.o, this.C, this.j.output, b.Yd));
            a.run();
            this.output.G(!0)
        }
    };
    var dN = [2, 1];
    var eN = function (a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 699);
        this.aa = b;
        this.slotId = c;
        this.j = d;
        this.xd = e;
        this.tb = f;
        this.Oa = g;
        this.Lc = FI(this);
        this.H = X(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = Y(this, m);
        this.O = X(this, n)
    };
    _.T(eN, Z);
    eN.prototype.g = function () {
        var a = this.H.value, b = this.o.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.tb) {
            var c, d = null != (c = this.J.value) ? c : 0;
            c = this.C.value;
            var e = this.O.value, f = !1;
            switch (d) {
                case 1:
                case 2:
                case 4:
                case 5:
                    var g = this.context;
                    f = this.aa;
                    var h = this.slotId, k = this.j, l = this.xd, m = this.Oa, n,
                        p = a.parentElement ? null == (n = Fn(a.parentElement, window)) ? void 0 : n.width : void 0;
                    n = c.width;
                    var r = c.height, v = 0;
                    var w = 0;
                    var z = an(k);
                    z = _.u(z);
                    for (var y = z.next(); !y.done; y = z.next()) {
                        var C = y.value;
                        Array.isArray(C) && (y = C[0], C = C[1], v < y && (v = y), w < C && (w = C))
                    }
                    w = [v, w];
                    v = w[0] < n;
                    r = w[1] < r;
                    if (v || r) {
                        w = n + "px";
                        z = {"max-height": "none", "max-width": w, padding: "0px", width: w};
                        r && (z.height = "auto");
                        bq(b, a, z);
                        b = {};
                        if ((_.I = [2, 5], _.x(_.I, "includes")).call(_.I, d) || v && n > Zp(e.width)) b.width = w, b["max-width"] = w;
                        r && (b.height = "auto", b["max-height"] = "none");
                        c:{
                            for (G in b) if (Object.prototype.hasOwnProperty.call(b, G)) {
                                var G = !1;
                                break c
                            }
                            G = !0
                        }
                        G ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.aq(a, b), b = !0)
                    } else b = !1;
                    b:switch (w = c.width, G = f.defaultView || f.parentWindow || _.t, d) {
                        case 2:
                        case 5:
                            a = cq(a, G, w, e, l);
                            break b;
                        case 1:
                        case 4:
                            if (e = a.parentElement) if (l = mn(e)) {
                                y = l.width;
                                l = En(h, G.document);
                                n = Fn(l, G);
                                r = n.position;
                                C = Zp(n.width) || 0;
                                v = Fn(e, G);
                                z = "rtl" === v.direction ? "Right" : "Left";
                                l = z.toLowerCase();
                                G = "absolute" === r ? 0 : Zp(v["padding" + z]);
                                v = Zp(v["border" + z + "Width"]);
                                w = Math.max(Math.round((y - Math.max(C, w)) / 2), 0);
                                y = {};
                                C = 0;
                                var D = uq(n);
                                D && (C = D[4] * ("Right" === z ? -1 : 1), z = D[3] || 1, 1 !== (D[0] || 1) || 1 !== z) && (D[0] = 1, D[3] = 1, y.transform = "matrix(" + D.join(",") + ")");
                                z = 0;
                                switch (r) {
                                    case "fixed":
                                        var M, S = null != (M = Number(Gn(n.getPropertyValue(l)))) ? M : 0, P;
                                        M = null != (P = e.getBoundingClientRect().left) ? P : 0;
                                        z = S - M;
                                        break;
                                    case "relative":
                                        z = null != (S = Number(Gn(n.getPropertyValue(l)))) ? S : 0;
                                        break;
                                    case "absolute":
                                        y[l] = "0"
                                }
                                y["margin-" + l] = w - G - v - z - C + "px";
                                _.aq(a, y);
                                a = !0
                            } else a = !1; else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (_.x(dN, "includes").call(dN, d) && eq(g, f, h, k, d, c.width, c.height, p, "gpt_slotexp", m), f = !0) : f = !1;
                    break;
                case 3:
                    d = this.context, P = this.aa, f = this.slotId, h = this.j, p = this.xd, k = this.Oa, m = a.parentElement ? null == (g = Fn(a.parentElement, window)) ? void 0 : g.width : void 0, g = c.width, M = c.height, S = Zp(e.height) || 0, M >= S || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? f = !1 : (p = {height: M + "px"}, bq(b, a, p), _.aq(a, p), eq(d, P, f, h, 3, g, M, m, "gpt_slotred", k), f = !0)
            }
            !f && _.H(VD) && eq(this.context, this.aa, this.slotId, this.j, 0, c.width, c.height, void 0, "gpt_pgbrk", this.Oa)
        }
        this.Lc.notify()
    };
    var fN = function (a, b, c, d, e, f) {
        Z.call(this, a, 1114);
        this.J = b;
        this.ia = c;
        this.j = d;
        this.H = e;
        this.C = W(this);
        this.o = W(this);
        this.O = X(this, f)
    };
    _.T(fN, Z);
    fN.prototype.g = function () {
        if (this.J) {
            var a = this.J.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) gN(this); else {
                var b = a[1];
                a = hN(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.j && this.H ? Math.floor(this.H / this.j * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                if (a || c) {
                    var d, e;
                    this.C.G(new _.ln(null != (d = null != a ? a : this.j) ? d : 0, null != (e = null != c ? c : this.H) ? e : 0));
                    this.o.G(b)
                } else gN(this)
            }
        } else gN(this)
    };
    var hN = function (a, b) {
        b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
        if (!b) return null;
        b = b[1];
        if ("viewport" === b) return a.ia;
        if ("parent" === b) {
            var c, d, e;
            return (b = null != (e = null == (d = mn(null == (c = a.O.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.ia) : null
        }
        a = Number(b);
        return 0 <= a ? a : null
    }, gN = function (a) {
        a.C.ba();
        a.o.G([])
    };
    var iN = function (a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.O = c;
        this.H = d;
        this.Kf = e;
        this.j = f;
        this.Ga = W(this);
        this.Ja = W(this);
        this.ve = W(this);
        this.Ve = W(this);
        this.fa = Y(this, g);
        this.W = Y(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = X(this, m)
    };
    _.T(iN, Z);
    iN.prototype.g = function () {
        var a = jN(this), b = this.W.value, c;
        if (c = !this.H && a && b) this.o.value.length ? (c = this.adUnitPath.split("/"), c = _.x(this.o.value, "includes").call(this.o.value, c[c.length - 1])) : c = !0;
        if (c) {
            var d = this.J.value, e, f;
            c = null != (f = null == (e = mn(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = b.width;
            b = b.height;
            kN(this, !0, e, b, {
                kind: 0,
                hb: '<html><body style="height:' + (b - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + b + "</p></body></html>")
            }, e <= c ? 1 : 2, d)
        } else if (a = this.fa.value, this.H) kN(this, !1, null != (d = this.j) ? d : 0, null != a ? a : 0, this.C.value); else {
            if (null == this.j) throw new bp("Missing 'width'.");
            if (null == a) throw new bp("Missing 'height'.");
            kN(this, !1, this.j, a, this.C.value)
        }
    };
    var jN = function (a) {
        a = an(a.O)[0];
        return Array.isArray(a) && a.every(function (b) {
            return "number" === typeof b
        }) ? new _.ln(a[0], a[1]) : null
    }, kN = function (a, b, c, d, e, f, g) {
        f = void 0 === f ? a.Kf : f;
        a.Ve.G(b);
        a.Ja.G(new _.ln(c, d));
        a.Ga.G(e);
        a.ve.Ha(f);
        g && _.$B(g, "opacity", .5)
    };
    var Lu = function (a, b, c, d, e, f, g, h, k, l, m, n) {
        Mk.call(this);
        b = new fN(a, b, c.width, k, l, n);
        J(this, b);
        a = new iN(a, d, e, f, h, k, g, b.C, b.o, m, n);
        J(this, a);
        this.K = {Ga: a.Ga, Ja: a.Ja, ve: a.ve, Ve: a.Ve}
    };
    _.T(Lu, Mk);
    var lN = function (a, b, c) {
        Z.call(this, a, 698);
        this.B = b;
        this.output = W(this);
        this.j = X(this, c)
    };
    _.T(lN, Z);
    lN.prototype.g = function () {
        this.output.Ha(Fn(this.j.value, this.B))
    };
    var Su = function (a, b, c, d, e, f, g, h, k, l, m) {
        Mk.call(this);
        var n = new lN(a, b, f);
        J(this, n);
        a = new eN(a, b.document, d, e, c, h, m, f, g, k, l, n.output);
        J(this, a);
        this.Lc = a.Lc
    };
    _.T(Su, Mk);
    var mN = function (a, b, c, d, e) {
        Z.call(this, a, 937, _.Zf(IE));
        this.pb = b;
        this.j = W(this);
        this.o = W(this);
        this.C = W(this);
        this.rc = c;
        this.oc = d;
        this.Vc = e
    };
    _.T(mN, Z);
    mN.prototype.g = function () {
        var a = {}, b;
        if (null == (b = _.Um(this.pb, iA, 2)) ? 0 : _.Q(b, 2)) a["*"] = {bf: !0};
        b = new _.A.Set;
        for (var c = _.u(_.zk(this.pb, hA, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.u([_.F(d, 2), _.F(d, 1)].filter(function (p) {
                return !!p
            })), f = e.next(); !f.done; f = e.next()) a[f.value] = {bf: _.Q(d, 3)};
            d = _.u(ne(d, 4, Jc, 2));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.rc.G(a);
        this.j.G([].concat(_.Pi(b)));
        var g, h;
        a = null == (g = _.Um(this.pb, iA, 2)) ? void 0 : null == (h = _.Um(g, cA, 1)) ? void 0 : _.zk(h, bA, 1);
        this.o.Ha((null == a ? 0 : a.length) ? a : null);
        var k;
        this.oc.G(!(null == (k = _.Um(this.pb, iA, 2)) || !_.Q(k, 4)));
        var l;
        this.Vc.G(!(null == (l = _.Um(this.pb, iA, 2)) || !_.Q(l, 5)));
        var m, n;
        g = null == (m = _.Um(this.pb, iA, 2)) ? void 0 : null == (n = _.Um(m, cA, 3)) ? void 0 : _.zk(n, bA, 1);
        this.C.Ha((null == g ? 0 : g.length) ? g : null)
    };
    mN.prototype.K = function (a) {
        this.l(a)
    };
    mN.prototype.l = function () {
        this.rc.G({});
        this.j.G([]);
        this.o.ba();
        this.oc.G(!1);
        this.Vc.G(!1);
        this.C.ba()
    };
    var nN = function (a, b, c, d) {
        Z.call(this, a, 980);
        this.vb = b;
        this.output = new rs;
        this.j = X(this, c);
        this.o = X(this, d)
    };
    _.T(nN, Z);
    nN.prototype.g = function () {
        (_.I = _.x(Object, "entries").call(Object, this.j.value), _.x(_.I, "find")).call(_.I, function (c) {
            var d = _.u(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.bf)
        }) && (this.vb.L = !0);
        oo(25, this.context);
        for (var a = _.u(this.o.value), b = a.next(); !b.done; b = a.next()) Ah(b.value);
        this.output.notify()
    };
    var oN = function (a, b, c, d) {
        Z.call(this, a, 931);
        this.j = Y(this, b);
        this.Kc = c;
        this.qc = d
    };
    _.T(oN, Z);
    oN.prototype.g = function () {
        var a = this.j.value, b = new _.A.Map;
        this.Kc.G(new _.A.Map);
        if (a) {
            var c;
            a = _.u(null != (c = this.j.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = _.zk(d, aA, 1);
                c = 1 === _.tg(c[0], 1, 0) ? uz(c[0]) : vz(c[0], tz);
                d = _.Ug(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.qc.G(b)
    };
    oN.prototype.l = function () {
        this.Kc.G(new _.A.Map);
        this.qc.G(new _.A.Map)
    };
    var pN = function (a, b, c) {
        Z.call(this, a, 981);
        this.o = W(this);
        this.C = Y(this, b);
        this.j = c
    };
    _.T(pN, Z);
    pN.prototype.g = function () {
        var a = new _.A.Map, b, c = _.u(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = _.zk(b, aA, 1);
            d = 1 === _.tg(d[0], 1, 0) ? uz(d[0]) : vz(d[0], tz);
            a.set(d, _.Ug(b, 2))
        }
        this.o.G(a);
        this.j.G(new Si)
    };
    pN.prototype.l = function () {
        this.o.G(new _.A.Map);
        var a = this.j, b = a.G;
        var c = new Si;
        c = _.yi(c, 1, 2);
        b.call(a, c)
    };
    var qN = function (a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        HI(this, b);
        HI(this, c)
    };
    _.T(qN, Z);
    qN.prototype.g = function () {
        var a;
        null == (a = this.nextFunction) || a.apply(this.j, [this.requestBidsConfig])
    };
    var rN = function (a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.o = b;
        this.j = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new rs
    };
    _.T(rN, Z);
    rN.prototype.g = function () {
        zq(this.pbjs, this.o, this.j, this.C, this.requestBidsConfig);
        this.output.notify()
    };
    rN.prototype.l = function () {
        this.output.notify()
    };
    var sN = function (a, b, c, d, e, f) {
        Z.call(this, a, 1100);
        this.pbjs = b;
        this.o = c;
        this.j = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new rs
    };
    _.T(sN, Z);
    sN.prototype.g = function () {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.Zf($D);
        if (c) this.Cd(c); else {
            var d, e, f, g;
            a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
            d = _.u(a);
            for (e = d.next(); !e.done; e = d.next()) if (e = e.value.code) {
                a = g = f = void 0;
                if (null == (b = this.o)) b = void 0; else {
                    c = b.get;
                    if (_.H(ZD)) {
                        var h = e.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                        h = 3 !== (null == h ? void 0 : h.length) ? e : "/" + h[1] + h[2]
                    } else h = e;
                    b = c.call(b, h)
                }
                b = null != (f = null != (g = b) ? g : null == (a = this.o) ? void 0 : a.get(_.Uh(e))) ? f : 0;
                this.Cd(b)
            }
        }
        this.output.notify()
    };
    sN.prototype.Cd = function (a) {
        var b;
        null != (b = this.j) && qi(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.j) || _.yi(c, 1, 1);
            var d;
            null != (d = this.j) && _.vi(d, 3, a);
            if (!this.C) {
                this.requestBidsConfig.timeout = a;
                var e, f, g;
                b = null != (g = null == (f = (e = this.pbjs).getConfig) ? void 0 : f.call(e).s2sConfig) ? g : [];
                if (Array.isArray(b)) for (e = _.u(b), f = e.next(); !f.done; f = e.next()) f.value.timeout = a; else b.timeout = a;
                var h, k;
                null == (k = (h = this.pbjs).setConfig) || k.call(h, {bidderTimeout: a})
            }
        }
    };
    sN.prototype.l = function () {
        this.output.notify()
    };
    var tN = function (a, b, c, d, e, f, g, h) {
        _.V.call(this);
        this.g = a;
        this.j = b;
        this.l = c;
        this.F = d;
        this.K = e;
        this.I = f;
        this.o = g;
        this.pbjs = h
    };
    _.T(tN, _.V);
    tN.prototype.push = function (a) {
        var b = a.context, c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new Mk;
            _.R(this, d);
            var e = new sN(this.g, this.pbjs, this.K, this.I, this.o, a),
                f = new rN(this.g, this.j, this.l, this.F, this.pbjs, a);
            J(d, e);
            J(d, f);
            J(d, new qN(this.g, f.output, e.output, c, b, a));
            d.run()
        }
    };
    var Bq = function (a, b) {
        this.push = L(a, 932, function (c) {
            b.push(c)
        })
    };
    var uN = function (a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 951);
        this.B = window;
        this.H = X(this, b);
        this.o = Y(this, d);
        this.C = X(this, e);
        this.O = X(this, f);
        this.j = Y(this, g);
        this.W = Y(this, h);
        this.J = X(this, k);
        HI(this, c);
        this.mf = null != l ? l : W(this);
        this.nf = null != m ? m : W(this)
    };
    _.T(uN, Z);
    uN.prototype.g = function () {
        var a = !!fp().pbjs_hooks;
        this.nf.G(a);
        this.mf.Ha(a ? null : _.ig());
        var b, c = null == (b = this.o.value) ? void 0 : b.size, d;
        b = (null == (d = this.j.value) ? void 0 : d.size) || _.Zf($D);
        d = this.H.value;
        var e, f = null != (e = fp().pbjs_hooks) ? e : [];
        e = new tN(this.context, this.o.value, this.C.value, this.O.value, this.j.value, this.W.value, this.J.value, d);
        _.R(this, e);
        f = _.u(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) fp().pbjs_hooks = Cq(this.context, e);
        !c && !b || a || Aq(d, this.B)
    };
    var vN = function (a, b, c) {
        Z.call(this, a, 966);
        this.B = b;
        this.bc = c
    };
    _.T(vN, Z);
    vN.prototype.g = function () {
        var a = this, b = li(this.B);
        if (b) this.bc.G(b); else if (b = Object.getOwnPropertyDescriptor(this.B, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.B, "_pbjsGlobals", {
                set: function (d) {
                    c = d;
                    (d = li(a.B)) && a.bc.G(d)
                }, get: function () {
                    return c
                }
            })
        }
    };
    vN.prototype.l = function () {
    };
    var qu = function (a, b, c, d, e) {
        Z.call(this, a, 1146, _.Zf(IE));
        this.vb = b;
        this.B = d;
        this.j = e;
        this.o = GI(this, c)
    };
    _.T(qu, Z);
    qu.prototype.g = function () {
        var a = this.o.value, b = new Mk;
        _.R(this, b);
        var c = new vN(this.context, this.B, this.j.bc);
        J(b, c);
        if (a) {
            a = new mN(this.context, a, this.j.rc, this.j.oc, this.j.Vc);
            J(b, a);
            var d = new nN(this.context, this.vb, a.rc, a.j);
            J(b, d);
            var e = new oN(this.context, a.o, this.j.Kc, this.j.qc);
            J(b, e);
            var f = new pN(this.context, a.C, this.j.Jf);
            J(b, f);
            c = new uN(this.context, c.bc, d.output, e.qc, this.j.oc, e.Kc, f.o, f.j, a.Vc, this.j.mf, this.j.nf);
            J(b, c)
        } else wN(this);
        b.run()
    };
    var wN = function (a) {
        a.j.rc.G({});
        a.j.qc.G(new _.A.Map);
        a.j.oc.G(!1);
        a.j.Kc.G(new _.A.Map);
        a.j.mf.ba();
        a.j.nf.G(!1);
        a.j.Jf.G(new Si);
        a.j.Vc.G(!1)
    };
    qu.prototype.K = function (a) {
        this.l(a)
    };
    qu.prototype.l = function () {
        wN(this)
    };
    var xN = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 920);
        this.R = b;
        this.T = c;
        this.pbjs = f;
        this.o = g;
        this.j = W(this);
        this.C = [];
        this.O = X(this, d);
        this.J = Y(this, e.qc);
        this.H = X(this, e.oc);
        this.fa = X(this, e.Kc);
        this.W = Y(this, e.Jf)
    };
    _.T(xN, Z);
    xN.prototype.g = function () {
        for (var a = new _.A.Map, b = !1, c = _.u(this.O.value), d = c.next(), e = {}; !d.done; e = {gh: void 0}, d = c.next()) {
            d = d.value;
            for (var f = {}, g = _.u(Bm(this.T[d.getDomId()])), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.F(h, 1)] = Im(h);
            var k = h = g = void 0;
            (f = aj(this.pbjs, {
                Xc: d.getDomId(),
                adUnitCode: d.getAdUnitPath()
            }, f, null != (h = this.J.value) ? h : void 0, this.H.value, this.fa.value, null != (k = null == (g = this.W) ? void 0 : g.value) ? k : void 0)) ? (b = !0, a.set(d, f)) : (null === f && this.C.push(d), a.set(d, new Ti));
            e.gh = d.getDomId() + d.getAdUnitPath();
            Ui.has(e.gh) || _.Vp(d, function (l) {
                return function () {
                    return Ui.delete(l.gh)
                }
            }(e))
        }
        b ? (this.o.Ha(a), this.j.G(this.C)) : (this.o.ba(), this.j.ba())
    };
    xN.prototype.K = function (a) {
        this.l(a)
    };
    xN.prototype.l = function (a) {
        this.R.error(IL(a.message));
        this.o.ba();
        this.j.ba()
    };
    var yN = function (a, b, c, d) {
        Z.call(this, a, 1019);
        this.T = c;
        this.pbjs = d;
        this.j = Y(this, b)
    };
    _.T(yN, Z);
    yN.prototype.g = function () {
        zN(this)
    };
    var zN = function (a) {
        if (!(Math.random() >= _.Zf(YD))) {
            var b = (a.j.value || []).filter(function (k) {
                return Bm(a.T[k.getDomId()]).some(function (l) {
                    return "hb_pb" === Bk(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g,
                    h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Pi(new _.A.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function (k) {
                        return k.code
                    })))) : _.x(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                c = new Gp("haux");
                Ip(c, "ius", b.map(function (k) {
                    return k.getAdUnitPath()
                }).join("~"));
                Ip(c, "dids", b.map(function (k) {
                    return k.getDomId()
                }).join("~"));
                Ip(c, "paucs", h.join("~"));
                Hp(c, a.context);
                Kp(c)
            }
        }
    };
    var Hq = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1153);
        this.R = b;
        this.T = c;
        this.networkCode = d;
        this.H = e;
        this.se = f;
        this.j = h;
        this.J = X(this, f.rc);
        this.o = new yI(f.bc);
        g && (this.C = Y(this, g))
    };
    _.T(Hq, Z);
    Hq.prototype.g = function () {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = AN(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.R.error(HL()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new Mk;
            var c = new xN(this.context, this.R, this.T, this.H, this.se, b, this.j.fh);
            J(a, c);
            J(a, new yN(this.context, c.j, this.T, b));
            a.run()
        } else this.j.fh.ba()
    };
    var AN = function (a) {
        var b;
        if (null == (b = a.C) ? 0 : b.value) return !0;
        var c = a.J.value;
        if (!c) return !1;
        var d;
        return !(null == (d = c["*"]) || !d.bf) || a.networkCode.split(",").some(function (e) {
            var f;
            return !(null == (f = c[e]) || !f.bf)
        })
    };
    var BN = function (a, b, c, d, e) {
        Z.call(this, a, 982);
        this.Hb = b;
        this.Oa = c;
        this.j = d;
        this.lf = e
    };
    _.T(BN, Z);
    BN.prototype.g = function () {
        for (var a = this, b = _.u(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
            Ie: void 0,
            Jg: void 0
        }, c = b.next()) d.Ie = c.value, d.Jg = function (e) {
            return function (f) {
                if (a.j === f.adId) {
                    var g = new Gp("hbm_brt");
                    Hp(g, a.context);
                    Ip(g, "et", e.Ie);
                    Ip(g, "sf", a.Hb);
                    Ip(g, "qqid", a.Oa);
                    var h, k, l;
                    Ip(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    Kp(g)
                }
            }
        }(d), (0, this.lf.onEvent)(d.Ie, d.Jg), _.Vp(this, function (e) {
            return function () {
                return void fm(a.context, a.id, function () {
                    var f, g;
                    return void (null == (g = (f = a.lf).offEvent) ? void 0 : g.call(f, e.Ie, e.Jg))
                }, !0)
            }
        }(d))
    };
    BN.prototype.l = function () {
    };
    var CN = function (a, b, c, d, e) {
        Z.call(this, a, 1134);
        this.o = b;
        this.Hb = c;
        this.Oa = d;
        this.j = new yI(e)
    };
    _.T(CN, Z);
    CN.prototype.g = function () {
        var a;
        if (this.o && null != (a = this.j.value) && a.onEvent) {
            a = new Mk;
            var b = new BN(this.context, this.Hb, this.Oa, this.o, this.j.value);
            J(a, b);
            a.run()
        }
    };
    var GN = function (a, b, c, d) {
        var e = this;
        this.context = a;
        this.M = c;
        this.g = new _.A.Map;
        this.A = new _.A.Map;
        this.timer = _.Xf(bm);
        hK() && (_.Of(window, "DOMContentLoaded", $l(a, 334, function () {
            for (var f = _.u(e.g), g = f.next(); !g.done; g = f.next()) {
                var h = _.u(g.value);
                g = h.next().value;
                h = h.next().value;
                DN(e, g, h) && e.g.delete(g)
            }
        })), b.listen(zK, function (f) {
            f = f.detail;
            var g = f.T;
            return void EN(e, FN(d, f.eh), vt(g, 20))
        }), b.listen(AK, function (f) {
            f = f.detail;
            var g = f.T;
            f = FN(d, f.eh);
            g = vt(g, 20);
            var h = e.A.get(f);
            null != h ? jK(h, g) : EN(e, f, g)
        }))
    }, EN = function (a, b, c) {
        DN(a, b, c) ? a.g.delete(b) : (a.g.set(b, c), _.Vp(b, function () {
            return a.g.delete(b)
        }))
    }, DN = function (a, b, c) {
        var d = En(b);
        if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
        d = new gK({
            B: window, timer: a.timer, Sb: d, sb: function (e) {
                return void dm(a.context, 336, e)
            }, Bm: _.H(mG)
        });
        if (!d.A) return !1;
        jK(d, c);
        a.A.set(b, d);
        HK(a.M, b, function () {
            return void a.A.delete(b)
        });
        return !0
    };
    var HN = function (a, b, c, d, e) {
        Z.call(this, a, 1058);
        this.B = b;
        this.Z = c;
        this.output = FI(this);
        d && (this.j = Y(this, d.Uc));
        HI(this, e)
    };
    _.T(HN, Z);
    HN.prototype.g = function () {
        var a;
        Sh(this.B.isSecureContext, this.B, this.B.document) && null != (a = this.j) && a.value && !_.H(bE) && ph(this.Z) && (a = this.j.value, a({
            message: "goog:spam:client_age",
            pvsid: this.context.pvsid
        }));
        this.output.notify()
    };
    var IN = function (a, b, c) {
        Z.call(this, a, 1199);
        this.j = c;
        this.o = Y(this, b)
    };
    _.T(IN, Z);
    IN.prototype.g = function () {
        var a = this.o.value;
        a && (a = nM(this.j, a.getSlotElementId()), qi(a, 30, !0))
    };
    var JN = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1109);
        this.aa = c;
        this.ca = d;
        this.j = e;
        this.C = f;
        this.H = g;
        this.o = h;
        this.output = W(this);
        this.J = Y(this, b)
    };
    _.T(JN, Z);
    JN.prototype.g = function () {
        var a = this, b = this.J.value;
        b && (this.o.push(function () {
            b.addService(a.j)
        }), PB(this.aa, function () {
            a.H();
            a.C(b);
            _.Q(a.ca, 4) && a.j.refresh([b])
        }))
    };
    var KN = {},
        Nq = (KN[64] = KL, KN[134217728] = LL, KN[32768] = ML, KN[536870912] = NL, KN[8] = OL, KN[512] = PL, KN[1048576] = QL, KN[4194304] = SL, KN);
    var LN = function (a) {
        return "22639388115" === Zl(a.getAdUnitPath())
    };
    var MN = function (a, b, c, d, e, f) {
        Z.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.xb = d;
        this.o = e;
        this.R = f;
        this.output = W(this);
        this.j = W(this)
    };
    _.T(MN, Z);
    MN.prototype.g = function () {
        var a = ar(this.context, this.R, this.o, {Nh: this.format, adUnitPath: this.adUnitPath, xb: this.xb});
        this.j.Ha(a);
        this.output.Ha(a ? a.g : null)
    };
    var NN = function (a, b, c, d) {
        Z.call(this, a, 1111);
        this.j = c;
        this.o = d;
        this.C = Y(this, b)
    };
    _.T(NN, Z);
    NN.prototype.g = function () {
        var a = this.C.value;
        a && (a = nM(this.j, a.getSlotElementId()), Ik(a, 27, qA, this.o))
    };
    var ON = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        Mk.call(this);
        this.context = a;
        this.aa = b;
        this.adUnitPath = c;
        this.format = d;
        this.xb = e;
        this.W = f;
        this.na = g;
        this.O = h;
        this.J = k;
        this.ca = l;
        this.K = m;
        this.fa = n;
        this.R = p;
        this.ha = r;
        this.o = v;
        a = J(this, new MN(this.context, this.adUnitPath, this.format, this.xb, this.fa, this.R));
        this.o && J(this, new NN(this.context, a.output, this.K, this.o));
        this.ha && J(this, new IN(this.context, a.output, this.K));
        J(this, new JN(this.context, a.output, this.aa, this.ca, this.W, this.na, this.O, this.J));
        this.g = {Fo: a.j}
    };
    _.T(ON, Mk);
    var qv = function (a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 1198);
        this.aa = b;
        this.googletag = c;
        this.ca = d;
        this.j = e;
        this.o = f;
        this.R = g;
        this.jd = h;
        this.C = k
    };
    _.T(qv, Z);
    qv.prototype.g = function () {
        for (var a = this, b = _.u(this.C), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.tg(d, 2, 0);
            c && d && (this.jd.add(Zl(c)), c = new ON(this.context, this.aa, c, d, !0, this.googletag.pubads(), this.googletag.display, function () {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.ca, this.j, this.o, this.R, !0), c.run(), _.R(this, c))
        }
    };
    var Xt = function (a, b) {
        Z.call(this, a, 1110);
        this.B = b;
        this.output = W(this)
    };
    _.T(Xt, Z);
    Xt.prototype.g = function () {
        var a = this.B;
        a = _.H(iG) && void 0 !== a.credentialless && (_.H(jG) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var PN = function (a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.M = b;
        this.P = c;
        this.aa = d;
        this.output = FI(this);
        this.j = X(this, e);
        HI(this, f)
    };
    _.T(PN, Z);
    PN.prototype.g = function () {
        var a = this.P, b = a.ca;
        a = a.T;
        for (var c = _.u(this.j.value), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = e;
            var f = b;
            e = a[e.getDomId()];
            var g = this.M, h = this.aa;
            br(e, f) && !g.Dc(d) && cr(d, h, e, f)
        }
        this.output.notify()
    };
    var QN = function (a, b, c, d) {
        Z.call(this, a, 1208);
        this.j = b;
        this.dg = c;
        this.B = d;
        this.output = new rs
    };
    _.T(QN, Z);
    QN.prototype.g = function () {
        var a, b = null == (a = this.dg) ? void 0 : _.Um(a, JA, 1);
        if (b) if (_.H(jE)) {
            a = new rH(this.B);
            var c = !0;
            c = void 0 === c ? !1 : c;
            var d = _.Ug(b, 2) - Date.now() / 1E3;
            d = {Ye: Math.max(d, 0), path: _.F(b, 3), domain: _.F(b, 4), cj: !1};
            c ? vh("__eoi", b.getValue(), d, a.g) : (new uh(a.g.document)).set("__eoi", b.getValue(), d)
        } else a = this.j, c = new JH, c = qi(c, 5, !0), QH(a, "__eoi", b, c);
        this.output.notify()
    };
    var qr = function (a, b, c, d) {
        Z.call(this, a, 896);
        this.jg = b;
        this.Cc = d;
        this.cd = W(this);
        c && HI(this, c)
    };
    _.T(qr, Z);
    qr.prototype.g = function () {
        this.cd.G(this.jg.bd(".google.cn" === this.Cc))
    };
    var ru = function (a, b) {
        Z.call(this, a, 1018);
        this.Oe = FI(this);
        this.j = Y(this, b)
    };
    _.T(ru, Z);
    ru.prototype.g = function () {
        var a, b, c;
        if (null == (a = this.j.value)) a = void 0; else {
            var d;
            null == (b = _.Um(a, AG, 5)) ? d = void 0 : d = ne(b, 1, Jc, 2);
            a = d
        }
        a = _.u(null != (c = a) ? c : []);
        for (c = a.next(); !c.done; c = a.next()) Ah(c.value);
        this.Oe.notify()
    };
    var su = function (a, b) {
        Z.call(this, a, 1070);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(su, Z);
    su.prototype.g = function () {
        var a, b = null == (a = this.o.value) ? void 0 : _.Um(a, AG, 5);
        if (b) {
            a = [];
            for (var c = _.u(ne(b, 2, Je, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new qA;
                var f = new oA;
                e = _.Gk(f, 1, Wc(e));
                d = _.Ai(d, 2, e);
                null != $i(b, 3) && (e = new mA, e = _.yi(e, 1, 1), f = _.qz(b, 3), e = _.vi(e, 2, f), _.Ai(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else this.j.G([])
    };
    var RN = function (a, b, c, d) {
        Z.call(this, a, 1016);
        this.output = W(this);
        this.o = Y(this, b);
        this.j = Y(this, c);
        this.C = II(this, [b, d])
    };
    _.T(RN, Z);
    RN.prototype.g = function () {
        if (this.j.value) {
            var a = this.o.value || this.C.value;
            a && SN(this, a) ? this.output.G(a) : this.output.ba()
        } else this.output.ba()
    };
    RN.prototype.K = function (a) {
        this.l(a)
    };
    RN.prototype.l = function () {
        this.output.ba()
    };
    var SN = function (a, b) {
        return _.zk(a.j.value, kA, 1).some(function (c) {
            return _.F(c, 1) === b
        })
    };
    var TN = function (a, b) {
        Z.call(this, a, 1015);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(TN, Z);
    TN.prototype.g = function () {
        if (this.o.value) if (_.zk(this.o.value, kA, 1).length) {
            var a = _.zk(this.o.value, kA, 1)[0];
            (_.I = [2, 3], _.x(_.I, "includes")).call(_.I, _.tg(a, 3, 0)) ? this.j.G(_.F(a, 1)) : this.j.ba()
        } else this.j.ba(); else this.j.ba()
    };
    TN.prototype.K = function (a) {
        this.l(a)
    };
    TN.prototype.l = function () {
        this.j.ba()
    };
    var UN = function (a, b, c) {
        Z.call(this, a, 1017);
        this.B = c;
        this.output = FI(this);
        this.j = Y(this, b)
    };
    _.T(UN, Z);
    UN.prototype.g = function () {
        var a = this;
        if (this.j.value) {
            var b = UG(this.B, this.j.value, function (c) {
                if (!c) {
                    c = vg(b.g);
                    for (var d = _.u(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Ij(e.value)
                }
                a.output.notify()
            });
            b.start(_.H(oE))
        } else this.output.notify()
    };
    UN.prototype.K = function (a) {
        this.l(a)
    };
    UN.prototype.l = function () {
        this.output.notify()
    };
    var VN = function (a, b) {
        Z.call(this, a, 1056);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(VN, Z);
    VN.prototype.g = function () {
        var a = Zl(this.j.value.getAdUnitPath());
        this.output.G(a)
    };
    VN.prototype.K = function (a) {
        this.l(a)
    };
    VN.prototype.l = function () {
        this.output.ba()
    };
    var pu = function (a, b, c, d) {
        Z.call(this, a, 906, _.Zf(JE));
        this.j = FI(this);
        if (b === b.top) {
            var e = new Mk;
            _.R(this, e);
            var f = new TN(a, c);
            J(e, f);
            d = new Ur(a, d, zK, function (g) {
                return g.detail.T
            });
            J(e, d);
            d = new VN(a, d.output);
            J(e, d);
            a = new RN(a, f.j, c, d.output);
            J(e, a);
            b = new UN(this.context, a.output, b);
            J(e, b);
            CI(this.F, b.output, !0);
            e.run()
        } else this.j.notify()
    };
    _.T(pu, Z);
    pu.prototype.g = function () {
        this.j.notify()
    };
    pu.prototype.K = function (a) {
        this.l(a)
    };
    pu.prototype.l = function () {
        this.j.notify()
    };
    var $u = function (a, b, c, d, e) {
        Z.call(this, a, 934);
        this.B = b;
        this.slotId = c;
        HI(this, d);
        this.j = X(this, e)
    };
    _.T($u, Z);
    $u.prototype.g = function () {
        var a = this;
        this.slotId.listen(Br, function (b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut, e = c.clearAdsData, f = a.j.value, g = new JA;
                    var h = Ji(g, 1, d ? "1" : "0");
                    var k = Ji(_.vi(h, 2, 2147483647), 3, "/");
                    var l = Ji(k, 4, a.B.location.hostname);
                    var m = new _.OH(a.B);
                    QH(m, "__gpi_opt_out", l, f);
                    if (d || e) RH(m, "__gads", f), RH(m, "__gpi", f)
                }
            } catch (n) {
            }
        })
    };
    var WN = function (a, b, c) {
        Z.call(this, a, 944);
        this.B = b;
        this.j = new _.OH(this.B);
        this.o = X(this, c)
    };
    _.T(WN, Z);
    WN.prototype.g = function () {
        var a = this.o.value;
        if (PH(this.j, a)) {
            var b = _.po(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new JA;
                b = Ji(c, 1, b);
                b = Ji(_.vi(b, 2, 2147483647), 3, "/");
                b = Ji(b, 4, this.B.location.hostname);
                QH(this.j, "__gpi_opt_out", b, a)
            }
        }
    };
    var XN = function (a, b, c, d) {
        Z.call(this, a, 821);
        this.Z = b;
        this.Da = c;
        this.j = X(this, d)
    };
    _.T(XN, Z);
    XN.prototype.g = function () {
        if (ph(this.Z)) {
            var a = new _.A.Set;
            var b = _.zk(this.j.value, JA, 14);
            b = _.u(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0, e = null != (d = wz(c, 5)) ? d : 1;
                a.has(e) || (QH(this.Da, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        }
    };
    var YN = function () {
        this.A = [];
        this.hostpageLibraryTokens = [];
        this.g = {}
    }, Rt = function (a, b) {
        var c, d;
        a = null != (d = null == (c = a.g[b]) ? void 0 : _.x(c, "values").call(c)) ? d : [];
        return [].concat(_.Pi(a))
    };
    var ZN = function (a, b, c, d) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.ab = c;
        this.j = X(this, d)
    };
    _.T(ZN, Z);
    ZN.prototype.g = function () {
        var a = ne(this.j.value, 23, _.Dc, 2);
        a = _.u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.ab;
            if (!_.x(c.A, "includes").call(c.A, b) && (_.I = [1, 2, 3], _.x(_.I, "includes")).call(_.I, b)) {
                var d = TH[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.Lp(document, d)) d.id = e
                }
                c.A.push(b);
                e = new UH(b);
                c.hostpageLibraryTokens.push(e);
                c = fp();
                c.hostpageLibraryTokens || (c.hostpageLibraryTokens = {});
                c.hostpageLibraryTokens[e.g] = e.A
            }
            c = void 0;
            e = this.ab;
            d = this.slotId;
            e.g[b] = null != (c = e.g[b]) ? c : new _.A.Set;
            e.g[b].add(d)
        }
    };
    var tr = 0;
    var pv = function (a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.B = b;
        this.Ue = c;
        this.o = X(this, d);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(pv, Z);
    pv.prototype.g = function () {
        var a = this, b, c, d = null == (b = this.Ue) ? void 0 : null == (c = _.F(b, 1)) ? void 0 : c.toUpperCase(), e,
            f;
        b = null == (e = this.Ue) ? void 0 : null == (f = _.F(e, 2)) ? void 0 : f.toUpperCase();
        if (d && b) {
            e = this.o.value;
            f = this.j.value;
            var g = this.C.value, h = g.style.height, k = g.style.width, l = g.style.display, m = g.style.position,
                n = vr(e.id + "_top", d), p = vr(e.id + "_bottom", b);
            _.aq(p, {position: "relative", top: "calc(100vh - 48px)"});
            g.appendChild(n);
            g.appendChild(p);
            _.aq(f, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.aq(e, {position: "fixed", top: "0", height: "100vh"});
            var r;
            _.aq(g, {
                position: "relative",
                display: (null == (r = this.B.screen.orientation) ? 0 : r.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            Wp(this, 722, this.B, "orientationchange", function () {
                var v;
                (null == (v = a.B.screen.orientation) ? 0 : v.angle) ? _.aq(g, {display: "none"}) : _.aq(g, {display: "block"})
            });
            _.Vp(this, function () {
                _.pB(n);
                _.pB(p);
                g.style.position = m;
                g.style.height = h;
                g.style.width = k;
                g.style.display = l
            })
        }
    };
    var $N = _.Rw(["https://td.doubleclick.net/td/kb?kbli=", ""]), Xu = function (a, b, c, d, e) {
        Z.call(this, a, 1007);
        this.sg = b;
        this.j = X(this, d);
        c && (this.o = X(this, c));
        e && HI(this, e)
    };
    _.T(Xu, Z);
    Xu.prototype.g = function () {
        if (ph(this.j.value)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.sg;
                if (b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = za($N, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.Mx) throw new oy("TrustedResourceUrl", 3);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.Ea(b);
                    void 0 !== b && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    };
    var Ju = function (a, b, c, d) {
        Z.call(this, a, 1176);
        this.o = b;
        this.T = c;
        this.R = d;
        this.j = W(this)
    };
    _.T(Ju, Z);
    Ju.prototype.g = function () {
        var a, b = null != (a = this.o) ? a : new Ku;
        (a = null != $i(b, 2) ? null != xr(b) && 0 !== (0, _.xq)() ? $i(b, 2) * xr(b) : $i(b, 2) : null) && _.H(EE) && (_.I = [8, 9], _.x(_.I, "includes")).call(_.I, Sr(this.T)) ? (O(this.R, VL()), this.j.ba()) : this.j.Ha(a)
    };
    var Ru = function (a, b, c, d, e, f) {
        f = void 0 === f ? wr : f;
        Z.call(this, a, 666);
        this.o = f;
        this.output = FI(this);
        HI(this, b);
        e && HI(this, e);
        this.j = X(this, c);
        this.C = Y(this, d)
    };
    _.T(Ru, Z);
    Ru.prototype.g = function () {
        var a = this.C.value, b = this.j.value;
        null == a || 0 > a || !Hn(b) ? this.output.notify() : aO(this, a, b)
    };
    var aO = function (a, b, c) {
        var d = a.o(b, $l(a.context, 291, function (e, f) {
            e = _.u(e);
            for (var g = e.next(); !g.done; g = e.next()) if (g = g.value, !(0 >= g.intersectionRatio)) {
                f.unobserve(g.target);
                a.output.notify();
                break
            }
        }));
        d ? (d.observe(c), _.Vp(a, function () {
            d.disconnect()
        })) : a.output.notify()
    };
    var Qu = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.xd = c;
        this.M = d;
        this.output = FI(this);
        this.o = X(this, e);
        this.j = Y(this, f);
        g && HI(this, g)
    };
    _.T(Qu, Z);
    Qu.prototype.g = function () {
        var a = this, b, c = null != (b = this.j.value) ? b : 0;
        if (0 !== (0, _.xq)() || 0 < c) if (b = dI(document), eI(document) && b && (0 < MK(this.M, this.slotId) || !bO(this)) && b) {
            var d = Wp(this, 324, document, b, function () {
                eI(document) || (d && d(), a.output.notify())
            });
            if (d) return
        }
        this.output.notify()
    };
    var bO = function (a) {
        try {
            var b = top;
            if (!b) return !0;
            var c = sv(b.document, b).y, d = c + a.xd.height, e = a.o.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var Pu = function (a, b) {
        Z.call(this, a, 676);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(Pu, Z);
    Pu.prototype.g = function () {
        var a = hn(this.j.value);
        this.output.G(a)
    };
    var yr = function (a, b, c, d, e, f) {
        f = void 0 === f ? _.A.globalThis.IntersectionObserver : f;
        Z.call(this, a, 886);
        this.X = b;
        this.M = c;
        this.o = d;
        this.j = f;
        this.output = FI(this);
        e && HI(this, e)
    };
    _.T(yr, Z);
    yr.prototype.g = function () {
        this.X.some(function (a) {
            return !Hn(En(a))
        }) ? this.output.notify() : zI(this.output, cO(this, this.o))
    };
    var cO = function (a, b) {
        return new _.A.Promise(function (c) {
            if (a.j) {
                for (var d = new a.j(function (h, k) {
                    h.some(function (l) {
                        return 0 < l.intersectionRatio
                    }) && (k.disconnect(), c())
                }, {rootMargin: b + "%"}), e = _.u(a.X), f = e.next(), g = {}; !f.done; g = {sf: void 0}, f = e.next()) {
                    f = f.value;
                    g.sf = En(f);
                    if (!g.sf) return;
                    d.observe(g.sf);
                    HK(a.M, f, function (h) {
                        return function () {
                            return void d.unobserve(h.sf)
                        }
                    }(g))
                }
                _.Vp(a, function () {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var dO = [{name: "Interstitial", format: 1, Zd: 5}, {name: "TopAnchor", format: 2, Zd: 2}, {
            name: "BottomAnchor",
            format: 3,
            Zd: 3
        }, {name: "LeftSideRail", format: 4, Zd: 8}, {name: "RightSideRail", format: 5, Zd: 9}],
        mu = function (a, b, c, d, e, f, g) {
            Z.call(this, a, 789);
            this.aa = b;
            this.googletag = c;
            this.o = d;
            this.j = e;
            this.R = f;
            this.C = g;
            this.output = W(this)
        };
    _.T(mu, Z);
    mu.prototype.g = function () {
        var a = this;
        dO.filter(function (b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.C)
        }).forEach(function (b) {
            var c = b.name;
            b = b.Zd;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new ON(a.context, a.aa, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function (f) {
                return void a.googletag.display(f)
            }, function () {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.j.g, a.j, a.o, a.R, !1);
            _.R(a, c);
            c.run()
        })
    };
    var eO = function (a, b, c) {
        Z.call(this, a, 1163);
        _.H(av);
        this.j = X(this, b);
        c && HI(this, c)
    };
    _.T(eO, Z);
    eO.prototype.g = function () {
        this.j.value.Hj();
        this.j.value.La()
    };
    var cv = function (a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 682);
        this.M = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.gb = f;
        this.j = W(this);
        this.o = X(this, g);
        this.J = X(this, h);
        this.C = Y(this, k);
        this.H = X(this, l)
    };
    _.T(cv, Z);
    cv.prototype.g = function () {
        var a = this, b;
        if (null != (b = this.gb) && _.Q(b, 12, !1)) {
            b = this.C.value.Sk;
            var c = _.dr(this.M, this.slotId), d = this.J.value, e = this.o.value;
            _.aq(e, {"max-height": "30vh", overflow: "hidden"});
            if (fO) fO.Fj(e, this.H.value); else {
                var f, g;
                fO = new b(this.context, this.format, e, this.B, d, this.M, this.slotId, null != (g = null == (f = this.gb) ? void 0 : _.Um(f, AA, 16)) ? g : null);
                f = {};
                g = _.u(_.zk(this.gb, zA, 13));
                for (b = g.next(); !b.done; b = g.next()) b = b.value, f[Bk(b, 1)] = Bk(b, 2);
                fO.Gj(f);
                _.H(av) ? (fO.dn(), this.j.G(fO)) : fO.La();
                GK(this.M, this.slotId, function () {
                    fO && (fO.xa(), fO = null);
                    c && _.KK(a.M, a.slotId)
                })
            }
            _.Vp(this, function () {
                return _.pB(e)
            })
        }
    };
    var fO = null;
    var bv = function (a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 1155);
        this.M = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.gb = f;
        this.j = g;
        this.C = h;
        this.o = k;
        this.H = l
    };
    _.T(bv, Z);
    bv.prototype.g = function () {
        var a;
        if (null != (a = this.gb) && null != mo(a, 12)) {
            a = new Mk;
            _.R(this, a);
            var b,
                c = (null == (b = this.gb) ? 0 : _.Q(b, 15)) ? J(a, new Ar(this.context, this.slotId, Br, function (d) {
                    d = d.detail.data;
                    try {
                        var e = JSON.parse(d);
                        return "floating" === e.type && "loaded" === e.message
                    } catch (f) {
                    }
                    return !1
                })).output : void 0;
            b = new cv(this.context, this.M, this.format, this.slotId, this.B, this.gb, this.j, this.C, this.o, this.H);
            J(a, b);
            b = new eO(this.context, b.j, c);
            J(a, b);
            a.run()
        }
    };
    var Hr = function (a, b, c) {
        Z.call(this, a, 1150);
        this.B = b;
        this.output = FI(this);
        HI(this, c)
    };
    _.T(Hr, Z);
    Hr.prototype.g = function () {
        var a = this;
        this.B.location.hash = "goog_game_inter";
        _.Vp(this, function () {
            "goog_game_inter" === a.B.location.hash && (a.B.location.hash = "")
        });
        zI(this.output, new _.A.Promise(function (b) {
            return void Wp(a, a.id, a.B, "hashchange", function (c) {
                xx(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var gO = function (a, b) {
        this.serviceName = b;
        this.slot = a.g
    }, hO = function (a, b) {
        gO.call(this, a, b);
        this.isEmpty = !1;
        this.slotContentChanged = !0;
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
        this.isBackfill = !1;
        this.vast = this.companyIds = this.yieldGroupIds = null
    };
    _.T(hO, gO);
    var iO = function () {
        gO.apply(this, arguments)
    };
    _.T(iO, gO);
    var jO = function (a, b, c) {
        gO.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(jO, gO);
    var kO = function () {
        gO.apply(this, arguments)
    };
    _.T(kO, gO);
    var lO = function () {
        gO.apply(this, arguments)
    };
    _.T(lO, gO);
    var mO = function () {
        gO.apply(this, arguments)
    };
    _.T(mO, gO);
    var nO = function () {
        gO.apply(this, arguments)
    };
    _.T(nO, gO);
    var oO = function (a, b, c, d) {
        gO.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(oO, gO);
    var pO = function (a, b, c) {
        gO.call(this, a, b);
        this.payload = c
    };
    _.T(pO, gO);
    var qO = function () {
        gO.apply(this, arguments)
    };
    _.T(qO, gO);
    var rO = function (a, b, c) {
        gO.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(rO, gO);
    var sO = function () {
        gO.apply(this, arguments)
    };
    _.T(sO, gO);
    var Ir = function (a, b, c, d, e, f) {
        Z.call(this, a, 1151);
        this.slotId = b;
        this.za = c;
        HI(this, d);
        a = [e];
        f && a.push(f);
        f = new AI(a, !0);
        CI(this.F, f)
    };
    _.T(Ir, Z);
    Ir.prototype.g = function () {
        wt(this.za, "gameManualInterstitialSlotClosed", 1148, new sO(this.slotId, "publisher_ads"))
    };
    var Fr = function (a, b, c, d) {
        Z.call(this, a, 1149);
        this.slotId = b;
        this.za = c;
        this.output = FI(this);
        HI(this, d)
    };
    _.T(Fr, Z);
    Fr.prototype.g = function () {
        var a = new _.ei, b = a.promise;
        wt(this.za, "gameManualInterstitialSlotReady", 1147, new rO(this.slotId, "publisher_ads", a.resolve));
        zI(this.output, b.then(function () {
            return QB(10)
        }))
    };
    var Er = function (a, b, c) {
        c = void 0 === c ? tO : c;
        Z.call(this, a, 1158);
        this.j = c;
        this.o = 1E3 * _.Zf(Dr);
        this.output = FI(this);
        HI(this, b)
    };
    _.T(Er, Z);
    Er.prototype.g = function () {
        var a = this;
        this.j.kf++ ? zI(this.output, QB(this.o * (this.j.kf - 2) + (this.o - (Date.now() - this.j.tg))).then(function () {
            a.j.tg = Date.now();
            a.j.kf--
        })) : (this.j.tg = Date.now(), QB(this.o).then(function () {
            return void a.j.kf--
        }), this.output.notify())
    };
    var tO = {kf: 0, tg: Date.now()};
    var uO = {width: "100%", height: "100%", left: "0", top: "0"},
        vO = {width: "100%", height: "100%", transform: "translate(-50%, -50%)", left: "50%", top: "50%"},
        Gr = function (a, b, c, d, e) {
            Z.call(this, a, 1150);
            this.B = b;
            this.j = X(this, c);
            this.C = X(this, d);
            HI(this, e);
            this.o = new _.TI(this.B)
        };
    _.T(Gr, Z);
    Gr.prototype.g = function () {
        var a = 0 === (0, _.xq)() ? "rgba(1,1,1,0.5)" : "white";
        _.aq(this.j.value, _.x(Object, "assign").call(Object, {position: "absolute"}, 0 === (0, _.xq)() ? vO : uO));
        _.aq(this.C.value, _.x(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, uO));
        _.Vp(this, _.fJ(this.B.document, this.B));
        a = {};
        sB(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.B === this.B.top) {
            var b = _.VI(this.o, 2147483646);
            _.ZI(b);
            _.Vp(this, function () {
                return void _.$I(b)
            })
        }
    };
    var Kr = function () {
        this.Vf = 1E3
    };
    Kr.prototype.send = function (a, b) {
        a.fj(b)
    };
    var Nr = function () {
        this.Vf = _.Zf(cG);
        this.fb = 17
    };
    Nr.prototype.send = function (a, b) {
        var c = _.Jj(b, _.Kj, 2);
        _.we(c, 1, _.Bc, this.fb);
        a.xm(b)
    };
    var wO = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.O = c;
        this.j = d;
        this.o = W(this);
        this.C = X(this, e);
        this.W = X(this, f);
        this.H = Y(this, g);
        this.J = Y(this, h);
        this.context.V.log(578856259, _.Mj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Fb: this.context.Pa,
            U: 7
        })
    };
    _.T(wO, Z);
    wO.prototype.g = function () {
        var a = this;
        this.context.V.log(578856259, _.Mj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Fb: this.context.Pa,
            U: 8
        });
        var b = this.W.value, c = this.C.value, d = this.J.value.ll, e = new _.rK(this.context),
            f = null != Wm(this.j, 14) ? 60 * vt(this.j, 14) : 604800;
        b = new d(this.context, window, c, b, e, this.O, xO(this), new _.A.Set(ne(this.j, 15, _.Dc, 2)), LN(this.slotId), function () {
            return void a.xa()
        }, function () {
            Pr(a.context, {
                mb: 1, payload: function () {
                    var g = new Pq, h = _.Qq(g, wD, 5, Sq), k = _.jg();
                    _.Oi(h, 1, k);
                    return g
                }
            });
            a.xa()
        }, f, this.H.value);
        b.na();
        _.R(this, b);
        this.o.G(b);
        this.context.V.log(578856259, _.Mj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Fb: this.context.Pa,
            U: 9
        })
    };
    var xO = function (a) {
        var b = {};
        a = _.zk(a.j, zA, 13);
        a = _.u(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[Bk(c, 1)] = Bk(c, 2);
        return b
    };
    var yO = function (a, b, c, d) {
        Z.call(this, a, 1210);
        this.action = b;
        this.j = Y(this, c);
        HI(this, d)
    };
    _.T(yO, Z);
    yO.prototype.g = function () {
        var a;
        null != (a = this.j.value) && a.ob() && this.action()
    };
    var zO = function (a, b, c) {
        Z.call(this, a, 1121);
        this.aa = b;
        this.output = FI(this);
        this.C = !1;
        this.H = X(this, c)
    };
    _.T(zO, Z);
    zO.prototype.g = function () {
        var a = this;
        if (this.o = Qr($l(this.context, this.id, function (b) {
            b = _.u(b);
            for (var c = b.next(); !c.done; c = b.next()) c = 100 * c.value.intersectionRatio, _.x(Number, "isFinite").call(Number, c) && 50 <= c ? a.j || (a.C = !0, eI(a.aa) || AO(a)) : (a.C = !1, BO(a))
        }))) _.Vp(this, function () {
            var b;
            null == (b = a.o) || b.disconnect();
            BO(a)
        }), this.o.observe(this.H.value), this.J = Wp(this, this.id, this.aa, "visibilitychange", function () {
            eI(a.aa) ? BO(a) : a.C && !a.j && AO(a)
        })
    };
    var AO = function (a) {
        a.j = setTimeout(function () {
            a.j = void 0;
            if (!eI(a.aa)) {
                a.output.notify();
                var b;
                null == (b = a.o) || b.disconnect();
                var c;
                null == (c = a.J) || c.call(a)
            }
        }, 1E3)
    }, BO = function (a) {
        clearTimeout(a.j);
        a.j = void 0
    };
    var dv = function (a, b, c, d, e, f, g, h, k, l, m) {
        m = void 0 === m ? function () {
            return _.jg()
        } : m;
        Z.call(this, a, 1141);
        this.slotId = b;
        this.J = c;
        this.o = d;
        this.aa = e;
        this.j = f;
        this.O = g;
        this.zb = h;
        this.H = k;
        this.C = l;
        this.kc = m;
        this.output = W(this)
    };
    _.T(dv, Z);
    dv.prototype.g = function () {
        var a = this;
        if (this.o) {
            var b = new Mk;
            _.R(this, b);
            var c = J(b, new wO(this.context, this.slotId, this.J, this.o, this.j, this.O, this.zb, this.H));
            _.Vp(c, function () {
                return void a.xa()
            });
            this.output.Ka(c.o.promise.then(function () {
                return !0
            }));
            if (_.H(xE) || _.Zf(AE)) {
                var d = J(b, new zO(this.context, this.aa, this.j));
                _.Zf(AE) && J(b, new yO(this.context, function () {
                    Pr(a.context, {
                        mb: _.Zf(AE), payload: function () {
                            var e = new vD, f = a.kc();
                            null !== f && _.Oi(e, 1, f);
                            return xD(e)
                        }
                    })
                }, c.o, d.output));
                _.H(xE) && J(b, new yO(this.context, function () {
                    Pr(a.context, {
                        mb: 1, payload: function () {
                            var e = new vD, f = a.kc();
                            null !== f && _.Oi(e, 1, f);
                            qi(e, 2, !0);
                            return xD(e)
                        }
                    });
                    a.C()
                }, c.o, d.output))
            }
            b.run()
        } else this.output.G(!1)
    };
    var CO = function (a) {
        this.module = a
    };
    CO.prototype.toString = function () {
        return String(this.module)
    };
    _.DO = new CO(2);
    _.EO = new CO(5);
    _.FO = new CO(6);
    var Wu = function (a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.o = b;
        this.format = c;
        this.gb = d;
        this.j = e;
        this.output = W(this);
        f && HI(this, f)
    };
    _.T(Wu, Z);
    Wu.prototype.g = function () {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.gb) || !_.Q(a, 12, !1));
        a = 5 === this.format && this.j;
        b || a ? this.output.Ka(this.o.load(_.DO)) : this.output.ba()
    };
    var GO = function (a, b, c, d, e) {
        Z.call(this, a, 905);
        this.P = b;
        this.j = c;
        this.output = FI(this);
        this.o = X(this, d);
        HI(this, e)
    };
    _.T(GO, Z);
    GO.prototype.g = function () {
        for (var a = _.u(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.P.T[b.value.getDomId()]) ? void 0 : Sr(c);
            if (2 === b || 3 === b || 5 === b) {
                this.j.load(_.DO);
                return
            }
        }
        this.output.notify()
    };
    var HO = function (a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.za = c;
        HI(this, d);
        II(this, [e, f])
    };
    _.T(HO, Z);
    HO.prototype.g = function () {
        wt(this.za, "rewardedSlotClosed", 703, new qO(this.slotId, "publisher_ads"))
    };
    var IO = function (a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.za = c;
        HI(this, d);
        this.j = Y(this, e)
    };
    _.T(IO, Z);
    IO.prototype.g = function () {
        var a, b = null == (a = this.j.value) ? void 0 : a.payload;
        wt(this.za, "rewardedSlotGranted", 702, new pO(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var JO = {width: "100%", height: "100%", left: "0", top: "0"}, KO = function (a, b, c, d, e, f) {
        Z.call(this, a, 693);
        this.B = b;
        this.H = f;
        this.output = FI(this);
        this.o = X(this, c);
        this.C = X(this, d);
        HI(this, e);
        this.j = new _.TI(this.B)
    };
    _.T(KO, Z);
    KO.prototype.g = function () {
        var a = this;
        if (!this.H.Oc) {
            var b = 0 === (0, _.xq)() ? "rgba(1,1,1,0.5)" : "white";
            _.aq(this.C.value, _.x(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, JO));
            _.Vp(this, _.fJ(this.B.document, this.B));
            sB(this.o.value).postMessage(JSON.stringify({type: "rewarded", message: "visible"}), "*");
            if (this.B === this.B.top) {
                this.B.location.hash = "goog_rewarded";
                var c = _.VI(this.j, 2147483646);
                _.ZI(c);
                _.Vp(this, function () {
                    _.$I(c);
                    "goog_rewarded" === a.B.location.hash && (a.B.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var LO = function (a, b, c, d) {
        Z.call(this, a, 695);
        this.B = b;
        this.j = X(this, c);
        HI(this, d)
    };
    _.T(LO, Z);
    LO.prototype.g = function () {
        if (this.B === this.B.top) var a = sB(this.j.value), b = Wp(this, 503, this.B, "hashchange", function (c) {
            xx(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                type: "rewarded",
                message: "back_button"
            }), "*"), b())
        })
    };
    var MO = function (a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.za = c;
        this.output = FI(this);
        this.j = X(this, d)
    };
    _.T(MO, Z);
    MO.prototype.g = function () {
        var a = this.j.value, b = new _.ei, c = b.promise, d;
        wt(this.za, "rewardedSlotReady", 701, new oO(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        zI(this.output, c)
    };
    var NO = {width: "100%", height: "100%", left: "0", top: "0"},
        OO = {width: "60%", height: "60%", transform: "translate(-50%, -50%)", left: "50%", top: "50%"},
        PO = function (a, b, c, d, e) {
            Z.call(this, a, 691);
            this.C = W(this);
            this.o = FI(this);
            this.H = X(this, c);
            this.j = II(this, [d, e])
        };
    _.T(PO, Z);
    PO.prototype.g = function () {
        if ("ha_before_make_visible" === this.j.value.message) this.o.notify(); else {
            var a = _.H(FE) ? NO : OO;
            _.aq(this.H.value, _.x(Object, "assign").call(Object, {position: "absolute"}, 0 === (0, _.xq)() ? a : NO));
            this.C.G(this.j.value)
        }
    };
    var ev = function (a, b, c, d, e, f) {
        Mk.call(this);
        var g = Vr(b, "granted", a);
        J(this, g);
        var h = Vr(b, "prefetched", a);
        J(this, h);
        var k = Vr(b, "closed", a);
        J(this, k);
        var l = Vr(b, "ha_before_make_visible", a);
        J(this, l);
        var m = new PO(a, b, e, h.output, l.output);
        J(this, m);
        h = new MO(a, b, c, m.C);
        J(this, h);
        f = new KO(a, d, e, f, h.output, m.o);
        J(this, f);
        J(this, new LO(a, d, e, f.output));
        J(this, new IO(a, b, c, h.output, g.output));
        J(this, new HO(a, b, c, h.output, k.output, l.output))
    };
    _.T(ev, Mk);
    var $t = function (a, b) {
        Z.call(this, a, 1031);
        this.B = b
    };
    _.T($t, Z);
    $t.prototype.g = function () {
        this.B === this.B.top && Il(this.B)
    };/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var QO = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), Wr = function () {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = QO[19 == d ? c & 3 | 8 : c]);
        return a.join("")
    };
    var RO = eh({gsppack: hp, fpt: hh, eids: ih()}), SO = eh({paw_id: hh, signal: hh, error: hh, eids: ih()}),
        TO = function (a, b, c, d, e) {
            b = void 0 === b ? new _.A.Set : b;
            c = void 0 === c ? null : c;
            d = void 0 === d ? null : d;
            e = void 0 === e ? null : e;
            _.V.call(this);
            this.B = a;
            this.ports = b;
            this.l = c;
            this.g = d;
            this.j = e
        };
    _.T(TO, _.V);
    TO.prototype.A = function () {
        _.V.prototype.A.call(this);
        UO(this);
        for (var a = _.u(this.ports), b = a.next(); !b.done; b = a.next()) b = b.value, this.ports.delete(b), b.onmessage = null
    };
    var VO = function (a, b, c) {
        b.onmessage = c;
        a.ports.add(b)
    }, UO = function (a) {
        null !== a.l && (_.ng(a.B, "message", a.l), a.l = null)
    }, WO = function (a, b) {
        for (var c = _.u(a.ports), d = c.next(); !d.done; d = c.next()) d = d.value, d !== b && (a.ports.delete(d), d.onmessage = null);
        UO(a);
        a.g = b
    }, XO = function (a, b) {
        VO(a, b, function (c) {
            a:{
                try {
                    var d = JSON.parse(c.data);
                    if (SO(d)) {
                        var e = d;
                        break a
                    }
                } catch (k) {
                }
                e = void 0
            }
            if (e) {
                null === a.g && WO(a, b);
                var f;
                null == (f = a.j) || f.resolve(e.signal);
                a.j = null
            } else {
                a:{
                    try {
                        var g = JSON.parse(c.data);
                        if (RO(g) && g.gsppack) {
                            var h = g;
                            break a
                        }
                    } catch (k) {
                    }
                    h = void 0
                }
                h && null === a.g && WO(a, b)
            }
        });
        Xr(b)
    }, YO = function (a) {
        if (a.j) return a.j.promise;
        if (null !== a.l) throw Error("a poll message listener is already registered");
        a.j = new _.ei;
        null === a.g ? (a.l = function (b) {
            b = null == b.data || "" === b.data ? b.ports[0] : void 0;
            b && XO(a, b)
        }, _.Of(a.B, "message", a.l)) : Xr(a.g);
        return a.j.promise
    };
    var Yt = function (a, b, c, d) {
        c = void 0 === c ? ji : c;
        d = void 0 === d ? new TO(b) : d;
        Z.call(this, a, 1063);
        this.B = b;
        this.H = c;
        this.o = d;
        this.C = W(this);
        this.mc = W(this);
        this.j = !1;
        _.R(this, d)
    };
    _.T(Yt, Z);
    Yt.prototype.g = function () {
        var a = this;
        if (_.H(rE)) {
            this.j = ki(this.B);
            var b = !this.j && _.H(pE) ? YO(this.o) : void 0, c = null, d = 0, e = function () {
                return _.H(pE) && null !== a.o.g ? b ? b.then(function (h) {
                    b = void 0;
                    return h
                }) : YO(a.o) : a.H(a.B)
            }, f = $l(this.context, this.id, function () {
                var h, k, l;
                return _.Qf(function (m) {
                    switch (m.g) {
                        case 1:
                            return h = "0", m.l = 2, m.yield(e(), 4);
                        case 4:
                            h = null != (k = m.A) ? k : "0";
                            1E4 < h.length && (dm(a.context, a.id, new bp("ML:" + h.length)), h = "0");
                            m.g = 3;
                            m.l = 0;
                            break;
                        case 2:
                            l = Sf(m), dm(a.context, a.id, l);
                        case 3:
                            c = h, d = _.ig(a.B) + 3E5, m.g = 0
                    }
                })
            });
            if (!_.H(pE) || this.j) var g = (_.I = f(), _.x(_.I, "finally")).call(_.I, function () {
                g = void 0
            });
            this.C.G(function () {
                var h, k, l;
                return _.Qf(function (m) {
                    if (1 == m.g) {
                        h = _.H(pE) && null !== a.o.g;
                        if (!a.j && !h) return m.return("");
                        k = _.ig(a.B) >= d;
                        l = null === c || "0" === c;
                        if (!k && !l) {
                            m.g = 2;
                            return
                        }
                        g || (g = (_.I = f(), _.x(_.I, "finally")).call(_.I, function () {
                            g = void 0
                        }));
                        return m.yield(g, 2)
                    }
                    return m.return(c)
                })
            });
            this.j ? this.mc.G("WEBVIEW_SDK_PAW") : this.mc.G("WEBVIEW_SDK_PACT")
        } else this.C.G(function () {
            return _.A.Promise.resolve("")
        }), this.mc.G("WEBVIEW_SDK_UNKNOWN")
    };
    Yt.prototype.l = function () {
        this.C.G(function () {
            return _.A.Promise.resolve("")
        });
        this.j ? this.mc.G("WEBVIEW_SDK_PAW") : this.mc.G("WEBVIEW_SDK_PACT")
    };
    var ZO = function (a, b) {
        Z.call(this, a, 1091);
        this.output = W(this);
        b && (this.j = Y(this, b))
    };
    _.T(ZO, Z);
    ZO.prototype.g = function () {
        var a;
        null != (a = this.j) && a.value ? this.output.Ka(this.j.value()) : this.output.G("")
    };
    ZO.prototype.l = function () {
        this.output.G("")
    };
    var hs = new _.A.Map([["IAB_AUDIENCE_1_1", 3], ["IAB_CONTENT_2_2", 5], ["IAB_CONTENT_3_0", 6]]);
    var os = new _.A.Set(["disablePersonalization"]);
    var ss = function (a, b, c) {
        Z.call(this, a, 1122);
        this.aa = b;
        this.j = c;
        FI(this, c)
    };
    _.T(ss, Z);
    ss.prototype.g = function () {
        var a = this, b = Yl(this.context);
        zI(this.j, new _.A.Promise(function (c) {
            return void gI(function () {
                c();
                b()
            }, a.aa)
        }))
    };
    var gu = function (a, b, c) {
        Z.call(this, a, 1107);
        this.B = b;
        this.j = c;
        W(this, c)
    };
    _.T(gu, Z);
    gu.prototype.g = function () {
        var a = Qh(this.B.isSecureContext, this.B.navigator, this.B.document),
            b = Rh(this.B.isSecureContext, this.B.document), c = Sh(this.B.isSecureContext, this.B, this.B.document),
            d = !(!this.B.isSecureContext || !Ch("attribution-reporting", this.B.document)), e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        this.j.Ha(0 === e ? null : e)
    };
    gu.prototype.l = function () {
        this.j.ba()
    };
    var $O = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1118, _.Zf(ME));
        this.C = b;
        this.J = e;
        this.T = f;
        W(this, e);
        c && (this.O = Y(this, c));
        d && (this.H = Y(this, d));
        g && (this.o = X(this, g));
        h && (this.j = GI(this, h))
    };
    _.T($O, Z);
    $O.prototype.g = function () {
        var a = new oI;
        a = _.ve(a, 1, _.Lc(this.C), 0);
        if (this.j) if (this.j.value) {
            var b = _.Hj(a, 3, this.j.value.label);
            _.K(b, 4, this.j.value.status)
        } else this.j.Oc() || _.K(a, 4, 5);
        if (this.C & 1) {
            var c, d;
            b = aP(this, null == (c = this.O) ? void 0 : c.value, null == (d = this.H) ? void 0 : d.value);
            _.Ai(a, 2, b)
        }
        this.J.G(a)
    };
    var aP = function (a, b, c) {
        switch (_.Zf(iu)) {
            case 1:
                var d = 1;
                break;
            case 2:
                d = 2;
                break;
            case 3:
                d = 3;
                break;
            default:
                d = 0
        }
        var e = new nI;
        _.H(fG) || _.K(e, 1, d);
        null == b || b.forEach(function (h, k) {
            if (!_.H(aG) || h.length) {
                var l = mI(new lI, h), m;
                null == (m = null == c ? void 0 : c.get(k)) || m.forEach(function (n, p) {
                    var r = new iI;
                    n = _.ve(r, 2, _.Lc(n), 0);
                    p = _.ve(n, 1, _.Lc(_.Uh(p)), 0);
                    Ik(l, 2, iI, p)
                });
                te(e, 2, lI).set(k, l)
            }
        });
        var f;
        if ((null == (f = a.o) ? 0 : f.value) && a.T) {
            var g;
            b = _.u(null == (g = a.o) ? void 0 : g.value);
            for (g = b.next(); !g.done; g = b.next()) g = g.value, (d = bP(a, a.T[g.getDomId()])) && te(e, 3, jI).set(g.getAdUnitPath(), d)
        }
        return e
    }, bP = function (a, b) {
        a = kp(a.context, b);
        if (0 !== a.length) return kI(new jI, a.map(function (c) {
            return c.seller
        }))
    };
    var us = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1165);
        this.J = c;
        this.H = d;
        this.pf = e;
        this.T = f;
        this.C = g;
        this.o = h;
        this.j = Y(this, b.Mi)
    };
    _.T(us, Z);
    us.prototype.g = function () {
        if (this.j.value) {
            var a = new Mk, b = new $O(this.context, this.j.value, this.J, this.H, this.pf.Rg, this.T, this.C, this.o);
            J(a, b);
            a.run()
        } else this.pf.Rg.ba()
    };
    var uu = function (a, b, c) {
        Z.call(this, a, 1206);
        this.o = b;
        this.j = W(this);
        this.Z = X(this, c)
    };
    _.T(uu, Z);
    uu.prototype.g = function () {
        var a = this;
        this.o.cookieDeprecationLabel ? ph(this.Z.value) ? this.j.Ka(this.o.cookieDeprecationLabel.getValue().then(function (b) {
            return {status: 1, label: b}
        }).catch(function (b) {
            a.I(b);
            return {status: 2}
        })) : this.j.G({status: 4}) : this.j.G({status: 3})
    };
    var cP = function (a, b) {
        Z.call(this, a, 1213, _.Zf(ME));
        this.j = W(this);
        b && (this.o = GI(this, b))
    };
    _.T(cP, Z);
    cP.prototype.g = function () {
        var a, b, c;
        (null == (c = null == (a = this.o) ? void 0 : null == (b = a.value) ? void 0 : b.label) ? 0 : c.match($f(LE))) ? this.j.G(!0) : this.j.G(!1)
    };
    var dP = function (a, b) {
        Z.call(this, a, 1212, _.Zf(ME));
        this.j = W(this);
        this.o = W(this);
        b && (this.C = GI(this, b))
    };
    _.T(dP, Z);
    dP.prototype.g = function () {
        var a, b, c = null == (a = this.C) ? void 0 : null == (b = a.value) ? void 0 : b.label;
        c ? (this.o.G(!0), c.match($f(LE)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1), this.o.G(!1))
    };
    var eP = function (a, b, c) {
        Z.call(this, a, 873);
        this.B = b;
        this.j = X(this, c)
    };
    _.T(eP, Z);
    eP.prototype.g = function () {
        var a = this.context, b = this.j.value, c = this.B;
        !fp()._pubconsole_disable_ && (b = th("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || Dp(a, c))
    };
    var fP = function () {
        this.resources = {}
    };
    var ws = "3rd party ad content";
    var gP = function (a, b, c) {
        _.V.call(this);
        this.context = a;
        this.Ra = b;
        this.g = c;
        a = c.slotId;
        b = c.size;
        this.l = "height" === c.tb ? "fluid" : [b.width, b.height];
        this.Od = Kn(a);
        this.Pd = ws
    };
    _.T(gP, _.V);
    gP.prototype.render = function () {
        var a = this.Ra, b = this.g, c = b.slotId, d = b.P.T, e = b.size, f = b.Oa, g = b.isBackfill, h = b.Qb;
        lj(b.kj, _.mB(b.aa), null != f ? f : "", !1);
        ut(_.Xf(bm), "5", vt(d[c.getDomId()], 20));
        wt(c, xt, 801, {Hh: 0 === a.kind ? a.hb : "", isBackfill: g});
        a = this.F();
        h && a && a.setAttribute("data-google-container-id", h);
        wt(c, yt, 825, {size: e, isEmpty: !1});
        return a
    };
    gP.prototype.loaded = function (a) {
        var b = this.g, c = b.slotId, d = b.za;
        b = b.P.T;
        wt(c, kv, 844);
        a && a.setAttribute("data-load-complete", !0);
        wt(d, "slotOnload", 710, new kO(c, "publisher_ads"));
        ut(_.Xf(bm), "6", vt(b[c.getDomId()], 20))
    };
    var hP = function (a) {
        a = a.Ra;
        a = 0 === a.kind ? a.hb : "";
        var b = "";
        b = void 0 === b ? "" : b;
        if (a) {
            var c = a.toLowerCase();
            a = -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") || _.H(cB) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>"
        }
        return a
    };
    gP.prototype.A = function () {
        _.V.prototype.A.call(this);
        this.g.kj.removeAttribute("data-google-query-id")
    };
    gP.prototype.I = function (a) {
        var b = this, c = iP(this, function () {
            return void b.loaded(c.g)
        }, a);
        _.Vp(this, function () {
            100 != c.status && (c.rg() && (CJ(c.l), c.C = 0), window.clearTimeout(c.H), c.H = -1, c.K = 3, c.A && (c.A.xa(), c.A = null), _.ng(window, "resize", c.Ca), _.ng(window, "scroll", c.Ca), c.F && c.g && c.F == _.qB(c.g) && c.F.removeChild(c.g), c.g = null, c.F = null, c.status = 100)
        });
        return c
    };
    var iP = function (a, b, c) {
        var d = a.g, e = d.Zi, f = d.isBackfill, g = d.Qb, h = d.Me, k = d.If, l = d.ab,
            m = Array.isArray(a.l) ? new _.ln(Number(a.l[0]), Number(a.l[1])) : 1;
        return new KJ({
            Og: d.Sf,
            Od: a.Od,
            Pd: a.Pd,
            content: hP(a),
            size: m,
            Gi: b,
            aj: null != e ? e : void 0,
            permissions: {Je: null != mo(c, 1) ? !!_.Q(c, 1) : !f, Ke: null != mo(c, 2) ? !!_.Q(c, 2) : !1},
            Qd: !!fp().fifWin,
            mm: sM ? sM : sM = bo(),
            dk: go(),
            hostpageLibraryTokens: l.hostpageLibraryTokens,
            sb: function (n, p) {
                return void dm(a.context, n, p)
            },
            uniqueId: g,
            Yi: qM(),
            Me: null != h ? h : void 0,
            ub: void 0,
            If: null != k ? k : void 0
        })
    };
    var jP = function () {
        gP.apply(this, arguments)
    };
    _.T(jP, gP);
    jP.prototype.F = function () {
        var a = this.g, b = a.P, c = b.ca;
        a = b.T[a.slotId.getDomId()];
        b = new ho;
        c = no([b, c.Bc(), null == a ? void 0 : a.Bc()]);
        return gP.prototype.I.call(this, c).g
    };
    jP.prototype.j = function () {
        return !1
    };
    var Mu = function (a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.ca = b;
        this.T = c;
        this.j = d;
        this.Hb = e;
        this.output = W(this);
        f && (this.o = X(this, f))
    };
    _.T(Mu, Z);
    Mu.prototype.g = function () {
        var a;
        if (null == (a = this.o) ? 0 : a.value) this.output.G(!0); else {
            var b;
            a = !(null == (b = this.j) || !_.F(b, 1)) && (_.Q(this.T, 12) || mo(this.ca, 13)) || this.Hb;
            this.output.G(!!a)
        }
    };
    var kP = function (a, b, c, d) {
        Z.call(this, a, 833);
        this.j = b;
        this.B = c;
        this.output = FI(this);
        HI(this, d)
    };
    _.T(kP, Z);
    kP.prototype.g = function () {
        var a = this.j, b = this.B, c = qM();
        c = {version: sM ? sM : sM = bo(), xf: c};
        c = RJ.wl(c);
        var d = xJ(b);
        c = d ? _.Jf(c, new _.A.Map([["n", String(d)]])) : c;
        d = ag(eo);
        for (var e = new _.A.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = _.Jf(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = fp()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.mg("IFRAME"), a.src = _.lb(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var lP = function (a, b, c) {
        Z.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.j = W(this)
    };
    _.T(lP, Z);
    lP.prototype.g = function () {
        for (var a = new fA, b = new _.A.Map, c = new _.A.Set, d = _.u(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.Zi(f, 1)) {
                e = new _.A.Set;
                b.set(_.F(f, 1).toString(), e);
                f = _.u(_.zk(f, dA, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.F(g, 1);
                    e.add(h);
                    c.has(h) || Ik(a, 2, dA, g);
                    c.add(h)
                }
            }
        }
        this.C.G(b);
        this.j.G(a)
    };
    var mP = function (a, b, c) {
        Z.call(this, a, 1051);
        this.o = b;
        this.j = Y(this, c)
    };
    _.T(mP, Z);
    mP.prototype.g = function () {
        var a = this;
        this.j.value && fl(this.j.value, function (b, c) {
            dm(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var nP = function (a, b) {
        Z.call(this, a, 1040);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(nP, Z);
    nP.prototype.g = function () {
        var a = this.o.value;
        a ? (a = _.zk(a, dA, 2), this.j.G(a.map(function (b) {
            var c = vz(b, eA);
            b = _.F(b, 1);
            c = c && (_.x(c, "startsWith").call(c, location.protocol) || _.x(c, "startsWith").call(c, "data:") && 80 >= c.length) ? tf(rk(c)) : void 0;
            return {Be: b, url: c}
        }))) : this.j.G([])
    };
    var oP = function (a, b, c) {
        Z.call(this, a, 813);
        this.zb = c;
        this.o = Y(this, b);
        this.j = Y(this, c)
    };
    _.T(oP, Z);
    oP.prototype.g = function () {
        var a = this, b = this.o.value, c = this.j.value;
        if (null != b && b.length && c) {
            b = _.u(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.Be;
                (e = e.url) && _.R(this, jl(d, e, c, this.zb, function (f, g) {
                    dm(a.context, f, g);
                    var h, k;
                    null == (k = (h = console).error) || k.call(h, g)
                }))
            }
        }
    };
    var pP = function (a, b, c) {
        Z.call(this, a, 1045);
        this.j = b;
        this.zb = c
    };
    _.T(pP, Z);
    pP.prototype.g = function () {
        var a = new Mk;
        _.R(this, a);
        var b = new nP(this.context, this.j);
        J(a, b);
        b = new oP(this.context, b.j, this.zb);
        J(a, b);
        a.run()
    };
    var Eu = function (a, b, c, d) {
        Z.call(this, a, 706);
        this.B = b;
        this.output = null != d ? d : W(this);
        this.j = X(this, c)
    };
    _.T(Eu, Z);
    Eu.prototype.g = function () {
        this.output.Ha(qh(this.j.value, this.B))
    };
    var yu = function (a, b, c, d) {
        Z.call(this, a, 1154);
        this.qb = c;
        this.j = d;
        this.o = Y(this, b)
    };
    _.T(yu, Z);
    yu.prototype.g = function () {
        if (this.o.value) {
            var a = new Mk;
            _.R(this, a);
            var b = new Eu(this.context, window, this.qb, this.j.zb);
            J(a, b);
            b = new lP(this.context, this.o.value, this.j.Fg);
            J(a, b);
            J(a, new pP(this.context, b.j, this.j.zb));
            b = new mP(this.context, console, this.j.zb);
            J(a, b);
            a.run()
        } else this.j.Fg.ba(), this.j.zb.ba()
    };
    var qP = function (a, b, c, d, e, f) {
        Z.call(this, a, 1096);
        this.B = b;
        this.Z = c;
        this.j = d;
        this.Cc = e;
        this.o = Y(this, f)
    };
    _.T(qP, Z);
    qP.prototype.g = function () {
        var a, b = null == (a = this.o.value) ? void 0 : a.Nj;
        b && b(this.j, this.Z, this.B, this.Cc, this.context.Qa)
    };
    var rP = function (a, b) {
        Z.call(this, a, 1095);
        this.j = b;
        this.output = W(this)
    };
    _.T(rP, Z);
    rP.prototype.g = function () {
        this.output.Ka(this.j.load(_.EO))
    };
    var Au = function (a, b, c, d, e) {
        Z.call(this, a, 1090);
        this.j = b;
        this.Cc = c;
        this.o = X(this, d);
        this.C = Y(this, e)
    };
    _.T(Au, Z);
    Au.prototype.g = function () {
        var a = this.C.value, b;
        if (a && null != (b = _.Um(a, _.uA, 1)) && _.zk(b, _.tA, 15).length) {
            b = new Mk;
            _.R(this, b);
            var c = new rP(this.context, this.j);
            J(b, c);
            a = new qP(this.context, window, this.o.value, a, this.Cc, c.output);
            J(b, a);
            b.run()
        }
    };
    var gv = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 1205);
        this.B = b;
        this.J = c;
        this.H = X(this, d);
        this.o = X(this, e);
        this.j = X(this, f);
        this.C = X(this, g)
    };
    _.T(gv, Z);
    gv.prototype.g = function () {
        var a = this.H.value;
        a = new a.Cm(this.o.value, this.B, this.j.value, this.J, this.C.value, new _.rK(this.context), new a.Rk(this.B));
        _.R(this, a);
        _.R(this, a.J)
    };
    var fv = function (a, b) {
        Z.call(this, a, 1204);
        this.j = b;
        this.output = W(this)
    };
    _.T(fv, Z);
    fv.prototype.g = function () {
        this.output.Ka(this.j.load(_.FO))
    };
    var Nt = function (a, b) {
        var c = this, d = [], e = [];
        this.addSize = $l(a, 88, function (f, g) {
            var h;
            if (h = So(f)) h = g, h = Ro(h) || Array.isArray(h) && h.every(Ro);
            if (h) {
                if (_.H(XE)) {
                    var k = Bs(g);
                    h = k.size;
                    k.Wg && (g = sm([f, g]), g = g.substring(1, g.length - 1), O(b, new rm(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), O(b, tm("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = $l(a, 89, function () {
            if (e.length) return O(b, dL(ko(e))), null;
            Sa(d);
            return d
        })
    };
    var sP = function (a, b, c, d, e, f) {
        f = void 0 === f ? ll : f;
        Z.call(this, a, 939);
        this.o = b;
        this.B = c;
        this.Z = d;
        this.j = f;
        this.output = FI(this);
        HI(this, e)
    };
    _.T(sP, Z);
    sP.prototype.g = function () {
        var a = this.j, b = this.B, c = new Pz;
        var d = new Oz;
        d = _.Hj(d, 1, String(this.o));
        c = _.Ai(c, 5, d);
        c = _.K(c, 4, 1);
        c = _.K(c, 2, 2);
        c = _.Hj(c, 3, this.context.Pa);
        d = ph(this.Z);
        c = _.Rl(c, 6, d);
        a.call(this, b, c);
        this.output.notify()
    };
    var Uu = function (a, b, c, d, e) {
        Z.call(this, a, 807);
        this.B = b;
        this.Kb = c;
        this.output = FI(this);
        this.j = X(this, d);
        e && HI(this, e)
    };
    _.T(Uu, Z);
    Uu.prototype.g = function () {
        if (this.Kb && !this.j.value) {
            var a = RB(this.B);
            lK(new kK(a, this.Kb)) || this.I(new bp("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var tP = function (a, b) {
        Z.call(this, a, 820);
        this.B = b;
        this.output = W(this)
    };
    _.T(tP, Z);
    tP.prototype.g = function () {
        var a = this;
        this.output.Ka(pl(this.B).then(function (b) {
            var c = b.Kb, d = b.status;
            hq("gpt_etu", function (e) {
                Hp(e, a.context);
                Ip(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var uP = function (a, b, c, d) {
        Z.call(this, a, 979);
        this.B = b;
        this.j = Y(this, d);
        this.output = c
    };
    _.T(uP, Z);
    uP.prototype.g = function () {
        var a = this;
        if (_.H(aF)) this.output.ba(); else {
            var b;
            tl(this.B, null != (b = this.j.value) ? b : !1).then(function (c) {
                a.output.G(c)
            })
        }
    };
    uP.prototype.l = function () {
        this.output.ba()
    };
    var zu = function (a, b, c, d) {
        Z.call(this, a, 1156);
        this.B = b;
        this.Uf = c;
        this.j = {Uc: new Gq};
        this.o = X(this, d)
    };
    _.T(zu, Z);
    zu.prototype.g = function () {
        if (ph(this.o.value)) {
            var a = new Mk;
            _.R(this, a);
            var b = new uP(this.context, this.B, this.j.Uc, this.Uf);
            J(a, b);
            a.run()
        } else this.j.Uc.ba()
    };
    var vP = function (a, b, c) {
        Z.call(this, a, 1123);
        this.j = b;
        this.o = c;
        W(this, b);
        W(this, c)
    };
    _.T(vP, Z);
    vP.prototype.g = function () {
        _.H(ZE) ? (this.j.G(!1), this.o.ba()) : (this.j.G(!0), this.o.G(10))
    };
    var wP = function (a, b, c, d, e) {
        Z.call(this, a, 978);
        this.B = b;
        this.C = c;
        this.j = e;
        W(this, e);
        this.o = Y(this, d.Uc)
    };
    _.T(wP, Z);
    wP.prototype.g = function () {
        if (_.H($E)) this.j.ba(); else if (this.o.value) {
            var a = Al(this.o.value, this.B, new _.rK(this.context), this.C);
            this.j.Ka(a)
        } else this.j.ba()
    };
    wP.prototype.l = function () {
        this.j.ba()
    };
    var Gs = function (a, b, c, d, e, f) {
        Z.call(this, a, 1164);
        this.o = b;
        this.zf = c;
        this.j = e;
        this.C = X(this, d);
        f && (this.H = X(this, f))
    };
    _.T(Gs, Z);
    Gs.prototype.g = function () {
        var a;
        if (!Rh(window.isSecureContext, window.document) || (null == (a = this.H) ? 0 : a.value)) this.j.rd.ba(), this.j.ke.G(!1), this.j.me.ba(); else if (this.C.value) {
            a = new Mk;
            _.R(this, a);
            J(a, new wP(this.context, window, this.o, this.zf, this.j.rd));
            var b = new vP(this.context, this.j.ke, this.j.me);
            J(a, b);
            a.run()
        } else this.j.rd.G(5), this.j.ke.G(!1), this.j.me.G(5)
    };
    var xP = function (a, b, c) {
        Z.call(this, a, 1101);
        this.B = b;
        this.j = c
    };
    _.T(xP, Z);
    xP.prototype.g = function () {
        if (!_.H($E)) {
            var a = this.j, b = ql(this.B);
            b.setTopicsCalled ? _.A.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var Yu = function (a, b, c, d) {
        Z.call(this, a, 1180);
        this.B = b;
        this.Of = c;
        this.j = Y(this, d.Uc)
    };
    _.T(Yu, Z);
    Yu.prototype.g = function () {
        if (this.Of && this.j.value) {
            var a = new Mk;
            _.R(this, a);
            J(a, new xP(this.context, this.B, this.j.value));
            a.run()
        }
    };
    var Ps = function (a) {
        this.D = _.B(a)
    };
    _.T(Ps, _.E);
    var Ls = function (a, b) {
        return _.ve(a, 2, _.ed(b), "0")
    };
    var yP = function (a) {
        this.D = _.B(a)
    };
    _.T(yP, _.E);
    var Os = rf(yP);
    yP.da = [1];
    var wu = function (a, b, c, d) {
        Z.call(this, a, 1186);
        this.M = b;
        this.B = c;
        this.output = W(this);
        this.Z = X(this, d)
    };
    _.T(wu, Z);
    wu.prototype.g = function () {
        if (!Qh(this.B.isSecureContext, this.B.navigator, this.B.document) || _.H(hu)) this.output.ba(); else {
            var a = this.M.Ne;
            if (null !== a) this.output.G(a); else {
                var b = _.po(new _.OH(this.B), "__gpi", this.Z.value);
                a = this.output;
                var c = a.G;
                b = _.Uh(b || String(this.context.pvsid)) % 63001;
                this.M.Ne = b;
                c.call(a, b)
            }
        }
    };
    var zP = function (a, b, c) {
        Z.call(this, a, 1171);
        this.j = c;
        W(this, c);
        this.Vg = X(this, b)
    };
    _.T(zP, Z);
    zP.prototype.g = function () {
        this.j.G(0 === this.Vg.value.kind)
    };
    var AP = function (a, b, c) {
        Z.call(this, a, 1160);
        this.j = c;
        W(this, c);
        this.o = X(this, b)
    };
    _.T(AP, Z);
    AP.prototype.g = function () {
        if (null != this.o.value.requestId) {
            var a = this.o.value.request;
            this.context.Qa.Xb.jc.td.Uj.Mc({Pc: a.byteLength});
            33792 < a.byteLength ? this.j.G({kind: 1, reason: 3}) : (a = ub(a, 3), a.length ? this.j.G({
                kind: 0,
                signal: a,
                requestId: this.o.value.requestId
            }) : this.j.G({kind: 1, reason: 5}))
        } else this.j.G({kind: 1, reason: this.o.value})
    };
    AP.prototype.l = function () {
        this.j.G({kind: 1, reason: 4})
    };
    var BP = function (a, b) {
        Z.call(this, a, 1159);
        this.output = W(this);
        this.j = b
    };
    _.T(BP, Z);
    BP.prototype.g = function () {
        var a = this;
        this.output.Ka(this.j.getInterestGroupAdAuctionData({seller: "https://securepubads.g.doubleclick.net"}).catch(function (b) {
            a.I(b);
            return 4
        }))
    };
    BP.prototype.l = function () {
        this.output.G(4)
    };
    var Us = function (a, b, c, d, e, f) {
        Z.call(this, a, 1177);
        this.C = b;
        this.j = e;
        this.o = f;
        W(this, e);
        W(this, f);
        this.H = X(this, c);
        d && (this.J = X(this, d))
    };
    _.T(Us, Z);
    Us.prototype.g = function () {
        if (this.H.value) {
            var a;
            if (null == (a = this.J) ? 0 : a.value) this.j.G({kind: 1, reason: 6}), this.o.G(!1); else {
                a = new Mk;
                _.R(this, a);
                var b = new BP(this.context, this.C);
                J(a, b);
                b = new AP(this.context, b.output, this.j);
                J(a, b);
                b = new zP(this.context, this.j, this.o);
                J(a, b);
                a.run()
            }
        } else this.j.G({kind: 1, reason: 2}), this.o.G(!1)
    };
    eh({google_signals: eh({buyer_reporting_id: hh})});
    var CP = function (a, b, c, d, e) {
        Z.call(this, a, 881);
        this.Fa = b;
        this.ga = c;
        this.j = d;
        this.o = e;
        this.output = W(this)
    };
    _.T(CP, Z);
    CP.prototype.g = function () {
        if (4 === _.Zf(iu)) {
            var a = _.Um(this.ga, PA, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.j) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: Li(this.ga, 3, 2),
                    requestId: this.j.requestId,
                    serverResponse: Dl(El(a, 1)),
                    resolveToConfig: !_.Q(this.ga, 14)
                })
            } else (b = _.Um(this.ga, RA, 5)) ? Xs(0, 0, b) : reportError(new TypeError("Missing seller signals in B&A error case.")), this.output.ba()
        } else {
            b = this.output;
            a = b.G;
            var c = this.ga, d = kp(this.context, this.Fa), e = this.context.Qa, f = _.H(fF) ? void 0 : this.o,
                g = _.H(dG), h = _.Zf(cF), k = _.Zf(eG), l = void 0 === h ? 0 : h;
            h = !_.Q(c, 14);
            var m = {};
            var n = _.zk(c, MA, 7);
            n = _.u(n);
            for (var p = n.next(); !p.done; p = n.next()) {
                p = p.value;
                var r = {}, v = void 0, w = null == (v = e) ? void 0 : v.Xb.jc.td.ck;
                v = _.F(p, 1);
                if (_.F(p, 2).length) try {
                    if (r = JSON.parse(_.F(p, 2)), 1 > 100 * _.Th()) {
                        var z = void 0;
                        null == (z = w) || z.Gc({Mf: v, status: "SUCCESS", Sc: 100})
                    }
                } catch (D) {
                    z = void 0, null == (z = w) || z.Gc({Mf: v, status: "ERROR", Sc: 1})
                } else z = void 0, null == (z = w) || z.Gc({Mf: v, status: "EMPTY", Sc: 1});
                m[_.F(p, 1)] = r
            }
            if (e = _.Um(c, LA, 6)) m["https://googleads.g.doubleclick.net"] = e.toJSON(), m["https://td.doubleclick.net"] = e.toJSON();
            n = {};
            e = _.u(_.zk(c, OA, 11));
            for (p = e.next(); !p.done; p = e.next()) p = p.value, n[_.F(p, 1)] = _.qz(p, 2);
            p = {};
            0 !== _.qz(c, 21) && (p["*"] = _.qz(c, 21));
            if (0 < _.zk(c, NA, 32).length) {
                var y = {};
                e = _.u(_.zk(c, NA, 32));
                for (r = e.next(); !r.done; r = e.next()) r = r.value, y[_.F(r, 1)] = _.qz(r, 2)
            }
            r = {};
            null != Wm(c, 18) && (r["https://googleads.g.doubleclick.net"] = vt(c, 18), r["https://td.doubleclick.net"] = vt(c, 18));
            e = _.u(te(c, 24, TA));
            for (w = e.next(); !w.done; w = e.next()) v = w.value, vt(v[1], 4) && (w = v[0], v = vt(v[1], 4), r[w] = v);
            e = _.F(c, 1).split("/td/")[0];
            var C;
            w = null == (C = _.Um(c, RA, 5)) ? void 0 : _.$d(C);
            var G;
            null != w && null != (G = _.Um(w, QA, 5)) && _.Gk(G, 2);
            y = _.x(Object, "assign").call(Object, {}, {
                seller: e,
                decisionLogicUrl: _.F(c, 1),
                trustedScoringSignalsUrl: _.F(c, 2),
                interestGroupBuyers: Li(c, 3, 2),
                sellerExperimentGroupId: vt(c, 17),
                auctionSignals: JSON.parse(_.F(c, 4) || "{}"),
                sellerSignals: (null == w ? void 0 : w.toJSON()) || [],
                sellerTimeout: _.qz(c, 15) || 50,
                perBuyerExperimentGroupIds: r,
                perBuyerSignals: m,
                perBuyerTimeouts: n,
                perBuyerCumulativeTimeouts: p
            }, y ? {perBuyerGroupLimits: y} : {}, h ? {resolveToConfig: h} : {});
            if (null == c ? 0 : _.Q(UA(c), 25)) y.sellerCurrency = "USD", y.perBuyerCurrencies = _.x(Object, "fromEntries").call(Object, se(c, 22, rd));
            _.F(c, 28) && (y.directFromSellerSignalsHeaderAdSlot = _.F(c, 28));
            f && (y.auctionNonce = f, y.additionalBids = _.A.Promise.resolve());
            g && se(c, 33, rd).size && (y.deprecatedRenderURLReplacements = _.x(Object, "fromEntries").call(Object, (_.I = se(c, 33, rd), _.x(_.I, "entries")).call(_.I)), (f = y.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (y.deprecatedRenderURLReplacements["${RENDER_DATA}"] = f));
            switch (l) {
                case 1:
                    y.allSlotsRequestedSizes = [{width: c.getWidth(), height: c.getHeight()}]
            }
            k && (y.reportingTimeout = k);
            k = Object;
            f = k.assign;
            g = _.F(c, 1);
            l = vt(c, 17);
            C = new RA;
            Bi(UA(c), QA, 5) && (G = new QA, m = rz(nz(UA(c), QA, 5), 2), G = _.ve(G, 2, Wc(m), "0"), m = rz(nz(UA(c), QA, 5), 4), G = _.ve(G, 4, Wc(m), "0"), _.Ai(C, 5, G));
            UA(c).getEscapedQemQueryId() && (G = UA(c).getEscapedQemQueryId(), _.Hj(C, 2, G));
            _.F(UA(c), 6) && (G = _.F(UA(c), 6), _.Hj(C, 6, G));
            _.Q(UA(c), 21) && _.Rl(C, 21, !0);
            _.Q(UA(c), 4) && _.Rl(C, 4, !0);
            _.F(UA(c), 11) && (G = _.F(UA(c), 11), _.Hj(C, 11, G));
            C = C.toJSON();
            G = _.qz(c, 15) || 50;
            if (_.Q(c, 30)) {
                if (null == d || !d.length) throw Error("top_td_without_component_auction");
            } else d = [y].concat(_.Pi(null != d ? d : []));
            d = f.call(k, {}, {
                seller: e,
                decisionLogicUrl: g,
                sellerExperimentGroupId: l,
                sellerSignals: C,
                sellerTimeout: G,
                interestGroupBuyers: [],
                auctionSignals: {},
                perBuyerExperimentGroupIds: {},
                perBuyerSignals: {},
                perBuyerTimeouts: {},
                perBuyerCumulativeTimeouts: {},
                componentAuctions: d
            }, h ? {resolveToConfig: h} : {});
            _.F(c, 28) && (d.directFromSellerSignalsHeaderAdSlot = _.F(c, 28));
            a.call(b, d)
        }
    };
    CP.prototype.l = function () {
        this.output.ba()
    };
    var DP = function (a, b, c, d) {
        Z.call(this, a, 1105);
        this.adUnitPath = b;
        this.ga = c;
        this.storage = d
    };
    _.T(DP, Z);
    DP.prototype.g = function () {
        var a = Date.now();
        if (!_.H(at) || Ss(a)) {
            var b = Li(this.ga, 3, 2), c = Is(this.adUnitPath);
            if (_.Q(this.ga, 20)) {
                if (_.H(bG)) {
                    var d;
                    var e = (null == (d = _.Um(this.ga, SA, 29)) ? void 0 : vt(d, 2)) || 864E5
                } else e = 864E5;
                a = bt(b, a + e);
                e = (b = this.storage.getItem(c)) ? _.zk(Os(b), Ps, 1) : [];
                var f;
                b = new yP;
                a = Ms(e, a);
                a = _.Om(b, 1, a);
                b = !(null == (f = _.Um(this.ga, SA, 29)) || !_.Q(f, 3));
                f = qi(a, 2, b);
                this.storage.setItem(c, zl(f))
            } else _.H(YF) && this.storage.removeItem(c)
        }
    };
    var dt = navigator, et = /(\$\{GDPR})/gi, ft = /(\$\{GDPR_CONSENT_[0-9]+\})/gi, gt = /(\$\{ADDTL_CONSENT})/gi,
        ht = /(\$\{AD_WIDTH})/gi, jt = /(\$\{AD_HEIGHT})/gi, kt = /(\$\{RENDER_DATA})/gi;
    var EP = function () {
        var a = this;
        this.promise = new _.A.Promise(function (b, c) {
            a.reject = c;
            a.resolve = b
        })
    }, FP = function () {
        this.auctionSignals = new EP;
        this.topLevelSellerSignals = new EP;
        this.g = new EP;
        this.perBuyerSignals = new EP;
        this.perBuyerTimeouts = new EP;
        this.perBuyerCumulativeTimeouts = new EP;
        this.directFromSellerSignals = new EP;
        this.directFromSellerSignalsHeaderAdSlot = new EP;
        this.perBuyerCurrencies = new EP;
        this.resolveToConfig = new EP;
        this.deprecatedRenderURLReplacements = new EP
    }, GP = function (a, b, c, d) {
        this.g = a;
        this.Wf = b;
        this.interestGroupBuyers = c;
        this.Ab = d
    };
    var HP = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Z.call(this, a, 1201);
        this.ha = b;
        this.Z = c;
        this.ga = d;
        this.ja = e;
        this.W = k;
        this.H = l;
        this.J = m;
        this.O = n;
        this.C = p;
        this.j = r;
        this.qa = FI(this);
        this.o = W(this);
        this.wa = Y(this, f);
        this.La = X(this, g);
        this.ta = X(this, h);
        this.fa = X(this, w);
        X(this, v);
        W(this, p);
        W(this, n.Lb);
        W(this, n.Ga);
        W(this, n.Ja);
        W(this, this.j)
    };
    _.T(HP, Z);
    HP.prototype.g = function () {
        var a = this.La.value, b = Math.round(performance.now() - a), c = this.ta.value;
        a = this.wa.value;
        var d = _.Um(this.ga, RA, 5), e = _.Q(d, 10), f = _.Q(d, 9), g = "string" === typeof a || mt(a),
            h = 3 !== a && 2 !== a && 1 !== a;
        this.j.G(g && !f);
        h && st(this.context, g, c, b, d);
        this.context.V.log(607368714, qt, {Gk: b, Tj: a, cm: d.getEscapedQemQueryId(), el: _.F(d, 6)});
        var k, l;
        h = null != (l = null == (k = this.fa.value.componentAuctions) ? void 0 : k.length) ? l : 0;
        rt(this.context, a, b, c, !!this.ja, d, h, g);
        if (g) if (e) this.ha.deprecatedURNToURL(a, !0), this.C.G(!0), this.o.ba(); else if (f) {
            _.Q(d, 17) ? Xs(0, 0, d) : this.ha.deprecatedURNToURL(a, !0);
            var m;
            ct(this.O, this.j, this.H, this.J, this.W, null == (m = this.ga) ? void 0 : _.F(m, 25));
            this.C.G(!0);
            this.o.ba()
        } else {
            this.o.G(a);
            this.C.G(!0);
            if (_.H(XF)) {
                l = this.fa.value;
                m = this.ga;
                var n;
                k = 1 === (null == (n = l.componentAuctions) ? void 0 : n.length) && Ts(l.componentAuctions[0].seller) && Bi(m, KA, 26) ? Ny(zl(nz(m, KA, 26)), 3) : ""
            } else k = void 0;
            n = k;
            zI(this.qa, lt(a, _.x(Object, "assign").call(Object, {}, {
                gdprApplies: null != mo(this.Z, 3) ? _.Q(this.Z, 3) ? "1" : "0" : null,
                al: Bk(this.Z, 2),
                Qj: Bk(this.Z, 4),
                Mj: this.ga.getWidth().toString(),
                Kj: this.ga.getHeight().toString()
            }, n ? {hm: n} : {})))
        } else {
            Xs(b, 2 === a ? c : 0, d);
            if (!e) {
                var p;
                ct(this.O, this.j, this.H, this.J, this.W, null == (p = this.ga) ? void 0 : _.F(p, 25))
            }
            this.C.G(!0);
            this.o.ba()
        }
    };
    HP.prototype.l = function () {
        var a, b, c = null == (a = this.ga) ? void 0 : _.Um(a, RA, 5);
        a = this.ja;
        var d = this.O, e = this.j, f = this.H, g = this.J, h = this.W;
        null == (b = this.ga) || _.F(b, 25);
        c && Xs(0, 0, c);
        null == a || a.Ab.abort();
        ct(d, e, f, g, h)
    };
    var IP = function (a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 1200);
        this.M = b;
        this.ta = c;
        this.o = d;
        this.ga = e;
        this.W = g;
        this.H = h;
        this.J = k;
        this.O = m;
        this.fa = n;
        this.C = EI(this);
        this.qa = W(this);
        this.ja = W(this);
        this.ha = W(this);
        this.j = Y(this, f);
        X(this, l);
        W(this, m.Lb);
        W(this, m.Ga);
        W(this, m.Ja);
        W(this, n)
    };
    _.T(IP, Z);
    IP.prototype.g = function () {
        if (this.j.value) {
            var a = UA(this.ga);
            tt(this.context, a);
            var b = performance.now();
            this.qa.G(b);
            b = _.qz(this.ga, 8) || 1E3;
            this.ja.G(b);
            var c = _.qz(a, 14) || -1, d = _.qz(a, 13) || -1;
            d = 0 < d && this.M.j >= d;
            if (0 < c && this.M.l >= c || d) this.C.G(1); else if (++this.M.l, ++this.M.j, this.j.value.signal = AbortSignal.timeout(b), _.Q(a, 15)) --this.M.l, this.C.Ka(new _.A.Promise(function (e) {
                setTimeout(function () {
                    e(1)
                }, 0)
            })); else {
                if (this.o && this.j.value.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.o ? JP(this.j.value, b, this.o) : KP(this, this.j.value);
                --this.M.l;
                this.C.Ka(a)
            }
        } else null == (a = this.o) || a.Ab.abort(), ct(this.O, this.fa, this.H, this.J, this.W, _.F(this.ga, 25)), this.ha.G(!1)
    };
    var KP = function (a, b) {
        var c, d;
        return null == (d = (c = a.ta).runAdAuction) ? void 0 : d.call(c, b).catch(function (e) {
            if (e instanceof DOMException && "TimeoutError" === e.name) return 2;
            e instanceof Error && a.I(e);
            return 3
        })
    }, JP = function (a, b, c) {
        $s(a, c);
        setTimeout(function () {
            c.Ab.abort(new DOMException("runAdAuction", "TimeoutError"))
        }, b);
        return c.g
    };
    IP.prototype.l = function () {
        var a, b = null == (a = this.ga) ? void 0 : _.Um(a, RA, 5);
        a = this.o;
        var c = this.O, d = this.fa, e = this.H, f = this.J, g = this.W;
        _.F(this.ga, 25);
        b && Xs(0, 0, b);
        null == a || a.Ab.abort();
        ct(c, d, e, f, g)
    };
    var LP = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 1202);
        this.ga = b;
        this.C = c;
        this.j = d;
        this.o = Y(this, f);
        this.H = X(this, e);
        HI(this, g);
        W(this, d.Lb);
        W(this, d.Ga);
        W(this, d.Ja)
    };
    _.T(LP, Z);
    LP.prototype.g = function () {
        if (this.o.value) {
            dn(this.C) || (this.H.value.style.display = "");
            var a = this.o.value;
            var b = this.context.Qa;
            var c = _.F(this.ga, 31);
            c ? mt(a) ? (b.Xb.jc.td.bh.nh.Gc({
                Sc: 1,
                status: "FAILED_FENCED_FRAME"
            }), b = null) : (a = c.replace("%%srcfledge%%", a), a.length === c.length && a === c ? (b.Xb.jc.td.bh.nh.Gc({
                Sc: 1,
                status: "FAILED_UNMODIFIED"
            }), b = null) : (b.Xb.jc.td.bh.nh.Gc({Sc: 1, status: "OK"}), b = a)) : b = null;
            b ? this.j.Ga.G({kind: 0, hb: b}) : this.j.Ga.G({kind: 2, je: this.o.value});
            this.j.Ja.G(new _.ln(this.ga.getWidth(), this.ga.getHeight()));
            this.j.Lb.G(!1)
        }
    };
    var MP = function (a, b, c) {
        Z.call(this, a, 1054);
        this.j = b;
        this.output = FI(this);
        this.o = X(this, c)
    };
    _.T(MP, Z);
    MP.prototype.g = function () {
        this.o.value || this.j();
        this.output.notify()
    };
    var NP = function (a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.P = c;
        this.M = d;
        this.Oa = e;
        this.j = W(this);
        this.o = X(this, f)
    };
    _.T(NP, Z);
    NP.prototype.g = function () {
        this.o.value ? (zt(this.slotId, this.M, this.P, this.Oa), this.j.G(!1)) : this.j.G(!0)
    };
    var OP = function (a, b, c, d) {
        Z.call(this, a, 1055);
        this.j = d;
        HI(this, c);
        this.o = X(this, b);
        FI(this, this.j)
    };
    _.T(OP, Z);
    OP.prototype.g = function () {
        this.o.value && this.j.notify()
    };
    var Nu = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, z, y) {
        Z.call(this, a, 1179);
        this.slotId = b;
        this.T = d;
        this.M = e;
        this.Z = f;
        this.C = g;
        this.O = l;
        this.o = m;
        this.P = n;
        this.fa = p;
        this.Oa = r;
        this.ga = v;
        this.j = w;
        this.ja = z;
        this.ha = y;
        this.H = X(this, h);
        this.J = X(this, k);
        this.W = Y(this, c)
    };
    _.T(Nu, Z);
    Nu.prototype.g = function () {
        var a = new Mk;
        _.R(this, a);
        var b = W(this);
        if (this.ga) {
            var c = UA(this.ga), d = _.Q(c, 10);
            if (this.ga.getWidth() && this.ga.getHeight()) if (d) if (ct({
                Lb: b,
                Ga: this.j.Ga,
                Ja: this.j.Ja
            }, this.j.ed, this.H.value, this.J.value, this.C), _.Q(c, 17)) {
                Xs(0, 0, c);
                var e;
                null == (e = this.o) || e.Ab.abort()
            } else PP(this, a, this.ga); else b = PP(this, a, this.ga); else {
                ct({Lb: b, Ga: this.j.Ga, Ja: this.j.Ja}, this.j.ed, this.H.value, this.J.value, this.C);
                Xs(0, 0, c);
                var f;
                null == (f = this.o) || f.Ab.abort()
            }
        } else ct({
            Lb: b,
            Ga: this.j.Ga,
            Ja: this.j.Ja
        }, this.j.ed, this.H.value, this.J.value, this.C), _.H(ZF) ? null == (c = this.o) || c.Ab.abort(new DOMException("runAdAuction", "ThrottledError")) : null == (d = this.o) || d.Ab.abort();
        e = new NP(this.context, this.slotId, this.P, this.M, this.Oa, b);
        J(a, e);
        b = new MP(this.context, this.fa, b);
        J(a, b);
        b = new OP(this.context, e.j, b.output, this.j.Lc);
        J(a, b);
        a.run()
    };
    var PP = function (a, b, c) {
        if (2 === _.Zf(iu) && a.W.value && _.Q(c, 20) && 0 !== Li(c, 3, 2).length) {
            var d = new DP(a.context, a.slotId.getAdUnitPath(), c, a.W.value);
            J(b, d)
        }
        var e = new CP(a.context, a.T, c, a.ja, a.ha);
        J(b, e);
        var f = navigator, g = {Ga: a.j.Ga, Ja: a.j.Ja, Lb: new Gq};
        d = g.Lb;
        var h = new IP(a.context, a.M, f, a.o, c, e.output, a.C, a.H.value, a.J.value, a.O, g, a.j.ed);
        J(b, h);
        e = new HP(a.context, f, a.Z, c, a.o, h.C, h.qa, h.ja, a.C, a.H.value, a.J.value, g, h.ha, a.j.ed, a.O, e.output);
        J(b, e);
        c = new LP(a.context, c, Sr(a.T), g, a.O, e.o, e.qa);
        J(b, c);
        a = new Ar(a.context, a.slotId, yt);
        J(b, a);
        return d
    };
    var QP = function () {
        gP.apply(this, arguments)
    };
    _.T(QP, gP);
    var RP = function (a, b) {
        var c = _.mg(b ? "fencedframe" : "IFRAME");
        b && (c.mode = "opaque-ads");
        c.id = a.Od;
        c.name = a.Od;
        c.title = a.Pd;
        Array.isArray(a.l) ? null != a.l[0] && null != a.l[1] && (c.width = String(a.l[0]), c.height = String(a.l[1])) : (c.width = "100%", c.height = "0");
        c.allowTransparency = "true";
        c.scrolling = "no";
        c.marginWidth = "0";
        c.marginHeight = "0";
        c.frameBorder = "0";
        c.style.border = "0";
        c.style.verticalAlign = "bottom";
        c.setAttribute("aria-label", "Advertisement");
        c.tabIndex = 0;
        return c
    }, SP = function (a, b) {
        "string" !== typeof a.l && (b.width = String(a.l[0]), b.height = String(a.l[1]));
        var c = $l(a.context, 774, function () {
            a.loaded(b);
            _.ng(b, "load", c)
        });
        _.Of(b, "load", c);
        _.Vp(a, function () {
            return _.ng(b, "load", c)
        });
        a.g.Sf.appendChild(b)
    };
    var TP = function () {
        QP.apply(this, arguments)
    };
    _.T(TP, QP);
    TP.prototype.F = function () {
        var a = RP(this, !this.g.Vm);
        if ("string" === typeof this.Ra.je) {
            var b = this.Ra.je;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = tf(b), a.src = _.lb(b).toString())
        } else a.config = this.Ra.je;
        SP(this, a);
        if (_.H(gG) && this.g.dj) {
            b = this.g.Sf;
            var c = Lf(this.g.dj);
            a.setAttribute("class", "GoogleActiveViewElement");
            a.setAttribute("data-google-av-cxn", c.Jj);
            a.setAttribute("data-google-av-itpl", c.kl.toString());
            a.setAttribute("data-google-av-ufs-integrator-metadata", btoa(zl(c.metadata)));
            c = b.appendChild;
            var d = document.createElement("script");
            d.setAttribute("id", "googleActiveViewDisplayScript");
            var e = _.If(Jz);
            mb(d, e);
            d.async = !0;
            c.call(b, d)
        }
        return a
    };
    TP.prototype.j = function () {
        return !1
    };
    var UP = navigator, VP = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1089);
        this.Zb = b;
        this.X = c;
        this.T = d;
        this.j = f;
        this.o = h;
        W(this, h);
        e && (this.C = Y(this, e));
        g && (this.H = Y(this, g))
    };
    _.T(VP, Z);
    VP.prototype.g = function () {
        var a = {};
        if (1 === this.Zb) for (var b = _.u(this.X), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = this.T[c.getDomId()];
            a[c.getId()] = WP(this, d, ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], this.j)
        } else if (2 === this.Zb) {
            b = null == (c = this.C) ? void 0 : c.value;
            if (!b) {
                this.o.ba();
                return
            }
            c = null == (d = this.H) ? void 0 : d.value;
            d = _.u(this.X);
            for (var e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = b.get(e.getId()), g = void 0;
                if (null != (g = f) && g.length) {
                    g = this.T[e.getDomId()];
                    var h = void 0, k = null == (h = c) ? void 0 : h.get(e.getAdUnitPath());
                    a[e.getId()] = WP(this, g, f, this.j, k)
                }
            }
        }
        this.o.G(a)
    };
    var WP = function (a, b, c, d, e) {
        var f = new FP, g = new AbortController;
        b = Zs({Wf: f, Ab: g, interestGroupBuyers: c, Bh: kp(a.context, b), dl: d, Ok: e, am: _.H(dG), im: _.Zf(eG)});
        b = UP.runAdAuction(b).catch(function (h) {
            if (h instanceof DOMException && "TimeoutError" === h.name) return 2;
            if (_.H(ZF) && h instanceof DOMException && "ThrottledError" === h.name) return 4;
            h instanceof Error && a.I(h);
            return 3
        });
        return new GP(b, f, c, g)
    };
    var XP = function (a, b, c, d) {
        Z.call(this, a, 1230);
        this.X = b;
        this.o = d;
        this.j = Y(this, c);
        W(this, d)
    };
    _.T(XP, Z);
    XP.prototype.g = function () {
        var a = this.j.value, b = new _.A.Map;
        if (null != a && a.size && !Aw()) {
            var c = ag(gF);
            if (0 !== c.length) for (var d = _.u(this.X), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = a.get(e.getId()), g = void 0;
                if (null != (g = f) && g.length) {
                    g = new _.A.Map;
                    f = _.u(f);
                    for (var h = f.next(); !h.done; h = f.next()) h = h.value, _.x(c, "includes").call(c, _.Uh(h).toString()) && g.set(h, Math.floor(63001 * _.Th()));
                    g.size && b.set(e.getAdUnitPath(), g)
                }
            }
        }
        this.o.G(b)
    };
    var YP = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 1106);
        this.Z = b;
        this.H = c;
        this.o = d;
        this.X = e;
        this.C = f;
        this.J = g;
        this.j = W(this);
        W(this, g)
    };
    _.T(YP, Z);
    YP.prototype.g = function () {
        for (var a = Qs(this.o, this.H, this.Z, this.C), b = new _.A.Map, c = Bt(a), d = new _.A.Map, e = _.u(this.X), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.getAdUnitPath();
            var h = a.get(Is(f)), k = void 0, l = void 0, m = void 0,
                n = null != (m = null != (l = c) ? l : null == (k = h) ? void 0 : _.zk(k, Ps, 1).map(function (p) {
                    return _.F(p, 1)
                })) ? m : [];
            b.set(g.getId(), n);
            if (!d.has(f)) {
                g = [];
                n = _.u(n.sort());
                for (h = n.next(); !h.done; h = n.next()) g.push(_.Uh(h.value));
                d.set(f, g)
            }
        }
        this.j.G(b);
        this.J.G(d)
    };
    var Ct = function (a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 1170);
        this.Zb = b;
        this.T = c;
        this.Z = d;
        this.o = e;
        this.C = Date.now();
        this.j = {Ng: W(this)};
        2 === b && this.o && (this.j.og = W(this));
        _.H($F) && (this.j.Le = W(this));
        this.O = X(this, f);
        this.J = X(this, g);
        h && (this.H = Y(this, h));
        k && (this.W = X(this, k))
    };
    _.T(Ct, Z);
    Ct.prototype.g = function () {
        var a = this.O.value, b;
        if (!this.J.value || !a.length || (null == (b = this.W) ? 0 : b.value) || _.H(at) && !Ss(this.C)) {
            this.j.Ng.ba();
            var c;
            null == (c = this.j.og) || c.ba();
            var d;
            null == (d = this.j.Le) || d.ba()
        } else {
            b = new Mk;
            _.R(this, b);
            if (2 === this.Zb && this.o) {
                var e, f;
                var g = new YP(this.context, this.Z, this.o, this.C, a, null != (f = null == (e = this.H) ? void 0 : e.value) ? f : void 0, this.j.og);
                J(b, g);
                g = g.j;
                _.H($F) && (e = new XP(this.context, a, g, this.j.Le), J(b, e))
            }
            var h, k;
            a = new VP(this.context, this.Zb, a, this.T, g, null != (k = null == (h = this.H) ? void 0 : h.value) ? k : void 0, this.j.Le, this.j.Ng);
            J(b, a);
            b.run()
        }
    };
    var ZP = function (a, b, c) {
        Z.call(this, a, 1216);
        this.j = b;
        this.output = EI(this);
        this.o = X(this, c);
        this.va = this.context.Qa
    };
    _.T(ZP, Z);
    ZP.prototype.g = function () {
        var a = this, b = this.o.value, c = new _.A.Map;
        if (!b.length || _.H(dF)) this.output.G(c); else {
            var d = this.j, e = _.ig(), f = b.map(function (g) {
                return d.createAuctionNonce().then(function (h) {
                    c.set(g, h)
                }).catch(function (h) {
                    a.I(h)
                })
            });
            this.output.Ka(_.A.Promise.all(f).then(function () {
                a.context.wm && a.va.Xb.jc.td.sk.Mc({Pc: _.ig() - e, Gl: b.length});
                return c
            }))
        }
    };
    var $P = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1166);
        this.fa = b;
        this.aa = c;
        this.H = d;
        this.j = EI(this);
        this.o = W(this);
        this.C = W(this);
        this.O = X(this, e);
        this.W = X(this, f);
        HI(this, g);
        this.J = X(this, h)
    };
    _.T($P, Z);
    $P.prototype.g = function () {
        var a = this, b = this.O.value;
        if (b) {
            var c = Sx(this.W.value, {uuid: this.fa}), d = this.aa.createElement("script");
            b = {source: b, credentials: this.J.value ? "include" : "omit", resources: [c.toString()]};
            d.setAttribute("type", "webbundle");
            kb(d, ib(JSON.stringify(b).replace(/</g, "\\u003C")));
            this.aa.head.appendChild(d);
            this.o.G(d);
            this.C.G(b);
            this.j.Ka(aQ(c).catch(function (e) {
                e instanceof GH ? a.H(e) : (a.I(e), a.l(e));
                return null
            }))
        } else this.j.ba(), this.o.ba(), this.C.ba()
    };
    var aQ = function (a) {
        var b, c;
        return _.Qf(function (d) {
            if (1 == d.g) return d.yield(fetch(a.toString()).catch(function () {
                throw new GH("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.g) return b = d.A, d.yield(b.text(), 3);
            c = d.A;
            return d.return(XA(c))
        })
    };
    var bQ = function (a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 1167);
        this.aa = b;
        this.Z = c;
        this.H = d;
        this.j = e;
        this.C = f;
        this.o = X(this, g);
        this.O = Y(this, h);
        this.W = Y(this, k);
        this.fa = Y(this, l);
        m && (this.J = Y(this, m))
    };
    _.T(bQ, Z);
    bQ.prototype.g = function () {
        var a = this.O.value, b = this.W.value, c = this.fa.value;
        if (a) if (b && c) {
            var d = Li(a, 1, 2), e = Li(a, 2, 2);
            a = Li(a, 3, 2);
            if (d.length !== e.length) this.j(new FH("Received " + d.length + " ad URLs but " + e.length + " metadatas")); else {
                c.resources = [].concat(_.Pi(d.filter(function (f) {
                    return f
                })), _.Pi(a.map(function (f) {
                    return "https://securepubads.g.doubleclick.net" + f
                })));
                c.resources.length ? (a = _.mg("SCRIPT"), a.setAttribute("type", "webbundle"), kb(a, ib(JSON.stringify(c).replace(/</g, "\\u003C"))), this.aa.head.removeChild(b), this.aa.head.appendChild(a)) : this.aa.head.removeChild(b);
                for (b = 0; b < d.length; b++) c = void 0, this.H(b, e[b], {
                    kind: 1,
                    url: d[b]
                }, this.o.value, this.Z, null == (c = this.J) ? void 0 : c.value, void 0, void 0);
                this.C(d.length - 1, this.o.value, this.Z)
            }
        } else this.j(Error("Lost bundle script"))
    };
    var cQ = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        Mk.call(this);
        e = new $P(a, f, h, c, m, n, p, r);
        J(this, e);
        J(this, new bQ(a, h, g, b, c, d, k, e.j, e.o, e.C, l));
        this.g = {output: e.j}
    };
    _.T(cQ, Mk);
    var Ot = new _.A.Set, dQ = function (a, b, c) {
        var d = 0, e = function () {
            d = 0
        };
        return function (f) {
            d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
        }
    }(function () {
        throw new bp("Reached Limit for addEventListener");
    }, 3E5), eQ = function (a, b, c) {
        _.V.call(this);
        this.context = a;
        this.R = b;
        this.l = c;
        this.g = [];
        this.enabled = !1;
        this.K = 0;
        this.F = new _.A.Map;
        Ot.add(this);
        this.R.info(eL(this.getName()))
    };
    _.T(eQ, _.V);
    var Qt = function (a) {
        a.enabled || (a.enabled = !0, oo(6, a.context), a.o())
    };
    eQ.prototype.slotAdded = function (a, b) {
        this.g.push(a);
        var c = new lO(a, this.getName());
        wt(this.l, "slotAdded", 818, c);
        this.R.info(fL(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        _.we(b, 4, _.fd, a)
    };
    eQ.prototype.destroySlots = function (a) {
        var b = this;
        return a.filter(function (c) {
            return Ia(b.g, c)
        })
    };
    eQ.prototype.addEventListener = function (a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.K >= _.Zf(lE) && 0 < _.Zf(lE)) return dQ(), !1;
        if (!c.IntersectionObserver && (_.I = ["impressionViewable", "slotVisibilityChanged"], _.x(_.I, "includes")).call(_.I, a)) return O(this.R, UL()), !1;
        var e;
        if (null == (e = this.F.get(a)) ? 0 : e.has(b)) return !1;
        this.F.has(a) || this.F.set(a, new _.A.Map);
        c = function (f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.R.error(uL(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.F.get(a).set(b, c);
        this.l.listen(a, c);
        this.K++;
        return !0
    };
    eQ.prototype.removeEventListener = function (a, b) {
        var c, d = null == (c = this.F.get(a)) ? void 0 : c.get(b);
        if (!d || !uK(this.l, a, d)) return !1;
        this.K--;
        return this.F.get(a).delete(b)
    };
    var Gt = function (a) {
        for (var b = _.u(Ot), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var Kt = function (a, b, c, d) {
        eQ.call(this, a, b, d);
        this.j = c;
        this.ads = new _.A.Map;
        this.Nc = !1
    };
    _.T(Kt, eQ);
    Kt.prototype.setRefreshUnfilledSlots = function (a) {
        "boolean" === typeof a && (this.Nc = a)
    };
    var gM = function (a, b) {
        var c;
        return a.j.enabled && !(null == (c = a.ads.get(b)) || !c.Tl)
    }, hM = function (a, b, c, d) {
        b = new hO(b, a.getName());
        null != c && null != d && (b.size = [c, d]);
        wt(a.l, "slotRenderEnded", 67, b)
    };
    Kt.prototype.getName = function () {
        return "companion_ads"
    };
    Kt.prototype.slotAdded = function (a, b) {
        var c = this;
        a.listen(xK, function (d) {
            mo(d.detail, 11) && (fQ(c, a).Tl = !0)
        });
        eQ.prototype.slotAdded.call(this, a, b)
    };
    Kt.prototype.o = function () {
    };
    var fQ = function (a, b) {
        var c = a.ads.get(b);
        c || (c = {}, a.ads.set(b, c), _.Vp(b, function () {
            return a.ads.delete(b)
        }));
        return c
    }, eM = function (a, b) {
        var c = Nn().g, d = Nn().A;
        if (a.j.enabled) {
            var e = {ec: 3};
            a.I && (e.ud = a.I);
            a.C && (e.vd = a.C);
            b = null != b ? b : a.g;
            c = on(c, d);
            d = e.ud;
            var f = e.vd;
            d && "number" !== typeof d || f && "number" !== typeof f || a.j.refresh(c, b, e)
        } else (null == b ? 0 : b[0]) && a.R.error(lL(b[0].getDomId()))
    }, fM = function (a, b) {
        return a.g.filter(function (c) {
            return _.x(b, "includes").call(b, c.toString())
        })
    };
    var Lt = function (a, b, c) {
        eQ.call(this, a, b, c)
    };
    _.T(Lt, eQ);
    Lt.prototype.getName = function () {
        return "content"
    };
    Lt.prototype.o = function () {
    };
    var Gw = function (a, b) {
        this.configuration = Or();
        this.va = a;
        this.g = b
    };
    Gw.prototype.log = function (a, b, c) {
        var d, e = null != (d = c.mb) ? d : this.configuration[a].Vf;
        0 === e || 1 / e < this.g || (b = b(_.x(Object, "assign").call(Object, {}, {mb: e}, c)), this.configuration[a].send(this.va, b))
    };
    var gQ = _.Rw(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        hQ = _.Rw(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        iQ = new _.A.Map([[2, {Dg: "page_level_ads"}], [5, {Dg: "shoppit"}], [6, {Dg: "side_rails"}]]),
        jQ = function (a) {
            var b = void 0 === b ? iQ : b;
            this.context = a;
            this.g = b;
            this.A = new _.A.Map;
            this.loaded = new _.A.Set
        }, lQ;
    jQ.prototype.load = function (a) {
        var b = _.kQ(this, a), c, d = (null != (c = this.g.get(a.module)) ? c : {}).Dg;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.Tm(172)) && "pagead2.googlesyndication.com" === wB((c.src || "").match(_.vB)[3] || null) ? _.If(hQ, this.context.Pa, d) : _.If(gQ, this.context.Pa, d);
            c = {};
            var e = _.Zf(RE);
            e && (c.cb = e);
            d = _.x(Object, "keys").call(Object, c).length ? _.Px(d, c) : d;
            lQ(this, a);
            _.Lp(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.kQ = function (a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.ei);
        return a.A.get(b)
    };
    lQ = function (a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = $l(a.context, 340, function (e) {
            if (a.g.has(c) && "function" === typeof e) {
                var f = a.g.get(c);
                f = (void 0 === f.zk ? [] : f.zk).map(function (g) {
                    return _.kQ(a, g).promise
                });
                _.A.Promise.all(f).then(function () {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(fp(), b, {
            value: function (e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            }, writable: !1, enumerable: !1
        })
    };
    var ou = function (a, b) {
        Z.call(this, a, 980);
        this.output = new rs;
        this.j = [];
        this.o = X(this, b)
    };
    _.T(ou, Z);
    ou.prototype.g = function () {
        for (var a = _.u((_.I = [this.o.value, this.j.map(function (c) {
            return c.value
        })], _.x(_.I, "flat")).call(_.I)), b = a.next(); !b.done; b = a.next()) Ah(b.value);
        this.output.notify()
    };
    var lu = function (a, b) {
        Z.call(this, a, 892, _.Zf(KE));
        this.j = W(this);
        this.C = W(this);
        this.o = W(this);
        this.Id = W(this);
        this.H = W(this);
        this.J = W(this);
        this.Df = W(this);
        this.O = GI(this, b);
        this.Hd = W(this)
    };
    _.T(lu, Z);
    lu.prototype.g = function () {
        var a = this.O.value;
        if (!a) throw Error("config timeout");
        this.j.Ha(_.Um(a, jA, 3));
        this.C.Ha(_.Um(a, lA, 2));
        var b = this.o, c = b.G;
        var d = ne(a, 4, Jc, 2);
        c.call(b, d);
        b = this.Id;
        c = b.Ha;
        d = _.zk(a, fA, 6);
        c.call(b, d);
        b = this.H;
        c = b.Ha;
        d = _.zk(a, Zv, 5);
        c.call(b, d);
        this.J.Ha(_.Um(a, vA, 7));
        var e;
        b = this.Df;
        c = b.G;
        d = _.A.Set;
        var f;
        null == (e = _.Um(a, gA, 1)) ? f = void 0 : f = Li(e, 6, 2);
        c.call(b, new d(f || []));
        this.Hd.Ha(_.Um(a, xA, 8))
    };
    lu.prototype.K = function (a) {
        this.l(a)
    };
    lu.prototype.l = function (a) {
        this.j.kb(a);
        this.C.kb(a);
        this.o.G([]);
        this.Id.G([]);
        this.H.G([]);
        this.J.ba();
        this.Hd.ba()
    };
    var ku = function (a, b) {
        Z.call(this, a, 891);
        var c = this;
        this.j = W(this);
        this.error = void 0;
        var d = W(this);
        this.o = X(this, d);
        b(function (e, f) {
            if (f) c.error = f, d.G([]); else try {
                if ("string" === typeof e) {
                    var g = JSON.parse(e || "[]");
                    Array.isArray(g) && d.G(g)
                }
            } catch (h) {
            } finally {
                d.Oc || (c.error = Error("malformed response"), d.G([]))
            }
        })
    };
    _.T(ku, Z);
    ku.prototype.g = function () {
        if (this.error) throw this.error;
        this.j.G(Ne(yA, this.o.value))
    };
    var mQ = function (a, b) {
        Z.call(this, a, 1081);
        this.Ub = W(this);
        this.j = Y(this, b)
    };
    _.T(mQ, Z);
    mQ.prototype.g = function () {
        this.j.value ? this.Ub.G(this.j.value) : this.Ub.ba()
    };
    var nQ = new _.A.Map([[1, 5], [2, 2], [3, 3]]), oQ = function (a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 1079);
        this.aa = b;
        this.googletag = c;
        this.ca = d;
        this.H = e;
        this.j = f;
        this.R = g;
        this.o = h;
        this.C = k;
        W(this)
    };
    _.T(oQ, Z);
    oQ.prototype.g = function () {
        var a = this, b = this.o.getAdUnitPath(), c = nQ.get(_.tg(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.ca) ? d : this.j.g;
            b = new ON(this.context, this.aa, b, c, !0, this.googletag.pubads(), this.googletag.display, function () {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.j, this.H, this.R, !1, this.C);
            _.R(this, b);
            b.run()
        }
    };
    var nu = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 1082);
        this.googletag = b;
        this.ca = c;
        this.H = d;
        this.o = e;
        this.R = f;
        this.C = W(this);
        this.j = new mQ(this.context, this.C);
        this.Ub = this.j.Ub;
        _.R(this, this.j);
        this.J = X(this, g)
    };
    _.T(nu, Z);
    nu.prototype.g = function () {
        if (_.H(PE)) {
            for (var a = [], b = _.u(this.J.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, Cl(c, wA)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.C.Ha(null == d ? void 0 : _.Um(d, qA, 4));
            d = new Mk;
            _.R(this, d);
            a = _.u(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, J(d, new oQ(this.context, document, this.googletag, null != (c = this.ca) ? c : this.o.g, this.H, this.o, this.R, _.Um(b, sA, Fl(b, wA, 5)), _.Um(b, qA, 4)));
            J(d, this.j);
            d.run()
        } else this.Ub.ba()
    };
    var Hw = function (a) {
        LI.call(this, function (b, c) {
            dm(a, b, c);
            var d;
            null == (d = console) || d.error(c)
        })
    };
    _.T(Hw, LI);
    var pQ = function () {
        QP.apply(this, arguments)
    };
    _.T(pQ, QP);
    pQ.prototype.F = function () {
        var a = this, b = this.g, c = b.Zi;
        b = b.Me;
        var d = RP(this);
        if (null == c ? 0 : c.length) if (_.wy) {
            c = _.u(c);
            for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
        } else d.sandbox.add.apply(d.sandbox, _.Pi(c));
        b && (d.allow = b);
        SP(this, d);
        fm(this.context, 653, function () {
            var f;
            if (f = tk(a.Ra.hb)) {
                var g = f.toString().toLowerCase();
                f = -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") || _.H(nG) ? f : tk("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>")
            }
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            na() && g.open("text/html", "replace");
            g.write(_.fy(f));
            var l, m, n;
            if (xx(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    pQ.prototype.j = function () {
        return !0
    };
    var Zu = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, z, y, C, G, D, M, S, P, aa) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.M = c;
        this.P = d;
        this.za = e;
        this.ab = f;
        this.tb = g;
        this.Oa = h;
        this.isBackfill = k;
        this.Qb = l;
        this.ga = m;
        this.B = n;
        this.j = W(this);
        this.C = W(this);
        this.o = FI(this);
        this.J = X(this, p);
        this.ja = X(this, r);
        HI(this, v);
        this.W = X(this, w);
        this.H = X(this, z);
        this.O = X(this, y);
        HI(this, G);
        this.qa = Y(this, C);
        HI(this, D);
        this.ha = X(this, M);
        HI(this, S);
        aa && HI(this, aa);
        P && (this.fa = Y(this, P))
    };
    _.T(Zu, Z);
    Zu.prototype.g = function () {
        var a = this.J.value;
        if (0 === a.kind && null == a.hb) throw new FH("invalid html");
        var b, c, d;
        a:{
            var e = this.context, f = {
                aa: document,
                slotId: this.slotId,
                M: this.M,
                P: this.P,
                za: this.za,
                size: this.O.value,
                kj: this.W.value,
                Sf: this.H.value,
                Oa: this.Oa,
                tb: this.tb,
                Zi: this.qa.value,
                isBackfill: this.isBackfill,
                Qb: this.Qb,
                Me: this.ha.value,
                Vm: null == (b = this.ga) ? void 0 : _.Q(b, 14),
                If: null == (c = this.fa) ? void 0 : c.value,
                ab: this.ab,
                dj: _.H(gG) ? null == (d = this.ga) ? void 0 : _.Um(d, RA, 5) : void 0
            };
            b = this.ja.value;
            c = a.kind;
            switch (c) {
                case 0:
                    a = new (b ? jP : pQ)(e, a, f);
                    break a;
                case 2:
                    a = new TP(e, a, f);
                    break a;
                default:
                    gb(c)
            }
            a = void 0
        }
        _.R(this, a);
        e = a.render();
        qQ(this, this.B, e);
        this.B.top && this.B.top !== this.B && _.ol(this.B.top) && qQ(this, this.B.top, e);
        this.o.notify();
        this.j.G(e);
        this.C.G(a.j())
    };
    var qQ = function (a, b, c) {
        Wp(a, a.id, b, "message", function (d) {
            c.contentWindow === d.source && wt(a.slotId, Br, 824, d)
        })
    };
    var Fu = function (a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.ra = c;
        this.gb = d;
        this.height = e;
        this.output = W(this)
    };
    _.T(Fu, Z);
    Fu.prototype.g = function () {
        if (null == this.height) this.output.ba(); else {
            var a = Math.round(.3 * this.ra), b;
            2 !== this.format && 3 !== this.format || null == (b = this.gb) || !_.Q(b, 12, !1) || 0 >= a || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    };
    var Ou = function (a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.ca = c;
        this.o = d;
        this.aa = f;
        this.M = g;
        this.tb = m;
        this.output = W(this);
        this.J = 2 === e || 3 === e;
        this.j = X(this, h);
        this.H = X(this, k);
        this.C = Y(this, l);
        n && HI(this, n)
    };
    _.T(Ou, Z);
    Ou.prototype.g = function () {
        var a = Kq(this.ca, this.o), b = rn(this.slotId, this.aa) || qq(this.j.value, Ln(this.slotId), a);
        this.H.value && !a && (b.style.display = "inline-block");
        this.J ? GK(this.M, this.slotId, function () {
            return void _.pB(b)
        }) : _.Vp(this, function () {
            return void _.pB(b)
        });
        a = rQ(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    };
    var rQ = function (a) {
        var b = a.j.value, c, d = null == (c = a.C.value) ? void 0 : c.height;
        if (b && !a.tb && d) {
            c = a.ca;
            var e;
            a = (null != (e = Jq(a.o, 23)) ? e : _.Q(c, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else a = 0;
        return a
    };
    var Du = function (a, b) {
        Z.call(this, a, 859);
        this.B = b;
        this.output = W(this)
    };
    _.T(Du, Z);
    Du.prototype.g = function () {
        this.output.G(!_.ol(this.B.top))
    };
    var Vu = function (a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.aa = c;
        this.output = W(this)
    };
    _.T(Vu, Z);
    Vu.prototype.g = function () {
        var a = [], b = this.aa;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.I = c.features(), _.x(_.I, "includes")).call(_.I, "attribution-reporting") && a.push("attribution-reporting");
        switch (this.format) {
            case 5:
            case 4:
                _.H(WD) && a.push("autoplay");
                break;
            case 7:
                _.H(XD) && a.push("autoplay")
        }
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    };
    var mv = function (a, b, c, d) {
        Z.call(this, a, 1207);
        this.za = c;
        this.slotId = d;
        HI(this, b)
    };
    _.T(mv, Z);
    mv.prototype.g = function () {
        wt(this.za, "impressionViewable", 715, new iO(this.slotId, "publisher_ads"))
    };
    var lv = function (a, b, c, d) {
        zO.call(this, a, b, c);
        HI(this, d)
    };
    _.T(lv, zO);
    var hv = function (a, b, c, d, e, f) {
        f = void 0 === f ? Cu : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.aa = d;
        this.za = e;
        this.C = f;
        this.j = this.o = -1;
        this.J = _.Nz(function () {
            wt(g.za, "slotVisibilityChanged", 716, new jO(g.slotId, "publisher_ads", g.j))
        }, 200);
        this.H = X(this, c);
        var h = new rs;
        vK(this.slotId).then(function () {
            return void h.notify()
        });
        HI(this, h)
    };
    _.T(hv, Z);
    hv.prototype.g = function () {
        var a = this, b = this.C($l(this.context, this.id, function (c) {
            c = _.u(c);
            for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.x(Number, "isFinite").call(Number, a.o) && sQ(a)
        }));
        b && (b.observe(this.H.value), Wp(this, this.id, this.aa, "visibilitychange", function () {
            sQ(a)
        }), _.Vp(this, function () {
            b.disconnect()
        }))
    };
    var sQ = function (a) {
        var b = Math.floor(eI(a.aa) ? 0 : a.o);
        if (0 > b || 100 < b || b === a.j ? 0 : -1 !== a.j || 0 !== b) a.j = b, a.J()
    };
    var Tu = function (a, b, c, d, e, f) {
        Z.call(this, a, 719);
        this.ca = b;
        this.o = c;
        this.lh = d;
        this.output = W(this);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(Tu, Z);
    Tu.prototype.g = function () {
        var a = this.j.value.kind;
        switch (a) {
            case 0:
                this.j.value.hb ? this.C.value ? (a = new ho, a = qi(a, 3, this.lh), _.Q(no([a, this.ca.Bc(), this.o.Bc()]), 3) ? this.output.G(PJ) : this.output.ba()) : this.output.ba() : this.output.ba();
                break;
            case 2:
                this.output.ba();
                break;
            default:
                gb(a)
        }
    };
    var tQ = function (a, b, c, d, e, f) {
        Z.call(this, a, 1119);
        this.slotId = b;
        this.o = c;
        this.documentElement = d;
        this.M = e;
        this.j = f;
        this.output = W(this)
    };
    _.T(tQ, Z);
    tQ.prototype.g = function () {
        var a = _.mg("INS");
        a.id = this.o;
        dn(this.j) && _.aq(a, {display: "none"});
        this.documentElement.appendChild(a);
        var b = function () {
            return void _.pB(a)
        };
        (_.I = [2, 3], _.x(_.I, "includes")).call(_.I, this.j) ? GK(this.M, this.slotId, b) : _.Vp(this, b);
        this.output.G(a)
    };
    var uQ = function (a, b, c, d, e) {
        Z.call(this, a, 1120);
        this.J = b;
        this.C = c;
        this.o = d;
        this.j = e;
        this.output = W(this);
        a = this.j;
        if (!_.Ma(a) || !_.Ma(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.H = X(this, this.j)
    };
    _.T(uQ, Z);
    uQ.prototype.g = function () {
        var a, b, c = null != (b = null == (a = this.H) ? void 0 : a.value) ? b : this.j;
        if (!(_.I = [2, 3], _.x(_.I, "includes")).call(_.I, this.C)) {
            a = _.u(_.x(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.J && _.pB(b);
            this.o || (c.style.display = "")
        }
        this.output.G(c)
    };
    var Gu = function (a, b, c, d, e, f, g, h, k) {
        Mk.call(this);
        c ? (a = new uQ(a, e, g, k, c), J(this, a), a = a.output) : cn(g) ? (a = new tQ(a, b, d, f, h, g), J(this, a), a = a.output) : (b = new Ur(a, b, wK, function (l) {
            return l.detail
        }), J(this, b), a = new uQ(a, e, g, k, b.output), J(this, a), a = a.output);
        this.output = a
    };
    _.T(Gu, Mk);
    var vQ = function (a, b) {
        var c = Nn();
        this.context = a;
        this.M = b;
        this.g = c
    }, wQ = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, z) {
        var y = document, C = window;
        e || f || OK(a.M, d);
        var G = rv(a.context, b, a.g, c, d, e, f, g, h, k, l, y, m, n, p, r, v, function () {
            OK(a.M, d);
            NK(a.M, d, G)
        }, w, z);
        f || NK(a.M, d, G);
        _.Vp(d, function () {
            OK(a.M, d)
        });
        C.top !== C && C.addEventListener("pagehide", function (D) {
            D.persisted || OK(a.M, d)
        });
        G.run()
    };
    var xQ = function (a, b, c, d) {
        Z.call(this, a, 884);
        this.Da = b;
        this.vb = c;
        this.o = W(this);
        this.j = X(this, d)
    };
    _.T(xQ, Z);
    xQ.prototype.g = function () {
        $M(this.vb, _.po(this.Da, "__gads", this.j.value));
        ro(20, this.context, this.Da, this.j.value);
        ro(2, this.context, this.Da, this.j.value);
        this.o.G(Bh())
    };
    var tv = 0, yQ = new _.gn(-9, -9);
    var xv = new _.A.Set([function (a, b) {
        var c = a.ma.P.ca;
        b.set("pvsid", {value: a.la.context.pvsid}).set("correlator", {value: Js(c, 26)})
    }, function (a, b) {
        var c = a.ma.P.ca, d = a.Xm;
        a = d.vd;
        d = d.ud;
        var e = _.Q(c, 21);
        b = b.set("hxva", {value: e ? 1 : null}).set("cmsid", {value: e ? Bk(c, 23) : null}).set("vid", {value: e ? Bk(c, 22) : null}).set("pod", {value: d}).set("ppos", {value: a});
        a = b.set;
        c = oz(c, 29);
        a.call(b, "scor", {value: null == c ? void 0 : c})
    }, function (a, b) {
        var c = a.ma, d = c.X, e = c.P.T;
        c = a.Sg;
        var f = c.fl, g = c.Yk;
        b.set("eid", {value: a.la.hg}).set("debug_experiment_id", {value: RC().split(",")}).set("expflags", {value: _.Tm(253) ? $f(nE) || null : null}).set("pied", {
            value: function () {
                var h = new QI, k = !1, l = !1;
                f && (k = !0, Ik(h, 1, qA, f));
                var m = d.map(function (p) {
                    var r = new OI, v, w;
                    null == (v = e[p.getDomId()]) ? w = void 0 : w = _.zk(v, qA, 27);
                    p = w;
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    p = _.u(p);
                    for (v = p.next(); !v.done; v = p.next()) Ik(r, 1, qA, v.value);
                    return r
                });
                l && _.Om(h, 2, m);
                m = _.u(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) Ik(h, 1, qA, n.value), k = !0;
                return k ? ub(h.g(), 3) : null
            }()
        })
    }, function (a, b) {
        var c = a.la;
        a = c.context;
        c = c.yb;
        b.set("output", {value: "ldjh"}).set("gdfp_req", {value: 1}).set("vrg", {value: a.Te}).set("ptt", {value: 17}).set("impl", {value: c ? "fifs" : "fif"})
    }, function (a, b) {
        var c = a.la.Z;
        a = Dv(a.ma.P.ca) || new iM;
        var d = _.tg(a, 6, 2);
        b = b.set("rdp", {value: _.Q(a, 1) ? "1" : null}).set("ltd", {value: _.Q(a, 9) ? "1" : null}).set("ltd_cs", {value: _.Tm(221) && null == mo(c, 3) ? "1" : null}).set("gdpr_consent", {value: Rv(c, 2)}).set("gdpr", {
            value: null != mo(c, 3) ? _.Q(c, 3) ? "1" : "0" : null,
            options: {Ia: !0}
        }).set("addtl_consent", {value: Rv(c, 4)}).set("tcfe", {value: wz(c, 7)}).set("us_privacy", {value: Rv(c, 1)}).set("npa", {value: _.Q(c, 6) || _.Q(a, 8) ? 1 : null}).set("puo", {value: _.H(OE) && _.Q(a, 13) ? 1 : null}).set("tfua", {
            value: 2 !== d ? d : null,
            options: {Ia: !0}
        }).set("tfcd", {
            value: null != _.Dc(_.xi(a, 5)) ? _.tg(a, 5, 0) : null,
            options: {Ia: !0}
        }).set("trt", {
            value: null != _.Dc(_.xi(a, 10)) ? _.tg(a, 10, 0) : null,
            options: {Ia: !0}
        }).set("tad", {
            value: _.H(wv) && null != mo(c, 8) ? _.Q(c, 8) ? "1" : "0" : null,
            options: {Ia: !0}
        }).set("gpp", {value: Rv(c, 11)});
        a = b.set;
        c = pz(c, 10);
        a.call(b, "gpp_sid", {value: c.join(",") || void 0})
    }, function (a, b) {
        var c = a.ma, d = c.P, e = c.X, f = c.qg, g = a.la.B, h = e.map(function (l) {
            return d.T[l.getDomId()]
        }), k = [];
        a = e.map(function (l) {
            return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function (m) {
                if (!m) return "";
                var n = _.x(k, "findIndex").call(k, function (p) {
                    return p === m
                });
                return 0 <= n ? n : k.push(m) - 1
            }).join("/")
        });
        b.set("iu_parts", {value: k}).set("enc_prev_ius", {value: "/0/1"}).set("prev_iu_szs", {
        // b.set("iu_parts", {value: k}).set("enc_prev_ius", {value: a}).set("prev_iu_szs", {
            value: h.map(function (l) {
                return bn(l)
            })
        }).set("fluid", {
            value: function () {
                var l = !1, m = h.map(function (n) {
                    n = (_.I = an(n), _.x(_.I, "includes")).call(_.I, "fluid");
                    l || (l = n);
                    return n ? "height" : "0"
                });
                return l ? m : null
            }()
        }).set("ifi", {
            value: function () {
                var l = lq(g);
                if (!f) {
                    l += 1;
                    var m = g, n = e.length;
                    n = void 0 === n ? 1 : n;
                    m = YB(bg(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.H(UE) ? Fq(e, function (l) {
                return _.Uh(l.getDomId())
            }) : null, options: _.x(Object, "assign").call(Object, {}, {Ta: "~"}, {dd: !0})
        })
    }, function (a, b) {
        var c = a.ma;
        a = c.X;
        c = c.P;
        var d = c.ca, e = c.T;
        b.set("sfv", {value: sM ? sM : sM = bo()}).set("fsfs", {
            value: Fq(a, function (f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : Jq(f, 12)) ? g : mo(d, 13))
            }), options: {Ta: ",", Gd: 0, dd: !0}
        }).set("fsbs", {
            value: Fq(a, function (f) {
                f = e[f.getDomId()].Bc();
                var g = d.Bc(), h;
                return (null != (h = null == f ? void 0 : Jq(f, 3)) ? h : null == g ? 0 : _.Q(g, 3)) ? 1 : 0
            }), options: {Gd: 0, dd: !0}
        })
    }, function (a, b) {
        var c = a.la.M;
        a = a.ma;
        var d = a.qg;
        b.set("rcs", {
            value: Fq(a.X, function (e) {
                if (!d) {
                    var f = c.g.get(e);
                    f && f.Vi++
                }
                return MK(c, e)
            }), options: {Gd: 0, dd: !0}
        })
    }, function (a, b) {
        var c = a.ma;
        a = a.la.yb;
        c = c.P.T[c.X[0].getDomId()];
        b.set("click", {value: !a && c.getClickUrl() ? Bk(c, 7) : null})
    }, function (a, b, c) {
        var d = a.ma, e = d.X, f = d.P.T;
        a = a.la;
        var g = a.Z, h = a.B;
        c = void 0 === c ? function (n, p) {
            return qh(n, p)
        } : c;
        a = e.map(function (n) {
            return f[n.getDomId()]
        });
        var k, l, m;
        b.set("ists", {value: Dq(a, Tr) || null}).set("fas", {
            value: Fq(a, function (n) {
                return Vq(Sr(n))
            }), options: {Gd: 0, dd: !0}
        }).set("itsi", {
            value: e.some(function (n) {
                var p;
                return !LN(n) && 5 === (null == (p = f[n.getDomId()]) ? void 0 : Sr(p))
            }) ? function () {
                var n = c(g, h);
                if (!n) return 1;
                n = Rr(_.Cj(n, 604800, "__lsv__"));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: Dq(a, function (n) {
                return 5 === Sr(n) && _.H(_.uE)
            }) || null
        }).set("ifs", {
            value: null != (m = null == (k = (_.I = _.x(Object, "values").call(Object, f), _.x(_.I, "find")).call(_.I, function (n) {
                return Bi(n, IM, 29)
            })) ? void 0 : null == (l = _.Um(k, IM, 29)) ? void 0 : zl(l)) ? m : null
        }).set("dap", {
            value: function () {
                if (!_.H(GE) || e.some(function (p) {
                    var r;
                    return LN(p) || !(_.I = [2, 3], _.x(_.I, "includes")).call(_.I, null == (r = f[p.getDomId()]) ? void 0 : Sr(r))
                })) return null;
                var n = Rr(_.Cj(c(g, h), 604800, "__lsa__"));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) <= _.Zf(DE) ? 3 : null : null
            }()
        })
    }, function (a, b) {
        a = a.ma;
        var c = a.P.T;
        a = a.X.map(function (d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: Dq(a, function (d) {
                return 4 === Sr(d)
            }) || null
        })
    }, function (a, b) {
        var c = a.ma, d = a.la;
        a = d.isSecureContext;
        d = d.B;
        var e = b.set;
        var f = c.X;
        var g = c.P;
        c = c.ec;
        var h = g.ca, k = g.T, l = new kh;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.Q(k, 17));
        l.set(2, mr(f, g));
        l.set(3, _.Q(h, 27) || !1);
        l.set(4, 3 === c);
        f = mh(l);
        e.call(b, "eri", {value: f}).set("gct", {value: hr("google_preview", d)}).set("sc", {
            value: a ? 1 : 0,
            options: {Ia: !0}
        })
    }, function (a, b) {
        a = a.la;
        var c = a.Z, d = a.Da, e = _.po(d, "__gads", c);
        a = "1" === _.po(d, "__gpi_opt_out", c) ? "1" : null;
        b = b.set("cookie", {value: e, options: {Ia: !0}}).set("cookie_enabled", {value: !e && PH(d, c) ? "1" : null});
        e = b.set;
        c = (c = _.po(d, "__gpi", c)) && !_.x(c, "includes").call(c, "&") ? c : null;
        e.call(b, "gpic", {value: c}).set("pdopt", {value: a})
    }, function (a, b) {
        var c = a.la.B;
        a = jr(a.ma.P.ca.Sa());
        var d = c.document, e = d.domain;
        b.set("cdm", {value: (a || en(c)) === d.URL ? "" : e})
    }, function (a, b) {
        a = a.la.B;
        b.set("arp", {value: Yp(a) ? 1 : null}).set("abxe", {value: _.ol(a.top) || Lv(a.IntersectionObserver) ? 1 : null})
    }, function (a, b) {
        var c = a.la.B;
        a = jr(a.ma.P.ca.Sa());
        b.set("dt", {value: (new Date).getTime()});
        if (!a) {
            try {
                var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            b.set("lmt", {value: d})
        }
    }, function (a, b) {
        var c = a.ma, d = c.P;
        c = c.X;
        a = a.la.B;
        for (var e = $m(!0, a), f = d.ca, g = a.document, h = d.T, k = [], l = [], m = _.u(c), n = m.next(); !n.done; n = m.next()) {
            var p = n.value, r = h[p.getDomId()], v = Kq(f, r);
            n = void 0;
            p = null != (n = Jn(p, r, g, v)) ? n : yQ;
            k.push(Math.round(p.x));
            l.push(Math.round(p.y))
        }
        e && (d.xd = e);
        f = jh(a) ? null : $m(!1, a);
        try {
            var w = a.top;
            var z = sv(w.document, w)
        } catch (y) {
            z = new _.gn(-12245933, -12245933)
        }
        b.set("adxs", {value: k, options: {Ia: !0}}).set("adys", {
            value: l,
            options: {Ia: !0}
        }).set("biw", {value: e ? e.width : null}).set("bih", {value: e ? e.height : null}).set("isw", {value: e ? null == f ? void 0 : f.width : null}).set("ish", {value: e ? null == f ? void 0 : f.height : null}).set("scr_x", {
            value: Math.round(z.x),
            options: {Ia: !0}
        }).set("scr_y", {value: Math.round(z.y), options: {Ia: !0}}).set("btvi", {
            value: uv(c, a, d),
            options: {Ia: !0, Ta: "|"}
        })
    }, function (a, b) {
        var c = a.la, d = c.M, e = c.B;
        b.set("ucis", {
            value: a.ma.X.map(function (f) {
                (f = d.g.get(f)) ? (null != f.Qb || (f.Qb = e === e.top ? (++d.o).toString(36) : py()), f = f.Qb) : f = "";
                return f
            }), options: {Ta: "|"}
        }).set("oid", {value: 2})
    }, function (a, b) {
        a = a.ma;
        var c = a.X, d = a.P, e = d.T;
        a = new _.A.Map;
        var f = Array(c.length), g = !1;
        d = _.u(d.ca.Sa());
        for (var h = d.next(); !h.done; h = d.next()) if (h = h.value, "tag_origin" === _.F(h, 1)) {
            g = !0;
            for (var k = 0; k < c.length; k++) f[k] = [].concat(_.Pi(Im(h)))
        } else a.set(_.F(h, 1), [Im(h)[0]]);
        for (d = 0; d < c.length; d++) if (h = e[c[d].getDomId()]) for (h = _.u(h.Sa()), k = h.next(); !k.done; k = h.next()) {
            k = k.value;
            var l = _.F(k, 1);
            if ("tag_origin" === _.F(k, 1)) {
                g = !0;
                var m = l = void 0;
                (l = f)[m = d] || (l[m] = []);
                f[d].push.apply(f[d], _.Pi(Im(k)))
            } else m = a.get(l) || [], k = Im(k)[0], 1 === c.length ? m[0] = k : k !== m[0] && (m[d + 1] = k), a.set(l, m)
        }
        c = [];
        e = _.u(_.x(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) h = d.value, d = Vn()[h], h = a.get(h), d && h && "to" !== d && (1 < h.length ? (h = h.map(function (n) {
            return encodeURIComponent(n || "")
        }).join(), c.push(d + "," + h)) : 1 === h.length && "url" !== d && b.set(d, {value: h[0]}));
        c.length && b.set("sps", {value: c, options: {Ta: "|"}});
        b.set("tos", {
            value: g ? f.map(function (n) {
                return _.x(Array, "from").call(Array, new _.A.Set(n)).join("+")
            }) : void 0, options: {Ta: "~"}
        })
    }, function (a, b) {
        a = a.la;
        var c = a.context, d = a.B, e, f, g, h, k, l, m;
        b.set("u_his", {value: jC(d)}).set("u_h", {value: null == (e = d.screen) ? void 0 : e.height}).set("u_w", {value: null == (f = d.screen) ? void 0 : f.width}).set("u_ah", {value: null == (g = d.screen) ? void 0 : g.availHeight}).set("u_aw", {value: null == (h = d.screen) ? void 0 : h.availWidth}).set("u_cd", {value: null == (k = d.screen) ? void 0 : k.colorDepth}).set("u_sd", {value: HH(d)}).set("u_tz", {value: -(new Date).getTimezoneOffset()}).set("dmc", {value: null != (m = null == (l = d.navigator) ? void 0 : l.deviceMemory) ? m : null}).set("bc", {value: nh(d)}).set("nvt", {value: di(d)}).set("bz", {
            value: function () {
                var n = _.Zf(aE);
                return 0 === n ? null : SB(d, 2 === n)
            }()
        }).set("tl", {
            value: _.H(WE) ? fm(c, 1232, function () {
                var n = oa() && Gl(d) ? d.document.documentElement.lang : void 0;
                return n
            }, !0) : null
        })
    }, function (a, b) {
        (a = _.Tm(251)) && b.set("uach", {value: Ny(a, 3)})
    }, function (a, b) {
        a = a.la;
        if (!a.Mb) {
            var c;
            if (a = null == (c = a.B.navigator) ? void 0 : c.userActivation) {
                c = 0;
                if (null == a ? 0 : a.hasBeenActive) c |= 1;
                if (null == a ? 0 : a.isActive) c |= 2
            } else c = void 0;
            c && b.set("uas", {value: c})
        }
    }, function (a, b) {
        var c = a.la, d = c.B, e = c.M;
        c = c.yb;
        a = a.ma;
        var f = a.X;
        a = a.P;
        var g = a.ca, h = a.T;
        a = ir("google_preview", d);
        var k = d.document, l = a ? kr(k.URL) : k.URL;
        k = a ? kr(k.referrer) : k.referrer;
        a = !1;
        if (c) c = jr(g.Sa()); else {
            var m;
            c = null != (m = jr(h[f[0].getDomId()].Sa())) ? m : jr(g.Sa())
        }
        if (null != c) {
            var n = l;
            jh(d) || (k = "", a = !0)
        } else c = l;
        m = lr(d);
        b.set("nhd", {value: m || null}).set("url", {value: c}).set("loc", {value: null !== n && n !== c ? n : null}).set("ref", {value: k});
        if (m) {
            n = b.set;
            var p, r;
            m = _.ol(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
            var v;
            p = null == (v = d.location) ? void 0 : v.ancestorOrigins;
            d = Kl(d) || "";
            v = (null == p ? void 0 : p[p.length - 1]) || "";
            d = (d = m || d || v) ? a ? wB(d.match(_.vB)[3] || null) : d : null;
            n.call(b, "top", {value: d}).set("etu", {value: e.Kb})
        }
    }, function (a, b) {
        a = a.la.context.pvsid;
        b.set("rumc", {value: _.H(mG) || _.Xf(bm).g ? a : null}).set("rume", {value: _.H(lG) ? 1 : null})
    }, function (a, b) {
        b.set("vis", {value: _.qs(a.la.B.document)})
    }, function (a, b) {
        var c = a.ma, d = c.X;
        c = c.P;
        a = a.la.B;
        var e = tq(d, c.T, c.ca), f = wq(d, e, a);
        c = f.Ml;
        f = f.Fm;
        var g = yq(d, e, a), h = g.Tk;
        g = g.Kl;
        var k = !1;
        d = d.map(function (m) {
            var n;
            m = null != (n = e.get(m)) ? n : 0;
            if (0 === m) return null;
            k = !0;
            return 2 === m ? "1" : "0"
        });
        var l;
        b.set("aee", {value: k ? d : null, options: {Ta: "|"}}).set("psz", {
            value: c,
            options: {Ta: "|"}
        }).set("msz", {value: f, options: {Ta: "|"}}).set("fws", {value: h, options: {Ia: !0}}).set("ohw", {
            value: g,
            options: {Ia: !0}
        }).set("efat", {value: "#flexibleAdSlotTest" === (null == (l = a.location) ? void 0 : l.hash) ? "1" : null})
    }, function (a, b) {
        b.set("psts", {value: LK(a.la.M, a.ma.X)})
    }, function (a, b) {
        var c = a.la;
        a = c.Z;
        c = c.B;
        var d = c.document.domain;
        var e = ph(a) ? rh(c) ? c.document.cookie : null : null;
        var f = null != e ? e : "", g = c.history.length, h = c.screen, k = c.document.referrer;
        if (bg()) var l = window.gaGlobal || {}; else {
            var m = Math.round((new Date).getTime() / 1E3), n = c.google_analytics_domain_name;
            d = "undefined" == typeof n ? gH("auto", d) : gH(n, d);
            var p = -1 < f.indexOf("__utma=" + d + "."), r = -1 < f.indexOf("__utmb=" + d);
            (e = (YB() || window).gaGlobal) || (e = {}, (YB() || window).gaGlobal = e);
            var v = !1;
            if (p) {
                var w = f.split("__utma=" + d + ".")[1].split(";")[0].split(".");
                r ? e.sid = w[3] : e.sid || (e.sid = m + "");
                e.vid = w[0] + "." + w[1];
                e.from_cookie = !0
            } else {
                e.sid || (e.sid = m + "");
                if (!e.vid) {
                    v = !0;
                    r = Math.round(2147483647 * Math.random());
                    p = eH.appName;
                    var z = eH.version, y = eH.language ? eH.language : eH.browserLanguage, C = eH.platform,
                        G = eH.userAgent;
                    try {
                        w = eH.javaEnabled()
                    } catch (D) {
                        w = !1
                    }
                    w = [p, z, y, C, G, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + f + (k || "");
                    for (k = w.length; 0 < g;) w += g-- ^ k++;
                    e.vid = (r ^ fH(w) & 2147483647) + "." + m
                }
                e.from_cookie || (e.from_cookie = !1)
            }
            if (!e.cid) {
                b:for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), w = 0; w < f.length; w++) if (k = hH.exec(f[w]) || iH.exec(f[w]) || jH.exec(f[w])) {
                    h = k[1] || 0;
                    if (h == m) {
                        l = k[2];
                        break b
                    }
                    h < n && (n = h, l = k[2])
                }
                v && l && -1 != l.search(/^\d+\.\d+$/) ? (e.vid = l, e.from_cookie = !0) : l != e.vid && (e.cid = l)
            }
            e.dh = d;
            e.hid || (e.hid = Math.round(2147483647 * Math.random()));
            l = e
        }
        f = l;
        l = f.vid;
        d = f.sid;
        e = f.hid;
        v = f.from_cookie;
        f = f.cid;
        v && !ph(a) || b.set("ga_vid", {value: l}).set("ga_sid", {value: d}).set("ga_hid", {value: e}).set("ga_fc", {value: v}).set("ga_cid", {value: f}).set("ga_wpids", {value: c.google_analytics_uacct})
    }, function (a, b) {
        var c = a.ma.X, d = a.la.B, e = a.Um;
        a = e.Vg;
        var f = e.Ne, g = e.Am, h = e.Sj;
        if (!_.H(oG) && !g) {
            (e = Qh(d.isSecureContext, d.navigator, d.document)) && b.set("td", {value: 1});
            if (a) switch (a.kind) {
                case 0:
                    b.set("eig", {value: a.signal});
                    break;
                case 1:
                    b.set("eigir", {value: a.reason, options: {Ia: !0}});
                    break;
                default:
                    gb(a)
            }
            void 0 !== f && b.set("egid", {value: f, options: {Ia: !0}});
            (null == h ? 0 : h.size) && !_.H(eF) && b.set("tan", {
                value: c.map(function (k) {
                    return h.get(k)
                })
            });
            _.H(bF) && e && (c = new kh, c.set(1, Dh(d.navigator)), b.set("tdf", {value: mh(c)}))
        }
    }, function (a, b) {
        var c = a.la.B, d = a.Km;
        a = d.Nm;
        d = d.Lm;
        Rh(c.isSecureContext, c.document) && (b.set("topics", {value: a instanceof Uint8Array ? ub(a, 3) : a}), !a || a instanceof Uint8Array || b.set("tps", {value: a}), d && b.set("htps", {value: d}))
    }, function (a, b) {
        var c = a.la, d = c.B, e = c.Z, f = a.ma.X;
        a = a.nm;
        c = a.lf;
        var g = a.Lk, h = a.Dl;
        if (!_.H(kE)) {
            a = b.set;
            d = qh(e, d);
            e = Zl(f[0].getAdUnitPath());
            var k = _.H(Wk);
            k = void 0 === k ? !1 : k;
            f = new IA;
            var l = null != g ? g : [];
            g = k ? 1024 : 300;
            if (e && c && l && "function" === typeof c.getUserIdsAsEidBySource) {
                if ("function" === typeof c.getUserIdsAsEids) try {
                    for (var m = _.u(c.getUserIdsAsEids()), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value;
                        "string" === typeof p.source && wk(52, p.source)
                    }
                } catch (w) {
                    var r;
                    wk(45, "", null == (r = w) ? void 0 : r.message)
                }
                m = _.u(l);
                for (n = m.next(); !n.done; n = m.next()) if (n = n.value, String(_.F(n, 1)) === e) for (n = _.u(_.zk(n, dA, 2)), p = n.next(); !p.done; p = n.next()) if (p = p.value, _.Q(p, Fl(p, eA, 3)) && (p = _.F(p, 1), !Ck(f, p))) {
                    r = null;
                    try {
                        var v = l = k = void 0;
                        r = null == (k = c.getUserIdsAsEidBySource(p)) ? void 0 : null == (l = k.uids) ? void 0 : null == (v = l[0]) ? void 0 : v.id
                    } catch (w) {
                        k = void 0, wk(45, p, null == (k = w) ? void 0 : k.message)
                    }
                    r && (r.length > g ? (k = {}, wk(12, p, null, (k.sl = String(r.length), k.fp = "1", k))) : (k = DA(p), l = Ji(k, 2, r), k = f, l = qi(l, 11, !0), Ik(k, 2, Ak, l), k = {}, wk(19, p, null, (k.fp = "1", k.hs = r ? "1" : "0", k))))
                }
            }
            Jk(f, d, e, h);
            _.zk(f, Ak, 2).length ? (c = {}, wk(50, "", null, (c.ns = String(_.zk(f, Ak, 2).length), c)), c = ub(f.g(), 3)) : c = null;
            a.call(b, "a3p", {value: c})
        }
    }, function (a, b) {
        var c = a.pb.te, d = a.ma.X;
        a = function () {
            return c ? d.map(function (e) {
                return c.get(e)
            }) : []
        }();
        b.set("cbidsp", {
            value: Fq(a, function (e) {
                return ub(e.g(), 3)
            }), options: _.x(Object, "assign").call(Object, {}, {Ta: "~"}, {dd: !0})
        })
    }, function (a, b) {
        var c = [];
        a = _.u(_.zk(nz(a.ma.P.ca.Wh(), Tt, 2), gs, 1));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            Li(e, 2, 2).length && (d = null != $i(e, 3) ? _.qz(e, 3) : _.tg(e, 1, 0) + 2, e = Li(e, 2, 2).join("|"), c.push(d + "=" + e))
        }
        b.set("pps", {value: c, options: {Ta: "~"}})
    }, function (a, b) {
        var c = a.Pl;
        a = c.cl;
        c = c.Ym;
        b.set("scar", {value: a});
        _.H(qE) && (null == a ? 0 : a.length) && null != c && b.set("wst", {value: "0" === a ? "WEBVIEW_SDK_PAW" === c ? (3).toString() : (5).toString() : "WEBVIEW_SDK_PAW" === c ? (2).toString() : (4).toString()})
    }, function (a, b) {
        a = a.la.B;
        a = !(!a.isSecureContext || !Ch("attribution-reporting", a.document));
        !_.H(kG) && a && b.set("nt", {value: 1})
    }, function (a, b) {
        if (a = a.Yl.Xl) a = Ny(zl(a), 3), b.set("psd", {value: a})
    }, function (a, b) {
        a = _.lg(a.la.B);
        var c = tr;
        0 < a && c >= a && b.set("dlt", {value: a}).set("idt", {value: c - a})
    }, function (a, b) {
        a = a.ma.P.ca;
        b.set("ppid", {value: _.Zi(a, 16) ? _.F(a, 16) : null, options: {Ia: !0}})
    }, function (a, b) {
        var c = b.set;
        (a = Bk(a.ma.P.ca, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + Ny('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {value: a})
    }, function (a, b) {
        a = a.ma;
        var c = a.P.ca;
        b.set("prev_scp", {value: Ds(a.X, a.P), options: {dd: !0, Ta: "|"}}).set("cust_params", {
            value: Fs(c),
            options: {Ta: "&"}
        })
    }, function (a, b) {
        var c = a.ma, d = c.P;
        a = a.la;
        var e = a.M, f = a.yb;
        b.set("adks", {
            value: c.X.map(function (g) {
                if (f) {
                    var h = d.T[g.getDomId()];
                    h = Tp(h);
                    if (g = e.g.get(g)) g.zd = h;
                    return h
                }
                h = d.ca;
                var k = d.T[g.getDomId()], l;
                if (!(l = jv(e, g))) {
                    h = Tp(k, _.Q(h, 6) || _.Q(k, 17) ? null : En(g));
                    if (g = e.g.get(g)) g.zd = h;
                    l = h
                }
                return l
            })
        })
    }, function (a, b) {
        var c = b.set;
        a = a.la.B;
        var d = RB(a);
        a:{
            var e = a.google_ad_width || a.google_ad_width;
            var f = a.google_ad_height || a.google_ad_height;
            if (jh(a)) e = !1; else {
                var g = a.document, h = g.documentElement;
                if (e && f) {
                    var k = 1, l = 1;
                    a.innerHeight ? (k = a.innerWidth, l = a.innerHeight) : h && h.clientHeight ? (k = h.clientWidth, l = h.clientHeight) : g.body && (k = g.body.clientWidth, l = g.body.clientHeight);
                    if (l > 2 * f || k > 2 * e) {
                        e = !1;
                        break a
                    }
                }
                e = !0
            }
        }
        f = d.location.href;
        d === d.top ? f = !0 : (g = !1, (h = d.document) && h.referrer && (f = h.referrer, d.parent === d.top && (g = !0)), (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (g = !1), f = g);
        d = e;
        e = f;
        f = a.top == a ? 0 : _.ol(a.top) ? 1 : 2;
        g = 4;
        d || 1 !== f ? d || 2 !== f ? d && 1 === f ? g = 7 : d && 2 === f && (g = 8) : g = 6 : g = 5;
        e && (g |= 16);
        d = String(g);
        if (a !== a.top) for (e = a; e && e !== e.top && _.ol(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent) ;
        c.call(b, "frm", {value: d || null})
    }, function (a, b) {
        var c = b.set;
        a = nz(a.ma.P.ca, Vt, 36);
        a = ne(a, 1, _.Dc, 2);
        c.call(b, "ppt", {value: a, options: {Ta: "~"}})
    }, function (a, b) {
        a = a.la.B;
        try {
            var c, d,
                e = null == (c = a.external) ? void 0 : null == (d = c.getHostEnvironmentValue) ? void 0 : d.call(c, "os-mode");
            if (e) {
                var f = Number(JSON.parse(e)["os-mode"]);
                0 > f || b.set("wsm", {value: f + 1})
            }
        } catch (g) {
        }
    }, function (a, b) {
        var c = a.ma, d = c.networkCode, e = c.P.T;
        a = a.kk.jd;
        var f = [], g = !1;
        c = _.u(c.X);
        for (var h = c.next(); !h.done; h = c.next()) {
            var k = void 0;
            (null == (k = e[h.value.getDomId()]) ? 0 : _.Q(k, 30)) ? (f.push("1"), g = !0) : f.push("")
        }
        b.set("is_cau", {value: g ? f : null});
        _.H(cE) && b.set("no_cau_info", {value: a.has(d) ? "1" : null})
    }, function (a, b) {
        var c = a.ma, d = c.P.T;
        a = a.la.B;
        var e = [], f = !1;
        c = _.u(c.X);
        for (var g = c.next(); !g.done; g = c.next()) g = Sr(d[g.value.getDomId()]), (_.I = [8, 9], _.x(_.I, "includes")).call(_.I, g) ? (f = 9 === g ? "right" : "left", e.push(_.ck(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
        f && b.set("plas", {value: e, options: {Ta: "|"}})
    }, function (a, b) {
        var c = a.la, d = c.B;
        c = c.Z;
        var e = a.ma, f = e.P.ca;
        e = e.networkCode;
        var g = a.Jk.Kk;
        if (_.H(gE)) {
            a = !g || !_.H(iE) && !se(g, 1, qd).get(e) || _.H(iE) && !e.split(",").every(function (k) {
                return se(g, 1, qd).get(k)
            });
            var h;
            f = !(null == (h = Dv(f)) || !_.Q(h, 9));
            d = new rH(d);
            h = {Pi: a, Oi: f};
            (a = tH(d, c, h)) ? b.set("eo_id_str", {value: a}) : _.H(hE) && sH(d, c, h) && b.set("eoidce", {value: "1"})
        }
    }, function (a, b) {
        a = a.ma;
        var c = a.X, d = a.P.T;
        _.H(bw) && b.set("eov", {
            value: Dq(c, function (e) {
                var f, g;
                return !!(null == (f = d[e.getDomId()]) ? 0 : null == (g = _.Um(f, JM, 31)) ? 0 : _.Q(g, 1))
            })
        })
    }]);
    var zQ = function (a, b, c) {
        Z.call(this, a, 798);
        this.output = W(this);
        this.j = Y(this, b);
        this.o = X(this, c)
    };
    _.T(zQ, Z);
    zQ.prototype.g = function () {
        var a = this, b = new _.A.Map;
        if (this.j.value) {
            var c = this.j.value, d = c.la.yb, e = c.pb.te;
            c = _.u(c.ma.X);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var g = void 0, h = null == (g = e) ? void 0 : g.get(f);
                b.set(f, d ? AQ(this, f, h) : function () {
                    return a.o.value
                })
            }
        }
        this.output.G(b)
    };
    var AQ = function (a, b, c) {
        return Yi(function () {
            var d = _.x(Object, "assign").call(Object, {}, a.j.value);
            d.ma.qg = !0;
            d.ma.X = [b];
            c && (d.pb.te = new _.A.Map, d.pb.te.set(b, c));
            return gr(Cv(d)).url
        })
    };
    var BQ = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.o = b;
        this.yb = c;
        this.P = d;
        this.R = e;
        this.B = f;
        this.Z = g;
        this.j = W(this)
    };
    _.T(BQ, Z);
    BQ.prototype.g = function () {
        var a = this, b = this.o;
        !this.yb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function (c) {
            if (c.L) return !1;
            var d = a.P.T[c.getDomId()], e;
            if (e = !(Zq(Sr(d)) && (_.I = ag(HE), _.x(_.I, "includes")).call(_.I, String(Sr(d))))) {
                e = a.R;
                var f = _.ej(a.B);
                (f ? 1.05 < f || .95 > f : 1) && 4 === Sr(d) ? (O(e, yL("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1;
                e = !e
            }
            if (e) {
                e = a.context;
                f = a.R;
                var g = a.B, h = a.Z;
                d = Sr(d);
                5 !== d ? c = !1 : (e.V.log(578856259, _.Mj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Fb: e.Pa,
                    U: 1
                }), (g = Uq(g, !LN(c), h)) ? (Oq(f, g, d, c.getAdUnitPath()), e.V.log(578856259, Lj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Fb: e.Pa,
                    El: g
                }), e.V.log(578856259, _.Mj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Fb: e.Pa,
                    U: 2
                })) : e.V.log(578856259, _.Mj, {pvsid: e.pvsid, Ea: e.Ea, fb: 17, Fb: e.Pa, U: 3}), c = !!g);
                e = !c
            }
            return e
        });
        30 < b.length && (O(this.R, xL("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.j.G(b)
    };
    var CQ = function (a, b, c) {
        Z.call(this, a, 919);
        this.j = b;
        this.Z = c;
        this.output = W(this)
    };
    _.T(CQ, Z);
    CQ.prototype.g = function () {
        var a, b = !(null == (a = this.j) ? 0 : _.Q(a, 9)) && !!ph(this.Z);
        this.output.G(b)
    };
    var DQ = function (a, b, c, d, e, f) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = FI(this);
        this.o = X(this, c);
        e && (this.j = X(this, e));
        HI(this, d)
    };
    _.T(DQ, Z);
    var EQ = function (a) {
        return a.j ? a.C.split(",").some(function (b) {
            var c;
            return null == (c = a.j) ? void 0 : c.value.has(b)
        }) : !1
    };
    DQ.prototype.g = function () {
        var a = this.context, b = this.requestId, c = this.o.value.length, d = EQ(this);
        if (a.Rc) {
            var e = a.Qa, f = e.Qc;
            a = Ol(a);
            var g = new rD;
            b = _.Ij(g, 2, b);
            c = _.Sl(b, 1, c);
            d = _.Rl(c, 3, d);
            d = _.Tl(a, 7, Ul, d);
            f.call(e, d)
        }
        this.output.notify()
    };
    var Hv = new _.A.Map;
    var FQ = function (a, b, c, d) {
        Z.call(this, a, 867);
        this.za = b;
        this.P = c;
        this.output = FI(this);
        this.j = X(this, d)
    };
    _.T(FQ, Z);
    FQ.prototype.g = function () {
        for (var a = _.u(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.u(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = Wm(this.P.T[b.getDomId()], 20);
            wt(b, yK, 808, {qk: c, lm: d});
            wt(this.za, "slotRequested", 705, new mO(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var GQ = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, z, y, C, G, D, M, S, P, aa, ka, ma, ja, Ga, ta, Ba, Ka, Wa, eb, Ta, bc) {
        Z.call(this, a, 785, _.Zf(VE));
        this.yb = b;
        this.M = c;
        this.Da = d;
        this.P = e;
        this.ec = f;
        this.networkCode = g;
        this.vd = h;
        this.ud = k;
        this.hg = l;
        this.timer = m;
        this.Z = n;
        this.isSecureContext = p;
        this.Mb = r;
        this.B = v;
        this.Ae = w;
        this.j = W(this);
        this.o = W(this);
        this.O = W(this);
        HI(this, P);
        this.La = GI(this, z);
        this.Ac = GI(this, y);
        this.W = GI(this, C);
        this.H = X(this, G);
        M && (this.C = _.H(YE) ? new yI(M.rd) : GI(this, M.rd), M.me && (this.Ib = Y(this, M.me)));
        S && (this.J = _.H(YE) ? new yI(S.Uc) : GI(this, S.Uc));
        HI(this, P);
        aa && (this.lb = X(this, aa));
        ka && (this.fa = new yI(ka));
        ma && (this.eb = Y(this, ma));
        ja && (this.qa = X(this, ja));
        Ga && HI(this, Ga);
        ta && (this.wa = X(this, ta));
        D && (this.ha = Y(this, D));
        Ba && (this.nb = Y(this, Ba.Rg));
        Ka && (this.zc = X(this, Ka));
        Wa && (this.ta = Y(this, Wa));
        eb && (this.ja = Y(this, eb));
        Ta && (this.ob = X(this, Ta));
        bc && (this.wc = GI(this, bc))
    };
    _.T(GQ, Z);
    GQ.prototype.g = function () {
        if (this.H.value.length) {
            var a = null;
            if (this.C) {
                var b = this.C.value;
                a = b ? b : this.J && !this.J.Oc() ? 9 : this.C.Oc() ? null : 1
            }
            this.W.value && (this.M.Kb = this.W.value);
            var c, d, e, f, g, h, k, l, m, n, p, r, v, w, z, y;
            b = {
                la: {
                    B: this.B,
                    context: this.context,
                    M: this.M,
                    Da: this.Da,
                    Z: this.Z,
                    yb: this.yb,
                    hg: this.hg,
                    isSecureContext: this.isSecureContext,
                    Mb: this.Mb
                },
                ma: {networkCode: this.networkCode, X: this.H.value, P: this.P, ec: this.ec, qg: !1},
                Xm: {vd: this.vd, ud: this.ud},
                Pl: {
                    cl: null != (w = this.La.value) ? w : "0",
                    Ym: null != (z = this.Ac.value) ? z : "WEBVIEW_SDK_PAW"
                },
                pb: {te: null == (c = this.ha) ? void 0 : c.value},
                Km: {Nm: a, Lm: null == (d = this.Ib) ? void 0 : d.value},
                nm: {
                    Dl: null != (y = null == (e = this.lb) ? void 0 : e.value) ? y : void 0,
                    lf: null == (f = this.fa) ? void 0 : f.value,
                    Lk: null == (g = this.qa) ? void 0 : g.value
                },
                Sg: {fl: null == (h = this.eb) ? void 0 : h.value, Yk: null == (k = this.wa) ? void 0 : k.value},
                Yl: {Xl: null == (l = this.nb) ? void 0 : l.value},
                Um: {
                    Vg: null == (m = this.zc) ? void 0 : m.value,
                    Ne: null == (n = this.ta) ? void 0 : n.value,
                    Am: null == (p = this.ob) ? void 0 : p.value,
                    Sj: null == (r = this.wc) ? void 0 : r.value
                },
                Jk: {Kk: null == (v = this.ja) ? void 0 : v.value},
                kk: {jd: this.Ae.jd}
            };
            this.o.G(b);
            c = gr(Cv(b));
            d = c.url;
            XC(this.timer, (9).toString(), 9, c.wh);
            this.j.G(d);
            this.O.G(yv(b) ? new Kx(Ix, "https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new Kx(Ix, "https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.j.G(""), this.o.ba()
    };
    var HQ = function (a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.j = b;
        this.aa = c;
        this.P = d;
        this.B = e;
        this.output = FI(this);
        f && HI(this, f)
    };
    _.T(HQ, Z);
    HQ.prototype.g = function () {
        for (var a = _.u(this.j), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = En(b, this.aa);
            if (!rn(b, this.aa) && c) {
                a:{
                    var d = c;
                    var e = this.P.T[b.getDomId()], f = 0, g = 0;
                    e = _.u(an(e));
                    for (var h = e.next(); !h.done; h = e.next()) if (h = h.value, Array.isArray(h)) {
                        var k = _.u(h);
                        h = k.next().value;
                        k = k.next().value;
                        if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), rq(Fn(d, this.B)) || !d.parentElement || rq(Fn(d.parentElement, this.B))))) {
                            d = [f, 0];
                            break a
                        }
                    }
                    d = f || g ? [f, g] : null
                }
                g = this.P;
                f = g.ca;
                g = g.T[b.getDomId()];
                qq(c, Ln(b), Kq(f, g), d)
            }
        }
        this.output.notify()
    };
    var IQ = function (a, b, c, d, e, f, g, h) {
        this.L = a;
        this.I = b;
        this.j = c;
        this.X = d;
        this.Z = e;
        this.o = f;
        this.F = g;
        this.K = h;
        this.l = "";
        this.A = -1;
        this.state = 1;
        this.g = ""
    }, KQ = function (a, b) {
        if (b) if (1 !== a.state && 2 !== a.state) JQ(a, new FH("state err: (" + ([a.state, a.g.length].join() + ")"))); else {
            a.g && (b = a.g + b);
            var c = 0;
            do {
                var d = b.indexOf("\n", c);
                var e = -1 !== d;
                if (!e) break;
                var f = a;
                c = b.substr(c, d - c);
                if (1 === f.state) f.l = c, ++f.A, f.state = 2; else {
                    var g = void 0;
                    try {
                        f.L(f.A, f.l, {
                            kind: 0,
                            hb: NB(c)
                        }, f.X, f.Z, f.o, f.F, null != (g = f.K) ? g : void 0), f.l = ""
                    } catch (h) {
                    }
                    f.state = 1
                }
                c = d + 1
            } while (e && c < b.length);
            a.g = b.substr(c)
        }
    }, JQ = function (a, b) {
        a.state = 4;
        try {
            a.I(b)
        } catch (c) {
        }
    }, LQ = function (a) {
        1 !== a.state || a.g ? JQ(a, new FH("state err (" + ([a.state, a.g.length].join() + ")"))) : (a.state = 3, a.j(a.A, a.X, a.Z))
    };
    var MQ = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 788);
        this.ja = b;
        this.ha = c;
        this.fa = d;
        this.Z = e;
        this.M = f;
        this.P = g;
        this.H = FI(this);
        this.C = W(this);
        this.o = W(this);
        this.W = 0;
        this.O = !1;
        this.j = null != p ? p : new XMLHttpRequest;
        this.J = X(this, h);
        k && (this.ta = Y(this, k));
        this.wa = X(this, l);
        HI(this, m);
        this.qa = X(this, n)
    };
    _.T(MQ, Z);
    MQ.prototype.g = function () {
        var a = this, b = this.wa.value;
        if (b) {
            var c,
                d = new IQ(this.ja, this.ha, this.fa, this.J.value, this.Z, null == (c = this.ta) ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.qa.value;
            this.j.onreadystatechange = function () {
                NQ(a, d, !1)
            };
            this.j.onload = function () {
                NQ(a, d, !0);
                a.C.G(a.j.status);
                if (300 <= a.j.status) {
                    var e;
                    a.o.G(null != (e = a.j.responseText) ? e : "")
                } else a.o.G("")
            };
            this.j.onerror = function () {
                JQ(d, new GH("XHR error"));
                a.J.value.forEach(function (e) {
                    zt(e, a.M, a.P, "")
                });
                a.C.G(0);
                a.o.G("")
            };
            this.j.send()
        }
        this.H.notify()
    };
    var NQ = function (a, b, c) {
        try {
            if (3 === a.j.readyState || 4 === a.j.readyState) if (300 <= a.j.status) a.O || (JQ(b, new GH("xhr_err-" + a.j.status)), a.O = !0); else {
                var d = a.j.responseText.substr(a.W);
                d && KQ(b, d);
                a.W = a.j.responseText.length;
                c && 4 === a.j.readyState && LQ(b)
            }
        } catch (e) {
            JQ(b, e)
        }
    };
    var OQ = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Z.call(this, a, 1078);
        this.W = b;
        this.O = c;
        this.J = d;
        this.Z = e;
        this.M = f;
        this.P = g;
        this.C = FI(this);
        this.o = W(this);
        this.j = W(this);
        this.H = X(this, h);
        k && (this.ha = Y(this, k));
        l && (this.ja = X(this, l));
        this.qa = X(this, m);
        HI(this, n);
        this.fa = X(this, p);
        if (null == r ? 0 : r.ke) this.wa = Y(this, r.ke);
        v && (this.ta = X(this, v));
        w && (this.La = Y(this, w))
    };
    _.T(OQ, Z);
    OQ.prototype.g = function () {
        var a = this, b = this.qa.value;
        if (b) {
            var c, d, e,
                f = new IQ(this.W, this.O, this.J, this.H.value, this.Z, null == (c = this.ha) ? void 0 : c.value, null == (d = this.ja) ? void 0 : d.value, null == (e = this.La) ? void 0 : e.value);
            c = this.fa.value ? "include" : "omit";
            var g;
            d = null == (g = this.wa) ? void 0 : g.value;
            var h;
            g = null == (h = this.ta) ? void 0 : h.value;
            h = _.x(Object, "assign").call(Object, {}, {credentials: c}, d ? {browsingTopics: d} : {}, g ? {adAuctionHeaders: g} : {});
            fetch(b, h).then(function (k) {
                PQ(a, k, f)
            }).catch(function (k) {
                QQ(a, k, f);
                a.H.value.forEach(function (l) {
                    zt(l, a.M, a.P, "")
                })
            })
        }
        this.C.notify()
    };
    var PQ = function (a, b, c) {
        a.o.G(b.status);
        if (300 <= b.status) a.j.Ka(b.text()), JQ(c, new GH("fetch_status-" + b.status)); else {
            a.j.G("");
            var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
            e ? e.read().then(function (f) {
                RQ(a, f, e, c)
            }).catch(function (f) {
                QQ(a, f, c)
            }) : JQ(c, new GH("failed_reader"))
        }
    }, RQ = function (a, b, c, d) {
        var e = b.value;
        b.done ? LQ(d) : (KQ(d, e), c.read().then(function (f) {
            RQ(a, f, c, d)
        }).catch(function (f) {
            QQ(a, f, d)
        }))
    }, QQ = function (a, b, c) {
        JQ(c, new GH("fetch error: " + (b instanceof Error ? b.message : void 0)));
        a.o.G(0);
        a.j.G("")
    };
    var SQ = function (a, b, c, d, e) {
        Z.call(this, a, 918);
        this.P = b;
        this.timer = c;
        this.output = FI(this);
        this.j = X(this, e);
        HI(this, d)
    };
    _.T(SQ, Z);
    SQ.prototype.g = function () {
        var a = this.j.value;
        a.length && ut(this.timer, "3", vt(this.P.T[a[0].getDomId()], 20));
        this.output.notify()
    };
    var TQ = function (a, b, c, d, e) {
        Z.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Da = d;
        this.Z = e;
        this.output = W(this)
    };
    _.T(TQ, Z);
    TQ.prototype.g = function () {
        var a = JSON.parse(this.j), b = Xp(a, Lz);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.j);
        a = Ne(VA, a);
        b = ne(a, 27, Jc, 2);
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.Xf(zh).g(c);
        ro(4, this.context, this.Da, this.Z);
        wt(this.slotId, xK, 800, a);
        this.output.G(a)
    };
    var UQ = function (a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.M = c;
        this.j = X(this, d)
    };
    _.T(UQ, Z);
    UQ.prototype.g = function () {
        var a = this;
        mo(this.j.value, 11) && (_.JK(this.M, this.slotId), GK(this.M, this.slotId, function () {
            _.KK(a.M, a.slotId)
        }))
    };
    var VQ = function (a, b, c, d) {
        Mk.call(this);
        this.context = a;
        this.slotId = b;
        b = d.M;
        var e = d.Z, f = d.ab, g = d.Da;
        a = d.Ra;
        d = d.R;
        c = new TQ(this.context, c, this.slotId, g, e);
        J(this, c);
        e = new XN(this.context, e, g, c.output);
        J(this, e);
        f = new ZN(this.context, this.slotId, f, c.output);
        J(this, f);
        b = new UQ(this.context, this.slotId, b, c.output);
        J(this, b);
        a = MI(this, 1229, cw, {Lg: c.output}, {Ra: a}, {output: void 0});
        MI(this, 1220, fw, {Lg: c.output}, {R: d, context: this.context}, {});
        this.g = {Cl: a.output}
    };
    _.T(VQ, Mk);
    var WQ = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, z, y, C, G, D, M, S, P) {
        Z.call(this, a, 973);
        this.qa = b;
        this.R = c;
        this.J = d;
        this.W = e;
        this.P = f;
        this.M = g;
        this.Da = h;
        this.ha = k;
        this.O = l;
        this.H = m;
        this.ee = n;
        this.ja = p;
        this.networkCode = r;
        this.isSecureContext = v;
        this.Mb = w;
        this.ab = z;
        this.B = y;
        this.aa = C;
        this.j = S;
        this.ta = P;
        this.o = [];
        this.C = Y(this, G);
        this.fa = X(this, D);
        this.wa = X(this, M);
        this.j.Jb && HI(this, this.j.Jb.lk)
    };
    _.T(WQ, Z);
    WQ.prototype.g = function () {
        var a = this, b = new Mk;
        _.R(this, b);
        var c = this.fa.value, d = Dv(this.P.ca);
        this.C.value && this.ta.G(this.C.value);
        var e = ts(this.context, this.aa);
        e && _.R(b, e.Za);
        var f = zr(this.context, _.Um(this.P.ca, Ku, 5), this.M, this.J, null == e ? void 0 : e.Vl.Yd);
        e = f.ug;
        (f = f.xl) && _.R(b, f);
        f = new HQ(this.context, this.J, this.aa, this.P, this.B, e);
        J(b, f);
        var g = !!_.Q(this.P.ca, 6);
        e = new BQ(this.context, this.J, g, this.P, this.R, this.B, c);
        J(b, e);
        var h,
            k = new PM(this.context, d, c, (null == (h = _.Um(this.P.ca, Vt, 36)) ? void 0 : ne(h, 1, _.Dc, 2)) || []);
        J(b, k);
        var l = this.j;
        h = l.Ql;
        var m = l.Zl, n = l.Pm;
        l = l.Ae;
        var p, r = null != (p = this.j.Jb) ? p : {}, v = r.se, w = r.rf, z = r.Ub, y = r.Id, C = r.Oe, G = r.Xk;
        p = r.Df;
        var D = r.Th, M = r.rk;
        r = r.Hd;
        if (_.H(NE)) {
            var S = new cP(this.context, M);
            var P = new dP(this.context, M);
            J(b, S);
            J(b, P);
            var aa = S.j;
            S = P.j;
            P = P.o
        }
        if (D = Dt(this.context, n, this.P.T, c, this.C.value, e.j, k.output, D, S)) {
            var ka = D.Rm;
            D = D.Qm;
            var ma = ka.Ng;
            var ja = ka.og;
            ka = ka.Le;
            _.R(b, D)
        }
        if (P = Vs(this.context, n, this.B.navigator, k.output, P)) {
            var Ga = P.qj;
            P = P.Sm;
            var ta = Ga.Ti;
            Ga = Ga.hi;
            P && _.R(b, P)
        }
        _.H(hF) && (Ga = W(this), Ga.G(n.ih));
        var Ba = new tP(this.context, this.B);
        J(b, Ba);
        D = (null != v ? v : {}).bc;
        var Ka;
        P = null == (Ka = this.j.Jb) ? void 0 : Ka.zf;
        Ka = new ZO(this.context, h.Rl);
        J(b, Ka);
        if (v = Iq(this.context, this.R, this.P.T, this.networkCode, e.j, v, z)) {
            var Wa = v.Vj;
            _.R(this, v.Za)
        }
        if (ja = vs(this.context, m, ja, ka, this.P.T, e.j, M)) {
            var eb = ja.pf;
            _.R(this, ja.Za)
        }
        if (aa = Hs(this.context, this.C.value, P, k.output, aa)) {
            var Ta = aa.Mm;
            _.R(this, aa.Za);
            this.o.push(Ta.rd.promise)
        }
        if (n.Oj) {
            _.H(ju);
            var bc = new ZP(this.context, this.B.navigator, e.j);
            J(b, bc);
            bc = bc.output
        }
        aa = window.isSecureContext && _.H(hG) ? "wbn" : "ldjh";
        var Fc = ++this.M.I;
        ja = "wbn" === aa ? Wr().toLowerCase() : void 0;
        ka = this.ee;
        var Zb, mc;
        Wa = new GQ(this.context, g, this.M, this.Da, this.P, ka.ec, this.networkCode, ka.vd, ka.ud, this.wa.value, _.Xf(bm), c, this.isSecureContext, this.Mb, this.B, l, Ka.output, h.mc, Ba.output, e.j, null == (Zb = Wa) ? void 0 : Zb.fh, Ta, P, f.output, null == w ? void 0 : w.Fg, D, z, y, C, G, eb, ta, null == (mc = this.j.Jb) ? void 0 : mc.Th, r, S, bc);
        J(b, Wa);
        eb = new SQ(this.context, this.P, _.Xf(bm), Wa.j, e.j);
        J(b, eb);
        this.context.vm && MI(b, 1231, Jv, {Bo: Wa.j, X: e.j}, {va: this.context.Qa}, {});
        d = new CQ(this.context, d, c);
        J(b, d);
        Zb = $l(this.context, 646, function (cc, dc, Oc, Pc, uf, Ae, Kd, Be) {
            Ov(function () {
                return void XQ(a, uf, cc, dc, Oc, Pc, Ae, Kd, Be)
            }, cc, a.B)
        });
        mc = $l(this.context, 647, function (cc, dc, Oc) {
            Ov(function () {
                return void YQ(a, Fc, Oc, dc, cc)
            }, -1, a.B)
        });
        "ldjh" === aa ? (S = ZQ(this, 289, "strm_err"), Mv() ? (Ta = new OQ(this.context, Zb, S, mc, c, this.M, this.P, e.j, ma, ta, Wa.j, eb.output, d.output, Ta, Ga, bc), J(b, Ta), ma = Ta.C, ta = Ta.o, Ta = Ta.j) : (Ta = new MQ(this.context, Zb, S, mc, c, this.M, this.P, e.j, ma, Wa.j, eb.output, d.output), J(b, Ta), ma = Ta.H, ta = Ta.C, Ta = Ta.o), ta = MI(b, 1221, Fv, {
            status: ta,
            responseText: Ta
        }, {R: this.R}, {}).finished, this.o.push(ta.promise)) : (ta = new cQ(this.context, Zb, ZQ(this, 1042, "Unknown web bundle error."), mc, aa, ja, c, this.aa, e.j, ma, Wa.j, Wa.O, eb.output, d.output), Hu(b, ta), ma = new rs, zI(ma, NI(ta).then(function () {
        })));
        p = new DQ(this.context, Fc, e.j, ma, p, this.networkCode);
        J(b, p);
        ta = new zQ(this.context, Wa.o, Wa.j);
        J(b, ta);
        ta = new FQ(this.context, this.H.za, this.P, ta.output);
        J(b, ta);
        ta = new kP(this.context, this.ha, this.B, ta.output);
        J(b, ta);
        ta = new GO(this.context, this.P, this.O, e.j, ta.output);
        J(b, ta);
        e = new PN(this.context, this.M, this.P, this.aa, e.j, ta.output);
        J(b, e);
        ta = new sP(this.context, vk(this.B), this.B, c, ma);
        J(b, ta);
        1 === Fc && (c = new HN(this.context, this.B, c, P, ma), J(b, c), this.o.push(c.output.promise));
        this.o.push(p.output.promise, e.output.promise, ta.output.promise);
        b.run()
    };
    var XQ = function (a, b, c, d, e, f, g, h, k) {
        var l, m, n, p;
        return _.Qf(function (r) {
            l = f[c];
            if (!l) return dm(a.context, 646, Error("missing slot")), r.return();
            0 === c && (m = vt(a.P.T[l.getDomId()], 20), ut(_.Xf(bm), "4", m));
            return r.yield($Q(a, l, d, e, b, null == (n = g) ? void 0 : n[l.getId()], h, null == (p = k) ? void 0 : p.get(l)), 0)
        })
    }, YQ = function (a, b, c, d, e) {
        var f, g, h;
        return _.Qf(function (k) {
            if (1 == k.g) {
                var l = a.context, m = e + 1, n = d.length;
                if (l.Rc) {
                    var p = l.Qa, r = p.Qc;
                    l = Ol(l);
                    var v = new sD;
                    v = _.Ij(v, 3, b);
                    m = _.Sl(v, 1, m);
                    n = _.Sl(m, 2, n);
                    n = _.Tl(l, 8, Ul, n);
                    r.call(p, n)
                }
                f = e + 1
            }
            if (3 != k.g) {
                if (!(f < d.length)) return k.yield(aR(a), 0);
                if (!d[f]) {
                    k.g = 3;
                    return
                }
                p = new VA;
                p = qi(p, 8, !0);
                g = zl(p);
                h = '{"empty":' + g + "}";
                return k.yield(XQ(a, c, f, h, {kind: 0, hb: ""}, d), 3)
            }
            ++f;
            k.g = 2
        })
    }, $Q = function (a, b, c, d, e, f, g, h) {
        var k, l, m, n, p, r, v, w, z, y, C, G, D, M, S, P, aa, ka;
        return _.Qf(function (ma) {
            if (1 == ma.g) return k = {
                Z: e,
                ab: a.ab,
                M: a.M,
                Da: a.Da,
                Ra: d,
                R: a.R
            }, l = new VQ(a.context, b, c, k), ma.yield(NI(l), 2);
            m = ma.A;
            p = n = m.Cl;
            r = p.isEmpty;
            v = p.Oa;
            w = p.ga;
            z = p.Zm;
            y = p.Hb;
            C = p.dg;
            G = p.tk;
            D = p.Ra;
            M = p.height;
            S = p.width;
            var ja = a.context, Ga = null == (P = a.j.Jb) ? void 0 : P.se;
            if (Ga && !(.01 < Math.random())) {
                var ta = new Mk;
                J(ta, new CN(ja, z, y, v, Ga.bc));
                ta.run()
            }
            if (_.H(gE)) {
                Ga = a.context;
                ta = a.Da;
                var Ba = C, Ka = a.B;
                ja = new Mk;
                Ga = new QN(Ga, ta, Ba, Ka);
                J(ja, Ga);
                ja.run()
            }
            if (b.L) return ma.return();
            aa = !!w || _.H(ZF) && !!f;
            (ka = ir("google_norender")) || r && !aa ? zt(b, a.M, a.P, v) : _.H(bw) && "vast" === G ? (eh({
                kind: Zg(),
                hb: hh
            }), wt(b, yt, 825, {
                isEmpty: !1,
                vast: D.hb,
                size: void 0 === S || void 0 === M ? void 0 : new _.ln(S, M)
            })) : wQ(a.ja, a.qa, a.R, b, r || ka, aa, a.M, a.P, a.ab, n, e, f, g, a.H.za, a.O, a.j, h);
            l.xa();
            ma.g = 0
        })
    }, ZQ = function (a, b, c) {
        return $l(a.context, b, function (d) {
            d = d instanceof Error ? d : Error();
            d.message = d.message || c;
            dm(a.context, b, d);
            aR(a)
        })
    }, aR = function (a) {
        return _.Qf(function (b) {
            if (1 == b.g) {
                var c = a.M, d = a.W, e = c.A.get(d) - 1;
                0 === e ? c.A.delete(d) : c.A.set(d, e);
                return e ? b.return() : b.yield(_.A.Promise.all(a.o), 2)
            }
            wt(a.H.Zh, BK, 965, a.W);
            b.g = 0
        })
    };
    var bR = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, z, y, C, G, D, M, S) {
        Z.call(this, a, 885);
        this.fa = b;
        this.R = c;
        this.P = d;
        this.M = e;
        this.Da = f;
        this.ee = g;
        this.O = h;
        this.H = k;
        this.j = l;
        this.o = m;
        this.W = n;
        this.isSecureContext = p;
        this.vb = r;
        this.J = v;
        this.Mb = w;
        this.ab = z;
        this.B = y;
        this.aa = C;
        this.C = M;
        this.ha = S;
        this.ja = X(this, G);
        HI(this, D)
    };
    _.T(bR, Z);
    bR.prototype.g = function () {
        var a = this.ja.value;
        if (a.length) {
            var b = this.M, c = this.j, d = a.length;
            b.A.has(c);
            b.A.set(c, d);
            a = _.u(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.networkCode;
                d = c.X;
                c = new Mk;
                _.R(this, c);
                var f = sr(this.context, this.J, null == (e = this.C.Jb) ? void 0 : e.Hl);
                e = f.cd;
                var g = f.Uh;
                _.R(c, f.Za);
                e = wp(this.context, this.R, this.M, this.B, e, g, 3, Dv(this.P.ca));
                f = e.qb;
                _.R(c, e.Za);
                e = new eP(this.context, this.B, f);
                J(c, e);
                e = new WN(this.context, this.B, f);
                J(c, e);
                e = new Eu(this.context, this.B, f);
                J(c, e);
                g = new xQ(this.context, this.Da, this.vb, f);
                J(c, g);
                b = new WQ(this.context, this.fa, this.R, d, this.j, this.P, this.M, this.Da, this.O, this.H, this.o, this.ee, this.W, b, this.isSecureContext, this.Mb, this.ab, this.B, this.aa, e.output, f, g.o, this.C, this.ha);
                J(c, b);
                c.run()
            }
        } else wt(this.o.Zh, BK, 965, this.j)
    };
    var cR = new _.A.Map, dR = function (a, b, c, d) {
        d = void 0 === d ? cR : d;
        Z.call(this, a, 834);
        this.R = b;
        this.X = c;
        this.j = d;
        this.o = W(this);
        this.o.Ka(_.A.Promise.all(this.X.map(this.C, this)).then(function (e) {
            return e.filter(function (f) {
                return null != f && !f.L
            })
        }))
    };
    _.T(dR, Z);
    dR.prototype.g = function () {
    };
    dR.prototype.C = function (a) {
        var b = this, c, d;
        return _.Qf(function (e) {
            if (1 == e.g) {
                if (a.L) return e.return();
                b.j.has(a) || (b.j.set(a, _.H(QE) ? iw(a) : hw(a)), _.Vp(a, function () {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.A;
            if (b.L) return e.return();
            if (d) return e.return(a);
            O(b.R, GL(a.getAdUnitPath()));
            return e.return()
        })
    };
    var eR = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, z, y) {
        _.V.call(this);
        var C = this;
        this.context = a;
        this.C = b;
        this.R = c;
        this.M = d;
        this.Da = e;
        this.za = f;
        this.K = g;
        this.j = h;
        this.o = k;
        this.isSecureContext = l;
        this.vb = m;
        this.I = n;
        this.Mb = p;
        this.ab = r;
        this.aa = v;
        this.B = w;
        this.F = z;
        this.H = y;
        this.g = new _.A.Map;
        this.l = new tK(a);
        _.R(this, this.l);
        this.l.listen(BK, function (G) {
            G = G.detail;
            var D = C.g.get(G);
            D && (C.g.delete(G), D.xa())
        })
    };
    _.T(eR, _.V);
    var fR = function (a, b, c, d) {
        var e = ++a.M.F;
        a.g.has(e);
        var f = new Mk;
        a.g.set(e, f);
        b = new dR(a.context, a.R, b);
        J(f, b);
        var g = MI(f, 845, mw, {X: b.o}, {T: d.T}, {ij: void 0, tj: void 0});
        b = g.tj;
        g = MI(f, 847, kw, {X: g.ij}, {M: a.M, yb: !!_.Q(d.ca, 6), rl: ir("google_nofetch")}, {de: void 0}).de;
        b = MI(f, 864, fr, {X: b}, {M: a.M, P: d, aa: document}, {}).finished;
        a = new bR(a.context, a.C, a.R, d, a.M, a.Da, c, a.K, a.j, e, {
            Zh: a.l,
            za: a.za
        }, a.o, a.isSecureContext, a.vb, a.I, a.Mb, a.ab, a.B, a.aa, g, b, a.F, a.H);
        J(f, a);
        f.run()
    };
    var gR = function (a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        eQ.call(this, a, c, h);
        this.context = a;
        this.M = d;
        this.j = new _.A.Set;
        this.I = {};
        this.C = new vQ(a, d);
        this.H = new eR(a, b, c, d, new _.OH(window), this.l, m, e, this.C, f, g, k, l, n, document, window, p, r);
        _.R(this, this.H)
    };
    _.T(gR, eQ);
    gR.prototype.getName = function () {
        return "publisher_ads"
    };
    gR.prototype.display = function (a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d) if (_.Ma(d) && 1 == d.nodeType) {
            var g = d;
            f = g.id
        } else f = d;
        Qt(this);
        var h = Io(c, this.context, this.R, a, b, f), k = h.slotId;
        h = h.Fa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            Jt(this, null != (l = g) ? l : k.getDomId(), c)
        } else O(this.R, tm("PubAdsService.display", [a, b, d]))
    };
    var Jt = function (a, b, c) {
        var d = hR(b, c);
        c = d.slotId;
        var e = d.Ek;
        d = d.Fk;
        if (c) {
            if (b = Nn(), (d = nM(b, c.getDomId())) && !_.Q(d, 19)) if (e && b.l.set(c, e), En(c) || cn(Sr(d))) {
                if (qi(d, 19, !0), e = on(b.g, b.A), a.enabled) {
                    Qt(a);
                    a.enabled && IK(a.M, c);
                    a.R.info(hL());
                    b = e.ca;
                    d = e.T;
                    var f = _.Q(b, 6);
                    if (f || !a.M.Dc(c)) f && (f = En(c)) && wt(c, wK, 778, f), _.Q(b, 4) && (d = d[c.getDomId()], f = a.M, br(d, b) && !f.Dc(c) && cr(c, document, d, b)), rM(a, e, c)
                }
            } else O(a.R, YK(String(Bk(d, 1)), String(Bk(d, 2))), c)
        } else d ? a.R.error(ZK(d)) : a.R.error(tm("googletag.display", [String(b)]))
    };
    gR.prototype.slotAdded = function (a, b) {
        var c = this;
        _.Q(b, 17) || this.enabled && IK(this.M, a);
        wt(this.l, zK, 724, {eh: a.getDomId(), T: b});
        a.listen(yt, function (d) {
            var e = d.detail;
            d = e.size;
            var f = e.vast, g = new hO(a, "publisher_ads");
            e.isEmpty && (g.isEmpty = !0, g.slotContentChanged = !1);
            f && _.H(bw) && (g.vast = f);
            e = a.g.getResponseInformation();
            d && e && (g.size = [d.width, d.height], g.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, g.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, g.isBackfill = e.isBackfill, g.creativeId = e.creativeId, g.lineItemId = e.lineItemId, g.creativeTemplateId = e.creativeTemplateId, g.advertiserId = e.advertiserId, g.campaignId = e.campaignId, g.yieldGroupIds = e.yieldGroupIds, g.companyIds = e.companyIds);
            wt(c.l, "slotRenderEnded", 708, g)
        });
        a.listen(xK, function () {
            wt(c.l, "slotResponseReceived", 709, new nO(a, c.getName()))
        });
        4 === Sr(b) && iR(this, "rewardedSlotClosed", a, b);
        7 === Sr(b) && iR(this, "gameManualInterstitialSlotClosed", a, b);
        eQ.prototype.slotAdded.call(this, a, b)
    };
    var iR = function (a, b, c, d) {
        _.Vp(c, a.l.listen(b, function (e) {
            c.g === e.detail.slot && (e = {}, jR(a, [c], Nn().g, (e[c.getDomId()] = d, e), a.M))
        }))
    }, rM = function (a, b, c) {
        var d = kR(a, b, c);
        lR(a, d, b, {ec: 1});
        b = c.getAdUnitPath();
        if (c = a.I[b]) {
            c = _.u(c);
            for (d = c.next(); !d.done; d = c.next()) d = d.value, lR(a, d.X, d.P, d.ee);
            delete a.I[b]
        }
    }, kR = function (a, b, c) {
        var d = b.ca, e = b.T[c.getDomId()];
        return _.Q(d, 4) ? [] : !_.Q(d, 6) || (null == e ? 0 : _.Q(e, 17)) ? (a.j.add(c), _.Vp(c, function () {
            return void a.j.delete(c)
        }), [c]) : a.g.filter(function (f) {
            if (a.j.has(f) || _.H(SE) && !En(f) && !cn(Sr(e))) return !1;
            a.j.add(f);
            _.Vp(f, function () {
                return void a.j.delete(f)
            });
            return !0
        })
    }, lR = function (a, b, c, d) {
        a.R.info(oL());
        if (mR(a, b, d, c) && 1 !== d.ec) for (b = _.u(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), wt(a.l, AK, 725, {
            eh: d,
            T: c.T[d]
        })
    }, mR = function (a, b, c, d) {
        b = b.filter(function (e) {
            var f = d.T[e.getDomId()], g = _.dr(a.M, e);
            !1 === g && O(a.R, YL(String(Sr(f)), e.getAdUnitPath()));
            if (!g) return !1;
            (_.I = [5, 4, 7], _.x(_.I, "includes")).call(_.I, Sr(f)) && _.JK(a.M, e);
            return !0
        });
        if (!b.length) return null;
        fR(a.H, b, c, d);
        return b
    };
    gR.prototype.refresh = function (a, b, c) {
        c = void 0 === c ? {ec: 2} : c;
        b = nR(this, b);
        if (!b.length) return !1;
        oR(this, a, b, c);
        return !0
    };
    var nR = function (a, b) {
        return b.filter(function (c, d) {
            if (!c.L) return !0;
            O(a.R, rL(String(d)));
            return !1
        })
    }, oR = function (a, b, c, d) {
        var e = c[0], f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
        if (a.enabled) {
            var h = _.u(c);
            e = h.next();
            for (f = {}; !e.done; f = {tf: void 0}, e = h.next()) f.tf = e.value, a.j.add(f.tf), _.Vp(f.tf, function (k) {
                return function () {
                    return void a.j.delete(k.tf)
                }
            }(f));
            lR(a, c, b, d)
        } else c.length && _.Q(b.ca, 6) ? (O(a.R, nL(g), e), e = e.getAdUnitPath(), f = null != (h = a.I[e]) ? h : [], f.push({
            X: c,
            P: b,
            ee: d
        }), a.I[e] = f) : O(a.R, lL(g), e)
    };
    gR.prototype.o = function () {
        var a = Nn().g;
        if (_.Q(a, 6)) for (var b = _.u(this.g), c = b.next(); !c.done; c = b.next()) this.enabled && IK(this.M, c.value);
        wM(this, a);
        a = fp();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    gR.prototype.destroySlots = function (a) {
        a = eQ.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = Nn();
            pR(this, a, b.g, b.A)
        }
        return a
    };
    var yM = function (a, b, c, d) {
        if (!a.enabled) return O(a.R, mL(), d[0]), !1;
        var e = nR(a, d);
        if (!e.length) return O(a.R, tm("PubAdsService.clear", [d].filter(function (f) {
            return void 0 !== f
        }))), !1;
        a.R.info(pL());
        pR(a, e, b, c);
        return !0
    }, pR = function (a, b, c, d) {
        for (var e = _.u(b), f = e.next(); !f.done; f = e.next()) FK(a.M, f.value);
        jR(a, b, c, d, a.M)
    };
    gR.prototype.forceExperiment = function (a) {
        a = Number(a);
        0 < a && _.Xf(zh).g(a)
    };
    var jR = function (a, b, c, d, e) {
        var f = void 0 === f ? window : f;
        b = _.u(b);
        for (var g = b.next(); !g.done; g = b.next()) {
            g = g.value;
            OK(a.C.M, g);
            var h = d[g.getDomId()];
            br(h, c) && cr(g, f.document, h, c);
            er(e, g)
        }
    }, xM = function (a, b, c, d) {
        if ("string" !== typeof b || "string" !== typeof c) O(a.R, tm("PubAdsService.setVideoContent", [b, c])); else {
            var e = qi(d, 21, !0);
            b = Ji(e, 22, b);
            Ji(b, 23, c);
            wM(a, d)
        }
    }, zM = function (a, b) {
        if (!a.enabled) return null;
        var c, d;
        return {vid: null != (c = _.F(b, 22)) ? c : "", cmsid: null != (d = _.F(b, 23)) ? d : ""}
    }, wM = function (a, b) {
        _.Q(b, 21) && a.enabled && (a = OB(), _.Gk(b, 29, _.ed(a)))
    }, hR = function (a, b) {
        var c = "";
        if ("string" === typeof a) c = a, b = FN(b, c); else if (_.Ma(a) && 1 == a.nodeType) {
            var d = a;
            c = d.id;
            b = FN(b, c)
        } else b = (_.I = [].concat(_.Pi(b.X)), _.x(_.I, "find")).call(_.I, function (e) {
            return e.g === a
        });
        return {slotId: b, Ek: d, Fk: c}
    };
    var ww = _.Rw(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"]),
        xw = _.Rw(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var qR = Sw(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]), rR = _.Mz(function () {
        KB("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
    }), tR = function (a, b) {
        var c = this;
        var d = void 0 === d ? _.x(String, "raw").call(String, qR) : d;
        this.M = a;
        this.A = d;
        this.g = new _.A.Map;
        this.X = new _.A.Set;
        b.l = function (e) {
            return sR(c, e)
        }
    };
    tR.prototype.defineSlot = function (a, b, c, d, e) {
        a = Io(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.g;
        a.Ge || b.error(tm("googletag.defineSlot", [c, d, e]));
        return null
    };
    var Io = function (a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Sb: f,
            Ji: void 0 === g ? !1 : g
        }) : {}
    };
    tR.prototype.add = function (a, b, c, d, e, f) {
        var g = this, h = e.Sb, k = void 0 === e.format ? 0 : e.format, l = void 0 === e.Ji ? !1 : e.Ji;
        e = void 0 === e.xb ? !1 : e.xb;
        f = void 0 === f ? _.t : f;
        try {
            var m = new RegExp(this.A, "u");
            if (m.test("/1") && !m.test(c)) return b.error(aL(c)), {Ge: !0}
        } catch (p) {
        }
        f = Yq(k, f, e);
        null !== f && Tq(a, f, Vq(k));
        if (f) return Oq(b, f, k, c), {};
        l && rR();
        k = this.g.get(c) || Number(l);
        b = uR(this, a, b, c, k, d, h || "gpt_unit_" + c + "_" + k);
        a = b.Fa;
        var n = b.slotId;
        b = b.Ge;
        if (!n) return {Ge: b};
        this.g.set(c, k + 1);
        this.X.add(n);
        _.Vp(n, function () {
            return void g.X.delete(n)
        });
        nK(c);
        return {slotId: n, Fa: a}
    };
    var FN = function (a, b) {
        a = _.u(a.X);
        for (var c = a.next(); !c.done; c = a.next()) if (c = c.value, c.getDomId() === b) return c
    }, Ht = function (a) {
        a = _.u(a);
        for (var b = a.next(); !b.done; b = a.next()) b.value.xa()
    }, uR = function (a, b, c, d, e, f, g) {
        var h = FN(a, g);
        if (h) return c.error($K(g, d, h.getAdUnitPath())), {Ge: !0};
        var k = new KM;
        LM(Ji(k, 1, d), g);
        MM(k, Zo(f));
        mM(k);
        var l = new bh(b, d, e, g);
        tM(l, mp(b, c, l));
        _.Vp(l, function () {
            var m = Nn(), n = l.getDomId();
            delete m.A[n];
            m.l.delete(l);
            m = l.getAdUnitPath();
            m = Zl(m);
            var p;
            n = (null != (p = mm.get(m)) ? p : 0) - 1;
            0 >= n ? mm.delete(m) : mm.set(m, n);
            c.info(wL(l.toString()), l);
            (p = om.get(l)) && pm.delete(p);
            om.delete(l)
        });
        c.info(PK(l.toString()), l);
        l.listen(yK, function (m) {
            m = m.detail.lm;
            c.info(QK(l.getAdUnitPath()), l);
            XC(_.Xf(bm), "7", 9, MK(a.M, l), 0, m)
        });
        l.listen(xK, function (m) {
            var n = m.detail;
            c.info(RK(l.getAdUnitPath()), l);
            var p;
            m = _.Xf(bm);
            var r = vt(k, 20);
            n = null != (p = n.getEscapedQemQueryId()) ? p : "";
            m.g && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = n)
        });
        l.listen(xt, function () {
            return void c.info(SK(l.getAdUnitPath()), l)
        });
        l.listen(yt, function () {
            return void c.info(TK(l.getAdUnitPath()), l)
        });
        return {Fa: k, slotId: l}
    }, sR = function (a, b) {
        var c = new RegExp("(^|,|/)" + b + "($|,|/)");
        return [].concat(_.Pi(a.X)).some(function (d) {
            return c.test(Zl(d.getAdUnitPath()))
        })
    };
    (function (a, b) {
        var c = null != a ? a : {
            pvsid: vk(window),
            Pa: "m202404040101",
            Te: "202404040101",
            Qa: new Fw(3, "m202404040101", 0),
            ah: !0,
            eg: 1
        };
        try {
            pc(function (ja) {
                dm(c, 1190, ja)
            });
            var d = fp();
            mf(!_.Xf(Rm).g);
            _.x(Object, "assign").call(Object, Sm, d._vars_);
            d._vars_ = Sm;
            if (d.evalScripts) d.evalScripts(); else {
                EJ();
                try {
                    ai()
                } catch (ja) {
                    dm(c, 408, ja)
                }
                ur();
                var e = new ZM;
                try {
                    Xh(e.I), oo(13, c), oo(3, c)
                } catch (ja) {
                    dm(c, 408, ja)
                }
                var f = Ew(c, e), g = null != a ? a : Iw(f, c), h = null != b ? b : new YM(g);
                Vl(g);
                hq("gpt_fifwin", function (ja) {
                    Hp(ja, g)
                }, d.fifWin ? .01 : 0);
                var k = new EK, l = new tR(k, e), m = new jQ(g), n = _.Tm(260), p = new tK(g), r = new tK(g),
                    v = new tK(g), w = _.Tm(150), z = BB(), y = Bu(g, l, h, k, n, e, m, p, w), C = _.Tm(221),
                    G = new fP, D = new YN, M, S, P,
                    aa = null != (P = null == (M = y.Jb) ? void 0 : null == (S = M.rf) ? void 0 : S.zb) ? P : new Gq,
                    ka = new gR(g, l, h, k, m, z, e, p, n, C, G, D, y, aa);
                _.H(mG) && new GN(g, p, k, l);
                var ma = Nn().g;
                Wt(g, h, ka, ma, l, r, v, e, D, aa);
                Bp(g, d, h);
                window.setTimeout(function () {
                    for (var ja = window.document.scripts, Ga = 0, ta = 0, Ba = 0; Ba < ja.length; Ba++) ja[Ba].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? Ga++ : ja[Ba].src.match("www.googletagservices.com/tag/js/gpt.js") && ta++;
                    1 < Ga && 0 === ta || 1 < ta && 0 === Ga ? O(h, WL()) : 0 < ta && 0 < Ga && h.error(XL())
                }, 1E3);
                Et();
                if (_.H(mG) || _.Xf(bm).g) uw(), yw();
                Ep(g)
            }
        } catch (ja) {
            dm(c, 106, ja)
        }
    })();
    _.vR = _.t.requestAnimationFrame || _.t.webkitRequestAnimationFrame;
    _.wR = !!_.vR && !/'iPhone'/.test(_.t.navigator.userAgent);
    _.xR = function (a, b, c) {
        _.V.call(this);
        var d = this;
        this.j = a;
        this.l = b;
        this.g = c;
        this.na = null;
        _.Vp(this, function () {
            return d.na = null
        })
    };
    _.T(_.xR, _.V);
}).call(this, {});
