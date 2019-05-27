import { JobOffer } from "@api";

export const getHeaderImagePath = (jobOffer: JobOffer) => {
    const header = jobOffer.photos.find((img) => img.header);
    if (header) {
        return photo(jobOffer.reference, header.name);
    }
    return '/static/assets/img/tremplin.jpg';
}

export const getFirstImagePath = (jobOffer: JobOffer) => {
    if (jobOffer.photos.length === 0) {
        return '/static/assets/img/tremplin.jpg';
    }
    return photo(jobOffer.reference, jobOffer.photos[0].name);
}

const photo = (reference: string, imageName: string) => {
    return `/static/assets/photos/${reference}/${imageName}`;
}


export const rawTextToHtml = (content: string) => {
    if (!content) {
        return '';
    }
    return content.replace(/(?:\r\n|\r|\n)/g, '<br>');
}