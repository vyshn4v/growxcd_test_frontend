type props = {
  head: Array<string>;
  data: any;
};
function TableComponent({ head, data }: props) {
  return (
    <div className=" shadow-md sm:rounded-lg">
      <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {head.map((item, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data ? (
            data?.map((item, index) => {
              return (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  {Object.keys(item)?.map((key, index) => {
                    return (
                      <td key={index} className="px-6 py-4">
                        {item[key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <td className="px-6  py-4 ">NO data avaialable</td>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
