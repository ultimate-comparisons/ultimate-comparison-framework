export function isNullOrUndefined(value) {
  return value === undefined || value === null;
}

export function resolveDefault(def, ref) {
  if (!isNullOrUndefined(def) && def.hasOwnProperty('template')) {
    let i = 0;
    return def.template.replace(/{}/g, (x) => ref[def.variables[i++]])
  } else {
    return def;
  }
}

export function resolveLock(id, ref) {
  if (ref.lock.hasOwnProperty(id)) {
    return ref.lock[id];
  } else {
    return {};
  }
}

export function deleteUndefinedKeys(obj) {
  Object.keys(obj).forEach(key => isNullOrUndefined(obj[key]) && delete obj[key]);
  return obj;
}

export function splitNameUrl(string) {
  const regex = /^((?:.*?)+?(?:-?.*?)+?)\s*-?\s*((?:(?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))|(?:www.))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi
    .exec(string);

  const result = {
    name: (!isNullOrUndefined(regex) && regex.length > 1) ? regex[1] : name,
    url: (!isNullOrUndefined(regex) && regex.length > 2) ? regex[2] : ""
  };

  if (/^www/.test(result.url)) {
    result.url = 'http://'.concat(result.url);
  }

  return result;
}

export function getDefaultCriteria(criteria, type) {
  let key = "default-" + (type || "").toString().toLowerCase();

  const result = criteria.filter(value => value.hasOwnProperty(key));
  if (result.length > 0) {
    return result[0][key];
  }
  return {};
}
