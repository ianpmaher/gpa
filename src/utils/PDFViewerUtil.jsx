// PDFViewerUtil.js
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  table: {
    display: 'table',
    width: 'auto',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  tableCell: {
    width: '14%', // Adjusted to fit 7 columns
    padding: 4,
    fontSize: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Create the PDF document structure for viewing
const GPAReport = ({ data, gpa }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>GPA Report</Text>
      <View style={styles.section}>
        <Text style={styles.text}>Student GPA: {gpa.toFixed(2)}</Text>
        <Text style={styles.header}>Courses:</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Year</Text>
            <Text style={styles.tableCell}>Course</Text>
            <Text style={styles.tableCell}>Level</Text>
            <Text style={styles.tableCell}>Grade</Text>
            <Text style={styles.tableCell}>Credits</Text>
            <Text style={styles.tableCell}>Grade Points</Text>
            <Text style={styles.tableCell}>Quality Points</Text>
          </View>
          {data.map((course, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{course.courseYear}</Text>
              <Text style={styles.tableCell}>{course.courseName}</Text>
              <Text style={styles.tableCell}>{course.level}</Text>
              <Text style={styles.tableCell}>{course.grade}</Text>
              <Text style={styles.tableCell}>{course.credits}</Text>
              <Text style={styles.tableCell}>{course.gradePoints}</Text>
              <Text style={styles.tableCell}>{course.qualityPoints}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

// PDF Viewer Component
const PDFViewerUtil = ({ data, gpa, className }) => (
  <div className={`${className} border mt-5 h-[50vh] w-full`}>
    <PDFViewer width="100%" height="100%">
      <GPAReport data={data} gpa={gpa} />
    </PDFViewer>
  </div>
);

export default PDFViewerUtil;