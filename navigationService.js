import getDirections from "react-native-google-maps-directions";

const navigate = (latitude, longitude) => {
  const data = {
    source: {
      latitude: 36.697662,
      longitude: -121.617915
    },
    destination: {
      latitude,
      longitude
    },
    params: [
      {
        key: "dirflg",
        value: "d"
      }
    ]
  };

  getDirections(data);
};

export default navigate;
