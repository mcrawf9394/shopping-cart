export default function Checkout ({total, zip}) {
    return <>
        <dialog>
            <button onClick={(click) => {
                click.preventDefault()
                let popUp = document.querySelector('dialog')
                popUp.close()
            }}>Exit</button>
        </dialog>
    </>
}