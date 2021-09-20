export interface LooseObject {
  [key: string]: any;
}

const translationObjPtToEn: LooseObject = {};

const translationObjEnToPt: LooseObject = {};

const translationObjs: LooseObject = {
  ...translationObjPtToEn,
  ...translationObjEnToPt,
};

export function translateObjectKeys(obj: LooseObject | string) {
  const newobj: LooseObject = {};
  const entries = Object.entries(obj);

  for (const entry of entries) {
    const key = entry[0];
    let value = entry[1];
    if (value !== null && value.constructor === Object) {
      value = translateObjectKeys(value);
    }
    if (value !== null && value.constructor === Array) {
      value = value.map((item) => {
        if ([String, Number].includes(item.constructor)) {
          return item;
        }

        return translateObjectKeys(item);
      });
    }

    const { [key]: translatedKey } = translationObjs;
    newobj[translatedKey] = value;
  }

  return newobj;
}
