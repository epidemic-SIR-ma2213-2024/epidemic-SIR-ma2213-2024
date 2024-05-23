const config = {
  type: 'line',         // type of chart
  data: {
    labels: t,
    datasets: [{
      borderColor: "#ECB7F5",
      data: I,
      label: "Infected"
    },
              {
      borderColor: "#00BCD4",
      data: S,
      label: "Susceptible"
    },
              {
      borderColor: "#8E44AD",
      data: S,
      label: "Susceptible"
    }]
  },         
  options: {
    animation: true,
    responsive: false,
    maintainAspectRatio: false,
    plugins:{
      legend:{display: true,position: 'top',align: 'end'
      },
    title: {display: true, text: '', 
            font:{size: 20},
            padding:{bottom: 0},
            color: '#fff'
      },
    },
    scales: {           // axis ranges:
      y: {
        title: {
        display: true,
        text: 'Populasi',
        font:{
              size: 20
              },
        color: '#fff'
        },
        ticks:{
            font: {
                  size: 14
                  },
            color: '#fff',
          stepSize: 20
          },
        grid: { display: true, color: "#F53E7C", borderColor: '#ffcc33' },
        min: 0,
        max: 1040
      },
      
      x:{
          title: {
            display: true,
            text: 'Waktu',
            font: {
                  size: 20
                  },
            color: '#fff'
          },
          ticks:{
            font: {
                  size: 10,
                  },
            color: '#fff',
            min: 0,
            max: 100,
            stepSize: 2
          },
          grid: { display: true, color: "#131c2b", borderColor: '#ffcc33' },
          min:0
      }
    }
  }
};