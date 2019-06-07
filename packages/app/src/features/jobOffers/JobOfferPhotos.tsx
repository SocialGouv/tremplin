import { JobOffer } from "@api";
import { Box } from "@components/elements";
import styled from "styled-components";

const Wrapper = styled(Box)({
    overflowX: 'auto',
    overflowY: 'hidden',
})

export const GalleryPhoto = (props: { jobOffer: JobOffer }) => (
    <Wrapper>
        <Box display="flex" flexDirection="row" alignItems="flex-start">
            {props.jobOffer.photos.map((photo, index) => <Box pr={3} key={index}><img alt={photo.description} height="235px" src={`/static/assets/photos/${props.jobOffer.reference}/${photo.name}`}></img></Box>)}
        </Box>
    </Wrapper>
)