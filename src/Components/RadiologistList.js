export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];


// import axios from 'axios';

// const fetchRadiologists = async () => {
//   try {
//     const response = await axios.get('http://localhost:8080/auth/getAllUsers', {
//       params: {
//         role: 'radiographer'
//       }
//     });
//     const radiologists = response.data.map(radiologist => ({
//       value: radiologist.id,
//       label: radiologist.name,
//       color: '#00B8D9',
//       // Add other properties as needed
//     }));
//     return radiologists;
//   } catch (error) {
//     console.error('Error fetching radiologists:', error);
//     return [];
//   }
// };

// const RadiologistList = fetchRadiologists;

// export default RadiologistList;
