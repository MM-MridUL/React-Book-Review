import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../Utility/localSorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import PropTypes from 'prop-types';

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

const PagesToRead = () => {
  const books = useLoaderData();

  const [ReadBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBook();
    if (books.length > 0) {
      // const readBooks = books.filter(book=>storedBookIds.includes(book.bookId));
      const readBooks = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          readBooks.push(book);
        }
      }
      setReadBooks(readBooks);
      //  console.log(books,storedBookIds,readBooks);
    }
  }, [books]);

  return (
    <div className="">
        <div className="">

     <div className="">
     <BarChart className="mx-auto bg-base-200 rounded-2xl mt-9"
        width={1100}
        height={490}
        data={ReadBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {ReadBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
     </div>
    </div>
    </div>
  );
};

TriangleBar.propTypes={
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,  
    y: PropTypes.number.isRequired, 
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

export default PagesToRead;
