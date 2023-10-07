import Footer from './Footer'
import Aboutphoto from '../assets/img/10.png'

function About() {
    return (
        <div className="About">
            <h3 className='text-center m-5'>ABOUT US</h3>
            <div className=' md:flex justify-center pt-16 m-5'> 
                <div className='mb-20'>
                    <img src={Aboutphoto} alt="" className=' md:w-1/2  ' />
                </div>
                <div className='leftabout'>
                    <h4>
                        Nike Best Summer Collection  Shoes
                    </h4>
                    <p className='md:w-96  '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae sunt sapiente soluta dolorum, <br />
                        quas eum rerum ipsa eveniet eligendi laboriosam,  in velit magnam quod delectus reiciendis ab ipsam iste. Vel laborum <br />
                        iure amet aspernatur vitae laboriosam perspiciatis impedit. A.
                    </p>
                </div>
            </div> <br /> <br /> <br /><br /><br /> <br /> <br />
            <Footer />
        </div>
    )
}


export default About;