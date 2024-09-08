import Categories from "../Categories";
import FlashSale from "../FlashSale";
import Footercmp from "../footer/Footercmp";
import HeaderComponent from "../HeaderComponenet";
import ImageComponent from "../ImageComponent";
import Justforyou from "../JustForYou";

export default function Home() {
    return(
        <div>
            <div className="mb-[125px]">
                <HeaderComponent/>
            </div>
            <div className="">
             <ImageComponent/>
            </div>
            <FlashSale/>
            <Categories/>
            <Justforyou/>
            <Footercmp/>
        </div>
    )
}