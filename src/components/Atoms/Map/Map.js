import "./map.css";

export default function Map() {
    return (
        <div>
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d190428.76785540505!2d-104.95852887099699!3d39.70097705774286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700020293402!5m2!1sen!2sus"
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
