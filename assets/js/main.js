(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const f of h.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = u(c);
    fetch(c.href, h);
  }
})();
var Dr = { exports: {} },
  ll = {};
var Ym;
function E1() {
  if (Ym) return ll;
  Ym = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(o, c, h) {
    var f = null;
    if (
      (h !== void 0 && (f = "" + h),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var m in c) m !== "key" && (h[m] = c[m]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: a, type: o, key: f, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return ((ll.Fragment = l), (ll.jsx = u), (ll.jsxs = u), ll);
}
var qm;
function M1() {
  return (qm || ((qm = 1), (Dr.exports = E1())), Dr.exports);
}
var w = M1(),
  Rr = { exports: {} },
  sl = {},
  Cr = { exports: {} },
  Or = {};
var Gm;
function D1() {
  return (
    Gm ||
      ((Gm = 1),
      (function (a) {
        function l(V, Z) {
          var P = V.length;
          V.push(Z);
          t: for (; 0 < P; ) {
            var ut = (P - 1) >>> 1,
              T = V[ut];
            if (0 < c(T, Z)) ((V[ut] = Z), (V[P] = T), (P = ut));
            else break t;
          }
        }
        function u(V) {
          return V.length === 0 ? null : V[0];
        }
        function o(V) {
          if (V.length === 0) return null;
          var Z = V[0],
            P = V.pop();
          if (P !== Z) {
            V[0] = P;
            t: for (var ut = 0, T = V.length, B = T >>> 1; ut < B; ) {
              var K = 2 * (ut + 1) - 1,
                Q = V[K],
                tt = K + 1,
                gt = V[tt];
              if (0 > c(Q, P))
                tt < T && 0 > c(gt, Q)
                  ? ((V[ut] = gt), (V[tt] = P), (ut = tt))
                  : ((V[ut] = Q), (V[K] = P), (ut = K));
              else if (tt < T && 0 > c(gt, P))
                ((V[ut] = gt), (V[tt] = P), (ut = tt));
              else break t;
            }
          }
          return Z;
        }
        function c(V, Z) {
          var P = V.sortIndex - Z.sortIndex;
          return P !== 0 ? P : V.id - Z.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          a.unstable_now = function () {
            return h.now();
          };
        } else {
          var f = Date,
            m = f.now();
          a.unstable_now = function () {
            return f.now() - m;
          };
        }
        var v = [],
          p = [],
          g = 1,
          b = null,
          x = 3,
          O = !1,
          z = !1,
          L = !1,
          U = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          H = typeof setImmediate < "u" ? setImmediate : null;
        function q(V) {
          for (var Z = u(p); Z !== null; ) {
            if (Z.callback === null) o(p);
            else if (Z.startTime <= V)
              (o(p), (Z.sortIndex = Z.expirationTime), l(v, Z));
            else break;
            Z = u(p);
          }
        }
        function Y(V) {
          if (((L = !1), q(V), !z))
            if (u(v) !== null) ((z = !0), ct || ((ct = !0), mt()));
            else {
              var Z = u(p);
              Z !== null && Rt(Y, Z.startTime - V);
            }
        }
        var ct = !1,
          yt = -1,
          W = 5,
          it = -1;
        function $() {
          return U ? !0 : !(a.unstable_now() - it < W);
        }
        function dt() {
          if (((U = !1), ct)) {
            var V = a.unstable_now();
            it = V;
            var Z = !0;
            try {
              t: {
                ((z = !1), L && ((L = !1), G(yt), (yt = -1)), (O = !0));
                var P = x;
                try {
                  e: {
                    for (
                      q(V), b = u(v);
                      b !== null && !(b.expirationTime > V && $());
                    ) {
                      var ut = b.callback;
                      if (typeof ut == "function") {
                        ((b.callback = null), (x = b.priorityLevel));
                        var T = ut(b.expirationTime <= V);
                        if (((V = a.unstable_now()), typeof T == "function")) {
                          ((b.callback = T), q(V), (Z = !0));
                          break e;
                        }
                        (b === u(v) && o(v), q(V));
                      } else o(v);
                      b = u(v);
                    }
                    if (b !== null) Z = !0;
                    else {
                      var B = u(p);
                      (B !== null && Rt(Y, B.startTime - V), (Z = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (x = P), (O = !1));
                }
                Z = void 0;
              }
            } finally {
              Z ? mt() : (ct = !1);
            }
          }
        }
        var mt;
        if (typeof H == "function")
          mt = function () {
            H(dt);
          };
        else if (typeof MessageChannel < "u") {
          var Jt = new MessageChannel(),
            Xt = Jt.port2;
          ((Jt.port1.onmessage = dt),
            (mt = function () {
              Xt.postMessage(null);
            }));
        } else
          mt = function () {
            k(dt, 0);
          };
        function Rt(V, Z) {
          yt = k(function () {
            V(a.unstable_now());
          }, Z);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (a.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (W = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (a.unstable_next = function (V) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = x;
            }
            var P = x;
            x = Z;
            try {
              return V();
            } finally {
              x = P;
            }
          }),
          (a.unstable_requestPaint = function () {
            U = !0;
          }),
          (a.unstable_runWithPriority = function (V, Z) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var P = x;
            x = V;
            try {
              return Z();
            } finally {
              x = P;
            }
          }),
          (a.unstable_scheduleCallback = function (V, Z, P) {
            var ut = a.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? ut + P : ut))
                : (P = ut),
              V)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = P + T),
              (V = {
                id: g++,
                callback: Z,
                priorityLevel: V,
                startTime: P,
                expirationTime: T,
                sortIndex: -1,
              }),
              P > ut
                ? ((V.sortIndex = P),
                  l(p, V),
                  u(v) === null &&
                    V === u(p) &&
                    (L ? (G(yt), (yt = -1)) : (L = !0), Rt(Y, P - ut)))
                : ((V.sortIndex = T),
                  l(v, V),
                  z || O || ((z = !0), ct || ((ct = !0), mt()))),
              V
            );
          }),
          (a.unstable_shouldYield = $),
          (a.unstable_wrapCallback = function (V) {
            var Z = x;
            return function () {
              var P = x;
              x = Z;
              try {
                return V.apply(this, arguments);
              } finally {
                x = P;
              }
            };
          }));
      })(Or)),
    Or
  );
}
var Xm;
function R1() {
  return (Xm || ((Xm = 1), (Cr.exports = D1())), Cr.exports);
}
var wr = { exports: {} },
  st = {};
var Zm;
function C1() {
  if (Zm) return st;
  Zm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function x(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (b && T[b]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    L = {};
  function U(T, B, K) {
    ((this.props = T),
      (this.context = B),
      (this.refs = L),
      (this.updater = K || O));
  }
  ((U.prototype.isReactComponent = {}),
    (U.prototype.setState = function (T, B) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, B, "setState");
    }),
    (U.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    }));
  function k() {}
  k.prototype = U.prototype;
  function G(T, B, K) {
    ((this.props = T),
      (this.context = B),
      (this.refs = L),
      (this.updater = K || O));
  }
  var H = (G.prototype = new k());
  ((H.constructor = G), z(H, U.prototype), (H.isPureReactComponent = !0));
  var q = Array.isArray,
    Y = { H: null, A: null, T: null, S: null, V: null },
    ct = Object.prototype.hasOwnProperty;
  function yt(T, B, K, Q, tt, gt) {
    return (
      (K = gt.ref),
      { $$typeof: a, type: T, key: B, ref: K !== void 0 ? K : null, props: gt }
    );
  }
  function W(T, B) {
    return yt(T.type, B, void 0, void 0, void 0, T.props);
  }
  function it(T) {
    return typeof T == "object" && T !== null && T.$$typeof === a;
  }
  function $(T) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (K) {
        return B[K];
      })
    );
  }
  var dt = /\/+/g;
  function mt(T, B) {
    return typeof T == "object" && T !== null && T.key != null
      ? $("" + T.key)
      : B.toString(36);
  }
  function Jt() {}
  function Xt(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(Jt, Jt)
            : ((T.status = "pending"),
              T.then(
                function (B) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = B));
                },
                function (B) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = B));
                },
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function Rt(T, B, K, Q, tt) {
    var gt = typeof T;
    (gt === "undefined" || gt === "boolean") && (T = null);
    var lt = !1;
    if (T === null) lt = !0;
    else
      switch (gt) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case a:
            case l:
              lt = !0;
              break;
            case g:
              return ((lt = T._init), Rt(lt(T._payload), B, K, Q, tt));
          }
      }
    if (lt)
      return (
        (tt = tt(T)),
        (lt = Q === "" ? "." + mt(T, 0) : Q),
        q(tt)
          ? ((K = ""),
            lt != null && (K = lt.replace(dt, "$&/") + "/"),
            Rt(tt, B, K, "", function (hn) {
              return hn;
            }))
          : tt != null &&
            (it(tt) &&
              (tt = W(
                tt,
                K +
                  (tt.key == null || (T && T.key === tt.key)
                    ? ""
                    : ("" + tt.key).replace(dt, "$&/") + "/") +
                  lt,
              )),
            B.push(tt)),
        1
      );
    lt = 0;
    var he = Q === "" ? "." : Q + ":";
    if (q(T))
      for (var wt = 0; wt < T.length; wt++)
        ((Q = T[wt]), (gt = he + mt(Q, wt)), (lt += Rt(Q, B, K, gt, tt)));
    else if (((wt = x(T)), typeof wt == "function"))
      for (T = wt.call(T), wt = 0; !(Q = T.next()).done; )
        ((Q = Q.value), (gt = he + mt(Q, wt++)), (lt += Rt(Q, B, K, gt, tt)));
    else if (gt === "object") {
      if (typeof T.then == "function") return Rt(Xt(T), B, K, Q, tt);
      throw (
        (B = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return lt;
  }
  function V(T, B, K) {
    if (T == null) return T;
    var Q = [],
      tt = 0;
    return (
      Rt(T, Q, "", "", function (gt) {
        return B.call(K, gt, tt++);
      }),
      Q
    );
  }
  function Z(T) {
    if (T._status === -1) {
      var B = T._result;
      ((B = B()),
        B.then(
          function (K) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = K));
          },
          function (K) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = K));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = B)));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var B = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(B)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function ut() {}
  return (
    (st.Children = {
      map: V,
      forEach: function (T, B, K) {
        V(
          T,
          function () {
            B.apply(this, arguments);
          },
          K,
        );
      },
      count: function (T) {
        var B = 0;
        return (
          V(T, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (T) {
        return (
          V(T, function (B) {
            return B;
          }) || []
        );
      },
      only: function (T) {
        if (!it(T))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return T;
      },
    }),
    (st.Component = U),
    (st.Fragment = u),
    (st.Profiler = c),
    (st.PureComponent = G),
    (st.StrictMode = o),
    (st.Suspense = v),
    (st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (st.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return Y.H.useMemoCache(T);
      },
    }),
    (st.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (st.cloneElement = function (T, B, K) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + ".",
        );
      var Q = z({}, T.props),
        tt = T.key,
        gt = void 0;
      if (B != null)
        for (lt in (B.ref !== void 0 && (gt = void 0),
        B.key !== void 0 && (tt = "" + B.key),
        B))
          !ct.call(B, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && B.ref === void 0) ||
            (Q[lt] = B[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) Q.children = K;
      else if (1 < lt) {
        for (var he = Array(lt), wt = 0; wt < lt; wt++)
          he[wt] = arguments[wt + 2];
        Q.children = he;
      }
      return yt(T.type, tt, void 0, void 0, gt, Q);
    }),
    (st.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: h, _context: T }),
        T
      );
    }),
    (st.createElement = function (T, B, K) {
      var Q,
        tt = {},
        gt = null;
      if (B != null)
        for (Q in (B.key !== void 0 && (gt = "" + B.key), B))
          ct.call(B, Q) &&
            Q !== "key" &&
            Q !== "__self" &&
            Q !== "__source" &&
            (tt[Q] = B[Q]);
      var lt = arguments.length - 2;
      if (lt === 1) tt.children = K;
      else if (1 < lt) {
        for (var he = Array(lt), wt = 0; wt < lt; wt++)
          he[wt] = arguments[wt + 2];
        tt.children = he;
      }
      if (T && T.defaultProps)
        for (Q in ((lt = T.defaultProps), lt))
          tt[Q] === void 0 && (tt[Q] = lt[Q]);
      return yt(T, gt, void 0, void 0, null, tt);
    }),
    (st.createRef = function () {
      return { current: null };
    }),
    (st.forwardRef = function (T) {
      return { $$typeof: m, render: T };
    }),
    (st.isValidElement = it),
    (st.lazy = function (T) {
      return { $$typeof: g, _payload: { _status: -1, _result: T }, _init: Z };
    }),
    (st.memo = function (T, B) {
      return { $$typeof: p, type: T, compare: B === void 0 ? null : B };
    }),
    (st.startTransition = function (T) {
      var B = Y.T,
        K = {};
      Y.T = K;
      try {
        var Q = T(),
          tt = Y.S;
        (tt !== null && tt(K, Q),
          typeof Q == "object" &&
            Q !== null &&
            typeof Q.then == "function" &&
            Q.then(ut, P));
      } catch (gt) {
        P(gt);
      } finally {
        Y.T = B;
      }
    }),
    (st.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (st.use = function (T) {
      return Y.H.use(T);
    }),
    (st.useActionState = function (T, B, K) {
      return Y.H.useActionState(T, B, K);
    }),
    (st.useCallback = function (T, B) {
      return Y.H.useCallback(T, B);
    }),
    (st.useContext = function (T) {
      return Y.H.useContext(T);
    }),
    (st.useDebugValue = function () {}),
    (st.useDeferredValue = function (T, B) {
      return Y.H.useDeferredValue(T, B);
    }),
    (st.useEffect = function (T, B, K) {
      var Q = Y.H;
      if (typeof K == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return Q.useEffect(T, B);
    }),
    (st.useId = function () {
      return Y.H.useId();
    }),
    (st.useImperativeHandle = function (T, B, K) {
      return Y.H.useImperativeHandle(T, B, K);
    }),
    (st.useInsertionEffect = function (T, B) {
      return Y.H.useInsertionEffect(T, B);
    }),
    (st.useLayoutEffect = function (T, B) {
      return Y.H.useLayoutEffect(T, B);
    }),
    (st.useMemo = function (T, B) {
      return Y.H.useMemo(T, B);
    }),
    (st.useOptimistic = function (T, B) {
      return Y.H.useOptimistic(T, B);
    }),
    (st.useReducer = function (T, B, K) {
      return Y.H.useReducer(T, B, K);
    }),
    (st.useRef = function (T) {
      return Y.H.useRef(T);
    }),
    (st.useState = function (T) {
      return Y.H.useState(T);
    }),
    (st.useSyncExternalStore = function (T, B, K) {
      return Y.H.useSyncExternalStore(T, B, K);
    }),
    (st.useTransition = function () {
      return Y.H.useTransition();
    }),
    (st.version = "19.1.0"),
    st
  );
}
var Qm;
function vc() {
  return (Qm || ((Qm = 1), (wr.exports = C1())), wr.exports);
}
var Vr = { exports: {} },
  ae = {};
var Km;
function O1() {
  if (Km) return ae;
  Km = 1;
  var a = vc();
  function l(v) {
    var p = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(v, p, g) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: v,
      containerInfo: p,
      implementation: g,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(v, p) {
    if (v === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (ae.createPortal = function (v, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return h(v, p, null, g);
    }),
    (ae.flushSync = function (v) {
      var p = f.T,
        g = o.p;
      try {
        if (((f.T = null), (o.p = 2), v)) return v();
      } finally {
        ((f.T = p), (o.p = g), o.d.f());
      }
    }),
    (ae.preconnect = function (v, p) {
      typeof v == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        o.d.C(v, p));
    }),
    (ae.prefetchDNS = function (v) {
      typeof v == "string" && o.d.D(v);
    }),
    (ae.preinit = function (v, p) {
      if (typeof v == "string" && p && typeof p.as == "string") {
        var g = p.as,
          b = m(g, p.crossOrigin),
          x = typeof p.integrity == "string" ? p.integrity : void 0,
          O = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        g === "style"
          ? o.d.S(v, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: O,
            })
          : g === "script" &&
            o.d.X(v, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: O,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ae.preinitModule = function (v, p) {
      if (typeof v == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var g = m(p.as, p.crossOrigin);
            o.d.M(v, {
              crossOrigin: g,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && o.d.M(v);
    }),
    (ae.preload = function (v, p) {
      if (
        typeof v == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var g = p.as,
          b = m(g, p.crossOrigin);
        o.d.L(v, g, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ae.preloadModule = function (v, p) {
      if (typeof v == "string")
        if (p) {
          var g = m(p.as, p.crossOrigin);
          o.d.m(v, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else o.d.m(v);
    }),
    (ae.requestFormReset = function (v) {
      o.d.r(v);
    }),
    (ae.unstable_batchedUpdates = function (v, p) {
      return v(p);
    }),
    (ae.useFormState = function (v, p, g) {
      return f.H.useFormState(v, p, g);
    }),
    (ae.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (ae.version = "19.1.0"),
    ae
  );
}
var Pm;
function w1() {
  if (Pm) return Vr.exports;
  Pm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Vr.exports = O1()), Vr.exports);
}
var Jm;
function V1() {
  if (Jm) return sl;
  Jm = 1;
  var a = R1(),
    l = vc(),
    u = w1();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (h(t) !== t) throw Error(o(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === n) return (m(s), t);
          if (r === i) return (m(s), e);
          r = r.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) ((n = s), (i = r));
      else {
        for (var d = !1, y = s.child; y; ) {
          if (y === n) {
            ((d = !0), (n = s), (i = r));
            break;
          }
          if (y === i) {
            ((d = !0), (i = s), (n = r));
            break;
          }
          y = y.sibling;
        }
        if (!d) {
          for (y = r.child; y; ) {
            if (y === n) {
              ((d = !0), (n = r), (i = s));
              break;
            }
            if (y === i) {
              ((d = !0), (i = r), (n = s));
              break;
            }
            y = y.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = p(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    b = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    L = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    k = Symbol.for("react.provider"),
    G = Symbol.for("react.consumer"),
    H = Symbol.for("react.context"),
    q = Symbol.for("react.forward_ref"),
    Y = Symbol.for("react.suspense"),
    ct = Symbol.for("react.suspense_list"),
    yt = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    it = Symbol.for("react.activity"),
    $ = Symbol.for("react.memo_cache_sentinel"),
    dt = Symbol.iterator;
  function mt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (dt && t[dt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Jt = Symbol.for("react.client.reference");
  function Xt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Jt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case z:
        return "Fragment";
      case U:
        return "Profiler";
      case L:
        return "StrictMode";
      case Y:
        return "Suspense";
      case ct:
        return "SuspenseList";
      case it:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case O:
          return "Portal";
        case H:
          return (t.displayName || "Context") + ".Provider";
        case G:
          return (t._context.displayName || "Context") + ".Consumer";
        case q:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case yt:
          return (
            (e = t.displayName || null),
            e !== null ? e : Xt(t.type) || "Memo"
          );
        case W:
          ((e = t._payload), (t = t._init));
          try {
            return Xt(t(e));
          } catch {}
      }
    return null;
  }
  var Rt = Array.isArray,
    V = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    ut = [],
    T = -1;
  function B(t) {
    return { current: t };
  }
  function K(t) {
    0 > T || ((t.current = ut[T]), (ut[T] = null), T--);
  }
  function Q(t, e) {
    (T++, (ut[T] = t.current), (t.current = e));
  }
  var tt = B(null),
    gt = B(null),
    lt = B(null),
    he = B(null);
  function wt(t, e) {
    switch ((Q(lt, e), Q(gt, t), Q(tt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? pm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = pm(e)), (t = ym(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (K(tt), Q(tt, t));
  }
  function hn() {
    (K(tt), K(gt), K(lt));
  }
  function cu(t) {
    t.memoizedState !== null && Q(he, t);
    var e = tt.current,
      n = ym(e, t.type);
    e !== n && (Q(gt, t), Q(tt, n));
  }
  function xl(t) {
    (gt.current === t && (K(tt), K(gt)),
      he.current === t && (K(he), (tl._currentValue = P)));
  }
  var fu = Object.prototype.hasOwnProperty,
    hu = a.unstable_scheduleCallback,
    du = a.unstable_cancelCallback,
    n0 = a.unstable_shouldYield,
    a0 = a.unstable_requestPaint,
    ke = a.unstable_now,
    i0 = a.unstable_getCurrentPriorityLevel,
    Pc = a.unstable_ImmediatePriority,
    Jc = a.unstable_UserBlockingPriority,
    Tl = a.unstable_NormalPriority,
    l0 = a.unstable_LowPriority,
    Fc = a.unstable_IdlePriority,
    s0 = a.log,
    u0 = a.unstable_setDisableYieldValue,
    oi = null,
    de = null;
  function dn(t) {
    if (
      (typeof s0 == "function" && u0(t),
      de && typeof de.setStrictMode == "function")
    )
      try {
        de.setStrictMode(oi, t);
      } catch {}
  }
  var me = Math.clz32 ? Math.clz32 : c0,
    o0 = Math.log,
    r0 = Math.LN2;
  function c0(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((o0(t) / r0) | 0)) | 0);
  }
  var Al = 256,
    El = 4194304;
  function Gn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ml(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      r = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var y = i & 134217727;
    return (
      y !== 0
        ? ((i = y & ~r),
          i !== 0
            ? (s = Gn(i))
            : ((d &= y),
              d !== 0
                ? (s = Gn(d))
                : n || ((n = y & ~t), n !== 0 && (s = Gn(n)))))
        : ((y = i & ~r),
          y !== 0
            ? (s = Gn(y))
            : d !== 0
              ? (s = Gn(d))
              : n || ((n = i & ~t), n !== 0 && (s = Gn(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & r) === 0 &&
            ((r = s & -s),
            (n = e & -e),
            r >= n || (r === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function ri(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function f0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wc() {
    var t = Al;
    return ((Al <<= 1), (Al & 4194048) === 0 && (Al = 256), t);
  }
  function $c() {
    var t = El;
    return ((El <<= 1), (El & 62914560) === 0 && (El = 4194304), t);
  }
  function mu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ci(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function h0(t, e, n, i, s, r) {
    var d = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var y = t.entanglements,
      S = t.expirationTimes,
      D = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var j = 31 - me(n),
        _ = 1 << j;
      ((y[j] = 0), (S[j] = -1));
      var R = D[j];
      if (R !== null)
        for (D[j] = null, j = 0; j < R.length; j++) {
          var C = R[j];
          C !== null && (C.lane &= -536870913);
        }
      n &= ~_;
    }
    (i !== 0 && Ic(t, i, 0),
      r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(d & ~e)));
  }
  function Ic(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var i = 31 - me(e);
    ((t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 4194090)));
  }
  function tf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - me(n),
        s = 1 << i;
      ((s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s));
    }
  }
  function pu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function yu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ef() {
    var t = Z.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : _m(t.type));
  }
  function d0(t, e) {
    var n = Z.p;
    try {
      return ((Z.p = t), e());
    } finally {
      Z.p = n;
    }
  }
  var mn = Math.random().toString(36).slice(2),
    ee = "__reactFiber$" + mn,
    ue = "__reactProps$" + mn,
    da = "__reactContainer$" + mn,
    gu = "__reactEvents$" + mn,
    m0 = "__reactListeners$" + mn,
    p0 = "__reactHandles$" + mn,
    nf = "__reactResources$" + mn,
    fi = "__reactMarker$" + mn;
  function vu(t) {
    (delete t[ee], delete t[ue], delete t[gu], delete t[m0], delete t[p0]);
  }
  function ma(t) {
    var e = t[ee];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[da] || n[ee])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Sm(t); t !== null; ) {
            if ((n = t[ee])) return n;
            t = Sm(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function pa(t) {
    if ((t = t[ee] || t[da])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function hi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function ya(t) {
    var e = t[nf];
    return (
      e ||
        (e = t[nf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Zt(t) {
    t[fi] = !0;
  }
  var af = new Set(),
    lf = {};
  function Xn(t, e) {
    (ga(t, e), ga(t + "Capture", e));
  }
  function ga(t, e) {
    for (lf[t] = e, t = 0; t < e.length; t++) af.add(e[t]);
  }
  var y0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    sf = {},
    uf = {};
  function g0(t) {
    return fu.call(uf, t)
      ? !0
      : fu.call(sf, t)
        ? !1
        : y0.test(t)
          ? (uf[t] = !0)
          : ((sf[t] = !0), !1);
  }
  function Dl(t, e, n) {
    if (g0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Rl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Fe(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  var bu, of;
  function va(t) {
    if (bu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((bu = (e && e[1]) || ""),
          (of =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      bu +
      t +
      of
    );
  }
  var Su = !1;
  function xu(t, e) {
    if (!t || Su) return "";
    Su = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (C) {
                  var R = C;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (C) {
                  R = C;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                R = C;
              }
              (_ = t()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (C) {
            if (C && R && typeof C.stack == "string") return [C.stack, R.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = i.DetermineComponentFrameRoot(),
        d = r[0],
        y = r[1];
      if (d && y) {
        var S = d.split(`
`),
          D = y.split(`
`);
        for (
          s = i = 0;
          i < S.length && !S[i].includes("DetermineComponentFrameRoot");
        )
          i++;
        for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === S.length || s === D.length)
          for (
            i = S.length - 1, s = D.length - 1;
            1 <= i && 0 <= s && S[i] !== D[s];
          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (S[i] !== D[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || S[i] !== D[s])) {
                  var j =
                    `
` + S[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", t.displayName)),
                    j
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((Su = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? va(n) : "";
  }
  function v0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return va(t.type);
      case 16:
        return va("Lazy");
      case 13:
        return va("Suspense");
      case 19:
        return va("SuspenseList");
      case 0:
      case 15:
        return xu(t.type, !1);
      case 11:
        return xu(t.type.render, !1);
      case 1:
        return xu(t.type, !0);
      case 31:
        return va("Activity");
      default:
        return "";
    }
  }
  function rf(t) {
    try {
      var e = "";
      do ((e += v0(t)), (t = t.return));
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Ae(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function cf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function b0(t) {
    var e = cf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        r = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (d) {
            ((i = "" + d), r.call(this, d));
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (d) {
            i = "" + d;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Cl(t) {
    t._valueTracker || (t._valueTracker = b0(t));
  }
  function ff(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = cf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Ol(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var S0 = /[\n"\\]/g;
  function Ee(t) {
    return t.replace(S0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Tu(t, e, n, i, s, r, d, y) {
    ((t.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ae(e))
          : t.value !== "" + Ae(e) && (t.value = "" + Ae(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? Au(t, d, Ae(e))
        : n != null
          ? Au(t, d, Ae(n))
          : i != null && t.removeAttribute("value"),
      s == null && r != null && (t.defaultChecked = !!r),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.name = "" + Ae(y))
        : t.removeAttribute("name"));
  }
  function hf(t, e, n, i, s, r, d, y) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) return;
      ((n = n != null ? "" + Ae(n) : ""),
        (e = e != null ? "" + Ae(e) : n),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = y ? t.checked : !!i),
      (t.defaultChecked = !!i),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d));
  }
  function Au(t, e, n) {
    (e === "number" && Ol(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function ba(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Ae(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), i && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function df(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ae(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ae(n) : "";
  }
  function mf(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(o(92));
        if (Rt(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Ae(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i));
  }
  function Sa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var x0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function pf(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : i
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || x0.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function yf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
              ? (t.cssFloat = "")
              : (t[i] = ""));
      for (var s in e)
        ((i = e[s]), e.hasOwnProperty(s) && n[s] !== i && pf(t, s, i));
    } else for (var r in e) e.hasOwnProperty(r) && pf(t, r, e[r]);
  }
  function Eu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var T0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    A0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wl(t) {
    return A0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Mu = null;
  function Du(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var xa = null,
    Ta = null;
  function gf(t) {
    var e = pa(t);
    if (e && (t = e.stateNode)) {
      var n = t[ue] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Tu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ee("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[ue] || null;
                if (!s) throw Error(o(90));
                Tu(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((i = n[e]), i.form === t.form && ff(i));
          }
          break t;
        case "textarea":
          df(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && ba(t, !!n.multiple, e, !1));
      }
    }
  }
  var Ru = !1;
  function vf(t, e, n) {
    if (Ru) return t(e, n);
    Ru = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Ru = !1),
        (xa !== null || Ta !== null) &&
          (ps(), xa && ((e = xa), (t = Ta), (Ta = xa = null), gf(e), t)))
      )
        for (e = 0; e < t.length; e++) gf(t[e]);
    }
  }
  function di(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[ue] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var We = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Cu = !1;
  if (We)
    try {
      var mi = {};
      (Object.defineProperty(mi, "passive", {
        get: function () {
          Cu = !0;
        },
      }),
        window.addEventListener("test", mi, mi),
        window.removeEventListener("test", mi, mi));
    } catch {
      Cu = !1;
    }
  var pn = null,
    Ou = null,
    Vl = null;
  function bf() {
    if (Vl) return Vl;
    var t,
      e = Ou,
      n = e.length,
      i,
      s = "value" in pn ? pn.value : pn.textContent,
      r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var d = n - t;
    for (i = 1; i <= d && e[n - i] === s[r - i]; i++);
    return (Vl = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function zl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function jl() {
    return !0;
  }
  function Sf() {
    return !1;
  }
  function oe(t) {
    function e(n, i, s, r, d) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = r),
        (this.target = d),
        (this.currentTarget = null));
      for (var y in t)
        t.hasOwnProperty(y) && ((n = t[y]), (this[y] = n ? n(r) : r[y]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? jl
          : Sf),
        (this.isPropagationStopped = Sf),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = jl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = jl));
        },
        persist: function () {},
        isPersistent: jl,
      }),
      e
    );
  }
  var Zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Nl = oe(Zn),
    pi = g({}, Zn, { view: 0, detail: 0 }),
    E0 = oe(pi),
    wu,
    Vu,
    yi,
    _l = g({}, pi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ju,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== yi &&
              (yi && t.type === "mousemove"
                ? ((wu = t.screenX - yi.screenX), (Vu = t.screenY - yi.screenY))
                : (Vu = wu = 0),
              (yi = t)),
            wu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Vu;
      },
    }),
    xf = oe(_l),
    M0 = g({}, _l, { dataTransfer: 0 }),
    D0 = oe(M0),
    R0 = g({}, pi, { relatedTarget: 0 }),
    zu = oe(R0),
    C0 = g({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    O0 = oe(C0),
    w0 = g({}, Zn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    V0 = oe(w0),
    z0 = g({}, Zn, { data: 0 }),
    Tf = oe(z0),
    j0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    N0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function B0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = _0[t])
        ? !!e[t]
        : !1;
  }
  function ju() {
    return B0;
  }
  var U0 = g({}, pi, {
      key: function (t) {
        if (t.key) {
          var e = j0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = zl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? N0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ju,
      charCode: function (t) {
        return t.type === "keypress" ? zl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? zl(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    L0 = oe(U0),
    H0 = g({}, _l, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Af = oe(H0),
    k0 = g({}, pi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ju,
    }),
    Y0 = oe(k0),
    q0 = g({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    G0 = oe(q0),
    X0 = g({}, _l, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Z0 = oe(X0),
    Q0 = g({}, Zn, { newState: 0, oldState: 0 }),
    K0 = oe(Q0),
    P0 = [9, 13, 27, 32],
    Nu = We && "CompositionEvent" in window,
    gi = null;
  We && "documentMode" in document && (gi = document.documentMode);
  var J0 = We && "TextEvent" in window && !gi,
    Ef = We && (!Nu || (gi && 8 < gi && 11 >= gi)),
    Mf = " ",
    Df = !1;
  function Rf(t, e) {
    switch (t) {
      case "keyup":
        return P0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cf(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Aa = !1;
  function F0(t, e) {
    switch (t) {
      case "compositionend":
        return Cf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Df = !0), Mf);
      case "textInput":
        return ((t = e.data), t === Mf && Df ? null : t);
      default:
        return null;
    }
  }
  function W0(t, e) {
    if (Aa)
      return t === "compositionend" || (!Nu && Rf(t, e))
        ? ((t = bf()), (Vl = Ou = pn = null), (Aa = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ef && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var $0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Of(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!$0[t.type] : e === "textarea";
  }
  function wf(t, e, n, i) {
    (xa ? (Ta ? Ta.push(i) : (Ta = [i])) : (xa = i),
      (e = xs(e, "onChange")),
      0 < e.length &&
        ((n = new Nl("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e })));
  }
  var vi = null,
    bi = null;
  function I0(t) {
    cm(t, 0);
  }
  function Bl(t) {
    var e = hi(t);
    if (ff(e)) return t;
  }
  function Vf(t, e) {
    if (t === "change") return e;
  }
  var zf = !1;
  if (We) {
    var _u;
    if (We) {
      var Bu = "oninput" in document;
      if (!Bu) {
        var jf = document.createElement("div");
        (jf.setAttribute("oninput", "return;"),
          (Bu = typeof jf.oninput == "function"));
      }
      _u = Bu;
    } else _u = !1;
    zf = _u && (!document.documentMode || 9 < document.documentMode);
  }
  function Nf() {
    vi && (vi.detachEvent("onpropertychange", _f), (bi = vi = null));
  }
  function _f(t) {
    if (t.propertyName === "value" && Bl(bi)) {
      var e = [];
      (wf(e, bi, t, Du(t)), vf(I0, e));
    }
  }
  function tv(t, e, n) {
    t === "focusin"
      ? (Nf(), (vi = e), (bi = n), vi.attachEvent("onpropertychange", _f))
      : t === "focusout" && Nf();
  }
  function ev(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Bl(bi);
  }
  function nv(t, e) {
    if (t === "click") return Bl(e);
  }
  function av(t, e) {
    if (t === "input" || t === "change") return Bl(e);
  }
  function iv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var pe = typeof Object.is == "function" ? Object.is : iv;
  function Si(t, e) {
    if (pe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!fu.call(e, s) || !pe(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Bf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Uf(t, e) {
    var n = Bf(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Bf(n);
    }
  }
  function Lf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Lf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Hf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ol(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ol(t.document);
    }
    return e;
  }
  function Uu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var lv = We && "documentMode" in document && 11 >= document.documentMode,
    Ea = null,
    Lu = null,
    xi = null,
    Hu = !1;
  function kf(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Hu ||
      Ea == null ||
      Ea !== Ol(i) ||
      ((i = Ea),
      "selectionStart" in i && Uu(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (xi && Si(xi, i)) ||
        ((xi = i),
        (i = xs(Lu, "onSelect")),
        0 < i.length &&
          ((e = new Nl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Ea))));
  }
  function Qn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ma = {
      animationend: Qn("Animation", "AnimationEnd"),
      animationiteration: Qn("Animation", "AnimationIteration"),
      animationstart: Qn("Animation", "AnimationStart"),
      transitionrun: Qn("Transition", "TransitionRun"),
      transitionstart: Qn("Transition", "TransitionStart"),
      transitioncancel: Qn("Transition", "TransitionCancel"),
      transitionend: Qn("Transition", "TransitionEnd"),
    },
    ku = {},
    Yf = {};
  We &&
    ((Yf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ma.animationend.animation,
      delete Ma.animationiteration.animation,
      delete Ma.animationstart.animation),
    "TransitionEvent" in window || delete Ma.transitionend.transition);
  function Kn(t) {
    if (ku[t]) return ku[t];
    if (!Ma[t]) return t;
    var e = Ma[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Yf) return (ku[t] = e[n]);
    return t;
  }
  var qf = Kn("animationend"),
    Gf = Kn("animationiteration"),
    Xf = Kn("animationstart"),
    sv = Kn("transitionrun"),
    uv = Kn("transitionstart"),
    ov = Kn("transitioncancel"),
    Zf = Kn("transitionend"),
    Qf = new Map(),
    Yu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Yu.push("scrollEnd");
  function Ne(t, e) {
    (Qf.set(t, e), Xn(e, [t]));
  }
  var Kf = new WeakMap();
  function Me(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Kf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: rf(e) }), Kf.set(t, e), e);
    }
    return { value: t, source: e, stack: rf(e) };
  }
  var De = [],
    Da = 0,
    qu = 0;
  function Ul() {
    for (var t = Da, e = (qu = Da = 0); e < t; ) {
      var n = De[e];
      De[e++] = null;
      var i = De[e];
      De[e++] = null;
      var s = De[e];
      De[e++] = null;
      var r = De[e];
      if (((De[e++] = null), i !== null && s !== null)) {
        var d = i.pending;
        (d === null ? (s.next = s) : ((s.next = d.next), (d.next = s)),
          (i.pending = s));
      }
      r !== 0 && Pf(n, s, r);
    }
  }
  function Ll(t, e, n, i) {
    ((De[Da++] = t),
      (De[Da++] = e),
      (De[Da++] = n),
      (De[Da++] = i),
      (qu |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i));
  }
  function Gu(t, e, n, i) {
    return (Ll(t, e, n, i), Hl(t));
  }
  function Ra(t, e) {
    return (Ll(t, null, null, e), Hl(t));
  }
  function Pf(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      ((r.childLanes |= n),
        (i = r.alternate),
        i !== null && (i.childLanes |= n),
        r.tag === 22 &&
          ((t = r.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = r),
        (r = r.return));
    return t.tag === 3
      ? ((r = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - me(n)),
          (t = r.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function Hl(t) {
    if (50 < Qi) throw ((Qi = 0), (Fo = null), Error(o(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ca = {};
  function rv(t, e, n, i) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ye(t, e, n, i) {
    return new rv(t, e, n, i);
  }
  function Xu(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function $e(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = ye(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Jf(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function kl(t, e, n, i, s, r) {
    var d = 0;
    if (((i = t), typeof t == "function")) Xu(t) && (d = 1);
    else if (typeof t == "string")
      d = f1(t, n, tt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case it:
          return (
            (t = ye(31, n, e, s)),
            (t.elementType = it),
            (t.lanes = r),
            t
          );
        case z:
          return Pn(n.children, s, r, e);
        case L:
          ((d = 8), (s |= 24));
          break;
        case U:
          return (
            (t = ye(12, n, e, s | 2)),
            (t.elementType = U),
            (t.lanes = r),
            t
          );
        case Y:
          return ((t = ye(13, n, e, s)), (t.elementType = Y), (t.lanes = r), t);
        case ct:
          return (
            (t = ye(19, n, e, s)),
            (t.elementType = ct),
            (t.lanes = r),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case k:
              case H:
                d = 10;
                break t;
              case G:
                d = 9;
                break t;
              case q:
                d = 11;
                break t;
              case yt:
                d = 14;
                break t;
              case W:
                ((d = 16), (i = null));
                break t;
            }
          ((d = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (i = null));
      }
    return (
      (e = ye(d, n, e, s)),
      (e.elementType = t),
      (e.type = i),
      (e.lanes = r),
      e
    );
  }
  function Pn(t, e, n, i) {
    return ((t = ye(7, t, i, e)), (t.lanes = n), t);
  }
  function Zu(t, e, n) {
    return ((t = ye(6, t, null, e)), (t.lanes = n), t);
  }
  function Qu(t, e, n) {
    return (
      (e = ye(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Oa = [],
    wa = 0,
    Yl = null,
    ql = 0,
    Re = [],
    Ce = 0,
    Jn = null,
    Ie = 1,
    tn = "";
  function Fn(t, e) {
    ((Oa[wa++] = ql), (Oa[wa++] = Yl), (Yl = t), (ql = e));
  }
  function Ff(t, e, n) {
    ((Re[Ce++] = Ie), (Re[Ce++] = tn), (Re[Ce++] = Jn), (Jn = t));
    var i = Ie;
    t = tn;
    var s = 32 - me(i) - 1;
    ((i &= ~(1 << s)), (n += 1));
    var r = 32 - me(e) + s;
    if (30 < r) {
      var d = s - (s % 5);
      ((r = (i & ((1 << d) - 1)).toString(32)),
        (i >>= d),
        (s -= d),
        (Ie = (1 << (32 - me(e) + s)) | (n << s) | i),
        (tn = r + t));
    } else ((Ie = (1 << r) | (n << s) | i), (tn = t));
  }
  function Ku(t) {
    t.return !== null && (Fn(t, 1), Ff(t, 1, 0));
  }
  function Pu(t) {
    for (; t === Yl; )
      ((Yl = Oa[--wa]), (Oa[wa] = null), (ql = Oa[--wa]), (Oa[wa] = null));
    for (; t === Jn; )
      ((Jn = Re[--Ce]),
        (Re[Ce] = null),
        (tn = Re[--Ce]),
        (Re[Ce] = null),
        (Ie = Re[--Ce]),
        (Re[Ce] = null));
  }
  var ie = null,
    jt = null,
    bt = !1,
    Wn = null,
    Ye = !1,
    Ju = Error(o(519));
  function $n(t) {
    var e = Error(o(418, ""));
    throw (Ei(Me(e, t)), Ju);
  }
  function Wf(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[ee] = t), (e[ue] = i), n)) {
      case "dialog":
        (ht("cancel", e), ht("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Pi.length; n++) ht(Pi[n], e);
        break;
      case "source":
        ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (ht("error", e), ht("load", e));
        break;
      case "details":
        ht("toggle", e);
        break;
      case "input":
        (ht("invalid", e),
          hf(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ),
          Cl(e));
        break;
      case "select":
        ht("invalid", e);
        break;
      case "textarea":
        (ht("invalid", e), mf(e, i.value, i.defaultValue, i.children), Cl(e));
    }
    ((n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      mm(e.textContent, n)
        ? (i.popover != null && (ht("beforetoggle", e), ht("toggle", e)),
          i.onScroll != null && ht("scroll", e),
          i.onScrollEnd != null && ht("scrollend", e),
          i.onClick != null && (e.onclick = Ts),
          (e = !0))
        : (e = !1),
      e || $n(t));
  }
  function $f(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 5:
        case 13:
          Ye = !1;
          return;
        case 27:
        case 3:
          Ye = !0;
          return;
        default:
          ie = ie.return;
      }
  }
  function Ti(t) {
    if (t !== ie) return !1;
    if (!bt) return ($f(t), (bt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || hr(t.type, t.memoizedProps))),
        (n = !n)),
      n && jt && $n(t),
      $f(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                jt = Be(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        jt = null;
      }
    } else
      e === 27
        ? ((e = jt), Vn(t.type) ? ((t = yr), (yr = null), (jt = t)) : (jt = e))
        : (jt = ie ? Be(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ai() {
    ((jt = ie = null), (bt = !1));
  }
  function If() {
    var t = Wn;
    return (
      t !== null &&
        (fe === null ? (fe = t) : fe.push.apply(fe, t), (Wn = null)),
      t
    );
  }
  function Ei(t) {
    Wn === null ? (Wn = [t]) : Wn.push(t);
  }
  var Fu = B(null),
    In = null,
    en = null;
  function yn(t, e, n) {
    (Q(Fu, e._currentValue), (e._currentValue = n));
  }
  function nn(t) {
    ((t._currentValue = Fu.current), K(Fu));
  }
  function Wu(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function $u(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var d = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var y = r;
          r = s;
          for (var S = 0; S < e.length; S++)
            if (y.context === e[S]) {
              ((r.lanes |= n),
                (y = r.alternate),
                y !== null && (y.lanes |= n),
                Wu(r.return, n, t),
                i || (d = null));
              break t;
            }
          r = y.next;
        }
      } else if (s.tag === 18) {
        if (((d = s.return), d === null)) throw Error(o(341));
        ((d.lanes |= n),
          (r = d.alternate),
          r !== null && (r.lanes |= n),
          Wu(d, n, t),
          (d = null));
      } else d = s.child;
      if (d !== null) d.return = s;
      else
        for (d = s; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((s = d.sibling), s !== null)) {
            ((s.return = d.return), (d = s));
            break;
          }
          d = d.return;
        }
      s = d;
    }
  }
  function Mi(t, e, n, i) {
    t = null;
    for (var s = e, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var d = s.alternate;
        if (d === null) throw Error(o(387));
        if (((d = d.memoizedProps), d !== null)) {
          var y = s.type;
          pe(s.pendingProps.value, d.value) ||
            (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === he.current) {
        if (((d = s.alternate), d === null)) throw Error(o(387));
        d.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(tl) : (t = [tl]));
      }
      s = s.return;
    }
    (t !== null && $u(e, t, n, i), (e.flags |= 262144));
  }
  function Gl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!pe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ta(t) {
    ((In = t),
      (en = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function ne(t) {
    return th(In, t);
  }
  function Xl(t, e) {
    return (In === null && ta(t), th(t, e));
  }
  function th(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), en === null)) {
      if (t === null) throw Error(o(308));
      ((en = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else en = en.next = e;
    return n;
  }
  var cv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    fv = a.unstable_scheduleCallback,
    hv = a.unstable_NormalPriority,
    Yt = {
      $$typeof: H,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Iu() {
    return { controller: new cv(), data: new Map(), refCount: 0 };
  }
  function Di(t) {
    (t.refCount--,
      t.refCount === 0 &&
        fv(hv, function () {
          t.controller.abort();
        }));
  }
  var Ri = null,
    to = 0,
    Va = 0,
    za = null;
  function dv(t, e) {
    if (Ri === null) {
      var n = (Ri = []);
      ((to = 0),
        (Va = ar()),
        (za = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        }));
    }
    return (to++, e.then(eh, eh), e);
  }
  function eh() {
    if (--to === 0 && Ri !== null) {
      za !== null && (za.status = "fulfilled");
      var t = Ri;
      ((Ri = null), (Va = 0), (za = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function mv(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((i.status = "fulfilled"), (i.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      i
    );
  }
  var nh = V.S;
  V.S = function (t, e) {
    (typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      dv(t, e),
      nh !== null && nh(t, e));
  };
  var ea = B(null);
  function eo() {
    var t = ea.current;
    return t !== null ? t : Ct.pooledCache;
  }
  function Zl(t, e) {
    e === null ? Q(ea, ea.current) : Q(ea, e.pool);
  }
  function ah() {
    var t = eo();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var Ci = Error(o(460)),
    ih = Error(o(474)),
    Ql = Error(o(542)),
    no = { then: function () {} };
  function lh(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Kl() {}
  function sh(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Kl, Kl), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), oh(t), t);
      default:
        if (typeof e.status == "string") e.then(Kl, Kl);
        else {
          if (((t = Ct), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = i));
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = i));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), oh(t), t);
        }
        throw ((Oi = e), Ci);
    }
  }
  var Oi = null;
  function uh() {
    if (Oi === null) throw Error(o(459));
    var t = Oi;
    return ((Oi = null), t);
  }
  function oh(t) {
    if (t === Ci || t === Ql) throw Error(o(483));
  }
  var gn = !1;
  function ao(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function io(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function vn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (St & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Hl(t)),
        Pf(t, null, n),
        e
      );
    }
    return (Ll(t, i, e, n), Hl(t));
  }
  function wi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), tf(t, n));
    }
  }
  function lo(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (r === null ? (s = r = d) : (r = r.next = d), (n = n.next));
        } while (n !== null);
        r === null ? (s = r = e) : (r = r.next = e);
      } else s = r = e;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var so = !1;
  function Vi() {
    if (so) {
      var t = za;
      if (t !== null) throw t;
    }
  }
  function zi(t, e, n, i) {
    so = !1;
    var s = t.updateQueue;
    gn = !1;
    var r = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var S = y,
        D = S.next;
      ((S.next = null), d === null ? (r = D) : (d.next = D), (d = S));
      var j = t.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (y = j.lastBaseUpdate),
        y !== d &&
          (y === null ? (j.firstBaseUpdate = D) : (y.next = D),
          (j.lastBaseUpdate = S)));
    }
    if (r !== null) {
      var _ = s.baseState;
      ((d = 0), (j = D = S = null), (y = r));
      do {
        var R = y.lane & -536870913,
          C = R !== y.lane;
        if (C ? (pt & R) === R : (i & R) === R) {
          (R !== 0 && R === Va && (so = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var at = t,
              et = y;
            R = e;
            var Et = n;
            switch (et.tag) {
              case 1:
                if (((at = et.payload), typeof at == "function")) {
                  _ = at.call(Et, _, R);
                  break t;
                }
                _ = at;
                break t;
              case 3:
                at.flags = (at.flags & -65537) | 128;
              case 0:
                if (
                  ((at = et.payload),
                  (R = typeof at == "function" ? at.call(Et, _, R) : at),
                  R == null)
                )
                  break t;
                _ = g({}, _, R);
                break t;
              case 2:
                gn = !0;
            }
          }
          ((R = y.callback),
            R !== null &&
              ((t.flags |= 64),
              C && (t.flags |= 8192),
              (C = s.callbacks),
              C === null ? (s.callbacks = [R]) : C.push(R)));
        } else
          ((C = {
            lane: R,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            j === null ? ((D = j = C), (S = _)) : (j = j.next = C),
            (d |= R));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((C = y),
            (y = C.next),
            (C.next = null),
            (s.lastBaseUpdate = C),
            (s.shared.pending = null));
        }
      } while (!0);
      (j === null && (S = _),
        (s.baseState = S),
        (s.firstBaseUpdate = D),
        (s.lastBaseUpdate = j),
        r === null && (s.shared.lanes = 0),
        (Rn |= d),
        (t.lanes = d),
        (t.memoizedState = _));
    }
  }
  function rh(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function ch(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) rh(n[t], e);
  }
  var ja = B(null),
    Pl = B(0);
  function fh(t, e) {
    ((t = cn), Q(Pl, t), Q(ja, e), (cn = t | e.baseLanes));
  }
  function uo() {
    (Q(Pl, cn), Q(ja, ja.current));
  }
  function oo() {
    ((cn = Pl.current), K(ja), K(Pl));
  }
  var Sn = 0,
    ot = null,
    Tt = null,
    Lt = null,
    Jl = !1,
    Na = !1,
    na = !1,
    Fl = 0,
    ji = 0,
    _a = null,
    pv = 0;
  function Bt() {
    throw Error(o(321));
  }
  function ro(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!pe(t[n], e[n])) return !1;
    return !0;
  }
  function co(t, e, n, i, s, r) {
    return (
      (Sn = r),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (V.H = t === null || t.memoizedState === null ? Ph : Jh),
      (na = !1),
      (r = n(i, s)),
      (na = !1),
      Na && (r = dh(e, n, i, s)),
      hh(t),
      r
    );
  }
  function hh(t) {
    V.H = ns;
    var e = Tt !== null && Tt.next !== null;
    if (((Sn = 0), (Lt = Tt = ot = null), (Jl = !1), (ji = 0), (_a = null), e))
      throw Error(o(300));
    t === null ||
      Qt ||
      ((t = t.dependencies), t !== null && Gl(t) && (Qt = !0));
  }
  function dh(t, e, n, i) {
    ot = t;
    var s = 0;
    do {
      if ((Na && (_a = null), (ji = 0), (Na = !1), 25 <= s))
        throw Error(o(301));
      if (((s += 1), (Lt = Tt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((V.H = Tv), (r = e(n, i)));
    } while (Na);
    return r;
  }
  function yv() {
    var t = V.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ni(e) : e),
      (t = t.useState()[0]),
      (Tt !== null ? Tt.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function fo() {
    var t = Fl !== 0;
    return ((Fl = 0), t);
  }
  function ho(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function mo(t) {
    if (Jl) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Jl = !1;
    }
    ((Sn = 0), (Lt = Tt = ot = null), (Na = !1), (ji = Fl = 0), (_a = null));
  }
  function re() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Lt === null ? (ot.memoizedState = Lt = t) : (Lt = Lt.next = t), Lt);
  }
  function Ht() {
    if (Tt === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Tt.next;
    var e = Lt === null ? ot.memoizedState : Lt.next;
    if (e !== null) ((Lt = e), (Tt = t));
    else {
      if (t === null)
        throw ot.alternate === null ? Error(o(467)) : Error(o(310));
      ((Tt = t),
        (t = {
          memoizedState: Tt.memoizedState,
          baseState: Tt.baseState,
          baseQueue: Tt.baseQueue,
          queue: Tt.queue,
          next: null,
        }),
        Lt === null ? (ot.memoizedState = Lt = t) : (Lt = Lt.next = t));
    }
    return Lt;
  }
  function po() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ni(t) {
    var e = ji;
    return (
      (ji += 1),
      _a === null && (_a = []),
      (t = sh(_a, t, e)),
      (e = ot),
      (Lt === null ? e.memoizedState : Lt.next) === null &&
        ((e = e.alternate),
        (V.H = e === null || e.memoizedState === null ? Ph : Jh)),
      t
    );
  }
  function Wl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ni(t);
      if (t.$$typeof === H) return ne(t);
    }
    throw Error(o(438, String(t)));
  }
  function yo(t) {
    var e = null,
      n = ot.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = ot.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = po()), (ot.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = $;
    return (e.index++, n);
  }
  function an(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function $l(t) {
    var e = Ht();
    return go(e, Tt, t);
  }
  function go(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var d = s.next;
        ((s.next = r.next), (r.next = d));
      }
      ((e.baseQueue = s = r), (i.pending = null));
    }
    if (((r = t.baseState), s === null)) t.memoizedState = r;
    else {
      e = s.next;
      var y = (d = null),
        S = null,
        D = e,
        j = !1;
      do {
        var _ = D.lane & -536870913;
        if (_ !== D.lane ? (pt & _) === _ : (Sn & _) === _) {
          var R = D.revertLane;
          if (R === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              _ === Va && (j = !0));
          else if ((Sn & R) === R) {
            ((D = D.next), R === Va && (j = !0));
            continue;
          } else
            ((_ = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              S === null ? ((y = S = _), (d = r)) : (S = S.next = _),
              (ot.lanes |= R),
              (Rn |= R));
          ((_ = D.action),
            na && n(r, _),
            (r = D.hasEagerState ? D.eagerState : n(r, _)));
        } else
          ((R = {
            lane: _,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            S === null ? ((y = S = R), (d = r)) : (S = S.next = R),
            (ot.lanes |= _),
            (Rn |= _));
        D = D.next;
      } while (D !== null && D !== e);
      if (
        (S === null ? (d = r) : (S.next = y),
        !pe(r, t.memoizedState) && ((Qt = !0), j && ((n = za), n !== null)))
      )
        throw n;
      ((t.memoizedState = r),
        (t.baseState = d),
        (t.baseQueue = S),
        (i.lastRenderedState = r));
    }
    return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
  }
  function vo(t) {
    var e = Ht(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      r = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = (s = s.next);
      do ((r = t(r, d.action)), (d = d.next));
      while (d !== s);
      (pe(r, e.memoizedState) || (Qt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r));
    }
    return [r, i];
  }
  function mh(t, e, n) {
    var i = ot,
      s = Ht(),
      r = bt;
    if (r) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var d = !pe((Tt || s).memoizedState, n);
    (d && ((s.memoizedState = n), (Qt = !0)), (s = s.queue));
    var y = gh.bind(null, i, s, t);
    if (
      (_i(2048, 8, y, [t]),
      s.getSnapshot !== e || d || (Lt !== null && Lt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Ba(9, Il(), yh.bind(null, i, s, n, e), null),
        Ct === null)
      )
        throw Error(o(349));
      r || (Sn & 124) !== 0 || ph(i, e, n);
    }
    return n;
  }
  function ph(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ot.updateQueue),
      e === null
        ? ((e = po()), (ot.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function yh(t, e, n, i) {
    ((e.value = n), (e.getSnapshot = i), vh(e) && bh(t));
  }
  function gh(t, e, n) {
    return n(function () {
      vh(e) && bh(t);
    });
  }
  function vh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !pe(t, n);
    } catch {
      return !0;
    }
  }
  function bh(t) {
    var e = Ra(t, 2);
    e !== null && xe(e, t, 2);
  }
  function bo(t) {
    var e = re();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), na)) {
        dn(!0);
        try {
          n();
        } finally {
          dn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: an,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Sh(t, e, n, i) {
    return ((t.baseState = n), go(t, Tt, typeof i == "function" ? i : an));
  }
  function gv(t, e, n, i, s) {
    if (es(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          r.listeners.push(d);
        },
      };
      (V.T !== null ? n(!0) : (r.isTransition = !1),
        i(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), xh(e, r))
          : ((r.next = n.next), (e.pending = n.next = r)));
    }
  }
  function xh(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var r = V.T,
        d = {};
      V.T = d;
      try {
        var y = n(s, i),
          S = V.S;
        (S !== null && S(d, y), Th(t, e, y));
      } catch (D) {
        So(t, e, D);
      } finally {
        V.T = r;
      }
    } else
      try {
        ((r = n(s, i)), Th(t, e, r));
      } catch (D) {
        So(t, e, D);
      }
  }
  function Th(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Ah(t, e, i);
          },
          function (i) {
            return So(t, e, i);
          },
        )
      : Ah(t, e, n);
  }
  function Ah(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      Eh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), xh(t, n))));
  }
  function So(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do ((e.status = "rejected"), (e.reason = n), Eh(e), (e = e.next));
      while (e !== i);
    }
    t.action = null;
  }
  function Eh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Mh(t, e) {
    return e;
  }
  function Dh(t, e) {
    if (bt) {
      var n = Ct.formState;
      if (n !== null) {
        t: {
          var i = ot;
          if (bt) {
            if (jt) {
              e: {
                for (var s = jt, r = Ye; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (((s = Be(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((r = s.data), (s = r === "F!" || r === "F" ? s : null));
              }
              if (s) {
                ((jt = Be(s.nextSibling)), (i = s.data === "F!"));
                break t;
              }
            }
            $n(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = re()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mh,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = Zh.bind(null, ot, i)),
      (i.dispatch = n),
      (i = bo(!1)),
      (r = Mo.bind(null, ot, !1, i.queue)),
      (i = re()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = gv.bind(null, ot, s, r, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function Rh(t) {
    var e = Ht();
    return Ch(e, Tt, t);
  }
  function Ch(t, e, n) {
    if (
      ((e = go(t, e, Mh)[0]),
      (t = $l(an)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = Ni(e);
      } catch (d) {
        throw d === Ci ? Ql : d;
      }
    else i = e;
    e = Ht();
    var s = e.queue,
      r = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((ot.flags |= 2048), Ba(9, Il(), vv.bind(null, s, n), null)),
      [i, r, t]
    );
  }
  function vv(t, e) {
    t.action = e;
  }
  function Oh(t) {
    var e = Ht(),
      n = Tt;
    if (n !== null) return Ch(e, n, t);
    (Ht(), (e = e.memoizedState), (n = Ht()));
    var i = n.queue.dispatch;
    return ((n.memoizedState = t), [e, i, !1]);
  }
  function Ba(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = po()), (ot.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function Il() {
    return { destroy: void 0, resource: void 0 };
  }
  function wh() {
    return Ht().memoizedState;
  }
  function ts(t, e, n, i) {
    var s = re();
    ((i = i === void 0 ? null : i),
      (ot.flags |= t),
      (s.memoizedState = Ba(1 | e, Il(), n, i)));
  }
  function _i(t, e, n, i) {
    var s = Ht();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    Tt !== null && i !== null && ro(i, Tt.memoizedState.deps)
      ? (s.memoizedState = Ba(e, r, n, i))
      : ((ot.flags |= t), (s.memoizedState = Ba(1 | e, r, n, i)));
  }
  function Vh(t, e) {
    ts(8390656, 8, t, e);
  }
  function zh(t, e) {
    _i(2048, 8, t, e);
  }
  function jh(t, e) {
    return _i(4, 2, t, e);
  }
  function Nh(t, e) {
    return _i(4, 4, t, e);
  }
  function _h(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Bh(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), _i(4, 4, _h.bind(null, e, t), n));
  }
  function xo() {}
  function Uh(t, e) {
    var n = Ht();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && ro(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function Lh(t, e) {
    var n = Ht();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && ro(e, i[1])) return i[0];
    if (((i = t()), na)) {
      dn(!0);
      try {
        t();
      } finally {
        dn(!1);
      }
    }
    return ((n.memoizedState = [i, e]), i);
  }
  function To(t, e, n) {
    return n === void 0 || (Sn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Yd()), (ot.lanes |= t), (Rn |= t), n);
  }
  function Hh(t, e, n, i) {
    return pe(n, e)
      ? n
      : ja.current !== null
        ? ((t = To(t, n, i)), pe(t, e) || (Qt = !0), t)
        : (Sn & 42) === 0
          ? ((Qt = !0), (t.memoizedState = n))
          : ((t = Yd()), (ot.lanes |= t), (Rn |= t), e);
  }
  function kh(t, e, n, i, s) {
    var r = Z.p;
    Z.p = r !== 0 && 8 > r ? r : 8;
    var d = V.T,
      y = {};
    ((V.T = y), Mo(t, !1, e, n));
    try {
      var S = s(),
        D = V.S;
      if (
        (D !== null && D(y, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var j = mv(S, i);
        Bi(t, e, j, Se(t));
      } else Bi(t, e, i, Se(t));
    } catch (_) {
      Bi(t, e, { then: function () {}, status: "rejected", reason: _ }, Se());
    } finally {
      ((Z.p = r), (V.T = d));
    }
  }
  function bv() {}
  function Ao(t, e, n, i) {
    if (t.tag !== 5) throw Error(o(476));
    var s = Yh(t).queue;
    kh(
      t,
      s,
      e,
      P,
      n === null
        ? bv
        : function () {
            return (qh(t), n(i));
          },
    );
  }
  function Yh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: an,
        lastRenderedState: P,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: an,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function qh(t) {
    var e = Yh(t).next.queue;
    Bi(t, e, {}, Se());
  }
  function Eo() {
    return ne(tl);
  }
  function Gh() {
    return Ht().memoizedState;
  }
  function Xh() {
    return Ht().memoizedState;
  }
  function Sv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Se();
          t = vn(n);
          var i = bn(e, t, n);
          (i !== null && (xe(i, e, n), wi(i, e, n)),
            (e = { cache: Iu() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function xv(t, e, n) {
    var i = Se();
    ((n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      es(t)
        ? Qh(e, n)
        : ((n = Gu(t, e, n, i)), n !== null && (xe(n, t, i), Kh(n, e, i))));
  }
  function Zh(t, e, n) {
    var i = Se();
    Bi(t, e, n, i);
  }
  function Bi(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (es(t)) Qh(e, s);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var d = e.lastRenderedState,
            y = r(d, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), pe(y, d)))
            return (Ll(t, e, s, 0), Ct === null && Ul(), !1);
        } catch {}
      if (((n = Gu(t, e, s, i)), n !== null))
        return (xe(n, t, i), Kh(n, e, i), !0);
    }
    return !1;
  }
  function Mo(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: ar(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      es(t))
    ) {
      if (e) throw Error(o(479));
    } else ((e = Gu(t, n, i, 2)), e !== null && xe(e, t, 2));
  }
  function es(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function Qh(t, e) {
    Na = Jl = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function Kh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), tf(t, n));
    }
  }
  var ns = {
      readContext: ne,
      use: Wl,
      useCallback: Bt,
      useContext: Bt,
      useEffect: Bt,
      useImperativeHandle: Bt,
      useLayoutEffect: Bt,
      useInsertionEffect: Bt,
      useMemo: Bt,
      useReducer: Bt,
      useRef: Bt,
      useState: Bt,
      useDebugValue: Bt,
      useDeferredValue: Bt,
      useTransition: Bt,
      useSyncExternalStore: Bt,
      useId: Bt,
      useHostTransitionStatus: Bt,
      useFormState: Bt,
      useActionState: Bt,
      useOptimistic: Bt,
      useMemoCache: Bt,
      useCacheRefresh: Bt,
    },
    Ph = {
      readContext: ne,
      use: Wl,
      useCallback: function (t, e) {
        return ((re().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: ne,
      useEffect: Vh,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          ts(4194308, 4, _h.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return ts(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ts(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = re();
        e = e === void 0 ? null : e;
        var i = t();
        if (na) {
          dn(!0);
          try {
            t();
          } finally {
            dn(!1);
          }
        }
        return ((n.memoizedState = [i, e]), i);
      },
      useReducer: function (t, e, n) {
        var i = re();
        if (n !== void 0) {
          var s = n(e);
          if (na) {
            dn(!0);
            try {
              n(e);
            } finally {
              dn(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = xv.bind(null, ot, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = re();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = bo(t);
        var e = t.queue,
          n = Zh.bind(null, ot, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: xo,
      useDeferredValue: function (t, e) {
        var n = re();
        return To(n, t, e);
      },
      useTransition: function () {
        var t = bo(!1);
        return (
          (t = kh.bind(null, ot, t.queue, !0, !1)),
          (re().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = ot,
          s = re();
        if (bt) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Ct === null)) throw Error(o(349));
          (pt & 124) !== 0 || ph(i, e, n);
        }
        s.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (s.queue = r),
          Vh(gh.bind(null, i, r, t), [t]),
          (i.flags |= 2048),
          Ba(9, Il(), yh.bind(null, i, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = re(),
          e = Ct.identifierPrefix;
        if (bt) {
          var n = tn,
            i = Ie;
          ((n = (i & ~(1 << (32 - me(i) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = Fl++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»"));
        } else ((n = pv++), (e = "«" + e + "r" + n.toString(32) + "»"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Eo,
      useFormState: Dh,
      useActionState: Dh,
      useOptimistic: function (t) {
        var e = re();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Mo.bind(null, ot, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: yo,
      useCacheRefresh: function () {
        return (re().memoizedState = Sv.bind(null, ot));
      },
    },
    Jh = {
      readContext: ne,
      use: Wl,
      useCallback: Uh,
      useContext: ne,
      useEffect: zh,
      useImperativeHandle: Bh,
      useInsertionEffect: jh,
      useLayoutEffect: Nh,
      useMemo: Lh,
      useReducer: $l,
      useRef: wh,
      useState: function () {
        return $l(an);
      },
      useDebugValue: xo,
      useDeferredValue: function (t, e) {
        var n = Ht();
        return Hh(n, Tt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = $l(an)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : Ni(t), e];
      },
      useSyncExternalStore: mh,
      useId: Gh,
      useHostTransitionStatus: Eo,
      useFormState: Rh,
      useActionState: Rh,
      useOptimistic: function (t, e) {
        var n = Ht();
        return Sh(n, Tt, t, e);
      },
      useMemoCache: yo,
      useCacheRefresh: Xh,
    },
    Tv = {
      readContext: ne,
      use: Wl,
      useCallback: Uh,
      useContext: ne,
      useEffect: zh,
      useImperativeHandle: Bh,
      useInsertionEffect: jh,
      useLayoutEffect: Nh,
      useMemo: Lh,
      useReducer: vo,
      useRef: wh,
      useState: function () {
        return vo(an);
      },
      useDebugValue: xo,
      useDeferredValue: function (t, e) {
        var n = Ht();
        return Tt === null ? To(n, t, e) : Hh(n, Tt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = vo(an)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : Ni(t), e];
      },
      useSyncExternalStore: mh,
      useId: Gh,
      useHostTransitionStatus: Eo,
      useFormState: Oh,
      useActionState: Oh,
      useOptimistic: function (t, e) {
        var n = Ht();
        return Tt !== null
          ? Sh(n, Tt, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: yo,
      useCacheRefresh: Xh,
    },
    Ua = null,
    Ui = 0;
  function as(t) {
    var e = Ui;
    return ((Ui += 1), Ua === null && (Ua = []), sh(Ua, t, e));
  }
  function Li(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function is(t, e) {
    throw e.$$typeof === b
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Fh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Wh(t) {
    function e(E, A) {
      if (t) {
        var M = E.deletions;
        M === null ? ((E.deletions = [A]), (E.flags |= 16)) : M.push(A);
      }
    }
    function n(E, A) {
      if (!t) return null;
      for (; A !== null; ) (e(E, A), (A = A.sibling));
      return null;
    }
    function i(E) {
      for (var A = new Map(); E !== null; )
        (E.key !== null ? A.set(E.key, E) : A.set(E.index, E), (E = E.sibling));
      return A;
    }
    function s(E, A) {
      return ((E = $e(E, A)), (E.index = 0), (E.sibling = null), E);
    }
    function r(E, A, M) {
      return (
        (E.index = M),
        t
          ? ((M = E.alternate),
            M !== null
              ? ((M = M.index), M < A ? ((E.flags |= 67108866), A) : M)
              : ((E.flags |= 67108866), A))
          : ((E.flags |= 1048576), A)
      );
    }
    function d(E) {
      return (t && E.alternate === null && (E.flags |= 67108866), E);
    }
    function y(E, A, M, N) {
      return A === null || A.tag !== 6
        ? ((A = Zu(M, E.mode, N)), (A.return = E), A)
        : ((A = s(A, M)), (A.return = E), A);
    }
    function S(E, A, M, N) {
      var J = M.type;
      return J === z
        ? j(E, A, M.props.children, N, M.key)
        : A !== null &&
            (A.elementType === J ||
              (typeof J == "object" &&
                J !== null &&
                J.$$typeof === W &&
                Fh(J) === A.type))
          ? ((A = s(A, M.props)), Li(A, M), (A.return = E), A)
          : ((A = kl(M.type, M.key, M.props, null, E.mode, N)),
            Li(A, M),
            (A.return = E),
            A);
    }
    function D(E, A, M, N) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== M.containerInfo ||
        A.stateNode.implementation !== M.implementation
        ? ((A = Qu(M, E.mode, N)), (A.return = E), A)
        : ((A = s(A, M.children || [])), (A.return = E), A);
    }
    function j(E, A, M, N, J) {
      return A === null || A.tag !== 7
        ? ((A = Pn(M, E.mode, N, J)), (A.return = E), A)
        : ((A = s(A, M)), (A.return = E), A);
    }
    function _(E, A, M) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return ((A = Zu("" + A, E.mode, M)), (A.return = E), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case x:
            return (
              (M = kl(A.type, A.key, A.props, null, E.mode, M)),
              Li(M, A),
              (M.return = E),
              M
            );
          case O:
            return ((A = Qu(A, E.mode, M)), (A.return = E), A);
          case W:
            var N = A._init;
            return ((A = N(A._payload)), _(E, A, M));
        }
        if (Rt(A) || mt(A))
          return ((A = Pn(A, E.mode, M, null)), (A.return = E), A);
        if (typeof A.then == "function") return _(E, as(A), M);
        if (A.$$typeof === H) return _(E, Xl(E, A), M);
        is(E, A);
      }
      return null;
    }
    function R(E, A, M, N) {
      var J = A !== null ? A.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return J !== null ? null : y(E, A, "" + M, N);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case x:
            return M.key === J ? S(E, A, M, N) : null;
          case O:
            return M.key === J ? D(E, A, M, N) : null;
          case W:
            return ((J = M._init), (M = J(M._payload)), R(E, A, M, N));
        }
        if (Rt(M) || mt(M)) return J !== null ? null : j(E, A, M, N, null);
        if (typeof M.then == "function") return R(E, A, as(M), N);
        if (M.$$typeof === H) return R(E, A, Xl(E, M), N);
        is(E, M);
      }
      return null;
    }
    function C(E, A, M, N, J) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return ((E = E.get(M) || null), y(A, E, "" + N, J));
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case x:
            return (
              (E = E.get(N.key === null ? M : N.key) || null),
              S(A, E, N, J)
            );
          case O:
            return (
              (E = E.get(N.key === null ? M : N.key) || null),
              D(A, E, N, J)
            );
          case W:
            var rt = N._init;
            return ((N = rt(N._payload)), C(E, A, M, N, J));
        }
        if (Rt(N) || mt(N))
          return ((E = E.get(M) || null), j(A, E, N, J, null));
        if (typeof N.then == "function") return C(E, A, M, as(N), J);
        if (N.$$typeof === H) return C(E, A, M, Xl(A, N), J);
        is(A, N);
      }
      return null;
    }
    function at(E, A, M, N) {
      for (
        var J = null, rt = null, I = A, nt = (A = 0), Pt = null;
        I !== null && nt < M.length;
        nt++
      ) {
        I.index > nt ? ((Pt = I), (I = null)) : (Pt = I.sibling);
        var vt = R(E, I, M[nt], N);
        if (vt === null) {
          I === null && (I = Pt);
          break;
        }
        (t && I && vt.alternate === null && e(E, I),
          (A = r(vt, A, nt)),
          rt === null ? (J = vt) : (rt.sibling = vt),
          (rt = vt),
          (I = Pt));
      }
      if (nt === M.length) return (n(E, I), bt && Fn(E, nt), J);
      if (I === null) {
        for (; nt < M.length; nt++)
          ((I = _(E, M[nt], N)),
            I !== null &&
              ((A = r(I, A, nt)),
              rt === null ? (J = I) : (rt.sibling = I),
              (rt = I)));
        return (bt && Fn(E, nt), J);
      }
      for (I = i(I); nt < M.length; nt++)
        ((Pt = C(I, E, nt, M[nt], N)),
          Pt !== null &&
            (t &&
              Pt.alternate !== null &&
              I.delete(Pt.key === null ? nt : Pt.key),
            (A = r(Pt, A, nt)),
            rt === null ? (J = Pt) : (rt.sibling = Pt),
            (rt = Pt)));
      return (
        t &&
          I.forEach(function (Bn) {
            return e(E, Bn);
          }),
        bt && Fn(E, nt),
        J
      );
    }
    function et(E, A, M, N) {
      if (M == null) throw Error(o(151));
      for (
        var J = null, rt = null, I = A, nt = (A = 0), Pt = null, vt = M.next();
        I !== null && !vt.done;
        nt++, vt = M.next()
      ) {
        I.index > nt ? ((Pt = I), (I = null)) : (Pt = I.sibling);
        var Bn = R(E, I, vt.value, N);
        if (Bn === null) {
          I === null && (I = Pt);
          break;
        }
        (t && I && Bn.alternate === null && e(E, I),
          (A = r(Bn, A, nt)),
          rt === null ? (J = Bn) : (rt.sibling = Bn),
          (rt = Bn),
          (I = Pt));
      }
      if (vt.done) return (n(E, I), bt && Fn(E, nt), J);
      if (I === null) {
        for (; !vt.done; nt++, vt = M.next())
          ((vt = _(E, vt.value, N)),
            vt !== null &&
              ((A = r(vt, A, nt)),
              rt === null ? (J = vt) : (rt.sibling = vt),
              (rt = vt)));
        return (bt && Fn(E, nt), J);
      }
      for (I = i(I); !vt.done; nt++, vt = M.next())
        ((vt = C(I, E, nt, vt.value, N)),
          vt !== null &&
            (t &&
              vt.alternate !== null &&
              I.delete(vt.key === null ? nt : vt.key),
            (A = r(vt, A, nt)),
            rt === null ? (J = vt) : (rt.sibling = vt),
            (rt = vt)));
      return (
        t &&
          I.forEach(function (A1) {
            return e(E, A1);
          }),
        bt && Fn(E, nt),
        J
      );
    }
    function Et(E, A, M, N) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === z &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case x:
            t: {
              for (var J = M.key; A !== null; ) {
                if (A.key === J) {
                  if (((J = M.type), J === z)) {
                    if (A.tag === 7) {
                      (n(E, A.sibling),
                        (N = s(A, M.props.children)),
                        (N.return = E),
                        (E = N));
                      break t;
                    }
                  } else if (
                    A.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === W &&
                      Fh(J) === A.type)
                  ) {
                    (n(E, A.sibling),
                      (N = s(A, M.props)),
                      Li(N, M),
                      (N.return = E),
                      (E = N));
                    break t;
                  }
                  n(E, A);
                  break;
                } else e(E, A);
                A = A.sibling;
              }
              M.type === z
                ? ((N = Pn(M.props.children, E.mode, N, M.key)),
                  (N.return = E),
                  (E = N))
                : ((N = kl(M.type, M.key, M.props, null, E.mode, N)),
                  Li(N, M),
                  (N.return = E),
                  (E = N));
            }
            return d(E);
          case O:
            t: {
              for (J = M.key; A !== null; ) {
                if (A.key === J)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === M.containerInfo &&
                    A.stateNode.implementation === M.implementation
                  ) {
                    (n(E, A.sibling),
                      (N = s(A, M.children || [])),
                      (N.return = E),
                      (E = N));
                    break t;
                  } else {
                    n(E, A);
                    break;
                  }
                else e(E, A);
                A = A.sibling;
              }
              ((N = Qu(M, E.mode, N)), (N.return = E), (E = N));
            }
            return d(E);
          case W:
            return ((J = M._init), (M = J(M._payload)), Et(E, A, M, N));
        }
        if (Rt(M)) return at(E, A, M, N);
        if (mt(M)) {
          if (((J = mt(M)), typeof J != "function")) throw Error(o(150));
          return ((M = J.call(M)), et(E, A, M, N));
        }
        if (typeof M.then == "function") return Et(E, A, as(M), N);
        if (M.$$typeof === H) return Et(E, A, Xl(E, M), N);
        is(E, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          A !== null && A.tag === 6
            ? (n(E, A.sibling), (N = s(A, M)), (N.return = E), (E = N))
            : (n(E, A), (N = Zu(M, E.mode, N)), (N.return = E), (E = N)),
          d(E))
        : n(E, A);
    }
    return function (E, A, M, N) {
      try {
        Ui = 0;
        var J = Et(E, A, M, N);
        return ((Ua = null), J);
      } catch (I) {
        if (I === Ci || I === Ql) throw I;
        var rt = ye(29, I, null, E.mode);
        return ((rt.lanes = N), (rt.return = E), rt);
      }
    };
  }
  var La = Wh(!0),
    $h = Wh(!1),
    Oe = B(null),
    qe = null;
  function xn(t) {
    var e = t.alternate;
    (Q(qt, qt.current & 1),
      Q(Oe, t),
      qe === null &&
        (e === null || ja.current !== null || e.memoizedState !== null) &&
        (qe = t));
  }
  function Ih(t) {
    if (t.tag === 22) {
      if ((Q(qt, qt.current), Q(Oe, t), qe === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (qe = t);
      }
    } else Tn();
  }
  function Tn() {
    (Q(qt, qt.current), Q(Oe, Oe.current));
  }
  function ln(t) {
    (K(Oe), qe === t && (qe = null), K(qt));
  }
  var qt = B(0);
  function ls(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || pr(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function Do(t, e, n, i) {
    ((e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : g({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Ro = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = Se(),
        s = vn(i);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = bn(t, s, i)),
        e !== null && (xe(e, t, i), wi(e, t, i)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = Se(),
        s = vn(i);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = bn(t, s, i)),
        e !== null && (xe(e, t, i), wi(e, t, i)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Se(),
        i = vn(n);
      ((i.tag = 2),
        e != null && (i.callback = e),
        (e = bn(t, i, n)),
        e !== null && (xe(e, t, n), wi(e, t, n)));
    },
  };
  function td(t, e, n, i, s, r, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, r, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Si(n, i) || !Si(s, r)
          : !0
    );
  }
  function ed(t, e, n, i) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && Ro.enqueueReplaceState(e, e.state, null));
  }
  function aa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = g({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  var ss =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function nd(t) {
    ss(t);
  }
  function ad(t) {
    console.error(t);
  }
  function id(t) {
    ss(t);
  }
  function us(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function ld(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Co(t, e, n) {
    return (
      (n = vn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        us(t, e);
      }),
      n
    );
  }
  function sd(t) {
    return ((t = vn(t)), (t.tag = 3), t);
  }
  function ud(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      ((t.payload = function () {
        return s(r);
      }),
        (t.callback = function () {
          ld(e, n, i);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        (ld(e, n, i),
          typeof s != "function" &&
            (Cn === null ? (Cn = new Set([this])) : Cn.add(this)));
        var y = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function Av(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Mi(e, n, s, !0),
        (n = Oe.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              qe === null ? $o() : n.alternate === null && Nt === 0 && (Nt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === no
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  tr(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === no
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  tr(t, i, s)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return (tr(t, i, s), $o(), !1);
    }
    if (bt)
      return (
        (e = Oe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== Ju && ((t = Error(o(422), { cause: i })), Ei(Me(t, n))))
          : (i !== Ju && ((e = Error(o(423), { cause: i })), Ei(Me(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Me(i, n)),
            (s = Co(t.stateNode, i, s)),
            lo(t, s),
            Nt !== 4 && (Nt = 2)),
        !1
      );
    var r = Error(o(520), { cause: i });
    if (
      ((r = Me(r, n)),
      Zi === null ? (Zi = [r]) : Zi.push(r),
      Nt !== 4 && (Nt = 2),
      e === null)
    )
      return !0;
    ((i = Me(i, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Co(n.stateNode, i, t)),
            lo(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Cn === null || !Cn.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = sd(s)),
              ud(s, t, n, i),
              lo(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var od = Error(o(461)),
    Qt = !1;
  function Ft(t, e, n, i) {
    e.child = t === null ? $h(e, null, n, i) : La(e, t.child, n, i);
  }
  function rd(t, e, n, i, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in i) {
      var d = {};
      for (var y in i) y !== "ref" && (d[y] = i[y]);
    } else d = i;
    return (
      ta(e),
      (i = co(t, e, n, d, r, s)),
      (y = fo()),
      t !== null && !Qt
        ? (ho(t, e, s), sn(t, e, s))
        : (bt && y && Ku(e), (e.flags |= 1), Ft(t, e, i, s), e.child)
    );
  }
  function cd(t, e, n, i, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !Xu(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), fd(t, e, r, i, s))
        : ((t = kl(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !Bo(t, s))) {
      var d = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Si), n(d, i) && t.ref === e.ref)
      )
        return sn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = $e(r, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function fd(t, e, n, i, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Si(r, i) && t.ref === e.ref)
        if (((Qt = !1), (e.pendingProps = i = r), Bo(t, s)))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else return ((e.lanes = t.lanes), sn(t, e, s));
    }
    return Oo(t, e, n, i, s);
  }
  function hd(t, e, n) {
    var i = e.pendingProps,
      s = i.children,
      r = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((i = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, r = 0; s !== null; )
            ((r = r | s.lanes | s.childLanes), (s = s.sibling));
          e.childLanes = r & ~i;
        } else ((e.childLanes = 0), (e.child = null));
        return dd(t, e, i, n);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Zl(e, r !== null ? r.cachePool : null),
          r !== null ? fh(e, r) : uo(),
          Ih(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          dd(t, e, r !== null ? r.baseLanes | n : n, n)
        );
    } else
      r !== null
        ? (Zl(e, r.cachePool), fh(e, r), Tn(), (e.memoizedState = null))
        : (t !== null && Zl(e, null), uo(), Tn());
    return (Ft(t, e, s, n), e.child);
  }
  function dd(t, e, n, i) {
    var s = eo();
    return (
      (s = s === null ? null : { parent: Yt._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && Zl(e, null),
      uo(),
      Ih(e),
      t !== null && Mi(t, e, i, !0),
      null
    );
  }
  function os(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Oo(t, e, n, i, s) {
    return (
      ta(e),
      (n = co(t, e, n, i, void 0, s)),
      (i = fo()),
      t !== null && !Qt
        ? (ho(t, e, s), sn(t, e, s))
        : (bt && i && Ku(e), (e.flags |= 1), Ft(t, e, n, s), e.child)
    );
  }
  function md(t, e, n, i, s, r) {
    return (
      ta(e),
      (e.updateQueue = null),
      (n = dh(e, i, n, s)),
      hh(t),
      (i = fo()),
      t !== null && !Qt
        ? (ho(t, e, r), sn(t, e, r))
        : (bt && i && Ku(e), (e.flags |= 1), Ft(t, e, n, r), e.child)
    );
  }
  function pd(t, e, n, i, s) {
    if ((ta(e), e.stateNode === null)) {
      var r = Ca,
        d = n.contextType;
      (typeof d == "object" && d !== null && (r = ne(d)),
        (r = new n(i, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Ro),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = i),
        (r.state = e.memoizedState),
        (r.refs = {}),
        ao(e),
        (d = n.contextType),
        (r.context = typeof d == "object" && d !== null ? ne(d) : Ca),
        (r.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Do(e, n, d, i), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((d = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          d !== r.state && Ro.enqueueReplaceState(r, r.state, null),
          zi(e, i, r, s),
          Vi(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0));
    } else if (t === null) {
      r = e.stateNode;
      var y = e.memoizedProps,
        S = aa(n, y);
      r.props = S;
      var D = r.context,
        j = n.contextType;
      ((d = Ca), typeof j == "object" && j !== null && (d = ne(j)));
      var _ = n.getDerivedStateFromProps;
      ((j =
        typeof _ == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (y = e.pendingProps !== y),
        j ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((y || D !== d) && ed(e, r, i, d)),
        (gn = !1));
      var R = e.memoizedState;
      ((r.state = R),
        zi(e, i, r, s),
        Vi(),
        (D = e.memoizedState),
        y || R !== D || gn
          ? (typeof _ == "function" && (Do(e, n, _, i), (D = e.memoizedState)),
            (S = gn || td(e, n, S, i, R, D, d))
              ? (j ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = D)),
            (r.props = i),
            (r.state = D),
            (r.context = d),
            (i = S))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1)));
    } else {
      ((r = e.stateNode),
        io(t, e),
        (d = e.memoizedProps),
        (j = aa(n, d)),
        (r.props = j),
        (_ = e.pendingProps),
        (R = r.context),
        (D = n.contextType),
        (S = Ca),
        typeof D == "object" && D !== null && (S = ne(D)),
        (y = n.getDerivedStateFromProps),
        (D =
          typeof y == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((d !== _ || R !== S) && ed(e, r, i, S)),
        (gn = !1),
        (R = e.memoizedState),
        (r.state = R),
        zi(e, i, r, s),
        Vi());
      var C = e.memoizedState;
      d !== _ ||
      R !== C ||
      gn ||
      (t !== null && t.dependencies !== null && Gl(t.dependencies))
        ? (typeof y == "function" && (Do(e, n, y, i), (C = e.memoizedState)),
          (j =
            gn ||
            td(e, n, j, i, R, C, S) ||
            (t !== null && t.dependencies !== null && Gl(t.dependencies)))
            ? (D ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(i, C, S),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(i, C, S)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (d === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = C)),
          (r.props = i),
          (r.state = C),
          (r.context = S),
          (i = j))
        : (typeof r.componentDidUpdate != "function" ||
            (d === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (r = i),
      os(t, e),
      (i = (e.flags & 128) !== 0),
      r || i
        ? ((r = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = La(e, t.child, null, s)),
              (e.child = La(e, null, n, s)))
            : Ft(t, e, n, s),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = sn(t, e, s)),
      t
    );
  }
  function yd(t, e, n, i) {
    return (Ai(), (e.flags |= 256), Ft(t, e, n, i), e.child);
  }
  var wo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Vo(t) {
    return { baseLanes: t, cachePool: ah() };
  }
  function zo(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= we), t);
  }
  function gd(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      r = (e.flags & 128) !== 0,
      d;
    if (
      ((d = r) ||
        (d =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      d && ((s = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (bt) {
        if ((s ? xn(e) : Tn(), bt)) {
          var y = jt,
            S;
          if ((S = y)) {
            t: {
              for (S = y, y = Ye; S.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break t;
                }
                if (((S = Be(S.nextSibling)), S === null)) {
                  y = null;
                  break t;
                }
              }
              y = S;
            }
            y !== null
              ? ((e.memoizedState = {
                  dehydrated: y,
                  treeContext: Jn !== null ? { id: Ie, overflow: tn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = ye(18, null, null, 0)),
                (S.stateNode = y),
                (S.return = e),
                (e.child = S),
                (ie = e),
                (jt = null),
                (S = !0))
              : (S = !1);
          }
          S || $n(e);
        }
        if (
          ((y = e.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return (pr(y) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        ln(e);
      }
      return (
        (y = i.children),
        (i = i.fallback),
        s
          ? (Tn(),
            (s = e.mode),
            (y = rs({ mode: "hidden", children: y }, s)),
            (i = Pn(i, s, n, null)),
            (y.return = e),
            (i.return = e),
            (y.sibling = i),
            (e.child = y),
            (s = e.child),
            (s.memoizedState = Vo(n)),
            (s.childLanes = zo(t, d, n)),
            (e.memoizedState = wo),
            i)
          : (xn(e), jo(e, y))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((y = S.dehydrated), y !== null))
    ) {
      if (r)
        e.flags & 256
          ? (xn(e), (e.flags &= -257), (e = No(t, e, n)))
          : e.memoizedState !== null
            ? (Tn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Tn(),
              (s = i.fallback),
              (y = e.mode),
              (i = rs({ mode: "visible", children: i.children }, y)),
              (s = Pn(s, y, n, null)),
              (s.flags |= 2),
              (i.return = e),
              (s.return = e),
              (i.sibling = s),
              (e.child = i),
              La(e, t.child, null, n),
              (i = e.child),
              (i.memoizedState = Vo(n)),
              (i.childLanes = zo(t, d, n)),
              (e.memoizedState = wo),
              (e = s));
      else if ((xn(e), pr(y))) {
        if (((d = y.nextSibling && y.nextSibling.dataset), d)) var D = d.dgst;
        ((d = D),
          (i = Error(o(419))),
          (i.stack = ""),
          (i.digest = d),
          Ei({ value: i, source: null, stack: null }),
          (e = No(t, e, n)));
      } else if (
        (Qt || Mi(t, e, n, !1), (d = (n & t.childLanes) !== 0), Qt || d)
      ) {
        if (
          ((d = Ct),
          d !== null &&
            ((i = n & -n),
            (i = (i & 42) !== 0 ? 1 : pu(i)),
            (i = (i & (d.suspendedLanes | n)) !== 0 ? 0 : i),
            i !== 0 && i !== S.retryLane))
        )
          throw ((S.retryLane = i), Ra(t, i), xe(d, t, i), od);
        (y.data === "$?" || $o(), (e = No(t, e, n)));
      } else
        y.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (jt = Be(y.nextSibling)),
            (ie = e),
            (bt = !0),
            (Wn = null),
            (Ye = !1),
            t !== null &&
              ((Re[Ce++] = Ie),
              (Re[Ce++] = tn),
              (Re[Ce++] = Jn),
              (Ie = t.id),
              (tn = t.overflow),
              (Jn = e)),
            (e = jo(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Tn(),
        (s = i.fallback),
        (y = e.mode),
        (S = t.child),
        (D = S.sibling),
        (i = $e(S, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = S.subtreeFlags & 65011712),
        D !== null ? (s = $e(D, s)) : ((s = Pn(s, y, n, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        (i = s),
        (s = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = Vo(n))
          : ((S = y.cachePool),
            S !== null
              ? ((D = Yt._currentValue),
                (S = S.parent !== D ? { parent: D, pool: D } : S))
              : (S = ah()),
            (y = { baseLanes: y.baseLanes | n, cachePool: S })),
        (s.memoizedState = y),
        (s.childLanes = zo(t, d, n)),
        (e.memoizedState = wo),
        i)
      : (xn(e),
        (n = t.child),
        (t = n.sibling),
        (n = $e(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((d = e.deletions),
          d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function jo(t, e) {
    return (
      (e = rs({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function rs(t, e) {
    return (
      (t = ye(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function No(t, e, n) {
    return (
      La(e, t.child, null, n),
      (t = jo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function vd(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    (i !== null && (i.lanes |= e), Wu(t.return, e, n));
  }
  function _o(t, e, n, i, s) {
    var r = t.memoizedState;
    r === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((r.isBackwards = e),
        (r.rendering = null),
        (r.renderingStartTime = 0),
        (r.last = i),
        (r.tail = n),
        (r.tailMode = s));
  }
  function bd(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      r = i.tail;
    if ((Ft(t, e, i.children, n), (i = qt.current), (i & 2) !== 0))
      ((i = (i & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && vd(t, n, e);
          else if (t.tag === 19) vd(t, n, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      i &= 1;
    }
    switch ((Q(qt, i), s)) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate),
            t !== null && ls(t) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          _o(e, !1, s, n, r));
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && ls(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        _o(e, !0, n, null, r);
        break;
      case "together":
        _o(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function sn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Rn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Mi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = $e(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = $e(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Bo(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Gl(t)));
  }
  function Ev(t, e, n) {
    switch (e.tag) {
      case 3:
        (wt(e, e.stateNode.containerInfo),
          yn(e, Yt, t.memoizedState.cache),
          Ai());
        break;
      case 27:
      case 5:
        cu(e);
        break;
      case 4:
        wt(e, e.stateNode.containerInfo);
        break;
      case 10:
        yn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (xn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? gd(t, e, n)
              : (xn(e), (t = sn(t, e, n)), t !== null ? t.sibling : null);
        xn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (Mi(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return bd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Q(qt, qt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), hd(t, e, n));
      case 24:
        yn(e, Yt, t.memoizedState.cache);
    }
    return sn(t, e, n);
  }
  function Sd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Qt = !0;
      else {
        if (!Bo(t, n) && (e.flags & 128) === 0) return ((Qt = !1), Ev(t, e, n));
        Qt = (t.flags & 131072) !== 0;
      }
    else ((Qt = !1), bt && (e.flags & 1048576) !== 0 && Ff(e, ql, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            s = i._init;
          if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
            Xu(i)
              ? ((t = aa(i, t)), (e.tag = 1), (e = pd(null, e, i, t, n)))
              : ((e.tag = 0), (e = Oo(null, e, i, t, n)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === q)) {
                ((e.tag = 11), (e = rd(null, e, i, t, n)));
                break t;
              } else if (s === yt) {
                ((e.tag = 14), (e = cd(null, e, i, t, n)));
                break t;
              }
            }
            throw ((e = Xt(i) || i), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return Oo(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((i = e.type), (s = aa(i, e.pendingProps)), pd(t, e, i, s, n));
      case 3:
        t: {
          if ((wt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          i = e.pendingProps;
          var r = e.memoizedState;
          ((s = r.element), io(t, e), zi(e, i, null, n));
          var d = e.memoizedState;
          if (
            ((i = d.cache),
            yn(e, Yt, i),
            i !== r.cache && $u(e, [Yt], n, !0),
            Vi(),
            (i = d.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: i, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = yd(t, e, i, n);
              break t;
            } else if (i !== s) {
              ((s = Me(Error(o(424)), e)), Ei(s), (e = yd(t, e, i, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  jt = Be(t.firstChild),
                  ie = e,
                  bt = !0,
                  Wn = null,
                  Ye = !0,
                  n = $h(e, null, i, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Ai(), i === s)) {
              e = sn(t, e, n);
              break t;
            }
            Ft(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          os(t, e),
          t === null
            ? (n = Em(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : bt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = As(lt.current).createElement(n)),
                (i[ee] = e),
                (i[ue] = t),
                $t(i, n, t),
                Zt(i),
                (e.stateNode = i))
            : (e.memoizedState = Em(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          cu(e),
          t === null &&
            bt &&
            ((i = e.stateNode = xm(e.type, e.pendingProps, lt.current)),
            (ie = e),
            (Ye = !0),
            (s = jt),
            Vn(e.type) ? ((yr = s), (jt = Be(i.firstChild))) : (jt = s)),
          Ft(t, e, e.pendingProps.children, n),
          os(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            bt &&
            ((s = i = jt) &&
              ((i = $v(i, e.type, e.pendingProps, Ye)),
              i !== null
                ? ((e.stateNode = i),
                  (ie = e),
                  (jt = Be(i.firstChild)),
                  (Ye = !1),
                  (s = !0))
                : (s = !1)),
            s || $n(e)),
          cu(e),
          (s = e.type),
          (r = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (i = r.children),
          hr(s, r) ? (i = null) : d !== null && hr(s, d) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = co(t, e, yv, null, null, n)), (tl._currentValue = s)),
          os(t, e),
          Ft(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            bt &&
            ((t = n = jt) &&
              ((n = Iv(n, e.pendingProps, Ye)),
              n !== null
                ? ((e.stateNode = n), (ie = e), (jt = null), (t = !0))
                : (t = !1)),
            t || $n(e)),
          null
        );
      case 13:
        return gd(t, e, n);
      case 4:
        return (
          wt(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = La(e, null, i, n)) : Ft(t, e, i, n),
          e.child
        );
      case 11:
        return rd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (Ft(t, e, e.pendingProps, n), e.child);
      case 8:
        return (Ft(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (Ft(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (i = e.pendingProps),
          yn(e, e.type, i.value),
          Ft(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          ta(e),
          (s = ne(s)),
          (i = i(s)),
          (e.flags |= 1),
          Ft(t, e, i, n),
          e.child
        );
      case 14:
        return cd(t, e, e.type, e.pendingProps, n);
      case 15:
        return fd(t, e, e.type, e.pendingProps, n);
      case 19:
        return bd(t, e, n);
      case 31:
        return (
          (i = e.pendingProps),
          (n = e.mode),
          (i = { mode: i.mode, children: i.children }),
          t === null
            ? ((n = rs(i, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = $e(t.child, i)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return hd(t, e, n);
      case 24:
        return (
          ta(e),
          (i = ne(Yt)),
          t === null
            ? ((s = eo()),
              s === null &&
                ((s = Ct),
                (r = Iu()),
                (s.pooledCache = r),
                r.refCount++,
                r !== null && (s.pooledCacheLanes |= n),
                (s = r)),
              (e.memoizedState = { parent: i, cache: s }),
              ao(e),
              yn(e, Yt, s))
            : ((t.lanes & n) !== 0 && (io(t, e), zi(e, null, null, n), Vi()),
              (s = t.memoizedState),
              (r = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  yn(e, Yt, i))
                : ((i = r.cache),
                  yn(e, Yt, i),
                  i !== s.cache && $u(e, [Yt], n, !0))),
          Ft(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function un(t) {
    t.flags |= 4;
  }
  function xd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Om(e))) {
      if (
        ((e = Oe.current),
        e !== null &&
          ((pt & 4194048) === pt
            ? qe !== null
            : ((pt & 62914560) !== pt && (pt & 536870912) === 0) || e !== qe))
      )
        throw ((Oi = no), ih);
      t.flags |= 8192;
    }
  }
  function cs(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? $c() : 536870912), (t.lanes |= e), (qa |= e)));
  }
  function Hi(t, e) {
    if (!bt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= i), (t.childLanes = n), e);
  }
  function Mv(t, e, n) {
    var i = e.pendingProps;
    switch ((Pu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (zt(e), null);
      case 1:
        return (zt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          nn(Yt),
          hn(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ti(e)
              ? un(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), If())),
          zt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (un(e),
              n !== null ? (zt(e), xd(e, n)) : (zt(e), (e.flags &= -16777217)))
            : n
              ? n !== t.memoizedState
                ? (un(e), zt(e), xd(e, n))
                : (zt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== i && un(e), zt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (xl(e), (n = lt.current));
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(o(166));
            return (zt(e), null);
          }
          ((t = tt.current),
            Ti(e) ? Wf(e) : ((t = xm(s, i, n)), (e.stateNode = t), un(e)));
        }
        return (zt(e), null);
      case 5:
        if ((xl(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(o(166));
            return (zt(e), null);
          }
          if (((t = tt.current), Ti(e))) Wf(e);
          else {
            switch (((s = As(lt.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((t = s.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size));
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(n, { is: i.is })
                        : s.createElement(n);
                }
            }
            ((t[ee] = e), (t[ue] = i));
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                ((s.child.return = s), (s = s.child));
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              ((s.sibling.return = s.return), (s = s.sibling));
            }
            e.stateNode = t;
            t: switch (($t(t, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && un(e);
          }
        }
        return (zt(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = lt.current), Ti(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = ie),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            ((t[ee] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                mm(t.nodeValue, n)
              )),
              t || $n(e));
          } else
            ((t = As(t).createTextNode(i)), (t[ee] = e), (e.stateNode = t));
        }
        return (zt(e), null);
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ti(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(o(317));
              s[ee] = e;
            } else
              (Ai(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (zt(e), (s = !1));
          } else
            ((s = If()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (ln(e), e) : (ln(e), null);
        }
        if ((ln(e), (e.flags & 128) !== 0)) return ((e.lanes = n), e);
        if (
          ((n = i !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          ((i = e.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool));
          var r = null;
          (i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (r = i.memoizedState.cachePool.pool),
            r !== s && (i.flags |= 2048));
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          cs(e, e.updateQueue),
          zt(e),
          null
        );
      case 4:
        return (hn(), t === null && ur(e.stateNode.containerInfo), zt(e), null);
      case 10:
        return (nn(e.type), zt(e), null);
      case 19:
        if ((K(qt), (s = e.memoizedState), s === null)) return (zt(e), null);
        if (((i = (e.flags & 128) !== 0), (r = s.rendering), r === null))
          if (i) Hi(s, !1);
          else {
            if (Nt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((r = ls(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Hi(s, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      cs(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (Jf(n, t), (n = n.sibling));
                  return (Q(qt, (qt.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            s.tail !== null &&
              ke() > ds &&
              ((e.flags |= 128), (i = !0), Hi(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = ls(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                cs(e, t),
                Hi(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !r.alternate &&
                  !bt)
              )
                return (zt(e), null);
            } else
              2 * ke() - s.renderingStartTime > ds &&
                n !== 536870912 &&
                ((e.flags |= 128), (i = !0), Hi(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = s.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (s.last = r));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = ke()),
            (e.sibling = null),
            (t = qt.current),
            Q(qt, i ? (t & 1) | 2 : t & 1),
            e)
          : (zt(e), null);
      case 22:
      case 23:
        return (
          ln(e),
          oo(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : zt(e),
          (n = e.updateQueue),
          n !== null && cs(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && K(ea),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          nn(Yt),
          zt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function Dv(t, e) {
    switch ((Pu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          nn(Yt),
          hn(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (xl(e), null);
      case 13:
        if (
          (ln(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          Ai();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (K(qt), null);
      case 4:
        return (hn(), null);
      case 10:
        return (nn(e.type), null);
      case 22:
      case 23:
        return (
          ln(e),
          oo(),
          t !== null && K(ea),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (nn(Yt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Td(t, e) {
    switch ((Pu(e), e.tag)) {
      case 3:
        (nn(Yt), hn());
        break;
      case 26:
      case 27:
      case 5:
        xl(e);
        break;
      case 4:
        hn();
        break;
      case 13:
        ln(e);
        break;
      case 19:
        K(qt);
        break;
      case 10:
        nn(e.type);
        break;
      case 22:
      case 23:
        (ln(e), oo(), t !== null && K(ea));
        break;
      case 24:
        nn(Yt);
    }
  }
  function ki(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var r = n.create,
              d = n.inst;
            ((i = r()), (d.destroy = i));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      Mt(e, e.return, y);
    }
  }
  function An(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & t) === t) {
            var d = i.inst,
              y = d.destroy;
            if (y !== void 0) {
              ((d.destroy = void 0), (s = e));
              var S = n,
                D = y;
              try {
                D();
              } catch (j) {
                Mt(s, S, j);
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (j) {
      Mt(e, e.return, j);
    }
  }
  function Ad(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ch(e, n);
      } catch (i) {
        Mt(t, t.return, i);
      }
    }
  }
  function Ed(t, e, n) {
    ((n.props = aa(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (i) {
      Mt(t, e, i);
    }
  }
  function Yi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      Mt(t, e, s);
    }
  }
  function Ge(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Mt(t, e, s);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Mt(t, e, s);
        }
      else n.current = null;
  }
  function Md(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function Uo(t, e, n) {
    try {
      var i = t.stateNode;
      (Kv(i, t.type, n, e), (i[ue] = e));
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function Dd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Vn(t.type)) ||
      t.tag === 4
    );
  }
  function Lo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Dd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Vn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ho(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ts)));
    else if (
      i !== 4 &&
      (i === 27 && Vn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Ho(t, e, n), t = t.sibling; t !== null; )
        (Ho(t, e, n), (t = t.sibling));
  }
  function fs(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      i !== 4 &&
      (i === 27 && Vn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (fs(t, e, n), t = t.sibling; t !== null; )
        (fs(t, e, n), (t = t.sibling));
  }
  function Rd(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      ($t(e, i, n), (e[ee] = t), (e[ue] = n));
    } catch (r) {
      Mt(t, t.return, r);
    }
  }
  var on = !1,
    Ut = !1,
    ko = !1,
    Cd = typeof WeakSet == "function" ? WeakSet : Set,
    Kt = null;
  function Rv(t, e) {
    if (((t = t.containerInfo), (cr = Os), (t = Hf(t)), Uu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              r = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              y = -1,
              S = -1,
              D = 0,
              j = 0,
              _ = t,
              R = null;
            e: for (;;) {
              for (
                var C;
                _ !== n || (s !== 0 && _.nodeType !== 3) || (y = d + s),
                  _ !== r || (i !== 0 && _.nodeType !== 3) || (S = d + i),
                  _.nodeType === 3 && (d += _.nodeValue.length),
                  (C = _.firstChild) !== null;
              )
                ((R = _), (_ = C));
              for (;;) {
                if (_ === t) break e;
                if (
                  (R === n && ++D === s && (y = d),
                  R === r && ++j === i && (S = d),
                  (C = _.nextSibling) !== null)
                )
                  break;
                ((_ = R), (R = _.parentNode));
              }
              _ = C;
            }
            n = y === -1 || S === -1 ? null : { start: y, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      fr = { focusedElem: t, selectionRange: n }, Os = !1, Kt = e;
      Kt !== null;
    )
      if (
        ((e = Kt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = e), (Kt = t));
      else
        for (; Kt !== null; ) {
          switch (((e = Kt), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                ((t = void 0),
                  (n = e),
                  (s = r.memoizedProps),
                  (r = r.memoizedState),
                  (i = n.stateNode));
                try {
                  var at = aa(n.type, s, n.elementType === n.type);
                  ((t = i.getSnapshotBeforeUpdate(at, r)),
                    (i.__reactInternalSnapshotBeforeUpdate = t));
                } catch (et) {
                  Mt(n, n.return, et);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  mr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      mr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Kt = t));
            break;
          }
          Kt = e.return;
        }
  }
  function Od(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (En(t, n), i & 4 && ki(5, n));
        break;
      case 1:
        if ((En(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Mt(n, n.return, d);
            }
          else {
            var s = aa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Mt(n, n.return, d);
            }
          }
        (i & 64 && Ad(n), i & 512 && Yi(n, n.return));
        break;
      case 3:
        if ((En(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            ch(t, e);
          } catch (d) {
            Mt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Rd(n);
      case 26:
      case 5:
        (En(t, n), e === null && i & 4 && Md(n), i & 512 && Yi(n, n.return));
        break;
      case 12:
        En(t, n);
        break;
      case 13:
        (En(t, n),
          i & 4 && zd(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Bv.bind(null, n)), t1(t, n)))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || on), !i)) {
          ((e = (e !== null && e.memoizedState !== null) || Ut), (s = on));
          var r = Ut;
          ((on = i),
            (Ut = e) && !r ? Mn(t, n, (n.subtreeFlags & 8772) !== 0) : En(t, n),
            (on = s),
            (Ut = r));
        }
        break;
      case 30:
        break;
      default:
        En(t, n);
    }
  }
  function wd(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), wd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && vu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Vt = null,
    ce = !1;
  function rn(t, e, n) {
    for (n = n.child; n !== null; ) (Vd(t, e, n), (n = n.sibling));
  }
  function Vd(t, e, n) {
    if (de && typeof de.onCommitFiberUnmount == "function")
      try {
        de.onCommitFiberUnmount(oi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ut || Ge(n, e),
          rn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ut || Ge(n, e);
        var i = Vt,
          s = ce;
        (Vn(n.type) && ((Vt = n.stateNode), (ce = !1)),
          rn(t, e, n),
          Fi(n.stateNode),
          (Vt = i),
          (ce = s));
        break;
      case 5:
        Ut || Ge(n, e);
      case 6:
        if (
          ((i = Vt),
          (s = ce),
          (Vt = null),
          rn(t, e, n),
          (Vt = i),
          (ce = s),
          Vt !== null)
        )
          if (ce)
            try {
              (Vt.nodeType === 9
                ? Vt.body
                : Vt.nodeName === "HTML"
                  ? Vt.ownerDocument.body
                  : Vt
              ).removeChild(n.stateNode);
            } catch (r) {
              Mt(n, e, r);
            }
          else
            try {
              Vt.removeChild(n.stateNode);
            } catch (r) {
              Mt(n, e, r);
            }
        break;
      case 18:
        Vt !== null &&
          (ce
            ? ((t = Vt),
              bm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              il(t))
            : bm(Vt, n.stateNode));
        break;
      case 4:
        ((i = Vt),
          (s = ce),
          (Vt = n.stateNode.containerInfo),
          (ce = !0),
          rn(t, e, n),
          (Vt = i),
          (ce = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ut || An(2, n, e), Ut || An(4, n, e), rn(t, e, n));
        break;
      case 1:
        (Ut ||
          (Ge(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Ed(n, e, i)),
          rn(t, e, n));
        break;
      case 21:
        rn(t, e, n);
        break;
      case 22:
        ((Ut = (i = Ut) || n.memoizedState !== null), rn(t, e, n), (Ut = i));
        break;
      default:
        rn(t, e, n);
    }
  }
  function zd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        il(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
  }
  function Cv(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Cd()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Cd()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Yo(t, e) {
    var n = Cv(t);
    e.forEach(function (i) {
      var s = Uv.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(s, s));
    });
  }
  function ge(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          r = t,
          d = e,
          y = d;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Vn(y.type)) {
                ((Vt = y.stateNode), (ce = !1));
                break t;
              }
              break;
            case 5:
              ((Vt = y.stateNode), (ce = !1));
              break t;
            case 3:
            case 4:
              ((Vt = y.stateNode.containerInfo), (ce = !0));
              break t;
          }
          y = y.return;
        }
        if (Vt === null) throw Error(o(160));
        (Vd(r, d, s),
          (Vt = null),
          (ce = !1),
          (r = s.alternate),
          r !== null && (r.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) (jd(e, t), (e = e.sibling));
  }
  var _e = null;
  function jd(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ge(e, t),
          ve(t),
          i & 4 && (An(3, t, t.return), ki(3, t), An(5, t, t.return)));
        break;
      case 1:
        (ge(e, t),
          ve(t),
          i & 512 && (Ut || n === null || Ge(n, n.return)),
          i & 64 &&
            on &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i))))));
        break;
      case 26:
        var s = _e;
        if (
          (ge(e, t),
          ve(t),
          i & 512 && (Ut || n === null || Ge(n, n.return)),
          i & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  ((i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s));
                  e: switch (i) {
                    case "title":
                      ((r = s.getElementsByTagName("title")[0]),
                        (!r ||
                          r[fi] ||
                          r[ee] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = s.createElement(i)),
                          s.head.insertBefore(
                            r,
                            s.querySelector("head > title"),
                          )),
                        $t(r, i, n),
                        (r[ee] = t),
                        Zt(r),
                        (i = r));
                      break t;
                    case "link":
                      var d = Rm("link", "href", s).get(i + (n.href || ""));
                      if (d) {
                        for (var y = 0; y < d.length; y++)
                          if (
                            ((r = d[y]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(y, 1);
                            break e;
                          }
                      }
                      ((r = s.createElement(i)),
                        $t(r, i, n),
                        s.head.appendChild(r));
                      break;
                    case "meta":
                      if (
                        (d = Rm("meta", "content", s).get(
                          i + (n.content || ""),
                        ))
                      ) {
                        for (y = 0; y < d.length; y++)
                          if (
                            ((r = d[y]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(y, 1);
                            break e;
                          }
                      }
                      ((r = s.createElement(i)),
                        $t(r, i, n),
                        s.head.appendChild(r));
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  ((r[ee] = t), Zt(r), (i = r));
                }
                t.stateNode = i;
              } else Cm(s, t.type, t.stateNode);
            else t.stateNode = Dm(s, i, t.memoizedProps);
          else
            r !== i
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                i === null
                  ? Cm(s, t.type, t.stateNode)
                  : Dm(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Uo(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ge(e, t),
          ve(t),
          i & 512 && (Ut || n === null || Ge(n, n.return)),
          n !== null && i & 4 && Uo(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (ge(e, t),
          ve(t),
          i & 512 && (Ut || n === null || Ge(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Sa(s, "");
          } catch (C) {
            Mt(t, t.return, C);
          }
        }
        (i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Uo(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (ko = !0));
        break;
      case 6:
        if ((ge(e, t), ve(t), i & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          ((i = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = i;
          } catch (C) {
            Mt(t, t.return, C);
          }
        }
        break;
      case 3:
        if (
          ((Ds = null),
          (s = _e),
          (_e = Es(e.containerInfo)),
          ge(e, t),
          (_e = s),
          ve(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            il(e.containerInfo);
          } catch (C) {
            Mt(t, t.return, C);
          }
        ko && ((ko = !1), Nd(t));
        break;
      case 4:
        ((i = _e),
          (_e = Es(t.stateNode.containerInfo)),
          ge(e, t),
          ve(t),
          (_e = i));
        break;
      case 12:
        (ge(e, t), ve(t));
        break;
      case 13:
        (ge(e, t),
          ve(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Ko = ke()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Yo(t, i))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          D = on,
          j = Ut;
        if (
          ((on = D || s),
          (Ut = j || S),
          ge(e, t),
          (Ut = j),
          (on = D),
          ve(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || S || on || Ut || ia(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((r = S.stateNode), s))
                    ((d = r.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    y = S.stateNode;
                    var _ = S.memoizedProps.style,
                      R =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    y.style.display =
                      R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (C) {
                  Mt(S, S.return, C);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (C) {
                  Mt(S, S.return, C);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Yo(t, n))));
        break;
      case 19:
        (ge(e, t),
          ve(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Yo(t, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ge(e, t), ve(t));
    }
  }
  function ve(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Dd(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              r = Lo(t);
            fs(t, r, s);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Sa(d, ""), (n.flags &= -33));
            var y = Lo(t);
            fs(t, y, d);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              D = Lo(t);
            Ho(t, D, S);
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        Mt(t, t.return, j);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Nd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Nd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function En(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Od(t, e.alternate, e), (e = e.sibling));
  }
  function ia(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (An(4, e, e.return), ia(e));
          break;
        case 1:
          Ge(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Ed(e, e.return, n),
            ia(e));
          break;
        case 27:
          Fi(e.stateNode);
        case 26:
        case 5:
          (Ge(e, e.return), ia(e));
          break;
        case 22:
          e.memoizedState === null && ia(e);
          break;
        case 30:
          ia(e);
          break;
        default:
          ia(e);
      }
      t = t.sibling;
    }
  }
  function Mn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        r = e,
        d = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (Mn(s, r, n), ki(4, r));
          break;
        case 1:
          if (
            (Mn(s, r, n),
            (i = r),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (D) {
              Mt(i, i.return, D);
            }
          if (((i = r), (s = i.updateQueue), s !== null)) {
            var y = i.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  rh(S[s], y);
            } catch (D) {
              Mt(i, i.return, D);
            }
          }
          (n && d & 64 && Ad(r), Yi(r, r.return));
          break;
        case 27:
          Rd(r);
        case 26:
        case 5:
          (Mn(s, r, n), n && i === null && d & 4 && Md(r), Yi(r, r.return));
          break;
        case 12:
          Mn(s, r, n);
          break;
        case 13:
          (Mn(s, r, n), n && d & 4 && zd(s, r));
          break;
        case 22:
          (r.memoizedState === null && Mn(s, r, n), Yi(r, r.return));
          break;
        case 30:
          break;
        default:
          Mn(s, r, n);
      }
      e = e.sibling;
    }
  }
  function qo(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Di(n)));
  }
  function Go(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Di(t)));
  }
  function Xe(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (_d(t, e, n, i), (e = e.sibling));
  }
  function _d(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Xe(t, e, n, i), s & 2048 && ki(9, e));
        break;
      case 1:
        Xe(t, e, n, i);
        break;
      case 3:
        (Xe(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Di(t))));
        break;
      case 12:
        if (s & 2048) {
          (Xe(t, e, n, i), (t = e.stateNode));
          try {
            var r = e.memoizedProps,
              d = r.id,
              y = r.onPostCommit;
            typeof y == "function" &&
              y(
                d,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            Mt(e, e.return, S);
          }
        } else Xe(t, e, n, i);
        break;
      case 13:
        Xe(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        ((r = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Xe(t, e, n, i)
              : qi(t, e)
            : r._visibility & 2
              ? Xe(t, e, n, i)
              : ((r._visibility |= 2),
                Ha(t, e, n, i, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && qo(d, e));
        break;
      case 24:
        (Xe(t, e, n, i), s & 2048 && Go(e.alternate, e));
        break;
      default:
        Xe(t, e, n, i);
    }
  }
  function Ha(t, e, n, i, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var r = t,
        d = e,
        y = n,
        S = i,
        D = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Ha(r, d, y, S, s), ki(8, d));
          break;
        case 23:
          break;
        case 22:
          var j = d.stateNode;
          (d.memoizedState !== null
            ? j._visibility & 2
              ? Ha(r, d, y, S, s)
              : qi(r, d)
            : ((j._visibility |= 2), Ha(r, d, y, S, s)),
            s && D & 2048 && qo(d.alternate, d));
          break;
        case 24:
          (Ha(r, d, y, S, s), s && D & 2048 && Go(d.alternate, d));
          break;
        default:
          Ha(r, d, y, S, s);
      }
      e = e.sibling;
    }
  }
  function qi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            (qi(n, i), s & 2048 && qo(i.alternate, i));
            break;
          case 24:
            (qi(n, i), s & 2048 && Go(i.alternate, i));
            break;
          default:
            qi(n, i);
        }
        e = e.sibling;
      }
  }
  var Gi = 8192;
  function ka(t) {
    if (t.subtreeFlags & Gi)
      for (t = t.child; t !== null; ) (Bd(t), (t = t.sibling));
  }
  function Bd(t) {
    switch (t.tag) {
      case 26:
        (ka(t),
          t.flags & Gi &&
            t.memoizedState !== null &&
            d1(_e, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ka(t);
        break;
      case 3:
      case 4:
        var e = _e;
        ((_e = Es(t.stateNode.containerInfo)), ka(t), (_e = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Gi), (Gi = 16777216), ka(t), (Gi = e))
            : ka(t));
        break;
      default:
        ka(t);
    }
  }
  function Ud(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Xi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((Kt = i), Hd(i, t));
        }
      Ud(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Ld(t), (t = t.sibling));
  }
  function Ld(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Xi(t), t.flags & 2048 && An(9, t, t.return));
        break;
      case 3:
        Xi(t);
        break;
      case 12:
        Xi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), hs(t))
          : Xi(t);
        break;
      default:
        Xi(t);
    }
  }
  function hs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((Kt = i), Hd(i, t));
        }
      Ud(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (An(8, e, e.return), hs(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), hs(e)));
          break;
        default:
          hs(e);
      }
      t = t.sibling;
    }
  }
  function Hd(t, e) {
    for (; Kt !== null; ) {
      var n = Kt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          An(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Di(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) ((i.return = n), (Kt = i));
      else
        t: for (n = t; Kt !== null; ) {
          i = Kt;
          var s = i.sibling,
            r = i.return;
          if ((wd(i), i === n)) {
            Kt = null;
            break t;
          }
          if (s !== null) {
            ((s.return = r), (Kt = s));
            break t;
          }
          Kt = r;
        }
    }
  }
  var Ov = {
      getCacheForType: function (t) {
        var e = ne(Yt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
    },
    wv = typeof WeakMap == "function" ? WeakMap : Map,
    St = 0,
    Ct = null,
    ft = null,
    pt = 0,
    xt = 0,
    be = null,
    Dn = !1,
    Ya = !1,
    Xo = !1,
    cn = 0,
    Nt = 0,
    Rn = 0,
    la = 0,
    Zo = 0,
    we = 0,
    qa = 0,
    Zi = null,
    fe = null,
    Qo = !1,
    Ko = 0,
    ds = 1 / 0,
    ms = null,
    Cn = null,
    Wt = 0,
    On = null,
    Ga = null,
    Xa = 0,
    Po = 0,
    Jo = null,
    kd = null,
    Qi = 0,
    Fo = null;
  function Se() {
    if ((St & 2) !== 0 && pt !== 0) return pt & -pt;
    if (V.T !== null) {
      var t = Va;
      return t !== 0 ? t : ar();
    }
    return ef();
  }
  function Yd() {
    we === 0 && (we = (pt & 536870912) === 0 || bt ? Wc() : 536870912);
    var t = Oe.current;
    return (t !== null && (t.flags |= 32), we);
  }
  function xe(t, e, n) {
    (((t === Ct && (xt === 2 || xt === 9)) || t.cancelPendingCommit !== null) &&
      (Za(t, 0), wn(t, pt, we, !1)),
      ci(t, n),
      ((St & 2) === 0 || t !== Ct) &&
        (t === Ct &&
          ((St & 2) === 0 && (la |= n), Nt === 4 && wn(t, pt, we, !1)),
        Ze(t)));
  }
  function qd(t, e, n) {
    if ((St & 6) !== 0) throw Error(o(327));
    var i = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || ri(t, e),
      s = i ? jv(t, e) : Io(t, e, !0),
      r = i;
    do {
      if (s === 0) {
        Ya && !i && wn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !Vv(n))) {
          ((s = Io(t, e, !1)), (r = !1));
          continue;
        }
        if (s === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var d = 0;
          else
            ((d = t.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var y = t;
              s = Zi;
              var S = y.current.memoizedState.isDehydrated;
              if ((S && (Za(y, d).flags |= 256), (d = Io(y, d, !1)), d !== 2)) {
                if (Xo && !S) {
                  ((y.errorRecoveryDisabledLanes |= r), (la |= r), (s = 4));
                  break t;
                }
                ((r = fe),
                  (fe = s),
                  r !== null &&
                    (fe === null ? (fe = r) : fe.push.apply(fe, r)));
              }
              s = d;
            }
            if (((r = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Za(t, 0), wn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((i = t), (r = s), r)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              wn(i, e, we, !Dn);
              break t;
            case 2:
              fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((s = Ko + 300 - ke()), 10 < s)) {
            if ((wn(i, e, we, !Dn), Ml(i, 0, !0) !== 0)) break t;
            i.timeoutHandle = gm(
              Gd.bind(null, i, n, fe, ms, Qo, e, we, la, qa, Dn, r, 2, -0, 0),
              s,
            );
            break t;
          }
          Gd(i, n, fe, ms, Qo, e, we, la, qa, Dn, r, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ze(t);
  }
  function Gd(t, e, n, i, s, r, d, y, S, D, j, _, R, C) {
    if (
      ((t.timeoutHandle = -1),
      (_ = e.subtreeFlags),
      (_ & 8192 || (_ & 16785408) === 16785408) &&
        ((Ii = { stylesheets: null, count: 0, unsuspend: h1 }),
        Bd(e),
        (_ = m1()),
        _ !== null))
    ) {
      ((t.cancelPendingCommit = _(
        Fd.bind(null, t, e, r, n, i, s, d, y, S, j, 1, R, C),
      )),
        wn(t, r, d, !D));
      return;
    }
    Fd(t, e, r, n, i, s, d, y, S);
  }
  function Vv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            r = s.getSnapshot;
          s = s.value;
          try {
            if (!pe(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function wn(t, e, n, i) {
    ((e &= ~Zo),
      (e &= ~la),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var r = 31 - me(s),
        d = 1 << r;
      ((i[r] = -1), (s &= ~d));
    }
    n !== 0 && Ic(t, n, e);
  }
  function ps() {
    return (St & 6) === 0 ? (Ki(0), !1) : !0;
  }
  function Wo() {
    if (ft !== null) {
      if (xt === 0) var t = ft.return;
      else ((t = ft), (en = In = null), mo(t), (Ua = null), (Ui = 0), (t = ft));
      for (; t !== null; ) (Td(t.alternate, t), (t = t.return));
      ft = null;
    }
  }
  function Za(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Jv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      Wo(),
      (Ct = t),
      (ft = n = $e(t.current, null)),
      (pt = e),
      (xt = 0),
      (be = null),
      (Dn = !1),
      (Ya = ri(t, e)),
      (Xo = !1),
      (qa = we = Zo = la = Rn = Nt = 0),
      (fe = Zi = null),
      (Qo = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - me(i),
          r = 1 << s;
        ((e |= t[s]), (i &= ~r));
      }
    return ((cn = e), Ul(), n);
  }
  function Xd(t, e) {
    ((ot = null),
      (V.H = ns),
      e === Ci || e === Ql
        ? ((e = uh()), (xt = 3))
        : e === ih
          ? ((e = uh()), (xt = 4))
          : (xt =
              e === od
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (be = e),
      ft === null && ((Nt = 1), us(t, Me(e, t.current))));
  }
  function Zd() {
    var t = V.H;
    return ((V.H = ns), t === null ? ns : t);
  }
  function Qd() {
    var t = V.A;
    return ((V.A = Ov), t);
  }
  function $o() {
    ((Nt = 4),
      Dn || ((pt & 4194048) !== pt && Oe.current !== null) || (Ya = !0),
      ((Rn & 134217727) === 0 && (la & 134217727) === 0) ||
        Ct === null ||
        wn(Ct, pt, we, !1));
  }
  function Io(t, e, n) {
    var i = St;
    St |= 2;
    var s = Zd(),
      r = Qd();
    ((Ct !== t || pt !== e) && ((ms = null), Za(t, e)), (e = !1));
    var d = Nt;
    t: do
      try {
        if (xt !== 0 && ft !== null) {
          var y = ft,
            S = be;
          switch (xt) {
            case 8:
              (Wo(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Oe.current === null && (e = !0);
              var D = xt;
              if (((xt = 0), (be = null), Qa(t, y, S, D), n && Ya)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((D = xt), (xt = 0), (be = null), Qa(t, y, S, D));
          }
        }
        (zv(), (d = Nt));
        break;
      } catch (j) {
        Xd(t, j);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (en = In = null),
      (St = i),
      (V.H = s),
      (V.A = r),
      ft === null && ((Ct = null), (pt = 0), Ul()),
      d
    );
  }
  function zv() {
    for (; ft !== null; ) Kd(ft);
  }
  function jv(t, e) {
    var n = St;
    St |= 2;
    var i = Zd(),
      s = Qd();
    Ct !== t || pt !== e
      ? ((ms = null), (ds = ke() + 500), Za(t, e))
      : (Ya = ri(t, e));
    t: do
      try {
        if (xt !== 0 && ft !== null) {
          e = ft;
          var r = be;
          e: switch (xt) {
            case 1:
              ((xt = 0), (be = null), Qa(t, e, r, 1));
              break;
            case 2:
            case 9:
              if (lh(r)) {
                ((xt = 0), (be = null), Pd(e));
                break;
              }
              ((e = function () {
                ((xt !== 2 && xt !== 9) || Ct !== t || (xt = 7), Ze(t));
              }),
                r.then(e, e));
              break t;
            case 3:
              xt = 7;
              break t;
            case 4:
              xt = 5;
              break t;
            case 7:
              lh(r)
                ? ((xt = 0), (be = null), Pd(e))
                : ((xt = 0), (be = null), Qa(t, e, r, 7));
              break;
            case 5:
              var d = null;
              switch (ft.tag) {
                case 26:
                  d = ft.memoizedState;
                case 5:
                case 27:
                  var y = ft;
                  if (!d || Om(d)) {
                    ((xt = 0), (be = null));
                    var S = y.sibling;
                    if (S !== null) ft = S;
                    else {
                      var D = y.return;
                      D !== null ? ((ft = D), ys(D)) : (ft = null);
                    }
                    break e;
                  }
              }
              ((xt = 0), (be = null), Qa(t, e, r, 5));
              break;
            case 6:
              ((xt = 0), (be = null), Qa(t, e, r, 6));
              break;
            case 8:
              (Wo(), (Nt = 6));
              break t;
            default:
              throw Error(o(462));
          }
        }
        Nv();
        break;
      } catch (j) {
        Xd(t, j);
      }
    while (!0);
    return (
      (en = In = null),
      (V.H = i),
      (V.A = s),
      (St = n),
      ft !== null ? 0 : ((Ct = null), (pt = 0), Ul(), Nt)
    );
  }
  function Nv() {
    for (; ft !== null && !n0(); ) Kd(ft);
  }
  function Kd(t) {
    var e = Sd(t.alternate, t, cn);
    ((t.memoizedProps = t.pendingProps), e === null ? ys(t) : (ft = e));
  }
  function Pd(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = md(n, e, e.pendingProps, e.type, void 0, pt);
        break;
      case 11:
        e = md(n, e, e.pendingProps, e.type.render, e.ref, pt);
        break;
      case 5:
        mo(e);
      default:
        (Td(n, e), (e = ft = Jf(e, cn)), (e = Sd(n, e, cn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? ys(t) : (ft = e));
  }
  function Qa(t, e, n, i) {
    ((en = In = null), mo(e), (Ua = null), (Ui = 0));
    var s = e.return;
    try {
      if (Av(t, s, e, n, pt)) {
        ((Nt = 1), us(t, Me(n, t.current)), (ft = null));
        return;
      }
    } catch (r) {
      if (s !== null) throw ((ft = s), r);
      ((Nt = 1), us(t, Me(n, t.current)), (ft = null));
      return;
    }
    e.flags & 32768
      ? (bt || i === 1
          ? (t = !0)
          : Ya || (pt & 536870912) !== 0
            ? (t = !1)
            : ((Dn = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = Oe.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        Jd(e, t))
      : ys(e);
  }
  function ys(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Jd(e, Dn);
        return;
      }
      t = e.return;
      var n = Mv(e.alternate, e, cn);
      if (n !== null) {
        ft = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    Nt === 0 && (Nt = 5);
  }
  function Jd(t, e) {
    do {
      var n = Dv(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (ft = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = n;
    } while (t !== null);
    ((Nt = 6), (ft = null));
  }
  function Fd(t, e, n, i, s, r, d, y, S) {
    t.cancelPendingCommit = null;
    do gs();
    while (Wt !== 0);
    if ((St & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= qu),
        h0(t, n, r, d, y, S),
        t === Ct && ((ft = Ct = null), (pt = 0)),
        (Ga = e),
        (On = t),
        (Xa = n),
        (Po = r),
        (Jo = s),
        (kd = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Lv(Tl, function () {
              return (em(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = V.T), (V.T = null), (s = Z.p), (Z.p = 2), (d = St), (St |= 4));
        try {
          Rv(t, e, n);
        } finally {
          ((St = d), (Z.p = s), (V.T = i));
        }
      }
      ((Wt = 1), Wd(), $d(), Id());
    }
  }
  function Wd() {
    if (Wt === 1) {
      Wt = 0;
      var t = On,
        e = Ga,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var i = Z.p;
        Z.p = 2;
        var s = St;
        St |= 4;
        try {
          jd(e, t);
          var r = fr,
            d = Hf(t.containerInfo),
            y = r.focusedElem,
            S = r.selectionRange;
          if (
            d !== y &&
            y &&
            y.ownerDocument &&
            Lf(y.ownerDocument.documentElement, y)
          ) {
            if (S !== null && Uu(y)) {
              var D = S.start,
                j = S.end;
              if ((j === void 0 && (j = D), "selectionStart" in y))
                ((y.selectionStart = D),
                  (y.selectionEnd = Math.min(j, y.value.length)));
              else {
                var _ = y.ownerDocument || document,
                  R = (_ && _.defaultView) || window;
                if (R.getSelection) {
                  var C = R.getSelection(),
                    at = y.textContent.length,
                    et = Math.min(S.start, at),
                    Et = S.end === void 0 ? et : Math.min(S.end, at);
                  !C.extend && et > Et && ((d = Et), (Et = et), (et = d));
                  var E = Uf(y, et),
                    A = Uf(y, Et);
                  if (
                    E &&
                    A &&
                    (C.rangeCount !== 1 ||
                      C.anchorNode !== E.node ||
                      C.anchorOffset !== E.offset ||
                      C.focusNode !== A.node ||
                      C.focusOffset !== A.offset)
                  ) {
                    var M = _.createRange();
                    (M.setStart(E.node, E.offset),
                      C.removeAllRanges(),
                      et > Et
                        ? (C.addRange(M), C.extend(A.node, A.offset))
                        : (M.setEnd(A.node, A.offset), C.addRange(M)));
                  }
                }
              }
            }
            for (_ = [], C = y; (C = C.parentNode); )
              C.nodeType === 1 &&
                _.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < _.length;
              y++
            ) {
              var N = _[y];
              ((N.element.scrollLeft = N.left), (N.element.scrollTop = N.top));
            }
          }
          ((Os = !!cr), (fr = cr = null));
        } finally {
          ((St = s), (Z.p = i), (V.T = n));
        }
      }
      ((t.current = e), (Wt = 2));
    }
  }
  function $d() {
    if (Wt === 2) {
      Wt = 0;
      var t = On,
        e = Ga,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var i = Z.p;
        Z.p = 2;
        var s = St;
        St |= 4;
        try {
          Od(t, e.alternate, e);
        } finally {
          ((St = s), (Z.p = i), (V.T = n));
        }
      }
      Wt = 3;
    }
  }
  function Id() {
    if (Wt === 4 || Wt === 3) {
      ((Wt = 0), a0());
      var t = On,
        e = Ga,
        n = Xa,
        i = kd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Wt = 5)
        : ((Wt = 0), (Ga = On = null), tm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Cn = null),
        yu(n),
        (e = e.stateNode),
        de && typeof de.onCommitFiberRoot == "function")
      )
        try {
          de.onCommitFiberRoot(oi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((e = V.T), (s = Z.p), (Z.p = 2), (V.T = null));
        try {
          for (var r = t.onRecoverableError, d = 0; d < i.length; d++) {
            var y = i[d];
            r(y.value, { componentStack: y.stack });
          }
        } finally {
          ((V.T = e), (Z.p = s));
        }
      }
      ((Xa & 3) !== 0 && gs(),
        Ze(t),
        (s = t.pendingLanes),
        (n & 4194090) !== 0 && (s & 42) !== 0
          ? t === Fo
            ? Qi++
            : ((Qi = 0), (Fo = t))
          : (Qi = 0),
        Ki(0));
    }
  }
  function tm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Di(e)));
  }
  function gs(t) {
    return (Wd(), $d(), Id(), em());
  }
  function em() {
    if (Wt !== 5) return !1;
    var t = On,
      e = Po;
    Po = 0;
    var n = yu(Xa),
      i = V.T,
      s = Z.p;
    try {
      ((Z.p = 32 > n ? 32 : n), (V.T = null), (n = Jo), (Jo = null));
      var r = On,
        d = Xa;
      if (((Wt = 0), (Ga = On = null), (Xa = 0), (St & 6) !== 0))
        throw Error(o(331));
      var y = St;
      if (
        ((St |= 4),
        Ld(r.current),
        _d(r, r.current, d, n),
        (St = y),
        Ki(0, !1),
        de && typeof de.onPostCommitFiberRoot == "function")
      )
        try {
          de.onPostCommitFiberRoot(oi, r);
        } catch {}
      return !0;
    } finally {
      ((Z.p = s), (V.T = i), tm(t, e));
    }
  }
  function nm(t, e, n) {
    ((e = Me(n, e)),
      (e = Co(t.stateNode, e, 2)),
      (t = bn(t, e, 2)),
      t !== null && (ci(t, 2), Ze(t)));
  }
  function Mt(t, e, n) {
    if (t.tag === 3) nm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          nm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Cn === null || !Cn.has(i)))
          ) {
            ((t = Me(n, t)),
              (n = sd(2)),
              (i = bn(e, n, 2)),
              i !== null && (ud(n, i, e, t), ci(i, 2), Ze(i)));
            break;
          }
        }
        e = e.return;
      }
  }
  function tr(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new wv();
      var s = new Set();
      i.set(e, s);
    } else ((s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s)));
    s.has(n) ||
      ((Xo = !0), s.add(n), (t = _v.bind(null, t, e, n)), e.then(t, t));
  }
  function _v(t, e, n) {
    var i = t.pingCache;
    (i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Ct === t &&
        (pt & n) === n &&
        (Nt === 4 || (Nt === 3 && (pt & 62914560) === pt && 300 > ke() - Ko)
          ? (St & 2) === 0 && Za(t, 0)
          : (Zo |= n),
        qa === pt && (qa = 0)),
      Ze(t));
  }
  function am(t, e) {
    (e === 0 && (e = $c()), (t = Ra(t, e)), t !== null && (ci(t, e), Ze(t)));
  }
  function Bv(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), am(t, n));
  }
  function Uv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (i !== null && i.delete(e), am(t, n));
  }
  function Lv(t, e) {
    return hu(t, e);
  }
  var vs = null,
    Ka = null,
    er = !1,
    bs = !1,
    nr = !1,
    sa = 0;
  function Ze(t) {
    (t !== Ka &&
      t.next === null &&
      (Ka === null ? (vs = Ka = t) : (Ka = Ka.next = t)),
      (bs = !0),
      er || ((er = !0), kv()));
  }
  function Ki(t, e) {
    if (!nr && bs) {
      nr = !0;
      do
        for (var n = !1, i = vs; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var d = i.suspendedLanes,
                y = i.pingedLanes;
              ((r = (1 << (31 - me(42 | t) + 1)) - 1),
                (r &= s & ~(d & ~y)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), um(i, r));
          } else
            ((r = pt),
              (r = Ml(
                i,
                i === Ct ? r : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || ri(i, r) || ((n = !0), um(i, r)));
          i = i.next;
        }
      while (n);
      nr = !1;
    }
  }
  function Hv() {
    im();
  }
  function im() {
    bs = er = !1;
    var t = 0;
    sa !== 0 && (Pv() && (t = sa), (sa = 0));
    for (var e = ke(), n = null, i = vs; i !== null; ) {
      var s = i.next,
        r = lm(i, e);
      (r === 0
        ? ((i.next = null),
          n === null ? (vs = s) : (n.next = s),
          s === null && (Ka = n))
        : ((n = i), (t !== 0 || (r & 3) !== 0) && (bs = !0)),
        (i = s));
    }
    Ki(t);
  }
  function lm(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;
    ) {
      var d = 31 - me(r),
        y = 1 << d,
        S = s[d];
      (S === -1
        ? ((y & n) === 0 || (y & i) !== 0) && (s[d] = f0(y, e))
        : S <= e && (t.expiredLanes |= y),
        (r &= ~y));
    }
    if (
      ((e = Ct),
      (n = pt),
      (n = Ml(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (xt === 2 || xt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && du(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || ri(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && du(i), yu(n))) {
        case 2:
        case 8:
          n = Jc;
          break;
        case 32:
          n = Tl;
          break;
        case 268435456:
          n = Fc;
          break;
        default:
          n = Tl;
      }
      return (
        (i = sm.bind(null, t)),
        (n = hu(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && du(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function sm(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (gs() && t.callbackNode !== n) return null;
    var i = pt;
    return (
      (i = Ml(
        t,
        t === Ct ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (qd(t, i, e),
          lm(t, ke()),
          t.callbackNode != null && t.callbackNode === n
            ? sm.bind(null, t)
            : null)
    );
  }
  function um(t, e) {
    if (gs()) return null;
    qd(t, e, !0);
  }
  function kv() {
    Fv(function () {
      (St & 6) !== 0 ? hu(Pc, Hv) : im();
    });
  }
  function ar() {
    return (sa === 0 && (sa = Wc()), sa);
  }
  function om(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : wl("" + t);
  }
  function rm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Yv(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = om((s[ue] || null).action),
        d = i.submitter;
      d &&
        ((e = (e = d[ue] || null)
          ? om(e.formAction)
          : d.getAttribute("formAction")),
        e !== null && ((r = e), (d = null)));
      var y = new Nl("action", "action", null, i, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (sa !== 0) {
                  var S = d ? rm(s, d) : new FormData(s);
                  Ao(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    null,
                    S,
                  );
                }
              } else
                typeof r == "function" &&
                  (y.preventDefault(),
                  (S = d ? rm(s, d) : new FormData(s)),
                  Ao(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    r,
                    S,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var ir = 0; ir < Yu.length; ir++) {
    var lr = Yu[ir],
      qv = lr.toLowerCase(),
      Gv = lr[0].toUpperCase() + lr.slice(1);
    Ne(qv, "on" + Gv);
  }
  (Ne(qf, "onAnimationEnd"),
    Ne(Gf, "onAnimationIteration"),
    Ne(Xf, "onAnimationStart"),
    Ne("dblclick", "onDoubleClick"),
    Ne("focusin", "onFocus"),
    Ne("focusout", "onBlur"),
    Ne(sv, "onTransitionRun"),
    Ne(uv, "onTransitionStart"),
    Ne(ov, "onTransitionCancel"),
    Ne(Zf, "onTransitionEnd"),
    ga("onMouseEnter", ["mouseout", "mouseover"]),
    ga("onMouseLeave", ["mouseout", "mouseover"]),
    ga("onPointerEnter", ["pointerout", "pointerover"]),
    ga("onPointerLeave", ["pointerout", "pointerover"]),
    Xn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Xn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Xn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Xn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Xn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Pi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Xv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Pi),
    );
  function cm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var d = i.length - 1; 0 <= d; d--) {
            var y = i[d],
              S = y.instance,
              D = y.currentTarget;
            if (((y = y.listener), S !== r && s.isPropagationStopped()))
              break t;
            ((r = y), (s.currentTarget = D));
            try {
              r(s);
            } catch (j) {
              ss(j);
            }
            ((s.currentTarget = null), (r = S));
          }
        else
          for (d = 0; d < i.length; d++) {
            if (
              ((y = i[d]),
              (S = y.instance),
              (D = y.currentTarget),
              (y = y.listener),
              S !== r && s.isPropagationStopped())
            )
              break t;
            ((r = y), (s.currentTarget = D));
            try {
              r(s);
            } catch (j) {
              ss(j);
            }
            ((s.currentTarget = null), (r = S));
          }
      }
    }
  }
  function ht(t, e) {
    var n = e[gu];
    n === void 0 && (n = e[gu] = new Set());
    var i = t + "__bubble";
    n.has(i) || (fm(e, t, 2, !1), n.add(i));
  }
  function sr(t, e, n) {
    var i = 0;
    (e && (i |= 4), fm(n, t, i, e));
  }
  var Ss = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(t) {
    if (!t[Ss]) {
      ((t[Ss] = !0),
        af.forEach(function (n) {
          n !== "selectionchange" && (Xv.has(n) || sr(n, !1, t), sr(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ss] || ((e[Ss] = !0), sr("selectionchange", !1, e));
    }
  }
  function fm(t, e, n, i) {
    switch (_m(e)) {
      case 2:
        var s = g1;
        break;
      case 8:
        s = v1;
        break;
      default:
        s = xr;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !Cu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function or(t, e, n, i, s) {
    var r = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var d = i.tag;
        if (d === 3 || d === 4) {
          var y = i.stateNode.containerInfo;
          if (y === s) break;
          if (d === 4)
            for (d = i.return; d !== null; ) {
              var S = d.tag;
              if ((S === 3 || S === 4) && d.stateNode.containerInfo === s)
                return;
              d = d.return;
            }
          for (; y !== null; ) {
            if (((d = ma(y)), d === null)) return;
            if (((S = d.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              i = r = d;
              continue t;
            }
            y = y.parentNode;
          }
        }
        i = i.return;
      }
    vf(function () {
      var D = r,
        j = Du(n),
        _ = [];
      t: {
        var R = Qf.get(t);
        if (R !== void 0) {
          var C = Nl,
            at = t;
          switch (t) {
            case "keypress":
              if (zl(n) === 0) break t;
            case "keydown":
            case "keyup":
              C = L0;
              break;
            case "focusin":
              ((at = "focus"), (C = zu));
              break;
            case "focusout":
              ((at = "blur"), (C = zu));
              break;
            case "beforeblur":
            case "afterblur":
              C = zu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = xf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = D0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Y0;
              break;
            case qf:
            case Gf:
            case Xf:
              C = O0;
              break;
            case Zf:
              C = G0;
              break;
            case "scroll":
            case "scrollend":
              C = E0;
              break;
            case "wheel":
              C = Z0;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = V0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Af;
              break;
            case "toggle":
            case "beforetoggle":
              C = K0;
          }
          var et = (e & 4) !== 0,
            Et = !et && (t === "scroll" || t === "scrollend"),
            E = et ? (R !== null ? R + "Capture" : null) : R;
          et = [];
          for (var A = D, M; A !== null; ) {
            var N = A;
            if (
              ((M = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                M === null ||
                E === null ||
                ((N = di(A, E)), N != null && et.push(Ji(A, N, M))),
              Et)
            )
              break;
            A = A.return;
          }
          0 < et.length &&
            ((R = new C(R, at, null, n, j)),
            _.push({ event: R, listeners: et }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((R = t === "mouseover" || t === "pointerover"),
            (C = t === "mouseout" || t === "pointerout"),
            R &&
              n !== Mu &&
              (at = n.relatedTarget || n.fromElement) &&
              (ma(at) || at[da]))
          )
            break t;
          if (
            (C || R) &&
            ((R =
              j.window === j
                ? j
                : (R = j.ownerDocument)
                  ? R.defaultView || R.parentWindow
                  : window),
            C
              ? ((at = n.relatedTarget || n.toElement),
                (C = D),
                (at = at ? ma(at) : null),
                at !== null &&
                  ((Et = h(at)),
                  (et = at.tag),
                  at !== Et || (et !== 5 && et !== 27 && et !== 6)) &&
                  (at = null))
              : ((C = null), (at = D)),
            C !== at)
          ) {
            if (
              ((et = xf),
              (N = "onMouseLeave"),
              (E = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((et = Af),
                (N = "onPointerLeave"),
                (E = "onPointerEnter"),
                (A = "pointer")),
              (Et = C == null ? R : hi(C)),
              (M = at == null ? R : hi(at)),
              (R = new et(N, A + "leave", C, n, j)),
              (R.target = Et),
              (R.relatedTarget = M),
              (N = null),
              ma(j) === D &&
                ((et = new et(E, A + "enter", at, n, j)),
                (et.target = M),
                (et.relatedTarget = Et),
                (N = et)),
              (Et = N),
              C && at)
            )
              e: {
                for (et = C, E = at, A = 0, M = et; M; M = Pa(M)) A++;
                for (M = 0, N = E; N; N = Pa(N)) M++;
                for (; 0 < A - M; ) ((et = Pa(et)), A--);
                for (; 0 < M - A; ) ((E = Pa(E)), M--);
                for (; A--; ) {
                  if (et === E || (E !== null && et === E.alternate)) break e;
                  ((et = Pa(et)), (E = Pa(E)));
                }
                et = null;
              }
            else et = null;
            (C !== null && hm(_, R, C, et, !1),
              at !== null && Et !== null && hm(_, Et, at, et, !0));
          }
        }
        t: {
          if (
            ((R = D ? hi(D) : window),
            (C = R.nodeName && R.nodeName.toLowerCase()),
            C === "select" || (C === "input" && R.type === "file"))
          )
            var J = Vf;
          else if (Of(R))
            if (zf) J = av;
            else {
              J = ev;
              var rt = tv;
            }
          else
            ((C = R.nodeName),
              !C ||
              C.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? D && Eu(D.elementType) && (J = Vf)
                : (J = nv));
          if (J && (J = J(t, D))) {
            wf(_, J, n, j);
            break t;
          }
          (rt && rt(t, R, D),
            t === "focusout" &&
              D &&
              R.type === "number" &&
              D.memoizedProps.value != null &&
              Au(R, "number", R.value));
        }
        switch (((rt = D ? hi(D) : window), t)) {
          case "focusin":
            (Of(rt) || rt.contentEditable === "true") &&
              ((Ea = rt), (Lu = D), (xi = null));
            break;
          case "focusout":
            xi = Lu = Ea = null;
            break;
          case "mousedown":
            Hu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Hu = !1), kf(_, n, j));
            break;
          case "selectionchange":
            if (lv) break;
          case "keydown":
          case "keyup":
            kf(_, n, j);
        }
        var I;
        if (Nu)
          t: {
            switch (t) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break t;
              case "compositionend":
                nt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break t;
            }
            nt = void 0;
          }
        else
          Aa
            ? Rf(t, n) && (nt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (nt = "onCompositionStart");
        (nt &&
          (Ef &&
            n.locale !== "ko" &&
            (Aa || nt !== "onCompositionStart"
              ? nt === "onCompositionEnd" && Aa && (I = bf())
              : ((pn = j),
                (Ou = "value" in pn ? pn.value : pn.textContent),
                (Aa = !0))),
          (rt = xs(D, nt)),
          0 < rt.length &&
            ((nt = new Tf(nt, t, null, n, j)),
            _.push({ event: nt, listeners: rt }),
            I ? (nt.data = I) : ((I = Cf(n)), I !== null && (nt.data = I)))),
          (I = J0 ? F0(t, n) : W0(t, n)) &&
            ((nt = xs(D, "onBeforeInput")),
            0 < nt.length &&
              ((rt = new Tf("onBeforeInput", "beforeinput", null, n, j)),
              _.push({ event: rt, listeners: nt }),
              (rt.data = I))),
          Yv(_, t, D, n, j));
      }
      cm(_, e);
    });
  }
  function Ji(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function xs(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        r = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          r === null ||
          ((s = di(t, n)),
          s != null && i.unshift(Ji(t, s, r)),
          (s = di(t, e)),
          s != null && i.push(Ji(t, s, r))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function Pa(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function hm(t, e, n, i, s) {
    for (var r = e._reactName, d = []; n !== null && n !== i; ) {
      var y = n,
        S = y.alternate,
        D = y.stateNode;
      if (((y = y.tag), S !== null && S === i)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        D === null ||
        ((S = D),
        s
          ? ((D = di(n, r)), D != null && d.unshift(Ji(n, D, S)))
          : s || ((D = di(n, r)), D != null && d.push(Ji(n, D, S)))),
        (n = n.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var Zv = /\r\n?/g,
    Qv = /\u0000|\uFFFD/g;
  function dm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Zv,
        `
`,
      )
      .replace(Qv, "");
  }
  function mm(t, e) {
    return ((e = dm(e)), dm(t) === e);
  }
  function Ts() {}
  function At(t, e, n, i, s, r) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Sa(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Sa(t, "" + i);
        break;
      case "className":
        Rl(t, "class", i);
        break;
      case "tabIndex":
        Rl(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Rl(t, n, i);
        break;
      case "style":
        yf(t, i, r);
        break;
      case "data":
        if (e !== "object") {
          Rl(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((i = wl("" + i)), t.setAttribute(n, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && At(t, e, "name", s.name, s, null),
                At(t, e, "formEncType", s.formEncType, s, null),
                At(t, e, "formMethod", s.formMethod, s, null),
                At(t, e, "formTarget", s.formTarget, s, null))
              : (At(t, e, "encType", s.encType, s, null),
                At(t, e, "method", s.method, s, null),
                At(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((i = wl("" + i)), t.setAttribute(n, i));
        break;
      case "onClick":
        i != null && (t.onclick = Ts);
        break;
      case "onScroll":
        i != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = wl("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? t.setAttribute(n, i)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        (ht("beforetoggle", t), ht("toggle", t), Dl(t, "popover", i));
        break;
      case "xlinkActuate":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Dl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = T0.get(n) || n), Dl(t, n, i));
    }
  }
  function rr(t, e, n, i, s, r) {
    switch (n) {
      case "style":
        yf(t, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Sa(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Sa(t, "" + i);
        break;
      case "onScroll":
        i != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ht("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Ts);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!lf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (r = t[ue] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, s),
              typeof i == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s));
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
                ? t.setAttribute(n, "")
                : Dl(t, n, i);
          }
    }
  }
  function $t(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ht("error", t), ht("load", t));
        var i = !1,
          s = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var d = n[r];
            if (d != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  At(t, e, r, d, n, null);
              }
          }
        (s && At(t, e, "srcSet", n.srcSet, n, null),
          i && At(t, e, "src", n.src, n, null));
        return;
      case "input":
        ht("invalid", t);
        var y = (r = d = s = null),
          S = null,
          D = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var j = n[i];
            if (j != null)
              switch (i) {
                case "name":
                  s = j;
                  break;
                case "type":
                  d = j;
                  break;
                case "checked":
                  S = j;
                  break;
                case "defaultChecked":
                  D = j;
                  break;
                case "value":
                  r = j;
                  break;
                case "defaultValue":
                  y = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(o(137, e));
                  break;
                default:
                  At(t, e, i, j, n, null);
              }
          }
        (hf(t, r, y, S, D, d, s, !1), Cl(t));
        return;
      case "select":
        (ht("invalid", t), (i = d = r = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
            switch (s) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                d = y;
                break;
              case "multiple":
                i = y;
              default:
                At(t, e, s, y, n, null);
            }
        ((e = r),
          (n = d),
          (t.multiple = !!i),
          e != null ? ba(t, !!i, e, !1) : n != null && ba(t, !!i, n, !0));
        return;
      case "textarea":
        (ht("invalid", t), (r = s = i = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((y = n[d]), y != null))
            switch (d) {
              case "value":
                i = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                r = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(91));
                break;
              default:
                At(t, e, d, y, n, null);
            }
        (mf(t, i, s, r), Cl(t));
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) &&
            ((i = n[S]), i != null) &&
            (S === "selected"
              ? (t.selected =
                  i && typeof i != "function" && typeof i != "symbol")
              : At(t, e, S, i, n, null));
        return;
      case "dialog":
        (ht("beforetoggle", t),
          ht("toggle", t),
          ht("cancel", t),
          ht("close", t));
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Pi.length; i++) ht(Pi[i], t);
        break;
      case "image":
        (ht("error", t), ht("load", t));
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (ht("error", t), ht("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && ((i = n[D]), i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                At(t, e, D, i, n, null);
            }
        return;
      default:
        if (Eu(e)) {
          for (j in n)
            n.hasOwnProperty(j) &&
              ((i = n[j]), i !== void 0 && rr(t, e, j, i, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((i = n[y]), i != null && At(t, e, y, i, n, null));
  }
  function Kv(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          r = null,
          d = null,
          y = null,
          S = null,
          D = null,
          j = null;
        for (C in n) {
          var _ = n[C];
          if (n.hasOwnProperty(C) && _ != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = _;
              default:
                i.hasOwnProperty(C) || At(t, e, C, null, i, _);
            }
        }
        for (var R in i) {
          var C = i[R];
          if (((_ = n[R]), i.hasOwnProperty(R) && (C != null || _ != null)))
            switch (R) {
              case "type":
                r = C;
                break;
              case "name":
                s = C;
                break;
              case "checked":
                D = C;
                break;
              case "defaultChecked":
                j = C;
                break;
              case "value":
                d = C;
                break;
              case "defaultValue":
                y = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(o(137, e));
                break;
              default:
                C !== _ && At(t, e, R, C, i, _);
            }
        }
        Tu(t, d, y, S, D, j, r, s);
        return;
      case "select":
        C = d = y = R = null;
        for (r in n)
          if (((S = n[r]), n.hasOwnProperty(r) && S != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                C = S;
              default:
                i.hasOwnProperty(r) || At(t, e, r, null, i, S);
            }
        for (s in i)
          if (
            ((r = i[s]),
            (S = n[s]),
            i.hasOwnProperty(s) && (r != null || S != null))
          )
            switch (s) {
              case "value":
                R = r;
                break;
              case "defaultValue":
                y = r;
                break;
              case "multiple":
                d = r;
              default:
                r !== S && At(t, e, s, r, i, S);
            }
        ((e = y),
          (n = d),
          (i = C),
          R != null
            ? ba(t, !!n, R, !1)
            : !!i != !!n &&
              (e != null ? ba(t, !!n, e, !0) : ba(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        C = R = null;
        for (y in n)
          if (
            ((s = n[y]),
            n.hasOwnProperty(y) && s != null && !i.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                At(t, e, y, null, i, s);
            }
        for (d in i)
          if (
            ((s = i[d]),
            (r = n[d]),
            i.hasOwnProperty(d) && (s != null || r != null))
          )
            switch (d) {
              case "value":
                R = s;
                break;
              case "defaultValue":
                C = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== r && At(t, e, d, s, i, r);
            }
        df(t, R, C);
        return;
      case "option":
        for (var at in n)
          ((R = n[at]),
            n.hasOwnProperty(at) &&
              R != null &&
              !i.hasOwnProperty(at) &&
              (at === "selected"
                ? (t.selected = !1)
                : At(t, e, at, null, i, R)));
        for (S in i)
          ((R = i[S]),
            (C = n[S]),
            i.hasOwnProperty(S) &&
              R !== C &&
              (R != null || C != null) &&
              (S === "selected"
                ? (t.selected =
                    R && typeof R != "function" && typeof R != "symbol")
                : At(t, e, S, R, i, C)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var et in n)
          ((R = n[et]),
            n.hasOwnProperty(et) &&
              R != null &&
              !i.hasOwnProperty(et) &&
              At(t, e, et, null, i, R));
        for (D in i)
          if (
            ((R = i[D]),
            (C = n[D]),
            i.hasOwnProperty(D) && R !== C && (R != null || C != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(o(137, e));
                break;
              default:
                At(t, e, D, R, i, C);
            }
        return;
      default:
        if (Eu(e)) {
          for (var Et in n)
            ((R = n[Et]),
              n.hasOwnProperty(Et) &&
                R !== void 0 &&
                !i.hasOwnProperty(Et) &&
                rr(t, e, Et, void 0, i, R));
          for (j in i)
            ((R = i[j]),
              (C = n[j]),
              !i.hasOwnProperty(j) ||
                R === C ||
                (R === void 0 && C === void 0) ||
                rr(t, e, j, R, i, C));
          return;
        }
    }
    for (var E in n)
      ((R = n[E]),
        n.hasOwnProperty(E) &&
          R != null &&
          !i.hasOwnProperty(E) &&
          At(t, e, E, null, i, R));
    for (_ in i)
      ((R = i[_]),
        (C = n[_]),
        !i.hasOwnProperty(_) ||
          R === C ||
          (R == null && C == null) ||
          At(t, e, _, R, i, C));
  }
  var cr = null,
    fr = null;
  function As(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function pm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ym(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function hr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var dr = null;
  function Pv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === dr
        ? !1
        : ((dr = t), !0)
      : ((dr = null), !1);
  }
  var gm = typeof setTimeout == "function" ? setTimeout : void 0,
    Jv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    vm = typeof Promise == "function" ? Promise : void 0,
    Fv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof vm < "u"
          ? function (t) {
              return vm.resolve(null).then(t).catch(Wv);
            }
          : gm;
  function Wv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Vn(t) {
    return t === "head";
  }
  function bm(t, e) {
    var n = e,
      i = 0,
      s = 0;
    do {
      var r = n.nextSibling;
      if ((t.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === "/$")) {
          if (0 < i && 8 > i) {
            n = i;
            var d = t.ownerDocument;
            if ((n & 1 && Fi(d.documentElement), n & 2 && Fi(d.body), n & 4))
              for (n = d.head, Fi(n), d = n.firstChild; d; ) {
                var y = d.nextSibling,
                  S = d.nodeName;
                (d[fi] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(d),
                  (d = y));
              }
          }
          if (s === 0) {
            (t.removeChild(r), il(e));
            return;
          }
          s--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? s++
            : (i = n.charCodeAt(0) - 48);
      else i = 0;
      n = r;
    } while (n);
    il(e);
  }
  function mr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (mr(n), vu(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function $v(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[fi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = Be(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Iv(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Be(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function pr(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function t1(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var i = function () {
        (e(), n.removeEventListener("DOMContentLoaded", i));
      };
      (n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
    }
  }
  function Be(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var yr = null;
  function Sm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function xm(t, e, n) {
    switch (((e = As(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Fi(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    vu(t);
  }
  var Ve = new Map(),
    Tm = new Set();
  function Es(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var fn = Z.d;
  Z.d = { f: e1, r: n1, D: a1, C: i1, L: l1, m: s1, X: o1, S: u1, M: r1 };
  function e1() {
    var t = fn.f(),
      e = ps();
    return t || e;
  }
  function n1(t) {
    var e = pa(t);
    e !== null && e.tag === 5 && e.type === "form" ? qh(e) : fn.r(t);
  }
  var Ja = typeof document > "u" ? null : document;
  function Am(t, e, n) {
    var i = Ja;
    if (i && typeof e == "string" && e) {
      var s = Ee(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Tm.has(s) ||
          (Tm.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            $t(e, "link", t),
            Zt(e),
            i.head.appendChild(e))));
    }
  }
  function a1(t) {
    (fn.D(t), Am("dns-prefetch", t, null));
  }
  function i1(t, e) {
    (fn.C(t, e), Am("preconnect", t, e));
  }
  function l1(t, e, n) {
    fn.L(t, e, n);
    var i = Ja;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Ee(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Ee(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Ee(n.imageSizes) + '"]'))
        : (s += '[href="' + Ee(t) + '"]');
      var r = s;
      switch (e) {
        case "style":
          r = Fa(t);
          break;
        case "script":
          r = Wa(t);
      }
      Ve.has(r) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        Ve.set(r, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(Wi(r))) ||
          (e === "script" && i.querySelector($i(r))) ||
          ((e = i.createElement("link")),
          $t(e, "link", t),
          Zt(e),
          i.head.appendChild(e)));
    }
  }
  function s1(t, e) {
    fn.m(t, e);
    var n = Ja;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Ee(i) + '"][href="' + Ee(t) + '"]',
        r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Wa(t);
      }
      if (
        !Ve.has(r) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        Ve.set(r, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector($i(r))) return;
        }
        ((i = n.createElement("link")),
          $t(i, "link", t),
          Zt(i),
          n.head.appendChild(i));
      }
    }
  }
  function u1(t, e, n) {
    fn.S(t, e, n);
    var i = Ja;
    if (i && t) {
      var s = ya(i).hoistableStyles,
        r = Fa(t);
      e = e || "default";
      var d = s.get(r);
      if (!d) {
        var y = { loading: 0, preload: null };
        if ((d = i.querySelector(Wi(r)))) y.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ve.get(r)) && gr(t, n));
          var S = (d = i.createElement("link"));
          (Zt(S),
            $t(S, "link", t),
            (S._p = new Promise(function (D, j) {
              ((S.onload = D), (S.onerror = j));
            })),
            S.addEventListener("load", function () {
              y.loading |= 1;
            }),
            S.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Ms(d, e, i));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: y }),
          s.set(r, d));
      }
    }
  }
  function o1(t, e) {
    fn.X(t, e);
    var n = Ja;
    if (n && t) {
      var i = ya(n).hoistableScripts,
        s = Wa(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector($i(s))),
        r ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = Ve.get(s)) && vr(t, e),
          (r = n.createElement("script")),
          Zt(r),
          $t(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function r1(t, e) {
    fn.M(t, e);
    var n = Ja;
    if (n && t) {
      var i = ya(n).hoistableScripts,
        s = Wa(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector($i(s))),
        r ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = Ve.get(s)) && vr(t, e),
          (r = n.createElement("script")),
          Zt(r),
          $t(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function Em(t, e, n, i) {
    var s = (s = lt.current) ? Es(s) : null;
    if (!s) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Fa(n.href)),
            (n = ya(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Fa(n.href);
          var r = ya(s).hoistableStyles,
            d = r.get(t);
          if (
            (d ||
              ((s = s.ownerDocument || s),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, d),
              (r = s.querySelector(Wi(t))) &&
                !r._p &&
                ((d.instance = r), (d.state.loading = 5)),
              Ve.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ve.set(t, n),
                r || c1(s, t, n, d.state))),
            e && i === null)
          )
            throw Error(o(528, ""));
          return d;
        }
        if (e && i !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Wa(n)),
              (n = ya(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function Fa(t) {
    return 'href="' + Ee(t) + '"';
  }
  function Wi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Mm(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function c1(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        $t(e, "link", n),
        Zt(e),
        t.head.appendChild(e));
  }
  function Wa(t) {
    return '[src="' + Ee(t) + '"]';
  }
  function $i(t) {
    return "script[async]" + t;
  }
  function Dm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Ee(n.href) + '"]');
          if (i) return ((e.instance = i), Zt(i), i);
          var s = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Zt(i),
            $t(i, "style", s),
            Ms(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = Fa(n.href);
          var r = t.querySelector(Wi(s));
          if (r) return ((e.state.loading |= 4), (e.instance = r), Zt(r), r);
          ((i = Mm(n)),
            (s = Ve.get(s)) && gr(i, s),
            (r = (t.ownerDocument || t).createElement("link")),
            Zt(r));
          var d = r;
          return (
            (d._p = new Promise(function (y, S) {
              ((d.onload = y), (d.onerror = S));
            })),
            $t(r, "link", i),
            (e.state.loading |= 4),
            Ms(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = Wa(n.src)),
            (s = t.querySelector($i(r)))
              ? ((e.instance = s), Zt(s), s)
              : ((i = n),
                (s = Ve.get(r)) && ((i = g({}, n)), vr(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Zt(s),
                $t(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Ms(i, n.precedence, t));
    return e.instance;
  }
  function Ms(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = i.length ? i[i.length - 1] : null,
        r = s,
        d = 0;
      d < i.length;
      d++
    ) {
      var y = i[d];
      if (y.dataset.precedence === e) r = y;
      else if (r !== s) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function gr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function vr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Ds = null;
  function Rm(t, e, n) {
    if (Ds === null) {
      var i = new Map(),
        s = (Ds = new Map());
      s.set(n, i);
    } else ((s = Ds), (i = s.get(n)), i || ((i = new Map()), s.set(n, i)));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var r = n[s];
      if (
        !(
          r[fi] ||
          r[ee] ||
          (t === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = r.getAttribute(e) || "";
        d = t + d;
        var y = i.get(d);
        y ? y.push(r) : i.set(d, [r]);
      }
    }
    return i;
  }
  function Cm(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function f1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Om(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ii = null;
  function h1() {}
  function d1(t, e, n) {
    if (Ii === null) throw Error(o(475));
    var i = Ii;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = Fa(n.href),
          r = t.querySelector(Wi(s));
        if (r) {
          ((t = r._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = Rs.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = r),
            Zt(r));
          return;
        }
        ((r = t.ownerDocument || t),
          (n = Mm(n)),
          (s = Ve.get(s)) && gr(n, s),
          (r = r.createElement("link")),
          Zt(r));
        var d = r;
        ((d._p = new Promise(function (y, S) {
          ((d.onload = y), (d.onerror = S));
        })),
          $t(r, "link", n),
          (e.instance = r));
      }
      (i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (i.count++,
          (e = Rs.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  function m1() {
    if (Ii === null) throw Error(o(475));
    var t = Ii;
    return (
      t.stylesheets && t.count === 0 && br(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && br(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                ((t.unsuspend = null), i());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Rs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) br(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Cs = null;
  function br(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Cs = new Map()),
        e.forEach(p1, t),
        (Cs = null),
        Rs.call(t)));
  }
  function p1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Cs.get(t);
      if (n) var i = n.get(null);
      else {
        ((n = new Map()), Cs.set(t, n));
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            r = 0;
          r < s.length;
          r++
        ) {
          var d = s[r];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (i = d));
        }
        i && n.set(null, i);
      }
      ((s = e.instance),
        (d = s.getAttribute("data-precedence")),
        (r = n.get(d) || i),
        r === i && n.set(null, s),
        n.set(d, s),
        this.count++,
        (i = Rs.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        r
          ? r.parentNode.insertBefore(s, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var tl = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function y1(t, e, n, i, s, r, d, y) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = mu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mu(0)),
      (this.hiddenUpdates = mu(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = r),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function wm(t, e, n, i, s, r, d, y, S, D, j, _) {
    return (
      (t = new y1(t, e, n, d, y, S, D, _)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = ye(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = Iu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: i, isDehydrated: n, cache: e }),
      ao(r),
      t
    );
  }
  function Vm(t) {
    return t ? ((t = Ca), t) : Ca;
  }
  function zm(t, e, n, i, s, r) {
    ((s = Vm(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = vn(e)),
      (i.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (i.callback = r),
      (n = bn(t, i, e)),
      n !== null && (xe(n, t, e), wi(n, t, e)));
  }
  function jm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Sr(t, e) {
    (jm(t, e), (t = t.alternate) && jm(t, e));
  }
  function Nm(t) {
    if (t.tag === 13) {
      var e = Ra(t, 67108864);
      (e !== null && xe(e, t, 67108864), Sr(t, 67108864));
    }
  }
  var Os = !0;
  function g1(t, e, n, i) {
    var s = V.T;
    V.T = null;
    var r = Z.p;
    try {
      ((Z.p = 2), xr(t, e, n, i));
    } finally {
      ((Z.p = r), (V.T = s));
    }
  }
  function v1(t, e, n, i) {
    var s = V.T;
    V.T = null;
    var r = Z.p;
    try {
      ((Z.p = 8), xr(t, e, n, i));
    } finally {
      ((Z.p = r), (V.T = s));
    }
  }
  function xr(t, e, n, i) {
    if (Os) {
      var s = Tr(i);
      if (s === null) (or(t, e, i, ws, n), Bm(t, i));
      else if (S1(s, t, e, n, i)) i.stopPropagation();
      else if ((Bm(t, i), e & 4 && -1 < b1.indexOf(t))) {
        for (; s !== null; ) {
          var r = pa(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var d = Gn(r.pendingLanes);
                  if (d !== 0) {
                    var y = r;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; d; ) {
                      var S = 1 << (31 - me(d));
                      ((y.entanglements[1] |= S), (d &= ~S));
                    }
                    (Ze(r), (St & 6) === 0 && ((ds = ke() + 500), Ki(0)));
                  }
                }
                break;
              case 13:
                ((y = Ra(r, 2)), y !== null && xe(y, r, 2), ps(), Sr(r, 2));
            }
          if (((r = Tr(i)), r === null && or(t, e, i, ws, n), r === s)) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else or(t, e, i, null, n);
    }
  }
  function Tr(t) {
    return ((t = Du(t)), Ar(t));
  }
  var ws = null;
  function Ar(t) {
    if (((ws = null), (t = ma(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((ws = t), null);
  }
  function _m(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (i0()) {
          case Pc:
            return 2;
          case Jc:
            return 8;
          case Tl:
          case l0:
            return 32;
          case Fc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Er = !1,
    zn = null,
    jn = null,
    Nn = null,
    el = new Map(),
    nl = new Map(),
    _n = [],
    b1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Bm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Nn = null;
        break;
      case "pointerover":
      case "pointerout":
        el.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nl.delete(e.pointerId);
    }
  }
  function al(t, e, n, i, s, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: r,
          targetContainers: [s],
        }),
        e !== null && ((e = pa(e)), e !== null && Nm(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function S1(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return ((zn = al(zn, t, e, n, i, s)), !0);
      case "dragenter":
        return ((jn = al(jn, t, e, n, i, s)), !0);
      case "mouseover":
        return ((Nn = al(Nn, t, e, n, i, s)), !0);
      case "pointerover":
        var r = s.pointerId;
        return (el.set(r, al(el.get(r) || null, t, e, n, i, s)), !0);
      case "gotpointercapture":
        return (
          (r = s.pointerId),
          nl.set(r, al(nl.get(r) || null, t, e, n, i, s)),
          !0
        );
    }
    return !1;
  }
  function Um(t) {
    var e = ma(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            ((t.blockedOn = e),
              d0(t.priority, function () {
                if (n.tag === 13) {
                  var i = Se();
                  i = pu(i);
                  var s = Ra(n, i);
                  (s !== null && xe(s, n, i), Sr(n, i));
                }
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Vs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Tr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((Mu = i), n.target.dispatchEvent(i), (Mu = null));
      } else return ((e = pa(n)), e !== null && Nm(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Lm(t, e, n) {
    Vs(t) && n.delete(e);
  }
  function x1() {
    ((Er = !1),
      zn !== null && Vs(zn) && (zn = null),
      jn !== null && Vs(jn) && (jn = null),
      Nn !== null && Vs(Nn) && (Nn = null),
      el.forEach(Lm),
      nl.forEach(Lm));
  }
  function zs(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Er ||
        ((Er = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, x1)));
  }
  var js = null;
  function Hm(t) {
    js !== t &&
      ((js = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        js === t && (js = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (Ar(i || n) === null) continue;
            break;
          }
          var r = pa(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ao(r, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function il(t) {
    function e(S) {
      return zs(S, t);
    }
    (zn !== null && zs(zn, t),
      jn !== null && zs(jn, t),
      Nn !== null && zs(Nn, t),
      el.forEach(e),
      nl.forEach(e));
    for (var n = 0; n < _n.length; n++) {
      var i = _n[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < _n.length && ((n = _n[0]), n.blockedOn === null); )
      (Um(n), n.blockedOn === null && _n.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          r = n[i + 1],
          d = s[ue] || null;
        if (typeof r == "function") d || Hm(n);
        else if (d) {
          var y = null;
          if (r && r.hasAttribute("formAction")) {
            if (((s = r), (d = r[ue] || null))) y = d.formAction;
            else if (Ar(s) !== null) continue;
          } else y = d.action;
          (typeof y == "function" ? (n[i + 1] = y) : (n.splice(i, 3), (i -= 3)),
            Hm(n));
        }
      }
  }
  function Mr(t) {
    this._internalRoot = t;
  }
  ((Ns.prototype.render = Mr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        i = Se();
      zm(n, i, t, e, null, null);
    }),
    (Ns.prototype.unmount = Mr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (zm(t.current, 2, null, t, null, null), ps(), (e[da] = null));
        }
      }));
  function Ns(t) {
    this._internalRoot = t;
  }
  Ns.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ef();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < _n.length && e !== 0 && e < _n[n].priority; n++);
      (_n.splice(n, 0, t), n === 0 && Um(t));
    }
  };
  var km = l.version;
  if (km !== "19.1.0") throw Error(o(527, km, "19.1.0"));
  Z.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? p(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var T1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: V,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_s.isDisabled && _s.supportsFiber)
      try {
        ((oi = _s.inject(T1)), (de = _s));
      } catch {}
  }
  return (
    (sl.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        i = "",
        s = nd,
        r = ad,
        d = id,
        y = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (y = e.unstable_transitionCallbacks)),
        (e = wm(t, 1, !1, null, null, n, i, s, r, d, y, null)),
        (t[da] = e.current),
        ur(t),
        new Mr(e)
      );
    }),
    (sl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(o(299));
      var i = !1,
        s = "",
        r = nd,
        d = ad,
        y = id,
        S = null,
        D = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (D = n.formState)),
        (e = wm(t, 1, !0, e, n ?? null, i, s, r, d, y, S, D)),
        (e.context = Vm(null)),
        (n = e.current),
        (i = Se()),
        (i = pu(i)),
        (s = vn(i)),
        (s.callback = null),
        bn(n, s, i),
        (n = i),
        (e.current.lanes = n),
        ci(e, n),
        Ze(e),
        (t[da] = e.current),
        ur(t),
        new Ns(e)
      );
    }),
    (sl.version = "19.1.0"),
    sl
  );
}
var Fm;
function z1() {
  if (Fm) return Rr.exports;
  Fm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Rr.exports = V1()), Rr.exports);
}
var j1 = z1(),
  X = vc();
const bc = X.createContext({});
function Sc(a) {
  const l = X.useRef(null);
  return (l.current === null && (l.current = a()), l.current);
}
const N1 = typeof window < "u",
  py = N1 ? X.useLayoutEffect : X.useEffect,
  lu = X.createContext(null);
function xc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function Fs(a, l) {
  const u = a.indexOf(l);
  u > -1 && a.splice(u, 1);
}
const Je = (a, l, u) => (u > l ? l : u < a ? a : u);
let Tc = () => {};
const Hn = {},
  yy = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function gy(a) {
  return typeof a == "object" && a !== null;
}
const vy = (a) => /^0[^.\s]+$/u.test(a);
function by(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const je = (a) => a,
  _1 = (a, l) => (u) => l(a(u)),
  gl = (...a) => a.reduce(_1),
  dl = (a, l, u) => {
    const o = l - a;
    return o === 0 ? 1 : (u - a) / o;
  };
class Ac {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return (xc(this.subscriptions, l), () => Fs(this.subscriptions, l));
  }
  notify(l, u, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, o);
      else
        for (let h = 0; h < c; h++) {
          const f = this.subscriptions[h];
          f && f(l, u, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Te = (a) => a * 1e3,
  ze = (a) => a / 1e3;
function Sy(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const xy = (a, l, u) =>
    (((1 - 3 * u + 3 * l) * a + (3 * u - 6 * l)) * a + 3 * l) * a,
  B1 = 1e-7,
  U1 = 12;
function L1(a, l, u, o, c) {
  let h,
    f,
    m = 0;
  do ((f = l + (u - l) / 2), (h = xy(f, o, c) - a), h > 0 ? (u = f) : (l = f));
  while (Math.abs(h) > B1 && ++m < U1);
  return f;
}
function vl(a, l, u, o) {
  if (a === l && u === o) return je;
  const c = (h) => L1(h, 0, 1, a, u);
  return (h) => (h === 0 || h === 1 ? h : xy(c(h), l, o));
}
const Ty = (a) => (l) => (l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2),
  Ay = (a) => (l) => 1 - a(1 - l),
  Ey = vl(0.33, 1.53, 0.69, 0.99),
  Ec = Ay(Ey),
  My = Ty(Ec),
  Dy = (a) =>
    a >= 1
      ? 1
      : (a *= 2) < 1
        ? 0.5 * Ec(a)
        : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  Mc = (a) => 1 - Math.sin(Math.acos(a)),
  Ry = Ay(Mc),
  Cy = Ty(Mc),
  H1 = vl(0.42, 0, 1, 1),
  k1 = vl(0, 0, 0.58, 1),
  Oy = vl(0.42, 0, 0.58, 1),
  Y1 = (a) => Array.isArray(a) && typeof a[0] != "number",
  wy = (a) => Array.isArray(a) && typeof a[0] == "number",
  q1 = {
    linear: je,
    easeIn: H1,
    easeInOut: Oy,
    easeOut: k1,
    circIn: Mc,
    circInOut: Cy,
    circOut: Ry,
    backIn: Ec,
    backInOut: My,
    backOut: Ey,
    anticipate: Dy,
  },
  G1 = (a) => typeof a == "string",
  Wm = (a) => {
    if (wy(a)) {
      Tc(a.length === 4);
      const [l, u, o, c] = a;
      return vl(l, u, o, c);
    } else if (G1(a)) return q1[a];
    return a;
  },
  Bs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function X1(a, l) {
  let u = new Set(),
    o = new Set(),
    c = !1,
    h = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 };
  function v(g) {
    (f.has(g) && (p.schedule(g), a()), g(m));
  }
  const p = {
    schedule: (g, b = !1, x = !1) => {
      const z = x && c ? u : o;
      return (b && f.add(g), z.add(g), g);
    },
    cancel: (g) => {
      (o.delete(g), f.delete(g));
    },
    process: (g) => {
      if (((m = g), c)) {
        h = !0;
        return;
      }
      c = !0;
      const b = u;
      ((u = o),
        (o = b),
        u.forEach(v),
        u.clear(),
        (c = !1),
        h && ((h = !1), p.process(g)));
    },
  };
  return p;
}
const Z1 = 40;
function Vy(a, l) {
  let u = !1,
    o = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (u = !0),
    f = Bs.reduce((H, q) => ((H[q] = X1(h)), H), {}),
    {
      setup: m,
      read: v,
      resolveKeyframes: p,
      preUpdate: g,
      update: b,
      preRender: x,
      render: O,
      postRender: z,
    } = f,
    L = () => {
      const H = Hn.useManualTiming,
        q = H ? c.timestamp : performance.now();
      ((u = !1),
        H ||
          (c.delta = o ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, Z1), 1)),
        (c.timestamp = q),
        (c.isProcessing = !0),
        m.process(c),
        v.process(c),
        p.process(c),
        g.process(c),
        b.process(c),
        x.process(c),
        O.process(c),
        z.process(c),
        (c.isProcessing = !1),
        u && l && ((o = !1), a(L)));
    },
    U = () => {
      ((u = !0), (o = !0), c.isProcessing || a(L));
    };
  return {
    schedule: Bs.reduce((H, q) => {
      const Y = f[q];
      return (
        (H[q] = (ct, yt = !1, W = !1) => (u || U(), Y.schedule(ct, yt, W))),
        H
      );
    }, {}),
    cancel: (H) => {
      for (let q = 0; q < Bs.length; q++) f[Bs[q]].cancel(H);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: Dt,
  cancel: kn,
  state: It,
  steps: zr,
} = Vy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : je, !0);
let Ys;
function Q1() {
  Ys = void 0;
}
const le = {
    now: () => (
      Ys === void 0 &&
        le.set(
          It.isProcessing || Hn.useManualTiming
            ? It.timestamp
            : performance.now(),
        ),
      Ys
    ),
    set: (a) => {
      ((Ys = a), queueMicrotask(Q1));
    },
  },
  zy = (a) => (l) => typeof l == "string" && l.startsWith(a),
  jy = zy("--"),
  K1 = zy("var(--"),
  Dc = (a) => (K1(a) ? P1.test(a.split("/*")[0].trim()) : !1),
  P1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function $m(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const li = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  ml = { ...li, transform: (a) => Je(0, 1, a) },
  Us = { ...li, default: 1 },
  rl = (a) => Math.round(a * 1e5) / 1e5,
  Rc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function J1(a) {
  return a == null;
}
const F1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Cc = (a, l) => (u) =>
    !!(
      (typeof u == "string" && F1.test(u) && u.startsWith(a)) ||
      (l && !J1(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  Ny = (a, l, u) => (o) => {
    if (typeof o != "string") return o;
    const [c, h, f, m] = o.match(Rc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(h),
      [u]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  W1 = (a) => Je(0, 255, a),
  jr = { ...li, transform: (a) => Math.round(W1(a)) },
  ra = {
    test: Cc("rgb", "red"),
    parse: Ny("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: u, alpha: o = 1 }) =>
      "rgba(" +
      jr.transform(a) +
      ", " +
      jr.transform(l) +
      ", " +
      jr.transform(u) +
      ", " +
      rl(ml.transform(o)) +
      ")",
  };
function $1(a) {
  let l = "",
    u = "",
    o = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (u = a.substring(3, 5)),
        (o = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (u = a.substring(2, 3)),
        (o = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (u += u),
        (o += o),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(o, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Pr = { test: Cc("#"), parse: $1, transform: ra.transform },
  bl = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  Un = bl("deg"),
  Pe = bl("%"),
  F = bl("px"),
  I1 = bl("vh"),
  tb = bl("vw"),
  Im = {
    ...Pe,
    parse: (a) => Pe.parse(a) / 100,
    transform: (a) => Pe.transform(a * 100),
  },
  ti = {
    test: Cc("hsl", "hue"),
    parse: Ny("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: u, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      Pe.transform(rl(l)) +
      ", " +
      Pe.transform(rl(u)) +
      ", " +
      rl(ml.transform(o)) +
      ")",
  },
  kt = {
    test: (a) => ra.test(a) || Pr.test(a) || ti.test(a),
    parse: (a) =>
      ra.test(a) ? ra.parse(a) : ti.test(a) ? ti.parse(a) : Pr.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
          ? ra.transform(a)
          : ti.transform(a),
    getAnimatableNone: (a) => {
      const l = kt.parse(a);
      return ((l.alpha = 0), kt.transform(l));
    },
  },
  eb =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nb(a) {
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (a.match(Rc)?.length || 0) + (a.match(eb)?.length || 0) > 0
  );
}
const _y = "number",
  By = "color",
  ab = "var",
  ib = "var(",
  tp = "${}",
  lb =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ai(a) {
  const l = a.toString(),
    u = [],
    o = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const m = l
    .replace(
      lb,
      (v) => (
        kt.test(v)
          ? (o.color.push(h), c.push(By), u.push(kt.parse(v)))
          : v.startsWith(ib)
            ? (o.var.push(h), c.push(ab), u.push(v))
            : (o.number.push(h), c.push(_y), u.push(parseFloat(v))),
        ++h,
        tp
      ),
    )
    .split(tp);
  return { values: u, split: m, indexes: o, types: c };
}
function sb(a) {
  return ai(a).values;
}
function Uy({ split: a, types: l }) {
  const u = a.length;
  return (o) => {
    let c = "";
    for (let h = 0; h < u; h++)
      if (((c += a[h]), o[h] !== void 0)) {
        const f = l[h];
        f === _y
          ? (c += rl(o[h]))
          : f === By
            ? (c += kt.transform(o[h]))
            : (c += o[h]);
      }
    return c;
  };
}
function ub(a) {
  return Uy(ai(a));
}
const ob = (a) =>
    typeof a == "number" ? 0 : kt.test(a) ? kt.getAnimatableNone(a) : a,
  rb = (a, l) =>
    typeof a == "number" ? (l?.trim().endsWith("/") ? a : 0) : ob(a);
function cb(a) {
  const l = ai(a);
  return Uy(l)(l.values.map((o, c) => rb(o, l.split[c])));
}
const He = {
  test: nb,
  parse: sb,
  createTransformer: ub,
  getAnimatableNone: cb,
};
function Nr(a, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? a + (l - a) * 6 * u
      : u < 1 / 2
        ? l
        : u < 2 / 3
          ? a + (l - a) * (2 / 3 - u) * 6
          : a
  );
}
function fb({ hue: a, saturation: l, lightness: u, alpha: o }) {
  ((a /= 360), (l /= 100), (u /= 100));
  let c = 0,
    h = 0,
    f = 0;
  if (!l) c = h = f = u;
  else {
    const m = u < 0.5 ? u * (1 + l) : u + l - u * l,
      v = 2 * u - m;
    ((c = Nr(v, m, a + 1 / 3)), (h = Nr(v, m, a)), (f = Nr(v, m, a - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(f * 255),
    alpha: o,
  };
}
function Ws(a, l) {
  return (u) => (u > 0 ? l : a);
}
const Ot = (a, l, u) => a + (l - a) * u,
  _r = (a, l, u) => {
    const o = a * a,
      c = u * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  hb = [Pr, ra, ti],
  db = (a) => hb.find((l) => l.test(a));
function ep(a) {
  const l = db(a);
  if (!l) return !1;
  let u = l.parse(a);
  return (l === ti && (u = fb(u)), u);
}
const np = (a, l) => {
    const u = ep(a),
      o = ep(l);
    if (!u || !o) return Ws(a, l);
    const c = { ...u };
    return (h) => (
      (c.red = _r(u.red, o.red, h)),
      (c.green = _r(u.green, o.green, h)),
      (c.blue = _r(u.blue, o.blue, h)),
      (c.alpha = Ot(u.alpha, o.alpha, h)),
      ra.transform(c)
    );
  },
  Jr = new Set(["none", "hidden"]);
function mb(a, l) {
  return Jr.has(a) ? (u) => (u <= 0 ? a : l) : (u) => (u >= 1 ? l : a);
}
function pb(a, l) {
  return (u) => Ot(a, l, u);
}
function Oc(a) {
  return typeof a == "number"
    ? pb
    : typeof a == "string"
      ? Dc(a)
        ? Ws
        : kt.test(a)
          ? np
          : vb
      : Array.isArray(a)
        ? Ly
        : typeof a == "object"
          ? kt.test(a)
            ? np
            : yb
          : Ws;
}
function Ly(a, l) {
  const u = [...a],
    o = u.length,
    c = a.map((h, f) => Oc(h)(h, l[f]));
  return (h) => {
    for (let f = 0; f < o; f++) u[f] = c[f](h);
    return u;
  };
}
function yb(a, l) {
  const u = { ...a, ...l },
    o = {};
  for (const c in u)
    a[c] !== void 0 && l[c] !== void 0 && (o[c] = Oc(a[c])(a[c], l[c]));
  return (c) => {
    for (const h in o) u[h] = o[h](c);
    return u;
  };
}
function gb(a, l) {
  const u = [],
    o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c],
      f = a.indexes[h][o[h]],
      m = a.values[f] ?? 0;
    ((u[c] = m), o[h]++);
  }
  return u;
}
const vb = (a, l) => {
  const u = He.createTransformer(l),
    o = ai(a),
    c = ai(l);
  return o.indexes.var.length === c.indexes.var.length &&
    o.indexes.color.length === c.indexes.color.length &&
    o.indexes.number.length >= c.indexes.number.length
    ? (Jr.has(a) && !c.values.length) || (Jr.has(l) && !o.values.length)
      ? mb(a, l)
      : gl(Ly(gb(o, c), c.values), u)
    : Ws(a, l);
};
function Hy(a, l, u) {
  return typeof a == "number" && typeof l == "number" && typeof u == "number"
    ? Ot(a, l, u)
    : Oc(a)(a, l);
}
const bb = (a) => {
    const l = ({ timestamp: u }) => a(u);
    return {
      start: (u = !0) => Dt.update(l, u),
      stop: () => kn(l),
      now: () => (It.isProcessing ? It.timestamp : le.now()),
    };
  },
  ky = (a, l, u = 10) => {
    let o = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let h = 0; h < c; h++)
      o += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  $s = 2e4;
function wc(a) {
  let l = 0;
  const u = 50;
  let o = a.next(l);
  for (; !o.done && l < $s; ) ((l += u), (o = a.next(l)));
  return l >= $s ? 1 / 0 : l;
}
function Sb(a, l = 100, u) {
  const o = u({ ...a, keyframes: [0, l] }),
    c = Math.min(wc(o), $s);
  return {
    type: "keyframes",
    ease: (h) => o.next(c * h).value / l,
    duration: ze(c),
  };
}
const _t = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Fr(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const xb = 12;
function Tb(a, l, u) {
  let o = u;
  for (let c = 1; c < xb; c++) o = o - a(o) / l(o);
  return o;
}
const Br = 0.001;
function Ab({
  duration: a = _t.duration,
  bounce: l = _t.bounce,
  velocity: u = _t.velocity,
  mass: o = _t.mass,
}) {
  let c,
    h,
    f = 1 - l;
  ((f = Je(_t.minDamping, _t.maxDamping, f)),
    (a = Je(_t.minDuration, _t.maxDuration, ze(a))),
    f < 1
      ? ((c = (p) => {
          const g = p * f,
            b = g * a,
            x = g - u,
            O = Fr(p, f),
            z = Math.exp(-b);
          return Br - (x / O) * z;
        }),
        (h = (p) => {
          const b = p * f * a,
            x = b * u + u,
            O = Math.pow(f, 2) * Math.pow(p, 2) * a,
            z = Math.exp(-b),
            L = Fr(Math.pow(p, 2), f);
          return ((-c(p) + Br > 0 ? -1 : 1) * ((x - O) * z)) / L;
        }))
      : ((c = (p) => {
          const g = Math.exp(-p * a),
            b = (p - u) * a + 1;
          return -Br + g * b;
        }),
        (h = (p) => {
          const g = Math.exp(-p * a),
            b = (u - p) * (a * a);
          return g * b;
        })));
  const m = 5 / a,
    v = Tb(c, h, m);
  if (((a = Te(a)), isNaN(v)))
    return { stiffness: _t.stiffness, damping: _t.damping, duration: a };
  {
    const p = Math.pow(v, 2) * o;
    return { stiffness: p, damping: f * 2 * Math.sqrt(o * p), duration: a };
  }
}
const Eb = ["duration", "bounce"],
  Mb = ["stiffness", "damping", "mass"];
function ap(a, l) {
  return l.some((u) => a[u] !== void 0);
}
function Db(a) {
  let l = {
    velocity: _t.velocity,
    stiffness: _t.stiffness,
    damping: _t.damping,
    mass: _t.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!ap(a, Mb) && ap(a, Eb))
    if (((l.velocity = 0), a.visualDuration)) {
      const u = a.visualDuration,
        o = (2 * Math.PI) / (u * 1.2),
        c = o * o,
        h = 2 * Je(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: _t.mass, stiffness: c, damping: h };
    } else {
      const u = Ab({ ...a, velocity: 0 });
      ((l = { ...l, ...u, mass: _t.mass }), (l.isResolvedFromDuration = !0));
    }
  return l;
}
function Is(a = _t.visualDuration, l = _t.bounce) {
  const u =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: o, restDelta: c } = u;
  const h = u.keyframes[0],
    f = u.keyframes[u.keyframes.length - 1],
    m = { done: !1, value: h },
    {
      stiffness: v,
      damping: p,
      mass: g,
      duration: b,
      velocity: x,
      isResolvedFromDuration: O,
    } = Db({ ...u, velocity: -ze(u.velocity || 0) }),
    z = x || 0,
    L = p / (2 * Math.sqrt(v * g)),
    U = f - h,
    k = ze(Math.sqrt(v / g)),
    G = Math.abs(U) < 5;
  (o || (o = G ? _t.restSpeed.granular : _t.restSpeed.default),
    c || (c = G ? _t.restDelta.granular : _t.restDelta.default));
  let H, q, Y, ct, yt, W;
  if (L < 1)
    ((Y = Fr(k, L)),
      (ct = (z + L * k * U) / Y),
      (H = ($) => {
        const dt = Math.exp(-L * k * $);
        return f - dt * (ct * Math.sin(Y * $) + U * Math.cos(Y * $));
      }),
      (yt = L * k * ct + U * Y),
      (W = L * k * U - ct * Y),
      (q = ($) =>
        Math.exp(-L * k * $) * (yt * Math.sin(Y * $) + W * Math.cos(Y * $))));
  else if (L === 1) {
    H = (dt) => f - Math.exp(-k * dt) * (U + (z + k * U) * dt);
    const $ = z + k * U;
    q = (dt) => Math.exp(-k * dt) * (k * $ * dt - z);
  } else {
    const $ = k * Math.sqrt(L * L - 1);
    H = (Xt) => {
      const Rt = Math.exp(-L * k * Xt),
        V = Math.min($ * Xt, 300);
      return (
        f - (Rt * ((z + L * k * U) * Math.sinh(V) + $ * U * Math.cosh(V))) / $
      );
    };
    const dt = (z + L * k * U) / $,
      mt = L * k * dt - U * $,
      Jt = L * k * U - dt * $;
    q = (Xt) => {
      const Rt = Math.exp(-L * k * Xt),
        V = Math.min($ * Xt, 300);
      return Rt * (mt * Math.sinh(V) + Jt * Math.cosh(V));
    };
  }
  const it = {
    calculatedDuration: (O && b) || null,
    velocity: ($) => Te(q($)),
    next: ($) => {
      if (!O && L < 1) {
        const mt = Math.exp(-L * k * $),
          Jt = Math.sin(Y * $),
          Xt = Math.cos(Y * $),
          Rt = f - mt * (ct * Jt + U * Xt),
          V = Te(mt * (yt * Jt + W * Xt));
        return (
          (m.done = Math.abs(V) <= o && Math.abs(f - Rt) <= c),
          (m.value = m.done ? f : Rt),
          m
        );
      }
      const dt = H($);
      if (O) m.done = $ >= b;
      else {
        const mt = Te(q($));
        m.done = Math.abs(mt) <= o && Math.abs(f - dt) <= c;
      }
      return ((m.value = m.done ? f : dt), m);
    },
    toString: () => {
      const $ = Math.min(wc(it), $s),
        dt = ky((mt) => it.next($ * mt).value, $, 30);
      return $ + "ms " + dt;
    },
    toTransition: () => {},
  };
  return it;
}
Is.applyToOptions = (a) => {
  const l = Sb(a, 100, Is);
  return (
    (a.ease = l.ease),
    (a.duration = Te(l.duration)),
    (a.type = "keyframes"),
    a
  );
};
const Rb = 5;
function Yy(a, l, u) {
  const o = Math.max(l - Rb, 0);
  return Sy(u - a(o), l - o);
}
function Wr({
  keyframes: a,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: o = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: f,
  min: m,
  max: v,
  restDelta: p = 0.5,
  restSpeed: g,
}) {
  const b = a[0],
    x = { done: !1, value: b },
    O = (W) => (m !== void 0 && W < m) || (v !== void 0 && W > v),
    z = (W) =>
      m === void 0
        ? v
        : v === void 0 || Math.abs(m - W) < Math.abs(v - W)
          ? m
          : v;
  let L = u * l;
  const U = b + L,
    k = f === void 0 ? U : f(U);
  k !== U && (L = k - b);
  const G = (W) => -L * Math.exp(-W / o),
    H = (W) => k + G(W),
    q = (W) => {
      const it = G(W),
        $ = H(W);
      ((x.done = Math.abs(it) <= p), (x.value = x.done ? k : $));
    };
  let Y, ct;
  const yt = (W) => {
    O(x.value) &&
      ((Y = W),
      (ct = Is({
        keyframes: [x.value, z(x.value)],
        velocity: Yy(H, W, x.value),
        damping: c,
        stiffness: h,
        restDelta: p,
        restSpeed: g,
      })));
  };
  return (
    yt(0),
    {
      calculatedDuration: null,
      next: (W) => {
        let it = !1;
        return (
          !ct && Y === void 0 && ((it = !0), q(W), yt(W)),
          Y !== void 0 && W >= Y ? ct.next(W - Y) : (!it && q(W), x)
        );
      },
    }
  );
}
function Cb(a, l, u) {
  const o = [],
    c = u || Hn.mix || Hy,
    h = a.length - 1;
  for (let f = 0; f < h; f++) {
    let m = c(a[f], a[f + 1]);
    if (l) {
      const v = Array.isArray(l) ? l[f] || je : l;
      m = gl(v, m);
    }
    o.push(m);
  }
  return o;
}
function Ob(a, l, { clamp: u = !0, ease: o, mixer: c } = {}) {
  const h = a.length;
  if ((Tc(h === l.length), h === 1)) return () => l[0];
  if (h === 2 && l[0] === l[1]) return () => l[1];
  const f = a[0] === a[1];
  a[0] > a[h - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const m = Cb(l, o, c),
    v = m.length,
    p = (g) => {
      if (f && g < a[0]) return l[0];
      let b = 0;
      if (v > 1) for (; b < a.length - 2 && !(g < a[b + 1]); b++);
      const x = dl(a[b], a[b + 1], g);
      return m[b](x);
    };
  return u ? (g) => p(Je(a[0], a[h - 1], g)) : p;
}
function wb(a, l) {
  const u = a[a.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = dl(0, l, o);
    a.push(Ot(u, 1, c));
  }
}
function Vb(a) {
  const l = [0];
  return (wb(l, a.length - 1), l);
}
function zb(a, l) {
  return a.map((u) => u * l);
}
function jb(a, l) {
  return a.map(() => l || Oy).splice(0, a.length - 1);
}
function cl({
  duration: a = 300,
  keyframes: l,
  times: u,
  ease: o = "easeInOut",
}) {
  const c = Y1(o) ? o.map(Wm) : Wm(o),
    h = { done: !1, value: l[0] },
    f = zb(u && u.length === l.length ? u : Vb(l), a),
    m = Ob(f, l, { ease: Array.isArray(c) ? c : jb(l, c) });
  return {
    calculatedDuration: a,
    next: (v) => ((h.value = m(v)), (h.done = v >= a), h),
  };
}
const Nb = (a) => a !== null;
function su(a, { repeat: l, repeatType: u = "loop" }, o, c = 1) {
  const h = a.filter(Nb),
    m = c < 0 || (l && u !== "loop" && l % 2 === 1) ? 0 : h.length - 1;
  return !m || o === void 0 ? h[m] : o;
}
const _b = { decay: Wr, inertia: Wr, tween: cl, keyframes: cl, spring: Is };
function qy(a) {
  typeof a.type == "string" && (a.type = _b[a.type]);
}
class Vc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, u) {
    return this.finished.then(l, u);
  }
}
const Bb = (a) => a / 100;
class tu extends Vc {
  constructor(l) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: u } = this.options;
        (u && u.updatedAt !== le.now() && this.tick(le.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: l } = this;
    qy(l);
    const {
      type: u = cl,
      repeat: o = 0,
      repeatDelay: c = 0,
      repeatType: h,
      velocity: f = 0,
    } = l;
    let { keyframes: m } = l;
    const v = u || cl;
    v !== cl &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = gl(Bb, Hy(m[0], m[1]))), (m = [0, 100]));
    const p = v({ ...l, keyframes: m });
    (h === "mirror" &&
      (this.mirroredGenerator = v({
        ...l,
        keyframes: [...m].reverse(),
        velocity: -f,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = wc(p)));
    const { calculatedDuration: g } = p;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + c),
      (this.totalDuration = this.resolvedDuration * (o + 1) - c),
      (this.generator = p));
  }
  updateTime(l) {
    const u = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = u);
  }
  tick(l, u = !1) {
    const {
      generator: o,
      totalDuration: c,
      mixKeyframes: h,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: v,
    } = this;
    if (this.startTime === null) return o.next(0);
    const {
      delay: p = 0,
      keyframes: g,
      repeat: b,
      repeatType: x,
      repeatDelay: O,
      type: z,
      onUpdate: L,
      finalKeyframe: U,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      u ? (this.currentTime = l) : this.updateTime(l));
    const k = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      G = this.playbackSpeed >= 0 ? k < 0 : k > c;
    ((this.currentTime = Math.max(k, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let H = this.currentTime,
      q = o;
    if (b) {
      const W = Math.min(this.currentTime, c) / m;
      let it = Math.floor(W),
        $ = W % 1;
      (!$ && W >= 1 && ($ = 1),
        $ === 1 && it--,
        (it = Math.min(it, b + 1)),
        it % 2 &&
          (x === "reverse"
            ? (($ = 1 - $), O && ($ -= O / m))
            : x === "mirror" && (q = f)),
        (H = Je(0, 1, $) * m));
    }
    let Y;
    (G
      ? ((this.delayState.value = g[0]), (Y = this.delayState))
      : (Y = q.next(H)),
      h && !G && (Y.value = h(Y.value)));
    let { done: ct } = Y;
    !G &&
      v !== null &&
      (ct =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const yt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && ct));
    return (
      yt && z !== Wr && (Y.value = su(g, this.options, U, this.speed)),
      L && L(Y.value),
      yt && this.finish(),
      Y
    );
  }
  then(l, u) {
    return this.finished.then(l, u);
  }
  get duration() {
    return ze(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + ze(l);
  }
  get time() {
    return ze(this.currentTime);
  }
  set time(l) {
    ((l = Te(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = l),
          this.tick(l)));
  }
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(l);
    const u = this.generator.next(l).value;
    return Yy((o) => this.generator.next(o).value, l, u);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const u = this.playbackSpeed !== l;
    (u && this.driver && this.updateTime(le.now()),
      (this.playbackSpeed = l),
      u && this.driver && (this.time = ze(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: l = bb, startTime: u } = this.options;
    (this.driver || (this.driver = l((c) => this.tick(c))),
      this.options.onPlay?.());
    const o = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = o))
      : this.holdTime !== null
        ? (this.startTime = o - this.holdTime)
        : this.startTime || (this.startTime = u ?? o),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(le.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return ((this.startTime = 0), this.tick(l, !0));
  }
  attachTimeline(l) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      l.observe(this)
    );
  }
}
function Ub(a) {
  for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1]);
}
const ca = (a) => (a * 180) / Math.PI,
  $r = (a) => {
    const l = ca(Math.atan2(a[1], a[0]));
    return Ir(l);
  },
  Lb = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: $r,
    rotateZ: $r,
    skewX: (a) => ca(Math.atan(a[1])),
    skewY: (a) => ca(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  Ir = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  ip = $r,
  lp = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  sp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  Hb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: lp,
    scaleY: sp,
    scale: (a) => (lp(a) + sp(a)) / 2,
    rotateX: (a) => Ir(ca(Math.atan2(a[6], a[5]))),
    rotateY: (a) => Ir(ca(Math.atan2(-a[2], a[0]))),
    rotateZ: ip,
    rotate: ip,
    skewX: (a) => ca(Math.atan(a[4])),
    skewY: (a) => ca(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function tc(a) {
  return a.includes("scale") ? 1 : 0;
}
function ec(a, l) {
  if (!a || a === "none") return tc(l);
  const u = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (u) ((o = Hb), (c = u));
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((o = Lb), (c = m));
  }
  if (!c) return tc(l);
  const h = o[l],
    f = c[1].split(",").map(Yb);
  return typeof h == "function" ? h(f) : f[h];
}
const kb = (a, l) => {
  const { transform: u = "none" } = getComputedStyle(a);
  return ec(u, l);
};
function Yb(a) {
  return parseFloat(a.trim());
}
const si = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ui = new Set(si),
  up = (a) => a === li || a === F,
  qb = new Set(["x", "y", "z"]),
  Gb = si.filter((a) => !qb.has(a));
function Xb(a) {
  const l = [];
  return (
    Gb.forEach((u) => {
      const o = a.getValue(u);
      o !== void 0 &&
        (l.push([u, o.get()]), o.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const Ln = {
  width: (
    { x: a },
    { paddingLeft: l = "0", paddingRight: u = "0", boxSizing: o },
  ) => {
    const c = a.max - a.min;
    return o === "border-box" ? c : c - parseFloat(l) - parseFloat(u);
  },
  height: (
    { y: a },
    { paddingTop: l = "0", paddingBottom: u = "0", boxSizing: o },
  ) => {
    const c = a.max - a.min;
    return o === "border-box" ? c : c - parseFloat(l) - parseFloat(u);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => ec(l, "x"),
  y: (a, { transform: l }) => ec(l, "y"),
};
Ln.translateX = Ln.x;
Ln.translateY = Ln.y;
const fa = new Set();
let nc = !1,
  ac = !1,
  ic = !1;
function Gy() {
  if (ac) {
    const a = Array.from(fa).filter((o) => o.needsMeasurement),
      l = new Set(a.map((o) => o.element)),
      u = new Map();
    (l.forEach((o) => {
      const c = Xb(o);
      c.length && (u.set(o, c), o.render());
    }),
      a.forEach((o) => o.measureInitialState()),
      l.forEach((o) => {
        o.render();
        const c = u.get(o);
        c &&
          c.forEach(([h, f]) => {
            o.getValue(h)?.set(f);
          });
      }),
      a.forEach((o) => o.measureEndState()),
      a.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      }));
  }
  ((ac = !1), (nc = !1), fa.forEach((a) => a.complete(ic)), fa.clear());
}
function Xy() {
  fa.forEach((a) => {
    (a.readKeyframes(), a.needsMeasurement && (ac = !0));
  });
}
function Zb() {
  ((ic = !0), Xy(), Gy(), (ic = !1));
}
class zc {
  constructor(l, u, o, c, h, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = o),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (fa.add(this),
          nc || ((nc = !0), Dt.read(Xy), Dt.resolveKeyframes(Gy)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: o,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const h = c?.get(),
        f = l[l.length - 1];
      if (h !== void 0) l[0] = h;
      else if (o && u) {
        const m = o.readValue(u, f);
        m != null && (l[0] = m);
      }
      (l[0] === void 0 && (l[0] = f), c && h === void 0 && c.set(l[0]));
    }
    Ub(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      fa.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (fa.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Qb = (a) => a.startsWith("--");
function Zy(a, l, u) {
  Qb(l) ? a.style.setProperty(l, u) : (a.style[l] = u);
}
const Kb = {};
function Qy(a, l) {
  const u = by(a);
  return () => Kb[l] ?? u();
}
const Pb = Qy(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Ky = Qy(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ol = ([a, l, u, o]) => `cubic-bezier(${a}, ${l}, ${u}, ${o})`,
  op = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ol([0, 0.65, 0.55, 1]),
    circOut: ol([0.55, 0, 1, 0.45]),
    backIn: ol([0.31, 0.01, 0.66, -0.59]),
    backOut: ol([0.33, 1.53, 0.69, 0.99]),
  };
function Py(a, l) {
  if (a)
    return typeof a == "function"
      ? Ky()
        ? ky(a, l)
        : "ease-out"
      : wy(a)
        ? ol(a)
        : Array.isArray(a)
          ? a.map((u) => Py(u, l) || op.easeOut)
          : op[a];
}
function Jb(
  a,
  l,
  u,
  {
    delay: o = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: v,
  } = {},
  p = void 0,
) {
  const g = { [l]: u };
  v && (g.offset = v);
  const b = Py(m, c);
  Array.isArray(b) && (g.easing = b);
  const x = {
    delay: o,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (p && (x.pseudoElement = p), a.animate(g, x));
}
function Jy(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function Fb({ type: a, ...l }) {
  return Jy(a) && Ky()
    ? a.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Fy extends Vc {
  constructor(l) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !l)
    )
      return;
    const {
      element: u,
      name: o,
      keyframes: c,
      pseudoElement: h,
      allowFlatten: f = !1,
      finalKeyframe: m,
      onComplete: v,
    } = l;
    ((this.isPseudoElement = !!h),
      (this.allowFlatten = f),
      (this.options = l),
      Tc(typeof l.type != "string"));
    const p = Fb(l);
    ((this.animation = Jb(u, o, c, p, h)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const g = su(c, this.options, m, this.speed);
          (this.updateMotionValue && this.updateMotionValue(g),
            Zy(u, o, g),
            this.animation.cancel());
        }
        (v?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return ze(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + ze(l);
  }
  get time() {
    return ze(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const u = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Te(l)),
      u && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    (l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, rangeStart: u, rangeEnd: o, observe: c }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      l && Pb()
        ? ((this.animation.timeline = l),
          u && (this.animation.rangeStart = u),
          o && (this.animation.rangeEnd = o),
          je)
        : c(this)
    );
  }
}
const Wy = { anticipate: Dy, backInOut: My, circInOut: Cy };
function Wb(a) {
  return a in Wy;
}
function $b(a) {
  typeof a.ease == "string" && Wb(a.ease) && (a.ease = Wy[a.ease]);
}
const Ur = 10;
class Ib extends Fy {
  constructor(l) {
    ($b(l),
      qy(l),
      super(l),
      l.startTime !== void 0 &&
        l.autoplay !== !1 &&
        (this.startTime = l.startTime),
      (this.options = l));
  }
  updateMotionValue(l) {
    const {
      motionValue: u,
      onUpdate: o,
      onComplete: c,
      element: h,
      ...f
    } = this.options;
    if (!u) return;
    if (l !== void 0) {
      u.set(l);
      return;
    }
    const m = new tu({ ...f, autoplay: !1 }),
      v = Math.max(Ur, le.now() - this.startTime),
      p = Je(0, Ur, v - Ur),
      g = m.sample(v).value,
      { name: b } = this.options;
    (h && b && Zy(h, b, g),
      u.setWithVelocity(m.sample(Math.max(0, v - p)).value, g, p),
      m.stop());
  }
}
const rp = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (He.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function tS(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let u = 0; u < a.length; u++) if (a[u] !== l) return !0;
}
function eS(a, l, u, o) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const h = a[a.length - 1],
    f = rp(c, l),
    m = rp(h, l);
  return !f || !m ? !1 : tS(a) || ((u === "spring" || Jy(u)) && o);
}
function lc(a) {
  ((a.duration = 0), (a.type = "keyframes"));
}
const $y = new Set(["opacity", "clipPath", "filter", "transform"]),
  nS = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function aS(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && nS.test(a[l])) return !0;
  return !1;
}
const iS = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  lS = by(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function sS(a) {
  const {
    motionValue: l,
    name: u,
    repeatDelay: o,
    repeatType: c,
    damping: h,
    type: f,
    keyframes: m,
  } = a;
  if (!(l?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: p, transformTemplate: g } = l.owner.getProps();
  return (
    lS() &&
    u &&
    ($y.has(u) || (iS.has(u) && aS(m))) &&
    (u !== "transform" || !g) &&
    !p &&
    !o &&
    c !== "mirror" &&
    h !== 0 &&
    f !== "inertia"
  );
}
const uS = 40;
class oS extends Vc {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: o = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: v,
    motionValue: p,
    element: g,
    ...b
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = le.now()));
    const x = {
        autoplay: l,
        delay: u,
        type: o,
        repeat: c,
        repeatDelay: h,
        repeatType: f,
        name: v,
        motionValue: p,
        element: g,
        ...b,
      },
      O = g?.KeyframeResolver || zc;
    ((this.keyframeResolver = new O(
      m,
      (z, L, U) => this.onKeyframesResolved(z, L, x, !U),
      v,
      p,
      g,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(l, u, o, c) {
    this.keyframeResolver = void 0;
    const {
      name: h,
      type: f,
      velocity: m,
      delay: v,
      isHandoff: p,
      onUpdate: g,
    } = o;
    this.resolvedAt = le.now();
    let b = !0;
    eS(l, h, f, m) ||
      ((b = !1),
      (Hn.instantAnimations || !v) && g?.(su(l, o, u)),
      (l[0] = l[l.length - 1]),
      lc(o),
      (o.repeat = 0));
    const O = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > uS
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: u,
        ...o,
        keyframes: l,
      },
      z = b && !p && sS(O),
      L = O.motionValue?.owner?.current;
    let U;
    if (z)
      try {
        U = new Ib({ ...O, element: L });
      } catch {
        U = new tu(O);
      }
    else U = new tu(O);
    (U.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(je),
      this.pendingTimeline &&
        ((this.stopTimeline = U.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = U));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, u) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), Zb()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
function Iy(a, l, u, o = 0, c = 1) {
  const h = Array.from(a)
      .sort((p, g) => p.sortNodePosition(g))
      .indexOf(l),
    f = a.size,
    m = (f - 1) * o;
  return typeof u == "function" ? u(h, f) : c === 1 ? h * o : m - h * o;
}
const rS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function cS(a) {
  const l = rS.exec(a);
  if (!l) return [,];
  const [, u, o, c] = l;
  return [`--${u ?? o}`, c];
}
function tg(a, l, u = 1) {
  const [o, c] = cS(a);
  if (!o) return;
  const h = window.getComputedStyle(l).getPropertyValue(o);
  if (h) {
    const f = h.trim();
    return yy(f) ? parseFloat(f) : f;
  }
  return Dc(c) ? tg(c, l, u + 1) : c;
}
const fS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  hS = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  dS = { type: "keyframes", duration: 0.8 },
  mS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  pS = (a, { keyframes: l }) =>
    l.length > 2
      ? dS
      : ui.has(a)
        ? a.startsWith("scale")
          ? hS(l[1])
          : fS
        : mS;
function eg(a, l) {
  if (a?.inherit && l) {
    const { inherit: u, ...o } = a;
    return { ...l, ...o };
  }
  return a;
}
function jc(a, l) {
  const u = a?.[l] ?? a?.default ?? a;
  return u !== a ? eg(u, a) : u;
}
const yS = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function gS(a) {
  for (const l in a) if (!yS.has(l)) return !0;
  return !1;
}
const Nc =
  (a, l, u, o = {}, c, h) =>
  (f) => {
    const m = jc(o, a) || {},
      v = m.delay || o.delay || 0;
    let { elapsed: p = 0 } = o;
    p = p - Te(v);
    const g = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...m,
      delay: -p,
      onUpdate: (x) => {
        (l.set(x), m.onUpdate && m.onUpdate(x));
      },
      onComplete: () => {
        (f(), m.onComplete && m.onComplete());
      },
      name: a,
      motionValue: l,
      element: h ? void 0 : c,
    };
    (gS(m) || Object.assign(g, pS(a, g)),
      g.duration && (g.duration = Te(g.duration)),
      g.repeatDelay && (g.repeatDelay = Te(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from));
    let b = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        (lc(g), g.delay === 0 && (b = !0)),
      (Hn.instantAnimations || Hn.skipAnimations || c?.shouldSkipAnimations) &&
        ((b = !0), lc(g), (g.delay = 0)),
      (g.allowFlatten = !m.type && !m.ease),
      b && !h && l.get() !== void 0)
    ) {
      const x = su(g.keyframes, m);
      if (x !== void 0) {
        Dt.update(() => {
          (g.onUpdate(x), g.onComplete());
        });
        return;
      }
    }
    return m.isSync ? new tu(g) : new oS(g);
  };
function cp(a) {
  const l = [{}, {}];
  return (
    a?.values.forEach((u, o) => {
      ((l[0][o] = u.get()), (l[1][o] = u.getVelocity()));
    }),
    l
  );
}
function _c(a, l, u, o) {
  if (typeof l == "function") {
    const [c, h] = cp(o);
    l = l(u !== void 0 ? u : a.custom, c, h);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, h] = cp(o);
    l = l(u !== void 0 ? u : a.custom, c, h);
  }
  return l;
}
function ha(a, l, u) {
  const o = a.getProps();
  return _c(o, l, u !== void 0 ? u : o.custom, a);
}
const ng = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...si,
  ]),
  fp = 30,
  vS = (a) => !isNaN(parseFloat(a));
class bS {
  constructor(l, u = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        const c = le.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const h of this.dependents) h.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner));
  }
  setCurrent(l) {
    ((this.current = l),
      (this.updatedAt = le.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = vS(this.current)));
  }
  setPrevFrameValue(l = this.current) {
    ((this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new Ac());
    const o = this.events[l].add(u);
    return l === "change"
      ? () => {
          (o(),
            Dt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : o;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    ((this.passiveEffect = l), (this.stopPassiveEffect = u));
  }
  set(l) {
    this.passiveEffect
      ? this.passiveEffect(l, this.updateAndNotify)
      : this.updateAndNotify(l);
  }
  setWithVelocity(l, u, o) {
    (this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - o));
  }
  jump(l, u = !0) {
    (this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(l));
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = le.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > fp
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, fp);
    return Sy(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        ((this.hasAnimated = !0),
          (this.animation = l(u)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ii(a, l) {
  return new bS(a, l);
}
const sc = (a) => Array.isArray(a);
function SS(a, l, u) {
  a.hasValue(l) ? a.getValue(l).set(u) : a.addValue(l, ii(u));
}
function xS(a) {
  return sc(a) ? a[a.length - 1] || 0 : a;
}
function TS(a, l) {
  const u = ha(a, l);
  let { transitionEnd: o = {}, transition: c = {}, ...h } = u || {};
  h = { ...h, ...o };
  for (const f in h) {
    const m = xS(h[f]);
    SS(a, f, m);
  }
}
const te = (a) => !!(a && a.getVelocity);
function AS(a) {
  return !!(te(a) && a.add);
}
function uc(a, l) {
  const u = a.getValue("willChange");
  if (AS(u)) return u.add(l);
  if (!u && Hn.WillChange) {
    const o = new Hn.WillChange("auto");
    (a.addValue("willChange", o), o.add(l));
  }
}
function Bc(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const ES = "framerAppearId",
  ag = "data-" + Bc(ES);
function ig(a) {
  return a.props[ag];
}
function MS({ protectedKeys: a, needsAnimating: l }, u) {
  const o = a.hasOwnProperty(u) && l[u] !== !0;
  return ((l[u] = !1), o);
}
function lg(a, l, { delay: u = 0, transitionOverride: o, type: c } = {}) {
  let { transition: h, transitionEnd: f, ...m } = l;
  const v = a.getDefaultTransition();
  h = h ? eg(h, v) : v;
  const p = h?.reduceMotion;
  o && (h = o);
  const g = [],
    b = c && a.animationState && a.animationState.getState()[c];
  for (const x in m) {
    const O = a.getValue(x, a.latestValues[x] ?? null),
      z = m[x];
    if (z === void 0 || (b && MS(b, x))) continue;
    const L = { delay: u, ...jc(h || {}, x) },
      U = O.get();
    if (
      U !== void 0 &&
      !O.isAnimating() &&
      !Array.isArray(z) &&
      z === U &&
      !L.velocity
    ) {
      Dt.update(() => O.set(z));
      continue;
    }
    let k = !1;
    if (window.MotionHandoffAnimation) {
      const q = ig(a);
      if (q) {
        const Y = window.MotionHandoffAnimation(q, x, Dt);
        Y !== null && ((L.startTime = Y), (k = !0));
      }
    }
    uc(a, x);
    const G = p ?? a.shouldReduceMotion;
    O.start(Nc(x, O, z, G && ng.has(x) ? { type: !1 } : L, a, k));
    const H = O.animation;
    H && g.push(H);
  }
  if (f) {
    const x = () =>
      Dt.update(() => {
        f && TS(a, f);
      });
    g.length ? Promise.all(g).then(x) : x();
  }
  return g;
}
function oc(a, l, u = {}) {
  const o = ha(a, l, u.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = o || {};
  u.transitionOverride && (c = u.transitionOverride);
  const h = o ? () => Promise.all(lg(a, o, u)) : () => Promise.resolve(),
    f =
      a.variantChildren && a.variantChildren.size
        ? (v = 0) => {
            const {
              delayChildren: p = 0,
              staggerChildren: g,
              staggerDirection: b,
            } = c;
            return DS(a, l, v, p, g, b, u);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [v, p] = m === "beforeChildren" ? [h, f] : [f, h];
    return v().then(() => p());
  } else return Promise.all([h(), f(u.delay)]);
}
function DS(a, l, u = 0, o = 0, c = 0, h = 1, f) {
  const m = [];
  for (const v of a.variantChildren)
    (v.notify("AnimationStart", l),
      m.push(
        oc(v, l, {
          ...f,
          delay:
            u +
            (typeof o == "function" ? 0 : o) +
            Iy(a.variantChildren, v, o, c, h),
        }).then(() => v.notify("AnimationComplete", l)),
      ));
  return Promise.all(m);
}
function RS(a, l, u = {}) {
  a.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const c = l.map((h) => oc(a, h, u));
    o = Promise.all(c);
  } else if (typeof l == "string") o = oc(a, l, u);
  else {
    const c = typeof l == "function" ? ha(a, l, u.custom) : l;
    o = Promise.all(lg(a, c, u));
  }
  return o.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const CS = { test: (a) => a === "auto", parse: (a) => a },
  sg = (a) => (l) => l.test(a),
  ug = [li, F, Pe, Un, tb, I1, CS],
  hp = (a) => ug.find(sg(a));
function OS(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
      ? a === "none" || a === "0" || vy(a)
      : !0;
}
const wS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function VS(a) {
  const [l, u] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [o] = u.match(Rc) || [];
  if (!o) return a;
  const c = u.replace(o, "");
  let h = wS.has(l) ? 1 : 0;
  return (o !== u && (h *= 100), l + "(" + h + c + ")");
}
const zS = /\b([a-z-]*)\(.*?\)/gu,
  rc = {
    ...He,
    getAnimatableNone: (a) => {
      const l = a.match(zS);
      return l ? l.map(VS).join(" ") : a;
    },
  },
  cc = {
    ...He,
    getAnimatableNone: (a) => {
      const l = He.parse(a);
      return He.createTransformer(a)(
        l.map((o) =>
          typeof o == "number"
            ? 0
            : typeof o == "object"
              ? { ...o, alpha: 1 }
              : o,
        ),
      );
    },
  },
  dp = { ...li, transform: Math.round },
  jS = {
    rotate: Un,
    rotateX: Un,
    rotateY: Un,
    rotateZ: Un,
    scale: Us,
    scaleX: Us,
    scaleY: Us,
    scaleZ: Us,
    skew: Un,
    skewX: Un,
    skewY: Un,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: ml,
    originX: Im,
    originY: Im,
    originZ: F,
  },
  Uc = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    inset: F,
    insetBlock: F,
    insetBlockStart: F,
    insetBlockEnd: F,
    insetInline: F,
    insetInlineStart: F,
    insetInlineEnd: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    paddingBlock: F,
    paddingBlockStart: F,
    paddingBlockEnd: F,
    paddingInline: F,
    paddingInlineStart: F,
    paddingInlineEnd: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    marginBlock: F,
    marginBlockStart: F,
    marginBlockEnd: F,
    marginInline: F,
    marginInlineStart: F,
    marginInlineEnd: F,
    fontSize: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
    ...jS,
    zIndex: dp,
    fillOpacity: ml,
    strokeOpacity: ml,
    numOctaves: dp,
  },
  NS = {
    ...Uc,
    color: kt,
    backgroundColor: kt,
    outlineColor: kt,
    fill: kt,
    stroke: kt,
    borderColor: kt,
    borderTopColor: kt,
    borderRightColor: kt,
    borderBottomColor: kt,
    borderLeftColor: kt,
    filter: rc,
    WebkitFilter: rc,
    mask: cc,
    WebkitMask: cc,
  },
  og = (a) => NS[a],
  _S = new Set([rc, cc]);
function rg(a, l) {
  let u = og(a);
  return (
    _S.has(u) || (u = He),
    u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const BS = new Set(["auto", "none", "0"]);
function US(a, l, u) {
  let o = 0,
    c;
  for (; o < a.length && !c; ) {
    const h = a[o];
    (typeof h == "string" && !BS.has(h) && ai(h).values.length && (c = a[o]),
      o++);
  }
  if (c && u) for (const h of l) a[h] = rg(u, c);
}
class LS extends zc {
  constructor(l, u, o, c, h) {
    super(l, u, o, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: o } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let b = l[g];
      if (typeof b == "string" && ((b = b.trim()), Dc(b))) {
        const x = tg(b, u.current);
        (x !== void 0 && (l[g] = x),
          g === l.length - 1 && (this.finalKeyframe = b));
      }
    }
    if ((this.resolveNoneKeyframes(), !ng.has(o) || l.length !== 2)) return;
    const [c, h] = l,
      f = hp(c),
      m = hp(h),
      v = $m(c),
      p = $m(h);
    if (v !== p && Ln[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (up(f) && up(m))
        for (let g = 0; g < l.length; g++) {
          const b = l[g];
          typeof b == "string" && (l[g] = parseFloat(b));
        }
      else Ln[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      o = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || OS(l[c])) && o.push(c);
    o.length && US(l, o, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: o } = this;
    if (!l || !l.current) return;
    (o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ln[o](
        l.measureViewportBox(),
        window.getComputedStyle(l.current),
      )),
      (u[0] = this.measuredOrigin));
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: u, unresolvedKeyframes: o } = this;
    if (!l || !l.current) return;
    const c = l.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const h = o.length - 1,
      f = o[h];
    ((o[h] = Ln[u](l.measureViewportBox(), window.getComputedStyle(l.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([m, v]) => {
          l.getValue(m).set(v);
        }),
      this.resolveNoneKeyframes());
  }
}
function cg(a, l, u) {
  if (a == null) return [];
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let o = document;
    const c = u?.[a] ?? o.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((o) => o != null);
}
const fg = (a, l) => (l && typeof a == "number" ? l.transform(a) : a);
function qs(a) {
  return gy(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: Lc } = Vy(queueMicrotask, !1),
  Le = { x: !1, y: !1 };
function hg() {
  return Le.x || Le.y;
}
function HS(a) {
  return a === "x" || a === "y"
    ? Le[a]
      ? null
      : ((Le[a] = !0),
        () => {
          Le[a] = !1;
        })
    : Le.x || Le.y
      ? null
      : ((Le.x = Le.y = !0),
        () => {
          Le.x = Le.y = !1;
        });
}
function dg(a, l) {
  const u = cg(a),
    o = new AbortController(),
    c = { passive: !0, ...l, signal: o.signal };
  return [u, c, () => o.abort()];
}
function kS(a) {
  return !(a.pointerType === "touch" || hg());
}
function YS(a, l, u = {}) {
  const [o, c, h] = dg(a, u);
  return (
    o.forEach((f) => {
      let m = !1,
        v = !1,
        p;
      const g = () => {
          f.removeEventListener("pointerleave", z);
        },
        b = (U) => {
          (p && (p(U), (p = void 0)), g());
        },
        x = (U) => {
          ((m = !1),
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", x),
            v && ((v = !1), b(U)));
        },
        O = () => {
          ((m = !0),
            window.addEventListener("pointerup", x, c),
            window.addEventListener("pointercancel", x, c));
        },
        z = (U) => {
          if (U.pointerType !== "touch") {
            if (m) {
              v = !0;
              return;
            }
            b(U);
          }
        },
        L = (U) => {
          if (!kS(U)) return;
          v = !1;
          const k = l(f, U);
          typeof k == "function" &&
            ((p = k), f.addEventListener("pointerleave", z, c));
        };
      (f.addEventListener("pointerenter", L, c),
        f.addEventListener("pointerdown", O, c));
    }),
    h
  );
}
const mg = (a, l) => (l ? (a === l ? !0 : mg(a, l.parentElement)) : !1),
  Hc = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  qS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function GS(a) {
  return qS.has(a.tagName) || a.isContentEditable === !0;
}
const XS = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function ZS(a) {
  return XS.has(a.tagName) || a.isContentEditable === !0;
}
const Gs = new WeakSet();
function mp(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Lr(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }),
  );
}
const QS = (a, l) => {
  const u = a.currentTarget;
  if (!u) return;
  const o = mp(() => {
    if (Gs.has(u)) return;
    Lr(u, "down");
    const c = mp(() => {
        Lr(u, "up");
      }),
      h = () => Lr(u, "cancel");
    (u.addEventListener("keyup", c, l), u.addEventListener("blur", h, l));
  });
  (u.addEventListener("keydown", o, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", o), l));
};
function pp(a) {
  return Hc(a) && !hg();
}
const yp = new WeakSet();
function KS(a, l, u = {}) {
  const [o, c, h] = dg(a, u),
    f = (m) => {
      const v = m.currentTarget;
      if (!pp(m) || yp.has(m)) return;
      (Gs.add(v), u.stopPropagation && yp.add(m));
      const p = l(v, m),
        g = (O, z) => {
          (window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", x),
            Gs.has(v) && Gs.delete(v),
            pp(O) && typeof p == "function" && p(O, { success: z }));
        },
        b = (O) => {
          g(
            O,
            v === window ||
              v === document ||
              u.useGlobalTarget ||
              mg(v, O.target),
          );
        },
        x = (O) => {
          g(O, !1);
        };
      (window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", x, c));
    };
  return (
    o.forEach((m) => {
      ((u.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        qs(m) &&
          (m.addEventListener("focus", (p) => QS(p, c)),
          !GS(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)));
    }),
    h
  );
}
function kc(a) {
  return gy(a) && "ownerSVGElement" in a;
}
const Xs = new WeakMap();
let Zs;
const pg = (a, l, u) => (o, c) =>
    c && c[0]
      ? c[0][a + "Size"]
      : kc(o) && "getBBox" in o
        ? o.getBBox()[l]
        : o[u],
  PS = pg("inline", "width", "offsetWidth"),
  JS = pg("block", "height", "offsetHeight");
function FS({ target: a, borderBoxSize: l }) {
  Xs.get(a)?.forEach((u) => {
    u(a, {
      get width() {
        return PS(a, l);
      },
      get height() {
        return JS(a, l);
      },
    });
  });
}
function WS(a) {
  a.forEach(FS);
}
function $S() {
  typeof ResizeObserver > "u" || (Zs = new ResizeObserver(WS));
}
function IS(a, l) {
  Zs || $S();
  const u = cg(a);
  return (
    u.forEach((o) => {
      let c = Xs.get(o);
      (c || ((c = new Set()), Xs.set(o, c)), c.add(l), Zs?.observe(o));
    }),
    () => {
      u.forEach((o) => {
        const c = Xs.get(o);
        (c?.delete(l), c?.size || Zs?.unobserve(o));
      });
    }
  );
}
const Qs = new Set();
let ei;
function t2() {
  ((ei = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Qs.forEach((l) => l(a));
  }),
    window.addEventListener("resize", ei));
}
function e2(a) {
  return (
    Qs.add(a),
    ei || t2(),
    () => {
      (Qs.delete(a),
        !Qs.size &&
          typeof ei == "function" &&
          (window.removeEventListener("resize", ei), (ei = void 0)));
    }
  );
}
function gp(a, l) {
  return typeof a == "function" ? e2(a) : IS(a, l);
}
function n2(a) {
  return kc(a) && a.tagName === "svg";
}
const a2 = [...ug, kt, He],
  i2 = (a) => a2.find(sg(a)),
  vp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ni = () => ({ x: vp(), y: vp() }),
  bp = () => ({ min: 0, max: 0 }),
  Gt = () => ({ x: bp(), y: bp() }),
  l2 = new WeakMap();
function uu(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function pl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const Yc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  qc = ["initial", ...Yc];
function ou(a) {
  return uu(a.animate) || qc.some((l) => pl(a[l]));
}
function yg(a) {
  return !!(ou(a) || a.variants);
}
function s2(a, l, u) {
  for (const o in l) {
    const c = l[o],
      h = u[o];
    if (te(c)) a.addValue(o, c);
    else if (te(h)) a.addValue(o, ii(c, { owner: a }));
    else if (h !== c)
      if (a.hasValue(o)) {
        const f = a.getValue(o);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = a.getStaticValue(o);
        a.addValue(o, ii(f !== void 0 ? f : c, { owner: a }));
      }
  }
  for (const o in u) l[o] === void 0 && a.removeValue(o);
  return l;
}
const fc = { current: null },
  gg = { current: !1 },
  u2 = typeof window < "u";
function o2() {
  if (((gg.current = !0), !!u2))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (fc.current = a.matches);
      (a.addEventListener("change", l), l());
    } else fc.current = !1;
}
const Sp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let eu = {};
function vg(a) {
  eu = a;
}
function r2() {
  return eu;
}
class c2 {
  scrapeMotionValuesFromProps(l, u, o) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: o,
      reducedMotionConfig: c,
      skipAnimations: h,
      blockInitialAnimation: f,
      visualState: m,
    },
    v = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = zc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const O = le.now();
        this.renderScheduledAt < O &&
          ((this.renderScheduledAt = O), Dt.render(this.render, !1, !0));
      }));
    const { latestValues: p, renderState: g } = m;
    ((this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = u.initial ? { ...p } : {}),
      (this.renderState = g),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = o),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = h),
      (this.options = v),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = ou(u)),
      (this.isVariantNode = yg(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current)));
    const { willChange: b, ...x } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this,
    );
    for (const O in x) {
      const z = x[O];
      p[O] !== void 0 && te(z) && z.set(p[O]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const u in this.initialValues)
        (this.values.get(u)?.jump(this.initialValues[u]),
          (this.latestValues[u] = this.initialValues[u]));
    ((this.current = l),
      l2.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, o) => this.bindToMotionValue(o, u)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (gg.current || o2(), (this.shouldReduceMotion = fc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      kn(this.notifyUpdate),
      kn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    (this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l));
  }
  removeChild(l) {
    (this.children.delete(l),
      this.enteringChildren && this.enteringChildren.delete(l));
  }
  bindToMotionValue(l, u) {
    if (
      (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(),
      u.accelerate && $y.has(l) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: m,
          times: v,
          ease: p,
          duration: g,
        } = u.accelerate,
        b = new Fy({
          element: this.current,
          name: l,
          keyframes: m,
          times: v,
          ease: p,
          duration: Te(g),
        }),
        x = f(b);
      this.valueSubscriptions.set(l, () => {
        (x(), b.cancel());
      });
      return;
    }
    const o = ui.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (f) => {
      ((this.latestValues[l] = f),
        this.props.onUpdate && Dt.preRender(this.notifyUpdate),
        o && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let h;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        (c(), h && h(), u.owner && u.stop());
      }));
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in eu) {
      const u = eu[l];
      if (!u) continue;
      const { isEnabled: o, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          o(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Gt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    ((l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u));
    for (let o = 0; o < Sp.length; o++) {
      const c = Sp[o];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        f = l[h];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = s2(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const o = this.values.get(l);
    u !== o &&
      (o && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    (u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState));
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let o = this.values.get(l);
    return (
      o === void 0 &&
        u !== void 0 &&
        ((o = ii(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, o)),
      o
    );
  }
  readValue(l, u) {
    let o =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options));
    return (
      o != null &&
        (typeof o == "string" && (yy(o) || vy(o))
          ? (o = parseFloat(o))
          : !i2(o) && He.test(u) && (o = rg(l, u)),
        this.setBaseTarget(l, te(o) ? o.get() : o)),
      te(o) ? o.get() : o
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    const { initial: u } = this.props;
    let o;
    if (typeof u == "string" || typeof u == "object") {
      const h = _c(this.props, u, this.presenceContext?.custom);
      h && (o = h[l]);
    }
    if (u && o !== void 0) return o;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !te(c)
      ? c
      : this.initialValues[l] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[l];
  }
  on(l, u) {
    return (
      this.events[l] || (this.events[l] = new Ac()),
      this.events[l].add(u)
    );
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
  scheduleRenderMicrotask() {
    Lc.render(this.render);
  }
}
class bg extends c2 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = LS));
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    const o = l.style;
    return o ? o[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: o }) {
    (delete u[l], delete o[l]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    te(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
class Yn {
  constructor(l) {
    ((this.isMounted = !1), (this.node = l));
  }
  update() {}
}
function Sg({ top: a, left: l, right: u, bottom: o }) {
  return { x: { min: l, max: u }, y: { min: a, max: o } };
}
function f2({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function h2(a, l) {
  if (!l) return a;
  const u = l({ x: a.left, y: a.top }),
    o = l({ x: a.right, y: a.bottom });
  return { top: u.y, left: u.x, bottom: o.y, right: o.x };
}
function Hr(a) {
  return a === void 0 || a === 1;
}
function hc({ scale: a, scaleX: l, scaleY: u }) {
  return !Hr(a) || !Hr(l) || !Hr(u);
}
function oa(a) {
  return (
    hc(a) ||
    xg(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function xg(a) {
  return xp(a.x) || xp(a.y);
}
function xp(a) {
  return a && a !== "0%";
}
function nu(a, l, u) {
  const o = a - u,
    c = l * o;
  return u + c;
}
function Tp(a, l, u, o, c) {
  return (c !== void 0 && (a = nu(a, c, o)), nu(a, u, o) + l);
}
function dc(a, l = 0, u = 1, o, c) {
  ((a.min = Tp(a.min, l, u, o, c)), (a.max = Tp(a.max, l, u, o, c)));
}
function Tg(a, { x: l, y: u }) {
  (dc(a.x, l.translate, l.scale, l.originPoint),
    dc(a.y, u.translate, u.scale, u.originPoint));
}
const Ap = 0.999999999999,
  Ep = 1.0000000000001;
function d2(a, l, u, o = !1) {
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let h, f;
  for (let m = 0; m < c; m++) {
    ((h = u[m]), (f = h.projectionDelta));
    const { visualElement: v } = h.options;
    (v && v.props.style && v.props.style.display === "contents") ||
      (o &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        (Ke(a.x, -h.scroll.offset.x), Ke(a.y, -h.scroll.offset.y)),
      f && ((l.x *= f.x.scale), (l.y *= f.y.scale), Tg(a, f)),
      o && oa(h.latestValues) && Ks(a, h.latestValues, h.layout?.layoutBox));
  }
  (l.x < Ep && l.x > Ap && (l.x = 1), l.y < Ep && l.y > Ap && (l.y = 1));
}
function Ke(a, l) {
  ((a.min += l), (a.max += l));
}
function Mp(a, l, u, o, c = 0.5) {
  const h = Ot(a.min, a.max, c);
  dc(a, l, u, h, o);
}
function Dp(a, l) {
  return typeof a == "string" ? (parseFloat(a) / 100) * (l.max - l.min) : a;
}
function Ks(a, l, u) {
  const o = u ?? a;
  (Mp(a.x, Dp(l.x, o.x), l.scaleX, l.scale, l.originX),
    Mp(a.y, Dp(l.y, o.y), l.scaleY, l.scale, l.originY));
}
function Ag(a, l) {
  return Sg(h2(a.getBoundingClientRect(), l));
}
function m2(a, l, u) {
  const o = Ag(a, u),
    { scroll: c } = l;
  return (c && (Ke(o.x, c.offset.x), Ke(o.y, c.offset.y)), o);
}
const p2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  y2 = si.length;
function g2(a, l, u) {
  let o = "",
    c = !0;
  for (let h = 0; h < y2; h++) {
    const f = si[h],
      m = a[f];
    if (m === void 0) continue;
    let v = !0;
    if (typeof m == "number") v = m === (f.startsWith("scale") ? 1 : 0);
    else {
      const p = parseFloat(m);
      v = f.startsWith("scale") ? p === 1 : p === 0;
    }
    if (!v || u) {
      const p = fg(m, Uc[f]);
      if (!v) {
        c = !1;
        const g = p2[f] || f;
        o += `${g}(${p}) `;
      }
      u && (l[f] = p);
    }
  }
  return ((o = o.trim()), u ? (o = u(l, c ? "" : o)) : c && (o = "none"), o);
}
function Gc(a, l, u) {
  const { style: o, vars: c, transformOrigin: h } = a;
  let f = !1,
    m = !1;
  for (const v in l) {
    const p = l[v];
    if (ui.has(v)) {
      f = !0;
      continue;
    } else if (jy(v)) {
      c[v] = p;
      continue;
    } else {
      const g = fg(p, Uc[v]);
      v.startsWith("origin") ? ((m = !0), (h[v] = g)) : (o[v] = g);
    }
  }
  if (
    (l.transform ||
      (f || u
        ? (o.transform = g2(l, a.transform, u))
        : o.transform && (o.transform = "none")),
    m)
  ) {
    const { originX: v = "50%", originY: p = "50%", originZ: g = 0 } = h;
    o.transformOrigin = `${v} ${p} ${g}`;
  }
}
function Eg(a, { style: l, vars: u }, o, c) {
  const h = a.style;
  let f;
  for (f in l) h[f] = l[f];
  c?.applyProjectionStyles(h, o);
  for (f in u) h.setProperty(f, u[f]);
}
function Rp(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const ul = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (F.test(a)) a = parseFloat(a);
        else return a;
      const u = Rp(a, l.target.x),
        o = Rp(a, l.target.y);
      return `${u}% ${o}%`;
    },
  },
  v2 = {
    correct: (a, { treeScale: l, projectionDelta: u }) => {
      const o = a,
        c = He.parse(a);
      if (c.length > 5) return o;
      const h = He.createTransformer(a),
        f = typeof c[0] != "number" ? 1 : 0,
        m = u.x.scale * l.x,
        v = u.y.scale * l.y;
      ((c[0 + f] /= m), (c[1 + f] /= v));
      const p = Ot(m, v, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= p),
        typeof c[3 + f] == "number" && (c[3 + f] /= p),
        h(c)
      );
    },
  },
  mc = {
    borderRadius: {
      ...ul,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ul,
    borderTopRightRadius: ul,
    borderBottomLeftRadius: ul,
    borderBottomRightRadius: ul,
    boxShadow: v2,
  };
function Mg(a, { layout: l, layoutId: u }) {
  return (
    ui.has(a) ||
    a.startsWith("origin") ||
    ((l || u !== void 0) && (!!mc[a] || a === "opacity"))
  );
}
function Xc(a, l, u) {
  const o = a.style,
    c = l?.style,
    h = {};
  if (!o) return h;
  for (const f in o)
    (te(o[f]) ||
      (c && te(c[f])) ||
      Mg(f, a) ||
      u?.getValue(f)?.liveStyle !== void 0) &&
      (h[f] = o[f]);
  return h;
}
function b2(a) {
  return window.getComputedStyle(a);
}
class S2 extends bg {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Eg));
  }
  readValueFromInstance(l, u) {
    if (ui.has(u)) return this.projection?.isProjecting ? tc(u) : kb(l, u);
    {
      const o = b2(l),
        c = (jy(u) ? o.getPropertyValue(u) : o[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return Ag(l, u);
  }
  build(l, u, o) {
    Gc(l, u, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return Xc(l, u, o);
  }
}
const x2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  T2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function A2(a, l, u = 1, o = 0, c = !0) {
  a.pathLength = 1;
  const h = c ? x2 : T2;
  ((a[h.offset] = `${-o}`), (a[h.array] = `${l} ${u}`));
}
const E2 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Dg(
  a,
  {
    attrX: l,
    attrY: u,
    attrScale: o,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: f = 0,
    ...m
  },
  v,
  p,
  g,
) {
  if ((Gc(a, m, p), v)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  ((a.attrs = a.style), (a.style = {}));
  const { attrs: b, style: x } = a;
  (b.transform && ((x.transform = b.transform), delete b.transform),
    (x.transform || b.transformOrigin) &&
      ((x.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    x.transform &&
      ((x.transformBox = g?.transformBox ?? "fill-box"),
      delete b.transformBox));
  for (const O of E2) b[O] !== void 0 && ((x[O] = b[O]), delete b[O]);
  (l !== void 0 && (b.x = l),
    u !== void 0 && (b.y = u),
    o !== void 0 && (b.scale = o),
    c !== void 0 && A2(b, c, h, f, !1));
}
const Rg = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Cg = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function M2(a, l, u, o) {
  Eg(a, l, void 0, o);
  for (const c in l.attrs) a.setAttribute(Rg.has(c) ? c : Bc(c), l.attrs[c]);
}
function Og(a, l, u) {
  const o = Xc(a, l, u);
  for (const c in a)
    if (te(a[c]) || te(l[c])) {
      const h =
        si.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      o[h] = a[c];
    }
  return o;
}
class D2 extends bg {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Gt));
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (ui.has(u)) {
      const o = og(u);
      return (o && o.default) || 0;
    }
    return ((u = Rg.has(u) ? u : Bc(u)), l.getAttribute(u));
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return Og(l, u, o);
  }
  build(l, u, o) {
    Dg(l, u, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, u, o, c) {
    M2(l, u, o, c);
  }
  mount(l) {
    ((this.isSVGTag = Cg(l.tagName)), super.mount(l));
  }
}
const R2 = qc.length;
function wg(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const u = a.parent ? wg(a.parent) || {} : {};
    return (a.props.initial !== void 0 && (u.initial = a.props.initial), u);
  }
  const l = {};
  for (let u = 0; u < R2; u++) {
    const o = qc[u],
      c = a.props[o];
    (pl(c) || c === !1) && (l[o] = c);
  }
  return l;
}
function Vg(a, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== a.length) return !1;
  for (let o = 0; o < u; o++) if (l[o] !== a[o]) return !1;
  return !0;
}
const C2 = [...Yc].reverse(),
  O2 = Yc.length;
function w2(a) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: o }) => RS(a, u, o)));
}
function V2(a) {
  let l = w2(a),
    u = Cp(),
    o = !0,
    c = !1;
  const h = (p) => (g, b) => {
    const x = ha(a, b, p === "exit" ? a.presenceContext?.custom : void 0);
    if (x) {
      const { transition: O, transitionEnd: z, ...L } = x;
      g = { ...g, ...L, ...z };
    }
    return g;
  };
  function f(p) {
    l = p(a);
  }
  function m(p) {
    const { props: g } = a,
      b = wg(a.parent) || {},
      x = [],
      O = new Set();
    let z = {},
      L = 1 / 0;
    for (let k = 0; k < O2; k++) {
      const G = C2[k],
        H = u[G],
        q = g[G] !== void 0 ? g[G] : b[G],
        Y = pl(q),
        ct = G === p ? H.isActive : null;
      ct === !1 && (L = k);
      let yt = q === b[G] && q !== g[G] && Y;
      if (
        (yt && (o || c) && a.manuallyAnimateOnMount && (yt = !1),
        (H.protectedKeys = { ...z }),
        (!H.isActive && ct === null) ||
          (!q && !H.prevProp) ||
          uu(q) ||
          typeof q == "boolean")
      )
        continue;
      if (G === "exit" && H.isActive && ct !== !0) {
        H.prevResolvedValues && (z = { ...z, ...H.prevResolvedValues });
        continue;
      }
      const W = z2(H.prevProp, q);
      let it = W || (G === p && H.isActive && !yt && Y) || (k > L && Y),
        $ = !1;
      const dt = Array.isArray(q) ? q : [q];
      let mt = dt.reduce(h(G), {});
      ct === !1 && (mt = {});
      const { prevResolvedValues: Jt = {} } = H,
        Xt = { ...Jt, ...mt },
        Rt = (P) => {
          ((it = !0),
            O.has(P) && (($ = !0), O.delete(P)),
            (H.needsAnimating[P] = !0));
          const ut = a.getValue(P);
          ut && (ut.liveStyle = !1);
        };
      for (const P in Xt) {
        const ut = mt[P],
          T = Jt[P];
        if (z.hasOwnProperty(P)) continue;
        let B = !1;
        (sc(ut) && sc(T) ? (B = !Vg(ut, T)) : (B = ut !== T),
          B
            ? ut != null
              ? Rt(P)
              : O.add(P)
            : ut !== void 0 && O.has(P)
              ? Rt(P)
              : (H.protectedKeys[P] = !0));
      }
      ((H.prevProp = q),
        (H.prevResolvedValues = mt),
        H.isActive && (z = { ...z, ...mt }),
        (o || c) && a.blockInitialAnimation && (it = !1));
      const V = yt && W;
      it &&
        (!V || $) &&
        x.push(
          ...dt.map((P) => {
            const ut = { type: G };
            if (
              typeof P == "string" &&
              (o || c) &&
              !V &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: T } = a,
                B = ha(T, P);
              if (T.enteringChildren && B) {
                const { delayChildren: K } = B.transition || {};
                ut.delay = Iy(T.enteringChildren, a, K);
              }
            }
            return { animation: P, options: ut };
          }),
        );
    }
    if (O.size) {
      const k = {};
      if (typeof g.initial != "boolean") {
        const G = ha(a, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        G && G.transition && (k.transition = G.transition);
      }
      (O.forEach((G) => {
        const H = a.getBaseTarget(G),
          q = a.getValue(G);
        (q && (q.liveStyle = !0), (k[G] = H ?? null));
      }),
        x.push({ animation: k }));
    }
    let U = !!x.length;
    return (
      o &&
        (g.initial === !1 || g.initial === g.animate) &&
        !a.manuallyAnimateOnMount &&
        (U = !1),
      (o = !1),
      (c = !1),
      U ? l(x) : Promise.resolve()
    );
  }
  function v(p, g) {
    if (u[p].isActive === g) return Promise.resolve();
    (a.variantChildren?.forEach((x) => x.animationState?.setActive(p, g)),
      (u[p].isActive = g));
    const b = m(p);
    for (const x in u) u[x].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: m,
    setActive: v,
    setAnimateFunction: f,
    getState: () => u,
    reset: () => {
      ((u = Cp()), (c = !0));
    },
  };
}
function z2(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !Vg(l, a) : !1;
}
function ua(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Cp() {
  return {
    animate: ua(!0),
    whileInView: ua(),
    whileHover: ua(),
    whileTap: ua(),
    whileDrag: ua(),
    whileFocus: ua(),
    exit: ua(),
  };
}
function pc(a, l) {
  ((a.min = l.min), (a.max = l.max));
}
function Ue(a, l) {
  (pc(a.x, l.x), pc(a.y, l.y));
}
function Op(a, l) {
  ((a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin));
}
const zg = 1e-4,
  j2 = 1 - zg,
  N2 = 1 + zg,
  jg = 0.01,
  _2 = 0 - jg,
  B2 = 0 + jg;
function se(a) {
  return a.max - a.min;
}
function U2(a, l, u) {
  return Math.abs(a - l) <= u;
}
function wp(a, l, u, o = 0.5) {
  ((a.origin = o),
    (a.originPoint = Ot(l.min, l.max, a.origin)),
    (a.scale = se(u) / se(l)),
    (a.translate = Ot(u.min, u.max, a.origin) - a.originPoint),
    ((a.scale >= j2 && a.scale <= N2) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= _2 && a.translate <= B2) || isNaN(a.translate)) &&
      (a.translate = 0));
}
function fl(a, l, u, o) {
  (wp(a.x, l.x, u.x, o ? o.originX : void 0),
    wp(a.y, l.y, u.y, o ? o.originY : void 0));
}
function Vp(a, l, u, o = 0) {
  const c = o ? Ot(u.min, u.max, o) : u.min;
  ((a.min = c + l.min), (a.max = a.min + se(l)));
}
function L2(a, l, u, o) {
  (Vp(a.x, l.x, u.x, o?.x), Vp(a.y, l.y, u.y, o?.y));
}
function zp(a, l, u, o = 0) {
  const c = o ? Ot(u.min, u.max, o) : u.min;
  ((a.min = l.min - c), (a.max = a.min + se(l)));
}
function au(a, l, u, o) {
  (zp(a.x, l.x, u.x, o?.x), zp(a.y, l.y, u.y, o?.y));
}
function jp(a, l, u, o, c) {
  return (
    (a -= l),
    (a = nu(a, 1 / u, o)),
    c !== void 0 && (a = nu(a, 1 / c, o)),
    a
  );
}
function H2(a, l = 0, u = 1, o = 0.5, c, h = a, f = a) {
  if (
    (Pe.test(l) &&
      ((l = parseFloat(l)), (l = Ot(f.min, f.max, l / 100) - f.min)),
    typeof l != "number")
  )
    return;
  let m = Ot(h.min, h.max, o);
  (a === h && (m -= l),
    (a.min = jp(a.min, l, u, m, c)),
    (a.max = jp(a.max, l, u, m, c)));
}
function Np(a, l, [u, o, c], h, f) {
  H2(a, l[u], l[o], l[c], l.scale, h, f);
}
const k2 = ["x", "scaleX", "originX"],
  Y2 = ["y", "scaleY", "originY"];
function _p(a, l, u, o) {
  (Np(a.x, l, k2, u ? u.x : void 0, o ? o.x : void 0),
    Np(a.y, l, Y2, u ? u.y : void 0, o ? o.y : void 0));
}
function Bp(a) {
  return a.translate === 0 && a.scale === 1;
}
function Ng(a) {
  return Bp(a.x) && Bp(a.y);
}
function Up(a, l) {
  return a.min === l.min && a.max === l.max;
}
function q2(a, l) {
  return Up(a.x, l.x) && Up(a.y, l.y);
}
function Lp(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function _g(a, l) {
  return Lp(a.x, l.x) && Lp(a.y, l.y);
}
function Hp(a) {
  return se(a.x) / se(a.y);
}
function kp(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
function Qe(a) {
  return [a("x"), a("y")];
}
function G2(a, l, u) {
  let o = "";
  const c = a.x.translate / l.x,
    h = a.y.translate / l.y,
    f = u?.z || 0;
  if (
    ((c || h || f) && (o = `translate3d(${c}px, ${h}px, ${f}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: p,
      rotate: g,
      rotateX: b,
      rotateY: x,
      skewX: O,
      skewY: z,
    } = u;
    (p && (o = `perspective(${p}px) ${o}`),
      g && (o += `rotate(${g}deg) `),
      b && (o += `rotateX(${b}deg) `),
      x && (o += `rotateY(${x}deg) `),
      O && (o += `skewX(${O}deg) `),
      z && (o += `skewY(${z}deg) `));
  }
  const m = a.x.scale * l.x,
    v = a.y.scale * l.y;
  return ((m !== 1 || v !== 1) && (o += `scale(${m}, ${v})`), o || "none");
}
const Bg = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  X2 = Bg.length,
  Yp = (a) => (typeof a == "string" ? parseFloat(a) : a),
  qp = (a) => typeof a == "number" || F.test(a);
function Z2(a, l, u, o, c, h) {
  c
    ? ((a.opacity = Ot(0, u.opacity ?? 1, Q2(o))),
      (a.opacityExit = Ot(l.opacity ?? 1, 0, K2(o))))
    : h && (a.opacity = Ot(l.opacity ?? 1, u.opacity ?? 1, o));
  for (let f = 0; f < X2; f++) {
    const m = Bg[f];
    let v = Gp(l, m),
      p = Gp(u, m);
    if (v === void 0 && p === void 0) continue;
    (v || (v = 0),
      p || (p = 0),
      v === 0 || p === 0 || qp(v) === qp(p)
        ? ((a[m] = Math.max(Ot(Yp(v), Yp(p), o), 0)),
          (Pe.test(p) || Pe.test(v)) && (a[m] += "%"))
        : (a[m] = p));
  }
  (l.rotate || u.rotate) && (a.rotate = Ot(l.rotate || 0, u.rotate || 0, o));
}
function Gp(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const Q2 = Ug(0, 0.5, Ry),
  K2 = Ug(0.5, 0.95, je);
function Ug(a, l, u) {
  return (o) => (o < a ? 0 : o > l ? 1 : u(dl(a, l, o)));
}
function P2(a, l, u) {
  const o = te(a) ? a : ii(a);
  return (o.start(Nc("", o, l, u)), o.animation);
}
function yl(a, l, u, o = { passive: !0 }) {
  return (a.addEventListener(l, u, o), () => a.removeEventListener(l, u));
}
const J2 = (a, l) => a.depth - l.depth;
class F2 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(l) {
    (xc(this.children, l), (this.isDirty = !0));
  }
  remove(l) {
    (Fs(this.children, l), (this.isDirty = !0));
  }
  forEach(l) {
    (this.isDirty && this.children.sort(J2),
      (this.isDirty = !1),
      this.children.forEach(l));
  }
}
function W2(a, l) {
  const u = le.now(),
    o = ({ timestamp: c }) => {
      const h = c - u;
      h >= l && (kn(o), a(h - l));
    };
  return (Dt.setup(o, !0), () => kn(o));
}
function Ps(a) {
  return te(a) ? a.get() : a;
}
class $2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    xc(this.members, l);
    for (let u = this.members.length - 1; u >= 0; u--) {
      const o = this.members[u];
      if (o === l || o === this.lead || o === this.prevLead) continue;
      const c = o.instance;
      (!c || c.isConnected === !1) &&
        !o.snapshot &&
        (Fs(this.members, o), o.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (
      (Fs(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    for (let u = this.members.indexOf(l) - 1; u >= 0; u--) {
      const o = this.members[u];
      if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
        return (this.promote(o), !0);
    }
    return !1;
  }
  promote(l, u) {
    const o = this.lead;
    if (l !== o && ((this.prevLead = o), (this.lead = l), l.show(), o)) {
      (o.updateSnapshot(), l.scheduleRender());
      const { layoutDependency: c } = o.options,
        { layoutDependency: h } = l.options;
      ((c === void 0 || c !== h) &&
        ((l.resumeFrom = o),
        u && (o.preserveOpacity = !0),
        o.snapshot &&
          ((l.snapshot = o.snapshot),
          (l.snapshot.latestValues = o.animationValues || o.latestValues)),
        l.root?.isUpdating && (l.isLayoutDirty = !0)),
        l.options.crossfade === !1 && o.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      (l.options.onExitComplete?.(),
        l.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const Js = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  kr = ["", "X", "Y", "Z"],
  I2 = 1e3;
let tx = 0;
function Yr(a, l, u, o) {
  const { latestValues: c } = l;
  c[a] && ((u[a] = c[a]), l.setStaticValue(a, 0), o && (o[a] = 0));
}
function Lg(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const u = ig(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: h } = a.options;
    window.MotionCancelOptimisedAnimation(u, "transform", Dt, !(c || h));
  }
  const { parent: o } = a;
  o && !o.hasCheckedOptimisedAppear && Lg(o);
}
function Hg({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: o,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = l?.()) {
      ((this.id = tx++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(ax),
            this.nodes.forEach(rx),
            this.nodes.forEach(cx),
            this.nodes.forEach(ix));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0));
      for (let v = 0; v < this.path.length; v++)
        this.path[v].shouldResetTransform = !0;
      this.root === this && (this.nodes = new F2());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Ac()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const v = this.eventHandlers.get(f);
      v && v.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = kc(f) && !n2(f)), (this.instance = f));
      const { layoutId: m, layout: v, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (v || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let g,
          b = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        (Dt.read(() => {
          b = window.innerWidth;
        }),
          a(f, () => {
            const O = window.innerWidth;
            O !== b &&
              ((b = O),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = W2(x, 250)),
              Js.hasAnimatedSinceResize &&
                ((Js.hasAnimatedSinceResize = !1), this.nodes.forEach(Qp)));
          }));
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          p &&
          (m || v) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: x,
              layout: O,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const z =
                  this.options.transition || p.getDefaultTransition() || px,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: U } =
                  p.getProps(),
                k = !this.targetLayout || !_g(this.targetLayout, O),
                G = !b && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                G ||
                (b && (k || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const H = { ...jc(z, "layout"), onPlay: L, onComplete: U };
                ((p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((H.delay = 0), (H.type = !1)),
                  this.startAnimation(H),
                  this.setAnimationOrigin(g, G));
              } else
                (b || Qp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = O;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        kn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(fx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Lg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const b = this.path[g];
        ((b.shouldResetTransform = !0),
          (typeof b.latestValues.x == "string" ||
            typeof b.latestValues.y == "string") &&
            (b.isLayoutDirty = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1));
      }
      const { layoutId: m, layout: v } = this.options;
      if (m === void 0 && !v) return;
      const p = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = p
        ? p(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const v = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          v && this.nodes.forEach(sx),
          this.nodes.forEach(Xp));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Zp);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(ux),
            this.nodes.forEach(ox),
            this.nodes.forEach(ex),
            this.nodes.forEach(nx))
          : this.nodes.forEach(Zp),
        this.clearAllSnapshots());
      const m = le.now();
      ((It.delta = Je(0, 1e3 / 60, m - It.timestamp)),
        (It.timestamp = m),
        (It.isProcessing = !0),
        zr.update.process(It),
        zr.preRender.process(It),
        zr.render.process(It),
        (It.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Lc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(lx), this.sharedNodes.forEach(hx));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Dt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Dt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !se(this.snapshot.measuredBox.x) &&
          !se(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let v = 0; v < this.path.length; v++) this.path[v].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Gt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m && this.instance)
      ) {
        const v = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: v,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : v,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !Ng(this.projectionDelta),
        v = this.getTransformTemplate(),
        p = v ? v(this.latestValues, "") : void 0,
        g = p !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (m || oa(this.latestValues) || g) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let v = this.removeElementScroll(m);
      return (
        f && (v = this.removeTransform(v)),
        yx(v),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: v,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return Gt();
      const m = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(gx))) {
        const { scroll: p } = this.root;
        p && (Ke(m.x, p.offset.x), Ke(m.y, p.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      const m = Gt();
      if ((Ue(m, f), this.scroll?.wasRoot)) return m;
      for (let v = 0; v < this.path.length; v++) {
        const p = this.path[v],
          { scroll: g, options: b } = p;
        p !== this.root &&
          g &&
          b.layoutScroll &&
          (g.wasRoot && Ue(m, f), Ke(m.x, g.offset.x), Ke(m.y, g.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1, v) {
      const p = v || Gt();
      Ue(p, f);
      for (let g = 0; g < this.path.length; g++) {
        const b = this.path[g];
        (!m &&
          b.options.layoutScroll &&
          b.scroll &&
          b !== b.root &&
          (Ke(p.x, -b.scroll.offset.x), Ke(p.y, -b.scroll.offset.y)),
          oa(b.latestValues) && Ks(p, b.latestValues, b.layout?.layoutBox));
      }
      return (
        oa(this.latestValues) &&
          Ks(p, this.latestValues, this.layout?.layoutBox),
        p
      );
    }
    removeTransform(f) {
      const m = Gt();
      Ue(m, f);
      for (let v = 0; v < this.path.length; v++) {
        const p = this.path[v];
        if (!oa(p.latestValues)) continue;
        let g;
        (p.instance &&
          (hc(p.latestValues) && p.updateSnapshot(),
          (g = Gt()),
          Ue(g, p.measurePageBox())),
          _p(m, p.latestValues, p.snapshot?.layoutBox, g));
      }
      return (oa(this.latestValues) && _p(m, this.latestValues), m);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== It.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const m = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
      const v = !!this.resumingFrom || this !== m;
      if (
        !(
          f ||
          (v && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: b } = this.options;
      if (!this.layout || !(g || b)) return;
      this.resolvedRelativeTargetAt = It.timestamp;
      const x = this.getClosestProjectingParent();
      (x &&
        this.linkedParentVersion !== x.layoutVersion &&
        !x.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && x && x.layout
            ? this.createRelativeTarget(
                x,
                this.layout.layoutBox,
                x.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Gt()), (this.targetWithTransforms = Gt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              L2(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Ue(this.target, this.layout.layoutBox),
                Tg(this.target, this.targetDelta))
              : Ue(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(x, this.target, x.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          hc(this.parent.latestValues) ||
          xg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, m, v) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Gt()),
        (this.relativeTargetOrigin = Gt()),
        au(
          this.relativeTargetOrigin,
          m,
          v,
          this.options.layoutAnchor || void 0,
        ),
        Ue(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let v = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (v = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (v = !1),
        this.resolvedRelativeTargetAt === It.timestamp && (v = !1),
        v)
      )
        return;
      const { layout: p, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || g))
      )
        return;
      Ue(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        x = this.treeScale.y;
      (d2(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Gt())));
      const { target: O } = f;
      if (!O) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Op(this.prevProjectionDelta.x, this.projectionDelta.x),
          Op(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fl(this.projectionDelta, this.layoutCorrected, O, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== x ||
          !kp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !kp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", O)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ni()),
        (this.projectionDelta = ni()),
        (this.projectionDeltaWithTransform = ni()));
    }
    setAnimationOrigin(f, m = !1) {
      const v = this.snapshot,
        p = v ? v.latestValues : {},
        g = { ...this.latestValues },
        b = ni();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m));
      const x = Gt(),
        O = v ? v.source : void 0,
        z = this.layout ? this.layout.source : void 0,
        L = O !== z,
        U = this.getStack(),
        k = !U || U.members.length <= 1,
        G = !!(L && !k && this.options.crossfade === !0 && !this.path.some(mx));
      this.animationProgress = 0;
      let H;
      ((this.mixTargetDelta = (q) => {
        const Y = q / 1e3;
        (Kp(b.x, f.x, Y),
          Kp(b.y, f.y, Y),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (au(
              x,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            dx(this.relativeTarget, this.relativeTargetOrigin, x, Y),
            H && q2(this.relativeTarget, H) && (this.isProjectionDirty = !1),
            H || (H = Gt()),
            Ue(H, this.relativeTarget)),
          L &&
            ((this.animationValues = g), Z2(g, p, this.latestValues, Y, G, k)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = Y));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (kn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Dt.update(() => {
          ((Js.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ii(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = P2(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (m) => {
                (this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(I2),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: v,
        layout: p,
        latestValues: g,
      } = f;
      if (!(!m || !v || !p)) {
        if (
          this !== f &&
          this.layout &&
          p &&
          kg(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          v = this.target || Gt();
          const b = se(this.layout.layoutBox.x);
          ((v.x.min = f.target.x.min), (v.x.max = v.x.min + b));
          const x = se(this.layout.layoutBox.y);
          ((v.y.min = f.target.y.min), (v.y.max = v.y.min + x));
        }
        (Ue(m, v),
          Ks(m, g),
          fl(this.projectionDeltaWithTransform, this.layoutCorrected, m, g));
      }
    }
    registerSharedNode(f, m) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new $2()),
        this.sharedNodes.get(f).add(m));
      const p = m.options.initialPromotionConfig;
      m.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: v } = {}) {
      const p = this.getStack();
      (p && p.promote(this, v),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: v } = f;
      if (
        ((v.z ||
          v.rotate ||
          v.rotateX ||
          v.rotateY ||
          v.rotateZ ||
          v.skewX ||
          v.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const p = {};
      v.z && Yr("z", f, p, this.animationValues);
      for (let g = 0; g < kr.length; g++)
        (Yr(`rotate${kr[g]}`, f, p, this.animationValues),
          Yr(`skew${kr[g]}`, f, p, this.animationValues));
      f.render();
      for (const g in p)
        (f.setStaticValue(g, p[g]),
          this.animationValues && (this.animationValues[g] = p[g]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const v = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Ps(m?.pointerEvents) || ""),
          (f.transform = v ? v(this.latestValues, "") : "none"));
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Ps(m?.pointerEvents) || "")),
          this.hasProjected &&
            !oa(this.latestValues) &&
            ((f.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let b = G2(this.projectionDeltaWithTransform, this.treeScale, g);
      (v && (b = v(g, b)), (f.transform = b));
      const { x, y: O } = this.projectionDelta;
      ((f.transformOrigin = `${x.origin * 100}% ${O.origin * 100}% 0`),
        p.animationValues
          ? (f.opacity =
              p === this
                ? (g.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (f.opacity =
              p === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0));
      for (const z in mc) {
        if (g[z] === void 0) continue;
        const { correct: L, applyTo: U, isCSSVariable: k } = mc[z],
          G = b === "none" ? g[z] : L(g[z], p);
        if (U) {
          const H = U.length;
          for (let q = 0; q < H; q++) f[U[q]] = G;
        } else
          k ? (this.options.visualElement.renderState.vars[z] = G) : (f[z] = G);
      }
      this.options.layoutId &&
        (f.pointerEvents = p === this ? Ps(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(Xp),
        this.root.sharedNodes.clear());
    }
  };
}
function ex(a) {
  a.updateLayout();
}
function nx(a) {
  const l = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: o } = a.layout,
      { animationType: c } = a.options,
      h = l.source !== a.layout.source;
    if (c === "size")
      Qe((g) => {
        const b = h ? l.measuredBox[g] : l.layoutBox[g],
          x = se(b);
        ((b.min = u[g].min), (b.max = b.min + x));
      });
    else if (c === "x" || c === "y") {
      const g = c === "x" ? "y" : "x";
      pc(h ? l.measuredBox[g] : l.layoutBox[g], u[g]);
    } else
      kg(c, l.layoutBox, u) &&
        Qe((g) => {
          const b = h ? l.measuredBox[g] : l.layoutBox[g],
            x = se(u[g]);
          ((b.max = b.min + x),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[g].max = a.relativeTarget[g].min + x)));
        });
    const f = ni();
    fl(f, u, l.layoutBox);
    const m = ni();
    h ? fl(m, a.applyTransform(o, !0), l.measuredBox) : fl(m, u, l.layoutBox);
    const v = !Ng(f);
    let p = !1;
    if (!a.resumeFrom) {
      const g = a.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: b, layout: x } = g;
        if (b && x) {
          const O = a.options.layoutAnchor || void 0,
            z = Gt();
          au(z, l.layoutBox, b.layoutBox, O);
          const L = Gt();
          (au(L, u, x.layoutBox, O),
            _g(z, L) || (p = !0),
            g.options.layoutRoot &&
              ((a.relativeTarget = L),
              (a.relativeTargetOrigin = z),
              (a.relativeParent = g)));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: u,
      snapshot: l,
      delta: m,
      layoutDelta: f,
      hasLayoutChanged: v,
      hasRelativeLayoutChanged: p,
    });
  } else if (a.isLead()) {
    const { onExitComplete: u } = a.options;
    u && u();
  }
  a.options.transition = void 0;
}
function ax(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function ix(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function lx(a) {
  a.clearSnapshot();
}
function Xp(a) {
  a.clearMeasurements();
}
function sx(a) {
  ((a.isLayoutDirty = !0), a.updateLayout());
}
function Zp(a) {
  a.isLayoutDirty = !1;
}
function ux(a) {
  a.isAnimationBlocked &&
    a.layout &&
    !a.isLayoutDirty &&
    ((a.snapshot = a.layout), (a.isLayoutDirty = !0));
}
function ox(a) {
  const { visualElement: l } = a.options;
  (l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform());
}
function Qp(a) {
  (a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0));
}
function rx(a) {
  a.resolveTargetDelta();
}
function cx(a) {
  a.calcProjection();
}
function fx(a) {
  a.resetSkewAndRotation();
}
function hx(a) {
  a.removeLeadSnapshot();
}
function Kp(a, l, u) {
  ((a.translate = Ot(l.translate, 0, u)),
    (a.scale = Ot(l.scale, 1, u)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint));
}
function Pp(a, l, u, o) {
  ((a.min = Ot(l.min, u.min, o)), (a.max = Ot(l.max, u.max, o)));
}
function dx(a, l, u, o) {
  (Pp(a.x, l.x, u.x, o), Pp(a.y, l.y, u.y, o));
}
function mx(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const px = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Jp = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  Fp = Jp("applewebkit/") && !Jp("chrome/") ? Math.round : je;
function Wp(a) {
  ((a.min = Fp(a.min)), (a.max = Fp(a.max)));
}
function yx(a) {
  (Wp(a.x), Wp(a.y));
}
function kg(a, l, u) {
  return (
    a === "position" || (a === "preserve-aspect" && !U2(Hp(l), Hp(u), 0.2))
  );
}
function gx(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const vx = Hg({
    attachResizeListener: (a, l) => yl(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  qr = { current: void 0 },
  Yg = Hg({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!qr.current) {
        const a = new vx({});
        (a.mount(window), a.setOptions({ layoutScroll: !0 }), (qr.current = a));
      }
      return qr.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  Zc = X.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function $p(a, l) {
  if (typeof a == "function") return a(l);
  a != null && (a.current = l);
}
function bx(...a) {
  return (l) => {
    let u = !1;
    const o = a.map((c) => {
      const h = $p(c, l);
      return (!u && typeof h == "function" && (u = !0), h);
    });
    if (u)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const h = o[c];
          typeof h == "function" ? h() : $p(a[c], null);
        }
      };
  };
}
function Sx(...a) {
  return X.useCallback(bx(...a), a);
}
class xx extends X.Component {
  getSnapshotBeforeUpdate(l) {
    const u = this.props.childRef.current;
    if (
      qs(u) &&
      l.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const o = u.offsetParent,
        c = (qs(o) && o.offsetWidth) || 0,
        h = (qs(o) && o.offsetHeight) || 0,
        f = getComputedStyle(u),
        m = this.props.sizeRef.current;
      ((m.height = parseFloat(f.height)),
        (m.width = parseFloat(f.width)),
        (m.top = u.offsetTop),
        (m.left = u.offsetLeft),
        (m.right = c - m.width - m.left),
        (m.bottom = h - m.height - m.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Tx({
  children: a,
  isPresent: l,
  anchorX: u,
  anchorY: o,
  root: c,
  pop: h,
}) {
  const f = X.useId(),
    m = X.useRef(null),
    v = X.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: p } = X.useContext(Zc),
    g = a.props?.ref ?? a?.ref,
    b = Sx(m, g);
  return (
    X.useInsertionEffect(() => {
      const {
        width: x,
        height: O,
        top: z,
        left: L,
        right: U,
        bottom: k,
      } = v.current;
      if (l || h === !1 || !m.current || !x || !O) return;
      const G = u === "left" ? `left: ${L}` : `right: ${U}`,
        H = o === "bottom" ? `bottom: ${k}` : `top: ${z}`;
      m.current.dataset.motionPopId = f;
      const q = document.createElement("style");
      p && (q.nonce = p);
      const Y = c ?? document.head;
      return (
        Y.appendChild(q),
        q.sheet &&
          q.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${O}px !important;
            ${G}px !important;
            ${H}px !important;
          }
        `),
        () => {
          (m.current?.removeAttribute("data-motion-pop-id"),
            Y.contains(q) && Y.removeChild(q));
        }
      );
    }, [l]),
    w.jsx(xx, {
      isPresent: l,
      childRef: m,
      sizeRef: v,
      pop: h,
      children: h === !1 ? a : X.cloneElement(a, { ref: b }),
    })
  );
}
const Ax = ({
  children: a,
  initial: l,
  isPresent: u,
  onExitComplete: o,
  custom: c,
  presenceAffectsLayout: h,
  mode: f,
  anchorX: m,
  anchorY: v,
  root: p,
}) => {
  const g = Sc(Ex),
    b = X.useId();
  let x = !0,
    O = X.useMemo(
      () => (
        (x = !1),
        {
          id: b,
          initial: l,
          isPresent: u,
          custom: c,
          onExitComplete: (z) => {
            g.set(z, !0);
            for (const L of g.values()) if (!L) return;
            o && o();
          },
          register: (z) => (g.set(z, !1), () => g.delete(z)),
        }
      ),
      [u, g, o],
    );
  return (
    h && x && (O = { ...O }),
    X.useMemo(() => {
      g.forEach((z, L) => g.set(L, !1));
    }, [u]),
    X.useEffect(() => {
      !u && !g.size && o && o();
    }, [u]),
    (a = w.jsx(Tx, {
      pop: f === "popLayout",
      isPresent: u,
      anchorX: m,
      anchorY: v,
      root: p,
      children: a,
    })),
    w.jsx(lu.Provider, { value: O, children: a })
  );
};
function Ex() {
  return new Map();
}
function qg(a = !0) {
  const l = X.useContext(lu);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: o, register: c } = l,
    h = X.useId();
  X.useEffect(() => {
    if (a) return c(h);
  }, [a]);
  const f = X.useCallback(() => a && o && o(h), [h, o, a]);
  return !u && o ? [!1, f] : [!0];
}
const Ls = (a) => a.key || "";
function Ip(a) {
  const l = [];
  return (
    X.Children.forEach(a, (u) => {
      X.isValidElement(u) && l.push(u);
    }),
    l
  );
}
const Mx = ({
    children: a,
    custom: l,
    initial: u = !0,
    onExitComplete: o,
    presenceAffectsLayout: c = !0,
    mode: h = "sync",
    propagate: f = !1,
    anchorX: m = "left",
    anchorY: v = "top",
    root: p,
  }) => {
    const [g, b] = qg(f),
      x = X.useMemo(() => Ip(a), [a]),
      O = f && !g ? [] : x.map(Ls),
      z = X.useRef(!0),
      L = X.useRef(x),
      U = Sc(() => new Map()),
      k = X.useRef(new Set()),
      [G, H] = X.useState(x),
      [q, Y] = X.useState(x);
    py(() => {
      ((z.current = !1), (L.current = x));
      for (let W = 0; W < q.length; W++) {
        const it = Ls(q[W]);
        O.includes(it)
          ? (U.delete(it), k.current.delete(it))
          : U.get(it) !== !0 && U.set(it, !1);
      }
    }, [q, O.length, O.join("-")]);
    const ct = [];
    if (x !== G) {
      let W = [...x];
      for (let it = 0; it < q.length; it++) {
        const $ = q[it],
          dt = Ls($);
        O.includes(dt) || (W.splice(it, 0, $), ct.push($));
      }
      return (h === "wait" && ct.length && (W = ct), Y(Ip(W)), H(x), null);
    }
    const { forceRender: yt } = X.useContext(bc);
    return w.jsx(w.Fragment, {
      children: q.map((W) => {
        const it = Ls(W),
          $ = f && !g ? !1 : x === q || O.includes(it),
          dt = () => {
            if (k.current.has(it)) return;
            if (U.has(it)) (k.current.add(it), U.set(it, !0));
            else return;
            let mt = !0;
            (U.forEach((Jt) => {
              Jt || (mt = !1);
            }),
              mt && (yt?.(), Y(L.current), f && b?.(), o && o()));
          };
        return w.jsx(
          Ax,
          {
            isPresent: $,
            initial: !z.current || u ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: h,
            root: p,
            onExitComplete: $ ? void 0 : dt,
            anchorX: m,
            anchorY: v,
            children: W,
          },
          it,
        );
      }),
    });
  },
  Gg = X.createContext({ strict: !1 }),
  ty = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let ey = !1;
function Dx() {
  if (ey) return;
  const a = {};
  for (const l in ty) a[l] = { isEnabled: (u) => ty[l].some((o) => !!u[o]) };
  (vg(a), (ey = !0));
}
function Xg() {
  return (Dx(), r2());
}
function Rx(a) {
  const l = Xg();
  for (const u in a) l[u] = { ...l[u], ...a[u] };
  vg(l);
}
const Cx = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function iu(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    Cx.has(a)
  );
}
let Zg = (a) => !iu(a);
function Ox(a) {
  typeof a == "function" && (Zg = (l) => (l.startsWith("on") ? !iu(l) : a(l)));
}
try {
  Ox(require("@emotion/is-prop-valid").default);
} catch {}
function wx(a, l, u) {
  const o = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      te(a[c]) ||
      ((Zg(c) ||
        (u === !0 && iu(c)) ||
        (!l && !iu(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (o[c] = a[c]));
  return o;
}
const ru = X.createContext({});
function Vx(a, l) {
  if (ou(a)) {
    const { initial: u, animate: o } = a;
    return {
      initial: u === !1 || pl(u) ? u : void 0,
      animate: pl(o) ? o : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function zx(a) {
  const { initial: l, animate: u } = Vx(a, X.useContext(ru));
  return X.useMemo(() => ({ initial: l, animate: u }), [ny(l), ny(u)]);
}
function ny(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Qc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Qg(a, l, u) {
  for (const o in l) !te(l[o]) && !Mg(o, u) && (a[o] = l[o]);
}
function jx({ transformTemplate: a }, l) {
  return X.useMemo(() => {
    const u = Qc();
    return (Gc(u, l, a), Object.assign({}, u.vars, u.style));
  }, [l]);
}
function Nx(a, l) {
  const u = a.style || {},
    o = {};
  return (Qg(o, u, a), Object.assign(o, jx(a, l)), o);
}
function _x(a, l) {
  const u = {},
    o = Nx(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((u.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (u.tabIndex = 0),
    (u.style = o),
    u
  );
}
const Kg = () => ({ ...Qc(), attrs: {} });
function Bx(a, l, u, o) {
  const c = X.useMemo(() => {
    const h = Kg();
    return (
      Dg(h, l, Cg(o), a.transformTemplate, a.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [l]);
  if (a.style) {
    const h = {};
    (Qg(h, a.style, a), (c.style = { ...h, ...c.style }));
  }
  return c;
}
const Ux = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Kc(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(Ux.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function Lx(a, l, u, { latestValues: o }, c, h = !1, f) {
  const v = ((f ?? Kc(a)) ? Bx : _x)(l, o, c, a),
    p = wx(l, typeof a == "string", h),
    g = a !== X.Fragment ? { ...p, ...v, ref: u } : {},
    { children: b } = l,
    x = X.useMemo(() => (te(b) ? b.get() : b), [b]);
  return X.createElement(a, { ...g, children: x });
}
function Hx({ scrapeMotionValuesFromProps: a, createRenderState: l }, u, o, c) {
  return { latestValues: kx(u, o, c, a), renderState: l() };
}
function kx(a, l, u, o) {
  const c = {},
    h = o(a, {});
  for (const x in h) c[x] = Ps(h[x]);
  let { initial: f, animate: m } = a;
  const v = ou(a),
    p = yg(a);
  l &&
    p &&
    !v &&
    a.inherit !== !1 &&
    (f === void 0 && (f = l.initial), m === void 0 && (m = l.animate));
  let g = u ? u.initial === !1 : !1;
  g = g || f === !1;
  const b = g ? m : f;
  if (b && typeof b != "boolean" && !uu(b)) {
    const x = Array.isArray(b) ? b : [b];
    for (let O = 0; O < x.length; O++) {
      const z = _c(a, x[O]);
      if (z) {
        const { transitionEnd: L, transition: U, ...k } = z;
        for (const G in k) {
          let H = k[G];
          if (Array.isArray(H)) {
            const q = g ? H.length - 1 : 0;
            H = H[q];
          }
          H !== null && (c[G] = H);
        }
        for (const G in L) c[G] = L[G];
      }
    }
  }
  return c;
}
const Pg = (a) => (l, u) => {
    const o = X.useContext(ru),
      c = X.useContext(lu),
      h = () => Hx(a, l, o, c);
    return u ? h() : Sc(h);
  },
  Yx = Pg({ scrapeMotionValuesFromProps: Xc, createRenderState: Qc }),
  qx = Pg({ scrapeMotionValuesFromProps: Og, createRenderState: Kg }),
  Gx = Symbol.for("motionComponentSymbol");
function Xx(a, l, u) {
  const o = X.useRef(u);
  X.useInsertionEffect(() => {
    o.current = u;
  });
  const c = X.useRef(null);
  return X.useCallback(
    (h) => {
      h && a.onMount?.(h);
      const f = o.current;
      if (typeof f == "function")
        if (h) {
          const m = f(h);
          typeof m == "function" && (c.current = m);
        } else c.current ? (c.current(), (c.current = null)) : f(h);
      else f && (f.current = h);
      l && (h ? l.mount(h) : l.unmount());
    },
    [l],
  );
}
const Jg = X.createContext({});
function $a(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function Zx(a, l, u, o, c, h) {
  const { visualElement: f } = X.useContext(ru),
    m = X.useContext(Gg),
    v = X.useContext(lu),
    p = X.useContext(Zc),
    g = p.reducedMotion,
    b = p.skipAnimations,
    x = X.useRef(null),
    O = X.useRef(!1);
  ((o = o || m.renderer),
    !x.current &&
      o &&
      ((x.current = o(a, {
        visualState: l,
        parent: f,
        props: u,
        presenceContext: v,
        blockInitialAnimation: v ? v.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: b,
        isSVG: h,
      })),
      O.current && x.current && (x.current.manuallyAnimateOnMount = !0)));
  const z = x.current,
    L = X.useContext(Jg);
  z &&
    !z.projection &&
    c &&
    (z.type === "html" || z.type === "svg") &&
    Qx(x.current, u, c, L);
  const U = X.useRef(!1);
  X.useInsertionEffect(() => {
    z && U.current && z.update(u, v);
  });
  const k = u[ag],
    G = X.useRef(
      !!k &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(k) &&
        window.MotionHasOptimisedAnimation?.(k),
    );
  return (
    py(() => {
      ((O.current = !0),
        z &&
          ((U.current = !0),
          (window.MotionIsMounted = !0),
          z.updateFeatures(),
          z.scheduleRenderMicrotask(),
          G.current && z.animationState && z.animationState.animateChanges()));
    }),
    X.useEffect(() => {
      z &&
        (!G.current && z.animationState && z.animationState.animateChanges(),
        G.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(k);
          }),
          (G.current = !1)),
        (z.enteringChildren = void 0));
    }),
    z
  );
}
function Qx(a, l, u, o) {
  const {
    layoutId: c,
    layout: h,
    drag: f,
    dragConstraints: m,
    layoutScroll: v,
    layoutRoot: p,
    layoutAnchor: g,
    layoutCrossfade: b,
  } = l;
  ((a.projection = new u(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : Fg(a.parent),
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!f || (m && $a(m)),
      visualElement: a,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: o,
      crossfade: b,
      layoutScroll: v,
      layoutRoot: p,
      layoutAnchor: g,
    }));
}
function Fg(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Fg(a.parent);
}
function Gr(a, { forwardMotionProps: l = !1, type: u } = {}, o, c) {
  o && Rx(o);
  const h = u ? u === "svg" : Kc(a),
    f = h ? qx : Yx;
  function m(p, g) {
    let b;
    const x = { ...X.useContext(Zc), ...p, layoutId: Kx(p) },
      { isStatic: O } = x,
      z = zx(p),
      L = f(p, O);
    if (!O && typeof window < "u") {
      Px();
      const U = Jx(x);
      ((b = U.MeasureLayout),
        (z.visualElement = Zx(a, L, x, c, U.ProjectionNode, h)));
    }
    return w.jsxs(ru.Provider, {
      value: z,
      children: [
        b && z.visualElement
          ? w.jsx(b, { visualElement: z.visualElement, ...x })
          : null,
        Lx(a, p, Xx(L, z.visualElement, g), L, O, l, h),
      ],
    });
  }
  m.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const v = X.forwardRef(m);
  return ((v[Gx] = a), v);
}
function Kx({ layoutId: a }) {
  const l = X.useContext(bc).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function Px(a, l) {
  X.useContext(Gg).strict;
}
function Jx(a) {
  const l = Xg(),
    { drag: u, layout: o } = l;
  if (!u && !o) return {};
  const c = { ...u, ...o };
  return {
    MeasureLayout:
      u?.isEnabled(a) || o?.isEnabled(a) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function Fx(a, l) {
  if (typeof Proxy > "u") return Gr;
  const u = new Map(),
    o = (h, f) => Gr(h, f, a, l),
    c = (h, f) => o(h, f);
  return new Proxy(c, {
    get: (h, f) =>
      f === "create"
        ? o
        : (u.has(f) || u.set(f, Gr(f, void 0, a, l)), u.get(f)),
  });
}
const Wx = (a, l) =>
  (l.isSVG ?? Kc(a))
    ? new D2(l)
    : new S2(l, { allowProjection: a !== X.Fragment });
class $x extends Yn {
  constructor(l) {
    (super(l), l.animationState || (l.animationState = V2(l)));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    uu(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let Ix = 0;
class tT extends Yn {
  constructor() {
    (super(...arguments), (this.id = Ix++), (this.isExitComplete = !1));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === o) return;
    if (l && o === !1) {
      if (this.isExitComplete) {
        const { initial: h, custom: f } = this.node.getProps();
        if (typeof h == "string") {
          const m = ha(this.node, h, f);
          if (m) {
            const { transition: v, transitionEnd: p, ...g } = m;
            for (const b in g) this.node.getValue(b)?.jump(g[b]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        ((this.isExitComplete = !0), u(this.id));
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    (u && u(this.id), l && (this.unmount = l(this.id)));
  }
  unmount() {}
}
const eT = { animation: { Feature: $x }, exit: { Feature: tT } };
function Sl(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const nT = (a) => (l) => Hc(l) && a(l, Sl(l));
function hl(a, l, u, o) {
  return yl(a, l, nT(u), o);
}
const Wg = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  ay = (a, l) => Math.abs(a - l);
function aT(a, l) {
  const u = ay(a.x, l.x),
    o = ay(a.y, l.y);
  return Math.sqrt(u ** 2 + o ** 2);
}
const iy = new Set(["auto", "scroll"]);
class $g {
  constructor(
    l,
    u,
    {
      transformPagePoint: o,
      contextWindow: c = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: f = 3,
      element: m,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (O) => {
        this.handleScroll(O.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Hs(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const O = Xr(this.lastMoveEventInfo, this.history),
          z = this.startEvent !== null,
          L = aT(O.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!z && !L) return;
        const { point: U } = O,
          { timestamp: k } = It;
        this.history.push({ ...U, timestamp: k });
        const { onStart: G, onMove: H } = this.handlers;
        (z ||
          (G && G(this.lastMoveEvent, O),
          (this.startEvent = this.lastMoveEvent)),
          H && H(this.lastMoveEvent, O));
      }),
      (this.handlePointerMove = (O, z) => {
        ((this.lastMoveEvent = O),
          (this.lastRawMoveEventInfo = z),
          (this.lastMoveEventInfo = Hs(z, this.transformPagePoint)),
          Dt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (O, z) => {
        this.end();
        const { onEnd: L, onSessionEnd: U, resumeAnimation: k } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && k && k(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const G = Xr(
          O.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Hs(z, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && L && L(O, G), U && U(O, G));
      }),
      !Hc(l))
    )
      return;
    ((this.dragSnapToOrigin = h),
      (this.handlers = u),
      (this.transformPagePoint = o),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const v = Sl(l),
      p = Hs(v, this.transformPagePoint),
      { point: g } = p,
      { timestamp: b } = It;
    this.history = [{ ...g, timestamp: b }];
    const { onSessionStart: x } = u;
    (x && x(l, Xr(p, this.history)),
      (this.removeListeners = gl(
        hl(this.contextWindow, "pointermove", this.handlePointerMove),
        hl(this.contextWindow, "pointerup", this.handlePointerUp),
        hl(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      m && this.startScrollTracking(m));
  }
  startScrollTracking(l) {
    let u = l.parentElement;
    for (; u; ) {
      const o = getComputedStyle(u);
      ((iy.has(o.overflowX) || iy.has(o.overflowY)) &&
        this.scrollPositions.set(u, { x: u.scrollLeft, y: u.scrollTop }),
        (u = u.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(l) {
    const u = this.scrollPositions.get(l);
    if (!u) return;
    const o = l === window,
      c = o
        ? { x: window.scrollX, y: window.scrollY }
        : { x: l.scrollLeft, y: l.scrollTop },
      h = { x: c.x - u.x, y: c.y - u.y };
    (h.x === 0 && h.y === 0) ||
      (o
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += h.x),
          (this.lastMoveEventInfo.point.y += h.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= h.x), (this.history[0].y -= h.y)),
      this.scrollPositions.set(l, c),
      Dt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      kn(this.updatePoint));
  }
}
function Hs(a, l) {
  return l ? { point: l(a.point) } : a;
}
function ly(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Xr({ point: a }, l) {
  return {
    point: a,
    delta: ly(a, Ig(l)),
    offset: ly(a, iT(l)),
    velocity: lT(l, 0.1),
  };
}
function iT(a) {
  return a[0];
}
function Ig(a) {
  return a[a.length - 1];
}
function lT(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let u = a.length - 1,
    o = null;
  const c = Ig(a);
  for (; u >= 0 && ((o = a[u]), !(c.timestamp - o.timestamp > Te(l))); ) u--;
  if (!o) return { x: 0, y: 0 };
  o === a[0] &&
    a.length > 2 &&
    c.timestamp - o.timestamp > Te(l) * 2 &&
    (o = a[1]);
  const h = ze(c.timestamp - o.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - o.x) / h, y: (c.y - o.y) / h };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function sT(a, { min: l, max: u }, o) {
  return (
    l !== void 0 && a < l
      ? (a = o ? Ot(l, a, o.min) : Math.max(a, l))
      : u !== void 0 && a > u && (a = o ? Ot(u, a, o.max) : Math.min(a, u)),
    a
  );
}
function sy(a, l, u) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: u !== void 0 ? a.max + u - (a.max - a.min) : void 0,
  };
}
function uT(a, { top: l, left: u, bottom: o, right: c }) {
  return { x: sy(a.x, u, c), y: sy(a.y, l, o) };
}
function uy(a, l) {
  let u = l.min - a.min,
    o = l.max - a.max;
  return (
    l.max - l.min < a.max - a.min && ([u, o] = [o, u]),
    { min: u, max: o }
  );
}
function oT(a, l) {
  return { x: uy(a.x, l.x), y: uy(a.y, l.y) };
}
function rT(a, l) {
  let u = 0.5;
  const o = se(a),
    c = se(l);
  return (
    c > o
      ? (u = dl(l.min, l.max - o, a.min))
      : o > c && (u = dl(a.min, a.max - c, l.min)),
    Je(0, 1, u)
  );
}
function cT(a, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - a.min),
    l.max !== void 0 && (u.max = l.max - a.min),
    u
  );
}
const yc = 0.35;
function fT(a = yc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = yc),
    { x: oy(a, "left", "right"), y: oy(a, "top", "bottom") }
  );
}
function oy(a, l, u) {
  return { min: ry(a, l), max: ry(a, u) };
}
function ry(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const hT = new WeakMap();
class dT {
  constructor(l) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Gt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l));
  }
  start(l, { snapToCursor: u = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const h = (b) => {
        (u && this.snapToCursor(Sl(b).point), this.stopAnimation());
      },
      f = (b, x) => {
        const { drag: O, dragPropagation: z, onDragStart: L } = this.getProps();
        if (
          O &&
          !z &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = HS(O)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Qe((k) => {
            let G = this.getAxisMotionValue(k).get() || 0;
            if (Pe.test(G)) {
              const { projection: H } = this.visualElement;
              if (H && H.layout) {
                const q = H.layout.layoutBox[k];
                q && (G = se(q) * (parseFloat(G) / 100));
              }
            }
            this.originPoint[k] = G;
          }),
          L && Dt.update(() => L(b, x), !1, !0),
          uc(this.visualElement, "transform"));
        const { animationState: U } = this.visualElement;
        U && U.setActive("whileDrag", !0);
      },
      m = (b, x) => {
        ((this.latestPointerEvent = b), (this.latestPanInfo = x));
        const {
          dragPropagation: O,
          dragDirectionLock: z,
          onDirectionLock: L,
          onDrag: U,
        } = this.getProps();
        if (!O && !this.openDragLock) return;
        const { offset: k } = x;
        if (z && this.currentDirection === null) {
          ((this.currentDirection = pT(k)),
            this.currentDirection !== null && L && L(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, k),
          this.updateAxis("y", x.point, k),
          this.visualElement.render(),
          U && Dt.update(() => U(b, x), !1, !0));
      },
      v = (b, x) => {
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = x),
          this.stop(b, x),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      p = () => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new $g(
      l,
      {
        onSessionStart: h,
        onStart: f,
        onMove: m,
        onSessionEnd: v,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: o,
        contextWindow: Wg(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(l, u) {
    const o = l || this.latestPointerEvent,
      c = u || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !c || !o)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: m } = this.getProps();
    m && Dt.postRender(() => m(o, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    (l && (l.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: o } = this.getProps();
    (!o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(l, u, o) {
    const { drag: c } = this.getProps();
    if (!o || !ks(l, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + o[l];
    (this.constraints &&
      this.constraints[l] &&
      (f = sT(f, this.constraints[l], this.elastic[l])),
      h.set(f));
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: u } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    (l && $a(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && o
        ? (this.constraints = uT(o.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = fT(u)),
      c !== this.constraints &&
        !$a(l) &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Qe((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = cT(o.layoutBox[h], this.constraints[h]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !$a(l)) return !1;
    const o = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const h = m2(o, c.root, this.visualElement.getTransformPagePoint());
    let f = oT(c.layout.layoutBox, h);
    if (u) {
      const m = u(f2(f));
      ((this.hasMutatedConstraints = !!m), m && (f = Sg(m)));
    }
    return f;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: o,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      v = this.constraints || {},
      p = Qe((g) => {
        if (!ks(g, u, this.currentDirection)) return;
        let b = (v && v[g]) || {};
        (f === !0 || f === g) && (b = { min: 0, max: 0 });
        const x = c ? 200 : 1e6,
          O = c ? 40 : 1e7,
          z = {
            type: "inertia",
            velocity: o ? l[g] : 0,
            bounceStiffness: x,
            bounceDamping: O,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(g, z);
      });
    return Promise.all(p).then(m);
  }
  startAxisValueAnimation(l, u) {
    const o = this.getAxisMotionValue(l);
    return (
      uc(this.visualElement, l),
      o.start(Nc(l, o, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Qe((l) => this.getAxisMotionValue(l).stop());
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      o = this.visualElement.getProps(),
      c = o[u];
    return (
      c ||
      this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Qe((u) => {
      const { drag: o } = this.getProps();
      if (!ks(u, o, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[u],
          v = h.get() || 0;
        h.set(l[u] - Ot(f, m, 0.5) + v);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!$a(u) || !o || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Qe((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const v = m.get();
        c[f] = rT({ min: v, max: v }, this.constraints[f]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Qe((f) => {
        if (!ks(f, l, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: v, max: p } = this.constraints[f];
        m.set(Ot(v, p, c[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    hT.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = hl(l, "pointerdown", (p) => {
        const { drag: g, dragListener: b = !0 } = this.getProps(),
          x = p.target,
          O = x !== l && ZS(x);
        g && b && !O && this.start(p);
      });
    let o;
    const c = () => {
        const { dragConstraints: p } = this.getProps();
        $a(p) &&
          p.current &&
          ((this.constraints = this.resolveRefConstraints()),
          o ||
            (o = mT(l, p.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: h } = this.visualElement,
      f = h.addEventListener("measure", c);
    (h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()),
      Dt.read(c));
    const m = yl(window, "resize", () => this.scalePositionWithinConstraints()),
      v = h.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (Qe((b) => {
              const x = this.getAxisMotionValue(b);
              x &&
                ((this.originPoint[b] += p[b].translate),
                x.set(x.get() + p[b].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (m(), u(), f(), v && v(), o && o());
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: o = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: f = yc,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function cy(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function mT(a, l, u) {
  const o = gp(a, cy(u)),
    c = gp(l, cy(u));
  return () => {
    (o(), c());
  };
}
function ks(a, l, u) {
  return (l === !0 || l === a) && (u === null || u === a);
}
function pT(a, l = 10) {
  let u = null;
  return (Math.abs(a.y) > l ? (u = "y") : Math.abs(a.x) > l && (u = "x"), u);
}
class yT extends Yn {
  constructor(l) {
    (super(l),
      (this.removeGroupControls = je),
      (this.removeListeners = je),
      (this.controls = new dT(l)));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    (l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || je));
  }
  update() {
    const { dragControls: l } = this.node.getProps(),
      { dragControls: u } = this.node.prevProps || {};
    l !== u &&
      (this.removeGroupControls(),
      l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Zr = (a) => (l, u) => {
  a && Dt.update(() => a(l, u), !1, !0);
};
class gT extends Yn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = je));
  }
  onPointerDown(l) {
    this.session = new $g(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Wg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: o,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: Zr(l),
      onStart: Zr(u),
      onMove: Zr(o),
      onEnd: (h, f) => {
        (delete this.session, c && Dt.postRender(() => c(h, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = hl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Qr = !1;
class vT extends X.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: o,
        layoutId: c,
      } = this.props,
      { projection: h } = l;
    (h &&
      (u.group && u.group.add(h),
      o && o.register && c && o.register(h),
      Qr && h.root.didUpdate(),
      h.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      h.setOptions({
        ...h.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Js.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: o,
        drag: c,
        isPresent: h,
      } = this.props,
      { projection: f } = o;
    return (
      f &&
        ((f.isPresent = h),
        l.layoutDependency !== u &&
          f.setOptions({ ...f.options, layoutDependency: u }),
        (Qr = !0),
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== h
          ? f.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== h &&
          (h
            ? f.promote()
            : f.relegate() ||
              Dt.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: u } = this.props,
      { projection: o } = l;
    o &&
      ((o.options.layoutAnchor = u),
      o.root.didUpdate(),
      Lc.postRender(() => {
        !o.currentAnimation && o.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: o,
      } = this.props,
      { projection: c } = l;
    ((Qr = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        u && u.group && u.group.remove(c),
        o && o.deregister && o.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function t0(a) {
  const [l, u] = qg(),
    o = X.useContext(bc);
  return w.jsx(vT, {
    ...a,
    layoutGroup: o,
    switchLayoutGroup: X.useContext(Jg),
    isPresent: l,
    safeToRemove: u,
  });
}
const bT = {
  pan: { Feature: gT },
  drag: { Feature: yT, ProjectionNode: Yg, MeasureLayout: t0 },
};
function fy(a, l, u) {
  const { props: o } = a;
  a.animationState &&
    o.whileHover &&
    a.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    h = o[c];
  h && Dt.postRender(() => h(l, Sl(l)));
}
class ST extends Yn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = YS(
        l,
        (u, o) => (fy(this.node, o, "Start"), (c) => fy(this.node, c, "End")),
      ));
  }
  unmount() {}
}
class xT extends Yn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = gl(
      yl(this.node.current, "focus", () => this.onFocus()),
      yl(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function hy(a, l, u) {
  const { props: o } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    o.whileTap &&
    a.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    h = o[c];
  h && Dt.postRender(() => h(l, Sl(l)));
}
class TT extends Yn {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: u, propagate: o } = this.node.props;
    this.unmount = KS(
      l,
      (c, h) => (
        hy(this.node, h, "Start"),
        (f, { success: m }) => hy(this.node, f, m ? "End" : "Cancel")
      ),
      { useGlobalTarget: u, stopPropagation: o?.tap === !1 },
    );
  }
  unmount() {}
}
const gc = new WeakMap(),
  Kr = new WeakMap(),
  AT = (a) => {
    const l = gc.get(a.target);
    l && l(a);
  },
  ET = (a) => {
    a.forEach(AT);
  };
function MT({ root: a, ...l }) {
  const u = a || document;
  Kr.has(u) || Kr.set(u, {});
  const o = Kr.get(u),
    c = JSON.stringify(l);
  return (
    o[c] || (o[c] = new IntersectionObserver(ET, { root: a, ...l })),
    o[c]
  );
}
function DT(a, l, u) {
  const o = MT(l);
  return (
    gc.set(a, u),
    o.observe(a),
    () => {
      (gc.delete(a), o.unobserve(a));
    }
  );
}
const RT = { some: 0, all: 1 };
class CT extends Yn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: o, amount: c = "some", once: h } = l,
      f = {
        root: u ? u.current : void 0,
        rootMargin: o,
        threshold: typeof c == "number" ? c : RT[c],
      },
      m = (v) => {
        const { isIntersecting: p } = v;
        if (
          this.isInView === p ||
          ((this.isInView = p), h && !p && this.hasEnteredView)
        )
          return;
        (p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p));
        const { onViewportEnter: g, onViewportLeave: b } = this.node.getProps(),
          x = p ? g : b;
        x && x(v);
      };
    this.stopObserver = DT(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(OT(l, u)) && this.startObserver();
  }
  unmount() {
    (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
  }
}
function OT({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (u) => a[u] !== l[u];
}
const wT = {
    inView: { Feature: CT },
    tap: { Feature: TT },
    focus: { Feature: xT },
    hover: { Feature: ST },
  },
  VT = { layout: { ProjectionNode: Yg, MeasureLayout: t0 } },
  zT = { ...eT, ...wT, ...bT, ...VT },
  Ia = Fx(zT, Wx);
const jT = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  NT = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, u, o) =>
      o ? o.toUpperCase() : u.toLowerCase(),
    ),
  dy = (a) => {
    const l = NT(a);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  e0 = (...a) =>
    a
      .filter((l, u, o) => !!l && l.trim() !== "" && o.indexOf(l) === u)
      .join(" ")
      .trim(),
  _T = (a) => {
    for (const l in a)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
var BT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const UT = X.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: o,
      className: c = "",
      children: h,
      iconNode: f,
      ...m
    },
    v,
  ) =>
    X.createElement(
      "svg",
      {
        ref: v,
        ...BT,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: o ? (Number(u) * 24) / Number(l) : u,
        className: e0("lucide", c),
        ...(!h && !_T(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...f.map(([p, g]) => X.createElement(p, g)),
        ...(Array.isArray(h) ? h : [h]),
      ],
    ),
);
const qn = (a, l) => {
  const u = X.forwardRef(({ className: o, ...c }, h) =>
    X.createElement(UT, {
      ref: h,
      iconNode: l,
      className: e0(`lucide-${jT(dy(a))}`, `lucide-${a}`, o),
      ...c,
    }),
  );
  return ((u.displayName = dy(a)), u);
};
const LT = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  HT = qn("eye", LT);
const kT = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  YT = qn("instagram", kT);
const qT = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  GT = qn("mail", qT);
const XT = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  ZT = qn("moon", XT);
const QT = [
    [
      "path",
      {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw",
      },
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ],
  KT = qn("package", QT);
const PT = [
    ["path", { d: "M12 17v5", key: "bb1du9" }],
    [
      "path",
      {
        d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
        key: "1nkz8b",
      },
    ],
  ],
  my = qn("pin", PT);
const JT = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  FT = qn("sun", JT);
const WT = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  $T = qn("x", WT),
  IT = [
    {
      id: 1,
      title: "Korean Menu Design",
      category: "Package",
      type: "package",
      height: "h-80",
      color: "bg-rose-200 dark:bg-rose-900",
      image: "/Prtfolio//assets/image/project-1-cover.png",
      packageImages: [
        "/Prtfolio//assets/image/project-1-pkg-1.png",
        "/Prtfolio//assets/image/project-1-pkg-2.png",
        "/Prtfolio//assets/image/project-1-pkg-3.png",
        "/Prtfolio//assets/image/project-1-pkg-4.png",
      ],
    },
    {
      id: 2,
      title: "Tunisia Tuna",
      category: "Print",
      type: "single",
      height: "h-64",
      color: "bg-blue-200 dark:bg-blue-900",
      image: "/Prtfolio//assets/image/project-2.png",
    },
    {
      id: 3,
      title: "Story — Soft Stacks",
      category: "Print",
      type: "single",
      height: "h-96",
      color: "bg-amber-200 dark:bg-amber-900",
      image: "/Prtfolio//assets/image/project-3.jpg",
    },
    {
      id: 4,
      title: "CV & Resume Design",
      category: "Package",
      type: "package",
      height: "h-96",
      color: "bg-emerald-200 dark:bg-emerald-900",
      image: "/Prtfolio//assets/image/project-4-cover.png",
      packageImages: [
        "/Prtfolio//assets/image/project-4-cover.png",
        "/Prtfolio//assets/image/project-4-pkg-2.png",
        "/Prtfolio//assets/image/project-4-pkg-3.jpg",
        "/Prtfolio//assets/image/project-4-pkg-4.jpg",
      ],
    },
    {
      id: 5,
      title: "Julia Couch Business Card",
      category: "Identity",
      type: "single",
      height: "h-80",
      color: "bg-purple-200 dark:bg-purple-900",
      image: "/Prtfolio//assets/image/project-5.jpg",
    },
    {
      id: 6,
      title: "Boga Lim Vintage Ad",
      category: "Print",
      type: "single",
      height: "h-64",
      color: "bg-cyan-200 dark:bg-cyan-900",
      image: "/Prtfolio//assets/image/project-6.jpg",
    },
    {
      id: 7,
      title: "Delice Restaurant Menu",
      category: "Package",
      type: "package",
      height: "h-72",
      color: "bg-orange-200 dark:bg-orange-900",
      image: "/Prtfolio//assets/image/project-7-cover.png",
      packageImages: [
        "/Prtfolio//assets/image/project-7-pkg-1.png",
        "/Prtfolio//assets/image/project-7-pkg-2.png",
        "/Prtfolio//assets/image/project-7-pkg-3.png",
        "/Prtfolio//assets/image/project-7-pkg-4.png",
      ],
    },
    {
      id: 8,
      title: "Sustainable Flavors",
      category: "Print",
      type: "single",
      height: "h-80",
      color: "bg-green-200 dark:bg-green-900",
      image: "/Prtfolio//assets/image/project-8.jpg",
    },
    {
      id: 9,
      title: "Salsa Restaurant Logo",
      category: "Identity",
      type: "single",
      height: "h-64",
      color: "bg-gray-200 dark:bg-gray-700",
      image: "/Prtfolio//assets/image/project-9.jpg",
    },
    {
      id: 10,
      title: "Norveign Magazine",
      category: "Editorial",
      type: "single",
      height: "h-80",
      color: "bg-stone-200 dark:bg-stone-800",
      image: "/Prtfolio//assets/image/project-10.jpg",
    },
    {
      id: 11,
      title: "Yune Avatar",
      category: "Package",
      type: "package",
      height: "h-64",
      color: "bg-slate-200 dark:bg-slate-800",
      image: "/Prtfolio//assets/image/project-11-cover.png",
      packageImages: [
        "/Prtfolio//assets/image/project-11-cover.png",
        "/Prtfolio//assets/image/project-11-pkg-2.jpg",
        "/Prtfolio//assets/image/project-11-pkg-3.png",
        "/Prtfolio//assets/image/project-11-pkg-4.jpg",
      ],
    },
    {
      id: 12,
      title: "Louts Server",
      category: "Package",
      type: "package",
      height: "h-64",
      color: "bg-purple-200 dark:bg-purple-950",
      image: "/Prtfolio//assets/image/project-12-cover.png",
      packageImages: [
        "/Prtfolio//assets/image/project-12-cover.png",
        "/Prtfolio//assets/image/project-12-pkg-2.png",
        "/Prtfolio//assets/image/project-12-pkg-3.png",
        "/Prtfolio//assets/image/project-12-pkg-4.png",
      ],
    },
  ],
  tA = [
    {
      name: "Photoshop",
      tag: "Pixel wizardry",
      color: "bg-blue-100 dark:bg-blue-900",
      rotate: "-rotate-2",
    },
    {
      name: "Illustrator",
      tag: "Vector magic",
      color: "bg-orange-100 dark:bg-orange-900",
      rotate: "rotate-3",
    },
    {
      name: "Figma",
      tag: "Where I live",
      color: "bg-green-100 dark:bg-green-900",
      rotate: "-rotate-1",
    },
    {
      name: "After Effects",
      tag: "Making it move",
      color: "bg-purple-100 dark:bg-purple-900",
      rotate: "rotate-2",
    },
    {
      name: "Premiere Pro",
      tag: "Cutting room",
      color: "bg-purple-200 dark:bg-purple-800",
      rotate: "-rotate-3",
    },
    {
      name: "InDesign",
      tag: "Layout love",
      color: "bg-pink-100 dark:bg-pink-900",
      rotate: "rotate-1",
    },
    {
      name: "Lightroom",
      tag: "Color grading",
      color: "bg-cyan-100 dark:bg-cyan-900",
      rotate: "-rotate-2",
    },
    {
      name: "Canva",
      tag: "Quick & dirty",
      color: "bg-teal-100 dark:bg-teal-900",
      rotate: "rotate-2",
    },
  ];
function eA({ project: a, onClose: l }) {
  const u = a.packageImages?.length
    ? a.packageImages.map((o, c) => ({
        src: o,
        label: `Package Item ${c + 1}`,
      }))
    : Array.from({ length: 6 }, (o, c) => ({
        src: "",
        label: `Package Item ${c + 1}`,
      }));
  return w.jsxs("div", {
    className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
    children: [
      w.jsx("div", {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
        onClick: l,
      }),
      w.jsxs(Ia.div, {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        className:
          "relative z-10 w-full max-w-5xl bg-paper rounded-none border border-black/10 dark:border-white/10 overflow-hidden flex flex-col",
        style: { maxHeight: "90vh" },
        children: [
          w.jsxs("div", {
            className:
              "p-6 bg-background border-b border-black/10 dark:border-white/10 flex justify-between items-center",
            children: [
              w.jsxs("div", {
                children: [
                  w.jsx("h2", {
                    className: "font-serif text-3xl font-bold text-foreground",
                    style: { fontFamily: "Libre Baskerville, Georgia, serif" },
                    children: a.title,
                  }),
                  w.jsxs("p", {
                    className: "font-hand text-xl text-muted-foreground",
                    style: { fontFamily: "Caveat, cursive" },
                    children: [a.category, " Package"],
                  }),
                ],
              }),
              w.jsx("button", {
                onClick: l,
                className:
                  "p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
                children: w.jsx($T, { size: 20 }),
              }),
            ],
          }),
          w.jsx("div", {
            className: "flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-black/20",
            children: w.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
              children: u.map((o, c) =>
                w.jsxs(
                  "div",
                  {
                    className: "paper-card p-3",
                    children: [
                      w.jsx("div", {
                        className:
                          "w-full bg-gray-200 dark:bg-gray-800 rounded-sm mb-3 flex items-center justify-center overflow-hidden",
                        style: { minHeight: o.src ? void 0 : "160px" },
                        children: o.src
                          ? w.jsx("img", {
                              src: o.src,
                              alt: o.label,
                              className: "w-full h-auto block",
                            })
                          : w.jsxs("span", {
                              className:
                                "font-hand text-muted-foreground py-16",
                              style: { fontFamily: "Caveat, cursive" },
                              children: ["Asset ", c + 1],
                            }),
                      }),
                      w.jsx("div", {
                        className:
                          "font-sans font-medium text-sm text-center text-foreground",
                        children: o.label,
                      }),
                    ],
                  },
                  c,
                ),
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
function nA({ size: a = 24 }) {
  return w.jsx("svg", {
    width: a,
    height: a,
    viewBox: "0 0 127.14 96.36",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: w.jsx("path", {
      d: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z",
    }),
  });
}
function aA() {
  const [a, l] = X.useState("light"),
    [u, o] = X.useState(null),
    c = () => l((h) => (h === "light" ? "dark" : "light"));
  return w.jsx("div", {
    className: a,
    children: w.jsxs("div", {
      className: "min-h-screen overflow-x-hidden",
      style: {
        background: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        backgroundImage:
          a === "dark"
            ? "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      },
      children: [
        w.jsxs("nav", {
          className:
            "fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-black/5 dark:border-white/5",
          style: { background: "hsla(var(--background)/0.85)" },
          children: [
            w.jsx("a", {
              href: "#hero",
              className: "font-hand text-4xl font-bold tracking-tight",
              style: { fontFamily: "Caveat, cursive" },
              children: "BERLIN",
            }),
            w.jsxs("div", {
              className:
                "flex items-center gap-6 font-sans font-medium text-sm",
              children: [
                w.jsx("a", {
                  href: "#about",
                  className:
                    "hidden sm:block hover:opacity-60 transition-opacity",
                  children: "About",
                }),
                w.jsx("a", {
                  href: "#projects",
                  className:
                    "hidden sm:block hover:opacity-60 transition-opacity",
                  children: "Projects",
                }),
                w.jsx("a", {
                  href: "#skills",
                  className:
                    "hidden sm:block hover:opacity-60 transition-opacity",
                  children: "Skills",
                }),
                w.jsx("a", {
                  href: "#contact",
                  className:
                    "hidden sm:block hover:opacity-60 transition-opacity",
                  children: "Contact",
                }),
                w.jsx("button", {
                  onClick: c,
                  className:
                    "p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
                  children:
                    a === "dark"
                      ? w.jsx(FT, { size: 20 })
                      : w.jsx(ZT, { size: 20 }),
                }),
              ],
            }),
          ],
        }),
        w.jsxs("section", {
          id: "hero",
          className:
            "relative min-h-screen pt-24 pb-12 px-6 flex flex-col items-center justify-center overflow-hidden",
          children: [
            w.jsxs(Ia.div, {
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "relative z-10 max-w-4xl mx-auto text-center",
              children: [
                w.jsx("div", {
                  className:
                    "inline-block mb-4 -rotate-2 px-4 py-1 font-hand text-xl text-black paper-shadow",
                  style: {
                    background: "var(--note-yellow)",
                    borderRadius: 2,
                    fontFamily: "Caveat, cursive",
                  },
                  children: "Hello, I am",
                }),
                w.jsx("h1", {
                  className:
                    "font-serif text-[14vw] sm:text-8xl md:text-9xl font-bold leading-none tracking-tighter uppercase",
                  style: { fontFamily: "Libre Baskerville, Georgia, serif" },
                  children: w.jsx("span", {
                    className: "highlighter-yellow inline-block -rotate-1",
                    children: "BERLIN",
                  }),
                }),
                w.jsxs("p", {
                  className:
                    "mt-8 font-sans text-xl sm:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto",
                  children: [
                    "A bold, playful",
                    " ",
                    w.jsx("span", {
                      className: "font-bold",
                      style: { color: "hsl(var(--foreground))" },
                      children: "Graphic Designer",
                    }),
                    " ",
                    "making organized chaos out of raw pixels.",
                  ],
                }),
                w.jsxs("div", {
                  className:
                    "mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center",
                  children: [
                    w.jsxs("a", {
                      href: "#projects",
                      className:
                        "group relative px-8 py-3 font-bold text-lg overflow-hidden paper-shadow hover:-translate-y-1 transition-transform inline-block",
                      style: {
                        background: "hsl(var(--foreground))",
                        color: "hsl(var(--background))",
                        borderRadius: 2,
                      },
                      children: [
                        w.jsx("span", {
                          className: "relative z-10",
                          children: "View Projects",
                        }),
                        w.jsx("div", {
                          className:
                            "absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform z-0",
                          style: { background: "var(--note-pink)" },
                        }),
                      ],
                    }),
                    w.jsx("a", {
                      href: "#contact",
                      className:
                        "px-8 py-3 font-bold text-lg paper-shadow hover:-translate-y-1 transition-all inline-block border-2 border-foreground paper-card",
                      style: { borderRadius: 2 },
                      children: "Contact Me",
                    }),
                  ],
                }),
              ],
            }),
            w.jsx("div", {
              className:
                "absolute top-[32%] left-2 sm:left-[3%] md:left-[6%] animate-float z-0",
              children: w.jsxs("div", {
                className:
                  "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-3 paper-shadow flex flex-col justify-center font-hand text-xl text-black relative",
                style: {
                  background: "var(--note-pink)",
                  borderRadius: 2,
                  fontFamily: "Caveat, cursive",
                  transform: "rotate(-10deg)",
                },
                children: [
                  w.jsx(my, {
                    size: 20,
                    className: "absolute -top-3 -right-3 text-gray-500",
                  }),
                  "make it pop!",
                ],
              }),
            }),
            w.jsx("div", {
              className:
                "absolute top-[58%] right-2 sm:right-[3%] md:right-[6%] animate-float-delayed z-0",
              children: w.jsxs("div", {
                className:
                  "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-3 paper-shadow flex flex-col justify-center font-hand text-xl text-black relative",
                style: {
                  background: "var(--note-blue)",
                  borderRadius: 2,
                  fontFamily: "Caveat, cursive",
                  transform: "rotate(8deg)",
                },
                children: [
                  w.jsx("div", { className: "washi-tape washi-tape-pink" }),
                  "coffee first, kerning second",
                ],
              }),
            }),
            w.jsx("div", {
              className:
                "absolute bottom-0 left-0 w-full overflow-hidden leading-none h-8 pointer-events-none",
              children: w.jsxs("svg", {
                viewBox: "0 0 1200 120",
                preserveAspectRatio: "none",
                className: "block w-full h-full fill-current",
                style: { color: "hsl(var(--foreground)/0.05)" },
                children: [
                  w.jsx("path", {
                    d: "M0,0 V46.29 c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                    opacity: ".25",
                  }),
                  w.jsx("path", {
                    d: "M0,0 V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.84V0Z",
                    opacity: ".5",
                  }),
                  w.jsx("path", {
                    d: "M0,0 V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",
                  }),
                ],
              }),
            }),
          ],
        }),
        w.jsx("section", {
          id: "about",
          className: "relative py-24 px-6 max-w-6xl mx-auto",
          children: w.jsxs("div", {
            className: "flex flex-col md:flex-row gap-12 items-center",
            children: [
              w.jsxs(Ia.div, {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: !0 },
                className: "w-full md:w-1/2 relative",
                children: [
                  w.jsxs("div", {
                    className:
                      "paper-card p-4 -rotate-3 w-3/4 mx-auto md:w-full max-w-sm relative",
                    children: [
                      w.jsx("div", { className: "washi-tape" }),
                      w.jsx("div", {
                        className:
                          "aspect-[3/4] w-full mb-4 flex items-end justify-center rounded-sm overflow-hidden",
                        style: { background: "rgba(140,140,140,0.18)" },
                        children: w.jsx("img", {
                          src: "/Prtfolio/assets/image/about-photo-nobg.png",
                          alt: "The Artist",
                          className:
                            "w-full h-full object-contain object-bottom",
                        }),
                      }),
                      w.jsx("p", {
                        className: "font-hand text-center text-xl",
                        style: { fontFamily: "Caveat, cursive" },
                        children: "Me in my natural habitat",
                      }),
                    ],
                  }),
                  w.jsxs("div", {
                    className:
                      "absolute -bottom-10 -right-4 p-3 paper-shadow font-hand text-lg text-black rotate-6 w-48",
                    style: {
                      background: "var(--note-yellow)",
                      borderRadius: 2,
                      fontFamily: "Caveat, cursive",
                    },
                    children: [
                      w.jsx("div", {
                        className: "font-bold border-b border-black/20 mb-1",
                        children: "Timeline",
                      }),
                      w.jsx("div", { children: "2020 Started Design" }),
                      w.jsx("div", { children: "2022 Freelancing" }),
                      w.jsx("div", { children: "2024 Pro Branding" }),
                    ],
                  }),
                ],
              }),
              w.jsxs(Ia.div, {
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: !0 },
                className: "w-full md:w-1/2",
                children: [
                  w.jsxs("h2", {
                    className: "font-serif text-5xl font-bold mb-6",
                    style: { fontFamily: "Libre Baskerville, Georgia, serif" },
                    children: [
                      "About ",
                      w.jsx("span", {
                        className: "highlighter-pink",
                        children: "the Artist",
                      }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "font-sans text-lg space-y-4",
                    children: [
                      w.jsx("p", {
                        children:
                          "I don't just push pixels; I craft experiences. Every brand has a story, and my job is to make sure it's told in the most visually arresting way possible.",
                      }),
                      w.jsxs("p", {
                        children: [
                          "My design philosophy is simple:",
                          " ",
                          w.jsx("strong", {
                            className: "font-bold",
                            children: "organized chaos",
                          }),
                          ".",
                          " ",
                          "The best designs feel effortless, like they just fell onto the page perfectly formed, but are secretly built on rigorous grids and obsessive attention to detail.",
                        ],
                      }),
                      w.jsx("div", {
                        className: "flex flex-wrap gap-3 mt-8",
                        children: [
                          "Creativity",
                          "Discipline",
                          "Consistency",
                          "Attention To Detail",
                        ].map((h, f) => {
                          const m = [
                              "-rotate-1",
                              "rotate-2",
                              "-rotate-2",
                              "rotate-1",
                            ],
                            v = [
                              "hover:rotate-1",
                              "hover:-rotate-1",
                              "hover:rotate-2",
                              "hover:-rotate-2",
                            ];
                          return w.jsx(
                            "span",
                            {
                              className: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1 text-sm font-bold paper-shadow transition-transform ${m[f]} ${v[f]}`,
                              style: { borderRadius: 2 },
                              children: h,
                            },
                            h,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        w.jsxs("section", {
          id: "projects",
          className: "py-24 px-6 max-w-7xl mx-auto",
          children: [
            w.jsxs("h2", {
              className: "font-serif text-5xl font-bold mb-16 text-center",
              style: { fontFamily: "Libre Baskerville, Georgia, serif" },
              children: [
                "Selected ",
                w.jsx("span", {
                  className: "highlighter-blue",
                  children: "Works",
                }),
              ],
            }),
            w.jsx("div", {
              className: "masonry-grid",
              children: IT.map((h, f) =>
                w.jsx(
                  Ia.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: (f % 3) * 0.1 },
                    className: "masonry-item",
                    children: w.jsxs("div", {
                      onClick: () => h.type === "package" && o(h),
                      className: `group paper-card p-3 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${h.type === "package" ? "cursor-pointer" : "cursor-default"}`,
                      children: [
                        w.jsxs("div", {
                          className: `w-full ${h.image ? "" : h.height} ${h.color} mb-4 relative overflow-hidden flex items-center justify-center`,
                          style: { borderRadius: 2 },
                          children: [
                            h.type === "package" &&
                              w.jsxs("div", {
                                className:
                                  "absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold flex items-center gap-1 z-10",
                                style: { borderRadius: 2 },
                                children: [w.jsx(KT, { size: 14 }), " Package"],
                              }),
                            h.image
                              ? w.jsx("img", {
                                  src: h.image,
                                  alt: h.title,
                                  className: "w-full h-auto block",
                                })
                              : w.jsx("span", {
                                  className:
                                    "font-hand text-2xl opacity-50 mix-blend-overlay",
                                  style: { fontFamily: "Caveat, cursive" },
                                  children: "Preview",
                                }),
                            h.type === "package" &&
                              w.jsx("div", {
                                className:
                                  "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                children: w.jsxs("span", {
                                  className:
                                    "text-white font-bold font-sans flex items-center gap-2",
                                  children: [
                                    w.jsx(HT, { size: 18 }),
                                    " View Package",
                                  ],
                                }),
                              }),
                          ],
                        }),
                        w.jsxs("div", {
                          className: "flex justify-between items-start",
                          children: [
                            w.jsxs("div", {
                              children: [
                                w.jsx("h3", {
                                  className:
                                    "font-sans font-bold text-lg leading-tight",
                                  children: h.title,
                                }),
                                w.jsx("div", {
                                  className:
                                    "font-hand text-muted-foreground mt-1",
                                  style: { fontFamily: "Caveat, cursive" },
                                  children: h.category,
                                }),
                              ],
                            }),
                            w.jsx("div", {
                              className:
                                "border-2 border-red-500 text-red-500 font-bold uppercase text-[10px] px-2 py-0.5 rotate-12 opacity-80 mix-blend-multiply dark:mix-blend-screen",
                              style: { borderRadius: 2 },
                              children: new Date().getFullYear(),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  h.id,
                ),
              ),
            }),
          ],
        }),
        w.jsxs("section", {
          id: "skills",
          className: "py-24 px-6 max-w-6xl mx-auto relative",
          children: [
            w.jsxs("h2", {
              className: "font-serif text-5xl font-bold mb-16 text-center",
              style: { fontFamily: "Libre Baskerville, Georgia, serif" },
              children: [
                "My ",
                w.jsx("span", {
                  className: "highlighter-yellow",
                  children: "Toolkit",
                }),
              ],
            }),
            w.jsx("div", {
              className: "flex flex-wrap justify-center gap-6",
              children: tA.map((h, f) =>
                w.jsxs(
                  Ia.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: !0 },
                    transition: { delay: f * 0.1 },
                    whileHover: { scale: 1.1, rotate: 0 },
                    className: `${h.color} ${h.rotate} paper-shadow p-4 flex flex-col items-center justify-center w-40 h-40 border border-black/10 dark:border-white/10`,
                    style: { borderRadius: 2 },
                    children: [
                      w.jsx("div", {
                        className: "font-sans font-bold text-lg text-center",
                        children: h.name,
                      }),
                      w.jsx("div", {
                        className:
                          "font-hand text-sm text-center mt-2 opacity-80",
                        style: { fontFamily: "Caveat, cursive" },
                        children: h.tag,
                      }),
                    ],
                  },
                  h.name,
                ),
              ),
            }),
          ],
        }),
        w.jsxs("section", {
          id: "contact",
          className: "py-24 px-6 max-w-4xl mx-auto relative mb-24",
          children: [
            w.jsxs("h2", {
              className: "font-serif text-5xl font-bold mb-12 text-center",
              style: { fontFamily: "Libre Baskerville, Georgia, serif" },
              children: [
                "Let's ",
                w.jsx("span", {
                  className: "highlighter-pink",
                  children: "Talk",
                }),
              ],
            }),
            w.jsxs("div", {
              className: "flex flex-col md:flex-row gap-12",
              children: [
                w.jsx("div", {
                  className: "w-full md:w-1/3",
                  children: w.jsxs("div", {
                    className:
                      "p-6 paper-shadow rotate-1 flex flex-col gap-4 text-black",
                    style: {
                      background: "var(--note-yellow)",
                      borderRadius: 2,
                      fontFamily: "Caveat, cursive",
                    },
                    children: [
                      w.jsx("h3", {
                        className:
                          "font-hand text-2xl font-bold mb-2 border-b border-black/20 pb-2",
                        children: "Find me here",
                      }),
                      w.jsxs("a", {
                        href: "https://www.instagram.com/berlin_vfx?igsh=Nzl4d3NndG1zZjU1&utm_source=qr",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-3 font-sans font-medium hover:opacity-60 transition-opacity",
                        children: [w.jsx(YT, { size: 24 }), " @berlin_vfx"],
                      }),
                      w.jsxs("a", {
                        href: "https://discord.com/users/ber.n",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-3 font-sans font-medium hover:opacity-60 transition-opacity",
                        children: [w.jsx(nA, { size: 20 }), " ber.n"],
                      }),
                      w.jsxs("a", {
                        href: "mailto:berlindesignstn@gmail.com",
                        className:
                          "flex items-center gap-3 font-sans font-medium hover:opacity-60 transition-opacity",
                        children: [
                          w.jsx(GT, { size: 24 }),
                          " berlindesignstn@gmail.com",
                        ],
                      }),
                    ],
                  }),
                }),
                w.jsxs("div", {
                  className:
                    "w-full md:w-2/3 bg-paper p-8 paper-shadow relative",
                  style: { borderRadius: 2 },
                  children: [
                    w.jsx("div", {
                      className:
                        "absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-gray-200 dark:border-gray-700 pointer-events-none",
                      style: { borderRadius: 2 },
                    }),
                    w.jsx(my, {
                      size: 32,
                      className:
                        "absolute -top-4 -left-2 text-gray-400 -rotate-45",
                    }),
                    w.jsxs("form", {
                      className: "relative z-10 font-sans space-y-6",
                      onSubmit: (h) => h.preventDefault(),
                      children: [
                        w.jsxs("div", {
                          children: [
                            w.jsx("label", {
                              className:
                                "block text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider",
                              children: "Name",
                            }),
                            w.jsx("input", {
                              type: "text",
                              className:
                                "w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-foreground outline-none py-2 transition-colors font-hand text-2xl",
                              style: { fontFamily: "Caveat, cursive" },
                              placeholder: "John Doe",
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          children: [
                            w.jsx("label", {
                              className:
                                "block text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider",
                              children: "Email",
                            }),
                            w.jsx("input", {
                              type: "email",
                              className:
                                "w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-foreground outline-none py-2 transition-colors font-hand text-2xl",
                              style: { fontFamily: "Caveat, cursive" },
                              placeholder: "john@example.com",
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          children: [
                            w.jsx("label", {
                              className:
                                "block text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider",
                              children: "Message",
                            }),
                            w.jsx("textarea", {
                              rows: 4,
                              className:
                                "w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-foreground outline-none py-2 transition-colors font-hand text-2xl resize-none",
                              style: { fontFamily: "Caveat, cursive" },
                              placeholder: "Let's build something awesome...",
                            }),
                          ],
                        }),
                        w.jsx("button", {
                          type: "submit",
                          className:
                            "bg-destructive text-destructive-foreground font-serif font-bold text-xl px-8 py-3 rounded-full mx-auto block paper-shadow hover:scale-105 transition-transform",
                          style: {
                            fontFamily: "Libre Baskerville, Georgia, serif",
                          },
                          children: "Send Message",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        w.jsx("footer", {
          className:
            "py-8 text-center border-t border-black/10 dark:border-white/10 font-sans text-muted-foreground",
          children: w.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " BERLIN. Designed with organized chaos.",
            ],
          }),
        }),
        w.jsx(Mx, {
          children: u && w.jsx(eA, { project: u, onClose: () => o(null) }),
        }),
      ],
    }),
  });
}
j1.createRoot(document.getElementById("root")).render(w.jsx(aA, {}));
