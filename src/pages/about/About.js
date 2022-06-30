// styles
import './About.css'

// images
import info_main_img from '../../image_resources/photo-about.jpg'
import person1_img from '../../image_resources/person-1.jpg'
import person2_img from '../../image_resources/person-2.jpg'

export default function About() {
    return (
        <div>
            <section id="about-info" className="bg-light py-3">
                <div className="container">
                    <div className="info-left">
                        <p><span className="text-primary"> Our goal </span> is to fill the gap between medical treatment and the need for emotional support. A person's relationship with a doctor or other medical personnel may not provide adequate emotional support, and a person's family and friends may not understand the impact of a disease or treatment. We aim to bridge the gap between medical and emotional needs. </p>
                        <p>Often people with certain medical problems limit themselves and do not reach their full potential due to societal pressure and fear of being alone. They shy away and feel that they would not be able to compete with everyone or other people might make fun of them.</p>
                        <p className="text-primary">
                            Realise that you are not alone and come find your own community!
                        </p>
                    </div>
                    <div className="info-right">
                        <img src={info_main_img} alt="img" />
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div className="container">
                    <h2 className="l-heading py-1">What Our Users Say</h2>
                    <div className="testimonial bg-primary">
                        <img src={person1_img} alt="Anna" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, magnam atque maxime quasi beatae non, ipsum quidem, velit nesciunt tempore vitae! Non, architecto! Ut odit cumque optio nesciunt expedita eos tempore voluptatum animi molestiae, praesentium fuga vitae blanditiis eligendi?</p>
                    </div>
                    <div className="testimonial bg-primary">
                        <img src={person2_img} alt="Jenna" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, magnam atque maxime quasi beatae non, ipsum quidem, velit nesciunt tempore vitae! Non, architecto! Ut odit cumque optio nesciunt expedita eos tempore voluptatum animi molestiae, praesentium fuga vitae blanditiis eligendi?</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
