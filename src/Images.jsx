import { useState } from "react";
import iconNext from "./images/icon-next.svg";
import iconPrevious from "./images/icon-previous.svg";

export function Images(props) {
    const imgCount = 4;
    const [imgId, setImgId] = useState(0);
    return (
        <div className="relative h-80 lg:h-full">
            <SwitchImage extraClass="lg:hidden" onClick={() => setImgId(imgId - 1)} src={iconPrevious} placement="top-1/2 left-3" alt="previous image"></SwitchImage>
            <img className="h-full w-full object-cover object-center
                            lg:rounded-lg cursor-pointer"
                src={`/image-product-${Math.abs(imgId % imgCount) + 1}.jpg`} alt="product Images"
                onClick={() => props.setLightBox(Math.abs(imgId % imgCount))} />
            <SwitchImage extraClass="lg:hidden" onClick={() => setImgId(imgId + 1)} src={iconNext} placement="top-1/2 right-3" alt="next image"></SwitchImage>
            <div className="hidden
            lg:mt-9 lg:flex lg:gap-6">
                {Array(imgCount).fill().map((_, i) => <Thumbnail key={i} id={i} src={`/image-product-${i + 1}-thumbnail.jpg`} isSelected={i == imgId} setImgId={setImgId}></Thumbnail>
                )}
            </div>
        </div>
    );
}
function SwitchImage(props) {
    return (
        <button className={`absolute -translate-y-1/2 ${props.placement}
                            ${props.extraClass}`}
            onClick={props.onClick}>
            <img className="rounded-full px-5 py-4 bg-white" src={props.src} alt={props.alt} />
        </button>
    );
}
function Thumbnail(props) {
    return (
        <div className={`rounded-lg cursor-pointer overflow-hidden relative border border-transparent after:absolute after:inset-0
                        hover:after:bg-white/50 hover:after:block
                        ${props.isSelected && "border-primary-500 after:bg-white/75 after:block"}`}
            tabIndex={0}
            onClick={() => props.setImgId(props.id)}>
            <img src={props.src} alt={`select product image number ${props.id}`} />
        </div>
    );
}
function Modal(props) {
    return (
        <div
            className="fixed flex inset-0 z-20 bg-black bg-opacity-30 w-screen h-screen overflow-y-auto py-20">
            {props.children}
        </div>
    )
}
export default function LightBox(props) {
    const imgCount = 4;
    const [imgId, setImgId] = useState(props.id);
    return (
        <Modal>
            <div className="relative w-2/5 h-[45.5rem] m-auto">
                <button className="float-right text-white hover:text-primary-500"
                    onClick={props.onExit}>
                    <svg className="fill-current" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg>
                </button>
                <SwitchImage onClick={() => setImgId(imgId - 1)} src={iconPrevious} placement="top-[16rem] -left-5" alt="previous image"></SwitchImage>
                <img className="object-cover object-center rounded-lg"
                    src={`/image-product-${Math.abs(imgId % imgCount) + 1}.jpg`} alt="product Images"
                    onClick={() => 1} />
                <SwitchImage onClick={() => setImgId(imgId + 1)} src={iconNext} placement="top-[16rem] -right-5" alt="next image"></SwitchImage>
                <div className="mt-9 flex gap-6">
                    {Array(imgCount).fill().map((_, i) => <Thumbnail key={i} id={i} src={`/image-product-${i + 1}-thumbnail.jpg`} isSelected={i == Math.abs(imgId % imgCount)} setImgId={setImgId}></Thumbnail>
                    )}
                </div>
            </div>
        </Modal>
    )
}