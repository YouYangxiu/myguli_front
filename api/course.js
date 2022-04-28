import request from '@/utils/request'

export default {
  getFrontCourseList(current, size, courseFrontVo) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${current}/${size}`,
      method: 'post',
      data: courseFrontVo
    })
  },
  //查询所有分类
  getAllSubjects() {
    return request({
      url: '/eduservice/edusubject/getAllSubjects',
      method: 'get'
    })
  },
  //课程详情的方法
  getCourseInfo(courseId){
    return request({
      url:`/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  }
}
