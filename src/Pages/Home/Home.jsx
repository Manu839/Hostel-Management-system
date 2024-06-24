import Welcome from "./Subfiles/Welcome";
import Reservations from "./Subfiles/Reservations";
import ContactUs from "./Subfiles/ContactUs";
import "./home.css";


function Home() {
  return (
    <>
      <Welcome />
      <Reservations />
      <ContactUs />
    </>
  );
}

export default Home;
