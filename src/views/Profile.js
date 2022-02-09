import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user, getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
  const {accessToken, setAccessToken} = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenWithPopup({
          audience: "api://ir0n-bank-transactions",
          scope: 'read:balance update:balance'
        })
        console.log(token);
        // setAccessToken(token);
        // console.log(accessToken);
      } catch(err) {
        console.warn(err);
      }
    })();
  }, [getAccessTokenSilently, getAccessTokenWithPopup]);

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
      <Row>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
