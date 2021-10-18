import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import LightBox, { Images } from "./Images"
import cartIcon from "./images/icon-cart.svg"
import iconMinus from "./images/icon-minus.svg"
import iconPlus from "./images/icon-plus.svg"


function CompanyName(props) {
    return (
        <p className="text-sm font-bold text-primary-500">
            {props.children}
        </p>
    )
}

function Title(props) {
    return (
        <h1 className="text-3xl font-bold text-secondary-900">
            {props.children}
        </h1>
    )
}

function Description(props) {
    return (
        <p className="text-secondary-500">
            {props.children}
        </p>
    )
}

function Price(props) {
    return (
        <div className="flex justify-between lg:flex-col">
            <div className="flex justify-between gap-6 lg:justify-start">
                <span className="text-3xl font-bold text-secondary-900">
                    ${props.realPrice.toFixed(2)}
                </span>
                <span className="bg-primary-100 text-primary-500 rounded font-bold py-1 px-2">
                    {props.discount}%
                </span>
            </div>
            <span className="text-secondary-500 line-through">
                ${props.originalPrice.toFixed(2)}
            </span>
        </div>
    )
}
function AddToCart(props) {
    return (
        <button onClick={props.onClick}
            className="w-full bg-primary-500 rounded-xl text-white font-bold p-4 shadow-2xl">
            <img src={cartIcon} className="inline-block filter brightness-0 invert  mx-4" alt="Shopping cart" />
            Add to cart
        </button>
    )
}
function Quantity(props) {
    return (
        <div className="flex overflow-hidden bg-gray-100 rounded-xl p-4 relative text-secondary-900">
            <ChangeQuantity setCount={() => props.setCount(props.count && props.count - 1)} src={iconMinus} alt="Substract 1 from total" position="top-1/2 left-4"></ChangeQuantity>
            <input className="m-auto bg-gray-100 text-center font-bold text-secondary-900 lg:w-1/2"
                type="number" min="0" value={props.count} onChange={(e) => props.setCount(parseInt(e.target.value))} />
            <ChangeQuantity setCount={() => props.setCount(props.count + 1)} src={iconPlus} alt="Add 1 to total" position="top-1/2 right-4" ></ChangeQuantity>
        </div>
    )
}
function ChangeQuantity(props) {
    return (
        <button
            className={`absolute -translate-y-1/2 ${props.position}`}
            onClick={props.setCount}>
            <img src={props.src} alt={props.alt} />
        </button>
    )
}
function Product(props) {
    const [productCount, setProductCount] = useState(0)
    const [lightBox, setLightBox] = useState(-1)
    const isLgScreen = useMediaQuery({ query: '(min-width: 1028px)' });
    useEffect(() => {
        document.body.style.overflowY = (lightBox >= 0 && isLgScreen) ? "hidden" : "auto";
    })
    const productName = "Fall Limited Edition Sneakers"
    const originalPrice = 250
    const discount = 50
    const realPrice = originalPrice * discount / 100
    return (
        <main className="pb-4 m-auto 
        max-w-screen-lg lg:flex lg:gap-28 lg:px-12 lg:py-16">
            <Images setLightBox={setLightBox} ></Images>
            {(lightBox >= 0 && isLgScreen) && <LightBox id={lightBox} onExit={() => setLightBox(-1)}></LightBox>}
            <div className="p-6 space-y-4 lg:space-y-9">
                <div className="space-y-4">
                    <CompanyName>SNEAKER COMPANY</CompanyName>
                    <Title>{productName}</Title>
                </div>
                <Description>These low-profile sneakers are your perfect casual wear companion. Featuring a durrable rubber outer sole, they'll withstand everything the weather can offer.</Description>
                <Price realPrice={realPrice} originalPrice={originalPrice} discount={discount}></Price>
                <div className="space-y-4 lg:space-y-0 lg:flex  lg:gap-4">
                    <Quantity count={productCount} setCount={setProductCount} ></Quantity>
                    <AddToCart
                        onClick={() => {
                            if (productCount > 0) {
                                props.setCartProducts([...props.cartProducts, { count: productCount, name: productName, price: realPrice }])
                            }
                        }}>
                    </AddToCart>
                </div>
            </div>
        </main>
    )
}

export default Product