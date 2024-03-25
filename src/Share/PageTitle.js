import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Khubaib Portfolio</title>
    </Helmet>
  );
};

export default PageTitle;
