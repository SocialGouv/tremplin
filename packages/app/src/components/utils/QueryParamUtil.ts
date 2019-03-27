import { SingletonRouter } from "next/router";

export const asString = (router: SingletonRouter, param: string) => {
  if (router.query == null) {
    return null;
  }
  const paramValue = router.query[param];
  return paramValue ? paramValue.toString() : null;
}
