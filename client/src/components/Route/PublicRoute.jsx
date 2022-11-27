import PublicNavBar from "../Navbar/PublicNavBar";

export const PublicRoute = ({ children }) => {
  return (
    <>
      <PublicNavBar />
      <div className="container-fluid mt-0">{children}</div>
    </>
  );
};
