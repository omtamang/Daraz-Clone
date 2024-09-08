import Footercmp from "./footer/Footercmp";
import HeaderComponent from "./HeaderComponenet";


export default function Pagenotfound(){
    return (
        <div>
            <HeaderComponent/>
                <div className="flex justify-center">
                    <div className="text-center mt-[200px]">
                        <p className="font-bold text-8xl font-mono">404</p>
                        <p className="text-2xl">oops..<br/><span>page not found</span></p>
                    </div>
                    <div className="mt-[100px]">
                        <img src="https://st3.depositphotos.com/8615356/13839/v/450/depositphotos_138392822-stock-illustration-page-not-found-error-404.jpg"/>
                    </div>
                </div>
            <Footercmp/>
        </div>
    )
}