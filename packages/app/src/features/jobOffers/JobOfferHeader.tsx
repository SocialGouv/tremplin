import { Box } from "@components/elements";
import { styled } from "@styles";

const ImageBox = styled(Box)`
  background-size: cover;
`

export const JobOfferHeader = (props: { imgUrl: string }) => {
   return (
      <ImageBox pt={7} pb={5} backgroundImage={props.imgUrl} backgroundPosition="center" backgroundRepeat="no-repeat" />
    )
}
