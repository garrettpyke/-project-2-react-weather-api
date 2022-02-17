import welcome_img from '../images/styling/home_graphic_short.jpg'

export default function Home() {

    return (
        <>
            <header>
                <div>
                    (header)
                </div>
            </header>
            <div className="home">
               
                <img src={welcome_img} alt="welcome image"/>
                <h2>to my weather API app!</h2>
            </div>
            {/* <footer>
                <div>
                    
                </div>
            </footer> */}
        </>
    )

}