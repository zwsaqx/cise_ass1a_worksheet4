import articles from "../dummydata/articles";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable";
import tablecolumns from "../components/tablecolumns.js";
const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;  