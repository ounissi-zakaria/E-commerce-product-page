import { j as m, r as i, a as x, R as w, b as k } from "./vendor.ef3a7c98.js"; const P = function () { const r = document.createElement("link").relList; if (r && r.supports && r.supports("modulepreload")) return; for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c); new MutationObserver(c => { for (const l of c) if (l.type === "childList") for (const s of l.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s) }).observe(document, { childList: !0, subtree: !0 }); function a(c) { const l = {}; return c.integrity && (l.integrity = c.integrity), c.referrerpolicy && (l.referrerPolicy = c.referrerpolicy), c.crossorigin === "use-credentials" ? l.credentials = "include" : c.crossorigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l } function o(c) { if (c.ep) return; c.ep = !0; const l = a(c); fetch(c.href, l) } }; P(); var I = "./assets/image-avatar.88751761.png", S = "./assets/logo.5efe6b0e.svg", j = "./assets/icon-close.22a11be2.svg", L = "./assets/icon-menu.cd0a0bcb.svg"; const t = m.exports.jsx, n = m.exports.jsxs, b = m.exports.Fragment; function M() { const [e, r] = i.exports.useState(!1), a = x.exports.useMediaQuery({ query: "(min-width: 1028px)" }); return i.exports.useEffect(() => { document.body.style.overflowY = e && !a ? "hidden" : "auto" }), n("div", { children: [t("button", { className: "lg:hidden", onClick: () => r(!0), children: t("img", { src: L, alt: "Open navigation menu" }) }), t($, { onExit: () => r(!1), menuVisibility: e && !a })] }) } function $(e) {
    return n(b, {
        children: [n("nav", {
            className: `overflow-y-auto py-24 px-6 w-64 h-full gap-6 flex flex-col bg-white transition-all fixed z-20 top-0 ${e.menuVisibility ? "left-0" : "-left-full invisible"}
                lg:static lg:visible lg:flex-row lg:w-auto lg:p-0 lg:transition-none lg:text-secondary-400 lg:items-center lg:overflow-y-hidden`, children: [t("button", { className: "lg:hidden absolute top-6 left-6", onClick: e.onExit, children: t("img", { src: j, alt: "Close navigation menu" }) }), t(d, { href: "/Collection", children: "Collection" }), t(d, { href: "/Men", children: "Men" }), t(d, { href: "/Women", children: "Women" }), t(d, { href: "/About", children: "About" }), t(d, { href: "/Contact", children: "Contact" })]
        }), e.menuVisibility && t("div", { tabIndex: 0, className: "fixed inset-0 z-10 bg-black/75", onFocus: e.onExit })]
    })
} function d(e) { return t("a", { className: "font-bold text-xl text-secondary-90", href: e.href, children: e.children }) } var v = "./assets/icon-cart.987a9f06.svg", A = "./assets/icon-delete.11e8f9c5.svg"; function E(e) { const r = e.cartProducts.reduce((a, o) => a + o.count, 0); return n("button", { className: "relative", onClick: () => e.setShowCart(!e.showCart), children: [!!r && t("span", { className: "absolute text-xs leading-3 text-white bg-primary-500 rounded-full -top-1 -right-1 px-1.5", children: r }), t("img", { src: v, alt: "Shopping Cart" })] }) } function F(e) { return n("div", { className: "fixed bg-white w-[22.5rem] left-2 top-20 rounded-lg z-10 shadow-lg\r lg:absolute lg:-right-6 lg:top-16 lg:left-auto", children: [t("h2", { className: "font-bold text-secondary-900 p-6", children: "Cart" }), n("div", { className: "space-y-6 pr-4 pl-6 py-6 overflow-y-auto flex flex-col border-t-2 font-bold text-secondary-500 border-secondary-100 h-52", children: [!e.cartProducts.length && t("span", { className: "m-auto", children: "Your cart is empty" }), e.cartProducts.map((r, a) => t(R, { onDelete: () => e.setCartProducts(e.cartProducts.filter((o, c) => c != a)), name: r.name, count: r.count, price: r.price }, a)), !!e.cartProducts.length && t("button", { onClick: e.onClick, className: "w-full bg-primary-500 rounded-xl text-white font-bold p-4", children: "Checkout" })] })] }) } function R(e) { return n("div", { className: "flex gap-2 text-secondary-400", children: [t("img", { className: "rounded-lg object-cover w-14", src: "./image-product-1-thumbnail.jpg", alt: "product thumbnail" }), n("div", { className: "flex flex-col w-2/3", children: [t("span", { className: "truncate tracking-widest", children: e.name }), n("div", { className: "space-x-2", children: [n("span", { children: ["$", e.price.toFixed(2), " x ", e.count] }), n("span", { className: "font-bold text-secondary-800", children: ["$", (e.price * e.count).toFixed(2)] })] })] }), t(O, { onClick: e.onDelete })] }) } function O(e) { return t("button", { onClick: e.onClick, children: t("img", { src: A, alt: "Remove this item from cart." }) }) } function B() { return t("a", { href: "/", children: t("img", { src: S, alt: "Site Logo - Homepage" }) }) } function V() { return t("button", { className: "border-2 border-transparent rounded-full w-7 h-7 hover:border-primary-600", children: t("img", { className: "object-cover", src: I, alt: "User avatar" }) }) } function z(e) { const [r, a] = i.exports.useState(!1); return n("header", { className: "bg-white flex justify-between h-6 p-6 box-content\r max-w-screen-lg lg:m-auto lg:border-b lg:border-secondary-400 lg:px-2 lg:relative", children: [n("div", { className: "flex  gap-4\r lg:flex-row-reverse lg:space-x-reverse lg:gap-14", children: [t(M, {}), t(B, {})] }), n("div", { className: "flex float-right space-x-4", children: [t(E, { showCart: r, setShowCart: a, cartProducts: e.cartProducts }), t(V, {})] }), r && t(F, { cartProducts: e.cartProducts, setCartProducts: e.setCartProducts })] }) } var p = "./assets/icon-next.de5dbcf9.svg", y = "./assets/icon-previous.7543ce3f.svg"; function D(e) { const r = 4, [a, o] = i.exports.useState(0); return n("div", { className: "relative h-80 lg:h-full", children: [t(u, { extraClass: "lg:hidden", onClick: () => o(a - 1), src: y, placement: "top-1/2 left-3", alt: "previous image" }), t("img", { className: "h-full w-full object-cover object-center\r lg:rounded-lg cursor-pointer", src: `./image-product-${Math.abs(a % r) + 1}.jpg`, alt: "product Images", onClick: () => e.setLightBox(Math.abs(a % r)) }), t(u, { extraClass: "lg:hidden", onClick: () => o(a + 1), src: p, placement: "top-1/2 right-3", alt: "next image" }), t("div", { className: "hidden\r lg:mt-9 lg:flex lg:gap-6", children: Array(r).fill().map((c, l) => t(C, { id: l, src: `./image-product-${l + 1}-thumbnail.jpg`, isSelected: l == a, setImgId: o }, l)) })] }) } function u(e) {
    return t("button", {
        className: `absolute -translate-y-1/2 ${e.placement}
                            ${e.extraClass}`, onClick: e.onClick, children: t("img", { className: "rounded-full px-5 py-4 bg-white", src: e.src, alt: e.alt })
    })
} function C(e) {
    return t("div", {
        className: `rounded-lg cursor-pointer overflow-hidden relative border border-transparent after:absolute after:inset-0
                        hover:after:bg-white/50 hover:after:block
                        ${e.isSelected && "border-primary-500 after:bg-white/75 after:block"}`, tabIndex: 0, onClick: () => e.setImgId(e.id), children: t("img", { src: e.src, alt: `select product image number ${e.id}` })
    })
} function Q(e) { return t("div", { className: "fixed flex inset-0 z-20 bg-black bg-opacity-30 w-screen h-screen overflow-y-auto py-20", children: e.children }) } function T(e) { const r = 4, [a, o] = i.exports.useState(e.id); return t(Q, { children: n("div", { className: "relative w-2/5 h-[45.5rem] m-auto", children: [t("button", { className: "float-right text-white hover:text-primary-500", onClick: e.onExit, children: t("svg", { className: "fill-current", width: "14", height: "15", xmlns: "http://www.w3.org/2000/svg", children: t("path", { d: "m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z", fillRule: "evenodd" }) }) }), t(u, { onClick: () => o(a - 1), src: y, placement: "top-[16rem] -left-5", alt: "previous image" }), t("img", { className: "object-cover object-center rounded-lg", src: `./image-product-${Math.abs(a % r) + 1}.jpg`, alt: "product Images", onClick: () => 1 }), t(u, { onClick: () => o(a + 1), src: p, placement: "top-[16rem] -right-5", alt: "next image" }), t("div", { className: "mt-9 flex gap-6", children: Array(r).fill().map((c, l) => t(C, { id: l, src: `./image-product-${l + 1}-thumbnail.jpg`, isSelected: l == Math.abs(a % r), setImgId: o }, l)) })] }) }) } var Y = "./assets/icon-minus.7f289c13.svg", q = "./assets/icon-plus.fd8d372c.svg"; function H(e) { return t("p", { className: "text-sm font-bold text-primary-500", children: e.children }) } function K(e) { return t("h1", { className: "text-3xl font-bold text-secondary-900", children: e.children }) } function W(e) { return t("p", { className: "text-secondary-500", children: e.children }) } function _(e) { return n("div", { className: "flex justify-between lg:flex-col", children: [n("div", { className: "flex justify-between gap-6 lg:justify-start", children: [n("span", { className: "text-3xl font-bold text-secondary-900", children: ["$", e.realPrice.toFixed(2)] }), n("span", { className: "bg-primary-100 text-primary-500 rounded font-bold py-1 px-2", children: [e.discount, "%"] })] }), n("span", { className: "text-secondary-500 line-through", children: ["$", e.originalPrice.toFixed(2)] })] }) } function U(e) { return n("button", { onClick: e.onClick, className: "w-full bg-primary-500 rounded-xl text-white font-bold p-4 shadow-2xl", children: [t("img", { src: v, className: "inline-block filter brightness-0 invert  mx-4", alt: "Shopping cart" }), "Add to cart"] }) } function Z(e) { return n("div", { className: "flex overflow-hidden bg-gray-100 rounded-xl p-4 relative text-secondary-900", children: [t(N, { setCount: () => e.setCount(e.count && e.count - 1), src: Y, alt: "Substract 1 from total", position: "top-1/2 left-4" }), t("input", { className: "m-auto bg-gray-100 text-center font-bold text-secondary-900 lg:w-1/2", type: "number", min: "0", value: e.count, onChange: r => e.setCount(parseInt(r.target.value)) }), t(N, { setCount: () => e.setCount(e.count + 1), src: q, alt: "Add 1 to total", position: "top-1/2 right-4" })] }) } function N(e) { return t("button", { className: `absolute -translate-y-1/2 ${e.position}`, onClick: e.setCount, children: t("img", { src: e.src, alt: e.alt }) }) } function G(e) { const [r, a] = i.exports.useState(0), [o, c] = i.exports.useState(-1), l = x.exports.useMediaQuery({ query: "(min-width: 1028px)" }); i.exports.useEffect(() => { document.body.style.overflowY = o >= 0 && l ? "hidden" : "auto" }); const s = "Fall Limited Edition Sneakers", g = 250, h = 50, f = g * h / 100; return n("main", { className: "pb-4 m-auto \r max-w-screen-lg lg:flex lg:gap-28 lg:px-12 lg:py-16", children: [t(D, { setLightBox: c }), o >= 0 && l && t(T, { id: o, onExit: () => c(-1) }), n("div", { className: "p-6 space-y-4 lg:space-y-9", children: [n("div", { className: "space-y-4", children: [t(H, { children: "SNEAKER COMPANY" }), t(K, { children: s })] }), t(W, { children: "These low-profile sneakers are your perfect casual wear companion. Featuring a durrable rubber outer sole, they'll withstand everything the weather can offer." }), t(_, { realPrice: f, originalPrice: g, discount: h }), n("div", { className: "space-y-4 lg:space-y-0 lg:flex  lg:gap-4", children: [t(Z, { count: r, setCount: a }), t(U, { onClick: () => { r > 0 && e.setCartProducts([...e.cartProducts, { count: r, name: s, price: f }]) } })] })] })] }) } function J() { const [e, r] = i.exports.useState([]); return n(b, { children: [t(z, { cartProducts: e, setCartProducts: r }), t(G, { cartProducts: e, setCartProducts: r })] }) } w.render(t(k.StrictMode, { children: t(J, {}) }), document.getElementById("root"));