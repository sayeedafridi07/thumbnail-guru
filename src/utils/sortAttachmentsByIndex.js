export const sortAttachmentsByIndex = attachments => {
  return [...attachments]?.sort((a, b) => a.id - b.id);
};
