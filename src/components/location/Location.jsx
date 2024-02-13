import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import "./location.css";

const Location = () => {
  // Organize contact information in an array
  const contactInfo = [
    { label: "+977 9862500112", link: "tel:+9779862500112" },
    { label: "+977 9804046649", link: "tel:+9779804046649" },
    { label: "+977 9852066901", link: "tel:+9779852066901" },
    { label: "+977 9804375944", link: "tel:+9779804375944" },
  ];

  return (
    <div className="kec__location section__padding" id="location">
      <div className="kec__location-container gradient__bg section__padding">
        <div className="kec__location-container_body gradient__box section__padding">
          <h1 className="p__opensans" style={{ color: "#fff" }}>
            Kantipur Engineering Consult
          </h1>
          <p className="p__para">Main Road, Sani Haat, Biratnagar - 2</p>
          <p className="p__para">(Opposite Of Maha Nagarpalika Office )</p>

          <div className="kec__location-container_body-contact">
            {contactInfo.map((contact, index) => (
              <a key={index} className="custom__button" href={contact.link}>
                <FontAwesomeIcon icon={faPhone} /> {contact.label}
              </a>
            ))}
          </div>
        </div>
        <div className="kec__location-container_map">
          <iframe
            title="locationMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.852950834116!2d87.28210607811477!3d26.465207365907258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74155f367a79%3A0x9e2d0976924ca07c!2z4KSu4KWH4KSoIOCksOCli-CkoSAo4KSJ4KSk4KWN4KSk4KSwKSwgQmlyYXRuYWdhciA1NjYxMw!5e0!3m2!1sen!2snp!4v1707802760268!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: "2px solid black", borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
