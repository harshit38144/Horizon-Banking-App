'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ( {amount }: {amount: number}) => {
  return (
    <div>
        ₹<CountUp end = {amount} />
    </div>
  )
}

export default AnimatedCounter