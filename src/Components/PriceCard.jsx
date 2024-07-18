// eslint-disable-next-line no-unused-vars
import React from 'react';


const plans = [
  {
    title: 'FREE',
    price: '$0/month',
    features: [
      'Single User',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ],
    unavailable: [
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ]
  },
  {
    title: 'PLUS',
    price: '$9/month',
    features: [
      '5 Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ],
    unavailable: [
      'Monthly Status Reports'
    ]
  },
  {
    title: 'PRO',
    price: '$49/month',
    features: [
      'Unlimited Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ],
    unavailable: []
  }
];

const PriceCard = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">{plan.title}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {plan.price}
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={plan.unavailable.includes(feature) ? 'text-muted' : ''}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-primary">
                  BUTTON
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
