const getNeighborhoodsList = () => {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

export default getNeighborhoodsList;
