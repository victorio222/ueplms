import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Settings() {
  const [courses, setCourses] = useState([]); // Store all courses
  const [loadingId, setLoadingId] = useState(null); // Track which button is loading
  const [error, setError] = useState(null); // Capture and display errors

  // Fetch all courses from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses"); // Fetch all courses
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to fetch courses. Please check your network or server.");
      }
    };

    fetchCourses();
  }, []);

  // Function to handle publish/unpublish action
  const togglePublishStatus = async (courseId, currentStatus) => {
    try {
      setLoadingId(courseId); // Set loading state for the specific course
      setError(null);

      // Prepare the new status
      const updatedStatus = !currentStatus;

      // Make the PUT request
      const response = await axios.put(
        `http://localhost:8080/courses/${courseId}/toggle-publish`,
        { published: updatedStatus }, // Sending updated status in request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Update the course list
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course.courseId === courseId
              ? { ...course, published: updatedStatus }
              : course
          )
        );
      } else {
        console.error("Failed to update course status.");
        setError("Failed to update the publish status. Please try again.");
      }
    } catch (error) {
      console.error("Error toggling publish status:", error);
      setError("Network error. Please check your connection or server.");
    } finally {
      setLoadingId(null); // Clear the loading state
    }
  };

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (courses.length === 0) {
    return <p>Loading courses...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.courseId}
            className="border rounded-lg overflow-hidden bg-gray-100 shadow-md"
          >
            {/* Top section with background color */}
            <div
              style={{
                height: "150px",
                backgroundColor: course.backgroundColor || "#6a0dad",
              }}
            ></div>

            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{course.courseName}</h2>
              <p className="text-sm text-gray-600">
                {course.courseDescription}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Course Code:</strong> {course.courseCode}
              </p>
              <button
                className={`mt-4 w-full ${
                  course.published ? "bg-red-500" : "bg-green-500"
                } text-white py-2 rounded ${
                  loadingId === course.courseId ? "opacity-50" : ""
                }`}
                disabled={loadingId === course.courseId}
                onClick={() =>
                  togglePublishStatus(course.courseId, course.published)
                }
              >
                {loadingId === course.courseId
                  ? "Processing..."
                  : course.published
                  ? "Unpublish"
                  : "Publish"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
