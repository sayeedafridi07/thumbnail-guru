// utils/imageUtils.js
import { apiConnector } from "../services/apiConnector";
import { propertyEndpoints } from "../services/apis";

const { GET_ATTACHMENTS_BY_ID_API } = propertyEndpoints;

// Cache to store fetched images
const imageCache = new Map();

export async function fetchImageById(attachmentId) {
  // Return cached image if available
  if (imageCache.has(attachmentId)) {
    return imageCache.get(attachmentId);
  }

  try {
    const response = await apiConnector(
      "GET",
      `${GET_ATTACHMENTS_BY_ID_API}/${attachmentId}`,
      null
    );
    const imageData = response?.data?.data; // Assuming this contains { mimeType, base64 }

    // Cache the result
    imageCache.set(attachmentId, imageData);
    return imageData;
  } catch (error) {
    console.error(
      `Failed to fetch image for attachment ${attachmentId}`,
      error
    );
    return null; // Fallback for failed fetches
  }
}

// Optional: Convert Base64 to Blob URL for better performance
export function getImageSrc(attachmentId, imageData) {
  if (!imageData) return null;

  const { mimeType, base64 } = imageData;
  if (!base64 || !mimeType) return null;

  // Convert Base64 to Blob and return an object URL
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });
  return URL.createObjectURL(blob);
}
