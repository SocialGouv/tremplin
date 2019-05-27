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

export const getFinancialAidLabel = (aid: string) => {
    if (aid === 'PTMG') {
        return 'PTMG'
    } else if (aid === 'PTMA') {
        return 'PTMA'
    } else if (aid === 'CAIM') {
        return 'CAIM'
    } else if (aid === 'COSCOM') {
        return 'COSCOM'
    } else if (aid === 'COTRAM') {
        return 'COTRAM'
    } else if (aid === 'CSTM') {
        return 'CSTM'
    } else if (aid === 'exoneration-fiscale-pdsa') {
        return 'Exonération fiscale'
    } else if (aid === 'ZRR') {
        return 'Zone de revitalisation rurale (ZRR)'
    } else if (aid === 'ZAC') {
        return 'Zone d\'Action Complémentaire (ZAC)'
    }
    return aid;
}

export const getFiancialAidLink = (aid: string) => {
    if (aid === 'PTMG') {
        return 'http://paps.sante.fr/index.php?id=19147'
    } else if (aid === 'PTMA') {
        return 'http://paps.sante.fr/index.php?id=19147http://www.paps.sante.fr/Dispositif-de-Praticien-Territorial-de-Medecine-Ambulatoire.39865.0.html'
    } else if (aid === 'CAIM') {
        return 'http://paps.sante.fr/index.php?id=41920'
    } else if (aid === 'COSCOM') {
        return 'http://paps.sante.fr/index.php?id=41920'
    } else if (aid === 'COTRAM') {
        return 'http://paps.sante.fr/index.php?id=41920'
    } else if (aid === 'CSTM') {
        return 'http://paps.sante.fr/index.php?id=41920'
    } else if (aid === 'exoneration-fiscale-pdsa') {
        return 'http://www.paps.sante.fr/Exonerations-fiscales-pour-l-activite-de-PDSA.19145.0.html'
    }
    return undefined;
}