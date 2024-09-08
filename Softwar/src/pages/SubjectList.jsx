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
  TablePagination,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const SubjectList = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subjectCollection = collection(database, 'Subject');
        const subjectSnapshot = await getDocs(subjectCollection);
        const subjectList = subjectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubjects(subjectList);
      } catch (error) {
        console.error('Error fetching subjects: ', error);
      }
    };

    fetchSubjects();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundColor: 'gray',
          padding: 2,
          mb: 2,
          position: 'relative'
        }}
      >
        <Typography variant={isMobile ? 'h5' : 'h4'} component="h1" align="center" color="white">
          Subject List
        </Typography>
        <Button
          onClick={() => navigate('/Subject/SubjectAdd')}
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          Add
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="subject table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Subject Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Group</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((subject) => (
              <TableRow key={subject.id}>
                <TableCell>{subject.id}</TableCell>
                <TableCell>{subject.SubjectName}</TableCell>
                <TableCell>{subject.class}</TableCell>
                <TableCell>{subject.SelectGroup}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={subjects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default SubjectList;