import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Hero = () => {
  const { user } = useAuth0();
  return (
    <div className="text-center hero my-5">
      <h1 className="mb-4">{`Welcome ${user.name}`}</h1>
      <p className="lead">
        We are the <span style={{ fontWeight: 'bold' }}>Ir0n Bank</span>,
        central to all of Wester0s. Thank you for choosing us for all of your
        banking needs.
      </p>
    </div>
  );
};

export default Hero;
