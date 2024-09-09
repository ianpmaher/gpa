import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
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
    width: '20%',
    padding: 5,
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
            <Text style={styles.tableCell}>Class</Text>
            <Text style={styles.tableCell}>Level</Text>
            <Text style={styles.tableCell}>Grade</Text>
            <Text style={styles.tableCell}>Credits</Text>
            <Text style={styles.tableCell}>Grade Points</Text>
            <Text style={styles.tableCell}>Quality Points</Text>
          </View>
          {data.map((course, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{course.CourseYear}</Text>
              <Text style={styles.tableCell}>{course.CourseName}</Text>
              <Text style={styles.tableCell}>{course.Level}</Text>
              <Text style={styles.tableCell}>{course.Grade}</Text>
              <Text style={styles.tableCell}>{course.Credits}</Text>
              <Text style={styles.tableCell}>{course.GradePoints}</Text>
              <Text style={styles.tableCell}>{course.QualityPoints}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

// PDF Viewer Component
const PDFViewerUtil = ({ data, gpa }) => (
  <div style={{ height: '600px', border: '1px solid black', marginTop: '20px' }}>
    <PDFViewer width="100%" height="100%">
      <GPAReport data={data} gpa={gpa} />
    </PDFViewer>
  </div>
);

export default PDFViewerUtil;