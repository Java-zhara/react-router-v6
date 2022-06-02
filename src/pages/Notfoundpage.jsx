import { Link } from "react-router-dom";

export const Notfoundpage = () => {
  return (
    <h1>
      This page doesn't exist. Go <Link to="/">home</Link>
    </h1>
  );
};
