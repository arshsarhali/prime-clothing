
import { withRouter } from 'react-router';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={ size} onClick={() => history.push(`${match.url}${linkUrl}`)}>

        <BackgroundImageContainer imageUrl={imageUrl} className='background-image' />
        <ContentContainer className='content'>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleContainer>Shop Now</SubtitleContainer>
        </ContentContainer>
    
    </MenuItemContainer>
);

export default withRouter(MenuItem);