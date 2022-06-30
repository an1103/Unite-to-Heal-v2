import './Contact.css'

export default function Contact() {
  return (
    <div id="contact-form" class="py-3">
        <div className="container">
          <h1 className="l-heading">Contact Us</h1>
          <p>Please fill out this form to reach out to us</p>
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
    </div>
  )
}
