const filterFieldsConfig = {
  'BUY-RESIDENTIAL-APARTMENT': [
    {
      type: 'multiSelect',
      key: 'residentType',
      label: 'Property Features',
      options: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    },
    {
      type: 'multiSelect',
      key: 'furnitureType',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Full Furniture', 'Semi Furniture'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parking',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'BUY-RESIDENTIAL-BUNGALOW': [
    {
      type: 'multiSelect',
      key: 'residentType',
      label: 'Property Features',
      options: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    },
    {
      type: 'multiSelect',
      key: 'furnitureType',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Full Furniture', 'Semi Furniture'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parking',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'BUY-RESIDENTIAL-FARMHOUSE': [
    {
      type: 'multiSelect',
      key: 'residentType',
      label: 'Property Features',
      options: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    },
    {
      type: 'multiSelect',
      key: 'furnitureType',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Full Furniture', 'Semi Furniture'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parking',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'BUY-RESIDENTIAL-PENTHOUSE': [
    {
      type: 'singleSelect',
      key: 'residentType',
      label: 'Property Features',
      options: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    },
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'BUY-COMMERCIAL-SHOP': [
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
  'BUY-COMMERCIAL-SHOWROOM': [
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
  'BUY-COMMERCIAL-WAREHOUSE': [
    {
      type: 'singleSelect',
      key: 'heavyVehicleParking',
      label: 'Heavy Vehicle Parking',
      options: ['Yes', 'No'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'BUY-COMMERCIAL-INDUSTRIAL-SHED': [
    {
      type: 'singleSelect',
      key: 'heavyVehicleParking',
      label: 'Heavy Vehicle Parking',
      options: ['Yes', 'No'],
    },
    {
      type: 'singleSelect',
      key: 'craneFacility',
      label: 'Crane Facility',
      options: ['Yes', 'No'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'BUY-COMMERCIAL-RESTAURANT-CAFE': [
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
  'BUY-OFFICE-OFFICE': [
    {
      type: 'singleSelect',
      key: 'cabinConferenceRoom',
      label: 'Cabin and Conference Room',
      options: ['Yes', 'No'],
      defaultValue: 'No',
    },
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
  'BUY-OFFICE-CO-WORKING': [
    {
      type: 'multiSelect',
      key: 'deskOption',
      label: 'Desk Option',
      options: ['Hot Desk', 'Private Cabin'],
    },
    {
      type: 'multiSelect',
      key: 'commonArea',
      label: 'Common Area',
      options: ['Lounge', 'Pantry', 'Coffee Station'],
    },
    {
      type: 'singleSelect',
      key: 'meetingRoom',
      label: 'Meeting Room',
      options: ['Yes', 'No'],
    },
  ],
  'BUY-LAND-RESIDENTIAL-PLOT': [
    {
      type: 'multiSelect',
      key: 'nearbyInfrastructure',
      label: 'Nearby Infrastructure',
      options: [
        'Highway',
        'Shopping Mall',
        'School',
        'Cafe',
        'Hospital',
        'Transportation',
      ],
    },
  ],
  'BUY-LAND-COMMERCIAL-PLOT': [
    {
      type: 'singleSelect',
      key: 'zoning',
      label: 'Zoning',
      options: ['R1', 'R2', 'R3', 'Other'],
    },
    {
      type: 'multiSelect',
      key: 'amenities',
      label: 'Utility Availability',
      options: [
        'Electricity',
        'Boundary Wall and Gating',
        'Security',
        'Water Supply',
      ],
    },
  ],
  'BUY-LAND-INDUSTRIAL-PLOT': [
    {
      type: 'singleSelect',
      key: 'heavyVehicleParking',
      label: 'Heavy Vehicle Parking',
      options: ['Yes', 'No'],
    },
  ],
  'BUY-LAND-AGRICULTURE-LAND': [
    {
      type: 'multiSelect',
      key: 'waterSource',
      label: 'Water Source',
      options: ['Borewell', 'Canal', 'River', 'Others'],
    },
  ],
  'RENT-RESIDENTIAL-APARTMENT': [
    {
      type: 'multiSelect',
      key: 'residentType',
      label: 'Property Features',
      options: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    },
    {
      type: 'multiSelect',
      key: 'furnitureType',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Full Furniture', 'Semi Furniture'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parking',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'RENT-RESIDENTIAL-BUNGALOW': [
    {
      type: 'multiSelect',
      key: 'residentType',
      label: 'Property Features',
      options: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    },
    {
      type: 'multiSelect',
      key: 'furnitureType',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Full Furniture', 'Semi Furniture'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parking',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'RENT-RESIDENTIAL-FARMHOUSE': [
    {
      type: 'multiSelect',
      key: 'residentType',
      label: 'Property Features',
      options: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    },
    {
      type: 'multiSelect',
      key: 'furnitureType',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Full Furniture', 'Semi Furniture'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parking',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'RENT-RESIDENTIAL-PENTHOUSE': [
    {
      type: 'singleSelect',
      key: 'residentType',
      label: 'Property Features',
      options: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    },
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'RENT-COMMERCIAL-SHOP': [
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
  'RENT-COMMERCIAL-SHOWROOM': [
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
  'RENT-COMMERCIAL-WAREHOUSE': [
    {
      type: 'singleSelect',
      key: 'heavyVehicleParking',
      label: 'Heavy Vehicle Parking',
      options: ['Yes', 'No'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'RENT-COMMERCIAL-INDUSTRIAL-SHED': [
    {
      type: 'singleSelect',
      key: 'heavyVehicleParking',
      label: 'Heavy Vehicle Parking',
      options: ['Yes', 'No'],
    },
    {
      type: 'singleSelect',
      key: 'craneFacility',
      label: 'Crane Facility',
      options: ['Yes', 'No'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
  ],
  'RENT-COMMERCIAL-RESTAURANT-CAFE': [
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
  'RENT-OFFICE-OFFICE': [
    {
      type: 'singleSelect',
      key: 'cabinConferenceRoom',
      label: 'Cabin and Conference Room',
      options: ['Yes', 'No'],
      defaultValue: 'No',
    },
    {
      type: 'singleSelect',
      key: 'furnishingStatus',
      label: 'Furniture Type',
      options: ['Unfurnished', 'Fully Furnished', 'Semi Furnished'],
    },
    {
      type: 'multiSelect',
      key: 'propertyStatus',
      label: 'Property Status',
      options: ['Ready to Move', 'Under Construction'],
    },
    {
      type: 'singleSelect',
      key: 'propertyCondition',
      label: 'Property Condition',
      options: ['New', 'Old'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
  'RENT-OFFICE-CO-WORKING': [
    {
      type: 'multiSelect',
      key: 'deskOption',
      label: 'Desk Option',
      options: ['Hot Desk', 'Private Cabin'],
    },
    {
      type: 'multiSelect',
      key: 'commonArea',
      label: 'Common Area',
      options: ['Lounge', 'Pantry', 'Coffee Station'],
    },
    {
      type: 'singleSelect',
      key: 'meetingRoom',
      label: 'Meeting Room',
      options: ['Yes', 'No'],
    },
  ],
  'RENT-LAND-RESIDENTIAL-PLOT': [
    {
      type: 'multiSelect',
      key: 'nearbyInfrastructure',
      label: 'Nearby Infrastructure',
      options: [
        'Highway',
        'Shopping Mall',
        'School',
        'Cafe',
        'Hospital',
        'Transportation',
      ],
    },
  ],
  'RENT-LAND-COMMERCIAL-PLOT': [
    {
      type: 'singleSelect',
      key: 'zoning',
      label: 'Zoning',
      options: ['R1', 'R2', 'R3', 'Other'],
    },
    {
      type: 'multiSelect',
      key: 'amenities',
      label: 'Utility Availability',
      options: [
        'Electricity',
        'Boundary Wall and Gating',
        'Security',
        'Water Supply',
      ],
    },
  ],
  'RENT-LAND-INDUSTRIAL-PLOT': [
    {
      type: 'singleSelect',
      key: 'heavyVehicleParking',
      label: 'Heavy Vehicle Parking',
      options: ['Yes', 'No'],
    },
  ],
  'RENT-LAND-AGRICULTURE-LAND': [
    {
      type: 'multiSelect',
      key: 'waterSource',
      label: 'Water Source',
      options: ['Borewell', 'Canal', 'River', 'Others'],
    },
  ],
  'PG-RESIDENTIAL-APARTMENT': [
    {
      type: 'multiSelect',
      key: 'roomTypes',
      label: 'Types of Rooms',
      options: [
        'Single Room',
        'Double Sharing',
        'Triple Sharing',
        'Four Sharing',
      ],
    },
    {
      type: 'multiSelect',
      key: 'amenities',
      label: 'PG Amenities',
      options: [
        'Wifi',
        'Common TV',
        'Lift',
        'Power Backup',
        'Mess',
        'Refrigerator',
        'Cooking Allowed',
      ],
    },
    {
      type: 'singleSelect',
      key: 'pgAvailableFor',
      label: 'PG Available For',
      options: ['Male', 'Female', 'Anyone'],
    },
    {
      type: 'singleSelect',
      key: 'preferredTenants',
      label: 'Preferred Tenants',
      options: ['Any', 'Student', 'Working Professional'],
    },
    {
      type: 'singleSelect',
      key: 'foodIncluded',
      label: 'Food Included',
      options: ['Yes', 'No'],
    },
    {
      type: 'singleSelect',
      key: 'laundry',
      label: 'Laundry',
      options: ['Yes', 'No'],
    },
    {
      type: 'singleSelect',
      key: 'parkingType',
      label: 'Parking',
      options: ['2 Wheeler', '4 Wheeler', 'Both', 'None'],
    },
  ],
};

const formatPropertySubTypeKey = name => {
  return name ? name.replace(/[\s\/-]/g, '-').toUpperCase() : '';
};

export const getFilterFields = (
  category = 'BUY',
  propertyType = 'Residential',
  propertySubType = 'Apartment',
) => {
  if (category === 'Paying Guest') {
    category = 'PG';
    propertyType = 'Residential';
    propertySubType = 'Apartment';
  }
  const propertySubTypeKey = formatPropertySubTypeKey(propertySubType);
  const key = `${category}-${propertyType}-${propertySubTypeKey}`.toUpperCase();
  return filterFieldsConfig[key] || [];
};
