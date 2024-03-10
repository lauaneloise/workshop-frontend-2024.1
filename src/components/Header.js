import Nav from'./Nav'

export default function Header(){
    return(
        <div className="flex gap-x-4 justify-center p-4">
         <Nav titulo="inicio" url="/"/>
         <Nav titulo="inicio" url="/inicio"/>
         
        </div>
    )
}