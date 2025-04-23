export const formatCurrency = value => {
  if (value === undefined || value === null || isNaN(value)) {
    return 'N/A';
  }

  const formatValue = val => {
    return val % 1 === 0 ? val.toFixed(0) : val.toFixed(2);
  };

  const formatWithCommas = val => {
    return new Intl.NumberFormat('en-IN').format(val);
  };

  if (value >= 10000000) {
    return `${formatValue(value / 10000000)} Cr.`; // For values 1 Cr and above
  } else if (value >= 100000) {
    return `${formatValue(value / 100000)} L`; // For values between 1 Lakh and 1 Cr
  } else {
    return formatWithCommas(formatValue(value)); // For values below 1 Lakh
  }
};

export const formatNumber = value => {
  if (!value) return '';
  // Remove any non-numeric characters except for "."
  const numericValue = value.toString().replace(/[^0-9.]/g, '');

  // Format the number with commas
  return parseFloat(numericValue).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const getPGPriceRange = item => {
  const prices = [
    item.rentDoubleSharing,
    item.rentQuadrupleSharing,
    item.rentSingleRoom,
    item.rentTripleSharing,
  ].filter(price => price !== null);

  if (prices.length === 0) return null;

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return minPrice === maxPrice
    ? `₹ ${formatCurrency(minPrice)}`
    : `₹ ${formatCurrency(minPrice)}  -  ₹ ${formatCurrency(maxPrice)}`;
};
