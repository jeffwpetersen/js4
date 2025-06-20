import * as React from 'react';

const ReactVersion = () => {
  return (
    <div className="text-sm text-gray-500">
      <p>React version: {React.version}</p>
    </div>
  );
};

export default ReactVersion;