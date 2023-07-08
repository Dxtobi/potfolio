/**
 * @param {RequestInfo | URL} url
 * @param {any} data
 * @param {string} mtd
 */
export async function fetchFunction(url, data, mtd) {
  const response = await fetch(url, {
    method: mtd,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // Convert data to JSON string
  });

  if (!response.ok) {
    throw new Error('Failed to post subtopic');
  }

  const res = await response.json();
  return res;
}

// function objectToFormData(obj) {
//   const formData = new FormData();

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       formData.append(key, obj[key]);
//     }
//   }

//   return formData;
// }
