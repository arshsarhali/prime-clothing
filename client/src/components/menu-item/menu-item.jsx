
import { useNavigate } from 'react-router-dom';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
const navigate = useNavigate()

    return (
        <MenuItemContainer size={size} onClick={() => navigate(`${linkUrl}`)}>

            <BackgroundImageContainer imageUrl={imageUrl} className='background-image' />
            <ContentContainer className='content'>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubtitleContainer>Shop Now</SubtitleContainer>
            </ContentContainer>
    
        </MenuItemContainer>
    );
}

export default MenuItem;