/**
 * Returns background color, text color, and display text based on property status
 * @param {string} status - The property status (RECOMMENDED, APPROVED, REJECTED, PENDING, etc.)
 * @returns {Object} Object containing backgroundColor, textColor, and text
 */
export const getPropertyStatus = (status) => {
  switch (status?.toUpperCase()) {
    case 'RECOMMENDED':
      return {
        backgroundColor: 'bg-green-500',
        textColor: 'text-white',
        text: 'Recommended'
      };
    case 'APPROVED':
      return {
        backgroundColor: 'bg-emerald-500',
        textColor: 'text-white',
        text: 'Activated'
      };
    case 'REJECTED':
      return {
        backgroundColor: 'bg-red-500',
        textColor: 'text-white',
        text: 'Rejected'
      };
    case 'PENDING':
      return {
        backgroundColor: 'bg-primary',
        textColor: 'text-white',
        text: 'Pending Approval'
      };
    default:
      return {
        backgroundColor: 'bg-primary',
        textColor: 'text-white',
        text: status || 'Unknown'
      };
  }
};
