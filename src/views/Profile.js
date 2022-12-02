import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";

export const ProfileComponent = () => {
  const { user, getAccessTokenSilently, getAccessTokenWithPopup, getIdTokenClaims } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "api://ir0n-bank-transactions"
        })
        setAccessToken(jwt_decode(token));
        const iToken = await getIdTokenClaims();
        setIdToken(iToken);
      } catch(err) {
        console.warn(err);
      }
    })();
  }, [getAccessTokenSilently, getAccessTokenWithPopup, getIdTokenClaims]);

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
        <h1>User</h1>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
      <Row>
        <h1>ID Token</h1>
        {idToken && <Highlight>{JSON.stringify(idToken, null, 2)}</Highlight>}
      </Row>
      <Row>
        <h1>Access Token</h1>
        {accessToken && <Highlight>{JSON.stringify(accessToken, null, 2)}</Highlight>}
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
