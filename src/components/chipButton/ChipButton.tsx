import css from "./ChipButton.module.css"


interface Props{
    value:string,
    selected:boolean
}


export function  ChipButton({value, selected}:Props){
    return<>
        <div className={selected ? css.chipsSelected : css.chip}>
           <p>{value}</p>
        </div>
    </>

}