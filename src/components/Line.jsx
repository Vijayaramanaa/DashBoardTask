import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/action';
import "./chart.scss"

const LineChart =  () => {

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const labels = products && products.map(item => item.price);
  const dataValues =products && products.map(item => item.discountPercentage);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Price & Discount ',
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
    <div className='Linechart'>
      <h2>Price and Discount </h2>
      <Line data={data} options={options} width={500} height={500} />
      
    </div>
  );
};

export default LineChart;
