import { useState } from "react"
import avatarImage from "./images/image-avatar.png"
import logoImage from "./images/logo.svg"
import { Menu } from "./Menu"
import { Cart, CartModal } from "./Cart"
function Logo() {
    return (
        <a href="/">
            <img
                src={logoImage}
                alt="Site Logo - Homepage" />
        </a>
    )
}
function Avatar() {
    return (
        <button className="border-2 border-transparent rounded-full w-7 h-7 hover:border-primary-600">
            <img className="object-cover"
                src={avatarImage}
                alt="User avatar" />
        </button>
    )
}

function Header(props) {
    const [showCart, setShowCart] = useState(false)
    return (
        <header className="bg-white flex justify-between h-6 p-6 box-content
        max-w-screen-lg lg:m-auto lg:border-b lg:border-secondary-400 lg:px-2 lg:relative">
            <div className="flex  gap-4
            lg:flex-row-reverse lg:space-x-reverse lg:gap-14">
                <Menu></Menu>
                <Logo></Logo>
            </div>
            <div className="flex float-right space-x-4">
                <Cart showCart={showCart} setShowCart={setShowCart} cartProducts={props.cartProducts}></Cart>
                <Avatar></Avatar>
            </div>
            {showCart && <CartModal cartProducts={props.cartProducts} setCartProducts={props.setCartProducts} ></CartModal>}
        </header>
    )
}

export default Header