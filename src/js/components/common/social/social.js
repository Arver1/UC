import React from 'react';
import { Section, SocialItem } from './styled';
import { SOCIAL } from '../../../constants/common';


export const Social = ({ size = 30, resetPadding = false}) => (
  <Section resetPadding={resetPadding}>
    <SocialItem href={SOCIAL.instagram} title="instagram">
      <svg width={size} height={size}>
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#instagram" />
      </svg>
    </SocialItem>
    <SocialItem href={SOCIAL.facebook} title="facebook">
      <svg width={size} height={size}>
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#facebook" />
      </svg>
    </SocialItem>
    <SocialItem href={SOCIAL.twitter} title="twitter">
      <svg width={size} height={size}>
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#twitter" />
      </svg>
    </SocialItem>
    <SocialItem href={SOCIAL.youtube} title="youtube">
      <svg width={size} height={size}>
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#youtube" />
      </svg>
    </SocialItem>
  </Section>
);
