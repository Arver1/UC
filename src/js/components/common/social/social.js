import React from 'react';
import { Section, SocialItem } from './styled';
import { SOCIAL } from '../../../constants/common';


export const Social = () => (
  <Section>
    <SocialItem href={SOCIAL.instagram} title="instagram">
      <svg width="30" height="30">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#instagram" />
      </svg>
    </SocialItem>
    <SocialItem href={SOCIAL.facebook} title="facebook">
      <svg width="30" height="30">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#facebook" />
      </svg>
    </SocialItem>
    <SocialItem href={SOCIAL.twitter} title="twitter">
      <svg width="30" height="30">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#twitter" />
      </svg>
    </SocialItem>
    <SocialItem href={SOCIAL.youtube} title="youtube">
      <svg width="30" height="30">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#youtube" />
      </svg>
    </SocialItem>
  </Section>
);
