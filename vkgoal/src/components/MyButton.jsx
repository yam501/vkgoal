export default function MyButton(props) {
    return (
        <div 
        className={props.className}
        data-to="selecton" 
        onClick={() => props.onClick && props.onClick()}>
            <div className="btnsel">
                {props.children || <></>}
            </div>
        </div>
    )
}