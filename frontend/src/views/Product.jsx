import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 20px;
`;
const Images = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  height: calc(100vh - 100px);
`;
const ImagePreviews = styled.div`
  flex-shrink: 0;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ImagePreview = styled.img`
  height: 120px;
  width: 210px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);

  &.selected {
    outline: 4px solid var(--primary);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;
const SelectedImage = styled.img`
  flex: 1;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
`;
const Title = styled.h1`
  font-size: 2rem;
`;
const Price = styled.p`
  font-weight: normal;
  font-size: 1.5rem;
  color: var(--primary);
`;
const Discount = styled.span`
  font-weight: normal;
  font-size: 1rem;
  color: red;
  vertical-align: top;
`;
const Description = styled.p`
  padding: 20px 0;
`;
const Info = styled.div`
  line-height: 1.5;
  padding-bottom: 100px;
`;

export default function Product() {
  const [product, setProduct] = React.useState(null);
  const [selectedImage, setSelectedImage] = React.useState(0);

  const { id } = useParams();

  React.useEffect(function () {
    axios
      .get(`http://localhost:3001/api/product/${id}`)
      .then((response) => setProduct(response.data));
  }, []);

  return (
    <Container>
      {product && (
        <>
          <Images>
            <SelectedImage
              src={product.images[selectedImage]}
              alt={product.title}
            />
            <ImagePreviews>
              {product.images &&
                product.images.map((image, index) => (
                  <ImagePreview
                    key={index}
                    className={selectedImage === index ? "selected" : ""}
                    src={image}
                    alt={product.title}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
            </ImagePreviews>
          </Images>
          <Title>{product.title}</Title>
          <Price>
            ${product.price} <Discount>-{product.discountPercentage}%</Discount>
          </Price>
          <Description>{product.description}</Description>
          <Info>
            <b>Brand:</b> {product.brand}
            <br />
            <b>Category:</b> {product.category}
          </Info>
        </>
      )}
    </Container>
  );
}
