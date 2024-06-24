import { Link } from "react-router-dom";

function Reservations() {
  return (
    <div className="reservations sections">
      <div className="reservations_text">
        <h4>Reservations</h4>
      </div>
      <div className="details">
        <div className="detail_box">
          <img src="/Image/Buildings/blockA.jpeg" alt="" />
        </div>
        <div className="detail_box">
          <img src="/Image/Buildings/blockB.jpg" alt="" />
        </div>
        <div className="detail_box">
          <img src="/Image/Buildings/blockC.jpg" alt="" />

        </div>
      </div>
      <div className="buttons">
        <div className="button">
          <Link to="/accommodation/form">Room Requests</Link>
        </div>
        <div className="button">
          <Link to="/accommodation/inquire">Room Inquiries</Link>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
