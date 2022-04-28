import request from '@/utils/request';

export default {
  getTeacherList(current, size) {
    return request({
      url: `/eduservice/teachersfront/getPageTeachers/${current}/${size}`,
      method: 'get'
    })
  },
  getTeacherAndCourseInfo(teacherId) {
    return request({
      url: `/eduservice/teachersfront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
  }
}
