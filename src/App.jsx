import React from 'react';
import { XAxis, YAxis, AreaChart, Area, ResponsiveContainer } from 'recharts';

const App = ({ data, dimKey, measKeys }) => {

  const colors = ["#8884d8", "#82ca9d"]

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={data}
        >
          <XAxis dataKey={dimKey[0]} />
          <YAxis />
          {measKeys.map((m, i) => (
            <Area type="monotone" dataKey={m} stackId="1" stroke={colors[i]} fill={colors[i]} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
