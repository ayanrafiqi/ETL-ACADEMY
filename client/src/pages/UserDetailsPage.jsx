import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UserDetails from "../components/UserDetails/UserDetails";
import UserSearchHistory from "../components/UserDetails/UserSearchHistory";
import UserPinnedCourses from "../components/UserDetails/UserPinnedCourses";
import UserFeedback from "../components/UserDetails/UserFeedback";

const UserDetailsPage = () => {
  const params = useParams();
  return (
    <>
      <Tabs defaultActiveKey="details" id="tab" className="mb-3">
        <Tab eventKey="details" title="Details">
          <Link to="/users">Back to the list</Link>
          <UserDetails id={params.id} />
        </Tab>
        <Tab eventKey="history" title="Search History">
          <Link to="/users">Back to the list</Link>
          <UserSearchHistory id={params.id} />
        </Tab>
        <Tab eventKey="pinned" title="Pinned Courses">
          <Link to="/users">Back to the list</Link>
          <UserPinnedCourses id={params.id} />
        </Tab>
        <Tab eventKey="feedbacks" title="Feedbacks">
          <Link to="/users">Back to the users</Link>
          <UserFeedback id={params.id} />
        </Tab>
      </Tabs>
    </>
  );
};

export default UserDetailsPage;
