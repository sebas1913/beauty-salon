import styles from './table.module.scss';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  headers: string[];
  data: { [key: string]: string | number }[];
}

const Table: React.FC<TableProps> = ({ headers, data, className, ...props }) => {
  return (
    <table className={styles.table} {...props}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
