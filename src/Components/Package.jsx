import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Weddingtour from './Package/Weddingtour';
import Grouptour from './Package/Grouptour';
import Honeymoontour from './Package/Honeymoontour';

const Package = () => {
  const { type } = useParams();

  switch (type) {
    case 'Weddingtour':
      return <Weddingtour />;
    case 'Grouptour':
      return <Grouptour />;
    case 'Honeymoontour':
      return <Honeymoontour />;
    default:
      return <Navigate to="/package/Weddingtour" />;
  }
};

export default Package;
