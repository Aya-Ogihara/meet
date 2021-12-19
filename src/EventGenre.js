import React, { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);
  const colors = ['#d328ae', '#d73db6', '#db52be', '#e068c6', '#e47ece'];

  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.split(' ').includes(genre)
        ).length;
        return { name: genre, value };
      });
      console.log(data);
      return data;
    };
    setData(() => getData());
  }, [events]);

  

  return (
    <ResponsiveContainer height={260} className='pie-chart'>
      <PieChart margin={{ top: 30 }}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={80}
          fill='#d328ae'
          dataKey='value'
          // label={({ name, percent }) =>
          //   `${name} ${(percent * 100).toFixed(0)}%`
          // }
        >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
        </Pie>
        <Legend layout="horizontal" verticalAlign="top" align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
