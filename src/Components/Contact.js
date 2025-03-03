import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", text: "" });
  };

  const contacts = [
    {
      id: 1,
      icon: <IoCallOutline />,
      title: "Call Me",
      subTitle: "+234-814-634-6422",
    },
    {
      id: 2,
      icon: <FaRegEnvelope />,
      title: "Email",
      subTitle: "danieloladele92@gmail.com",
    },
  ];

  return (
    <section
      className="contact container"
      ref={ref}>
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Get in touch</p>
      </div>

      <div className="contact-container">
        <div className="contact-information">
          <ul>
            {contacts.map((contact) => (
              <li>
                <div className="contact-icon">{contact.icon}</div>

                <div className="contact-info">
                  <h3 className="contact-title">{contact.title}</h3>
                  <p className="contact-subtitle">{contact.subTitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          name="submit-to-google-sheet"
          class="contact-form">
          <div className="contact-inputs">
            <div className="contact_inputs-detail">
              <div className="contact-content">
                <div className="label">
                  <label
                    for=""
                    className="contact-label">
                    Name
                  </label>
                </div>

                <div className="input">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="contact-content">
                <div className="label">
                  <label
                    for=""
                    className="contact-label">
                    Email
                  </label>
                </div>

                <div className="input">
                  <input
                    onChange={handleInputChange}
                    type="email"
                    name="Email"
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="contact-content">
                <div className="label">
                  <label
                    for=""
                    className="contact-label">
                    Project
                  </label>
                </div>

                <div className="input">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="Project"
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="contact-content">
                <div className="label">
                  <label
                    for=""
                    className="contact__label">
                    Message
                  </label>
                </div>

                <div className="textarea">
                  <textarea
                    name="Message"
                    id=""
                    cols="0"
                    rows="7"
                    className="contact__input"
                  />
                </div>
              </div>
            </div>
            <div>
              <button>Send Message</button>
            </div>
          </div>
        </form>
        <p id="msg"></p>
      </div>
    </section>
  );
});

export default Contact;
