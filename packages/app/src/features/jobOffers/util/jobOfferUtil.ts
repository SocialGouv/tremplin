import { JobOffer } from "@api";
import { join } from "path";

export const getHeaderImagePath = (jobOffer: JobOffer) => {
    const header = jobOffer.photos.find((photo) => photo.header)
    if (header) {
        return join("static", "assets", "photos", jobOffer.reference, header.name);
    }
    return 'static/assets/img/tremplin.jpg';
}

export const getFirstImagePath = (jobOffer: JobOffer) => {
    const image = jobOffer.photos[0];
    return join("static", "assets", "photos", jobOffer.reference, image.name);
}
