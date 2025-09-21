import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Calendar,
  ArrowUpRight,
  Clock,
  FileText,
  GraduationCap,
  MessageSquare,
  CheckCircle
} from "lucide-react";

const AdustInstructorDashboard = ({ courseStats }) => {
  // Sample data for demonstration
  const recentActivity = [
    { id: 1, course: "Introduction to Programming", student: "Ahmed Rahman", action: "submitted assignment", time: "2 hours ago" },
    { id: 2, course: "Data Structures", student: "Fatima Khan", action: "asked a question", time: "5 hours ago" },
    { id: 3, course: "Algorithms", student: "Mohammed Ali", action: "completed quiz", time: "1 day ago" },
    { id: 4, course: "Web Development", student: "Aisha Chowdhury", action: "enrolled in course", time: "2 days ago" },
  ];

  const upcomingEvents = [
    { id: 1, title: "Faculty Meeting", date: "Sep 25, 2023", time: "2:00 PM", location: "VC Conference Room" },
    { id: 2, title: "Midterm Exam Schedule", date: "Oct 10-15, 2023", time: "All Day", location: "Exam Hall A" },
    { id: 3, title: "Curriculum Review", date: "Oct 5, 2023", time: "10:00 AM", location: "Academic Building" },
  ];

  const popularCourses = [
    { id: 1, title: "Data Structures", enrollments: 142, progress: 78 },
    { id: 2, title: "Web Development", enrollments: 125, progress: 65 },
    { id: 3, title: "Algorithms", enrollments: 98, progress: 92 },
    { id: 4, title: "Database Systems", enrollments: 87, progress: 45 },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-800 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-blue-800">Insights </h1>
          </div>
          <p className="text-gray-600">Welcome back, Professor. Here's your teaching overview.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2 border-gray-300">
            <Calendar className="h-4 w-4" />
            <span>Calendar</span>
          </Button>
          <Button className="bg-blue-800 hover:bg-blue-900 flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>New Course</span>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Courses */}
        <Card className="border-blue-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Courses</CardTitle>
            <div className="p-2 bg-blue-100 rounded-full">
              <BookOpen className="h-4 w-4 text-blue-800" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">{courseStats?.courses || 0}</div>
            <p className="text-xs text-gray-500 mt-1">+2 from last semester</p>
          </CardContent>
        </Card>

        {/* Total Enrollments */}
        <Card className="border-blue-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Enrollments</CardTitle>
            <div className="p-2 bg-blue-100 rounded-full">
              <Users className="h-4 w-4 text-blue-800" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">{courseStats?.enrollments || 0}</div>
            <p className="text-xs text-gray-500 mt-1">+15% from last month</p>
          </CardContent>
        </Card>

        {/* Completion Rate */}
        <Card className="border-blue-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Completion Rate</CardTitle>
            <div className="p-2 bg-blue-100 rounded-full">
              <CheckCircle className="h-4 w-4 text-blue-800" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">82%</div>
            <p className="text-xs text-gray-500 mt-1">+5% from last semester</p>
          </CardContent>
        </Card>

        {/* Average Rating */}
        <Card className="border-blue-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Average Rating</CardTitle>
            <div className="p-2 bg-blue-100 rounded-full">
              <BarChart3 className="h-4 w-4 text-blue-800" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">4.7/5</div>
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="shadow-sm">
          <CardHeader className="bg-blue-50 py-3">
            <CardTitle className="flex items-center text-blue-800 text-lg">
              <Clock className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <MessageSquare className="h-4 w-4 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      <span className="text-blue-800">{activity.student}</span> {activity.action} in{" "}
                      <span className="text-blue-800">{activity.course}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-blue-800 hover:text-blue-900 hover:bg-blue-50">
              View All Activity <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="shadow-sm">
          <CardHeader className="bg-blue-50 py-3">
            <CardTitle className="flex items-center text-blue-800 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start p-3 border rounded-lg bg-white">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded mr-3">
                    <Calendar className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-blue-800">{event.title}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {event.date} • {event.time}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-blue-800 hover:text-blue-900 hover:bg-blue-50">
              View Full Calendar <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Popular Courses Section */}
      <Card className="shadow-sm">
        <CardHeader className="bg-blue-50 py-3">
          <CardTitle className="text-blue-800 text-lg">Popular Courses</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-6">
            {popularCourses.map((course) => (
              <div key={course.id}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-blue-800">{course.title}</span>
                  <span className="text-blue-800 font-semibold">{course.enrollments} students</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-400 h-2.5 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Course progress</span>
                  <span>{course.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdustInstructorDashboard;