import * as React from 'react';
import Styled from 'styled-components';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const Image = Styled(ImageListItem)`
  &:hover ${Image} {
    border: none;
  }
`

const StyledDiv = Styled.div`
  padding-left: 10%;
  border-top: 6px solid;
  border-color: #799469;
  margin-top: 1%;
`;

const customStyles = {
  content: {
    marginRight: '-75%',
  },
};

export default function StandardImageList() {
  return (
    <StyledDiv>
      <ImageList sx={{ width: 200, height: 300 }} cols={3} rowHeight={244}>
        {itemData.map((item) => (
          <Image type="submit" key={item.img}
            onClick={() => {
              setImageIsOpen(true)
              setSource(item.img)
            }}
          >
            <img
              srcSet={
                `${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`
              }
              alt={item.title}
              loading="lazy"
            />
          </Image>
        ))}
      </ImageList>
    </StyledDiv>
  );
}

const itemData = [
  {
    img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1507537362848-9c7e70b7b5c1%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI2MjcxOTM2%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080',
    title: 'discussion'
  },
  {
    img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1515378791036-0648a3ef77b2%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI2MjY1NjU4%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080',
    title: 'applying for jobs'
  },
  {
    img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1622674777904-386b3ef30c4a%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax',
    title: 'team meeting'
  }
]