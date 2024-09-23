import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Collapse,
  Button,
} from '@mui/material';
import { Inbox, Menu, ExpandLess, ExpandMore } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import { Outlet, useNavigate } from 'react-router-dom';
import jawan from '../../public/logo1 (1).png'


const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openStudents, setOpenStudents] = useState(false);
  const [openTeachers, setOpenTeachers] = useState(false);
  const [openSubjects, setOpenSubjects] = useState(false);
  const [openSchool, setOpenSchool] = useState(false);
  const [openSyllabus, setOpenSyllabus] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [openFees, setOpenFees] = useState(false);
  const [openAdmission, setOpenAdmission] = useState(false);
  const [openExam, setOpenExam] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {/* Students */}
          <ListItem button onClick={() => setOpenStudents(!openStudents)}>
            <img style={{ width: 40, marginRight: 20 }} src={jawan} alt="" />
            {/* <ListItemIcon style={{color:'tomato'}}> */}
            {/* <Inbox /> */}
            {/* </ListItemIcon> */}

            <ListItemText primary="User" sx={{ color: 'tomato' }} />
            {openStudents ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openStudents} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/student/StudentRegistration')}>
                <ListItemText primary="User Registration" sx={{ color: 'tomato' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/student/StudentList')}>
                <ListItemText primary="User List" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Teachers */}
          <ListItem button onClick={() => setOpenTeachers(!openTeachers)}>
            <img style={{ width: 40, marginRight: 20 }} src={jawan} alt="" />
            {/* <ListItemIcon style={{color:"tomato"}}> */}
            {/* <Inbox /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Customer" sx={{ color: 'tomato' }} />
            {openTeachers ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openTeachers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Teacher/TeacherRegistration')}>
                <ListItemText primary="Customer Registration" sx={{ color: 'tomato' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Teacher/TeacherList')}>
                <ListItemText primary="Customer List" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Subjects */}
          <ListItem button onClick={() => setOpenSubjects(!openSubjects)}>
            <img style={{ width: 40, marginRight: 20 }} src={jawan} alt="" />
            {/* <ListItemIcon> */}
              {/* <Inbox /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Room" sx={{ color: 'tomato' }} />
            {openSubjects ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubjects} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Subject/SubjectAdd')}>
                <ListItemText primary="Room Add" sx={{ color: 'tomato' }} />
              </ListItem> */}
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Subject/SubjectList')}>
                <ListItemText primary="Room List" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* School */}
          <ListItem button onClick={() => setOpenSchool(!openSchool)}>
          <img style={{width:40, marginRight:20}} src={jawan} alt="" />
            {/* <ListItemIcon> */}
              {/* <Inbox /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Booking" sx={{ color: 'tomato' }} />
            {openSchool ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSchool} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Schoole/StudentRegistration')}>
                <ListItemText primary="Booking Registration" sx={{ color: 'tomato' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Schoole/TeacherRegistration')}>
                <ListItemText primary="Client Registration" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Syllabus */}
          <ListItem button onClick={() => setOpenSyllabus(!openSyllabus)}>
            <img style={{width:40,marginRight:20}} src={jawan} alt="" />
            {/* <ListItemIcon> */}
              {/* <Inbox /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Payment" sx={{ color: 'tomato' }} />
            {openSyllabus ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSyllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Syllabus/SyllabusForm')}>
                <ListItemText primary="Payment Form" sx={{ color: 'tomato' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Syllabus/SyllabusList')}>
                <ListItemText primary="Payment List" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Class */}
          <ListItem button onClick={() => setOpenClass(!openClass)}>
          <img style={{width:40,marginRight:20}} src={jawan} alt="" />

            {/* <ListItemIcon> */}
              {/* <Inbox /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Staff" sx={{ color: 'tomato' }} />
            {openClass ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openClass} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Class/ClassForm')}>
                <ListItemText primary="Staff Form" sx={{ color: 'tomato' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Class/ClassList')}>
                <ListItemText primary="Staff List" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Fees */}
          <ListItem button onClick={() => setOpenFees(!openFees)}>
          <img style={{width:40,marginRight:20}} src={jawan} alt="" />
          
            {/* <ListItemIcon> */}
              {/* <Inbox /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Service" sx={{ color: 'tomato' }} />
            {openFees ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openFees} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Fee/FeeStructure')}>
                <ListItemText primary="Service Structure" sx={{ color: 'tomato' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Fee/FeeVoucher')}>
                <ListItemText primary="Service Voucher" sx={{ color: 'tomato' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Fee/FeeSubmission')}>
                <ListItemText primary="Service Submission" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Admission */}
          <ListItem button onClick={() => setOpenAdmission(!openAdmission)}>
          <img style={{width:40,marginRight:20}} src={jawan} alt="" />

            {/* <ListItemIcon> */}
              {/* <Inbox /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="ServiceRequest" sx={{ color: 'tomato' }} />
            {openAdmission ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAdmission} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Addmission/AddmissionForm')}>
                <ListItemText primary="ServiceRequest Form" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Exam */}
          <ListItem button onClick={() => setOpenExam(!openExam)}>
          <img style={{width:40,marginRight:20}} src={jawan} alt="" />

            {/* <ListItemIcon> */}
              {/* <Inbox /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Inventory" sx={{ color: 'tomato' }} />
            {openExam ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openExam} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Exam/ExamSchedule')}>
                <ListItemText primary="Inventory Schedule" sx={{ color: 'tomato' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Exam/ExamResult')}>
                <ListItemText primary="Inventory Result" sx={{ color: 'tomato' }} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', color: "tomato" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'tomato', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img style={{ width: 50 }} src={jawan} alt="" />  <Box sx={{ fontFamily: 'cursive', fontSize: 18 }}>Hotel Management System</Box>
          </Typography>
          <IconButton color="inherit" edge="end" sx={{ ml: 'auto' }}>
            <Button style={{ color: 'white', border: 'none' }} onClick={handleLogout}>
              Logout
            </Button>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: { xs: 'none', sm: 'block' } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* Main Content Goes Here */}
        <Outlet />

      </Box>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >

        {drawer}

      </Drawer>
    </Box>
  );
};

export default Dashboard;