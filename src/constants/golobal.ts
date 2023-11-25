export const services_upcoming = [
  {
    name: "Home Energy Efficiency Audit and Optimization",
    rating: 4.8,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715849/mnzadsxyo8dxadhgr1w9.jpg",
    price_range: "8000 - 15000",
  },
  {
    name: "Virtual Reality Fitness Training Sessions",
    rating: 4.7,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715833/mroztsobgzv89pnanu6z.jpg",
    price_range: "3000 - 8000",
  },
  {
    name: "Eco-Friendly Lawn Care and Maintenance",
    rating: 4.6,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715800/nhdgvqxlg5ganuwnjzal.webp",
    price_range: "2500 - 7000",
  },
  {
    name: "Personalized Genetic Health Consultations",
    rating: 4.9,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715764/gqkxx6tcb4bwiyq51hxw.jpg",
    price_range: "10000 - 20000",
  },
  {
    name: "Drone-Based Aerial Photography and Mapping",
    rating: 4.4,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715741/ve9kr8yuxqnf0pe52u2m.jpg",
    price_range: "6000 - 15000",
  },
  {
    name: "Virtual Interior Design and Home Renovation ",
    rating: 4.7,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715700/t5nnuenswc4xqoadzopr.png",
    price_range: "5000 - 12000",
  },
  {
    name: "Electric Scooter Charging and Maintenance Services",
    rating: 4.3,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715632/pb3mdo9ffbzdwrlacyre.jpg",
    price_range: "2500 - 6000",
  },
  {
    name: "Urban Vertical Farming Consultations",
    rating: 4.8,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697716441/wautsv8gzcb4bc9od3it.jpg",
    price_range: "7000 - 15000",
  },
  {
    name: "Sustainable Fashion Wardrobe Styling",
    rating: 4.6,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715833/mroztsobgzv89pnanu6z.jpg",
    price_range: "3000 - 8000",
  },
  {
    name: "Personal Cybersecurity Training and Consultations",
    rating: 4.9,
    image:
      "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697715833/mroztsobgzv89pnanu6z.jpg",
    price_range: "10000 - 20000",
  },
];

export const role = ["admin", "user"];
export const roleOptions = role.map((role: string) => {
  return {
    label: role,
    value: role,
  };
});
export const status = ["pending", "accepted", "rejected"];
export const statusOptions = status.map((role: string) => {
  return {
    label: role,
    value: role,
  };
});

export const rating = [
  {
    label: "5 Star",
    value: "5",
  },
  {
    label: "4 Star",
    value: "4",
  },
  {
    label: "3 Star",
    value: "3",
  },
  {
    label: "2 Star",
    value: "2",
  },
  {
    label: "1 Star",
    value: "1",
  },
];
export const ratingOptions = rating.map(
  (rating: { label: string; value: string }) => {
    return {
      label: rating?.label,
      value: rating?.value,
    };
  }
);

export const location = [
  "Mirpur",
  "Uttara",
  "Gulshan",
  "Banani",
  "Dhanmondi",
  "Mohammadpur",
  "Motijheel",
  "Khilgaon",
  "Shyamoli",
  "Farmgate",
  "Mohakhali",
  "Tejgaon",
  "Rampura",
  "Badda",
  "Malibagh",
  "Jatrabari",
  "Demra",
  "Kadamtali",
  "Keraniganj",
];

export const locationOption = location.map((location: string) => {
  return {
    label: location,
    value: location,
  };
});

export const timeSlots = [
  {
    slot: "09:00 AM - 10:00 AM",
    startTime: "09:00",
    endTime: "10:00",
    status: "active",
  },
  {
    slot: "10:00 AM - 11:00 AM",
    startTime: "10:00",
    endTime: "11:00",
    status: "active",
  },
  {
    slot: "11:00 AM - 12:00 PM",
    startTime: "11:00",
    endTime: "12:00",
    status: "active",
  },
  {
    slot: "12:00 PM - 01:00 PM",
    startTime: "12:00",
    endTime: "13:00",
    status: "active",
  },
  {
    slot: "02:00 PM - 03:00 PM",
    startTime: "13:00",
    endTime: "14:00",
    status: "active",
  },
  {
    slot: "03:00 PM - 04:00 PM",
    startTime: "14:00",
    endTime: "15:00",
    status: "active",
  },
  {
    slot: "04:00 PM - 05:00 PM",
    startTime: "15:00",
    endTime: "16:00",
    status: "active",
  },
  {
    slot: "05:00 PM - 06:00 PM",
    startTime: "16:00",
    endTime: "17:00",
    status: "active",
  },
  {
    slot: "06:00 PM - 07:00 PM",
    startTime: "17:00",
    endTime: "18:00",
    status: "active",
  },
  {
    slot: "07:00 PM - 08:00 PM",
    startTime: "18:00",
    endTime: "19:00",
    status: "active",
  },
];
