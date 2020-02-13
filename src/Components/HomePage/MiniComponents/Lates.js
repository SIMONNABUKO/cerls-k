import React from 'react';

function Lates() {
  return (
    <div class='lates'>
      <div class='container'>
        <div class='text-center'>
          <h2 style={{ color: '#fff' }}>Upcoming Events</h2>
        </div>
        <div
          class='col-md-4 wow fadeInDown'
          data-wow-duration='1000ms'
          data-wow-delay='300ms'
        >
          <img
            src='https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            class='img-responsive'
          />
          <h3 style={{ color: '#fff' }}>
            Fleet Operations and Road Safety Management Training
          </h3>
          <p>
            <ul style={{ color: '#fff' }}>
              <li>Vehicle Selection</li>
              <li>Monitoring</li>
              <li>Mantainance</li>
              <li>Utilization</li>
              <li>Road safety and in Fleet Operations</li>
              <br />
              <h6 style={{ color: '#fff' }}>
                Training Cost
                <span class='badge badge-secondary'>KES 75,000</span>
              </h6>
            </ul>{' '}
          </p>
          <a
            class='btn-slide btn btn-lg animation animated-item-3'
            href='/training-form'
          >
            Register
          </a>
        </div>

        <div
          class='col-md-4 wow fadeInDown'
          data-wow-duration='1000ms'
          data-wow-delay='600ms'
        >
          <img
            src='https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            class='img-responsive'
          />
          <h3 style={{ color: '#fff' }}>
            Impact of Logistics in manufacturing Industry Training
          </h3>
          <p style={{ color: '#fff' }}>
            <ul>
              <li>Friction of Distribution</li>
              <li>Spacial division of production and consumption</li>
              <li>Growing Materials Demand</li>
              <li>Complex Value Chains</li>
              <li>Sustainability</li>
              <br />
              <h6 style={{ color: '#fff' }}>
                Training Cost
                <span class='badge badge-secondary'>KES 75,000</span>
              </h6>
            </ul>
          </p>
          <a
            class='btn-slide btn btn-lg animation animated-item-3'
            href='/training-form'
          >
            Register
          </a>
        </div>

        <div
          class='col-md-4 wow fadeInDown'
          data-wow-duration='1000ms'
          data-wow-delay='900ms'
        >
          <img
            src='https://images.unsplash.com/photo-1569062980724-23e1063d8790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            class='img-responsive'
          />
          <h3 style={{ color: '#fff' }}>Retail Logistics</h3>
          <p style={{ color: '#fff' }}>
            <ul>
              <li>Responsinse to Competitive Pressure</li>
              <li>Responsinse to Changing Customer Demand</li>
              <li>Reducing the Risk of Product Recall</li>
              <li>Unleashing your portential with reverse logistics</li>
            </ul>
          </p>
          <a
            class='btn-slide btn btn-lg animation animated-item-3'
            href='/training-form'
          >
            Register
          </a>
        </div>
        <div className='clearfix'></div>
        <div
          class='col-md-4 wow fadeInDown'
          data-wow-duration='1000ms'
          data-wow-delay='900ms'
        >
          <img
            src='https://images.unsplash.com/photo-1561464382-349a0d78a9b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            class='img-responsive'
          />
          <h3 style={{ color: '#fff' }}>
            Cost Reduction in Warehousing, Inventory, MNGT and Distribution
          </h3>
          <p style={{ color: '#fff' }}>
            <ul>
              <li>Warehouse benchmarking</li>
              <li>Technology Trends</li>
              <li>Minimum cost and Bottlenecks</li>
              <li>Equipment handling</li>
            </ul>
          </p>
          <a
            class='btn-slide btn btn-lg animation animated-item-3'
            href='/training-form'
          >
            Register
          </a>
        </div>

        <div
          class='col-md-4 wow fadeInDown'
          data-wow-duration='1000ms'
          data-wow-delay='900ms'
        >
          <img
            src='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            class='img-responsive'
          />
          <h3 style={{ color: '#fff' }}>
            Kenya Logistics Summit and Expo 2020(11th, 12th, 13th November 2020)
          </h3>
          <p style={{ color: '#fff' }}>
            <ul>
              <li>Intergration between main ports and dry ports</li>
              <li>Managing Pharmaceutical Logistics</li>
              <li>Logistics Benchmarking</li>
              <li>Logistics Management in Elections</li>
            </ul>
          </p>
          <a
            class='btn-slide btn btn-lg animation animated-item-3'
            href='/training-form'
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Lates;
