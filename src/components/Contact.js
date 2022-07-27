export default function Contact() {
  return (
    <section className="section">
      <div className="sub-section-header">
        <h2>Contact</h2>
      </div>
      <form className="contact-form">
        <div>
          <div>
            <label name="Email" placeholder="Email">
              Email
            </label>
            <input type="email" id="contact-email" placeholder="Email"></input>
          </div>
          <div className="contact-textarea">
            <label for="contact-message">Message</label>
            <textarea
              name="text"
              id="contact-message"
              placeholder="Message"
            ></textarea>
          </div>
          <button href="mailto:info@myemail.io">Submit</button>
        </div>
      </form>
    </section>
  );
}
