import React from "react";

const ShopTable = (props) => {
  const { data, columns } = props;
  return (
    <div className="paretnTableContainer">
      <table className="tableBorder">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} className="tableHeader">
                {col.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td key={col.accessor} className="tableBox">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShopTable;
