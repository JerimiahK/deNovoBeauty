import "./map.css";

export default function Map() {
    return (
        <div>
            <iframe
            title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.7978799045236!2d-105.04006697035854!3d39.60923534661225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e2b1eeb94ef%3A0x7185452598fff4f5!2s5911%20Middlefield%20Rd%2C%20Littleton%2C%20CO%2080123!5e0!3m2!1sen!2sus!4v1679283018089!5m2!1sen!2sus"
                width="500"
                height="400"
                className="map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
