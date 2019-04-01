import { JobOffer } from "@domain";
import getConfig from "next/config";
import { from, Observable } from "rxjs";
import { filter, mergeMap } from 'rxjs/operators';

interface DataRepository<T> {
  findAll: () => Observable<T[]>;
  findOne: (id: string | number) => Observable<T>
}

export const jobOfferRepository = (): DataRepository<JobOffer> => {
  return {
    findAll: () => api<JobOffer[]>(`job-offers`),
    findOne: (id: string | number) => api<JobOffer>(`job-offers/${id}`)
  }
}

// TODO(tglatt): extract to HttpClient.ts
const config = getConfig();

function api<T>(url: string): Observable<T> {
  return from(fetch(`${config.publicRuntimeConfig.API_URL}/${url}`)).pipe(
    filter((res) => ![204, 404].includes(res.status)),
    mergeMap(res => res.json())
  );
}


