
import "../home.css"
import backgroundVector from "../../../assets/welcome_back_vector1.svg";
import imageDoctor from "../../../assets/doctor.png"

const Welcome = () => {
  return (
    <div className="welcome sections">
      <img className="back-img" src={backgroundVector} alt="background-vector" />
      <div className="main-container">
        <div className="left-container">
          <h1>Welcome</h1>
          <p>to Hostel House, where we prioritize your comfort and convenience come first. We offer 24/7 medical support, efficient room cleaning, and personalized request management to ensure a seamless living experience. Our user-friendly platform provides real-time updates and fosters community engagement, making hostel life easy and enjoyable. 
            <div className="join">
            <br></br>Join us today and discover the best in hostel living. 
            </div>

</p>
        </div>
        <div className="right-container">
          <img src={imageDoctor} alt="doctor image" />
        </div>
      </div>

    </div>
  )
}

export default Welcome