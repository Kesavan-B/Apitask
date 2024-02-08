// import * as React from 'react';
// import Box from '@mui/material/Box';
// import CircularProgress, {
//   circularProgressClasses,
// } from '@mui/material/CircularProgress';
// import { useProgressBar } from './LoadingContext';




// // Inspired by the former Facebook spinners.
// function FacebookCircularProgress(props) {
//    // eslint-disable-next-line 
//     const { loading ,setLoading} = useProgressBar();
//   return (
//     <Box sx={{ position: 'relative' }}>
//       <CircularProgress
//         variant="determinate"
//         sx={{
//           color: (theme) =>
//             theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//         }}
//         size={40}
//         thickness={4}
//         {...props}
//         value={100}
//       />
//       <CircularProgress
//         variant="indeterminate"
//         disableShrink
//         sx={{
          
//           animationDuration: '550ms',
//           position: 'absolute',
//          left:'45% ',
//          color:"#7B50D5",
          
//           [`& .${circularProgressClasses.circle}`]: {
//             strokeLinecap: 'round',
//           },
//         }}
//         size={100}
//         thickness={4}
//         {...props}
//       />
//     </Box>
//   );
// }

// export default function CustomizedProgressBars() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <FacebookCircularProgress />
//     </Box>
//   );
// }

// import React from 'react'


// function Loder() {
//   return (
//     <div style={{position:'absolute',top:'50%',left:'50%',marginRight:'-50%',transform:'translate(-50%,-50%)',background:'transparent'}}>
// <div class="loader"></div>
//     </div>
//   )
// }

// export default Loder
import React from 'react';

function Loader() {
  return (
    <div className="overlay">
      <div className="blurry-content">
      
      </div>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;


