import { ApipilotRequest } from "../utils/axios";

/**
 * 获取电台详情
 * 
 * 获取电台详情描述
 * 
 * @param {Object} params   
 * @property {String} [params.pk=99406937] - 电台id
 *
 * @returns {Object} returnValue   
 * @returns {Number} returnValue.code  
 * @returns {Object} returnValue.data  
 * @returns {String} returnValue.data.id - 电台ID
 * @returns {String} returnValue.data.title - 电台标题
 * @returns {String} returnValue.data.cover - 电台封面
 * @returns {String} returnValue.data.url - 电台链接
 * @returns {String} returnValue.data.speak - 主播
 * @returns {String} returnValue.data.favnum - 喜欢人数
 * @returns {String} returnValue.data.viewnum - 收听人数
 * @returns {String} returnValue.data.background - 背景图片
 * @returns {Boolean} returnValue.data.is_teacher  
 * @returns {String} returnValue.data.absolute_url  
 * @returns {Array} returnValue.data.url_list  
 * @returns {String} returnValue.data.is_selected  
 * @returns {String} returnValue.data.commentnum  
 * @returns {String} returnValue.data.speak_url  
 * @returns {String} returnValue.data.content  
 * @returns {String} returnValue.data.word_url  
 * @returns {String} returnValue.data.jingxuan_id  
 * @returns {Number} returnValue.data.user_vip  
 * @returns {Number} returnValue.data.is_exchange  
 */
export function getRadioDetail(params?: {
  /**
   * Request Data
   */
  data?: {
  /**
   * @property {String=99406937} - 电台id
   */
  pk?: String;
},
  /**
   * Request Headers
   */
  headers?: {
}
}) {
  return new Promise(async (resolve) => {
    const apipilotRequest: ApipilotRequest = ApipilotRequest.getInstance();
    const newParams = {...(params?.data || {})};
      newParams["pk"] = "99406937";

    const newHeaders = {...(params?.headers || {})};
    
    await apipilotRequest
      .get("https://fm.xinli001.com/broadcast", newParams, {
        headers: newHeaders,
      })
      .then((res) => {
        if (res.status != 200) {
          resolve({
            code: res.status,
            message: res.statusText || "Failed",
          });
        } else {
          resolve({
            code: 200,
            data: res.data,
          });
        }
      })
      .catch((err) => {
        resolve({
          code: 1001,
          message: err.message,
        });
      });
  });
}
