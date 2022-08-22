
import React from 'react';

export interface BestsellersProps {
  label: string
}

export const Bestsellers: React.FC<BestsellersProps> = props => {
  return <div>{props.label}</div>;
}
  