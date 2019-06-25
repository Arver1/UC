import React from 'react';
import PropTypes from 'prop-types';
import {
  Section, Number, Time,
} from './styled';


export const Contacts = ({ number = '', time = '' }) => {
  const formatNumber = number.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2)-$3-$4-$5');
  const formatTime = `Пн-Пт: ${time}`;
  return (
    <Section>
      <h2 className="visually-hidden">Время работы центра</h2>
      <Number href={`tel:+${number}`}>{formatNumber}</Number>
      <Time>{formatTime}</Time>
    </Section>
  );
};

Contacts.propTypes = {
  number: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
