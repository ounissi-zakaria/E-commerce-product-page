import cartIcon from "./images/icon-cart.svg";
import deleteIcon from "./images/icon-delete.svg";

export function Cart(props) {
    const count = props.cartProducts.reduce((a, b) => a + b.count, 0);
    return (
        <button className="relative" onClick={() => props.setShowCart(!props.showCart)}>
            {!!count && <span className="absolute text-xs leading-3 text-white bg-primary-500 rounded-full -top-1 -right-1 px-1.5">
                {count}
            </span>}
            <img
                src={cartIcon}
                alt="Shopping Cart" />
        </button>
    );
}
export function CartModal(props) {
    return (
        <div className="fixed bg-white w-[22.5rem] left-2 top-20 rounded-lg z-10 shadow-lg
                        lg:absolute lg:-right-6 lg:top-16 lg:left-auto">
            <h2 className="font-bold text-secondary-900 p-6">Cart</h2>
            <div className="space-y-6 pr-4 pl-6 py-6 overflow-y-auto flex flex-col border-t-2 font-bold text-secondary-500 border-secondary-100 h-52">
                {!props.cartProducts.length && <span className="m-auto">Your cart is empty</span>}
                {props.cartProducts.map((e, i) => {
                    return <CartProduct key={i} onDelete={() => props.setCartProducts(props.cartProducts.filter((el, idx) => idx != i))} name={e.name} count={e.count} price={e.price}></CartProduct>;
                })}
                {!!props.cartProducts.length && <button onClick={props.onClick}
                    className="w-full bg-primary-500 rounded-xl text-white font-bold p-4">
                    Checkout
                </button>}
            </div>
        </div>
    );
}
function CartProduct(props) {
    return (
        <div className="flex gap-2 text-secondary-400">
            <img className="rounded-lg object-cover w-14"
                src="/image-product-1-thumbnail.jpg" alt="product thumbnail" />
            <div className="flex flex-col w-2/3">
                <span className="truncate tracking-widest">{props.name}</span>
                <div className="space-x-2">
                    <span>${props.price.toFixed(2)} x {props.count}</span>
                    <span className="font-bold text-secondary-800">${(props.price * props.count).toFixed(2)}</span>
                </div>
            </div>
            <RemoveCartProduct onClick={props.onDelete}></RemoveCartProduct>
        </div>
    );
}
function RemoveCartProduct(props) {
    return (
        <button onClick={props.onClick}>
            <img src={deleteIcon} alt="Remove this item from cart." />
        </button>
    );
}
