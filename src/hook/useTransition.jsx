import React, { useEffect, useState } from 'react'

const useTransition = () => {
    const [transition, setTransition] = useState('scale-0');

    useEffect(() => {
        const timeout = setTimeout(() => {
          setTransition('scale-100');
        }, 100);
    
        return () => clearTimeout(timeout);
      }, []);

  return transition
  
}

export default useTransition