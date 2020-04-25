import React from 'react';

import icons from 'icons';

export type IconName = keyof typeof icons;

interface IComponentProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IComponentProps> = ({ name }) => {
  const Component = icons[name] || icons['no-icon'];

  return <Component name={name} />;
};

export default React.memo(Icon);


