import dataSeries from '../api/dataSeries.json';
import List from './Seriesdata.jsx'; // Relative path pointing to List.jsx




const Amazon = () => {
  return (
    <ul className="grid grid-three--cols">
      {
        dataSeries.map((curElem, index) => (
          <List key={index} curElem={curElem} />  // Use List, not list
        ))
      }
    </ul>
  );
};
 
export default Amazon;
