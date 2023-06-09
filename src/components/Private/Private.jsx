import React from "react";

function Private({ Component }) {
  const isLogin = false;
  if (isLogin) {
    return <Component />;
  }
  return <div>You are not Authenticated</div>;
}

export default Private;
