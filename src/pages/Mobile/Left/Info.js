/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Information from '../../Information';
import BarMobile from '../../../components/Bar/BarMobile';

export default function Info() {
  return (
    <>
      <BarMobile tab="info" />
      <Information />
    </>
  );
}
