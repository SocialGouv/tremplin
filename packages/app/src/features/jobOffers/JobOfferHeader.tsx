import { JobOffer } from "@api";
import { Box } from "@components/elements";
import { styled } from "@styles";
import { join } from "path";

const ImageBox = styled(Box)`
  background-size: cover;
`

export const JobOfferHeader = (props: { jobOffer: JobOffer }) => {
  return (
    <ImageBox pt={7} pb={5} backgroundImage={`url('${getHeaderImagePath(props.jobOffer)}')`} backgroundPosition="center" backgroundRepeat="no-repeat" />
  )
}

const getHeaderImagePath = (jobOffer: JobOffer) => {
  const header = jobOffer.photos.find((photo) => photo.header)
  if (header) {
    return join("static", "assets", "photos", jobOffer.reference, header.name);
  }
  return 'static/assets/photos/header.jpg';
}
