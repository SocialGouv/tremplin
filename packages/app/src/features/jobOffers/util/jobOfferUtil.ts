import { JobOffer } from "@api";

export const getHeaderImagePath = (jobOffer: JobOffer) => {
    const header = jobOffer.photos.find((img) => img.header);
    if (header) {
        return photo(jobOffer.reference, header.name);
    }
    return '/static/assets/img/tremplin.jpg';
}

export const getFirstImagePath = (jobOffer: JobOffer) => {
    return photo(jobOffer.reference, jobOffer.photos[0].name);
}

const photo = (reference: string, imageName: string) => {
    return `/static/assets/photos/${reference}/${imageName}`;
}
