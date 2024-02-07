import React, { useEffect } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/action';
import "./chart.scss"

const PieChart =  () => {

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const labels = products && products.map(item => item.brand);
  const dataValues =products && products.map(item => item.rating);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Brand & Rating',
        data: dataValues,
        backgroundColor: ['#ff7f0e','#7f7f7f','#bcbd22'],
        borderColor: ["black"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='ChartStyle'>
      <h2>Product Rating</h2>
      <Pie data={data} options={options} width={300} height={400} />

    </div>
  );
};

export default PieChart;
