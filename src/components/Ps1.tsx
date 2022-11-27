import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-orange dark:text-dark-orange">
        {config.ps1_username}
      </span>
      <span className="text-light-cyan dark:text-dark-cyan">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.ps1_hostname}
      </span>
      <span className="text-light-blue dark:text-dark-blue">:$ ~ </span>
    </div>
  );
};

export default Ps1;
