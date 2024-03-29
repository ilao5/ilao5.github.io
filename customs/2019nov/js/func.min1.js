function checkFlame(e, t) {
	if (e > t - 30) {
		flame.fadeIn(500)
	} else {
		flame.fadeOut(50)
	}
}
function calcOffset(e, t) {
	newOffset = e / 12e4 * t + 20;
	return newOffset
}
function checkShipPos(e, t, n) {
	if (e < t - 200) {
		e = e
	} else {
		e = t - 200
	}
	n.css({
		position: "fixed",
		top: e
	}).addClass("ship-moving").removeClass("ship-static")
}
function numberWithCommas(e) {
	return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function createCookie(e, t, n, r, i) {
	var s = e + "=" + escape(t) + ";";
	if (n) {
		if (n instanceof Date) {
			if (isNaN(n.getTime())) n = new Date
		} else n = new Date((new Date).getTime() + parseInt(n) * 1e3 * 60 * 60 * 24);
		s += "expires=" + n.toGMTString() + ";"
	}
	if (r) s += "path=" + r + ";";
	if (i) s += "domain=" + i + ";";
	document.cookie = s
}
function getCookie(e) {
	var t = new RegExp("(?:^" + e + "|;s*" + e + ")=(.*?)(?:;|$)", "g");
	var n = t.exec(document.cookie);
	return n === null ? null : n[1]
}
function deleteCookie(e, t, n) {
	if (getCookie(e)) createCookie(e, "", -1, t, n)
}
function checkDistance(e) {
	if (e < 10016) {
		since = e - 0;
		multiplier = .01;
		base = 0;
		unit = "1米"
	} else if (e > 10016 && e < 19016) {
		since = e - 10016;
		multiplier = .1;
		base = 100;
		unit = "100米"
	} else if (e > 19016 && e < 28016) {
		since = e - 19016;
		multiplier = 1;
		base = 1e3;
		unit = "1千米"
	} else if (e > 28016 && e < 37016) {
		since = e - 28016;
		multiplier = 10;
		base = 1e4;
		unit = "10千米"
	} else if (e > 37016 && e < 46016) {
		since = e - 37016;
		multiplier = 100;
		base = 1e5;
		unit = "100千米"
	} else if (e > 46016 && e < 55016) {
		since = e - 46016;
		multiplier = 1e3;
		base = 1e6;
		unit = "1,000千米"
	} else if (e > 55016 && e < 64016) {
		since = e - 55016;
		multiplier = 1e4;
		base = 1e7;
		unit = "10,000千米"
	} else if (e > 64016 && e < 73016) {
		since = e - 64016;
		multiplier = 1e5;
		base = 1e8;
		unit = "100,000千米"
	} else if (e > 73016 && e < 94e3) {
		since = e - 73016;
		multiplier = 1e6;
		base = 1e9;
		unit = "1,000,000千米"
	}
	var t = px.text();
	if (t != unit) {
		px.parent().animate({
			backgroundColor: "rgba(243,146,0,1)",
			transform: "scale(1.2)"
		}).delay(50).animate({
			backgroundColor: "rgba(0,0,0,0.5)",
			transform: "scale(1)"
		})
	}
	px.text(unit);
	travelled = base + Math.round(since * multiplier);
	return travelled
}
function getTimeFromSeconds(e) {
	d = Number(e);
	var t = Math.floor(d / 3600);
	var n = Math.floor(d % 3600 / 60);
	var r = Math.floor(d % 3600 % 60);
	if (t < 10) {
		t = "0" + t
	}
	if (n < 10) {
		n = "0" + n
	}
	if (r < 10) {
		r = "0" + r
	}
	if (r == "00") {
		r = "01"
	}
	var i = t + ":" + n + ":" + r;
	return i
}
function calcWarpSpeed(e) {
	var t = e / 1078260480;
	t = t * 3600;
	t = Math.round(t);
	t = getTimeFromSeconds(t);
	return t
}
function onScroll() {
	offset = w.scrollTop();
	checkFlame(offset, shipBlastOff);
	if (offset > 2e3) {
		if (offset > posWas) {
			ship.addClass("ship-fwd ship-animated").removeClass("ship-rwd")
		}
		if (offset < posWas) {
			if (ship.hasClass("ship-fwd")) {
				ship.addClass("ship-rwd ship-animated").removeClass("ship-fwd")
			}
		}
		posWas = offset
	} else if (offset < 2e3) {
		ship.removeClass("ship-rwd")
	}
	if (offset > shipBlastOff) {
		ship.removeClass(" shake");
		newoffset = calcOffset(offset, windowHeight);
		checkShipPos(newOffset, windowHeight, ship)
	} else if (offset < shipBlastOff) {
		if (offset > 100) {
			ship.addClass(" shake")
		}
		if (offset < 100) {
			ship.removeClass(" shake ");
			warp.text("00:00:00")
		}
		ship.css({
			position: "absolute",
			top: shipStart
		}).removeClass("ship-moving ship-fwd ship-animated").addClass("ship-static");
		km.text("0")
	}
	if (ship.hasClass("ship-moving")) {
		newOffset = calcOffset(offset, windowHeight);
		distance = offset - shipBlastOff + (newOffset - 55);
		travelled = checkDistance(distance);
		timeAtWarpSpeed = calcWarpSpeed(travelled);
		travelled = numberWithCommas(travelled);
		km.text(travelled);
		warp.text(timeAtWarpSpeed);
		debug.text("Travelled: " + travelled + " | Multiplier: " + multiplier + " | Distance: " + distance + " | Distance/height: " + distance / 94e3 + " | Ship: " + newOffset + " | Offset: " + offset);
		if (newOffset < windowHeight - 200) {
			ship.css({
				top: newOffset
			})
		}
	}
}
function onResize() {
	windowHeight = w.height();
	newoffset = calcOffset(offset, windowHeight);
	if (ship.hasClass("ship-moving")) {
		checkShipPos(newOffset, windowHeight, ship)
	}
}(function() {
	var e = [].indexOf ||
	function(e) {
		for (var t = 0, n = this.length; t < n; t++) {
			if (t in this && this[t] === e) return t
		}
		return -1
	}, t = [].slice;
	(function(e, t) {
		if (typeof define === "function" && define.amd) {
			return define("waypoints", ["jquery"], function(n) {
				return t(n, e)
			})
		} else {
			return t(e.jQuery, e)
		}
	})(this, function(n, r) {
		var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b;
		i = n(r);
		c = e.call(r, "ontouchstart") >= 0;
		u = {
			horizontal: {},
			vertical: {}
		};
		a = 1;
		l = {};
		f = "waypoints-context-id";
		d = "resize.waypoints";
		v = "scroll.waypoints";
		m = 1;
		g = "waypoints-waypoint-ids";
		y = "waypoint";
		b = "waypoints";
		s = function() {
			function e(e) {
				var t = this;
				this.$element = e;
				this.element = e[0];
				this.didResize = false;
				this.didScroll = false;
				this.id = "context" + a++;
				this.oldScroll = {
					x: e.scrollLeft(),
					y: e.scrollTop()
				};
				this.waypoints = {
					horizontal: {},
					vertical: {}
				};
				this.element[f] = this.id;
				l[this.id] = this;
				e.bind(v, function() {
					var e;
					if (!(t.didScroll || c)) {
						t.didScroll = true;
						e = function() {
							t.doScroll();
							return t.didScroll = false
						};
						return r.setTimeout(e, n[b].settings.scrollThrottle)
					}
				});
				e.bind(d, function() {
					var e;
					if (!t.didResize) {
						t.didResize = true;
						e = function() {
							n[b]("refresh");
							return t.didResize = false
						};
						return r.setTimeout(e, n[b].settings.resizeThrottle)
					}
				})
			}
			e.prototype.doScroll = function() {
				var e, t = this;
				e = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
				if (c && (!e.vertical.oldScroll || !e.vertical.newScroll)) {
					n[b]("refresh")
				}
				n.each(e, function(e, r) {
					var i, s, o;
					o = [];
					s = r.newScroll > r.oldScroll;
					i = s ? r.forward : r.backward;
					n.each(t.waypoints[e], function(e, t) {
						var n, i;
						if (r.oldScroll < (n = t.offset) && n <= r.newScroll) {
							return o.push(t)
						} else if (r.newScroll < (i = t.offset) && i <= r.oldScroll) {
							return o.push(t)
						}
					});
					o.sort(function(e, t) {
						return e.offset - t.offset
					});
					if (!s) {
						o.reverse()
					}
					return n.each(o, function(e, t) {
						if (t.options.continuous || e === o.length - 1) {
							return t.trigger([i])
						}
					})
				});
				return this.oldScroll = {
					x: e.horizontal.newScroll,
					y: e.vertical.newScroll
				}
			};
			e.prototype.refresh = function() {
				var e, t, r, i = this;
				r = n.isWindow(this.element);
				t = this.$element.offset();
				this.doScroll();
				e = {
					horizontal: {
						contextOffset: r ? 0 : t.left,
						contextScroll: r ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: r ? 0 : t.top,
						contextScroll: r ? 0 : this.oldScroll.y,
						contextDimension: r ? n[b]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				};
				return n.each(e, function(e, t) {
					return n.each(i.waypoints[e], function(e, r) {
						var i, s, o, u, a;
						i = r.options.offset;
						o = r.offset;
						s = n.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp];
						if (n.isFunction(i)) {
							i = i.apply(r.element)
						} else if (typeof i === "string") {
							i = parseFloat(i);
							if (r.options.offset.indexOf("%") > -1) {
								i = Math.ceil(t.contextDimension * i / 100)
							}
						}
						r.offset = s - t.contextOffset + t.contextScroll - i;
						if (r.options.onlyOnScroll && o != null || !r.enabled) {
							return
						}
						if (o !== null && o < (u = t.oldScroll) && u <= r.offset) {
							return r.trigger([t.backward])
						} else if (o !== null && o > (a = t.oldScroll) && a >= r.offset) {
							return r.trigger([t.forward])
						} else if (o === null && t.oldScroll >= r.offset) {
							return r.trigger([t.forward])
						}
					})
				})
			};
			e.prototype.checkEmpty = function() {
				if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
					this.$element.unbind([d, v].join(" "));
					return delete l[this.id]
				}
			};
			return e
		}();
		o = function() {
			function e(e, t, r) {
				var i, s;
				r = n.extend({}, n.fn[y].defaults, r);
				if (r.offset === "bottom-in-view") {
					r.offset = function() {
						var e;
						e = n[b]("viewportHeight");
						if (!n.isWindow(t.element)) {
							e = t.$element.height()
						}
						return e - n(this).outerHeight()
					}
				}
				this.$element = e;
				this.element = e[0];
				this.axis = r.horizontal ? "horizontal" : "vertical";
				this.callback = r.handler;
				this.context = t;
				this.enabled = r.enabled;
				this.id = "waypoints" + m++;
				this.offset = null;
				this.options = r;
				t.waypoints[this.axis][this.id] = this;
				u[this.axis][this.id] = this;
				i = (s = this.element[g]) != null ? s : [];
				i.push(this.id);
				this.element[g] = i
			}
			e.prototype.trigger = function(e) {
				if (!this.enabled) {
					return
				}
				if (this.callback != null) {
					this.callback.apply(this.element, e)
				}
				if (this.options.triggerOnce) {
					return this.destroy()
				}
			};
			e.prototype.disable = function() {
				return this.enabled = false
			};
			e.prototype.enable = function() {
				this.context.refresh();
				return this.enabled = true
			};
			e.prototype.destroy = function() {
				delete u[this.axis][this.id];
				delete this.context.waypoints[this.axis][this.id];
				return this.context.checkEmpty()
			};
			e.getWaypointsByElement = function(e) {
				var t, r;
				r = e[g];
				if (!r) {
					return []
				}
				t = n.extend({}, u.horizontal, u.vertical);
				return n.map(r, function(e) {
					return t[e]
				})
			};
			return e
		}();
		p = {
			init: function(e, t) {
				var r;
				if (t == null) {
					t = {}
				}
				if ((r = t.handler) == null) {
					t.handler = e
				}
				this.each(function() {
					var e, r, i, u;
					e = n(this);
					i = (u = t.context) != null ? u : n.fn[y].defaults.context;
					if (!n.isWindow(i)) {
						i = e.closest(i)
					}
					i = n(i);
					r = l[i[0][f]];
					if (!r) {
						r = new s(i)
					}
					return new o(e, r, t)
				});
				n[b]("refresh");
				return this
			},
			disable: function() {
				return p._invoke.call(this, "disable")
			},
			enable: function() {
				return p._invoke.call(this, "enable")
			},
			destroy: function() {
				return p._invoke.call(this, "destroy")
			},
			prev: function(e, t) {
				return p._traverse.call(this, e, t, function(e, t, n) {
					if (t > 0) {
						return e.push(n[t - 1])
					}
				})
			},
			next: function(e, t) {
				return p._traverse.call(this, e, t, function(e, t, n) {
					if (t < n.length - 1) {
						return e.push(n[t + 1])
					}
				})
			},
			_traverse: function(e, t, i) {
				var s, o;
				if (e == null) {
					e = "vertical"
				}
				if (t == null) {
					t = r
				}
				o = h.aggregate(t);
				s = [];
				this.each(function() {
					var t;
					t = n.inArray(this, o[e]);
					return i(s, t, o[e])
				});
				return this.pushStack(s)
			},
			_invoke: function(e) {
				this.each(function() {
					var t;
					t = o.getWaypointsByElement(this);
					return n.each(t, function(t, n) {
						n[e]();
						return true
					})
				});
				return this
			}
		};
		n.fn[y] = function() {
			var e, r;
			r = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [];
			if (p[r]) {
				return p[r].apply(this, e)
			} else if (n.isFunction(r)) {
				return p.init.apply(this, arguments)
			} else if (n.isPlainObject(r)) {
				return p.init.apply(this, [null, r])
			} else if (!r) {
				return n.error("jQuery Waypoints needs a callback function or handler option.")
			} else {
				return n.error("The " + r + " method does not exist in jQuery Waypoints.")
			}
		};
		n.fn[y].defaults = {
			context: r,
			continuous: true,
			enabled: true,
			horizontal: false,
			offset: 0,
			triggerOnce: false
		};
		h = {
			refresh: function() {
				return n.each(l, function(e, t) {
					return t.refresh()
				})
			},
			viewportHeight: function() {
				var e;
				return (e = r.innerHeight) != null ? e : i.height()
			},
			aggregate: function(e) {
				var t, r, i;
				t = u;
				if (e) {
					t = (i = l[n(e)[0][f]]) != null ? i.waypoints : void 0
				}
				if (!t) {
					return []
				}
				r = {
					horizontal: [],
					vertical: []
				};
				n.each(r, function(e, i) {
					n.each(t[e], function(e, t) {
						return i.push(t)
					});
					i.sort(function(e, t) {
						return e.offset - t.offset
					});
					r[e] = n.map(i, function(e) {
						return e.element
					});
					return r[e] = n.unique(r[e])
				});
				return r
			},
			above: function(e) {
				if (e == null) {
					e = r
				}
				return h._filter(e, "vertical", function(e, t) {
					return t.offset <= e.oldScroll.y
				})
			},
			below: function(e) {
				if (e == null) {
					e = r
				}
				return h._filter(e, "vertical", function(e, t) {
					return t.offset > e.oldScroll.y
				})
			},
			left: function(e) {
				if (e == null) {
					e = r
				}
				return h._filter(e, "horizontal", function(e, t) {
					return t.offset <= e.oldScroll.x
				})
			},
			right: function(e) {
				if (e == null) {
					e = r
				}
				return h._filter(e, "horizontal", function(e, t) {
					return t.offset > e.oldScroll.x
				})
			},
			enable: function() {
				return h._invoke("enable")
			},
			disable: function() {
				return h._invoke("disable")
			},
			destroy: function() {
				return h._invoke("destroy")
			},
			extendFn: function(e, t) {
				return p[e] = t
			},
			_invoke: function(e) {
				var t;
				t = n.extend({}, u.vertical, u.horizontal);
				return n.each(t, function(t, n) {
					n[e]();
					return true
				})
			},
			_filter: function(e, t, r) {
				var i, s;
				i = l[n(e)[0][f]];
				if (!i) {
					return []
				}
				s = [];
				n.each(i.waypoints[t], function(e, t) {
					if (r(i, t)) {
						return s.push(t)
					}
				});
				s.sort(function(e, t) {
					return e.offset - t.offset
				});
				return n.map(s, function(e) {
					return e.element
				})
			}
		};
		n[b] = function() {
			var e, n;
			n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [];
			if (h[n]) {
				return h[n].apply(null, e)
			} else {
				return h.aggregate.call(null, n)
			}
		};
		n[b].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		};
		return i.load(function() {
			return n[b]("refresh")
		})
	})
}).call(this);
(function(e, t) {
	var n = e.jQuery || e.Cowboy || (e.Cowboy = {}),
		r;
	n.throttle = r = function(e, r, i, s) {
		function a() {
			function p() {
				u = +(new Date);
				i.apply(n, l)
			}
			function v() {
				o = t
			}
			var n = this,
				a = +(new Date) - u,
				l = arguments;
			if (s && !o) {
				p()
			}
			o && clearTimeout(o);
			if (s === t && a > e) {
				p()
			} else {
				if (r !== true) {
					o = setTimeout(s ? v : p, s === t ? e - a : e)
				}
			}
		}
		var o, u = 0;
		if (typeof r !== "boolean") {
			s = i;
			i = r;
			r = t
		}
		if (n.guid) {
			a.guid = i.guid = i.guid || n.guid++
		}
		return a
	};
	n.debounce = function(e, n, i) {
		return i === t ? r(e, n, false) : r(e, i, n !== false)
	}
})(this);
jQuery.fx.interval = 250;
var isOpera = !! window.opera || navigator.userAgent.indexOf("OPR/index.html") >= 0;
var isFirefox = typeof InstallTrigger !== "undefined";
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
var isChrome = !! window.chrome && !isOpera;
var isIE = false || !! document.documentMode;
var w = $(window);
var d = $(document);
var b = $("body");
var c = $("#space-race");
var windowHeight = w.height();
var offset = w.scrollTop();
var ship = $("#ship");
var flame = $("#flame-container");
var earth = $("#earth-container");
var km = $("#kmnumber");
var debug = $("#debug");
var warp = $("#warptime");
var px = $("#pxnumber");
var hud = $(".hud");
var radiation = $("#radiation");
var newOffset = 0;
var shipStart = 371;
var shipBlastOff = shipStart + 13;
var distance = 0;
var multiplier = 1;
var base = 0;
var since = 0;
var travelled = 0;
var tweenOffset = windowHeight / 2 - 100;
tweenOffset = Math.abs(tweenOffset) * -1;
var absTweenOffset = windowHeight / 2;
var tweenDuration = windowHeight + 100;
var cookieOffset = 0;
var posWas = 0;
w.resize($.throttle(250, onResize));
w.on("beforeunload", function() {
	b.hide();
	createCookie("spaceRaceOffset", offset, new Date((new Date).getTime() + 1e4));
	w.scrollTop(0)
});
d.ready(function() {
	b.css("visibility", "visible");
	checkFlame();
	Pace.on("done", function() {
		cookieOffset = getCookie("spaceRaceOffset");
		deleteCookie("spaceRaceOffset");
		if (cookieOffset > 0) {
			$("html, body").animate({
				scrollTop: +cookieOffset
			}, 2e3)
		}
	});
	var e = $.superscrollorama();
	e.addTween(400, TweenMax.to($(".hud"), .5, {
		css: {
			opacity: 1,
			bottom: 20
		},
		ease: Bounce.easeOut
	}), 0, +tweenOffset);
	e.addTween(400, TweenMax.to($(".hud-info"), .5, {
		css: {
			opacity: 1,
			bottom: 60
		},
		ease: Bounce.easeOut
	}), 0, +tweenOffset);
	e.addTween(3e3, TweenMax.to($(".hud-info"), .5, {
		css: {
			opacity: 0,
			bottom: 0
		},
		ease: Bounce.easeOut
	}), 0, +tweenOffset);
	e.addTween(1143 - absTweenOffset, (new TimelineLite).append([TweenMax.to($("#clouds-back"), 1.5, {
		css: {
			marginTop: "-=140",
			opacity: 1,
			scale: 1.5
		}
	}), TweenMax.to($("#clouds-mid"), 1, {
		css: {
			marginTop: "-=170",
			opacity: 1
		}
	}), TweenMax.to($("#clouds-fore"), 1, {
		css: {
			marginTop: "-=200",
			opacity: 1
		}
	})]), 0, +tweenOffset);
	e.addTween(1573 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#commercial-plane .icon"), 1, {
		css: {
			marginLeft: "-200px"
		},
		immediateRender: true
	}, {
		css: {
			marginLeft: "80%",
			scale: .7
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(2745 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#bell-x1 .icon"), 1, {
		css: {
			marginLeft: "-200px",
			scale: .6
		},
		immediateRender: true
	}, {
		css: {
			marginLeft: "80%",
			scale: 1
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(2945 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#legonaut .icon"), 1, {
		css: {
			marginLeft: "-200px",
			rotation: 360
		},
		immediateRender: true
	}, {
		css: {
			marginLeft: "80%",
			rotation: 0
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(3245 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#weather-balloon .icon"), 1, {
		css: {
			opacity: 0,
			marginTop: 140,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1,
			rotation: 25,
			marginTop: "-=170"
		}
	})]), +tweenDuration / 1.5, +tweenOffset);
	e.addTween(4445 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#highest-skydive .icon"), 1, {
		css: {
			opacity: 0,
			marginTop: -1e3,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1,
			rotation: 15,
			marginTop: "+=980"
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(4645 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#highest-organism .icon"), 1, {
		css: {
			opacity: 0,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1.2,
			rotation: 90,
			marginTop: "-=15"
		}
	})]), +tweenDuration / 3, +tweenOffset);
	e.addTween(5845 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#highest-balloon .icon"), 1, {
		css: {
			opacity: 0,
			marginTop: 140,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1,
			rotation: 30,
			marginTop: "-=170"
		}
	})]), +tweenDuration / 1.5, +tweenOffset);
	e.addTween(7045 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#meteor-burnout .meteor-1"), 1, {
		css: {
			opacity: 1,
			marginTop: -700,
			marginLeft: 1150,
			scale: 1,
			rotation: -30
		},
		immediateRender: true
	}, {
		css: {
			opacity: 0,
			scale: 1.1,
			marginTop: "+=940",
			marginLeft: "-1250"
		}
	}), TweenMax.fromTo($("#meteor-burnout .meteor-2"), 1, {
		css: {
			opacity: 1,
			marginTop: -700,
			marginLeft: 1150,
			scale: 1,
			rotation: -30
		},
		immediateRender: true
	}, {
		css: {
			opacity: 0,
			scale: 1.1,
			marginTop: "+=1000",
			marginLeft: "-950"
		}
	}), TweenMax.fromTo($("#meteor-burnout .meteor-3"), 1, {
		css: {
			opacity: 1,
			marginTop: -700,
			marginLeft: 1150,
			scale: 1,
			rotation: -30
		},
		immediateRender: true
	}, {
		css: {
			opacity: 0,
			scale: 1.1,
			marginTop: "+=1060",
			marginLeft: "-850"
		}
	})]), +tweenDuration / .9, +tweenOffset);
	e.addTween(8545 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#aurora-borealis .borealis-back"), 1, {
		css: {
			opacity: .8,
			marginTop: 100,
			scale: 1
		},
		immediateRender: true
	}, {
		css: {
			opacity: .7,
			scale: 1.5,
			marginTop: "-=150"
		}
	}), TweenMax.fromTo($("#aurora-borealis .borealis-mid"), 1, {
		css: {
			opacity: .8,
			marginTop: 120,
			scale: 1
		},
		immediateRender: true
	}, {
		css: {
			opacity: .7,
			scale: .9,
			marginTop: "-=200"
		}
	}), TweenMax.fromTo($("#aurora-borealis .borealis-fore"), 1, {
		css: {
			opacity: .9,
			marginTop: 150,
			scale: 1
		},
		immediateRender: true
	}, {
		css: {
			opacity: .7,
			scale: 1.1,
			marginTop: "-=250"
		}
	})]), +tweenDuration / 1.2, +tweenOffset);
	e.addTween(10545 - absTweenOffset, TweenMax.to($("#karman-line .divider"), .5, {
		css: {
			opacity: 1,
			scale: 1
		}
	}), 0, +tweenOffset);
	e.addTween(10745 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#fargam .icon"), 1, {
		css: {
			opacity: 0,
			marginTop: -1e3,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1.1,
			rotation: 360,
			marginTop: "+=980"
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(11445 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#meteor-shower .meteor-1"), 1, {
		css: {
			opacity: 0,
			marginTop: -400,
			marginLeft: 1650,
			scale: 1
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1.1,
			marginTop: "+=940",
			marginLeft: "-1250"
		}
	})]), +tweenDuration / .4, +tweenOffset);
	e.addTween(11445 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#meteor-shower .meteor-2"), 1, {
		css: {
			opacity: 0,
			marginTop: -400,
			marginLeft: 1650,
			scale: 1
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1.1,
			marginTop: "+=1000",
			marginLeft: "-950"
		}
	})]), +tweenDuration / .4, +tweenOffset);
	e.addTween(12845 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#first-spaceman .icon"), 1, {
		css: {
			marginLeft: "-1000",
			rotation: 360,
			opacity: 0
		},
		immediateRender: true
	}, {
		css: {
			marginLeft: "-200",
			rotation: 30,
			opacity: 1,
			scale: 1.2
		}
	})]), +tweenDuration / 1.5, +tweenOffset);
	e.addTween(13745 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#iss .icon"), 1, {
		css: {
			marginLeft: "-500",
			rotation: 360,
			opacity: 1
		},
		immediateRender: true
	}, {
		css: {
			marginLeft: "100%",
			rotation: 0,
			opacity: .5,
			scale: .4
		}
	})]), +tweenDuration * 1.5, +tweenOffset);
	e.addTween(13745 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#sandra2  .icon"), 1, {
		css: {
			left: "100%",
			rotation: 720,
			opacity: 1,
			scale: .8
		},
		immediateRender: true
	}, {
		css: {
			left: "-10%",
			rotation: 0,
			opacity: .5,
			scale: 1
		}
	})]), +tweenDuration * 1.8, +tweenOffset);
	e.addTween(14545 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#gravity-86 .icon"), 1, {
		css: {
			marginTop: "-400",
			opacity: 0,
			rotation: 10
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "+=360",
			rotation: 0,
			opacity: 1,
			scale: 1.1
		},
		ease: Bounce.easeOut
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(14945 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#highest-nuke .icon.explosion"), 1, {
		css: {
			opacity: 0,
			rotation: 0,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-65",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(14945 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#highest-nuke .icon.explosion-bottom"), 1, {
		css: {
			opacity: 1,
			rotation: 0,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-=10",
			rotation: 0,
			opacity: 1,
			scale: 1
		},
		ease: Bounce.easeOut
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(65245 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#juno-probe .icon"), 1, {
		css: {
			opacity: 1,
			rotation: 720,
			scale: 1,
			marginLeft: "100%"
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "+=20",
			marginLeft: "-10%",
			rotation: 0,
			opacity: 1,
			scale: 1.3
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(15230 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#hubble-telescope  .icon"), 1, {
		css: {
			marginLeft: "-500",
			rotation: 360,
			opacity: 1
		},
		immediateRender: true
	}, {
		css: {
			marginLeft: "100%",
			rotation: 0,
			opacity: .5,
			scale: .6
		}
	})]), +tweenDuration * 1.5, +tweenOffset);
	e.addTween(15230 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#sandra1  .icon"), 1, {
		css: {
			marginLeft: "-500",
			rotation: 720,
			opacity: 1,
			scale: .8
		},
		immediateRender: true
	}, {
		css: {
			marginLeft: "100%",
			rotation: 0,
			opacity: .5,
			scale: 1
		}
	})]), +tweenDuration * 1.8, +tweenOffset);
	e.addTween(18545 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#space-junk .icon.dust"), 1, {
		css: {
			opacity: 0,
			rotation: 0,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-15",
			rotation: 30,
			opacity: 1,
			scale: 1.2
		}
	}), TweenMax.fromTo($("#space-junk .icon.junk"), 1, {
		css: {
			opacity: 0,
			rotation: 0,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-25",
			marginLeft: "-=15",
			rotation: -60,
			opacity: 1,
			scale: 1.2
		}
	}), TweenMax.fromTo($("#space-junk .icon.debris1"), 1, {
		css: {
			opacity: 0,
			rotation: 720,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-25",
			marginLeft: "-260",
			rotation: 0,
			opacity: 1,
			scale: 1.2
		}
	}), TweenMax.fromTo($("#space-junk .icon.debris2"), 1, {
		css: {
			opacity: 0,
			rotation: 360,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "75",
			marginLeft: "-240",
			rotation: -30,
			opacity: 1,
			scale: 1.2
		}
	}), TweenMax.fromTo($("#space-junk .icon.debris3"), 1, {
		css: {
			opacity: 0,
			rotation: 720,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "75",
			marginLeft: "-300",
			rotation: -90,
			opacity: 1,
			scale: 1.2
		}
	}), TweenMax.fromTo($("#space-junk .icon.debris4"), 1, {
		css: {
			opacity: 0,
			rotation: 720,
			scale: 1
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-20",
			marginLeft: "-180",
			rotation: 0,
			opacity: 1,
			scale: .5
		}
	}), TweenMax.fromTo($("#space-junk .icon.debris5"), 1, {
		css: {
			opacity: 0,
			rotation: 450,
			scale: 1.2
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "115",
			marginLeft: "-240",
			rotation: -30,
			opacity: 1,
			scale: .7
		}
	}), TweenMax.fromTo($("#space-junk .icon.debris6"), 1, {
		css: {
			marginLeft: "-500",
			marginTop: "500",
			opacity: 0,
			rotation: 450,
			scale: 1.2
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "105",
			marginLeft: "-180",
			rotation: -30,
			opacity: 1,
			scale: .7
		}
	}), TweenMax.fromTo($("#space-junk .icon.debris7"), 1, {
		css: {
			marginLeft: "500",
			marginTop: "500",
			opacity: 0,
			rotation: 450,
			scale: 1.2
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-35",
			marginLeft: "-200",
			rotation: -30,
			opacity: 1,
			scale: .7
		}
	}), TweenMax.fromTo($("#space-junk .icon.debris8"), 1, {
		css: {
			marginLeft: "-300",
			marginTop: "-300",
			opacity: 0,
			rotation: 450,
			scale: 1.2
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "15",
			marginLeft: "-200",
			rotation: -30,
			opacity: 1,
			scale: .4
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(20205 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#spacedog .icon"), 1, {
		css: {
			opacity: 0,
			marginTop: -1e3,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1.2,
			rotation: 360,
			marginTop: "+=980"
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(21145 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#gravity-50 .icon"), 1, {
		css: {
			marginTop: "-400",
			opacity: 0,
			rotation: 10
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "+=360",
			rotation: 0,
			opacity: 1,
			scale: 1.1
		},
		ease: Bounce.easeOut
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(24945 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#gravity-25 .icon"), 1, {
		css: {
			marginTop: "-400",
			opacity: 0,
			rotation: 10
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "+=360",
			rotation: 0,
			opacity: 1,
			scale: 1.1
		},
		ease: Bounce.easeOut
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(28675 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#near-miss1 .icon"), 1, {
		css: {
			right: "-10%",
			opacity: 1,
			rotation: 720,
			scale: .4
		},
		immediateRender: true
	}, {
		css: {
			left: "-10%",
			rotation: 0,
			opacity: 1,
			scale: .5
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(29565 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#gps-satellites .icon.satellite1"), 1, {
		css: {
			opacity: 0,
			scale: .7
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1.2,
			rotation: 360,
			marginLeft: "-330px"
		}
	}), TweenMax.fromTo($("#gps-satellites .icon.satellite2"), 1, {
		css: {
			opacity: 0,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: .7,
			rotation: 330,
			marginLeft: "-200px"
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(30315 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#asteroid-da14 .icon"), 1, {
		css: {
			right: "-10%",
			opacity: 1,
			rotation: 720,
			scale: .9
		},
		immediateRender: true
	}, {
		css: {
			left: "-10%",
			rotation: 0,
			opacity: 1,
			scale: 1.1
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(31123 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#comms-satellites .icon.satellite1"), 1, {
		css: {
			opacity: 0,
			scale: .7
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: 1.2,
			rotation: 360,
			marginLeft: "-300px",
			marginTop: "10"
		}
	}), TweenMax.fromTo($("#comms-satellites .icon.satellite2"), 1, {
		css: {
			opacity: 0,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: .7,
			rotation: 330,
			marginLeft: "-170px"
		}
	}), TweenMax.fromTo($("#comms-satellites .icon.satellite3"), 1, {
		css: {
			opacity: 0,
			scale: .5,
			marginTop: "-1000"
		},
		immediateRender: true
	}, {
		css: {
			opacity: 1,
			scale: .7,
			rotation: 330,
			marginTop: "+=980px",
			marginLeft: "-240px"
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(39735 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#asteroid-yu55 .icon"), 1, {
		css: {
			left: "-10%",
			opacity: 1,
			rotation: 720,
			scale: .9
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-=50",
			left: "100%",
			rotation: 0,
			opacity: 1,
			scale: 1.1
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(40395 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#moon .icon"), 1, {
		css: {
			marginTop: "500px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-70px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(40556 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#farthest-humans .icon"), 1, {
		css: {
			marginTop: "-200px",
			marginLeft: "-500px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-270px",
			marginLeft: "-160px",
			rotation: -300,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(47813 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#lexell-comet .icon"), 1, {
		css: {
			left: "100%",
			opacity: 0,
			rotation: 15,
			scale: .3
		},
		immediateRender: true
	}, {
		css: {
			left: "-10%",
			rotation: 20,
			opacity: .8,
			scale: 1,
			marginTop: "+=50"
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(51438 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#pons-winnecke-comet .icon"), 1, {
		css: {
			left: "100%",
			opacity: 0,
			rotation: 15,
			scale: .3
		},
		immediateRender: true
	}, {
		css: {
			left: "-10%",
			rotation: 20,
			opacity: .8,
			scale: 1,
			marginTop: "-=50"
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(52445 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#asteroid-toutatis .icon"), 1, {
		css: {
			right: "-10%",
			opacity: 1,
			rotation: 720,
			scale: .9
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-=50",
			left: "-10%",
			rotation: 0,
			opacity: 1,
			scale: 1.1
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(53545 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#brahe-sun-estimate .icon"), 1, {
		css: {
			marginTop: "500px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-20px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(54530 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#honda-mrkos-comet .icon"), 1, {
		css: {
			left: "-10%",
			opacity: 0,
			rotation: 180,
			scale: .3
		},
		immediateRender: true
	}, {
		css: {
			left: "100%",
			rotation: 180,
			opacity: .8,
			scale: 1,
			marginTop: "-=200"
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(56945 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#kepler-sun-estimate .icon"), 1, {
		css: {
			marginTop: "500px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-20px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(58365 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#venus .icon"), 1, {
		css: {
			marginTop: "500px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-70px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(60123 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#mars .icon"), 1, {
		css: {
			marginTop: "300px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-60px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(60837 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#halleys-comet .icon"), 1, {
		css: {
			left: "-10%",
			opacity: 0,
			rotation: 180,
			scale: .3
		},
		immediateRender: true
	}, {
		css: {
			left: "100%",
			rotation: 180,
			opacity: .8,
			scale: 1,
			marginTop: "-=200"
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(62275 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#mercury .icon"), 1, {
		css: {
			marginTop: "200px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-50px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(64945 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#cassini-sun-estimate .icon"), 1, {
		css: {
			marginTop: "500px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-30px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 3, +tweenOffset);
	e.addTween(65035 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#sun .icon"), 1, {
		css: {
			marginTop: "200px",
			opacity: 1,
			rotation: 30,
			scale: .8
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-250px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	if (isChrome == true) {
		e.addTween(66536 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#main-asteroid-belt-start .belt-fore"), 1, {
			css: {
				left: "-100%"
			},
			immediateRender: true
		}, {
			css: {
				left: "0%"
			}
		})]), 4e3, +tweenOffset);
		e.addTween(66536 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#main-asteroid-belt-start .belt-back"), 1, {
			css: {
				left: "-100%"
			},
			immediateRender: true
		}, {
			css: {
				left: "-70%"
			}
		})]), 4e3, +tweenOffset)
	}
	e.addTween(67835 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#asteroid-ceres .icon"), 1, {
		css: {
			left: "-10%",
			opacity: 1,
			rotation: 720,
			scale: .9
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-=50",
			left: "100%",
			rotation: 0,
			opacity: 1,
			scale: 1.1
		}
	})]), +tweenDuration, +tweenOffset);
	e.addTween(69430 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#jupiter .icon"), 1, {
		css: {
			marginTop: "200px",
			opacity: 0,
			rotation: 90,
			scale: .8
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-100px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(73740 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#saturn .icon"), 1, {
		css: {
			marginTop: "200px",
			opacity: 0,
			rotation: 270,
			scale: .8
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-100px",
			rotation: 300,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(74045 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#cassini-probe .icon"), 1, {
		css: {
			marginTop: "-200px",
			marginLeft: "-500px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-260px",
			marginLeft: "-240px",
			rotation: -300,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(75127 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#uranus .icon"), 1, {
		css: {
			marginTop: "200px",
			opacity: 0,
			rotation: 90,
			scale: .8
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-50px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(76925 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#new-horizons .icon"), 1, {
		css: {
			marginTop: "-200px",
			marginLeft: "-500px",
			opacity: 0,
			rotation: 90,
			scale: .5
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-260px",
			marginLeft: "-140px",
			rotation: -300,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(76827 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#pluto .icon"), 1, {
		css: {
			marginTop: "200px",
			opacity: 0,
			rotation: 90,
			scale: .8
		},
		immediateRender: true
	}, {
		css: {
			marginTop: 0,
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	e.addTween(76847 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#neptune .icon"), 1, {
		css: {
			marginTop: "200px",
			opacity: 0,
			rotation: 90,
			scale: .8
		},
		immediateRender: true
	}, {
		css: {
			marginTop: "-50px",
			rotation: 0,
			opacity: 1,
			scale: 1
		}
	})]), +tweenDuration / 2, +tweenOffset);
	if (isChrome == true) {
		e.addTween(77038 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#kuiper-belt-start .belt-fore"), 1, {
			css: {
				left: "-100%"
			},
			immediateRender: true
		}, {
			css: {
				left: "0%"
			}
		})]), 4e3, +tweenOffset);
		e.addTween(77038 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#kuiper-belt-start .belt-back"), 1, {
			css: {
				left: "-100%"
			},
			immediateRender: true
		}, {
			css: {
				left: "-70%"
			}
		})]), 4e3, +tweenOffset)
	}
	e.addTween(88182 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#voyager-2-probe .icon"), 1, {
		css: {
			marginLeft: "-500",
			rotation: 360,
			opacity: 1
		},
		immediateRender: true
	}, {
		css: {
			marginLeft: "100%",
			rotation: 0,
			opacity: .5,
			scale: .4
		}
	})]), +tweenDuration * 1.5, +tweenOffset);
	e.addTween(91582 - absTweenOffset, (new TimelineLite).append([TweenMax.fromTo($("#voyager-1-probe .icon"), 1, {
		css: {
			left: "-10%",
			rotation: 180,
			opacity: 1
		},
		immediateRender: true
	}, {
		css: {
			left: "100%",
			rotation: -180,
			opacity: .5,
			scale: .4
		}
	})]), +tweenDuration * 2, +tweenOffset * 2);
	$("#beginning-inner-va-belt .marker").waypoint(function(e) {
		if (e == "down") {
			radiation.fadeIn(500)
		}
		if (e == "up") {
			radiation.fadeOut(50)
		}
	}, {
		offset: absTweenOffset
	});
	$("#end-inner-va-belt .marker").waypoint(function(e) {
		if (e == "up") {
			radiation.fadeIn(500)
		}
		if (e == "down") {
			radiation.fadeOut(50)
		}
	}, {
		offset: absTweenOffset
	});
	$("#beginning-outer-va-belt .marker").waypoint(function(e) {
		if (e == "down") {
			radiation.fadeIn(500)
		}
		if (e == "up") {
			radiation.fadeOut(50)
		}
	}, {
		offset: absTweenOffset
	});
	$("#end-outer-va-belt .marker").waypoint(function(e) {
		if (e == "up") {
			radiation.fadeIn(500)
		}
		if (e == "down") {
			radiation.fadeOut(50)
		}
	}, {
		offset: absTweenOffset
	})
});
w.scroll($.throttle(75, onScroll))