import Photo from '../assets/22.jpg'
import Footer from './Footer'

function Home() {

  return (
    <div className="Main">

      <div className="Home">

        <div className="Home-Descrption-words">
          <h4> <span className='one'>WELCOME</span> <span className='two'></span>To SUMMER COLLECTION  <br /> Best Shoes</h4>
          <p>Nike is ready to give you best shoes espeacailly shoe you can use While you are in </p>
          <p>trip ,sport and ever you are in the Business ,so we ready to delivery </p>
          <p>you what you have bought online on the time </p> <br />
          <div className='flex gap-5'>

            <div className=' w-fit p-1 shadowe text-white text-center translate-y-4'>
              <h6>300k</h6>
              <p>Advertsiment</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='border-3  w-fit p-1 shadow  text-center ' >
              <h6>20k</h6>
              <p>Brands</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className=' w-fit p-1 shadowe text-center text-white translate-y-4'>
              <h6>40k</h6>
              <p >Shoes Delivery</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>

            </div>

          </div>
        </div>
        <div className="Home-Photo">
          <img src={Photo} alt="" />
        </div>
      </div> <br />
      <div className='footer'>
        <footer>
          <Footer />
        </footer>
      </div>

    </div>

  )
}

export default Home;