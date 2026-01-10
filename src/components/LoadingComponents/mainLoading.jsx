import React from 'react';

const MainLoading = () => {
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader: {
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      boxSizing: 'border-box',
      borderTop: '8px solid #fff',
      borderLeft: '8px solid #fff',
      borderRight: '8px solid #ff00',
      animation: 'loader 0.7s infinite linear',
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.loader} />
      <style>
        {`
          @keyframes loader {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default MainLoading;
