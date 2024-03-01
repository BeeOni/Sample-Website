import './Title.css';
import vector from './Vector.png';
import arrow from './Arrow 1.png';

export default function Title() {
    return(
        <div>
            <div className='titlecon'>
                <div className='titlesubcon'>
                <h2>Real Estate Investment </h2>
                <h2> Opportunities Designed For You</h2>
                <p className='p1'>A National Mortgage and Sales Brokerage Since 1995</p>
                <button className='but1'><b>Current Opportunities</b></button>
                <button className='but2'><b>Learn More About Investing</b></button>
                </div>

                <p className='p2'>scroll down</p>
                <img src={vector} alt='vector' className='vector'></img>
                <img src={arrow} alt='arrow' className='arrow'></img>
            </div>
        </div>
    )
}