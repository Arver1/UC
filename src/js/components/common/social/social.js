import React from 'react';
import {Section, SocialItem} from './styled';
import {SOCIAL} from "../../../constants/common";


export const Social = () => (
	<Section>
		<SocialItem href={SOCIAL.instagram} title="instagram"/>
		<SocialItem href={SOCIAL.facebook} title="facebook"/>
		<SocialItem href={SOCIAL.twitter} title="twitter"/>
		<SocialItem href={SOCIAL.youtube} title="youtube"/>
	</Section>
);
