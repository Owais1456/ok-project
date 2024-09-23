// import React, { useEffect, useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Box,
//   Typography,
//   Checkbox,
//   TablePagination,
//   useMediaQuery,
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import { collection, getDocs } from 'firebase/firestore';
// import { database } from '../config/firebase';
// import { useNavigate } from 'react-router-dom';

// const Teacherlist = () => {
//   const navigate = useNavigate();
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const teacherCollection = collection(database, 'Teacher');
//         const teacherSnapshot = await getDocs(teacherCollection);
//         const teacherList = teacherSnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setTeachers(teacherList);
//       } catch (error) {
//         console.error('Error fetching Teachers: ', error);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Box>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="flex-start" // Align items to the left
//         sx={{
//           backgroundColor: 'tomato',
//           padding: 2,
//           mb: 2,
//           position: 'relative',
//           borderRadius: 1,
//           boxShadow: 2,
//         }}
//       >
//         <Typography
//           variant={isMobile ? 'h5' : 'h4'}
//           component="h1"
//           align="left"
//           color="white"
//           sx={{ mb: 2 }}
//         >
//           Customer List
//         </Typography>
//         <Button
//           onClick={() => navigate('/Teacher/TeacherRegistration')}
//           variant="contained"
//           startIcon={<AddIcon />}
//           sx={{
//             position: 'absolute',
//             right: 16,
//             top: '50%',
//             transform: 'translateY(-50%)',
//             backgroundColor: 'white', // Set button background color to white
//             color: 'black', // Change text color to black
//             '&:hover': {
//               backgroundColor: 'lightgray', // Optional: Change background color on hover
//             },
//             [theme => theme.breakpoints.down('sm')]: {
//               right: 8,
//               top: 'auto',
//               bottom: 8,
//               transform: 'none',
//             },
//           }}
//         >
//           Add       
//         </Button>
//       </Box>
//       <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
//         <Table aria-label="teacher table">
//           <TableHead>
//             <TableRow>
//               <TableCell padding="checkbox">
//                 <Checkbox />
//               </TableCell>
//               <TableCell>ID</TableCell>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Class</TableCell>
//               <TableCell>Gender</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {teachers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((teacher) => (
//               <TableRow key={teacher.id}>
//                 <TableCell padding="checkbox">
//                   <Checkbox />
//                 </TableCell>
//                 <TableCell>{teacher.id}</TableCell>
//                 <TableCell>{teacher.firstName}</TableCell>
//                 <TableCell>{teacher.lastName}</TableCell>
//                 <TableCell>{teacher.email}</TableCell>
//                 <TableCell>{teacher.class}</TableCell>
//                 <TableCell>{teacher.gender}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={teachers.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Box>
//   );
// };

// export default Teacherlist;








import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
  Checkbox,
  TablePagination,
  useMediaQuery,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Studentlist = () => {
  const navigate = useNavigate();
  const isXsScreen = useMediaQuery('(max-width:600px)');
  const isSmScreen = useMediaQuery('(max-width:960px)');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentsCollection = collection(database, 'students');
        const studentSnapshot = await getDocs(studentsCollection);
        const studentList = studentSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentList);
      } catch (error) {
        console.error('Error fetching students: ', error);
      }
    };

    fetchStudents();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection={isXsScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            sx={{
              backgroundColor: 'tomato',
              padding: 2,
              mb: 2,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              align={isXsScreen ? 'center' : 'left'}
              color="white"
              sx={{ mb: isXsScreen ? 2 : 0 }}
            >
              Customer List

            </Typography>
            <Button
              onClick={() => navigate('/Student/StudentRegistration')}
              variant="contained"
      //  
              startIcon={<AddIcon />}
              sx={{
                backgroundColor:"white",
                color:"black",
                alignSelf: isXsScreen ? 'center' : 'flex-end',
                marginLeft: isXsScreen ? 0 : 2,
                marginTop: isXsScreen ? 2 : 0,
              }}
            >
              Add
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
            <Table aria-label="student table" size={isXsScreen ? 'small' : 'medium'}>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>User ID</TableCell>
                  <TableCell>First name</TableCell>
                  <TableCell>Last name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Cont Num</TableCell>
                  <TableCell>Gender</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((student) => (
                    <TableRow key={student.id}>
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell>{student.userId}</TableCell>
                      <TableCell>{student.firstName}</TableCell>
                      <TableCell>{student.lastName}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.Role}</TableCell>
                      <TableCell>{student.Number}</TableCell>
                      <TableCell>{student.gender}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={students.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Studentlist;