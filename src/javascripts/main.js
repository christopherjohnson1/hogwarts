import navbar from './components/navbar/navbar';
import '../styles/main.scss';
import studentList from './components/studentList/studentList';
import studentData from './helpers/data/studentData';

const init = () => {
  const allStudents = studentData.getStudents();
  navbar.loadNavbar();
  studentList.createStudentList(allStudents);
};

init();
