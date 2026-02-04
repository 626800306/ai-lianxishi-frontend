import request from '../utils/request'

/**
 * 考试相关的API
 */

// 开始考试  // 启动考试功能
export function startExam(examId, studentName) {
  return request({
    url: '/examRecords/startExam',
    method: 'post',
    data: {
      examId,
      studentName
    }
  })
}

// 提交答案  // 提交考试答案
export function submitAnswers(examRecordId, userAnswers) {
  return request({
    url: `/answerRecord/sumbitAnswer`,  // 添加/api前缀
    method: 'post',
    data: {
      examRecordId,
      userAnswers
    }
  })
}

// 触发试卷批阅  // AI自动批阅功能
export function gradeExam(examRecordId) {
  return request({
    url: `/api/exams/${examRecordId}/grade`,  // 添加/api前缀
    method: 'post'
  })
}

// 获取我的考试记录  // 查询考试历史记录
export function getMyExamRecords() {
  return request({
    url: '/api/exams/records',  // 添加/api前缀
    method: 'get'
  })
}

// 获取考试记录详情  // 查看单个考试记录详情
export function getExamRecordById(id) {
  return request({
    url: `/examRecords/getById/${id}`,
    method: 'get'
  })
}
