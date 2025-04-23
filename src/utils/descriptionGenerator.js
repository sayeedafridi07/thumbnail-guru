import { PROPERTY_TEMPLATES } from "../data/propertyTemplates";

export const generatePropertyDescription = (propertyType, formData) => {
  const templateList = PROPERTY_TEMPLATES[propertyType] || [];
  if (templateList.length === 0)
    return "Property description not available for this category";

  const template =
    templateList[Math.floor(Math.random() * templateList?.length)];

  return template.replace(/\{(\w+)\}/g, (_, key) => formData[key] || "");
};