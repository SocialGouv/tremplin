import { JobOffer } from "@api";
import { Box } from "@components/elements";
import { getHeaderImagePath } from "./util/jobOfferUtil";

export const JobOfferHeader = (props: { jobOffer: JobOffer }) => {
  return (
    <Box height="300px" backgroundSize="cover" backgroundImage={`url('${getHeaderImagePath(props.jobOffer)}')`} backgroundPosition="center" backgroundRepeat="no-repeat" />
  )
}

