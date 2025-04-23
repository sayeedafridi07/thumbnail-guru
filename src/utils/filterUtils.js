/**
 * Count the number of applied filters
 * @param {Object} filters - The filters object from Redux state
 * @returns {number} - The number of applied filters
 */
export const getAppliedFiltersCount = (filters) => {
  return Object.entries(filters).filter(
    ([key, value]) => {
      // Special case for price range (counts as one filter if either min or max is changed)
      if (key === 'minPrice') return false; // Skip, we'll count it with maxPrice
      if (key === 'maxPrice') return filters.minPrice > 0 || filters.maxPrice < 2000000;
      
      // Handle arrays (like zipCode)
      if (Array.isArray(value)) return value.length > 0;
      
      // Handle regular values
      return value !== null && value !== '';
    }
  ).length;
};
