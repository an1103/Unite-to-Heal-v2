import { Link } from 'react-router-dom'

// styles
import './Home.css'

export default function Home() {
    return (
        <div>
            <header>
                <div id="showcase">
                    <div className="container">
                        <div className="showcase-content">
                            <h1 className="text-primary">Connect with others </h1>
                            <p className="lead"> You are not alone in the battle against your illness. Reach out to your peers and develop new bonds.
                            </p>
                            <Link className='btn' to="/about">Learn More</Link>
                        </div>
                    </div>
                </div>
            </header>

            <div id="home-info" className="flex-container bg-dark">
                <div className="info-img"></div>
                <div className="info-content">
                    <h1>Our Vision</h1>
                    <p> Medical personnel, family and friends may not provide adequate emotional support since they may not understand the impact of a disease or treatment. We aim to bridge the gap between medical and emotional needs.
                    </p>
                    <Link to="/about" className="btn btn-light">Read More</Link>
                </div>
            </div>

            <div className="flex-container" id="features">
                <div className="box bg-light">
                    <h3>Network</h3>
                    <p> Connect with people facing the same challenges as you and find solutions to heal together.</p>
                </div>
                <div className="box bg-primary">
                    <h3>Blogs</h3>
                    <p> Learn about the improvements you can make in your lifestyle that would help ease your condition.</p>
                </div>
                <div className="box bg-light">
                    <h3>Donate</h3>
                    <p>Your small token of love can make a difference. Help someone raise funds for medical treatment. </p>
                </div>
            </div>
        </div>
    )
}
