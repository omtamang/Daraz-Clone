import ImageSlider from './ImageSlider'

function ImageComponent() {

    const slides = [
        {url: 'https://img.lazcdn.com/us/domino/339b7335-dac5-469b-aca9-176414f22c28_NP-1976-688.jpg_2200x2200q80.jpg_.webp', title:'img1'},
        {url: 'https://img.lazcdn.com/us/domino/75860558-38ad-4e35-bfd0-eed6ebc295bc_NP-1976-688.jpg_2200x2200q80.jpg_.webp', title:'img2'},
        {url: 'https://img.lazcdn.com/us/domino/e8c4f6cc-ace6-4711-b743-bae5bd926398_NP-1976-688.jpg_2200x2200q80.jpg_.webp', title:'img3'},
        {url: 'https://img.lazcdn.com/us/domino/591fb54192a6e0e151c106c5838ebf9f.jpg_2200x2200q80.jpg_.webp', title:'img4'},
        {url: 'https://img.lazcdn.com/us/domino/3f0779d6-84f7-4d21-a406-ac2ab6119410_NP-1976-688.png_2200x2200q80.png_.webp', title:'img5'},
        {url: 'https://img.lazcdn.com/us/domino/f53d8640-2b88-4bac-a5ce-31331f2081a7_NP-1976-688.jpg_2200x2200q80.jpg_.webp', title:'img6'},
        {url: 'https://img.lazcdn.com/us/domino/b9f2cce9095ec91311af8aacc284f59e.jpg_2200x2200q80.jpg_.webp', title:'img7'},
        {url: 'https://img.lazcdn.com/us/domino/09a03719-f90e-4a12-a9f4-ba51fd98a613_NP-1976-688.jpg_2200x2200q80.jpg_.webp', title:'img8'},
        {url: 'https://img.lazcdn.com/us/domino/1bf033bb-3127-4a5d-9bdc-d5aa5a0f6a3f_NP-1976-688.jpg_2200x2200q80.jpg_.webp', title:'img9'}
    ]

    return(
        <div className='bg-[#e7e8ec] h-[310px] '>
            <div className='w-[1000px] h-[310px] m-auto'>
                <ImageSlider slides={slides}/>
            </div>
        </div>
    )
  }

  export default ImageComponent;